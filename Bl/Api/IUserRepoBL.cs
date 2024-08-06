using Bl.Object;

namespace Bl.Api;

public interface IUserRepoBL
{
    List<BLUser> GetAll();
    BLUser GetUser(string phoneNumber);
    BLUser Update(BLUser user);
    BLUser Delete(int id);
    BLUser AddUser(BLUser user);
}
