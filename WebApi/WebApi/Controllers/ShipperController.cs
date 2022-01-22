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
    public class ShipperController : ControllerBase
    {
        private readonly IShipperService _shipperService;

        public ShipperController(IShipperService shipperService)
        {
            _shipperService = shipperService;
        }
        [HttpPost]
        public async Task<string> RegisterShipper([FromBody] ShipperCreateRequestDto dto)
        {
            var result = await _shipperService.RegisterShipperAsync(dto);
            return result;

        }
        
        [HttpGet]
        public async Task<IEnumerable<ShipperResponseDto>> GetAllShipperAsync()
        {
            return await _shipperService.GetAllShipperAsync();
        }
        
        [HttpGet("{id:int}")]
        public async Task<ShipperResponseDto> GetShipperByIdAsync(int id)
        {
            return await _shipperService.GetShipperByIdAsync(id);
        }
        
        
        
        [HttpPut("id")]
        public async Task<IActionResult> UpdateShipperAsync(ShipperCreateRequestDto dto, int id)
        {
            await _shipperService.UpdateShipperAsync(dto, id);
            return Ok();
        }
        
        [HttpDelete("id")]
        public async Task<int> DeleteShipperAsync(int id)
        {
            await _shipperService.DeleteShipperAsync(id);
            return id;
        }

    }
}


