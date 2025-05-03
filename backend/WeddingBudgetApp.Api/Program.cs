using Microsoft.EntityFrameworkCore;
using WeddingBudgetApp.Api.Data;
using WeddingBudgetApp.Api.Services.Implementations;

var builder = WebApplication.CreateBuilder(args);

// Configuração do DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=weddingbudget.db"));

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "_myAllowSpecificOrigins",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Registro dos Services
builder.Services.AddScoped<IBudgetService, BudgetService>();
builder.Services.AddScoped<IExpenseService, ExpenseService>();
builder.Services.AddScoped<IGuestService, GuestService>();
builder.Services.AddScoped<IVendorService, VendorService>();

// Registro do OpenAPI
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("_myAllowSpecificOrigins");

// Mapear os Controllers
app.MapControllers();

app.Run();
