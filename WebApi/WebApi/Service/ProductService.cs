using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using WebApi.Dto.Request;
using WebApi.Dto.Response;
using WebApi.Helpers;
using WebApi.Service.Interface;

namespace WebApi.Service
{
    public class ProductService : IProductService
    {
        private readonly string _connectionString;
        public ProductService(IConfiguration config)
        {
            _connectionString = config.GetValue<string>("ConnectionStrings:DefaultConnection");
        }
        public async Task<IEnumerable<ProductResponseDto>> GetAllProductAsync()
        {
            await using var connection = new MySqlConnection(_connectionString);
            var result = await connection.QueryAsync<ProductResponseDto>("get_all_product", null, null, null, CommandType.StoredProcedure);
            return result;
        }

        public async Task<ProductResponseDto> GetProductByIdAsync(int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("id", id);
            var result = await connection.QueryAsync<ProductResponseDto>("get_product", parameters, null, null, CommandType.StoredProcedure);
            return result.Single();
        }


        public async Task<int> CreateProductAsync(ProductCreateRequestDto dto)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("store_id", dto.StoreId);
            // add more column

            await connection.ExecuteAsync("Create_Product", parameters, null, null, CommandType.StoredProcedure);

            var newId = parameters.Get<int>("@id");
            return newId;
        }


        public async Task<int> UpdateProductAsync(ProductCreateRequestDto dto, int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("id", id);
            parameters.Add("store_id", dto.StoreId);
            // add more column


            var result = await connection.ExecuteAsync("update_product", parameters, null, null, CommandType.StoredProcedure);
            return result;
        }
        
        public async Task<int> DeleteProductAsync(int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("id", id);
            var result = await connection.ExecuteAsync("delete_product", parameters, null, null, CommandType.StoredProcedure);
            return result;
        }
        
        public async Task<PagedResult<ProductResponseDto>> SearchByAttributes(string keyword, int pageIndex, int pageSize)
        {
            await using var conn = new MySqlConnection(_connectionString);

            var parameters = new DynamicParameters();
            parameters.Add("@keyword", keyword);
            parameters.Add("@pageIndex", pageIndex);
            parameters.Add("@pageSize", pageSize);

            parameters.Add("@totalRow", dbType: DbType.Int32, direction: ParameterDirection.Output);

            var result = await conn.QueryAsync<ProductResponseDto>("Search_Product_By_Attributes",
                parameters, null, null, CommandType.StoredProcedure);

            var totalRow = parameters.Get<int>("@totalRow");

            var pagedResult = new PagedResult<ProductResponseDto>
            {
                Items = result.ToList(),
                TotalRow = totalRow,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            return pagedResult;
        }
    }
}