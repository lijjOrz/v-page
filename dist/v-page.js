!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vPage",[],t):"object"==typeof exports?exports.vPage=t():e.vPage=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";var n=a(9),i=n.a.languages,r=n.a.defaults;t.a={name:"v-page",props:["setting"],data:function(){var e=Object.assign({},r,this.setting),t=i[e.language];return{config:e,pageNumber:3,pageSize:e.pageSizeMenu&&Array.isArray(e.pageSizeMenu)&&e.pageSizeMenu.length?e.pageSizeMenu[0]:10,totalRow:e.totalRow,totalPage:0,currentPage:e.currentPage,lengthList:e.pageSizeMenu,pageNumberSize:5,language:e.language,i18n:t,pageClass:{vPagination:!0,vPaginationRight:!1,vPaginationCenter:!1}}},computed:{pageNumbers:function(){var e=void 0,t=void 0,a=[],n=this.currentPage,i=Math.floor(this.pageNumberSize/2);this.totalPage<this.pageNumberSize?(e=1,t=this.totalPage):n<=i?(e=1,t=this.pageNumberSize):n>=this.totalPage-i?(e=this.totalPage-this.pageNumberSize+1,t=this.totalPage):(e=n-i,t=e+this.pageNumberSize-1);for(var r=e;r<=t;r++)a.push(r);return a}},watch:{currentPage:function(e){this.goPage(e)},"setting.currentPage":function(e){this.currentPage=e},"setting.totalRow":function(e){this.totalRow=e,this.calcTotalPage()}},methods:{goPage:function(e){this.currentPage=e,this.$emit("page-change",{pageNumber:e,pageSize:Number(this.pageSize)}),this.calcTotalPage()},calcTotalPage:function(){this.totalPage=Math.ceil(this.totalRow/this.pageSize)},switchPage:function(e){if("string"==typeof e)switch(e){case"first":1!==this.currentPage&&(this.currentPage=1);break;case"previous":1!==this.currentPage&&this.currentPage--;break;case"next":this.currentPage!==this.totalPage&&this.currentPage++;break;case"last":this.currentPage!==this.totalPage&&(this.currentPage=this.totalPage)}else"number"==typeof e&&(this.currentPage=e)},switchLength:function(){this.goPage(1)}},mounted:function(){"center"===this.config.align?this.pageClass.vPaginationCenter=!0:"right"===this.config.align&&(this.pageClass.vPaginationRight=!0),this.goPage(1)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.component(n.a.name,n.a)}};t.default=i},function(e,t,a){"use strict";function n(e){a(3)}var i=a(0),r=a(10),o=a(8),s=n,l=o(i.a,r.a,!1,s,"data-v-500191a6",null);t.a=l.exports},function(e,t,a){var n=a(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(6)("5605c864",n,!0,{})},function(e,t,a){t=e.exports=a(5)(!1),t.push([e.i,"div.vPagination[data-v-500191a6]{margin:0;display:block}div.vPagination.vPaginationRight[data-v-500191a6]{text-align:right}div.vPagination.vPaginationCenter[data-v-500191a6]{text-align:center}div.vPagination>ul[data-v-500191a6]{display:inline-block;margin-bottom:0;margin-left:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.05);padding:0}div.vPagination>ul>li[data-v-500191a6]{text-align:center;display:inline;box-sizing:border-box;margin:0}div.vPagination>ul>li>a[data-v-500191a6]{margin:0;border:1px solid #ddd;border-radius:0;padding:6px 12px;line-height:20px;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;background-color:#fff;float:left;text-decoration:none;border-left-width:0;box-sizing:content-box;color:#000;-webkit-transition:all .5s cubic-bezier(.175,.885,.32,1);transition:all .5s cubic-bezier(.175,.885,.32,1)}div.vPagination>ul>li>a[data-v-500191a6]:hover{box-shadow:0 0 12px rgba(0,0,0,.2);-moz-box-shadow:0 0 12px rgba(0,0,0,.2);-webkit-box-shadow:0 0 12px rgba(0,0,0,.2)}div.vPagination>ul>li.disabled>a[data-v-500191a6]{color:#999;cursor:default}div.vPagination>ul>li.disabled>a[data-v-500191a6]:hover{color:#999;background-color:#fff;box-shadow:none}div.vPagination>ul>li.active>a[data-v-500191a6],div.vPagination>ul>li.active>span[data-v-500191a6]{cursor:default;color:#999;background-color:#eee}div.vPagination>ul>li.active>a[data-v-500191a6]:hover,div.vPagination>ul>li.active>span[data-v-500191a6]:hover{box-shadow:none}div.vPagination>ul>li:first-child>a[data-v-500191a6],div.vPagination>ul>li:first-child>span[data-v-500191a6]{border-left-width:1px;-webkit-border-bottom-left-radius:2px;border-bottom-left-radius:2px;-webkit-border-top-left-radius:2px;border-top-left-radius:2px;-moz-border-radius-bottomleft:2px;-moz-border-radius-topleft:2px}div.vPagination>ul>li:last-child>a[data-v-500191a6],div.vPagination>ul>li:last-child>span[data-v-500191a6]{-webkit-border-bottom-right-radius:2px;border-bottom-right-radius:2px;-webkit-border-top-right-radius:2px;border-top-right-radius:2px;-moz-border-radius-bottomright:2px;-moz-border-radius-topright:2px}div.vPagination>ul>li.vPaginationList a[data-v-500191a6]{line-height:20px;height:20px}div.vPagination>ul>li.vPaginationList select[data-v-500191a6]{margin:-2px 0 0 5px;width:auto!important;vertical-align:middle;height:22px;line-height:22px;font-size:12px;padding:0;display:inline-block;border:1px solid #ccc}div.vPagination>ul>li.vPaginationList select[data-v-500191a6]:hover{box-shadow:0 0 8px rgba(0,0,0,.2);-moz-box-shadow:0 0 8px rgba(0,0,0,.2);-webkit-box-shadow:0 0 8px rgba(0,0,0,.2)}",""])},function(e,t){function a(e,t){var a=e[1]||"",i=e[3];if(!i)return a;if(t&&"function"==typeof btoa){var r=n(i);return[a].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[a].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=a(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&n[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),t.push(o))}},t}},function(e,t,a){function n(e){for(var t=0;t<e.length;t++){var a=e[t],n=c[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(r(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var o=[],i=0;i<a.parts.length;i++)o.push(r(a.parts[i]));c[a.id]={id:a.id,refs:1,parts:o}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,a,n=document.querySelector("style["+b+'~="'+e.id+'"]');if(n){if(f)return v;n.parentNode.removeChild(n)}if(P){var r=p++;n=g||(g=i()),t=o.bind(null,n,r,!1),a=o.bind(null,n,r,!0)}else n=i(),t=s.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}function o(e,t,a,n){var i=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function s(e,t){var a=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),h.ssrId&&e.setAttribute(b,t.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=a(7),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),g=null,p=0,f=!1,v=function(){},h=null,b="data-vue-ssr-id",P="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,i){f=a,h=i||{};var r=u(e,t);return n(r),function(t){for(var a=[],i=0;i<r.length;i++){var o=r[i],s=c[o.id];s.refs--,a.push(s)}t?(r=u(e,t),n(r)):r=[];for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],s=r[1],l=r[2],u=r[3],c={id:e+":"+i,css:s,media:l,sourceMap:u};n[o]?n[o].parts.push(c):a.push(n[o]={id:o,parts:[c]})}return a}},function(e,t){e.exports=function(e,t,a,n,i,r){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,g=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),g(e,t)}):u.beforeCreate=g?[].concat(g,c):[c]}return{esModule:o,exports:s,options:u}}},function(e,t,a){"use strict";var n={cn:{pageLength:"每页记录数 ",pageInfo:"当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",first:"首页",previous:"«",next:"»",last:"尾页"},en:{pageLength:"Page length ",pageInfo:"Current #pageNumber# / #totalPage# （total #totalRow# records）",first:"First",previous:"«",next:"»",last:"Last"},jp:{pageLength:"ページごとの記録数",pageInfo:"現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",first:"トップページ",previous:"«",next:"»",last:"尾のページ"}},i={totalRow:0,info:!0,pageSizeMenu:[10,20,50,100],language:"cn",align:"right",currentPage:2};t.a={languages:n,defaults:i}},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.pageClass]},[a("ul",[e.config.pageSizeMenu?a("li",{staticClass:"disabled vPaginationList"},[a("a",[e._v(e._s(e.i18n.pageLength)+"\n                "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pageSize,expression:"pageSize"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.pageSize=t.target.multiple?a:a[0]},e.switchLength]}},e._l(e.lengthList,function(t){return a("option",[e._v(e._s(t))])}))])]):e._e(),e._v(" "),e.config.info?a("li",{staticClass:"disabled bPageInfo"},[a("a",[e._v(e._s(e.i18n.pageInfo.replace("#pageNumber#",e.currentPage).replace("#totalPage#",e.totalPage).replace("#totalRow#",e.totalRow)))])]):e._e(),e._v(" "),a("li",{class:{disabled:1===e.currentPage,bPageControlButton:!0}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("first")}}},[e._v(e._s(e.i18n.first))])]),e._v(" "),a("li",{class:{disabled:1===e.currentPage,bPageControlButton:!0}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("previous")}}},[e._v(e._s(e.i18n.previous))])]),e._v(" "),e._l(e.pageNumbers,function(t,n){return a("li",{class:{active:t===e.currentPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){e.switchPage(t)}}},[e._v(e._s(t))])])}),e._v(" "),a("li",{class:{bPageControlButton:!0,disabled:e.currentPage===e.totalPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("next")}}},[e._v(e._s(e.i18n.next))])]),e._v(" "),a("li",{class:{bPageControlButton:!0,disabled:e.currentPage===e.totalPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("last")}}},[e._v(e._s(e.i18n.last))])])],2)])},i=[],r={render:n,staticRenderFns:i};t.a=r}])});
//# sourceMappingURL=v-page.js.map