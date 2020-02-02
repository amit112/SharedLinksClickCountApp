using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SharedLinksClickCountApp.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace SharedLinksClickCountApp.Controllers {
    [Route("api/[controller]")]
   
    public class SampleDataController : Controller {

        private readonly SharedLinksClickCountApp.Models.AppContext _db;

        public SampleDataController(SharedLinksClickCountApp.Models.AppContext db)
        {
            _db = db;
        }

        [HttpGet("[action]")]
        public List<Post> GetPosts()
        {

            return _db.Posts.ToList();
        }

        

        [HttpGet("[action]")]
        public Post GetPost(int id)
        {

            return _db.Posts.Where(r => r.Id == id).FirstOrDefault();
        }
        [HttpGet("[action]")]
        public List<PostSharingApp> GetPostSharingApps(int id)
        {

            return _db.PostSharingApp.ToList();
        }
        [HttpPost("[action]")]
        public async Task<string> SaveLinkClick( int postId , int sharingAppId)
        {

            _db.PostLinkClicks.Add(new PostLinkClick() { PostId = postId , SharingAppId = sharingAppId });
           await _db.SaveChangesAsync();
            return "success";
        }

        [HttpGet("[action]")]
        public async Task<int> GetLinkClickCount(int postId, int appId)
        {
          return await  _db.PostLinkClicks.Where(r => r.PostId == postId && r.SharingAppId == appId).CountAsync();
        }
    }
}
