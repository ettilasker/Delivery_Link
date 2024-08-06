using Bl.Object;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl.Api
{
    public interface IPackageRepoBL
    {
        List<BLPackage> GetAll();
       BLPackage GetPackage(int Id);
        BLPackage Update(BLPackage Package);
        BLPackage Delete(int packageId);
        BLPackage AddPackage(BLPackage Package);
        List<BLPackage> GetByAddress(String a, String b);
    }
}
