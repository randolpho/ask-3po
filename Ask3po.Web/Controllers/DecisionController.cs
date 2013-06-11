using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Ask3po.Web.Models;
using Ask3po.Web.Translation;

namespace Ask3po.Web.Controllers
{
    public class DecisionController : ApiController
    {
        public HttpResponseMessage GetDecision()
        {
            var question = Request.GetQueryNameValuePairs().Where(q => q.Key == "q").Select(q => q.Value).FirstOrDefault();
            if (question == null) return Request.CreateResponse(HttpStatusCode.BadRequest, "Bad Request");
            var translator = new WhisperTranslator();
            var translation = translator.Whisper(question);
            var hash = translation.GetHashCode();
            var yes = hash % 2 == 0;
            return Request.CreateResponse(HttpStatusCode.OK, new Decision()
            {
                IsYes = yes,
                Translation = translation
            });
        }
    }
}
