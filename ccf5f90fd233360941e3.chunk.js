webpackJsonp([6,8],{1099:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(4),c=function(e){return e&&e.__esModule?e:{default:e}}(l),u=(o(139),function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("form",{action:"",className:"search-form"},c.default.createElement("div",{className:"form-group has-feedback"},c.default.createElement("label",{htmlFor:"search",className:"sr-only"},"Search"),c.default.createElement("input",{type:"text",className:"form-control",name:"search",id:"search",placeholder:"search"}),c.default.createElement("span",{className:"glyphicon glyphicon-search form-control-feedback"})))}}]),t}(c.default.Component));t.default=u},378:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(4),s=n(u),p=o(568),f=n(p),d=(o(139),o(41),o(44)),m=n(d),h=function(e){function t(e){a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleFormSubmit=function(e){e.preventDefault(),(0,p.geocodeByAddress)(o.state.address).then(function(e){return o.getCity(e[0])}).then(function(e){return o.setState({result:e})}).catch(function(e){return console.error("Error",e)})},o.handleSelect=function(e){e.address,e.placeId;$(o.input).focus()},o.state={city:"",address:"",result:"",country:"",placeholder:"Where are you...."},o.onChange=function(e){return o.setState({address:e})},o.getCity=o.getCity.bind(o),o}return l(t,e),c(t,[{key:"getCity",value:function(e){console.log(e);var t=e.address_components,o="",n="",r="",a="",i="";$.each(t,function(e,t){"route"==t.types[0]&&(o=t.long_name),"locality"==t.types[0]&&(n=t.long_name.replace(" ","").toLowerCase()),"country"==t.types[0]&&(r=t.long_name),"postal_code_prefix"==t.types[0]&&(a=t.long_name),"street_number"==t.types[0]&&(i=t.long_name)}),null===n?this.setState({placeholder:"Please enter a valid address"}):(this.setState({city:n,country:r}),(0,m.default)().push("/businessList/"+n.trim().toLocaleLowerCase()))}},{key:"render",value:function(){var e,t=this,o=function(e){var t=e.suggestion;return s.default.createElement("div",null,s.default.createElement("i",{className:"fa fa-map-marker"})," ",t)},n={placeholder:this.props.placeholder,value:this.state.address,onChange:this.onChange},a={root:{position:"relative",paddingBottom:"0px",color:"black"},input:{display:"inline-block",width:"75%",padding:"20px",borderRadius:"200px",border:"black",float:"left"},autocompleteContainer:{position:"absolute",top:"100%",backgroundColor:"white",border:"1px solid #555555",width:"75%",marginTop:"40px"},autocompleteItem:{backgroundColor:"#ffffff",padding:"10px",color:"#0000",cursor:"pointer",textAlign:"left"},autocompleteItemActive:{backgroundColor:"#1996d7"}};return s.default.createElement("div",{id:"autoComplete",className:"col-md-6 col-md-offset-3"},s.default.createElement("form",{className:"formMap ",onSubmit:this.handleFormSubmit},s.default.createElement("button",{className:"pull-right autoComplete btn btn-lg btn-primary",type:"submit"},"Heal me"),s.default.createElement(f.default,(e={onSelect:this.handleSelect},r(e,"onSelect",this.handleSelect),r(e,"autocompleteItem",o),r(e,"styles",a),r(e,"inputProps",n),e)),s.default.createElement("input",{id:"trickAutoComplete",ref:function(e){t.input=e},type:"text"})))}}]),t}(s.default.Component);t.default=h},396:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(4),u=n(c),s=(o(139),o(1099)),p=(n(s),o(378)),f=n(p),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),l(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"searchHome"},u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"intro-text"},u.default.createElement("div",{className:"intro-lead-in"},"Find Your Doctor or Clinic"),u.default.createElement(f.default,null))))}}]),t}(u.default.Component);t.default=d},568:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLatLng=t.geocodeByPlaceId=t.geocodeByAddress=void 0;var n=o(569),r=function(e){return e&&e.__esModule?e:{default:e}}(n),a=o(572);t.geocodeByAddress=a.geocodeByAddress,t.geocodeByPlaceId=a.geocodeByPlaceId,t.getLatLng=a.getLatLng,t.default=r.default},569:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(4),s=n(u),p=o(6),f=n(p),d=o(570),m=n(d),h=o(571),y=n(h),g=function(e){function t(e){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={autocompleteItems:[]},o.autocompleteCallback=o.autocompleteCallback.bind(o),o.handleInputKeyDown=o.handleInputKeyDown.bind(o),o.handleInputChange=o.handleInputChange.bind(o),o.debouncedFetchPredictions=(0,m.default)(o.fetchPredictions,o.props.debounce),o}return i(t,e),c(t,[{key:"componentDidMount",value:function(){if(!window.google)throw new Error("Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library");if(!window.google.maps.places)throw new Error("Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library");this.autocompleteService=new google.maps.places.AutocompleteService,this.autocompleteOK=google.maps.places.PlacesServiceStatus.OK}},{key:"autocompleteCallback",value:function(e,t){if(t!=this.autocompleteOK)return this.props.onError(t),void(this.props.clearItemsOnError&&this.clearAutocomplete());var o=function(e){return{mainText:e.main_text,secondaryText:e.secondary_text}},n=this.props.highlightFirstSuggestion;this.setState({autocompleteItems:e.map(function(e,t){return{suggestion:e.description,placeId:e.place_id,active:!(!n||0!==t),index:t,formattedSuggestion:o(e.structured_formatting)}})})}},{key:"fetchPredictions",value:function(){var e=this.props.inputProps.value;e.length&&this.autocompleteService.getPlacePredictions(l({},this.props.options,{input:e}),this.autocompleteCallback)}},{key:"clearAutocomplete",value:function(){this.setState({autocompleteItems:[]})}},{key:"selectAddress",value:function(e,t){this.clearAutocomplete(),this.handleSelect(e,t)}},{key:"handleSelect",value:function(e,t){this.props.onSelect?this.props.onSelect(e,t):this.props.inputProps.onChange(e)}},{key:"getActiveItem",value:function(){return this.state.autocompleteItems.find(function(e){return e.active})}},{key:"selectActiveItemAtIndex",value:function(e){var t=this.state.autocompleteItems.find(function(t){return t.index===e}).suggestion;this.setActiveItemAtIndex(e),this.props.inputProps.onChange(t)}},{key:"handleEnterKey",value:function(){var e=this.getActiveItem();void 0===e?this.handleEnterKeyWithoutActiveItem():this.selectAddress(e.suggestion,e.placeId)}},{key:"handleEnterKeyWithoutActiveItem",value:function(){this.props.onEnterKeyDown&&(this.props.onEnterKeyDown(this.props.inputProps.value),this.clearAutocomplete())}},{key:"handleDownKey",value:function(){if(0!==this.state.autocompleteItems.length){var e=this.getActiveItem();if(void 0===e)this.selectActiveItemAtIndex(0);else{var t=(e.index+1)%this.state.autocompleteItems.length;this.selectActiveItemAtIndex(t)}}}},{key:"handleUpKey",value:function(){if(0!==this.state.autocompleteItems.length){var e=this.getActiveItem();if(void 0===e)this.selectActiveItemAtIndex(this.state.autocompleteItems.length-1);else{var t=void 0;t=0===e.index?this.state.autocompleteItems.length-1:(e.index-1)%this.state.autocompleteItems.length,this.selectActiveItemAtIndex(t)}}}},{key:"handleInputKeyDown",value:function(e){switch(e.key){case"Enter":e.preventDefault(),this.handleEnterKey();break;case"ArrowDown":e.preventDefault(),this.handleDownKey();break;case"ArrowUp":e.preventDefault(),this.handleUpKey();break;case"Escape":this.clearAutocomplete()}this.props.inputProps.onKeyDown&&this.props.inputProps.onKeyDown(e)}},{key:"setActiveItemAtIndex",value:function(e){this.setState({autocompleteItems:this.state.autocompleteItems.map(function(t,o){return o===e?l({},t,{active:!0}):l({},t,{active:!1})})})}},{key:"handleInputChange",value:function(e){if(this.props.inputProps.onChange(e.target.value),!e.target.value)return void this.clearAutocomplete();this.debouncedFetchPredictions()}},{key:"handleInputOnBlur",value:function(e){this.clearAutocomplete(),this.props.inputProps.onBlur&&this.props.inputProps.onBlur(e)}},{key:"inlineStyleFor",value:function(){for(var e=this.props,t=e.classNames,o=e.styles,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return r.some(function(e){return t.hasOwnProperty(e)})?{}:r.reduce(function(e,t){return l({},e,y.default[t],o[t])},{})}},{key:"classNameFor",value:function(){for(var e=this.props.classNames,t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];return o.reduce(function(t,o){var n=e[o]||"";return n?t+" "+n:t},"")}},{key:"getInputProps",value:function(){var e=this;return l({},{type:"text"},this.props.inputProps,{onChange:function(t){e.handleInputChange(t)},onKeyDown:function(t){e.handleInputKeyDown(t)},onBlur:function(t){e.handleInputOnBlur(t)},style:this.inlineStyleFor("input"),className:this.classNameFor("input")})}},{key:"render",value:function(){var e=this,t=this.props,o=(t.classNames,t.styles,this.state.autocompleteItems),n=this.getInputProps();return s.default.createElement("div",{id:"PlacesAutocomplete__root",style:this.inlineStyleFor("root"),className:this.classNameFor("root")},s.default.createElement("input",n),o.length>0&&s.default.createElement("div",{id:"PlacesAutocomplete__autocomplete-container",style:this.inlineStyleFor("autocompleteContainer"),className:this.classNameFor("autocompleteContainer")},o.map(function(t,o){return s.default.createElement("div",{key:t.placeId,onMouseOver:function(){return e.setActiveItemAtIndex(t.index)},onMouseDown:function(){return e.selectAddress(t.suggestion,t.placeId)},style:t.active?e.inlineStyleFor("autocompleteItem","autocompleteItemActive"):e.inlineStyleFor("autocompleteItem"),className:t.active?e.classNameFor("autocompleteItem","autocompleteItemActive"):e.classNameFor("autocompleteItem")},e.props.autocompleteItem({suggestion:t.suggestion,formattedSuggestion:t.formattedSuggestion}))})))}}]),t}(u.Component);g.propTypes={inputProps:function(e,t){var o=e[t];if(!o.hasOwnProperty("value"))throw new Error("'inputProps' must have 'value'.");if(!o.hasOwnProperty("onChange"))throw new Error("'inputProps' must have 'onChange'.")},onError:f.default.func,clearItemsOnError:f.default.bool,onSelect:f.default.func,autocompleteItem:f.default.func,classNames:f.default.shape({root:f.default.string,input:f.default.string,autocompleteContainer:f.default.string,autocompleteItem:f.default.string,autocompleteItemActive:f.default.string}),styles:f.default.shape({root:f.default.object,input:f.default.object,autocompleteContainer:f.default.object,autocompleteItem:f.default.object,autocompleteItemActive:f.default.object}),options:f.default.shape({bounds:f.default.object,componentRestrictions:f.default.object,location:f.default.object,offset:f.default.oneOfType([f.default.number,f.default.string]),radius:f.default.oneOfType([f.default.number,f.default.string]),types:f.default.array}),debounce:f.default.number,highlightFirstSuggestion:f.default.bool},g.defaultProps={clearItemsOnError:!1,onError:function(e){return console.error("[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ",e)},classNames:{},autocompleteItem:function(e){var t=e.suggestion;return s.default.createElement("div",null,t)},styles:{},options:{},debounce:200,highlightFirstSuggestion:!1},t.default=g},570:function(e,t,o){(function(t){function o(e,t,o){function r(t){var o=h,n=y;return h=y=void 0,O=t,b=e.apply(n,o)}function a(e){return O=e,v=setTimeout(s,t),k?r(e):b}function c(e){var o=e-_,n=e-O,r=t-o;return A?I(r,g-n):r}function u(e){var o=e-_,n=e-O;return void 0===_||o>=t||o<0||A&&n>=g}function s(){var e=P();if(u(e))return p(e);v=setTimeout(s,c(e))}function p(e){return v=void 0,E&&h?r(e):(h=y=void 0,b)}function f(){void 0!==v&&clearTimeout(v),O=0,h=_=y=v=void 0}function d(){return void 0===v?b:p(P())}function m(){var e=P(),o=u(e);if(h=arguments,y=this,_=e,o){if(void 0===v)return a(_);if(A)return v=setTimeout(s,t),r(_)}return void 0===v&&(v=setTimeout(s,t)),b}var h,y,g,b,v,_,O=0,k=!1,A=!1,E=!0;if("function"!=typeof e)throw new TypeError(l);return t=i(t)||0,n(o)&&(k=!!o.leading,A="maxWait"in o,g=A?w(i(o.maxWait)||0,t):g,E="trailing"in o?!!o.trailing:E),m.cancel=f,m.flush=d,m}function n(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||r(e)&&v.call(e)==u}function i(e){if("number"==typeof e)return e;if(a(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var o=f.test(e);return o||d.test(e)?m(e.slice(2),o?2:8):p.test(e)?c:+e}var l="Expected a function",c=NaN,u="[object Symbol]",s=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,g=h||y||Function("return this")(),b=Object.prototype,v=b.toString,w=Math.max,I=Math.min,P=function(){return g.Date.now()};e.exports=o}).call(t,o(18))},571:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={root:{position:"relative",paddingBottom:"0px"},input:{display:"inline-block",width:"100%",padding:"10px"},autocompleteContainer:{position:"absolute",top:"100%",backgroundColor:"white",border:"1px solid #555555",width:"100%"},autocompleteItem:{backgroundColor:"#ffffff",padding:"10px",color:"#555555",cursor:"pointer"},autocompleteItemActive:{backgroundColor:"#fafafa"}};t.default=n},572:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.geocodeByAddress=function(e,t){var o=new google.maps.Geocoder,n=google.maps.GeocoderStatus.OK;return new Promise(function(r,a){o.geocode({address:e},function(e,o){if(o!==n){if(t)return console.warn('Deprecated: Passing a callback to geocodeByAddress is deprecated. Please see "https://github.com/kenny-hibino/react-places-autocomplete#geocodebyaddress-api"'),void t({status:o},null,e);a(o)}if(t){var i={lat:e[0].geometry.location.lat(),lng:e[0].geometry.location.lng()};console.warn('Deprecated: Passing a callback to geocodeByAddress is deprecated. Please see "https://github.com/kenny-hibino/react-places-autocomplete#geocodebyaddress-api"'),t(null,i,e)}r(e)})})},t.getLatLng=function(e){return new Promise(function(t,o){try{t({lat:e.geometry.location.lat(),lng:e.geometry.location.lng()})}catch(e){o(e)}})},t.geocodeByPlaceId=function(e,t){var o=new google.maps.Geocoder,n=google.maps.GeocoderStatus.OK;return new Promise(function(r,a){o.geocode({placeId:e},function(e,o){if(o!==n){if(t)return console.warn('Deprecated: Passing a callback to geocodeByAddress is deprecated. Please see "https://github.com/kenny-hibino/react-places-autocomplete#geocodebyplaceid-api"'),void t({status:o},null,e);a(o)}if(t){var i={lat:e[0].geometry.location.lat(),lng:e[0].geometry.location.lng()};console.warn('Deprecated: Passing a callback to geocodeByAddress is deprecated. Please see "https://github.com/kenny-hibino/react-places-autocomplete#geocodebyplaceid-api"'),t(null,i,e)}r(e)})})}}});
//# sourceMappingURL=ccf5f90fd233360941e3.chunk.js.map