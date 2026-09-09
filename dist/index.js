"use strict";var f=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(s){throw (t=0, s)}};};var h=f(function(H,g){
var k=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/utils-index-of/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),c=["values","keys","*"];function E(e,t){return k(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"returns")&&(e.returns=t.returns,O(c,e.returns)===-1)?new TypeError(o('2p74S',"returns",c.join('", "'),e.returns)):null):new TypeError(o('2p72V',t));}g.exports=E
});var p=f(function(J,m){
function I(e,t,s){var u,a,r,i,n,v;u=t.thisArg,r=[[],[]],n=!0;for(i in e)n=!1,v=e[i],a=s.call(u,v,i),a?r[0].push(v):r[1].push(v);return n&&(r.length=0),r}m.exports=I
});var y=f(function(M,q){
function T(e,t,s){var u,a,r,i,n;u=t.thisArg,r=[[],[]],n=!0;for(i in e)n=!1,a=s.call(u,e[i],i),a?r[0].push(i):r[1].push(i);return n&&(r.length=0),r}q.exports=T
});var w=f(function(N,b){
function V(e,t,s){var u,a,r,i,n,v;u=t.thisArg,r=[[],[]],n=!0;for(i in e)n=!1,v=e[i],a=s.call(u,v,i),a?r[0].push([i,v]):r[1].push([i,v]);return n&&(r.length=0),r}b.exports=V
});var x=f(function(Q,d){
var F=require('@stdlib/assert-is-object-like/dist'),L=require('@stdlib/assert-is-function/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist'),P=h(),K=p(),z=y(),B=w();function C(e,t,s){var u,a,r;if(!F(e))throw new TypeError(A('2p73L',e));if(u={returns:"values"},arguments.length===2)r=t;else{if(a=P(u,t),a)throw a;r=s}if(!L(r))throw new TypeError(A('2p73q',r));return u.returns==="values"?K(e,u,r):u.returns==="keys"?z(e,u,r):B(e,u,r)}d.exports=C
});var D=x();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
