using System;
using System.Net;
using Ask3po.Web.Translation;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTests
{
    [TestClass]
    public class GoogleIntegrationTests
    {
        [TestMethod]
        public void TestTranslations()
        {
            var trans = new WhisperTranslator()
            {
                CookieJar = new CookieContainer()
            };
            Console.WriteLine(trans.TranslatePhrase("en", "fr", "The quick brown fox jumps over the lazy dog"));
            Console.WriteLine(trans.TranslatePhrase("en", "bn", "The quick brown fox jumps over the lazy dog"));
            Console.WriteLine(trans.TranslatePhrase("en", "ceb", "The quick brown fox jumps over the lazy dog"));
            Console.WriteLine(trans.TranslatePhrase("en", "zh-CN", "The quick brown fox jumps over the lazy dog"));
            Console.WriteLine(trans.TranslatePhrase("en", "cs", "The quick brown fox jumps over the lazy dog"));
            Console.WriteLine(trans.TranslatePhrase("en", "gl", "The quick brown fox jumps over the lazy dog"));
            Console.WriteLine(trans.TranslatePhrase("en", "ht", "The quick brown fox jumps over the lazy dog"));
            Console.WriteLine(trans.TranslatePhrase("en", "id", "The quick brown fox jumps over the lazy dog"));
        }

        [TestMethod]
        public void TestWhisper()
        {
            var trans = new WhisperTranslator();
            var result = trans.Whisper("The quick brown fox jumps over the lazy dogs.");
            Console.WriteLine(result);
        }
    }
}
