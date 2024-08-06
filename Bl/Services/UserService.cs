using Bl.Api;
using Bl.Object;
using Dal;
using Dal.implementaion;
using Dal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl.Services
{
    public class UserService : IUserRepoBL
    {
        UsersRepo usersRepo;
        public UserService(DalManager dalmeneger)
        {
            this.usersRepo = dalmeneger.users;
        }
        public BLUser AddUser(BLUser user)
        {
            User userToAdd = new User();

            userToAdd.Id = user.Id;
            userToAdd.PhoneNumber = user.PhoneNumber;
            userToAdd.FirstName = user.FirstName;
            userToAdd.LastName = user.LastName;
            userToAdd.Email = user.Email;

            usersRepo.AddUser(userToAdd);

            return user;
        }

        public BLUser Delete(int id)
        {
            var user = usersRepo.Delete(id);
            BLUser user2 = new BLUser();
            user2.Id = user.Id;
            user2.PhoneNumber = user.PhoneNumber;
            user2.FirstName = user.FirstName;
            user2.LastName = user.LastName;
            user2.Email = user.Email;
            return user2;
        }

        public List<BLUser> GetAll()
        {
                List<User> list = usersRepo.GetAll();
                List<BLUser> result = new List<BLUser>();
                for (int i = 0; i < list.Count; i++)
                {
                BLUser usertoadd = new BLUser();
                usertoadd.Id = list[i].Id;
                usertoadd.PhoneNumber = list[i].PhoneNumber;
                usertoadd.FirstName = list[i].FirstName;
                usertoadd.LastName = list[i].LastName;
                usertoadd.Email = list[i].Email;
                result.Add(usertoadd);
                }
                return result;
            }

        public BLUser GetUser(string phoneNumber)
        {
           var user = usersRepo.GetUser(phoneNumber);
            BLUser user2 = new BLUser();
            user2.Id = user.Id;
            user2.PhoneNumber = phoneNumber;
            user2.FirstName = user.FirstName;
            user2.LastName = user.LastName;
            user2.Email = user.Email;
            return user2;
    }

        public BLUser Update(BLUser user11)
        {
            User result = new User();
            result.Id = user11.Id;
            result.PhoneNumber = user11.PhoneNumber;
            result.FirstName = user11.FirstName;
            result.LastName = user11.LastName;
            result.Email = user11.Email;
            usersRepo.Update(result);
            return user11;
        }
    }
}
