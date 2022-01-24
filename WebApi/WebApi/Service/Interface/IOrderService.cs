using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Dto.Response;

namespace WebApi.Service.Interface
{
    public interface IOrderService
    {
        Task<OrderShipperDto> GetOrderShipper(int orderId);
        Task<IEnumerable<OrderShipperDto>> GetAllOrderShipper();
        Task UpdateOrderStatus(int orderId, int status);
        Task<IEnumerable<OrderDetailShipper>> GetOrderDetailShipper(int orderId);

    }
}