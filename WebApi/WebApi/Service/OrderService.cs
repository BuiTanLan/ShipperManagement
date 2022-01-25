using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using WebApi.Dto.Response;
using WebApi.Service.Interface;

namespace WebApi.Service
{
    public class OrderService: IOrderService
    {
        private readonly string _connectionString;
        public OrderService(IConfiguration config)
        {
            _connectionString = config.GetValue<string>("ConnectionStrings:DefaultConnection");
        }

        public async Task<OrderShipperDto> GetOrderShipper(int orderId)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("order_id", orderId);
            var order = await connection.QueryAsync<OrderShipperDto>("get_order_home_shipper", parameters, null, null, CommandType.StoredProcedure);
            return order.SingleOrDefault();
        }
        
        public async Task<IEnumerable<OrderShipperDto>> GetAllOrderShipper(int shipperId)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("shipper_id", shipperId);
            var listOrder = await connection.QueryAsync<OrderShipperDto>("get_order_home_shipper", parameters, null, null, CommandType.StoredProcedure);
            return listOrder;
        }

        public async Task UpdateOrderStatus(int orderId, int status)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("order_id", orderId);
            parameters.Add("status", status);
            await connection.ExecuteAsync("update_order_status", parameters, null, null, CommandType.StoredProcedure);
        }
        
        public async Task<IEnumerable<OrderDetailShipper>> GetOrderDetailShipper(int orderId)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("order_id", orderId);
            var order = await connection.QueryAsync<OrderDetailShipper>("get_order_detail_shipper", parameters, null, null, CommandType.StoredProcedure);
            return order;
        }
    }
}