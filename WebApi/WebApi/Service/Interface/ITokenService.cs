using WebApi.Dto.Request;

namespace WebApi.Service.Interface
{
    public interface ITokenService
    {
        string CreateToken(ShipperCreateRequestDto user, int shipperId);
    }
}