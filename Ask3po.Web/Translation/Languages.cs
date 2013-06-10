using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ask3po.Web.Translation
{
    public static class Languages
    {
        public static string[] LanguageCodes = 
        {
            "af",
            "sq",
            "ar",
            "hy",
            "az",
            "eu",
            "be",
            "bn",
            "bs",
            "bg",
            "ca",
            "ceb",
            "zh-CN",
            "hr",
            "cs",
            "da",
            "nl",
            "en",
            "eo",
            "et",
            "tl",
            "fi",
            "fr",
            "gl",
            "ka",
            "de",
            "el",
            "gu",
            "ht",
            "iw",
            "hi",
            "hmn",
            "hu",
            "is",
            "id",
            "ga",
            "it",
            "ja",
            "jw",
            "kn",
            "km",
            "ko",
            "lo",
            "la",
            "lv",
            "li",
            "mk",
            "ms",
            "mt",
            "mr",
            "no",
            "fa",
            "pl",
            "pt",
            "ro",
            "ru",
            "sr",
            "sk",
            "sl",
            "es",
            "sw",
            "sv",
            "ta",
            "te",
            "th",
            "tr",
            "uk",
            "ur",
            "vi",
            "cy",
            "yi",
        };

        /// <summary>
        /// Utilty shuffler, found on Stack Overflow at:
        /// http://stackoverflow.com/questions/273313/randomize-a-listt-in-c-sharp/1262619#1262619
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="list"></param>
        public static void Shuffle<T>(this IList<T> list)
        {
            Random rng = new Random();
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }

        public static List<string> GetRandomLanguages()
        {
            var langs = LanguageCodes.ToList();
            langs.Shuffle();
            return langs;
        }
    }
}