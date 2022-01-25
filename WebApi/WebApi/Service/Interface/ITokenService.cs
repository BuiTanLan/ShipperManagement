using WebApi.Dto.Request;

namespace WebApi.Service.Interface
{
    public interface ITokenService
    {
        string CreateToken(string email, int shipperId);
    }
}