using System;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class Persona
    {
        [Key]
        public string Cedula {get; set;}
        public string Nombre {get; set;}
        public string Apellido {get; set;}
        public string Sexo {get; set;}
        public int Edad {get; set;}
        public string Departamento {get; set;}
        public string Ciudad {get; set;}
        

    }
}
