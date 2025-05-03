using WeddingBudgetApp.Api.Models.Budget;

namespace WeddingBudgetApp.Api.Services.Interfaces;

public interface IBudgetService
{
    Task<Budget> GetBudgetAsync(int id);
    Task<IEnumerable<Budget>> GetAllBudgetsAsync();
    Task CreateBudgetAsync(Budget budget);
    Task UpdateBudgetAsync(Budget budget);
    Task DeleteBudgetAsync(int id);
}


