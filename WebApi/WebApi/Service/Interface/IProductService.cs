using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Dto.Request;
using WebApi.Dto.Response;
using WebApi.Helpers;

namespace WebApi.Service.Interface
{
    public interface IProductService
    {
        Task<IEnumerable<ProductResponseDto>> GetAllProductAsync();
        Task<ProductResponseDto> GetProductByIdAsync(int id);
        Task<int> CreateProductAsync(ProductCreateRequestDto dto);
        Task<int> UpdateProductAsync(ProductCreateRequestDto dto, int id);
        Task<int> DeleteProductAsync(int id);
        Task<PagedResult<ProductResponseDto>> SearchByAttributes(string keyword, int pageIndex, int pageSize);



    }
}