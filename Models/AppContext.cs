using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SharedLinksClickCountApp.Models {
    public class AppContext:DbContext {

        public AppContext(DbContextOptions<AppContext> options)
            : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<PostLinkClick> PostLinkClicks { get; set; }
        public DbSet<PostSharingApp> PostSharingApp { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
        }
    
}
}
