using Bookstore.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Webapi.Controllers
{
    [Route("books")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookServices _bookServices;
        public BooksController(IBookServices bookServices)
        {
            _bookServices = bookServices;
        }
        [HttpGet]
        [Route("getbooks/")]
        public IActionResult GetBooks()
        {
            return Ok(_bookServices.GetBooks());
        }
    }
}
