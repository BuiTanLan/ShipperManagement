using System;

namespace WebApi.Dto.Response
{
    public class OrderDetailShipper
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime UpdateAt { get; set; }
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string SortDescription { get; set; }
        public int Price { get; set; }
        public int SalePercent { get; set; }
        public int Number { get; set; }
    }
}