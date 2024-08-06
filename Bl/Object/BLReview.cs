using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl.Object
{
    public class BLReview
    {
        public BLReview()
        {
            
        }
        public int Id { get; set; }

        public int UserId { get; set; }

        public int Grade { get; set; }

        public string? Comment { get; set; }

        public DateTime Date { get; set; }

        public virtual User User { get; set; } = null!;
    }
}
