using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Dto.Request;
using WebApi.Entities;

namespace WebApi.Service.Interface
{
    public interface ICategoryService
    {
        Task<int> CreateCategoryAsync(CategoryCreateDto dto);
        Task<IEnumerable<Category>> GetAllCategoryAsync();
        Task<Category> GetCategoryByIdAsync(int id);
        Task DeleteCategoryAsync(int id);
        Task UpdateCategoryAsync(CategoryCreateDto dto, int id);
    }
}