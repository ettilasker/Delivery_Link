using Dal.Api;
using Dal.Models;
using Microsoft.EntityFrameworkCore;

namespace Dal.implementaion
{
    public class PackageRepo : IPackageRepo
    {
        LibraryContext context = new();
        public List<Package> GetAll()
        {
            var packages = context.Packages.Include(p => p.User).ToList();
            return packages;
        }
        public Package AddPackage(Package package)
        {
            context.Packages.Add(package);
            context.SaveChanges();

            return package;
        }

        public Package Delete(int packageId)
        {
            Package p = context.Packages.Include(p => p.User).FirstOrDefault(x => x.Id == packageId);
            context.Packages.Remove(p);
            context.SaveChanges();

            return p;
        }


        public Package GetPackage(int packageId)
        {
            return context.Packages.Include(p => p.User).FirstOrDefault(x => x.Id == packageId);
        }


        public Package Update(Package package)
        {
            context.Packages.Update(package);
            context.SaveChanges();
            return package;
        }

        public List<Package> GetByAddress( String a, String b)
        {
            
         var list = context.Packages.Include(p => p.User).Where(x => x.Address == a && x.AddressDestination == b);
            return list.ToList();
        }
    }
}
