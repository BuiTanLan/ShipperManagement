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
    public class OrdersController: ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet()]
        public async Task<OrderShipperDto> GetOrderShipper(int shipperId)
        {
            return await _orderService.GetOrderShipper(shipperId);
        }
        
        [HttpGet("{shipperId:int}")]
        public async Task<IEnumerable<OrderShipperDto>> GetAllOrderShipper(int shipperId)
        {
            return await _orderService.GetAllOrderShipper(shipperId);
        }
        
        [HttpGet("{id}/detail")]
        public async Task<IEnumerable<OrderDetailShipper>> GetOrderDetail(int id)
        {
            return await _orderService.GetOrderDetailShipper(id);
        }
        
        
        [HttpPut("{id:int}")]
        public async Task UpdateOrderStatus(int id, OrderStatusDto dto)
        {
            await _orderService.UpdateOrderStatus(id, dto.Status);
        }
    }
}