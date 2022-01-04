using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Dto.Request;
using WebApi.Dto.Response;

namespace WebApi.Service.Interface
{
    public interface IShipperService
    {
        Task<IEnumerable<ShipperResponseDto>> GetAllShipperAsync();
        Task<ShipperResponseDto> GetShipperByIdAsync(int id);
        Task<int> CreateShipperAsync(ShipperCreateRequestDto dto);
        Task UpdateShipperAsync(ShipperCreateRequestDto dto, int id);
        Task DeleteShipperAsync(int id);
    }
}
