// ==UserScript==
// @name        GOOG Newz Rez
// @namespace   G_Newz_Rez
// @description Site layout improvements for Google News to mitigate CPU-intensive loading. Font fixes for long texts (Windows XP). Google and Google News are trade marks of Google/Alphabet.
// @include     https://news.google.com/*
// @version     0.2
// @grant       GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

//BODY, FONTS

//GOOGLE NEWS
//Spring 2018 redesign.
GM_addStyle("BODY {color:black; font-family:\'Arial\',\'Helvetica\',\'sans-serif\',\'Roboto\',\'RobotoDraft\'}");

GM_addStyle("A.VDXfz {display:none;}");

//Spring 2018 redesign: top side
GM_addStyle("HEADER.gb_pb {font-family:\'Arial\',\'sans-serif\',\'Roboto\',\'RobotoDraft\'; transform:none; transition:none;}"); //27.07.2018

//Spring 2018 redesign: top side
GM_addStyle("HEADER#gb.gb_pb {font-family:\'Arial\',\'sans-serif\',\'Roboto\',\'RobotoDraft\'; transform:none; transition:none;}"); //27.07.2018

//Spring 2018 redesign: bottom side (left, middle, right)
GM_addStyle("DIV.FVeGwb {transition:none;}");

//Spring 2018 redesign: left side
GM_addStyle("DIV.gb_oc.gb_g {transform:none; transition:none;}");
//19.06.2018

//Left side fonts | Spring 2018 redesign
GM_addStyle("DIV.zWHNCf {font-family:\'Arial\',\'sans-serif\',\'Google Sans Display\'; color:black; transform:none; transition:none;}"); //27.07.2018

//LEFT SIDE ICONS (replaced) | Spring 2018
//en: Top Stories
GM_addStyle("DIV.zWHNCf > DIV:nth-child(1) > .SFllF > DIV.PysvYb:before {content:\'📰\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px;}"); //newspaper icon x1F4F0
//07.2018.
GM_addStyle("DIV.zWHNCf > DIV > .SFllF > DIV.PysvYb > SPAN.DPvwYc {display:none;}"); //07.2018.

//en: For you
GM_addStyle("DIV.zWHNCf > DIV:nth-child(2) > .SFllF > DIV.PysvYb:before {content:\'👤\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px;}"); //U+1F464: BUST IN SILHOUETTE
//GM_addStyle("DIV.zWHNCf > DIV:nth-child(2) > .SFllF > DIV.PysvYb > SPAN.DPvwYc {display:none;}");
//01.08.2018

//en: Favorites
GM_addStyle("DIV.zWHNCf > DIV:nth-child(3) > .SFllF > DIV.PysvYb:before {content:\'🌟\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px; color:SandyBrown}");
//U+1F31F: GLOWING STAR | color options: Gold | GoldenRod
//01.08.2018

//en: Saved searches (magnifying glass / luup)
GM_addStyle("DIV.zWHNCf > DIV:nth-child(4) > .SFllF > DIV.PysvYb:before {content:\'🔍\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px; color:SteelBlue;}");
//U+1F50D: LEFT-POINTING MAGNIFYING GLASS
//01.08.2018

//SPACER GOES HERE nth-child(5) //01.08.2018

//en: U.S. / country (dark/black/filled flag)
GM_addStyle("DIV.zWHNCf > DIV:nth-child(6) > .SFllF > DIV.PysvYb:before {content:\'🏴\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px;}"); //U+1F3F4: WAVING BLACK FLAG
//01.08.2018

//If it's "U.S." (or Japan, "日本"), do not display icon, ...
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"], DIV.zWHNCf > DIV[aria-label=\"日本\"] {margin-bottom:10px;}");
//jp: 01.08.2018

GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"] > .SFllF > DIV.PysvYb:before, DIV.zWHNCf > DIV[aria-label=\"日本\"] > .SFllF > DIV.PysvYb:before {content:; font-family:\'Symbola\',\'Twemoji\'; font-size:0px; line-height:0em; display:none; margin:0px; padding:0px;}"); //U+1F5FD: STATUE OF LIBERTY "🗽"
//jp: 01.08.2018

//... remove it, ...
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"] > .SFllF > DIV.PysvYb, DIV.zWHNCf > DIV[aria-label=\"日本\"] > .SFllF > DIV.PysvYb {display:none;}"); //U+1F5FD: STATUE OF LIBERTY "🗽"
//jp: 02.08.2018

//... and replace with the Statue of Liberty in a parent element
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"] > .SFllF:before {content:\'🗽\'; font-family:\'Symbola\',\'Twemoji\'; font-size:39px; line-height:1em; display:block; margin:0px 0.9rem; padding:0px; color:LightSlateGray;}"); //U+1F5FD: STATUE OF LIBERTY "🗽"
//jp: 02.08.2018

//If Japan, replace it with Japan map icon
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"日本\"] > .SFllF:before {content:\'🗾\'; font-family:\'Symbola\',\'Twemoji\'; font-size:37px; line-height:1em; display:block; margin:0px 7px 0px 10px; padding:0px; color:white; background-color:#BD0029; border-radius:24px;}"); //🗾 U+1F5FE: SILHOUETTE OF JAPAN
//jp: 02.08.2018

GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"日本\"]:hover > .SFllF:before {color:#BD0029; background-color:white; border-radius:unset;}"); //🗾 U+1F5FE: SILHOUETTE OF JAPAN
//jp: 02.08.2018

//en: World (Earth)
GM_addStyle("DIV.zWHNCf > DIV:nth-child(7) > .SFllF > DIV.PysvYb:before {content:\'🌍\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px; color:CornflowerBlue;}"); //U+1F30D: EARTH GLOBE EUROPE-AFRICA | color options: CornflowerBlue (lighter) | SkyBlue (even more lighter) | RoyalBlue (darker, but doesn't fit in as much)
//01.08.2018

//Set greater margin-bottom for bigger icons
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"] ~ DIV:nth-child(7), DIV.zWHNCf > DIV[aria-label=\"日本\"] ~ DIV:nth-child(7) {margin-bottom:10px;}");
//jp: 02.08.2018

//If U.S./Japan are above, do not display Earth here:
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"] ~ DIV:nth-child(7) > .SFllF > DIV.PysvYb:before, DIV.zWHNCf > DIV[aria-label=\"日本\"] ~ DIV:nth-child(7) > .SFllF > DIV.PysvYb:before {content:; font-family:Arial; font-size:0px; line-height:0em; display:none; margin:0px; padding:0px;}"); //The selector works really nicely.
//jp: 02.08.2018

//...remove it...
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"] ~ DIV:nth-child(7) > .SFllF > DIV.PysvYb, DIV.zWHNCf > DIV[aria-label=\"日本\"] ~ DIV:nth-child(7) > .SFllF > DIV.PysvYb {display:none;}");
//U.S. 01.08.2018; jp: 02.08.2018

//..replace with bigger Earth:
GM_addStyle("DIV.zWHNCf > DIV[aria-label=\"U.S.\"] ~ DIV:nth-child(7) > .SFllF:before, DIV.zWHNCf > DIV[aria-label=\"日本\"] ~ DIV:nth-child(7) > .SFllF:before {content:\'🌍\'; font-family:\'Symbola\',\'Twemoji\'; font-size:38px; line-height:1em; display:block; margin:0px 0.9rem; padding:0px; color:CornflowerBlue;}");
//01.08.2018 (U.S.); jp selector: 02.08.

//en: Business
GM_addStyle("DIV.zWHNCf > DIV:nth-child(8) > .SFllF > DIV.PysvYb:before {content:\'🏢\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px;}"); //U+1F3E2: OFFICE BUILDING
//01.08.2018

//en: Tech
GM_addStyle("DIV.zWHNCf > DIV:nth-child(9) > .SFllF > DIV.PysvYb:before {content:\'💻\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px;}"); //U+1F4BB: PERSONAL COMPUTER
//01.08.2018

//en: Entertainment (film)
GM_addStyle("DIV.zWHNCf > DIV:nth-child(10) > .SFllF > DIV.PysvYb:before {content:\'🎞️\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px; color:black;}"); //🎞️ | U+1F39E | &#x1F39F;&#xFE0F;
//01.08.2018

//en: Sport (bike)
GM_addStyle("DIV.zWHNCf > DIV:nth-child(11) > .SFllF > DIV.PysvYb:before {content:\'🚴\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px; color:MediumSeaGreen;}"); //U+1F6B4: BICYCLIST
//color options: MediumSeaGreen |LimeGreen
//01.08.2018

//en: Science (Alembic)
GM_addStyle("DIV.zWHNCf > DIV:nth-child(12) > .SFllF > DIV.PysvYb:before {content:\'⚗\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px; color:SteelBlue;}");
//01.08.2018

/* Icon options (TeXworks is the least resource-intensive app to test those on Windows, compared to MS Office and LibreOffice):
🔬 U+1F52C: MICROSCOPE
🔭 U+1F52D: TELESCOPE
⚛️ U+269B: ATOM SYMBOL
⚗️ U+2697: ALEMBIC
🛰️ U+1F6F0: SATELLITE
*/

//en: health | Asclepius
//GM_addStyle("DIV.zWHNCf > DIV:nth-child(13) > .SFllF > DIV.PysvYb {border-right:solid 1px red;}");
GM_addStyle("DIV.zWHNCf > DIV:nth-child(13) > .SFllF > DIV.PysvYb:before {content:\'⚕\'; font-family:\'Symbola\',\'Twemoji\'; font-size:24px; line-height:1em; display:block; margin:0px; padding:0px; color:RoyalBlue;}");
//U+2695: STAFF OF AESCULAPIUS | or: U+1F48A: PILL
//color options RoyalBlue | MediumBlue

/* OTHER HEALTH SYMBOLS
🏋️ U+1F3CB: WEIGHT LIFTER (after barbell icon) */

//External link arrow
GM_addStyle("DIV.KXOmBb:before {content:\'🡕\'; border:solid 1px Silver; font-size:18px; margin:0px; padding:0px; line-height:0.7em; display:inline-block; color:Silver;}");
GM_addStyle("DIV.KXOmBb SPAN.hGhvff {display:none}");
//02.08.2018
/* 🡕 NORTH EAST SANS-SERIF ARROW */

//U+2197: NORTH EAST ARROW | line-height:0.8em; display:inline-block; font-size:16px;
//color and border-color: #80868B;
 
//GM_addStyle("SPAN.DPvwYc {display:none}");

GM_addStyle("DIV.gb_oc:not(.gb_Za) {transform:none; transition:none; display:inline-table;}");

// MIDDLE: NEWS
//LINK COLORS
GM_addStyle("ARTICLE.MQsxIb {color:black;}");

GM_addStyle("ARTICLE.MQsxIb A:hover {transform:none;}"); //07.2018
GM_addStyle("ARTICLE.MQsxIb A:hover {color:navy; transform:none;}"); //07.2018

//Spring 2018 redesign to accommodate the scrollbar. Right/main side.
GM_addStyle("c-wiz.eejsDc {overflow-y:initial; font-family:\'Arial\',\'Helvetica\',\'Roboto\',\'RobotoDraft\',\'sans-serif\'; color:black;}");
//19.06.2018

//[Spring 2018 redesign] Small YouTube logo
GM_addStyle("DIV.SVJrMe:before {content:\'▶\'; display:inline-block; margin:4px 0.4rem 4px 0px; border-radius:3px; background-color:Silver; padding:1px 5px 1px 6px; font-family:\'Symbola\',\'Twemoji\'; font-size:7px; color:white;}");
//02.08.2018
//icon | bgcolor#80868B

//YouTube logo hover to red (Salon)
GM_addStyle("DIV.QmrVtf:hover > DIV.SVJrMe:before {background-color:Salmon;}"); //02.08.2018

//null 'Material icons Extended',
//remove icon span from display (contains font text)
GM_addStyle("DIV.SVJrMe .NqWiob {display:none; font-family:\'Arial\';}"); //02.08.2018

//GM_addStyle("SPAN.DPvwYc {}"); //affects other elements, too, do not use it.

//[Spring 2018 redesign]: 01.08.2018:
//article item up arrow items
GM_addStyle("DIV.ZqhUjb {transition:none;}");
GM_addStyle("DIV.ZqhUjb:before {transition:none;}");
GM_addStyle("DIV.ZqhUjb.dHeVVb.naBZYc:after {content:\'⭿\'; font-size:2.4rem; display:inline-block; transition:none; transform:none; color:#80868B;}"); /* ⭿ U+2B7F: VERTICAL TAB KEY */
GM_addStyle("DIV.naBZYc .xfudi {transition:none;}");
GM_addStyle("DIV.naBZYc .fAk9Qc {transition:none; display:none;}");
//01.08.2018

//GM_addStyle("SPAN.DPvwYc {font-family:\'Arial\';}"); //This removes the font settings for Material Icons Extended. Do not apply.

//UP arrow ^
GM_addStyle(""); 
/*
∧ U+2227: LOGICAL AND
△ U+25B3: WHITE UP-POINTING TRIANGLE
🞁 U+1F781: BLACK UP-POINTING ISOSCELES RIGHT TRIANGLE
⏶ &#x23F6 BLACK MEDIUM UP-POINTING TRIANGLE 
*/

/* Other symbols:
🔖 U+1F516: BOOKMARK
🏷️ U+1F3F7: LABEL
🌡️ U+1F321: THERMOMETER
▶️ U+25B6: BLACK RIGHT-POINTING TRIANGLE
*/

//27.06.2018 | Right side: Weather | entire div
GM_addStyle("DIV.OHST9e {font-family:\'Arial\',\'sans-serif\',\'Google Sans Display\'; color:black;}");

//27.06.2018 | Right side: Weather | city name | Headlines on Center/middle side
GM_addStyle("H2.oOr8M.Ir3o3e {font-family:\'Arial\',\'sans-serif\',\'Google Sans Display\'; color:black;}");

//27.06.2018 | Right side: Follow/Share buttons (when a certain topic has been searched)
GM_addStyle("SPAN.iDvCIf {font-family:\'Arial\',\'sans-serif\',\'Google Sans Display\'; color:black;}");

//pre-Spring 2018 design
GM_addStyle("DIV.gb_qd, DIV.gb_td, HEADER.gb_vd {position:relative;}")
/* Alternative: 
   DIV.pGxpHc > HEADER[#gb | .gb_rc .gb_rd .gb_vd .gb_wd .gb_fc] */

GM_addStyle("BODY.gb_7d, BODY.gb_9d, BODY.EIlDfe {overflow-y:scroll;}")

GM_addStyle("HEADER#gb {display:inline; position:relative;}")

GM_addStyle("DIV.gb_sd {height:unset !important;}")
GM_addStyle("DIV.pGxpHc {height:112px;}")
GM_addStyle("DIV.FHM5pb {position:relative; height:unset !important;}")

GM_addStyle("DIV.MCcOAc {display:unset; overflow:auto;}") //31.10.2017: +overflow:auto
//19.11.2017 COMMENT-OUT

GM_addStyle("DIV.gb_Cd {position:relative;}") //31.10.2017:
//19.11.2017: display:inline removed; flex is default

GM_addStyle("DIV.gb_Ac {min-width:240px !important;}")

//BOTTOM COLUMNS AFTER HEADER

//09.12.2017
GM_addStyle("DIV.gb_jc {bottom:unset !important; top:unset !important;}")

//19.11.2017:
GM_addStyle("DIV.gb_Fe, DIV.gb_kc, DIV.gb_oc {top:125px !important; transition:none; font-family:\'Arial\',\'Helvetica\',\'Roboto\',\'RobotoDraft\',\'sans-serif\'; height:auto;}")
//other classes: "gb_Fe gb_kc gb_g gb_lc gb_mc"
//117px
//06.04.2018: .gb_oc = SECTIONS left section
//19.06.2018: +no transition; +font (while does have inherited font properties.), +auto height

//SECTIONS section to the left (includes Top Stories link and kinks to sections
GM_addStyle("DIV.gb_oc {border-right:solid 1px #E5E5E5;}")

//06.04.2018: two RIGHT COLUMNS (includes Top Stories and In the News)
GM_addStyle("DIV.fWwQIb {border-top:solid 1px #E5E5E5;}")

//19.11.2017 COMMENT-OUT
GM_addStyle("c-wiz.F5jAsd {overflow-x:unset; overflow-y:unset;}") //31.10.2017?

//GM_addStyle("DIV.v4IxVd:before {display:block; content:\'-\'; width:10px; border:solid 1px red; float:right; height:100%;}") //works, but it's unreliable

//right margin for news stories at certain window widths.
GM_addStyle("DIV.v4IxVd > * {padding-right:14px;}")
// border-right:solid 1px blue;
//19.11.2017 COMMENT-OUT

//small news story at bottom with pix
//GM_addStyle("DIV.WyeMbd:first-child DIV.deQdld:nth-child(-n+2) {border:solid 1px yellow;}") //test to see match

//RE-add, when issues REOCCUR
//GM_addStyle("DIV.WyeMbd:first-child DIV.deQdld:nth-child(-n+2) C-WIZ.QwxBBf DIV.jAT6sd:before {display:block; content:\'-\'; font-size:0px; color:rgba(255,255,255,0); width:61px; float:right; height:100%; border:solid 1px rgba(255,0,0,0.5);}")
//;
//19.11.2017 COMMENT-OUT
//GM_addStyle("C-WIZ.QwxBBf SPAN.JoEvud {display:inline;}")

//GM_addStyle("DIV.WyeMbd:nth-child(-n+6) DIV.deQdld:first-child C-WIZ.PaqQNc:nth-child(-n+3) DIV.jAT6sd:before {display:block; content:\'-\'; width:61px; border:solid 1px rgba(255,0,0,0.5); float:right; height:100%;}")
GM_addStyle("C-WIZ.PaqQNc SPAN.JoEvud {display:inline;}")

/* experiment with this, because the above rulesets are unreliable. Only the first-child for the first thing applies with the first box, but other boxes are unreliable, so there's a specific quirk. */

//GM_addStyle("DIV.WyeMbd DIV.deQdld C-WIZ.QwxBBf DIV.jAT6sd.TcEvp:before {display:block; content:\'-\'; width:61px; border:solid 1px rgba(0,0,255,0.5); float:right; height:100%;}")

/* Re-add, if and when issues re-occur. */

//THIS SHOULD SEPARATE HEADER INFORMATION

//font family except heading
GM_addStyle("C-WIZ.PaqQNc:not([role=\"heading\"]), C-WIZ.PaqQNc:not(.hzdq5d) {font-family:\'Arial\',\'Helvetica\',\'Roboto\',\'RobotoDraft\',\'sans-serif\';}")

//GM_addStyle("DIV#yDmH0d .lPV2Xe .ME7ew {color:navy;}")
//works, after finally fixing a previous mistake

//link color on NEWS BOX hover
GM_addStyle("C-WIZ.lPV2Xe:hover .ME7ew {color:navy;}")
//BODY.gb_8d | DIV#yDmH0d 
//previous dark blue colour: #1A237E;
//C-WIZ.lPV2Xe:hover
//BODY.gb_8d A
//DIV#yDmH0d A:hover
//DIV#yDmH0d .lPV2Xe A.ME7ew:hover
//BODY.gb_8d .lPV2Xe:hover A.ME7ew:hover

//link hover color on NEWS BOX hover
GM_addStyle("C-WIZ.lPV2Xe:hover .ME7ew:hover {color:#1A237E;}")
//#3B78E7 - the light blue

//NEWS BOX
GM_addStyle("C-WIZ.lPV2Xe:hover .ME7ew[role=\'heading\']:hover {color:#3B78E7;}")

//NEWS BOX
GM_addStyle("C-WIZ.lPV2Xe, C-WIZ.lPV2Xe .ME7ew {transition:none; background-color:rgba(255,255,255,0.5);}")

GM_addStyle("C-WIZ.lPV2Xe:hover, C-WIZ.lPV2Xe:hover .ME7ew {background-color:rgba(255,255,255,0.7);}")

//news link fonts (small)
GM_addStyle("C-WIZ.cZgiac .hzdq5d, C-WIZ.MLSuAf .hzdq5d {font-size:96%;}")

//BOX DOWN ARROW
GM_addStyle("DIV.qwxlVe {transition:none; opacity:1;}")
GM_addStyle("DIV.mUbCce {transition:none;}")
GM_addStyle("DIV.fKz7Od {color:black; fill:black;}")
GM_addStyle("SPAN.PC1R3e::after {color:black;}")

/*
GM_addStyle("BODY.gb_8d {background-color:black;}")

GM_addStyle("BODY.gb_8d A {color:red;}")
*/

//AFFECTS: NEWS BOX
//GM_addStyle("c-wiz.lPV2Xe:hover A.ME7ew {color:#1A237E;}")
//BODY.gb_8d A:hover, c-wiz.lPV2Xe .ME7ew:hover
//c-wiz.lPV2Xe:hover .ME7ew:hover

//AFFECTS: NEWS BOX
//GM_addStyle("DIV#yDmH0d .lPV2Xe:hover .ME7ew {color:#1A237E;}")
//BODY.gb_8d .lPV2Xe .ME7ew
//DIV#yDmH0d .lPV2Xe:focus .ME7ew,
//DIV#yDmH0d.lPV2Xe:hover .ME7ew:hover 

//GM_addStyle(".MU4aFb:hover, .gnqflc:hover, .oyJxcb:hover, .adH5zf:hover, .NofAff:hover, .dq4Q8b:hover .WwX3Vd, .QWO3dd:hover .jpJIDf, .JD2Nge:hover:after, .PC1R3e:hover:after, .HksA2c:hover .lp2Tfd {color:#1A237E;}")
