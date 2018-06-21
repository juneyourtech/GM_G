// ==UserScript==
// @name        GOOG Newz Rez
// @namespace   G_Newz_Rez
// @description Site layout improvements for Google News in order to make the site load faster. Font fixes for long texts (Windows XP). Google and Google News are trade marks of Google/Alphabet.
// @include     https://news.google.com/*
// @version     0.1
// @grant       GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

//BODY, FONTS

//GOOGLE NEWS
//Spring 2018 redesign.
GM_addStyle("A.VDXfz {display:none;}");

//Spring 2018 redesign: left side
GM_addStyle("DIV.gb_oc.gb_g {transform:none; transition:none;}");
//19.06.2018

GM_addStyle("DIV.gb_oc:not(.gb_Za) {transform:none; display:inline-table;}");

//Spring 2018 redesign to accommodate the scrollbar. Right/main side.
GM_addStyle("c-wiz.eejsDc {overflow-y:initial; font-family:\'Arial\',\'Helvetica\',\'sans-serif\';}");
//19.06.2018

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
GM_addStyle("DIV.gb_Fe, DIV.gb_kc, DIV.gb_oc {top:125px !important; transition:none; font-family:\'Arial\',\'Helvetica\',\'sans-serif\'; height:auto;}")
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
GM_addStyle("C-WIZ.PaqQNc:not([role=\"heading\"]), C-WIZ.PaqQNc:not(.hzdq5d) {font-family:\'Arial\',\'Helvetica\',\'sans-serif\';}")

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

/* GM_addStyle(".MU4aFb:hover, .gnqflc:hover, .oyJxcb:hover, .adH5zf:hover, .NofAff:hover, .dq4Q8b:hover .WwX3Vd, .QWO3dd:hover .jpJIDf, .JD2Nge:hover:after, .PC1R3e:hover:after, .HksA2c:hover .lp2Tfd {color:#1A237E;}") */
