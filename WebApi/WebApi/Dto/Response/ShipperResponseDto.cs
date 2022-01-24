using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using WebApi.Enums;

namespace WebApi.Dto.Response
{
    public class ShipperResponseDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Birthday { get; set; }
        public string Address { get; set; }
        public string AvatarUrl { get; set; }
        public string Role { get; set; }
        public string District { get; set; }
        public string Province { get; set; }

    }
}
