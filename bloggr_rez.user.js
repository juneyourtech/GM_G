// ==UserScript==
// @name          Bloggr Rez Beta
// @namespace     Bloggr_lowerres
// @description  Site layout improvements for smaller-resolution displays, such as 1024x768 and 800x600 px. (All trademarks are belong to their respective owners.)
// @version 0.7.0.2
// @updateURL https://github.com/juneyourtech/GM_G/raw/master/bloggr_rez.user.js
// @include       *.blogger.com/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

GM_addStyle("HTML > BODY {min-width:320px;}")
//Original min-width:1100px

GM_addStyle("BODY.bo2 a:link {color:blue;}")

GM_addStyle("BODY.bo2 a:visited {color:navy;}")

//MAIN CONTENT
GM_addStyle("DIV.OYKEW4D-e-e {min-width:240px;}")
//Original min-width:1100px

GM_addStyle("DIV.OYKEW4D-e-d {min-width:240px;}")
//Original min-width:1100px

//POSTS: This is the big one with lots of paddings originally
GM_addStyle("DIV.OYKEW4D-i-n {padding-right:0px; padding-left:241px;}")

//
GM_addStyle("DIV.editPosts {overflow-x:auto;}")

//POSTS TABLE
GM_addStyle("TABLE.bloggPostTable {table-layout:auto;}")

//POSTS TABLE COLUMN WIDTHS (above made pointless by auto table-layout)
GM_addStyle("BODY.lang_en TABLE.bloggPostTable COLGROUP > COL:last-child {width:5.7em;}")

//POST LISTS: TABLE: CELLS (widths are set at colgroup above in table code)
GM_addStyle("TD.OYKEW4D-p-a {padding:8px 0px; vertical-align:top;}")

//POSTS LIST: TABLE: BLOG LINKS
GM_addStyle("A.OYKEW4D-c-g {overflow:initial; text-overflow:inherit; white-space:normal; text-decoration:underline; color:navy;}")
//unset or inherit

//POSTS LIST: TABLE: Blog tags
GM_addStyle("BODY.bo2 .OYKEW4D-c-c {color:navy; opacity:1.0;}")

//POSTS LIST: TABLE: blog action links
GM_addStyle("TABLE.bloggPostTable .blogg-visible-on-select {visibility:visible;}")

GM_addStyle("BODY.bo2 .bloggPostTable .blogg-visible-on-select {opacity:1.0;}")

//GM_addStyle("@media only screen and (max-width:910px) {SELECTOR {width:100%;} }")

//max-width: less-than value
//min-width: greater-than value
