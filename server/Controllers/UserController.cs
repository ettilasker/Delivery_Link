using Bl;
using Bl.Api;
using Bl.Object;
using Bl.Services;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserService userService;
        public UserController(BLManger blmanger) {
            userService = blmanger.userRepo;
        }
        [HttpGet("phone/{phoneNumber}")]
        public async Task<ActionResult<BLUser>> GetUser(string phoneNumber)
        {
            var user = userService.GetUser(phoneNumber);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }
        [HttpGet]
        public async Task<ActionResult<List<BLUser>>> GetAll()
        {
            List<BLUser> get = userService.GetAll();
            if (get == null)
            {
                return NotFound();
            }
            return get;
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<BLUser>> Delete(int id)
        {
            BLUser d = userService.Delete(id);
            if (d == null)
            {
                return NotFound();
            }
            return d;
        }
        [HttpPost]
        public async Task<ActionResult<BLUser>> AddUser(BLUser user)
        {

            return userService.AddUser(user);
        }
        [HttpPut]
        public async Task<ActionResult<BLUser>> Update(BLUser user)
        {
            return userService.Update(user);
        }
    }
}