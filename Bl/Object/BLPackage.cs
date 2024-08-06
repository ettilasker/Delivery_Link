using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl.Object
{
    public class BLPackage
    {
        public BLPackage()
        {
            
        }
        public int Id { get; set; }

        public TimeSpan Time { get; set; }

        public string Address { get; set; } = null!;

        public DateTime Data { get; set; }

        public string AddressDestination { get; set; } = null!;

        public virtual BLUser User { get; set; } = null!;

        public int UserId { get;  set; }
    }
}
