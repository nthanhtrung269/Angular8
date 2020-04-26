using System;

namespace WebAPI.Models
{
  public class Employee
  {
    public int EmployeeID { get; set; }

    public string EmployeeName { get; set; }

    public string Department { get; set; }

    public string MailID { get; set; }

    public DateTime DOJ { get; set; }
  }
}
