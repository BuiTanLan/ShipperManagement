﻿namespace WebApi.Dto.Request
{
    public class ShipperCreateRequestDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        // public string District { get; set; }
        // public string Province { get; set; }
       
    }
}
