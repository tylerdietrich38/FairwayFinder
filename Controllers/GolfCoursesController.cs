using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FairwayFinder.Models;

namespace FairwayFinder.Controllers
{
    // All of these routes will be at the base URL:     /api/GolfCourses
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case GolfCoursesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class GolfCoursesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public GolfCoursesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/GolfCourses
        //
        // Returns a list of all your GolfCourses
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GolfCourse>>> GetGolfCourses(string filter)
        {
            // Uses the database context in `_context` to request all of the GolfCourses, sort
            // them by row id and return them as a JSON array.
            if (filter == null)
            {
                return await _context.GolfCourses.OrderBy(row => row.Id).ToListAsync();
            }
            else
            {
                return await _context.GolfCourses.Where(GolfCourse => GolfCourse.Name.ToLower().Contains(filter.ToLower())).ToListAsync();
            }
        }

        // GET: api/GolfCourses/5
        //
        // Fetches and returns a specific golfCourse by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<GolfCourse>> GetGolfCourse(int id)
        {
            // Find the golfCourse in the database using `FindAsync` to look it up by id
            var golfCourse = await _context.GolfCourses.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (golfCourse == null)
            {
                // Return a `404` response to the client indicating we could not find a golfCourse with this id
                return NotFound();
            }

            //  Return the golfCourse as a JSON object.
            return golfCourse;
        }

        // PUT: api/GolfCourses/5
        //
        // Update an individual golfCourse with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a GolfCourse
        // variable named golfCourse. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our GolfCourse POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGolfCourse(int id, GolfCourse golfCourse)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != golfCourse.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in golfCourse to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from golfCourse
            _context.Entry(golfCourse).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!GolfCourseExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(golfCourse);
        }

        // POST: api/GolfCourses
        //
        // Creates a new golfCourse in the database.
        //
        // The `body` of the request is parsed and then made available to us as a GolfCourse
        // variable named golfCourse. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our GolfCourse POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<GolfCourse>> PostGolfCourse(GolfCourse golfCourse)
        {
            // Indicate to the database context we want to add this new record
            _context.GolfCourses.Add(golfCourse);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetGolfCourse", new { id = golfCourse.Id }, golfCourse);
        }

        // DELETE: api/GolfCourses/5
        //
        // Deletes an individual golfCourse with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGolfCourse(int id)
        {
            // Find this golfCourse by looking for the specific id
            var golfCourse = await _context.GolfCourses.FindAsync(id);
            if (golfCourse == null)
            {
                // There wasn't a golfCourse with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.GolfCourses.Remove(golfCourse);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(golfCourse);
        }

        // Private helper method that looks up an existing golfCourse by the supplied id
        private bool GolfCourseExists(int id)
        {
            return _context.GolfCourses.Any(golfCourse => golfCourse.Id == id);
        }
    }
}
