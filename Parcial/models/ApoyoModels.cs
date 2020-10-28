using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parcial.models
{
    public class ApoyoInputModel
    {
        public string Idapoyo {get;set;}
        public string Tipoapoyo {get; set;}
        public decimal Vrapoyo {get; set;}
        public Persona Persona {get; set;}
    }

    public class ApoyoViewModel : ApoyoInputModel
    {
        public ApoyoViewModel()
        {

        }
        public ApoyoViewModel(Apoyo apoyo)
        {
            Idapoyo = apoyo.Idapoyo;
            Persona = apoyo.Persona;
            Tipoapoyo = apoyo.Tipoapoyo;
            Vrapoyo = apoyo.Vrapoyo;
        }
        
    }
}