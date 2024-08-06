using Dal.Api;
using Dal.implementaion;
using Dal.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Dal;
public class DalManager
{
    

    public UsersRepo users { get; }
    public ReviewRepo review { get; }
    public PackageRepo packages { get; }

    public DalManager()
    {
      
        ServiceCollection services = new();
     
        services.AddDbContext<LibraryContext>();
        services.AddScoped<IUserRepo, UsersRepo>();
        services.AddScoped<IReviewRepo, ReviewRepo>();
        services.AddScoped<IPackageRepo, PackageRepo>();

        ServiceProvider serviceProvider = services.BuildServiceProvider();

        users = (UsersRepo)serviceProvider.GetRequiredService<IUserRepo>();
        review = (ReviewRepo)serviceProvider.GetRequiredService<IReviewRepo>();
        packages = (PackageRepo)serviceProvider.GetRequiredService<IPackageRepo>();

    }

}
