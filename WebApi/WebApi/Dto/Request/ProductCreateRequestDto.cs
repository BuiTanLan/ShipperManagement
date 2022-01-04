namespace WebApi.Dto.Request
{
    public class ProductCreateRequestDto
    {
        public string Name { get; set; }
        public int StoreId { get; set; }
        public int CategoryId { get; set; }
        public string UrlImage { get; set; }
        public string ShortDescription { get; set; }
        public string FullDescription { get; set; }
        public int Price { get; set; }
        public int SalePercent { get; set; }
        public int Number { get; set; }
        public int NumberSold { get; set; }
    }
}