using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using WebApi.Dto.Request;
using WebApi.Entities;
using WebApi.Service.Interface;

namespace WebApi.Service
{
    public class CategoryService: ICategoryService
    {
        private readonly string _connectionString;
        public CategoryService(IConfiguration config)
        {
            _connectionString = config.GetValue<string>("ConnectionStrings:DefaultConnection");
        }

        public async Task<int> CreateCategoryAsync(CategoryCreateDto dto)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("name", dto.Name);
            parameters.Add("@id", dbType: DbType.Int32, direction: ParameterDirection.Output);
            await connection.ExecuteAsync("create_category", parameters, null, null, CommandType.StoredProcedure);
            var newId = parameters.Get<int>("@id");
            return newId;
        }
        
        public async Task<IEnumerable<Category>> GetAllCategoryAsync()
        {
            await using var connection = new MySqlConnection(_connectionString);
            var listCategory = await connection.QueryAsync<Category>("get_all_category", null, null, null, CommandType.StoredProcedure);
            return listCategory;
        }

        public async Task<Category> GetCategoryByIdAsync(int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();
            parameters.Add("id", id);
            var category = await connection.QueryAsync<Category>("get_category", parameters, null, null, CommandType.StoredProcedure);
            return category.SingleOrDefault();
        }
        
        public async Task UpdateCategoryAsync(CategoryCreateDto dto, int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();

            parameters.Add("name", dto.Name);
            parameters.Add("id", id);
            await connection.ExecuteAsync("update_category", parameters, null, null, CommandType.StoredProcedure);
        }
        
        public async Task DeleteCategoryAsync(int id)
        {
            await using var connection = new MySqlConnection(_connectionString);
            var parameters = new DynamicParameters();

            parameters.Add("id", id);
            await connection.ExecuteAsync("delete_category", parameters, null, null, CommandType.StoredProcedure);
        }
    }
}