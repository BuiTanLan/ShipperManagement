using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Dto.Response;

namespace WebApi.Service.Interface
{
    public interface IOrderService
    {
        Task<OrderShipperDto> GetOrderShipper(int orderId);

    }
}