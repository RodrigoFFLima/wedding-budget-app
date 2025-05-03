using Microsoft.EntityFrameworkCore;
using WeddingBudgetApp.Api.Data;
using WeddingBudgetApp.Api.Models.Budget;
using WeddingBudgetApp.Api.Services.Interfaces;

namespace WeddingBudgetApp.Api.Services.Implementations;

public class BudgetService : IBudgetService
{
    private readonly AppDbContext _context;

    public BudgetService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Budget> GetBudgetAsync(int id)
    {
        return await _context.Budgets.FindAsync(id);
    }

    public async Task<IEnumerable<Budget>> GetAllBudgetsAsync()
    {
        return await _context.Budgets.ToListAsync();
    }

    public async Task CreateBudgetAsync(Budget budget)
    {
        _context.Budgets.Add(budget);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateBudgetAsync(Budget budget)
    {
        _context.Budgets.Update(budget);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteBudgetAsync(int id)
    {
        var budget = await _context.Budgets.FindAsync(id);
        if (budget != null)
        {
            _context.Budgets.Remove(budget);
            await _context.SaveChangesAsync();
        }
    }
}
