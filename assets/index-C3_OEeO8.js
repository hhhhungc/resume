(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kr(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const q={},xe=[],xt=()=>{},ps=()=>!1,Yn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gr=t=>t.startsWith("onUpdate:"),it=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gs=Object.prototype.hasOwnProperty,H=(t,e)=>gs.call(t,e),R=Array.isArray,we=t=>Wn(t)==="[object Map]",zi=t=>Wn(t)==="[object Set]",j=t=>typeof t=="function",et=t=>typeof t=="string",ge=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",Di=t=>(J(t)||j(t))&&j(t.then)&&j(t.catch),Hi=Object.prototype.toString,Wn=t=>Hi.call(t),vs=t=>Wn(t).slice(8,-1),Ui=t=>Wn(t)==="[object Object]",qr=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$e=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bs=/-(\w)/g,Rt=Vn(t=>t.replace(bs,(e,n)=>n?n.toUpperCase():"")),ys=/\B([A-Z])/g,Ee=Vn(t=>t.replace(ys,"-$1").toLowerCase()),Kn=Vn(t=>t.charAt(0).toUpperCase()+t.slice(1)),fr=Vn(t=>t?`on${Kn(t)}`:""),Qt=(t,e)=>!Object.is(t,e),cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bi=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let La;const Yi=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=et(r)?ks(r):Jr(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(et(t)||J(t))return t}const xs=/;(?![^(]*\))/g,ws=/:([^]+)/,As=/\/\*[^]*?\*\//g;function ks(t){const e={};return t.replace(As,"").split(xs).forEach(n=>{if(n){const r=n.split(ws);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qr(t){let e="";if(et(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=Qr(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Os="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ss=Kr(Os);function Wi(t){return!!t||t===""}const Xt=t=>et(t)?t:t==null?"":R(t)||J(t)&&(t.toString===Hi||!j(t.toString))?JSON.stringify(t,Vi,2):String(t),Vi=(t,e)=>e&&e.__v_isRef?Vi(t,e.value):we(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[ur(r,i)+" =>"]=a,n),{})}:zi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ur(n))}:ge(e)?ur(e):J(e)&&!R(e)&&!Ui(e)?String(e):e,ur=(t,e="")=>{var n;return ge(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Es{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ps(t,e=At){e&&e.active&&e.effects.push(t)}function Cs(){return At}let de;class Zr{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ps(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ne();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Is(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),re()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=qt,n=de;try{return qt=!0,de=this,this._runnings++,Fa(this),this.fn()}finally{ja(this),this._runnings--,de=n,qt=e}}stop(){this.active&&(Fa(this),ja(this),this.onStop&&this.onStop(),this.active=!1)}}function Is(t){return t.value}function Fa(t){t._trackId++,t._depsLength=0}function ja(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ki(t.deps[e],t);t.deps.length=t._depsLength}}function Ki(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let qt=!0,Ar=0;const Gi=[];function ne(){Gi.push(qt),qt=!1}function re(){const t=Gi.pop();qt=t===void 0?!0:t}function ta(){Ar++}function ea(){for(Ar--;!Ar&&kr.length;)kr.shift()()}function Xi(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ki(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const kr=[];function qi(t,e,n){ta();for(const r of t.keys()){let a;r._dirtyLevel<e&&(a??(a=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(a??(a=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&kr.push(r.scheduler)))}ea()}const Ji=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Or=new WeakMap,me=Symbol(""),Sr=Symbol("");function gt(t,e,n){if(qt&&de){let r=Or.get(t);r||Or.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Ji(()=>r.delete(n))),Xi(de,a)}}function $t(t,e,n,r,a,i){const o=Or.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&R(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ge(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":R(t)?qr(n)&&s.push(o.get("length")):(s.push(o.get(me)),we(t)&&s.push(o.get(Sr)));break;case"delete":R(t)||(s.push(o.get(me)),we(t)&&s.push(o.get(Sr)));break;case"set":we(t)&&s.push(o.get(me));break}ta();for(const l of s)l&&qi(l,4);ea()}const Ts=Kr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ge)),$a=Ns();function Ns(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ne(),ta();const r=B(this)[e].apply(this,n);return ea(),re(),r}}),t}function Ms(t){ge(t)||(t=String(t));const e=B(this);return gt(e,"has",t),e.hasOwnProperty(t)}class Zi{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Vs:ro:i?no:eo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=R(e);if(!a){if(o&&H($a,n))return Reflect.get($a,n,r);if(n==="hasOwnProperty")return Ms}const s=Reflect.get(e,n,r);return(ge(n)?Qi.has(n):Ts(n))||(a||gt(e,"get",n),i)?s:vt(s)?o&&qr(n)?s:s.value:J(s)?a?ao(s):aa(s):s}}class to extends Zi{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._isShallow){const l=We(i);if(!Ln(r)&&!We(r)&&(i=B(i),r=B(r)),!R(e)&&vt(i)&&!vt(r))return l?!1:(i.value=r,!0)}const o=R(e)&&qr(n)?Number(n)<e.length:H(e,n),s=Reflect.set(e,n,r,a);return e===B(a)&&(o?Qt(r,i)&&$t(e,"set",n,r):$t(e,"add",n,r)),s}deleteProperty(e,n){const r=H(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&$t(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!ge(n)||!Qi.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",R(e)?"length":me),Reflect.ownKeys(e)}}class Rs extends Zi{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ls=new to,Fs=new Rs,js=new to(!0);const na=t=>t,Gn=t=>Reflect.getPrototypeOf(t);function dn(t,e,n=!1,r=!1){t=t.__v_raw;const a=B(t),i=B(e);n||(Qt(e,i)&&gt(a,"get",e),gt(a,"get",i));const{has:o}=Gn(a),s=r?na:n?oa:Ve;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function mn(t,e=!1){const n=this.__v_raw,r=B(n),a=B(t);return e||(Qt(t,a)&&gt(r,"has",t),gt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function hn(t,e=!1){return t=t.__v_raw,!e&&gt(B(t),"iterate",me),Reflect.get(t,"size",t)}function za(t){t=B(t);const e=B(this);return Gn(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function Da(t,e){e=B(e);const n=B(this),{has:r,get:a}=Gn(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Qt(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function Ha(t){const e=B(this),{has:n,get:r}=Gn(e);let a=n.call(e,t);a||(t=B(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&$t(e,"delete",t,void 0),i}function Ua(){const t=B(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function pn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=e?na:t?oa:Ve;return!t&&gt(s,"iterate",me),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function gn(t,e,n){return function(...r){const a=this.__v_raw,i=B(a),o=we(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),u=n?na:e?oa:Ve;return!e&&gt(i,"iterate",l?Sr:me),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $s(){const t={get(i){return dn(this,i)},get size(){return hn(this)},has:mn,add:za,set:Da,delete:Ha,clear:Ua,forEach:pn(!1,!1)},e={get(i){return dn(this,i,!1,!0)},get size(){return hn(this)},has:mn,add:za,set:Da,delete:Ha,clear:Ua,forEach:pn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return hn(this,!0)},has(i){return mn.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:pn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return mn.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),e[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[t,n,e,r]}const[zs,Ds,Hs,Us]=$s();function ra(t,e){const n=e?t?Us:Hs:t?Ds:zs;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const Bs={get:ra(!1,!1)},Ys={get:ra(!1,!0)},Ws={get:ra(!0,!1)};const eo=new WeakMap,no=new WeakMap,ro=new WeakMap,Vs=new WeakMap;function Ks(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gs(t){return t.__v_skip||!Object.isExtensible(t)?0:Ks(vs(t))}function aa(t){return We(t)?t:ia(t,!1,Ls,Bs,eo)}function Xs(t){return ia(t,!1,js,Ys,no)}function ao(t){return ia(t,!0,Fs,Ws,ro)}function ia(t,e,n,r,a){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Gs(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function ze(t){return We(t)?ze(t.__v_raw):!!(t&&t.__v_isReactive)}function We(t){return!!(t&&t.__v_isReadonly)}function Ln(t){return!!(t&&t.__v_isShallow)}function io(t){return t?!!t.__v_raw:!1}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function qs(t){return Object.isExtensible(t)&&Bi(t,"__v_skip",!0),t}const Ve=t=>J(t)?aa(t):t,oa=t=>J(t)?ao(t):t;class oo{constructor(e,n,r,a){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zr(()=>e(this._value),()=>En(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=B(this);return(!e._cacheable||e.effect.dirty)&&Qt(e._value,e._value=e.effect.run())&&En(e,4),so(e),e.effect._dirtyLevel>=2&&En(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Js(t,e,n=!1){let r,a;const i=j(t);return i?(r=t,a=xt):(r=t.get,a=t.set),new oo(r,a,i||!a,n)}function so(t){var e;qt&&de&&(t=B(t),Xi(de,(e=t.dep)!=null?e:t.dep=Ji(()=>t.dep=void 0,t instanceof oo?t:void 0)))}function En(t,e=4,n){t=B(t);const r=t.dep;r&&qi(r,e)}function vt(t){return!!(t&&t.__v_isRef===!0)}function Xn(t){return Qs(t,!1)}function Qs(t,e){return vt(t)?t:new Zs(t,e)}class Zs{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:Ve(e)}get value(){return so(this),this._value}set value(e){const n=this.__v_isShallow||Ln(e)||We(e);e=n?e:B(e),Qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ve(e),En(this,4))}}function tl(t){return vt(t)?t.value:t}const el={get:(t,e,n)=>tl(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return vt(a)&&!vt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function lo(t){return ze(t)?t:new Proxy(t,el)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jt(t,e,n,r){try{return r?t(...r):t()}catch(a){qn(a,e,n)}}function Et(t,e,n,r){if(j(t)){const a=Jt(t,e,n,r);return a&&Di(a)&&a.catch(i=>{qn(i,e,n)}),a}if(R(t)){const a=[];for(let i=0;i<t.length;i++)a.push(Et(t[i],e,n,r));return a}}function qn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){ne(),Jt(l,null,10,[t,o,s]),re();return}}nl(t,n,a,r)}function nl(t,e,n,r=!0){console.error(t)}let Ke=!1,Er=!1;const lt=[];let Nt=0;const Ae=[];let Vt=null,fe=0;const fo=Promise.resolve();let sa=null;function rl(t){const e=sa||fo;return t?e.then(this?t.bind(this):t):e}function al(t){let e=Nt+1,n=lt.length;for(;e<n;){const r=e+n>>>1,a=lt[r],i=Ge(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function la(t){(!lt.length||!lt.includes(t,Ke&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?lt.push(t):lt.splice(al(t.id),0,t),co())}function co(){!Ke&&!Er&&(Er=!0,sa=fo.then(mo))}function il(t){const e=lt.indexOf(t);e>Nt&&lt.splice(e,1)}function ol(t){R(t)?Ae.push(...t):(!Vt||!Vt.includes(t,t.allowRecurse?fe+1:fe))&&Ae.push(t),co()}function Ba(t,e,n=Ke?Nt+1:0){for(;n<lt.length;n++){const r=lt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;lt.splice(n,1),n--,r()}}}function uo(t){if(Ae.length){const e=[...new Set(Ae)].sort((n,r)=>Ge(n)-Ge(r));if(Ae.length=0,Vt){Vt.push(...e);return}for(Vt=e,fe=0;fe<Vt.length;fe++)Vt[fe]();Vt=null,fe=0}}const Ge=t=>t.id==null?1/0:t.id,sl=(t,e)=>{const n=Ge(t)-Ge(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mo(t){Er=!1,Ke=!0,lt.sort(sl);try{for(Nt=0;Nt<lt.length;Nt++){const e=lt[Nt];e&&e.active!==!1&&Jt(e,null,14)}}finally{Nt=0,lt.length=0,uo(),Ke=!1,sa=null,(lt.length||Ae.length)&&mo()}}function ll(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||q;v&&(a=n.map(w=>et(w)?w.trim():w)),m&&(a=n.map(_s))}let s,l=r[s=fr(e)]||r[s=fr(Rt(e))];!l&&i&&(l=r[s=fr(Ee(e))]),l&&Et(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Et(c,t,6,a)}}function ho(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!j(t)){const l=c=>{const u=ho(c,e,!0);u&&(s=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(J(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>o[l]=null):it(o,i),J(t)&&r.set(t,o),o)}function Jn(t,e){return!t||!Yn(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Ee(e))||H(t,e))}let kt=null,Qn=null;function Fn(t){const e=kt;return kt=t,Qn=t&&t.type.__scopeId||null,e}function Pe(t){Qn=t}function Ce(){Qn=null}function fl(t,e=kt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ti(-1);const i=Fn(e);let o;try{o=t(...a)}finally{Fn(i),r._d&&ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dr(t){const{type:e,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:o,attrs:s,emit:l,render:c,renderCache:u,props:m,data:v,setupState:w,ctx:$,inheritAttrs:M}=t,Y=Fn(t);let A,O;try{if(n.shapeFlag&4){const z=a||r,U=z;A=Tt(c.call(U,z,u,m,w,v,$)),O=s}else{const z=e;A=Tt(z.length>1?z(m,{attrs:s,slots:o,emit:l}):z(m,null)),O=e.props?s:cl(s)}}catch(z){Ue.length=0,qn(z,t,1),A=at(qe)}let C=A;if(O&&M!==!1){const z=Object.keys(O),{shapeFlag:U}=C;z.length&&U&7&&(i&&z.some(Gr)&&(O=ul(O,i)),C=Oe(C,O,!1,!0))}return n.dirs&&(C=Oe(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),A=C,Fn(Y),A}const cl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yn(n))&&((e||(e={}))[n]=t[n]);return e},ul=(t,e)=>{const n={};for(const r in t)(!Gr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ya(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!Jn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ya(r,o,c):!0:!!o;return!1}function Ya(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Jn(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const hl="components";function pl(t,e){return vl(hl,t,!0,e)||t}const gl=Symbol.for("v-ndc");function vl(t,e,n=!0,r=!1){const a=kt||ft;if(a){const i=a.type;{const s=hf(i,!1);if(s&&(s===e||s===Rt(e)||s===Kn(Rt(e))))return i}const o=Wa(a[t]||i[t],e)||Wa(a.appContext[t],e);return!o&&r?i:o}}function Wa(t,e){return t&&(t[e]||t[Rt(e)]||t[Kn(Rt(e))])}const bl=t=>t.__isSuspense;function yl(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):ol(t)}const _l=Symbol.for("v-scx"),xl=()=>In(_l),vn={};function Pn(t,e,n){return po(t,e,n)}function po(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=q){if(e&&i){const F=e;e=(...tt)=>{F(...tt),U()}}const l=ft,c=F=>r===!0?F:be(F,r===!1?1:void 0);let u,m=!1,v=!1;if(vt(t)?(u=()=>t.value,m=Ln(t)):ze(t)?(u=()=>c(t),m=!0):R(t)?(v=!0,m=t.some(F=>ze(F)||Ln(F)),u=()=>t.map(F=>{if(vt(F))return F.value;if(ze(F))return c(F);if(j(F))return Jt(F,l,2)})):j(t)?e?u=()=>Jt(t,l,2):u=()=>(w&&w(),Et(t,l,3,[$])):u=xt,e&&r){const F=u;u=()=>be(F())}let w,$=F=>{w=C.onStop=()=>{Jt(F,l,4),w=C.onStop=void 0}},M;if(er)if($=xt,e?n&&Et(e,l,3,[u(),v?[]:void 0,$]):u(),a==="sync"){const F=xl();M=F.__watcherHandles||(F.__watcherHandles=[])}else return xt;let Y=v?new Array(t.length).fill(vn):vn;const A=()=>{if(!(!C.active||!C.dirty))if(e){const F=C.run();(r||m||(v?F.some((tt,mt)=>Qt(tt,Y[mt])):Qt(F,Y)))&&(w&&w(),Et(e,l,3,[F,Y===vn?void 0:v&&Y[0]===vn?[]:Y,$]),Y=F)}else C.run()};A.allowRecurse=!!e;let O;a==="sync"?O=A:a==="post"?O=()=>pt(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),O=()=>la(A));const C=new Zr(u,xt,O),z=Cs(),U=()=>{C.stop(),z&&Xr(z.effects,C)};return e?n?A():Y=C.run():a==="post"?pt(C.run.bind(C),l&&l.suspense):C.run(),M&&M.push(U),U}function wl(t,e,n){const r=this.proxy,a=et(t)?t.includes(".")?go(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=rn(this),s=po(a,i.bind(r),n);return o(),s}function go(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function be(t,e=1/0,n){if(e<=0||!J(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,vt(t))be(t.value,e,n);else if(R(t))for(let r=0;r<t.length;r++)be(t[r],e,n);else if(zi(t)||we(t))t.forEach(r=>{be(r,e,n)});else if(Ui(t))for(const r in t)be(t[r],e,n);return t}function oe(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(ne(),Et(l,n,8,[t.el,s,t,e]),re())}}/*! #__NO_SIDE_EFFECTS__ */function Al(t,e){return j(t)?it({name:t.name},e,{setup:t}):t}const Cn=t=>!!t.type.__asyncLoader,vo=t=>t.type.__isKeepAlive;function kl(t,e){bo(t,"a",e)}function Ol(t,e){bo(t,"da",e)}function bo(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Zn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)vo(a.parent.vnode)&&Sl(r,e,n,a),a=a.parent}}function Sl(t,e,n,r){const a=Zn(e,t,r,!0);yo(()=>{Xr(r[e],a)},n)}function Zn(t,e,n=ft,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ne();const s=rn(n),l=Et(e,n,t,o);return s(),re(),l});return r?a.unshift(i):a.push(i),i}}const Ut=t=>(e,n=ft)=>(!er||t==="sp")&&Zn(t,(...r)=>e(...r),n),El=Ut("bm"),Pl=Ut("m"),Cl=Ut("bu"),Il=Ut("u"),Tl=Ut("bum"),yo=Ut("um"),Nl=Ut("sp"),Ml=Ut("rtg"),Rl=Ut("rtc");function Ll(t,e=ft){Zn("ec",t,e)}function Xe(t,e,n,r){let a;const i=n;if(R(t)||et(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i)}else if(J(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i)}}else a=[];return a}const Pr=t=>t?Mo(t)?da(t)||t.proxy:Pr(t.parent):null,De=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pr(t.parent),$root:t=>Pr(t.root),$emit:t=>t.emit,$options:t=>fa(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,la(t.update)}),$nextTick:t=>t.n||(t.n=rl.bind(t.proxy)),$watch:t=>wl.bind(t)}),mr=(t,e)=>t!==q&&!t.__isScriptSetup&&H(t,e),Fl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(mr(r,e))return o[e]=1,r[e];if(a!==q&&H(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,i[e];if(n!==q&&H(n,e))return o[e]=4,n[e];Cr&&(o[e]=0)}}const u=De[e];let m,v;if(u)return e==="$attrs"&&gt(t.attrs,"get",""),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==q&&H(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,H(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return mr(a,e)?(a[e]=n,!0):r!==q&&H(r,e)?(r[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==q&&H(t,o)||mr(e,o)||(s=i[0])&&H(s,o)||H(r,o)||H(De,o)||H(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Va(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cr=!0;function jl(t){const e=fa(t),n=t.proxy,r=t.ctx;Cr=!1,e.beforeCreate&&Ka(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:w,updated:$,activated:M,deactivated:Y,beforeDestroy:A,beforeUnmount:O,destroyed:C,unmounted:z,render:U,renderTracked:F,renderTriggered:tt,errorCaptured:mt,serverPrefetch:_t,expose:Lt,inheritAttrs:Ne,components:ln,directives:fn,filters:sr}=e;if(c&&$l(c,r,null),o)for(const Q in o){const V=o[Q];j(V)&&(r[Q]=V.bind(n))}if(a){const Q=a.call(n,n);J(Q)&&(t.data=aa(Q))}if(Cr=!0,i)for(const Q in i){const V=i[Q],ae=j(V)?V.bind(n,n):j(V.get)?V.get.bind(n,n):xt,cn=!j(V)&&j(V.set)?V.set.bind(n):xt,ie=le({get:ae,set:cn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>ie.value,set:Pt=>ie.value=Pt})}if(s)for(const Q in s)_o(s[Q],r,n,Q);if(l){const Q=j(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(V=>{Yl(V,Q[V])})}u&&Ka(u,t,"c");function ct(Q,V){R(V)?V.forEach(ae=>Q(ae.bind(n))):V&&Q(V.bind(n))}if(ct(El,m),ct(Pl,v),ct(Cl,w),ct(Il,$),ct(kl,M),ct(Ol,Y),ct(Ll,mt),ct(Rl,F),ct(Ml,tt),ct(Tl,O),ct(yo,z),ct(Nl,_t),R(Lt))if(Lt.length){const Q=t.exposed||(t.exposed={});Lt.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:ae=>n[V]=ae})})}else t.exposed||(t.exposed={});U&&t.render===xt&&(t.render=U),Ne!=null&&(t.inheritAttrs=Ne),ln&&(t.components=ln),fn&&(t.directives=fn)}function $l(t,e,n=xt){R(t)&&(t=Ir(t));for(const r in t){const a=t[r];let i;J(a)?"default"in a?i=In(a.from||r,a.default,!0):i=In(a.from||r):i=In(a),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ka(t,e,n){Et(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _o(t,e,n,r){const a=r.includes(".")?go(n,r):()=>n[r];if(et(t)){const i=e[t];j(i)&&Pn(a,i)}else if(j(t))Pn(a,t.bind(n));else if(J(t))if(R(t))t.forEach(i=>_o(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Pn(a,i,t)}}function fa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,e,o)),J(e)&&i.set(e,l),l}function jn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&jn(t,i,n,!0),a&&a.forEach(o=>jn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=zl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const zl={data:Ga,props:Xa,emits:Xa,methods:Fe,computed:Fe,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Fe,directives:Fe,watch:Hl,provide:Ga,inject:Dl};function Ga(t,e){return e?t?function(){return it(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Dl(t,e){return Fe(Ir(t),Ir(e))}function Ir(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Fe(t,e){return t?it(Object.create(null),t,e):e}function Xa(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:it(Object.create(null),Va(t),Va(e??{})):e}function Hl(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=ut(t[r],e[r]);return n}function xo(){return{app:null,config:{isNativeTag:ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ul=0;function Bl(t,e){return function(r,a=null){j(r)||(r=it({},r)),a!=null&&!J(a)&&(a=null);const i=xo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Ul++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:vf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const v=at(r,a);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,da(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=He;He=l;try{return c()}finally{He=u}}};return l}}let He=null;function Yl(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=ft||kt;if(r||He){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:He._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}const wo={},Ao=()=>Object.create(wo),ko=t=>Object.getPrototypeOf(t)===wo;function Wl(t,e,n,r=!1){const a={},i=Ao();t.propsDefaults=Object.create(null),Oo(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Xs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Vl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=B(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(Jn(t.emitsOptions,v))continue;const w=e[v];if(l)if(H(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const $=Rt(v);a[$]=Tr(l,s,$,w,t,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{Oo(t,e,a,i)&&(c=!0);let u;for(const m in s)(!e||!H(e,m)&&((u=Ee(m))===m||!H(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Tr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!H(e,m))&&(delete i[m],c=!0)}c&&$t(t.attrs,"set","")}function Oo(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if($e(l))continue;const c=e[l];let u;a&&H(a,u=Rt(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Jn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||q;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Tr(a,l,m,c[m],t,!H(c,m))}}return o}function Tr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=rn(a);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ee(n))&&(r=!0))}return r}function So(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!j(t)){const u=m=>{l=!0;const[v,w]=So(m,e,!0);it(o,v),w&&s.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return J(t)&&r.set(t,xe),xe;if(R(i))for(let u=0;u<i.length;u++){const m=Rt(i[u]);qa(m)&&(o[m]=q)}else if(i)for(const u in i){const m=Rt(u);if(qa(m)){const v=i[u],w=o[m]=R(v)||j(v)?{type:v}:it({},v);if(w){const $=Za(Boolean,w.type),M=Za(String,w.type);w[0]=$>-1,w[1]=M<0||$<M,($>-1||H(w,"default"))&&s.push(m)}}}const c=[o,s];return J(t)&&r.set(t,c),c}function qa(t){return t[0]!=="$"&&!$e(t)}function Ja(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Qa(t,e){return Ja(t)===Ja(e)}function Za(t,e){return R(e)?e.findIndex(n=>Qa(n,t)):j(e)&&Qa(e,t)?0:-1}const Eo=t=>t[0]==="_"||t==="$stable",ca=t=>R(t)?t.map(Tt):[Tt(t)],Kl=(t,e,n)=>{if(e._n)return e;const r=fl((...a)=>ca(e(...a)),n);return r._c=!1,r},Po=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Eo(a))continue;const i=t[a];if(j(i))e[a]=Kl(a,i,r);else if(i!=null){const o=ca(i);e[a]=()=>o}}},Co=(t,e)=>{const n=ca(e);t.slots.default=()=>n},Gl=(t,e)=>{const n=t.slots=Ao();if(t.vnode.shapeFlag&32){const r=e._;r?(it(n,e),Bi(n,"_",r,!0)):Po(e,n)}else e&&Co(t,e)},Xl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=q;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(it(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Po(e,a)),o=e}else e&&(Co(t,e),o={default:1});if(i)for(const s in a)!Eo(s)&&o[s]==null&&delete a[s]};function Nr(t,e,n,r,a=!1){if(R(t)){t.forEach((v,w)=>Nr(v,e&&(R(e)?e[w]:e),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(et(c)?(u[c]=null,H(m,c)&&(m[c]=null)):vt(c)&&(c.value=null)),j(l))Jt(l,s,12,[o,u]);else{const v=et(l),w=vt(l);if(v||w){const $=()=>{if(t.f){const M=v?H(m,l)?m[l]:u[l]:l.value;a?R(M)&&Xr(M,i):R(M)?M.includes(i)||M.push(i):v?(u[l]=[i],H(m,l)&&(m[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,H(m,l)&&(m[l]=o)):w&&(l.value=o,t.k&&(u[t.k]=o))};o?($.id=-1,pt($,n)):$()}}}const pt=yl;function ql(t){return Jl(t)}function Jl(t,e){const n=Yi();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:w=xt,insertStaticContent:$}=t,M=(f,d,h,p=null,g=null,_=null,k=void 0,y=null,x=!!d.dynamicChildren)=>{if(f===d)return;f&&!Le(f,d)&&(p=un(f),Pt(f,g,_,!0),f=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:T}=d;switch(b){case tr:Y(f,d,h,p);break;case qe:A(f,d,h,p);break;case pr:f==null&&O(d,h,p,k);break;case dt:ln(f,d,h,p,g,_,k,y,x);break;default:T&1?U(f,d,h,p,g,_,k,y,x):T&6?fn(f,d,h,p,g,_,k,y,x):(T&64||T&128)&&b.process(f,d,h,p,g,_,k,y,x,Me)}E!=null&&g&&Nr(E,f&&f.ref,_,d||f,!d)},Y=(f,d,h,p)=>{if(f==null)r(d.el=s(d.children),h,p);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},A=(f,d,h,p)=>{f==null?r(d.el=l(d.children||""),h,p):d.el=f.el},O=(f,d,h,p)=>{[f.el,f.anchor]=$(f.children,d,h,p,f.el,f.anchor)},C=({el:f,anchor:d},h,p)=>{let g;for(;f&&f!==d;)g=v(f),r(f,h,p),f=g;r(d,h,p)},z=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=v(f),a(f),f=h;a(d)},U=(f,d,h,p,g,_,k,y,x)=>{d.type==="svg"?k="svg":d.type==="math"&&(k="mathml"),f==null?F(d,h,p,g,_,k,y,x):_t(f,d,g,_,k,y,x)},F=(f,d,h,p,g,_,k,y)=>{let x,b;const{props:E,shapeFlag:T,transition:I,dirs:L}=f;if(x=f.el=o(f.type,_,E&&E.is,E),T&8?u(x,f.children):T&16&&mt(f.children,x,null,p,g,hr(f,_),k,y),L&&oe(f,null,p,"created"),tt(x,f,f.scopeId,k,p),E){for(const W in E)W!=="value"&&!$e(W)&&i(x,W,null,E[W],_,f.children,p,g,Ft);"value"in E&&i(x,"value",null,E.value,_),(b=E.onVnodeBeforeMount)&&It(b,p,f)}L&&oe(f,null,p,"beforeMount");const D=Ql(g,I);D&&I.beforeEnter(x),r(x,d,h),((b=E&&E.onVnodeMounted)||D||L)&&pt(()=>{b&&It(b,p,f),D&&I.enter(x),L&&oe(f,null,p,"mounted")},g)},tt=(f,d,h,p,g)=>{if(h&&w(f,h),p)for(let _=0;_<p.length;_++)w(f,p[_]);if(g){let _=g.subTree;if(d===_){const k=g.vnode;tt(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},mt=(f,d,h,p,g,_,k,y,x=0)=>{for(let b=x;b<f.length;b++){const E=f[b]=y?Kt(f[b]):Tt(f[b]);M(null,E,d,h,p,g,_,k,y)}},_t=(f,d,h,p,g,_,k)=>{const y=d.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:E}=d;x|=f.patchFlag&16;const T=f.props||q,I=d.props||q;let L;if(h&&se(h,!1),(L=I.onVnodeBeforeUpdate)&&It(L,h,d,f),E&&oe(d,f,h,"beforeUpdate"),h&&se(h,!0),b?Lt(f.dynamicChildren,b,y,h,p,hr(d,g),_):k||V(f,d,y,null,h,p,hr(d,g),_,!1),x>0){if(x&16)Ne(y,d,T,I,h,p,g);else if(x&2&&T.class!==I.class&&i(y,"class",null,I.class,g),x&4&&i(y,"style",T.style,I.style,g),x&8){const D=d.dynamicProps;for(let W=0;W<D.length;W++){const X=D[W],rt=T[X],wt=I[X];(wt!==rt||X==="value")&&i(y,X,rt,wt,g,f.children,h,p,Ft)}}x&1&&f.children!==d.children&&u(y,d.children)}else!k&&b==null&&Ne(y,d,T,I,h,p,g);((L=I.onVnodeUpdated)||E)&&pt(()=>{L&&It(L,h,d,f),E&&oe(d,f,h,"updated")},p)},Lt=(f,d,h,p,g,_,k)=>{for(let y=0;y<d.length;y++){const x=f[y],b=d[y],E=x.el&&(x.type===dt||!Le(x,b)||x.shapeFlag&70)?m(x.el):h;M(x,b,E,null,p,g,_,k,!0)}},Ne=(f,d,h,p,g,_,k)=>{if(h!==p){if(h!==q)for(const y in h)!$e(y)&&!(y in p)&&i(f,y,h[y],null,k,d.children,g,_,Ft);for(const y in p){if($e(y))continue;const x=p[y],b=h[y];x!==b&&y!=="value"&&i(f,y,b,x,k,d.children,g,_,Ft)}"value"in p&&i(f,"value",h.value,p.value,k)}},ln=(f,d,h,p,g,_,k,y,x)=>{const b=d.el=f?f.el:s(""),E=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:L}=d;L&&(y=y?y.concat(L):L),f==null?(r(b,h,p),r(E,h,p),mt(d.children||[],h,E,g,_,k,y,x)):T>0&&T&64&&I&&f.dynamicChildren?(Lt(f.dynamicChildren,I,h,g,_,k,y),(d.key!=null||g&&d===g.subTree)&&Io(f,d,!0)):V(f,d,h,E,g,_,k,y,x)},fn=(f,d,h,p,g,_,k,y,x)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,h,p,k,x):sr(d,h,p,g,_,k,x):Ea(f,d,x)},sr=(f,d,h,p,g,_,k)=>{const y=f.component=ff(f,p,g);if(vo(f)&&(y.ctx.renderer=Me),cf(y),y.asyncDep){if(g&&g.registerDep(y,ct),!f.el){const x=y.subTree=at(qe);A(null,x,d,h)}}else ct(y,f,d,h,g,_,k)},Ea=(f,d,h)=>{const p=d.component=f.component;if(dl(f,d,h))if(p.asyncDep&&!p.asyncResolved){Q(p,d,h);return}else p.next=d,il(p.update),p.effect.dirty=!0,p.update();else d.el=f.el,p.vnode=d},ct=(f,d,h,p,g,_,k)=>{const y=()=>{if(f.isMounted){let{next:E,bu:T,u:I,parent:L,vnode:D}=f;{const ve=To(f);if(ve){E&&(E.el=D.el,Q(f,E,k)),ve.asyncDep.then(()=>{f.isUnmounted||y()});return}}let W=E,X;se(f,!1),E?(E.el=D.el,Q(f,E,k)):E=D,T&&cr(T),(X=E.props&&E.props.onVnodeBeforeUpdate)&&It(X,L,E,D),se(f,!0);const rt=dr(f),wt=f.subTree;f.subTree=rt,M(wt,rt,m(wt.el),un(wt),f,g,_),E.el=rt.el,W===null&&ml(f,rt.el),I&&pt(I,g),(X=E.props&&E.props.onVnodeUpdated)&&pt(()=>It(X,L,E,D),g)}else{let E;const{el:T,props:I}=d,{bm:L,m:D,parent:W}=f,X=Cn(d);if(se(f,!1),L&&cr(L),!X&&(E=I&&I.onVnodeBeforeMount)&&It(E,W,d),se(f,!0),T&&Ta){const rt=()=>{f.subTree=dr(f),Ta(T,f.subTree,f,g,null)};X?d.type.__asyncLoader().then(()=>!f.isUnmounted&&rt()):rt()}else{const rt=f.subTree=dr(f);M(null,rt,h,p,f,g,_),d.el=rt.el}if(D&&pt(D,g),!X&&(E=I&&I.onVnodeMounted)){const rt=d;pt(()=>It(E,W,rt),g)}(d.shapeFlag&256||W&&Cn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&pt(f.a,g),f.isMounted=!0,d=h=p=null}},x=f.effect=new Zr(y,xt,()=>la(b),f.scope),b=f.update=()=>{x.dirty&&x.run()};b.id=f.uid,se(f,!0),b()},Q=(f,d,h)=>{d.component=f;const p=f.vnode.props;f.vnode=d,f.next=null,Vl(f,d.props,p,h),Xl(f,d.children,h),ne(),Ba(f),re()},V=(f,d,h,p,g,_,k,y,x=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,T=d.children,{patchFlag:I,shapeFlag:L}=d;if(I>0){if(I&128){cn(b,T,h,p,g,_,k,y,x);return}else if(I&256){ae(b,T,h,p,g,_,k,y,x);return}}L&8?(E&16&&Ft(b,g,_),T!==b&&u(h,T)):E&16?L&16?cn(b,T,h,p,g,_,k,y,x):Ft(b,g,_,!0):(E&8&&u(h,""),L&16&&mt(T,h,p,g,_,k,y,x))},ae=(f,d,h,p,g,_,k,y,x)=>{f=f||xe,d=d||xe;const b=f.length,E=d.length,T=Math.min(b,E);let I;for(I=0;I<T;I++){const L=d[I]=x?Kt(d[I]):Tt(d[I]);M(f[I],L,h,null,g,_,k,y,x)}b>E?Ft(f,g,_,!0,!1,T):mt(d,h,p,g,_,k,y,x,T)},cn=(f,d,h,p,g,_,k,y,x)=>{let b=0;const E=d.length;let T=f.length-1,I=E-1;for(;b<=T&&b<=I;){const L=f[b],D=d[b]=x?Kt(d[b]):Tt(d[b]);if(Le(L,D))M(L,D,h,null,g,_,k,y,x);else break;b++}for(;b<=T&&b<=I;){const L=f[T],D=d[I]=x?Kt(d[I]):Tt(d[I]);if(Le(L,D))M(L,D,h,null,g,_,k,y,x);else break;T--,I--}if(b>T){if(b<=I){const L=I+1,D=L<E?d[L].el:p;for(;b<=I;)M(null,d[b]=x?Kt(d[b]):Tt(d[b]),h,D,g,_,k,y,x),b++}}else if(b>I)for(;b<=T;)Pt(f[b],g,_,!0),b++;else{const L=b,D=b,W=new Map;for(b=D;b<=I;b++){const bt=d[b]=x?Kt(d[b]):Tt(d[b]);bt.key!=null&&W.set(bt.key,b)}let X,rt=0;const wt=I-D+1;let ve=!1,Na=0;const Re=new Array(wt);for(b=0;b<wt;b++)Re[b]=0;for(b=L;b<=T;b++){const bt=f[b];if(rt>=wt){Pt(bt,g,_,!0);continue}let Ct;if(bt.key!=null)Ct=W.get(bt.key);else for(X=D;X<=I;X++)if(Re[X-D]===0&&Le(bt,d[X])){Ct=X;break}Ct===void 0?Pt(bt,g,_,!0):(Re[Ct-D]=b+1,Ct>=Na?Na=Ct:ve=!0,M(bt,d[Ct],h,null,g,_,k,y,x),rt++)}const Ma=ve?Zl(Re):xe;for(X=Ma.length-1,b=wt-1;b>=0;b--){const bt=D+b,Ct=d[bt],Ra=bt+1<E?d[bt+1].el:p;Re[b]===0?M(null,Ct,h,Ra,g,_,k,y,x):ve&&(X<0||b!==Ma[X]?ie(Ct,h,Ra,2):X--)}}},ie=(f,d,h,p,g=null)=>{const{el:_,type:k,transition:y,children:x,shapeFlag:b}=f;if(b&6){ie(f.component.subTree,d,h,p);return}if(b&128){f.suspense.move(d,h,p);return}if(b&64){k.move(f,d,h,Me);return}if(k===dt){r(_,d,h);for(let T=0;T<x.length;T++)ie(x[T],d,h,p);r(f.anchor,d,h);return}if(k===pr){C(f,d,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(_),r(_,d,h),pt(()=>y.enter(_),g);else{const{leave:T,delayLeave:I,afterLeave:L}=y,D=()=>r(_,d,h),W=()=>{T(_,()=>{D(),L&&L()})};I?I(_,D,W):W()}else r(_,d,h)},Pt=(f,d,h,p=!1,g=!1)=>{const{type:_,props:k,ref:y,children:x,dynamicChildren:b,shapeFlag:E,patchFlag:T,dirs:I}=f;if(y!=null&&Nr(y,null,h,f,!0),E&256){d.ctx.deactivate(f);return}const L=E&1&&I,D=!Cn(f);let W;if(D&&(W=k&&k.onVnodeBeforeUnmount)&&It(W,d,f),E&6)hs(f.component,h,p);else{if(E&128){f.suspense.unmount(h,p);return}L&&oe(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,h,g,Me,p):b&&(_!==dt||T>0&&T&64)?Ft(b,d,h,!1,!0):(_===dt&&T&384||!g&&E&16)&&Ft(x,d,h),p&&Pa(f)}(D&&(W=k&&k.onVnodeUnmounted)||L)&&pt(()=>{W&&It(W,d,f),L&&oe(f,null,d,"unmounted")},h)},Pa=f=>{const{type:d,el:h,anchor:p,transition:g}=f;if(d===dt){ms(h,p);return}if(d===pr){z(f);return}const _=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:y}=g,x=()=>k(h,_);y?y(f.el,_,x):x()}else _()},ms=(f,d)=>{let h;for(;f!==d;)h=v(f),a(f),f=h;a(d)},hs=(f,d,h)=>{const{bum:p,scope:g,update:_,subTree:k,um:y}=f;p&&cr(p),g.stop(),_&&(_.active=!1,Pt(k,f,d,h)),y&&pt(y,d),pt(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ft=(f,d,h,p=!1,g=!1,_=0)=>{for(let k=_;k<f.length;k++)Pt(f[k],d,h,p,g)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let lr=!1;const Ca=(f,d,h)=>{f==null?d._vnode&&Pt(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,h),lr||(lr=!0,Ba(),uo(),lr=!1),d._vnode=f},Me={p:M,um:Pt,m:ie,r:Pa,mt:sr,mc:mt,pc:V,pbc:Lt,n:un,o:t};let Ia,Ta;return{render:Ca,hydrate:Ia,createApp:Bl(Ca,Ia)}}function hr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function se({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ql(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Io(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Kt(a[i]),s.el=o.el),n||Io(o,s)),s.type===tr&&(s.el=o.el)}}function Zl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function To(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:To(e)}const tf=t=>t.__isTeleport,dt=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),Ue=[];let Ot=null;function ot(t=!1){Ue.push(Ot=t?null:[])}function ef(){Ue.pop(),Ot=Ue[Ue.length-1]||null}let Je=1;function ti(t){Je+=t}function nf(t){return t.dynamicChildren=Je>0?Ot||xe:null,ef(),Je>0&&Ot&&Ot.push(t),t}function st(t,e,n,r,a,i){return nf(N(t,e,n,r,a,i,!0))}function Mr(t){return t?t.__v_isVNode===!0:!1}function Le(t,e){return t.type===e.type&&t.key===e.key}const No=({key:t})=>t??null,Tn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||vt(t)||j(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,a=null,i=t===dt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&No(e),ref:e&&Tn(e),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:kt};return s?(ua(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),Je>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const at=rf;function rf(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===gl)&&(t=qe),Mr(t)){const s=Oe(t,e,!0);return n&&ua(s,n),Je>0&&!i&&Ot&&(s.shapeFlag&6?Ot[Ot.indexOf(t)]=s:Ot.push(s)),s.patchFlag|=-2,s}if(pf(t)&&(t=t.__vccOpts),e){e=af(e);let{class:s,style:l}=e;s&&!et(s)&&(e.class=Qr(s)),J(l)&&(io(l)&&!R(l)&&(l=it({},l)),e.style=Jr(l))}const o=et(t)?1:bl(t)?128:tf(t)?64:J(t)?4:j(t)?2:0;return N(t,e,n,r,a,o,i,!0)}function af(t){return t?io(t)||ko(t)?it({},t):t:null}function Oe(t,e,n=!1,r=!1){const{props:a,ref:i,patchFlag:o,children:s,transition:l}=t,c=e?of(a||{},e):a,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&No(c),ref:e&&e.ref?n&&i?R(i)?i.concat(Tn(e)):[i,Tn(e)]:Tn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Oe(t.ssContent),ssFallback:t.ssFallback&&Oe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&(u.transition=l.clone(u)),u}function $n(t=" ",e=0){return at(tr,null,t,e)}function Tt(t){return t==null||typeof t=="boolean"?at(qe):R(t)?at(dt,null,t.slice()):typeof t=="object"?Kt(t):at(tr,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Oe(t)}function ua(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),ua(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!ko(e)?e._ctx=kt:a===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[$n(e)]):n=8);t.children=e,t.shapeFlag|=n}function of(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Qr([e.class,r.class]));else if(a==="style")e.style=Jr([e.style,r.style]);else if(Yn(a)){const i=e[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function It(t,e,n,r=null){Et(t,e,7,[n,r])}const sf=xo();let lf=0;function ff(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||sf,i={uid:lf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Es(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:So(r,a),emitsOptions:ho(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ll.bind(null,i),t.ce&&t.ce(i),i}let ft=null,zn,Rr;{const t=Yi(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};zn=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Rr=e("__VUE_SSR_SETTERS__",n=>er=n)}const rn=t=>{const e=ft;return zn(t),t.scope.on(),()=>{t.scope.off(),zn(e)}},ei=()=>{ft&&ft.scope.off(),zn(null)};function Mo(t){return t.vnode.shapeFlag&4}let er=!1;function cf(t,e=!1){e&&Rr(e);const{props:n,children:r}=t.vnode,a=Mo(t);Wl(t,n,a,e),Gl(t,r);const i=a?uf(t,e):void 0;return e&&Rr(!1),i}function uf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Fl);const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?mf(t):null,i=rn(t);ne();const o=Jt(r,t,0,[t.props,a]);if(re(),i(),Di(o)){if(o.then(ei,ei),e)return o.then(s=>{ni(t,s,e)}).catch(s=>{qn(s,t,0)});t.asyncDep=o}else ni(t,o,e)}else Ro(t,e)}function ni(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=lo(e)),Ro(t,n)}let ri;function Ro(t,e,n){const r=t.type;if(!t.render){if(!e&&ri&&!r.render){const a=r.template||fa(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=it(it({isCustomElement:i,delimiters:s},o),l);r.render=ri(a,c)}}t.render=r.render||xt}{const a=rn(t);ne();try{jl(t)}finally{re(),a()}}}const df={get(t,e){return gt(t,"get",""),t[e]}};function mf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,df),slots:t.slots,emit:t.emit,expose:e}}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lo(qs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in De)return De[n](t)},has(e,n){return n in e||n in De}}))}function hf(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function pf(t){return j(t)&&"__vccOpts"in t}const le=(t,e)=>Js(t,e,er);function gf(t,e,n){const r=arguments.length;return r===2?J(e)&&!R(e)?Mr(e)?at(t,null,[e]):at(t,e):at(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),at(t,e,n))}const vf="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const bf="http://www.w3.org/2000/svg",yf="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,ai=Gt&&Gt.createElement("template"),_f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?Gt.createElementNS(bf,t):e==="mathml"?Gt.createElementNS(yf,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ai.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=ai.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xf=Symbol("_vtc");function wf(t,e,n){const r=t[xf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ii=Symbol("_vod"),Af=Symbol("_vsh"),kf=Symbol(""),Of=/(^|;)\s*display\s*:/;function Sf(t,e,n){const r=t.style,a=et(n);let i=!1;if(n&&!a){if(e)if(et(e))for(const o of e.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Nn(r,s,"")}else for(const o in e)n[o]==null&&Nn(r,o,"");for(const o in n)o==="display"&&(i=!0),Nn(r,o,n[o])}else if(a){if(e!==n){const o=r[kf];o&&(n+=";"+o),r.cssText=n,i=Of.test(n)}}else e&&t.removeAttribute("style");ii in t&&(t[ii]=i?r.display:"",t[Af]&&(r.display="none"))}const oi=/\s*!important$/;function Nn(t,e,n){if(R(n))n.forEach(r=>Nn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ef(t,e);oi.test(n)?t.setProperty(Ee(r),n.replace(oi,""),"important"):t[r]=n}}const si=["Webkit","Moz","ms"],gr={};function Ef(t,e){const n=gr[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return gr[e]=r;r=Kn(r);for(let a=0;a<si.length;a++){const i=si[a]+r;if(i in t)return gr[e]=i}return e}const li="http://www.w3.org/1999/xlink";function Pf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(li,e.slice(6,e.length)):t.setAttributeNS(li,e,n);else{const i=Ss(e);n==null||i&&!Wi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function If(t,e,n,r){t.addEventListener(e,n,r)}function Tf(t,e,n,r){t.removeEventListener(e,n,r)}const fi=Symbol("_vei");function Nf(t,e,n,r,a=null){const i=t[fi]||(t[fi]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Mf(e);if(r){const c=i[e]=Ff(r,a);If(t,s,c,l)}else o&&(Tf(t,s,o,l),i[e]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(ci.test(t)){e={};let r;for(;r=t.match(ci);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ee(t.slice(2)),e]}let vr=0;const Rf=Promise.resolve(),Lf=()=>vr||(Rf.then(()=>vr=0),vr=Date.now());function Ff(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Et(jf(r,n.value),e,5,[r])};return n.value=t,n.attached=Lf(),n}function jf(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const ui=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$f=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?wf(t,r,c):e==="style"?Sf(t,n,r):Yn(e)?Gr(e)||Nf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zf(t,e,r,c))?Cf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Pf(t,e,r,c))};function zf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ui(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return ui(e)&&et(n)?!1:e in t}const Df=it({patchProp:$f},_f);let di;function Hf(){return di||(di=ql(Df))}const Uf=(...t)=>{const e=Hf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Yf(r);if(!a)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Bf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Bf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Yf(t){return et(t)?document.querySelector(t):t}const Ie=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Wf={},Lo=t=>(Pe("data-v-616115f4"),t=t(),Ce(),t),Vf={class:"header",id:"top"},Kf=Lo(()=>N("div",{class:"mask"},null,-1)),Gf=Lo(()=>N("div",{class:"header_text"},[N("div",{class:"header_name"},[$n(" HELLO ! "),N("br"),$n(" I' M RUBY CHEN ! ")]),N("h2",null,"WEB DEVELOPER")],-1)),Xf=[Kf,Gf];function qf(t,e){return ot(),st("div",Vf,Xf)}const Jf=Ie(Wf,[["render",qf],["__scopeId","data-v-616115f4"]]),ma=t=>(Pe("data-v-e62a56e9"),t=t(),Ce(),t),Qf={class:"about",id:"about"},Zf=ma(()=>N("h2",{class:"title"},"ABOUT ME",-1)),tc={class:"container"},ec=ma(()=>N("div",{class:"about_left"},[N("div",{class:"about_image"},[N("div",{class:"face face1"},[N("span"),N("span"),N("span"),N("span")]),N("div",{class:"face face2"},[N("span"),N("span"),N("span"),N("span")])]),N("ul",null,[N("li",null,"HTML5 | CSS3 | JavaScript | jQuery"),N("li",null,"Vue | React | Nodejs | Webpack")])],-1)),nc={class:"about_right"},rc=ma(()=>N("div",{class:"about_title"},[$n(" 享受挑戰 "),N("span",null,"2 year Web Frontend Developer")],-1)),ac={__name:"AboutPage",setup(t){const e=Xn("過去任職於電商網站的企劃人員，優化網頁時接觸 HTML、CSS 等程式語言，發現自己對程式相當感興趣，透過線上課程自學網頁開發，下定決心轉職成為一名前端開發人員。前端工程師2年經驗，熟練 HTML5、CSS3、JavaScript 等 web 開發程式語言，使用前端主流框架 React，搭配 Antd UI 開發後台管理系統，使用模塊化管理工具 Webpack 進行打包。電商網站有3年的工作經驗，做事情認真負責，曾代表公司擔任外聯窗口，善於溝通、協調，有較強的組織能力與團隊合作精神。");return(n,r)=>(ot(),st("section",Qf,[Zf,N("div",tc,[ec,N("div",nc,[rc,N("p",null,Xt(e.value),1)])])]))}},ic=Ie(ac,[["__scopeId","data-v-e62a56e9"]]),oc=t=>(Pe("data-v-db8c2c3c"),t=t(),Ce(),t),sc={class:"experience",id:"experience"},lc=oc(()=>N("h2",{class:"title"},"EXPERIENCE",-1)),fc={class:"container"},cc={class:"timeline_time"},uc={class:"timeline_title"},dc={__name:"ExperiencePage",setup(t){const e=Xn([{company:"上海交通銀行-易誠互動",name:"web前端工程師",time:"2022 / 06 - 2024/02",works:["根據客戶提出的功能需求，進行系統的需求分析與討論，確定開發方案及方向","使用 React 框架對後台管理系統頁面進行改造，搭配 Antd 框架完成頁面製作","將重複性程式碼抽離製成公共組件，方便日後維護並减少開發時間","根據需求開發頁面，完成前後端 API 連調，修改開發過程中或測試過程中出現的問題","通過 git 實行程式碼分支管理和團隊合作"]},{company:"區塊科技有限公司",name:"前端工程師",time:"2021 / 12 - 2022 / 02",works:["使用 HTML、CSS 實現網站介面布局，運用 UI 框架 Bootstrap 完成響應式頁面開發","負責新增、編輯作品模塊，使用原生 JavaScript、jQuery 設計頁面動態效果並完成表單驗證功能","參與公司前端界面和共同組件的開發，配合後端 API 完成前端頁面開發及效果實現，及各種組件以及插件的開發和維護"]},{company:"資策會數位教育研究所",name:"前端工程師就業養成班(618小時)",time:"2021 / 05 - 2021 / 10",works:["學習 HTML、CSS、JavaScript 等前端程式語言，利用課後時間複習上課內容，並主動預習相關課程","期末專案使用 React 框架開發前端頁面，後端使用 Node 搭建服務器，製作食譜網站平台","負責客製化便當頁面，計算個人每日總消耗熱量，包含食材列表、客製化便當、計算便當總卡路里、登入會員可收藏便當、根據挑選的食材出現相關推薦品項"]},{company:"東南旅行社有限公司",name:"網站行銷企劃/國內業務人員",time:"2017 / 05 - 2021 / 02",works:["發想旅遊行程提案，電商後台系統商品上架、前台 HTML 製作","商品網頁維護工作，以及優化網站增加使用者體驗","代表公司擔任高鐵票務經銷商外聯工作，跨部門溝通處理高端旅遊專案"]},{company:"台北大學",name:"企業管理學系",time:"2012 / 09 - 2016 / 06"}]);return(n,r)=>(ot(),st("section",sc,[lc,N("div",fc,[(ot(!0),st(dt,null,Xe(e.value,a=>(ot(),st("div",{class:"timeline",key:a.name},[N("div",cc,Xt(a.time),1),N("div",uc,[N("strong",null,Xt(a.name),1),N("span",null,Xt(a.company),1)]),N("ol",null,[(ot(!0),st(dt,null,Xe(a.works,(i,o)=>(ot(),st("li",{key:o},Xt(i),1))),128))])]))),128))])]))}},mc=Ie(dc,[["__scopeId","data-v-db8c2c3c"]]),nr=t=>(Pe("data-v-658b7432"),t=t(),Ce(),t),hc={class:"portfolio",id:"portfolio"},pc=nr(()=>N("h2",{class:"title"},"PORTFOLIO",-1)),gc={class:"portfolio_container"},vc=["href"],bc=nr(()=>N("span",null,null,-1)),yc=nr(()=>N("span",null,null,-1)),_c=nr(()=>N("span",null,null,-1)),xc={class:"portfolio_content"},wc={__name:"PortfolioPage",setup(t){const e=Xn([{url:"https://hhhhungc.github.io/shop_admin/",title:"後台管理系統",skills:["Vue","Element UI","Vue Router","Axios","Webpack"]},{url:"https://hhhhungc.github.io/shop/",title:"仿購物網站",skills:["Vue","Element UI","Vue Router","Vuex","Axios"]}]);return(n,r)=>(ot(),st("section",hc,[pc,N("div",gc,[(ot(!0),st(dt,null,Xe(e.value,a=>(ot(),st("div",{class:"portfolio_square",key:a.title},[N("a",{href:a.url,target:"_blank"},[bc,yc,_c,N("div",xc,[N("h2",null,Xt(a.title),1),(ot(!0),st(dt,null,Xe(a.skills,i=>(ot(),st("ul",{key:i},[N("li",null,Xt(i),1)]))),128))])],8,vc)]))),128))])]))}},Ac=Ie(wc,[["__scopeId","data-v-658b7432"]]),Fo=t=>(Pe("data-v-b2f6c994"),t=t(),Ce(),t),kc={class:"contact",id:"contact"},Oc=Fo(()=>N("h2",{class:"title"},"CONTACT",-1)),Sc=Fo(()=>N("div",{class:"mask"},null,-1)),Ec={class:"container"},Pc={class:"contact_link"},Cc=["href"],Ic={__name:"ContactPage",setup(t){const e=Xn([{title:"台灣",icon:["fas","location-dot"]},{url:"https://github.com/hhhhungc",title:"GitHub",icon:["fab","github"]},{url:"https://codepen.io/hhhhungc",title:"CodePen",icon:["fab","codepen"]},{url:"mailto:'dial012@yahoo.com.tw'",title:"Email",icon:["fas","envelope"]}]);return(n,r)=>{const a=pl("font-awesome-icon");return ot(),st("section",kc,[Oc,Sc,N("div",Ec,[N("ul",Pc,[(ot(!0),st(dt,null,Xe(e.value,i=>(ot(),st("a",{href:i.url,key:i.title},[N("li",null,[at(a,{icon:i.icon},null,8,["icon"]),N("strong",null,Xt(i.title),1)])],8,Cc))),128))])])])}}},Tc=Ie(Ic,[["__scopeId","data-v-b2f6c994"]]),Nc={},Mc=t=>(Pe("data-v-79f0efcc"),t=t(),Ce(),t),Rc=Mc(()=>N("div",{class:"container"},"© 2024 by RUBY CHEN",-1)),Lc=[Rc];function Fc(t,e){return ot(),st("footer",null,Lc)}const jc=Ie(Nc,[["render",Fc],["__scopeId","data-v-79f0efcc"]]),$c={__name:"App",setup(t){return(e,n)=>(ot(),st(dt,null,[at(Jf),at(ic),at(mc),at(Ac),at(Tc),at(jc)],64))}};function mi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mi(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Dn(t){"@babel/helpers - typeof";return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dn(t)}function zc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Hc(t,e,n){return e&&Dc(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ha(t,e){return Bc(t)||Wc(t,e)||jo(t,e)||Kc()}function an(t){return Uc(t)||Yc(t)||jo(t)||Vc()}function Uc(t){if(Array.isArray(t))return Lr(t)}function Bc(t){if(Array.isArray(t))return t}function Yc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function jo(t,e){if(t){if(typeof t=="string")return Lr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lr(t,e)}}function Lr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Vc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hi=function(){},pa={},$o={},zo=null,Do={mark:hi,measure:hi};try{typeof window<"u"&&(pa=window),typeof document<"u"&&($o=document),typeof MutationObserver<"u"&&(zo=MutationObserver),typeof performance<"u"&&(Do=performance)}catch{}var Gc=pa.navigator||{},pi=Gc.userAgent,gi=pi===void 0?"":pi,Zt=pa,G=$o,vi=zo,bn=Do;Zt.document;var Bt=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Ho=~gi.indexOf("MSIE")||~gi.indexOf("Trident/"),yn,_n,xn,wn,An,zt="___FONT_AWESOME___",Fr=16,Uo="fa",Bo="svg-inline--fa",he="data-fa-i2svg",jr="data-fa-pseudo-element",Xc="data-fa-pseudo-element-pending",ga="data-prefix",va="data-icon",bi="fontawesome-i2svg",qc="async",Jc=["HTML","HEAD","STYLE","SCRIPT"],Yo=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",ba=[K,Z];function on(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var Qe=on((yn={},nt(yn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),nt(yn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yn)),Ze=on((_n={},nt(_n,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(_n,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),_n)),tn=on((xn={},nt(xn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(xn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),xn)),Qc=on((wn={},nt(wn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(wn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),wn)),Zc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Wo="fa-layers-text",tu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,eu=on((An={},nt(An,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(An,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),An)),Vo=[1,2,3,4,5,6,7,8,9,10],nu=Vo.concat([11,12,13,14,15,16,17,18,19,20]),ru=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Ze[K]).map(en.add.bind(en));Object.keys(Ze[Z]).map(en.add.bind(en));var au=[].concat(ba,an(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ce.GROUP,ce.SWAP_OPACITY,ce.PRIMARY,ce.SECONDARY]).concat(Vo.map(function(t){return"".concat(t,"x")})).concat(nu.map(function(t){return"w-".concat(t)})),Be=Zt.FontAwesomeConfig||{};function iu(t){var e=G.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ou(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(G&&typeof G.querySelector=="function"){var su=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];su.forEach(function(t){var e=ha(t,2),n=e[0],r=e[1],a=ou(iu(n));a!=null&&(Be[r]=a)})}var Ko={styleDefault:"solid",familyDefault:"classic",cssPrefix:Uo,replacementClass:Bo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);var Se=S(S({},Ko),Be);Se.autoReplaceSvg||(Se.observeMutations=!1);var P={};Object.keys(Ko).forEach(function(t){Object.defineProperty(P,t,{enumerable:!0,set:function(n){Se[t]=n,Ye.forEach(function(r){return r(P)})},get:function(){return Se[t]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){Se.cssPrefix=e,Ye.forEach(function(n){return n(P)})},get:function(){return Se.cssPrefix}});Zt.FontAwesomeConfig=P;var Ye=[];function lu(t){return Ye.push(t),function(){Ye.splice(Ye.indexOf(t),1)}}var Wt=Fr,Mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fu(t){if(!(!t||!Bt)){var e=G.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(e,r),t}}var cu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var t=12,e="";t-- >0;)e+=cu[Math.random()*62|0];return e}function Te(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ya(t){return t.classList?Te(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Go(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Go(t[n]),'" ')},"").trim()}function rr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function _a(t){return t.size!==Mt.size||t.x!==Mt.x||t.y!==Mt.y||t.rotate!==Mt.rotate||t.flipX||t.flipY}function du(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function mu(t){var e=t.transform,n=t.width,r=n===void 0?Fr:n,a=t.height,i=a===void 0?Fr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Ho?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var hu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xo(){var t=Uo,e=Bo,n=P.cssPrefix,r=P.replacementClass,a=hu;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var yi=!1;function br(){P.autoAddCss&&!yi&&(fu(Xo()),yi=!0)}var pu={mixout:function(){return{dom:{css:Xo,insertCss:br}}},hooks:function(){return{beforeDOMElementCreation:function(){br()},beforeI2svg:function(){br()}}}},Dt=Zt||{};Dt[zt]||(Dt[zt]={});Dt[zt].styles||(Dt[zt].styles={});Dt[zt].hooks||(Dt[zt].hooks={});Dt[zt].shims||(Dt[zt].shims=[]);var St=Dt[zt],qo=[],gu=function t(){G.removeEventListener("DOMContentLoaded",t),Hn=1,qo.map(function(e){return e()})},Hn=!1;Bt&&(Hn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Hn||G.addEventListener("DOMContentLoaded",gu));function vu(t){Bt&&(Hn?setTimeout(t,0):qo.push(t))}function sn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Go(t):"<".concat(e," ").concat(uu(r),">").concat(i.map(sn).join(""),"</").concat(e,">")}function _i(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function bu(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function $r(t){var e=bu(t);return e.length===1?e[0].toString(16):null}function yu(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function xi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function zr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=xi(e);typeof St.hooks.addPack=="function"&&!a?St.hooks.addPack(t,xi(e)):St.styles[t]=S(S({},St.styles[t]||{}),i),t==="fas"&&zr("fa",e)}var kn,On,Sn,ye=St.styles,_u=St.shims,xu=(kn={},nt(kn,K,Object.values(tn[K])),nt(kn,Z,Object.values(tn[Z])),kn),xa=null,Jo={},Qo={},Zo={},ts={},es={},wu=(On={},nt(On,K,Object.keys(Qe[K])),nt(On,Z,Object.keys(Qe[Z])),On);function Au(t){return~au.indexOf(t)}function ku(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Au(a)?a:null}var ns=function(){var e=function(i){return yr(ye,function(o,s,l){return o[l]=yr(s,i,{}),o},{})};Jo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Qo=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),es=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ye||P.autoFetchSvg,r=yr(_u,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Zo=r.names,ts=r.unicodes,xa=ar(P.styleDefault,{family:P.familyDefault})};lu(function(t){xa=ar(t.styleDefault,{family:P.familyDefault})});ns();function wa(t,e){return(Jo[t]||{})[e]}function Ou(t,e){return(Qo[t]||{})[e]}function ue(t,e){return(es[t]||{})[e]}function rs(t){return Zo[t]||{prefix:null,iconName:null}}function Su(t){var e=ts[t],n=wa("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function te(){return xa}var Aa=function(){return{prefix:null,iconName:null,rest:[]}};function ar(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=Qe[r][t],i=Ze[r][t]||Ze[r][a],o=t in St.styles?t:null;return i||o||null}var wi=(Sn={},nt(Sn,K,Object.keys(tn[K])),nt(Sn,Z,Object.keys(tn[Z])),Sn);function ir(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},nt(e,K,"".concat(P.cssPrefix,"-").concat(K)),nt(e,Z,"".concat(P.cssPrefix,"-").concat(Z)),e),o=null,s=K;(t.includes(i[K])||t.some(function(c){return wi[K].includes(c)}))&&(s=K),(t.includes(i[Z])||t.some(function(c){return wi[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,u){var m=ku(P.cssPrefix,u);if(ye[u]?(u=xu[s].includes(u)?Qc[s][u]:u,o=u,c.prefix=u):wu[s].indexOf(u)>-1?(o=u,c.prefix=ar(u,{family:s})):m?c.iconName=m:u!==P.replacementClass&&u!==i[K]&&u!==i[Z]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=o==="fa"?rs(c.iconName):{},w=ue(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ye.far&&ye.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Aa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(ye.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ue(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=te()||"fas"),l}var Eu=function(){function t(){zc(this,t),this.definitions={}}return Hc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),zr(s,o[s]);var l=tn[K][s];l&&zr(l,o[s]),ns()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Ai=[],_e={},ke={},Pu=Object.keys(ke);function Cu(t,e){var n=e.mixoutsTo;return Ai=t,_e={},Object.keys(ke).forEach(function(r){Pu.indexOf(r)===-1&&delete ke[r]}),Ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_e[o]||(_e[o]=[]),_e[o].push(i[o])})}r.provides&&r.provides(ke)}),n}function Dr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_e[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function pe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=_e[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ke[t]?ke[t].apply(null,e):void 0}function Hr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||te();if(e)return e=ue(n,e)||e,_i(as.definitions,n,e)||_i(St.styles,n,e)}var as=new Eu,Iu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,pe("noAuto")},Tu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(pe("beforeI2svg",e),Ht("pseudoElements2svg",e),Ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,vu(function(){Mu({autoReplaceSvgRoot:n}),pe("watch",e)})}},Nu={icon:function(e){if(e===null)return null;if(Dn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ue(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ar(e[0]);return{prefix:r,iconName:ue(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(Zc))){var a=ir(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||te(),iconName:ue(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=te();return{prefix:i,iconName:ue(i,e)||e}}}},yt={noAuto:Iu,config:P,dom:Tu,parse:Nu,library:as,findIconDefinition:Hr,toHtml:sn},Mu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(St.styles).length>0||P.autoFetchSvg)&&Bt&&P.autoReplaceSvg&&yt.dom.i2svg({node:r})};function or(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Bt){var r=G.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ru(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(_a(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=rr(S(S({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Lu(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function ka(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,w=v===void 0?!1:v,$=r.found?r:n,M=$.width,Y=$.height,A=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(_t){return m.classes.indexOf(_t)===-1}).filter(function(_t){return _t!==""||!!_t}).concat(m.classes).join(" "),C={children:[],attributes:S(S({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(Y)})},z=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/Y*16*.0625,"em")}:{};w&&(C.attributes[he]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||nn())},children:[l]}),delete C.attributes.title);var U=S(S({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S(S({},z),m.styles)}),F=r.found&&n.found?Ht("generateAbstractMask",U)||{children:[],attributes:{}}:Ht("generateAbstractIcon",U)||{children:[],attributes:{}},tt=F.children,mt=F.attributes;return U.children=tt,U.attributes=mt,s?Lu(U):Ru(U)}function ki(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[he]="");var u=S({},o.styles);_a(a)&&(u.transform=mu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=rr(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Fu(t){var e=t.content,n=t.title,r=t.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var _r=St.styles;function Ur(t){var e=t[0],n=t[1],r=t.slice(4),a=ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ce.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ce.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var ju={found:!1,width:512,height:512};function $u(t,e){!Yo&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Br(t,e){var n=e;return e==="fa"&&P.styleDefault!==null&&(e=te()),new Promise(function(r,a){if(Ht("missingIconAbstract"),n==="fa"){var i=rs(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_r[e]&&_r[e][t]){var o=_r[e][t];return r(Ur(o))}$u(t,e),r(S(S({},ju),{},{icon:P.showMissingIcons&&t?Ht("missingIconAbstract")||{}:{}}))})}var Oi=function(){},Yr=P.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Oi,measure:Oi},je='FA "6.5.2"',zu=function(e){return Yr.mark("".concat(je," ").concat(e," begins")),function(){return is(e)}},is=function(e){Yr.mark("".concat(je," ").concat(e," ends")),Yr.measure("".concat(je," ").concat(e),"".concat(je," ").concat(e," begins"),"".concat(je," ").concat(e," ends"))},Oa={begin:zu,end:is},Mn=function(){};function Si(t){var e=t.getAttribute?t.getAttribute(he):null;return typeof e=="string"}function Du(t){var e=t.getAttribute?t.getAttribute(ga):null,n=t.getAttribute?t.getAttribute(va):null;return e&&n}function Hu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function Uu(){if(P.autoReplaceSvg===!0)return Rn.replace;var t=Rn[P.autoReplaceSvg];return t||Rn.replace}function Bu(t){return G.createElementNS("http://www.w3.org/2000/svg",t)}function Yu(t){return G.createElement(t)}function os(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Bu:Yu:n;if(typeof t=="string")return G.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(os(o,{ceFn:r}))}),a}function Wu(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Rn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(os(a),n)}),n.getAttribute(he)===null&&P.keepOriginalSource){var r=G.createComment(Wu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ya(n).indexOf(P.replacementClass))return Rn.replace(e);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(he,""),n.innerHTML=o}};function Ei(t){t()}function ss(t,e){var n=typeof e=="function"?e:Mn;if(t.length===0)n();else{var r=Ei;P.mutateApproach===qc&&(r=Zt.requestAnimationFrame||Ei),r(function(){var a=Uu(),i=Oa.begin("mutate");t.map(a),i(),n()})}}var Sa=!1;function ls(){Sa=!0}function Wr(){Sa=!1}var Un=null;function Pi(t){if(vi&&P.observeMutations){var e=t.treeCallback,n=e===void 0?Mn:e,r=t.nodeCallback,a=r===void 0?Mn:r,i=t.pseudoElementsCallback,o=i===void 0?Mn:i,s=t.observeMutationsRoot,l=s===void 0?G:s;Un=new vi(function(c){if(!Sa){var u=te();Te(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Si(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Si(m.target)&&~ru.indexOf(m.attributeName))if(m.attributeName==="class"&&Du(m.target)){var v=ir(ya(m.target)),w=v.prefix,$=v.iconName;m.target.setAttribute(ga,w||u),$&&m.target.setAttribute(va,$)}else Hu(m.target)&&a(m.target)})}}),Bt&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vu(){Un&&Un.disconnect()}function Ku(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Gu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=ir(ya(t));return a.prefix||(a.prefix=te()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ou(a.prefix,t.innerText)||wa(a.prefix,$r(t.innerText))),!a.iconName&&P.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Xu(t){var e=Te(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||nn()):(e["aria-hidden"]="true",e.focusable="false")),e}function qu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ci(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gu(t),r=n.iconName,a=n.prefix,i=n.rest,o=Xu(t),s=Dr("parseNodeAttributes",{},t),l=e.styleParser?Ku(t):[];return S({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ju=St.styles;function fs(t){var e=P.autoReplaceSvg==="nest"?Ci(t,{styleParser:!1}):Ci(t);return~e.extra.classes.indexOf(Wo)?Ht("generateLayersText",t,e):Ht("generateSvgReplacementMutation",t,e)}var ee=new Set;ba.map(function(t){ee.add("fa-".concat(t))});Object.keys(Qe[K]).map(ee.add.bind(ee));Object.keys(Qe[Z]).map(ee.add.bind(ee));ee=an(ee);function Ii(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(bi,"-").concat(m))},a=function(m){return n.remove("".concat(bi,"-").concat(m))},i=P.autoFetchSvg?ee:ba.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ju));i.includes("fa")||i.push("fa");var o=[".".concat(Wo,":not([").concat(he,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(he,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Te(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Oa.begin("onTree"),c=s.reduce(function(u,m){try{var v=fs(m);v&&u.push(v)}catch(w){Yo||w.name==="MissingIcon"&&console.error(w)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){ss(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function Qu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fs(t).then(function(n){n&&ss([n],e)})}function Zu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Hr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Hr(a||{})),t(r,S(S({},n),{},{mask:a}))}}var td=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Mt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,$=w===void 0?null:w,M=n.classes,Y=M===void 0?[]:M,A=n.attributes,O=A===void 0?{}:A,C=n.styles,z=C===void 0?{}:C;if(e){var U=e.prefix,F=e.iconName,tt=e.icon;return or(S({type:"icon"},e),function(){return pe("beforeDOMElementCreation",{iconDefinition:e,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat($||nn()):(O["aria-hidden"]="true",O.focusable="false")),ka({icons:{main:Ur(tt),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:F,transform:S(S({},Mt),a),symbol:o,title:v,maskId:u,titleId:$,extra:{attributes:O,styles:z,classes:Y}})})}},ed={mixout:function(){return{icon:Zu(td)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ii,n.nodeCallback=Qu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return Ii(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,$){Promise.all([Br(a,s),u.iconName?Br(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var Y=ha(M,2),A=Y[0],O=Y[1];w([n,ka({icons:{main:A,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch($)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=rr(s);l.length>0&&(a.style=l);var c;return _a(o)&&(c=Ht("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},nd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return or({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},rd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return or({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),Fu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},ad={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Mt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,w=v===void 0?{}:v;return or({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),ki({content:n,transform:S(S({},Mt),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(P.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ho){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},id=new RegExp('"',"ug"),Ti=[1105920,1112319];function od(t){var e=t.replace(id,""),n=yu(e,0),r=n>=Ti[0]&&n<=Ti[1],a=e.length===2?e[0]===e[1]:!1;return{value:$r(a?e[0]:e),isSecondary:r||a}}function Ni(t,e){var n="".concat(Xc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Te(t.children),o=i.filter(function(tt){return tt.getAttribute(jr)===e})[0],s=Zt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(tu),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:K,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ze[v][l[2].toLowerCase()]:eu[v][c],$=od(m),M=$.value,Y=$.isSecondary,A=l[0].startsWith("FontAwesome"),O=wa(w,M),C=O;if(A){var z=Su(M);z.iconName&&z.prefix&&(O=z.iconName,w=z.prefix)}if(O&&!Y&&(!o||o.getAttribute(ga)!==w||o.getAttribute(va)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);var U=qu(),F=U.extra;F.attributes[jr]=e,Br(O,w).then(function(tt){var mt=ka(S(S({},U),{},{icons:{main:tt,mask:Aa()},prefix:w,iconName:C,extra:F,watchable:!0})),_t=G.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_t,t.firstChild):t.appendChild(_t),_t.outerHTML=mt.map(function(Lt){return sn(Lt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function sd(t){return Promise.all([Ni(t,"::before"),Ni(t,"::after")])}function ld(t){return t.parentNode!==document.head&&!~Jc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Mi(t){if(Bt)return new Promise(function(e,n){var r=Te(t.querySelectorAll("*")).filter(ld).map(sd),a=Oa.begin("searchPseudoElements");ls(),Promise.all(r).then(function(){a(),Wr(),e()}).catch(function(){a(),Wr(),n()})})}var fd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Mi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;P.searchPseudoElements&&Mi(a)}}},Ri=!1,cd={mixout:function(){return{dom:{unwatch:function(){ls(),Ri=!0}}}},hooks:function(){return{bootstrap:function(){Pi(Dr("mutationObserverCallbacks",{}))},noAuto:function(){Vu()},watch:function(n){var r=n.observeMutationsRoot;Ri?Wr():Pi(Dr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Li=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ud={mixout:function(){return{parse:{transform:function(n){return Li(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Li(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:S({},w.outer),children:[{tag:"g",attributes:S({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),w.path)}]}]}}}},xr={x:0,y:0,width:"100%",height:"100%"};function Fi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function dd(t){return t.tag==="g"?t.children:[t]}var md={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ir(a.split(" ").map(function(o){return o.trim()})):Aa();return i.prefix||(i.prefix=te()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,v=o.icon,w=du({transform:l,containerWidth:m,iconWidth:c}),$={tag:"rect",attributes:S(S({},xr),{},{fill:"white"})},M=u.children?{children:u.children.map(Fi)}:{},Y={tag:"g",attributes:S({},w.inner),children:[Fi(S({tag:u.tag,attributes:S(S({},u.attributes),w.path)},M))]},A={tag:"g",attributes:S({},w.outer),children:[Y]},O="mask-".concat(s||nn()),C="clip-".concat(s||nn()),z={tag:"mask",attributes:S(S({},xr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[$,A]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:dd(v)},z]};return r.push(U,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(O,")")},xr)}),{children:r,attributes:a}}}},hd={provides:function(e){var n=!1;Zt.matchMedia&&(n=Zt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},gd=[pu,ed,nd,rd,ad,fd,cd,ud,md,hd,pd];Cu(gd,{mixoutsTo:yt});yt.noAuto;yt.config;var vd=yt.library;yt.dom;var Vr=yt.parse;yt.findIconDefinition;yt.toHtml;var bd=yt.icon;yt.layer;yt.text;yt.counter;function ji(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ji(Object(n),!0).forEach(function(r){ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ji(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yd(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function _d(t){var e=yd(t,"string");return typeof e=="symbol"?e:e+""}function Bn(t){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bn(t)}function ht(t,e,n){return e=_d(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xd(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function wd(t,e){if(t==null)return{};var n=xd(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var Ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cs={exports:{}};(function(t){(function(e){var n=function(A,O,C){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var z,U=0,F=0;if(u(O))for(z=[],F=O.length;U<F;U++)z.push(n(A,O[U],C));else{z={};for(var tt in O)Object.prototype.hasOwnProperty.call(O,tt)&&(z[A(tt,C)]=n(A,O[tt],C))}return z},r=function(A,O){O=O||{};var C=O.separator||"_",z=O.split||/(?=[A-Z])/;return A.split(z).join(C)},a=function(A){return $(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(O,C){return C?C.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var O=a(A);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(A,O){return r(A,O).toLowerCase()},s=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},u=function(A){return s.call(A)=="[object Array]"},m=function(A){return s.call(A)=="[object Date]"},v=function(A){return s.call(A)=="[object RegExp]"},w=function(A){return s.call(A)=="[object Boolean]"},$=function(A){return A=A-0,A===A},M=function(A,O){var C=O&&"process"in O?O.process:O;return typeof C!="function"?A:function(z,U){return C(z,A,U)}},Y={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(A,O){return n(M(a,O),A)},decamelizeKeys:function(A,O){return n(M(o,O),A,O)},pascalizeKeys:function(A,O){return n(M(i,O),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=Y:e.humps=Y})(Ad)})(cs);var kd=cs.exports,Od=["class","style"];function Sd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=kd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Ed(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function us(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return us(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Ed(u);break;case"style":l.style=Sd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=wd(n,Od);return gf(t.tag,jt(jt(jt({},e),{},{class:a.class,style:jt(jt({},a.style),o)},a.attrs),s),r)}var ds=!1;try{ds=!0}catch{}function Pd(){if(!ds&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function wr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ht({},t,e):{}}function Cd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ht(ht(ht(ht(ht(ht(ht(ht(ht(ht(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),ht(ht(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function $i(t){if(t&&Bn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vr.icon)return Vr.icon(t);if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Id=Al({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=le(function(){return $i(e.icon)}),i=le(function(){return wr("classes",Cd(e))}),o=le(function(){return wr("transform",typeof e.transform=="string"?Vr.transform(e.transform):e.transform)}),s=le(function(){return wr("mask",$i(e.mask))}),l=le(function(){return bd(a.value,jt(jt(jt(jt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Pn(l,function(u){if(!u)return Pd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=le(function(){return l.value?us(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Td={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Nd={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Md={prefix:"fab",iconName:"codepen",icon:[512,512,[],"f1cb","M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"]},Rd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};vd.add(Td,Nd,Rd,Md);Uf($c).component("font-awesome-icon",Id).mount("#app");
