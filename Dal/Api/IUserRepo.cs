using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Api
{
    public interface IUserRepo
    {

        List <User> GetAll();
        User GetUser(string phoneNumber);
        List<User> Update(User user);
        User Delete(int id);
        User AddUser(User user);
    }
}
