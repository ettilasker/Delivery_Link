using Bl;
using Bl.Object;
using Bl.Services;
using Microsoft.AspNetCore.Mvc;



namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        PackageService packageService;

        public PackageController(BLManger blmanger)
        {
            packageService = blmanger.packageRepo;
        }
        [HttpGet]
        public async Task<ActionResult<List<BLPackage>>> GetAll()
        {
            List<BLPackage> get = packageService.GetAll();
            if (get == null)
            {
                return NotFound();
            }
            return get;

        }
        [HttpGet("id/{packageId}")]
        public async Task<ActionResult<BLPackage>> GetPackage(int packageId)
        {
            BLPackage package = packageService.GetPackage(packageId);

            if (package == null)
            {
                return NotFound();
            }
            return package;
        }
        [HttpGet("address/{a}/{b}")]
        public async Task<ActionResult<List<BLPackage>>> GetByAddress(String a, String b)
        {
            List<BLPackage> get = packageService.GetByAddress(a, b);
            if (get == null)
            {
                return NotFound();
            }
            return get;

        }

        [HttpPost]
        public async Task<ActionResult<BLPackage>> AddPackage(BLPackage package)
        {
            return packageService.AddPackage(package);
        }
        [HttpPut]
        public async Task<ActionResult<BLPackage>> Update(BLPackage package)
        {
            return packageService.Update(package);

        }
        [HttpDelete("{packageId}")]
        public async Task<ActionResult<BLPackage>> Delete(int packageId)
        {
            return packageService.Delete(packageId);
        }
    }
}
