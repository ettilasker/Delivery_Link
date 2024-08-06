using Bl.Api;
using Bl.Services;
using Bl.Object;
using Dal;
using Microsoft.Extensions.DependencyInjection;
using Dal.Api;

namespace Bl
{
    public class BLManger
    {
        public PackageService packageRepo { get; }

        public ReviewService reviewRepo { get; }
        public UserService userRepo { get; }

        public BLManger()
        {
            ServiceCollection service = new();
            service.AddScoped<DalManager>();

            service.AddScoped<IUserRepoBL, UserService>();
            service.AddScoped<IReviewRepoBL, ReviewService>();
            service.AddScoped<IPackageRepoBL, PackageService>();


            ServiceProvider serviceProvider = service.BuildServiceProvider();
            reviewRepo = (ReviewService)serviceProvider.GetService<IReviewRepoBL>();
            packageRepo = (PackageService)serviceProvider.GetService<IPackageRepoBL>();
            userRepo = (UserService)serviceProvider.GetService<IUserRepoBL>();
        }
    }
}
