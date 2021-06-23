using Microsoft.EntityFrameworkCore.Migrations;

namespace FairwayFinder.Migrations
{
    public partial class AddLatitudeAndLongitudeToGolfCourse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "GolfCourses",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "GolfCourses",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "GolfCourses");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "GolfCourses");
        }
    }
}
