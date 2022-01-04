using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dto.Request;
using WebApi.Entities;
using WebApi.Service.Interface;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController: ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost]
        public async Task<int> CreateCategory([FromBody] CategoryCreateDto dto)
        {
            var result = await _categoryService.CreateCategoryAsync(dto);
            return result;

        }
        
        [HttpGet]
        public async Task<IEnumerable<Category>> GetAllCategoryAsync()
        {
            return await _categoryService.GetAllCategoryAsync();
        }
        
        [HttpGet("id")]
        public async Task<Category> GetCategoryByIdAsync(int id)
        {
            return await _categoryService.GetCategoryByIdAsync(id);
        }
        
        
        
        [HttpPut("id")]
        public async Task<IActionResult> UpdateCategoryAsync(CategoryCreateDto dto, int id)
        {
            await _categoryService.UpdateCategoryAsync(dto, id);
            return Ok();
        }
        
        [HttpDelete("id")]
        public async Task<int> DeleteCategoryAsync(int id)
        {
            await _categoryService.DeleteCategoryAsync(id);
            return id;
        }
    }
}