ask-3po
=======

Ask Threepio, an entry to the [OMGWTF2 contest](http://omg2.thedailywtf.com/). 

Overview
--------

The basic idea for Ask Threepio came from my wife, who suggested (when I had explained the idea
behind the contest to her) that I babelfish the 
[whisper game](http://en.wikipedia.org/wiki/Chinese_whispers) with the result 
being used to determine the outcome of the program. Ask Threepio was born from the discussion
that followed. 

The basic structure of Ask Threepio is fairly straightforward. When the user asks C-3P0
a text question, that question is filtered through each of Google Translate's languages,
one to the other, then back into english. A hashcode is computed from the result, and 
if the hashcode is even the result is "Yes", or "No" for an odd hashcode. To ensure users 
don't get the same answer every time they ask a question, the order of language-to-language
translation is randomized, although the results are always translated back to english.

Ask Threepio is a modern, HTML5 application, and works well with up-to-date versions
of the following major browsers: IE 10, Chrome, and Firefox. I have not tested on Safari/Mac
or on Opera, but they should work rather well. I have also not tested for mobile extensively;
although the app itself will function on an iPad, the jukebox is buggy due to audio-autoplay 
restrictions and the lack hovering in a touch interface.

Development
-----------

Let's be honest -- the WTF here isn't very WTF. I'm shooting for the Lipstick on a Pig prize.
As such, my development has been almost entirely user-centric. 

The code to translate through Google Translate took barely a few hours to complete. The hardest 
part was getting around my lack of a Google API key. Why would I do that? Well, I wanted to fire 
off about 70 translations per user decision request, and a developer key is limited to, what, a hundred 
per day? That would hardly do for testing, now would it? I also planned to cloud host this,
so I didn't want any old person sucking up translations, did I? So, it had to be a screen-scrape
or nothing. That turned out to be easier than I thought -- as long as I have a session
cookie from Google, I can hit their unpublished API all day long and they don't seem to care. 
I'll probably get a Cease and Desist at some point, but for now it works. 

I would have done all the translation logic client-side if I could have figured out a way
to get around cross-domain origin policies. Unfortunately, Google is a stickler there. 
Instead, I was forced to use a server-side technology; I chose ASP.NET MVC 4 because I 
am not yet an expert with Node.js and wanted to spend as little time on the translation part
as possible. C# is my quick and easy language, so there you go.

The UI, on the other hand, consumed all of my time. I had two projects planned for this contest, 
and I'm left with less than a week to finish the second one. I doubt I'll get that one done, 
but I'll give it a college try. I spent many days annoying my wife with late hours while
tweaking styles and animations. When I started to put the jukebox in, she threw her hands 
up in frustration -- why bother? I'm tired, come to bed, etc. 

The UI uses the extremely lightweight [Vanilla.js](http://vanilla-js.com/) library for all
animations and XHR/AJAX calls, and the extremely powerful [Knockout.js](http://knockoutjs.com/)
library for dynamic data binding. With the exception of the starry background image (which I stole from [starlogs.net](http://starlogs.net/)
and the Threepio & Friend images (which I stole from all over the net), there are no 
images in this UI. No images for rounded corners or custom text. Nada. All layout and animation 
is accomplished via strict HTML5 and CSS3; the logo is a custom font that I stole from a font
repository. It's very important to me that I mention this -- IMO far too many designers
start in photoshop and cut up fuzzy images, then get upset when they can't get things
pixel-perfect exact across all browsers or surprised that text in an image looks funky. 
You can accomplish a crap-ton with HTML/CSS these days, and this UI is just the tip of a 
very large iceberg. 

Finally, because I'm intending to host this in the cloud for the contest, I have cheated and 
used Github Pages as a CDN for my static binaries. I'm doing this because Github Pages doesn't
seem to care about bandwidth -- they don't provide me with any sort of reporting on the subject
and haven't complained yet -- but Microsoft Azure absolutely does, and the jukebox sucks up my
alloted bandwitdh very, very fast. Yes, Github Pages isn't exactly performant, but this is 
about being cheap, not about being fast. Oddly, I couldn't do that with the fonts I'm using. IE 10 complains about cross-domain origins
on fonts, although Chrome and Firefox don't care. That's actually a good thing, and bully to IE
for doing it right. 

Ok, I can't think of anything else that's important so I'll sign off. 

I sincerely hope you enjoy the app. 