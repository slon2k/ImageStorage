using api.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DbContexts
{
    public class ImageStorageContext : DbContext
    {
        public ImageStorageContext(DbContextOptions<ImageStorageContext> options) : base(options)
        {
        }

        public DbSet<Image> Images { get; set; }
    }
}
