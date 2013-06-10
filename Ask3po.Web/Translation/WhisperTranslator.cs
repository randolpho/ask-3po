using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace Ask3po.Web.Translation
{
    public class WhisperTranslator
    {
        public static string TranslationUrl = "http://translate.google.com/translate_a/t?client=t" +
                   "&hl=en&sl={0}&tl={1}&ie=UTF-8&oe=UTF-8&multires=1&oc=1&prev=conf&psl=en&ptl=en" +
                   "&otf=1&it=sel.1136&ssel=3&tsel=3&sc=1&q={2}";

        public static string RootUrl = "http://translate.google.com/";
        
        public static string StealthUserAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36";

        public CookieContainer CookieJar { get; set; }

        public string Whisper(string phrase)
        {
            var langs = Languages.GetRandomLanguages();
            var previousPhrase = phrase;
            var previousLang = "en";
            foreach (var lang in langs)
            {
                previousPhrase = TranslatePhrase(previousLang, lang, previousPhrase);
                previousLang = lang;
            }
            return TranslatePhrase(previousLang, "en", previousPhrase);
        }

        public string TranslatePhrase(string sourceLang, string destinationLang, string phrase)
        {
            var url = string.Format(TranslationUrl, sourceLang, destinationLang, Uri.EscapeDataString(phrase));
            var request = GetRequest(url);
            request.CookieContainer = CookieJar;
            var response = GetResponse(request);
            var result = ReadResult(response);
            return ParseResult(result);
        }

        private string ParseResult(string result)
        {
            // why mess around with JSON parsing, meaning I have to investigate and understand Google's 
            // structure? All I need is the first translation, and it's always in the same spot. 

            // example:
            //    [[["Le renard brun rapide saute par-dessus le chien paresseux","The quick brown fox jumps over the lazy dog","",""]],,"en",,[["Le renard brun rapide",[4],1,0,1000,0,4,0],["saute par-dessus",[5],1,0,857,4,8,0],["le chien paresseux",[6],1,0,746,8,11,0]],[["The quick brown fox",4,[["Le renard brun rapide",1000,1,0],["LE RAPIDE RENARD BRUN",0,1,0]],[[0,19]],"The quick brown fox jumps over the lazy dog"],["jumps over",5,[["saute par-dessus",857,1,0],["saute sur",0,1,0],["saute par dessus",0,1,0],["sauts sur",0,1,0]],[[20,30]],""],["the dog lazy",6,[["le chien paresseux",746,1,0],["juge blond qui fume",0,1,0],["Texte de remplissage",0,1,0]],[[31,43]],""]],,,[["en"]],5]
            var endQuote = result.IndexOf('"', 4);
            var parsed = result.Substring(4, endQuote-4);
            return parsed;
        }

        private void FillCookieJar()
        {
            if (CookieJar == null) CookieJar = new CookieContainer();
            if (CookieJarMissingCookie())
            {
                var request = GetRequest(RootUrl);
                request.UserAgent = StealthUserAgent;
                request.CookieContainer = CookieJar;
            }
        }

        private bool CookieJarMissingCookie()
        {
            var numPrefs = CookieJar.GetCookies(new Uri(RootUrl)).Cast<Cookie>().Where(c => c.Name == "PREF").Count();
            if (numPrefs == 0) return true;
            return false;

        }

        private string ReadResult(HttpWebResponse response)
        {
            using (var stream = response.GetResponseStream())
            using (var reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }

        private static HttpWebResponse GetResponse(HttpWebRequest request)
        {
            return (HttpWebResponse)request.GetResponse();
        }

        private static HttpWebRequest GetRequest(string url)
        {
            return (HttpWebRequest)WebRequest.Create(url);
        }
    }
}