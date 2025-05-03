namespace WeddingBudgetApp.Api.Models.Guest;

public class Guest
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public bool Confirmed { get; set; }
    public string SpecialRequest { get; set; } = string.Empty;
}
