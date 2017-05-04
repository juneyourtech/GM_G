# GM_G
Userstyles for Google/Alphabet properties

This repository contains one or more userstyles for Google properties not associated with YouTube (GM_YT).

These userstyles are meant to improve usability by way of slightly modifying the design of desktop sites for smaller-resolution screens, including mobile devices. The rationale was, that some sites' desktop designs are more functional.

As of May 2017, the main userstyle is one for Hangouts.

USING THE Hangowts USERSTYLE
* you need Firefox for Android 44 or greater, or GNU IceCat;
* Install Stylish from https://addons.mozilla.org
* In about:config - override the UA to identify as a desktop browser for Hangouts only.

If you're on Android 2.3, Firefox 47.0 is the last Firefox version to run on Gingerbread -

https://archive.mozilla.org/pub/mobile/releases/47.0/

If you're using an ARMv6 device or Android 2.2 Froyo, you need Firefox 31.3.0esr

https://archive.mozilla.org/pub/mobile/releases/31.3.0esr/android-armv6/


Errata and considerations:
* Desktop Hangouts, self-explanatory as it is, is very resource-intensive even on desktops.
  The slowest part is loading the contacts list. On mobile, it's also typing text in chat.
  
  With IceCatMobile (38.8.0), Hangouts load and behavior is faster than in Firefox (44.0).
  
  In Firefox (44.0), the contacts list takes about 1.5 minutes to load after displaying the 
  Hangouts site.
  
* The userstyle is designed for a 320x480-pixel screen resolution, and works with greater 
  resolutions, but has not yet been designed for smaller screen resolutions, like 240x320, 
  which is the minimum for Android.
  
* Whether parts of the userstyle work with Firefox 31, is impossible to know, because:
  - The userstyle uses advanced CSS (calc method);
  - I've had thoughts of using CSS variables, but they've been said to slow down Firefox;
  - I don't have a device to test the userstyle with this browser version.

* Firefox 43 reliably crashes upon entering a message in a Hangouts chat window.
  It's also the last Firefox version to support cookie prompts (through the Cookia Prompter add-on).
  Use GNU IceCat 38.8, because it won't crash, and suports cookie prompt functionality (via add-on).

Google, Blogger, Hangouts, Firefox, and other trademarks are the property of their respective owners.
