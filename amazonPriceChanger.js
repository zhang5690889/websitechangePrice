// ==UserScript==
// @name         Amazon Change Price
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at document-end
// @match        https://www.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

   var product = $("#productTitle").text();
   var titleInMobile = $("#title").text();
  
   var keywords = ["Zenbook Pro 15", "WF-1000XM4"];
    var newValue = "799";
    
   if ( keywords.some( keyword => product.includes(keyword)) || keywords.some( keyword => titleInMobile.includes(keyword))) {

        $( "#ppd .a-price-whole" ).contents().each(function () {
            this.nodeValue = newValue
        })

        $( "#productTitleGroupAnchor .a-price-whole" ).contents().each(function () {
            this.nodeValue = newValue
        }) //mobile view
    }



})();
