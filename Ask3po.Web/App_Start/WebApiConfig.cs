using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Ask3po.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "Decision",
                routeTemplate: "decision",
                defaults: new { controller = "Decision", action="GetDecision"}
            );
        }
    }
}
