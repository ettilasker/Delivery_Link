using Bl.Api;
using Bl.Object;
using Dal;
using Dal.implementaion;
using Dal.Models;

namespace Bl.Services
{
    public class PackageService : IPackageRepoBL
    {

        PackageRepo packageRepo;

        public PackageService(DalManager dalmeneger)
        {
            this.packageRepo = dalmeneger.packages;
        }


        public BLPackage AddPackage(BLPackage package)
        {
            Package package1 = new Package();

            package1.Address = package.Address;
            package1.AddressDestination = package.AddressDestination;
            package1.Data = package.Data;
            package1.Id = package.Id;
            package1.Time = package.Time;
            package1.UserId = package.User.Id;
            packageRepo.AddPackage(package1);
            return package;
        }

        public BLPackage Delete(int packageID)
        {
            var package = packageRepo.Delete(packageID);
            BLPackage package2 = new BLPackage();
            package2.Id = package.Id;
            package2.Address = package.Address;
            package2.Time = package.Time;
            package2.AddressDestination = package.AddressDestination;
            package2.Data = package.Data;
            package2.UserId = package.User.Id;

            BLUser user = new BLUser();
            user.Id = package.User.Id;
            user.PhoneNumber = package.User.PhoneNumber;
            user.LastName = package.User.LastName;
            user.FirstName = package.User.FirstName;
            user.Email = package.User.Email;
            package2.User = user;

            return package2;
        }

        public List<BLPackage> GetAll()
        {
            List<Package> list = packageRepo.GetAll();
            List<BLPackage> result = new List<BLPackage>();
            for (int i = 0; i < list.Count; i++)
            {
                BLPackage addPackage = new BLPackage();
                addPackage.Id = list[i].Id;
                addPackage.Address = list[i].Address;
                addPackage.Time = list[i].Time;
                addPackage.Data = list[i].Data;
                addPackage.AddressDestination = list[i].AddressDestination;
                BLUser user = new BLUser();
                user.Id = list[i].User.Id;
                user.PhoneNumber = list[i].User.PhoneNumber;
                user.LastName = list[i].User.LastName;
                user.FirstName = list[i].User.FirstName;
                user.Email = list[i].User.Email;
                addPackage.User = user;
                result.Add(addPackage);
            }
            return result;
        }

        public List<BLPackage> GetByAddress(string a, string b)
        {
            List<Package> list = packageRepo.GetByAddress(a, b);
            List<BLPackage> result = new List<BLPackage>();
            for (int i = 0; i < list.Count; i++)
            {
                BLPackage addPackage = new BLPackage();
                addPackage.Id = list[i].Id;
                addPackage.Address = list[i].Address;
                addPackage.Time = list[i].Time;
                addPackage.Data = list[i].Data;
                addPackage.AddressDestination = list[i].AddressDestination;
                BLUser user = new BLUser();
                user.Id = list[i].User.Id;
                user.PhoneNumber = list[i].User.PhoneNumber;
                user.LastName = list[i].User.LastName;
                user.FirstName = list[i].User.FirstName;
                user.Email = list[i].User.Email;
                addPackage.User = user;
                result.Add(addPackage);
            }
            return result;
        }

        public BLPackage GetPackage(int packageId)
        {
            Package packageEntity = packageRepo.GetPackage(packageId);

            if (packageEntity == null)
            {
                throw new KeyNotFoundException($"Package with Id {packageId} not found.");
            }

            BLPackage package = new BLPackage
            {
                Id = packageEntity.Id,
                Address = packageEntity.Address,
                Time = packageEntity.Time,
                Data = packageEntity.Data,
                AddressDestination = packageEntity.AddressDestination,
                User = new BLUser
                {
                    Id = packageEntity.User.Id,
                    PhoneNumber = packageEntity.User.PhoneNumber,
                    LastName = packageEntity.User.LastName,
                    FirstName = packageEntity.User.FirstName,
                    Email = packageEntity.User.Email
                }
            };

            return package;
        }



        public BLPackage Update(BLPackage package)
        {
           
            Package package2 = new Package();
            package2.Id = package.Id;
            package2.Address = package.Address;
            package2.Time = package.Time;
            package2.AddressDestination = package.AddressDestination;
            package2.Data = package.Data;

            User user = new User();
            user.Id = package.User.Id;
            user.PhoneNumber = package.User.PhoneNumber;
            user.LastName = package.User.LastName;
            user.FirstName = package.User.FirstName;
            user.Email = package.User.Email;

            package2.User = user;

            packageRepo.Update(package2);

            return package;
        }
    }
}
