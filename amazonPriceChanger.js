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
        var newValue = "649";

        var keywords = ["TCL 65-Inch"];

        var newString = "Amazon.com"

        //list view path
        console.log($(".a-price .a-price-whole:first").text());
        $(".a-price .a-price-whole:first").text(newValue);


        if ( keywords.some( keyword => product.includes(keyword)) || keywords.some( keyword => titleInMobile.includes(keyword))) {

            //var originalprice = $( "#ppd .a-price-whole" ).contents()[0].nodeValue
            //console.log(originalprice)
            $("#twister_feature_div").remove()
            $("#twister-plus-feature").remove()

            //change buyer option
           // $("#tabular-buybox div:first-child div:nth-child(2) div:first-child span:first-child").text(newString);



            // destop view
            $( "#ppd .a-price-whole" ).contents().each(function () {
                this.nodeValue = newValue
            })


             $("#tabular-buybox #sellerProfileTriggerId").parent().text(newString);


            // mobile view
           // $( "#productTitleGroupAnchor .a-price-whole" ).contents().each(function () {
          //     this.nodeValue = newValue
           // }) //mobile view
        }

        $("html").fadeIn(100);
    // your code here
    }, false);





})();

