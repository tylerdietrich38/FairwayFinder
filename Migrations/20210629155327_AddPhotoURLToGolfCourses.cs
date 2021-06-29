using Microsoft.EntityFrameworkCore.Migrations;

namespace FairwayFinder.Migrations
{
    public partial class AddPhotoURLToGolfCourses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "GolfCourses",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "GolfCourses");
        }
    }
}
