using System;

namespace WebApi.Dto.Response
{
    public class OrderShipperDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int Status { get; set; }
        public string DetailAddress { get; set; }
        public string District { get; set; }
        public string Province { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
        // public string Fullname { get; set; }
        // public string Phone { get; set; }
        // public string AvatarUrl { get; set; }
        // public string StoreName { get; set; }
        // public string StoreAddress { get; set; }
        // public int PaymentType { get; set; }
        // public int PaymentAmount { get; set; }
    }
}