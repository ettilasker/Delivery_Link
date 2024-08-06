using Microsoft.AspNetCore.Mvc;
using Bl;
using Bl.Object;
using Bl.Services;
using Dal.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        ReviewService reviewService;

        public ReviewController(BLManger blmanger)
        {
            reviewService = blmanger.reviewRepo;
        }
        [HttpGet]
        public async Task<ActionResult<List<BLReview>>> GetAll()
        {
            List<BLReview> get = reviewService.GetAll();
            if (get == null)
            {
                return NotFound();
            }
            return get;
        }
        [HttpGet("id/{id}")]
        public async Task<ActionResult<List<BLReview>>> GetReview(int id)
        {
            List<BLReview> review = reviewService.GetReview(id);

            if (review == null)
            {
                return NotFound();
            }
            return review;
        }
        [HttpPost]
        public async Task<ActionResult<BLReview>> AddReview(BLReview review)
        {
            return reviewService.AddReview(review);
        }
      
        [HttpDelete("{id}")]
        public async Task<ActionResult<BLReview>> Delete(int reviewId)
        {
            return reviewService.Delete(reviewId);
        }


    }
}
