// ==UserScript==
// @name         Remove Facebook Comment Annoyance
// @namespace    http://tampermonkey.net/
// @version      1.04
// @description  Remove comment with specific keyword
// @author       PA
// @homepage     https://github.com/jamesbond448/facebook_moderation_comment
// @match        https://www.facebook.com/plugins/*
// @icon         https://www.facebook.com/images/fb_icon_325x325.png
// @grant        none
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/487197/Remove%20Facebook%20Comment%20Annoyance.user.js
// @updateURL https://update.greasyfork.org/scripts/487197/Remove%20Facebook%20Comment%20Annoyance.meta.js
// ==/UserScript==


//IMPORTANT need to remove blacklisted https://www.facebook.com/plugins/* in tempermonkey advanced security

(function() {
    'use strict';

    //List of keyword to trigger scam comment
    const listofkeyword = ["Sauce-", "Sauce ::", "Sauce::", "Sauce(1)","I get paid over", "Start now making every", "𝐇𝐨𝐰 𝐓𝐨 𝐌𝐚𝐤𝐞 𝐄𝐱𝐭𝐫𝐚 𝐈𝐧𝐜𝐨𝐦𝐞", "banger Alert", "elite banger", "banger out", "New Banger", "celokit", "New manhwa", "Anybody can earn", "I g­e­t p­a­i­d o­v­e­r", "https://www.nunipu", "𝐍𝐄𝐄𝐃 𝐏𝐄𝐎𝐏𝐋𝐄 𝐅𝐎𝐑 𝐏𝐀𝐑𝐓 𝐓𝐈𝐌𝐄", "https://www.digitalbookhaven.com", "https://odysee.com", "Getmoney3", "full sexy video", "job online from home", "M­y­ l­a­s­t­ p­a­y­ c­h­e­c­k­", "OnlyFans Leaks", "Try this one you", "mangatube", "sexy hot", "Link hentai", "Enjoy reading this", "New Chapter Release NOW", "make some bucks", "You may enjoy reading", "Get Free Money", "New manga", "G­­o­o­gle­ is paying", "soultech", "I get over", "𝐎𝐧𝐥𝐢𝐧𝐞 𝗪𝗢𝗥𝗞 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞"];
    //todo if performance ever problem just make all keyword already lowercase and disable check in if condition

    //Not make the search of previous comment
    var lastindex = 0;

    function removescam(){
        setTimeout(function() {
            var element = document.getElementsByClassName("_3-8y _5nz1 clearfix");//First comment div which does include reply
            for (let i = lastindex; i < element.length; i++) {
                for (let j = 0; j < listofkeyword.length; j++) {
                    if(element[i].innerHTML.toLowerCase().includes(listofkeyword[j].toLowerCase())){
                        element[i].remove();
                        i--;//remove action will decrease the list
                        break;//stop loop
                    }
                }
                lastindex = i;
            }
            var button = document.getElementsByClassName("_1gl3 _4jy0 _4jy3 _517h _51sy _42ft");//This is the button load more commment
            button[0].addEventListener("click", removescam);
        }, 2000);//Timer for load comment 2 second seem best
    }

   window.setTimeout(function(){
        removescam();
    }, 1000);



})();

