// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import{factory as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";var j={copy:"shallow"},f=["deep","shallow","none"];function h(e,s){if(!m(s))return new TypeError(d("0qf2V",s));if(p(s,"copy")){if(e.copy=s.copy,!r(e.copy))return new TypeError(d("0qf2W","copy",e.copy));if(-1===l(f,e.copy))return new TypeError(d("0qf4S","copy",f.join('", "'),e.copy))}return null}function c(p){var m,l,f;if(m=i(j),arguments.length&&(f=h(m,p)))throw f;return l=p&&p.seed?n({seed:p.seed}):n(),e(c,"seed",l.seed),e(c,"PRNG",l),l=l.normalized,c;function c(e,n){var p,j,f,c,a,v,y,g,b,u;if(!s(e)&&!t(e))throw new TypeError(d("0qf38",e));if(arguments.length>1&&(a=h(c={},n)))throw a;for(f=c&&c.copy?c.copy:m.copy,(p=r(e))&&(e=e.split(""),f="none"),j=0,"shallow"===f?j+=1:"deep"===f&&(j+=2),g=e.length,v=i(e,j),b=g-1;b>0;b--)u=o(l()*(b+1)),y=v[b],v[b]=v[u],v[u]=y;return p&&(v=e.join("")),v}}var a=c();e(a,"factory",c);export{a as default,c as factory};
//# sourceMappingURL=index.mjs.map
