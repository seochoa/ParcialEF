using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ApoyoService
    {
        private readonly ApoyoContext _context;
        public ApoyoService(ApoyoContext context){
            _context=context;
        }

        public GuardarApoyoResponse Guardar(Apoyo apoyo){
            try{
                _context.Apoyos.Add(apoyo);
                _context.SaveChanges();
                return new GuardarApoyoResponse(apoyo);

            }
            catch(Exception e){
                return new GuardarApoyoResponse($"ERROR DE LA APLICACION: {e.Message}");
            }
        }

        public List<Apoyo> ConsultarTodos(){
            List<Apoyo> apoyos = _context.Apoyos.ToList();
            return apoyos;
        }



    }

    public class GuardarApoyoResponse 
    {
        public GuardarApoyoResponse(Apoyo apoyo)
        {
            Error = false;
            Apoyo = apoyo;
        }
        public GuardarApoyoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Apoyo Apoyo { get; set; }
    }
}
