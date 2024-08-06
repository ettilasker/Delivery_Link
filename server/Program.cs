using Bl;
using Bl.Api;
using Bl.Object;
using Dal;
using Dal.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ����� �������� ������
builder.Services.AddScoped<BLManger>();
builder.Services.AddControllers();

// ���� �-Connection String ���� ���� appsettings.json
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
// ����� ���������
var app = builder.Build();

// ����� �-HTTPS �� �� ����
app.UseHttpsRedirection();

app.UseCors("CORSPolicy");
app.MapControllers();

app.Run();
