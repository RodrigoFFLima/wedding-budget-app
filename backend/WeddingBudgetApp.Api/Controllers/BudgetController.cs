using Microsoft.AspNetCore.Mvc;
using WeddingBudgetApp.Api.Services.Interfaces;

namespace WeddingBudgetApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetController : ControllerBase
    {
        private readonly IBudgetService _budgetService;

        public BudgetController(IBudgetService budgetService)
        {
            _budgetService = budgetService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBudget(int id)
        {
            var budget = await _budgetService.GetBudgetAsync(id);
            if (budget == null)
            {
                return NotFound();
            }
            return Ok(budget);
        }
    }
}
