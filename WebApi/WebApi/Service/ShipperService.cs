using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using WebApi.Dto.Request;
using WebApi.Dto.Response;
using WebApi.Service.Interface;


namespace WebApi.Service
{
    public class ShipperService : IShipperService
    {
        private readonly string _connectionString;
        private readonly ITokenService _tokenService;
        public ShipperService(IConfiguration config, ITokenService tokenService)
        {
            _connectionString = config.GetValue<string>("ConnectionStrings:DefaultConnection");
            _tokenService = tokenService;
        }
        
              
        public async Task<string> RegisterShipperAsync(ShipperCreateRequestDto dto)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("full_name", dto.FullName);
            parameters.Add("email", dto.Email);
            parameters.Add("password", dto.Password);
            parameters.Add("phone", dto.Phone);
            parameters.Add("address", dto.Address);
            parameters.Add("province", dto.Province);
            parameters.Add("district", dto.District);
            parameters.Add("@id", dbType: DbType.Int32, direction: ParameterDirection.Output);
            await connection.ExecuteAsync("register_shipper", parameters, null, null, CommandType.StoredProcedure);
            var newId = parameters.Get<int>("@id");
            return _tokenService.CreateToken(dto.Email, newId);
        }
        
        public async Task<string> LoginShipperAsync(ShipperLoginRequestDto dto)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("email", dto.Email);
            parameters.Add("password", dto.Password);
            var result = await connection.QueryAsync<int>("login", parameters, null, null, CommandType.StoredProcedure);
            return _tokenService.CreateToken(dto.Email,result.SingleOrDefault());
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
            parameters.Add("shipper_id", id);
            var shipper = await connection.QueryAsync<ShipperResponseDto>("get_shipper", parameters, null, null, CommandType.StoredProcedure);
            return shipper.SingleOrDefault();
        }
        
        public async Task UpdateShipperAsync(ShipperCreateRequestDto dto, int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();

            parameters.Add("full_name", dto.FullName);
            parameters.Add("email", dto.Email);
            parameters.Add("password", dto.Password);
            parameters.Add("phone", dto.Phone);
            parameters.Add("address", dto.Address);
            parameters.Add("province", dto.Province);
            parameters.Add("district", dto.District);
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