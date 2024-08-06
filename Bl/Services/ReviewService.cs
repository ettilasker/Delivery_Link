using Bl.Api;
using Bl.Object;
using Dal;
using Dal.Api;
using Dal.implementaion;
using Dal.Models;

namespace Bl.Services
{
    public class ReviewService : IReviewRepoBL
    {
        ReviewRepo reviewRepo;
        public ReviewService(DalManager dalManager)
        {
            this.reviewRepo = dalManager.review;
        }


        public BLReview AddReview(BLReview review)
        {
            Review review1 = new Review();
            review1.Id = review.Id;
            review1.UserId = review.UserId;
            review1.Date = DateTime.Now;
            review1.Comment = review.Comment;
            review1.Grade = review.Grade;
            reviewRepo.AddReview(review1);
            return review;

        }

        public BLReview Delete(int reviewId)
        {
            var review = reviewRepo.Delete(reviewId);
            BLReview review2 = new BLReview();
            review2.Id = review.Id;
            review2.Grade = review.Grade;
            review2.Comment = review.Comment;
            review2.UserId = review.UserId;
            review2.Date = review.Date;

            
            User user = new User();
            user.Id = review.User.Id;
            user.PhoneNumber = review.User.PhoneNumber;
            user.LastName = review.User.LastName;
            user.FirstName = review.User.FirstName;
            user.Email = review.User.Email;

            review2.User = user;
            return review2;
        }

        public List<BLReview> GetAll()
        {
            List<Review> list = reviewRepo.GetAll();
            List<BLReview> result = new List<BLReview>();
            for (int i = 0; i < list.Count; i++)
            {
                BLReview addReview = new BLReview();
                addReview.Id = list[i].Id;
                addReview.UserId = list[i].UserId;
                addReview.Date = list[i].Date;
                addReview.Comment = list[i].Comment;
                addReview.Grade = list[i].Grade;

               
               User user = new User();
                user.Id = list[i].User.Id;
                user.PhoneNumber = list[i].User.PhoneNumber;
                user.LastName = list[i].User.LastName;
                user.FirstName = list[i].User.FirstName;
                user.Email = list[i].User.Email;

                addReview.User = user;
                result.Add(addReview);
            }
            return result;
        }


        public List<BLReview> GetReview(int UserId)
        {
            List<Review> list = reviewRepo.GetReview(UserId);
            List<BLReview> result = new List<BLReview>();
            for (int i = 0; i < list.Count; i++)
            {
                BLReview addReview = new BLReview();
                addReview.Id = list[i].Id;
                addReview.UserId = list[i].UserId;
                addReview.Comment = list[i].Comment;
                addReview.Grade = list[i].Grade;
                result.Add(addReview);
            }
            return result;
        }
    }
}
