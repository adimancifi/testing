!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){function e(t,e){for(var r=0,n=t.length;r<n;++r)e(t[r])}function r(e,r,n,s){var a=e.getCursor(),l=n(e,a);if(!/\b(?:string|comment)\b/.test(l.type)){var f=t.innerMode(e.getMode(),l.state);if("json"!==f.mode.helperType){for(l.state=f.state,/^[\w$_]*$/.test(l.string)?l.end>a.ch&&(l.end=a.ch,l.string=l.string.slice(0,a.ch-l.start)):l={start:a.ch,end:a.ch,string:"",state:l.state,type:"."==l.string?"property":null},f=l;"property"==f.type;){if("."!=(f=n(e,o(a.line,f.start))).string)return;if(f=n(e,o(a.line,f.start)),!c)var c=[];c.push(f)}return{list:i(l,c,r,s),from:o(a.line,l.start),to:o(a.line,l.end)}}}}function n(t,e){var r=t.getTokenAt(e);return e.ch==r.start+1&&"."==r.string.charAt(0)?(r.end=r.start,r.string=".",r.type="property"):/^\.[\w$_]*$/.test(r.string)&&(r.type="property",r.start++,r.string=r.string.replace(/\./,"")),r}function i(t,r,n,i){function o(t){var e;if(e=0==t.lastIndexOf(p,0)){t:if(Array.prototype.indexOf)e=-1!=c.indexOf(t);else{for(e=c.length;e--;)if(c[e]===t){e=!0;break t}e=!1}e=!e}e&&c.push(t)}function f(t){if("string"==typeof t?e(s,o):t instanceof Array?e(a,o):t instanceof Function&&e(l,o),Object.getOwnPropertyNames&&Object.getPrototypeOf)for(;t;t=Object.getPrototypeOf(t))Object.getOwnPropertyNames(t).forEach(o);else for(var r in t)o(r)}var c=[],p=t.string,u=i&&i.globalScope||window;if(r&&r.length){var d;for((t=r.pop()).type&&0===t.type.indexOf("variable")?(i&&i.additionalContext&&(d=i.additionalContext[t.string]),i&&!1===i.useGlobalScope||(d=d||u[t.string])):"string"==t.type?d="":"atom"==t.type?d=1:"function"==t.type&&(null==u.jQuery||"$"!=t.string&&"jQuery"!=t.string||"function"!=typeof u.jQuery?null!=u._&&"_"==t.string&&"function"==typeof u._&&(d=u._()):d=u.jQuery());null!=d&&r.length;)d=d[r.pop().string];null!=d&&f(d)}else{for(r=t.state.localVars;r;r=r.next)o(r.name);for(r=t.state.globalVars;r;r=r.next)o(r.name);i&&!1===i.useGlobalScope||f(u),e(n,o)}return c}var o=t.Pos;t.registerHelper("hint","javascript",function(t,e){return r(t,f,function(t,e){return t.getTokenAt(e)},e)}),t.registerHelper("hint","coffeescript",function(t,e){return r(t,c,n,e)});var s="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),a="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),l=["prototype","apply","call","bind"],f="break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(" "),c="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")});