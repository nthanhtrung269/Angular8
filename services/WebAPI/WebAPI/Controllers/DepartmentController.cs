﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    [Produces("application/json")]
    public class DepartmentController : ControllerBase
    {
        private readonly ILogger<DepartmentController> _logger;

        public DepartmentController(ILogger<DepartmentController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<List<Department>> Get()
        {
            return new List<Department>() 
            { 
                new Department()
                {
                    DepartmentID = 1, 
                    DepartmentName = "IT"
                },
                new Department()
                {
                    DepartmentID = 2,
                    DepartmentName = "Finance"
                }
            };
        }
    }
}
