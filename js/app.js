!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.app=e()}}(function(){return function e(n,r,o){function t(f,u){if(!r[f]){if(!n[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);var d=new Error("Cannot find module '"+f+"'");throw d.code="MODULE_NOT_FOUND",d}var s=r[f]={exports:{}};n[f][0].call(s.exports,function(e){var r=n[f][1][e];return t(r?r:e)},s,s.exports,e,n,r,o)}return r[f].exports}for(var i="function"==typeof require&&require,f=0;f<o.length;f++)t(o[f]);return t}({1:[function(e,n,r){"use strict";function o(e){return e*e}function t(e,n){return i(o(e)+o(n))}Object.defineProperty(r,"__esModule",{value:!0}),r.square=o,r.diag=t;var i=r.sqrt=Math.sqrt},{}],2:[function(e,n,r){"use strict";var o=e("./lib");console.log((0,o.square)(11)),console.log((0,o.diag)(4,3)),console.log("b")},{"./lib":1}]},{},[2])(2)});
//# sourceMappingURL=app.js.map
