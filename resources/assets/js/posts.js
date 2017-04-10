function escapeHtml(t){return String(t).replace(/[&<>"'`=\/]/g,function(t){return entityMap[t]})}!function(t,i,e,s){function n(i,e){var r=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var o=(this.position+"").toLowerCase().match(/\S+/g)||[];if(o.length<1&&o.push("center"),1==o.length&&o.push(o[0]),("top"==o[0]||"bottom"==o[0]||"left"==o[1]||"right"==o[1])&&(o=[o[1],o[0]]),this.positionX!=s&&(o[0]=this.positionX.toLowerCase()),this.positionY!=s&&(o[1]=this.positionY.toLowerCase()),r.positionX=o[0],r.positionY=o[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var h=this.$element.find(">.parallax-slider"),a=!1;0==h.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=h.prependTo(this.$mirror),a=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){r.naturalHeight&&r.naturalWidth||(r.naturalHeight=this.naturalHeight||this.height||1,r.naturalWidth=this.naturalWidth||this.width||1),r.aspectRatio=r.naturalWidth/r.naturalHeight,n.isSetup||n.setup(),n.sliders.push(r),n.isFresh=!1,n.requestRender()}),a||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||h.length>0)&&this.$slider.trigger("load")}function r(s){return this.each(function(){var r=t(this),o="object"==typeof s&&s;this==i||this==e||r.is("body")?n.configure(o):r.data("px.parallax")?"object"==typeof s&&t.extend(r.data("px.parallax"),o):(o=t.extend({},r.data(),o),r.data("px.parallax",new n(this,o))),"string"==typeof s&&("destroy"==s?n.destroy(this):n[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),n=Math.max(0,16-(s-t)),r=i.setTimeout(function(){e(s+n)},n);return t=s+n,r}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(n.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=n.winHeight,i=n.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),r=this.boxHeight+(e-s)*(1-this.speed)|0,o=(this.boxOffsetTop-e)*(1-this.speed)|0;if(r*this.aspectRatio>=this.boxWidth){this.imageWidth=r*this.aspectRatio|0,this.imageHeight=r,this.offsetBaseTop=o;var h=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-h:isNaN(this.positionX)?-h/2|0:Math.max(this.positionX,-h)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var h=this.imageHeight-r;this.offsetBaseTop="top"==this.positionY?o:"bottom"==this.positionY?o-h:isNaN(this.positionY)?o-h/2|0:o+Math.max(this.positionY,-h)}},render:function(){var t=n.scrollTop,i=n.scrollLeft,e=this.overScrollFix?n.overScroll:0,s=t+n.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(n,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),r=t(i),o=function(){n.winHeight=r.height(),n.winWidth=r.width(),n.docHeight=s.height(),n.docWidth=s.width()},h=function(){var t=r.scrollTop(),i=n.docHeight-n.winHeight,e=n.docWidth-n.winWidth;n.scrollTop=Math.max(0,Math.min(i,t)),n.scrollLeft=Math.max(0,Math.min(e,r.scrollLeft())),n.overScroll=Math.max(t-i,Math.min(t,0))};r.on("resize.px.parallax load.px.parallax",function(){o(),n.isFresh=!1,n.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){h(),n.requestRender()}),o(),h(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,r=t(e).data("px.parallax");for(r.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==r&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,n.isSetup=!1)}});var o=t.fn.parallax;t.fn.parallax=r,t.fn.parallax.Constructor=n,t.fn.parallax.noConflict=function(){return t.fn.parallax=o,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),$(document).ready(function(){$(".btn-like").on("click",function(){var t=$(this);$.ajax({url:"/posts/"+$(this).data("post-id")+"/like",type:"POST",dataType:"JSON",success:function(i){t.find(".likes-count").text(i.likes_count),$(document).trigger("likes-count-changed",[i.likes_count]),i.likes.length>0?(t.removeClass("btn-default").addClass("btn-primary"),t.find(".like-state").text("Liked ")):(t.removeClass("btn-primary").addClass("btn-default"),t.find(".like-state").text("Like "))}})})});var IASCallbacks=function(t){return this.list=[],this.fireStack=[],this.isFiring=!1,this.isDisabled=!1,this.fire=function(t){var i=t[0],e=t[1],s=t[2];this.isFiring=!0;for(var n=0,r=this.list.length;r>n;n++)if(void 0!=this.list[n]&&!1===this.list[n].fn.apply(i,s)){e.reject();break}this.isFiring=!1,e.resolve(),this.fireStack.length&&this.fire(this.fireStack.shift())},this.inList=function(t,i){i=i||0;for(var e=i,s=this.list.length;s>e;e++)if(this.list[e].fn===t||t.guid&&this.list[e].fn.guid&&t.guid===this.list[e].fn.guid)return e;return-1},this};IASCallbacks.prototype={add:function(t,i){var e={fn:t,priority:i};i=i||0;for(var s=0,n=this.list.length;n>s;s++)if(i>this.list[s].priority)return this.list.splice(s,0,e),this;return this.list.push(e),this},remove:function(t){for(var i=0;(i=this.inList(t,i))>-1;)this.list.splice(i,1);return this},has:function(t){return this.inList(t)>-1},fireWith:function(t,i){var e=$.Deferred();return this.isDisabled?e.reject():(i=i||[],i=[t,e,i.slice?i.slice():i],this.isFiring?this.fireStack.push(i):this.fire(i),e)},disable:function(){this.isDisabled=!0},enable:function(){this.isDisabled=!1}},function(t){"use strict";var i=-1,e=function(e,s){return this.itemsContainerSelector=s.container,this.itemSelector=s.item,this.nextSelector=s.next,this.paginationSelector=s.pagination,this.$scrollContainer=e,this.$container=window===e.get(0)?t(document):e,this.defaultDelay=s.delay,this.negativeMargin=s.negativeMargin,this.nextUrl=null,this.isBound=!1,this.isPaused=!1,this.isInitialized=!1,this.jsXhr=!1,this.listeners={next:new IASCallbacks(t),load:new IASCallbacks(t),loaded:new IASCallbacks(t),render:new IASCallbacks(t),rendered:new IASCallbacks(t),scroll:new IASCallbacks(t),noneLeft:new IASCallbacks(t),ready:new IASCallbacks(t)},this.extensions=[],this.scrollHandler=function(){if(this.isBound&&!this.isPaused){var t=this.getCurrentScrollOffset(this.$scrollContainer),e=this.getScrollThreshold();i!=e&&(this.fire("scroll",[t,e]),t>=e&&this.next())}},this.getItemsContainer=function(){return t(this.itemsContainerSelector,this.$container)},this.getLastItem=function(){return t(this.itemSelector,this.getItemsContainer().get(0)).last()},this.getFirstItem=function(){return t(this.itemSelector,this.getItemsContainer().get(0)).first()},this.getScrollThreshold=function(t){var e;return t=t||this.negativeMargin,t=t>=0?-1*t:t,e=this.getLastItem(),0===e.length?i:e.offset().top+e.height()+t},this.getCurrentScrollOffset=function(t){var i=0,e=t.height();return i=window===t.get(0)?t.scrollTop():t.offset().top,(-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod"))&&(e+=80),i+e},this.getNextUrl=function(i){return i=i||this.$container,t(this.nextSelector,i).last().attr("href")},this.load=function(i,e,s){var n,r,o=this,h=[],a=+new Date;s=s||this.defaultDelay;var l={url:i};return o.fire("load",[l]),this.jsXhr=t.get(l.url,null,t.proxy(function(i){n=t(this.itemsContainerSelector,i).eq(0),0===n.length&&(n=t(i).filter(this.itemsContainerSelector).eq(0)),n&&n.find(this.itemSelector).each(function(){h.push(this)}),o.fire("loaded",[i,h]),e&&(r=+new Date-a,s>r?setTimeout(function(){e.call(o,i,h)},s-r):e.call(o,i,h))},o),"html"),this.jsXhr},this.render=function(i,e){var s=this,n=this.getLastItem(),r=0,o=this.fire("render",[i]);o.done(function(){t(i).hide(),n.after(i),t(i).fadeIn(400,function(){++r<i.length||(s.fire("rendered",[i]),e&&e())})}),o.fail(function(){e&&e()})},this.hidePagination=function(){this.paginationSelector&&t(this.paginationSelector,this.$container).hide()},this.restorePagination=function(){this.paginationSelector&&t(this.paginationSelector,this.$container).show()},this.throttle=function(i,e){var s,n,r=0;return s=function(){function t(){r=+new Date,i.apply(s,o)}var s=this,o=arguments,h=+new Date-r;n?clearTimeout(n):t(),h>e?t():n=setTimeout(t,e)},t.guid&&(s.guid=i.guid=i.guid||t.guid++),s},this.fire=function(t,i){return this.listeners[t].fireWith(this,i)},this.pause=function(){this.isPaused=!0},this.resume=function(){this.isPaused=!1},this};e.prototype.initialize=function(){if(this.isInitialized)return!1;var t=!!("onscroll"in this.$scrollContainer.get(0)),i=this.getCurrentScrollOffset(this.$scrollContainer),e=this.getScrollThreshold();return!!t&&(this.hidePagination(),this.bind(),this.fire("ready"),this.nextUrl=this.getNextUrl(),i>=e?(this.next(),this.one("rendered",function(){this.isInitialized=!0})):this.isInitialized=!0,this)},e.prototype.reinitialize=function(){this.isInitialized=!1,this.unbind(),this.initialize()},e.prototype.bind=function(){if(!this.isBound){this.$scrollContainer.on("scroll",t.proxy(this.throttle(this.scrollHandler,150),this));for(var i=0,e=this.extensions.length;e>i;i++)this.extensions[i].bind(this);this.isBound=!0,this.resume()}},e.prototype.unbind=function(){if(this.isBound){this.$scrollContainer.off("scroll",this.scrollHandler);for(var t=0,i=this.extensions.length;i>t;t++)"undefined"!=typeof this.extensions[t].unbind&&this.extensions[t].unbind(this);this.isBound=!1}},e.prototype.destroy=function(){try{this.jsXhr.abort()}catch(t){}this.unbind(),this.$scrollContainer.data("ias",null)},e.prototype.on=function(i,e,s){if("undefined"==typeof this.listeners[i])throw new Error('There is no event called "'+i+'"');return s=s||0,this.listeners[i].add(t.proxy(e,this),s),this},e.prototype.one=function(t,i){var e=this,s=function(){e.off(t,i),e.off(t,s)};return this.on(t,i),this.on(t,s),this},e.prototype.off=function(t,i){if("undefined"==typeof this.listeners[t])throw new Error('There is no event called "'+t+'"');return this.listeners[t].remove(i),this},e.prototype.next=function(){var t=this.nextUrl,i=this;if(this.pause(),!t)return this.fire("noneLeft",[this.getLastItem()]),this.listeners.noneLeft.disable(),i.resume(),!1;var e=this.fire("next",[t]);return e.done(function(){i.load(t,function(t,e){i.render(e,function(){i.nextUrl=i.getNextUrl(t),i.resume()})})}),e.fail(function(){i.resume()}),!0},e.prototype.extension=function(t){if("undefined"==typeof t.bind)throw new Error('Extension doesn\'t have required method "bind"');return"undefined"!=typeof t.initialize&&t.initialize(this),this.extensions.push(t),this.isInitialized&&this.reinitialize(),this},t.ias=function(i){var e=t(window);return e.ias.apply(e,arguments)},t.fn.ias=function(i){var s=Array.prototype.slice.call(arguments),n=this;return this.each(function(){var r=t(this),o=r.data("ias"),h=t.extend({},t.fn.ias.defaults,r.data(),"object"==typeof i&&i);if(o||(r.data("ias",o=new e(r,h)),t(document).ready(t.proxy(o.initialize,o))),"string"==typeof i){if("function"!=typeof o[i])throw new Error('There is no method called "'+i+'"');s.shift(),o[i].apply(o,s)}n=o}),n},t.fn.ias.defaults={item:".item",container:".listing",next:".next",pagination:!1,delay:600,negativeMargin:10}}(jQuery);var IASHistoryExtension=function(t){return t=jQuery.extend({},this.defaults,t),this.ias=null,this.prevSelector=t.prev,this.prevUrl=null,this.listeners={prev:new IASCallbacks},this.onPageChange=function(t,i,e){if(window.history&&window.history.replaceState){var s=history.state;history.replaceState(s,document.title,e)}},this.onScroll=function(t,i){var e=this.getScrollThresholdFirstItem();this.prevUrl&&(t-=this.ias.$scrollContainer.height(),e>=t&&this.prev())},this.onReady=function(){var t=this.ias.getCurrentScrollOffset(this.ias.$scrollContainer),i=this.getScrollThresholdFirstItem();t-=this.ias.$scrollContainer.height(),i>=t&&this.prev()},this.getPrevUrl=function(t){return t||(t=this.ias.$container),jQuery(this.prevSelector,t).last().attr("href")},this.getScrollThresholdFirstItem=function(){var t;return t=this.ias.getFirstItem(),0===t.length?-1:t.offset().top},this.renderBefore=function(t,i){var e=this.ias,s=e.getFirstItem(),n=0;e.fire("render",[t]),jQuery(t).hide(),s.before(t),jQuery(t).fadeIn(400,function(){++n<t.length||(e.fire("rendered",[t]),i&&i())})},this};IASHistoryExtension.prototype.initialize=function(t){var i=this;this.ias=t,jQuery.extend(t.listeners,this.listeners),t.prev=function(){return i.prev()},this.prevUrl=this.getPrevUrl()},IASHistoryExtension.prototype.bind=function(t){t.on("pageChange",jQuery.proxy(this.onPageChange,this)),t.on("scroll",jQuery.proxy(this.onScroll,this)),t.on("ready",jQuery.proxy(this.onReady,this))},IASHistoryExtension.prototype.unbind=function(t){t.off("pageChange",this.onPageChange),t.off("scroll",this.onScroll),t.off("ready",this.onReady)},IASHistoryExtension.prototype.prev=function(){var t=this.prevUrl,i=this,e=this.ias;if(!t)return!1;e.pause();var s=e.fire("prev",[t]);return s.done(function(){e.load(t,function(t,s){i.renderBefore(s,function(){i.prevUrl=i.getPrevUrl(t),e.resume(),i.prevUrl&&i.prev()})})}),s.fail(function(){e.resume()}),!0},IASHistoryExtension.prototype.defaults={prev:".prev"};var IASNoneLeftExtension=function(t){return t=jQuery.extend({},this.defaults,t),this.ias=null,this.uid=(new Date).getTime(),this.html=t.html.replace("{text}",t.text),this.showNoneLeft=function(){var t=jQuery(this.html).attr("id","ias_noneleft_"+this.uid),i=this.ias.getLastItem();i.after(t),t.fadeIn()},this};IASNoneLeftExtension.prototype.bind=function(t){this.ias=t,t.on("noneLeft",jQuery.proxy(this.showNoneLeft,this))},IASNoneLeftExtension.prototype.unbind=function(t){t.off("noneLeft",this.showNoneLeft)},IASNoneLeftExtension.prototype.defaults={text:"You reached the end.",html:'<div class="ias-noneleft" style="text-align: center;">{text}</div>'};var IASPagingExtension=function(){return this.ias=null,this.pagebreaks=[[0,document.location.toString()]],this.lastPageNum=1,this.enabled=!0,this.listeners={pageChange:new IASCallbacks},this.onScroll=function(t,i){if(this.enabled){var e,s=this.ias,n=this.getCurrentPageNum(t),r=this.getCurrentPagebreak(t);this.lastPageNum!==n&&(e=r[1],s.fire("pageChange",[n,t,e])),this.lastPageNum=n}},this.onNext=function(t){var i=this.ias.getCurrentScrollOffset(this.ias.$scrollContainer);this.pagebreaks.push([i,t]);var e=this.getCurrentPageNum(i)+1;this.ias.fire("pageChange",[e,i,t]),this.lastPageNum=e},this.onPrev=function(t){var i=this,e=i.ias,s=e.getCurrentScrollOffset(e.$scrollContainer),n=s-e.$scrollContainer.height(),r=e.getFirstItem();this.enabled=!1,this.pagebreaks.unshift([0,t]),e.one("rendered",function(){for(var s=1,o=i.pagebreaks.length;o>s;s++)i.pagebreaks[s][0]=i.pagebreaks[s][0]+r.offset().top;var h=i.getCurrentPageNum(n)+1;e.fire("pageChange",[h,n,t]),i.lastPageNum=h,i.enabled=!0})},this};IASPagingExtension.prototype.initialize=function(t){this.ias=t,jQuery.extend(t.listeners,this.listeners)},IASPagingExtension.prototype.bind=function(t){try{t.on("prev",jQuery.proxy(this.onPrev,this),this.priority)}catch(i){}t.on("next",jQuery.proxy(this.onNext,this),this.priority),t.on("scroll",jQuery.proxy(this.onScroll,this),this.priority)},IASPagingExtension.prototype.unbind=function(t){try{t.off("prev",this.onPrev)}catch(i){}t.off("next",this.onNext),t.off("scroll",this.onScroll)},IASPagingExtension.prototype.getCurrentPageNum=function(t){for(var i=this.pagebreaks.length-1;i>0;i--)if(t>this.pagebreaks[i][0])return i+1;return 1},IASPagingExtension.prototype.getCurrentPagebreak=function(t){for(var i=this.pagebreaks.length-1;i>=0;i--)if(t>this.pagebreaks[i][0])return this.pagebreaks[i];return null},IASPagingExtension.prototype.priority=500;var IASSpinnerExtension=function(t){return t=jQuery.extend({},this.defaults,t),this.ias=null,this.uid=(new Date).getTime(),this.src=t.src,this.html=t.html.replace("{src}",this.src),this.showSpinner=function(){var t=this.getSpinner()||this.createSpinner(),i=this.ias.getLastItem();i.after(t),t.fadeIn()},this.showSpinnerBefore=function(){var t=this.getSpinner()||this.createSpinner(),i=this.ias.getFirstItem();i.before(t),t.fadeIn()},this.removeSpinner=function(){this.hasSpinner()&&this.getSpinner().remove()},this.getSpinner=function(){var t=jQuery("#ias_spinner_"+this.uid);return t.length>0&&t},this.hasSpinner=function(){var t=jQuery("#ias_spinner_"+this.uid);return t.length>0},this.createSpinner=function(){var t=jQuery(this.html).attr("id","ias_spinner_"+this.uid);return t.hide(),t},this};IASSpinnerExtension.prototype.bind=function(t){this.ias=t,t.on("next",jQuery.proxy(this.showSpinner,this)),t.on("render",jQuery.proxy(this.removeSpinner,this));try{t.on("prev",jQuery.proxy(this.showSpinnerBefore,this))}catch(i){}},IASSpinnerExtension.prototype.unbind=function(t){t.off("next",this.showSpinner),t.off("render",this.removeSpinner);try{t.off("prev",this.showSpinnerBefore)}catch(i){}},IASSpinnerExtension.prototype.defaults={src:"data:image/gif;base64,R0lGODlhEAAQAPQAAP///wAAAPDw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFdyAgAgIJIeWoAkRCCMdBkKtIHIngyMKsErPBYbADpkSCwhDmQCBethRB6Vj4kFCkQPG4IlWDgrNRIwnO4UKBXDufzQvDMaoSDBgFb886MiQadgNABAokfCwzBA8LCg0Egl8jAggGAA1kBIA1BAYzlyILczULC2UhACH5BAkKAAAALAAAAAAQABAAAAV2ICACAmlAZTmOREEIyUEQjLKKxPHADhEvqxlgcGgkGI1DYSVAIAWMx+lwSKkICJ0QsHi9RgKBwnVTiRQQgwF4I4UFDQQEwi6/3YSGWRRmjhEETAJfIgMFCnAKM0KDV4EEEAQLiF18TAYNXDaSe3x6mjidN1s3IQAh+QQJCgAAACwAAAAAEAAQAAAFeCAgAgLZDGU5jgRECEUiCI+yioSDwDJyLKsXoHFQxBSHAoAAFBhqtMJg8DgQBgfrEsJAEAg4YhZIEiwgKtHiMBgtpg3wbUZXGO7kOb1MUKRFMysCChAoggJCIg0GC2aNe4gqQldfL4l/Ag1AXySJgn5LcoE3QXI3IQAh+QQJCgAAACwAAAAAEAAQAAAFdiAgAgLZNGU5joQhCEjxIssqEo8bC9BRjy9Ag7GILQ4QEoE0gBAEBcOpcBA0DoxSK/e8LRIHn+i1cK0IyKdg0VAoljYIg+GgnRrwVS/8IAkICyosBIQpBAMoKy9dImxPhS+GKkFrkX+TigtLlIyKXUF+NjagNiEAIfkECQoAAAAsAAAAABAAEAAABWwgIAICaRhlOY4EIgjH8R7LKhKHGwsMvb4AAy3WODBIBBKCsYA9TjuhDNDKEVSERezQEL0WrhXucRUQGuik7bFlngzqVW9LMl9XWvLdjFaJtDFqZ1cEZUB0dUgvL3dgP4WJZn4jkomWNpSTIyEAIfkECQoAAAAsAAAAABAAEAAABX4gIAICuSxlOY6CIgiD8RrEKgqGOwxwUrMlAoSwIzAGpJpgoSDAGifDY5kopBYDlEpAQBwevxfBtRIUGi8xwWkDNBCIwmC9Vq0aiQQDQuK+VgQPDXV9hCJjBwcFYU5pLwwHXQcMKSmNLQcIAExlbH8JBwttaX0ABAcNbWVbKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICSRBlOY7CIghN8zbEKsKoIjdFzZaEgUBHKChMJtRwcWpAWoWnifm6ESAMhO8lQK0EEAV3rFopIBCEcGwDKAqPh4HUrY4ICHH1dSoTFgcHUiZjBhAJB2AHDykpKAwHAwdzf19KkASIPl9cDgcnDkdtNwiMJCshACH5BAkKAAAALAAAAAAQABAAAAV3ICACAkkQZTmOAiosiyAoxCq+KPxCNVsSMRgBsiClWrLTSWFoIQZHl6pleBh6suxKMIhlvzbAwkBWfFWrBQTxNLq2RG2yhSUkDs2b63AYDAoJXAcFRwADeAkJDX0AQCsEfAQMDAIPBz0rCgcxky0JRWE1AmwpKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICKZzkqJ4nQZxLqZKv4NqNLKK2/Q4Ek4lFXChsg5ypJjs1II3gEDUSRInEGYAw6B6zM4JhrDAtEosVkLUtHA7RHaHAGJQEjsODcEg0FBAFVgkQJQ1pAwcDDw8KcFtSInwJAowCCA6RIwqZAgkPNgVpWndjdyohACH5BAkKAAAALAAAAAAQABAAAAV5ICACAimc5KieLEuUKvm2xAKLqDCfC2GaO9eL0LABWTiBYmA06W6kHgvCqEJiAIJiu3gcvgUsscHUERm+kaCxyxa+zRPk0SgJEgfIvbAdIAQLCAYlCj4DBw0IBQsMCjIqBAcPAooCBg9pKgsJLwUFOhCZKyQDA3YqIQAh+QQJCgAAACwAAAAAEAAQAAAFdSAgAgIpnOSonmxbqiThCrJKEHFbo8JxDDOZYFFb+A41E4H4OhkOipXwBElYITDAckFEOBgMQ3arkMkUBdxIUGZpEb7kaQBRlASPg0FQQHAbEEMGDSVEAA1QBhAED1E0NgwFAooCDWljaQIQCE5qMHcNhCkjIQAh+QQJCgAAACwAAAAAEAAQAAAFeSAgAgIpnOSoLgxxvqgKLEcCC65KEAByKK8cSpA4DAiHQ/DkKhGKh4ZCtCyZGo6F6iYYPAqFgYy02xkSaLEMV34tELyRYNEsCQyHlvWkGCzsPgMCEAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAAA==",html:'<div class="ias-spinner" style="text-align: center;"><img src="{src}"/></div>'};var IASTriggerExtension=function(t){return t=jQuery.extend({},this.defaults,t),this.ias=null,this.html=t.html.replace("{text}",t.text),this.htmlPrev=t.htmlPrev.replace("{text}",t.textPrev),this.enabled=!0,this.count=0,this.offset=t.offset,this.$triggerNext=null,this.$triggerPrev=null,this.showTriggerNext=function(){if(!this.enabled)return!0;if(!1===this.offset||++this.count<this.offset)return!0;var t=this.$triggerNext||(this.$triggerNext=this.createTrigger(this.next,this.html)),i=this.ias.getLastItem();return i.after(t),t.fadeIn(),!1},this.showTriggerPrev=function(){if(!this.enabled)return!0;var t=this.$triggerPrev||(this.$triggerPrev=this.createTrigger(this.prev,this.htmlPrev)),i=this.ias.getFirstItem();return i.before(t),t.fadeIn(),!1},this.onRendered=function(){this.enabled=!0},this.createTrigger=function(t,i){var e,s=(new Date).getTime();return i=i||this.html,e=jQuery(i).attr("id","ias_trigger_"+s),e.hide(),e.on("click",jQuery.proxy(t,this)),e},this};IASTriggerExtension.prototype.bind=function(t){this.ias=t,t.on("next",jQuery.proxy(this.showTriggerNext,this),this.priority),t.on("rendered",jQuery.proxy(this.onRendered,this),this.priority);try{t.on("prev",jQuery.proxy(this.showTriggerPrev,this),this.priority)}catch(i){}},IASTriggerExtension.prototype.unbind=function(t){t.off("next",this.showTriggerNext),t.off("rendered",this.onRendered);try{t.off("prev",this.showTriggerPrev)}catch(i){}},IASTriggerExtension.prototype.next=function(){this.enabled=!1,this.ias.pause(),this.$triggerNext&&(this.$triggerNext.remove(),this.$triggerNext=null),this.ias.next()},IASTriggerExtension.prototype.prev=function(){this.enabled=!1,this.ias.pause(),this.$triggerPrev&&(this.$triggerPrev.remove(),this.$triggerPrev=null),this.ias.prev()},IASTriggerExtension.prototype.defaults={text:"Load more items",html:'<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',textPrev:"Load previous items",htmlPrev:'<div class="ias-trigger ias-trigger-prev" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',offset:0},IASTriggerExtension.prototype.priority=1e3;var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};$(document).on("click",function(){$(".results").hide()}),$("#searchbox").on("click",function(t){$(".results").empty(),$(".results").append('<li><a href="#">No result found... Try something else?</a></li>'),$(".results").show(),t.stopPropagation()});var delayTimer=null;$("#searchbox").on("keyup",function(){clearTimeout(delayTimer),delayTimer=setTimeout(function(){var t=$("#searchbox").val();""!=t&&$.get("/posts/search?q="+t,function(t){$(".results").empty(),t.length>0?t.forEach(function(t){$(".results").append('<li><a href="/posts/'+t.id+'"><span class="result-title">'+escapeHtml(t.title)+'</span>&nbsp;&nbsp;<span class="label tag-'+t.type+'">'+escapeHtml(t.type)+'</span>&nbsp;&nbsp;<br/><span class="result-body">'+escapeHtml(t.body)+"</span></a></li>")}):$(".results").append('<li><a href="#">No result found... Try something else?</a></li>')})},1e3)});