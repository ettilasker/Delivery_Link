using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal.Api;
using Dal.Models;

namespace Dal.implementaion
{
    public class UsersRepo : IUserRepo
    {
        LibraryContext context = new();
        public User AddUser(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
            return user;
        }
        public User Delete(int id)
        {
            // מחק את כל החבילות הקשורות למשתמש על פי ה- id
            List<Package> packagesToDelete = context.Packages.Where(p => p.UserId == id).ToList();
            context.Packages.RemoveRange(packagesToDelete);
            // מחק את כל תגובות הקשורות למשתמש על פי ה- id
            List<Review> reviewToDelete = context.Reviews.Where(p => p.UserId == id).ToList();
            context.Reviews.RemoveRange(reviewToDelete);


            // מחק את המשתמש עצמו
            User userToDelete = context.Users.FirstOrDefault(u => u.Id == id);
            if (userToDelete != null)
            {
                context.Users.Remove(userToDelete);
                context.SaveChanges();
            }

            return userToDelete;
        }

        public List<User> GetAll()
        {
           return context.Users.ToList();
        }

        public User GetUser(string phoneNumber)
        {
            return context.Users.FirstOrDefault(x => x.PhoneNumber == phoneNumber);
        }

        public List<User> Update(User user)
        {
            context.Users.Update(user);
            context.SaveChanges();
            return context.Users.ToList();
        }
    }
}
