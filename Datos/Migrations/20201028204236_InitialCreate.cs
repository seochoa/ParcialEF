using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Persona",
                columns: table => new
                {
                    Cedula = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    Sexo = table.Column<string>(nullable: true),
                    Edad = table.Column<int>(nullable: false),
                    Departamento = table.Column<string>(nullable: true),
                    Ciudad = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persona", x => x.Cedula);
                });

            migrationBuilder.CreateTable(
                name: "Apoyos",
                columns: table => new
                {
                    Idapoyo = table.Column<string>(nullable: false),
                    Tipoapoyo = table.Column<string>(nullable: true),
                    Vrapoyo = table.Column<decimal>(nullable: false),
                    PersonaCedula = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apoyos", x => x.Idapoyo);
                    table.ForeignKey(
                        name: "FK_Apoyos_Persona_PersonaCedula",
                        column: x => x.PersonaCedula,
                        principalTable: "Persona",
                        principalColumn: "Cedula",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Apoyos_PersonaCedula",
                table: "Apoyos",
                column: "PersonaCedula");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Apoyos");

            migrationBuilder.DropTable(
                name: "Persona");
        }
    }
}
