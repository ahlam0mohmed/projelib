!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=454)}({1:function(t,e){t.exports=window.jQuery},454:function(t,e,n){"use strict";n.r(e);n(455)},455:function(t,e,n){var r,i,o;i=[n(1)],void 0===(o="function"==typeof(r=function(t){var e=Array.prototype.slice,n=Array.prototype.splice,r={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"auto"},i=t(window),o=t(document),s=[],c=i.height(),a=function(){for(var e=i.scrollTop(),n=o.height(),r=n-c,a=e>r?r-e:0,p=0,u=s.length;p<u;p++){var l=s[p],d=l.stickyWrapper.offset().top-l.topSpacing-a;if(l.stickyWrapper.css("height",l.stickyElement.outerHeight()),e<=d)null!==l.currentTop&&(l.stickyElement.css({width:"",position:"",top:"","z-index":""}),l.stickyElement.parent().removeClass(l.className),l.stickyElement.trigger("sticky-end",[l]),l.currentTop=null);else{var h,f=n-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-a;f<0?f+=l.topSpacing:f=l.topSpacing,l.currentTop!==f&&(l.getWidthFrom?h=t(l.getWidthFrom).width()||null:l.widthFromWrapper&&(h=l.stickyWrapper.width()),null==h&&(h=l.stickyElement.width()),l.stickyElement.css("width",h).css("position","fixed").css("top",f).css("z-index",l.zIndex),l.stickyElement.parent().addClass(l.className),null===l.currentTop?l.stickyElement.trigger("sticky-start",[l]):l.stickyElement.trigger("sticky-update",[l]),l.currentTop===l.topSpacing&&l.currentTop>f||null===l.currentTop&&f<l.topSpacing?l.stickyElement.trigger("sticky-bottom-reached",[l]):null!==l.currentTop&&f===l.topSpacing&&l.currentTop<f&&l.stickyElement.trigger("sticky-bottom-unreached",[l]),l.currentTop=f);var y=l.stickyWrapper.parent();l.stickyElement.offset().top+l.stickyElement.outerHeight()>=y.offset().top+y.outerHeight()&&l.stickyElement.offset().top<=l.topSpacing?l.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):l.stickyElement.css("position","fixed").css("top",f).css("bottom","").css("z-index",l.zIndex)}}},p=function(){c=i.height();for(var e=0,n=s.length;e<n;e++){var r=s[e],o=null;r.getWidthFrom?r.responsiveWidth&&(o=t(r.getWidthFrom).width()):r.widthFromWrapper&&(o=r.stickyWrapper.width()),null!=o&&r.stickyElement.css("width",o)}},u={init:function(e){var n=t.extend({},r,e);return this.each((function(){var e=t(this),i=e.attr("id"),o=i?i+"-"+r.wrapperClassName:r.wrapperClassName,c=t("<div></div>").attr("id",o).addClass(n.wrapperClassName);e.wrapAll(c);var a=e.parent();n.center&&a.css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===e.css("float")&&e.css({float:"none"}).parent().css({float:"right"}),n.stickyElement=e,n.stickyWrapper=a,n.currentTop=null,s.push(n),u.setWrapperHeight(this),u.setupChangeListeners(this)}))},setWrapperHeight:function(e){var n=t(e),r=n.parent();r&&r.css("height",n.outerHeight())},setupChangeListeners:function(t){window.MutationObserver?new window.MutationObserver((function(e){(e[0].addedNodes.length||e[0].removedNodes.length)&&u.setWrapperHeight(t)})).observe(t,{subtree:!0,childList:!0}):(t.addEventListener("DOMNodeInserted",(function(){u.setWrapperHeight(t)}),!1),t.addEventListener("DOMNodeRemoved",(function(){u.setWrapperHeight(t)}),!1))},update:a,unstick:function(e){return this.each((function(){for(var e=t(this),r=-1,i=s.length;i-- >0;)s[i].stickyElement.get(0)===this&&(n.call(s,i,1),r=i);-1!==r&&(e.unwrap(),e.css({width:"",position:"",top:"",float:"","z-index":""}))}))}};window.addEventListener?(window.addEventListener("scroll",a,!1),window.addEventListener("resize",p,!1)):window.attachEvent&&(window.attachEvent("onscroll",a),window.attachEvent("onresize",p)),t.fn.sticky=function(n){return u[n]?u[n].apply(this,e.call(arguments,1)):"object"!=typeof n&&n?void t.error("Method "+n+" does not exist on jQuery.sticky"):u.init.apply(this,arguments)},t.fn.unstick=function(n){return u[n]?u[n].apply(this,e.call(arguments,1)):"object"!=typeof n&&n?void t.error("Method "+n+" does not exist on jQuery.sticky"):u.unstick.apply(this,arguments)},t((function(){setTimeout(a,0)}))})?r.apply(e,i):r)||(t.exports=o)}}));