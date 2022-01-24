using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using WebApi.Dto.Response;
using WebApi.Entities;
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
            var listOrder = await connection.QueryAsync<OrderShipperDto>("get_order_shipper", parameters, null, null, CommandType.StoredProcedure);
            return listOrder.SingleOrDefault();
        }
    }
}