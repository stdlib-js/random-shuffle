"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var w=v(function(X,A){A.exports={copy:"shallow"}});var P=v(function(Z,g){
var C=require('@stdlib/assert-has-own-property/dist'),L=require('@stdlib/assert-is-string/dist').isPrimitive,V=require('@stdlib/assert-is-plain-object/dist'),z=require('@stdlib/utils-index-of/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),O=["deep","shallow","none"];function F(e,r){if(!V(r))return new TypeError(d('0qf2V',r));if(C(r,"copy")){if(e.copy=r.copy,!L(e.copy))return new TypeError(d('0qf2W',"copy",e.copy));if(z(O,e.copy)===-1)return new TypeError(d('0qf4S',"copy",O.join('", "'),e.copy));}return null}g.exports=F
});var q=v(function($,E){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=require('@stdlib/assert-is-array-like/dist'),I=require('@stdlib/assert-is-typed-array-like/dist'),Y=require('@stdlib/assert-is-string/dist').isPrimitive,T=require('@stdlib/utils-copy/dist'),_=require('@stdlib/math-base-special-floor/dist'),j=require('@stdlib/random-base-mt19937/dist').factory,B=require('@stdlib/error-tools-fmtprodmsg/dist'),D=require('@stdlib/assert-has-own-property/dist'),H=w(),x=P();function J(e){var r,a,l;if(r=T(H),arguments.length&&(l=x(r,e),l))throw l;return e&&D(e,"seed")?a=j({seed:e.seed}):a=j(),b(f,"seed",a.seed),b(f,"PRNG",a),a=a.normalized,f;function f(i,S){var p,u,s,n,y,t,m,h,o,c;if(!(G(i)||I(i)))throw new TypeError(B('0qf38',i));if(arguments.length>1&&(n={},y=x(n,S),y))throw y;for(s=n&&n.copy?n.copy:r.copy,p=Y(i),p&&(i=i.split(""),s="none"),u=0,s==="shallow"?u+=1:s==="deep"&&(u+=2),h=i.length,t=T(i,u),o=h-1;o>0;o--)c=_(a()*(o+1)),m=t[o],t[o]=t[c],t[c]=m;return p&&(t=i.join("")),t}}E.exports=J
});var N=v(function(rr,k){
var K=q(),M=K();k.exports=M
});var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=N(),U=q();Q(R,"factory",U);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
