using Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Api
{
    public interface IReviewRepo
    {
        List<Review> GetAll();
        List<Review> GetReview(int UserId);
        Review Delete(int reviewId);
        Review AddReview(Review review);
    }
}
