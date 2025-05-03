namespace WeddingBudgetApp.Api.Models.Budget;
public class Budget
{
    public int Id { get; set; }
    public decimal TotalAmount { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}