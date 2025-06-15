(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ru(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},_s=[],_n=()=>{},Hv=()=>!1,Ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),su=t=>t.startsWith("onUpdate:"),tt=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qv=Object.prototype.hasOwnProperty,ke=(t,e)=>qv.call(t,e),ae=Array.isArray,ys=t=>no(t)==="[object Map]",Bs=t=>no(t)==="[object Set]",ad=t=>no(t)==="[object Date]",me=t=>typeof t=="function",We=t=>typeof t=="string",an=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",qp=t=>(Me(t)||me(t))&&me(t.then)&&me(t.catch),zp=Object.prototype.toString,no=t=>zp.call(t),zv=t=>no(t).slice(8,-1),Kp=t=>no(t)==="[object Object]",ou=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kv=/-(\w)/g,Qt=qa(t=>t.replace(Kv,(e,n)=>n?n.toUpperCase():"")),Wv=/\B([A-Z])/g,Zr=qa(t=>t.replace(Wv,"-$1").toLowerCase()),za=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ko=qa(t=>t?`on${za(t)}`:""),mr=(t,e)=>!Object.is(t,e),Wo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},da=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Gv=t=>{const e=We(t)?Number(t):NaN;return isNaN(e)?t:e};let ld;const Ka=()=>ld||(ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ro(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?Jv(r):ro(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Me(t))return t}const Qv=/;(?![^(]*\))/g,Xv=/:([^]+)/,Yv=/\/\*[^]*?\*\//g;function Jv(t){const e={};return t.replace(Yv,"").split(Qv).forEach(n=>{if(n){const r=n.split(Xv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tt(t){let e="";if(We(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Tt(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e0=ru(Zv);function Gp(t){return!!t||t===""}function t0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=so(t[r],e[r]);return n}function so(t,e){if(t===e)return!0;let n=ad(t),r=ad(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=an(t),r=an(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?t0(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!so(t[o],e[o]))return!1}}return String(t)===String(e)}function au(t,e){return t.findIndex(n=>so(n,e))}const Qp=t=>!!(t&&t.__v_isRef===!0),Oe=t=>We(t)?t:t==null?"":ae(t)||Me(t)&&(t.toString===zp||!me(t.toString))?Qp(t)?Oe(t.value):JSON.stringify(t,Xp,2):String(t),Xp=(t,e)=>Qp(e)?Xp(t,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jl(r,i)+" =>"]=s,n),{})}:Bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jl(n))}:an(e)?jl(e):Me(e)&&!ae(e)&&!Kp(e)?String(e):e,jl=(t,e="")=>{var n;return an(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class n0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function r0(){return kt}let Le;const Hl=new WeakSet;class Yp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hl.has(this)&&(Hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cd(this),eg(this);const e=Le,n=sn;Le=this,sn=!0;try{return this.fn()}finally{tg(this),Le=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fc(this)&&this.run()}get dirty(){return fc(this)}}let Jp=0,Ti,Ii;function Zp(t,e=!1){if(t.flags|=8,e){t.next=Ii,Ii=t;return}t.next=Ti,Ti=t}function lu(){Jp++}function cu(){if(--Jp>0)return;if(Ii){let e=Ii;for(Ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ti;){let e=Ti;for(Ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function eg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),uu(r),s0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function fc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ng(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ng(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mi)||(t.globalVersion=Mi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=sn;Le=t,sn=!0;try{eg(t);const s=t.fn(t._value);(e.version===0||mr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,sn=r,tg(t),t.flags&=-3}}function uu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)uu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function s0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const rg=[];function $n(){rg.push(sn),sn=!1}function jn(){const t=rg.pop();sn=t===void 0?!0:t}function cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Mi=0;class i0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Le||!sn||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new i0(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,sg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,Mi++,this.notify(e)}notify(e){lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cu()}}}function sg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pc=new WeakMap,zr=Symbol(""),gc=Symbol(""),Li=Symbol("");function Et(t,e,n){if(sn&&Le){let r=pc.get(t);r||pc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hu),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=pc.get(t);if(!o){Mi++;return}const l=c=>{c&&c.trigger()};if(lu(),e==="clear")o.forEach(l);else{const c=ae(t),u=c&&ou(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Li||!an(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Li)),e){case"add":c?u&&l(o.get("length")):(l(o.get(zr)),ys(t)&&l(o.get(gc)));break;case"delete":c||(l(o.get(zr)),ys(t)&&l(o.get(gc)));break;case"set":ys(t)&&l(o.get(zr));break}}cu()}function as(t){const e=Re(t);return e===t?e:(Et(e,"iterate",Li),Wt(t)?e:e.map(lt))}function Wa(t){return Et(t=Re(t),"iterate",Li),t}const o0={__proto__:null,[Symbol.iterator](){return ql(this,Symbol.iterator,lt)},concat(...t){return as(this).concat(...t.map(e=>ae(e)?as(e):e))},entries(){return ql(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return Rn(this,"find",t,e,lt,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return zl(this,"includes",t)},indexOf(...t){return zl(this,"indexOf",t)},join(t){return as(this).join(t)},lastIndexOf(...t){return zl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return ui(this,"pop")},push(...t){return ui(this,"push",t)},reduce(t,...e){return ud(this,"reduce",t,e)},reduceRight(t,...e){return ud(this,"reduceRight",t,e)},shift(){return ui(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return ui(this,"splice",t)},toReversed(){return as(this).toReversed()},toSorted(t){return as(this).toSorted(t)},toSpliced(...t){return as(this).toSpliced(...t)},unshift(...t){return ui(this,"unshift",t)},values(){return ql(this,"values",lt)}};function ql(t,e,n){const r=Wa(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const a0=Array.prototype;function Rn(t,e,n,r,s,i){const o=Wa(t),l=o!==t&&!Wt(t),c=o[e];if(c!==a0[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function ud(t,e,n,r){const s=Wa(t);let i=n;return s!==t&&(Wt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,lt(l),c,t)}),s[e](i,...r)}function zl(t,e,n){const r=Re(t);Et(r,"iterate",Li);const s=r[e](...n);return(s===-1||s===!1)&&pu(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function ui(t,e,n=[]){$n(),lu();const r=Re(t)[e].apply(t,n);return cu(),jn(),r}const l0=ru("__proto__,__v_isRef,__isVue"),ig=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(an));function c0(t){an(t)||(t=String(t));const e=Re(this);return Et(e,"has",t),e.hasOwnProperty(t)}class og{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?v0:ug:i?cg:lg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let c;if(o&&(c=o0[n]))return c;if(n==="hasOwnProperty")return c0}const l=Reflect.get(e,n,It(e)?e:r);return(an(n)?ig.has(n):l0(n))||(s||Et(e,"get",n),i)?l:It(l)?o&&ou(n)?l:l.value:Me(l)?s?dg(l):$s(l):l}}class ag extends og{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=br(i);if(!Wt(r)&&!br(r)&&(i=Re(i),r=Re(r)),!ae(e)&&It(i)&&!It(r))return c?!1:(i.value=r,!0)}const o=ae(e)&&ou(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,It(e)?e:s);return e===Re(s)&&(o?mr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!an(n)||!ig.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ae(e)?"length":zr),Reflect.ownKeys(e)}}class u0 extends og{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const h0=new ag,d0=new u0,f0=new ag(!0);const mc=t=>t,No=t=>Reflect.getPrototypeOf(t);function p0(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ys(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?mc:e?fa:lt;return!e&&Et(i,"iterate",c?gc:zr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function g0(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),l=Re(s);t||(mr(s,l)&&Et(o,"get",s),Et(o,"get",l));const{has:c}=No(o),u=e?mc:t?fa:lt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Re(s),"iterate",zr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),l=Re(s);return t||(mr(s,l)&&Et(o,"has",s),Et(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Re(l),u=e?mc:t?fa:lt;return!t&&Et(c,"iterate",zr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return tt(n,t?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(s){!e&&!Wt(s)&&!br(s)&&(s=Re(s));const i=Re(this);return No(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!Wt(i)&&!br(i)&&(i=Re(i));const o=Re(this),{has:l,get:c}=No(o);let u=l.call(o,s);u||(s=Re(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?mr(i,d)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:l}=No(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Dn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=p0(s,t,e)}),n}function du(t,e){const n=g0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const m0={get:du(!1,!1)},_0={get:du(!1,!0)},y0={get:du(!0,!1)};const lg=new WeakMap,cg=new WeakMap,ug=new WeakMap,v0=new WeakMap;function E0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w0(t){return t.__v_skip||!Object.isExtensible(t)?0:E0(zv(t))}function $s(t){return br(t)?t:fu(t,!1,h0,m0,lg)}function hg(t){return fu(t,!1,f0,_0,cg)}function dg(t){return fu(t,!0,d0,y0,ug)}function fu(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=w0(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function vs(t){return br(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function pu(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function T0(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Wp(t,"__v_skip",!0),t}const lt=t=>Me(t)?$s(t):t,fa=t=>Me(t)?dg(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Pe(t){return fg(t,!1)}function I0(t){return fg(t,!0)}function fg(t,e){return It(t)?t:new b0(t,e)}class b0{constructor(e,n){this.dep=new hu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||br(e);e=r?e:Re(e),mr(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function St(t){return It(t)?t.value:t}const A0={get:(t,e,n)=>e==="__v_raw"?t:St(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pg(t){return vs(t)?t:new Proxy(t,A0)}class C0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Zp(this,!0),!0}get value(){const e=this.dep.track();return ng(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function S0(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new C0(r,s,n)}const Lo={},pa=new WeakMap;let $r;function R0(t,e=!1,n=$r){if(n){let r=pa.get(n);r||pa.set(n,r=[]),r.push(t)}}function P0(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=k=>s?k:Wt(k)||s===!1||s===0?On(k,1):On(k);let d,p,g,y,x=!1,D=!1;if(It(t)?(p=()=>t.value,x=Wt(t)):vs(t)?(p=()=>u(t),x=!0):ae(t)?(D=!0,x=t.some(k=>vs(k)||Wt(k)),p=()=>t.map(k=>{if(It(k))return k.value;if(vs(k))return u(k);if(me(k))return c?c(k,2):k()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){$n();try{g()}finally{jn()}}const k=$r;$r=d;try{return c?c(t,3,[y]):t(y)}finally{$r=k}}:p=_n,e&&s){const k=p,se=s===!0?1/0:s;p=()=>On(k(),se)}const O=r0(),q=()=>{d.stop(),O&&O.active&&iu(O.effects,d)};if(i&&e){const k=e;e=(...se)=>{k(...se),q()}}let $=D?new Array(t.length).fill(Lo):Lo;const N=k=>{if(!(!(d.flags&1)||!d.dirty&&!k))if(e){const se=d.run();if(s||x||(D?se.some((Q,S)=>mr(Q,$[S])):mr(se,$))){g&&g();const Q=$r;$r=d;try{const S=[se,$===Lo?void 0:D&&$[0]===Lo?[]:$,y];$=se,c?c(e,3,S):e(...S)}finally{$r=Q}}}else d.run()};return l&&l(N),d=new Yp(p),d.scheduler=o?()=>o(N,!1):N,y=k=>R0(k,!1,d),g=d.onStop=()=>{const k=pa.get(d);if(k){if(c)c(k,4);else for(const se of k)se();pa.delete(d)}},e?r?N(!0):$=d.run():o?o(N.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function On(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))On(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)On(t[r],e,n);else if(Bs(t)||ys(t))t.forEach(r=>{On(r,e,n)});else if(Kp(t)){for(const r in t)On(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&On(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,r){try{return r?t(...r):t()}catch(s){Ga(s,e,n)}}function ln(t,e,n,r){if(me(t)){const s=io(t,e,n,r);return s&&qp(s)&&s.catch(i=>{Ga(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function Ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){$n(),io(i,null,10,[t,c,u]),jn();return}}x0(t,n,s,r,o)}function x0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let pn=-1;const Es=[];let ar=null,cs=0;const gg=Promise.resolve();let ga=null;function Qa(t){const e=ga||gg;return t?e.then(this?t.bind(this):t):e}function k0(t){let e=pn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function gu(t){if(!(t.flags&1)){const e=Fi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Fi(n)?Rt.push(t):Rt.splice(k0(e),0,t),t.flags|=1,mg()}}function mg(){ga||(ga=gg.then(yg))}function V0(t){ae(t)?Es.push(...t):ar&&t.id===-1?ar.splice(cs+1,0,t):t.flags&1||(Es.push(t),t.flags|=1),mg()}function hd(t,e,n=pn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function _g(t){if(Es.length){const e=[...new Set(Es)].sort((n,r)=>Fi(n)-Fi(r));if(Es.length=0,ar){ar.push(...e);return}for(ar=e,cs=0;cs<ar.length;cs++){const n=ar[cs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,cs=0}}const Fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yg(t){try{for(pn=0;pn<Rt.length;pn++){const e=Rt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Rt.length;pn++){const e=Rt[pn];e&&(e.flags&=-2)}pn=-1,Rt.length=0,_g(),ga=null,(Rt.length||Es.length)&&yg()}}let rt=null,vg=null;function ma(t){const e=rt;return rt=t,vg=t&&t.type.__scopeId||null,e}function _r(t,e=rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wd(-1);const i=ma(e);let o;try{o=t(...s)}finally{ma(i),r._d&&wd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ye(t,e){if(rt===null)return t;const n=el(rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&On(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&($n(),ln(c,n,8,[t.el,l,t,e]),jn())}}const D0=Symbol("_vte"),O0=t=>t.__isTeleport,ls=Symbol("_leaveCb"),Fo=Symbol("_enterCb");function N0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oo(()=>{t.isMounted=!0}),Ag(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],M0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt};function L0(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _c(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:y,onAfterLeave:x,onLeaveCancelled:D,onBeforeAppear:O,onAppear:q,onAfterAppear:$,onAppearCancelled:N}=e,k=String(t.key),se=L0(n,t),Q=(E,C)=>{E&&ln(E,r,9,C)},S=(E,C)=>{const I=C[1];Q(E,C),ae(E)?E.every(_=>_.length<=1)&&I():E.length<=1&&I()},w={mode:o,persisted:l,beforeEnter(E){let C=c;if(!n.isMounted)if(i)C=O||c;else return;E[ls]&&E[ls](!0);const I=se[k];I&&us(t,I)&&I.el[ls]&&I.el[ls](),Q(C,[E])},enter(E){let C=u,I=d,_=p;if(!n.isMounted)if(i)C=q||u,I=$||d,_=N||p;else return;let v=!1;const z=E[Fo]=ve=>{v||(v=!0,ve?Q(_,[E]):Q(I,[E]),w.delayedLeave&&w.delayedLeave(),E[Fo]=void 0)};C?S(C,[E,z]):z()},leave(E,C){const I=String(t.key);if(E[Fo]&&E[Fo](!0),n.isUnmounting)return C();Q(g,[E]);let _=!1;const v=E[ls]=z=>{_||(_=!0,C(),z?Q(D,[E]):Q(x,[E]),E[ls]=void 0,se[I]===t&&delete se[I])};se[I]=t,y?S(y,[E,v]):v()},clone(E){return _c(E,e,n,r)}};return w}function Ui(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ui(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Eg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&s++,r=r.concat(Eg(o.children,e,l))):(e||o.type!==In)&&r.push(l!=null?Kr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Gn(t,e){return me(t)?tt({name:t.name},e,{setup:t}):t}function wg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _a(t,e,n,r,s=!1){if(ae(t)){t.forEach((x,D)=>_a(x,e&&(ae(e)?e[D]:e),n,r,s));return}if(ws(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_a(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?el(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=Re(p),y=p===Ne?()=>!1:x=>ke(g,x);if(u!=null&&u!==c&&(We(u)?(d[u]=null,y(u)&&(p[u]=null)):It(u)&&(u.value=null)),me(c))io(c,l,12,[o,d]);else{const x=We(c),D=It(c);if(x||D){const O=()=>{if(t.f){const q=x?y(c)?p[c]:d[c]:c.value;s?ae(q)&&iu(q,i):ae(q)?q.includes(i)||q.push(i):x?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else x?(d[c]=o,y(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(d[t.k]=o))};o?(O.id=-1,Mt(O,n)):O()}}}Ka().requestIdleCallback;Ka().cancelIdleCallback;const ws=t=>!!t.type.__asyncLoader,Tg=t=>t.type.__isKeepAlive;function F0(t,e){Ig(t,"a",e)}function U0(t,e){Ig(t,"da",e)}function Ig(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Tg(s.parent.vnode)&&B0(r,e,n,s),s=s.parent}}function B0(t,e,n,r){const s=Xa(e,t,r,!0);Cg(()=>{iu(r[e],s)},n)}function Xa(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{$n();const l=ao(n),c=ln(e,n,t,o);return l(),jn(),c});return r?s.unshift(i):s.push(i),i}}const Qn=t=>(e,n=ct)=>{(!ji||t==="sp")&&Xa(t,(...r)=>e(...r),n)},$0=Qn("bm"),oo=Qn("m"),j0=Qn("bu"),bg=Qn("u"),Ag=Qn("bum"),Cg=Qn("um"),H0=Qn("sp"),q0=Qn("rtg"),z0=Qn("rtc");function K0(t,e=ct){Xa("ec",t,e)}const Sg="components";function bi(t,e){return Pg(Sg,t,!0,e)||t}const Rg=Symbol.for("v-ndc");function mu(t){return We(t)?Pg(Sg,t,!1)||t:t||Rg}function Pg(t,e,n=!0,r=!1){const s=rt||ct;if(s){const i=s.type;{const l=DE(i,!1);if(l&&(l===e||l===Qt(e)||l===za(Qt(e))))return i}const o=dd(s[t]||i[t],e)||dd(s.appContext[t],e);return!o&&r?i:o}}function dd(t,e){return t&&(t[e]||t[Qt(e)]||t[za(Qt(e))])}function Nn(t,e,n,r){let s;const i=n,o=ae(t);if(o||We(t)){const l=o&&vs(t);let c=!1,u=!1;l&&(c=!Wt(t),u=br(t),t=Wa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?fa(lt(t[d])):lt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function W0(t,e,n={},r,s){if(rt.ce||rt.parent&&ws(rt.parent)&&rt.parent.ce)return ne(),tn(Fe,null,[Qe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),ne();const o=i&&xg(i(n)),l=n.key||o&&o.key,c=tn(Fe,{key:(l&&!an(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function xg(t){return t.some(e=>$i(e)?!(e.type===In||e.type===Fe&&!xg(e.children)):!0)?t:null}function G0(t,e){const n={};for(const r in t)n[Ko(r)]=t[r];return n}const yc=t=>t?Yg(t)?el(t):yc(t.parent):null,Ai=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vg(t),$forceUpdate:t=>t.f||(t.f=()=>{gu(t.update)}),$nextTick:t=>t.n||(t.n=Qa.bind(t.proxy)),$watch:t=>gE.bind(t)}),Kl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ke(t,e),Q0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kl(r,e))return o[e]=1,r[e];if(s!==Ne&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ne&&ke(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const d=Ai[e];let p,g;if(d)return e==="$attrs"&&Et(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&ke(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ke(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kl(s,e)?(s[e]=n,!0):r!==Ne&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&ke(t,o)||Kl(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(Ai,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fd(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vc=!0;function X0(t){const e=Vg(t),n=t.proxy,r=t.ctx;vc=!1,e.beforeCreate&&pd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:x,activated:D,deactivated:O,beforeDestroy:q,beforeUnmount:$,destroyed:N,unmounted:k,render:se,renderTracked:Q,renderTriggered:S,errorCaptured:w,serverPrefetch:E,expose:C,inheritAttrs:I,components:_,directives:v,filters:z}=e;if(u&&Y0(u,r,null),o)for(const Ie in o){const Ee=o[Ie];me(Ee)&&(r[Ie]=Ee.bind(n))}if(s){const Ie=s.call(n,n);Me(Ie)&&(t.data=$s(Ie))}if(vc=!0,i)for(const Ie in i){const Ee=i[Ie],Ot=me(Ee)?Ee.bind(n,n):me(Ee.get)?Ee.get.bind(n,n):_n,Xt=!me(Ee)&&me(Ee.set)?Ee.set.bind(n):_n,jt=Be({get:Ot,set:Xt});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>jt.value,set:He=>jt.value=He})}if(l)for(const Ie in l)kg(l[Ie],r,n,Ie);if(c){const Ie=me(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ee=>{Go(Ee,Ie[Ee])})}d&&pd(d,t,"c");function je(Ie,Ee){ae(Ee)?Ee.forEach(Ot=>Ie(Ot.bind(n))):Ee&&Ie(Ee.bind(n))}if(je($0,p),je(oo,g),je(j0,y),je(bg,x),je(F0,D),je(U0,O),je(K0,w),je(z0,Q),je(q0,S),je(Ag,$),je(Cg,k),je(H0,E),ae(C))if(C.length){const Ie=t.exposed||(t.exposed={});C.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:Ot=>n[Ee]=Ot})})}else t.exposed||(t.exposed={});se&&t.render===_n&&(t.render=se),I!=null&&(t.inheritAttrs=I),_&&(t.components=_),v&&(t.directives=v),E&&wg(t)}function Y0(t,e,n=_n){ae(t)&&(t=Ec(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Gt(s.from||r,s.default,!0):i=Gt(s.from||r):i=Gt(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pd(t,e,n){ln(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kg(t,e,n,r){let s=r.includes(".")?zg(n,r):()=>n[r];if(We(t)){const i=e[t];me(i)&&Qo(s,i)}else if(me(t))Qo(s,t.bind(n));else if(Me(t))if(ae(t))t.forEach(i=>kg(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Qo(s,i,t)}}function Vg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ya(c,u,o,!0)),ya(c,e,o)),Me(e)&&i.set(e,c),c}function ya(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ya(t,i,n,!0),s&&s.forEach(o=>ya(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=J0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const J0={data:gd,props:md,emits:md,methods:pi,computed:pi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:pi,directives:pi,watch:eE,provide:gd,inject:Z0};function gd(t,e){return e?t?function(){return tt(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Z0(t,e){return pi(Ec(t),Ec(e))}function Ec(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function pi(t,e){return t?tt(Object.create(null),t,e):e}function md(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:tt(Object.create(null),fd(t),fd(e??{})):e}function eE(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function Dg(){return{app:null,config:{isNativeTag:Hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tE=0;function nE(t,e){return function(r,s=null){me(r)||(r=tt({},r)),s!=null&&!Me(s)&&(s=null);const i=Dg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:tE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:NE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(u,...p)):me(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const y=u._ceVNode||Qe(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,d,g),c=!0,u._container=d,d.__vue_app__=u,el(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ln(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ts;Ts=u;try{return d()}finally{Ts=p}}};return u}}let Ts=null;function Go(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function Gt(t,e,n=!1){const r=ct||rt;if(r||Ts){let s=Ts?Ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const Og={},Ng=()=>Object.create(Og),Mg=t=>Object.getPrototypeOf(t)===Og;function rE(t,e,n,r=!1){const s={},i=Ng();t.propsDefaults=Object.create(null),Lg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Ya(t.emitsOptions,g))continue;const y=e[g];if(c)if(ke(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const x=Qt(g);s[x]=wc(c,l,x,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{Lg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!ke(e,p)&&((d=Zr(p))===p||!ke(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=wc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function Lg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(wi(c))continue;const u=e[c];let d;s&&ke(s,d=Qt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ya(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Re(n),u=l||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=wc(s,c,p,u[p],t,!ke(u,p))}}return o}function wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=ao(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Zr(n))&&(r=!0))}return r}const iE=new WeakMap;function Fg(t,e,n=!1){const r=n?iE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const d=p=>{c=!0;const[g,y]=Fg(p,e,!0);tt(o,g),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Me(t)&&r.set(t,_s),_s;if(ae(i))for(let d=0;d<i.length;d++){const p=Qt(i[d]);_d(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=Qt(d);if(_d(p)){const g=i[d],y=o[p]=ae(g)||me(g)?{type:g}:tt({},g),x=y.type;let D=!1,O=!0;if(ae(x))for(let q=0;q<x.length;++q){const $=x[q],N=me($)&&$.name;if(N==="Boolean"){D=!0;break}else N==="String"&&(O=!1)}else D=me(x)&&x.name==="Boolean";y[0]=D,y[1]=O,(D||ke(y,"default"))&&l.push(p)}}const u=[o,l];return Me(t)&&r.set(t,u),u}function _d(t){return t[0]!=="$"&&!wi(t)}const _u=t=>t[0]==="_"||t==="$stable",yu=t=>ae(t)?t.map(mn):[mn(t)],oE=(t,e,n)=>{if(e._n)return e;const r=_r((...s)=>yu(e(...s)),n);return r._c=!1,r},Ug=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_u(s))continue;const i=t[s];if(me(i))e[s]=oE(s,i,r);else if(i!=null){const o=yu(i);e[s]=()=>o}}},Bg=(t,e)=>{const n=yu(e);t.slots.default=()=>n},$g=(t,e,n)=>{for(const r in e)(n||!_u(r))&&(t[r]=e[r])},aE=(t,e,n)=>{const r=t.slots=Ng();if(t.vnode.shapeFlag&32){const s=e._;s?($g(r,e,n),n&&Wp(r,"_",s,!0)):Ug(e,r)}else e&&Bg(t,e)},lE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:$g(s,e,n):(i=!e.$stable,Ug(e,s)),o=e}else e&&(Bg(t,e),o={default:1});if(i)for(const l in s)!_u(l)&&o[l]==null&&delete s[l]},Mt=TE;function cE(t){return uE(t)}function uE(t,e){const n=Ka();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=_n,insertStaticContent:x}=t,D=(T,b,R,L=null,B=null,F=null,Y=void 0,W=null,K=!!b.dynamicChildren)=>{if(T===b)return;T&&!us(T,b)&&(L=M(T),He(T,B,F,!0),T=null),b.patchFlag===-2&&(K=!1,b.dynamicChildren=null);const{type:H,ref:oe,shapeFlag:X}=b;switch(H){case Ja:O(T,b,R,L);break;case In:q(T,b,R,L);break;case Xo:T==null&&$(b,R,L,Y);break;case Fe:_(T,b,R,L,B,F,Y,W,K);break;default:X&1?se(T,b,R,L,B,F,Y,W,K):X&6?v(T,b,R,L,B,F,Y,W,K):(X&64||X&128)&&H.process(T,b,R,L,B,F,Y,W,K,te)}oe!=null&&B&&_a(oe,T&&T.ref,F,b||T,!b)},O=(T,b,R,L)=>{if(T==null)r(b.el=l(b.children),R,L);else{const B=b.el=T.el;b.children!==T.children&&u(B,b.children)}},q=(T,b,R,L)=>{T==null?r(b.el=c(b.children||""),R,L):b.el=T.el},$=(T,b,R,L)=>{[T.el,T.anchor]=x(T.children,b,R,L,T.el,T.anchor)},N=({el:T,anchor:b},R,L)=>{let B;for(;T&&T!==b;)B=g(T),r(T,R,L),T=B;r(b,R,L)},k=({el:T,anchor:b})=>{let R;for(;T&&T!==b;)R=g(T),s(T),T=R;s(b)},se=(T,b,R,L,B,F,Y,W,K)=>{b.type==="svg"?Y="svg":b.type==="math"&&(Y="mathml"),T==null?Q(b,R,L,B,F,Y,W,K):E(T,b,B,F,Y,W,K)},Q=(T,b,R,L,B,F,Y,W)=>{let K,H;const{props:oe,shapeFlag:X,transition:re,dirs:fe}=T;if(K=T.el=o(T.type,F,oe&&oe.is,oe),X&8?d(K,T.children):X&16&&w(T.children,K,null,L,B,Wl(T,F),Y,W),fe&&Fr(T,null,L,"created"),S(K,T,T.scopeId,Y,L),oe){for(const _e in oe)_e!=="value"&&!wi(_e)&&i(K,_e,null,oe[_e],F,L);"value"in oe&&i(K,"value",null,oe.value,F),(H=oe.onVnodeBeforeMount)&&dn(H,L,T)}fe&&Fr(T,null,L,"beforeMount");const ce=hE(B,re);ce&&re.beforeEnter(K),r(K,b,R),((H=oe&&oe.onVnodeMounted)||ce||fe)&&Mt(()=>{H&&dn(H,L,T),ce&&re.enter(K),fe&&Fr(T,null,L,"mounted")},B)},S=(T,b,R,L,B)=>{if(R&&y(T,R),L)for(let F=0;F<L.length;F++)y(T,L[F]);if(B){let F=B.subTree;if(b===F||Wg(F.type)&&(F.ssContent===b||F.ssFallback===b)){const Y=B.vnode;S(T,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},w=(T,b,R,L,B,F,Y,W,K=0)=>{for(let H=K;H<T.length;H++){const oe=T[H]=W?lr(T[H]):mn(T[H]);D(null,oe,b,R,L,B,F,Y,W)}},E=(T,b,R,L,B,F,Y)=>{const W=b.el=T.el;let{patchFlag:K,dynamicChildren:H,dirs:oe}=b;K|=T.patchFlag&16;const X=T.props||Ne,re=b.props||Ne;let fe;if(R&&Ur(R,!1),(fe=re.onVnodeBeforeUpdate)&&dn(fe,R,b,T),oe&&Fr(b,T,R,"beforeUpdate"),R&&Ur(R,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&d(W,""),H?C(T.dynamicChildren,H,W,R,L,Wl(b,B),F):Y||Ee(T,b,W,null,R,L,Wl(b,B),F,!1),K>0){if(K&16)I(W,X,re,R,B);else if(K&2&&X.class!==re.class&&i(W,"class",null,re.class,B),K&4&&i(W,"style",X.style,re.style,B),K&8){const ce=b.dynamicProps;for(let _e=0;_e<ce.length;_e++){const be=ce[_e],ft=X[be],st=re[be];(st!==ft||be==="value")&&i(W,be,ft,st,B,R)}}K&1&&T.children!==b.children&&d(W,b.children)}else!Y&&H==null&&I(W,X,re,R,B);((fe=re.onVnodeUpdated)||oe)&&Mt(()=>{fe&&dn(fe,R,b,T),oe&&Fr(b,T,R,"updated")},L)},C=(T,b,R,L,B,F,Y)=>{for(let W=0;W<b.length;W++){const K=T[W],H=b[W],oe=K.el&&(K.type===Fe||!us(K,H)||K.shapeFlag&198)?p(K.el):R;D(K,H,oe,null,L,B,F,Y,!0)}},I=(T,b,R,L,B)=>{if(b!==R){if(b!==Ne)for(const F in b)!wi(F)&&!(F in R)&&i(T,F,b[F],null,B,L);for(const F in R){if(wi(F))continue;const Y=R[F],W=b[F];Y!==W&&F!=="value"&&i(T,F,W,Y,B,L)}"value"in R&&i(T,"value",b.value,R.value,B)}},_=(T,b,R,L,B,F,Y,W,K)=>{const H=b.el=T?T.el:l(""),oe=b.anchor=T?T.anchor:l("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:fe}=b;fe&&(W=W?W.concat(fe):fe),T==null?(r(H,R,L),r(oe,R,L),w(b.children||[],R,oe,B,F,Y,W,K)):X>0&&X&64&&re&&T.dynamicChildren?(C(T.dynamicChildren,re,R,B,F,Y,W),(b.key!=null||B&&b===B.subTree)&&jg(T,b,!0)):Ee(T,b,R,oe,B,F,Y,W,K)},v=(T,b,R,L,B,F,Y,W,K)=>{b.slotScopeIds=W,T==null?b.shapeFlag&512?B.ctx.activate(b,R,L,Y,K):z(b,R,L,B,F,Y,K):ve(T,b,K)},z=(T,b,R,L,B,F,Y)=>{const W=T.component=RE(T,L,B);if(Tg(T)&&(W.ctx.renderer=te),PE(W,!1,Y),W.asyncDep){if(B&&B.registerDep(W,je,Y),!T.el){const K=W.subTree=Qe(In);q(null,K,b,R)}}else je(W,T,b,R,B,F,Y)},ve=(T,b,R)=>{const L=b.component=T.component;if(EE(T,b,R))if(L.asyncDep&&!L.asyncResolved){Ie(L,b,R);return}else L.next=b,L.update();else b.el=T.el,L.vnode=b},je=(T,b,R,L,B,F,Y)=>{const W=()=>{if(T.isMounted){let{next:X,bu:re,u:fe,parent:ce,vnode:_e}=T;{const pt=Hg(T);if(pt){X&&(X.el=_e.el,Ie(T,X,Y)),pt.asyncDep.then(()=>{T.isUnmounted||W()});return}}let be=X,ft;Ur(T,!1),X?(X.el=_e.el,Ie(T,X,Y)):X=_e,re&&Wo(re),(ft=X.props&&X.props.onVnodeBeforeUpdate)&&dn(ft,ce,X,_e),Ur(T,!0);const st=vd(T),Ht=T.subTree;T.subTree=st,D(Ht,st,p(Ht.el),M(Ht),T,B,F),X.el=st.el,be===null&&wE(T,st.el),fe&&Mt(fe,B),(ft=X.props&&X.props.onVnodeUpdated)&&Mt(()=>dn(ft,ce,X,_e),B)}else{let X;const{el:re,props:fe}=b,{bm:ce,m:_e,parent:be,root:ft,type:st}=T,Ht=ws(b);Ur(T,!1),ce&&Wo(ce),!Ht&&(X=fe&&fe.onVnodeBeforeMount)&&dn(X,be,b),Ur(T,!0);{ft.ce&&ft.ce._injectChildStyle(st);const pt=T.subTree=vd(T);D(null,pt,R,L,T,B,F),b.el=pt.el}if(_e&&Mt(_e,B),!Ht&&(X=fe&&fe.onVnodeMounted)){const pt=b;Mt(()=>dn(X,be,pt),B)}(b.shapeFlag&256||be&&ws(be.vnode)&&be.vnode.shapeFlag&256)&&T.a&&Mt(T.a,B),T.isMounted=!0,b=R=L=null}};T.scope.on();const K=T.effect=new Yp(W);T.scope.off();const H=T.update=K.run.bind(K),oe=T.job=K.runIfDirty.bind(K);oe.i=T,oe.id=T.uid,K.scheduler=()=>gu(oe),Ur(T,!0),H()},Ie=(T,b,R)=>{b.component=T;const L=T.vnode.props;T.vnode=b,T.next=null,sE(T,b.props,L,R),lE(T,b.children,R),$n(),hd(T),jn()},Ee=(T,b,R,L,B,F,Y,W,K=!1)=>{const H=T&&T.children,oe=T?T.shapeFlag:0,X=b.children,{patchFlag:re,shapeFlag:fe}=b;if(re>0){if(re&128){Xt(H,X,R,L,B,F,Y,W,K);return}else if(re&256){Ot(H,X,R,L,B,F,Y,W,K);return}}fe&8?(oe&16&&xt(H,B,F),X!==H&&d(R,X)):oe&16?fe&16?Xt(H,X,R,L,B,F,Y,W,K):xt(H,B,F,!0):(oe&8&&d(R,""),fe&16&&w(X,R,L,B,F,Y,W,K))},Ot=(T,b,R,L,B,F,Y,W,K)=>{T=T||_s,b=b||_s;const H=T.length,oe=b.length,X=Math.min(H,oe);let re;for(re=0;re<X;re++){const fe=b[re]=K?lr(b[re]):mn(b[re]);D(T[re],fe,R,null,B,F,Y,W,K)}H>oe?xt(T,B,F,!0,!1,X):w(b,R,L,B,F,Y,W,K,X)},Xt=(T,b,R,L,B,F,Y,W,K)=>{let H=0;const oe=b.length;let X=T.length-1,re=oe-1;for(;H<=X&&H<=re;){const fe=T[H],ce=b[H]=K?lr(b[H]):mn(b[H]);if(us(fe,ce))D(fe,ce,R,null,B,F,Y,W,K);else break;H++}for(;H<=X&&H<=re;){const fe=T[X],ce=b[re]=K?lr(b[re]):mn(b[re]);if(us(fe,ce))D(fe,ce,R,null,B,F,Y,W,K);else break;X--,re--}if(H>X){if(H<=re){const fe=re+1,ce=fe<oe?b[fe].el:L;for(;H<=re;)D(null,b[H]=K?lr(b[H]):mn(b[H]),R,ce,B,F,Y,W,K),H++}}else if(H>re)for(;H<=X;)He(T[H],B,F,!0),H++;else{const fe=H,ce=H,_e=new Map;for(H=ce;H<=re;H++){const it=b[H]=K?lr(b[H]):mn(b[H]);it.key!=null&&_e.set(it.key,H)}let be,ft=0;const st=re-ce+1;let Ht=!1,pt=0;const Jn=new Array(st);for(H=0;H<st;H++)Jn[H]=0;for(H=fe;H<=X;H++){const it=T[H];if(ft>=st){He(it,B,F,!0);continue}let qt;if(it.key!=null)qt=_e.get(it.key);else for(be=ce;be<=re;be++)if(Jn[be-ce]===0&&us(it,b[be])){qt=be;break}qt===void 0?He(it,B,F,!0):(Jn[qt-ce]=H+1,qt>=pt?pt=qt:Ht=!0,D(it,b[qt],R,null,B,F,Y,W,K),ft++)}const Ys=Ht?dE(Jn):_s;for(be=Ys.length-1,H=st-1;H>=0;H--){const it=ce+H,qt=b[it],vo=it+1<oe?b[it+1].el:L;Jn[H]===0?D(null,qt,R,vo,B,F,Y,W,K):Ht&&(be<0||H!==Ys[be]?jt(qt,R,vo,2):be--)}}},jt=(T,b,R,L,B=null)=>{const{el:F,type:Y,transition:W,children:K,shapeFlag:H}=T;if(H&6){jt(T.component.subTree,b,R,L);return}if(H&128){T.suspense.move(b,R,L);return}if(H&64){Y.move(T,b,R,te);return}if(Y===Fe){r(F,b,R);for(let X=0;X<K.length;X++)jt(K[X],b,R,L);r(T.anchor,b,R);return}if(Y===Xo){N(T,b,R);return}if(L!==2&&H&1&&W)if(L===0)W.beforeEnter(F),r(F,b,R),Mt(()=>W.enter(F),B);else{const{leave:X,delayLeave:re,afterLeave:fe}=W,ce=()=>{T.ctx.isUnmounted?s(F):r(F,b,R)},_e=()=>{X(F,()=>{ce(),fe&&fe()})};re?re(F,ce,_e):_e()}else r(F,b,R)},He=(T,b,R,L=!1,B=!1)=>{const{type:F,props:Y,ref:W,children:K,dynamicChildren:H,shapeFlag:oe,patchFlag:X,dirs:re,cacheIndex:fe}=T;if(X===-2&&(B=!1),W!=null&&($n(),_a(W,null,R,T,!0),jn()),fe!=null&&(b.renderCache[fe]=void 0),oe&256){b.ctx.deactivate(T);return}const ce=oe&1&&re,_e=!ws(T);let be;if(_e&&(be=Y&&Y.onVnodeBeforeUnmount)&&dn(be,b,T),oe&6)hn(T.component,R,L);else{if(oe&128){T.suspense.unmount(R,L);return}ce&&Fr(T,null,b,"beforeUnmount"),oe&64?T.type.remove(T,b,R,te,L):H&&!H.hasOnce&&(F!==Fe||X>0&&X&64)?xt(H,b,R,!1,!0):(F===Fe&&X&384||!B&&oe&16)&&xt(K,b,R),L&&qe(T)}(_e&&(be=Y&&Y.onVnodeUnmounted)||ce)&&Mt(()=>{be&&dn(be,b,T),ce&&Fr(T,null,b,"unmounted")},R)},qe=T=>{const{type:b,el:R,anchor:L,transition:B}=T;if(b===Fe){Yn(R,L);return}if(b===Xo){k(T);return}const F=()=>{s(R),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:W}=B,K=()=>Y(R,F);W?W(T.el,F,K):K()}else F()},Yn=(T,b)=>{let R;for(;T!==b;)R=g(T),s(T),T=R;s(b)},hn=(T,b,R)=>{const{bum:L,scope:B,job:F,subTree:Y,um:W,m:K,a:H,parent:oe,slots:{__:X}}=T;yd(K),yd(H),L&&Wo(L),oe&&ae(X)&&X.forEach(re=>{oe.renderCache[re]=void 0}),B.stop(),F&&(F.flags|=8,He(Y,T,b,R)),W&&Mt(W,b),Mt(()=>{T.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},xt=(T,b,R,L=!1,B=!1,F=0)=>{for(let Y=F;Y<T.length;Y++)He(T[Y],b,R,L,B)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const b=g(T.anchor||T.el),R=b&&b[D0];return R?g(R):b};let Z=!1;const J=(T,b,R)=>{T==null?b._vnode&&He(b._vnode,null,null,!0):D(b._vnode||null,T,b,null,null,null,R),b._vnode=T,Z||(Z=!0,hd(),_g(),Z=!1)},te={p:D,um:He,m:jt,r:qe,mt:z,mc:w,pc:Ee,pbc:C,n:M,o:t};return{render:J,hydrate:void 0,createApp:nE(J)}}function Wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jg(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=lr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&jg(o,l)),l.type===Ja&&(l.el=o.el),l.type===In&&!l.el&&(l.el=o.el)}}function dE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hg(e)}function yd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fE=Symbol.for("v-scx"),pE=()=>Gt(fE);function Qo(t,e,n){return qg(t,e,n)}function qg(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=tt({},n),c=e&&r||!e&&i!=="post";let u;if(ji){if(i==="sync"){const y=pE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=_n,y.resume=_n,y.pause=_n,y}}const d=ct;l.call=(y,x,D)=>ln(y,d,x,D);let p=!1;i==="post"?l.scheduler=y=>{Mt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,x)=>{x?y():gu(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=P0(t,e,l);return ji&&(u?u.push(g):c&&g()),g}function gE(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?zg(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=ao(this),l=qg(s,i.bind(r),n);return o(),l}function zg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const mE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${Zr(e)}Modifiers`];function _E(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&mE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>We(d)?d.trim():d)),o.number&&(s=n.map(da)));let l,c=r[l=Ko(e)]||r[l=Ko(Qt(e))];!c&&i&&(c=r[l=Ko(Zr(e))]),c&&ln(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ln(u,t,6,s)}}function Kg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=u=>{const d=Kg(u,e,!0);d&&(l=!0,tt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Me(t)&&r.set(t,null),null):(ae(i)?i.forEach(c=>o[c]=null):tt(o,i),Me(t)&&r.set(t,o),o)}function Ya(t,e){return!t||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Zr(e))||ke(t,e))}function vd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:y,ctx:x,inheritAttrs:D}=t,O=ma(t);let q,$;try{if(n.shapeFlag&4){const k=s||r,se=k;q=mn(u.call(se,k,d,p,y,g,x)),$=l}else{const k=e;q=mn(k.length>1?k(p,{attrs:l,slots:o,emit:c}):k(p,null)),$=e.props?l:yE(l)}}catch(k){Ci.length=0,Ga(k,t,1),q=Qe(In)}let N=q;if($&&D!==!1){const k=Object.keys($),{shapeFlag:se}=N;k.length&&se&7&&(i&&k.some(su)&&($=vE($,i)),N=Kr(N,$,!1,!0))}return n.dirs&&(N=Kr(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Ui(N,n.transition),q=N,ma(O),q}const yE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ha(n))&&((e||(e={}))[n]=t[n]);return e},vE=(t,e)=>{const n={};for(const r in t)(!su(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function EE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ed(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!Ya(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ed(r,o,u):!0:!!o;return!1}function Ed(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ya(n,i))return!0}return!1}function wE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wg=t=>t.__isSuspense;function TE(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):V0(t)}const Fe=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),Ci=[];let Ut=null;function ne(t=!1){Ci.push(Ut=t?null:[])}function IE(){Ci.pop(),Ut=Ci[Ci.length-1]||null}let Bi=1;function wd(t,e=!1){Bi+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function Gg(t){return t.dynamicChildren=Bi>0?Ut||_s:null,IE(),Bi>0&&Ut&&Ut.push(t),t}function ue(t,e,n,r,s,i){return Gg(A(t,e,n,r,s,i,!0))}function tn(t,e,n,r,s){return Gg(Qe(t,e,n,r,s,!0))}function $i(t){return t?t.__v_isVNode===!0:!1}function us(t,e){return t.type===e.type&&t.key===e.key}const Qg=({key:t})=>t??null,Yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||It(t)||me(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qg(e),ref:e&&Yo(e),scopeId:vg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rt};return l?(vu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=We(n)?8:16),Bi>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const Qe=bE;function bE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rg)&&(t=In),$i(t)){const l=Kr(t,e,!0);return n&&vu(l,n),Bi>0&&!i&&Ut&&(l.shapeFlag&6?Ut[Ut.indexOf(t)]=l:Ut.push(l)),l.patchFlag=-2,l}if(OE(t)&&(t=t.__vccOpts),e){e=AE(e);let{class:l,style:c}=e;l&&!We(l)&&(e.class=Tt(l)),Me(c)&&(pu(c)&&!ae(c)&&(c=tt({},c)),e.style=ro(c))}const o=We(t)?1:Wg(t)?128:O0(t)?64:Me(t)?4:me(t)?2:0;return A(t,e,n,r,s,o,i,!0)}function AE(t){return t?pu(t)||Mg(t)?tt({},t):t:null}function Kr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Za(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Qg(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(Yo(e)):[i,Yo(e)]:Yo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ui(d,c.clone(d)),d}function Kt(t=" ",e=0){return Qe(Ja,null,t,e)}function Tc(t,e){const n=Qe(Xo,null,t);return n.staticCount=e,n}function Pt(t="",e=!1){return e?(ne(),tn(In,null,t)):Qe(In,null,t)}function mn(t){return t==null||typeof t=="boolean"?Qe(In):ae(t)?Qe(Fe,null,t.slice()):$i(t)?lr(t):Qe(Ja,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function vu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Mg(e)?e._ctx=rt:s===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),r&64?(n=16,e=[Kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Za(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tt([e.class,r.class]));else if(s==="style")e.style=ro([e.style,r.style]);else if(Ha(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){ln(t,e,7,[n,r])}const CE=Dg();let SE=0;function RE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||CE,i={uid:SE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new n0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fg(r,s),emitsOptions:Kg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_E.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const Xg=()=>ct||rt;let va,Ic;{const t=Ka(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};va=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Ic=e("__VUE_SSR_SETTERS__",n=>ji=n)}const ao=t=>{const e=ct;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Td=()=>{ct&&ct.scope.off(),va(null)};function Yg(t){return t.vnode.shapeFlag&4}let ji=!1;function PE(t,e=!1,n=!1){e&&Ic(e);const{props:r,children:s}=t.vnode,i=Yg(t);rE(t,r,i,e),aE(t,s,n||e);const o=i?xE(t,e):void 0;return e&&Ic(!1),o}function xE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Q0);const{setup:r}=n;if(r){$n();const s=t.setupContext=r.length>1?VE(t):null,i=ao(t),o=io(r,t,0,[t.props,s]),l=qp(o);if(jn(),i(),(l||t.sp)&&!ws(t)&&wg(t),l){if(o.then(Td,Td),e)return o.then(c=>{Id(t,c)}).catch(c=>{Ga(c,t,0)});t.asyncDep=o}else Id(t,o)}else Jg(t)}function Id(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=pg(e)),Jg(t)}function Jg(t,e,n){const r=t.type;t.render||(t.render=r.render||_n);{const s=ao(t);$n();try{X0(t)}finally{jn(),s()}}}const kE={get(t,e){return Et(t,"get",""),t[e]}};function VE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kE),slots:t.slots,emit:t.emit,expose:e}}function el(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pg(T0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}})):t.proxy}function DE(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function OE(t){return me(t)&&"__vccOpts"in t}const Be=(t,e)=>S0(t,e,ji);function Zg(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ae(e)?$i(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$i(n)&&(n=[n]),Qe(t,e,n))}const NE="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bc;const bd=typeof window<"u"&&window.trustedTypes;if(bd)try{bc=bd.createPolicy("vue",{createHTML:t=>t})}catch{}const em=bc?t=>bc.createHTML(t):t=>t,ME="http://www.w3.org/2000/svg",LE="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,Ad=Vn&&Vn.createElement("template"),FE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Vn.createElementNS(ME,t):e==="mathml"?Vn.createElementNS(LE,t):n?Vn.createElement(t,{is:n}):Vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ad.innerHTML=em(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ad.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nr="transition",hi="animation",Ss=Symbol("_vtc"),tm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},UE=tt({},M0,tm),Br=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cd=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function BE(t){const e={};for(const _ in t)_ in tm||(e[_]=t[_]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,x=$E(s),D=x&&x[0],O=x&&x[1],{onBeforeEnter:q,onEnter:$,onEnterCancelled:N,onLeave:k,onLeaveCancelled:se,onBeforeAppear:Q=q,onAppear:S=$,onAppearCancelled:w=N}=e,E=(_,v,z,ve)=>{_._enterCancelled=ve,or(_,v?d:l),or(_,v?u:o),z&&z()},C=(_,v)=>{_._isLeaving=!1,or(_,p),or(_,y),or(_,g),v&&v()},I=_=>(v,z)=>{const ve=_?S:$,je=()=>E(v,_,z);Br(ve,[v,je]),Sd(()=>{or(v,_?c:i),fn(v,_?d:l),Cd(ve)||Rd(v,r,D,je)})};return tt(e,{onBeforeEnter(_){Br(q,[_]),fn(_,i),fn(_,o)},onBeforeAppear(_){Br(Q,[_]),fn(_,c),fn(_,u)},onEnter:I(!1),onAppear:I(!0),onLeave(_,v){_._isLeaving=!0;const z=()=>C(_,v);fn(_,p),_._enterCancelled?(fn(_,g),Ac()):(Ac(),fn(_,g)),Sd(()=>{_._isLeaving&&(or(_,p),fn(_,y),Cd(k)||Rd(_,r,O,z))}),Br(k,[_,z])},onEnterCancelled(_){E(_,!1,void 0,!0),Br(N,[_])},onAppearCancelled(_){E(_,!0,void 0,!0),Br(w,[_])},onLeaveCancelled(_){C(_),Br(se,[_])}})}function $E(t){if(t==null)return null;if(Me(t))return[Gl(t.enter),Gl(t.leave)];{const e=Gl(t);return[e,e]}}function Gl(t){return Gv(t)}function fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ss]||(t[Ss]=new Set)).add(e)}function or(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ss];n&&(n.delete(e),n.size||(t[Ss]=void 0))}function Sd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let jE=0;function Rd(t,e,n,r){const s=t._endId=++jE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=nm(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=y=>{y.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function nm(t,e){const n=window.getComputedStyle(t),r=x=>(n[x]||"").split(", "),s=r(`${nr}Delay`),i=r(`${nr}Duration`),o=Pd(s,i),l=r(`${hi}Delay`),c=r(`${hi}Duration`),u=Pd(l,c);let d=null,p=0,g=0;e===nr?o>0&&(d=nr,p=o,g=i.length):e===hi?u>0&&(d=hi,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?nr:hi:null,g=d?d===nr?i.length:c.length:0);const y=d===nr&&/\b(transform|all)(,|$)/.test(r(`${nr}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:y}}function Pd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>xd(n)+xd(t[r])))}function xd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ac(){return document.body.offsetHeight}function HE(t,e,n){const r=t[Ss];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kd=Symbol("_vod"),qE=Symbol("_vsh"),zE=Symbol(""),KE=/(^|;)\s*display\s*:/;function WE(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Jo(r,l,"")}else for(const o in e)n[o]==null&&Jo(r,o,"");for(const o in n)o==="display"&&(i=!0),Jo(r,o,n[o])}else if(s){if(e!==n){const o=r[zE];o&&(n+=";"+o),r.cssText=n,i=KE.test(n)}}else e&&t.removeAttribute("style");kd in t&&(t[kd]=i?r.display:"",t[qE]&&(r.display="none"))}const Vd=/\s*!important$/;function Jo(t,e,n){if(ae(n))n.forEach(r=>Jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=GE(t,e);Vd.test(n)?t.setProperty(Zr(r),n.replace(Vd,""),"important"):t[r]=n}}const Dd=["Webkit","Moz","ms"],Ql={};function GE(t,e){const n=Ql[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return Ql[e]=r;r=za(r);for(let s=0;s<Dd.length;s++){const i=Dd[s]+r;if(i in t)return Ql[e]=i}return e}const Od="http://www.w3.org/1999/xlink";function Nd(t,e,n,r,s,i=e0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Od,e.slice(6,e.length)):t.setAttributeNS(Od,e,n):n==null||i&&!Gp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":an(n)?String(n):n)}function Md(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?em(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ur(t,e,n,r){t.addEventListener(e,n,r)}function QE(t,e,n,r){t.removeEventListener(e,n,r)}const Ld=Symbol("_vei");function XE(t,e,n,r,s=null){const i=t[Ld]||(t[Ld]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=YE(e);if(r){const u=i[e]=ew(r,s);ur(t,l,u,c)}else o&&(QE(t,l,o,c),i[e]=void 0)}}const Fd=/(?:Once|Passive|Capture)$/;function YE(t){let e;if(Fd.test(t)){e={};let r;for(;r=t.match(Fd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zr(t.slice(2)),e]}let Xl=0;const JE=Promise.resolve(),ZE=()=>Xl||(JE.then(()=>Xl=0),Xl=Date.now());function ew(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(tw(r,n.value),e,5,[r])};return n.value=t,n.attached=ZE(),n}function tw(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?HE(t,r,o):e==="style"?WE(t,n,r):Ha(e)?su(e)||XE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rw(t,e,r,o))?(Md(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Md(t,Qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nd(t,e,r,o))};function rw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ud(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ud(e)&&We(n)?!1:e in t}const rm=new WeakMap,sm=new WeakMap,Ea=Symbol("_moveCb"),Bd=Symbol("_enterCb"),sw=t=>(delete t.props.mode,t),iw=sw({name:"TransitionGroup",props:tt({},UE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xg(),r=N0();let s,i;return bg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!uw(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(aw),s.forEach(lw);const l=s.filter(cw);Ac(),l.forEach(c=>{const u=c.el,d=u.style;fn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Ea]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Ea]=null,or(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Re(t),l=BE(o);let c=o.tag||Fe;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Ui(d,_c(d,l,r,n)),rm.set(d,d.el.getBoundingClientRect()))}i=e.default?Eg(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Ui(d,_c(d,l,r,n))}return Qe(c,null,i)}}}),ow=iw;function aw(t){const e=t.el;e[Ea]&&e[Ea](),e[Bd]&&e[Bd]()}function lw(t){sm.set(t,t.el.getBoundingClientRect())}function cw(t){const e=rm.get(t),n=sm.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function uw(t,e,n){const r=t.cloneNode(),s=t[Ss];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=nm(r);return i.removeChild(r),o}const Rs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Wo(e,n):e};function hw(t){t.target.composing=!0}function $d(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fn=Symbol("_assign"),yt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Fn]=Rs(s);const i=r||s.props&&s.props.type==="number";ur(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=da(l)),t[Fn](l)}),n&&ur(t,"change",()=>{t.value=t.value.trim()}),e||(ur(t,"compositionstart",hw),ur(t,"compositionend",$d),ur(t,"change",$d))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Fn]=Rs(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?da(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},jd={deep:!0,created(t,e,n){t[Fn]=Rs(n),ur(t,"change",()=>{const r=t._modelValue,s=Hi(t),i=t.checked,o=t[Fn];if(ae(r)){const l=au(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Bs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(im(t,i))})},mounted:Hd,beforeUpdate(t,e,n){t[Fn]=Rs(n),Hd(t,e,n)}};function Hd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ae(e))s=au(e,r.props.value)>-1;else if(Bs(e))s=e.has(r.props.value);else{if(e===n)return;s=so(e,im(t,!0))}t.checked!==s&&(t.checked=s)}const dw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Bs(e);ur(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?da(Hi(o)):Hi(o));t[Fn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Qa(()=>{t._assigning=!1})}),t[Fn]=Rs(r)},mounted(t,{value:e}){qd(t,e)},beforeUpdate(t,e,n){t[Fn]=Rs(n)},updated(t,{value:e}){t._assigning||qd(t,e)}};function qd(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!Bs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Hi(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=au(e,l)>-1}else o.selected=e.has(l);else if(so(Hi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Hi(t){return"_value"in t?t._value:t.value}function im(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const fw=["ctrl","shift","alt","meta"],pw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fw.some(n=>t[`${n}Key`]&&!e.includes(n))},wa=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=pw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},gw=tt({patchProp:nw},FE);let zd;function mw(){return zd||(zd=cE(gw))}const om=(...t)=>{const e=mw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yw(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_w(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _w(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yw(t){return We(t)?document.querySelector(t):t}const Cc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function am(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&am(t.default)}const xe=Object.assign;function Yl(t,e){const n={};for(const r in e){const s=e[r];n[r]=cn(s)?s.map(t):t(s)}return n}const Si=()=>{},cn=Array.isArray,lm=/#/g,Ew=/&/g,ww=/\//g,Tw=/=/g,Iw=/\?/g,cm=/\+/g,bw=/%5B/g,Aw=/%5D/g,um=/%5E/g,Cw=/%60/g,hm=/%7B/g,Sw=/%7C/g,dm=/%7D/g,Rw=/%20/g;function Eu(t){return encodeURI(""+t).replace(Sw,"|").replace(bw,"[").replace(Aw,"]")}function Pw(t){return Eu(t).replace(hm,"{").replace(dm,"}").replace(um,"^")}function Sc(t){return Eu(t).replace(cm,"%2B").replace(Rw,"+").replace(lm,"%23").replace(Ew,"%26").replace(Cw,"`").replace(hm,"{").replace(dm,"}").replace(um,"^")}function xw(t){return Sc(t).replace(Tw,"%3D")}function kw(t){return Eu(t).replace(lm,"%23").replace(Iw,"%3F")}function Vw(t){return t==null?"":kw(t).replace(ww,"%2F")}function qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Dw=/\/$/,Ow=t=>t.replace(Dw,"");function Jl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Fw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qi(o)}}function Nw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Mw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ps(e.matched[r],n.matched[s])&&fm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lw(t[n],e[n]))return!1;return!0}function Lw(t,e){return cn(t)?Wd(t,e):cn(e)?Wd(e,t):t===e}function Wd(t,e){return cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Fw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zi;(function(t){t.pop="pop",t.push="push"})(zi||(zi={}));var Ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ri||(Ri={}));function Uw(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ow(t)}const Bw=/^[^#]+#/;function $w(t,e){return t.replace(Bw,"#")+e}function jw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tl=()=>({left:window.scrollX,top:window.scrollY});function Hw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gd(t,e){return(history.state?history.state.position-e:-1)+t}const Rc=new Map;function qw(t,e){Rc.set(t,e)}function zw(t){const e=Rc.get(t);return Rc.delete(t),e}let Kw=()=>location.protocol+"//"+location.host;function pm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Kd(c,"")}return Kd(n,t)+r+s}function Ww(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const y=pm(t,location),x=n.value,D=e.value;let O=0;if(g){if(n.value=y,e.value=g,o&&o===x){o=null;return}O=D?g.position-D.position:0}else r(y);s.forEach(q=>{q(n.value,x,{delta:O,type:zi.pop,direction:O?O>0?Ri.forward:Ri.back:Ri.unknown})})};function c(){o=n.value}function u(g){s.push(g);const y=()=>{const x=s.indexOf(g);x>-1&&s.splice(x,1)};return i.push(y),y}function d(){const{history:g}=window;g.state&&g.replaceState(xe({},g.state,{scroll:tl()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Qd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?tl():null}}function Gw(t){const{history:e,location:n}=window,r={value:pm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Kw()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function o(c,u){const d=xe({},e.state,Qd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=xe({},s.value,e.state,{forward:c,scroll:tl()});i(d.current,d,!0);const p=xe({},Qd(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Qw(t){t=Uw(t);const e=Gw(t),n=Ww(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:$w.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Xw(t){return typeof t=="string"||t&&typeof t=="object"}function gm(t){return typeof t=="string"||typeof t=="symbol"}const mm=Symbol("");var Xd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xd||(Xd={}));function xs(t,e){return xe(new Error,{type:t,[mm]:!0},e)}function Pn(t,e){return t instanceof Error&&mm in t&&(e==null||!!(t.type&e))}const Yd="[^/]+?",Yw={sensitive:!1,strict:!1,start:!0,end:!0},Jw=/[.+*?^${}()[\]/\\]/g;function Zw(t,e){const n=xe({},Yw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Jw,"\\$&"),y+=40;else if(g.type===1){const{value:x,repeatable:D,optional:O,regexp:q}=g;i.push({name:x,repeatable:D,optional:O});const $=q||Yd;if($!==Yd){y+=10;try{new RegExp(`(${$})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${x}" (${$}): `+k.message)}}let N=D?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(N=O&&u.length<2?`(?:/${N})`:"/"+N),O&&(N+="?"),s+=N,y+=20,O&&(y+=-8),D&&(y+=-20),$===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",x=i[g-1];p[x.name]=y&&x.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===0)d+=y.value;else if(y.type===1){const{value:x,repeatable:D,optional:O}=y,q=x in u?u[x]:"";if(cn(q)&&!D)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const $=cn(q)?q.join("/"):q;if(!$)if(O)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);d+=$}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function eT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function _m(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jd(r))return 1;if(Jd(s))return-1}return s.length-r.length}function Jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tT={type:0,value:""},nT=/[a-zA-Z0-9_]/;function rT(t){if(!t)return[[]];if(t==="/")return[[tT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:nT.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function sT(t,e,n){const r=Zw(rT(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function iT(t,e){const n=[],r=new Map;e=nf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,y){const x=!y,D=ef(p);D.aliasOf=y&&y.record;const O=nf(e,p),q=[D];if("alias"in p){const k=typeof p.alias=="string"?[p.alias]:p.alias;for(const se of k)q.push(ef(xe({},D,{components:y?y.record.components:D.components,path:se,aliasOf:y?y.record:D})))}let $,N;for(const k of q){const{path:se}=k;if(g&&se[0]!=="/"){const Q=g.record.path,S=Q[Q.length-1]==="/"?"":"/";k.path=g.record.path+(se&&S+se)}if($=sT(k,g,O),y?y.alias.push($):(N=N||$,N!==$&&N.alias.push($),x&&p.name&&!tf($)&&o(p.name)),ym($)&&c($),D.children){const Q=D.children;for(let S=0;S<Q.length;S++)i(Q[S],$,y&&y.children[S])}y=y||$}return N?()=>{o(N)}:Si}function o(p){if(gm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=lT(p,n);n.splice(g,0,p),p.record.name&&!tf(p)&&r.set(p.record.name,p)}function u(p,g){let y,x={},D,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw xs(1,{location:p});O=y.record.name,x=xe(Zd(g.params,y.keys.filter(N=>!N.optional).concat(y.parent?y.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),p.params&&Zd(p.params,y.keys.map(N=>N.name))),D=y.stringify(x)}else if(p.path!=null)D=p.path,y=n.find(N=>N.re.test(D)),y&&(x=y.parse(D),O=y.record.name);else{if(y=g.name?r.get(g.name):n.find(N=>N.re.test(g.path)),!y)throw xs(1,{location:p,currentLocation:g});O=y.record.name,x=xe({},g.params,p.params),D=y.stringify(x)}const q=[];let $=y;for(;$;)q.unshift($.record),$=$.parent;return{name:O,path:D,params:x,matched:q,meta:aT(q)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Zd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ef(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:oT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function oT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function tf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aT(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function nf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function lT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;_m(t,e[i])<0?r=i:n=i+1}const s=cT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function cT(t){let e=t;for(;e=e.parent;)if(ym(e)&&_m(t,e)===0)return e}function ym({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cm," "),o=i.indexOf("="),l=qi(o<0?i:i.slice(0,o)),c=o<0?null:qi(i.slice(o+1));if(l in e){let u=e[l];cn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function rf(t){let e="";for(let n in t){const r=t[n];if(n=xw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(r)?r.map(i=>i&&Sc(i)):[r&&Sc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const dT=Symbol(""),sf=Symbol(""),nl=Symbol(""),wu=Symbol(""),Pc=Symbol("");function di(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(xs(4,{from:n,to:e})):g instanceof Error?c(g):Xw(g)?c(xs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Zl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(am(c)){const d=(c.__vccOpts||c)[e];d&&i.push(cr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=vw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&cr(y,n,r,o,l,s)()}))}}return i}function of(t){const e=Gt(nl),n=Gt(wu),r=Be(()=>{const c=St(t.to);return e.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ps.bind(null,d));if(g>-1)return g;const y=af(c[u-2]);return u>1&&af(d)===y&&p[p.length-1].path!==y?p.findIndex(Ps.bind(null,c[u-2])):g}),i=Be(()=>s.value>-1&&mT(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&fm(n.params,r.value.params));function l(c={}){if(gT(c)){const u=e[St(t.replace)?"replace":"push"](St(t.to)).catch(Si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function fT(t){return t.length===1?t[0]:t}const pT=Gn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:of,setup(t,{slots:e}){const n=$s(of(t)),{options:r}=Gt(nl),s=Be(()=>({[lf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&fT(e.default(n));return t.custom?i:Zg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Zo=pT;function gT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!cn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lf=(t,e,n)=>t??e??n,_T=Gn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Gt(Pc),s=Be(()=>t.route||r.value),i=Gt(sf,0),o=Be(()=>{let u=St(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Be(()=>s.value.matched[o.value]);Go(sf,Be(()=>o.value+1)),Go(dT,l),Go(Pc,s);const c=Pe();return Qo(()=>[c.value,l.value,t.name],([u,d,p],[g,y,x])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!Ps(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return cf(n.default,{Component:g,route:u});const y=p.props[d],x=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=Zg(g,xe({},x,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return cf(n.default,{Component:O,route:u})||O}}});function cf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vm=_T;function yT(t){const e=iT(t.routes,t),n=t.parseQuery||uT,r=t.stringifyQuery||rf,s=t.history,i=di(),o=di(),l=di(),c=I0(rr);let u=rr;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Yl.bind(null,M=>""+M),p=Yl.bind(null,Vw),g=Yl.bind(null,qi);function y(M,Z){let J,te;return gm(M)?(J=e.getRecordMatcher(M),te=Z):te=M,e.addRoute(te,J)}function x(M){const Z=e.getRecordMatcher(M);Z&&e.removeRoute(Z)}function D(){return e.getRoutes().map(M=>M.record)}function O(M){return!!e.getRecordMatcher(M)}function q(M,Z){if(Z=xe({},Z||c.value),typeof M=="string"){const R=Jl(n,M,Z.path),L=e.resolve({path:R.path},Z),B=s.createHref(R.fullPath);return xe(R,L,{params:g(L.params),hash:qi(R.hash),redirectedFrom:void 0,href:B})}let J;if(M.path!=null)J=xe({},M,{path:Jl(n,M.path,Z.path).path});else{const R=xe({},M.params);for(const L in R)R[L]==null&&delete R[L];J=xe({},M,{params:p(R)}),Z.params=p(Z.params)}const te=e.resolve(J,Z),Ce=M.hash||"";te.params=d(g(te.params));const T=Nw(r,xe({},M,{hash:Pw(Ce),path:te.path})),b=s.createHref(T);return xe({fullPath:T,hash:Ce,query:r===rf?hT(M.query):M.query||{}},te,{redirectedFrom:void 0,href:b})}function $(M){return typeof M=="string"?Jl(n,M,c.value.path):xe({},M)}function N(M,Z){if(u!==M)return xs(8,{from:Z,to:M})}function k(M){return S(M)}function se(M){return k(xe($(M),{replace:!0}))}function Q(M){const Z=M.matched[M.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let te=typeof J=="function"?J(M):J;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=$(te):{path:te},te.params={}),xe({query:M.query,hash:M.hash,params:te.path!=null?{}:M.params},te)}}function S(M,Z){const J=u=q(M),te=c.value,Ce=M.state,T=M.force,b=M.replace===!0,R=Q(J);if(R)return S(xe($(R),{state:typeof R=="object"?xe({},Ce,R.state):Ce,force:T,replace:b}),Z||J);const L=J;L.redirectedFrom=Z;let B;return!T&&Mw(r,te,J)&&(B=xs(16,{to:L,from:te}),jt(te,te,!0,!1)),(B?Promise.resolve(B):C(L,te)).catch(F=>Pn(F)?Pn(F,2)?F:Xt(F):Ee(F,L,te)).then(F=>{if(F){if(Pn(F,2))return S(xe({replace:b},$(F.to),{state:typeof F.to=="object"?xe({},Ce,F.to.state):Ce,force:T}),Z||L)}else F=_(L,te,!0,b,Ce);return I(L,te,F),F})}function w(M,Z){const J=N(M,Z);return J?Promise.reject(J):Promise.resolve()}function E(M){const Z=Yn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(M):M()}function C(M,Z){let J;const[te,Ce,T]=vT(M,Z);J=Zl(te.reverse(),"beforeRouteLeave",M,Z);for(const R of te)R.leaveGuards.forEach(L=>{J.push(cr(L,M,Z))});const b=w.bind(null,M,Z);return J.push(b),xt(J).then(()=>{J=[];for(const R of i.list())J.push(cr(R,M,Z));return J.push(b),xt(J)}).then(()=>{J=Zl(Ce,"beforeRouteUpdate",M,Z);for(const R of Ce)R.updateGuards.forEach(L=>{J.push(cr(L,M,Z))});return J.push(b),xt(J)}).then(()=>{J=[];for(const R of T)if(R.beforeEnter)if(cn(R.beforeEnter))for(const L of R.beforeEnter)J.push(cr(L,M,Z));else J.push(cr(R.beforeEnter,M,Z));return J.push(b),xt(J)}).then(()=>(M.matched.forEach(R=>R.enterCallbacks={}),J=Zl(T,"beforeRouteEnter",M,Z,E),J.push(b),xt(J))).then(()=>{J=[];for(const R of o.list())J.push(cr(R,M,Z));return J.push(b),xt(J)}).catch(R=>Pn(R,8)?R:Promise.reject(R))}function I(M,Z,J){l.list().forEach(te=>E(()=>te(M,Z,J)))}function _(M,Z,J,te,Ce){const T=N(M,Z);if(T)return T;const b=Z===rr,R=hs?history.state:{};J&&(te||b?s.replace(M.fullPath,xe({scroll:b&&R&&R.scroll},Ce)):s.push(M.fullPath,Ce)),c.value=M,jt(M,Z,J,b),Xt()}let v;function z(){v||(v=s.listen((M,Z,J)=>{if(!hn.listening)return;const te=q(M),Ce=Q(te);if(Ce){S(xe(Ce,{replace:!0,force:!0}),te).catch(Si);return}u=te;const T=c.value;hs&&qw(Gd(T.fullPath,J.delta),tl()),C(te,T).catch(b=>Pn(b,12)?b:Pn(b,2)?(S(xe($(b.to),{force:!0}),te).then(R=>{Pn(R,20)&&!J.delta&&J.type===zi.pop&&s.go(-1,!1)}).catch(Si),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Ee(b,te,T))).then(b=>{b=b||_(te,T,!1),b&&(J.delta&&!Pn(b,8)?s.go(-J.delta,!1):J.type===zi.pop&&Pn(b,20)&&s.go(-1,!1)),I(te,T,b)}).catch(Si)}))}let ve=di(),je=di(),Ie;function Ee(M,Z,J){Xt(M);const te=je.list();return te.length?te.forEach(Ce=>Ce(M,Z,J)):console.error(M),Promise.reject(M)}function Ot(){return Ie&&c.value!==rr?Promise.resolve():new Promise((M,Z)=>{ve.add([M,Z])})}function Xt(M){return Ie||(Ie=!M,z(),ve.list().forEach(([Z,J])=>M?J(M):Z()),ve.reset()),M}function jt(M,Z,J,te){const{scrollBehavior:Ce}=t;if(!hs||!Ce)return Promise.resolve();const T=!J&&zw(Gd(M.fullPath,0))||(te||!J)&&history.state&&history.state.scroll||null;return Qa().then(()=>Ce(M,Z,T)).then(b=>b&&Hw(b)).catch(b=>Ee(b,M,Z))}const He=M=>s.go(M);let qe;const Yn=new Set,hn={currentRoute:c,listening:!0,addRoute:y,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:D,resolve:q,options:t,push:k,replace:se,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:je.add,isReady:Ot,install(M){const Z=this;M.component("RouterLink",Zo),M.component("RouterView",vm),M.config.globalProperties.$router=Z,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>St(c)}),hs&&!qe&&c.value===rr&&(qe=!0,k(s.location).catch(Ce=>{}));const J={};for(const Ce in rr)Object.defineProperty(J,Ce,{get:()=>c.value[Ce],enumerable:!0});M.provide(nl,Z),M.provide(wu,hg(J)),M.provide(Pc,c);const te=M.unmount;Yn.add(M),M.unmount=function(){Yn.delete(M),Yn.size<1&&(u=rr,v&&v(),v=null,c.value=rr,qe=!1,Ie=!1),te()}}};function xt(M){return M.reduce((Z,J)=>Z.then(()=>E(J)),Promise.resolve())}return hn}function vT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ps(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ps(u,c))||s.push(c))}return[n,r,s]}function Em(){return Gt(nl)}function ET(t){return Gt(wu)}const wT=()=>{};var uf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},TT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new IT;const g=i<<2|l>>4;if(r.push(g),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const x=u<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bT=function(t){const e=wm(t);return Tm.encodeByteArray(e,!0)},Ta=function(t){return bT(t).replace(/\./g,"")},Im=function(t){try{return Tm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=()=>AT().__FIREBASE_DEFAULTS__,ST=()=>{if(typeof process>"u"||typeof uf>"u")return;const t=uf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Im(t[1]);return e&&JSON.parse(e)},rl=()=>{try{return wT()||CT()||ST()||RT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bm=t=>{var e,n;return(n=(e=rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PT=t=>{const e=bm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Am=()=>{var t;return(t=rl())===null||t===void 0?void 0:t.config},Cm=t=>{var e;return(e=rl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){return t.endsWith(".cloudworkstations.dev")}async function Sm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}const Pi={};function VT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Pi))Pi[e]?t.emulator.push(e):t.prod.push(e);return t}function DT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let hf=!1;function Rm(t,e){if(typeof window>"u"||typeof document>"u"||!js(window.location.host)||Pi[t]===e||Pi[t]||hf)return;Pi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=VT().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{hf=!0,o()},g}function d(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=DT(r),y=n("text"),x=document.getElementById(y)||document.createElement("span"),D=n("learnmore"),O=document.getElementById(D)||document.createElement("a"),q=n("preprendIcon"),$=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const N=g.element;l(N),d(O,D);const k=u();c($,q),N.append($,x,O,k),document.body.appendChild(N)}i?(x.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function NT(){var t;const e=(t=rl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UT(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BT(){return!NT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $T(){try{return typeof indexedDB=="object"}catch{return!1}}function jT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HT,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Xn(s,l,r)}}function qT(t,e){return t.replace(zT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zT=/\{\$([^}]+)}/g;function KT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(df(i)&&df(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function df(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WT(t,e){const n=new GT(t,e);return n.subscribe.bind(n)}class GT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JT(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YT(t){return t===jr?void 0:t}function JT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const eI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},tI=we.INFO,nI={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},rI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tu{constructor(e){this.name=e,this._logLevel=tI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const sI=(t,e)=>e.some(n=>t instanceof n);let ff,pf;function iI(){return ff||(ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oI(){return pf||(pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pm=new WeakMap,xc=new WeakMap,xm=new WeakMap,tc=new WeakMap,Iu=new WeakMap;function aI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pm.set(n,t)}).catch(()=>{}),Iu.set(e,t),e}function lI(t){if(xc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cI(t){kc=t(kc)}function uI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nc(this),e,...n);return xm.set(r,e.sort?e.sort():[e]),yr(r)}:oI().includes(t)?function(...e){return t.apply(nc(this),e),yr(Pm.get(this))}:function(...e){return yr(t.apply(nc(this),e))}}function hI(t){return typeof t=="function"?uI(t):(t instanceof IDBTransaction&&lI(t),sI(t,iI())?new Proxy(t,kc):t)}function yr(t){if(t instanceof IDBRequest)return aI(t);if(tc.has(t))return tc.get(t);const e=hI(t);return e!==t&&(tc.set(t,e),Iu.set(e,t)),e}const nc=t=>Iu.get(t);function dI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yr(o.result),c.oldVersion,c.newVersion,yr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const fI=["get","getKey","getAll","getAllKeys","count"],pI=["put","add","delete","clear"],rc=new Map;function gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return rc.set(e,i),i}cI(t=>({...t,get:(e,n,r)=>gf(e,n)||t.get(e,n,r),has:(e,n)=>!!gf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",mf="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Tu("@firebase/app"),_I="@firebase/app-compat",yI="@firebase/analytics-compat",vI="@firebase/analytics",EI="@firebase/app-check-compat",wI="@firebase/app-check",TI="@firebase/auth",II="@firebase/auth-compat",bI="@firebase/database",AI="@firebase/data-connect",CI="@firebase/database-compat",SI="@firebase/functions",RI="@firebase/functions-compat",PI="@firebase/installations",xI="@firebase/installations-compat",kI="@firebase/messaging",VI="@firebase/messaging-compat",DI="@firebase/performance",OI="@firebase/performance-compat",NI="@firebase/remote-config",MI="@firebase/remote-config-compat",LI="@firebase/storage",FI="@firebase/storage-compat",UI="@firebase/firestore",BI="@firebase/ai",$I="@firebase/firestore-compat",jI="firebase",HI="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="[DEFAULT]",qI={[Vc]:"fire-core",[_I]:"fire-core-compat",[vI]:"fire-analytics",[yI]:"fire-analytics-compat",[wI]:"fire-app-check",[EI]:"fire-app-check-compat",[TI]:"fire-auth",[II]:"fire-auth-compat",[bI]:"fire-rtdb",[AI]:"fire-data-connect",[CI]:"fire-rtdb-compat",[SI]:"fire-fn",[RI]:"fire-fn-compat",[PI]:"fire-iid",[xI]:"fire-iid-compat",[kI]:"fire-fcm",[VI]:"fire-fcm-compat",[DI]:"fire-perf",[OI]:"fire-perf-compat",[NI]:"fire-rc",[MI]:"fire-rc-compat",[LI]:"fire-gcs",[FI]:"fire-gcs-compat",[UI]:"fire-fst",[$I]:"fire-fst-compat",[BI]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map,zI=new Map,Oc=new Map;function _f(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(Oc.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of Ia.values())_f(n,t);for(const n of zI.values())_f(n,t);return!0}function bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new lo("app","Firebase",KI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=HI;function km(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=Am()),!n)throw vr.create("no-options");const i=Ia.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new ZT(s);for(const c of Oc.values())o.addComponent(c);const l=new WI(n,r,o);return Ia.set(s,l),l}function Vm(t=Dc){const e=Ia.get(t);if(!e&&t===Dc&&Am())return km();if(!e)throw vr.create("no-app",{appName:t});return e}function Er(t,e,n){var r;let s=(r=qI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(l.join(" "));return}ks(new Gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="firebase-heartbeat-database",QI=1,Ki="firebase-heartbeat-store";let sc=null;function Dm(){return sc||(sc=dI(GI,QI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),sc}async function XI(t){try{const n=(await Dm()).transaction(Ki),r=await n.objectStore(Ki).get(Om(t));return await n.done,r}catch(e){if(e instanceof Xn)Hn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function yf(t,e){try{const r=(await Dm()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,Om(t)),await r.done}catch(n){if(n instanceof Xn)Hn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function Om(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=1024,JI=30;class ZI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>JI){const o=nb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vf(),{heartbeatsToSend:r,unsentEntries:s}=eb(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Hn.warn(n),""}}}function vf(){return new Date().toISOString().substring(0,10)}function eb(t,e=YI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ef(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ef(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $T()?jT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ef(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}function nb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){ks(new Gr("platform-logger",e=>new gI(e),"PRIVATE")),ks(new Gr("heartbeat",e=>new ZI(e),"PRIVATE")),Er(Vc,mf,t),Er(Vc,mf,"esm2017"),Er("fire-js","")}rb("");function Au(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sb=Nm,Mm=new lo("auth","Firebase",Nm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Tu("@firebase/auth");function ib(t,...e){ba.logLevel<=we.WARN&&ba.warn(`Auth (${Hs}): ${t}`,...e)}function ea(t,...e){ba.logLevel<=we.ERROR&&ba.error(`Auth (${Hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Cu(t,...e)}function yn(t,...e){return Cu(t,...e)}function Lm(t,e,n){const r=Object.assign(Object.assign({},sb()),{[e]:n});return new lo("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return Lm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mm.create(t,...e)}function he(t,e,...n){if(!t)throw Cu(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function qn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ob(){return wf()==="http:"||wf()==="https:"}function wf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ob()||LT()||"connection"in navigator)?navigator.onLine:!0}function lb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=OT()||FT()}get(){return ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hb=new uo(3e4,6e4);function es(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,s={}){return Um(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=co(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return MT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&js(t.emulatorConfig.host)&&(u.credentials="include"),Fm.fetch()(await Bm(t,t.config.apiHost,n,l),u)})}async function Um(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cb),e);try{const s=new fb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Uo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Uo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Uo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lm(t,d,u);un(t,d)}}catch(s){if(s instanceof Xn)throw s;un(t,"network-request-failed",{message:String(s)})}}async function sl(t,e,n,r,s={}){const i=await kr(t,e,n,r,s);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Bm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Su(t.config,s):`${t.config.apiScheme}://${s}`;return ub.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function db(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),hb.get())})}}function Uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}function Tf(t){return t!==void 0&&t.enterprise!==void 0}class pb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return db(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gb(t,e){return kr(t,"GET","/v2/recaptchaConfig",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function Aa(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _b(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=Ru(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xi(ic(s.auth_time)),issuedAtTime:xi(ic(s.iat)),expirationTime:xi(ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ic(t){return Number(t)*1e3}function Ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=Im(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function If(t){const e=Ru(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&yb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Wi(t,Aa(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$m(i.providerUserInfo):[],l=wb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Mc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Eb(t){const e=ht(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $m(t){return t.map(e=>{var{providerId:n}=e,r=Au(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){const n=await Um(t,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Bm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&js(t.emulatorConfig.host)&&(c.credentials="include"),Fm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ib(t,e){return kr(t,"POST","/v2/accounts:revokeToken",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):If(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=If(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Tb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Is;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _b(this,e)}reload(){return Eb(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await Wi(this,mb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:N,emailVerified:k,isAnonymous:se,providerData:Q,stsTokenManager:S}=n;he(N&&S,e,"internal-error");const w=Is.fromJSON(this.name,S);he(typeof N=="string",e,"internal-error"),sr(p,e.name),sr(g,e.name),he(typeof k=="boolean",e,"internal-error"),he(typeof se=="boolean",e,"internal-error"),sr(y,e.name),sr(x,e.name),sr(D,e.name),sr(O,e.name),sr(q,e.name),sr($,e.name);const E=new nn({uid:N,auth:e,email:g,emailVerified:k,displayName:p,isAnonymous:se,photoURL:x,phoneNumber:y,tenantId:D,stsTokenManager:w,createdAt:q,lastLoginAt:$});return Q&&Array.isArray(Q)&&(E.providerData=Q.map(C=>Object.assign({},C))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Is;s.updateFromServerResponse(n);const i=new nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ca(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$m(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Is;l.updateFromIdToken(r);const c=new nn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Map;function Ln(t){qn(t instanceof Function,"Expected a class definition");let e=bf.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jm.type="NONE";const Af=jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Aa(this.auth,{idToken:e}).catch(()=>{});return n?nn._fromGetAccountInfoResponse(this.auth,n,e):null}return nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(Ln(Af),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(Af);const o=ta(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await Aa(e,{idToken:d}).catch(()=>{});if(!g)break;p=await nn._fromGetAccountInfoResponse(e,g,d)}else p=nn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new bs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(Qm(e))return"Webos";if(qm(e))return"Safari";if((e.includes("chrome/")||zm(e))&&!e.includes("edge/"))return"Chrome";if(Wm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hm(t=bt()){return/firefox\//i.test(t)}function qm(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zm(t=bt()){return/crios\//i.test(t)}function Km(t=bt()){return/iemobile/i.test(t)}function Wm(t=bt()){return/android/i.test(t)}function Gm(t=bt()){return/blackberry/i.test(t)}function Qm(t=bt()){return/webos/i.test(t)}function Pu(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bb(t=bt()){var e;return Pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ab(){return UT()&&document.documentMode===10}function Xm(t=bt()){return Pu(t)||Wm(t)||Qm(t)||Gm(t)||/windows phone/i.test(t)||Km(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e=[]){let n;switch(t){case"Browser":n=Cf(bt());break;case"Worker":n=`${Cf(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e={}){return kr(t,"GET","/v2/passwordPolicy",es(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=6;class Pb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sf(this),this.idTokenSubscription=new Sf(this),this.beforeStateQueue=new Cb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Aa(this,{idToken:e}),r=await nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(wr(this));const n=e?ht(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sb(this),n=new Pb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ib(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ib(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qs(t){return ht(t)}class Sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=WT(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kb(t){il=t}function Jm(t){return il.loadJS(t)}function Vb(){return il.recaptchaEnterpriseScript}function Db(){return il.gapiScript}function Ob(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Nb{constructor(){this.enterprise=new Mb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Mb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Lb="recaptcha-enterprise",Zm="NO_RECAPTCHA";class Fb{constructor(e){this.type=Lb,this.auth=qs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{gb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new pb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Tf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Zm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Nb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Tf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Vb();c.length!==0&&(c+=l),Jm(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Rf(t,e,n,r=!1,s=!1){const i=new Fb(t);let o;if(s)o=Zm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Pf(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Rf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Rf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t,e){const n=bu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,e??{}))return s;un(s,"already-initialized")}return n.initialize({options:e})}function Bb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $b(t,e,n){const r=qs(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=e_(e),{host:o,port:l}=jb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(Wr(u,r.config.emulator)&&Wr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,js(o)?(Sm(`${i}//${o}${c}`),Rm("Auth",!0)):Hb()}function e_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jb(t){const e=e_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xf(o)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function qb(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zb(t,e){return sl(t,"POST","/v1/accounts:signInWithPassword",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}async function Wb(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends xu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pf(e,n,"signInWithPassword",zb);case"emailLink":return Kb(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pf(e,r,"signUpPassword",qb);case"emailLink":return Wb(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return sl(t,"POST","/v1/accounts:signInWithIdp",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="http://localhost";class Qr extends xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Au(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:Gb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xb(t){const e=gi(mi(t)).link,n=e?gi(mi(e)).deep_link_id:null,r=gi(mi(t)).deep_link_id;return(r?gi(mi(r)).link:null)||r||n||e||t}class ku{constructor(e){var n,r,s,i,o,l;const c=gi(mi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Qb((s=c.mode)!==null&&s!==void 0?s:null);he(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Xb(e);try{return new ku(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ku.parseLink(n);return he(r,"argument-error"),Gi._fromEmailAndCode(e,r.code,r.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ho{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ho{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends ho{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nn._fromIdTokenResponse(e,r,s),o=kf(r);return new Vs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=kf(r);return new Vs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends Xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sa(e,n,r,s)}}function n_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,i,e,r):i})}async function Yb(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await Wi(t,n_(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Ru(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),Vs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&un(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(t,e,n=!1){if(Zt(t.app))return Promise.reject(wr(t));const r="signIn",s=await n_(t,r,e),i=await Vs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Zb(t,e){return r_(qs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t){const e=qs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function t1(t,e,n){return Zt(t.app)?Promise.reject(wr(t)):Zb(ht(t),zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&e1(t),r})}function n1(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function r1(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function s1(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function i1(t){return ht(t).signOut()}const Ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=1e3,a1=10;class i_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ab()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,a1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},o1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}i_.type="LOCAL";const l1=i_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o_.type="SESSION";const a_=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await c1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ol.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Vu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function h1(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function d1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function p1(){return l_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firebaseLocalStorageDb",g1=1,Pa="firebaseLocalStorage",u_="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function al(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function m1(){const t=indexedDB.deleteDatabase(c_);return new fo(t).toPromise()}function Lc(){const t=indexedDB.open(c_,g1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pa,{keyPath:u_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pa)?e(r):(r.close(),await m1(),e(await Lc()))})})}async function Vf(t,e,n){const r=al(t,!0).put({[u_]:e,value:n});return new fo(r).toPromise()}async function _1(t,e){const n=al(t,!1).get(e),r=await new fo(n).toPromise();return r===void 0?null:r.value}function Df(t,e){const n=al(t,!0).delete(e);return new fo(n).toPromise()}const y1=800,v1=3;class h_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>v1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ol._getInstance(p1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await d1(),!this.activeServiceWorker)return;this.sender=new u1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await Vf(e,Ra,"1"),await Df(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Df(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=al(s,!1).getAll();return new fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h_.type="LOCAL";const E1=h_;new uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t,e){return e?Ln(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function T1(t){return r_(t.auth,new Du(t),t.bypassAuthState)}function I1(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),Jb(n,new Du(t),t.bypassAuthState)}async function b1(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),Yb(n,new Du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T1;case"linkViaPopup":case"linkViaRedirect":return b1;case"reauthViaPopup":case"reauthViaRedirect":return I1;default:un(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new uo(2e3,1e4);class ms extends d_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A1.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="pendingRedirect",na=new Map;class S1 extends d_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await R1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R1(t,e){const n=k1(e),r=x1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function P1(t,e){na.set(t._key(),e)}function x1(t){return Ln(t._redirectPersistence)}function k1(t){return ta(C1,t.config.apiKey,t.name)}async function V1(t,e,n=!1){if(Zt(t.app))return Promise.reject(wr(t));const r=qs(t),s=w1(r,e),o=await new S1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=10*60*1e3;class O1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=D1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Of(e))}saveEventToCache(e){this.cachedEventUids.add(Of(e)),this.lastProcessedEventTime=Date.now()}}function Of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F1=/^https?/;async function U1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await M1(t);for(const n of e)try{if(B1(n))return}catch{}un(t,"unauthorized-domain")}function B1(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!F1.test(n))return!1;if(L1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new uo(3e4,6e4);function Nf(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function j1(t){return new Promise((e,n)=>{var r,s,i;function o(){Nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nf(),n(yn(t,"network-request-failed"))},timeout:$1.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=Ob("iframefcb");return vn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},Jm(`${Db()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ra=null,e})}let ra=null;function H1(t){return ra=ra||j1(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=new uo(5e3,15e3),z1="__/auth/iframe",K1="emulator/auth/iframe",W1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q1(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Su(e,K1):`https://${t.config.authDomain}/${z1}`,r={apiKey:e.apiKey,appName:t.name,v:Hs},s=G1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${co(r).slice(1)}`}async function X1(t){const e=await H1(t),n=vn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:Q1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},q1.get());function c(){vn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J1=500,Z1=600,eA="_blank",tA="http://localhost";class Mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nA(t,e,n,r=J1,s=Z1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Y1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=bt().toLowerCase();n&&(l=zm(u)?eA:n),Hm(u)&&(e=e||tA,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[y,x])=>`${g}${y}=${x},`,"");if(bb(u)&&l!=="_self")return rA(e||"",l),new Mf(null);const p=window.open(e||"",l,d);he(p,t,"popup-blocked");try{p.focus()}catch{}return new Mf(p)}function rA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="__/auth/handler",iA="emulator/auth/handler",oA=encodeURIComponent("fac");async function Lf(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hs,eventId:s};if(e instanceof t_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ho){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${oA}=${encodeURIComponent(c)}`:"";return`${aA(t)}?${co(l).slice(1)}${u}`}function aA({config:t}){return t.emulator?Su(t,iA):`https://${t.authDomain}/${sA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class lA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a_,this._completeRedirectFn=V1,this._overrideRedirectResult=P1}async _openPopup(e,n,r,s){var i;qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lf(e,n,r,Nc(),s);return nA(e,o,Vu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Lf(e,n,r,Nc(),s);return h1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await X1(e),r=new O1(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=U1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xm()||qm()||Pu()}}const cA=lA;var Ff="@firebase/auth",Uf="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dA(t){ks(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(t)},u=new xb(r,s,i,c);return Bb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ks(new Gr("auth-internal",e=>{const n=qs(e.getProvider("auth").getImmediate());return(r=>new uA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(Ff,Uf,hA(t)),Er(Ff,Uf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=5*60,pA=Cm("authIdTokenMaxAge")||fA;let Bf=null;const gA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pA)return;const s=n==null?void 0:n.token;Bf!==s&&(Bf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mA(t=Vm()){const e=bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ub(t,{popupRedirectResolver:cA,persistence:[E1,l1,a_]}),r=Cm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gA(i.toString());r1(n,o,()=>o(n.currentUser)),n1(n,l=>o(l))}}const s=bm("auth");return s&&$b(n,`http://${s}`),n}function _A(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_A().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dA("Browser");var $f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,p_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function E(){}E.prototype=w.prototype,S.D=w.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(C,I,_){for(var v=Array(arguments.length-2),z=2;z<arguments.length;z++)v[z-2]=arguments[z];return w.prototype[I].apply(C,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,w,E){E||(E=0);var C=Array(16);if(typeof w=="string")for(var I=0;16>I;++I)C[I]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(I=0;16>I;++I)C[I]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=S.g[0],E=S.g[1],I=S.g[2];var _=S.g[3],v=w+(_^E&(I^_))+C[0]+3614090360&4294967295;w=E+(v<<7&4294967295|v>>>25),v=_+(I^w&(E^I))+C[1]+3905402710&4294967295,_=w+(v<<12&4294967295|v>>>20),v=I+(E^_&(w^E))+C[2]+606105819&4294967295,I=_+(v<<17&4294967295|v>>>15),v=E+(w^I&(_^w))+C[3]+3250441966&4294967295,E=I+(v<<22&4294967295|v>>>10),v=w+(_^E&(I^_))+C[4]+4118548399&4294967295,w=E+(v<<7&4294967295|v>>>25),v=_+(I^w&(E^I))+C[5]+1200080426&4294967295,_=w+(v<<12&4294967295|v>>>20),v=I+(E^_&(w^E))+C[6]+2821735955&4294967295,I=_+(v<<17&4294967295|v>>>15),v=E+(w^I&(_^w))+C[7]+4249261313&4294967295,E=I+(v<<22&4294967295|v>>>10),v=w+(_^E&(I^_))+C[8]+1770035416&4294967295,w=E+(v<<7&4294967295|v>>>25),v=_+(I^w&(E^I))+C[9]+2336552879&4294967295,_=w+(v<<12&4294967295|v>>>20),v=I+(E^_&(w^E))+C[10]+4294925233&4294967295,I=_+(v<<17&4294967295|v>>>15),v=E+(w^I&(_^w))+C[11]+2304563134&4294967295,E=I+(v<<22&4294967295|v>>>10),v=w+(_^E&(I^_))+C[12]+1804603682&4294967295,w=E+(v<<7&4294967295|v>>>25),v=_+(I^w&(E^I))+C[13]+4254626195&4294967295,_=w+(v<<12&4294967295|v>>>20),v=I+(E^_&(w^E))+C[14]+2792965006&4294967295,I=_+(v<<17&4294967295|v>>>15),v=E+(w^I&(_^w))+C[15]+1236535329&4294967295,E=I+(v<<22&4294967295|v>>>10),v=w+(I^_&(E^I))+C[1]+4129170786&4294967295,w=E+(v<<5&4294967295|v>>>27),v=_+(E^I&(w^E))+C[6]+3225465664&4294967295,_=w+(v<<9&4294967295|v>>>23),v=I+(w^E&(_^w))+C[11]+643717713&4294967295,I=_+(v<<14&4294967295|v>>>18),v=E+(_^w&(I^_))+C[0]+3921069994&4294967295,E=I+(v<<20&4294967295|v>>>12),v=w+(I^_&(E^I))+C[5]+3593408605&4294967295,w=E+(v<<5&4294967295|v>>>27),v=_+(E^I&(w^E))+C[10]+38016083&4294967295,_=w+(v<<9&4294967295|v>>>23),v=I+(w^E&(_^w))+C[15]+3634488961&4294967295,I=_+(v<<14&4294967295|v>>>18),v=E+(_^w&(I^_))+C[4]+3889429448&4294967295,E=I+(v<<20&4294967295|v>>>12),v=w+(I^_&(E^I))+C[9]+568446438&4294967295,w=E+(v<<5&4294967295|v>>>27),v=_+(E^I&(w^E))+C[14]+3275163606&4294967295,_=w+(v<<9&4294967295|v>>>23),v=I+(w^E&(_^w))+C[3]+4107603335&4294967295,I=_+(v<<14&4294967295|v>>>18),v=E+(_^w&(I^_))+C[8]+1163531501&4294967295,E=I+(v<<20&4294967295|v>>>12),v=w+(I^_&(E^I))+C[13]+2850285829&4294967295,w=E+(v<<5&4294967295|v>>>27),v=_+(E^I&(w^E))+C[2]+4243563512&4294967295,_=w+(v<<9&4294967295|v>>>23),v=I+(w^E&(_^w))+C[7]+1735328473&4294967295,I=_+(v<<14&4294967295|v>>>18),v=E+(_^w&(I^_))+C[12]+2368359562&4294967295,E=I+(v<<20&4294967295|v>>>12),v=w+(E^I^_)+C[5]+4294588738&4294967295,w=E+(v<<4&4294967295|v>>>28),v=_+(w^E^I)+C[8]+2272392833&4294967295,_=w+(v<<11&4294967295|v>>>21),v=I+(_^w^E)+C[11]+1839030562&4294967295,I=_+(v<<16&4294967295|v>>>16),v=E+(I^_^w)+C[14]+4259657740&4294967295,E=I+(v<<23&4294967295|v>>>9),v=w+(E^I^_)+C[1]+2763975236&4294967295,w=E+(v<<4&4294967295|v>>>28),v=_+(w^E^I)+C[4]+1272893353&4294967295,_=w+(v<<11&4294967295|v>>>21),v=I+(_^w^E)+C[7]+4139469664&4294967295,I=_+(v<<16&4294967295|v>>>16),v=E+(I^_^w)+C[10]+3200236656&4294967295,E=I+(v<<23&4294967295|v>>>9),v=w+(E^I^_)+C[13]+681279174&4294967295,w=E+(v<<4&4294967295|v>>>28),v=_+(w^E^I)+C[0]+3936430074&4294967295,_=w+(v<<11&4294967295|v>>>21),v=I+(_^w^E)+C[3]+3572445317&4294967295,I=_+(v<<16&4294967295|v>>>16),v=E+(I^_^w)+C[6]+76029189&4294967295,E=I+(v<<23&4294967295|v>>>9),v=w+(E^I^_)+C[9]+3654602809&4294967295,w=E+(v<<4&4294967295|v>>>28),v=_+(w^E^I)+C[12]+3873151461&4294967295,_=w+(v<<11&4294967295|v>>>21),v=I+(_^w^E)+C[15]+530742520&4294967295,I=_+(v<<16&4294967295|v>>>16),v=E+(I^_^w)+C[2]+3299628645&4294967295,E=I+(v<<23&4294967295|v>>>9),v=w+(I^(E|~_))+C[0]+4096336452&4294967295,w=E+(v<<6&4294967295|v>>>26),v=_+(E^(w|~I))+C[7]+1126891415&4294967295,_=w+(v<<10&4294967295|v>>>22),v=I+(w^(_|~E))+C[14]+2878612391&4294967295,I=_+(v<<15&4294967295|v>>>17),v=E+(_^(I|~w))+C[5]+4237533241&4294967295,E=I+(v<<21&4294967295|v>>>11),v=w+(I^(E|~_))+C[12]+1700485571&4294967295,w=E+(v<<6&4294967295|v>>>26),v=_+(E^(w|~I))+C[3]+2399980690&4294967295,_=w+(v<<10&4294967295|v>>>22),v=I+(w^(_|~E))+C[10]+4293915773&4294967295,I=_+(v<<15&4294967295|v>>>17),v=E+(_^(I|~w))+C[1]+2240044497&4294967295,E=I+(v<<21&4294967295|v>>>11),v=w+(I^(E|~_))+C[8]+1873313359&4294967295,w=E+(v<<6&4294967295|v>>>26),v=_+(E^(w|~I))+C[15]+4264355552&4294967295,_=w+(v<<10&4294967295|v>>>22),v=I+(w^(_|~E))+C[6]+2734768916&4294967295,I=_+(v<<15&4294967295|v>>>17),v=E+(_^(I|~w))+C[13]+1309151649&4294967295,E=I+(v<<21&4294967295|v>>>11),v=w+(I^(E|~_))+C[4]+4149444226&4294967295,w=E+(v<<6&4294967295|v>>>26),v=_+(E^(w|~I))+C[11]+3174756917&4294967295,_=w+(v<<10&4294967295|v>>>22),v=I+(w^(_|~E))+C[2]+718787259&4294967295,I=_+(v<<15&4294967295|v>>>17),v=E+(_^(I|~w))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,S.g[2]=S.g[2]+I&4294967295,S.g[3]=S.g[3]+_&4294967295}r.prototype.u=function(S,w){w===void 0&&(w=S.length);for(var E=w-this.blockSize,C=this.B,I=this.h,_=0;_<w;){if(I==0)for(;_<=E;)s(this,S,_),_+=this.blockSize;if(typeof S=="string"){for(;_<w;)if(C[I++]=S.charCodeAt(_++),I==this.blockSize){s(this,C),I=0;break}}else for(;_<w;)if(C[I++]=S[_++],I==this.blockSize){s(this,C),I=0;break}}this.h=I,this.o+=w},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;var E=8*this.o;for(w=S.length-8;w<S.length;++w)S[w]=E&255,E/=256;for(this.u(S),S=Array(16),w=E=0;4>w;++w)for(var C=0;32>C;C+=8)S[E++]=this.g[w]>>>C&255;return S};function i(S,w){var E=l;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=w(S)}function o(S,w){this.h=w;for(var E=[],C=!0,I=S.length-1;0<=I;I--){var _=S[I]|0;C&&_==w||(E[I]=_,C=!1)}this.g=E}var l={};function c(S){return-128<=S&&128>S?i(S,function(w){return new o([w|0],0>w?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return O(u(-S));for(var w=[],E=1,C=0;S>=E;C++)w[C]=S/E|0,E*=4294967296;return new o(w,0)}function d(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return O(d(S.substring(1),w));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(w,8)),C=p,I=0;I<S.length;I+=8){var _=Math.min(8,S.length-I),v=parseInt(S.substring(I,I+_),w);8>_?(_=u(Math.pow(w,_)),C=C.j(_).add(u(v))):(C=C.j(E),C=C.add(u(v)))}return C}var p=c(0),g=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var S=0,w=1,E=0;E<this.g.length;E++){var C=this.i(E);S+=(0<=C?C:4294967296+C)*w,w*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(D(this))return"-"+O(this).toString(S);for(var w=u(Math.pow(S,6)),E=this,C="";;){var I=k(E,w).g;E=q(E,I.j(w));var _=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=I,x(E))return _+C;for(;6>_.length;)_="0"+_;C=_+C}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function D(S){return S.h==-1}t.l=function(S){return S=q(this,S),D(S)?-1:x(S)?0:1};function O(S){for(var w=S.g.length,E=[],C=0;C<w;C++)E[C]=~S.g[C];return new o(E,~S.h).add(g)}t.abs=function(){return D(this)?O(this):this},t.add=function(S){for(var w=Math.max(this.g.length,S.g.length),E=[],C=0,I=0;I<=w;I++){var _=C+(this.i(I)&65535)+(S.i(I)&65535),v=(_>>>16)+(this.i(I)>>>16)+(S.i(I)>>>16);C=v>>>16,_&=65535,v&=65535,E[I]=v<<16|_}return new o(E,E[E.length-1]&-2147483648?-1:0)};function q(S,w){return S.add(O(w))}t.j=function(S){if(x(this)||x(S))return p;if(D(this))return D(S)?O(this).j(O(S)):O(O(this).j(S));if(D(S))return O(this.j(O(S)));if(0>this.l(y)&&0>S.l(y))return u(this.m()*S.m());for(var w=this.g.length+S.g.length,E=[],C=0;C<2*w;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(var I=0;I<S.g.length;I++){var _=this.i(C)>>>16,v=this.i(C)&65535,z=S.i(I)>>>16,ve=S.i(I)&65535;E[2*C+2*I]+=v*ve,$(E,2*C+2*I),E[2*C+2*I+1]+=_*ve,$(E,2*C+2*I+1),E[2*C+2*I+1]+=v*z,$(E,2*C+2*I+1),E[2*C+2*I+2]+=_*z,$(E,2*C+2*I+2)}for(C=0;C<w;C++)E[C]=E[2*C+1]<<16|E[2*C];for(C=w;C<2*w;C++)E[C]=0;return new o(E,0)};function $(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function N(S,w){this.g=S,this.h=w}function k(S,w){if(x(w))throw Error("division by zero");if(x(S))return new N(p,p);if(D(S))return w=k(O(S),w),new N(O(w.g),O(w.h));if(D(w))return w=k(S,O(w)),new N(O(w.g),w.h);if(30<S.g.length){if(D(S)||D(w))throw Error("slowDivide_ only works with positive integers.");for(var E=g,C=w;0>=C.l(S);)E=se(E),C=se(C);var I=Q(E,1),_=Q(C,1);for(C=Q(C,2),E=Q(E,2);!x(C);){var v=_.add(C);0>=v.l(S)&&(I=I.add(E),_=v),C=Q(C,1),E=Q(E,1)}return w=q(S,I.j(w)),new N(I,w)}for(I=p;0<=S.l(w);){for(E=Math.max(1,Math.floor(S.m()/w.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),_=u(E),v=_.j(w);D(v)||0<v.l(S);)E-=C,_=u(E),v=_.j(w);x(_)&&(_=g),I=I.add(_),S=q(S,v)}return new N(I,S)}t.A=function(S){return k(this,S).h},t.and=function(S){for(var w=Math.max(this.g.length,S.g.length),E=[],C=0;C<w;C++)E[C]=this.i(C)&S.i(C);return new o(E,this.h&S.h)},t.or=function(S){for(var w=Math.max(this.g.length,S.g.length),E=[],C=0;C<w;C++)E[C]=this.i(C)|S.i(C);return new o(E,this.h|S.h)},t.xor=function(S){for(var w=Math.max(this.g.length,S.g.length),E=[],C=0;C<w;C++)E[C]=this.i(C)^S.i(C);return new o(E,this.h^S.h)};function se(S){for(var w=S.g.length+1,E=[],C=0;C<w;C++)E[C]=S.i(C)<<1|S.i(C-1)>>>31;return new o(E,S.h)}function Q(S,w){var E=w>>5;w%=32;for(var C=S.g.length-E,I=[],_=0;_<C;_++)I[_]=0<w?S.i(_+E)>>>w|S.i(_+E+1)<<32-w:S.i(_+E);return new o(I,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,p_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Tr=o}).apply(typeof $f<"u"?$f:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g_,_i,m_,sa,Fc,__,y_,v_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function x(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,V){for(var G=Array(arguments.length-2),De=2;De<arguments.length;De++)G[De-2]=arguments[De];return h.prototype[P].apply(m,G)}}function D(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=a.length||0,V=m.length||0;a.length=P+V;for(let G=0;G<V;G++)a[P+G]=m[G]}else a.push(m)}}class q{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function $(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var se=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function Q(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function S(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function w(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function I(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function _(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class z{constructor(){this.h=this.g=null}add(h,f){const m=ve.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var ve=new q(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ee=!1,Ot=new z,Xt=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(jt)}};var jt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){_(f)}var h=ve;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function hn(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(se){e:{try{k(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}x(hn,qe);var xt={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(a,h,f,m,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=P,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ce(a){this.src=a,this.g={},this.h=0}Ce.prototype.add=function(a,h,f,m,P){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=b(a,h,m,P);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new J(h,this.src,V,!!m,P),h.fa=f,a.push(h)),h};function T(a,h){var f=h.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,h,void 0),V;(V=0<=P)&&Array.prototype.splice.call(m,P,1),V&&(te(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,h,f,m){for(var P=0;P<a.length;++P){var V=a[P];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==m)return P}return-1}var R="closure_lm_"+(1e6*Math.random()|0),L={};function B(a,h,f,m,P){if(Array.isArray(h)){for(var V=0;V<h.length;V++)B(a,h[V],f,m,P);return null}return f=fe(f),a&&a[M]?a.K(h,f,u(m)?!!m.capture:!1,P):F(a,h,f,!1,m,P)}function F(a,h,f,m,P,V){if(!h)throw Error("Invalid event type");var G=u(P)?!!P.capture:!!P,De=X(a);if(De||(a[R]=De=new Ce(a)),f=De.add(h,f,m,G,V),f.proxy)return f;if(m=Y(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Yn||(P=G),P===void 0&&(P=!1),a.addEventListener(h.toString(),m,P);else if(a.attachEvent)a.attachEvent(H(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=oe;return a}function W(a,h,f,m,P){if(Array.isArray(h))for(var V=0;V<h.length;V++)W(a,h[V],f,m,P);else m=u(m)?!!m.capture:!!m,f=fe(f),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=b(V,f,m,P),-1<f&&(te(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,f,m,P)),(f=-1<a?h[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])T(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(H(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=X(h))?(T(f,a),f.h==0&&(f.src=null,h[R]=null)):te(a)}}}function H(a){return a in L?L[a]:L[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new hn(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&K(a),a=f.call(m,h)}return a}function X(a){return a=a[R],a instanceof Ce?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ce(){He.call(this),this.i=new Ce(this),this.M=this,this.F=null}x(ce,He),ce.prototype[M]=!0,ce.prototype.removeEventListener=function(a,h,f,m){W(this,a,h,f,m)};function _e(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var P=h;h=new qe(m,a),C(h,P)}if(P=!0,f)for(var V=f.length-1;0<=V;V--){var G=h.g=f[V];P=be(G,m,!0,h)&&P}if(G=h.g=a,P=be(G,m,!0,h)&&P,P=be(G,m,!1,h)&&P,f)for(V=0;V<f.length;V++)G=h.g=f[V],P=be(G,m,!1,h)&&P}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)te(f[m]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},ce.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function be(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==f){var De=G.listener,ot=G.ha||G.src;G.fa&&T(a.i,G),P=De.call(ot,m)!==!1&&P}}return P&&!m.defaultPrevented}function ft(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function st(a){a.g=ft(()=>{a.g=null,a.i&&(a.i=!1,st(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ht extends He{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(a){He.call(this),this.h=a,this.g={}}x(pt,He);var Jn=[];function Ys(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&K(h)},a),a.g={}}pt.prototype.N=function(){pt.aa.N.call(this),Ys(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=l.JSON.stringify,qt=l.JSON.parse,vo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Sl(){}Sl.prototype.h=null;function mh(a){return a.h||(a.h=a.i())}function _h(){}var Js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rl(){qe.call(this,"d")}x(Rl,qe);function Pl(){qe.call(this,"c")}x(Pl,qe);var Or={},yh=null;function Eo(){return yh=yh||new ce}Or.La="serverreachability";function vh(a){qe.call(this,Or.La,a)}x(vh,qe);function Zs(a){const h=Eo();_e(h,new vh(h))}Or.STAT_EVENT="statevent";function Eh(a,h){qe.call(this,Or.STAT_EVENT,a),this.stat=h}x(Eh,qe);function At(a){const h=Eo();_e(h,new Eh(h,a))}Or.Ma="timingevent";function wh(a,h){qe.call(this,Or.Ma,a),this.size=h}x(wh,qe);function ei(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ti(){this.g=!0}ti.prototype.xa=function(){this.g=!1};function Ev(a,h,f,m,P,V){a.info(function(){if(a.g)if(V)for(var G="",De=V.split("&"),ot=0;ot<De.length;ot++){var Se=De[ot].split("=");if(1<Se.length){var gt=Se[0];Se=Se[1];var mt=gt.split("_");G=2<=mt.length&&mt[1]=="type"?G+(gt+"="+Se+"&"):G+(gt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+h+`
`+f+`
`+G})}function wv(a,h,f,m,P,V,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+h+`
`+f+`
`+V+" "+G})}function rs(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Iv(a,f)+(m?" "+m:"")})}function Tv(a,h){a.info(function(){return"TIMEOUT: "+h})}ti.prototype.info=function(){};function Iv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return it(f)}catch{return h}}var wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Th={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xl;function To(){}x(To,Sl),To.prototype.g=function(){return new XMLHttpRequest},To.prototype.i=function(){return{}},xl=new To;function Zn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ih}function Ih(){this.i=null,this.g="",this.h=!1}var bh={},kl={};function Vl(a,h,f){a.L=1,a.v=Co(Cn(h)),a.m=f,a.P=!0,Ah(a,null)}function Ah(a,h){a.F=Date.now(),Io(a),a.A=Cn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Uh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Ih,a.g=rd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ht(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Jn[0]=P.toString()),P=Jn);for(var V=0;V<P.length;V++){var G=B(f,P[V],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Zs(),Ev(a.i,a.u,a.A,a.l,a.R,a.m)}Zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Sn(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const mt=Sn(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Kh(this.g)))){this.J||mt!=4||h==7||(h==8||0>=os?Zs(3):Zs(2)),Dl(this);var f=this.g.Z();this.X=f;t:if(Ch(this)){var m=Kh(this.g);a="";var P=m.length,V=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),ni(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(V&&h==P-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,wv(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var De,ot=this.g;if((De=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(De)){var Se=De;break t}}Se=null}if(f=Se)rs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ol(this,f);else{this.o=!1,this.s=3,At(12),Nr(this),ni(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<G.length;)if(Yt=bv(this,G),Yt==kl){mt==4&&(this.s=4,At(14),f=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==bh){this.s=4,At(15),rs(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else rs(this.i,this.l,Yt,null),Ol(this,Yt);if(Ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||G.length!=0||this.h.h||(this.s=1,At(16),f=!1),this.o=this.o&&f,!f)rs(this.i,this.l,G,"[Invalid Chunked Response]"),Nr(this),ni(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Bl(gt),gt.M=!0,At(11))}}else rs(this.i,this.l,G,null),Ol(this,G);mt==4&&Nr(this),this.o&&!this.J&&(mt==4?Zh(this.j,this):(this.o=!1,Io(this)))}else $v(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Nr(this),ni(this)}}}catch{}finally{}};function Ch(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function bv(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?kl:(f=Number(h.substring(f,m)),isNaN(f)?bh:(m+=1,m+f>h.length?kl:(h=h.slice(m,m+f),a.C=m+f,h)))}Zn.prototype.cancel=function(){this.J=!0,Nr(this)};function Io(a){a.S=Date.now()+a.I,Sh(a,a.I)}function Sh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ei(g(a.ba,a),h)}function Dl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Tv(this.i,this.A),this.L!=2&&(Zs(),At(17)),Nr(this),this.s=2,ni(this)):Sh(this,this.S-a)};function ni(a){a.j.G==0||a.J||Zh(a.j,a)}function Nr(a){Dl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ys(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ol(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Nl(f.h,a))){if(!a.K&&Nl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Vo(f),xo(f);else break e;Ul(f),At(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=ei(g(f.Za,f),6e3));if(1>=xh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Lr(f,11)}else if((a.K||f.g==a)&&Vo(f),!$(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let Se=P[h];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const gt=Se[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const mt=Se[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const os=Se[5];os!=null&&typeof os=="number"&&0<os&&(m=1.5*os,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Yt=a.g;if(Yt){const Oo=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oo){var V=m.h;V.g||Oo.indexOf("spdy")==-1&&Oo.indexOf("quic")==-1&&Oo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ml(V,V.h),V.h=null))}if(m.D){const $l=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;$l&&(m.ya=$l,Ue(m.I,m.D,$l))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var G=a;if(m.qa=nd(m,m.J?m.ia:null,m.W),G.K){kh(m.h,G);var De=G,ot=m.L;ot&&(De.I=ot),De.B&&(Dl(De),Io(De)),m.g=G}else Yh(m);0<f.i.length&&ko(f)}else Se[0]!="stop"&&Se[0]!="close"||Lr(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Lr(f,7):Fl(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}Zs(4)}catch{}}var Av=class{constructor(a,h){this.g=a,this.map=h}};function Rh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ph(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xh(a){return a.h?1:a.g?a.g.size:0}function Nl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ml(a,h){a.g?a.g.add(h):a.h=h}function kh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Rh.prototype.cancel=function(){if(this.i=Vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return D(a.i)}function Cv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function Sv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Dh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Sv(a),m=Cv(a),P=m.length,V=0;V<P;V++)h.call(void 0,m[V],f&&f[V],a)}var Oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var V=a[f].substring(0,m);P=a[f].substring(m+1)}else V=a[f];h(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,bo(this,a.j),this.o=a.o,this.g=a.g,Ao(this,a.s),this.l=a.l;var h=a.i,f=new ii;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Nh(this,f),this.m=a.m}else a&&(h=String(a).match(Oh))?(this.h=!1,bo(this,h[1]||"",!0),this.o=ri(h[2]||""),this.g=ri(h[3]||"",!0),Ao(this,h[4]),this.l=ri(h[5]||"",!0),Nh(this,h[6]||"",!0),this.m=ri(h[7]||"")):(this.h=!1,this.i=new ii(null,this.h))}Mr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(si(h,Mh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(si(h,Mh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(si(f,f.charAt(0)=="/"?kv:xv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",si(f,Dv)),a.join("")};function Cn(a){return new Mr(a)}function bo(a,h,f){a.j=f?ri(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ao(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Nh(a,h,f){h instanceof ii?(a.i=h,Ov(a.i,a.h)):(f||(h=si(h,Vv)),a.i=new ii(h,a.h))}function Ue(a,h,f){a.i.set(h,f)}function Co(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ri(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function si(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Pv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mh=/[#\/\?@]/g,xv=/[#\?:]/g,kv=/[#\?]/g,Vv=/[#\?@]/g,Dv=/#/g;function ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function er(a){a.g||(a.g=new Map,a.h=0,a.i&&Rv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ii.prototype,t.add=function(a,h){er(this),this.i=null,a=ss(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Lh(a,h){er(a),h=ss(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fh(a,h){return er(a),h=ss(a,h),a.g.has(h)}t.forEach=function(a,h){er(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(h,P,m,this)},this)},this)},t.na=function(){er(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const P=a[m];for(let V=0;V<P.length;V++)f.push(h[m])}return f},t.V=function(a){er(this);let h=[];if(typeof a=="string")Fh(this,a)&&(h=h.concat(this.g.get(ss(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return er(this),this.i=null,a=ss(this,a),Fh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Uh(a,h,f){Lh(a,h),0<f.length&&(a.i=null,a.g.set(ss(a,h),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const V=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var P=V;G[m]!==""&&(P+="="+encodeURIComponent(String(G[m]))),a.push(P)}}return this.i=a.join("&")};function ss(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Ov(a,h){h&&!a.j&&(er(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(Lh(this,m),Uh(this,P,f))},a)),a.j=h}function Nv(a,h){const f=new ti;if(l.Image){const m=new Image;m.onload=y(tr,f,"TestLoadImage: loaded",!0,h,m),m.onerror=y(tr,f,"TestLoadImage: error",!1,h,m),m.onabort=y(tr,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=y(tr,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Mv(a,h){const f=new ti,m=new AbortController,P=setTimeout(()=>{m.abort(),tr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(P),V.ok?tr(f,"TestPingServer: ok",!0,h):tr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),tr(f,"TestPingServer: error",!1,h)})}function tr(a,h,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function Lv(){this.g=new vo}function Fv(a,h,f){const m=f||"";try{Dh(a,function(P,V){let G=P;u(P)&&(G=it(P)),h.push(m+V+"="+encodeURIComponent(G))})}catch(P){throw h.push(m+"type="+encodeURIComponent("_badmap")),P}}function So(a){this.l=a.Ub||null,this.j=a.eb||!1}x(So,Sl),So.prototype.g=function(){return new Ro(this.l,this.j)},So.prototype.i=function(a){return function(){return a}}({});function Ro(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ro,ce),t=Ro.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?oi(this):ai(this),this.readyState==3&&Bh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,oi(this))},t.Qa=function(a){this.g&&(this.response=a,oi(this))},t.ga=function(){this.g&&oi(this)};function oi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ai(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $h(a){let h="";return Q(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Ll(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=$h(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,h,f))}function Ke(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ke,ce);var Uv=/^https?$/i,Bv=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xl.g(),this.v=this.o?mh(this.o):mh(xl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){jh(this,V);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Bv,h,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){jh(this,V)}};function jh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Hh(a),Po(a)}function Hh(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Po(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qh(this):this.bb())},t.bb=function(){qh(this)};function qh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Sn(a)!=4||a.Z()!=2)){if(a.u&&Sn(a)==4)ft(a.Ea,0,a);else if(_e(a,"readystatechange"),Sn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=G===0){var P=String(a.D).match(Oh)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!Uv.test(P?P.toLowerCase():"")}f=m}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var V=2<Sn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Hh(a)}}finally{Po(a)}}}}function Po(a,h){if(a.g){zh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=m}catch{}}}function zh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qt(h)}};function Kh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $v(a){const h={};a=(a.g&&2<=Sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if($(a[m]))continue;var f=I(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[P]||[];h[P]=V,V.push(f)}S(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function li(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Wh(a){this.Aa=0,this.i=[],this.j=new ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=li("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=li("baseRetryDelayMs",5e3,a),this.cb=li("retryDelaySeedMs",1e4,a),this.Wa=li("forwardChannelMaxRetries",2,a),this.wa=li("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rh(a&&a.concurrentRequestLimit),this.Da=new Lv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){At(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=nd(this,null,this.W),ko(this)};function Fl(a){if(Gh(a),a.G==3){var h=a.U++,f=Cn(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",h),Ue(f,"TYPE","terminate"),ci(a,f),h=new Zn(a,a.j,h),h.L=2,h.v=Co(Cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=rd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Io(h)}td(a)}function xo(a){a.g&&(Bl(a),a.g.cancel(),a.g=null)}function Gh(a){xo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Vo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ko(a){if(!Ph(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ie||Xt(),Ee||(Ie(),Ee=!0),Ot.add(h,a),a.B=0}}function jv(a,h){return xh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ei(g(a.Ga,a,h),ed(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Zn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=w(V),C(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Xh(this,P,h),f=Cn(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),ci(this,f),V&&(this.O?h="headers="+encodeURIComponent(String($h(V)))+"&"+h:this.m&&Ll(f,this.m,V)),Ml(this.h,P),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",h),Ue(f,"SID","null"),P.T=!0,Vl(P,f,null)):Vl(P,f,h),this.G=2}}else this.G==3&&(a?Qh(this,a):this.i.length==0||Ph(this.h)||Qh(this))};function Qh(a,h){var f;h?f=h.l:f=a.U++;const m=Cn(a.I);Ue(m,"SID",a.K),Ue(m,"RID",f),Ue(m,"AID",a.T),ci(a,m),a.m&&a.o&&Ll(m,a.m,a.o),f=new Zn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Xh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ml(a.h,f),Vl(f,m,h)}function ci(a,h){a.H&&Q(a.H,function(f,m){Ue(h,m,f)}),a.l&&Dh({},function(f,m){Ue(h,m,f)})}function Xh(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=P[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let De=!0;for(let ot=0;ot<f;ot++){let Se=P[ot].g;const gt=P[ot].map;if(Se-=V,0>Se)V=Math.max(0,P[ot].g-100),De=!1;else try{Fv(gt,G,"req"+Se+"_")}catch{m&&m(gt)}}if(De){m=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Yh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ie||Xt(),Ee||(Ie(),Ee=!0),Ot.add(h,a),a.v=0}}function Ul(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ei(g(a.Fa,a),ed(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Jh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ei(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),xo(this),Jh(this))};function Bl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Jh(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Cn(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),ci(a,h),a.m&&a.o&&Ll(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Co(Cn(h)),f.m=null,f.P=!0,Ah(f,a)}t.Za=function(){this.C!=null&&(this.C=null,xo(this),Ul(this),At(19))};function Vo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zh(a,h){var f=null;if(a.g==h){Vo(a),Bl(a),a.g=null;var m=2}else if(Nl(a.h,h))f=h.D,kh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;m=Eo(),_e(m,new wh(m,f)),ko(a)}else Yh(a);else if(P=h.s,P==3||P==0&&0<h.X||!(m==1&&jv(a,h)||m==2&&Ul(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),P){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function ed(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const P=!m;m=new Mr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||bo(m,"https"),Co(m),P?Nv(m.toString(),f):Mv(m.toString(),f)}else At(2);a.G=0,a.l&&a.l.sa(h),td(a),Gh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function td(a){if(a.G=0,a.ka=[],a.l){const h=Vh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function nd(a,h,f){var m=f instanceof Mr?Cn(f):new Mr(f);if(m.g!="")h&&(m.g=h+"."+m.g),Ao(m,m.s);else{var P=l.location;m=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var V=new Mr(null);m&&bo(V,m),h&&(V.g=h),P&&Ao(V,P),f&&(V.l=f),m=V}return f=a.D,h=a.ya,f&&h&&Ue(m,f,h),Ue(m,"VER",a.la),ci(a,m),m}function rd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new So({eb:f})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sd(){}t=sd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Do(){}Do.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){ce.call(this),this.g=new Wh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!$(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!$(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new is(this)}x(Nt,ce),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Fl(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=it(a),a=f);h.i.push(new Av(h.Ya++,a)),h.G==3&&ko(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Fl(this.g),delete this.g,Nt.aa.N.call(this)};function id(a){Rl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(id,Rl);function od(){Pl.call(this),this.status=1}x(od,Pl);function is(a){this.g=a}x(is,sd),is.prototype.ua=function(){_e(this.g,"a")},is.prototype.ta=function(a){_e(this.g,new id(a))},is.prototype.sa=function(a){_e(this.g,new od)},is.prototype.ra=function(){_e(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,v_=function(){return new Do},y_=function(){return Eo()},__=Or,Fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wo.NO_ERROR=0,wo.TIMEOUT=8,wo.HTTP_ERROR=6,sa=wo,Th.COMPLETE="complete",m_=Th,_h.EventType=Js,Js.OPEN="a",Js.CLOSE="b",Js.ERROR="c",Js.MESSAGE="d",ce.prototype.listen=ce.prototype.K,_i=_h,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,g_=Ke}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const jf="@firebase/firestore",Hf="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Tu("@firebase/firestore");function ds(){return Xr.logLevel}function ee(t,...e){if(Xr.logLevel<=we.DEBUG){const n=e.map(Ou);Xr.debug(`Firestore (${Ks}): ${t}`,...n)}}function zn(t,...e){if(Xr.logLevel<=we.ERROR){const n=e.map(Ou);Xr.error(`Firestore (${Ks}): ${t}`,...n)}}function Ds(t,...e){if(Xr.logLevel<=we.WARN){const n=e.map(Ou);Xr.warn(`Firestore (${Ks}): ${t}`,...n)}}function Ou(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,E_(t,r,n)}function E_(t,e,n){let r=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zn(r),new Error(r)}function Ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||E_(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class vA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EA{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new w_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class wA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new wA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=bA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Uc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=T_(),o=AA(i.encode(zf(t,n)),i.encode(zf(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function zf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function AA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=-62135596800,Wf=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Wf);return new Ze(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Kf)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wf}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Kf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ze(0,0))}static max(){return new pe(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="__name__";class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=gn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=gn.isNumericId(e),s=gn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?gn.extractNumericId(e).compare(gn.extractNumericId(n)):Uc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class $e extends gn{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const CA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends gn{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return CA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gf}static keyField(){return new ut([Gf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ie(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ie(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le($e.fromString(e))}static fromName(e){return new le($e.fromString(e).popFirst(5))}static empty(){return new le($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new $e(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=-1;function SA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new Ar(s,le.empty(),e)}function RA(t){return new Ar(t.readTime,t.key,Qi)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(pe.min(),le.empty(),Qi)}static max(){return new Ar(pe.max(),le.empty(),Qi)}}function PA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==xA)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function VA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ll.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=-1;function cl(t){return t==null}function xa(t){return t===0&&1/t==-1/0}function DA(t){return typeof t=="number"&&Number.isInteger(t)&&!xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="";function OA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qf(e)),e=NA(t.get(n),e);return Qf(e)}function NA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case b_:n+="";break;default:n+=i}}return n}function Qf(t){return t+b_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $o(this.root,e,this.comparator,!1)}getReverseIterator(){return new $o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $o(this.root,e,this.comparator,!0)}}class $o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yf(this.data.getIterator())}getIteratorFrom(e){return new Yf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Yf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new et(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new C_("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const MA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(Ve(!!t,39018),typeof t=="string"){let e=0;const n=MA.exec(t);if(Ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="server_timestamp",R_="__type__",P_="__previous_value__",x_="__local_write_time__";function Mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[R_])===null||n===void 0?void 0:n.stringValue)===S_}function ul(t){const e=t.mapValue.fields[P_];return Mu(e)?ul(e):e}function Xi(t){const e=Cr(t.mapValue.fields[x_].timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const ka="(default)";class Yi{constructor(e,n){this.projectId=e,this.database=n||ka}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database===ka}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="__type__",FA="__max__",jo={mapValue:{}},V_="__vector__",Va="value";function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mu(t)?4:BA(t)?9007199254740991:UA(t)?10:11:de(28295,{value:t})}function bn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xi(t).isEqual(Xi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cr(s.timestampValue),l=Cr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?xa(o)===xa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xf(o)!==Xf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!bn(o[c],l[c])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function Ji(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Jf(t.timestampValue,e.timestampValue);case 4:return Jf(Xi(t),Xi(e));case 5:return Uc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Sr(i),c=Sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ye(l[u],c[u]);if(d!==0)return d}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Ge(i.latitude),Ge(o.latitude));return l!==0?l:ye(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},y=(l=p[Va])===null||l===void 0?void 0:l.arrayValue,x=(c=g[Va])===null||c===void 0?void 0:c.arrayValue,D=ye(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:Zf(y,x)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===jo.mapValue&&o===jo.mapValue)return 0;if(i===jo.mapValue)return 1;if(o===jo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Uc(c[p],d[p]);if(g!==0)return g;const y=Ns(l[c[p]],u[d[p]]);if(y!==0)return y}return ye(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de(23264,{Pe:n})}}function Jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Cr(t),r=Cr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Zf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Ms(t){return Bc(t)}function Bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Bc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Bc(n.fields[o])}`;return s+"}"}(t.mapValue):de(61005,{value:t})}function ia(t){switch(Rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ul(t);return e?16+ia(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ia(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Vr(r.fields,(i,o)=>{s+=i.length+ia(o)}),s}(t.mapValue);default:throw de(13486,{value:t})}}function $c(t){return!!t&&"integerValue"in t}function Lu(t){return!!t&&"arrayValue"in t}function ep(t){return!!t&&"nullValue"in t}function tp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function UA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[k_])===null||n===void 0?void 0:n.stringValue)===V_}function ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ki(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===FA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ki(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ki(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(ki(this.value))}}function D_(t){const e=[];return Vr(t.fields,(n,r)=>{const s=new ut([n]);if(oa(r)){const i=D_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new wt(e,0,pe.min(),pe.min(),pe.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,pe.min(),pe.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,pe.min(),pe.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.position=e,this.inclusive=n}}function np(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function $A(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{}class Je extends O_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HA(e,n,r):n==="array-contains"?new KA(e,r):n==="in"?new WA(e,r):n==="not-in"?new GA(e,r):n==="array-contains-any"?new QA(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qA(e,r):new zA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ns(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends O_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new An(e,n)}matches(e){return N_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function N_(t){return t.op==="and"}function M_(t){return jA(t)&&N_(t)}function jA(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function jc(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(M_(t))return t.filters.map(e=>jc(e)).join(",");{const e=t.filters.map(n=>jc(n)).join(",");return`${t.op}(${e})`}}function L_(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof An?function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&L_(o,s.filters[l]),!0):!1}(t,e):void de(19439)}function F_(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(F_).join(" ,")+"}"}(t):"Filter"}class HA extends Je{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class qA extends Je{constructor(e,n){super(e,"in",n),this.keys=U_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zA extends Je{constructor(e,n){super(e,"not-in",n),this.keys=U_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class KA extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lu(n)&&Ji(n.arrayValue,this.value)}}class WA extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class GA extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ji(this.value.arrayValue,n)}}class QA extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ji(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function sp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new XA(t,e,n,r,s,i,o)}function Fu(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.Ie=n}return e.Ie}function Uu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$A(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!L_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rp(t.startAt,e.startAt)&&rp(t.endAt,e.endAt)}function Hc(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function YA(t,e,n,r,s,i,o,l){return new hl(t,e,n,r,s,i,o,l)}function Bu(t){return new hl(t)}function ip(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JA(t){return t.collectionGroup!==null}function Vi(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new et(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Oa(i,r))}),n.has(ut.keyField().canonicalString())||e.Ee.push(new Oa(ut.keyField(),r))}return e.Ee}function En(t){const e=ge(t);return e.de||(e.de=ZA(e,Vi(t))),e.de}function ZA(t,e){if(t.limitType==="F")return sp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oa(s.field,i)});const n=t.endAt?new Da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Da(t.startAt.position,t.startAt.inclusive):null;return sp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qc(t,e,n){return new hl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dl(t,e){return Uu(En(t),En(e))&&t.limitType===e.limitType}function B_(t){return`${Fu(En(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>F_(s)).join(", ")}]`),cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function fl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=np(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Vi(r),s)||r.endAt&&!function(o,l,c){const u=np(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Vi(r),s))}(t,e)}function eC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $_(t){return(e,n)=>{let r=!1;for(const s of Vi(t)){const i=tC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tC(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ns(c,u):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return A_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new ze(le.comparator);function Kn(){return nC}const j_=new ze(le.comparator);function yi(...t){let e=j_;for(const n of t)e=e.insert(n.key,n);return e}function H_(t){let e=j_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return Di()}function q_(){return Di()}function Di(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const rC=new ze(le.comparator),sC=new et(le.comparator);function Te(...t){let e=sC;for(const n of t)e=e.add(n);return e}const iC=new et(ye);function oC(){return iC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xa(e)?"-0":e}}function z_(t){return{integerValue:""+t}}function aC(t,e){return DA(e)?z_(e):$u(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this._=void 0}}function lC(t,e,n){return t instanceof Na?function(s,i){const o={fields:{[R_]:{stringValue:S_},[x_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mu(i)&&(i=ul(i)),i&&(o.fields[P_]=i),{mapValue:o}}(n,e):t instanceof Zi?W_(t,e):t instanceof eo?G_(t,e):function(s,i){const o=K_(s,i),l=op(o)+op(s.Re);return $c(o)&&$c(s.Re)?z_(l):$u(s.serializer,l)}(t,e)}function cC(t,e,n){return t instanceof Zi?W_(t,e):t instanceof eo?G_(t,e):n}function K_(t,e){return t instanceof Ma?function(r){return $c(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Na extends pl{}class Zi extends pl{constructor(e){super(),this.elements=e}}function W_(t,e){const n=Q_(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends pl{constructor(e){super(),this.elements=e}}function G_(t,e){let n=Q_(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class Ma extends pl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function op(t){return Ge(t.integerValue||t.doubleValue)}function Q_(t){return Lu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Os(r.elements,s.elements,bn):r instanceof Ma&&s instanceof Ma?bn(r.Re,s.Re):r instanceof Na&&s instanceof Na}(t.transform,e.transform)}class hC{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gl{}function X_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,on.none()):new po(t.key,t.data,on.none());{const n=t.data,r=Dt.empty();let s=new et(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new Bt(s.toArray()),on.none())}}function dC(t,e,n){t instanceof po?function(s,i,o){const l=s.value.clone(),c=lp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(s,i,o){if(!aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=lp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Y_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,r){return t instanceof po?function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=i.value.clone(),d=cp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=cp(i.fieldTransforms,c,o),d=o.data;return d.setAll(Y_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function fC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=K_(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function ap(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Os(r,s,(i,o)=>uC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends gl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends gl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Y_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lp(t,e,n){const r=new Map;Ve(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,cC(o,l,n[s]))}return r}function cp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,lC(i,o,e))}return r}class ju extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pC extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=q_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=X_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,r)=>ap(n,r))&&Os(this.baseMutations,e.baseMutations,(n,r)=>ap(n,r))}}class Hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return rC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Ae;function yC(t){switch(t){case j.OK:return de(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function J_(t){if(t===void 0)return zn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Xe.OK:return j.OK;case Xe.CANCELLED:return j.CANCELLED;case Xe.UNKNOWN:return j.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return j.INTERNAL;case Xe.UNAVAILABLE:return j.UNAVAILABLE;case Xe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Xe.NOT_FOUND:return j.NOT_FOUND;case Xe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Xe.ABORTED:return j.ABORTED;case Xe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Xe.DATA_LOSS:return j.DATA_LOSS;default:return de(39323,{code:t})}}(Ae=Xe||(Xe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new Tr([4294967295,4294967295],0);function up(t){const e=T_().encode(t),n=new p_;return n.update(e),new Uint8Array(n.digest())}function hp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vi(`Invalid padding: ${n}`);if(r<0)throw new vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vi(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Tr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(vC)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=up(e),[r,s]=hp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=up(e),[r,s]=hp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ml(pe.min(),s,new ze(ye),Kn(),Te())}}class go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new go(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Z_{constructor(e,n){this.targetId=e,this.Ce=n}}class ey{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dp{constructor(){this.Fe=0,this.Me=fp(),this.xe=dt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Te(),n=Te(),r=Te();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de(38017,{changeType:i})}}),new go(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=fp()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ve(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class EC{constructor(e){this.ze=e,this.je=new Map,this.He=Kn(),this.Je=Ho(),this.Ye=Ho(),this.Ze=new ze(ye)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:de(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Hc(i))if(r===0){const o=new le(i.path);this.tt(n,o,wt.newNoDocument(o,pe.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof C_)return Ds("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qu(o,s,i)}catch(c){return Ds(c instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&Hc(l.target)){const c=new le(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,wt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Te();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new ml(e,n,this.Ze,this.He,r);return this.He=Kn(),this.Je=Ho(),this.Ye=Ho(),this.Ze=new ze(ye),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new dp,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new et(ye),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new et(ye),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new dp),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Ho(){return new ze(le.comparator)}function fp(){return new ze(le.comparator)}const wC={asc:"ASCENDING",desc:"DESCENDING"},TC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IC={and:"AND",or:"OR"};class bC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zc(t,e){return t.useProto3Json||cl(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ty(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AC(t,e){return La(t,e.toTimestamp())}function wn(t){return Ve(!!t,49232),pe.fromTimestamp(function(n){const r=Cr(n);return new Ze(r.seconds,r.nanos)}(t))}function zu(t,e){return Kc(t,e).canonicalString()}function Kc(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ny(t){const e=$e.fromString(t);return Ve(ay(e),10190,{key:e.toString()}),e}function Wc(t,e){return zu(t.databaseId,e.path)}function ac(t,e){const n=ny(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(sy(n))}function ry(t,e){return zu(t.databaseId,e)}function CC(t){const e=ny(t);return e.length===4?$e.emptyPath():sy(e)}function Gc(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sy(t){return Ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function pp(t,e,n){return{name:Wc(t,e),fields:n.value.mapValue.fields}}function SC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ve(d===void 0||typeof d=="string",58123),dt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?j.UNKNOWN:J_(u.code);return new ie(d,u.message||"")}(o);n=new ey(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ac(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):pe.min(),l=new Dt({mapValue:{fields:r.document.fields}}),c=wt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new la(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ac(t,r.document),i=r.readTime?wn(r.readTime):pe.min(),o=wt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new la([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ac(t,r.document),i=r.removedTargetIds||[];n=new la([],i,s,null)}else{if(!("filter"in e))return de(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new _C(s,i),l=r.targetId;n=new Z_(l,o)}}return n}function RC(t,e){let n;if(e instanceof po)n={update:pp(t,e.key,e.value)};else if(e instanceof ju)n={delete:Wc(t,e.key)};else if(e instanceof Dr)n={update:pp(t,e.key,e.data),updateMask:LC(e.fieldMask)};else{if(!(e instanceof pC))return de(16599,{ft:e.type});n={verify:Wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ma)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw de(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)}(t,e.precondition)),n}function PC(t,e){return t&&t.length>0?(Ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(pe.min())&&(o=wn(i)),new hC(o,s.transformResults||[])}(n,e))):[]}function xC(t,e){return{documents:[ry(t,e.path)]}}function kC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ry(t,s);const i=function(u){if(u.length!==0)return oy(An.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:ps(g.field),direction:OC(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=zc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function VC(t){let e=CC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=iy(p);return g instanceof An&&M_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new Oa(gs(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,cl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,y=p.values||[];return new Da(y,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,y=p.values||[];return new Da(y,g)}(n.endAt)),YA(e,s,o,i,l,"F",c,u)}function DC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gs(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(gs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>iy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function OC(t){return wC[t]}function NC(t){return TC[t]}function MC(t){return IC[t]}function ps(t){return{fieldPath:t.canonicalString()}}function gs(t){return ut.fromServerFormat(t.fieldPath)}function oy(t){return t instanceof Je?function(n){if(n.op==="=="){if(tp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(ep(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(ep(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:NC(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(s=>oy(s));return r.length===1?r[0]:{compositeFilter:{op:MC(n.op),filters:r}}}(t):de(54877,{filter:t})}function LC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ay(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.wt=e}}function UC(t){const e=VC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.Cn=new $C}addToCollectionParentIndex(e,n){return this.Cn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Ar.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class $C{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ly=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(ly,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Ls(0)}static lr(){return new Ls(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="LruGarbageCollector",jC=1048576;function _p([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class HC{constructor(e){this.Er=e,this.buffer=new et(_p),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_p(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ee(mp,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gs(n)?ee(mp,"Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.mr(3e5)})}}class zC{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(ll.le);const r=new HC(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(gp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gp):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ds()<=we.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function KC(t,e){return new zC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oi(r.mutation,s,Bt.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=yi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Kn();const o=Di(),l=function(){return Di()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Dr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Oi(d.mutation,u,d.mutation.getFieldMask(),Ze.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new GC(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Di();let s=new ze((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Bt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=q_();d.forEach(g=>{if(!i.has(g)){const y=X_(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Hr());let l=Qi,c=i;return o.next(u=>U.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({batchId:l,changes:H_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=yi();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(p,g){return new hl(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,wt.newInvalidDocument(d)))});let l=yi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Oi(d.mutation,u,Bt.empty(),Ze.now()),fl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return U.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:UC(s.bundledQuery),readTime:wn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.overlays=new ze(le.comparator),this.Qr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Hr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Hr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return U.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mC(n,r));let i=this.Qr.get(n);i===void 0&&(i=Te(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.$r=new et(nt.Ur),this.Kr=new et(nt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new nt(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new nt(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new le(new $e([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new le(new $e([])),r=new nt(n,e),s=new nt(n,e+1);let i=Te();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return le.comparator(e.key,n.key)||ye(e.Zr,n.Zr)}static Wr(e,n){return ye(e.Zr,n.Zr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new et(nt.Ur)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Nu:this.nr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ye);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),U.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new nt(new le(i),0);let l=new et(ye);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),U.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return U.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new nt(n,0),s=this.Xr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.ii=e,this.docs=function(){return new ze(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||PA(RA(d),r)<=0||(s.has(d.key)||fl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de(9500)}si(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tS(this)}getSize(e){return U.resolve(this.size)}}class tS extends WC{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.persistence=e,this.oi=new ts(n=>Fu(n),Uu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this._i=0,this.ai=new Ku,this.targetCount=0,this.ui=Ls.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),U.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Tr(n),U.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.ci={},this.overlays={},this.li=new ll(0),this.hi=!1,this.hi=!0,this.Pi=new JC,this.referenceDelegate=e(this),this.Ti=new nS(this),this.indexManager=new BC,this.remoteDocumentCache=function(s){return new eS(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new FC(n),this.Ei=new XC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new ZC(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new rS(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return U.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class rS extends kA{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.Vi=new Ku,this.mi=null}static fi(e){return new Wu(e)}get gi(){if(this.mi)return this.mi;throw de(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),U.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.gi,r=>{const s=le.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return U.or([()=>U.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Fa{constructor(e,n){this.persistence=e,this.yi=new ts(r=>OA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=KC(this,n)}static fi(e,n){return new Fa(e,n)}di(){}Ai(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return U.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),U.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ia(e.data.value)),n}Dr(e,n,r){return U.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return BT()?8:VA(bt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sS;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(ds()<=we.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),U.resolve()):(ds()<=we.DEBUG&&ee("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ds()<=we.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):U.resolve())}ws(e,n){if(ip(n))return U.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qc(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,qc(n,null,"F")):this.Fs(e,u,n,c)}))})))}bs(e,n,r,s){return ip(n)||s.isEqual(pe.min())?U.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?U.resolve(null):(ds()<=we.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.Fs(e,o,n,SA(s,Qi)).next(l=>l))})}vs(e,n){let r=new et($_(e));return n.forEach((s,i)=>{fl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ds()<=we.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",fs(n)),this.ys.getDocumentsMatchingQuery(e,n,Ar.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="LocalStore",oS=3e8;class aS{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new ze(ye),this.Os=new ts(i=>Fu(i),Uu),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function lS(t,e,n,r){return new aS(t,e,n,r)}async function uy(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function cS(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let y=U.resolve();return g.forEach(x=>{y=y.next(()=>d.getEntry(c,x)).next(D=>{const O=u.docVersions.get(x);Ve(O!==null,48541),D.version.compareTo(O)<0&&(p.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),d.addEntry(D)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function hy(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function uS(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(dt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(D,O,q){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=oS?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,y,d)&&l.push(n.Ti.updateTargetData(i,y))});let c=Kn(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(hS(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(pe.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function hS(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee(Qu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function dS(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Nu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fS(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Qc(t,e,n){const r=ge(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gs(o))throw o;ee(Qu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function yp(t,e,n){const r=ge(t);let s=pe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ge(c),g=p.Os.get(d);return g!==void 0?U.resolve(p.xs.get(g)):p.Ti.getTargetData(u,d)}(r,o,En(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Te())).next(l=>(pS(r,eC(e),l),{documents:l,$s:i})))}function pS(t,e,n){let r=t.Ns.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class vp{constructor(){this.activeTargetIds=oC()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gS{constructor(){this.xo=new vp,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new vp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="ConnectivityMonitor";class wp{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ee(Ep,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ee(Ep,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo=null;function Xc(){return qo===null?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="RestConnection",_S={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yS{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===ka?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Xc(),l=this.jo(e,n.toUriEncodedString());ee(lc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=js(u);return this.Jo(e,l,c,r,d).then(p=>(ee(lc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ds(lc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=_S[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class ES extends yS{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Xc();return new Promise((l,c)=>{const u=new g_;u.setWithCredentials(!0),u.listenOnce(m_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sa.NO_ERROR:const p=u.getResponseJson();ee(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case sa.TIMEOUT:ee(_t,`RPC '${e}' ${o} timed out`),c(new ie(j.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const g=u.getStatus();if(ee(_t,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const x=y==null?void 0:y.error;if(x&&x.status&&x.message){const D=function(q){const $=q.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf($)>=0?$:j.UNKNOWN}(x.status);c(new ie(D,x.message))}else c(new ie(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ie(j.UNAVAILABLE,"Connection failed."));break;default:de(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{ee(_t,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);ee(_t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}I_(e,n,r){const s=Xc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v_(),l=y_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ee(_t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.E_(p);let g=!1,y=!1;const x=new vS({Zo:O=>{y?ee(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(ee(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(_t,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Xo:()=>p.close()}),D=(O,q,$)=>{O.listen(q,N=>{try{$(N)}catch(k){setTimeout(()=>{throw k},0)}})};return D(p,_i.EventType.OPEN,()=>{y||(ee(_t,`RPC '${e}' stream ${s} transport opened.`),x.__())}),D(p,_i.EventType.CLOSE,()=>{y||(y=!0,ee(_t,`RPC '${e}' stream ${s} transport closed`),x.u_(),this.d_(p))}),D(p,_i.EventType.ERROR,O=>{y||(y=!0,Ds(_t,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),x.u_(new ie(j.UNAVAILABLE,"The operation could not be completed")))}),D(p,_i.EventType.MESSAGE,O=>{var q;if(!y){const $=O.data[0];Ve(!!$,16349);const N=$,k=(N==null?void 0:N.error)||((q=N[0])===null||q===void 0?void 0:q.error);if(k){ee(_t,`RPC '${e}' stream ${s} received error:`,k);const se=k.status;let Q=function(E){const C=Xe[E];if(C!==void 0)return J_(C)}(se),S=k.message;Q===void 0&&(Q=j.INTERNAL,S="Unknown error status: "+se+" with message "+k.message),y=!0,x.u_(new ie(Q,S)),p.close()}else ee(_t,`RPC '${e}' stream ${s} received:`,$),x.c_($)}}),D(l,__.STAT_EVENT,O=>{O.stat===Fc.PROXY?ee(_t,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Fc.NOPROXY&&ee(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.a_()},0),x}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){return new bC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="PersistentStream";class fy{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new dy(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new ie(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return ee(Tp,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(ee(Tp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wS extends fy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=SC(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?wn(o.readTime):pe.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Gc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Hc(c)?{documents:xC(i,c)}:{query:kC(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ty(i,o.resumeToken);const u=zc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=La(i,o.snapshotVersion.toTimestamp());const u=zc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=DC(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Gc(this.serializer),n.removeTarget=e,this.Q_(n)}}class TS extends fy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=PC(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Gc(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RC(this.serializer,r))};this.Q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{}class bS extends IS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Kc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(j.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Kc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(j.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class AS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(zn(n),this.ua=!1):ee("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="RemoteStore";class CS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{ns(this)&&(ee(Yr,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.da.add(4),await mo(u),u.Va.set("Unknown"),u.da.delete(4),await yl(u)}(this))})}),this.Va=new AS(r,s)}}async function yl(t){if(ns(t))for(const e of t.Aa)await e(!0)}async function mo(t){for(const e of t.Aa)await e(!1)}function py(t,e){const n=ge(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Zu(n)?Ju(n):Qs(n).N_()&&Yu(n,e))}function Xu(t,e){const n=ge(t),r=Qs(n);n.Ea.delete(e),r.N_()&&gy(n,e),n.Ea.size===0&&(r.N_()?r.k_():ns(n)&&n.Va.set("Unknown"))}function Yu(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).Z_(e)}function gy(t,e){t.ma.Ke(e),Qs(t).X_(e)}function Ju(t){t.ma=new EC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.Va.ca()}function Zu(t){return ns(t)&&!Qs(t).O_()&&t.Ea.size>0}function ns(t){return ge(t).da.size===0}function my(t){t.ma=void 0}async function SS(t){t.Va.set("Online")}async function RS(t){t.Ea.forEach((e,n)=>{Yu(t,e)})}async function PS(t,e){my(t),Zu(t)?(t.Va.Pa(e),Ju(t)):t.Va.set("Unknown")}async function xS(t,e,n){if(t.Va.set("Online"),e instanceof ey&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.ma.removeTarget(l))}(t,e)}catch(r){ee(Yr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ua(t,r)}else if(e instanceof la?t.ma.Xe(e):e instanceof Z_?t.ma.ot(e):t.ma.nt(e),!n.isEqual(pe.min()))try{const r=await hy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ma.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(u);d&&i.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),gy(i,c);const p=new gr(d.target,c,u,d.sequenceNumber);Yu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee(Yr,"Failed to raise snapshot:",r),await Ua(t,r)}}async function Ua(t,e,n){if(!Gs(e))throw e;t.da.add(1),await mo(t),t.Va.set("Offline"),n||(n=()=>hy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Yr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await yl(t)})}function _y(t,e){return e().catch(n=>Ua(t,n,e))}async function vl(t){const e=ge(t),n=Pr(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Nu;for(;kS(e);)try{const s=await dS(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,VS(e,s)}catch(s){await Ua(e,s)}yy(e)&&vy(e)}function kS(t){return ns(t)&&t.Ia.length<10}function VS(t,e){t.Ia.push(e);const n=Pr(t);n.N_()&&n.ea&&n.ta(e.mutations)}function yy(t){return ns(t)&&!Pr(t).O_()&&t.Ia.length>0}function vy(t){Pr(t).start()}async function DS(t){Pr(t).ia()}async function OS(t){const e=Pr(t);for(const n of t.Ia)e.ta(n.mutations)}async function NS(t,e,n){const r=t.Ia.shift(),s=Hu.from(r,e,n);await _y(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await vl(t)}async function MS(t,e){e&&Pr(t).ea&&await async function(r,s){if(function(o){return yC(o)&&o!==j.ABORTED}(s.code)){const i=r.Ia.shift();Pr(r).L_(),await _y(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vl(r)}}(t,e),yy(t)&&vy(t)}async function Ip(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ee(Yr,"RemoteStore received new credentials");const r=ns(n);n.da.add(3),await mo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await yl(n)}async function LS(t,e){const n=ge(t);e?(n.da.delete(2),await yl(n)):e||(n.da.add(2),await mo(n),n.Va.set("Unknown"))}function Qs(t){return t.fa||(t.fa=function(n,r,s){const i=ge(n);return i.oa(),new wS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:SS.bind(null,t),n_:RS.bind(null,t),i_:PS.bind(null,t),Y_:xS.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),Zu(t)?Ju(t):t.Va.set("Unknown")):(await t.fa.stop(),my(t))})),t.fa}function Pr(t){return t.ga||(t.ga=function(n,r,s){const i=ge(n);return i.oa(),new TS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:DS.bind(null,t),i_:MS.bind(null,t),na:OS.bind(null,t),ra:NS.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await vl(t)):(await t.ga.stop(),t.Ia.length>0&&(ee(Yr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new eh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Gs(t))return new ie(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{static emptySet(e){return new Cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=yi(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.pa=new ze(le.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):de(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fs(e,n,Cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class US{constructor(){this.queries=Ap(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Ap(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new ie(j.ABORTED,"Firestore shutting down"))}}function Ap(){return new ts(t=>B_(t),dl)}async function Ey(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new FS,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=th(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&nh(n)}async function wy(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Ma(s)&&(r=!0);o.ba=s}}r&&nh(n)}function $S(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function nh(t){t.Ca.forEach(e=>{e.next()})}var Yc,Cp;(Cp=Yc||(Yc={})).xa="default",Cp.Cache="cache";class Ty{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Yc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.key=e}}class by{constructor(e){this.key=e}}class jS{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Te(),this.mutatedKeys=Te(),this.Za=$_(e),this.Xa=new Cs(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new bp,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),y=fl(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),D=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;g&&y?g.data.isEqual(y.data)?x!==D&&(r.track({type:3,doc:y}),O=!0):this.ru(g,y)||(r.track({type:2,doc:y}),O=!0,(c&&this.Za(y,c)>0||u&&this.Za(y,u)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),O=!0):g&&!y&&(r.track({type:1,doc:g}),O=!0,(c||u)&&(l=!0)),O&&(y?(o=o.add(y),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Xa:o,nu:r,Cs:l,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((d,p)=>function(y,x){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Vt:O})}};return D(y)-D(x)}(d.type,p.type)||this.Za(d.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new Fs(this.query,e.Xa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new bp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Te(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new by(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Iy(r))}),n}au(e){this.Ha=e.$s,this.Ya=Te();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Fs.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const rh="SyncEngine";class HS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qS{constructor(e){this.key=e,this.cu=!1}}class zS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new ts(l=>B_(l),dl),this.Pu=new Map,this.Tu=new Set,this.Iu=new ze(le.comparator),this.Eu=new Map,this.du=new Ku,this.Au={},this.Ru=new Map,this.Vu=Ls.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function KS(t,e,n=!0){const r=xy(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Ay(r,e,n,!0),s}async function WS(t,e){const n=xy(t);await Ay(n,e,!0,!1)}async function Ay(t,e,n,r){const s=await fS(t.localStore,En(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await GS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&py(t.remoteStore,s),l}async function GS(t,e,n,r,s){t.fu=(p,g,y)=>async function(D,O,q,$){let N=O.view.tu(q);N.Cs&&(N=await yp(D.localStore,O.query,!1).then(({documents:S})=>O.view.tu(S,N)));const k=$&&$.targetChanges.get(O.targetId),se=$&&$.targetMismatches.get(O.targetId)!=null,Q=O.view.applyChanges(N,D.isPrimaryClient,k,se);return Rp(D,O.targetId,Q.ou),Q.snapshot}(t,p,g,y);const i=await yp(t.localStore,e,!0),o=new jS(e,i.$s),l=o.tu(i.documents),c=go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Rp(t,n,u.ou);const d=new HS(e,n,o);return t.hu.set(e,d),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function QS(t,e,n){const r=ge(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!dl(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xu(r.remoteStore,s.targetId),Jc(r,s.targetId)}).catch(Ws)):(Jc(r,s.targetId),await Qc(r.localStore,s.targetId,!0))}async function XS(t,e){const n=ge(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xu(n.remoteStore,r.targetId))}async function YS(t,e,n){const r=sR(t);try{const s=await function(o,l){const c=ge(o),u=Ze.now(),d=l.reduce((y,x)=>y.add(x.key),Te());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let x=Kn(),D=Te();return c.Bs.getEntries(y,d).next(O=>{x=O,x.forEach((q,$)=>{$.isValidDocument()||(D=D.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,x)).next(O=>{p=O;const q=[];for(const $ of l){const N=fC($,p.get($.key).overlayedDocument);N!=null&&q.push(new Dr($.key,N,D_(N.value.mapValue),on.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,q,l)}).next(O=>{g=O;const q=O.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(y,O.batchId,q)})}).then(()=>({batchId:g.batchId,changes:H_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Au[o.currentUser.toKey()];u||(u=new ze(ye)),u=u.insert(l,c),o.Au[o.currentUser.toKey()]=u}(r,s.batchId,n),await _o(r,s.changes),await vl(r.remoteStore)}catch(s){const i=th(s,"Failed to persist write");n.reject(i)}}async function Cy(t,e){const n=ge(t);try{const r=await uS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?Ve(o.cu,14607):s.removedDocuments.size>0&&(Ve(o.cu,42227),o.cu=!1))}),await _o(n,r,e)}catch(r){await Ws(r)}}function Sp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const l=o.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.Sa)g.Fa(l)&&(u=!0)}),u&&nh(c)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new ze(le.comparator);o=o.insert(i,wt.newNoDocument(i,pe.min()));const l=Te().add(i),c=new ml(pe.min(),new Map,new ze(ye),o,l);await Cy(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(e),sh(r)}else await Qc(r.localStore,e,!1).then(()=>Jc(r,e,n)).catch(Ws)}async function ZS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await cS(n.localStore,e);Ry(n,r,null),Sy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _o(n,s)}catch(s){await Ws(s)}}async function eR(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ve(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Ry(r,e,n),Sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _o(r,s)}catch(s){await Ws(s)}}function Sy(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function Ry(t,e,n){const r=ge(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||Py(t,r)})}function Py(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(Xu(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),sh(t))}function Rp(t,e,n){for(const r of n)r instanceof Iy?(t.du.addReference(r.key,e),tR(t,r)):r instanceof by?(ee(rh,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||Py(t,r.key)):de(19791,{pu:r})}function tR(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(ee(rh,"New document in limbo: "+n),t.Tu.add(r),sh(t))}function sh(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new le($e.fromString(e)),r=t.Vu.next();t.Eu.set(r,new qS(n)),t.Iu=t.Iu.insert(n,r),py(t.remoteStore,new gr(En(Bu(n.path)),r,"TargetPurposeLimboResolution",ll.le))}}async function _o(t,e,n){const r=ge(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{o.push(r.fu(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Gu.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,g=>U.forEach(g.ds,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>U.forEach(g.As,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!Gs(p))throw p;ee(Qu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=d.xs.get(g),x=y.snapshotVersion,D=y.withLastLimboFreeSnapshotVersion(x);d.xs=d.xs.insert(g,D)}}}(r.localStore,i))}async function nR(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ee(rh,"User change. New user:",e.toKey());const r=await uy(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new ie(j.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _o(n,r.ks)}}function rR(t,e){const n=ge(t),r=n.Eu.get(e);if(r&&r.cu)return Te().add(r.key);{let s=Te();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const l=n.hu.get(o);s=s.unionWith(l.view.eu)}return s}}function xy(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JS.bind(null,e),e.lu.Y_=BS.bind(null,e.eventManager),e.lu.gu=$S.bind(null,e.eventManager),e}function sR(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eR.bind(null,e),e}class Ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_l(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return lS(this.persistence,new iS,e.initialUser,this.serializer)}Su(e){return new cy(Wu.fi,this.serializer)}bu(e){return new gS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ba.provider={build:()=>new Ba};class iR extends Ba{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){Ve(this.persistence.referenceDelegate instanceof Fa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qC(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new cy(r=>Fa.fi(r,n),this.serializer)}}class Zc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nR.bind(null,this.syncEngine),await LS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new US}()}createDatastore(e){const n=_l(e.databaseInfo.databaseId),r=function(i){return new ES(i)}(e.databaseInfo);return function(i,o,l,c){return new bS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new CS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Sp(this.syncEngine,n,0),function(){return wp.C()?new wp:new mS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new zS(s,i,o,l,c,u);return d&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);ee(Yr,"RemoteStore shutting down."),i.da.add(5),await mo(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zc.provider={build:()=>new Zc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class oR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=I_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=th(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),ee(xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await uy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aR(t);ee(xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ip(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ip(e.remoteStore,s)),t._onlineComponents=e}async function aR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(xr,"Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new Ba)}}else ee(xr,"Using default OfflineComponentProvider"),await uc(t,new iR(void 0));return t._offlineComponents}async function Vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(xr,"Using user provided OnlineComponentProvider"),await Pp(t,t._uninitializedComponentsProvider._online)):(ee(xr,"Using default OnlineComponentProvider"),await Pp(t,new Zc))),t._onlineComponents}function lR(t){return Vy(t).then(e=>e.syncEngine)}async function Dy(t){const e=await Vy(t),n=e.eventManager;return n.onListen=KS.bind(null,e.syncEngine),n.onUnlisten=QS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XS.bind(null,e.syncEngine),n}function cR(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new ky({next:g=>{d.xu(),o.enqueueAndForget(()=>wy(i,p));const y=g.docs.has(l);!y&&g.fromCache?u.reject(new ie(j.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&c&&c.source==="server"?u.reject(new ie(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Ty(Bu(l.path),d,{includeMetadataChanges:!0,Qa:!0});return Ey(i,p)}(await Dy(t),t.asyncQueue,e,n,r)),r.promise}function uR(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new ky({next:g=>{d.xu(),o.enqueueAndForget(()=>wy(i,p)),g.fromCache&&c.source==="server"?u.reject(new ie(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Ty(l,d,{includeMetadataChanges:!0,Qa:!0});return Ey(i,p)}(await Dy(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e,n){if(!n)throw new ie(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hR(t,e,n,r){if(e===!0&&r===!0)throw new ie(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kp(t){if(!le.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vp(t){if(le.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ih(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ih(t);throw new ie(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firestore.googleapis.com",Dp=!0;class Op{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=My,this.ssl=Dp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Dp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ly;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jC)throw new ie(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class El{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Op({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Op(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yA;switch(r.type){case"firstParty":return new TA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),xp.delete(n),r.terminate())}(this),Promise.resolve()}}function dR(t,e,n,r={}){var s;t=Wn(t,El);const i=js(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Sm(`https://${c}`),Rm("Firestore",!0)),o.host!==My&&o.host!==c&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Wr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=vt.MOCK_USER;else{d=kT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ie(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(g)}t._authCredentials=new vA(new w_(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wl(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Ir extends wl{constructor(e,n,r){super(e,n,Bu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new le(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Ni(t,e,...n){if(t=ht(t),Ny("collection","path",e),t instanceof El){const r=$e.fromString(e,...n);return Vp(r),new Ir(t,null,r)}{if(!(t instanceof $t||t instanceof Ir))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Vp(r),new Ir(t.firestore,null,r)}}function Jr(t,e,...n){if(t=ht(t),arguments.length===1&&(e=I_.newId()),Ny("doc","path",e),t instanceof El){const r=$e.fromString(e,...n);return kp(r),new $t(t,null,new le(r))}{if(!(t instanceof $t||t instanceof Ir))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return kp(r),new $t(t.firestore,t instanceof Ir?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="AsyncQueue";class Mp{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new dy(this,"async_queue_retry"),this.rc=()=>{const r=cc();r&&ee(Np,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Un;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Gs(e))throw e;ee(Np,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,zn("INTERNAL UNHANDLED ERROR: ",Lp(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=eh.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&de(47125,{cc:Lp(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Lp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Xs extends El{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Mp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mp(e),this._firestoreClient=void 0,await e}}}function fR(t,e){const n=typeof t=="object"?t:Vm(),r=typeof t=="string"?t:ka,s=bu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=PT("firestore");i&&dR(s,...i)}return s}function oh(t){if(t._terminated)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pR(t),t._firestoreClient}function pR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new LA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Oy(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new oR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(dt.fromBase64String(e))}catch(n){throw new ie(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=/^__.*__$/;class mR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}class Ly{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ic:t})}}class uh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return $a(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Fy(this.Ic)&&gR.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class _R{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_l(e)}bc(e,n,r,s=!1){return new uh({Ic:e,methodName:n,wc:r,path:ut.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uy(t){const e=t._freezeSettings(),n=_l(t._databaseId);return new _R(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yR(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);hh("Data must be an object, but it was:",o,r);const l=By(r,o);let c,u;if(i.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=eu(e,p,n);if(!o.contains(g))throw new ie(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);jy(d,g)||d.push(g)}c=new Bt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new mR(new Dt(l),c,u)}class Il extends ah{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Il}}function vR(t,e,n,r){const s=t.bc(1,e,n);hh("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();Vr(r,(c,u)=>{const d=dh(e,c,n);u=ht(u);const p=s.mc(d);if(u instanceof Il)i.push(d);else{const g=bl(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Bt(i);return new Ly(o,l,s.fieldTransforms)}function ER(t,e,n,r,s,i){const o=t.bc(1,e,n),l=[eu(e,r,n)],c=[s];if(i.length%2!=0)throw new ie(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(eu(e,i[g])),c.push(i[g+1]);const u=[],d=Dt.empty();for(let g=l.length-1;g>=0;--g)if(!jy(u,l[g])){const y=l[g];let x=c[g];x=ht(x);const D=o.mc(y);if(x instanceof Il)u.push(y);else{const O=bl(x,D);O!=null&&(u.push(y),d.set(y,O))}}const p=new Bt(u);return new Ly(d,p,o.fieldTransforms)}function bl(t,e){if($y(t=ht(t)))return hh("Unsupported field value:",e,t),By(t,e);if(t instanceof ah)return function(r,s){if(!Fy(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=bl(l,s.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:La(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:La(s.serializer,i)}}if(r instanceof lh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:ty(s.serializer,r._byteString)};if(r instanceof $t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ch)return function(o,l){return{mapValue:{fields:{[k_]:{stringValue:V_},[Va]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.gc("VectorValues must only contain numeric values.");return $u(l.serializer,u)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${ih(r)}`)}(t,e)}function By(t,e){const n={};return A_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,s)=>{const i=bl(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function $y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof lh||t instanceof Us||t instanceof $t||t instanceof ah||t instanceof ch)}function hh(t,e,n){if(!$y(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ih(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function eu(t,e,n){if((e=ht(e))instanceof Tl)return e._internalPath;if(typeof e=="string")return dh(t,e);throw $a("Field path arguments must be of type string or ",t,!1,void 0,n)}const wR=new RegExp("[~\\*/\\[\\]]");function dh(t,e,n){if(e.search(wR)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tl(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ie(j.INVALID_ARGUMENT,l+t+c)}function jy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TR extends Hy{data(){return super.data()}}function qy(t,e){return typeof e=="string"?dh(t,e):e instanceof Tl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bR{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Va].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new ch(i)}convertGeoPoint(e){return new lh(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ul(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xi(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ve(ay(r),9688,{name:e});const s=new Yi(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zy extends Hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ca extends zy{data(e={}){return super.data(e)}}class CR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ei(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ei(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ei(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:SR(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){t=Wn(t,$t);const e=Wn(t.firestore,Xs);return cR(oh(e),t._key).then(n=>PR(e,t,n))}class Ky extends bR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function tu(t){t=Wn(t,wl);const e=Wn(t.firestore,Xs),n=oh(e),r=new Ky(e);return IR(t._query),uR(n,t._query).then(s=>new CR(e,r,t,s))}function Wy(t,e,n,...r){t=Wn(t,$t);const s=Wn(t.firestore,Xs),i=Uy(s);let o;return o=typeof(e=ht(e))=="string"||e instanceof Tl?ER(i,"updateDoc",t._key,e,n,r):vR(i,"updateDoc",t._key,e),fh(s,[o.toMutation(t._key,on.exists(!0))])}function Gy(t){return fh(Wn(t.firestore,Xs),[new ju(t._key,on.none())])}function Qy(t,e){const n=Wn(t.firestore,Xs),r=Jr(t),s=AR(t.converter,e);return fh(n,[yR(Uy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function fh(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>YS(await lR(r),s,i)),i.promise}(oh(t),e)}function PR(t,e,n){const r=n.docs.get(e._key),s=new Ky(t);return new zy(t,s,e._key,r,new Ei(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ks=s})(Hs),ks(new Gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Xs(new EA(r.getProvider("auth-internal")),new IA(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Er(jf,Hf,e),Er(jf,Hf,"esm2017")})();var xR="firebase",kR="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er(xR,kR,"app");const VR={apiKey:"AIzaSyC3LZfh4McpbHNt9O4wdnP10dZ4MI6ftKU",authDomain:"or-carwash-c0046.firebaseapp.com",projectId:"or-carwash-c0046",storageBucket:"or-carwash-c0046.firebasestorage.app",messagingSenderId:"1006514598366",appId:"1:1006514598366:web:fd92cc7505fcf00a37ad4f",measurementId:"G-1M7XN5GRN5"},Xy=km(VR),ua=mA(Xy),en=fR(Xy),zo=Pe(!1),hc=Pe(!0),ir=Pe(null),xn=Pe(null),kn=Pe(null),fi=Pe(null),Yy=()=>{s1(ua,async l=>{if(l){xn.value=l;try{const c=await l.getIdTokenResult();ir.value=c.claims,await t(l.uid),e(l.uid),zo.value=!0}catch(c){console.error("Error getting user data:",c)}finally{hc.value=!1,console.error("Error getting user data:",error)}}else s(),hc.value=!1});const t=async l=>{console.log(l,"userId");try{const c=await RR(Jr(en,"admin","NPGZx8AGRXePGkzpLDNP2l8XXw12"));console.log(c,"userDoc"),c.exists()&&(kn.value=c.data(),localStorage.setItem("userProfile",JSON.stringify(c.data())))}catch(c){console.error("Error fetching user profile:",c)}},e=l=>{const c=localStorage.getItem(`preferences_${l}`);c?fi.value=JSON.parse(c):fi.value={theme:"light",language:"en",notifications:!0}},n=l=>{xn.value&&(fi.value=l,localStorage.setItem(`preferences_${xn.value.uid}`,JSON.stringify(l)))},r=async(l,c)=>{try{const u=await t1(ua,l,c);if(console.log("userCredential",u),u.user){const d=await u.user.getIdTokenResult();return ir.value=d.claims,await t(u.user.uid),e(u.user.uid),zo.value=!0,{success:!0,user:u.user,claims:d.claims,profile:kn.value}}}catch(u){throw console.error("Login error:",u),u}},s=()=>{xn.value=null,ir.value=null,kn.value=null,fi.value=null,zo.value=!1,localStorage.removeItem("userProfile"),localStorage.removeItem("isAuthenticated")},i=async()=>{try{await i1(ua),s()}catch(l){throw console.error("Logout error:",l),l}},o=async l=>{if(xn.value&&kn.value)try{return await updateDoc(Jr(en,"users",xn.value.uid),l),kn.value={...kn.value,...l},localStorage.setItem("userProfile",JSON.stringify(kn.value)),!0}catch(c){throw console.error("Error updating profile:",c),c}};return{isAuthenticated:Be(()=>zo.value),isAuthLoading:Be(()=>hc.value),isAdmin:Be(()=>{var l;return((l=ir.value)==null?void 0:l.admin)===!0}),isServiceProvider:Be(()=>{var l;return((l=ir.value)==null?void 0:l.serviceProvider)===!0}),currentUser:Be(()=>xn.value),userClaims:Be(()=>ir.value),userProfile:Be(()=>kn.value),userPreferences:Be(()=>fi.value),userName:Be(()=>{var l,c;return((l=kn.value)==null?void 0:l.name)||((c=xn.value)==null?void 0:c.email)||"User"}),userEmail:Be(()=>{var l;return(l=xn.value)==null?void 0:l.email}),userRole:Be(()=>{var l,c;return(l=ir.value)!=null&&l.admin?"Admin":(c=ir.value)!=null&&c.serviceProvider?"Service Provider":"User"}),login:r,logout:i,updateUserProfile:o,saveUserPreferences:n,fetchUserProfile:t}},DR={class:"flex min-h-screen"},OR={key:0,class:"md:w-[250px] w-[70px] bg-gray-800 text-white p-4 flex flex-col"},NR={key:0,class:"flex-1"},MR={key:1,class:"flex-1"},LR={key:2,class:"py-4"},FR={key:3,class:"py-4"},UR={class:"flex-1 px-8 bg-gray-50"},BR={key:0,class:"w-full h-[5rem] flex items-center justify-between"},$R={key:0,class:"flex justify-between w-full"},jR={class:"flex items-center gap-2"},HR=["src"],qR={__name:"App",setup(t){const e=ET(),n=Em(),{isAuthenticated:r,isAuthLoading:s,logout:i}=Yy(),o=Pe(),l=Be(()=>e.name==="login"?!1:r.value||s.value),c=Be(()=>e.name);console.log("isAuthenticated",r.value);const u=()=>{o.value=JSON.parse(localStorage.getItem("userProfile"))},d=async()=>{await i(),await n.push({name:"login",path:"/login"})};return oo(()=>{u()}),(p,g)=>{var y;return ne(),ue("div",DR,[l.value?(ne(),ue("nav",OR,[g[6]||(g[6]=A("div",{class:"flex items-center py-4 mb-8"},[A("img",{alt:"Logo",class:"mr-4",src:Cc,width:"40",height:"40"}),A("h1",{class:"text-lg font-normal hidden md:block"},"40R Admin Panel")],-1)),St(s)?(ne(),ue("div",NR,[(ne(),ue(Fe,null,Nn(3,x=>A("div",{key:x,class:"px-4 py-3 mb-2"},g[0]||(g[0]=[A("div",{class:"h-8 bg-gray-700 rounded-lg animate-pulse"},null,-1)]))),64))])):(ne(),ue("div",MR,[Qe(St(Zo),{to:"/dashboard",class:Tt(["flex items-center justify-center md:justify-start md:px-4 md: py-3 text-white no-underline rounded-lg mb-2 hover:bg-gray-700 transition-colors",{"bg-gray-700":p.$route.path==="/dashboard"}])},{default:_r(()=>g[1]||(g[1]=[A("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),A("span",{class:"ml-3 hidden md:block"},"Dashboard",-1)])),_:1,__:[1]},8,["class"]),Qe(St(Zo),{to:"/branches",class:Tt(["flex items-center justify-center md:justify-start md:px-4 md: py-3 text-white no-underline rounded-lg mb-2 hover:bg-gray-700 transition-colors",{"bg-gray-700":p.$route.path==="/branches"}])},{default:_r(()=>g[2]||(g[2]=[A("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})],-1),A("span",{class:"ml-3 hidden md:block"},"Branches",-1)])),_:1,__:[2]},8,["class"]),Qe(St(Zo),{to:"/services",class:Tt(["flex items-center justify-center md:justify-start md:px-4 md: py-3 text-white no-underline rounded-lg mb-2 hover:bg-gray-700 transition-colors",{"bg-gray-700":p.$route.path==="/services"}])},{default:_r(()=>g[3]||(g[3]=[A("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),A("span",{class:"ml-3 hidden md:block"},"Services",-1)])),_:1,__:[3]},8,["class"])])),St(s)?(ne(),ue("div",LR,g[4]||(g[4]=[A("div",{class:"w-full h-12 bg-gray-700 rounded-lg animate-pulse"},null,-1)]))):(ne(),ue("div",FR,[A("button",{onClick:d,class:"w-full py-3 md:px-4 bg-red-600 text-white border-none rounded-lg cursor-pointer hover:bg-red-700 transition-colors flex items-center justify-center gap-2"},g[5]||(g[5]=[A("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1),A("span",{class:"hidden md:inline"},"Logout",-1)]))]))])):Pt("",!0),A("main",UR,[l.value?(ne(),ue("div",BR,[St(s)?(ne(),ue("div",$R,g[7]||(g[7]=[A("div",{class:"h-6 w-24 bg-gray-200 rounded animate-pulse"},null,-1),A("div",{class:"flex items-center gap-2"},[A("div",{class:"h-6 w-16 bg-gray-200 rounded animate-pulse"}),A("div",{class:"w-10 h-10 bg-gray-200 rounded-full animate-pulse"})],-1)]))):(ne(),ue(Fe,{key:1},[A("div",null,Oe(c.value),1),A("div",jR,[A("span",null,Oe((y=o.value)==null?void 0:y.username),1),A("img",{src:St(Cc),class:"w-10 h-10",alt:"user image"},null,8,HR)])],64))])):Pt("",!0),Qe(St(vm))])])}}},zR={class:"min-h-screen flex items-center justify-center bg-gray-50"},KR={class:"bg-white p-8 rounded-xl shadow-lg w-full max-w-md"},WR={class:"flex flex-col gap-2"},GR={class:"flex flex-col gap-2"},QR=["disabled"],XR={key:0,class:"absolute left-1/2 transform -translate-x-1/2"},YR={key:0,class:"text-red-600 text-sm text-center"},JR={__name:"Login",setup(t){const e=Em(),{login:n}=Yy(),r=Pe(!1),s=Pe(""),i=Pe(""),o=Pe(""),l=p=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p),c=p=>p.length>0&&p.length<=10,u=p=>{switch(console.log(p.code),p.code){case"auth/invalid-credential":return"invalid credentials";case"auth/wrong-password":return"Invalid password";case"auth/invalid-email":return"Invalid email format";case"auth/too-many-requests":return"Too many failed attempts. Please try again later";default:return p.message||"Login failed"}},d=async()=>{if(o.value="",!l(s.value)){o.value="Please enter a valid email address";return}if(!c(i.value)){o.value="Password must be between 1 and 10 characters";return}r.value=!0;try{const p=await n(s.value,i.value);console.log("response",p),p.success&&e.push("/dashboard")}catch(p){o.value=u(p)}finally{r.value=!1}};return(p,g)=>(ne(),ue("div",zR,[A("div",KR,[g[6]||(g[6]=A("div",{class:"text-center mb-8"},[A("img",{alt:"Logo",class:"mx-auto",src:Cc,width:"50",height:"50"}),A("h1",{class:"text-2xl font-semibold mt-4 mb-2 text-gray-800"},"Welcome Back"),A("p",{class:"text-gray-600"},"Please sign in to continue")],-1)),A("form",{onSubmit:wa(d,["prevent"]),class:"space-y-6"},[A("div",WR,[g[2]||(g[2]=A("label",{for:"email",class:"text-sm text-gray-800"},"Email",-1)),Ye(A("input",{id:"email",type:"email","onUpdate:modelValue":g[0]||(g[0]=y=>s.value=y),placeholder:"Enter your email",required:"",class:"px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"},null,512),[[yt,s.value]])]),A("div",GR,[g[3]||(g[3]=A("label",{for:"password",class:"text-sm text-gray-800"},"Password",-1)),Ye(A("input",{id:"password",type:"password","onUpdate:modelValue":g[1]||(g[1]=y=>i.value=y),placeholder:"Enter your password",required:"",class:"px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"},null,512),[[yt,i.value]])]),A("button",{type:"submit",disabled:r.value,class:"w-full py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors relative"},[r.value?(ne(),ue("span",XR,g[4]||(g[4]=[A("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[A("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),A("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)]))):Pt("",!0),A("span",{class:Tt({"opacity-0":r.value})},"Sign In",2)],8,QR),o.value?(ne(),ue("div",YR,Oe(o.value),1)):Pt("",!0),g[5]||(g[5]=A("div",{class:"mt-6 text-center space-y-1"},[A("p",{class:"text-gray-600 text-sm"},"Demo credentials:"),A("p",{class:"text-gray-600 text-sm"},"Email: aleenaisadmin@gmail.com"),A("p",{class:"text-gray-600 text-sm"},"Password: 123456")],-1))],32)])]))}},ZR=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},eP={},tP={class:"p-6"};function nP(t,e){return ne(),ue("div",tP,e[0]||(e[0]=[A("h1",{class:"text-2xl font-semibold text-gray-800"},"Dashboard",-1),A("div",{class:"mt-6"},[A("p",{class:"text-gray-600"},"Welcome to your dashboard")],-1)]))}const rP=ZR(eP,[["render",nP]]);var sP=Object.defineProperty,Fp=Object.getOwnPropertySymbols,iP=Object.prototype.hasOwnProperty,oP=Object.prototype.propertyIsEnumerable,Up=(t,e,n)=>e in t?sP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Jy=(t,e)=>{for(var n in e||(e={}))iP.call(e,n)&&Up(t,n,e[n]);if(Fp)for(var n of Fp(e))oP.call(e,n)&&Up(t,n,e[n]);return t},Al=t=>typeof t=="function",Cl=t=>typeof t=="string",Zy=t=>Cl(t)&&t.trim().length>0,aP=t=>typeof t=="number",qr=t=>typeof t>"u",to=t=>typeof t=="object"&&t!==null,lP=t=>Tn(t,"tag")&&Zy(t.tag),ev=t=>window.TouchEvent&&t instanceof TouchEvent,tv=t=>Tn(t,"component")&&nv(t.component),cP=t=>Al(t)||to(t),nv=t=>!qr(t)&&(Cl(t)||cP(t)||tv(t)),Bp=t=>to(t)&&["height","width","right","left","top","bottom"].every(e=>aP(t[e])),Tn=(t,e)=>(to(t)||Al(t))&&e in t,uP=(t=>()=>t++)(0);function dc(t){return ev(t)?t.targetTouches[0].clientX:t.clientX}function $p(t){return ev(t)?t.targetTouches[0].clientY:t.clientY}var hP=t=>{qr(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},yo=t=>tv(t)?yo(t.component):lP(t)?Gn({render(){return t}}):typeof t=="string"?t:Re(St(t)),dP=t=>{if(typeof t=="string")return t;const e=Tn(t,"props")&&to(t.props)?t.props:{},n=Tn(t,"listeners")&&to(t.listeners)?t.listeners:{};return{component:yo(t),props:e,listeners:n}},fP=()=>typeof window<"u",ph=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(r=>r(e))}},pP=t=>["on","off","emit"].every(e=>Tn(t,e)&&Al(t[e])),Lt;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Lt||(Lt={}));var ja;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(ja||(ja={}));var Ft;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Ft||(Ft={}));var rn="Vue-Toastification",Jt={type:{type:String,default:Lt.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},rv={type:Jt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},ha={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Jt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},nu={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},sv={transition:{type:[Object,String],default:`${rn}__bounce`}},gP={position:{type:String,default:ja.TOP_RIGHT},draggable:Jt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Jt.trueBoolean,pauseOnHover:Jt.trueBoolean,closeOnClick:Jt.trueBoolean,timeout:nu.timeout,hideProgressBar:nu.hideProgressBar,toastClassName:Jt.classNames,bodyClassName:Jt.classNames,icon:rv.customIcon,closeButton:ha.component,closeButtonClassName:ha.classNames,showCloseButtonOnHover:ha.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new ph}},mP={id:{type:[String,Number],required:!0,default:0},type:Jt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},_P={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Jt.trueBoolean,maxToasts:{type:Number,default:20},transition:sv.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:Jt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Bn={CORE_TOAST:gP,TOAST:mP,CONTAINER:_P,PROGRESS_BAR:nu,ICON:rv,TRANSITION:sv,CLOSE_BUTTON:ha},iv=Gn({name:"VtProgressBar",props:Bn.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${rn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function yP(t,e){return ne(),ue("div",{style:ro(t.style),class:Tt(t.cpClass)},null,6)}iv.render=yP;var vP=iv,ov=Gn({name:"VtCloseButton",props:Bn.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?yo(this.component):"button"},classes(){const t=[`${rn}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),EP=Kt(" × ");function wP(t,e){return ne(),tn(mu(t.buttonComponent),Za({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:_r(()=>[EP]),_:1},16,["aria-label","class"])}ov.render=wP;var TP=ov,av={},IP={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},bP=A("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),AP=[bP];function CP(t,e){return ne(),ue("svg",IP,AP)}av.render=CP;var SP=av,lv={},RP={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},PP=A("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),xP=[PP];function kP(t,e){return ne(),ue("svg",RP,xP)}lv.render=kP;var jp=lv,cv={},VP={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},DP=A("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),OP=[DP];function NP(t,e){return ne(),ue("svg",VP,OP)}cv.render=NP;var MP=cv,uv={},LP={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},FP=A("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),UP=[FP];function BP(t,e){return ne(),ue("svg",LP,UP)}uv.render=BP;var $P=uv,hv=Gn({name:"VtIcon",props:Bn.ICON,computed:{customIconChildren(){return Tn(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Cl(this.customIcon)?this.trimValue(this.customIcon):Tn(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return Tn(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:nv(this.customIcon)?yo(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Lt.DEFAULT]:jp,[Lt.INFO]:jp,[Lt.SUCCESS]:SP,[Lt.ERROR]:$P,[Lt.WARNING]:MP}[this.type]},iconClasses(){const t=[`${rn}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return Zy(t)?t.trim():e}}});function jP(t,e){return ne(),tn(mu(t.component),{class:Tt(t.iconClasses)},{default:_r(()=>[Kt(Oe(t.customIconChildren),1)]),_:1},8,["class"])}hv.render=jP;var HP=hv,dv=Gn({name:"VtToast",components:{ProgressBar:vP,CloseButton:TP,Icon:HP},inheritAttrs:!1,props:Object.assign({},Bn.CORE_TOAST,Bn.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${rn}__toast`,`${rn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${rn}__toast--rtl`),t},bodyClasses(){return[`${rn}__toast-${Cl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Bp(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:Tn,getVueComponentFromObj:yo,closeToast(){this.eventBus.emit(Ft.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:dc(t),y:$p(t)},this.dragStart=dc(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:dc(t),y:$p(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Bp(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),qP=["role"];function zP(t,e){const n=bi("Icon"),r=bi("CloseButton"),s=bi("ProgressBar");return ne(),ue("div",{class:Tt(t.classes),style:ro(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(ne(),tn(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):Pt("v-if",!0),A("div",{role:t.accessibility.toastRole||"alert",class:Tt(t.bodyClasses)},[typeof t.content=="string"?(ne(),ue(Fe,{key:0},[Kt(Oe(t.content),1)],2112)):(ne(),tn(mu(t.getVueComponentFromObj(t.content)),Za({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},G0(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,qP),t.closeButton?(ne(),tn(r,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:wa(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Pt("v-if",!0),t.timeout?(ne(),tn(s,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Pt("v-if",!0)],38)}dv.render=zP;var KP=dv,fv=Gn({name:"VtTransition",props:Bn.TRANSITION,emits:["leave"],methods:{hasProp:Tn,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function WP(t,e){return ne(),tn(ow,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:_r(()=>[W0(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}fv.render=WP;var GP=fv,pv=Gn({name:"VueToastification",devtools:{hide:!0},components:{Toast:KP,VtTransition:GP},props:Object.assign({},Bn.CORE_TOAST,Bn.CONTAINER,Bn.TRANSITION),data(){return{count:0,positions:Object.values(ja),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Ft.ADD,this.addToast),t.on(Ft.CLEAR,this.clearToasts),t.on(Ft.DISMISS,this.dismissToast),t.on(Ft.UPDATE,this.updateToast),t.on(Ft.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){Al(t)&&(t=await t()),hP(this.$el),t.appendChild(this.$el)},setToast(t){qr(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=dP(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!qr(e)&&!qr(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){qr(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${rn}__container`,t].concat(this.defaults.containerClassName)}}});function QP(t,e){const n=bi("Toast"),r=bi("VtTransition");return ne(),ue("div",null,[(ne(!0),ue(Fe,null,Nn(t.positions,s=>(ne(),ue("div",{key:s},[Qe(r,{transition:t.defaults.transition,class:Tt(t.getClasses(s))},{default:_r(()=>[(ne(!0),ue(Fe,null,Nn(t.getPositionToasts(s),i=>(ne(),tn(n,Za({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}pv.render=QP;var XP=pv,Hp=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new ph;e&&Qa(()=>{const i=om(XP,Jy({},t)),o=i.mount(document.createElement("div")),l=t.onMounted;if(qr(l)||l(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${rn}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const r=(i,o)=>{const l=Object.assign({},{id:uP(),type:Lt.DEFAULT},o,{content:i});return n.emit(Ft.ADD,l),l.id};r.clear=()=>n.emit(Ft.CLEAR,void 0),r.updateDefaults=i=>{n.emit(Ft.UPDATE_DEFAULTS,i)},r.dismiss=i=>{n.emit(Ft.DISMISS,i)};function s(i,{content:o,options:l},c=!1){const u=Object.assign({},l,{content:o});n.emit(Ft.UPDATE,{id:i,options:u,create:c})}return r.update=s,r.success=(i,o)=>r(i,Object.assign({},o,{type:Lt.SUCCESS})),r.info=(i,o)=>r(i,Object.assign({},o,{type:Lt.INFO})),r.error=(i,o)=>r(i,Object.assign({},o,{type:Lt.ERROR})),r.warning=(i,o)=>r(i,Object.assign({},o,{type:Lt.WARNING})),r},YP=()=>{const t=()=>console.warn(`[${rn}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function gv(t){return fP()?pP(t)?Hp({eventBus:t},!1):Hp(t,!0):YP()}var mv=Symbol("VueToastification"),_v=new ph,JP=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=gv(Jy({eventBus:_v},e));t.provide(mv,n)},yv=t=>{const e=Xg()?Gt(mv,void 0):void 0;return e||gv(_v)},ZP=JP;const e2={class:"p-6 bg-gray-50 min-h-[90vh] overflow-y-scroll"},t2={class:"bg-white rounded-lg shadow-sm"},n2={key:0,class:"px-6 py-12"},r2={key:1,class:"px-6 py-12"},s2={key:2,class:"overflow-x-auto"},i2={class:"min-w-full divide-y divide-gray-200"},o2={class:"bg-white divide-y divide-gray-200"},a2={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},l2={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},c2={class:"px-6 py-4 whitespace-nowrap"},u2={class:"flex flex-wrap gap-2"},h2={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},d2={class:"space-y-1"},f2={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},p2={class:"flex gap-4"},g2=["onClick"],m2=["onClick"],_2={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},y2={class:"bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"},v2={class:"grid grid-cols-2 gap-4"},E2=["id","value"],w2=["for"],T2={class:"grid grid-cols-3 gap-4"},I2={class:"flex justify-end gap-3 pt-4 border-t border-gray-200"},b2=["disabled"],A2={key:0,class:"animate-spin rounded-full h-4 w-4 border-2 border-white"},C2={key:1,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},S2={class:"bg-white rounded-lg shadow-xl max-w-md w-full"},R2={class:"p-6"},P2={class:"text-gray-600"},x2={class:"px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-lg"},k2={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},V2={class:"bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"},D2={class:"grid grid-cols-2 gap-4"},O2=["id","value"],N2=["for"],M2={class:"grid grid-cols-3 gap-4"},L2={class:"flex justify-end gap-3 pt-4 border-t border-gray-200"},F2=["disabled"],U2={key:0,class:"animate-spin rounded-full h-4 w-4 border-2 border-white"},B2={__name:"BranchesView",setup(t){const e=yv(),n=Pe(!1),r=Pe(!1),s=Pe(!1),i=Pe(!1),o=Pe(!1),l=Pe(!1),c=Pe(null),u=Pe(null),d=Pe([]),p=Pe([]),g=Pe({}),y=$s({name:"",location:"",selectedServiceIds:[],slots:{morning:0,noon:0,evening:0}}),x=(I,_=null)=>d.value.some(v=>v.name.toLowerCase()===I.toLowerCase()&&v.id!==_),D=async()=>{n.value=!0;try{await Promise.all([q(),O()])}catch(I){console.error("Error loading data:",I)}finally{n.value=!1}},O=async()=>{r.value=!0;try{const I=await tu(Ni(en,"branches"));d.value=I.docs.map(_=>{const v=_.data(),z=v.serviceIds.map(ve=>g.value[ve]);return{id:_.id,name:v.name,location:v.location,services:z,slots:v.slots,createdAt:v.createdAt}})}catch(I){console.error("Error fetching branches:",I),e.error("Error loading branches. Please try again.")}finally{r.value=!1}},q=async()=>{g.value={};try{const _=(await tu(Ni(en,"services"))).docs.map(v=>{const z=v.data();return{id:v.id,name:z.name,type:z.type,badgeClass:C(z.type)}});p.value=_,g.value=_.reduce((v,z)=>(v[z.id]=z,v),{})}catch(I){console.error("Error fetching services:",I),e.error("Error loading services. Please try again.")}},$=async()=>{if(y.name&&y.location&&y.selectedServiceIds.length>0){if(x(y.name)){e.error("A branch with this name already exists");return}s.value=!0;try{const I={name:y.name,location:y.location,serviceIds:[...y.selectedServiceIds],slots:{...y.slots},createdAt:new Date};await Qy(Ni(en,"branches"),I),await O(),E(),e.success("Branch created successfully!")}catch(I){console.error("Error creating branch:",I),e.error("Error creating branch. Please try again.")}finally{s.value=!1}}else e.warning("Please fill in all required fields and select at least one service.")},N=I=>{c.value=I,l.value=!0},k=async()=>{try{await Gy(Jr(en,"branches",c.value.id)),d.value=d.value.filter(I=>I.id!==c.value.id),e.success("Branch deleted successfully!"),l.value=!1,c.value=null}catch(I){console.error("Error deleting branch:",I),e.error("Error deleting branch. Please try again.")}},se=()=>{console.log("Opening create form..."),i.value=!0},Q=I=>{u.value={id:I.id,name:I.name,location:I.location,selectedServiceIds:I.services.filter(_=>_).map(_=>_.id),slots:{morning:parseInt(I.slots.morning)||0,noon:parseInt(I.slots.noon)||0,evening:parseInt(I.slots.evening)||0}},o.value=!0},S=()=>{o.value=!1,u.value=null},w=async()=>{if(u.value.name&&u.value.location&&u.value.selectedServiceIds.length>0){if(x(u.value.name,u.value.id)){e.error("A branch with this name already exists");return}s.value=!0;try{const I=Jr(en,"branches",u.value.id),_=u.value.selectedServiceIds.filter(Boolean),v={name:u.value.name,location:u.value.location,serviceIds:_,slots:{morning:parseInt(u.value.slots.morning)||0,noon:parseInt(u.value.slots.noon)||0,evening:parseInt(u.value.slots.evening)||0}};await Wy(I,v),await O(),S(),e.success("Branch updated successfully!")}catch(I){console.error("Error updating branch:",I),e.error("Error updating branch. Please try again.")}finally{s.value=!1}}else e.warning("Please fill in all required fields and select at least one service.")},E=()=>{i.value=!1,Object.assign(y,{name:"",location:"",selectedServiceIds:[],slots:{morning:0,noon:0,evening:0}})},C=I=>({basic:"bg-blue-100 text-blue-800",premium:"bg-green-100 text-green-800",deluxe:"bg-purple-100 text-purple-800"})[I.toLowerCase()]||"bg-gray-100 text-gray-800";return oo(D),(I,_)=>{var v;return ne(),ue(Fe,null,[A("div",e2,[A("div",{class:"flex justify-between items-center mb-6"},[_[14]||(_[14]=Tc('<div class="flex items-center gap-3"><div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div><h1 class="text-2xl font-semibold text-gray-900">Branch Management</h1></div>',1)),A("button",{onClick:se,class:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"},_[13]||(_[13]=[A("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),Kt(" Create Branch ")]))]),A("div",t2,[_[18]||(_[18]=A("div",{class:"p-6 border-b border-gray-200"},[A("h2",{class:"text-xl fontopenEditForm-semibold text-gray-900"},"All Branches"),A("p",{class:"text-gray-600 mt-1"},"Manage your branch locations and services")],-1)),n.value||r.value?(ne(),ue("div",n2,_[15]||(_[15]=[A("div",{class:"flex flex-col items-center justify-center"},[A("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),A("p",{class:"mt-4 text-gray-600"},"Loading branches...")],-1)]))):d.value.length===0?(ne(),ue("div",r2,_[16]||(_[16]=[Tc('<div class="flex flex-col items-center justify-center"><svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><h3 class="mt-4 text-lg font-medium text-gray-900">No branches found</h3><p class="mt-1 text-gray-600">Get started by creating your first branch</p></div>',1)]))):(ne(),ue("div",s2,[A("table",i2,[_[17]||(_[17]=A("thead",{class:"bg-gray-50"},[A("tr",null,[A("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),A("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Location"),A("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Services"),A("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Slots"),A("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Actions")])],-1)),A("tbody",o2,[(ne(!0),ue(Fe,null,Nn(d.value,z=>(ne(),ue("tr",{key:z.id},[A("td",a2,Oe(z.name),1),A("td",l2,Oe(z.location),1),A("td",c2,[A("div",u2,[(ne(!0),ue(Fe,null,Nn(z.services,ve=>(ne(),ue("span",{key:ve==null?void 0:ve.id,class:Tt([ve==null?void 0:ve.badgeClass,"px-2 py-1 rounded-full text-xs font-medium"])},Oe(ve==null?void 0:ve.name),3))),128))])]),A("td",h2,[A("div",d2,[A("div",null,"Morning: "+Oe(z.slots.morning),1),A("div",null,"Noon: "+Oe(z.slots.noon),1),A("div",null,"Evening: "+Oe(z.slots.evening),1)])]),A("td",f2,[A("div",p2,[A("button",{onClick:ve=>Q(z),class:"text-blue-600 hover:text-blue-900"}," Edit ",8,g2),A("button",{onClick:ve=>N(z),class:"text-red-600 hover:text-red-900"}," Delete ",8,m2)])])]))),128))])])]))]),i.value?(ne(),ue("div",_2,[A("div",y2,[A("div",{class:"p-6 border-b border-gray-200"},[A("div",{class:"flex justify-between items-center"},[_[20]||(_[20]=A("h3",{class:"text-xl font-semibold text-gray-900"},"Create New Branch",-1)),A("button",{onClick:E,class:"text-gray-400 hover:text-gray-600 transition-colors"},_[19]||(_[19]=[A("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))])]),A("form",{onSubmit:wa($,["prevent"]),class:"p-6 space-y-6"},[A("div",null,[_[21]||(_[21]=A("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Branch Name",-1)),Ye(A("input",{"onUpdate:modelValue":_[0]||(_[0]=z=>y.name=z),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter branch name"},null,512),[[yt,y.name]])]),A("div",null,[_[22]||(_[22]=A("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Location",-1)),Ye(A("input",{"onUpdate:modelValue":_[1]||(_[1]=z=>y.location=z),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter branch location"},null,512),[[yt,y.location]])]),A("div",null,[_[23]||(_[23]=A("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Available Services",-1)),A("div",v2,[(ne(!0),ue(Fe,null,Nn(p.value,z=>(ne(),ue("div",{key:z.id,class:"flex items-center"},[Ye(A("input",{id:z.id,"onUpdate:modelValue":_[2]||(_[2]=ve=>y.selectedServiceIds=ve),value:z.id,type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"},null,8,E2),[[jd,y.selectedServiceIds]]),A("label",{for:z.id,class:"ml-2 text-sm text-gray-700"},[Kt(Oe(z.name)+" ",1),A("span",{class:Tt([z.badgeClass,"ml-2 px-2 py-0.5 rounded-full text-xs font-medium"])},Oe(z.type),3)],8,w2)]))),128))])]),A("div",null,[_[27]||(_[27]=A("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Slot Configuration",-1)),A("div",T2,[A("div",null,[_[24]||(_[24]=A("label",{class:"block text-xs font-medium text-gray-600 mb-1"},"Morning Slots",-1)),Ye(A("input",{"onUpdate:modelValue":_[3]||(_[3]=z=>y.slots.morning=z),type:"number",min:"0",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[yt,y.slots.morning,void 0,{number:!0}]])]),A("div",null,[_[25]||(_[25]=A("label",{class:"block text-xs font-medium text-gray-600 mb-1"},"Noon Slots",-1)),Ye(A("input",{"onUpdate:modelValue":_[4]||(_[4]=z=>y.slots.noon=z),type:"number",min:"0",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[yt,y.slots.noon,void 0,{number:!0}]])]),A("div",null,[_[26]||(_[26]=A("label",{class:"block text-xs font-medium text-gray-600 mb-1"},"Evening Slots",-1)),Ye(A("input",{"onUpdate:modelValue":_[5]||(_[5]=z=>y.slots.evening=z),type:"number",min:"0",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[yt,y.slots.evening,void 0,{number:!0}]])])])]),A("div",I2,[A("button",{type:"button",onClick:E,class:"px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"}," Cancel "),A("button",{type:"submit",disabled:s.value,class:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"},[s.value?(ne(),ue("div",A2)):Pt("",!0),Kt(" "+Oe(s.value?"Creating...":"Create Branch"),1)],8,b2)])],32)])])):Pt("",!0),l.value?(ne(),ue("div",C2,[A("div",S2,[A("div",R2,[_[28]||(_[28]=A("h3",{class:"text-lg font-semibold text-gray-900 mb-2"},"Delete Branch",-1)),A("p",P2,' Are you sure you want to delete branch "'+Oe((v=c.value)==null?void 0:v.name)+'"? This action cannot be undone. ',1)]),A("div",x2,[A("button",{onClick:_[6]||(_[6]=z=>l.value=!1),class:"px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"}," Cancel "),A("button",{onClick:k,class:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"}," Delete Branch ")])])])):Pt("",!0)]),o.value?(ne(),ue("div",k2,[A("div",V2,[A("div",{class:"p-6 border-b border-gray-200"},[A("div",{class:"flex justify-between items-center"},[_[30]||(_[30]=A("h3",{class:"text-xl font-semibold text-gray-900"},"Edit Branch",-1)),A("button",{onClick:S,class:"text-gray-400 hover:text-gray-600 transition-colors"},_[29]||(_[29]=[A("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))])]),A("form",{onSubmit:wa(w,["prevent"]),class:"p-6 space-y-6"},[A("div",null,[_[31]||(_[31]=A("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Branch Name",-1)),Ye(A("input",{"onUpdate:modelValue":_[7]||(_[7]=z=>u.value.name=z),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter branch name"},null,512),[[yt,u.value.name]])]),A("div",null,[_[32]||(_[32]=A("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Location",-1)),Ye(A("input",{"onUpdate:modelValue":_[8]||(_[8]=z=>u.value.location=z),type:"text",required:"",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Enter branch location"},null,512),[[yt,u.value.location]])]),A("div",null,[_[33]||(_[33]=A("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Available Services",-1)),A("div",D2,[(ne(!0),ue(Fe,null,Nn(p.value,z=>(ne(),ue("div",{key:z.id,class:"flex items-center"},[Ye(A("input",{id:"edit-"+z.id,"onUpdate:modelValue":_[9]||(_[9]=ve=>u.value.selectedServiceIds=ve),value:z.id,type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"},null,8,O2),[[jd,u.value.selectedServiceIds]]),A("label",{for:"edit-"+z.id,class:"ml-2 text-sm text-gray-700"},[Kt(Oe(z.name)+" ",1),A("span",{class:Tt([z.badgeClass,"ml-2 px-2 py-0.5 rounded-full text-xs font-medium"])},Oe(z.type),3)],8,N2)]))),128))])]),A("div",null,[_[37]||(_[37]=A("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Slot Configuration",-1)),A("div",M2,[A("div",null,[_[34]||(_[34]=A("label",{class:"block text-xs font-medium text-gray-600 mb-1"},"Morning Slots",-1)),Ye(A("input",{"onUpdate:modelValue":_[10]||(_[10]=z=>u.value.slots.morning=z),type:"number",min:"0",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[yt,u.value.slots.morning,void 0,{number:!0}]])]),A("div",null,[_[35]||(_[35]=A("label",{class:"block text-xs font-medium text-gray-600 mb-1"},"Noon Slots",-1)),Ye(A("input",{"onUpdate:modelValue":_[11]||(_[11]=z=>u.value.slots.noon=z),type:"number",min:"0",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[yt,u.value.slots.noon,void 0,{number:!0}]])]),A("div",null,[_[36]||(_[36]=A("label",{class:"block text-xs font-medium text-gray-600 mb-1"},"Evening Slots",-1)),Ye(A("input",{"onUpdate:modelValue":_[12]||(_[12]=z=>u.value.slots.evening=z),type:"number",min:"0",class:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"},null,512),[[yt,u.value.slots.evening,void 0,{number:!0}]])])])]),A("div",L2,[A("button",{type:"button",onClick:S,class:"px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"}," Cancel "),A("button",{type:"submit",disabled:s.value,class:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"},[s.value?(ne(),ue("div",U2)):Pt("",!0),Kt(" "+Oe(s.value?"Saving...":"Save Changes"),1)],8,F2)])],32)])])):Pt("",!0)],64)}}},$2={class:"max-w-7xl min-h-[80vh]"},j2={class:"grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8"},H2={class:"bg-gray-50 rounded-xl overflow-hidden"},q2={class:"text-lg text-indigo-600"},z2={key:0,class:"p-5"},K2={class:"mb-5"},W2={class:"mb-5"},G2={class:"mb-5"},Q2={class:"mb-5"},X2=["disabled"],Y2={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},J2={class:"min-h-96"},Z2={class:"flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4"},ex={class:"w-full md:w-80"},tx={key:0,class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"},nx={key:1,class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-h-[calc(100vh-300px)] overflow-y-scroll"},rx={class:"flex justify-between items-start mb-3"},sx={class:"text-base font-semibold text-gray-900 m-0 mb-1.5"},ix={class:"flex gap-2"},ox=["onClick"],ax=["onClick"],lx={class:"text-2xl font-bold text-gray-900 mb-2"},cx={class:"text-gray-600 text-sm leading-relaxed"},ux={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},hx={class:"bg-white rounded-lg shadow-xl max-w-md w-full"},dx={class:"p-6"},fx={class:"text-gray-600"},px={class:"px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-lg"},gx={__name:"ServicesView",setup(t){const e=yv(),n=Pe(!0),r=Pe(!1),s=Pe(!0),i=Pe(""),o=Pe([]),l=Pe(!1),c=Pe(null),u=Pe(!1),d=Pe(null),p=$s({name:"",type:"",price:"",description:""}),g=Be(()=>i.value?o.value.filter(N=>N.name.toLowerCase().includes(i.value.toLowerCase())||N.description.toLowerCase().includes(i.value.toLowerCase())):o.value),y=async()=>{n.value=!0;try{const N=await tu(Ni(en,"services"));o.value=N.docs.map(k=>({id:k.id,...k.data()}))}catch(N){console.error("Error fetching services:",N),e.error("Failed to load services. Please try again.")}finally{n.value=!1}},x=async()=>{if(r.value=!0,!p.name||!p.type||!p.price){e.warning("Please fill in all required fields"),r.value=!1;return}if(o.value.find(k=>k.name.toLowerCase()===p.name.toLowerCase()&&k.type.toLowerCase()===p.type.toLowerCase())){e.warning(`A ${p.type} service with name "${p.name}" already exists`),r.value=!1;return}try{const k={name:p.name,type:p.type,price:parseFloat(p.price),createdAt:new Date,description:p.description||"No description provided"},se=await Qy(Ni(en,"services"),k);o.value.push({id:se.id,...k}),Object.assign(p,{name:"",type:"",price:"",description:""}),s.value=!0,e.success("Service created successfully!")}catch(k){console.error("Error creating service:",k),e.error("Failed to create service. Please try again.")}finally{r.value=!1}},D=N=>{l.value=!0,c.value=N.id,s.value=!0,Object.assign(p,{name:N.name,type:N.type,price:N.price,description:N.description||""})},O=async()=>{if(r.value=!0,!p.name||!p.type||!p.price){e.warning("Please fill in all required fields"),r.value=!1;return}if(o.value.find(k=>k.id!==c.value&&k.name.toLowerCase()===p.name.toLowerCase()&&k.type.toLowerCase()===p.type.toLowerCase())){e.warning(`A ${p.type} service with name "${p.name}" already exists`),r.value=!1;return}try{const k=Jr(en,"services",c.value),se={name:p.name,type:p.type,price:parseFloat(p.price),description:p.description||"No description provided",updatedAt:new Date};await Wy(k,se);const Q=o.value.findIndex(S=>S.id===c.value);Q!==-1&&(o.value[Q]={id:c.value,...se}),Object.assign(p,{name:"",type:"",price:"",description:""}),l.value=!1,c.value=null,s.value=!0,e.success("Service updated successfully!")}catch(k){console.error("Error updating service:",k),e.error("Failed to update service. Please try again.")}finally{r.value=!1}},q=N=>{d.value=N,u.value=!0},$=async()=>{try{await Gy(Jr(en,"services",d.value.id)),o.value=o.value.filter(N=>N.id!==d.value.id),e.success("Service deleted successfully!"),u.value=!1,d.value=null}catch(N){console.error("Error deleting service:",N),e.error("Failed to delete service. Please try again.")}};return oo(()=>{y()}),(N,k)=>{var se;return ne(),ue("div",$2,[k[17]||(k[17]=A("div",{class:"flex justify-between items-start mb-8"},[A("div",null,[A("h1",{class:"text-3xl font-semibold text-gray-900 m-0"},"Service Configuration"),A("p",{class:"text-sm text-gray-500 mt-1 mb-0"},"Manage and configure your offered services")])],-1)),A("div",j2,[A("div",H2,[A("div",{onClick:k[0]||(k[0]=Q=>s.value=!s.value),class:"px-5 py-4 bg-white border-b border-gray-200 cursor-pointer flex items-center gap-2.5 font-medium text-gray-700"},[A("span",q2,Oe(s.value?"−":"+"),1),Kt(" "+Oe(l.value?"Edit Service":"Create New Service"),1)]),s.value?(ne(),ue("div",z2,[A("div",K2,[k[8]||(k[8]=A("label",{for:"serviceName",class:"block mb-1.5 font-medium text-gray-700 text-sm"},"Service Name",-1)),Ye(A("input",{id:"serviceName","onUpdate:modelValue":k[1]||(k[1]=Q=>p.name=Q),type:"text",placeholder:"Enter service name",class:"w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"},null,512),[[yt,p.name]])]),A("div",W2,[k[10]||(k[10]=A("label",{for:"serviceType",class:"block mb-1.5 font-medium text-gray-700 text-sm"},"Service Type",-1)),Ye(A("select",{id:"serviceType","onUpdate:modelValue":k[2]||(k[2]=Q=>p.type=Q),class:"w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"},k[9]||(k[9]=[A("option",{value:""},"Select service type",-1),A("option",{value:"premium"},"Premium",-1),A("option",{value:"basic"},"Basic",-1),A("option",{value:"deluxe"},"Deluxe",-1)]),512),[[dw,p.type]])]),A("div",G2,[k[11]||(k[11]=A("label",{for:"price",class:"block mb-1.5 font-medium text-gray-700 text-sm"},"Price (₹)",-1)),Ye(A("input",{id:"price","onUpdate:modelValue":k[3]||(k[3]=Q=>p.price=Q),type:"number",placeholder:"0.00",class:"w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"},null,512),[[yt,p.price]])]),A("div",Q2,[k[12]||(k[12]=A("label",{for:"description",class:"block mb-1.5 font-medium text-gray-700 text-sm"},[Kt(" Description "),A("span",{class:"text-gray-400 font-normal"},"(optional)")],-1)),Ye(A("textarea",{id:"description","onUpdate:modelValue":k[4]||(k[4]=Q=>p.description=Q),placeholder:"Enter service description...",rows:"3",class:"w-full px-3 py-3 border border-gray-300 rounded-md text-sm resize-y min-h-20 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"},null,512),[[yt,p.description]])]),A("button",{onClick:k[5]||(k[5]=Q=>l.value?O():x()),disabled:r.value,class:"w-full bg-indigo-600 text-white border-none px-3 py-3 rounded-md font-medium cursor-pointer hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"},[r.value?(ne(),ue("svg",Y2,k[13]||(k[13]=[A("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),A("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)]))):Pt("",!0),Kt(" "+Oe(l.value?"Update Service":"Create Service"),1)],8,X2)])):Pt("",!0)]),A("div",J2,[A("div",Z2,[k[14]||(k[14]=A("h2",{class:"text-xl font-semibold text-gray-900 m-0"},"Existing Services",-1)),A("div",ex,[Ye(A("input",{"onUpdate:modelValue":k[6]||(k[6]=Q=>i.value=Q),type:"text",placeholder:"Search services...",class:"w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"},null,512),[[yt,i.value]])])]),n.value?(ne(),ue("div",tx,[(ne(),ue(Fe,null,Nn(6,Q=>A("div",{key:Q,class:"bg-white border border-gray-200 rounded-xl p-5"},k[15]||(k[15]=[Tc('<div class="flex justify-between items-start mb-3"><div class="w-full"><div class="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div><div class="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div></div></div><div class="h-8 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div><div class="h-4 bg-gray-200 rounded w-full animate-pulse"></div>',3)]))),64))])):(ne(),ue("div",nx,[(ne(!0),ue(Fe,null,Nn(g.value,Q=>(ne(),ue("div",{key:Q.id,class:"bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"},[A("div",rx,[A("div",null,[A("h3",sx,Oe(Q.name),1),A("span",{class:Tt(["inline-block px-2 py-1 rounded text-xs font-medium capitalize",{"bg-blue-100 text-blue-800":Q.type.toLowerCase()==="premium","bg-gray-100 text-gray-700":Q.type.toLowerCase()==="basic","bg-pink-100 text-pink-800":Q.type.toLowerCase()==="deluxe"}])},Oe(Q.type),3)]),A("div",ix,[A("button",{onClick:S=>D(Q),class:"bg-transparent border-none p-1.5 cursor-pointer rounded hover:bg-gray-100 transition-colors"}," ✏️ ",8,ox),A("button",{onClick:S=>q(Q),class:"bg-transparent border-none p-1.5 cursor-pointer rounded hover:bg-gray-100 transition-colors"}," 🗑️ ",8,ax)])]),A("div",lx," ₹"+Oe(Q.price.toLocaleString()),1),A("div",cx,Oe(Q.description),1)]))),128))]))])]),u.value?(ne(),ue("div",ux,[A("div",hx,[A("div",dx,[k[16]||(k[16]=A("h3",{class:"text-lg font-semibold text-gray-900 mb-2"},"Delete Service",-1)),A("p",fx,' Are you sure you want to delete service "'+Oe((se=d.value)==null?void 0:se.name)+'"? This action cannot be undone. ',1)]),A("div",px,[A("button",{onClick:k[7]||(k[7]=Q=>u.value=!1),class:"px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"}," Cancel "),A("button",{onClick:$,class:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"}," Delete Service ")])])])):Pt("",!0)])}}},vv=yT({history:Qw("/"),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:JR},{path:"/dashboard",name:"dashboard",component:rP,meta:{requiresAuth:!0}},{path:"/branches",name:"branches",component:B2,meta:{requiresAuth:!0}},{path:"/services",name:"services",component:gx,meta:{requiresAuth:!0}}]});vv.beforeEach((t,e,n)=>{const r=ua.onAuthStateChanged(s=>{t.meta.requiresAuth&&!s?n("/login"):t.path==="/login"&&s?n("/dashboard"):n(),r()})});const gh=om(qR),mx={position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1};gh.use(vv);gh.use(ZP,mx);gh.mount("#app");
