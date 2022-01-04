using System;

namespace WebApi.Dto.Response
{
    public class ShipperResponseDto
    {
        public int Id { get; set; }
        public int UserID { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
    }
}
