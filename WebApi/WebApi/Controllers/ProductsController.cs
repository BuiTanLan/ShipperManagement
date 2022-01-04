using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dto.Request;
using WebApi.Dto.Response;
using WebApi.Service.Interface;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IEnumerable<ProductResponseDto>> GetAllProductAsync()
        {
            return await _productService.GetAllProductAsync();
        }
        
        [HttpGet("id")]
        public async Task<ProductResponseDto> GetProductByIdAsync([FromQuery] ProductRequestDto dto)
        {
            return await _productService.GetProductByIdAsync(dto.Id);
        }


        [HttpPost]
        public async Task<int> CreateProductAsync(ProductCreateRequestDto dto)
        {
            var newId = await _productService.CreateProductAsync(dto);
            return newId;
        }
        
        
        [HttpPut("id")]
        public async Task<IActionResult> UpdateProductAsync(ProductCreateRequestDto dto,int id)
        {
            var result = await _productService.UpdateProductAsync(dto, id);
            return result > 0 ? Ok() : BadRequest();
        }
        
        
        [HttpDelete("id")]
        public async Task<IActionResult> DeleteProductAsync(int id)
        {
            var result = await _productService.DeleteProductAsync(id);
            return result > 0 ? Ok() : BadRequest();
        }
        
        
    }
}