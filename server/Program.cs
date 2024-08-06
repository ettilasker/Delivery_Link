using Bl;
using Bl.Api;
using Bl.Object;
using Dal;
using Dal.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// הוספת השירותים השונים
builder.Services.AddScoped<BLManger>();
builder.Services.AddControllers();

// קבלת ה-Connection String מתוך קובץ appsettings.json
var connString = builder.Configuration.GetConnectionString("DeliveryLinkDB");
builder.Services.AddDbContext<LibraryContext>(options => options.UseSqlServer(connString));


builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowAnyOrigin();
        });
});
// בניית האפליקציה
var app = builder.Build();

// שימוש ב-HTTPS אם יש צורך
app.UseHttpsRedirection();

app.UseCors("CORSPolicy");
app.MapControllers();

app.Run();
