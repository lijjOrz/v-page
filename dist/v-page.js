!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vPage",[],t):"object"==typeof exports?exports.vPage=t():e.vPage=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";var i=a(9),n=i.a.languages,r=i.a.defaults;t.a={name:"v-page",props:["setting"],data:function(){var e=Object.assign({},r,this.setting),t=n[e.language];return{config:e,pageNumber:1,pageSize:e.pageSizeMenu&&Array.isArray(e.pageSizeMenu)&&e.pageSizeMenu.length?e.pageSizeMenu[0]:10,totalRow:e.totalRow,totalPage:0,currentPage:e.currentPage,lengthList:e.pageSizeMenu,pageNumberSize:5,language:e.language,i18n:t,pageClass:{vPagination:!0,vPaginationRight:!1,vPaginationCenter:!1}}},computed:{pageNumbers:function(){var e=void 0,t=void 0,a=[],i=this.currentPage,n=Math.floor(this.pageNumberSize/2);this.totalPage<this.pageNumberSize?(e=1,t=this.totalPage):i<=n?(e=1,t=this.pageNumberSize):i>=this.totalPage-n?(e=this.totalPage-this.pageNumberSize+1,t=this.totalPage):(e=i-n,t=e+this.pageNumberSize-1);for(var r=e;r<=t;r++)a.push(r);return a}},watch:{currentPage:function(e){this.goPage(e)},"setting.totalRow":function(e){this.totalRow=e,this.calcTotalPage()}},methods:{goPage:function(e){this.currentPage=e,this.$emit("page-change",{pageNumber:e,pageSize:Number(this.pageSize)}),this.calcTotalPage()},calcTotalPage:function(){this.totalPage=Math.ceil(this.totalRow/this.pageSize)},switchPage:function(e){if("string"==typeof e)switch(e){case"first":1!==this.currentPage&&(this.currentPage=1);break;case"previous":1!==this.currentPage&&this.currentPage--;break;case"next":this.currentPage!==this.totalPage&&this.currentPage++;break;case"last":this.currentPage!==this.totalPage&&(this.currentPage=this.totalPage)}else"number"==typeof e&&(this.currentPage=e)},switchLength:function(){this.goPage(1)}},mounted:function(){"center"===this.config.align?this.pageClass.vPaginationCenter=!0:"right"===this.config.align&&(this.pageClass.vPaginationRight=!0),this.goPage(1)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),n={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.component(i.a.name,i.a)}};t.default=n},function(e,t,a){"use strict";function i(e){a(3)}var n=a(0),r=a(10),o=a(8),s=i,l=o(n.a,r.a,!1,s,"data-v-73f8e5e2",null);t.a=l.exports},function(e,t,a){var i=a(4);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(6)("46be0774",i,!0,{})},function(e,t,a){t=e.exports=a(5)(!1),t.push([e.i,"div.vPagination[data-v-73f8e5e2]{margin:0;display:block}div.vPagination.vPaginationRight[data-v-73f8e5e2]{text-align:right}div.vPagination.vPaginationCenter[data-v-73f8e5e2]{text-align:center}div.vPagination>ul[data-v-73f8e5e2]{display:inline-block;margin-bottom:0;margin-left:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.05);padding:0}div.vPagination>ul>li[data-v-73f8e5e2]{text-align:center;display:inline;box-sizing:border-box;margin:0}div.vPagination>ul>li>a[data-v-73f8e5e2]{margin:0;border:1px solid #ddd;border-radius:0;padding:6px 12px;line-height:20px;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;background-color:#fff;float:left;text-decoration:none;border-left-width:0;box-sizing:content-box;color:#000;-webkit-transition:all .5s cubic-bezier(.175,.885,.32,1);transition:all .5s cubic-bezier(.175,.885,.32,1)}div.vPagination>ul>li>a[data-v-73f8e5e2]:hover{box-shadow:0 0 12px rgba(0,0,0,.2);-moz-box-shadow:0 0 12px rgba(0,0,0,.2);-webkit-box-shadow:0 0 12px rgba(0,0,0,.2)}div.vPagination>ul>li.disabled>a[data-v-73f8e5e2]{color:#999;cursor:default}div.vPagination>ul>li.disabled>a[data-v-73f8e5e2]:hover{color:#999;background-color:#fff;box-shadow:none}div.vPagination>ul>li.active>a[data-v-73f8e5e2],div.vPagination>ul>li.active>span[data-v-73f8e5e2]{cursor:default;color:#999;background-color:#eee}div.vPagination>ul>li.active>a[data-v-73f8e5e2]:hover,div.vPagination>ul>li.active>span[data-v-73f8e5e2]:hover{box-shadow:none}div.vPagination>ul>li:first-child>a[data-v-73f8e5e2],div.vPagination>ul>li:first-child>span[data-v-73f8e5e2]{border-left-width:1px;-webkit-border-bottom-left-radius:2px;border-bottom-left-radius:2px;-webkit-border-top-left-radius:2px;border-top-left-radius:2px;-moz-border-radius-bottomleft:2px;-moz-border-radius-topleft:2px}div.vPagination>ul>li:last-child>a[data-v-73f8e5e2],div.vPagination>ul>li:last-child>span[data-v-73f8e5e2]{-webkit-border-bottom-right-radius:2px;border-bottom-right-radius:2px;-webkit-border-top-right-radius:2px;border-top-right-radius:2px;-moz-border-radius-bottomright:2px;-moz-border-radius-topright:2px}div.vPagination>ul>li.vPaginationList a[data-v-73f8e5e2]{line-height:20px;height:20px}div.vPagination>ul>li.vPaginationList select[data-v-73f8e5e2]{margin:-2px 0 0 5px;width:auto!important;vertical-align:middle;height:22px;line-height:22px;font-size:12px;padding:0;display:inline-block;border:1px solid #ccc}div.vPagination>ul>li.vPaginationList select[data-v-73f8e5e2]:hover{box-shadow:0 0 8px rgba(0,0,0,.2);-moz-box-shadow:0 0 8px rgba(0,0,0,.2);-webkit-box-shadow:0 0 8px rgba(0,0,0,.2)}",""])},function(e,t){function a(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var r=i(n);return[a].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([r]).join("\n")}return[a].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=a(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(i[r]=!0)}for(n=0;n<e.length;n++){var o=e[n];"number"==typeof o[0]&&i[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),t.push(o))}},t}},function(e,t,a){function i(e){for(var t=0;t<e.length;t++){var a=e[t],i=c[a.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](a.parts[n]);for(;n<a.parts.length;n++)i.parts.push(r(a.parts[n]));i.parts.length>a.parts.length&&(i.parts.length=a.parts.length)}else{for(var o=[],n=0;n<a.parts.length;n++)o.push(r(a.parts[n]));c[a.id]={id:a.id,refs:1,parts:o}}}}function n(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,a,i=document.querySelector("style["+b+'~="'+e.id+'"]');if(i){if(f)return v;i.parentNode.removeChild(i)}if(P){var r=p++;i=g||(g=n()),t=o.bind(null,i,r,!1),a=o.bind(null,i,r,!0)}else i=n(),t=s.bind(null,i),a=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else a()}}function o(e,t,a,i){var n=a?"":i.css;if(e.styleSheet)e.styleSheet.cssText=m(t,n);else{var r=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function s(e,t){var a=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),h.ssrId&&e.setAttribute(b,t.id),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=a(7),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),g=null,p=0,f=!1,v=function(){},h=null,b="data-vue-ssr-id",P="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,n){f=a,h=n||{};var r=u(e,t);return i(r),function(t){for(var a=[],n=0;n<r.length;n++){var o=r[n],s=c[o.id];s.refs--,a.push(s)}t?(r=u(e,t),i(r)):r=[];for(var n=0;n<a.length;n++){var s=a[n];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],i={},n=0;n<t.length;n++){var r=t[n],o=r[0],s=r[1],l=r[2],u=r[3],c={id:e+":"+n,css:s,media:l,sourceMap:u};i[o]?i[o].parts.push(c):a.push(i[o]={id:o,parts:[c]})}return a}},function(e,t){e.exports=function(e,t,a,i,n,r){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),n&&(u._scopeId=n);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):i&&(c=i),c){var d=u.functional,g=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),g(e,t)}):u.beforeCreate=g?[].concat(g,c):[c]}return{esModule:o,exports:s,options:u}}},function(e,t,a){"use strict";var i={cn:{pageLength:"每页记录数 ",pageInfo:"当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",first:"首页",previous:"«",next:"»",last:"尾页"},en:{pageLength:"Page length ",pageInfo:"Current #pageNumber# / #totalPage# （total #totalRow# records）",first:"First",previous:"«",next:"»",last:"Last"},jp:{pageLength:"ページごとの記録数",pageInfo:"現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",first:"トップページ",previous:"«",next:"»",last:"尾のページ"}},n={totalRow:0,info:!0,pageSizeMenu:[10,20,50,100],language:"cn",align:"right",currentPage:2};t.a={languages:i,defaults:n}},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.pageClass]},[a("ul",[e.config.pageSizeMenu?a("li",{staticClass:"disabled vPaginationList"},[a("a",[e._v(e._s(e.i18n.pageLength)+"\n                "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.pageSize,expression:"pageSize"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.pageSize=t.target.multiple?a:a[0]},e.switchLength]}},e._l(e.lengthList,function(t){return a("option",[e._v(e._s(t))])}))])]):e._e(),e._v(" "),e.config.info?a("li",{staticClass:"disabled bPageInfo"},[a("a",[e._v(e._s(e.i18n.pageInfo.replace("#pageNumber#",e.currentPage).replace("#totalPage#",e.totalPage).replace("#totalRow#",e.totalRow)))])]):e._e(),e._v(" "),a("li",{class:{disabled:1===e.currentPage,bPageControlButton:!0}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("first")}}},[e._v(e._s(e.i18n.first))])]),e._v(" "),a("li",{class:{disabled:1===e.currentPage,bPageControlButton:!0}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("previous")}}},[e._v(e._s(e.i18n.previous))])]),e._v(" "),e._l(e.pageNumbers,function(t,i){return a("li",{class:{active:t===e.currentPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){e.switchPage(t)}}},[e._v(e._s(t))])])}),e._v(" "),a("li",{class:{bPageControlButton:!0,disabled:e.currentPage===e.totalPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("next")}}},[e._v(e._s(e.i18n.next))])]),e._v(" "),a("li",{class:{bPageControlButton:!0,disabled:e.currentPage===e.totalPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.switchPage("last")}}},[e._v(e._s(e.i18n.last))])])],2)])},n=[],r={render:i,staticRenderFns:n};t.a=r}])});
//# sourceMappingURL=v-page.js.map