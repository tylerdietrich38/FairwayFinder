using Microsoft.EntityFrameworkCore.Migrations;

namespace FairwayFinder.Migrations
{
    public partial class CreateGolfCourse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Telephone",
                table: "GolfCourses",
                newName: "Website");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Website",
                table: "GolfCourses",
                newName: "Telephone");
        }
    }
}
