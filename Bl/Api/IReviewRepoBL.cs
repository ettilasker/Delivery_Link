using Bl.Object;
namespace Bl.Api;


public interface IReviewRepoBL
{
    List<BLReview> GetAll();
    List<BLReview> GetReview(int UserId);
    BLReview Delete(int reviewId);
    BLReview AddReview(BLReview review);
}
