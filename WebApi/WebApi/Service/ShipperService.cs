using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using WebApi.Dto.Request;
using WebApi.Dto.Response;
using WebApi.Entities;
using WebApi.Service.Interface;


namespace WebApi.Service
{
    public class ShipperService : IShipperService
    {
        private readonly string _connectionString;
        public ShipperService(IConfiguration config)
        {
            _connectionString = config.GetValue<string>("ConnectionStrings:DefaultConnection");
        }
        
              
        public async Task<int> CreateShipperAsync(ShipperCreateRequestDto dto)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("user_id", dto.UserId);
            parameters.Add("@id", dbType: DbType.Int32, direction: ParameterDirection.Output);
            await connection.ExecuteAsync("create_shipper", parameters, null, null, CommandType.StoredProcedure);
            var newId = parameters.Get<int>("@id");
            return newId;
        }
        
        public async Task<IEnumerable<ShipperResponseDto>> GetAllShipperAsync()
        {
            await using var connection = new MySqlConnection(_connectionString);
            var listShipper = await connection.QueryAsync<ShipperResponseDto>("get_all_shipper", null, null, null, CommandType.StoredProcedure);
            return listShipper;
        }

        public async Task<ShipperResponseDto> GetShipperByIdAsync(int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("id", id);
            var shipper = await connection.QueryAsync<ShipperResponseDto>("get_shipper", parameters, null, null, CommandType.StoredProcedure);
            return shipper.SingleOrDefault();
        }
        
        public async Task UpdateShipperAsync(ShipperCreateRequestDto dto, int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();

            parameters.Add("user_id", dto.UserId);
            parameters.Add("id", id);
            await connection.ExecuteAsync("update_shipper", parameters, null, null, CommandType.StoredProcedure);
        }
        
        public async Task DeleteShipperAsync(int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();

            parameters.Add("id", id);
            await connection.ExecuteAsync("delete_shipper", parameters, null, null, CommandType.StoredProcedure);
        }
    }
}