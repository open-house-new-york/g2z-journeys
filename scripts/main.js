"use strict";function calculateViewportDimensions(){var e=document.documentElement.clientWidth,i=document.documentElement.clientHeight,a=e>=i,t=!!(e<768&&a||i<768&&!a);console.log("vh:"+i,"vw:"+e,"mobile:"+t,"horizontal:"+a),a&&t?($("#change-orientation").show(),$(".menu-icon-container").hide()):initVis(e,i,a,t)}function initVis(e,i,a,t){function n(){for(var e=0;e<B.length;e++){var i=B[e],a=$(i).data(),t=u(a.transitionnum);i.triggerPosition=t,i.played=!1}}function s(e,i){var a=$("#vis").scrollLeft();if(R!=a){R=a;for(var t=0;t<e.length;t++)R>=e[t].animationTrigger&&!e[t].played&&(e[t].startAnimation(),e[t].played=!0);for(var t=0;t<B.length;t++)if(R>=B[t].triggerPosition&&!B[t].played){var n=$(B[t]),s=n.data().imageurl,r=n.data().transitionurl;n.data().loop===!0?(o(s,r,n,2500),B[t].played=!0):n.css({"background-image":"url(images/"+journeyConfigs.meta.slug+"/"+E+"_"+r+")"})}}}function o(e,i,a,t){function n(){a.css({"background-image":"url(images/"+journeyConfigs.meta.slug+"/"+E+"_"+i+")"}),setTimeout(s,t)}function s(){a.css({"background-image":"url(images/"+journeyConfigs.meta.slug+"/"+E+"_"+e+")"}),setTimeout(n,t)}n()}function r(){$("#menu-icon").removeClass("fa-bars").addClass("fa-times"),$("#menu-cover").fadeTo(500,1),Q=!0}function l(){$("#menu-icon").removeClass("fa-times").addClass("fa-bars"),$("#menu-cover").fadeTo(500,0,function(){$("#menu-cover").css({display:"none"})}),Q=!1}function c(e){var i=u(e);i-=g,$("#vis").stop().animate({scrollLeft:i},{duration:1e3,easing:"swing"})}function u(e){var i,a=C.some(function(a,t){return i=t,a.substring(a.length-3)==e});return!!a&&L[i]}var d,f,g,m,v,h,p,y,b,k,w=[],C=[],L=[],j=[],T=[];d=.9,f=.7,g=40,t&&a?(m=10,v=0,$(".masthead").hide(),$("#footer").hide()):($(".masthead").show(),v=50,m=t?60:100),i<=480&&(m=40,d=.7),h=25,p=100,y=400,b=i-m-20;var x;k=a?i*f>y?y:i*f:e*d>y?y:e*d;var E=t?600:800,z=$(".container"),I=$("#vis"),S=$(".panels-wrapper"),D=$(".panels-group",I);i<540?$(".not-mobile",D).remove():$(".mobile",D).remove();var P=$(".panel",D),V=($(".panel-image",D),$(".panel-text",D));z.css({height:i}),I.css({height:i-m,"padding-top":m}),Ps.initialize(document.getElementById("vis"),{handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],suppressScrollY:!0,minScrollbarLength:50});var M=!1;document.addEventListener("ps-x-reach-end",function(){M&&"done"!==M&&($("#menu-link").fadeTo("slow",1),M="done"),"done"!==M&&(M=!0)}),S.css({height:b,width:e,"margin-left":g}),$("#footer").css({margin:"0 "+g+"px"});var B=$(".image-transition");B.each(function(){var e=$(this),i=e.attr("id"),a=i.substring(i.length-3),t=e.data(),n="images/"+journeyConfigs.meta.slug+"/"+E+"_"+e.data().transitionurl,s="url("+n+")";$("#transition-"+a).css({"background-image":s});var o=[t.imageurl,t.transitionurl],r=0,l=!1;t.loop||e.click(function(){if(!l){l=!0;var i=r%2;e.css({"background-image":"url(images/"+journeyConfigs.meta.slug+"/"+E+"_"+o[i]+")"}),r++,setTimeout(function(){l=!1},1500)}})}),P.each(function(n){var s,o=$(this),r=o.data(),l=o.attr("id"),c=l.substring(l.length-3);if("image"==r.type){var u=r.imageurl,d=E+"_"+u,f="url('images/"+journeyConfigs.meta.slug+"/"+d+"')";o.css({"background-image":f});for(var m=0;m<visImageSizes.length;m++)if(d===visImageSizes[m].filename){var v=visImageSizes[m].width/visImageSizes[m].height;s=b*v;break}j.push(s)}else if("map"==r.type){var y=t?1.1:1.3;s=i*y,s+=p,j.push(s)}else"text-overlay"==r.type?s=k:"text-block"==r.type?(s=k+h,T.push(s)):"video"==r.type&&(s=e>800?720:.9*e);if(l===journeyConfigs.firstPanelId){var _=s;x=e-_,o.css({"margin-left":x})}if("text-overlay"!==r.type){var z=g+x;0===w.length&&L.push(Math.round(z)),w.push(s),C.push(l);var I=w.reduce(function(e,i){return e+i});I+=z,I=Math.round(I),L.push(I)}if("text-block"===r.type)o.css({height:b,width:s-h,"padding-left":h});else if("map"===r.type)o.css({height:b,width:s-p,"padding-right":p});else if("video"===r.type){var S="url('videos/"+journeyConfigs.meta.slug+"/"+r.imageurl+"')",D=.75,P=s*D,V=(b-P)/2;o.css({height:P,width:s,"margin-top":V,"background-image":S});var M=$("#video-"+c);if(a){var B=.9*i,Y=B/D;$(".video-container").css({width:Y}),M.css({height:B})}else{var Y=t?.9*e:e;$(".video-container").css({width:Y}),M.css({width:Y})}var A,F=M.data();A=t?"sm":"lg";var H="videos/"+journeyConfigs.meta.slug+"/"+F.src+"-"+A+"."+F.format;M.attr("src",H),o.click(function(){$("#video-cover-"+c).show(),document.getElementById("video-"+c).play()})}else o.css({height:b,width:s})});for(var Y=0;Y<V.length;Y++){var A=$(V[Y]),F=A.attr("id"),H=F.substring(F.length-3);if("text-overlay"==A.data().type){var O=u(H)-g;0===Y&&(O-=x),A.css({"margin-left":O})}}var W=w.reduce(function(e,i){return e+i}),q=W+g+x;D.css({height:b,width:q});var G=[];for(var J in journeyConfigs.mapEl)if(journeyConfigs.mapEl.hasOwnProperty(J)){var K=journeyConfigs.mapEl[J],N=u(K.id);K.position=N,K.animationTrigger=t?N:N-e/2,K.played=!1,G.push(K)}n();var Q=!1,R=(Math.floor(q-e+g),0),U=_.throttle(function(){s(G)},200);$("#vis").scroll(U),$("body").mousewheel(function(e){var i=$("#vis").scrollLeft();$("#vis").scrollLeft(i-e.deltaY*e.deltaFactor),e.preventDefault()}),document.onkeydown=function(i){i||(i=window.event);var a=i.keyCode;i.charCode&&0===a&&(a=i.charCode);var t=.1*e,n=$("#vis").scrollLeft();switch(a){case 37:$("#vis").scrollLeft(n-t);break;case 38:$("#vis").scrollLeft(n-t);break;case 39:$("#vis").scrollLeft(n+t);break;case 40:$("#vis").scrollLeft(n+t);break;case 33:$("#vis").scrollLeft(n-2*t);break;case 34:$("#vis").scrollLeft(n+2*t);break;case 32:$("#vis").scrollLeft(n+2*t);break;case 27:Q&&l();break;default:return}i.preventDefault()},$(".steps-link").click(function(){var e=$(this),i=e.data().scroll;c(i)}),$("#menu-link").click(function(){$("#menu-cover").fadeTo(500,1),$("#menu-icon").removeClass("fa-bars").addClass("fa-times"),Q=!0}),$("#menu-icon").click(function(){Q?l():r()});for(var X=$("#menu > a"),Y=0;Y<X.length;Y++){var Z=$(X[Y]),ee=Z.attr("id");ee==="menu-"+journeyConfigs.meta.slug&&(Z.attr("href","#"),Z.addClass("disabled"),Z.find("div > h3").addClass("highlight"))}if($("#menu-back").click(function(){$("#menu-cover").fadeTo(500,0,function(){$(this).css({display:"none"})}),$("#menu-icon").removeClass("fa-times").addClass("fa-bars"),Q=!1}),$("#vis").fadeTo("slow",1,function(){var e=t?$("#begin-mobile"):$("#begin");setTimeout(function(){e.css({display:"block"})},1500)}),$(".video-wrapper").click(function(e){e.target===this&&$(this).parent().parent().hide()}),$(".modal-cover").click(function(e){e.target===this&&$(this).hide()}),initMaps(e,i,a,t,d,f,g,m,v,h,p,y,b,k),$("#vis").scrollLeft()>=W-e){var R=$("#vis").scrollLeft(),ie=R+e-W;$("#vis").scrollLeft(R-ie)}}$(document).ready(function(){calculateViewportDimensions()}),$(window).on("resize",_.debounce(function(){$("#change-orientation").hide(),$(".menu-icon-container").show(),$(".ps-scrollbar-x-rail, .ps-scrollbar-y-rail").remove(),calculateViewportDimensions()},500));