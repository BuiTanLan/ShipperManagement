using System.Collections.Generic;

namespace WebApi.Helpers
{
    public class PagedResult<T>
    {
        public List<T> Items { get; set; }
        public int TotalRow { get; set; }
        public int PageIndex { get; set; } = 1;
        public int  PageSize { get; set; } = int.MaxValue;
    }
}