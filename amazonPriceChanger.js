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
   var titleInMobile = $("#title").text();
   var newValue = "799";

   var keyword = "Zenbook Pro 15";
    if (product.includes(keyword) || titleInMobile.includes(keyword)) {

        console.log($( "#ppd .a-price-whole" ).contents())
        $( "#ppd .a-price-whole" ).contents().each(function () {
            this.nodeValue = newValue
        })

        $( "#productTitleGroupAnchor .a-price-whole" ).contents().each(function () {
            this.nodeValue = newValue
        }) //mobile view
    }



})();
