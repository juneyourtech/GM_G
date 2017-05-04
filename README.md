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

Errata:

* Whether parts of the userstyle work with Firefox 31, is impossible to know, because:
  - The userstyle uses advanced CSS (calc method), and I plan to use CSS variables in the future.
  - I don't have a device to test it with.

* Firefox 43 reliably crashes upon entering a message in a Hangouts chat window.
  It's also the last Firefox version to support cookie prompts (through the Cookia Prompter add-on).
  Use GNU IceCat 38.8, because it won't crash, and suports cookie prompt functionality (via add-on).

Google, Blogger, Hangouts, Firefox, and other trademarks are the property of their respective owners.
