using Microsoft.EntityFrameworkCore;
using WeddingBudgetApp.Api.Models.Budget;
using WeddingBudgetApp.Api.Models.Expense;
using WeddingBudgetApp.Api.Models.Guest;
using WeddingBudgetApp.Api.Models.Vendor;

namespace WeddingBudgetApp.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Budget> Budgets => Set<Budget>();
    public DbSet<Expense> Expenses => Set<Expense>();
    public DbSet<Guest> Guests => Set<Guest>();
    public DbSet<Vendor> Vendors => Set<Vendor>();
}
