var Fe=Object.create;var ee=Object.defineProperty;var Ne=Object.getOwnPropertyDescriptor;var Ge=Object.getOwnPropertyNames;var Ze=Object.getPrototypeOf,ke=Object.prototype.hasOwnProperty;var re=(n=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(n,{get:(t,o)=>(typeof require!="undefined"?require:t)[o]}):n)(function(n){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+n+'" is not supported')});var y=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var We=(n,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ge(t))!ke.call(n,r)&&r!==o&&ee(n,r,{get:()=>t[r],enumerable:!(e=Ne(t,r))||e.enumerable});return n};var te=(n,t,o)=>(o=n!=null?Fe(Ze(n)):{},We(t||!n||!n.__esModule?ee(o,"default",{value:n,enumerable:!0}):o,n));var ae=y((W,B)=>{(function(n,t){typeof re=="function"&&typeof W=="object"&&typeof B=="object"?B.exports=t():typeof define=="function"&&define.amd?define(function(){return t()}):n.pluralize=t()})(W,function(){var n=[],t=[],o={},e={},r={};function a(u){return typeof u=="string"?new RegExp("^"+u+"$","i"):u}function i(u,d){return u===d?d:u===u.toLowerCase()?d.toLowerCase():u===u.toUpperCase()?d.toUpperCase():u[0]===u[0].toUpperCase()?d.charAt(0).toUpperCase()+d.substr(1).toLowerCase():d.toLowerCase()}function l(u,d){return u.replace(/\$(\d{1,2})/g,function(p,h){return d[h]||""})}function s(u,d){return u.replace(d[0],function(p,h){var _=l(d[1],arguments);return i(p===""?u[h-1]:p,_)})}function f(u,d,p){if(!u.length||o.hasOwnProperty(u))return d;for(var h=p.length;h--;){var _=p[h];if(_[0].test(d))return s(d,_)}return d}function m(u,d,p){return function(h){var _=h.toLowerCase();return d.hasOwnProperty(_)?i(h,_):u.hasOwnProperty(_)?i(h,u[_]):f(_,h,p)}}function v(u,d,p,h){return function(_){var j=_.toLowerCase();return d.hasOwnProperty(j)?!0:u.hasOwnProperty(j)?!1:f(j,j,p)===j}}function c(u,d,p){var h=d===1?c.singular(u):c.plural(u);return(p?d+" ":"")+h}return c.plural=m(r,e,n),c.isPlural=v(r,e,n),c.singular=m(e,r,t),c.isSingular=v(e,r,t),c.addPluralRule=function(u,d){n.push([a(u),d])},c.addSingularRule=function(u,d){t.push([a(u),d])},c.addUncountableRule=function(u){if(typeof u=="string"){o[u.toLowerCase()]=!0;return}c.addPluralRule(u,"$0"),c.addSingularRule(u,"$0")},c.addIrregularRule=function(u,d){d=d.toLowerCase(),u=u.toLowerCase(),r[u]=d,e[d]=u},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(u){return c.addIrregularRule(u[0],u[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(u){return c.addPluralRule(u[0],u[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(u){return c.addSingularRule(u[0],u[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(c.addUncountableRule),c})});var g=y((Ir,L)=>{var ne,ie,se,oe,ue,le,ce,fe,de,z,V,me,pe,he,q,_e,ye,ve,be,ge,Ce,we,$e,A;(function(n){var t=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(e){n(o(t,o(e)))}):typeof L=="object"&&typeof L.exports=="object"?n(o(t,o(L.exports))):n(o(t));function o(e,r){return e!==t&&(typeof Object.create=="function"?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(a,i){return e[a]=r?r(a,i):i}}})(function(n){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])};ne=function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function a(){this.constructor=e}e.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a)},ie=Object.assign||function(e){for(var r,a=1,i=arguments.length;a<i;a++){r=arguments[a];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},se=function(e,r){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(a[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)r.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(a[i[l]]=e[i[l]]);return a},oe=function(e,r,a,i){var l=arguments.length,s=l<3?r:i===null?i=Object.getOwnPropertyDescriptor(r,a):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,r,a,i);else for(var m=e.length-1;m>=0;m--)(f=e[m])&&(s=(l<3?f(s):l>3?f(r,a,s):f(r,a))||s);return l>3&&s&&Object.defineProperty(r,a,s),s},ue=function(e,r){return function(a,i){r(a,i,e)}},le=function(e,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,r)},ce=function(e,r,a,i){function l(s){return s instanceof a?s:new a(function(f){f(s)})}return new(a||(a=Promise))(function(s,f){function m(u){try{c(i.next(u))}catch(d){f(d)}}function v(u){try{c(i.throw(u))}catch(d){f(d)}}function c(u){u.done?s(u.value):l(u.value).then(m,v)}c((i=i.apply(e,r||[])).next())})},fe=function(e,r){var a={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,l,s,f;return f={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function m(c){return function(u){return v([c,u])}}function v(c){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,l&&(s=c[0]&2?l.return:c[0]?l.throw||((s=l.return)&&s.call(l),0):l.next)&&!(s=s.call(l,c[1])).done)return s;switch(l=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,l=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){a=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){a.label=c[1];break}if(c[0]===6&&a.label<s[1]){a.label=s[1],s=c;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(c);break}s[2]&&a.ops.pop(),a.trys.pop();continue}c=r.call(e,a)}catch(u){c=[6,u],l=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},de=function(e,r){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(r,a)&&A(r,e,a)},A=Object.create?function(e,r,a,i){i===void 0&&(i=a),Object.defineProperty(e,i,{enumerable:!0,get:function(){return r[a]}})}:function(e,r,a,i){i===void 0&&(i=a),e[i]=r[a]},z=function(e){var r=typeof Symbol=="function"&&Symbol.iterator,a=r&&e[r],i=0;if(a)return a.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},V=function(e,r){var a=typeof Symbol=="function"&&e[Symbol.iterator];if(!a)return e;var i=a.call(e),l,s=[],f;try{for(;(r===void 0||r-- >0)&&!(l=i.next()).done;)s.push(l.value)}catch(m){f={error:m}}finally{try{l&&!l.done&&(a=i.return)&&a.call(i)}finally{if(f)throw f.error}}return s},me=function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(V(arguments[r]));return e},pe=function(){for(var e=0,r=0,a=arguments.length;r<a;r++)e+=arguments[r].length;for(var i=Array(e),l=0,r=0;r<a;r++)for(var s=arguments[r],f=0,m=s.length;f<m;f++,l++)i[l]=s[f];return i},he=function(e,r,a){if(a||arguments.length===2)for(var i=0,l=r.length,s;i<l;i++)(s||!(i in r))&&(s||(s=Array.prototype.slice.call(r,0,i)),s[i]=r[i]);return e.concat(s||Array.prototype.slice.call(r))},q=function(e){return this instanceof q?(this.v=e,this):new q(e)},_e=function(e,r,a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=a.apply(e,r||[]),l,s=[];return l={},f("next"),f("throw"),f("return"),l[Symbol.asyncIterator]=function(){return this},l;function f(p){i[p]&&(l[p]=function(h){return new Promise(function(_,j){s.push([p,h,_,j])>1||m(p,h)})})}function m(p,h){try{v(i[p](h))}catch(_){d(s[0][3],_)}}function v(p){p.value instanceof q?Promise.resolve(p.value.v).then(c,u):d(s[0][2],p)}function c(p){m("next",p)}function u(p){m("throw",p)}function d(p,h){p(h),s.shift(),s.length&&m(s[0][0],s[0][1])}},ye=function(e){var r,a;return r={},i("next"),i("throw",function(l){throw l}),i("return"),r[Symbol.iterator]=function(){return this},r;function i(l,s){r[l]=e[l]?function(f){return(a=!a)?{value:q(e[l](f)),done:l==="return"}:s?s(f):f}:s}},ve=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],a;return r?r.call(e):(e=typeof z=="function"?z(e):e[Symbol.iterator](),a={},i("next"),i("throw"),i("return"),a[Symbol.asyncIterator]=function(){return this},a);function i(s){a[s]=e[s]&&function(f){return new Promise(function(m,v){f=e[s](f),l(m,v,f.done,f.value)})}}function l(s,f,m,v){Promise.resolve(v).then(function(c){s({value:c,done:m})},f)}},be=function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e};var o=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r};ge=function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&A(r,e,a);return o(r,e),r},Ce=function(e){return e&&e.__esModule?e:{default:e}},we=function(e,r,a,i){if(a==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?e!==r||!i:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return a==="m"?i:a==="a"?i.call(e):i?i.value:r.get(e)},$e=function(e,r,a,i,l){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?e!==r||!l:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?l.call(e,a):l?l.value=a:r.set(e,a),a},n("__extends",ne),n("__assign",ie),n("__rest",se),n("__decorate",oe),n("__param",ue),n("__metadata",le),n("__awaiter",ce),n("__generator",fe),n("__exportStar",de),n("__createBinding",A),n("__values",z),n("__read",V),n("__spread",me),n("__spreadArrays",pe),n("__spreadArray",he),n("__await",q),n("__asyncGenerator",_e),n("__asyncDelegator",ye),n("__asyncValues",ve),n("__makeTemplateObject",be),n("__importStar",ge),n("__importDefault",Ce),n("__classPrivateFieldGet",we),n("__classPrivateFieldSet",$e)})});var Oe=y(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.lowerCase=M.localeLowerCase=void 0;var Be={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},az:{regexp:/\u0130/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},lt:{regexp:/\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,map:{I:"i\u0307",J:"j\u0307",\u012E:"\u012F\u0307",\u00CC:"i\u0307\u0300",\u00CD:"i\u0307\u0301",\u0128:"i\u0307\u0303"}}};function Ve(n,t){var o=Be[t.toLowerCase()];return X(o?n.replace(o.regexp,function(e){return o.map[e]}):n)}M.localeLowerCase=Ve;function X(n){return n.toLowerCase()}M.lowerCase=X});var S=y(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.noCase=void 0;var Xe=Oe(),Je=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],He=/[^A-Z0-9]+/gi;function Ke(n,t){t===void 0&&(t={});for(var o=t.splitRegexp,e=o===void 0?Je:o,r=t.stripRegexp,a=r===void 0?He:r,i=t.transform,l=i===void 0?Xe.lowerCase:i,s=t.delimiter,f=s===void 0?" ":s,m=Pe(Pe(n,e,"$1\0$2"),a,"\0"),v=0,c=m.length;m.charAt(v)==="\0";)v++;for(;m.charAt(c-1)==="\0";)c--;return m.slice(v,c).split("\0").map(l).join(f)}D.noCase=Ke;function Pe(n,t,o){return t instanceof RegExp?n.replace(t,o):t.reduce(function(e,r){return e.replace(r,o)},n)}});var J=y(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.pascalCase=w.pascalCaseTransformMerge=w.pascalCaseTransform=void 0;var Qe=g(),Ye=S();function je(n,t){var o=n.charAt(0),e=n.substr(1).toLowerCase();return t>0&&o>="0"&&o<="9"?"_"+o+e:""+o.toUpperCase()+e}w.pascalCaseTransform=je;function er(n){return n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}w.pascalCaseTransformMerge=er;function rr(n,t){return t===void 0&&(t={}),Ye.noCase(n,Qe.__assign({delimiter:"",transform:je},t))}w.pascalCase=rr});var qe=y($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.camelCase=$.camelCaseTransformMerge=$.camelCaseTransform=void 0;var tr=g(),H=J();function Se(n,t){return t===0?n.toLowerCase():H.pascalCaseTransform(n,t)}$.camelCaseTransform=Se;function ar(n,t){return t===0?n.toLowerCase():H.pascalCaseTransformMerge(n)}$.camelCaseTransformMerge=ar;function nr(n,t){return t===void 0&&(t={}),H.pascalCase(n,tr.__assign({transform:Se},t))}$.camelCase=nr});var K=y(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.upperCaseFirst=void 0;function ir(n){return n.charAt(0).toUpperCase()+n.substr(1)}I.upperCaseFirst=ir});var Q=y(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.capitalCase=x.capitalCaseTransform=void 0;var sr=g(),or=S(),ur=K();function Me(n){return ur.upperCaseFirst(n.toLowerCase())}x.capitalCaseTransform=Me;function lr(n,t){return t===void 0&&(t={}),or.noCase(n,sr.__assign({delimiter:" ",transform:Me},t))}x.capitalCase=lr});var xe=y(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.upperCase=T.localeUpperCase=void 0;var cr={tr:{regexp:/[\u0069]/g,map:{i:"\u0130"}},az:{regexp:/[\u0069]/g,map:{i:"\u0130"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{i\u0307:"I",j\u0307:"J",\u012F\u0307:"\u012E",i\u0307\u0300:"\xCC",i\u0307\u0301:"\xCD",i\u0307\u0303:"\u0128"}}};function fr(n,t){var o=cr[t.toLowerCase()];return Y(o?n.replace(o.regexp,function(e){return o.map[e]}):n)}T.localeUpperCase=fr;function Y(n){return n.toUpperCase()}T.upperCase=Y});var Te=y(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.constantCase=void 0;var dr=g(),mr=S(),pr=xe();function hr(n,t){return t===void 0&&(t={}),mr.noCase(n,dr.__assign({delimiter:"_",transform:pr.upperCase},t))}U.constantCase=hr});var E=y(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.dotCase=void 0;var _r=g(),yr=S();function vr(n,t){return t===void 0&&(t={}),yr.noCase(n,_r.__assign({delimiter:"."},t))}F.dotCase=vr});var Re=y(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.headerCase=void 0;var br=g(),gr=Q();function Cr(n,t){return t===void 0&&(t={}),gr.capitalCase(n,br.__assign({delimiter:"-"},t))}N.headerCase=Cr});var Ee=y(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.paramCase=void 0;var wr=g(),$r=E();function Or(n,t){return t===void 0&&(t={}),$r.dotCase(n,wr.__assign({delimiter:"-"},t))}G.paramCase=Or});var ze=y(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.pathCase=void 0;var Pr=g(),jr=E();function Sr(n,t){return t===void 0&&(t={}),jr.dotCase(n,Pr.__assign({delimiter:"/"},t))}Z.pathCase=Sr});var Le=y(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.sentenceCase=R.sentenceCaseTransform=void 0;var qr=g(),Mr=S(),xr=K();function Ae(n,t){var o=n.toLowerCase();return t===0?xr.upperCaseFirst(o):o}R.sentenceCaseTransform=Ae;function Tr(n,t){return t===void 0&&(t={}),Mr.noCase(n,qr.__assign({delimiter:" ",transform:Ae},t))}R.sentenceCase=Tr});var De=y(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.snakeCase=void 0;var Rr=g(),Er=E();function zr(n,t){return t===void 0&&(t={}),Er.dotCase(n,Rr.__assign({delimiter:"_"},t))}k.snakeCase=zr});var Ie=y(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});var C=g();C.__exportStar(qe(),b);C.__exportStar(Q(),b);C.__exportStar(Te(),b);C.__exportStar(E(),b);C.__exportStar(Re(),b);C.__exportStar(S(),b);C.__exportStar(Ee(),b);C.__exportStar(J(),b);C.__exportStar(ze(),b);C.__exportStar(Le(),b);C.__exportStar(De(),b)});var O=te(ae(),1),P=te(Ie(),1);import{DataTypes as Ar,Sequelize as Lr}from"sequelize";var Ue=class{db={};cluster;connection;models;client;constructor(t){this.connection=t.connection,this.models=t.models}async getClient(){if(!(!this.connection?.database||!this.connection?.username||!this.connection?.password||!this.connection?.host||!this.connection?.port)){this.client=new Lr(this.connection.database,this.connection.username,this.connection.password,{dialect:"postgres",host:this.connection.host,port:this.connection.port,ssl:!0});for(let[t,o]of Object.entries(this.models)){let e=o(this.client,Ar);this.db[t]=e}for(let[t,o]of Object.entries(this.db))this.db[t]?.associate?.(this.db);return this.client}}async connect({alter:t=!1,force:o=!1}){if(await this.getClient(),this.cluster&&!this.connection?.bastion?.host)try{if(this.client)return this.client.sync({alter:t,force:o})}catch(e){console.error(e)}}async create(t,o){let e="";if(Object.entries(this.db).forEach(([r,a])=>{r===(0,O.singular)((0,P.pascalCase)(t))&&(e=r)}),!!e)return Array.isArray(o)?this.db[e]?.bulkCreate(o):this.db[e]?.create(o)}async deleteMany(t,o){let e="";return Object.entries(this.db).forEach(([a,i])=>{a===(0,O.singular)((0,P.pascalCase)(t))&&(e=a)}),e?await this.db?.[e]?.destroy({where:{id:o}}):void 0}async deleteOne(t,o){let e="";return Object.entries(this.db).forEach(([a,i])=>{a===(0,O.singular)((0,P.pascalCase)(t))&&(e=a)}),!e||!o?void 0:await this.db?.[e]?.destroy({where:{id:o}})}async getOne(t,o){let e="";if(Object.entries(this.db).forEach(([r,a])=>{r===(0,O.singular)((0,P.pascalCase)(t))&&(e=r)}),!!e)return this.db?.[e]?.findOne({where:{id:o}})}async getMany(t,o){let e="";if(Object.entries(this.db).forEach(([r,a])=>{r===(0,O.singular)((0,P.pascalCase)(t))&&(e=r)}),!!e)return console.log("filters",o?.filters),console.log("limit",o?.limit),o?.filters?this.db?.[e]?.findAll({where:o.filters}):(console.log("asdf"),this.db?.[e]?.findAll())}async updateMany(t,o){let e="";return Object.entries(this.db).forEach(([a,i])=>{a===(0,O.singular)((0,P.pascalCase)(t))&&(e=a)}),e?await this.db?.[e]?.upsert(o):void 0}async updateOne(t,o,e){let r="";if(Object.entries(this.db).forEach(([i,l])=>{i===(0,O.singular)((0,P.pascalCase)(t))&&(r=i)}),!r)return;let a=await this.db?.[r]?.findOne({where:{id:o}});if(!!a)return await a.update(e),a}};export{Ue as DataClient};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=index.js.map
