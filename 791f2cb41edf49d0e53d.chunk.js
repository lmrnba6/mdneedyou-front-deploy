webpackJsonp([7],{381:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(4),c=a(f),g=n(139),h=n(41),_=n(675),d=a(_),p=(n(69),(i=(0,h.connect)(function(e){return{local:e.local.local}}))(l=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),s(t,[{key:"render",value:function(){return d.default.setLanguage(this.props.local.toLowerCase()||"gb"),c.default.createElement("header",null,c.default.createElement("div",{className:"container",id:"header"},c.default.createElement("div",{className:"intro-text"},c.default.createElement("div",{className:"intro-lead-in"},"haha",d.default.home_find_doctor_title),c.default.createElement("div",{className:"intro-heading"},d.default.home_bookNow),c.default.createElement(g.Link,{to:"/searchHome",className:"page-scroll btn btn-xl"},d.default.home_button_search))))}}]),t}(c.default.Component))||l);t.default=p},675:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(676),o=a(r),u=n(678),i=a(u),l=n(679),s=a(l),f=n(680),c=a(f),g=new o.default({fr:i.default,dz:c.default,gb:s.default});t.default=g},676:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(4),l=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(677),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),c=/(\{\d+\})/,g=function(e){return"symbol"===u(e.$$typeof)},h=function(){function e(t){a(this,e),this._interfaceLanguage=f.getInterfaceLanguage(),this._language=this._interfaceLanguage,this.setContent(t)}return o(e,[{key:"_getBestMatchingLanguage",value:function(e,t){if(t[e])return e;var n=e.indexOf("-"),a=n>=0?e.substring(0,n):e;return t[a]?a:Object.keys(t)[0]}}]),o(e,[{key:"setContent",value:function(e){this._defaultLanguage=Object.keys(e)[0],this._defaultLanguageFirstLevelKeys=[],this._props=e,f.validateTranslationKeys(Object.keys(e[this._defaultLanguage]));for(var t in this._props[this._defaultLanguage])"string"==typeof this._props[this._defaultLanguage][t]&&this._defaultLanguageFirstLevelKeys.push(t);this.setLanguage(this._interfaceLanguage)}},{key:"setLanguage",value:function(e){var t=this._getBestMatchingLanguage(e,this._props),n=Object.keys(this._props)[0];if(this._language=t,this._props[t]){var a=!0,r=!1,o=void 0;try{for(var u,i=this._defaultLanguageFirstLevelKeys[Symbol.iterator]();!(a=(u=i.next()).done);a=!0)s=u.value,delete this[s]}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}var l=Object.assign({},this._props[this._language]);for(var s in l)l.hasOwnProperty(s)&&(this[s]=l[s]);n!==this._language&&(l=this._props[n],this._fallbackValues(l,this))}}},{key:"_fallbackValues",value:function(e,t){for(var n in e)e.hasOwnProperty(n)&&!t[n]?(t[n]=e[n],console.log("🚧 👷 key '"+n+"' not found in localizedStrings for language "+this._language+" 🚧")):"string"!=typeof t[n]&&this._fallbackValues(e[n],t[n])}},{key:"getLanguage",value:function(){return this._language}},{key:"getInterfaceLanguage",value:function(){return this._interfaceLanguage}},{key:"getAvailableLanguages",value:function(){if(!this._availableLanguages){this._availableLanguages=[];for(var e in this._props)this._availableLanguages.push(e)}return this._availableLanguages}},{key:"formatString",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return e.split(c).filter(function(e){return!!e}).map(function(e,t){if(e.match(c)){var a=n[e.slice(1,-1)];return g(a)?l.default.Children.toArray(a).map(function(e){return r({},e,{key:t.toString()})}):a}return e})}},{key:"getString",value:function(e,t){try{return this._props[t][e]}catch(n){console.log("No localization found for key "+e+" and language "+t)}return null}}]),e}();t.default=h},677:function(e,t,n){"use strict";function a(){return navigator&&navigator.language?navigator.language:navigator&&navigator.languages&&navigator.languages[0]?navigator.languages[0]:navigator&&navigator.userLanguage?navigator.userLanguage:navigator&&navigator.browserLanguage?navigator.browserLanguage:"en-US"}function r(e){var t=["_interfaceLanguage","_language","_defaultLanguage","_defaultLanguageFirstLevelKeys","_props"];e.forEach(function(e){if(t.includes(e))throw new Error(e+" cannot be used as a key. It is a reserved word.")})}Object.defineProperty(t,"__esModule",{value:!0}),t.getInterfaceLanguage=a,t.validateTranslationKeys=r},678:function(e,t){e.exports={home_bookNow:"RESERVER MAINTENANT",home_button_search:"CHERCHER",home_find_doctor_title:"Trouver Votre Docteur ou Clinique"}},679:function(e,t){e.exports={home_bookNow:"BOOK NOW",home_button_search:"SEARCH",home_find_doctor_title:"Find Your Doctor or Clinic"}},680:function(e,t){e.exports={home_bookNow:"إحجز الآن",home_button_search:"بحث",home_find_doctor_title:"ابحث على طبيبك أو عيادة"}}});
//# sourceMappingURL=791f2cb41edf49d0e53d.chunk.js.map