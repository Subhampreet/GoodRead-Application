using System;
using System.Collections.Generic;

namespace Bookstore.Core
{
    public class BookServices : IBookServices
    {
        public List<Book> GetBooks()
        {
            return new List<Book>
            {
                new Book
                {
                    Name = "Harry Potter",
                    Price = 12.99
                }
            };
        }
    }
}
