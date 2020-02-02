using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SharedLinksClickCountApp.Models {
    public class PostLinkClick {
        public PostLinkClick()
        {
            DateClicked = DateTime.UtcNow;
        }
        [Key]
        public int Id { get; set; }
        [ForeignKey("Post")]
        public int PostId { get; set; }
        [ForeignKey("PostSharingApp")]
        public int SharingAppId { get; set; }
        public DateTime DateClicked { get; set; }
        public virtual Post Post { get;set;}
        public virtual PostSharingApp PostSharingApp { get; set; }

    }
}
