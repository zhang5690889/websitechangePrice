// ==UserScript==
// @name         Amazon Change Price
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

   var product = $("#productTitle").text();
   var keyword = "Zenbook Pro 15";
    if (product.includes(keyword)){
        $( "#ppd .a-price-whole" ).text("799.99");
    }

})();
