(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const v of m)if(v.type==="childList")for(const T of v.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&o(T)}).observe(document,{childList:!0,subtree:!0});function d(m){const v={};return m.integrity&&(v.integrity=m.integrity),m.referrerPolicy&&(v.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?v.credentials="include":m.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function o(m){if(m.ep)return;m.ep=!0;const v=d(m);fetch(m.href,v)}})();function Qd(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var vr={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Mp(){if(Md)return Mn;Md=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,m,v){var T=null;if(v!==void 0&&(T=""+v),m.key!==void 0&&(T=""+m.key),"key"in m){v={};for(var O in m)O!=="key"&&(v[O]=m[O])}else v=m;return m=v.ref,{$$typeof:c,type:o,key:T,ref:m!==void 0?m:null,props:v}}return Mn.Fragment=f,Mn.jsx=d,Mn.jsxs=d,Mn}var Dd;function Dp(){return Dd||(Dd=1,vr.exports=Mp()),vr.exports}var u=Dp(),br={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function wp(){if(wd)return te;wd=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),T=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),_=Symbol.iterator;function q(p){return p===null||typeof p!="object"?null:(p=_&&p[_]||p["@@iterator"],typeof p=="function"?p:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,W={};function G(p,C,B){this.props=p,this.context=C,this.refs=W,this.updater=B||X}G.prototype.isReactComponent={},G.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,C,"setState")},G.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Z(){}Z.prototype=G.prototype;function L(p,C,B){this.props=p,this.context=C,this.refs=W,this.updater=B||X}var ee=L.prototype=new Z;ee.constructor=L,V(ee,G.prototype),ee.isPureReactComponent=!0;var ye=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function we(p,C,B,U,k,ce){return B=ce.ref,{$$typeof:c,type:p,key:C,ref:B!==void 0?B:null,props:ce}}function _e(p,C){return we(p.type,C,void 0,void 0,void 0,p.props)}function Ae(p){return typeof p=="object"&&p!==null&&p.$$typeof===c}function et(p){var C={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(B){return C[B]})}var ft=/\/+/g;function Xe(p,C){return typeof p=="object"&&p!==null&&p.key!=null?et(""+p.key):C.toString(36)}function Aa(){}function Ea(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Aa,Aa):(p.status="pending",p.then(function(C){p.status==="pending"&&(p.status="fulfilled",p.value=C)},function(C){p.status==="pending"&&(p.status="rejected",p.reason=C)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Qe(p,C,B,U,k){var ce=typeof p;(ce==="undefined"||ce==="boolean")&&(p=null);var I=!1;if(p===null)I=!0;else switch(ce){case"bigint":case"string":case"number":I=!0;break;case"object":switch(p.$$typeof){case c:case f:I=!0;break;case N:return I=p._init,Qe(I(p._payload),C,B,U,k)}}if(I)return k=k(p),I=U===""?"."+Xe(p,0):U,ye(k)?(B="",I!=null&&(B=I.replace(ft,"$&/")+"/"),Qe(k,C,B,"",function($t){return $t})):k!=null&&(Ae(k)&&(k=_e(k,B+(k.key==null||p&&p.key===k.key?"":(""+k.key).replace(ft,"$&/")+"/")+I)),C.push(k)),1;I=0;var tt=U===""?".":U+":";if(ye(p))for(var ve=0;ve<p.length;ve++)U=p[ve],ce=tt+Xe(U,ve),I+=Qe(U,C,B,ce,k);else if(ve=q(p),typeof ve=="function")for(p=ve.call(p),ve=0;!(U=p.next()).done;)U=U.value,ce=tt+Xe(U,ve++),I+=Qe(U,C,B,ce,k);else if(ce==="object"){if(typeof p.then=="function")return Qe(Ea(p),C,B,U,k);throw C=String(p),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return I}function M(p,C,B){if(p==null)return p;var U=[],k=0;return Qe(p,U,"","",function(ce){return C.call(B,ce,k++)}),U}function H(p){if(p._status===-1){var C=p._result;C=C(),C.then(function(B){(p._status===0||p._status===-1)&&(p._status=1,p._result=B)},function(B){(p._status===0||p._status===-1)&&(p._status=2,p._result=B)}),p._status===-1&&(p._status=0,p._result=C)}if(p._status===1)return p._result.default;throw p._result}var F=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function pe(){}return te.Children={map:M,forEach:function(p,C,B){M(p,function(){C.apply(this,arguments)},B)},count:function(p){var C=0;return M(p,function(){C++}),C},toArray:function(p){return M(p,function(C){return C})||[]},only:function(p){if(!Ae(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},te.Component=G,te.Fragment=d,te.Profiler=m,te.PureComponent=L,te.StrictMode=o,te.Suspense=j,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,te.__COMPILER_RUNTIME={__proto__:null,c:function(p){return P.H.useMemoCache(p)}},te.cache=function(p){return function(){return p.apply(null,arguments)}},te.cloneElement=function(p,C,B){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var U=V({},p.props),k=p.key,ce=void 0;if(C!=null)for(I in C.ref!==void 0&&(ce=void 0),C.key!==void 0&&(k=""+C.key),C)!Ce.call(C,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&C.ref===void 0||(U[I]=C[I]);var I=arguments.length-2;if(I===1)U.children=B;else if(1<I){for(var tt=Array(I),ve=0;ve<I;ve++)tt[ve]=arguments[ve+2];U.children=tt}return we(p.type,k,void 0,void 0,ce,U)},te.createContext=function(p){return p={$$typeof:T,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:v,_context:p},p},te.createElement=function(p,C,B){var U,k={},ce=null;if(C!=null)for(U in C.key!==void 0&&(ce=""+C.key),C)Ce.call(C,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(k[U]=C[U]);var I=arguments.length-2;if(I===1)k.children=B;else if(1<I){for(var tt=Array(I),ve=0;ve<I;ve++)tt[ve]=arguments[ve+2];k.children=tt}if(p&&p.defaultProps)for(U in I=p.defaultProps,I)k[U]===void 0&&(k[U]=I[U]);return we(p,ce,void 0,void 0,null,k)},te.createRef=function(){return{current:null}},te.forwardRef=function(p){return{$$typeof:O,render:p}},te.isValidElement=Ae,te.lazy=function(p){return{$$typeof:N,_payload:{_status:-1,_result:p},_init:H}},te.memo=function(p,C){return{$$typeof:x,type:p,compare:C===void 0?null:C}},te.startTransition=function(p){var C=P.T,B={};P.T=B;try{var U=p(),k=P.S;k!==null&&k(B,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(pe,F)}catch(ce){F(ce)}finally{P.T=C}},te.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},te.use=function(p){return P.H.use(p)},te.useActionState=function(p,C,B){return P.H.useActionState(p,C,B)},te.useCallback=function(p,C){return P.H.useCallback(p,C)},te.useContext=function(p){return P.H.useContext(p)},te.useDebugValue=function(){},te.useDeferredValue=function(p,C){return P.H.useDeferredValue(p,C)},te.useEffect=function(p,C,B){var U=P.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(p,C)},te.useId=function(){return P.H.useId()},te.useImperativeHandle=function(p,C,B){return P.H.useImperativeHandle(p,C,B)},te.useInsertionEffect=function(p,C){return P.H.useInsertionEffect(p,C)},te.useLayoutEffect=function(p,C){return P.H.useLayoutEffect(p,C)},te.useMemo=function(p,C){return P.H.useMemo(p,C)},te.useOptimistic=function(p,C){return P.H.useOptimistic(p,C)},te.useReducer=function(p,C,B){return P.H.useReducer(p,C,B)},te.useRef=function(p){return P.H.useRef(p)},te.useState=function(p){return P.H.useState(p)},te.useSyncExternalStore=function(p,C,B){return P.H.useSyncExternalStore(p,C,B)},te.useTransition=function(){return P.H.useTransition()},te.version="19.1.1",te}var zd;function Mr(){return zd||(zd=1,br.exports=wp()),br.exports}var D=Mr();const zp=Qd(D);var yr={exports:{}},Dn={},Sr={exports:{}},jr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function Op(){return Od||(Od=1,(function(c){function f(M,H){var F=M.length;M.push(H);e:for(;0<F;){var pe=F-1>>>1,p=M[pe];if(0<m(p,H))M[pe]=H,M[F]=p,F=pe;else break e}}function d(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var H=M[0],F=M.pop();if(F!==H){M[0]=F;e:for(var pe=0,p=M.length,C=p>>>1;pe<C;){var B=2*(pe+1)-1,U=M[B],k=B+1,ce=M[k];if(0>m(U,F))k<p&&0>m(ce,U)?(M[pe]=ce,M[k]=F,pe=k):(M[pe]=U,M[B]=F,pe=B);else if(k<p&&0>m(ce,F))M[pe]=ce,M[k]=F,pe=k;else break e}}return H}function m(M,H){var F=M.sortIndex-H.sortIndex;return F!==0?F:M.id-H.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;c.unstable_now=function(){return v.now()}}else{var T=Date,O=T.now();c.unstable_now=function(){return T.now()-O}}var j=[],x=[],N=1,_=null,q=3,X=!1,V=!1,W=!1,G=!1,Z=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ye(M){for(var H=d(x);H!==null;){if(H.callback===null)o(x);else if(H.startTime<=M)o(x),H.sortIndex=H.expirationTime,f(j,H);else break;H=d(x)}}function P(M){if(W=!1,ye(M),!V)if(d(j)!==null)V=!0,Ce||(Ce=!0,Xe());else{var H=d(x);H!==null&&Qe(P,H.startTime-M)}}var Ce=!1,we=-1,_e=5,Ae=-1;function et(){return G?!0:!(c.unstable_now()-Ae<_e)}function ft(){if(G=!1,Ce){var M=c.unstable_now();Ae=M;var H=!0;try{e:{V=!1,W&&(W=!1,L(we),we=-1),X=!0;var F=q;try{t:{for(ye(M),_=d(j);_!==null&&!(_.expirationTime>M&&et());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,q=_.priorityLevel;var p=pe(_.expirationTime<=M);if(M=c.unstable_now(),typeof p=="function"){_.callback=p,ye(M),H=!0;break t}_===d(j)&&o(j),ye(M)}else o(j);_=d(j)}if(_!==null)H=!0;else{var C=d(x);C!==null&&Qe(P,C.startTime-M),H=!1}}break e}finally{_=null,q=F,X=!1}H=void 0}}finally{H?Xe():Ce=!1}}}var Xe;if(typeof ee=="function")Xe=function(){ee(ft)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,Ea=Aa.port2;Aa.port1.onmessage=ft,Xe=function(){Ea.postMessage(null)}}else Xe=function(){Z(ft,0)};function Qe(M,H){we=Z(function(){M(c.unstable_now())},H)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(M){M.callback=null},c.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<M?Math.floor(1e3/M):5},c.unstable_getCurrentPriorityLevel=function(){return q},c.unstable_next=function(M){switch(q){case 1:case 2:case 3:var H=3;break;default:H=q}var F=q;q=H;try{return M()}finally{q=F}},c.unstable_requestPaint=function(){G=!0},c.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var F=q;q=M;try{return H()}finally{q=F}},c.unstable_scheduleCallback=function(M,H,F){var pe=c.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,M){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=F+p,M={id:N++,callback:H,priorityLevel:M,startTime:F,expirationTime:p,sortIndex:-1},F>pe?(M.sortIndex=F,f(x,M),d(j)===null&&M===d(x)&&(W?(L(we),we=-1):W=!0,Qe(P,F-pe))):(M.sortIndex=p,f(j,M),V||X||(V=!0,Ce||(Ce=!0,Xe()))),M},c.unstable_shouldYield=et,c.unstable_wrapCallback=function(M){var H=q;return function(){var F=q;q=H;try{return M.apply(this,arguments)}finally{q=F}}}})(jr)),jr}var Cd;function Cp(){return Cd||(Cd=1,Sr.exports=Op()),Sr.exports}var Ar={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function _p(){if(_d)return ke;_d=1;var c=Mr();function f(j){var x="https://react.dev/errors/"+j;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)x+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+j+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function v(j,x,N){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:_==null?null:""+_,children:j,containerInfo:x,implementation:N}}var T=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(j,x){if(j==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ke.createPortal=function(j,x){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(f(299));return v(j,x,null,N)},ke.flushSync=function(j){var x=T.T,N=o.p;try{if(T.T=null,o.p=2,j)return j()}finally{T.T=x,o.p=N,o.d.f()}},ke.preconnect=function(j,x){typeof j=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(j,x))},ke.prefetchDNS=function(j){typeof j=="string"&&o.d.D(j)},ke.preinit=function(j,x){if(typeof j=="string"&&x&&typeof x.as=="string"){var N=x.as,_=O(N,x.crossOrigin),q=typeof x.integrity=="string"?x.integrity:void 0,X=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;N==="style"?o.d.S(j,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:_,integrity:q,fetchPriority:X}):N==="script"&&o.d.X(j,{crossOrigin:_,integrity:q,fetchPriority:X,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},ke.preinitModule=function(j,x){if(typeof j=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var N=O(x.as,x.crossOrigin);o.d.M(j,{crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(j)},ke.preload=function(j,x){if(typeof j=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var N=x.as,_=O(N,x.crossOrigin);o.d.L(j,N,{crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},ke.preloadModule=function(j,x){if(typeof j=="string")if(x){var N=O(x.as,x.crossOrigin);o.d.m(j,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(j)},ke.requestFormReset=function(j){o.d.r(j)},ke.unstable_batchedUpdates=function(j,x){return j(x)},ke.useFormState=function(j,x,N){return T.H.useFormState(j,x,N)},ke.useFormStatus=function(){return T.H.useHostTransitionStatus()},ke.version="19.1.1",ke}var Ud;function Up(){if(Ud)return Ar.exports;Ud=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),Ar.exports=_p(),Ar.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Hp(){if(Hd)return Dn;Hd=1;var c=Cp(),f=Mr(),d=Up();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function T(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(v(e)!==e)throw Error(o(188))}function j(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return O(n),e;if(i===l)return O(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,s=n.child;s;){if(s===a){r=!0,a=n,l=i;break}if(s===l){r=!0,l=n,a=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===a){r=!0,a=i,l=n;break}if(s===l){r=!0,l=i,a=n;break}s=s.sibling}if(!r)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,_=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var Aa=Symbol.for("react.client.reference");function Ea(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Aa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case G:return"Profiler";case W:return"StrictMode";case P:return"Suspense";case Ce:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:Ea(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Ea(e(t))}catch{}}return null}var Qe=Array.isArray,M=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],p=-1;function C(e){return{current:e}}function B(e){0>p||(e.current=pe[p],pe[p]=null,p--)}function U(e,t){p++,pe[p]=e.current,e.current=t}var k=C(null),ce=C(null),I=C(null),tt=C(null);function ve(e,t){switch(U(I,t),U(ce,e),U(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ad(t),e=ld(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(k),U(k,e)}function $t(){B(k),B(ce),B(I)}function lu(e){e.memoizedState!==null&&U(tt,e);var t=k.current,a=ld(t,e.type);t!==a&&(U(ce,e),U(k,a))}function Hn(e){ce.current===e&&(B(k),B(ce)),tt.current===e&&(B(tt),An._currentValue=F)}var nu=Object.prototype.hasOwnProperty,iu=c.unstable_scheduleCallback,uu=c.unstable_cancelCallback,uh=c.unstable_shouldYield,ch=c.unstable_requestPaint,Et=c.unstable_now,rh=c.unstable_getCurrentPriorityLevel,_r=c.unstable_ImmediatePriority,Ur=c.unstable_UserBlockingPriority,qn=c.unstable_NormalPriority,sh=c.unstable_LowPriority,Hr=c.unstable_IdlePriority,oh=c.log,fh=c.unstable_setDisableYieldValue,wl=null,at=null;function Wt(e){if(typeof oh=="function"&&fh(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(wl,e)}catch{}}var lt=Math.clz32?Math.clz32:mh,dh=Math.log,hh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(dh(e)/hh|0)|0}var Bn=256,Yn=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Na(l):(r&=s,r!==0?n=Na(r):a||(a=s&~e,a!==0&&(n=Na(a))))):(s=l&~i,s!==0?n=Na(s):r!==0?n=Na(r):a||(a=l&~e,a!==0&&(n=Na(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ph(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(){var e=Bn;return Bn<<=1,(Bn&4194048)===0&&(Bn=256),e}function Br(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function cu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ol(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gh(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,S=e.hiddenUpdates;for(a=r&~a;0<a;){var R=31-lt(a),z=1<<R;s[R]=0,h[R]=-1;var A=S[R];if(A!==null)for(S[R]=null,R=0;R<A.length;R++){var E=A[R];E!==null&&(E.lane&=-536870913)}a&=~z}l!==0&&Yr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Yr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Gr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ru(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:jd(e.type))}function xh(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var Pt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Pt,Je="__reactProps$"+Pt,Qa="__reactContainer$"+Pt,ou="__reactEvents$"+Pt,vh="__reactListeners$"+Pt,bh="__reactHandles$"+Pt,Xr="__reactResources$"+Pt,Cl="__reactMarker$"+Pt;function fu(e){delete e[Ve],delete e[Je],delete e[ou],delete e[vh],delete e[bh]}function Va(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Ve])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[Ve]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ka(e){var t=e[Xr];return t||(t=e[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Cl]=!0}var Qr=new Set,Vr={};function Ta(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Qr.add(t[e])}var yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zr={},kr={};function Sh(e){return nu.call(kr,e)?!0:nu.call(Zr,e)?!1:yh.test(e)?kr[e]=!0:(Zr[e]=!0,!1)}function Ln(e,t,a){if(Sh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var du,Kr;function Ja(e){if(du===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);du=t&&t[1]||"",Kr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+du+e+Kr}var hu=!1;function mu(e,t){if(!e||hu)return"";hu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(E){var A=E}Reflect.construct(e,[],z)}else{try{z.call()}catch(E){A=E}e.call(z.prototype)}}else{try{throw Error()}catch(E){A=E}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],s=i[1];if(r&&s){var h=r.split(`
`),S=s.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===S.length)for(l=h.length-1,n=S.length-1;1<=l&&0<=n&&h[l]!==S[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==S[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==S[n]){var R=`
`+h[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{hu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function jh(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return mu(e.type,!1);case 11:return mu(e.type.render,!1);case 1:return mu(e.type,!0);case 31:return Ja("Activity");default:return""}}function Jr(e){try{var t="";do t+=jh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ah(e){var t=Fr(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qn(e){e._valueTracker||(e._valueTracker=Ah(e))}function $r(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Fr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Eh=/[\n"\\]/g;function ht(e){return e.replace(Eh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pu(e,t,a,l,n,i,r,s){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?gu(e,r,dt(t)):a!=null?gu(e,r,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+dt(s):e.removeAttribute("name")}function Wr(e,t,a,l,n,i,r,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function gu(e,t,a){t==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Fa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Pr(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Ir(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Nh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function es(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Nh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ts(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&es(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&es(e,i,t[i])}function xu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(e){return Rh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Pa=null;function as(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(pu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Je]||null;if(!n)throw Error(o(90));pu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&$r(l)}break e;case"textarea":Pr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Fa(e,!!a.multiple,t,!1)}}}var yu=!1;function ls(e,t,a){if(yu)return e(t,a);yu=!0;try{var l=e(t);return l}finally{if(yu=!1,(Wa!==null||Pa!==null)&&(wi(),Wa&&(t=Wa,e=Pa,Pa=Wa=null,as(t),e)))for(t=0;t<e.length;t++)as(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Ct)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{Su=!1}var It=null,ju=null,kn=null;function ns(){if(kn)return kn;var e,t=ju,a=t.length,l,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return kn=n.slice(e,1<l?1-l:void 0)}function Kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function is(){return!1}function Fe(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jn:is,this.isPropagationStopped=is,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Fe(Ra),ql=N({},Ra,{view:0,detail:0}),Mh=Fe(ql),Au,Eu,Bl,$n=N({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(Au=e.screenX-Bl.screenX,Eu=e.screenY-Bl.screenY):Eu=Au=0,Bl=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),us=Fe($n),Dh=N({},$n,{dataTransfer:0}),wh=Fe(Dh),zh=N({},ql,{relatedTarget:0}),Nu=Fe(zh),Oh=N({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Ch=Fe(Oh),_h=N({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uh=Fe(_h),Hh=N({},Ra,{data:0}),cs=Fe(Hh),qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yh[e])?!!t[e]:!1}function Tu(){return Gh}var Lh=N({},ql,{key:function(e){if(e.key){var t=qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?Kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=Fe(Lh),Qh=N({},$n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rs=Fe(Qh),Vh=N({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Zh=Fe(Vh),kh=N({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kh=Fe(kh),Jh=N({},$n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fh=Fe(Jh),$h=N({},Ra,{newState:0,oldState:0}),Wh=Fe($h),Ph=[9,13,27,32],Ru=Ct&&"CompositionEvent"in window,Yl=null;Ct&&"documentMode"in document&&(Yl=document.documentMode);var Ih=Ct&&"TextEvent"in window&&!Yl,ss=Ct&&(!Ru||Yl&&8<Yl&&11>=Yl),os=" ",fs=!1;function ds(e,t){switch(e){case"keyup":return Ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function em(e,t){switch(e){case"compositionend":return hs(t);case"keypress":return t.which!==32?null:(fs=!0,os);case"textInput":return e=t.data,e===os&&fs?null:e;default:return null}}function tm(e,t){if(Ia)return e==="compositionend"||!Ru&&ds(e,t)?(e=ns(),kn=ju=It=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ss&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function ps(e,t,a,l){Wa?Pa?Pa.push(l):Pa=[l]:Wa=l,t=Hi(t,"onChange"),0<t.length&&(a=new Fn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Gl=null,Ll=null;function lm(e){Wf(e,0)}function Wn(e){var t=_l(e);if($r(t))return e}function gs(e,t){if(e==="change")return t}var xs=!1;if(Ct){var Mu;if(Ct){var Du="oninput"in document;if(!Du){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),Du=typeof vs.oninput=="function"}Mu=Du}else Mu=!1;xs=Mu&&(!document.documentMode||9<document.documentMode)}function bs(){Gl&&(Gl.detachEvent("onpropertychange",ys),Ll=Gl=null)}function ys(e){if(e.propertyName==="value"&&Wn(Ll)){var t=[];ps(t,Ll,e,bu(e)),ls(lm,t)}}function nm(e,t,a){e==="focusin"?(bs(),Gl=t,Ll=a,Gl.attachEvent("onpropertychange",ys)):e==="focusout"&&bs()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wn(Ll)}function um(e,t){if(e==="click")return Wn(t)}function cm(e,t){if(e==="input"||e==="change")return Wn(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:rm;function Xl(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!nu.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function Ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function js(e,t){var a=Ss(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ss(a)}}function As(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?As(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Es(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vn(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var sm=Ct&&"documentMode"in document&&11>=document.documentMode,el=null,zu=null,Ql=null,Ou=!1;function Ns(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||el==null||el!==Vn(l)||(l=el,"selectionStart"in l&&wu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Xl(Ql,l)||(Ql=l,l=Hi(zu,"onSelect"),0<l.length&&(t=new Fn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Cu={},Ts={};Ct&&(Ts=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Da(e){if(Cu[e])return Cu[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ts)return Cu[e]=t[a];return e}var Rs=Da("animationend"),Ms=Da("animationiteration"),Ds=Da("animationstart"),om=Da("transitionrun"),fm=Da("transitionstart"),dm=Da("transitioncancel"),ws=Da("transitionend"),zs=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function St(e,t){zs.set(e,t),Ta(t,[e])}var Os=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Os.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Jr(t)},Os.set(e,t),t)}return{value:e,source:t,stack:Jr(t)}}var pt=[],al=0,Uu=0;function Pn(){for(var e=al,t=Uu=al=0;t<e;){var a=pt[t];pt[t++]=null;var l=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var i=pt[t];if(pt[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&Cs(a,n,i)}}function In(e,t,a,l){pt[al++]=e,pt[al++]=t,pt[al++]=a,pt[al++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hu(e,t,a,l){return In(e,t,a,l),ei(e)}function ll(e,t){return In(e,null,null,t),ei(e)}function Cs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-lt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ei(e){if(50<pn)throw pn=0,Xc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function hm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,l){return new hm(e,t,a,l)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _t(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _s(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")qu(e)&&(r=1);else if(typeof e=="string")r=pp(e,a,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=it(31,a,t,n),e.elementType=Ae,e.lanes=i,e;case V:return wa(a.children,n,i,t);case W:r=8,n|=24;break;case G:return e=it(12,a,t,n|2),e.elementType=G,e.lanes=i,e;case P:return e=it(13,a,t,n),e.elementType=P,e.lanes=i,e;case Ce:return e=it(19,a,t,n),e.elementType=Ce,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:case ee:r=10;break e;case L:r=9;break e;case ye:r=11;break e;case we:r=14;break e;case _e:r=16,l=null;break e}r=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=it(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function wa(e,t,a,l){return e=it(7,e,l,t),e.lanes=a,e}function Bu(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Yu(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var il=[],ul=0,ai=null,li=0,gt=[],xt=0,za=null,Ut=1,Ht="";function Oa(e,t){il[ul++]=li,il[ul++]=ai,ai=e,li=t}function Us(e,t,a){gt[xt++]=Ut,gt[xt++]=Ht,gt[xt++]=za,za=e;var l=Ut;e=Ht;var n=32-lt(l)-1;l&=~(1<<n),a+=1;var i=32-lt(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Ut=1<<32-lt(t)+n|a<<n|l,Ht=i+e}else Ut=1<<i|a<<n|l,Ht=e}function Gu(e){e.return!==null&&(Oa(e,1),Us(e,1,0))}function Lu(e){for(;e===ai;)ai=il[--ul],il[ul]=null,li=il[--ul],il[ul]=null;for(;e===za;)za=gt[--xt],gt[xt]=null,Ht=gt[--xt],gt[xt]=null,Ut=gt[--xt],gt[xt]=null}var Ke=null,Ee=null,se=!1,Ca=null,Nt=!1,Xu=Error(o(519));function _a(e){var t=Error(o(418,""));throw kl(mt(t,e)),Xu}function Hs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[Je]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<xn.length;a++)ie(xn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),Wr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Qn(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Ir(t,l.value,l.defaultValue,l.children),Qn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||td(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=qi),t=!0):t=!1,t||_a(e)}function qs(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ke=Ke.return}}function Vl(e){if(e!==Ke)return!1;if(!se)return qs(e),se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nr(e.type,e.memoizedProps)),a=!a),a&&Ee&&_a(e),qs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ee=At(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ee=null}}else t===27?(t=Ee,pa(e.type)?(e=rr,rr=null,Ee=e):Ee=t):Ee=Ke?At(e.stateNode.nextSibling):null;return!0}function Zl(){Ee=Ke=null,se=!1}function Bs(){var e=Ca;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),Ca=null),e}function kl(e){Ca===null?Ca=[e]:Ca.push(e)}var Qu=C(null),Ua=null,qt=null;function ea(e,t,a){U(Qu,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Qu.current,B(Qu)}function Vu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Zu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Vu(i.return,a,e),l||(r=null);break e}i=s.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(o(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Vu(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Kl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var s=n.type;nt(n.pendingProps.value,r.value)||(e!==null?e.push(s):e=[s])}}else if(n===tt.current){if(r=n.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(An):e=[An])}n=n.return}e!==null&&Zu(t,e,a,l),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ua=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Ys(Ua,e)}function ii(e,t){return Ua===null&&Ha(e),Ys(e,t)}function Ys(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(o(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},pm=c.unstable_scheduleCallback,gm=c.unstable_NormalPriority,ze={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new mm,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&pm(gm,function(){e.controller.abort()})}var Fl=null,Ku=0,cl=0,rl=null;function xm(e,t){if(Fl===null){var a=Fl=[];Ku=0,cl=Fc(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ku++,t.then(Gs,Gs),t}function Gs(){if(--Ku===0&&Fl!==null){rl!==null&&(rl.status="fulfilled");var e=Fl;Fl=null,cl=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ls=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&xm(e,t),Ls!==null&&Ls(e,t)};var qa=C(null);function Ju(){var e=qa.current;return e!==null?e:xe.pooledCache}function ui(e,t){t===null?U(qa,qa.current):U(qa,t.pool)}function Xs(){var e=Ju();return e===null?null:{parent:ze._currentValue,pool:e}}var $l=Error(o(460)),Qs=Error(o(474)),ci=Error(o(542)),Fu={then:function(){}};function Vs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Zs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ri,ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ks(e),e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ks(e),e}throw Wl=t,$l}}var Wl=null;function ks(){if(Wl===null)throw Error(o(459));var e=Wl;return Wl=null,e}function Ks(e){if(e===$l||e===ci)throw Error(o(483))}var ta=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ei(e),Cs(e,null,a),t}return In(e,l,t,a),ei(e)}function Pl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gr(e,a)}}function Pu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Iu=!1;function Il(){if(Iu){var e=rl;if(e!==null)throw e}}function en(e,t,a,l){Iu=!1;var n=e.updateQueue;ta=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var h=s,S=h.next;h.next=null,r===null?i=S:r.next=S,r=h;var R=e.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==r&&(s===null?R.firstBaseUpdate=S:s.next=S,R.lastBaseUpdate=h))}if(i!==null){var z=n.baseState;r=0,R=S=h=null,s=i;do{var A=s.lane&-536870913,E=A!==s.lane;if(E?(ue&A)===A:(l&A)===A){A!==0&&A===cl&&(Iu=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var $=e,K=s;A=t;var me=a;switch(K.tag){case 1:if($=K.payload,typeof $=="function"){z=$.call(me,z,A);break e}z=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=K.payload,A=typeof $=="function"?$.call(me,z,A):$,A==null)break e;z=N({},z,A);break e;case 2:ta=!0}}A=s.callback,A!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[A]:E.push(A))}else E={lane:A,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(S=R=E,h=z):R=R.next=E,r|=A;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;E=s,s=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);R===null&&(h=z),n.baseState=h,n.firstBaseUpdate=S,n.lastBaseUpdate=R,i===null&&(n.shared.lanes=0),fa|=r,e.lanes=r,e.memoizedState=z}}function Js(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Fs(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Js(a[e],t)}var sl=C(null),si=C(0);function $s(e,t){e=Zt,U(si,e),U(sl,t),Zt=e|t.baseLanes}function ec(){U(si,Zt),U(sl,sl.current)}function tc(){Zt=si.current,B(sl),B(si)}var na=0,ae=null,de=null,Me=null,oi=!1,ol=!1,Ba=!1,fi=0,tn=0,fl=null,bm=0;function Te(){throw Error(o(321))}function ac(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function lc(e,t,a,l,n,i){return na=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?_o:Uo,Ba=!1,i=a(l,n),Ba=!1,ol&&(i=Ps(t,a,l,n)),Ws(e),i}function Ws(e){M.H=xi;var t=de!==null&&de.next!==null;if(na=0,Me=de=ae=null,oi=!1,tn=0,fl=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&ni(e)&&(He=!0))}function Ps(e,t,a,l){ae=e;var n=0;do{if(ol&&(fl=null),tn=0,ol=!1,25<=n)throw Error(o(301));if(n+=1,Me=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Tm,i=t(a,l)}while(ol);return i}function ym(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(ae.flags|=1024),t}function nc(){var e=fi!==0;return fi=0,e}function ic(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function uc(e){if(oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oi=!1}na=0,Me=de=ae=null,ol=!1,tn=fi=0,fl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ae.memoizedState=Me=e:Me=Me.next=e,Me}function De(){if(de===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Me===null?ae.memoizedState:Me.next;if(t!==null)Me=t,de=e;else{if(e===null)throw ae.alternate===null?Error(o(467)):Error(o(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Me===null?ae.memoizedState=Me=e:Me=Me.next=e}return Me}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,fl===null&&(fl=[]),e=Zs(fl,e,t),t=ae,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?_o:Uo),e}function di(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===ee)return Ze(e)}throw Error(o(438,String(e)))}function rc(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=cc(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=et;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=De();return sc(t,de,e)}function sc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=r=null,h=null,S=t,R=!1;do{var z=S.lane&-536870913;if(z!==S.lane?(ue&z)===z:(na&z)===z){var A=S.revertLane;if(A===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),z===cl&&(R=!0);else if((na&A)===A){S=S.next,A===cl&&(R=!0);continue}else z={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=z,r=i):h=h.next=z,ae.lanes|=A,fa|=A;z=S.action,Ba&&a(i,z),i=S.hasEagerState?S.eagerState:a(i,z)}else A={lane:z,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=A,r=i):h=h.next=A,ae.lanes|=z,fa|=z;S=S.next}while(S!==null&&S!==t);if(h===null?r=i:h.next=s,!nt(i,e.memoizedState)&&(He=!0,R&&(a=rl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function oc(e){var t=De(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);nt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Is(e,t,a){var l=ae,n=De(),i=se;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var r=!nt((de||n).memoizedState,a);r&&(n.memoizedState=a,He=!0),n=n.queue;var s=ao.bind(null,l,n,e);if(ln(2048,8,s,[e]),n.getSnapshot!==t||r||Me!==null&&Me.memoizedState.tag&1){if(l.flags|=2048,dl(9,mi(),to.bind(null,l,n,a,t),null),xe===null)throw Error(o(349));i||(na&124)!==0||eo(l,t,a)}return a}function eo(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=cc(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function to(e,t,a,l){t.value=a,t.getSnapshot=l,lo(t)&&no(e)}function ao(e,t,a){return a(function(){lo(t)&&no(e)})}function lo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function no(e){var t=ll(e,2);t!==null&&ot(t,e,2)}function fc(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ba){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function io(e,t,a,l){return e.baseState=a,sc(e,de,typeof l=="function"?l:Yt)}function Sm(e,t,a,l,n){if(gi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,uo(t,i)):(i.next=a.next,t.pending=a.next=i)}}function uo(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,r={};M.T=r;try{var s=a(n,l),h=M.S;h!==null&&h(r,s),co(e,t,s)}catch(S){dc(e,t,S)}finally{M.T=i}}else try{i=a(n,l),co(e,t,i)}catch(S){dc(e,t,S)}}function co(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ro(e,t,l)},function(l){return dc(e,t,l)}):ro(e,t,a)}function ro(e,t,a){t.status="fulfilled",t.value=a,so(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,uo(e,a)))}function dc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,so(t),t=t.next;while(t!==l)}e.action=null}function so(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function oo(e,t){return t}function fo(e,t){if(se){var a=xe.formState;if(a!==null){e:{var l=ae;if(se){if(Ee){t:{for(var n=Ee,i=Nt;n.nodeType!==8;){if(!i){n=null;break t}if(n=At(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=At(n.nextSibling),l=n.data==="F!";break e}}_a(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},a.queue=l,a=zo.bind(null,ae,l),l.dispatch=a,l=fc(!1),i=xc.bind(null,ae,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Sm.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ho(e){var t=De();return mo(t,de,e)}function mo(e,t,a){if(t=sc(e,t,oo)[0],e=hi(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(r){throw r===$l?ci:r}else l=t;t=De();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,dl(9,mi(),jm.bind(null,n,a),null)),[l,i,e]}function jm(e,t){e.action=t}function po(e){var t=De(),a=de;if(a!==null)return mo(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=cc(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function go(){return De().memoizedState}function pi(e,t,a,l){var n=$e();l=l===void 0?null:l,ae.flags|=e,n.memoizedState=dl(1|t,mi(),a,l)}function ln(e,t,a,l){var n=De();l=l===void 0?null:l;var i=n.memoizedState.inst;de!==null&&l!==null&&ac(l,de.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(ae.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function xo(e,t){pi(8390656,8,e,t)}function vo(e,t){ln(2048,8,e,t)}function bo(e,t){return ln(4,2,e,t)}function yo(e,t){return ln(4,4,e,t)}function So(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jo(e,t,a){a=a!=null?a.concat([e]):null,ln(4,4,So.bind(null,t,e),a)}function hc(){}function Ao(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ac(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Eo(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ac(t,l[1]))return l[0];if(l=e(),Ba){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l}function mc(e,t,a){return a===void 0||(na&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Mf(),ae.lanes|=e,fa|=e,a)}function No(e,t,a,l){return nt(a,t)?a:sl.current!==null?(e=mc(e,a,l),nt(e,t)||(He=!0),e):(na&42)===0?(He=!0,e.memoizedState=a):(e=Mf(),ae.lanes|=e,fa|=e,t)}function To(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var r=M.T,s={};M.T=s,xc(e,!1,t,a);try{var h=n(),S=M.S;if(S!==null&&S(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=vm(h,l);nn(e,t,R,st(e))}else nn(e,t,l,st(e))}catch(z){nn(e,t,{then:function(){},status:"rejected",reason:z},st())}finally{H.p=i,M.T=r}}function Am(){}function pc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Ro(e).queue;To(e,n,t,F,a===null?Am:function(){return Mo(e),a(l)})}function Ro(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mo(e){var t=Ro(e).next.queue;nn(e,t,{},st())}function gc(){return Ze(An)}function Do(){return De().memoizedState}function wo(){return De().memoizedState}function Em(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=aa(a);var l=la(t,e,a);l!==null&&(ot(l,t,a),Pl(l,t,a)),t={cache:ku()},e.payload=t;return}t=t.return}}function Nm(e,t,a){var l=st();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gi(e)?Oo(t,a):(a=Hu(e,t,a,l),a!==null&&(ot(a,e,l),Co(a,t,l)))}function zo(e,t,a){var l=st();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gi(e))Oo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,s=i(r,a);if(n.hasEagerState=!0,n.eagerState=s,nt(s,r))return In(e,t,n,0),xe===null&&Pn(),!1}catch{}finally{}if(a=Hu(e,t,n,l),a!==null)return ot(a,e,l),Co(a,t,l),!0}return!1}function xc(e,t,a,l){if(l={lane:2,revertLane:Fc(),action:l,hasEagerState:!1,eagerState:null,next:null},gi(e)){if(t)throw Error(o(479))}else t=Hu(e,a,l,2),t!==null&&ot(t,e,2)}function gi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Oo(e,t){ol=oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Co(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gr(e,a)}}var xi={readContext:Ze,use:di,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},_o={readContext:Ze,use:di,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:xo,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pi(4194308,4,So.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){pi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ba){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ba){Wt(!0);try{a(t)}finally{Wt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Nm.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=fc(e);var t=e.queue,a=zo.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:hc,useDeferredValue:function(e,t){var a=$e();return mc(a,e,t)},useTransition:function(){var e=fc(!1);return e=To.bind(null,ae,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=$e();if(se){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),xe===null)throw Error(o(349));(ue&124)!==0||eo(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,xo(ao.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,mi(),to.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=xe.identifierPrefix;if(se){var a=Ht,l=Ut;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=fi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=bm++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:gc,useFormState:fo,useActionState:fo,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xc.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:rc,useCacheRefresh:function(){return $e().memoizedState=Em.bind(null,ae)}},Uo={readContext:Ze,use:di,useCallback:Ao,useContext:Ze,useEffect:vo,useImperativeHandle:jo,useInsertionEffect:bo,useLayoutEffect:yo,useMemo:Eo,useReducer:hi,useRef:go,useState:function(){return hi(Yt)},useDebugValue:hc,useDeferredValue:function(e,t){var a=De();return No(a,de.memoizedState,e,t)},useTransition:function(){var e=hi(Yt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Is,useId:Do,useHostTransitionStatus:gc,useFormState:ho,useActionState:ho,useOptimistic:function(e,t){var a=De();return io(a,de,e,t)},useMemoCache:rc,useCacheRefresh:wo},Tm={readContext:Ze,use:di,useCallback:Ao,useContext:Ze,useEffect:vo,useImperativeHandle:jo,useInsertionEffect:bo,useLayoutEffect:yo,useMemo:Eo,useReducer:oc,useRef:go,useState:function(){return oc(Yt)},useDebugValue:hc,useDeferredValue:function(e,t){var a=De();return de===null?mc(a,e,t):No(a,de.memoizedState,e,t)},useTransition:function(){var e=oc(Yt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Is,useId:Do,useHostTransitionStatus:gc,useFormState:po,useActionState:po,useOptimistic:function(e,t){var a=De();return de!==null?io(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rc,useCacheRefresh:wo},hl=null,un=0;function vi(e){var t=un;return un+=1,hl===null&&(hl=[]),Zs(hl,e,t)}function cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ho(e){var t=e._init;return t(e._payload)}function qo(e){function t(b,g){if(e){var y=b.deletions;y===null?(b.deletions=[g],b.flags|=16):y.push(g)}}function a(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function l(b){for(var g=new Map;b!==null;)b.key!==null?g.set(b.key,b):g.set(b.index,b),b=b.sibling;return g}function n(b,g){return b=_t(b,g),b.index=0,b.sibling=null,b}function i(b,g,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<g?(b.flags|=67108866,g):y):(b.flags|=67108866,g)):(b.flags|=1048576,g)}function r(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function s(b,g,y,w){return g===null||g.tag!==6?(g=Bu(y,b.mode,w),g.return=b,g):(g=n(g,y),g.return=b,g)}function h(b,g,y,w){var Y=y.type;return Y===V?R(b,g,y.props.children,w,y.key):g!==null&&(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===_e&&Ho(Y)===g.type)?(g=n(g,y.props),cn(g,y),g.return=b,g):(g=ti(y.type,y.key,y.props,null,b.mode,w),cn(g,y),g.return=b,g)}function S(b,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Yu(y,b.mode,w),g.return=b,g):(g=n(g,y.children||[]),g.return=b,g)}function R(b,g,y,w,Y){return g===null||g.tag!==7?(g=wa(y,b.mode,w,Y),g.return=b,g):(g=n(g,y),g.return=b,g)}function z(b,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Bu(""+g,b.mode,y),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case q:return y=ti(g.type,g.key,g.props,null,b.mode,y),cn(y,g),y.return=b,y;case X:return g=Yu(g,b.mode,y),g.return=b,g;case _e:var w=g._init;return g=w(g._payload),z(b,g,y)}if(Qe(g)||Xe(g))return g=wa(g,b.mode,y,null),g.return=b,g;if(typeof g.then=="function")return z(b,vi(g),y);if(g.$$typeof===ee)return z(b,ii(b,g),y);bi(b,g)}return null}function A(b,g,y,w){var Y=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return Y!==null?null:s(b,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case q:return y.key===Y?h(b,g,y,w):null;case X:return y.key===Y?S(b,g,y,w):null;case _e:return Y=y._init,y=Y(y._payload),A(b,g,y,w)}if(Qe(y)||Xe(y))return Y!==null?null:R(b,g,y,w,null);if(typeof y.then=="function")return A(b,g,vi(y),w);if(y.$$typeof===ee)return A(b,g,ii(b,y),w);bi(b,y)}return null}function E(b,g,y,w,Y){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return b=b.get(y)||null,s(g,b,""+w,Y);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case q:return b=b.get(w.key===null?y:w.key)||null,h(g,b,w,Y);case X:return b=b.get(w.key===null?y:w.key)||null,S(g,b,w,Y);case _e:var le=w._init;return w=le(w._payload),E(b,g,y,w,Y)}if(Qe(w)||Xe(w))return b=b.get(y)||null,R(g,b,w,Y,null);if(typeof w.then=="function")return E(b,g,y,vi(w),Y);if(w.$$typeof===ee)return E(b,g,y,ii(g,w),Y);bi(g,w)}return null}function $(b,g,y,w){for(var Y=null,le=null,Q=g,J=g=0,Be=null;Q!==null&&J<y.length;J++){Q.index>J?(Be=Q,Q=null):Be=Q.sibling;var re=A(b,Q,y[J],w);if(re===null){Q===null&&(Q=Be);break}e&&Q&&re.alternate===null&&t(b,Q),g=i(re,g,J),le===null?Y=re:le.sibling=re,le=re,Q=Be}if(J===y.length)return a(b,Q),se&&Oa(b,J),Y;if(Q===null){for(;J<y.length;J++)Q=z(b,y[J],w),Q!==null&&(g=i(Q,g,J),le===null?Y=Q:le.sibling=Q,le=Q);return se&&Oa(b,J),Y}for(Q=l(Q);J<y.length;J++)Be=E(Q,b,J,y[J],w),Be!==null&&(e&&Be.alternate!==null&&Q.delete(Be.key===null?J:Be.key),g=i(Be,g,J),le===null?Y=Be:le.sibling=Be,le=Be);return e&&Q.forEach(function(ya){return t(b,ya)}),se&&Oa(b,J),Y}function K(b,g,y,w){if(y==null)throw Error(o(151));for(var Y=null,le=null,Q=g,J=g=0,Be=null,re=y.next();Q!==null&&!re.done;J++,re=y.next()){Q.index>J?(Be=Q,Q=null):Be=Q.sibling;var ya=A(b,Q,re.value,w);if(ya===null){Q===null&&(Q=Be);break}e&&Q&&ya.alternate===null&&t(b,Q),g=i(ya,g,J),le===null?Y=ya:le.sibling=ya,le=ya,Q=Be}if(re.done)return a(b,Q),se&&Oa(b,J),Y;if(Q===null){for(;!re.done;J++,re=y.next())re=z(b,re.value,w),re!==null&&(g=i(re,g,J),le===null?Y=re:le.sibling=re,le=re);return se&&Oa(b,J),Y}for(Q=l(Q);!re.done;J++,re=y.next())re=E(Q,b,J,re.value,w),re!==null&&(e&&re.alternate!==null&&Q.delete(re.key===null?J:re.key),g=i(re,g,J),le===null?Y=re:le.sibling=re,le=re);return e&&Q.forEach(function(Rp){return t(b,Rp)}),se&&Oa(b,J),Y}function me(b,g,y,w){if(typeof y=="object"&&y!==null&&y.type===V&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case q:e:{for(var Y=y.key;g!==null;){if(g.key===Y){if(Y=y.type,Y===V){if(g.tag===7){a(b,g.sibling),w=n(g,y.props.children),w.return=b,b=w;break e}}else if(g.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===_e&&Ho(Y)===g.type){a(b,g.sibling),w=n(g,y.props),cn(w,y),w.return=b,b=w;break e}a(b,g);break}else t(b,g);g=g.sibling}y.type===V?(w=wa(y.props.children,b.mode,w,y.key),w.return=b,b=w):(w=ti(y.type,y.key,y.props,null,b.mode,w),cn(w,y),w.return=b,b=w)}return r(b);case X:e:{for(Y=y.key;g!==null;){if(g.key===Y)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){a(b,g.sibling),w=n(g,y.children||[]),w.return=b,b=w;break e}else{a(b,g);break}else t(b,g);g=g.sibling}w=Yu(y,b.mode,w),w.return=b,b=w}return r(b);case _e:return Y=y._init,y=Y(y._payload),me(b,g,y,w)}if(Qe(y))return $(b,g,y,w);if(Xe(y)){if(Y=Xe(y),typeof Y!="function")throw Error(o(150));return y=Y.call(y),K(b,g,y,w)}if(typeof y.then=="function")return me(b,g,vi(y),w);if(y.$$typeof===ee)return me(b,g,ii(b,y),w);bi(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(a(b,g.sibling),w=n(g,y),w.return=b,b=w):(a(b,g),w=Bu(y,b.mode,w),w.return=b,b=w),r(b)):a(b,g)}return function(b,g,y,w){try{un=0;var Y=me(b,g,y,w);return hl=null,Y}catch(Q){if(Q===$l||Q===ci)throw Q;var le=it(29,Q,null,b.mode);return le.lanes=w,le.return=b,le}finally{}}}var ml=qo(!0),Bo=qo(!1),vt=C(null),Tt=null;function ia(e){var t=e.alternate;U(Oe,Oe.current&1),U(vt,e),Tt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(Tt=e)}function Yo(e){if(e.tag===22){if(U(Oe,Oe.current),U(vt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else ua()}function ua(){U(Oe,Oe.current),U(vt,vt.current)}function Gt(e){B(vt),Tt===e&&(Tt=null),B(Oe)}var Oe=C(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||cr(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=st(),n=aa(l);n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Pl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=st(),n=aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),l=aa(a);l.tag=2,t!=null&&(l.callback=t),t=la(e,l,a),t!==null&&(ot(t,e,a),Pl(t,e,a))}};function Go(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,l)||!Xl(n,i):!0}function Lo(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xo(e){Si(e)}function Qo(e){console.error(e)}function Vo(e){Si(e)}function ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zo(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yc(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(e,t)},a}function ko(e){return e=aa(e),e.tag=3,e}function Ko(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Zo(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Zo(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Rm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Kl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 13:return Tt===null?Vc():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),kc(e,l,n)),!1;case 22:return a.flags|=65536,l===Fu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),kc(e,l,n)),!1}throw Error(o(435,a.tag))}return kc(e,l,n),Vc(),!1}if(se)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Xu&&(e=Error(o(422),{cause:l}),kl(mt(e,a)))):(l!==Xu&&(t=Error(o(423),{cause:l}),kl(mt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=mt(l,a),n=yc(e.stateNode,l,n),Pu(e,n),Ne!==4&&(Ne=2)),!1;var i=Error(o(520),{cause:l});if(i=mt(i,a),mn===null?mn=[i]:mn.push(i),Ne!==4&&(Ne=2),t===null)return!0;l=mt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=yc(a.stateNode,l,e),Pu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ko(n),Ko(n,e,a,l),Pu(a,n),!1}a=a.return}while(a!==null);return!1}var Jo=Error(o(461)),He=!1;function Ye(e,t,a,l){t.child=e===null?Bo(t,null,a,l):ml(t,e.child,a,l)}function Fo(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var s in l)s!=="ref"&&(r[s]=l[s])}else r=l;return Ha(t),l=lc(e,t,a,r,i,n),s=nc(),e!==null&&!He?(ic(e,t,n),Lt(e,t,n)):(se&&s&&Gu(t),t.flags|=1,Ye(e,t,l,n),t.child)}function $o(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!qu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Wo(e,t,i,l,n)):(e=ti(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Mc(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(r,l)&&e.ref===t.ref)return Lt(e,t,n)}return t.flags|=1,e=_t(i,l),e.ref=t.ref,e.return=t,t.child=e}function Wo(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Xl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Mc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Lt(e,t,n)}return Sc(e,t,a,l,n)}function Po(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Io(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?$s(t,i):ec(),Yo(t);else return t.lanes=t.childLanes=536870912,Io(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ui(t,i.cachePool),$s(t,i),ua(),t.memoizedState=null):(e!==null&&ui(t,null),ec(),ua());return Ye(e,t,n,a),t.child}function Io(e,t,a,l){var n=Ju();return n=n===null?null:{parent:ze._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ui(t,null),ec(),Yo(t),e!==null&&Kl(e,t,l,!0),null}function Ai(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Sc(e,t,a,l,n){return Ha(t),a=lc(e,t,a,l,void 0,n),l=nc(),e!==null&&!He?(ic(e,t,n),Lt(e,t,n)):(se&&l&&Gu(t),t.flags|=1,Ye(e,t,a,n),t.child)}function ef(e,t,a,l,n,i){return Ha(t),t.updateQueue=null,a=Ps(t,l,a,n),Ws(e),l=nc(),e!==null&&!He?(ic(e,t,i),Lt(e,t,i)):(se&&l&&Gu(t),t.flags|=1,Ye(e,t,a,i),t.child)}function tf(e,t,a,l,n){if(Ha(t),t.stateNode===null){var i=nl,r=a.contextType;typeof r=="object"&&r!==null&&(i=Ze(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},$u(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?Ze(r):nl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(vc(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&bc.enqueueReplaceState(i,i.state,null),en(t,l,i,n),Il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=Ya(a,s);i.props=h;var S=i.context,R=a.contextType;r=nl,typeof R=="object"&&R!==null&&(r=Ze(R));var z=a.getDerivedStateFromProps;R=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||S!==r)&&Lo(t,i,l,r),ta=!1;var A=t.memoizedState;i.state=A,en(t,l,i,n),Il(),S=t.memoizedState,s||A!==S||ta?(typeof z=="function"&&(vc(t,a,z,l),S=t.memoizedState),(h=ta||Go(t,a,h,l,A,S,r))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),i.props=l,i.state=S,i.context=r,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Wu(e,t),r=t.memoizedProps,R=Ya(a,r),i.props=R,z=t.pendingProps,A=i.context,S=a.contextType,h=nl,typeof S=="object"&&S!==null&&(h=Ze(S)),s=a.getDerivedStateFromProps,(S=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==z||A!==h)&&Lo(t,i,l,h),ta=!1,A=t.memoizedState,i.state=A,en(t,l,i,n),Il();var E=t.memoizedState;r!==z||A!==E||ta||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof s=="function"&&(vc(t,a,s,l),E=t.memoizedState),(R=ta||Go(t,a,R,l,A,E,h)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,E,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,E,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=h,l=R):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ai(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ml(t,e.child,null,n),t.child=ml(t,null,a,n)):Ye(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Lt(e,t,n),e}function af(e,t,a,l){return Zl(),t.flags|=256,Ye(e,t,a,l),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ac(e){return{baseLanes:e,cachePool:Xs()}}function Ec(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function lf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?ia(t):ua(),se){var s=Ee,h;if(h=s){e:{for(h=s,s=Nt;h.nodeType!==8;){if(!s){s=null;break e}if(h=At(h.nextSibling),h===null){s=null;break e}}s=h}s!==null?(t.memoizedState={dehydrated:s,treeContext:za!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},h=it(18,null,null,0),h.stateNode=s,h.return=t,t.child=h,Ke=t,Ee=null,h=!0):h=!1}h||_a(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return cr(s)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return s=l.children,l=l.fallback,n?(ua(),n=t.mode,s=Ei({mode:"hidden",children:s},n),l=wa(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,n=t.child,n.memoizedState=Ac(a),n.childLanes=Ec(e,r,a),t.memoizedState=jc,l):(ia(t),Nc(t,s))}if(h=e.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=Tc(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),n=l.fallback,s=t.mode,l=Ei({mode:"visible",children:l.children},s),n=wa(n,s,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,ml(t,e.child,null,a),l=t.child,l.memoizedState=Ac(a),l.childLanes=Ec(e,r,a),t.memoizedState=jc,t=n);else if(ia(t),cr(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var S=r.dgst;r=S,l=Error(o(419)),l.stack="",l.digest=r,kl({value:l,source:null,stack:null}),t=Tc(e,t,a)}else if(He||Kl(e,t,a,!1),r=(a&e.childLanes)!==0,He||r){if(r=xe,r!==null&&(l=a&-a,l=(l&42)!==0?1:ru(l),l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==h.retryLane))throw h.retryLane=l,ll(e,l),ot(r,e,l),Jo;s.data==="$?"||Vc(),t=Tc(e,t,a)}else s.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ee=At(s.nextSibling),Ke=t,se=!0,Ca=null,Nt=!1,e!==null&&(gt[xt++]=Ut,gt[xt++]=Ht,gt[xt++]=za,Ut=e.id,Ht=e.overflow,za=t),t=Nc(t,l.children),t.flags|=4096);return t}return n?(ua(),n=l.fallback,s=t.mode,h=e.child,S=h.sibling,l=_t(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,S!==null?n=_t(S,n):(n=wa(n,s,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,s=e.child.memoizedState,s===null?s=Ac(a):(h=s.cachePool,h!==null?(S=ze._currentValue,h=h.parent!==S?{parent:S,pool:S}:h):h=Xs(),s={baseLanes:s.baseLanes|a,cachePool:h}),n.memoizedState=s,n.childLanes=Ec(e,r,a),t.memoizedState=jc,l):(ia(t),a=e.child,e=a.sibling,a=_t(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Nc(e,t){return t=Ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ei(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Tc(e,t,a){return ml(t,e.child,null,a),e=Nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Vu(e.return,t,a)}function Rc(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function uf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ye(e,t,l.children,a),l=Oe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,a,t);else if(e.tag===19)nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(U(Oe,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Rc(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Rc(t,!0,a,null,i);break;case"together":Rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=_t(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=_t(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function Mm(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,ze,e.memoizedState.cache),Zl();break;case 27:case 5:lu(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?lf(e,t,a):(ia(t),e=Lt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return uf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Oe,Oe.current),l)break;return null;case 22:case 23:return t.lanes=0,Po(e,t,a);case 24:ea(t,ze,e.memoizedState.cache)}return Lt(e,t,a)}function cf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Mc(e,a)&&(t.flags&128)===0)return He=!1,Mm(e,t,a);He=(e.flags&131072)!==0}else He=!1,se&&(t.flags&1048576)!==0&&Us(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")qu(l)?(e=Ya(l,e),t.tag=1,t=tf(null,t,l,e,a)):(t.tag=0,t=Sc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ye){t.tag=11,t=Fo(null,t,l,e,a);break e}else if(n===we){t.tag=14,t=$o(null,t,l,e,a);break e}}throw t=Ea(l)||l,Error(o(306,t,""))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ya(l,t.pendingProps),tf(e,t,l,n,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Wu(e,t),en(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ea(t,ze,l),l!==i.cache&&Zu(t,[ze],a,!0),Il(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=af(e,t,l,a);break e}else if(l!==n){n=mt(Error(o(424)),t),kl(n),t=af(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=At(e.firstChild),Ke=t,se=!0,Ca=null,Nt=!0,a=Bo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zl(),l===n){t=Lt(e,t,a);break e}Ye(e,t,l,a)}t=t.child}return t;case 26:return Ai(e,t),e===null?(a=fd(t.type,null,t.pendingProps,null))?t.memoizedState=a:se||(a=t.type,e=t.pendingProps,l=Bi(I.current).createElement(a),l[Ve]=t,l[Je]=e,Le(l,a,e),Ue(l),t.stateNode=l):t.memoizedState=fd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lu(t),e===null&&se&&(l=t.stateNode=rd(t.type,t.pendingProps,I.current),Ke=t,Nt=!0,n=Ee,pa(t.type)?(rr=n,Ee=At(l.firstChild)):Ee=n),Ye(e,t,t.pendingProps.children,a),Ai(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=l=Ee)&&(l=ap(l,t.type,t.pendingProps,Nt),l!==null?(t.stateNode=l,Ke=t,Ee=At(l.firstChild),Nt=!1,n=!0):n=!1),n||_a(t)),lu(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,nr(n,i)?l=null:r!==null&&nr(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=lc(e,t,ym,null,null,a),An._currentValue=n),Ai(e,t),Ye(e,t,l,a),t.child;case 6:return e===null&&se&&((e=a=Ee)&&(a=lp(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,Ke=t,Ee=null,e=!0):e=!1),e||_a(t)),null;case 13:return lf(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ml(t,null,l,a):Ye(e,t,l,a),t.child;case 11:return Fo(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ea(t,t.type,l.value),Ye(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ha(t),n=Ze(n),l=l(n),t.flags|=1,Ye(e,t,l,a),t.child;case 14:return $o(e,t,t.type,t.pendingProps,a);case 15:return Wo(e,t,t.type,t.pendingProps,a);case 19:return uf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ei(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=_t(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Po(e,t,a);case 24:return Ha(t),l=Ze(ze),e===null?(n=Ju(),n===null&&(n=xe,i=ku(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},$u(t),ea(t,ze,n)):((e.lanes&a)!==0&&(Wu(e,t),en(t,null,null,a),Il()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ea(t,ze,l)):(l=i.cache,ea(t,ze,l),l!==n.cache&&Zu(t,[ze],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Xt(e){e.flags|=4}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gd(t)){if(t=vt.current,t!==null&&((ue&4194048)===ue?Tt!==null:(ue&62914560)!==ue&&(ue&536870912)===0||t!==Tt))throw Wl=Fu,Qs;e.flags|=8192}}function Ni(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Br():536870912,e.lanes|=t,vl|=t)}function rn(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Dm(e,t,a){var l=t.pendingProps;switch(Lu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(ze),$t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vl(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bs())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(Se(t),rf(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),Se(t),rf(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==l&&Xt(t),Se(t),t.flags&=-16777217),null;case 27:Hn(t),a=I.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}e=k.current,Vl(t)?Hs(t):(e=rd(n,l,a),t.stateNode=e,Xt(t))}return Se(t),null;case 5:if(Hn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}if(e=k.current,Vl(t))Hs(t);else{switch(n=Bi(I.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ve]=t,e[Je]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Le(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=I.current,Vl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||td(e.nodeValue,a)),e||_a(t)}else e=Bi(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Vl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ve]=t}else Zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=Bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ni(t,t.updateQueue),Se(t),null;case 4:return $t(),e===null&&Ic(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(B(Oe),n=t.memoizedState,n===null)return Se(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)rn(n,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=yi(e),i!==null){for(t.flags|=128,rn(n,!1),e=i.updateQueue,t.updateQueue=e,Ni(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)_s(a,e),a=a.sibling;return U(Oe,Oe.current&1|2),t.child}e=e.sibling}n.tail!==null&&Et()>Mi&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304)}else{if(!l)if(e=yi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ni(t,e),rn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!se)return Se(t),null}else 2*Et()-n.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Et(),t.sibling=null,e=Oe.current,U(Oe,l?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Gt(t),tc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Ni(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&B(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(ze),Se(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function wm(e,t){switch(Lu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(ze),$t(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Hn(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Oe),null;case 4:return $t(),null;case 10:return Bt(t.type),null;case 22:case 23:return Gt(t),tc(),e!==null&&B(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(ze),null;case 25:return null;default:return null}}function sf(e,t){switch(Lu(t),t.tag){case 3:Bt(ze),$t();break;case 26:case 27:case 5:Hn(t);break;case 4:$t();break;case 13:Gt(t);break;case 19:B(Oe);break;case 10:Bt(t.type);break;case 22:case 23:Gt(t),tc(),e!==null&&B(qa);break;case 24:Bt(ze)}}function sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(s){ge(t,t.return,s)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,n=t;var h=a,S=s;try{S()}catch(R){ge(n,h,R)}}}l=l.next}while(l!==i)}}catch(R){ge(t,t.return,R)}}function of(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Fs(t,a)}catch(l){ge(e,e.return,l)}}}function ff(e,t,a){a.props=Ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function Rt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function df(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function Dc(e,t,a){try{var l=e.stateNode;Wm(l,e.type,a,t),l[Je]=t}catch(n){ge(e,e.return,n)}}function hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qi));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(zc(e,t,a),e=e.sibling;e!==null;)zc(e,t,a),e=e.sibling}function Ti(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ti(e,t,a),e=e.sibling;e!==null;)Ti(e,t,a),e=e.sibling}function mf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Le(t,l,a),t[Ve]=e,t[Je]=a}catch(i){ge(e,e.return,i)}}var Qt=!1,Re=!1,Oc=!1,pf=typeof WeakSet=="function"?WeakSet:Set,qe=null;function zm(e,t){if(e=e.containerInfo,ar=Vi,e=Es(e),wu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,s=-1,h=-1,S=0,R=0,z=e,A=null;t:for(;;){for(var E;z!==a||n!==0&&z.nodeType!==3||(s=r+n),z!==i||l!==0&&z.nodeType!==3||(h=r+l),z.nodeType===3&&(r+=z.nodeValue.length),(E=z.firstChild)!==null;)A=z,z=E;for(;;){if(z===e)break t;if(A===a&&++S===n&&(s=r),A===i&&++R===l&&(h=r),(E=z.nextSibling)!==null)break;z=A,A=z.parentNode}z=E}a=s===-1||h===-1?null:{start:s,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(lr={focusedElem:e,selectionRange:a},Vi=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=Ya(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ur(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ur(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function gf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&sn(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){ge(a,a.return,r)}else{var n=Ya(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ge(a,a.return,r)}}l&64&&of(a),l&512&&on(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fs(e,t)}catch(r){ge(a,a.return,r)}}break;case 27:t===null&&l&4&&mf(a);case 26:case 5:ra(e,a),t===null&&l&4&&df(a),l&512&&on(a,a.return);break;case 12:ra(e,a);break;case 13:ra(e,a),l&4&&bf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gm.bind(null,a),np(e,a))));break;case 22:if(l=a.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||Re,n=Qt;var i=Re;Qt=l,(Re=t)&&!i?sa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),Qt=n,Re=i}break;case 30:break;default:ra(e,a)}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,We=!1;function Vt(e,t,a){for(a=a.child;a!==null;)vf(e,t,a),a=a.sibling}function vf(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(wl,a)}catch{}switch(a.tag){case 26:Re||Rt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Rt(a,t);var l=be,n=We;pa(a.type)&&(be=a.stateNode,We=!1),Vt(e,t,a),bn(a.stateNode),be=l,We=n;break;case 5:Re||Rt(a,t);case 6:if(l=be,n=We,be=null,Vt(e,t,a),be=l,We=n,be!==null)if(We)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{be.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:be!==null&&(We?(e=be,ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rn(e)):ud(be,a.stateNode));break;case 4:l=be,n=We,be=a.stateNode.containerInfo,We=!0,Vt(e,t,a),be=l,We=n;break;case 0:case 11:case 14:case 15:Re||ca(2,a,t),Re||ca(4,a,t),Vt(e,t,a);break;case 1:Re||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ff(a,t,l)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:Re=(l=Re)||a.memoizedState!==null,Vt(e,t,a),Re=l;break;default:Vt(e,t,a)}}function bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rn(e)}catch(a){ge(t,t.return,a)}}function Om(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pf),t;default:throw Error(o(435,e.tag))}}function Cc(e,t){var a=Om(e);t.forEach(function(l){var n=Lm.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function ut(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){be=s.stateNode,We=!1;break e}break;case 5:be=s.stateNode,We=!1;break e;case 3:case 4:be=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(be===null)throw Error(o(160));vf(i,r,n),be=null,We=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}var jt=null;function yf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ct(e),l&4&&(ca(3,e,e.return),sn(3,e),ca(5,e,e.return));break;case 1:ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=jt;if(ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Cl]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Le(i,l,a),i[Ve]=e,Ue(i),l=i;break e;case"link":var r=md("link","href",n).get(l+(a.href||""));if(r){for(var s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}i=n.createElement(l),Le(i,l,a),n.head.appendChild(i);break;case"meta":if(r=md("meta","content",n).get(l+(a.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}i=n.createElement(l),Le(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Ve]=e,Ue(i),l=i}e.stateNode=l}else pd(n,e.type,e.stateNode);else e.stateNode=hd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?pd(n,e.type,e.stateNode):hd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Dc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),a!==null&&l&4&&Dc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),e.flags&32){n=e.stateNode;try{$a(n,"")}catch(E){ge(e,e.return,E)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Dc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Oc=!0);break;case 6:if(ut(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(E){ge(e,e.return,E)}}break;case 3:if(Li=null,n=jt,jt=Yi(t.containerInfo),ut(t,e),jt=n,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(E){ge(e,e.return,E)}Oc&&(Oc=!1,Sf(e));break;case 4:l=jt,jt=Yi(e.stateNode.containerInfo),ut(t,e),ct(e),jt=l;break;case 12:ut(t,e),ct(e);break;case 13:ut(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yc=Et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Cc(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,S=Qt,R=Re;if(Qt=S||n,Re=R||h,ut(t,e),Re=R,Qt=S,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Qt||Re||Ga(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=h.stateNode;var z=h.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null;s.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(E){ge(h,h.return,E)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(E){ge(h,h.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Cc(e,a))));break;case 19:ut(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Cc(e,l)));break;case 30:break;case 21:break;default:ut(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(hf(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=wc(e);Ti(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&($a(r,""),a.flags&=-33);var s=wc(e);Ti(e,s,r);break;case 3:case 4:var h=a.stateNode.containerInfo,S=wc(e);zc(e,S,h);break;default:throw Error(o(161))}}catch(R){ge(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gf(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ga(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ff(t,t.return,a),Ga(t);break;case 27:bn(t.stateNode);case 26:case 5:Rt(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:sa(n,i,a),sn(4,i);break;case 1:if(sa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){ge(l,l.return,S)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Js(h[n],s)}catch(S){ge(l,l.return,S)}}a&&r&64&&of(i),on(i,i.return);break;case 27:mf(i);case 26:case 5:sa(n,i,a),a&&l===null&&r&4&&df(i),on(i,i.return);break;case 12:sa(n,i,a);break;case 13:sa(n,i,a),a&&r&4&&bf(n,i);break;case 22:i.memoizedState===null&&sa(n,i,a),on(i,i.return);break;case 30:break;default:sa(n,i,a)}t=t.sibling}}function _c(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function Uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function Mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jf(e,t,a,l),t=t.sibling}function jf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,l),n&2048&&sn(9,t);break;case 1:Mt(e,t,a,l);break;case 3:Mt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){Mt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,s=i.onPostCommit;typeof s=="function"&&s(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Mt(e,t,a,l);break;case 13:Mt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,a,l):fn(e,t):i._visibility&2?Mt(e,t,a,l):(i._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&_c(r,t);break;case 24:Mt(e,t,a,l),n&2048&&Uc(t.alternate,t);break;default:Mt(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,r=t,s=a,h=l,S=r.flags;switch(r.tag){case 0:case 11:case 15:pl(i,r,s,h,n),sn(8,r);break;case 23:break;case 22:var R=r.stateNode;r.memoizedState!==null?R._visibility&2?pl(i,r,s,h,n):fn(i,r):(R._visibility|=2,pl(i,r,s,h,n)),n&&S&2048&&_c(r.alternate,r);break;case 24:pl(i,r,s,h,n),n&&S&2048&&Uc(r.alternate,r);break;default:pl(i,r,s,h,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&_c(l.alternate,l);break;case 24:fn(a,l),n&2048&&Uc(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function gl(e){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 26:gl(e),e.flags&dn&&e.memoizedState!==null&&xp(jt,e.memoizedState,e.memoizedProps);break;case 5:gl(e);break;case 3:case 4:var t=jt;jt=Yi(e.stateNode.containerInfo),gl(e),jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dn,dn=16777216,gl(e),dn=t):gl(e));break;default:gl(e)}}function Ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Tf(l,e)}Ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 0:case 11:case 15:hn(e),e.flags&2048&&ca(9,e,e.return);break;case 3:hn(e);break;case 12:hn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ri(e)):hn(e);break;default:hn(e)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Tf(l,e)}Ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ri(t));break;default:Ri(t)}e=e.sibling}}function Tf(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var n=l.sibling,i=l.return;if(xf(l),l===a){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var Cm={getCacheForType:function(e){var t=Ze(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},_m=typeof WeakMap=="function"?WeakMap:Map,oe=0,xe=null,ne=null,ue=0,fe=0,rt=null,oa=!1,xl=!1,Hc=!1,Zt=0,Ne=0,fa=0,La=0,qc=0,bt=0,vl=0,mn=null,Pe=null,Bc=!1,Yc=0,Mi=1/0,Di=null,da=null,Ge=0,ha=null,bl=null,yl=0,Gc=0,Lc=null,Rf=null,pn=0,Xc=null;function st(){if((oe&2)!==0&&ue!==0)return ue&-ue;if(M.T!==null){var e=cl;return e!==0?e:Fc()}return Lr()}function Mf(){bt===0&&(bt=(ue&536870912)===0||se?qr():536870912);var e=vt.current;return e!==null&&(e.flags|=32),bt}function ot(e,t,a){(e===xe&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ma(e,ue,bt,!1)),Ol(e,a),((oe&2)===0||e!==xe)&&(e===xe&&((oe&2)===0&&(La|=a),Ne===4&&ma(e,ue,bt,!1)),Dt(e))}function Df(e,t,a){if((oe&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||zl(e,t),n=l?qm(e,t):Zc(e,t,!0),i=l;do{if(n===0){xl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Um(a)){n=Zc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var s=e;n=mn;var h=s.current.memoizedState.isDehydrated;if(h&&(Sl(s,r).flags|=256),r=Zc(s,r,!1),r!==2){if(Hc&&!h){s.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=Pe,Pe=n,i!==null&&(Pe===null?Pe=i:Pe.push.apply(Pe,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,bt,!oa);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Yc+300-Et(),10<n)){if(ma(l,t,bt,!oa),Gn(l,0,!0)!==0)break e;l.timeoutHandle=nd(wf.bind(null,l,a,Pe,Di,Bc,t,bt,La,vl,oa,i,2,-0,0),n);break e}wf(l,a,Pe,Di,Bc,t,bt,La,vl,oa,i,0,-0,0)}}break}while(!0);Dt(e)}function wf(e,t,a,l,n,i,r,s,h,S,R,z,A,E){if(e.timeoutHandle=-1,z=t.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(jn={stylesheets:null,count:0,unsuspend:gp},Af(t),z=vp(),z!==null)){e.cancelPendingCommit=z(qf.bind(null,e,t,i,a,l,n,r,s,h,R,1,A,E)),ma(e,i,r,!S);return}qf(e,t,i,a,l,n,r,s,h)}function Um(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~qc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-lt(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&Yr(e,a,t)}function wi(){return(oe&6)===0?(gn(0),!1):!0}function Qc(){if(ne!==null){if(fe===0)var e=ne.return;else e=ne,qt=Ua=null,uc(e),hl=null,un=0,e=ne;for(;e!==null;)sf(e.alternate,e),e=e.return;ne=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Im(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qc(),xe=e,ne=a=_t(e.current,null),ue=t,fe=0,rt=null,oa=!1,xl=zl(e,t),Hc=!1,vl=bt=qc=La=fa=Ne=0,Pe=mn=null,Bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-lt(l),i=1<<n;t|=e[n],l&=~i}return Zt=t,Pn(),a}function zf(e,t){ae=null,M.H=xi,t===$l||t===ci?(t=ks(),fe=3):t===Qs?(t=ks(),fe=4):fe=t===Jo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,ne===null&&(Ne=1,ji(e,mt(t,e.current)))}function Of(){var e=M.H;return M.H=xi,e===null?xi:e}function Cf(){var e=M.A;return M.A=Cm,e}function Vc(){Ne=4,oa||(ue&4194048)!==ue&&vt.current!==null||(xl=!0),(fa&134217727)===0&&(La&134217727)===0||xe===null||ma(xe,ue,bt,!1)}function Zc(e,t,a){var l=oe;oe|=2;var n=Of(),i=Cf();(xe!==e||ue!==t)&&(Di=null,Sl(e,t)),t=!1;var r=Ne;e:do try{if(fe!==0&&ne!==null){var s=ne,h=rt;switch(fe){case 8:Qc(),r=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var S=fe;if(fe=0,rt=null,jl(e,s,h,S),a&&xl){r=0;break e}break;default:S=fe,fe=0,rt=null,jl(e,s,h,S)}}Hm(),r=Ne;break}catch(R){zf(e,R)}while(!0);return t&&e.shellSuspendCounter++,qt=Ua=null,oe=l,M.H=n,M.A=i,ne===null&&(xe=null,ue=0,Pn()),r}function Hm(){for(;ne!==null;)_f(ne)}function qm(e,t){var a=oe;oe|=2;var l=Of(),n=Cf();xe!==e||ue!==t?(Di=null,Mi=Et()+500,Sl(e,t)):xl=zl(e,t);e:do try{if(fe!==0&&ne!==null){t=ne;var i=rt;t:switch(fe){case 1:fe=0,rt=null,jl(e,t,i,1);break;case 2:case 9:if(Vs(i)){fe=0,rt=null,Uf(t);break}t=function(){fe!==2&&fe!==9||xe!==e||(fe=7),Dt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Vs(i)?(fe=0,rt=null,Uf(t)):(fe=0,rt=null,jl(e,t,i,7));break;case 5:var r=null;switch(ne.tag){case 26:r=ne.memoizedState;case 5:case 27:var s=ne;if(!r||gd(r)){fe=0,rt=null;var h=s.sibling;if(h!==null)ne=h;else{var S=s.return;S!==null?(ne=S,zi(S)):ne=null}break t}}fe=0,rt=null,jl(e,t,i,5);break;case 6:fe=0,rt=null,jl(e,t,i,6);break;case 8:Qc(),Ne=6;break e;default:throw Error(o(462))}}Bm();break}catch(R){zf(e,R)}while(!0);return qt=Ua=null,M.H=l,M.A=n,oe=a,ne!==null?0:(xe=null,ue=0,Pn(),Ne)}function Bm(){for(;ne!==null&&!uh();)_f(ne)}function _f(e){var t=cf(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?zi(e):ne=t}function Uf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ef(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=ef(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:uc(t);default:sf(a,t),t=ne=_s(t,Zt),t=cf(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?zi(e):ne=t}function jl(e,t,a,l){qt=Ua=null,uc(t),hl=null,un=0;var n=t.return;try{if(Rm(e,n,t,a,ue)){Ne=1,ji(e,mt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Ne=1,ji(e,mt(a,e.current)),ne=null;return}t.flags&32768?(se||l===1?e=!0:xl||(ue&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hf(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){Hf(t,oa);return}e=t.return;var a=Dm(t.alternate,t,Zt);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ne===0&&(Ne=5)}function Hf(e,t){do{var a=wm(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ne=6,ne=null}function qf(e,t,a,l,n,i,r,s,h){e.cancelPendingCommit=null;do Oi();while(Ge!==0);if((oe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Uu,gh(e,a,i,r,s,h),e===xe&&(ne=xe=null,ue=0),bl=t,ha=e,yl=a,Gc=i,Lc=n,Rf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xm(qn,function(){return Xf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=H.p,H.p=2,r=oe,oe|=4;try{zm(e,t,a)}finally{oe=r,H.p=n,M.T=l}}Ge=1,Bf(),Yf(),Gf()}}function Bf(){if(Ge===1){Ge=0;var e=ha,t=bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=H.p;H.p=2;var n=oe;oe|=4;try{yf(t,e);var i=lr,r=Es(e.containerInfo),s=i.focusedElem,h=i.selectionRange;if(r!==s&&s&&s.ownerDocument&&As(s.ownerDocument.documentElement,s)){if(h!==null&&wu(s)){var S=h.start,R=h.end;if(R===void 0&&(R=S),"selectionStart"in s)s.selectionStart=S,s.selectionEnd=Math.min(R,s.value.length);else{var z=s.ownerDocument||document,A=z&&z.defaultView||window;if(A.getSelection){var E=A.getSelection(),$=s.textContent.length,K=Math.min(h.start,$),me=h.end===void 0?K:Math.min(h.end,$);!E.extend&&K>me&&(r=me,me=K,K=r);var b=js(s,K),g=js(s,me);if(b&&g&&(E.rangeCount!==1||E.anchorNode!==b.node||E.anchorOffset!==b.offset||E.focusNode!==g.node||E.focusOffset!==g.offset)){var y=z.createRange();y.setStart(b.node,b.offset),E.removeAllRanges(),K>me?(E.addRange(y),E.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),E.addRange(y))}}}}for(z=[],E=s;E=E.parentNode;)E.nodeType===1&&z.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<z.length;s++){var w=z[s];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Vi=!!ar,lr=ar=null}finally{oe=n,H.p=l,M.T=a}}e.current=t,Ge=2}}function Yf(){if(Ge===2){Ge=0;var e=ha,t=bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=H.p;H.p=2;var n=oe;oe|=4;try{gf(e,t.alternate,t)}finally{oe=n,H.p=l,M.T=a}}Ge=3}}function Gf(){if(Ge===4||Ge===3){Ge=0,ch();var e=ha,t=bl,a=yl,l=Rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,bl=ha=null,Lf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),su(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=H.p,H.p=2,M.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var s=l[r];i(s.value,{componentStack:s.stack})}}finally{M.T=t,H.p=n}}(yl&3)!==0&&Oi(),Dt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Xc?pn++:(pn=0,Xc=e):pn=0,gn(0)}}function Lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Oi(e){return Bf(),Yf(),Gf(),Xf()}function Xf(){if(Ge!==5)return!1;var e=ha,t=Gc;Gc=0;var a=su(yl),l=M.T,n=H.p;try{H.p=32>a?32:a,M.T=null,a=Lc,Lc=null;var i=ha,r=yl;if(Ge=0,bl=ha=null,yl=0,(oe&6)!==0)throw Error(o(331));var s=oe;if(oe|=4,Nf(i.current),jf(i,i.current,r,a),oe=s,gn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(wl,i)}catch{}return!0}finally{H.p=n,M.T=l,Lf(e,t)}}function Qf(e,t,a){t=mt(a,t),t=yc(e.stateNode,t,2),e=la(e,t,2),e!==null&&(Ol(e,2),Dt(e))}function ge(e,t,a){if(e.tag===3)Qf(e,e,a);else for(;t!==null;){if(t.tag===3){Qf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=mt(a,e),a=ko(2),l=la(t,a,2),l!==null&&(Ko(a,l,t,e),Ol(l,2),Dt(l));break}}t=t.return}}function kc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new _m;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Hc=!0,n.add(a),e=Ym.bind(null,e,t,a),t.then(e,e))}function Ym(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(ue&a)===a&&(Ne===4||Ne===3&&(ue&62914560)===ue&&300>Et()-Yc?(oe&2)===0&&Sl(e,0):qc|=a,vl===ue&&(vl=0)),Dt(e)}function Vf(e,t){t===0&&(t=Br()),e=ll(e,t),e!==null&&(Ol(e,t),Dt(e))}function Gm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vf(e,a)}function Lm(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Vf(e,a)}function Xm(e,t){return iu(e,t)}var Ci=null,Al=null,Kc=!1,_i=!1,Jc=!1,Xa=0;function Dt(e){e!==Al&&e.next===null&&(Al===null?Ci=Al=e:Al=Al.next=e),_i=!0,Kc||(Kc=!0,Vm())}function gn(e,t){if(!Jc&&_i){Jc=!0;do for(var a=!1,l=Ci;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=n&~(r&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Jf(l,i))}else i=ue,i=Gn(l,l===xe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||zl(l,i)||(a=!0,Jf(l,i));l=l.next}while(a);Jc=!1}}function Qm(){Zf()}function Zf(){_i=Kc=!1;var e=0;Xa!==0&&(Pm()&&(e=Xa),Xa=0);for(var t=Et(),a=null,l=Ci;l!==null;){var n=l.next,i=kf(l,t);i===0?(l.next=null,a===null?Ci=n:a.next=n,n===null&&(Al=a)):(a=l,(e!==0||(i&3)!==0)&&(_i=!0)),l=n}gn(e)}function kf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-lt(i),s=1<<r,h=n[r];h===-1?((s&a)===0||(s&l)!==0)&&(n[r]=ph(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=xe,a=ue,a=Gn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&uu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&uu(l),su(a)){case 2:case 8:a=Ur;break;case 32:a=qn;break;case 268435456:a=Hr;break;default:a=qn}return l=Kf.bind(null,e),a=iu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&uu(l),e.callbackPriority=2,e.callbackNode=null,2}function Kf(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Oi()&&e.callbackNode!==a)return null;var l=ue;return l=Gn(e,e===xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Df(e,l,t),kf(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Kf.bind(null,e):null)}function Jf(e,t){if(Oi())return null;Df(e,t,!0)}function Vm(){ep(function(){(oe&6)!==0?iu(_r,Qm):Zf()})}function Fc(){return Xa===0&&(Xa=qr()),Xa}function Ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zn(""+e)}function $f(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Zm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Ff((n[Je]||null).action),r=l.submitter;r&&(t=(t=r[Je]||null)?Ff(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var s=new Fn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xa!==0){var h=r?$f(n,r):new FormData(n);pc(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=r?$f(n,r):new FormData(n),pc(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var $c=0;$c<_u.length;$c++){var Wc=_u[$c],km=Wc.toLowerCase(),Km=Wc[0].toUpperCase()+Wc.slice(1);St(km,"on"+Km)}St(Rs,"onAnimationEnd"),St(Ms,"onAnimationIteration"),St(Ds,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(om,"onTransitionRun"),St(fm,"onTransitionStart"),St(dm,"onTransitionCancel"),St(ws,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));function Wf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],h=s.instance,S=s.currentTarget;if(s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=S;try{i(n)}catch(R){Si(R)}n.currentTarget=null,i=h}else for(r=0;r<l.length;r++){if(s=l[r],h=s.instance,S=s.currentTarget,s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=S;try{i(n)}catch(R){Si(R)}n.currentTarget=null,i=h}}}}function ie(e,t){var a=t[ou];a===void 0&&(a=t[ou]=new Set);var l=e+"__bubble";a.has(l)||(Pf(t,e,2,!1),a.add(l))}function Pc(e,t,a){var l=0;t&&(l|=4),Pf(a,e,l,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[Ui]){e[Ui]=!0,Qr.forEach(function(a){a!=="selectionchange"&&(Jm.has(a)||Pc(a,!1,e),Pc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,Pc("selectionchange",!1,t))}}function Pf(e,t,a,l){switch(jd(t)){case 2:var n=Sp;break;case 8:n=jp;break;default:n=hr}a=n.bind(null,t,a,e),n=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function er(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===n)break;if(r===4)for(r=l.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;s!==null;){if(r=Va(s),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){l=i=r;continue e}s=s.parentNode}}l=l.return}ls(function(){var S=i,R=bu(a),z=[];e:{var A=zs.get(e);if(A!==void 0){var E=Fn,$=e;switch(e){case"keypress":if(Kn(a)===0)break e;case"keydown":case"keyup":E=Xh;break;case"focusin":$="focus",E=Nu;break;case"focusout":$="blur",E=Nu;break;case"beforeblur":case"afterblur":E=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Zh;break;case Rs:case Ms:case Ds:E=Ch;break;case ws:E=Kh;break;case"scroll":case"scrollend":E=Mh;break;case"wheel":E=Fh;break;case"copy":case"cut":case"paste":E=Uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=rs;break;case"toggle":case"beforetoggle":E=Wh}var K=(t&4)!==0,me=!K&&(e==="scroll"||e==="scrollend"),b=K?A!==null?A+"Capture":null:A;K=[];for(var g=S,y;g!==null;){var w=g;if(y=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||y===null||b===null||(w=Ul(g,b),w!=null&&K.push(vn(g,w,y))),me)break;g=g.return}0<K.length&&(A=new E(A,$,null,a,R),z.push({event:A,listeners:K}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",A&&a!==vu&&($=a.relatedTarget||a.fromElement)&&(Va($)||$[Qa]))break e;if((E||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,E?($=a.relatedTarget||a.toElement,E=S,$=$?Va($):null,$!==null&&(me=v($),K=$.tag,$!==me||K!==5&&K!==27&&K!==6)&&($=null)):(E=null,$=S),E!==$)){if(K=us,w="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(K=rs,w="onPointerLeave",b="onPointerEnter",g="pointer"),me=E==null?A:_l(E),y=$==null?A:_l($),A=new K(w,g+"leave",E,a,R),A.target=me,A.relatedTarget=y,w=null,Va(R)===S&&(K=new K(b,g+"enter",$,a,R),K.target=y,K.relatedTarget=me,w=K),me=w,E&&$)t:{for(K=E,b=$,g=0,y=K;y;y=El(y))g++;for(y=0,w=b;w;w=El(w))y++;for(;0<g-y;)K=El(K),g--;for(;0<y-g;)b=El(b),y--;for(;g--;){if(K===b||b!==null&&K===b.alternate)break t;K=El(K),b=El(b)}K=null}else K=null;E!==null&&If(z,A,E,K,!1),$!==null&&me!==null&&If(z,me,$,K,!0)}}e:{if(A=S?_l(S):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var Y=gs;else if(ms(A))if(xs)Y=cm;else{Y=im;var le=nm}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?S&&xu(S.elementType)&&(Y=gs):Y=um;if(Y&&(Y=Y(e,S))){ps(z,Y,a,R);break e}le&&le(e,A,S),e==="focusout"&&S&&A.type==="number"&&S.memoizedProps.value!=null&&gu(A,"number",A.value)}switch(le=S?_l(S):window,e){case"focusin":(ms(le)||le.contentEditable==="true")&&(el=le,zu=S,Ql=null);break;case"focusout":Ql=zu=el=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Ns(z,a,R);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":Ns(z,a,R)}var Q;if(Ru)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Ia?ds(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(ss&&a.locale!=="ko"&&(Ia||J!=="onCompositionStart"?J==="onCompositionEnd"&&Ia&&(Q=ns()):(It=R,ju="value"in It?It.value:It.textContent,Ia=!0)),le=Hi(S,J),0<le.length&&(J=new cs(J,e,null,a,R),z.push({event:J,listeners:le}),Q?J.data=Q:(Q=hs(a),Q!==null&&(J.data=Q)))),(Q=Ih?em(e,a):tm(e,a))&&(J=Hi(S,"onBeforeInput"),0<J.length&&(le=new cs("onBeforeInput","beforeinput",null,a,R),z.push({event:le,listeners:J}),le.data=Q)),Zm(z,e,S,a,R)}Wf(z,t)})}function vn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(vn(e,n,i)),n=Ul(e,t),n!=null&&l.push(vn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function El(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function If(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var s=a,h=s.alternate,S=s.stateNode;if(s=s.tag,h!==null&&h===l)break;s!==5&&s!==26&&s!==27||S===null||(h=S,n?(S=Ul(a,i),S!=null&&r.unshift(vn(a,S,h))):n||(S=Ul(a,i),S!=null&&r.push(vn(a,S,h)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var Fm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(Fm,`
`).replace($m,"")}function td(e,t){return t=ed(t),ed(e)===t}function qi(){}function he(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||$a(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&$a(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,a,l);break;case"style":ts(e,l,i);break;case"data":if(t!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qi);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Ln(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ln(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Th.get(a)||a,Ln(e,a,l))}}function tr(e,t,a,l,n,i){switch(a){case"style":ts(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?$a(e,l):(typeof l=="number"||typeof l=="bigint")&&$a(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Ln(e,a,l)}}}function Le(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,i,r,a,null)}}n&&he(e,t,"srcSet",a.srcSet,a,null),l&&he(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var s=i=r=n=null,h=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":r=R;break;case"checked":h=R;break;case"defaultChecked":S=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:he(e,t,l,R,a,null)}}Wr(e,i,s,h,S,r,n,!1),Qn(e);return;case"select":ie("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":r=s;break;case"multiple":l=s;default:he(e,t,n,s,a,null)}t=i,a=r,e.multiple=!!l,t!=null?Fa(e,!!l,t,!1):a!=null&&Fa(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(s=a[r],s!=null))switch(r){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:he(e,t,r,s,a,null)}Ir(e,l,n,i),Qn(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,h,l,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<xn.length;l++)ie(xn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,S,l,a,null)}return;default:if(xu(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&tr(e,t,R,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&he(e,t,s,l,a,null))}function Wm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,s=null,h=null,S=null,R=null;for(E in a){var z=a[E];if(a.hasOwnProperty(E)&&z!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":h=z;default:l.hasOwnProperty(E)||he(e,t,E,null,l,z)}}for(var A in l){var E=l[A];if(z=a[A],l.hasOwnProperty(A)&&(E!=null||z!=null))switch(A){case"type":i=E;break;case"name":n=E;break;case"checked":S=E;break;case"defaultChecked":R=E;break;case"value":r=E;break;case"defaultValue":s=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:E!==z&&he(e,t,A,E,l,z)}}pu(e,r,s,h,S,R,i,n);return;case"select":E=r=s=A=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":E=h;default:l.hasOwnProperty(i)||he(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":A=i;break;case"defaultValue":s=i;break;case"multiple":r=i;default:i!==h&&he(e,t,n,i,l,h)}t=s,a=r,l=E,A!=null?Fa(e,!!a,A,!1):!!l!=!!a&&(t!=null?Fa(e,!!a,t,!0):Fa(e,!!a,a?[]:"",!1));return;case"textarea":E=A=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:he(e,t,s,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":A=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&he(e,t,r,n,l,i)}Pr(e,A,E);return;case"option":for(var $ in a)if(A=a[$],a.hasOwnProperty($)&&A!=null&&!l.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:he(e,t,$,null,l,A)}for(h in l)if(A=l[h],E=a[h],l.hasOwnProperty(h)&&A!==E&&(A!=null||E!=null))switch(h){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:he(e,t,h,A,l,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)A=a[K],a.hasOwnProperty(K)&&A!=null&&!l.hasOwnProperty(K)&&he(e,t,K,null,l,A);for(S in l)if(A=l[S],E=a[S],l.hasOwnProperty(S)&&A!==E&&(A!=null||E!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:he(e,t,S,A,l,E)}return;default:if(xu(t)){for(var me in a)A=a[me],a.hasOwnProperty(me)&&A!==void 0&&!l.hasOwnProperty(me)&&tr(e,t,me,void 0,l,A);for(R in l)A=l[R],E=a[R],!l.hasOwnProperty(R)||A===E||A===void 0&&E===void 0||tr(e,t,R,A,l,E);return}}for(var b in a)A=a[b],a.hasOwnProperty(b)&&A!=null&&!l.hasOwnProperty(b)&&he(e,t,b,null,l,A);for(z in l)A=l[z],E=a[z],!l.hasOwnProperty(z)||A===E||A==null&&E==null||he(e,t,z,A,l,E)}var ar=null,lr=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ld(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ir=null;function Pm(){var e=window.event;return e&&e.type==="popstate"?e===ir?!1:(ir=e,!0):(ir=null,!1)}var nd=typeof setTimeout=="function"?setTimeout:void 0,Im=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(tp)}:nd;function tp(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function ud(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var r=e.ownerDocument;if(a&1&&bn(r.documentElement),a&2&&bn(r.body),a&4)for(a=r.head,bn(a),r=a.firstChild;r;){var s=r.nextSibling,h=r.nodeName;r[Cl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}if(n===0){e.removeChild(i),Rn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Rn(t)}function ur(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ur(a),fu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ap(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function lp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=At(e.nextSibling),e===null))return null;return e}function cr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function np(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var rr=null;function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function rd(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function bn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fu(e)}var yt=new Map,sd=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kt=H.d;H.d={f:ip,r:up,D:cp,C:rp,L:sp,m:op,X:dp,S:fp,M:hp};function ip(){var e=kt.f(),t=wi();return e||t}function up(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?Mo(t):kt.r(e)}var Nl=typeof document>"u"?null:document;function od(e,t,a){var l=Nl;if(l&&typeof t=="string"&&t){var n=ht(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),sd.has(n)||(sd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Le(t,"link",e),Ue(t),l.head.appendChild(t)))}}function cp(e){kt.D(e),od("dns-prefetch",e,null)}function rp(e,t){kt.C(e,t),od("preconnect",e,t)}function sp(e,t,a){kt.L(e,t,a);var l=Nl;if(l&&e&&t){var n='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ht(a.imageSizes)+'"]')):n+='[href="'+ht(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=Rl(e)}yt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(yn(i))||t==="script"&&l.querySelector(Sn(i))||(t=l.createElement("link"),Le(t,"link",e),Ue(t),l.head.appendChild(t)))}}function op(e,t){kt.m(e,t);var a=Nl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ht(l)+'"][href="'+ht(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rl(e)}if(!yt.has(i)&&(e=N({rel:"modulepreload",href:e},t),yt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sn(i)))return}l=a.createElement("link"),Le(l,"link",e),Ue(l),a.head.appendChild(l)}}}function fp(e,t,a){kt.S(e,t,a);var l=Nl;if(l&&e){var n=ka(l).hoistableStyles,i=Tl(e);t=t||"default";var r=n.get(i);if(!r){var s={loading:0,preload:null};if(r=l.querySelector(yn(i)))s.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(i))&&sr(e,a);var h=r=l.createElement("link");Ue(h),Le(h,"link",e),h._p=new Promise(function(S,R){h.onload=S,h.onerror=R}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Gi(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:s},n.set(i,r)}}}function dp(e,t){kt.X(e,t);var a=Nl;if(a&&e){var l=ka(a).hoistableScripts,n=Rl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=N({src:e,async:!0},t),(t=yt.get(n))&&or(e,t),i=a.createElement("script"),Ue(i),Le(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function hp(e,t){kt.M(e,t);var a=Nl;if(a&&e){var l=ka(a).hoistableScripts,n=Rl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=yt.get(n))&&or(e,t),i=a.createElement("script"),Ue(i),Le(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function fd(e,t,a,l){var n=(n=I.current)?Yi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=ka(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=ka(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(yn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),i||mp(n,e,a,r.state))),t&&l===null)throw Error(o(528,""));return r}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rl(a),a=ka(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Tl(e){return'href="'+ht(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function dd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function mp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Le(t,"link",a),Ue(t),e.head.appendChild(t))}function Rl(e){return'[src="'+ht(e)+'"]'}function Sn(e){return"script[async]"+e}function hd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(l)return t.instance=l,Ue(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ue(l),Le(l,"style",n),Gi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(yn(n));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;l=dd(a),(n=yt.get(n))&&sr(l,n),i=(e.ownerDocument||e).createElement("link"),Ue(i);var r=i;return r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),Le(i,"link",l),t.state.loading|=4,Gi(i,a.precedence,e),t.instance=i;case"script":return i=Rl(a.src),(n=e.querySelector(Sn(i)))?(t.instance=n,Ue(n),n):(l=a,(n=yt.get(i))&&(l=N({},a),or(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),Le(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Gi(l,a.precedence,e));return t.instance}function Gi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var s=l[r];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Li=null;function md(e,t,a){if(Li===null){var l=new Map,n=Li=new Map;n.set(a,l)}else n=Li,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Cl]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var s=l.get(r);s?s.push(i):l.set(r,[i])}}return l}function pd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function pp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jn=null;function gp(){}function xp(e,t,a){if(jn===null)throw Error(o(475));var l=jn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(a.href),i=e.querySelector(yn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Xi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ue(i);return}i=e.ownerDocument||e,a=dd(a),(n=yt.get(n))&&sr(a,n),i=i.createElement("link"),Ue(i);var r=i;r._p=new Promise(function(s,h){r.onload=s,r.onerror=h}),Le(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Xi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function vp(){if(jn===null)throw Error(o(475));var e=jn;return e.stylesheets&&e.count===0&&fr(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&fr(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Xi(){if(this.count--,this.count===0){if(this.stylesheets)fr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qi=null;function fr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qi=new Map,t.forEach(bp,e),Qi=null,Xi.call(e))}function bp(e,t){if(!(t.state.loading&4)){var a=Qi.get(e);if(a)var l=a.get(null);else{a=new Map,Qi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=Xi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var An={$$typeof:ee,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function yp(e,t,a,l,n,i,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.hiddenUpdates=cu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function xd(e,t,a,l,n,i,r,s,h,S,R,z){return e=new yp(e,t,a,r,s,h,S,z),t=1,i===!0&&(t|=24),i=it(3,null,null,t),e.current=i,i.stateNode=e,t=ku(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},$u(i),e}function vd(e){return e?(e=nl,e):nl}function bd(e,t,a,l,n,i){n=vd(n),l.context===null?l.context=n:l.pendingContext=n,l=aa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=la(e,l,t),a!==null&&(ot(a,e,t),Pl(a,e,t))}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function dr(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function Sd(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&ot(t,e,67108864),dr(e,67108864)}}var Vi=!0;function Sp(e,t,a,l){var n=M.T;M.T=null;var i=H.p;try{H.p=2,hr(e,t,a,l)}finally{H.p=i,M.T=n}}function jp(e,t,a,l){var n=M.T;M.T=null;var i=H.p;try{H.p=8,hr(e,t,a,l)}finally{H.p=i,M.T=n}}function hr(e,t,a,l){if(Vi){var n=mr(l);if(n===null)er(e,t,l,Zi,a),Ad(e,l);else if(Ep(n,e,t,a,l))l.stopPropagation();else if(Ad(e,l),t&4&&-1<Ap.indexOf(e)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Na(i.pendingLanes);if(r!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var h=1<<31-lt(r);s.entanglements[1]|=h,r&=~h}Dt(i),(oe&6)===0&&(Mi=Et()+500,gn(0))}}break;case 13:s=ll(i,2),s!==null&&ot(s,i,2),wi(),dr(i,2)}if(i=mr(l),i===null&&er(e,t,l,Zi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else er(e,t,l,null,a)}}function mr(e){return e=bu(e),pr(e)}var Zi=null;function pr(e){if(Zi=null,e=Va(e),e!==null){var t=v(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function jd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rh()){case _r:return 2;case Ur:return 8;case qn:case sh:return 32;case Hr:return 268435456;default:return 32}default:return 32}}var gr=!1,ga=null,xa=null,va=null,En=new Map,Nn=new Map,ba=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ad(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function Tn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Za(t),t!==null&&Sd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Ep(e,t,a,l,n){switch(t){case"focusin":return ga=Tn(ga,e,t,a,l,n),!0;case"dragenter":return xa=Tn(xa,e,t,a,l,n),!0;case"mouseover":return va=Tn(va,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return En.set(i,Tn(En.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Nn.set(i,Tn(Nn.get(i)||null,e,t,a,l,n)),!0}return!1}function Ed(e){var t=Va(e.target);if(t!==null){var a=v(t);if(a!==null){if(t=a.tag,t===13){if(t=T(a),t!==null){e.blockedOn=t,xh(e.priority,function(){if(a.tag===13){var l=st();l=ru(l);var n=ll(a,l);n!==null&&ot(n,a,l),dr(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=mr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);vu=l,a.target.dispatchEvent(l),vu=null}else return t=Za(a),t!==null&&Sd(t),e.blockedOn=a,!1;t.shift()}return!0}function Nd(e,t,a){ki(e)&&a.delete(t)}function Np(){gr=!1,ga!==null&&ki(ga)&&(ga=null),xa!==null&&ki(xa)&&(xa=null),va!==null&&ki(va)&&(va=null),En.forEach(Nd),Nn.forEach(Nd)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,gr||(gr=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Np)))}var Ji=null;function Td(e){Ji!==e&&(Ji=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(pr(l||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,pc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Rn(e){function t(h){return Ki(h,e)}ga!==null&&Ki(ga,e),xa!==null&&Ki(xa,e),va!==null&&Ki(va,e),En.forEach(t),Nn.forEach(t);for(var a=0;a<ba.length;a++){var l=ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Ed(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[Je]||null;if(typeof i=="function")r||Td(a);else if(r){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[Je]||null)s=r.formAction;else if(pr(n)!==null)continue}else s=r.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Td(a)}}}function xr(e){this._internalRoot=e}Fi.prototype.render=xr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=st();bd(a,l,e,t,null,null)},Fi.prototype.unmount=xr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bd(e.current,2,null,e,null,null),wi(),t[Qa]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ba.length&&t!==0&&t<ba[a].priority;a++);ba.splice(a,0,e),a===0&&Ed(e)}};var Rd=f.version;if(Rd!=="19.1.1")throw Error(o(527,Rd,"19.1.1"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=j(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Tp={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{wl=$i.inject(Tp),at=$i}catch{}}return Dn.createRoot=function(e,t){if(!m(e))throw Error(o(299));var a=!1,l="",n=Xo,i=Qo,r=Vo,s=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=xd(e,1,!1,null,null,a,l,n,i,r,s,null),e[Qa]=t.current,Ic(e),new xr(t)},Dn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(o(299));var l=!1,n="",i=Xo,r=Qo,s=Vo,h=null,S=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(S=a.formState)),t=xd(e,1,!0,t,a??null,l,n,i,r,s,h,S),t.context=vd(null),a=t.current,l=st(),l=ru(l),n=aa(l),n.callback=null,la(a,n,l),a=l,t.current.lanes=a,Ol(t,a),Dt(t),e[Qa]=t.current,Ic(e),new Fi(t)},Dn.version="19.1.1",Dn}var qd;function qp(){if(qd)return yr.exports;qd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),yr.exports=Hp(),yr.exports}var Bp=qp();const Yp=Qd(Bp);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bd="popstate";function Gp(c={}){function f(o,m){let{pathname:v,search:T,hash:O}=o.location;return Tr("",{pathname:v,search:T,hash:O},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(o,m){return typeof m=="string"?m:zn(m)}return Xp(f,d,null,c)}function je(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function wt(c,f){if(!c){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Lp(){return Math.random().toString(36).substring(2,10)}function Yd(c,f){return{usr:c.state,key:c.key,idx:f}}function Tr(c,f,d=null,o){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof f=="string"?Ml(f):f,state:d,key:f&&f.key||o||Lp()}}function zn({pathname:c="/",search:f="",hash:d=""}){return f&&f!=="?"&&(c+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function Ml(c){let f={};if(c){let d=c.indexOf("#");d>=0&&(f.hash=c.substring(d),c=c.substring(0,d));let o=c.indexOf("?");o>=0&&(f.search=c.substring(o),c=c.substring(0,o)),c&&(f.pathname=c)}return f}function Xp(c,f,d,o={}){let{window:m=document.defaultView,v5Compat:v=!1}=o,T=m.history,O="POP",j=null,x=N();x==null&&(x=0,T.replaceState({...T.state,idx:x},""));function N(){return(T.state||{idx:null}).idx}function _(){O="POP";let G=N(),Z=G==null?null:G-x;x=G,j&&j({action:O,location:W.location,delta:Z})}function q(G,Z){O="PUSH";let L=Tr(W.location,G,Z);x=N()+1;let ee=Yd(L,x),ye=W.createHref(L);try{T.pushState(ee,"",ye)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;m.location.assign(ye)}v&&j&&j({action:O,location:W.location,delta:1})}function X(G,Z){O="REPLACE";let L=Tr(W.location,G,Z);x=N();let ee=Yd(L,x),ye=W.createHref(L);T.replaceState(ee,"",ye),v&&j&&j({action:O,location:W.location,delta:0})}function V(G){return Qp(G)}let W={get action(){return O},get location(){return c(m,T)},listen(G){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(Bd,_),j=G,()=>{m.removeEventListener(Bd,_),j=null}},createHref(G){return f(m,G)},createURL:V,encodeLocation(G){let Z=V(G);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:q,replace:X,go(G){return T.go(G)}};return W}function Qp(c,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),je(d,"No window.location.(origin|href) available to create URL");let o=typeof c=="string"?c:zn(c);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Vd(c,f,d="/"){return Vp(c,f,d,!1)}function Vp(c,f,d,o){let m=typeof f=="string"?Ml(f):f,v=Jt(m.pathname||"/",d);if(v==null)return null;let T=Zd(c);Zp(T);let O=null;for(let j=0;O==null&&j<T.length;++j){let x=a0(v);O=e0(T[j],x,o)}return O}function Zd(c,f=[],d=[],o="",m=!1){let v=(T,O,j=m,x)=>{let N={relativePath:x===void 0?T.path||"":x,caseSensitive:T.caseSensitive===!0,childrenIndex:O,route:T};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(o)&&j)return;je(N.relativePath.startsWith(o),`Absolute route path "${N.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(o.length)}let _=Kt([o,N.relativePath]),q=d.concat(N);T.children&&T.children.length>0&&(je(T.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Zd(T.children,f,q,_,j)),!(T.path==null&&!T.index)&&f.push({path:_,score:Pp(_,T.index),routesMeta:q})};return c.forEach((T,O)=>{if(T.path===""||!T.path?.includes("?"))v(T,O);else for(let j of kd(T.path))v(T,O,!0,j)}),f}function kd(c){let f=c.split("/");if(f.length===0)return[];let[d,...o]=f,m=d.endsWith("?"),v=d.replace(/\?$/,"");if(o.length===0)return m?[v,""]:[v];let T=kd(o.join("/")),O=[];return O.push(...T.map(j=>j===""?v:[v,j].join("/"))),m&&O.push(...T),O.map(j=>c.startsWith("/")&&j===""?"/":j)}function Zp(c){c.sort((f,d)=>f.score!==d.score?d.score-f.score:Ip(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var kp=/^:[\w-]+$/,Kp=3,Jp=2,Fp=1,$p=10,Wp=-2,Gd=c=>c==="*";function Pp(c,f){let d=c.split("/"),o=d.length;return d.some(Gd)&&(o+=Wp),f&&(o+=Jp),d.filter(m=>!Gd(m)).reduce((m,v)=>m+(kp.test(v)?Kp:v===""?Fp:$p),o)}function Ip(c,f){return c.length===f.length&&c.slice(0,-1).every((o,m)=>o===f[m])?c[c.length-1]-f[f.length-1]:0}function e0(c,f,d=!1){let{routesMeta:o}=c,m={},v="/",T=[];for(let O=0;O<o.length;++O){let j=o[O],x=O===o.length-1,N=v==="/"?f:f.slice(v.length)||"/",_=eu({path:j.relativePath,caseSensitive:j.caseSensitive,end:x},N),q=j.route;if(!_&&x&&d&&!o[o.length-1].route.index&&(_=eu({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},N)),!_)return null;Object.assign(m,_.params),T.push({params:m,pathname:Kt([v,_.pathname]),pathnameBase:u0(Kt([v,_.pathnameBase])),route:q}),_.pathnameBase!=="/"&&(v=Kt([v,_.pathnameBase]))}return T}function eu(c,f){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[d,o]=t0(c.path,c.caseSensitive,c.end),m=f.match(d);if(!m)return null;let v=m[0],T=v.replace(/(.)\/+$/,"$1"),O=m.slice(1);return{params:o.reduce((x,{paramName:N,isOptional:_},q)=>{if(N==="*"){let V=O[q]||"";T=v.slice(0,v.length-V.length).replace(/(.)\/+$/,"$1")}const X=O[q];return _&&!X?x[N]=void 0:x[N]=(X||"").replace(/%2F/g,"/"),x},{}),pathname:v,pathnameBase:T,pattern:c}}function t0(c,f=!1,d=!0){wt(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let o=[],m="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(T,O,j)=>(o.push({paramName:O,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(o.push({paramName:"*"}),m+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":c!==""&&c!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),o]}function a0(c){try{return c.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return wt(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),c}}function Jt(c,f){if(f==="/")return c;if(!c.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=c.charAt(d);return o&&o!=="/"?null:c.slice(d)||"/"}function l0(c,f="/"){let{pathname:d,search:o="",hash:m=""}=typeof c=="string"?Ml(c):c;return{pathname:d?d.startsWith("/")?d:n0(d,f):f,search:c0(o),hash:r0(m)}}function n0(c,f){let d=f.replace(/\/+$/,"").split("/");return c.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Er(c,f,d,o){return`Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function i0(c){return c.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function Kd(c){let f=i0(c);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function Jd(c,f,d,o=!1){let m;typeof c=="string"?m=Ml(c):(m={...c},je(!m.pathname||!m.pathname.includes("?"),Er("?","pathname","search",m)),je(!m.pathname||!m.pathname.includes("#"),Er("#","pathname","hash",m)),je(!m.search||!m.search.includes("#"),Er("#","search","hash",m)));let v=c===""||m.pathname==="",T=v?"/":m.pathname,O;if(T==null)O=d;else{let _=f.length-1;if(!o&&T.startsWith("..")){let q=T.split("/");for(;q[0]==="..";)q.shift(),_-=1;m.pathname=q.join("/")}O=_>=0?f[_]:"/"}let j=l0(m,O),x=T&&T!=="/"&&T.endsWith("/"),N=(v||T===".")&&d.endsWith("/");return!j.pathname.endsWith("/")&&(x||N)&&(j.pathname+="/"),j}var Kt=c=>c.join("/").replace(/\/\/+/g,"/"),u0=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),c0=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,r0=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function s0(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}var Fd=["POST","PUT","PATCH","DELETE"];new Set(Fd);var o0=["GET",...Fd];new Set(o0);var Dl=D.createContext(null);Dl.displayName="DataRouter";var tu=D.createContext(null);tu.displayName="DataRouterState";D.createContext(!1);var $d=D.createContext({isTransitioning:!1});$d.displayName="ViewTransition";var f0=D.createContext(new Map);f0.displayName="Fetchers";var d0=D.createContext(null);d0.displayName="Await";var zt=D.createContext(null);zt.displayName="Navigation";var On=D.createContext(null);On.displayName="Location";var Ft=D.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Dr=D.createContext(null);Dr.displayName="RouteError";function h0(c,{relative:f}={}){je(Cn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=D.useContext(zt),{hash:m,pathname:v,search:T}=Un(c,{relative:f}),O=v;return d!=="/"&&(O=v==="/"?d:Kt([d,v])),o.createHref({pathname:O,search:T,hash:m})}function Cn(){return D.useContext(On)!=null}function ja(){return je(Cn(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(On).location}var Wd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pd(c){D.useContext(zt).static||D.useLayoutEffect(c)}function _n(){let{isDataRoute:c}=D.useContext(Ft);return c?T0():m0()}function m0(){je(Cn(),"useNavigate() may be used only in the context of a <Router> component.");let c=D.useContext(Dl),{basename:f,navigator:d}=D.useContext(zt),{matches:o}=D.useContext(Ft),{pathname:m}=ja(),v=JSON.stringify(Kd(o)),T=D.useRef(!1);return Pd(()=>{T.current=!0}),D.useCallback((j,x={})=>{if(wt(T.current,Wd),!T.current)return;if(typeof j=="number"){d.go(j);return}let N=Jd(j,JSON.parse(v),m,x.relative==="path");c==null&&f!=="/"&&(N.pathname=N.pathname==="/"?f:Kt([f,N.pathname])),(x.replace?d.replace:d.push)(N,x.state,x)},[f,d,v,m,c])}D.createContext(null);function Un(c,{relative:f}={}){let{matches:d}=D.useContext(Ft),{pathname:o}=ja(),m=JSON.stringify(Kd(d));return D.useMemo(()=>Jd(c,JSON.parse(m),o,f==="path"),[c,m,o,f])}function p0(c,f){return Id(c,f)}function Id(c,f,d,o,m){je(Cn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:v}=D.useContext(zt),{matches:T}=D.useContext(Ft),O=T[T.length-1],j=O?O.params:{},x=O?O.pathname:"/",N=O?O.pathnameBase:"/",_=O&&O.route;{let L=_&&_.path||"";eh(x,!_||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let q=ja(),X;if(f){let L=typeof f=="string"?Ml(f):f;je(N==="/"||L.pathname?.startsWith(N),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${L.pathname}" was given in the \`location\` prop.`),X=L}else X=q;let V=X.pathname||"/",W=V;if(N!=="/"){let L=N.replace(/^\//,"").split("/");W="/"+V.replace(/^\//,"").split("/").slice(L.length).join("/")}let G=Vd(c,{pathname:W});wt(_||G!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),wt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=y0(G&&G.map(L=>Object.assign({},L,{params:Object.assign({},j,L.params),pathname:Kt([N,v.encodeLocation?v.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?N:Kt([N,v.encodeLocation?v.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),T,d,o,m);return f&&Z?D.createElement(On.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},Z):Z}function g0(){let c=N0(),f=s0(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),d=c instanceof Error?c.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},v={padding:"2px 4px",backgroundColor:o},T=null;return console.error("Error handled by React Router default ErrorBoundary:",c),T=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:v},"ErrorBoundary")," or"," ",D.createElement("code",{style:v},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},f),d?D.createElement("pre",{style:m},d):null,T)}var x0=D.createElement(g0,null),v0=class extends D.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,f){return f.location!==c.location||f.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:f.error,location:f.location,revalidation:c.revalidation||f.revalidation}}componentDidCatch(c,f){this.props.unstable_onError?this.props.unstable_onError(c,f):console.error("React Router caught the following error during render",c)}render(){return this.state.error!==void 0?D.createElement(Ft.Provider,{value:this.props.routeContext},D.createElement(Dr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function b0({routeContext:c,match:f,children:d}){let o=D.useContext(Dl);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),D.createElement(Ft.Provider,{value:c},d)}function y0(c,f=[],d=null,o=null,m=null){if(c==null){if(!d)return null;if(d.errors)c=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)c=d.matches;else return null}let v=c,T=d?.errors;if(T!=null){let x=v.findIndex(N=>N.route.id&&T?.[N.route.id]!==void 0);je(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(T).join(",")}`),v=v.slice(0,Math.min(v.length,x+1))}let O=!1,j=-1;if(d)for(let x=0;x<v.length;x++){let N=v[x];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(j=x),N.route.id){let{loaderData:_,errors:q}=d,X=N.route.loader&&!_.hasOwnProperty(N.route.id)&&(!q||q[N.route.id]===void 0);if(N.route.lazy||X){O=!0,j>=0?v=v.slice(0,j+1):v=[v[0]];break}}}return v.reduceRight((x,N,_)=>{let q,X=!1,V=null,W=null;d&&(q=T&&N.route.id?T[N.route.id]:void 0,V=N.route.errorElement||x0,O&&(j<0&&_===0?(eh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,W=null):j===_&&(X=!0,W=N.route.hydrateFallbackElement||null)));let G=f.concat(v.slice(0,_+1)),Z=()=>{let L;return q?L=V:X?L=W:N.route.Component?L=D.createElement(N.route.Component,null):N.route.element?L=N.route.element:L=x,D.createElement(b0,{match:N,routeContext:{outlet:x,matches:G,isDataRoute:d!=null},children:L})};return d&&(N.route.ErrorBoundary||N.route.errorElement||_===0)?D.createElement(v0,{location:d.location,revalidation:d.revalidation,component:V,error:q,children:Z(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:o}):Z()},null)}function wr(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S0(c){let f=D.useContext(Dl);return je(f,wr(c)),f}function j0(c){let f=D.useContext(tu);return je(f,wr(c)),f}function A0(c){let f=D.useContext(Ft);return je(f,wr(c)),f}function zr(c){let f=A0(c),d=f.matches[f.matches.length-1];return je(d.route.id,`${c} can only be used on routes that contain a unique "id"`),d.route.id}function E0(){return zr("useRouteId")}function N0(){let c=D.useContext(Dr),f=j0("useRouteError"),d=zr("useRouteError");return c!==void 0?c:f.errors?.[d]}function T0(){let{router:c}=S0("useNavigate"),f=zr("useNavigate"),d=D.useRef(!1);return Pd(()=>{d.current=!0}),D.useCallback(async(m,v={})=>{wt(d.current,Wd),d.current&&(typeof m=="number"?c.navigate(m):await c.navigate(m,{fromRouteId:f,...v}))},[c,f])}var Ld={};function eh(c,f,d){!f&&!Ld[c]&&(Ld[c]=!0,wt(!1,d))}D.memo(R0);function R0({routes:c,future:f,state:d,unstable_onError:o}){return Id(c,void 0,d,o,f)}function Sa(c){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function M0({basename:c="/",children:f=null,location:d,navigationType:o="POP",navigator:m,static:v=!1}){je(!Cn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=c.replace(/^\/*/,"/"),O=D.useMemo(()=>({basename:T,navigator:m,static:v,future:{}}),[T,m,v]);typeof d=="string"&&(d=Ml(d));let{pathname:j="/",search:x="",hash:N="",state:_=null,key:q="default"}=d,X=D.useMemo(()=>{let V=Jt(j,T);return V==null?null:{location:{pathname:V,search:x,hash:N,state:_,key:q},navigationType:o}},[T,j,x,N,_,q,o]);return wt(X!=null,`<Router basename="${T}"> is not able to match the URL "${j}${x}${N}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:D.createElement(zt.Provider,{value:O},D.createElement(On.Provider,{children:f,value:X}))}function D0({children:c,location:f}){return p0(Rr(c),f)}function Rr(c,f=[]){let d=[];return D.Children.forEach(c,(o,m)=>{if(!D.isValidElement(o))return;let v=[...f,m];if(o.type===D.Fragment){d.push.apply(d,Rr(o.props.children,v));return}je(o.type===Sa,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!o.props.index||!o.props.children,"An index route cannot have child routes.");let T={id:o.props.id||v.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(T.children=Rr(o.props.children,v)),d.push(T)}),d}var Pi="get",Ii="application/x-www-form-urlencoded";function au(c){return c!=null&&typeof c.tagName=="string"}function w0(c){return au(c)&&c.tagName.toLowerCase()==="button"}function z0(c){return au(c)&&c.tagName.toLowerCase()==="form"}function O0(c){return au(c)&&c.tagName.toLowerCase()==="input"}function C0(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function _0(c,f){return c.button===0&&(!f||f==="_self")&&!C0(c)}var Wi=null;function U0(){if(Wi===null)try{new FormData(document.createElement("form"),0),Wi=!1}catch{Wi=!0}return Wi}var H0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nr(c){return c!=null&&!H0.has(c)?(wt(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`),null):c}function q0(c,f){let d,o,m,v,T;if(z0(c)){let O=c.getAttribute("action");o=O?Jt(O,f):null,d=c.getAttribute("method")||Pi,m=Nr(c.getAttribute("enctype"))||Ii,v=new FormData(c)}else if(w0(c)||O0(c)&&(c.type==="submit"||c.type==="image")){let O=c.form;if(O==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=c.getAttribute("formaction")||O.getAttribute("action");if(o=j?Jt(j,f):null,d=c.getAttribute("formmethod")||O.getAttribute("method")||Pi,m=Nr(c.getAttribute("formenctype"))||Nr(O.getAttribute("enctype"))||Ii,v=new FormData(O,c),!U0()){let{name:x,type:N,value:_}=c;if(N==="image"){let q=x?`${x}.`:"";v.append(`${q}x`,"0"),v.append(`${q}y`,"0")}else x&&v.append(x,_)}}else{if(au(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Pi,o=null,m=Ii,T=c}return v&&m==="text/plain"&&(T=v,v=void 0),{action:o,method:d.toLowerCase(),encType:m,formData:v,body:T}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Or(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function B0(c,f,d){let o=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return o.pathname==="/"?o.pathname=`_root.${d}`:f&&Jt(o.pathname,f)==="/"?o.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function Y0(c,f){if(c.id in f)return f[c.id];try{let d=await import(c.module);return f[c.id]=d,d}catch(d){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G0(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function L0(c,f,d){let o=await Promise.all(c.map(async m=>{let v=f.routes[m.route.id];if(v){let T=await Y0(v,d);return T.links?T.links():[]}return[]}));return Z0(o.flat(1).filter(G0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Xd(c,f,d,o,m,v){let T=(j,x)=>d[x]?j.route.id!==d[x].route.id:!0,O=(j,x)=>d[x].pathname!==j.pathname||d[x].route.path?.endsWith("*")&&d[x].params["*"]!==j.params["*"];return v==="assets"?f.filter((j,x)=>T(j,x)||O(j,x)):v==="data"?f.filter((j,x)=>{let N=o.routes[j.route.id];if(!N||!N.hasLoader)return!1;if(T(j,x)||O(j,x))return!0;if(j.route.shouldRevalidate){let _=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function X0(c,f,{includeHydrateFallback:d}={}){return Q0(c.map(o=>{let m=f.routes[o.route.id];if(!m)return[];let v=[m.module];return m.clientActionModule&&(v=v.concat(m.clientActionModule)),m.clientLoaderModule&&(v=v.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(v=v.concat(m.hydrateFallbackModule)),m.imports&&(v=v.concat(m.imports)),v}).flat(1))}function Q0(c){return[...new Set(c)]}function V0(c){let f={},d=Object.keys(c).sort();for(let o of d)f[o]=c[o];return f}function Z0(c,f){let d=new Set;return new Set(f),c.reduce((o,m)=>{let v=JSON.stringify(V0(m));return d.has(v)||(d.add(v),o.push({key:v,link:m})),o},[])}function th(){let c=D.useContext(Dl);return Or(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function k0(){let c=D.useContext(tu);return Or(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var Cr=D.createContext(void 0);Cr.displayName="FrameworkContext";function ah(){let c=D.useContext(Cr);return Or(c,"You must render this element inside a <HydratedRouter> element"),c}function K0(c,f){let d=D.useContext(Cr),[o,m]=D.useState(!1),[v,T]=D.useState(!1),{onFocus:O,onBlur:j,onMouseEnter:x,onMouseLeave:N,onTouchStart:_}=f,q=D.useRef(null);D.useEffect(()=>{if(c==="render"&&T(!0),c==="viewport"){let W=Z=>{Z.forEach(L=>{T(L.isIntersecting)})},G=new IntersectionObserver(W,{threshold:.5});return q.current&&G.observe(q.current),()=>{G.disconnect()}}},[c]),D.useEffect(()=>{if(o){let W=setTimeout(()=>{T(!0)},100);return()=>{clearTimeout(W)}}},[o]);let X=()=>{m(!0)},V=()=>{m(!1),T(!1)};return d?c!=="intent"?[v,q,{}]:[v,q,{onFocus:wn(O,X),onBlur:wn(j,V),onMouseEnter:wn(x,X),onMouseLeave:wn(N,V),onTouchStart:wn(_,X)}]:[!1,q,{}]}function wn(c,f){return d=>{c&&c(d),d.defaultPrevented||f(d)}}function J0({page:c,...f}){let{router:d}=th(),o=D.useMemo(()=>Vd(d.routes,c,d.basename),[d.routes,c,d.basename]);return o?D.createElement($0,{page:c,matches:o,...f}):null}function F0(c){let{manifest:f,routeModules:d}=ah(),[o,m]=D.useState([]);return D.useEffect(()=>{let v=!1;return L0(c,f,d).then(T=>{v||m(T)}),()=>{v=!0}},[c,f,d]),o}function $0({page:c,matches:f,...d}){let o=ja(),{manifest:m,routeModules:v}=ah(),{basename:T}=th(),{loaderData:O,matches:j}=k0(),x=D.useMemo(()=>Xd(c,f,j,m,o,"data"),[c,f,j,m,o]),N=D.useMemo(()=>Xd(c,f,j,m,o,"assets"),[c,f,j,m,o]),_=D.useMemo(()=>{if(c===o.pathname+o.search+o.hash)return[];let V=new Set,W=!1;if(f.forEach(Z=>{let L=m.routes[Z.route.id];!L||!L.hasLoader||(!x.some(ee=>ee.route.id===Z.route.id)&&Z.route.id in O&&v[Z.route.id]?.shouldRevalidate||L.hasClientLoader?W=!0:V.add(Z.route.id))}),V.size===0)return[];let G=B0(c,T,"data");return W&&V.size>0&&G.searchParams.set("_routes",f.filter(Z=>V.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[G.pathname+G.search]},[T,O,o,m,x,f,c,v]),q=D.useMemo(()=>X0(N,m),[N,m]),X=F0(N);return D.createElement(D.Fragment,null,_.map(V=>D.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...d})),q.map(V=>D.createElement("link",{key:V,rel:"modulepreload",href:V,...d})),X.map(({key:V,link:W})=>D.createElement("link",{key:V,nonce:d.nonce,...W})))}function W0(...c){return f=>{c.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lh&&(window.__reactRouterVersion="7.8.2")}catch{}function P0({basename:c,children:f,window:d}){let o=D.useRef();o.current==null&&(o.current=Gp({window:d,v5Compat:!0}));let m=o.current,[v,T]=D.useState({action:m.action,location:m.location}),O=D.useCallback(j=>{D.startTransition(()=>T(j))},[T]);return D.useLayoutEffect(()=>m.listen(O),[m,O]),D.createElement(M0,{basename:c,children:f,location:v.location,navigationType:v.action,navigator:m})}var nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=D.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:m,reloadDocument:v,replace:T,state:O,target:j,to:x,preventScrollReset:N,viewTransition:_,...q},X){let{basename:V}=D.useContext(zt),W=typeof x=="string"&&nh.test(x),G,Z=!1;if(typeof x=="string"&&W&&(G=x,lh))try{let Ae=new URL(window.location.href),et=x.startsWith("//")?new URL(Ae.protocol+x):new URL(x),ft=Jt(et.pathname,V);et.origin===Ae.origin&&ft!=null?x=ft+et.search+et.hash:Z=!0}catch{wt(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=h0(x,{relative:m}),[ee,ye,P]=K0(o,q),Ce=ag(x,{replace:T,state:O,target:j,preventScrollReset:N,relative:m,viewTransition:_});function we(Ae){f&&f(Ae),Ae.defaultPrevented||Ce(Ae)}let _e=D.createElement("a",{...q,...P,href:G||L,onClick:Z||v?f:we,ref:W0(X,ye),target:j,"data-discover":!W&&d==="render"?"true":void 0});return ee&&!W?D.createElement(D.Fragment,null,_e,D.createElement(J0,{page:L})):_e});Ie.displayName="Link";var I0=D.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:m=!1,style:v,to:T,viewTransition:O,children:j,...x},N){let _=Un(T,{relative:x.relative}),q=ja(),X=D.useContext(tu),{navigator:V,basename:W}=D.useContext(zt),G=X!=null&&cg(_)&&O===!0,Z=V.encodeLocation?V.encodeLocation(_).pathname:_.pathname,L=q.pathname,ee=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;d||(L=L.toLowerCase(),ee=ee?ee.toLowerCase():null,Z=Z.toLowerCase()),ee&&W&&(ee=Jt(ee,W)||ee);const ye=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let P=L===Z||!m&&L.startsWith(Z)&&L.charAt(ye)==="/",Ce=ee!=null&&(ee===Z||!m&&ee.startsWith(Z)&&ee.charAt(Z.length)==="/"),we={isActive:P,isPending:Ce,isTransitioning:G},_e=P?f:void 0,Ae;typeof o=="function"?Ae=o(we):Ae=[o,P?"active":null,Ce?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let et=typeof v=="function"?v(we):v;return D.createElement(Ie,{...x,"aria-current":_e,className:Ae,ref:N,style:et,to:T,viewTransition:O},typeof j=="function"?j(we):j)});I0.displayName="NavLink";var eg=D.forwardRef(({discover:c="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:m,state:v,method:T=Pi,action:O,onSubmit:j,relative:x,preventScrollReset:N,viewTransition:_,...q},X)=>{let V=ig(),W=ug(O,{relative:x}),G=T.toLowerCase()==="get"?"get":"post",Z=typeof O=="string"&&nh.test(O),L=ee=>{if(j&&j(ee),ee.defaultPrevented)return;ee.preventDefault();let ye=ee.nativeEvent.submitter,P=ye?.getAttribute("formmethod")||T;V(ye||ee.currentTarget,{fetcherKey:f,method:P,navigate:d,replace:m,state:v,relative:x,preventScrollReset:N,viewTransition:_})};return D.createElement("form",{ref:X,method:G,action:W,onSubmit:o?j:L,...q,"data-discover":!Z&&c==="render"?"true":void 0})});eg.displayName="Form";function tg(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ih(c){let f=D.useContext(Dl);return je(f,tg(c)),f}function ag(c,{target:f,replace:d,state:o,preventScrollReset:m,relative:v,viewTransition:T}={}){let O=_n(),j=ja(),x=Un(c,{relative:v});return D.useCallback(N=>{if(_0(N,f)){N.preventDefault();let _=d!==void 0?d:zn(j)===zn(x);O(c,{replace:_,state:o,preventScrollReset:m,relative:v,viewTransition:T})}},[j,O,x,d,o,f,c,m,v,T])}var lg=0,ng=()=>`__${String(++lg)}__`;function ig(){let{router:c}=ih("useSubmit"),{basename:f}=D.useContext(zt),d=E0();return D.useCallback(async(o,m={})=>{let{action:v,method:T,encType:O,formData:j,body:x}=q0(o,f);if(m.navigate===!1){let N=m.fetcherKey||ng();await c.fetch(N,d,m.action||v,{preventScrollReset:m.preventScrollReset,formData:j,body:x,formMethod:m.method||T,formEncType:m.encType||O,flushSync:m.flushSync})}else await c.navigate(m.action||v,{preventScrollReset:m.preventScrollReset,formData:j,body:x,formMethod:m.method||T,formEncType:m.encType||O,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[c,f,d])}function ug(c,{relative:f}={}){let{basename:d}=D.useContext(zt),o=D.useContext(Ft);je(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),v={...Un(c||".",{relative:f})},T=ja();if(c==null){v.search=T.search;let O=new URLSearchParams(v.search),j=O.getAll("index");if(j.some(N=>N==="")){O.delete("index"),j.filter(_=>_).forEach(_=>O.append("index",_));let N=O.toString();v.search=N?`?${N}`:""}}return(!c||c===".")&&m.route.index&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(v.pathname=v.pathname==="/"?d:Kt([d,v.pathname])),zn(v)}function cg(c,{relative:f}={}){let d=D.useContext($d);je(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=ih("useViewTransitionState"),m=Un(c,{relative:f});if(!d.isTransitioning)return!1;let v=Jt(d.currentLocation.pathname,o)||d.currentLocation.pathname,T=Jt(d.nextLocation.pathname,o)||d.nextLocation.pathname;return eu(m.pathname,T)!=null||eu(m.pathname,v)!=null}const rg=()=>u.jsx("style",{children:`
    /* ============== FONT IMPORT ============== */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

    /* ============== ROOT ELEMENT STYLES ============== */
    #root {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    /* ============== GENERAL BODY STYLES ============== */
    body {
        font-family: 'Inter', Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #f8f9fa;
        color: #212529;
        line-height: 1.6;
        overflow-x: hidden; /* Prevents horizontal scrolling */
        width: 100%;
    }

    /* ============== CONTAINER & TYPOGRAPHY ============== */
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    h1, h2, h3 {
        font-weight: 700;
    }

    /* ============== HEADER SECTION STYLES ============== */
    .header {
        background-color: #ffffff;
        color: #333;
        padding: 10px 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        border-bottom: 1px solid #e0e0e0;
    }

    .header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-container {
        display: flex;
        align-items: center;
        cursor: pointer;
        flex-shrink: 0;
    }

    .logo-crest {
        height: 70px;
        margin-right: 13px;
    }

    .logo-text-container {
        display: flex;
        flex-direction: column;
    }
    
    .logo-title {
        font-size: 22px;
        font-weight: 700;
        color: #D32F2F;
        margin: 0;
        white-space: nowrap;
    }

    .logo-tagline {
        font-size: 12px;
        color: #212529;
        margin: 0;
    }

    .header nav {
        display: flex;
        margin-left: auto;
    }

    .header nav ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    .header nav ul li {
        margin-left: 30px;
    }

    .header nav ul li a {
        color: #212529;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
        cursor: pointer;
    }

    .header nav ul li a:hover,
    .header nav ul li a.active {
        color: #D32F2F;
    }
    
    .menu-toggle {
        display: none;
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
        color: #212529;
    }

    /* ============== HERO SECTION STYLES ============== */
    .hero {
        color: white;
        text-align: center;
        padding: 80px 20px;
        position: relative;
        min-height: 70vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow: hidden;
    }

    .hero-content {
        max-width: 1000px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
        text-align: center;
    }

    .hero-title-glance {
        text-align: center;
        margin-bottom: 20px;
    }
    
    .glance-line {
        margin-bottom: 6px;
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    .glance-line:nth-child(1) { animation-delay: 0.2s; }
    .glance-line:nth-child(2) { animation-delay: 0.4s; }
    .glance-line:nth-child(3) { animation-delay: 0.6s; }
    
    .glance-label {
        font-size: clamp(1.3rem, 3.5vw, 1.8rem);
        font-weight: 600;
        color: #ffffff;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-family: 'Inter', sans-serif;
        display: block;
    }
    
    .glance-main {
        font-size: clamp(2.5rem, 7vw, 4rem);
        font-weight: 700;
        color: #ffffff;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
        letter-spacing: 1px;
        line-height: 1.1;
        text-transform: none;
        font-family: 'Inter', sans-serif;
        display: block;
    }
    
    .hero-glance-content {
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .hero-description {
        margin-bottom: 30px;
    }
    
    .hero p {
        font-size: 1.5rem;
        margin-bottom: 40px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        font-weight: 300;
        color: #ffffff;
        line-height: 1.8;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        letter-spacing: 0.5px;
    }
    
    .hero-accredited {
        font-weight: 600;
        font-size: 1.1rem;
        color: white;
        margin-top: 20px;
        display: inline-block;
        font-family: 'Inter', sans-serif;
        text-transform: none;
        letter-spacing: 0.5px;
    }

    /* ============== GENERAL SECTION STYLES ============== */
    section {
        padding: 25px 20px;
        width: 100%;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Stagger animation for multiple sections */
    section:nth-child(2) { animation-delay: 0.1s; }
    section:nth-child(3) { animation-delay: 0.2s; }
    section:nth-child(4) { animation-delay: 0.3s; }
    section:nth-child(5) { animation-delay: 0.4s; }

    section h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 8px;
        color: #212529;
    }
    
    .section-subtitle {
        text-align: center;
        font-size: 1.1rem;
        color: #495057;
        margin-bottom: 20px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .section-subtitle::after {
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        background-color: #C0A062;
        margin: 15px auto 0;
    }


    /* ============== ABOUT SECTION ============== */
    .about {
        background-color: #fdfaf5;
    }
    
    .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        align-items: center;
    }
    
    .about-image img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    .about-content h3 {
        font-size: 1.8rem;
        margin-bottom: 20px;
        color: #212529;
    }
    
    .about-content p {
        margin-bottom: 20px;
    }
    
    .accredited-text {
        font-weight: 700;
        color: #212529;
        margin-bottom: 30px;
    }
    
    .stats-container {
        display: flex;
        gap: 30px;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    
    .stat-item {
        text-align: left;
        transition: transform 0.3s ease;
    }
    
    .stat-item:hover {
        transform: scale(1.1);
    }

    .stat-item .number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #D32F2F;
        transition: color 0.3s ease;
    }
    
    .stat-item:hover .number {
        color: #C0A062;
    }
    
    .stat-item .label {
        font-size: 1rem;
        color: #495057;
        font-weight: 600;
    }
    
    
    /* ============== WHY CHOOSE US SECTION ============== */
    .why-choose-us {
        background-color: #f8f9fa;
    }
    
    .why-choose-us h2 {
        color: #212529;
    }
    
    .why-choose-us h2 .question-mark {
        color: #D32F2F;
    }
    
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 15px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .feature-item {
        background: #ffffff;
        padding: 0;
        text-align: left;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;

    }
    
    .feature-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    }

    .feature-item img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }
    
    .feature-content {
        padding: 25px;
    }
    
    .feature-content h3 {
        color: #212529;
        margin-top: 0;
        margin-bottom: 10px;
    }

    /* ============== PROGRAMS PAGE STYLES ============== */
    .programs-page {
        padding: 0;
        background-color: #f8f9fa;
    }
    .page-banner {
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
        padding: 80px 20px;
        text-align: center;
        position: relative;
        width: 100%;
    }

    .page-banner .container {
        position: relative;
    }
    .page-banner h2 {
        color: white;
        font-size: 3rem;
        margin-bottom: 15px;
    }
    .page-banner p {
        max-width: 600px;
        margin: 0 auto 30px;
        font-size: 1.1rem;
    }
    
    .program-category {
        padding: 40px 20px;
    }

    .category-header {
        text-align: center;
        margin-bottom: 40px;
    }
    
    .category-header h3 {
        font-size: 2.5rem;
        margin-bottom: 15px;
        font-weight: 700;
        color: #D32F2F;
        position: relative;
    }
    
    .category-header h3::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #D32F2F, #C0A062);
        border-radius: 2px;
    }
    
    .category-header p {
        font-size: 1.2rem;
        color: #495057;
        max-width: 800px;
        margin: 20px auto 0;
        line-height: 1.6;
    }

    .program-cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 20px;
        justify-items: center;
    }
    
    .program-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        transition: all 0.3s ease;
        height: 100%;
        width: 100%;
        max-width: 400px;
    }
    
    .program-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .program-card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .program-card-content {
        padding: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    
    .program-card-content h4 {
        margin: 0 0 15px;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.3;
        color: #212529;
        min-height: 2.5em;
    }
    .program-card-duration {
        color: #495057;
        font-size: 0.95rem;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    .program-card-duration i {
        margin-right: 8px;
        color: #D32F2F;
    }
    .program-card-description {
        color: #212529;
        flex-grow: 1;
        margin-bottom: 25px;
        font-size: 1rem;
        line-height: 1.6;
    }
     .program-card-description ul {
        padding-left: 20px;
        margin-top: 10px;
    }
    .program-card-buttons {
        display: flex;
        gap: 12px;
        margin-top: auto;
    }
    
    .program-card-buttons .btn {
        padding: 12px 20px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        flex: 1;
        transition: all 0.3s ease;
        border: 2px solid #D32F2F;
        font-size: 0.9rem;
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .btn-details {
        background-color: #D32F2F;
        color: #fff;
    }
    
    .btn-details:hover {
        background-color: #fff;
        color: #D32F2F;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(211, 47, 47, 0.3);
    }
    
    .btn-apply {
        background-color: #fff;
        color: #D32F2F;
    }
    .btn-apply:hover {
        background-color: #D32F2F;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(211, 47, 47, 0.3);
    }

    /* ============== ACADEMIC PROGRAMS STYLES ============== */
    .academic-programs {
        background-color: #f8f9fa;
        padding: 40px 0;
    }
    
    .programs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        justify-items: center;
        padding: 0 20px;
    }
    
    .program-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: 580px;
        display: flex;
        flex-direction: column;
    }
    
    .program-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .program-visual {
        position: relative;
        height: 200px;
        overflow: hidden;
    }
    
    .program-visual img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .program-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
    
    .program-content h4 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #212529;
        margin: 0 0 15px 0;
        line-height: 1.3;
        min-height: 2.5em;
    }
    
    .program-content p {
        color: #495057;
        margin-bottom: 25px;
        line-height: 1.7;
        font-size: 0.95rem;
        flex-grow: 1;
        margin-bottom: 20px;
    }
    
    .btn-details {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 20px;
        width: 100%;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .btn-details:hover {
        background: #a32424;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .learn-more {
        color: #D32F2F;
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 20px;
        transition: all 0.3s ease;
        text-align: center;
        width: 100%;
        padding: 10px 20px;
        border: 2px solid #D32F2F;
        border-radius: 20px;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .learn-more:hover {
        background: #D32F2F;
        color: white;
    }
    
    .program-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 15px;
        margin-bottom: 20px;
        padding: 15px 0;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        flex-shrink: 0;
    }
    
    .info-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.85rem;
        color: #495057;
        font-weight: 500;
        justify-content: center;
    }
    
    .info-item i {
        color: #D32F2F;
        font-size: 1rem;
    }

    /* ============== UPCOMING COURSES STYLES ============== */
    .upcoming-courses {
        background-color: #fdfaf5;
    }
    
    .courses-header {
        text-align: center;
        margin-bottom: 40px;
    }
    
    .expand-knowledge {
        font-size: 0.9rem;
        color: #D32F2F;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
        display: block;
    }
    
    .courses-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto 40px;
        justify-items: center;
        padding: 0 20px;
    }
    
    .course-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: fit-content;
    }
    
    .course-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .course-image {
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    
    .course-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .course-badge {
        position: absolute;
        top: 15px;
        left: 15px;
        background: #D32F2F;
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .course-card:hover .course-image img {
        transform: scale(1.05);
    }
    
    .course-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .course-content h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #212529;
        margin: 0 0 15px 0;
        line-height: 1.3;
        min-height: 2.5em;
    }
    
    .course-content p {
        color: #495057;
        margin-bottom: 25px;
        line-height: 1.7;
        font-size: 0.95rem;
        flex-grow: 1;
        margin-bottom: 20px;
    }
    
    .course-status {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
        padding: 15px 0;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .status-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.85rem;
        color: #495057;
        font-weight: 500;
        justify-content: center;
        flex: 1;
    }
    
    .status-item i {
        color: #D32F2F;
        font-size: 1rem;
    }
    
    .btn-enroll {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .btn-enroll:hover {
        background: #a32424;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .btn-details-blue {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .btn-details-blue:hover {
        background: #a32424;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .view-all-courses {
        text-align: center;
    }
    
    .btn-view-all {
        background: white;
        color: #D32F2F;
        border: 2px solid #D32F2F;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.1rem;
        outline: none !important;
        box-shadow: none !important;
        border-color: #D32F2F !important;
    }
    
    .btn-view-all:focus {
        outline: none !important;
        box-shadow: none !important;
        border-color: #D32F2F !important;
    }
    
    .btn-view-all:active {
        outline: none !important;
        box-shadow: none !important;
        border-color: #D32F2F !important;
    }
    
    .btn-view-all:hover {
        background: #D32F2F;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }

    /* ============== RESEARCH PROJECTS STYLES ============== */
    .research-projects {
        background-color: #fdfaf5;
    }
    .research-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        justify-items: center;
    }
    
    .research-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: fit-content;
    }
    
    .research-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    .research-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .research-card-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .research-card-content h3 {
        font-size: 1.25rem;
        margin: 0 0 15px 0;
        color: #212529;
        line-height: 1.3;
        min-height: 2.5em;
    }
    
    .research-card-content p {
        color: #495057;
        line-height: 1.7;
        font-size: 0.95rem;
        flex-grow: 1;
        margin: 0;
    }

    /* ============== EVENTS SECTION STYLES ============== */
    .events-section {
        background-color: #f8f9fa;
    }
    .events-tabs {
        text-align: center;
        margin-bottom: 15px;
    }
    .tab-btn {
        background: none;
        border: 1px solid white !important;
        font-size: 1.2rem;
        font-weight: 600;
        padding: 10px 20px;
        margin: 0 10px;
        cursor: pointer;
        position: relative;
        color: #495057;
        transition: color 0.3s ease;
    }
    .tab-btn::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #D32F2F;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
    .tab-btn.active, .tab-btn:hover {
        color: #D32F2F;
    }
    .tab-btn.active::after {
        transform: scaleX(1);
    }
    .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        justify-items: center;
    }
    
    .event-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: fit-content;
    }
    
    .event-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .event-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    
    .event-card-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .event-card-content h3 {
        font-size: 1.25rem;
        margin: 0 0 15px 0;
        line-height: 1.3;
        min-height: 2.5em;
    }
    .event-card-info {
        margin-top: 15px;
        color: #495057;
        display: flex;
        align-items: center;
        padding: 15px 0;
        border-top: 1px solid #f0f0f0;
        margin-top: auto;
    }
    
    .event-card-info i {
        margin-right: 10px;
        color: #D32F2F;
        font-size: 1rem;
    }

    /* ============== CTA SECTION STYLES ============== */
    .cta-section {
        background: linear-gradient(135deg, #D32F2F 0%, #a32424 50%, #8B0000 100%);
        color: white;
        text-align: center;
        padding: 50px 20px;
        position: relative;
        overflow: hidden;
    }

    .cta-section .container {
        position: relative;
        z-index: 2;
    }

    .cta-section h2 {
        color: white;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    }

    .cta-section p {
        max-width: 600px;
        margin: 0 auto 30px;
        font-size: 1.1rem;
        line-height: 1.6;
        color: rgba(255,255,255,0.95);
    }

    .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 25px;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .cta-btn {
        padding: 16px 32px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        min-width: 200px;
        height: 56px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        box-sizing: border-box;
    }

    .cta-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }

    .cta-btn:hover::before {
        left: 100%;
    }

    .cta-btn-primary {
        background: #ffc107;
        color: #000;
        border: 2px solid #ffc107;
        box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
    }

    .cta-btn-primary:hover {
        background: #ffca2c;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
    }

    .cta-btn-secondary {
        background: #ffffff;
        border: 2px solid #D32F2F;
        color: #D32F2F;
        box-shadow: 0 4px 15px rgba(211, 47, 47, 0.2);
    }

    .cta-btn-secondary:hover {
        background: #f8f9fa;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }

    .cta-btn i {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }

    .cta-btn:hover i {
        transform: translateX(5px);
    }

    /* ============== ADMISSIONS PAGE STYLES ============== */
    .admissions-page {
        padding: 0;
        background-color: #fff;
    }
    .admissions-journey-banner {
        background: linear-gradient(rgba(58, 93, 124, 0.8), rgba(58, 93, 124, 0.8)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
        text-align: center;
        padding: 80px 20px;
        position: relative;
    }
    .admissions-journey-banner h2 {
        color: white;
        font-size: 3.2rem;
        margin-bottom: 15px;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
        font-weight: 700;
    }
    .admissions-journey-banner p {
        font-size: 1.3rem;
        opacity: 0.95;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
        max-width: 600px;
        margin: 0 auto;
    }
    .admissions-section {
        padding: 60px 20px;
        background-color: #f8f9fa;
    }
    .admissions-section .section-title {
        text-align: center;
        margin-bottom: 10px;
        font-size: 2.2rem;
        font-weight: 700;
    }
    .admissions-section .section-tagline {
        text-align: center;
        margin-bottom: 50px;
        color: #495057;
    }
    .process-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        margin-bottom: 60px;
    }
    .process-card {
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid #eee;
        border-top: 4px solid #dc3545;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .process-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.1);
    }
    .process-number {
        width: 40px;
        height: 40px;
        background-color: #dc3545;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 auto 20px;
    }
    .process-card h3 {
        color: #212529;
        margin-bottom: 15px;
    }
    .process-card p {
        font-size: 0.95rem;
        color: #495057;
        margin-bottom: 25px;
        min-height: 90px;
    }
    .process-btn {
        background-color: #dc3545;
        color: white;
        padding: 10px 25px;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 600;
        transition: background-color 0.3s;
    }
    .process-btn:hover {
        background-color: #ffc107;
        color: #212529;
    }
    .details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
    }
    .details-card {
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        border: 1px solid #eee;
        border-top: 4px solid #dc3545;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .details-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.1);
    }
    .details-card h3 {
        display: flex;
        align-items: center;
        gap: 15px;
        color: #212529;
    }
    .details-icon {
        width: 40px;
        height: 40px;
        background-color: #dc3545;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }
    .details-list {
        list-style: none;
        padding: 0;
        margin: 20px 0;
    }
    .details-list li {
        margin-bottom: 10px;
        color: #495057;
        display: flex;
        align-items: flex-start;
    }
    .details-list li::before {
        content: '✓';
        color: #28a745;
        margin-right: 10px;
        font-weight: 700;
    }
    .details-card.important-dates .details-list li::before {
        content: "•";
        color: #ccc;
        font-size: 1.2rem;
        line-height: 1.4;
    }
    .details-btn {
        display: inline-block;
        padding: 12px 28px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        transition: all 0.3s;
        border: none;
        cursor: pointer;
    }
    .btn-red {
        background-color: #dc3545;
        color: white;
    }
    .btn-red:hover {
        background-color: #ffc107;
        color: #212529;
    }
    .admissions-cta {
        text-align: center;
        margin-top: 30px;
        padding: 40px 20px;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin: 30px 20px 0;
        border: 1px solid #dee2e6;
        position: relative;
    }
    
    .admissions-cta::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #D32F2F, #C0A062);
        border-radius: 0 0 2px 2px;
    }
    .admissions-cta h3 {
        font-size: 1.6rem;
        margin-bottom: 15px;
    }
    .admissions-cta p {
        font-size: 1rem;
        color: #495057;
        margin-bottom: 20px;
    }
    .admissions-cta .btn-red-cta {
        background-color: #dc3545;
        color: white;
    }
    .admissions-cta .btn-red-cta:hover {
        background-color: #ffc107;
        color: #212529;
    }
    .admissions-cta .btn-secondary {
        background: #dc3545;
        border: 2px solid #dc3545;
        color: white;
        margin-left: 10px;
    }
    .admissions-cta .btn-secondary:hover {
        background: #c82333;
        border-color: #c82333;
        color: white;
    }
    
    /* ============== FACULTY PAGE STYLES ============== */
    .faculty-page {
        padding: 0;
        background-color: #fff;
    }
    .faculty-header {
        padding: 80px 20px;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        text-align: center;
        color: white;
    }
    .faculty-header h2 {
        font-size: 3rem;
        color: white;
        margin: 0;
    }
    .faculty-header p {
        font-size: 1.1rem;
        max-width: 600px;
        margin: 10px auto 0;
    }
    .faculty-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 60px 20px;
        max-width: 900px;
        margin: 0 auto;
    }
    .faculty-card {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .faculty-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: top;
        margin-right: 25px;
        flex-shrink: 0;
    }
    .faculty-content {
        text-align: left;
    }
    .faculty-content h3 {
        margin: 0 0 5px;
        color: #212529;
        font-size: 1.5rem;
        font-weight: 600;
    }
    .faculty-content .title {
        color: #f0ad4e;
        font-weight: 600;
        margin-bottom: 15px;
        font-size: 1.1rem;
        display: block;
    }
    .faculty-content p {
        font-size: 0.95rem;
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.8;
    }
    .faculty-social {
        margin-top: auto;
        display: flex;
        gap: 15px;
    }
    .faculty-social a {
        color: #d9534f;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #f0f0f0;
        text-decoration: none;
        font-size: 1.5rem;
        transition: all 0.3s ease;
    }
    .faculty-social a:hover {
        background-color: #d9534f;
        color: #fff;
    }

    /* ============== DEPARTMENTS PAGE STYLES ============== */
    .departments-page {
        padding: 0;
        background-color: #f8f9fa;
    }
    .department-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 25px;
        padding: 40px 20px;
        max-width: 1200px;
        margin: 0 auto;
        justify-items: center;
    }
    
    .department-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        overflow: hidden;
        transition: all 0.3s ease;
        padding: 0;
        border: none;
        border-top: 3px solid #D32F2F;
        width: 100%;
        max-width: 380px;
        min-height: 450px;
        display: flex;
        flex-direction: column;
    }
    
    .department-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }
    .department-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
        margin-bottom: 0;
        filter: none;
    }
    .department-card-content {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .department-card-content h3 {
        font-size: 1.2rem;
        margin: 0 0 8px;
        color: #212529;
        line-height: 1.2;
        font-weight: 600;
    }
    .department-card-content p {
        color: #495057;
        font-size: 0.9rem;
        line-height: 1.4;
        margin-bottom: 12px;
    }
    .department-card-content strong {
        color: #212529;
        font-size: 0.85rem;
        margin-bottom: 8px;
        display: block;
        font-weight: 600;
    }
    .department-card-content ul {
        padding-left: 18px;
        color: #495057;
        font-size: 0.85rem;
        line-height: 1.4;
        margin-bottom: 20px;
        flex: 1;
    }
    .department-card-content li {
        margin-bottom: 3px;
    }
    .department-card-content a {
        color: #D32F2F;
        text-decoration: none;
        font-weight: 600;
        padding: 10px 20px;
        background: #D32F2F;
        color: #fff;
        border: none;
        border-radius: 6px;
        text-align: center;
        transition: all 0.3s ease;
        margin-top: auto;
        align-self: flex-start;
        font-size: 0.9rem;
    }
    .department-card-content a:hover {
        background: #B71C1C;
        text-decoration: none;
    }

    /* ============== FORM STYLES ============== */
    .form-page {
        padding: 0;
        background-color: #f8f9fa;
    }
    
    .form-page .page-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
        padding: 80px 20px;
        text-align: center;
        position: relative;
        width: 100%;
    }
    
    .form-page .page-banner h2 {
        color: white;
        font-size: 3rem;
        margin-bottom: 15px;
    }
    
    .form-page .page-banner p {
        max-width: 600px;
        margin: 0 auto 30px;
        font-size: 1.1rem;
    }
    
    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 60px;
        padding: 60px 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .form-info {
        background: #fff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 1px solid #dee2e6;
    }
    
    .form-info h3 {
        color: #212529;
        margin-bottom: 20px;
        font-size: 1.5rem;
    }
    
    .form-info p {
        color: #495057;
        margin-bottom: 30px;
        line-height: 1.6;
    }
    
    .info-item {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        margin-bottom: 25px;
        padding: 20px 0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .info-item:last-child {
        border-bottom: none;
    }
    
    .info-item strong {
        color: #212529;
        font-weight: 600;
        display: block;
        margin-bottom: 5px;
    }
    
    .info-item span {
        color: #495057;
        line-height: 1.5;
    }
    
    .info-icon {
        width: 40px;
        height: 40px;
        background-color: #D32F2F;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        flex-shrink: 0;
    }
    
    .info-item.special {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        border: 2px solid #D32F2F;
    }
    
    .social-icons {
        display: flex;
        gap: 15px;
        margin-top: 30px;
        justify-content: center;
    }
    
    .social-icons a {
        color: #D32F2F;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #f0f0f0;
        text-decoration: none;
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }
    
    .social-icons a:hover {
        background-color: #D32F2F;
        color: #fff;
        transform: translateY(-2px);
    }
    
    .form-container {
        background: #fff;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 1px solid #dee2e6;
    }
    
    .form-container h3 {
        color: #212529;
        margin-bottom: 30px;
        font-size: 1.5rem;
    }
    
    .form-group {
        margin-bottom: 25px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 8px;
        color: #212529;
        font-weight: 600;
    }
    
    .form-group input,
    .form-group textarea,
    .form-group select {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        box-sizing: border-box;
    }
    
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
        outline: none;
        border-color: #D32F2F;
    }
    
    .form-group textarea {
        min-height: 120px;
        resize: vertical;
    }
    
    .submit-btn {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .submit-btn:hover {
        background: #a32424;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .submit-btn:disabled {
        background: #6c757d;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
    
    .form-message {
        margin-top: 20px;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
    }
    
    .form-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    /* ============== FOOTER STYLES ============== */
    .site-footer {
        background: #212529;
        color: #fff;
        padding: 60px 0 20px;
    }
    
    .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        margin-bottom: 40px;
    }
    
    .footer-column h3 {
        color: #fff;
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: 600;
    }
    
    .footer-column p {
        color: #adb5bd;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    
    .footer-column ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .footer-column ul li {
        margin-bottom: 10px;
    }
    
    .footer-column ul li a {
        color: #adb5bd;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    
    .footer-column ul li a:hover {
        color: #D32F2F;
    }
    
    .newsletter-form {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    
    .newsletter-form input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #495057;
        border-radius: 6px;
        background: #343a40;
        color: #fff;
        font-size: 0.9rem;
    }
    
    .newsletter-form input::placeholder {
        color: #adb5bd;
    }
    
    .newsletter-form button {
        background: #D32F2F;
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s ease;
        font-size: 1.2rem;
    }
    
    .newsletter-form button:hover {
        background: #a32424;
    }
    
    .newsletter-message {
        color: #28a745;
        font-size: 0.9rem;
        margin-top: 10px;
    }
    
    .footer-bottom {
        border-top: 1px solid #495057;
        padding-top: 20px;
        text-align: center;
        color: #adb5bd;
        font-size: 0.9rem;
    }
    
    .footer-bottom a {
        color: #adb5bd;
        text-decoration: none;
        margin: 0 10px;
        transition: color 0.3s ease;
    }
    
    .footer-bottom a:hover {
        color: #D32F2F;
    }
    
    /* ============== PAGE BANNER STYLES ============== */
    .programs-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    .departments-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    .contact-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    .tour-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    /* ============== RESPONSIVE STYLES ============== */
    @media (max-width: 1100px) {
        .header nav ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .header nav ul.active {
            display: flex;
        }
        .header nav ul li {
            margin: 0;
            width: 100%;
            text-align: center;
        }
        .header nav ul li a {
            padding: 15px;
            display: block;
            border-bottom: 1px solid #eee;
        }
        .menu-toggle {
            display: block;
        }
    }
    
    @media (max-width: 992px) {
        .process-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        .logo-title {
            font-size: 20px;
        }
        .container {
            max-width: 100%;
            padding: 0 15px;
        }
    }

    @media (min-width: 576px) {
        .faculty-card {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        .logo-title {
            font-size: 18px;
        }
        .logo-crest {
            height: 50px;
        }
        .form-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 20px;
        }
        .program-cards-grid, .courses-grid, .research-grid, .events-grid, .department-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        .category-header h3 {
            font-size: 2rem;
        }
        .category-header p {
            font-size: 1.1rem;
        }
        .program-card-content {
            padding: 20px;
        }
        .glance-label {
            font-size: clamp(1.2rem, 3vw, 1.5rem);
        }
        .glance-main {
            font-size: clamp(2rem, 6vw, 3rem);
        }
        .hero p {
            font-size: 1.2rem;
        }

        .hero {
            padding: 60px 20px;
            min-height: 60vh;
        }
        
        .page-banner {
            padding: 60px 20px;
        }
        .page-banner h2 {
            font-size: 2.5rem;
        }
        .admissions-journey-banner h2, .faculty-header h2 {
            font-size: 2.5rem;
        }
    }
    
    @media (min-width: 768px) {
        .about-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .form-grid {
            grid-template-columns: 1fr 1.5fr;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 0 10px;
        }
        .hero {
            padding: 60px 15px;
        }
        .page-banner {
            padding: 40px 15px;
        }
        section {
            padding: 20px 15px;
        }
        .program-card-content {
            padding: 15px;
        }
        .form-container {
            padding: 25px;
        }
    }
  `}),sg=()=>(D.useEffect(()=>{const c=document.createElement("link");c.rel="stylesheet",c.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(c);const f=document.createElement("link");return f.rel="stylesheet",f.href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",document.head.appendChild(f),()=>{document.head.removeChild(c),document.head.removeChild(f)}},[]),null),og=({activePage:c})=>{const[f,d]=D.useState(!1),o=_n(),m=v=>{o(v),d(!1)};return u.jsx("header",{className:"header",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"logo-container",onClick:()=>m("/"),children:[u.jsx("img",{src:"https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png",alt:"IGT Logo",className:"logo-crest"}),u.jsxs("div",{className:"logo-text-container",children:[u.jsx("h1",{className:"logo-title",children:"INSTITUTE OF GLOBAL TECHNOLOGY"}),u.jsx("p",{className:"logo-tagline",children:"Gateway to Excellence in Education"})]})]}),u.jsx("nav",{children:u.jsxs("ul",{className:f?"active":"",children:[u.jsx("li",{children:u.jsx(Ie,{to:"/",className:c==="/"?"active":"",children:"Home"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/programs",className:c==="/programs"?"active":"",children:"Programs"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/departments",className:c==="/departments"?"active":"",children:"Departments"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/faculty",className:c==="/faculty"?"active":"",children:"Faculty"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/admissions",className:c==="/admissions"?"active":"",children:"Admissions"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/contact",className:c==="/contact"?"active":"",children:"Contact"})})]})}),u.jsx("button",{className:"menu-toggle",onClick:()=>d(!f),"aria-label":"Open Menu",children:u.jsx("i",{className:"fas fa-bars"})})]})})},fg=()=>u.jsx("section",{id:"hero",className:"hero",children:u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-title-glance",children:[u.jsx("div",{className:"glance-line",children:u.jsx("span",{className:"glance-label",children:"WELCOME TO"})}),u.jsx("div",{className:"glance-line",children:u.jsx("span",{className:"glance-main",children:"INSTITUTE OF"})}),u.jsx("div",{className:"glance-line",children:u.jsx("span",{className:"glance-main",children:"GLOBAL TECHNOLOGY"})})]}),u.jsxs("div",{className:"hero-glance-content",children:[u.jsx("div",{className:"hero-description",children:u.jsx("p",{children:"Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future."})}),u.jsx("div",{className:"hero-accredited",children:"ACCREDITED BY AIAB EUROPE"})]})]})}),dg=()=>u.jsx("section",{id:"about",className:"about",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"ABOUT INSTITUTE OF GLOBAL TECHNOLOGY"}),u.jsx("p",{className:"section-subtitle",children:"Discover our mission, vision, and values that guide us in providing exceptional technology education"}),u.jsxs("div",{className:"about-grid",children:[u.jsx("div",{className:"about-image",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Institute of Global Technology Campus"})}),u.jsxs("div",{className:"about-content",children:[u.jsx("h3",{children:"Transforming Technology Education Since 2005"}),u.jsx("p",{children:"The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success."}),u.jsx("p",{children:"Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies."}),u.jsx("p",{className:"accredited-text",children:"ACCREDITED BY AIAB EUROPE"}),u.jsxs("div",{className:"stats-container",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("div",{className:"number",children:"6000+"}),u.jsx("div",{className:"label",children:"STUDENTS"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("div",{className:"number",children:"300+"}),u.jsx("div",{className:"label",children:"FACULTY"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("div",{className:"number",children:"60+"}),u.jsx("div",{className:"label",children:"PROGRAMS"})]})]})]})]})]})}),hg=()=>u.jsx("section",{id:"why-choose-us",className:"why-choose-us",children:u.jsxs("div",{className:"container",children:[u.jsxs("h2",{children:["Why Choose Us",u.jsx("span",{className:"question-mark",children:"?"})]}),u.jsxs("div",{className:"features-grid",children:[u.jsxs("div",{className:"feature-item",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Industrial Partners"}),u.jsxs("div",{className:"feature-content",children:[u.jsx("h3",{children:"100+ Industrial Partners"}),u.jsx("p",{children:"Strong collaborations with leading technology companies for research and placements."})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Expert Faculty"}),u.jsxs("div",{className:"feature-content",children:[u.jsx("h3",{children:"Learn from Experts"}),u.jsx("p",{children:"Instruction from national and international experts in their respective fields."})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Placement Support"}),u.jsxs("div",{className:"feature-content",children:[u.jsx("h3",{children:"Placement Assistance"}),u.jsx("p",{children:"Complete placement support with career counseling and interview preparation."})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Advanced Research"}),u.jsxs("div",{className:"feature-content",children:[u.jsx("h3",{children:"Advanced Research"}),u.jsx("p",{children:"Opportunities to work on innovative research projects with commercialization potential."})]})]}),u.jsxs("div",{className:"feature-item",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Entrepreneurship Support"}),u.jsxs("div",{className:"feature-content",children:[u.jsx("h3",{children:"Entrepreneurship Support"}),u.jsx("p",{children:"Incubation center and mentorship for student startups and innovations."})]})]})]})]})}),mg=[{category:"Precision Agriculture",subtitle:"Innovative programs combining technology with modern agricultural practices",courses:[{title:"MASTER PROGRAM in Precision Agriculture",image:"https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg",duration:"12 Months",description:"Master data-driven farming techniques using IoT, sensors, and AI for crop optimization."},{title:"MASTER PROGRAM in Agriculture Drones",image:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Train in drone piloting, imaging, and data analysis for agricultural applications."},{title:"MASTER PROGRAM in Hydroponics & Vertical Farming",image:"https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg",duration:"12 Months",description:"Learn sustainable farming techniques without soil in controlled environments."},{title:"MASTER PROGRAM in AI & ML in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg",duration:"12 Months",description:"Apply artificial intelligence and machine learning to solve agricultural challenges."},{title:"MASTER PROGRAM in Agriculture Robotics",image:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",duration:"12 Months",description:"Develop and implement robotic solutions for planting, harvesting, and farm automation."},{title:"MASTER PROGRAM in Advanced Technologies in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp",duration:"12 Months",description:"Explore cutting-edge technologies transforming modern agriculture."},{title:"MASTER PROGRAM in Agri Entrepreneurship",image:"https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business skills specific to agricultural ventures and startups."}]},{category:"AI & Robotics",subtitle:"Specialized programs in artificial intelligence and robotic systems",courses:[{title:"MASTER PROGRAM in AI & Robotics",image:"https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg",duration:"12 Months",description:"Comprehensive training in AI-driven robotic systems and automation."},{title:"MASTER PROGRAM in Generative AI",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master the creation of AI models that generate text, images, and media."},{title:"MASTER PROGRAM in AI & Blockchain",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the convergence of AI and decentralized blockchain technologies."},{title:"MASTER PROGRAM in AI & Data Analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI techniques to extract insights from complex datasets."},{title:"MASTER PROGRAM in AI & Biological Sciences",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to biological research, drug discovery, and genetic analysis."},{title:"MASTER PROGRAM in AI & Cybersecurity Systems",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop AI-powered solutions for cybersecurity threats and vulnerabilities."}]},{category:"AI & Business",subtitle:"Programs at the intersection of artificial intelligence and business applications",courses:[{title:"MASTER PROGRAM in AI & Business",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Transform business operations with AI-driven strategies and solutions."},{title:"MASTER PROGRAM in AI & Management Studies",image:"https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg",duration:"12 Months",description:"Apply AI to organizational leadership, decision-making, and strategy."},{title:"MASTER PROGRAM in AI & Law",image:"https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg",duration:"12 Months",description:"Explore the legal implications and applications of artificial intelligence."},{title:"MASTER PROGRAM in IP Law",image:"https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg",duration:"12 Months",description:"Specialize in intellectual property law for technology and innovation."},{title:"MASTER PROGRAM in AI & Marketing",image:"https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg",duration:"12 Months",description:"Leverage AI for customer insights, personalization, and campaign optimization."}]},{category:"Healthcare & Life Sciences",subtitle:"Programs at the intersection of technology and life sciences",courses:[{title:"MASTER PROGRAM in Clinical Research & Regulatory Affairs",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Gain expertise in clinical trials and pharmaceutical regulations."},{title:"MASTER PROGRAM in Medical Coding",image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg",duration:"12 Months",description:"Learn standardized coding systems for healthcare documentation."},{title:"MASTER PROGRAM in Digital Forensics",image:"https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af",duration:"12 Months",description:"Investigate cybercrimes and recover digital evidence."},{title:"MASTER PROGRAM in Industrial Fermentation Technology",image:"https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master microbial processes for food, pharmaceuticals, and biofuels."},{title:"MASTER PROGRAM in Vaccine Technology",image:"https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png",duration:"12 Months",description:"Study vaccine development, production, and quality control."},{title:"MASTER PROGRAM in Bioentrepreneurship",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business ventures in biotechnology and life sciences."}]},{category:"AI & Creative Technologies",subtitle:"Programs combining artificial intelligence with creative disciplines",courses:[{title:"MASTER PROGRAM in AI & Designing Technology",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to product, graphic, and UX/UI design processes."},{title:"MASTER PROGRAM in AI & Arts",image:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the intersection of artificial intelligence and creative arts."}]},{category:"Emerging Technologies & Smart Systems",subtitle:"Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",courses:[{title:"Reality Architect: Master of AR/VR/XR Development",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master immersive technologies to build future-ready AR, VR, and XR applications."},{title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",image:"https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",duration:"12 Months",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications."},{title:"Game Changer: Master Program in XR Gaming",image:"https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg",duration:"12 Months",description:"Design and develop immersive games using XR technology and gamification strategy."},{title:"Master Program in AR and Mixed Reality",image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",duration:"12 Months",description:"Specialize in designing cutting-edge MR life environments and interfaces."},{title:"Master Program in Electric Vehicle Technology",image:"https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png",duration:"12 Months",description:"Learn about EV systems, battery design, automatic mobility, and energy management."},{title:"Master Program in IoT and Embedded Systems",image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp",duration:"12 Months",description:"Build connected smart devices with microcontrollers, sensors, and communication protocols."},{title:"Master Program in Human-Computer Interaction",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Focus on designing intuitive interfaces, enhancing user experiences, and usability testing."}]},{category:"Doctoral & Postdoctoral Programs",subtitle:"Advanced research programs for scholars and fellows in science, engineering, and humanities",courses:[{title:"Doctoral Programs",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Varies",description:"Research-focused degrees in multiple disciplines:",list:["PhD in Engineering in ICT disciplines","PhD in Science and Mathematics","PhD in Humanities, Social Science and Design"]},{title:"Postdoctoral Programs",image:"https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Flexible",description:"Postdoctoral fellowships in emerging domains:",list:["Wireless Communications, Embedded Systems","AI, ML, and Information Security","5G/6G, Robotics, VLSI, NLP, Adversarial ML"]}]}],pg=({course:c})=>u.jsxs("div",{className:"program-card",children:[u.jsx("img",{src:c.image,alt:c.title,className:"program-card-image"}),u.jsxs("div",{className:"program-card-content",children:[u.jsx("h4",{children:c.title}),u.jsxs("div",{className:"program-card-duration",children:[u.jsx("i",{className:"far fa-clock"}),c.duration]}),u.jsxs("div",{className:"program-card-description",children:[c.description,c.list&&u.jsx("ul",{children:c.list.map((f,d)=>u.jsx("li",{children:f},d))})]}),u.jsxs("div",{className:"program-card-buttons",children:[u.jsx("a",{href:"#",className:"btn btn-details",children:"Details"}),u.jsx("a",{href:"#",className:"btn btn-apply",children:"Apply"})]})]})]}),gg=()=>{const c=_n();return u.jsxs("section",{id:"programs",className:"programs-page",children:[u.jsx("div",{className:"page-banner programs-banner",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Transform Your Future"}),u.jsx("p",{children:"Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market."})]})}),mg.map((f,d)=>u.jsx("div",{className:"program-category",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"category-header",children:[u.jsx("h3",{children:f.category}),u.jsx("p",{children:f.subtitle})]}),u.jsx("div",{className:"program-cards-grid",children:f.courses.map((o,m)=>u.jsx(pg,{course:o},`${o.title}-${m}`))})]})},`${f.category}-${d}`)),u.jsxs("div",{className:"admissions-cta",children:[u.jsx("h3",{children:"Ready to take the next step?"}),u.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),u.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>c("/contact"),children:"Contact Admissions"}),u.jsx("button",{className:"details-btn btn-secondary",onClick:()=>c("/tour"),children:"Schedule Campus Tour"})]})]})},xg=()=>{const c=_n();return u.jsxs("section",{className:"admissions-page",children:[u.jsx("div",{className:"admissions-journey-banner",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Begin Your Academic Journey"}),u.jsx("p",{children:"Join our community of innovators and thought leaders"})]})}),u.jsx("div",{className:"admissions-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{className:"section-title",children:"Admissions Process"}),u.jsx("p",{className:"section-tagline",children:"Our streamlined admission process makes it easy to join our academic community"}),u.jsxs("div",{className:"process-grid",children:[u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"1"}),u.jsx("h3",{children:"Application"}),u.jsx("p",{children:"Submit your online application along with required documents through our portal."}),u.jsx("a",{href:"#",className:"process-btn",children:"Apply Now →"})]}),u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"2"}),u.jsx("h3",{children:"Review"}),u.jsx("p",{children:"Our admissions committee will carefully evaluate your application and credentials."}),u.jsx("a",{href:"#",className:"process-btn",children:"Learn More →"})]}),u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"3"}),u.jsx("h3",{children:"Interview"}),u.jsx("p",{children:"Selected candidates will be invited for an interview (in-person or virtual)."}),u.jsx("a",{href:"#",className:"process-btn",children:"Prepare →"})]}),u.jsxs("div",{className:"process-card",children:[u.jsx("div",{className:"process-number",children:"4"}),u.jsx("h3",{children:"Decision"}),u.jsx("p",{children:"Receive your admission decision within 2-4 weeks of your interview."}),u.jsx("a",{href:"#",className:"process-btn",children:"Timeline →"})]})]}),u.jsx("h2",{className:"section-title",children:"Admission Details"}),u.jsx("p",{className:"section-tagline",children:"Key information to help you prepare your application"}),u.jsxs("div",{className:"details-grid",children:[u.jsxs("div",{className:"details-card",children:[u.jsxs("h3",{children:[u.jsx("span",{className:"details-icon",children:u.jsx("i",{className:"fas fa-file-alt"})}),"Application Requirements"]}),u.jsxs("ul",{className:"details-list",children:[u.jsx("li",{children:"Completed online application form"}),u.jsx("li",{children:"Bachelor's degree in relevant field with minimum 50% marks"}),u.jsx("li",{children:"Statement of purpose (500-1000 words)"}),u.jsx("li",{children:"Two letters of recommendation"}),u.jsx("li",{children:"Professional resume/CV"}),u.jsx("li",{children:"Application fee (waivers available)"})]}),u.jsx("a",{href:"#",className:"details-btn btn-red",children:"Download Checklist"})]}),u.jsxs("div",{className:"details-card important-dates",children:[u.jsxs("h3",{children:[u.jsx("span",{className:"details-icon",children:u.jsx("i",{className:"fas fa-calendar-alt"})}),"Important Dates"]}),u.jsxs("ul",{className:"details-list",children:[u.jsx("li",{children:"Jul 15 Fall Semester Deadline"}),u.jsx("li",{children:"Nov 15 Spring Semester Deadline"}),u.jsx("li",{children:"Apr 15 Summer Semester Deadline"}),u.jsx("li",{children:"Dec 1 Early Decision Deadline"}),u.jsx("li",{children:"Aug 20-25 Orientation Week"})]}),u.jsx("a",{href:"#",className:"details-btn btn-red",children:"Add to Calendar"})]}),u.jsxs("div",{className:"details-card",children:[u.jsxs("h3",{children:[u.jsx("span",{className:"details-icon",children:u.jsx("i",{className:"fas fa-university"})}),"Tuition & Financial Aid"]}),u.jsxs("ul",{className:"details-list",children:[u.jsx("li",{children:"Tuition: ₹1,50,000 per semester"}),u.jsx("li",{children:"Merit-based scholarships available"}),u.jsx("li",{children:"Research and teaching assistantships"}),u.jsx("li",{children:"Education loan partnerships"}),u.jsx("li",{children:"Flexible payment plans"})]}),u.jsx("a",{href:"#",className:"details-btn btn-red",children:"Financial Aid Information"})]})]}),u.jsxs("div",{className:"admissions-cta",children:[u.jsx("h3",{children:"Ready to take the next step?"}),u.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),u.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>c("/contact"),children:"Contact Admissions"}),u.jsx("button",{className:"details-btn btn-secondary",onClick:()=>c("/tour"),children:"Schedule Campus Tour"})]})]})})]})},vg=()=>{const[c,f]=D.useState(""),[d,o]=D.useState(!1),m=async v=>{v.preventDefault(),o(!0),await new Promise(T=>setTimeout(T,1500)),f("Your message has been sent successfully!"),o(!1),setTimeout(()=>f(""),5e3),v.target.reset()};return u.jsxs("section",{className:"form-page",children:[u.jsx("div",{className:"page-banner contact-banner",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Get In Touch"}),u.jsx("p",{children:"We're here to help and answer any question you might have."})]})}),u.jsx("div",{className:"container",children:u.jsxs("div",{className:"form-grid",children:[u.jsxs("div",{className:"form-info",children:[u.jsx("h3",{children:"Contact Information"}),u.jsx("p",{children:"Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below."}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:u.jsx("i",{className:"fas fa-map-marker-alt"})}),u.jsxs("div",{className:"info-content",children:[u.jsx("strong",{children:"Address"}),u.jsx("span",{children:"REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11."})]})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:u.jsx("i",{className:"fas fa-envelope"})}),u.jsxs("div",{className:"info-content",children:[u.jsx("strong",{children:"Email"}),u.jsx("span",{children:"admissions@igt.edu.in"})]})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("div",{className:"info-icon",children:u.jsx("i",{className:"fas fa-clock"})}),u.jsxs("div",{className:"info-content",children:[u.jsx("strong",{children:"Timing"}),u.jsx("span",{children:"Mon - Sat: 9:00 AM - 5:30 PM"})]})]}),u.jsx("div",{className:"info-item special",children:u.jsx("strong",{children:"A UNIT OF BRC"})}),u.jsxs("div",{className:"social-icons",children:[u.jsx("a",{href:"#","aria-label":"Facebook",children:u.jsx("i",{className:"fab fa-facebook-f"})}),u.jsx("a",{href:"#","aria-label":"Twitter",children:u.jsx("i",{className:"fab fa-twitter"})}),u.jsx("a",{href:"#","aria-label":"LinkedIn",children:u.jsx("i",{className:"fab fa-linkedin-in"})}),u.jsx("a",{href:"#","aria-label":"Instagram",children:u.jsx("i",{className:"fab fa-instagram"})}),u.jsx("a",{href:"#","aria-label":"Youtube",children:u.jsx("i",{className:"fab fa-youtube"})})]})]}),u.jsxs("div",{className:"form-container",children:[u.jsx("h3",{children:"Send Us a Message"}),u.jsxs("form",{onSubmit:m,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",children:"Your Name"}),u.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:"Email Address"}),u.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"subject",children:"Subject"}),u.jsx("input",{type:"text",id:"subject",name:"subject"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",children:"Your Message"}),u.jsx("textarea",{id:"message",name:"message",required:!0})]}),u.jsx("button",{type:"submit",className:"submit-btn",disabled:d,children:d?u.jsxs(u.Fragment,{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"}),"Sending..."]}):"Send Message"}),c&&u.jsx("div",{className:"form-message success",children:c})]})]})]})})]})},bg=()=>{const[c,f]=D.useState(""),d=o=>{o.preventDefault(),f("Your tour has been scheduled successfully!"),setTimeout(()=>f(""),5e3),o.target.reset()};return u.jsxs("section",{className:"form-page",children:[u.jsx("div",{className:"page-banner tour-banner",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Schedule a Campus Tour"}),u.jsx("p",{children:"We would love to show you around our campus."})]})}),u.jsx("div",{className:"container",children:u.jsxs("div",{className:"form-grid",children:[u.jsxs("div",{className:"form-info",children:[u.jsx("h3",{children:"Visit Us"}),u.jsx("p",{children:"Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT."}),u.jsxs("div",{className:"info-item",children:[u.jsxs("strong",{children:[u.jsx("i",{className:"fas fa-clock"})," Tour Hours"]}),u.jsx("span",{children:"Monday - Friday: 10:00 AM - 4:00 PM"})]}),u.jsxs("div",{className:"info-item",children:[u.jsxs("strong",{children:[u.jsx("i",{className:"fas fa-map-marker-alt"})," Location"]}),u.jsx("span",{children:"123 Tech Avenue, Innovation City"})]})]}),u.jsxs("div",{className:"form-container",children:[u.jsx("h3",{children:"Book Your Visit"}),u.jsxs("form",{onSubmit:d,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",children:"Your Name"}),u.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:"Email Address"}),u.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"date",children:"Preferred Date"}),u.jsx("input",{type:"date",id:"date",name:"date",required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"time",children:"Preferred Time"}),u.jsx("input",{type:"time",id:"time",name:"time",required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"guests",children:"Number of Guests"}),u.jsxs("select",{id:"guests",name:"guests",children:[u.jsx("option",{children:"1"}),u.jsx("option",{children:"2"}),u.jsx("option",{children:"3"}),u.jsx("option",{children:"4"}),u.jsx("option",{children:"5+"})]})]}),u.jsx("button",{type:"submit",className:"submit-btn",children:"Schedule Tour"}),c&&u.jsx("div",{className:"form-message success",children:c})]})]})]})})]})},yg=()=>u.jsx("section",{id:"academic-programs",className:"academic-programs",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Our Academic Programs"}),u.jsx("p",{className:"section-subtitle",children:"Explore our diverse range of postgraduate diploma programs in emerging technologies"}),u.jsxs("div",{className:"programs-grid",children:[u.jsxs("div",{className:"program-card",children:[u.jsx("div",{className:"program-visual",children:u.jsx("img",{src:"https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg",alt:"AI & Management"})}),u.jsxs("div",{className:"program-content",children:[u.jsx("h4",{children:"EU ACC Certificate Program in AI & Management"}),u.jsx("p",{children:"Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques."}),u.jsx("button",{className:"btn-details",children:"Details"}),u.jsxs("div",{className:"program-info",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-certificate"}),u.jsx("span",{children:"Certificate Program"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{children:"1st Sep - 30th Sep 2025"})]})]})]})]}),u.jsxs("div",{className:"program-card",children:[u.jsx("div",{className:"program-visual",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"AR VR Technology"})}),u.jsxs("div",{className:"program-content",children:[u.jsx("h4",{children:"EU ACC Master Program in AR & VR Technology"}),u.jsx("p",{children:"Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design."}),u.jsx("button",{className:"btn-details",children:"Details"}),u.jsxs("div",{className:"program-info",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-building"}),u.jsx("span",{children:"100+ Industrial Partners"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-hands-helping"}),u.jsx("span",{children:"10+ Hands-on Projects"})]})]})]})]}),u.jsxs("div",{className:"program-card",children:[u.jsx("div",{className:"program-visual",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Agri Drones"})}),u.jsxs("div",{className:"program-content",children:[u.jsx("h4",{children:"MASTER PROGRAM in Agri Drones"}),u.jsx("p",{children:"Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making."}),u.jsx("button",{className:"btn-details",children:"Details"}),u.jsxs("div",{className:"program-info",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-graduation-cap"}),u.jsx("span",{children:"MASTER PROGRAM"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-clock"}),u.jsx("span",{children:"12 Months"})]})]})]})]}),u.jsxs("div",{className:"program-card",children:[u.jsx("div",{className:"program-visual",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Medical Robotics"})}),u.jsxs("div",{className:"program-content",children:[u.jsx("h4",{children:"MASTER PROGRAM in Medical Robotics"}),u.jsx("p",{children:"Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration."}),u.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),u.jsxs("div",{className:"program-info",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-graduation-cap"}),u.jsx("span",{children:"MASTER PROGRAM"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-clock"}),u.jsx("span",{children:"12 Months"})]})]})]})]}),u.jsxs("div",{className:"program-card",children:[u.jsx("div",{className:"program-visual",children:u.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agri Robotics"})}),u.jsxs("div",{className:"program-content",children:[u.jsx("h4",{children:"MASTER PROGRAM in Agri Robotics"}),u.jsx("p",{children:"Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems."}),u.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),u.jsxs("div",{className:"program-info",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-graduation-cap"}),u.jsx("span",{children:"MASTER PROGRAM"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-clock"}),u.jsx("span",{children:"12 Months"})]})]})]})]})]})]})}),Sg=()=>u.jsx("section",{id:"upcoming-courses",className:"upcoming-courses",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"courses-header",children:[u.jsx("div",{className:"expand-knowledge",children:"EXPAND YOUR KNOWLEDGE"}),u.jsx("h2",{children:"Upcoming Courses"}),u.jsx("p",{className:"section-subtitle",children:"Discover our latest course offerings designed to keep you at the forefront of technology"})]}),u.jsxs("div",{className:"courses-grid",children:[u.jsxs("div",{className:"course-card featured",children:[u.jsxs("div",{className:"course-image",children:[u.jsx("img",{src:"https://agmay.in/images/manufacturing.webp",alt:"Drone Manufacturing"}),u.jsx("div",{className:"course-badge",children:"Featured"})]}),u.jsxs("div",{className:"course-content",children:[u.jsx("h3",{children:"MASTER PROGRAM in Drone Manufacturing"}),u.jsx("p",{children:"Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training."}),u.jsxs("div",{className:"course-status",children:[u.jsxs("div",{className:"status-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{children:"Coming soon"})]}),u.jsxs("div",{className:"status-item",children:[u.jsx("i",{className:"fas fa-clock"}),u.jsx("span",{children:"12 Months"})]})]}),u.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),u.jsxs("div",{className:"course-card",children:[u.jsxs("div",{className:"course-image",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Medical Robotics"}),u.jsx("div",{className:"course-badge",children:"Popular"})]}),u.jsxs("div",{className:"course-content",children:[u.jsx("h3",{children:"MASTER PROGRAM in Medical Robotics"}),u.jsx("p",{children:"Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics."}),u.jsxs("div",{className:"course-status",children:[u.jsxs("div",{className:"status-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{children:"Coming soon"})]}),u.jsxs("div",{className:"status-item",children:[u.jsx("i",{className:"fas fa-clock"}),u.jsx("span",{children:"12 Months"})]})]}),u.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),u.jsxs("div",{className:"course-card",children:[u.jsxs("div",{className:"course-image",children:[u.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agriculture Robotics"}),u.jsx("div",{className:"course-badge",children:"New"})]}),u.jsxs("div",{className:"course-content",children:[u.jsx("h3",{children:"MASTER PROGRAM in Agriculture Robotics"}),u.jsx("p",{children:"Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques."}),u.jsxs("div",{className:"course-status",children:[u.jsxs("div",{className:"status-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{children:"Coming soon"})]}),u.jsxs("div",{className:"status-item",children:[u.jsx("i",{className:"fas fa-clock"}),u.jsx("span",{children:"12 Months"})]})]}),u.jsx("button",{className:"btn-details-blue",children:"Details"})]})]})]}),u.jsx("div",{className:"view-all-courses",children:u.jsx("button",{className:"btn-view-all",children:"View All Upcoming Courses"})})]})}),jg=()=>u.jsx("section",{id:"research",className:"research-projects",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Our Ongoing Research Projects"}),u.jsx("p",{className:"section-subtitle",children:"Explore our cutting-edge research initiatives across various technology domains"}),u.jsxs("div",{className:"research-grid",children:[u.jsxs("div",{className:"research-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI-Powered Predictive Maintenance"}),u.jsxs("div",{className:"research-card-content",children:[u.jsx("h3",{children:"AI-Powered Predictive Maintenance"}),u.jsx("p",{children:"Developing AI models for predictive maintenance of industrial equipment to reduce downtime."})]})]}),u.jsxs("div",{className:"research-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conversational AI Assistant"}),u.jsxs("div",{className:"research-card-content",children:[u.jsx("h3",{children:"Conversational AI Assistant"}),u.jsx("p",{children:"Creating an AI assistant for mental health support and counseling services."})]})]}),u.jsxs("div",{className:"research-card",children:[u.jsx("img",{src:"https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=",alt:"Automated Disease Detection"}),u.jsxs("div",{className:"research-card-content",children:[u.jsx("h3",{children:"Automated Disease Detection"}),u.jsx("p",{children:"Using deep learning for automated detection of diseases in medical images."})]})]}),u.jsxs("div",{className:"research-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Point-of-Care Diagnostic Device"}),u.jsxs("div",{className:"research-card-content",children:[u.jsx("h3",{children:"Point-of-Care Diagnostic Device"}),u.jsx("p",{children:"Developing portable diagnostic tools for rapid detection of infectious diseases."})]})]}),u.jsxs("div",{className:"research-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Smart Grid Systems"}),u.jsxs("div",{className:"research-card-content",children:[u.jsx("h3",{children:"Smart Grid Systems"}),u.jsx("p",{children:"Creating intelligent grid systems for efficient energy distribution and management."})]})]}),u.jsxs("div",{className:"research-card",children:[u.jsx("img",{src:"https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=",alt:"EV Charging Infrastructure"}),u.jsxs("div",{className:"research-card-content",children:[u.jsx("h3",{children:"EV Charging Infrastructure"}),u.jsx("p",{children:"Designing urban electric vehicle charging networks for sustainable transportation."})]})]})]})]})}),Ag=()=>{const[c,f]=D.useState("conferences"),d=()=>{switch(c){case"conferences":return u.jsxs("div",{className:"events-grid",children:[u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conference Hall"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"International Conference on AI & Robotics"}),u.jsx("p",{children:"Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements."}),u.jsxs("div",{className:"event-card-info",children:[u.jsx("i",{className:"fas fa-map-marker-alt"}),u.jsx("span",{children:"Virtual & On-campus"})]})]})]}),u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"People collaborating"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"Tech for Sustainable Development"}),u.jsx("p",{children:"Exploring technological solutions for achieving sustainable development goals."}),u.jsxs("div",{className:"event-card-info",children:[u.jsx("i",{className:"fas fa-map-marker-alt"}),u.jsx("span",{children:"Main Campus"})]})]})]}),u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agri-Tech"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"Future of Agri-Tech"}),u.jsx("p",{children:"Conference focusing on emerging technologies in agriculture and food production."}),u.jsxs("div",{className:"event-card-info",children:[u.jsx("i",{className:"fas fa-map-marker-alt"}),u.jsx("span",{children:"Agricultural Research Center"})]})]})]})]});case"webinars":return u.jsxs("div",{className:"events-grid",children:[u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone in flight"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"Introduction to Drone Technology"}),u.jsx("p",{children:"Free webinar covering basics of drone technology and its industrial applications."})]})]}),u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI and ML concept"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"Career in AI & ML"}),u.jsx("p",{children:"Webinar discussing career opportunities and skill requirements in AI/ML fields."})]})]}),u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Precision agriculture"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"Precision Agriculture Techniques"}),u.jsx("p",{children:"Learn about modern precision farming methods using IoT and data analytics."})]})]})]});case"courses":return u.jsxs("div",{className:"events-grid",children:[u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone piloting"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"Certificate in Drone Piloting"}),u.jsx("p",{children:"3-month program covering drone operation, regulations, and commercial applications."}),u.jsxs("div",{className:"event-card-info",children:[u.jsx("i",{className:"fas fa-check-circle"}),u.jsx("span",{children:"DGCA Approved"})]})]})]}),u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Business analytics dashboard"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"AI for Business Professionals"}),u.jsx("p",{children:"6-week certificate course on AI applications for non-technical business leaders."}),u.jsxs("div",{className:"event-card-info",children:[u.jsx("i",{className:"fas fa-check-circle"}),u.jsx("span",{children:"Industry Recognized"})]})]})]}),u.jsxs("div",{className:"event-card",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"IoT circuit board"}),u.jsxs("div",{className:"event-card-content",children:[u.jsx("h3",{children:"IoT Fundamentals"}),u.jsx("p",{children:"8-week hands-on course on Internet of Things concepts and implementation."}),u.jsxs("div",{className:"event-card-info",children:[u.jsx("i",{className:"fas fa-check-circle"}),u.jsx("span",{children:"With Lab Access"})]})]})]})]});default:return null}};return u.jsx("section",{id:"events",className:"events-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Conferences, Webinars & Certificate Courses"}),u.jsx("p",{className:"section-subtitle",children:"Participate in our knowledge-sharing events and short-term certification programs"}),u.jsxs("div",{className:"events-tabs",children:[u.jsx("button",{onClick:()=>f("conferences"),className:`tab-btn ${c==="conferences"?"active":""}`,children:"Conferences"}),u.jsx("button",{onClick:()=>f("webinars"),className:`tab-btn ${c==="webinars"?"active":""}`,children:"Webinars"}),u.jsx("button",{onClick:()=>f("courses"),className:`tab-btn ${c==="courses"?"active":""}`,children:"Certificate Courses"})]}),d()]})})},Eg=()=>{const[c,f]=D.useState("");_n();const d=o=>{o.preventDefault(),f("Thank you for subscribing!"),setTimeout(()=>f(""),5e3),o.target.reset()};return u.jsx("footer",{id:"contact",className:"site-footer",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{className:"footer-column",children:[u.jsx("h3",{children:"About Institute of Global Technology"}),u.jsx("p",{children:"Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields."}),u.jsx("p",{children:"Accredited by AIAB Europe."}),u.jsxs("div",{className:"social-icons",children:[u.jsx("a",{href:"#","aria-label":"Facebook",children:u.jsx("i",{className:"fab fa-facebook-f"})}),u.jsx("a",{href:"#","aria-label":"Twitter",children:u.jsx("i",{className:"fab fa-twitter"})}),u.jsx("a",{href:"#","aria-label":"LinkedIn",children:u.jsx("i",{className:"fab fa-linkedin-in"})}),u.jsx("a",{href:"#","aria-label":"Instagram",children:u.jsx("i",{className:"fab fa-instagram"})})]})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h3",{children:"Quick Links"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(Ie,{to:"/",className:"footer-nav-link",children:"Home"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/programs",className:"footer-nav-link",children:"Academic Programs"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/departments",className:"footer-nav-link",children:"Research Departments"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/faculty",className:"footer-nav-link",children:"Faculty"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/admissions",className:"footer-nav-link",children:"Admissions"})}),u.jsx("li",{children:u.jsx(Ie,{to:"/contact",className:"footer-nav-link",children:"Contact"})})]})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h3",{children:"Academic"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#",children:"Robotics Programs"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"AI & ML Programs"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"Drone Technology"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"Precision Agriculture"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"Research Opportunities"})}),u.jsx("li",{children:u.jsx("a",{href:"#",children:"Academic Calendar"})})]})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h3",{children:"Newsletter"}),u.jsx("p",{children:"Subscribe to our newsletter to receive updates on events, admissions, and institute news."}),u.jsxs("form",{className:"newsletter-form",onSubmit:d,children:[u.jsx("input",{type:"email",placeholder:"Your Email",required:!0}),u.jsx("button",{type:"submit","aria-label":"Subscribe",children:"►"})]}),c&&u.jsx("p",{className:"newsletter-message",children:c})]})]}),u.jsxs("div",{className:"footer-bottom",children:["© 2025 Institute of Global Technology. All Rights Reserved. |",u.jsx("a",{href:"#",children:"Terms of Use"})," |",u.jsx("a",{href:"#",children:"Privacy Policy"})," |",u.jsx("a",{href:"#",children:"Accessibility"})]})]})})},Ng=()=>u.jsxs(u.Fragment,{children:[u.jsx(fg,{}),u.jsx(dg,{}),u.jsx(hg,{}),u.jsx(yg,{}),u.jsx(Sg,{}),u.jsx(jg,{}),u.jsx(Ag,{})]}),Tg=[{name:"AI & Machine Learning",description:"Developing AI and ML algorithms, models, and applications for various industries.",researchAreas:["Natural Language Processing","Computer Vision","Predictive Analytics","Robotics"],image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg"},{name:"Cybersecurity",description:"Investigating cybersecurity threats, vulnerabilities, and countermeasures.",researchAreas:["Threat Intelligence","Incident Response","Cryptography","Network Security"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Data Science & Analytics",description:"Developing data-driven solutions for insights and decision-making.",researchAreas:["Big Data Analytics","Data Visualization","Predictive Modelling","Statistical Analysis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"IoT & Edge Computing",description:"Designing and implementing IoT systems and edge computing architectures.",researchAreas:["IoT Security","Edge AI","Real-time Analytics","Industrial Automation"],image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp"},{name:"Sustainable Energy",description:"Investigating sustainable energy solutions and climate change mitigation.",researchAreas:["Renewable Energy","Energy Storage","Green Buildings","Sustainable Infrastructure"],image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Biotechnology & Healthcare",description:"Developing innovative solutions for healthcare and medicine.",researchAreas:["Personalized Medicine","Regenerative Medicine","Gene Editing","Medical Imaging"],image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"},{name:"Robotics & Autonomous Systems",description:"Designing advanced robotic systems and autonomous vehicles.",researchAreas:["Robotics","Autonomous Systems","Human-Robot Interaction","Swarm Robotics"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Advanced Materials",description:"Investigating novel materials and manufacturing processes.",researchAreas:["Nanomaterials","Biomaterials","3D Printing","Advanced Manufacturing"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Human-Computer Interaction",description:"Developing user-centered interfaces and experiences.",researchAreas:["User Experience Design","Human-Computer Interaction","Accessibility","Usability"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Zoology & Animal Biotechnology",description:"Exploring the genetic and cellular aspects of animals for sustainable development.",researchAreas:["Animal Genetics","Cellular Biotechnology","Wildlife Conservation","Veterinary Applications"],image:"https://i.ibb.co/WNZ4GPQ1/download-11.jpg"},{name:"Botany & Plant Biotechnology",description:"Advancing plant science through genetic engineering and sustainable agriculture.",researchAreas:["Plant Tissue Culture","Genetically Modified Crops","Medicinal Plants","Agro-biotechnology"],image:"https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg"},{name:"Quantum Computing",description:"Exploring quantum computing and emerging technologies.",researchAreas:["Quantum Algorithms","Quantum Applications","Blockchain","Distributed Ledger Tech"],image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}],Rg=()=>u.jsxs("section",{className:"departments-page",children:[u.jsx("div",{className:"page-banner departments-banner",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"Our Research Departments"}),u.jsx("p",{children:"Explore our specialized research departments that are pushing the boundaries of knowledge and innovation"})]})}),u.jsx("div",{className:"container",children:u.jsx("div",{className:"department-grid",children:Tg.map((c,f)=>u.jsxs("div",{className:"department-card",children:[u.jsx("img",{src:c.image,alt:c.name}),u.jsxs("div",{className:"department-card-content",children:[u.jsx("h3",{children:c.name}),u.jsx("p",{children:c.description}),u.jsx("strong",{children:"Research Areas:"}),u.jsx("ul",{children:c.researchAreas.map((d,o)=>u.jsx("li",{children:d},o))}),u.jsx("a",{href:"#",children:"Explore Department"})]})]},f))})})]}),Mg=[{name:"Dr Ipseeta Nanda",title:"Hon.Director Dean IGT",bio:"With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.",image:"https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Rahul Vadiseety",title:"Director AI",bio:"Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.",image:"https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr. Rath Satyasambit",title:"Director Robotics",bio:"Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",image:"https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Harshichander",title:"Director Biology",bio:"Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.",image:"https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png",social:{email:"#",linkedin:"#",scholar:"#"}}],Dg=()=>u.jsxs("section",{className:"faculty-page",children:[u.jsxs("div",{className:"faculty-header",children:[u.jsx("h2",{children:"Our Distinguished Faculty"}),u.jsx("p",{children:"Meet our accomplished faculty members who are experts in their fields and dedicated to student success."})]}),u.jsx("div",{className:"container",children:u.jsx("div",{className:"faculty-grid",children:Mg.map((c,f)=>u.jsxs("div",{className:"faculty-card",children:[u.jsx("img",{src:c.image,alt:`Portrait of ${c.name}`,className:"faculty-image"}),u.jsxs("div",{className:"faculty-content",children:[u.jsx("h3",{children:c.name}),u.jsx("span",{className:"title",children:c.title}),u.jsx("p",{children:c.bio}),u.jsxs("div",{className:"faculty-social",children:[u.jsx("a",{href:c.social.email,"aria-label":"Email",children:u.jsx("i",{className:"fas fa-envelope"})}),u.jsx("a",{href:c.social.linkedin,"aria-label":"LinkedIn",children:u.jsx("i",{className:"fab fa-linkedin-in"})}),u.jsx("a",{href:c.social.scholar,"aria-label":"Google Scholar",children:u.jsx("i",{className:"ai ai-google-scholar"})})]})]})]},f))})})]}),wg=()=>{const c=ja();return D.useEffect(()=>{window.scrollTo(0,0)},[c.pathname]),u.jsxs(u.Fragment,{children:[u.jsx(rg,{}),u.jsx(sg,{}),u.jsx(og,{activePage:c.pathname}),u.jsx("main",{children:u.jsxs(D0,{children:[u.jsx(Sa,{path:"/",element:u.jsx(Ng,{})}),u.jsx(Sa,{path:"/programs",element:u.jsx(gg,{})}),u.jsx(Sa,{path:"/departments",element:u.jsx(Rg,{})}),u.jsx(Sa,{path:"/faculty",element:u.jsx(Dg,{})}),u.jsx(Sa,{path:"/admissions",element:u.jsx(xg,{})}),u.jsx(Sa,{path:"/contact",element:u.jsx(vg,{})}),u.jsx(Sa,{path:"/tour",element:u.jsx(bg,{})})]})}),u.jsx(Eg,{})]})};function zg(){return u.jsx(P0,{children:u.jsx(wg,{})})}Yp.createRoot(document.getElementById("root")).render(u.jsx(zp.StrictMode,{children:u.jsx(zg,{})}));
