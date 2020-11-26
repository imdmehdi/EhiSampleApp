using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EhiSampleApp.Model;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;

namespace EhiSampleApp.Data
{
    public class EhiSampleAppContext : DbContext 
    {
        private static bool _created = false;
        public EhiSampleAppContext (DbContextOptions<EhiSampleAppContext> options)
            : base(options)
        {
            if (!_created)
            {
                _created = true;
                Database.EnsureDeleted();
                Database.EnsureCreated();
            }
        }

        public DbSet<EhiSampleApp.Model.Contact> Contact { get; set; }
    }
    //public interface IEhiSampleAppContext : IDisposable, IAsyncDisposable, IInfrastructure<IServiceProvider>, IDbContextDependencies, IDbSetCache, IDbContextPoolable, IResettableService
    //{
    //}

}
