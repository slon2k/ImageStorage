using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    public class Image
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ImageName { get; set; }
        public string Type { get; set; }
        public byte[] Data { get; set; }
    }
}
