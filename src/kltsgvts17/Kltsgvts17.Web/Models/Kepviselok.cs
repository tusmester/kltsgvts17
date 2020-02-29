using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Kltsgvts17.Web.Models
{
    public class Kepviselok
    {
        public Kepviselok(IWebHostEnvironment env)
        {
            Items = LoadKepviselok(env.WebRootPath);
        }

        public IList<Kepviselo> Items { get; }

        private IList<Kepviselo> LoadKepviselok(string rootPath)
        {
            IList<Kepviselo> kepviselok = new List<Kepviselo>();

            try
            {
                var json = File.ReadAllText(Path.Combine(rootPath, "data\\kepviselok\\kepviselok.json"));
                kepviselok = JObject.Parse(json).GetValue("data").Children<JToken>().Select(jt => jt.ToObject<Kepviselo>()).ToList();
            }
            catch (Exception ex)
            {
                // log this
            }

            return kepviselok;
        }
    }
}
