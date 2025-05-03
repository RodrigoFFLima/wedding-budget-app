namespace WeddingBudgetApp.Api.Models.Vendor;

public class Vendor
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Contact { get; set; } = string.Empty;
    public decimal Price { get; set; }
}