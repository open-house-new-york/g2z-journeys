"use strict";$(document).ready(function(){var e=document.documentElement.clientWidth>=document.documentElement.clientHeight,t=!!(document.documentElement.clientWidth<768&&e||document.documentElement.clientHeight<768&&!e),n=t?50:70;document.documentElement.clientHeight<=480&&(n=40);var o=!1,c=($("#footer").outerHeight(),$(".masthead").outerHeight());$("#journeys-button").click(function(){var e=($(this),$("body")),t=$("#footer"),d=$("#footer-menu"),i=$("#journeys-caret");o?(e.css({overflow:"auto"}),t.animate({height:n},500,function(){i.removeClass("fa-caret-down"),i.addClass("fa-caret-up")}),d.hide(),o=!1):(e.css({overflow:"hidden"}),t.animate({height:document.documentElement.clientHeight-c},500,function(){d.show(),i.removeClass("fa-caret-up"),i.addClass("fa-caret-down")}),o=!0)})});