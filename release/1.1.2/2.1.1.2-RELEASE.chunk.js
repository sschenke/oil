/*! 1.1.2-RELEASE */
(window.oilJsonp=window.oilJsonp||[]).push([[2],{114:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(126);Object.defineProperty(e,"oilGroupListTemplate",{enumerable:!0,get:function(){return o.oilGroupListTemplate}}),Object.defineProperty(e,"oilThirdPartyListTemplate",{enumerable:!0,get:function(){return o.oilThirdPartyListTemplate}}),Object.defineProperty(e,"renderOilGroupListTemplate",{enumerable:!0,get:function(){return o.renderOilGroupListTemplate}}),Object.defineProperty(e,"renderOilThirdPartyListTemplate",{enumerable:!0,get:function(){return o.renderOilThirdPartyListTemplate}}),Object.defineProperty(e,"listSnippet",{enumerable:!0,get:function(){return o.listSnippet}})},126:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.listSnippet=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.renderOilGroupListTemplate=function(t){(0,r.getGroupList)().then(function(e){t(d(e))})},e.renderOilThirdPartyListTemplate=function(t){(0,p.loadVendorList)().then(function(e){t(c(e.vendors))})},e.oilGroupListTemplate=d,e.oilThirdPartyListTemplate=c;var n=i(111),l=i(112),a=i(5);i(127);var s=i(1),r=i(129),p=i(9);function d(t){return b(t,(0,n.getLabel)(l.OIL_LABELS.ATTR_LABEL_POI_GROUP_LIST_HEADING),(0,n.getLabel)(l.OIL_LABELS.ATTR_LABEL_POI_GROUP_LIST_TEXT))}function c(t){return b(t,(0,n.getLabel)(l.OIL_LABELS.ATTR_LABEL_THIRD_PARTY_LIST_HEADING),(0,n.getLabel)(l.OIL_LABELS.ATTR_LABEL_THIRD_PARTY_LIST_TEXT))}var u=e.listSnippet=function(t){return'<div class="as-oil-poi-group-list">'+t.map(function(t){return"object"===(void 0===t?"undefined":o(t))?'<div class="as-oil-third-party-list-element">\n                <span onclick=\''+a.OIL_GLOBAL_OBJECT_NAME+'._toggleViewElements(this)\'>\n                    <svg class=\'as-oil-icon-plus\' width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">\n                      <path d="M5.675 4.328H10v1.344H5.675V10h-1.35V5.672H0V4.328h4.325V0h1.35z" fill="#0068FF" fill-rule="evenodd" fill-opacity=".88"/>\n                    </svg>\n                    <svg class=\'as-oil-icon-minus\' style=\'display: none;\' width="10" height="5" viewBox="0 0 10 5" xmlns="http://www.w3.org/2000/svg">\n                      <path d="M0 0h10v1.5H0z" fill="#3B7BE2" fill-rule="evenodd" opacity=".88"/>\n                    </svg>\n                    <span class=\'as-oil-third-party-name\'>'+t.name+"</span>\n                </span>\n                <div class='as-oil-third-party-toggle-part' style='display: none;'>\n                <p class='as-oil-third-party-description' >"+t.description+"</p>\n                  <div class='as-oil-third-party-link'>"+t.link+"</div>\n                </div>\n              </div>":'<div class="as-oil-poi-group-list-element">'+t+"</div>"}).join("")+"</div>"};function m(){var t=(0,s.getGlobalOilObject)("oilCache");t&&(document.documentElement.setAttribute("style",t.documentElementStyle),document.body.setAttribute("style",t.bodyStyle)),(0,s.setGlobalOilObject)("oilCache",void 0)}function b(t,e,i){return function(){if(window.matchMedia&&window.matchMedia("(max-width: 600px)").matches){(0,s.setGlobalOilObject)("oilCache",{documentElementStyle:document.documentElement.getAttribute("style"),bodyStyle:document.body.getAttribute("style"),remove:m});var t="overflow: hidden; position: relative; height: 100%;";document.documentElement.setAttribute("style",t),document.body.setAttribute("style",t),e=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",o="attachEvent"===e?"onmessage":"message",n=window[e],l=window[i],n(o,function t(e){e&&e.data&&-1!==JSON.stringify(e.data).indexOf("oil_")&&(m(),l(o,t,!1))},!1)}var e,i,o,n,l}(),'<div class="as-oil-fixed">\n    <div class="as-oil-content-overlay as-oil-poi-group-list-wrapper" data-qa="oil-poi-list">\n        <div class="as-oil-l-wrapper-layout-max-width">\n            <div class="as-oil__heading">\n                '+e+'\n            </div>\n            <p class="as-oil__intro-txt">\n                '+i+" \n            </p>\n            "+u(t)+'\n            <button class="as-js-oilback" data-context="'+a.DATA_CONTEXT_BACK+'" data-qa="oil-back-button">\n                <span class="as-js-oilback__text">'+(0,n.getLabel)(l.OIL_LABELS.ATTR_LABEL_BUTTON_BACK)+'</span>\n                <svg class="as-js-oilback__icon" width="22" height="22" viewBox="0 0 22 22"\n                     xmlns="http://www.w3.org/2000/svg">\n                    <g fill="none" fill-rule="evenodd">\n                        <circle fill="#757575" cx="11" cy="11" r="11"/>\n                        <path d="M15.592 14.217a.334.334 0 0 1 .098.245c0 .098-.033.18-.098.246l-.928.908a.303.303 0 0 1-.22.098.33.33 0 0 1-.244-.098L11 12.4l-3.2 3.216a.303.303 0 0 1-.22.098.33.33 0 0 1-.244-.098l-.928-.908a.334.334 0 0 1-.098-.246c0-.098.033-.18.098-.245L9.632 11 6.408 7.808c-.163-.164-.163-.327 0-.491l.904-.933a.473.473 0 0 1 .244-.098.33.33 0 0 1 .244.098L11 9.576l3.2-3.192a.473.473 0 0 1 .244-.098.33.33 0 0 1 .244.098l.904.933c.163.164.163.32 0 .466l-3.224 3.192 3.224 3.242z"\n                              fill="#FFF" opacity=".88"/>\n                    </g>\n                </svg>\n            </button>\n        </div>\n        <div class="as-oil-l-row as-oil-l-buttons-'+(0,n.getTheme)()+'">\n            <div class="as-oil-l-item">\n                <button class="as-oil__btn-optin as-js-optin" data-context="'+a.DATA_CONTEXT_YES+'" data-qa="oil-YesButton">\n                    '+(0,n.getLabel)(l.OIL_LABELS.ATTR_LABEL_BUTTON_YES)+"\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"}(0,s.setGlobalOilObject)("_toggleViewElements",function(t){var e=t.children[0],i=t.children[1],o=t.nextElementSibling;"none"===o.style.display?(o.setAttribute("style","display: block; animation: fadein 0.5s"),i.setAttribute("style","display: inline-block; animation: fadein 0.5s"),e.setAttribute("style","display: none")):(o.setAttribute("style","display: none"),i.setAttribute("style","display: none"),e.setAttribute("style","display: inline-block; animation: fadein 0.5s"))})},127:function(t,e,i){var o=i(128);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(60)(o,n),o.locals&&(t.exports=o.locals)},128:function(t,e,i){(t.exports=i(59)(!1)).push([t.i,"@media (max-width:600px){.as-oil-poi-group-list-wrapper{position:relative;width:auto;min-height:300px;z-index:100;margin:50vh 5px 50px;padding:16px 12px;border-top-left-radius:4px;border-top-right-radius:4px;background-color:#fafafa;-webkit-box-shadow:0 -8px 20px 0 rgba(0,0,0,.2);box-shadow:0 -8px 20px 0 rgba(0,0,0,.2)}.as-oil-poi-group-list-wrapper .as-oil__heading,.as-oil-poi-group-list-wrapper .as-oil__intro-txt{text-align:left}}@media (min-width:601px){.as-oil-poi-group-list-wrapper .as-oil-poi-group-list{overflow:auto;overflow-y:scroll;max-height:200px}}@media (min-width:601px){.as-oil-poi-group-list-wrapper .as-oil-l-buttons-light{float:right}}@media (max-width:600px){.as-oil-poi-group-list-wrapper .as-oil-l-buttons-light{display:initial;background:#f9f9f9;box-shadow:0 -8px 20px 0 rgba(0,0,0,.2);padding:8px;position:fixed;bottom:0;left:0}}@media (min-width:601px){.as-oil-poi-group-list-wrapper .as-oil-l-buttons-dark{float:right}}@media (max-width:600px){.as-oil-poi-group-list-wrapper .as-oil-l-buttons-dark{display:initial;background:#262626;box-shadow:0 -8px 20px 0 rgba(0,0,0,.2);padding:8px;position:fixed;bottom:0;left:0}}.as-oil-third-party-list-element{border-bottom:1px solid #d8d8d8;padding-bottom:8px;margin-bottom:8px}.as-oil-third-party-list-element .as-oil-third-party-toggle-part{margin-left:16px}.as-oil-third-party-list-element .as-oil-third-party-name{font-weight:700;cursor:pointer}.as-oil-third-party-list-element .as-oil-third-party-link{color:#262626;font-size:12px;opacity:.5;text-decoration:none}@keyframes fadein{0%{opacity:0}to{opacity:1}}",""])},129:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getGroupList=function(){var t=(0,l.getPoiGroupName)();return new Promise(function(e){a?e(a):(0,o.fetchJsonData)(i.p+"poi-lists/"+t+".json").then(function(t){a=t.companyList,e(a)}).catch(function(i){(0,n.logError)("OIL getGroupList failed and returned error: "+i+'. Group "'+t+'" not found! Please add the JSON file with the correct name.'),e([])})})};var o=i(1),n=i(0),l=i(2),a=void 0}}]);