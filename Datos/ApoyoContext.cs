using System;
using Entidad;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class ApoyoContext : DbContext
    {
        public ApoyoContext (DbContextOptions options):base(options)
        {
        }
        public DbSet<Apoyo> Apoyos {get;set;}
        
        
    }
}