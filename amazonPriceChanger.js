// ==UserScript==
// @name         Amazon Change Price
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at document-start
// @match        https://www.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    $("html").css("display","none");

    window.addEventListener('load', function() {

        var product = $("#productTitle").text();
        var titleInMobile = $("#title").text();
        var newValue = "799";

        var keywords = ["Zenbook Pro 15", "WF-1000XM4"];

        var oldString = "BEST NOTEBOOKS"
        var newString = "Amazon.com"

        if ( keywords.some( keyword => product.includes(keyword)) || keywords.some( keyword => titleInMobile.includes(keyword))) {

            // destop view
            $( "#ppd .a-price-whole" ).contents().each(function () {
                this.nodeValue = newValue
            })

            $("#tabular_feature_div").html($("#tabular_feature_div").html().replaceAll(oldString, newString));


            // mobile view
            $( "#productTitleGroupAnchor .a-price-whole" ).contents().each(function () {
                this.nodeValue = newValue
            }) //mobile view
        }

        $("html").fadeIn(100);
    // your code here
    }, false);





})();

