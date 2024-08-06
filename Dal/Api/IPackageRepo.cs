using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Api
{
    public interface IPackageRepo
    {
        List<Package> GetAll();
        Package GetPackage(int UserId);
        Package Update(Package package);
        Package Delete(int packageId);
        Package AddPackage(Package package);
        List<Package> GetByAddress(String a, String b);
    }
}
