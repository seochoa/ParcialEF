using System;
using System.ComponentModel.DataAnnotations;
namespace Entidad
{
    public class Apoyo
    {
        [Key]
        public string Idapoyo {get;set;}
        public string Tipoapoyo {get; set;}
        public decimal Vrapoyo {get; set;}
        public Persona Persona {get; set;}
    }
}
