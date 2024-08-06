using Dal.Api;
using Dal.Models;
using Microsoft.EntityFrameworkCore;

namespace Dal.implementaion
{
    public class ReviewRepo : IReviewRepo
    {
        LibraryContext context = new();

        public Review AddReview(Review review)
        {
            context.Reviews.Add(review);
            context.SaveChanges();
            return review;
        }

        public Review Delete(int reviewId)
        {
            Review r = context.Reviews.FirstOrDefault(x => x.Id == reviewId);
            context.Reviews.Remove(r);
            context.SaveChanges();

            return r;
        }

        public List<Review> GetAll()
        {
            var reviews = context.Reviews.Include(p => p.User).ToList();
            return reviews;
        }

        public List<Review> GetReview(int UserId)
        {
            return (List<Review>)context.Reviews.Where(x => x.UserId == UserId);
        }
    }
}
