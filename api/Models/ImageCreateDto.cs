using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class ImageCreateDto
    {
        public string Title { get; set; }
        public IFormFile File { get; set; }
    }
}
