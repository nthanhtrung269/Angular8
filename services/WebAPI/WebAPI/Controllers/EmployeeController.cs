using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using WebAPI.Models;

namespace WebAPI.Controllers
{
  [ApiController]
  [Route("/api/[controller]")]
  [Produces("application/json")]
  public class EmployeeController : ControllerBase
  {
    private readonly ILogger<EmployeeController> _logger;

    public EmployeeController(ILogger<EmployeeController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public ActionResult<List<Employee>> Get()
    {
      return new List<Employee>()
            {
                new Employee()
                {
                    EmployeeID = 1,
                    EmployeeName = "Employee01",
                    Department = "IT"
                },
                new Employee()
                {
                    EmployeeID = 2,
                    EmployeeName = "Employee02",
                    Department = "IT"
                },
                new Employee()
                {
                    EmployeeID = 3,
                    EmployeeName = "Employee03",
                    Department = "Finance"
                },
                new Employee()
                {
                    EmployeeID = 4,
                    EmployeeName = "Employee04",
                    Department = "Accounting"
                },
                new Employee()
                {
                    EmployeeID = 5,
                    EmployeeName = "Employee05",
                    Department = "Accounting"
                }
            };
    }

    [HttpPost]
    public ActionResult<string> Post(Employee Employee)
    {
      return $"Add Employee {Employee.EmployeeName} successfully";
    }

    [HttpPut]
    public ActionResult<string> Put(Employee Employee)
    {
      return $"Update Employee {Employee.EmployeeName} successfully";
    }

    [HttpDelete("{id}")]
    public ActionResult<string> Delete(string deparmentId)
    {
      return $"Delete EmployeeId {deparmentId} successfully";
    }
  }
}
