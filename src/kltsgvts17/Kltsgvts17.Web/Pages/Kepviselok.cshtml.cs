using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kltsgvts17.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace Kltsgvts17.Web.Pages
{
    public class KepviselokModel : PageModel
    {
        private readonly ILogger<KepviselokModel> _logger;
        public IList<Kepviselo> KepviseloLista { get; }

        public KepviselokModel(ILogger<KepviselokModel> logger, Kepviselok kepviselok)
        {
            _logger = logger;
            KepviseloLista = kepviselok.Items;
        }

        public void OnGet()
        {

        }
    }
}
