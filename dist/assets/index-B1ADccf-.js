(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const v of m)if(v.type==="childList")for(const T of v.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&o(T)}).observe(document,{childList:!0,subtree:!0});function d(m){const v={};return m.integrity&&(v.integrity=m.integrity),m.referrerPolicy&&(v.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?v.credentials="include":m.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function o(m){if(m.ep)return;m.ep=!0;const v=d(m);fetch(m.href,v)}})();function Xd(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var xu={exports:{}},wn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Rp(){if(Rd)return wn;Rd=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,m,v){var T=null;if(v!==void 0&&(T=""+v),m.key!==void 0&&(T=""+m.key),"key"in m){v={};for(var z in m)z!=="key"&&(v[z]=m[z])}else v=m;return m=v.ref,{$$typeof:c,type:o,key:T,ref:m!==void 0?m:null,props:v}}return wn.Fragment=f,wn.jsx=d,wn.jsxs=d,wn}var wd;function wp(){return wd||(wd=1,xu.exports=Rp()),xu.exports}var r=wp(),bu={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Mp(){if(Md)return te;Md=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),T=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),_=Symbol.iterator;function q(p){return p===null||typeof p!="object"?null:(p=_&&p[_]||p["@@iterator"],typeof p=="function"?p:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,W={};function G(p,C,B){this.props=p,this.context=C,this.refs=W,this.updater=B||X}G.prototype.isReactComponent={},G.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,C,"setState")},G.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function V(){}V.prototype=G.prototype;function L(p,C,B){this.props=p,this.context=C,this.refs=W,this.updater=B||X}var ee=L.prototype=new V;ee.constructor=L,k(ee,G.prototype),ee.isPureReactComponent=!0;var ye=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function De(p,C,B,U,Z,ce){return B=ce.ref,{$$typeof:c,type:p,key:C,ref:B!==void 0?B:null,props:ce}}function _e(p,C){return De(p.type,C,void 0,void 0,void 0,p.props)}function Ae(p){return typeof p=="object"&&p!==null&&p.$$typeof===c}function et(p){var C={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(B){return C[B]})}var ft=/\/+/g;function Xe(p,C){return typeof p=="object"&&p!==null&&p.key!=null?et(""+p.key):C.toString(36)}function Aa(){}function Ea(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Aa,Aa):(p.status="pending",p.then(function(C){p.status==="pending"&&(p.status="fulfilled",p.value=C)},function(C){p.status==="pending"&&(p.status="rejected",p.reason=C)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Qe(p,C,B,U,Z){var ce=typeof p;(ce==="undefined"||ce==="boolean")&&(p=null);var P=!1;if(p===null)P=!0;else switch(ce){case"bigint":case"string":case"number":P=!0;break;case"object":switch(p.$$typeof){case c:case f:P=!0;break;case N:return P=p._init,Qe(P(p._payload),C,B,U,Z)}}if(P)return Z=Z(p),P=U===""?"."+Xe(p,0):U,ye(Z)?(B="",P!=null&&(B=P.replace(ft,"$&/")+"/"),Qe(Z,C,B,"",function($t){return $t})):Z!=null&&(Ae(Z)&&(Z=_e(Z,B+(Z.key==null||p&&p.key===Z.key?"":(""+Z.key).replace(ft,"$&/")+"/")+P)),C.push(Z)),1;P=0;var tt=U===""?".":U+":";if(ye(p))for(var be=0;be<p.length;be++)U=p[be],ce=tt+Xe(U,be),P+=Qe(U,C,B,ce,Z);else if(be=q(p),typeof be=="function")for(p=be.call(p),be=0;!(U=p.next()).done;)U=U.value,ce=tt+Xe(U,be++),P+=Qe(U,C,B,ce,Z);else if(ce==="object"){if(typeof p.then=="function")return Qe(Ea(p),C,B,U,Z);throw C=String(p),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return P}function w(p,C,B){if(p==null)return p;var U=[],Z=0;return Qe(p,U,"","",function(ce){return C.call(B,ce,Z++)}),U}function H(p){if(p._status===-1){var C=p._result;C=C(),C.then(function(B){(p._status===0||p._status===-1)&&(p._status=1,p._result=B)},function(B){(p._status===0||p._status===-1)&&(p._status=2,p._result=B)}),p._status===-1&&(p._status=0,p._result=C)}if(p._status===1)return p._result.default;throw p._result}var F=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function pe(){}return te.Children={map:w,forEach:function(p,C,B){w(p,function(){C.apply(this,arguments)},B)},count:function(p){var C=0;return w(p,function(){C++}),C},toArray:function(p){return w(p,function(C){return C})||[]},only:function(p){if(!Ae(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},te.Component=G,te.Fragment=d,te.Profiler=m,te.PureComponent=L,te.StrictMode=o,te.Suspense=j,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,te.__COMPILER_RUNTIME={__proto__:null,c:function(p){return I.H.useMemoCache(p)}},te.cache=function(p){return function(){return p.apply(null,arguments)}},te.cloneElement=function(p,C,B){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var U=k({},p.props),Z=p.key,ce=void 0;if(C!=null)for(P in C.ref!==void 0&&(ce=void 0),C.key!==void 0&&(Z=""+C.key),C)!Ce.call(C,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&C.ref===void 0||(U[P]=C[P]);var P=arguments.length-2;if(P===1)U.children=B;else if(1<P){for(var tt=Array(P),be=0;be<P;be++)tt[be]=arguments[be+2];U.children=tt}return De(p.type,Z,void 0,void 0,ce,U)},te.createContext=function(p){return p={$$typeof:T,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:v,_context:p},p},te.createElement=function(p,C,B){var U,Z={},ce=null;if(C!=null)for(U in C.key!==void 0&&(ce=""+C.key),C)Ce.call(C,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Z[U]=C[U]);var P=arguments.length-2;if(P===1)Z.children=B;else if(1<P){for(var tt=Array(P),be=0;be<P;be++)tt[be]=arguments[be+2];Z.children=tt}if(p&&p.defaultProps)for(U in P=p.defaultProps,P)Z[U]===void 0&&(Z[U]=P[U]);return De(p,ce,void 0,void 0,null,Z)},te.createRef=function(){return{current:null}},te.forwardRef=function(p){return{$$typeof:z,render:p}},te.isValidElement=Ae,te.lazy=function(p){return{$$typeof:N,_payload:{_status:-1,_result:p},_init:H}},te.memo=function(p,C){return{$$typeof:g,type:p,compare:C===void 0?null:C}},te.startTransition=function(p){var C=I.T,B={};I.T=B;try{var U=p(),Z=I.S;Z!==null&&Z(B,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(pe,F)}catch(ce){F(ce)}finally{I.T=C}},te.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},te.use=function(p){return I.H.use(p)},te.useActionState=function(p,C,B){return I.H.useActionState(p,C,B)},te.useCallback=function(p,C){return I.H.useCallback(p,C)},te.useContext=function(p){return I.H.useContext(p)},te.useDebugValue=function(){},te.useDeferredValue=function(p,C){return I.H.useDeferredValue(p,C)},te.useEffect=function(p,C,B){var U=I.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(p,C)},te.useId=function(){return I.H.useId()},te.useImperativeHandle=function(p,C,B){return I.H.useImperativeHandle(p,C,B)},te.useInsertionEffect=function(p,C){return I.H.useInsertionEffect(p,C)},te.useLayoutEffect=function(p,C){return I.H.useLayoutEffect(p,C)},te.useMemo=function(p,C){return I.H.useMemo(p,C)},te.useOptimistic=function(p,C){return I.H.useOptimistic(p,C)},te.useReducer=function(p,C,B){return I.H.useReducer(p,C,B)},te.useRef=function(p){return I.H.useRef(p)},te.useState=function(p){return I.H.useState(p)},te.useSyncExternalStore=function(p,C,B){return I.H.useSyncExternalStore(p,C,B)},te.useTransition=function(){return I.H.useTransition()},te.version="19.1.1",te}var Dd;function Ru(){return Dd||(Dd=1,bu.exports=Mp()),bu.exports}var M=Ru();const Dp=Xd(M);var vu={exports:{}},Mn={},yu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function zp(){return zd||(zd=1,(function(c){function f(w,H){var F=w.length;w.push(H);e:for(;0<F;){var pe=F-1>>>1,p=w[pe];if(0<m(p,H))w[pe]=H,w[F]=p,F=pe;else break e}}function d(w){return w.length===0?null:w[0]}function o(w){if(w.length===0)return null;var H=w[0],F=w.pop();if(F!==H){w[0]=F;e:for(var pe=0,p=w.length,C=p>>>1;pe<C;){var B=2*(pe+1)-1,U=w[B],Z=B+1,ce=w[Z];if(0>m(U,F))Z<p&&0>m(ce,U)?(w[pe]=ce,w[Z]=F,pe=Z):(w[pe]=U,w[B]=F,pe=B);else if(Z<p&&0>m(ce,F))w[pe]=ce,w[Z]=F,pe=Z;else break e}}return H}function m(w,H){var F=w.sortIndex-H.sortIndex;return F!==0?F:w.id-H.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;c.unstable_now=function(){return v.now()}}else{var T=Date,z=T.now();c.unstable_now=function(){return T.now()-z}}var j=[],g=[],N=1,_=null,q=3,X=!1,k=!1,W=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ye(w){for(var H=d(g);H!==null;){if(H.callback===null)o(g);else if(H.startTime<=w)o(g),H.sortIndex=H.expirationTime,f(j,H);else break;H=d(g)}}function I(w){if(W=!1,ye(w),!k)if(d(j)!==null)k=!0,Ce||(Ce=!0,Xe());else{var H=d(g);H!==null&&Qe(I,H.startTime-w)}}var Ce=!1,De=-1,_e=5,Ae=-1;function et(){return G?!0:!(c.unstable_now()-Ae<_e)}function ft(){if(G=!1,Ce){var w=c.unstable_now();Ae=w;var H=!0;try{e:{k=!1,W&&(W=!1,L(De),De=-1),X=!0;var F=q;try{t:{for(ye(w),_=d(j);_!==null&&!(_.expirationTime>w&&et());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,q=_.priorityLevel;var p=pe(_.expirationTime<=w);if(w=c.unstable_now(),typeof p=="function"){_.callback=p,ye(w),H=!0;break t}_===d(j)&&o(j),ye(w)}else o(j);_=d(j)}if(_!==null)H=!0;else{var C=d(g);C!==null&&Qe(I,C.startTime-w),H=!1}}break e}finally{_=null,q=F,X=!1}H=void 0}}finally{H?Xe():Ce=!1}}}var Xe;if(typeof ee=="function")Xe=function(){ee(ft)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,Ea=Aa.port2;Aa.port1.onmessage=ft,Xe=function(){Ea.postMessage(null)}}else Xe=function(){V(ft,0)};function Qe(w,H){De=V(function(){w(c.unstable_now())},H)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(w){w.callback=null},c.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<w?Math.floor(1e3/w):5},c.unstable_getCurrentPriorityLevel=function(){return q},c.unstable_next=function(w){switch(q){case 1:case 2:case 3:var H=3;break;default:H=q}var F=q;q=H;try{return w()}finally{q=F}},c.unstable_requestPaint=function(){G=!0},c.unstable_runWithPriority=function(w,H){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=q;q=w;try{return H()}finally{q=F}},c.unstable_scheduleCallback=function(w,H,F){var pe=c.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,w){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=F+p,w={id:N++,callback:H,priorityLevel:w,startTime:F,expirationTime:p,sortIndex:-1},F>pe?(w.sortIndex=F,f(g,w),d(j)===null&&w===d(g)&&(W?(L(De),De=-1):W=!0,Qe(I,F-pe))):(w.sortIndex=p,f(j,w),k||X||(k=!0,Ce||(Ce=!0,Xe()))),w},c.unstable_shouldYield=et,c.unstable_wrapCallback=function(w){var H=q;return function(){var F=q;q=H;try{return w.apply(this,arguments)}finally{q=F}}}})(Su)),Su}var Od;function Op(){return Od||(Od=1,yu.exports=zp()),yu.exports}var ju={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Cp(){if(Cd)return Ze;Cd=1;var c=Ru();function f(j){var g="https://react.dev/errors/"+j;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)g+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+j+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function v(j,g,N){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:_==null?null:""+_,children:j,containerInfo:g,implementation:N}}var T=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(j,g){if(j==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ze.createPortal=function(j,g){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(f(299));return v(j,g,null,N)},Ze.flushSync=function(j){var g=T.T,N=o.p;try{if(T.T=null,o.p=2,j)return j()}finally{T.T=g,o.p=N,o.d.f()}},Ze.preconnect=function(j,g){typeof j=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(j,g))},Ze.prefetchDNS=function(j){typeof j=="string"&&o.d.D(j)},Ze.preinit=function(j,g){if(typeof j=="string"&&g&&typeof g.as=="string"){var N=g.as,_=z(N,g.crossOrigin),q=typeof g.integrity=="string"?g.integrity:void 0,X=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;N==="style"?o.d.S(j,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:q,fetchPriority:X}):N==="script"&&o.d.X(j,{crossOrigin:_,integrity:q,fetchPriority:X,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ze.preinitModule=function(j,g){if(typeof j=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var N=z(g.as,g.crossOrigin);o.d.M(j,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(j)},Ze.preload=function(j,g){if(typeof j=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var N=g.as,_=z(N,g.crossOrigin);o.d.L(j,N,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ze.preloadModule=function(j,g){if(typeof j=="string")if(g){var N=z(g.as,g.crossOrigin);o.d.m(j,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(j)},Ze.requestFormReset=function(j){o.d.r(j)},Ze.unstable_batchedUpdates=function(j,g){return j(g)},Ze.useFormState=function(j,g,N){return T.H.useFormState(j,g,N)},Ze.useFormStatus=function(){return T.H.useHostTransitionStatus()},Ze.version="19.1.1",Ze}var _d;function _p(){if(_d)return ju.exports;_d=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),ju.exports=Cp(),ju.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Up(){if(Ud)return Mn;Ud=1;var c=Op(),f=Ru(),d=_p();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function T(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(v(e)!==e)throw Error(o(188))}function j(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return z(n),e;if(i===l)return z(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,_=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var Aa=Symbol.for("react.client.reference");function Ea(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Aa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case G:return"Profiler";case W:return"StrictMode";case I:return"Suspense";case Ce:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:Ea(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Ea(e(t))}catch{}}return null}var Qe=Array.isArray,w=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],p=-1;function C(e){return{current:e}}function B(e){0>p||(e.current=pe[p],pe[p]=null,p--)}function U(e,t){p++,pe[p]=e.current,e.current=t}var Z=C(null),ce=C(null),P=C(null),tt=C(null);function be(e,t){switch(U(P,t),U(ce,e),U(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?td(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=td(t),e=ad(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Z),U(Z,e)}function $t(){B(Z),B(ce),B(P)}function ar(e){e.memoizedState!==null&&U(tt,e);var t=Z.current,a=ad(t,e.type);t!==a&&(U(ce,e),U(Z,a))}function Un(e){ce.current===e&&(B(Z),B(ce)),tt.current===e&&(B(tt),An._currentValue=F)}var lr=Object.prototype.hasOwnProperty,nr=c.unstable_scheduleCallback,ir=c.unstable_cancelCallback,ih=c.unstable_shouldYield,rh=c.unstable_requestPaint,Et=c.unstable_now,ch=c.unstable_getCurrentPriorityLevel,Cu=c.unstable_ImmediatePriority,_u=c.unstable_UserBlockingPriority,Hn=c.unstable_NormalPriority,uh=c.unstable_LowPriority,Uu=c.unstable_IdlePriority,sh=c.log,oh=c.unstable_setDisableYieldValue,Dl=null,at=null;function Wt(e){if(typeof sh=="function"&&oh(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Dl,e)}catch{}}var lt=Math.clz32?Math.clz32:hh,fh=Math.log,dh=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(fh(e)/dh|0)|0}var qn=256,Bn=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Na(l):(u&=s,u!==0?n=Na(u):a||(a=s&~e,a!==0&&(n=Na(a))))):(s=l&~i,s!==0?n=Na(s):u!==0?n=Na(u):a||(a=l&~e,a!==0&&(n=Na(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hu(){var e=qn;return qn<<=1,(qn&4194048)===0&&(qn=256),e}function qu(){var e=Bn;return Bn<<=1,(Bn&62914560)===0&&(Bn=4194304),e}function rr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ol(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ph(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,S=e.hiddenUpdates;for(a=u&~a;0<a;){var R=31-lt(a),O=1<<R;s[R]=0,h[R]=-1;var A=S[R];if(A!==null)for(S[R]=null,R=0;R<A.length;R++){var E=A[R];E!==null&&(E.lane&=-536870913)}a&=~O}l!==0&&Bu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Bu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Yu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function cr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gu(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Sd(e.type))}function gh(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var It=Math.random().toString(36).slice(2),ke="__reactFiber$"+It,Je="__reactProps$"+It,Qa="__reactContainer$"+It,sr="__reactEvents$"+It,xh="__reactListeners$"+It,bh="__reactHandles$"+It,Lu="__reactResources$"+It,Cl="__reactMarker$"+It;function or(e){delete e[ke],delete e[Je],delete e[sr],delete e[xh],delete e[bh]}function ka(e){var t=e[ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rd(e);e!==null;){if(a=e[ke])return a;e=rd(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[ke]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Za(e){var t=e[Lu];return t||(t=e[Lu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Cl]=!0}var Xu=new Set,Qu={};function Ta(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Qu[e]=t,e=0;e<t.length;e++)Xu.add(t[e])}var vh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ku={},Vu={};function yh(e){return lr.call(Vu,e)?!0:lr.call(ku,e)?!1:vh.test(e)?Vu[e]=!0:(ku[e]=!0,!1)}function Gn(e,t,a){if(yh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ln(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var fr,Zu;function Ja(e){if(fr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fr=t&&t[1]||"",Zu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+e+Zu}var dr=!1;function hr(e,t){if(!e||dr)return"";dr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(E){var A=E}Reflect.construct(e,[],O)}else{try{O.call()}catch(E){A=E}e.call(O.prototype)}}else{try{throw Error()}catch(E){A=E}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(E){if(E&&A&&typeof E.stack=="string")return[E.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var h=u.split(`
`),S=s.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===S.length)for(l=h.length-1,n=S.length-1;1<=l&&0<=n&&h[l]!==S[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==S[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==S[n]){var R=`
`+h[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=n);break}}}finally{dr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function Sh(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return hr(e.type,!1);case 11:return hr(e.type.render,!1);case 1:return hr(e.type,!0);case 31:return Ja("Activity");default:return""}}function Ku(e){try{var t="";do t+=Sh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jh(e){var t=Ju(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xn(e){e._valueTracker||(e._valueTracker=jh(e))}function Fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ju(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ah=/[\n"\\]/g;function ht(e){return e.replace(Ah,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mr(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?pr(e,u,dt(t)):a!=null?pr(e,u,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+dt(s):e.removeAttribute("name")}function $u(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function pr(e,t,a){t==="number"&&Qn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Fa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Wu(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Iu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Eh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function es(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Pu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Pu(e,i,t[i])}function gr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return Th.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xr=null;function br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Ia=null;function ts(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(mr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Je]||null;if(!n)throw Error(o(90));mr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Fu(l)}break e;case"textarea":Wu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Fa(e,!!a.multiple,t,!1)}}}var vr=!1;function as(e,t,a){if(vr)return e(t,a);vr=!0;try{var l=e(t);return l}finally{if(vr=!1,(Wa!==null||Ia!==null)&&(Mi(),Wa&&(t=Wa,e=Ia,Ia=Wa=null,ts(t),e)))for(t=0;t<e.length;t++)ts(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(Ct)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){yr=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{yr=!1}var Pt=null,Sr=null,Vn=null;function ls(){if(Vn)return Vn;var e,t=Sr,a=t.length,l,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return Vn=n.slice(e,1<l?1-l:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function ns(){return!1}function Fe(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kn:ns,this.isPropagationStopped=ns,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=Fe(Ra),ql=N({},Ra,{view:0,detail:0}),Rh=Fe(ql),jr,Ar,Bl,Fn=N({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(jr=e.screenX-Bl.screenX,Ar=e.screenY-Bl.screenY):Ar=jr=0,Bl=e),jr)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),is=Fe(Fn),wh=N({},Fn,{dataTransfer:0}),Mh=Fe(wh),Dh=N({},ql,{relatedTarget:0}),Er=Fe(Dh),zh=N({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Oh=Fe(zh),Ch=N({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_h=Fe(Ch),Uh=N({},Ra,{data:0}),rs=Fe(Uh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bh[e])?!!t[e]:!1}function Nr(){return Yh}var Gh=N({},ql,{key:function(e){if(e.key){var t=Hh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nr,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lh=Fe(Gh),Xh=N({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=Fe(Xh),Qh=N({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nr}),kh=Fe(Qh),Vh=N({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zh=Fe(Vh),Kh=N({},Fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jh=Fe(Kh),Fh=N({},Ra,{newState:0,oldState:0}),$h=Fe(Fh),Wh=[9,13,27,32],Tr=Ct&&"CompositionEvent"in window,Yl=null;Ct&&"documentMode"in document&&(Yl=document.documentMode);var Ih=Ct&&"TextEvent"in window&&!Yl,us=Ct&&(!Tr||Yl&&8<Yl&&11>=Yl),ss=" ",os=!1;function fs(e,t){switch(e){case"keyup":return Wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function Ph(e,t){switch(e){case"compositionend":return ds(t);case"keypress":return t.which!==32?null:(os=!0,ss);case"textInput":return e=t.data,e===ss&&os?null:e;default:return null}}function em(e,t){if(Pa)return e==="compositionend"||!Tr&&fs(e,t)?(e=ls(),Vn=Sr=Pt=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return us&&t.locale!=="ko"?null:t.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tm[e.type]:t==="textarea"}function ms(e,t,a,l){Wa?Ia?Ia.push(l):Ia=[l]:Wa=l,t=Ui(t,"onChange"),0<t.length&&(a=new Jn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Gl=null,Ll=null;function am(e){$f(e,0)}function $n(e){var t=_l(e);if(Fu(t))return e}function ps(e,t){if(e==="change")return t}var gs=!1;if(Ct){var Rr;if(Ct){var wr="oninput"in document;if(!wr){var xs=document.createElement("div");xs.setAttribute("oninput","return;"),wr=typeof xs.oninput=="function"}Rr=wr}else Rr=!1;gs=Rr&&(!document.documentMode||9<document.documentMode)}function bs(){Gl&&(Gl.detachEvent("onpropertychange",vs),Ll=Gl=null)}function vs(e){if(e.propertyName==="value"&&$n(Ll)){var t=[];ms(t,Ll,e,br(e)),as(am,t)}}function lm(e,t,a){e==="focusin"?(bs(),Gl=t,Ll=a,Gl.attachEvent("onpropertychange",vs)):e==="focusout"&&bs()}function nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $n(Ll)}function im(e,t){if(e==="click")return $n(t)}function rm(e,t){if(e==="input"||e==="change")return $n(t)}function cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:cm;function Xl(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!lr.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ss(e,t){var a=ys(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ys(a)}}function js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function As(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Qn(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var um=Ct&&"documentMode"in document&&11>=document.documentMode,el=null,Dr=null,Ql=null,zr=!1;function Es(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zr||el==null||el!==Qn(l)||(l=el,"selectionStart"in l&&Mr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Xl(Ql,l)||(Ql=l,l=Ui(Dr,"onSelect"),0<l.length&&(t=new Jn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function wa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},Or={},Ns={};Ct&&(Ns=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ma(e){if(Or[e])return Or[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ns)return Or[e]=t[a];return e}var Ts=Ma("animationend"),Rs=Ma("animationiteration"),ws=Ma("animationstart"),sm=Ma("transitionrun"),om=Ma("transitionstart"),fm=Ma("transitioncancel"),Ms=Ma("transitionend"),Ds=new Map,Cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cr.push("scrollEnd");function St(e,t){Ds.set(e,t),Ta(t,[e])}var zs=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=zs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ku(t)},zs.set(e,t),t)}return{value:e,source:t,stack:Ku(t)}}var pt=[],al=0,_r=0;function Wn(){for(var e=al,t=_r=al=0;t<e;){var a=pt[t];pt[t++]=null;var l=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var i=pt[t];if(pt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Os(a,n,i)}}function In(e,t,a,l){pt[al++]=e,pt[al++]=t,pt[al++]=a,pt[al++]=l,_r|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ur(e,t,a,l){return In(e,t,a,l),Pn(e)}function ll(e,t){return In(e,null,null,t),Pn(e)}function Os(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-lt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Pn(e){if(50<pn)throw pn=0,Lc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function dm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,l){return new dm(e,t,a,l)}function Hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _t(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")Hr(e)&&(u=1);else if(typeof e=="string")u=mp(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=it(31,a,t,n),e.elementType=Ae,e.lanes=i,e;case k:return Da(a.children,n,i,t);case W:u=8,n|=24;break;case G:return e=it(12,a,t,n|2),e.elementType=G,e.lanes=i,e;case I:return e=it(13,a,t,n),e.elementType=I,e.lanes=i,e;case Ce:return e=it(19,a,t,n),e.elementType=Ce,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case ee:u=10;break e;case L:u=9;break e;case ye:u=11;break e;case De:u=14;break e;case _e:u=16,l=null;break e}u=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=it(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Da(e,t,a,l){return e=it(7,e,l,t),e.lanes=a,e}function qr(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Br(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var il=[],rl=0,ti=null,ai=0,gt=[],xt=0,za=null,Ut=1,Ht="";function Oa(e,t){il[rl++]=ai,il[rl++]=ti,ti=e,ai=t}function _s(e,t,a){gt[xt++]=Ut,gt[xt++]=Ht,gt[xt++]=za,za=e;var l=Ut;e=Ht;var n=32-lt(l)-1;l&=~(1<<n),a+=1;var i=32-lt(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Ut=1<<32-lt(t)+n|a<<n|l,Ht=i+e}else Ut=1<<i|a<<n|l,Ht=e}function Yr(e){e.return!==null&&(Oa(e,1),_s(e,1,0))}function Gr(e){for(;e===ti;)ti=il[--rl],il[rl]=null,ai=il[--rl],il[rl]=null;for(;e===za;)za=gt[--xt],gt[xt]=null,Ht=gt[--xt],gt[xt]=null,Ut=gt[--xt],gt[xt]=null}var Ke=null,Ee=null,se=!1,Ca=null,Nt=!1,Lr=Error(o(519));function _a(e){var t=Error(o(418,""));throw Zl(mt(t,e)),Lr}function Us(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ke]=e,t[Je]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<xn.length;a++)ie(xn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),$u(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xn(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Iu(t,l.value,l.defaultValue,l.children),Xn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ed(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||_a(e)}function Hs(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ke=Ke.return}}function kl(e){if(e!==Ke)return!1;if(!se)return Hs(e),se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lu(e.type,e.memoizedProps)),a=!a),a&&Ee&&_a(e),Hs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ee=At(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ee=null}}else t===27?(t=Ee,pa(e.type)?(e=cu,cu=null,Ee=e):Ee=t):Ee=Ke?At(e.stateNode.nextSibling):null;return!0}function Vl(){Ee=Ke=null,se=!1}function qs(){var e=Ca;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Ca=null),e}function Zl(e){Ca===null?Ca=[e]:Ca.push(e)}var Xr=C(null),Ua=null,qt=null;function ea(e,t,a){U(Xr,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Xr.current,B(Xr)}function Qr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function kr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Qr(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Qr(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Kl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var s=n.type;nt(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===tt.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(An):e=[An])}n=n.return}e!==null&&kr(t,e,a,l),t.flags|=262144}function li(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ua=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Bs(Ua,e)}function ni(e,t){return Ua===null&&Ha(e),Bs(e,t)}function Bs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(o(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var hm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},mm=c.unstable_scheduleCallback,pm=c.unstable_NormalPriority,ze={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vr(){return{controller:new hm,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&mm(pm,function(){e.controller.abort()})}var Fl=null,Zr=0,cl=0,ul=null;function gm(e,t){if(Fl===null){var a=Fl=[];Zr=0,cl=Jc(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Zr++,t.then(Ys,Ys),t}function Ys(){if(--Zr===0&&Fl!==null){ul!==null&&(ul.status="fulfilled");var e=Fl;Fl=null,cl=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Gs=w.S;w.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&gm(e,t),Gs!==null&&Gs(e,t)};var qa=C(null);function Kr(){var e=qa.current;return e!==null?e:xe.pooledCache}function ii(e,t){t===null?U(qa,qa.current):U(qa,t.pool)}function Ls(){var e=Kr();return e===null?null:{parent:ze._currentValue,pool:e}}var $l=Error(o(460)),Xs=Error(o(474)),ri=Error(o(542)),Jr={then:function(){}};function Qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ci(){}function ks(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ci,ci),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zs(e),e;default:if(typeof t.status=="string")t.then(ci,ci);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zs(e),e}throw Wl=t,$l}}var Wl=null;function Vs(){if(Wl===null)throw Error(o(459));var e=Wl;return Wl=null,e}function Zs(e){if(e===$l||e===ri)throw Error(o(483))}var ta=!1;function Fr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $r(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Pn(e),Os(e,null,a),t}return In(e,l,t,a),Pn(e)}function Il(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Yu(e,a)}}function Wr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ir=!1;function Pl(){if(Ir){var e=ul;if(e!==null)throw e}}function en(e,t,a,l){Ir=!1;var n=e.updateQueue;ta=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var h=s,S=h.next;h.next=null,u===null?i=S:u.next=S,u=h;var R=e.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==u&&(s===null?R.firstBaseUpdate=S:s.next=S,R.lastBaseUpdate=h))}if(i!==null){var O=n.baseState;u=0,R=S=h=null,s=i;do{var A=s.lane&-536870913,E=A!==s.lane;if(E?(re&A)===A:(l&A)===A){A!==0&&A===cl&&(Ir=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var $=e,K=s;A=t;var me=a;switch(K.tag){case 1:if($=K.payload,typeof $=="function"){O=$.call(me,O,A);break e}O=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=K.payload,A=typeof $=="function"?$.call(me,O,A):$,A==null)break e;O=N({},O,A);break e;case 2:ta=!0}}A=s.callback,A!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[A]:E.push(A))}else E={lane:A,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(S=R=E,h=O):R=R.next=E,u|=A;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;E=s,s=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);R===null&&(h=O),n.baseState=h,n.firstBaseUpdate=S,n.lastBaseUpdate=R,i===null&&(n.shared.lanes=0),fa|=u,e.lanes=u,e.memoizedState=O}}function Ks(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Js(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ks(a[e],t)}var sl=C(null),ui=C(0);function Fs(e,t){e=Vt,U(ui,e),U(sl,t),Vt=e|t.baseLanes}function Pr(){U(ui,Vt),U(sl,sl.current)}function ec(){Vt=ui.current,B(sl),B(ui)}var na=0,ae=null,de=null,we=null,si=!1,ol=!1,Ba=!1,oi=0,tn=0,fl=null,bm=0;function Te(){throw Error(o(321))}function tc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function ac(e,t,a,l,n,i){return na=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Co:_o,Ba=!1,i=a(l,n),Ba=!1,ol&&(i=Ws(t,a,l,n)),$s(e),i}function $s(e){w.H=gi;var t=de!==null&&de.next!==null;if(na=0,we=de=ae=null,si=!1,tn=0,fl=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&li(e)&&(He=!0))}function Ws(e,t,a,l){ae=e;var n=0;do{if(ol&&(fl=null),tn=0,ol=!1,25<=n)throw Error(o(301));if(n+=1,we=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=Nm,i=t(a,l)}while(ol);return i}function vm(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(ae.flags|=1024),t}function lc(){var e=oi!==0;return oi=0,e}function nc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ic(e){if(si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}si=!1}na=0,we=de=ae=null,ol=!1,tn=oi=0,fl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ae.memoizedState=we=e:we=we.next=e,we}function Me(){if(de===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=we===null?ae.memoizedState:we.next;if(t!==null)we=t,de=e;else{if(e===null)throw ae.alternate===null?Error(o(467)):Error(o(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},we===null?ae.memoizedState=we=e:we=we.next=e}return we}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,fl===null&&(fl=[]),e=ks(fl,e,t),t=ae,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Co:_o),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===ee)return Ve(e)}throw Error(o(438,String(e)))}function cc(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=rc(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=et;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=Me();return uc(t,de,e)}function uc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,h=null,S=t,R=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(re&O)===O:(na&O)===O){var A=S.revertLane;if(A===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===cl&&(R=!0);else if((na&A)===A){S=S.next,A===cl&&(R=!0);continue}else O={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=O,u=i):h=h.next=O,ae.lanes|=A,fa|=A;O=S.action,Ba&&a(i,O),i=S.hasEagerState?S.eagerState:a(i,O)}else A={lane:O,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(s=h=A,u=i):h=h.next=A,ae.lanes|=O,fa|=O;S=S.next}while(S!==null&&S!==t);if(h===null?u=i:h.next=s,!nt(i,e.memoizedState)&&(He=!0,R&&(a=ul,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sc(e){var t=Me(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);nt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Is(e,t,a){var l=ae,n=Me(),i=se;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var u=!nt((de||n).memoizedState,a);u&&(n.memoizedState=a,He=!0),n=n.queue;var s=to.bind(null,l,n,e);if(ln(2048,8,s,[e]),n.getSnapshot!==t||u||we!==null&&we.memoizedState.tag&1){if(l.flags|=2048,dl(9,hi(),eo.bind(null,l,n,a,t),null),xe===null)throw Error(o(349));i||(na&124)!==0||Ps(l,t,a)}return a}function Ps(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=rc(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function eo(e,t,a,l){t.value=a,t.getSnapshot=l,ao(t)&&lo(e)}function to(e,t,a){return a(function(){ao(t)&&lo(e)})}function ao(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function lo(e){var t=ll(e,2);t!==null&&ot(t,e,2)}function oc(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ba){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function no(e,t,a,l){return e.baseState=a,uc(e,de,typeof l=="function"?l:Yt)}function ym(e,t,a,l,n){if(pi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};w.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,io(t,i)):(i.next=a.next,t.pending=a.next=i)}}function io(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=w.T,u={};w.T=u;try{var s=a(n,l),h=w.S;h!==null&&h(u,s),ro(e,t,s)}catch(S){fc(e,t,S)}finally{w.T=i}}else try{i=a(n,l),ro(e,t,i)}catch(S){fc(e,t,S)}}function ro(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){co(e,t,l)},function(l){return fc(e,t,l)}):co(e,t,a)}function co(e,t,a){t.status="fulfilled",t.value=a,uo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,io(e,a)))}function fc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,uo(t),t=t.next;while(t!==l)}e.action=null}function uo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function oo(e,t){if(se){var a=xe.formState;if(a!==null){e:{var l=ae;if(se){if(Ee){t:{for(var n=Ee,i=Nt;n.nodeType!==8;){if(!i){n=null;break t}if(n=At(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=At(n.nextSibling),l=n.data==="F!";break e}}_a(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},a.queue=l,a=Do.bind(null,ae,l),l.dispatch=a,l=oc(!1),i=gc.bind(null,ae,!1,l.queue),l=$e(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=ym.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function fo(e){var t=Me();return ho(t,de,e)}function ho(e,t,a){if(t=uc(e,t,so)[0],e=di(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(u){throw u===$l?ri:u}else l=t;t=Me();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,dl(9,hi(),Sm.bind(null,n,a),null)),[l,i,e]}function Sm(e,t){e.action=t}function mo(e){var t=Me(),a=de;if(a!==null)return ho(t,a,e);Me(),t=t.memoizedState,a=Me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=rc(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function hi(){return{destroy:void 0,resource:void 0}}function po(){return Me().memoizedState}function mi(e,t,a,l){var n=$e();l=l===void 0?null:l,ae.flags|=e,n.memoizedState=dl(1|t,hi(),a,l)}function ln(e,t,a,l){var n=Me();l=l===void 0?null:l;var i=n.memoizedState.inst;de!==null&&l!==null&&tc(l,de.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(ae.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function go(e,t){mi(8390656,8,e,t)}function xo(e,t){ln(2048,8,e,t)}function bo(e,t){return ln(4,2,e,t)}function vo(e,t){return ln(4,4,e,t)}function yo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function So(e,t,a){a=a!=null?a.concat([e]):null,ln(4,4,yo.bind(null,t,e),a)}function dc(){}function jo(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&tc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Ao(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&tc(t,l[1]))return l[0];if(l=e(),Ba){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l}function hc(e,t,a){return a===void 0||(na&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Rf(),ae.lanes|=e,fa|=e,a)}function Eo(e,t,a,l){return nt(a,t)?a:sl.current!==null?(e=hc(e,a,l),nt(e,t)||(He=!0),e):(na&42)===0?(He=!0,e.memoizedState=a):(e=Rf(),ae.lanes|=e,fa|=e,t)}function No(e,t,a,l,n){var i=H.p;H.p=i!==0&&8>i?i:8;var u=w.T,s={};w.T=s,gc(e,!1,t,a);try{var h=n(),S=w.S;if(S!==null&&S(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=xm(h,l);nn(e,t,R,st(e))}else nn(e,t,l,st(e))}catch(O){nn(e,t,{then:function(){},status:"rejected",reason:O},st())}finally{H.p=i,w.T=u}}function jm(){}function mc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=To(e).queue;No(e,n,t,F,a===null?jm:function(){return Ro(e),a(l)})}function To(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ro(e){var t=To(e).next.queue;nn(e,t,{},st())}function pc(){return Ve(An)}function wo(){return Me().memoizedState}function Mo(){return Me().memoizedState}function Am(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=aa(a);var l=la(t,e,a);l!==null&&(ot(l,t,a),Il(l,t,a)),t={cache:Vr()},e.payload=t;return}t=t.return}}function Em(e,t,a){var l=st();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)?zo(t,a):(a=Ur(e,t,a,l),a!==null&&(ot(a,e,l),Oo(a,t,l)))}function Do(e,t,a){var l=st();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(e))zo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,nt(s,u))return In(e,t,n,0),xe===null&&Wn(),!1}catch{}finally{}if(a=Ur(e,t,n,l),a!==null)return ot(a,e,l),Oo(a,t,l),!0}return!1}function gc(e,t,a,l){if(l={lane:2,revertLane:Jc(),action:l,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(o(479))}else t=Ur(e,a,l,2),t!==null&&ot(t,e,2)}function pi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function zo(e,t){ol=si=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Oo(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Yu(e,a)}}var gi={readContext:Ve,use:fi,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},Co={readContext:Ve,use:fi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:go,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mi(4194308,4,yo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ba){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var n=a(t);if(Ba){Wt(!0);try{a(t)}finally{Wt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Em.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=oc(e);var t=e.queue,a=Do.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:dc,useDeferredValue:function(e,t){var a=$e();return hc(a,e,t)},useTransition:function(){var e=oc(!1);return e=No.bind(null,ae,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=$e();if(se){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),xe===null)throw Error(o(349));(re&124)!==0||Ps(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,go(to.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,hi(),eo.bind(null,l,i,a,t),null),a},useId:function(){var e=$e(),t=xe.identifierPrefix;if(se){var a=Ht,l=Ut;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=oi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=bm++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:pc,useFormState:oo,useActionState:oo,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=gc.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:cc,useCacheRefresh:function(){return $e().memoizedState=Am.bind(null,ae)}},_o={readContext:Ve,use:fi,useCallback:jo,useContext:Ve,useEffect:xo,useImperativeHandle:So,useInsertionEffect:bo,useLayoutEffect:vo,useMemo:Ao,useReducer:di,useRef:po,useState:function(){return di(Yt)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Me();return Eo(a,de.memoizedState,e,t)},useTransition:function(){var e=di(Yt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Is,useId:wo,useHostTransitionStatus:pc,useFormState:fo,useActionState:fo,useOptimistic:function(e,t){var a=Me();return no(a,de,e,t)},useMemoCache:cc,useCacheRefresh:Mo},Nm={readContext:Ve,use:fi,useCallback:jo,useContext:Ve,useEffect:xo,useImperativeHandle:So,useInsertionEffect:bo,useLayoutEffect:vo,useMemo:Ao,useReducer:sc,useRef:po,useState:function(){return sc(Yt)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Me();return de===null?hc(a,e,t):Eo(a,de.memoizedState,e,t)},useTransition:function(){var e=sc(Yt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Is,useId:wo,useHostTransitionStatus:pc,useFormState:mo,useActionState:mo,useOptimistic:function(e,t){var a=Me();return de!==null?no(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cc,useCacheRefresh:Mo},hl=null,rn=0;function xi(e){var t=rn;return rn+=1,hl===null&&(hl=[]),ks(hl,e,t)}function cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uo(e){var t=e._init;return t(e._payload)}function Ho(e){function t(b,x){if(e){var y=b.deletions;y===null?(b.deletions=[x],b.flags|=16):y.push(x)}}function a(b,x){if(!e)return null;for(;x!==null;)t(b,x),x=x.sibling;return null}function l(b){for(var x=new Map;b!==null;)b.key!==null?x.set(b.key,b):x.set(b.index,b),b=b.sibling;return x}function n(b,x){return b=_t(b,x),b.index=0,b.sibling=null,b}function i(b,x,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<x?(b.flags|=67108866,x):y):(b.flags|=67108866,x)):(b.flags|=1048576,x)}function u(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function s(b,x,y,D){return x===null||x.tag!==6?(x=qr(y,b.mode,D),x.return=b,x):(x=n(x,y),x.return=b,x)}function h(b,x,y,D){var Y=y.type;return Y===k?R(b,x,y.props.children,D,y.key):x!==null&&(x.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===_e&&Uo(Y)===x.type)?(x=n(x,y.props),cn(x,y),x.return=b,x):(x=ei(y.type,y.key,y.props,null,b.mode,D),cn(x,y),x.return=b,x)}function S(b,x,y,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Br(y,b.mode,D),x.return=b,x):(x=n(x,y.children||[]),x.return=b,x)}function R(b,x,y,D,Y){return x===null||x.tag!==7?(x=Da(y,b.mode,D,Y),x.return=b,x):(x=n(x,y),x.return=b,x)}function O(b,x,y){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=qr(""+x,b.mode,y),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case q:return y=ei(x.type,x.key,x.props,null,b.mode,y),cn(y,x),y.return=b,y;case X:return x=Br(x,b.mode,y),x.return=b,x;case _e:var D=x._init;return x=D(x._payload),O(b,x,y)}if(Qe(x)||Xe(x))return x=Da(x,b.mode,y,null),x.return=b,x;if(typeof x.then=="function")return O(b,xi(x),y);if(x.$$typeof===ee)return O(b,ni(b,x),y);bi(b,x)}return null}function A(b,x,y,D){var Y=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return Y!==null?null:s(b,x,""+y,D);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case q:return y.key===Y?h(b,x,y,D):null;case X:return y.key===Y?S(b,x,y,D):null;case _e:return Y=y._init,y=Y(y._payload),A(b,x,y,D)}if(Qe(y)||Xe(y))return Y!==null?null:R(b,x,y,D,null);if(typeof y.then=="function")return A(b,x,xi(y),D);if(y.$$typeof===ee)return A(b,x,ni(b,y),D);bi(b,y)}return null}function E(b,x,y,D,Y){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return b=b.get(y)||null,s(x,b,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case q:return b=b.get(D.key===null?y:D.key)||null,h(x,b,D,Y);case X:return b=b.get(D.key===null?y:D.key)||null,S(x,b,D,Y);case _e:var le=D._init;return D=le(D._payload),E(b,x,y,D,Y)}if(Qe(D)||Xe(D))return b=b.get(y)||null,R(x,b,D,Y,null);if(typeof D.then=="function")return E(b,x,y,xi(D),Y);if(D.$$typeof===ee)return E(b,x,y,ni(x,D),Y);bi(x,D)}return null}function $(b,x,y,D){for(var Y=null,le=null,Q=x,J=x=0,Be=null;Q!==null&&J<y.length;J++){Q.index>J?(Be=Q,Q=null):Be=Q.sibling;var ue=A(b,Q,y[J],D);if(ue===null){Q===null&&(Q=Be);break}e&&Q&&ue.alternate===null&&t(b,Q),x=i(ue,x,J),le===null?Y=ue:le.sibling=ue,le=ue,Q=Be}if(J===y.length)return a(b,Q),se&&Oa(b,J),Y;if(Q===null){for(;J<y.length;J++)Q=O(b,y[J],D),Q!==null&&(x=i(Q,x,J),le===null?Y=Q:le.sibling=Q,le=Q);return se&&Oa(b,J),Y}for(Q=l(Q);J<y.length;J++)Be=E(Q,b,J,y[J],D),Be!==null&&(e&&Be.alternate!==null&&Q.delete(Be.key===null?J:Be.key),x=i(Be,x,J),le===null?Y=Be:le.sibling=Be,le=Be);return e&&Q.forEach(function(ya){return t(b,ya)}),se&&Oa(b,J),Y}function K(b,x,y,D){if(y==null)throw Error(o(151));for(var Y=null,le=null,Q=x,J=x=0,Be=null,ue=y.next();Q!==null&&!ue.done;J++,ue=y.next()){Q.index>J?(Be=Q,Q=null):Be=Q.sibling;var ya=A(b,Q,ue.value,D);if(ya===null){Q===null&&(Q=Be);break}e&&Q&&ya.alternate===null&&t(b,Q),x=i(ya,x,J),le===null?Y=ya:le.sibling=ya,le=ya,Q=Be}if(ue.done)return a(b,Q),se&&Oa(b,J),Y;if(Q===null){for(;!ue.done;J++,ue=y.next())ue=O(b,ue.value,D),ue!==null&&(x=i(ue,x,J),le===null?Y=ue:le.sibling=ue,le=ue);return se&&Oa(b,J),Y}for(Q=l(Q);!ue.done;J++,ue=y.next())ue=E(Q,b,J,ue.value,D),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?J:ue.key),x=i(ue,x,J),le===null?Y=ue:le.sibling=ue,le=ue);return e&&Q.forEach(function(Tp){return t(b,Tp)}),se&&Oa(b,J),Y}function me(b,x,y,D){if(typeof y=="object"&&y!==null&&y.type===k&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case q:e:{for(var Y=y.key;x!==null;){if(x.key===Y){if(Y=y.type,Y===k){if(x.tag===7){a(b,x.sibling),D=n(x,y.props.children),D.return=b,b=D;break e}}else if(x.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===_e&&Uo(Y)===x.type){a(b,x.sibling),D=n(x,y.props),cn(D,y),D.return=b,b=D;break e}a(b,x);break}else t(b,x);x=x.sibling}y.type===k?(D=Da(y.props.children,b.mode,D,y.key),D.return=b,b=D):(D=ei(y.type,y.key,y.props,null,b.mode,D),cn(D,y),D.return=b,b=D)}return u(b);case X:e:{for(Y=y.key;x!==null;){if(x.key===Y)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){a(b,x.sibling),D=n(x,y.children||[]),D.return=b,b=D;break e}else{a(b,x);break}else t(b,x);x=x.sibling}D=Br(y,b.mode,D),D.return=b,b=D}return u(b);case _e:return Y=y._init,y=Y(y._payload),me(b,x,y,D)}if(Qe(y))return $(b,x,y,D);if(Xe(y)){if(Y=Xe(y),typeof Y!="function")throw Error(o(150));return y=Y.call(y),K(b,x,y,D)}if(typeof y.then=="function")return me(b,x,xi(y),D);if(y.$$typeof===ee)return me(b,x,ni(b,y),D);bi(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,x!==null&&x.tag===6?(a(b,x.sibling),D=n(x,y),D.return=b,b=D):(a(b,x),D=qr(y,b.mode,D),D.return=b,b=D),u(b)):a(b,x)}return function(b,x,y,D){try{rn=0;var Y=me(b,x,y,D);return hl=null,Y}catch(Q){if(Q===$l||Q===ri)throw Q;var le=it(29,Q,null,b.mode);return le.lanes=D,le.return=b,le}finally{}}}var ml=Ho(!0),qo=Ho(!1),bt=C(null),Tt=null;function ia(e){var t=e.alternate;U(Oe,Oe.current&1),U(bt,e),Tt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(Tt=e)}function Bo(e){if(e.tag===22){if(U(Oe,Oe.current),U(bt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else ra()}function ra(){U(Oe,Oe.current),U(bt,bt.current)}function Gt(e){B(bt),Tt===e&&(Tt=null),B(Oe)}var Oe=C(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ru(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=st(),n=aa(l);n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Il(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=st(),n=aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Il(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),l=aa(a);l.tag=2,t!=null&&(l.callback=t),t=la(e,l,a),t!==null&&(ot(t,e,a),Il(t,e,a))}};function Yo(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,l)||!Xl(n,i):!0}function Go(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lo(e){yi(e)}function Xo(e){console.error(e)}function Qo(e){yi(e)}function Si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ko(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function vc(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Si(e,t)},a}function Vo(e){return e=aa(e),e.tag=3,e}function Zo(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){ko(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){ko(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Tm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Kl(t,a,n,!0),a=bt.current,a!==null){switch(a.tag){case 13:return Tt===null?Qc():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Jr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Vc(e,l,n)),!1;case 22:return a.flags|=65536,l===Jr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Vc(e,l,n)),!1}throw Error(o(435,a.tag))}return Vc(e,l,n),Qc(),!1}if(se)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Lr&&(e=Error(o(422),{cause:l}),Zl(mt(e,a)))):(l!==Lr&&(t=Error(o(423),{cause:l}),Zl(mt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=mt(l,a),n=vc(e.stateNode,l,n),Wr(e,n),Ne!==4&&(Ne=2)),!1;var i=Error(o(520),{cause:l});if(i=mt(i,a),mn===null?mn=[i]:mn.push(i),Ne!==4&&(Ne=2),t===null)return!0;l=mt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=vc(a.stateNode,l,e),Wr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Vo(n),Zo(n,e,a,l),Wr(a,n),!1}a=a.return}while(a!==null);return!1}var Ko=Error(o(461)),He=!1;function Ye(e,t,a,l){t.child=e===null?qo(t,null,a,l):ml(t,e.child,a,l)}function Jo(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Ha(t),l=ac(e,t,a,u,i,n),s=lc(),e!==null&&!He?(nc(e,t,n),Lt(e,t,n)):(se&&s&&Yr(t),t.flags|=1,Ye(e,t,l,n),t.child)}function Fo(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Hr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,$o(e,t,i,l,n)):(e=ei(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Rc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(u,l)&&e.ref===t.ref)return Lt(e,t,n)}return t.flags|=1,e=_t(i,l),e.ref=t.ref,e.return=t,t.child=e}function $o(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Xl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Rc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Lt(e,t,n)}return yc(e,t,a,l,n)}function Wo(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Io(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?Fs(t,i):Pr(),Bo(t);else return t.lanes=t.childLanes=536870912,Io(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ii(t,i.cachePool),Fs(t,i),ra(),t.memoizedState=null):(e!==null&&ii(t,null),Pr(),ra());return Ye(e,t,n,a),t.child}function Io(e,t,a,l){var n=Kr();return n=n===null?null:{parent:ze._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ii(t,null),Pr(),Bo(t),e!==null&&Kl(e,t,l,!0),null}function ji(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function yc(e,t,a,l,n){return Ha(t),a=ac(e,t,a,l,void 0,n),l=lc(),e!==null&&!He?(nc(e,t,n),Lt(e,t,n)):(se&&l&&Yr(t),t.flags|=1,Ye(e,t,a,n),t.child)}function Po(e,t,a,l,n,i){return Ha(t),t.updateQueue=null,a=Ws(t,l,a,n),$s(e),l=lc(),e!==null&&!He?(nc(e,t,i),Lt(e,t,i)):(se&&l&&Yr(t),t.flags|=1,Ye(e,t,a,i),t.child)}function ef(e,t,a,l,n){if(Ha(t),t.stateNode===null){var i=nl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ve(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Fr(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ve(u):nl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(xc(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&bc.enqueueReplaceState(i,i.state,null),en(t,l,i,n),Pl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=Ya(a,s);i.props=h;var S=i.context,R=a.contextType;u=nl,typeof R=="object"&&R!==null&&(u=Ve(R));var O=a.getDerivedStateFromProps;R=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||S!==u)&&Go(t,i,l,u),ta=!1;var A=t.memoizedState;i.state=A,en(t,l,i,n),Pl(),S=t.memoizedState,s||A!==S||ta?(typeof O=="function"&&(xc(t,a,O,l),S=t.memoizedState),(h=ta||Yo(t,a,h,l,A,S,u))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),i.props=l,i.state=S,i.context=u,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,$r(e,t),u=t.memoizedProps,R=Ya(a,u),i.props=R,O=t.pendingProps,A=i.context,S=a.contextType,h=nl,typeof S=="object"&&S!==null&&(h=Ve(S)),s=a.getDerivedStateFromProps,(S=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==O||A!==h)&&Go(t,i,l,h),ta=!1,A=t.memoizedState,i.state=A,en(t,l,i,n),Pl();var E=t.memoizedState;u!==O||A!==E||ta||e!==null&&e.dependencies!==null&&li(e.dependencies)?(typeof s=="function"&&(xc(t,a,s,l),E=t.memoizedState),(R=ta||Yo(t,a,R,l,A,E,h)||e!==null&&e.dependencies!==null&&li(e.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,E,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,E,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=h,l=R):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ji(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ml(t,e.child,null,n),t.child=ml(t,null,a,n)):Ye(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Lt(e,t,n),e}function tf(e,t,a,l){return Vl(),t.flags|=256,Ye(e,t,a,l),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(e){return{baseLanes:e,cachePool:Ls()}}function Ac(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function af(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?ia(t):ra(),se){var s=Ee,h;if(h=s){e:{for(h=s,s=Nt;h.nodeType!==8;){if(!s){s=null;break e}if(h=At(h.nextSibling),h===null){s=null;break e}}s=h}s!==null?(t.memoizedState={dehydrated:s,treeContext:za!==null?{id:Ut,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},h=it(18,null,null,0),h.stateNode=s,h.return=t,t.child=h,Ke=t,Ee=null,h=!0):h=!1}h||_a(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return ru(s)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return s=l.children,l=l.fallback,n?(ra(),n=t.mode,s=Ai({mode:"hidden",children:s},n),l=Da(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,n=t.child,n.memoizedState=jc(a),n.childLanes=Ac(e,u,a),t.memoizedState=Sc,l):(ia(t),Ec(t,s))}if(h=e.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=Nc(e,t,a)):t.memoizedState!==null?(ra(),t.child=e.child,t.flags|=128,t=null):(ra(),n=l.fallback,s=t.mode,l=Ai({mode:"visible",children:l.children},s),n=Da(n,s,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,ml(t,e.child,null,a),l=t.child,l.memoizedState=jc(a),l.childLanes=Ac(e,u,a),t.memoizedState=Sc,t=n);else if(ia(t),ru(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var S=u.dgst;u=S,l=Error(o(419)),l.stack="",l.digest=u,Zl({value:l,source:null,stack:null}),t=Nc(e,t,a)}else if(He||Kl(e,t,a,!1),u=(a&e.childLanes)!==0,He||u){if(u=xe,u!==null&&(l=a&-a,l=(l&42)!==0?1:cr(l),l=(l&(u.suspendedLanes|a))!==0?0:l,l!==0&&l!==h.retryLane))throw h.retryLane=l,ll(e,l),ot(u,e,l),Ko;s.data==="$?"||Qc(),t=Nc(e,t,a)}else s.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ee=At(s.nextSibling),Ke=t,se=!0,Ca=null,Nt=!1,e!==null&&(gt[xt++]=Ut,gt[xt++]=Ht,gt[xt++]=za,Ut=e.id,Ht=e.overflow,za=t),t=Ec(t,l.children),t.flags|=4096);return t}return n?(ra(),n=l.fallback,s=t.mode,h=e.child,S=h.sibling,l=_t(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,S!==null?n=_t(S,n):(n=Da(n,s,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,s=e.child.memoizedState,s===null?s=jc(a):(h=s.cachePool,h!==null?(S=ze._currentValue,h=h.parent!==S?{parent:S,pool:S}:h):h=Ls(),s={baseLanes:s.baseLanes|a,cachePool:h}),n.memoizedState=s,n.childLanes=Ac(e,u,a),t.memoizedState=Sc,l):(ia(t),a=e.child,e=a.sibling,a=_t(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Ec(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Nc(e,t,a){return ml(t,e.child,null,a),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Qr(e.return,t,a)}function Tc(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function nf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ye(e,t,l.children,a),l=Oe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,a,t);else if(e.tag===19)lf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(U(Oe,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&vi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Tc(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&vi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Tc(t,!0,a,null,i);break;case"together":Tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=_t(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=_t(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&li(e)))}function Rm(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ea(t,ze,e.memoizedState.cache),Vl();break;case 27:case 5:ar(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?af(e,t,a):(ia(t),e=Lt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return nf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Oe,Oe.current),l)break;return null;case 22:case 23:return t.lanes=0,Wo(e,t,a);case 24:ea(t,ze,e.memoizedState.cache)}return Lt(e,t,a)}function rf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Rc(e,a)&&(t.flags&128)===0)return He=!1,Rm(e,t,a);He=(e.flags&131072)!==0}else He=!1,se&&(t.flags&1048576)!==0&&_s(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Hr(l)?(e=Ya(l,e),t.tag=1,t=ef(null,t,l,e,a)):(t.tag=0,t=yc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ye){t.tag=11,t=Jo(null,t,l,e,a);break e}else if(n===De){t.tag=14,t=Fo(null,t,l,e,a);break e}}throw t=Ea(l)||l,Error(o(306,t,""))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ya(l,t.pendingProps),ef(e,t,l,n,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,$r(e,t),en(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ea(t,ze,l),l!==i.cache&&kr(t,[ze],a,!0),Pl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=tf(e,t,l,a);break e}else if(l!==n){n=mt(Error(o(424)),t),Zl(n),t=tf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=At(e.firstChild),Ke=t,se=!0,Ca=null,Nt=!0,a=qo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vl(),l===n){t=Lt(e,t,a);break e}Ye(e,t,l,a)}t=t.child}return t;case 26:return ji(e,t),e===null?(a=od(t.type,null,t.pendingProps,null))?t.memoizedState=a:se||(a=t.type,e=t.pendingProps,l=qi(P.current).createElement(a),l[ke]=t,l[Je]=e,Le(l,a,e),Ue(l),t.stateNode=l):t.memoizedState=od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ar(t),e===null&&se&&(l=t.stateNode=cd(t.type,t.pendingProps,P.current),Ke=t,Nt=!0,n=Ee,pa(t.type)?(cu=n,Ee=At(l.firstChild)):Ee=n),Ye(e,t,t.pendingProps.children,a),ji(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=l=Ee)&&(l=tp(l,t.type,t.pendingProps,Nt),l!==null?(t.stateNode=l,Ke=t,Ee=At(l.firstChild),Nt=!1,n=!0):n=!1),n||_a(t)),ar(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,lu(n,i)?l=null:u!==null&&lu(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=ac(e,t,vm,null,null,a),An._currentValue=n),ji(e,t),Ye(e,t,l,a),t.child;case 6:return e===null&&se&&((e=a=Ee)&&(a=ap(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,Ke=t,Ee=null,e=!0):e=!1),e||_a(t)),null;case 13:return af(e,t,a);case 4:return be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ml(t,null,l,a):Ye(e,t,l,a),t.child;case 11:return Jo(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ea(t,t.type,l.value),Ye(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ha(t),n=Ve(n),l=l(n),t.flags|=1,Ye(e,t,l,a),t.child;case 14:return Fo(e,t,t.type,t.pendingProps,a);case 15:return $o(e,t,t.type,t.pendingProps,a);case 19:return nf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ai(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=_t(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Wo(e,t,a);case 24:return Ha(t),l=Ve(ze),e===null?(n=Kr(),n===null&&(n=xe,i=Vr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Fr(t),ea(t,ze,n)):((e.lanes&a)!==0&&($r(e,t),en(t,null,null,a),Pl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ea(t,ze,l)):(l=i.cache,ea(t,ze,l),l!==n.cache&&kr(t,[ze],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Xt(e){e.flags|=4}function cf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pd(t)){if(t=bt.current,t!==null&&((re&4194048)===re?Tt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==Tt))throw Wl=Jr,Xs;e.flags|=8192}}function Ei(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qu():536870912,e.lanes|=t,bl|=t)}function un(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function wm(e,t,a){var l=t.pendingProps;switch(Gr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(ze),$t(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kl(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qs())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(Se(t),cf(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),Se(t),cf(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==l&&Xt(t),Se(t),t.flags&=-16777217),null;case 27:Un(t),a=P.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}e=Z.current,kl(t)?Us(t):(e=cd(n,l,a),t.stateNode=e,Xt(t))}return Se(t),null;case 5:if(Un(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}if(e=Z.current,kl(t))Us(t);else{switch(n=qi(P.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[ke]=t,e[Je]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Le(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=P.current,kl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ed(e.nodeValue,a)),e||_a(t)}else e=qi(e).createTextNode(l),e[ke]=t,t.stateNode=e}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=kl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[ke]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=qs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ei(t,t.updateQueue),Se(t),null;case 4:return $t(),e===null&&Ic(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(B(Oe),n=t.memoizedState,n===null)return Se(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)un(n,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=vi(e),i!==null){for(t.flags|=128,un(n,!1),e=i.updateQueue,t.updateQueue=e,Ei(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Cs(a,e),a=a.sibling;return U(Oe,Oe.current&1|2),t.child}e=e.sibling}n.tail!==null&&Et()>Ri&&(t.flags|=128,l=!0,un(n,!1),t.lanes=4194304)}else{if(!l)if(e=vi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ei(t,e),un(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!se)return Se(t),null}else 2*Et()-n.renderingStartTime>Ri&&a!==536870912&&(t.flags|=128,l=!0,un(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Et(),t.sibling=null,e=Oe.current,U(Oe,l?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Gt(t),ec(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Ei(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&B(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(ze),Se(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Mm(e,t){switch(Gr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(ze),$t(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Un(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Oe),null;case 4:return $t(),null;case 10:return Bt(t.type),null;case 22:case 23:return Gt(t),ec(),e!==null&&B(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(ze),null;case 25:return null;default:return null}}function uf(e,t){switch(Gr(t),t.tag){case 3:Bt(ze),$t();break;case 26:case 27:case 5:Un(t);break;case 4:$t();break;case 13:Gt(t);break;case 19:B(Oe);break;case 10:Bt(t.type);break;case 22:case 23:Gt(t),ec(),e!==null&&B(qa);break;case 24:Bt(ze)}}function sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){ge(t,t.return,s)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var h=a,S=s;try{S()}catch(R){ge(n,h,R)}}}l=l.next}while(l!==i)}}catch(R){ge(t,t.return,R)}}function sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Js(t,a)}catch(l){ge(e,e.return,l)}}}function of(e,t,a){a.props=Ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function Rt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function ff(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function wc(e,t,a){try{var l=e.stateNode;$m(l,e.type,a,t),l[Je]=t}catch(n){ge(e,e.return,n)}}function df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Hi));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Dc(e,t,a),e=e.sibling;e!==null;)Dc(e,t,a),e=e.sibling}function Ni(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ni(e,t,a),e=e.sibling;e!==null;)Ni(e,t,a),e=e.sibling}function hf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Le(t,l,a),t[ke]=e,t[Je]=a}catch(i){ge(e,e.return,i)}}var Qt=!1,Re=!1,zc=!1,mf=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Dm(e,t){if(e=e.containerInfo,tu=Qi,e=As(e),Mr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,h=-1,S=0,R=0,O=e,A=null;t:for(;;){for(var E;O!==a||n!==0&&O.nodeType!==3||(s=u+n),O!==i||l!==0&&O.nodeType!==3||(h=u+l),O.nodeType===3&&(u+=O.nodeValue.length),(E=O.firstChild)!==null;)A=O,O=E;for(;;){if(O===e)break t;if(A===a&&++S===n&&(s=u),A===i&&++R===l&&(h=u),(E=O.nextSibling)!==null)break;O=A,A=O.parentNode}O=E}a=s===-1||h===-1?null:{start:s,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(au={focusedElem:e,selectionRange:a},Qi=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=Ya(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)iu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":iu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function pf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),l&4&&sn(5,a);break;case 1:if(ua(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ge(a,a.return,u)}else{var n=Ya(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ge(a,a.return,u)}}l&64&&sf(a),l&512&&on(a,a.return);break;case 3:if(ua(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Js(e,t)}catch(u){ge(a,a.return,u)}}break;case 27:t===null&&l&4&&hf(a);case 26:case 5:ua(e,a),t===null&&l&4&&ff(a),l&512&&on(a,a.return);break;case 12:ua(e,a);break;case 13:ua(e,a),l&4&&bf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ym.bind(null,a),lp(e,a))));break;case 22:if(l=a.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||Re,n=Qt;var i=Re;Qt=l,(Re=t)&&!i?sa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),Qt=n,Re=i}break;case 30:break;default:ua(e,a)}}function gf(e){var t=e.alternate;t!==null&&(e.alternate=null,gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&or(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,We=!1;function kt(e,t,a){for(a=a.child;a!==null;)xf(e,t,a),a=a.sibling}function xf(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:Re||Rt(a,t),kt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Rt(a,t);var l=ve,n=We;pa(a.type)&&(ve=a.stateNode,We=!1),kt(e,t,a),vn(a.stateNode),ve=l,We=n;break;case 5:Re||Rt(a,t);case 6:if(l=ve,n=We,ve=null,kt(e,t,a),ve=l,We=n,ve!==null)if(We)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{ve.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:ve!==null&&(We?(e=ve,id(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rn(e)):id(ve,a.stateNode));break;case 4:l=ve,n=We,ve=a.stateNode.containerInfo,We=!0,kt(e,t,a),ve=l,We=n;break;case 0:case 11:case 14:case 15:Re||ca(2,a,t),Re||ca(4,a,t),kt(e,t,a);break;case 1:Re||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&of(a,t,l)),kt(e,t,a);break;case 21:kt(e,t,a);break;case 22:Re=(l=Re)||a.memoizedState!==null,kt(e,t,a),Re=l;break;default:kt(e,t,a)}}function bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rn(e)}catch(a){ge(t,t.return,a)}}function zm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mf),t;default:throw Error(o(435,e.tag))}}function Oc(e,t){var a=zm(e);t.forEach(function(l){var n=Gm.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function rt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){ve=s.stateNode,We=!1;break e}break;case 5:ve=s.stateNode,We=!1;break e;case 3:case 4:ve=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(ve===null)throw Error(o(160));xf(i,u,n),ve=null,We=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}var jt=null;function vf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ct(e),l&4&&(ca(3,e,e.return),sn(3,e),ca(5,e,e.return));break;case 1:rt(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=jt;if(rt(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Cl]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Le(i,l,a),i[ke]=e,Ue(i),l=i;break e;case"link":var u=hd("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Le(i,l,a),n.head.appendChild(i);break;case"meta":if(u=hd("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Le(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[ke]=e,Ue(i),l=i}e.stateNode=l}else md(n,e.type,e.stateNode);else e.stateNode=dd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?md(n,e.type,e.stateNode):dd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&wc(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),a!==null&&l&4&&wc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),ct(e),l&512&&(Re||a===null||Rt(a,a.return)),e.flags&32){n=e.stateNode;try{$a(n,"")}catch(E){ge(e,e.return,E)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,wc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(zc=!0);break;case 6:if(rt(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(E){ge(e,e.return,E)}}break;case 3:if(Gi=null,n=jt,jt=Bi(t.containerInfo),rt(t,e),jt=n,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(E){ge(e,e.return,E)}zc&&(zc=!1,yf(e));break;case 4:l=jt,jt=Bi(e.stateNode.containerInfo),rt(t,e),ct(e),jt=l;break;case 12:rt(t,e),ct(e);break;case 13:rt(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bc=Et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,S=Qt,R=Re;if(Qt=S||n,Re=R||h,rt(t,e),Re=R,Qt=S,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Qt||Re||Ga(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=h.stateNode;var O=h.memoizedProps.style,A=O!=null&&O.hasOwnProperty("display")?O.display:null;s.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(E){ge(h,h.return,E)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(E){ge(h,h.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Oc(e,a))));break;case 19:rt(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 30:break;case 21:break;default:rt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(df(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=Mc(e);Ni(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&($a(u,""),a.flags&=-33);var s=Mc(e);Ni(e,s,u);break;case 3:case 4:var h=a.stateNode.containerInfo,S=Mc(e);Dc(e,S,h);break;default:throw Error(o(161))}}catch(R){ge(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pf(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ga(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&of(t,t.return,a),Ga(t);break;case 27:vn(t.stateNode);case 26:case 5:Rt(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:sa(n,i,a),sn(4,i);break;case 1:if(sa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){ge(l,l.return,S)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Ks(h[n],s)}catch(S){ge(l,l.return,S)}}a&&u&64&&sf(i),on(i,i.return);break;case 27:hf(i);case 26:case 5:sa(n,i,a),a&&l===null&&u&4&&ff(i),on(i,i.return);break;case 12:sa(n,i,a);break;case 13:sa(n,i,a),a&&u&4&&bf(n,i);break;case 22:i.memoizedState===null&&sa(n,i,a),on(i,i.return);break;case 30:break;default:sa(n,i,a)}t=t.sibling}}function Cc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function wt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sf(e,t,a,l),t=t.sibling}function Sf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:wt(e,t,a,l),n&2048&&sn(9,t);break;case 1:wt(e,t,a,l);break;case 3:wt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){wt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else wt(e,t,a,l);break;case 13:wt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?wt(e,t,a,l):fn(e,t):i._visibility&2?wt(e,t,a,l):(i._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Cc(u,t);break;case 24:wt(e,t,a,l),n&2048&&_c(t.alternate,t);break;default:wt(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,u=t,s=a,h=l,S=u.flags;switch(u.tag){case 0:case 11:case 15:pl(i,u,s,h,n),sn(8,u);break;case 23:break;case 22:var R=u.stateNode;u.memoizedState!==null?R._visibility&2?pl(i,u,s,h,n):fn(i,u):(R._visibility|=2,pl(i,u,s,h,n)),n&&S&2048&&Cc(u.alternate,u);break;case 24:pl(i,u,s,h,n),n&&S&2048&&_c(u.alternate,u);break;default:pl(i,u,s,h,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Cc(l.alternate,l);break;case 24:fn(a,l),n&2048&&_c(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function gl(e){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)jf(e),e=e.sibling}function jf(e){switch(e.tag){case 26:gl(e),e.flags&dn&&e.memoizedState!==null&&gp(jt,e.memoizedState,e.memoizedProps);break;case 5:gl(e);break;case 3:case 4:var t=jt;jt=Bi(e.stateNode.containerInfo),gl(e),jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dn,dn=16777216,gl(e),dn=t):gl(e));break;default:gl(e)}}function Af(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Nf(l,e)}Af(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 0:case 11:case 15:hn(e),e.flags&2048&&ca(9,e,e.return);break;case 3:hn(e);break;case 12:hn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ti(e)):hn(e);break;default:hn(e)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Nf(l,e)}Af(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Ti(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ti(t));break;default:Ti(t)}e=e.sibling}}function Nf(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var n=l.sibling,i=l.return;if(gf(l),l===a){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var Om={getCacheForType:function(e){var t=Ve(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Cm=typeof WeakMap=="function"?WeakMap:Map,oe=0,xe=null,ne=null,re=0,fe=0,ut=null,oa=!1,xl=!1,Uc=!1,Vt=0,Ne=0,fa=0,La=0,Hc=0,vt=0,bl=0,mn=null,Ie=null,qc=!1,Bc=0,Ri=1/0,wi=null,da=null,Ge=0,ha=null,vl=null,yl=0,Yc=0,Gc=null,Tf=null,pn=0,Lc=null;function st(){if((oe&2)!==0&&re!==0)return re&-re;if(w.T!==null){var e=cl;return e!==0?e:Jc()}return Gu()}function Rf(){vt===0&&(vt=(re&536870912)===0||se?Hu():536870912);var e=bt.current;return e!==null&&(e.flags|=32),vt}function ot(e,t,a){(e===xe&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ma(e,re,vt,!1)),Ol(e,a),((oe&2)===0||e!==xe)&&(e===xe&&((oe&2)===0&&(La|=a),Ne===4&&ma(e,re,vt,!1)),Mt(e))}function wf(e,t,a){if((oe&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||zl(e,t),n=l?Hm(e,t):kc(e,t,!0),i=l;do{if(n===0){xl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!_m(a)){n=kc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=mn;var h=s.current.memoizedState.isDehydrated;if(h&&(Sl(s,u).flags|=256),u=kc(s,u,!1),u!==2){if(Uc&&!h){s.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,vt,!oa);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Bc+300-Et(),10<n)){if(ma(l,t,vt,!oa),Yn(l,0,!0)!==0)break e;l.timeoutHandle=ld(Mf.bind(null,l,a,Ie,wi,qc,t,vt,La,bl,oa,i,2,-0,0),n);break e}Mf(l,a,Ie,wi,qc,t,vt,La,bl,oa,i,0,-0,0)}}break}while(!0);Mt(e)}function Mf(e,t,a,l,n,i,u,s,h,S,R,O,A,E){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(jn={stylesheets:null,count:0,unsuspend:pp},jf(t),O=xp(),O!==null)){e.cancelPendingCommit=O(Hf.bind(null,e,t,i,a,l,n,u,s,h,R,1,A,E)),ma(e,i,u,!S);return}Hf(e,t,i,a,l,n,u,s,h)}function _m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~Hc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-lt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Bu(e,a,t)}function Mi(){return(oe&6)===0?(gn(0),!1):!0}function Xc(){if(ne!==null){if(fe===0)var e=ne.return;else e=ne,qt=Ua=null,ic(e),hl=null,rn=0,e=ne;for(;e!==null;)uf(e.alternate,e),e=e.return;ne=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Im(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xc(),xe=e,ne=a=_t(e.current,null),re=t,fe=0,ut=null,oa=!1,xl=zl(e,t),Uc=!1,bl=vt=Hc=La=fa=Ne=0,Ie=mn=null,qc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-lt(l),i=1<<n;t|=e[n],l&=~i}return Vt=t,Wn(),a}function Df(e,t){ae=null,w.H=gi,t===$l||t===ri?(t=Vs(),fe=3):t===Xs?(t=Vs(),fe=4):fe=t===Ko?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,ne===null&&(Ne=1,Si(e,mt(t,e.current)))}function zf(){var e=w.H;return w.H=gi,e===null?gi:e}function Of(){var e=w.A;return w.A=Om,e}function Qc(){Ne=4,oa||(re&4194048)!==re&&bt.current!==null||(xl=!0),(fa&134217727)===0&&(La&134217727)===0||xe===null||ma(xe,re,vt,!1)}function kc(e,t,a){var l=oe;oe|=2;var n=zf(),i=Of();(xe!==e||re!==t)&&(wi=null,Sl(e,t)),t=!1;var u=Ne;e:do try{if(fe!==0&&ne!==null){var s=ne,h=ut;switch(fe){case 8:Xc(),u=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var S=fe;if(fe=0,ut=null,jl(e,s,h,S),a&&xl){u=0;break e}break;default:S=fe,fe=0,ut=null,jl(e,s,h,S)}}Um(),u=Ne;break}catch(R){Df(e,R)}while(!0);return t&&e.shellSuspendCounter++,qt=Ua=null,oe=l,w.H=n,w.A=i,ne===null&&(xe=null,re=0,Wn()),u}function Um(){for(;ne!==null;)Cf(ne)}function Hm(e,t){var a=oe;oe|=2;var l=zf(),n=Of();xe!==e||re!==t?(wi=null,Ri=Et()+500,Sl(e,t)):xl=zl(e,t);e:do try{if(fe!==0&&ne!==null){t=ne;var i=ut;t:switch(fe){case 1:fe=0,ut=null,jl(e,t,i,1);break;case 2:case 9:if(Qs(i)){fe=0,ut=null,_f(t);break}t=function(){fe!==2&&fe!==9||xe!==e||(fe=7),Mt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Qs(i)?(fe=0,ut=null,_f(t)):(fe=0,ut=null,jl(e,t,i,7));break;case 5:var u=null;switch(ne.tag){case 26:u=ne.memoizedState;case 5:case 27:var s=ne;if(!u||pd(u)){fe=0,ut=null;var h=s.sibling;if(h!==null)ne=h;else{var S=s.return;S!==null?(ne=S,Di(S)):ne=null}break t}}fe=0,ut=null,jl(e,t,i,5);break;case 6:fe=0,ut=null,jl(e,t,i,6);break;case 8:Xc(),Ne=6;break e;default:throw Error(o(462))}}qm();break}catch(R){Df(e,R)}while(!0);return qt=Ua=null,w.H=l,w.A=n,oe=a,ne!==null?0:(xe=null,re=0,Wn(),Ne)}function qm(){for(;ne!==null&&!ih();)Cf(ne)}function Cf(e){var t=rf(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Di(e):ne=t}function _f(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Po(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=Po(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:ic(t);default:uf(a,t),t=ne=Cs(t,Vt),t=rf(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?Di(e):ne=t}function jl(e,t,a,l){qt=Ua=null,ic(t),hl=null,rn=0;var n=t.return;try{if(Tm(e,n,t,a,re)){Ne=1,Si(e,mt(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;Ne=1,Si(e,mt(a,e.current)),ne=null;return}t.flags&32768?(se||l===1?e=!0:xl||(re&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Uf(t,e)):Di(t)}function Di(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,oa);return}e=t.return;var a=wm(t.alternate,t,Vt);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ne===0&&(Ne=5)}function Uf(e,t){do{var a=Mm(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ne=6,ne=null}function Hf(e,t,a,l,n,i,u,s,h){e.cancelPendingCommit=null;do zi();while(Ge!==0);if((oe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=_r,ph(e,a,i,u,s,h),e===xe&&(ne=xe=null,re=0),vl=t,ha=e,yl=a,Yc=i,Gc=n,Tf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lm(Hn,function(){return Lf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=H.p,H.p=2,u=oe,oe|=4;try{Dm(e,t,a)}finally{oe=u,H.p=n,w.T=l}}Ge=1,qf(),Bf(),Yf()}}function qf(){if(Ge===1){Ge=0;var e=ha,t=vl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=H.p;H.p=2;var n=oe;oe|=4;try{vf(t,e);var i=au,u=As(e.containerInfo),s=i.focusedElem,h=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&js(s.ownerDocument.documentElement,s)){if(h!==null&&Mr(s)){var S=h.start,R=h.end;if(R===void 0&&(R=S),"selectionStart"in s)s.selectionStart=S,s.selectionEnd=Math.min(R,s.value.length);else{var O=s.ownerDocument||document,A=O&&O.defaultView||window;if(A.getSelection){var E=A.getSelection(),$=s.textContent.length,K=Math.min(h.start,$),me=h.end===void 0?K:Math.min(h.end,$);!E.extend&&K>me&&(u=me,me=K,K=u);var b=Ss(s,K),x=Ss(s,me);if(b&&x&&(E.rangeCount!==1||E.anchorNode!==b.node||E.anchorOffset!==b.offset||E.focusNode!==x.node||E.focusOffset!==x.offset)){var y=O.createRange();y.setStart(b.node,b.offset),E.removeAllRanges(),K>me?(E.addRange(y),E.extend(x.node,x.offset)):(y.setEnd(x.node,x.offset),E.addRange(y))}}}}for(O=[],E=s;E=E.parentNode;)E.nodeType===1&&O.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<O.length;s++){var D=O[s];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Qi=!!tu,au=tu=null}finally{oe=n,H.p=l,w.T=a}}e.current=t,Ge=2}}function Bf(){if(Ge===2){Ge=0;var e=ha,t=vl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=H.p;H.p=2;var n=oe;oe|=4;try{pf(e,t.alternate,t)}finally{oe=n,H.p=l,w.T=a}}Ge=3}}function Yf(){if(Ge===4||Ge===3){Ge=0,rh();var e=ha,t=vl,a=yl,l=Tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,vl=ha=null,Gf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),ur(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=H.p,H.p=2,w.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{w.T=t,H.p=n}}(yl&3)!==0&&zi(),Mt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Lc?pn++:(pn=0,Lc=e):pn=0,gn(0)}}function Gf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function zi(e){return qf(),Bf(),Yf(),Lf()}function Lf(){if(Ge!==5)return!1;var e=ha,t=Yc;Yc=0;var a=ur(yl),l=w.T,n=H.p;try{H.p=32>a?32:a,w.T=null,a=Gc,Gc=null;var i=ha,u=yl;if(Ge=0,vl=ha=null,yl=0,(oe&6)!==0)throw Error(o(331));var s=oe;if(oe|=4,Ef(i.current),Sf(i,i.current,u,a),oe=s,gn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{H.p=n,w.T=l,Gf(e,t)}}function Xf(e,t,a){t=mt(a,t),t=vc(e.stateNode,t,2),e=la(e,t,2),e!==null&&(Ol(e,2),Mt(e))}function ge(e,t,a){if(e.tag===3)Xf(e,e,a);else for(;t!==null;){if(t.tag===3){Xf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=mt(a,e),a=Vo(2),l=la(t,a,2),l!==null&&(Zo(a,l,t,e),Ol(l,2),Mt(l));break}}t=t.return}}function Vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Cm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Uc=!0,n.add(a),e=Bm.bind(null,e,t,a),t.then(e,e))}function Bm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(Ne===4||Ne===3&&(re&62914560)===re&&300>Et()-Bc?(oe&2)===0&&Sl(e,0):Hc|=a,bl===re&&(bl=0)),Mt(e)}function Qf(e,t){t===0&&(t=qu()),e=ll(e,t),e!==null&&(Ol(e,t),Mt(e))}function Ym(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qf(e,a)}function Gm(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Qf(e,a)}function Lm(e,t){return nr(e,t)}var Oi=null,Al=null,Zc=!1,Ci=!1,Kc=!1,Xa=0;function Mt(e){e!==Al&&e.next===null&&(Al===null?Oi=Al=e:Al=Al.next=e),Ci=!0,Zc||(Zc=!0,Qm())}function gn(e,t){if(!Kc&&Ci){Kc=!0;do for(var a=!1,l=Oi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Kf(l,i))}else i=re,i=Yn(l,l===xe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||zl(l,i)||(a=!0,Kf(l,i));l=l.next}while(a);Kc=!1}}function Xm(){kf()}function kf(){Ci=Zc=!1;var e=0;Xa!==0&&(Wm()&&(e=Xa),Xa=0);for(var t=Et(),a=null,l=Oi;l!==null;){var n=l.next,i=Vf(l,t);i===0?(l.next=null,a===null?Oi=n:a.next=n,n===null&&(Al=a)):(a=l,(e!==0||(i&3)!==0)&&(Ci=!0)),l=n}gn(e)}function Vf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-lt(i),s=1<<u,h=n[u];h===-1?((s&a)===0||(s&l)!==0)&&(n[u]=mh(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=xe,a=re,a=Yn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ir(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ir(l),ur(a)){case 2:case 8:a=_u;break;case 32:a=Hn;break;case 268435456:a=Uu;break;default:a=Hn}return l=Zf.bind(null,e),a=nr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ir(l),e.callbackPriority=2,e.callbackNode=null,2}function Zf(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zi()&&e.callbackNode!==a)return null;var l=re;return l=Yn(e,e===xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(wf(e,l,t),Vf(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Zf.bind(null,e):null)}function Kf(e,t){if(zi())return null;wf(e,t,!0)}function Qm(){Pm(function(){(oe&6)!==0?nr(Cu,Xm):kf()})}function Jc(){return Xa===0&&(Xa=Hu()),Xa}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kn(""+e)}function Ff(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function km(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Jf((n[Je]||null).action),u=l.submitter;u&&(t=(t=u[Je]||null)?Jf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Jn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xa!==0){var h=u?Ff(n,u):new FormData(n);mc(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=u?Ff(n,u):new FormData(n),mc(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var Fc=0;Fc<Cr.length;Fc++){var $c=Cr[Fc],Vm=$c.toLowerCase(),Zm=$c[0].toUpperCase()+$c.slice(1);St(Vm,"on"+Zm)}St(Ts,"onAnimationEnd"),St(Rs,"onAnimationIteration"),St(ws,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(sm,"onTransitionRun"),St(om,"onTransitionStart"),St(fm,"onTransitionCancel"),St(Ms,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));function $f(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],h=s.instance,S=s.currentTarget;if(s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=S;try{i(n)}catch(R){yi(R)}n.currentTarget=null,i=h}else for(u=0;u<l.length;u++){if(s=l[u],h=s.instance,S=s.currentTarget,s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=S;try{i(n)}catch(R){yi(R)}n.currentTarget=null,i=h}}}}function ie(e,t){var a=t[sr];a===void 0&&(a=t[sr]=new Set);var l=e+"__bubble";a.has(l)||(Wf(t,e,2,!1),a.add(l))}function Wc(e,t,a){var l=0;t&&(l|=4),Wf(a,e,l,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[_i]){e[_i]=!0,Xu.forEach(function(a){a!=="selectionchange"&&(Km.has(a)||Wc(a,!1,e),Wc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Wc("selectionchange",!1,t))}}function Wf(e,t,a,l){switch(Sd(t)){case 2:var n=yp;break;case 8:n=Sp;break;default:n=du}a=n.bind(null,t,a,e),n=void 0,!yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Pc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var h=u.tag;if((h===3||h===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=ka(s),u===null)return;if(h=u.tag,h===5||h===6||h===26||h===27){l=i=u;continue e}s=s.parentNode}}l=l.return}as(function(){var S=i,R=br(a),O=[];e:{var A=Ds.get(e);if(A!==void 0){var E=Jn,$=e;switch(e){case"keypress":if(Zn(a)===0)break e;case"keydown":case"keyup":E=Lh;break;case"focusin":$="focus",E=Er;break;case"focusout":$="blur",E=Er;break;case"beforeblur":case"afterblur":E=Er;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=kh;break;case Ts:case Rs:case ws:E=Oh;break;case Ms:E=Zh;break;case"scroll":case"scrollend":E=Rh;break;case"wheel":E=Jh;break;case"copy":case"cut":case"paste":E=_h;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=cs;break;case"toggle":case"beforetoggle":E=$h}var K=(t&4)!==0,me=!K&&(e==="scroll"||e==="scrollend"),b=K?A!==null?A+"Capture":null:A;K=[];for(var x=S,y;x!==null;){var D=x;if(y=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||y===null||b===null||(D=Ul(x,b),D!=null&&K.push(bn(x,D,y))),me)break;x=x.return}0<K.length&&(A=new E(A,$,null,a,R),O.push({event:A,listeners:K}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",A&&a!==xr&&($=a.relatedTarget||a.fromElement)&&(ka($)||$[Qa]))break e;if((E||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,E?($=a.relatedTarget||a.toElement,E=S,$=$?ka($):null,$!==null&&(me=v($),K=$.tag,$!==me||K!==5&&K!==27&&K!==6)&&($=null)):(E=null,$=S),E!==$)){if(K=is,D="onMouseLeave",b="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=cs,D="onPointerLeave",b="onPointerEnter",x="pointer"),me=E==null?A:_l(E),y=$==null?A:_l($),A=new K(D,x+"leave",E,a,R),A.target=me,A.relatedTarget=y,D=null,ka(R)===S&&(K=new K(b,x+"enter",$,a,R),K.target=y,K.relatedTarget=me,D=K),me=D,E&&$)t:{for(K=E,b=$,x=0,y=K;y;y=El(y))x++;for(y=0,D=b;D;D=El(D))y++;for(;0<x-y;)K=El(K),x--;for(;0<y-x;)b=El(b),y--;for(;x--;){if(K===b||b!==null&&K===b.alternate)break t;K=El(K),b=El(b)}K=null}else K=null;E!==null&&If(O,A,E,K,!1),$!==null&&me!==null&&If(O,me,$,K,!0)}}e:{if(A=S?_l(S):window,E=A.nodeName&&A.nodeName.toLowerCase(),E==="select"||E==="input"&&A.type==="file")var Y=ps;else if(hs(A))if(gs)Y=rm;else{Y=nm;var le=lm}else E=A.nodeName,!E||E.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?S&&gr(S.elementType)&&(Y=ps):Y=im;if(Y&&(Y=Y(e,S))){ms(O,Y,a,R);break e}le&&le(e,A,S),e==="focusout"&&S&&A.type==="number"&&S.memoizedProps.value!=null&&pr(A,"number",A.value)}switch(le=S?_l(S):window,e){case"focusin":(hs(le)||le.contentEditable==="true")&&(el=le,Dr=S,Ql=null);break;case"focusout":Ql=Dr=el=null;break;case"mousedown":zr=!0;break;case"contextmenu":case"mouseup":case"dragend":zr=!1,Es(O,a,R);break;case"selectionchange":if(um)break;case"keydown":case"keyup":Es(O,a,R)}var Q;if(Tr)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Pa?fs(e,a)&&(J="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(J="onCompositionStart");J&&(us&&a.locale!=="ko"&&(Pa||J!=="onCompositionStart"?J==="onCompositionEnd"&&Pa&&(Q=ls()):(Pt=R,Sr="value"in Pt?Pt.value:Pt.textContent,Pa=!0)),le=Ui(S,J),0<le.length&&(J=new rs(J,e,null,a,R),O.push({event:J,listeners:le}),Q?J.data=Q:(Q=ds(a),Q!==null&&(J.data=Q)))),(Q=Ih?Ph(e,a):em(e,a))&&(J=Ui(S,"onBeforeInput"),0<J.length&&(le=new rs("onBeforeInput","beforeinput",null,a,R),O.push({event:le,listeners:J}),le.data=Q)),km(O,e,S,a,R)}$f(O,t)})}function bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ui(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(bn(e,n,i)),n=Ul(e,t),n!=null&&l.push(bn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function El(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function If(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,h=s.alternate,S=s.stateNode;if(s=s.tag,h!==null&&h===l)break;s!==5&&s!==26&&s!==27||S===null||(h=S,n?(S=Ul(a,i),S!=null&&u.unshift(bn(a,S,h))):n||(S=Ul(a,i),S!=null&&u.push(bn(a,S,h)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var Jm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace(Fm,"")}function ed(e,t){return t=Pf(t),Pf(e)===t}function Hi(){}function he(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||$a(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&$a(e,""+l);break;case"className":Ln(e,"class",l);break;case"tabIndex":Ln(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ln(e,a,l);break;case"style":es(e,l,i);break;case"data":if(t!=="object"){Ln(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Gn(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nh.get(a)||a,Gn(e,a,l))}}function eu(e,t,a,l,n,i){switch(a){case"style":es(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?$a(e,l):(typeof l=="number"||typeof l=="bigint")&&$a(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Gn(e,a,l)}}}function Le(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,i,u,a,null)}}n&&he(e,t,"srcSet",a.srcSet,a,null),l&&he(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var s=i=u=n=null,h=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":n=R;break;case"type":u=R;break;case"checked":h=R;break;case"defaultChecked":S=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:he(e,t,l,R,a,null)}}$u(e,i,s,h,S,u,n,!1),Xn(e);return;case"select":ie("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:he(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Fa(e,!!l,t,!1):a!=null&&Fa(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:he(e,t,u,s,a,null)}Iu(e,l,n,i),Xn(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,h,l,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<xn.length;l++)ie(xn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,S,l,a,null)}return;default:if(gr(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&eu(e,t,R,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&he(e,t,s,l,a,null))}function $m(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,h=null,S=null,R=null;for(E in a){var O=a[E];if(a.hasOwnProperty(E)&&O!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":h=O;default:l.hasOwnProperty(E)||he(e,t,E,null,l,O)}}for(var A in l){var E=l[A];if(O=a[A],l.hasOwnProperty(A)&&(E!=null||O!=null))switch(A){case"type":i=E;break;case"name":n=E;break;case"checked":S=E;break;case"defaultChecked":R=E;break;case"value":u=E;break;case"defaultValue":s=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:E!==O&&he(e,t,A,E,l,O)}}mr(e,u,s,h,S,R,i,n);return;case"select":E=u=s=A=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":E=h;default:l.hasOwnProperty(i)||he(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":A=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==h&&he(e,t,n,i,l,h)}t=s,a=u,l=E,A!=null?Fa(e,!!a,A,!1):!!l!=!!a&&(t!=null?Fa(e,!!a,t,!0):Fa(e,!!a,a?[]:"",!1));return;case"textarea":E=A=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:he(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":A=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&he(e,t,u,n,l,i)}Wu(e,A,E);return;case"option":for(var $ in a)if(A=a[$],a.hasOwnProperty($)&&A!=null&&!l.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:he(e,t,$,null,l,A)}for(h in l)if(A=l[h],E=a[h],l.hasOwnProperty(h)&&A!==E&&(A!=null||E!=null))switch(h){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:he(e,t,h,A,l,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)A=a[K],a.hasOwnProperty(K)&&A!=null&&!l.hasOwnProperty(K)&&he(e,t,K,null,l,A);for(S in l)if(A=l[S],E=a[S],l.hasOwnProperty(S)&&A!==E&&(A!=null||E!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:he(e,t,S,A,l,E)}return;default:if(gr(t)){for(var me in a)A=a[me],a.hasOwnProperty(me)&&A!==void 0&&!l.hasOwnProperty(me)&&eu(e,t,me,void 0,l,A);for(R in l)A=l[R],E=a[R],!l.hasOwnProperty(R)||A===E||A===void 0&&E===void 0||eu(e,t,R,A,l,E);return}}for(var b in a)A=a[b],a.hasOwnProperty(b)&&A!=null&&!l.hasOwnProperty(b)&&he(e,t,b,null,l,A);for(O in l)A=l[O],E=a[O],!l.hasOwnProperty(O)||A===E||A==null&&E==null||he(e,t,O,A,l,E)}var tu=null,au=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nu=null;function Wm(){var e=window.event;return e&&e.type==="popstate"?e===nu?!1:(nu=e,!0):(nu=null,!1)}var ld=typeof setTimeout=="function"?setTimeout:void 0,Im=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(ep)}:ld;function ep(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function id(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var u=e.ownerDocument;if(a&1&&vn(u.documentElement),a&2&&vn(u.body),a&4)for(a=u.head,vn(a),u=a.firstChild;u;){var s=u.nextSibling,h=u.nodeName;u[Cl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=s}}if(n===0){e.removeChild(i),Rn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Rn(t)}function iu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":iu(a),or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function ap(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=At(e.nextSibling),e===null))return null;return e}function ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lp(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var cu=null;function rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function cd(e,t,a){switch(t=qi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function vn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);or(e)}var yt=new Map,ud=new Set;function Bi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=H.d;H.d={f:np,r:ip,D:rp,C:cp,L:up,m:sp,X:fp,S:op,M:dp};function np(){var e=Zt.f(),t=Mi();return e||t}function ip(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Ro(t):Zt.r(e)}var Nl=typeof document>"u"?null:document;function sd(e,t,a){var l=Nl;if(l&&typeof t=="string"&&t){var n=ht(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),ud.has(n)||(ud.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Le(t,"link",e),Ue(t),l.head.appendChild(t)))}}function rp(e){Zt.D(e),sd("dns-prefetch",e,null)}function cp(e,t){Zt.C(e,t),sd("preconnect",e,t)}function up(e,t,a){Zt.L(e,t,a);var l=Nl;if(l&&e&&t){var n='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ht(a.imageSizes)+'"]')):n+='[href="'+ht(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=Rl(e)}yt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(yn(i))||t==="script"&&l.querySelector(Sn(i))||(t=l.createElement("link"),Le(t,"link",e),Ue(t),l.head.appendChild(t)))}}function sp(e,t){Zt.m(e,t);var a=Nl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ht(l)+'"][href="'+ht(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rl(e)}if(!yt.has(i)&&(e=N({rel:"modulepreload",href:e},t),yt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sn(i)))return}l=a.createElement("link"),Le(l,"link",e),Ue(l),a.head.appendChild(l)}}}function op(e,t,a){Zt.S(e,t,a);var l=Nl;if(l&&e){var n=Za(l).hoistableStyles,i=Tl(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(yn(i)))s.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(i))&&uu(e,a);var h=u=l.createElement("link");Ue(h),Le(h,"link",e),h._p=new Promise(function(S,R){h.onload=S,h.onerror=R}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Yi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function fp(e,t){Zt.X(e,t);var a=Nl;if(a&&e){var l=Za(a).hoistableScripts,n=Rl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=N({src:e,async:!0},t),(t=yt.get(n))&&su(e,t),i=a.createElement("script"),Ue(i),Le(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function dp(e,t){Zt.M(e,t);var a=Nl;if(a&&e){var l=Za(a).hoistableScripts,n=Rl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=yt.get(n))&&su(e,t),i=a.createElement("script"),Ue(i),Le(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function od(e,t,a,l){var n=(n=P.current)?Bi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Za(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=Za(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(yn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),i||hp(n,e,a,u.state))),t&&l===null)throw Error(o(528,""));return u}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rl(a),a=Za(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Tl(e){return'href="'+ht(e)+'"'}function yn(e){return'link[rel="stylesheet"]['+e+"]"}function fd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function hp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Le(t,"link",a),Ue(t),e.head.appendChild(t))}function Rl(e){return'[src="'+ht(e)+'"]'}function Sn(e){return"script[async]"+e}function dd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(l)return t.instance=l,Ue(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ue(l),Le(l,"style",n),Yi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(yn(n));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;l=fd(a),(n=yt.get(n))&&uu(l,n),i=(e.ownerDocument||e).createElement("link"),Ue(i);var u=i;return u._p=new Promise(function(s,h){u.onload=s,u.onerror=h}),Le(i,"link",l),t.state.loading|=4,Yi(i,a.precedence,e),t.instance=i;case"script":return i=Rl(a.src),(n=e.querySelector(Sn(i)))?(t.instance=n,Ue(n),n):(l=a,(n=yt.get(i))&&(l=N({},a),su(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),Le(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Yi(l,a.precedence,e));return t.instance}function Yi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function hd(e,t,a){if(Gi===null){var l=new Map,n=Gi=new Map;n.set(a,l)}else n=Gi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Cl]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function md(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function mp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jn=null;function pp(){}function gp(e,t,a){if(jn===null)throw Error(o(475));var l=jn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(a.href),i=e.querySelector(yn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Li.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ue(i);return}i=e.ownerDocument||e,a=fd(a),(n=yt.get(n))&&uu(a,n),i=i.createElement("link"),Ue(i);var u=i;u._p=new Promise(function(s,h){u.onload=s,u.onerror=h}),Le(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Li.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function xp(){if(jn===null)throw Error(o(475));var e=jn;return e.stylesheets&&e.count===0&&ou(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Li(){if(this.count--,this.count===0){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xi=null;function ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xi=new Map,t.forEach(bp,e),Xi=null,Li.call(e))}function bp(e,t){if(!(t.state.loading&4)){var a=Xi.get(e);if(a)var l=a.get(null);else{a=new Map,Xi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Li.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var An={$$typeof:ee,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function vp(e,t,a,l,n,i,u,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function gd(e,t,a,l,n,i,u,s,h,S,R,O){return e=new vp(e,t,a,u,s,h,S,O),t=1,i===!0&&(t|=24),i=it(3,null,null,t),e.current=i,i.stateNode=e,t=Vr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Fr(i),e}function xd(e){return e?(e=nl,e):nl}function bd(e,t,a,l,n,i){n=xd(n),l.context===null?l.context=n:l.pendingContext=n,l=aa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=la(e,l,t),a!==null&&(ot(a,e,t),Il(a,e,t))}function vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function fu(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function yd(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&ot(t,e,67108864),fu(e,67108864)}}var Qi=!0;function yp(e,t,a,l){var n=w.T;w.T=null;var i=H.p;try{H.p=2,du(e,t,a,l)}finally{H.p=i,w.T=n}}function Sp(e,t,a,l){var n=w.T;w.T=null;var i=H.p;try{H.p=8,du(e,t,a,l)}finally{H.p=i,w.T=n}}function du(e,t,a,l){if(Qi){var n=hu(l);if(n===null)Pc(e,t,l,ki,a),jd(e,l);else if(Ap(n,e,t,a,l))l.stopPropagation();else if(jd(e,l),t&4&&-1<jp.indexOf(e)){for(;n!==null;){var i=Va(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Na(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var h=1<<31-lt(u);s.entanglements[1]|=h,u&=~h}Mt(i),(oe&6)===0&&(Ri=Et()+500,gn(0))}}break;case 13:s=ll(i,2),s!==null&&ot(s,i,2),Mi(),fu(i,2)}if(i=hu(l),i===null&&Pc(e,t,l,ki,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Pc(e,t,l,null,a)}}function hu(e){return e=br(e),mu(e)}var ki=null;function mu(e){if(ki=null,e=ka(e),e!==null){var t=v(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ki=e,null}function Sd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ch()){case Cu:return 2;case _u:return 8;case Hn:case uh:return 32;case Uu:return 268435456;default:return 32}default:return 32}}var pu=!1,ga=null,xa=null,ba=null,En=new Map,Nn=new Map,va=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jd(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function Tn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Va(t),t!==null&&yd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Ap(e,t,a,l,n){switch(t){case"focusin":return ga=Tn(ga,e,t,a,l,n),!0;case"dragenter":return xa=Tn(xa,e,t,a,l,n),!0;case"mouseover":return ba=Tn(ba,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return En.set(i,Tn(En.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Nn.set(i,Tn(Nn.get(i)||null,e,t,a,l,n)),!0}return!1}function Ad(e){var t=ka(e.target);if(t!==null){var a=v(t);if(a!==null){if(t=a.tag,t===13){if(t=T(a),t!==null){e.blockedOn=t,gh(e.priority,function(){if(a.tag===13){var l=st();l=cr(l);var n=ll(a,l);n!==null&&ot(n,a,l),fu(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=hu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);xr=l,a.target.dispatchEvent(l),xr=null}else return t=Va(a),t!==null&&yd(t),e.blockedOn=a,!1;t.shift()}return!0}function Ed(e,t,a){Vi(e)&&a.delete(t)}function Ep(){pu=!1,ga!==null&&Vi(ga)&&(ga=null),xa!==null&&Vi(xa)&&(xa=null),ba!==null&&Vi(ba)&&(ba=null),En.forEach(Ed),Nn.forEach(Ed)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,pu||(pu=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Ep)))}var Ki=null;function Nd(e){Ki!==e&&(Ki=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(mu(l||a)===null)continue;break}var i=Va(a);i!==null&&(e.splice(t,3),t-=3,mc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Rn(e){function t(h){return Zi(h,e)}ga!==null&&Zi(ga,e),xa!==null&&Zi(xa,e),ba!==null&&Zi(ba,e),En.forEach(t),Nn.forEach(t);for(var a=0;a<va.length;a++){var l=va[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)Ad(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Je]||null;if(typeof i=="function")u||Nd(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Je]||null)s=u.formAction;else if(mu(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Nd(a)}}}function gu(e){this._internalRoot=e}Ji.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=st();bd(a,l,e,t,null,null)},Ji.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bd(e.current,2,null,e,null,null),Mi(),t[Qa]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&Ad(e)}};var Td=f.version;if(Td!=="19.1.1")throw Error(o(527,Td,"19.1.1"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=j(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Np={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Dl=Fi.inject(Np),at=Fi}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(o(299));var a=!1,l="",n=Lo,i=Xo,u=Qo,s=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=gd(e,1,!1,null,null,a,l,n,i,u,s,null),e[Qa]=t.current,Ic(e),new gu(t)},Mn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(o(299));var l=!1,n="",i=Lo,u=Xo,s=Qo,h=null,S=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(S=a.formState)),t=gd(e,1,!0,t,a??null,l,n,i,u,s,h,S),t.context=xd(null),a=t.current,l=st(),l=cr(l),n=aa(l),n.callback=null,la(a,n,l),a=l,t.current.lanes=a,Ol(t,a),Mt(t),e[Qa]=t.current,Ic(e),new Ji(t)},Mn.version="19.1.1",Mn}var Hd;function Hp(){if(Hd)return vu.exports;Hd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),vu.exports=Up(),vu.exports}var qp=Hp();const Bp=Xd(qp);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qd="popstate";function Yp(c={}){function f(o,m){let{pathname:v,search:T,hash:z}=o.location;return Nu("",{pathname:v,search:T,hash:z},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(o,m){return typeof m=="string"?m:zn(m)}return Lp(f,d,null,c)}function je(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function Dt(c,f){if(!c){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Gp(){return Math.random().toString(36).substring(2,10)}function Bd(c,f){return{usr:c.state,key:c.key,idx:f}}function Nu(c,f,d=null,o){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof f=="string"?wl(f):f,state:d,key:f&&f.key||o||Gp()}}function zn({pathname:c="/",search:f="",hash:d=""}){return f&&f!=="?"&&(c+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function wl(c){let f={};if(c){let d=c.indexOf("#");d>=0&&(f.hash=c.substring(d),c=c.substring(0,d));let o=c.indexOf("?");o>=0&&(f.search=c.substring(o),c=c.substring(0,o)),c&&(f.pathname=c)}return f}function Lp(c,f,d,o={}){let{window:m=document.defaultView,v5Compat:v=!1}=o,T=m.history,z="POP",j=null,g=N();g==null&&(g=0,T.replaceState({...T.state,idx:g},""));function N(){return(T.state||{idx:null}).idx}function _(){z="POP";let G=N(),V=G==null?null:G-g;g=G,j&&j({action:z,location:W.location,delta:V})}function q(G,V){z="PUSH";let L=Nu(W.location,G,V);g=N()+1;let ee=Bd(L,g),ye=W.createHref(L);try{T.pushState(ee,"",ye)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;m.location.assign(ye)}v&&j&&j({action:z,location:W.location,delta:1})}function X(G,V){z="REPLACE";let L=Nu(W.location,G,V);g=N();let ee=Bd(L,g),ye=W.createHref(L);T.replaceState(ee,"",ye),v&&j&&j({action:z,location:W.location,delta:0})}function k(G){return Xp(G)}let W={get action(){return z},get location(){return c(m,T)},listen(G){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(qd,_),j=G,()=>{m.removeEventListener(qd,_),j=null}},createHref(G){return f(m,G)},createURL:k,encodeLocation(G){let V=k(G);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:q,replace:X,go(G){return T.go(G)}};return W}function Xp(c,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),je(d,"No window.location.(origin|href) available to create URL");let o=typeof c=="string"?c:zn(c);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Qd(c,f,d="/"){return Qp(c,f,d,!1)}function Qp(c,f,d,o){let m=typeof f=="string"?wl(f):f,v=Jt(m.pathname||"/",d);if(v==null)return null;let T=kd(c);kp(T);let z=null;for(let j=0;z==null&&j<T.length;++j){let g=t0(v);z=Pp(T[j],g,o)}return z}function kd(c,f=[],d=[],o="",m=!1){let v=(T,z,j=m,g)=>{let N={relativePath:g===void 0?T.path||"":g,caseSensitive:T.caseSensitive===!0,childrenIndex:z,route:T};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(o)&&j)return;je(N.relativePath.startsWith(o),`Absolute route path "${N.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(o.length)}let _=Kt([o,N.relativePath]),q=d.concat(N);T.children&&T.children.length>0&&(je(T.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),kd(T.children,f,q,_,j)),!(T.path==null&&!T.index)&&f.push({path:_,score:Wp(_,T.index),routesMeta:q})};return c.forEach((T,z)=>{if(T.path===""||!T.path?.includes("?"))v(T,z);else for(let j of Vd(T.path))v(T,z,!0,j)}),f}function Vd(c){let f=c.split("/");if(f.length===0)return[];let[d,...o]=f,m=d.endsWith("?"),v=d.replace(/\?$/,"");if(o.length===0)return m?[v,""]:[v];let T=Vd(o.join("/")),z=[];return z.push(...T.map(j=>j===""?v:[v,j].join("/"))),m&&z.push(...T),z.map(j=>c.startsWith("/")&&j===""?"/":j)}function kp(c){c.sort((f,d)=>f.score!==d.score?d.score-f.score:Ip(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var Vp=/^:[\w-]+$/,Zp=3,Kp=2,Jp=1,Fp=10,$p=-2,Yd=c=>c==="*";function Wp(c,f){let d=c.split("/"),o=d.length;return d.some(Yd)&&(o+=$p),f&&(o+=Kp),d.filter(m=>!Yd(m)).reduce((m,v)=>m+(Vp.test(v)?Zp:v===""?Jp:Fp),o)}function Ip(c,f){return c.length===f.length&&c.slice(0,-1).every((o,m)=>o===f[m])?c[c.length-1]-f[f.length-1]:0}function Pp(c,f,d=!1){let{routesMeta:o}=c,m={},v="/",T=[];for(let z=0;z<o.length;++z){let j=o[z],g=z===o.length-1,N=v==="/"?f:f.slice(v.length)||"/",_=Pi({path:j.relativePath,caseSensitive:j.caseSensitive,end:g},N),q=j.route;if(!_&&g&&d&&!o[o.length-1].route.index&&(_=Pi({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},N)),!_)return null;Object.assign(m,_.params),T.push({params:m,pathname:Kt([v,_.pathname]),pathnameBase:i0(Kt([v,_.pathnameBase])),route:q}),_.pathnameBase!=="/"&&(v=Kt([v,_.pathnameBase]))}return T}function Pi(c,f){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[d,o]=e0(c.path,c.caseSensitive,c.end),m=f.match(d);if(!m)return null;let v=m[0],T=v.replace(/(.)\/+$/,"$1"),z=m.slice(1);return{params:o.reduce((g,{paramName:N,isOptional:_},q)=>{if(N==="*"){let k=z[q]||"";T=v.slice(0,v.length-k.length).replace(/(.)\/+$/,"$1")}const X=z[q];return _&&!X?g[N]=void 0:g[N]=(X||"").replace(/%2F/g,"/"),g},{}),pathname:v,pathnameBase:T,pattern:c}}function e0(c,f=!1,d=!0){Dt(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let o=[],m="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(T,z,j)=>(o.push({paramName:z,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(o.push({paramName:"*"}),m+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":c!==""&&c!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),o]}function t0(c){try{return c.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Dt(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),c}}function Jt(c,f){if(f==="/")return c;if(!c.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=c.charAt(d);return o&&o!=="/"?null:c.slice(d)||"/"}function a0(c,f="/"){let{pathname:d,search:o="",hash:m=""}=typeof c=="string"?wl(c):c;return{pathname:d?d.startsWith("/")?d:l0(d,f):f,search:r0(o),hash:c0(m)}}function l0(c,f){let d=f.replace(/\/+$/,"").split("/");return c.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Au(c,f,d,o){return`Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function n0(c){return c.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function Zd(c){let f=n0(c);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function Kd(c,f,d,o=!1){let m;typeof c=="string"?m=wl(c):(m={...c},je(!m.pathname||!m.pathname.includes("?"),Au("?","pathname","search",m)),je(!m.pathname||!m.pathname.includes("#"),Au("#","pathname","hash",m)),je(!m.search||!m.search.includes("#"),Au("#","search","hash",m)));let v=c===""||m.pathname==="",T=v?"/":m.pathname,z;if(T==null)z=d;else{let _=f.length-1;if(!o&&T.startsWith("..")){let q=T.split("/");for(;q[0]==="..";)q.shift(),_-=1;m.pathname=q.join("/")}z=_>=0?f[_]:"/"}let j=a0(m,z),g=T&&T!=="/"&&T.endsWith("/"),N=(v||T===".")&&d.endsWith("/");return!j.pathname.endsWith("/")&&(g||N)&&(j.pathname+="/"),j}var Kt=c=>c.join("/").replace(/\/\/+/g,"/"),i0=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),r0=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,c0=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function u0(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}var Jd=["POST","PUT","PATCH","DELETE"];new Set(Jd);var s0=["GET",...Jd];new Set(s0);var Ml=M.createContext(null);Ml.displayName="DataRouter";var er=M.createContext(null);er.displayName="DataRouterState";M.createContext(!1);var Fd=M.createContext({isTransitioning:!1});Fd.displayName="ViewTransition";var o0=M.createContext(new Map);o0.displayName="Fetchers";var f0=M.createContext(null);f0.displayName="Await";var zt=M.createContext(null);zt.displayName="Navigation";var On=M.createContext(null);On.displayName="Location";var Ft=M.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var wu=M.createContext(null);wu.displayName="RouteError";function d0(c,{relative:f}={}){je(Cn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=M.useContext(zt),{hash:m,pathname:v,search:T}=_n(c,{relative:f}),z=v;return d!=="/"&&(z=v==="/"?d:Kt([d,v])),o.createHref({pathname:z,search:T,hash:m})}function Cn(){return M.useContext(On)!=null}function ja(){return je(Cn(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(On).location}var $d="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wd(c){M.useContext(zt).static||M.useLayoutEffect(c)}function h0(){let{isDataRoute:c}=M.useContext(Ft);return c?T0():m0()}function m0(){je(Cn(),"useNavigate() may be used only in the context of a <Router> component.");let c=M.useContext(Ml),{basename:f,navigator:d}=M.useContext(zt),{matches:o}=M.useContext(Ft),{pathname:m}=ja(),v=JSON.stringify(Zd(o)),T=M.useRef(!1);return Wd(()=>{T.current=!0}),M.useCallback((j,g={})=>{if(Dt(T.current,$d),!T.current)return;if(typeof j=="number"){d.go(j);return}let N=Kd(j,JSON.parse(v),m,g.relative==="path");c==null&&f!=="/"&&(N.pathname=N.pathname==="/"?f:Kt([f,N.pathname])),(g.replace?d.replace:d.push)(N,g.state,g)},[f,d,v,m,c])}M.createContext(null);function _n(c,{relative:f}={}){let{matches:d}=M.useContext(Ft),{pathname:o}=ja(),m=JSON.stringify(Zd(d));return M.useMemo(()=>Kd(c,JSON.parse(m),o,f==="path"),[c,m,o,f])}function p0(c,f){return Id(c,f)}function Id(c,f,d,o,m){je(Cn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:v}=M.useContext(zt),{matches:T}=M.useContext(Ft),z=T[T.length-1],j=z?z.params:{},g=z?z.pathname:"/",N=z?z.pathnameBase:"/",_=z&&z.route;{let L=_&&_.path||"";Pd(g,!_||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let q=ja(),X;if(f){let L=typeof f=="string"?wl(f):f;je(N==="/"||L.pathname?.startsWith(N),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${L.pathname}" was given in the \`location\` prop.`),X=L}else X=q;let k=X.pathname||"/",W=k;if(N!=="/"){let L=N.replace(/^\//,"").split("/");W="/"+k.replace(/^\//,"").split("/").slice(L.length).join("/")}let G=Qd(c,{pathname:W});Dt(_||G!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Dt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=y0(G&&G.map(L=>Object.assign({},L,{params:Object.assign({},j,L.params),pathname:Kt([N,v.encodeLocation?v.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?N:Kt([N,v.encodeLocation?v.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),T,d,o,m);return f&&V?M.createElement(On.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},V):V}function g0(){let c=N0(),f=u0(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),d=c instanceof Error?c.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},v={padding:"2px 4px",backgroundColor:o},T=null;return console.error("Error handled by React Router default ErrorBoundary:",c),T=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:v},"ErrorBoundary")," or"," ",M.createElement("code",{style:v},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},f),d?M.createElement("pre",{style:m},d):null,T)}var x0=M.createElement(g0,null),b0=class extends M.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,f){return f.location!==c.location||f.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:f.error,location:f.location,revalidation:c.revalidation||f.revalidation}}componentDidCatch(c,f){this.props.unstable_onError?this.props.unstable_onError(c,f):console.error("React Router caught the following error during render",c)}render(){return this.state.error!==void 0?M.createElement(Ft.Provider,{value:this.props.routeContext},M.createElement(wu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function v0({routeContext:c,match:f,children:d}){let o=M.useContext(Ml);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),M.createElement(Ft.Provider,{value:c},d)}function y0(c,f=[],d=null,o=null,m=null){if(c==null){if(!d)return null;if(d.errors)c=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)c=d.matches;else return null}let v=c,T=d?.errors;if(T!=null){let g=v.findIndex(N=>N.route.id&&T?.[N.route.id]!==void 0);je(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(T).join(",")}`),v=v.slice(0,Math.min(v.length,g+1))}let z=!1,j=-1;if(d)for(let g=0;g<v.length;g++){let N=v[g];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(j=g),N.route.id){let{loaderData:_,errors:q}=d,X=N.route.loader&&!_.hasOwnProperty(N.route.id)&&(!q||q[N.route.id]===void 0);if(N.route.lazy||X){z=!0,j>=0?v=v.slice(0,j+1):v=[v[0]];break}}}return v.reduceRight((g,N,_)=>{let q,X=!1,k=null,W=null;d&&(q=T&&N.route.id?T[N.route.id]:void 0,k=N.route.errorElement||x0,z&&(j<0&&_===0?(Pd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,W=null):j===_&&(X=!0,W=N.route.hydrateFallbackElement||null)));let G=f.concat(v.slice(0,_+1)),V=()=>{let L;return q?L=k:X?L=W:N.route.Component?L=M.createElement(N.route.Component,null):N.route.element?L=N.route.element:L=g,M.createElement(v0,{match:N,routeContext:{outlet:g,matches:G,isDataRoute:d!=null},children:L})};return d&&(N.route.ErrorBoundary||N.route.errorElement||_===0)?M.createElement(b0,{location:d.location,revalidation:d.revalidation,component:k,error:q,children:V(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:o}):V()},null)}function Mu(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S0(c){let f=M.useContext(Ml);return je(f,Mu(c)),f}function j0(c){let f=M.useContext(er);return je(f,Mu(c)),f}function A0(c){let f=M.useContext(Ft);return je(f,Mu(c)),f}function Du(c){let f=A0(c),d=f.matches[f.matches.length-1];return je(d.route.id,`${c} can only be used on routes that contain a unique "id"`),d.route.id}function E0(){return Du("useRouteId")}function N0(){let c=M.useContext(wu),f=j0("useRouteError"),d=Du("useRouteError");return c!==void 0?c:f.errors?.[d]}function T0(){let{router:c}=S0("useNavigate"),f=Du("useNavigate"),d=M.useRef(!1);return Wd(()=>{d.current=!0}),M.useCallback(async(m,v={})=>{Dt(d.current,$d),d.current&&(typeof m=="number"?c.navigate(m):await c.navigate(m,{fromRouteId:f,...v}))},[c,f])}var Gd={};function Pd(c,f,d){!f&&!Gd[c]&&(Gd[c]=!0,Dt(!1,d))}M.memo(R0);function R0({routes:c,future:f,state:d,unstable_onError:o}){return Id(c,void 0,d,o,f)}function Sa(c){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function w0({basename:c="/",children:f=null,location:d,navigationType:o="POP",navigator:m,static:v=!1}){je(!Cn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=c.replace(/^\/*/,"/"),z=M.useMemo(()=>({basename:T,navigator:m,static:v,future:{}}),[T,m,v]);typeof d=="string"&&(d=wl(d));let{pathname:j="/",search:g="",hash:N="",state:_=null,key:q="default"}=d,X=M.useMemo(()=>{let k=Jt(j,T);return k==null?null:{location:{pathname:k,search:g,hash:N,state:_,key:q},navigationType:o}},[T,j,g,N,_,q,o]);return Dt(X!=null,`<Router basename="${T}"> is not able to match the URL "${j}${g}${N}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:M.createElement(zt.Provider,{value:z},M.createElement(On.Provider,{children:f,value:X}))}function M0({children:c,location:f}){return p0(Tu(c),f)}function Tu(c,f=[]){let d=[];return M.Children.forEach(c,(o,m)=>{if(!M.isValidElement(o))return;let v=[...f,m];if(o.type===M.Fragment){d.push.apply(d,Tu(o.props.children,v));return}je(o.type===Sa,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!o.props.index||!o.props.children,"An index route cannot have child routes.");let T={id:o.props.id||v.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(T.children=Tu(o.props.children,v)),d.push(T)}),d}var Wi="get",Ii="application/x-www-form-urlencoded";function tr(c){return c!=null&&typeof c.tagName=="string"}function D0(c){return tr(c)&&c.tagName.toLowerCase()==="button"}function z0(c){return tr(c)&&c.tagName.toLowerCase()==="form"}function O0(c){return tr(c)&&c.tagName.toLowerCase()==="input"}function C0(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function _0(c,f){return c.button===0&&(!f||f==="_self")&&!C0(c)}var $i=null;function U0(){if($i===null)try{new FormData(document.createElement("form"),0),$i=!1}catch{$i=!0}return $i}var H0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Eu(c){return c!=null&&!H0.has(c)?(Dt(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`),null):c}function q0(c,f){let d,o,m,v,T;if(z0(c)){let z=c.getAttribute("action");o=z?Jt(z,f):null,d=c.getAttribute("method")||Wi,m=Eu(c.getAttribute("enctype"))||Ii,v=new FormData(c)}else if(D0(c)||O0(c)&&(c.type==="submit"||c.type==="image")){let z=c.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=c.getAttribute("formaction")||z.getAttribute("action");if(o=j?Jt(j,f):null,d=c.getAttribute("formmethod")||z.getAttribute("method")||Wi,m=Eu(c.getAttribute("formenctype"))||Eu(z.getAttribute("enctype"))||Ii,v=new FormData(z,c),!U0()){let{name:g,type:N,value:_}=c;if(N==="image"){let q=g?`${g}.`:"";v.append(`${q}x`,"0"),v.append(`${q}y`,"0")}else g&&v.append(g,_)}}else{if(tr(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Wi,o=null,m=Ii,T=c}return v&&m==="text/plain"&&(T=v,v=void 0),{action:o,method:d.toLowerCase(),encType:m,formData:v,body:T}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zu(c,f){if(c===!1||c===null||typeof c>"u")throw new Error(f)}function B0(c,f,d){let o=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return o.pathname==="/"?o.pathname=`_root.${d}`:f&&Jt(o.pathname,f)==="/"?o.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${d}`,o}async function Y0(c,f){if(c.id in f)return f[c.id];try{let d=await import(c.module);return f[c.id]=d,d}catch(d){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G0(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function L0(c,f,d){let o=await Promise.all(c.map(async m=>{let v=f.routes[m.route.id];if(v){let T=await Y0(v,d);return T.links?T.links():[]}return[]}));return V0(o.flat(1).filter(G0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Ld(c,f,d,o,m,v){let T=(j,g)=>d[g]?j.route.id!==d[g].route.id:!0,z=(j,g)=>d[g].pathname!==j.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==j.params["*"];return v==="assets"?f.filter((j,g)=>T(j,g)||z(j,g)):v==="data"?f.filter((j,g)=>{let N=o.routes[j.route.id];if(!N||!N.hasLoader)return!1;if(T(j,g)||z(j,g))return!0;if(j.route.shouldRevalidate){let _=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function X0(c,f,{includeHydrateFallback:d}={}){return Q0(c.map(o=>{let m=f.routes[o.route.id];if(!m)return[];let v=[m.module];return m.clientActionModule&&(v=v.concat(m.clientActionModule)),m.clientLoaderModule&&(v=v.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(v=v.concat(m.hydrateFallbackModule)),m.imports&&(v=v.concat(m.imports)),v}).flat(1))}function Q0(c){return[...new Set(c)]}function k0(c){let f={},d=Object.keys(c).sort();for(let o of d)f[o]=c[o];return f}function V0(c,f){let d=new Set;return new Set(f),c.reduce((o,m)=>{let v=JSON.stringify(k0(m));return d.has(v)||(d.add(v),o.push({key:v,link:m})),o},[])}function eh(){let c=M.useContext(Ml);return zu(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function Z0(){let c=M.useContext(er);return zu(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var Ou=M.createContext(void 0);Ou.displayName="FrameworkContext";function th(){let c=M.useContext(Ou);return zu(c,"You must render this element inside a <HydratedRouter> element"),c}function K0(c,f){let d=M.useContext(Ou),[o,m]=M.useState(!1),[v,T]=M.useState(!1),{onFocus:z,onBlur:j,onMouseEnter:g,onMouseLeave:N,onTouchStart:_}=f,q=M.useRef(null);M.useEffect(()=>{if(c==="render"&&T(!0),c==="viewport"){let W=V=>{V.forEach(L=>{T(L.isIntersecting)})},G=new IntersectionObserver(W,{threshold:.5});return q.current&&G.observe(q.current),()=>{G.disconnect()}}},[c]),M.useEffect(()=>{if(o){let W=setTimeout(()=>{T(!0)},100);return()=>{clearTimeout(W)}}},[o]);let X=()=>{m(!0)},k=()=>{m(!1),T(!1)};return d?c!=="intent"?[v,q,{}]:[v,q,{onFocus:Dn(z,X),onBlur:Dn(j,k),onMouseEnter:Dn(g,X),onMouseLeave:Dn(N,k),onTouchStart:Dn(_,X)}]:[!1,q,{}]}function Dn(c,f){return d=>{c&&c(d),d.defaultPrevented||f(d)}}function J0({page:c,...f}){let{router:d}=eh(),o=M.useMemo(()=>Qd(d.routes,c,d.basename),[d.routes,c,d.basename]);return o?M.createElement($0,{page:c,matches:o,...f}):null}function F0(c){let{manifest:f,routeModules:d}=th(),[o,m]=M.useState([]);return M.useEffect(()=>{let v=!1;return L0(c,f,d).then(T=>{v||m(T)}),()=>{v=!0}},[c,f,d]),o}function $0({page:c,matches:f,...d}){let o=ja(),{manifest:m,routeModules:v}=th(),{basename:T}=eh(),{loaderData:z,matches:j}=Z0(),g=M.useMemo(()=>Ld(c,f,j,m,o,"data"),[c,f,j,m,o]),N=M.useMemo(()=>Ld(c,f,j,m,o,"assets"),[c,f,j,m,o]),_=M.useMemo(()=>{if(c===o.pathname+o.search+o.hash)return[];let k=new Set,W=!1;if(f.forEach(V=>{let L=m.routes[V.route.id];!L||!L.hasLoader||(!g.some(ee=>ee.route.id===V.route.id)&&V.route.id in z&&v[V.route.id]?.shouldRevalidate||L.hasClientLoader?W=!0:k.add(V.route.id))}),k.size===0)return[];let G=B0(c,T,"data");return W&&k.size>0&&G.searchParams.set("_routes",f.filter(V=>k.has(V.route.id)).map(V=>V.route.id).join(",")),[G.pathname+G.search]},[T,z,o,m,g,f,c,v]),q=M.useMemo(()=>X0(N,m),[N,m]),X=F0(N);return M.createElement(M.Fragment,null,_.map(k=>M.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...d})),q.map(k=>M.createElement("link",{key:k,rel:"modulepreload",href:k,...d})),X.map(({key:k,link:W})=>M.createElement("link",{key:k,nonce:d.nonce,...W})))}function W0(...c){return f=>{c.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ah&&(window.__reactRouterVersion="7.8.2")}catch{}function I0({basename:c,children:f,window:d}){let o=M.useRef();o.current==null&&(o.current=Yp({window:d,v5Compat:!0}));let m=o.current,[v,T]=M.useState({action:m.action,location:m.location}),z=M.useCallback(j=>{M.startTransition(()=>T(j))},[T]);return M.useLayoutEffect(()=>m.listen(z),[m,z]),M.createElement(w0,{basename:c,children:f,location:v.location,navigationType:v.action,navigator:m})}var lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=M.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:m,reloadDocument:v,replace:T,state:z,target:j,to:g,preventScrollReset:N,viewTransition:_,...q},X){let{basename:k}=M.useContext(zt),W=typeof g=="string"&&lh.test(g),G,V=!1;if(typeof g=="string"&&W&&(G=g,ah))try{let Ae=new URL(window.location.href),et=g.startsWith("//")?new URL(Ae.protocol+g):new URL(g),ft=Jt(et.pathname,k);et.origin===Ae.origin&&ft!=null?g=ft+et.search+et.hash:V=!0}catch{Dt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=d0(g,{relative:m}),[ee,ye,I]=K0(o,q),Ce=ag(g,{replace:T,state:z,target:j,preventScrollReset:N,relative:m,viewTransition:_});function De(Ae){f&&f(Ae),Ae.defaultPrevented||Ce(Ae)}let _e=M.createElement("a",{...q,...I,href:G||L,onClick:V||v?f:De,ref:W0(X,ye),target:j,"data-discover":!W&&d==="render"?"true":void 0});return ee&&!W?M.createElement(M.Fragment,null,_e,M.createElement(J0,{page:L})):_e});Pe.displayName="Link";var P0=M.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:m=!1,style:v,to:T,viewTransition:z,children:j,...g},N){let _=_n(T,{relative:g.relative}),q=ja(),X=M.useContext(er),{navigator:k,basename:W}=M.useContext(zt),G=X!=null&&cg(_)&&z===!0,V=k.encodeLocation?k.encodeLocation(_).pathname:_.pathname,L=q.pathname,ee=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;d||(L=L.toLowerCase(),ee=ee?ee.toLowerCase():null,V=V.toLowerCase()),ee&&W&&(ee=Jt(ee,W)||ee);const ye=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let I=L===V||!m&&L.startsWith(V)&&L.charAt(ye)==="/",Ce=ee!=null&&(ee===V||!m&&ee.startsWith(V)&&ee.charAt(V.length)==="/"),De={isActive:I,isPending:Ce,isTransitioning:G},_e=I?f:void 0,Ae;typeof o=="function"?Ae=o(De):Ae=[o,I?"active":null,Ce?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let et=typeof v=="function"?v(De):v;return M.createElement(Pe,{...g,"aria-current":_e,className:Ae,ref:N,style:et,to:T,viewTransition:z},typeof j=="function"?j(De):j)});P0.displayName="NavLink";var eg=M.forwardRef(({discover:c="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:m,state:v,method:T=Wi,action:z,onSubmit:j,relative:g,preventScrollReset:N,viewTransition:_,...q},X)=>{let k=ig(),W=rg(z,{relative:g}),G=T.toLowerCase()==="get"?"get":"post",V=typeof z=="string"&&lh.test(z),L=ee=>{if(j&&j(ee),ee.defaultPrevented)return;ee.preventDefault();let ye=ee.nativeEvent.submitter,I=ye?.getAttribute("formmethod")||T;k(ye||ee.currentTarget,{fetcherKey:f,method:I,navigate:d,replace:m,state:v,relative:g,preventScrollReset:N,viewTransition:_})};return M.createElement("form",{ref:X,method:G,action:W,onSubmit:o?j:L,...q,"data-discover":!V&&c==="render"?"true":void 0})});eg.displayName="Form";function tg(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nh(c){let f=M.useContext(Ml);return je(f,tg(c)),f}function ag(c,{target:f,replace:d,state:o,preventScrollReset:m,relative:v,viewTransition:T}={}){let z=h0(),j=ja(),g=_n(c,{relative:v});return M.useCallback(N=>{if(_0(N,f)){N.preventDefault();let _=d!==void 0?d:zn(j)===zn(g);z(c,{replace:_,state:o,preventScrollReset:m,relative:v,viewTransition:T})}},[j,z,g,d,o,f,c,m,v,T])}var lg=0,ng=()=>`__${String(++lg)}__`;function ig(){let{router:c}=nh("useSubmit"),{basename:f}=M.useContext(zt),d=E0();return M.useCallback(async(o,m={})=>{let{action:v,method:T,encType:z,formData:j,body:g}=q0(o,f);if(m.navigate===!1){let N=m.fetcherKey||ng();await c.fetch(N,d,m.action||v,{preventScrollReset:m.preventScrollReset,formData:j,body:g,formMethod:m.method||T,formEncType:m.encType||z,flushSync:m.flushSync})}else await c.navigate(m.action||v,{preventScrollReset:m.preventScrollReset,formData:j,body:g,formMethod:m.method||T,formEncType:m.encType||z,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[c,f,d])}function rg(c,{relative:f}={}){let{basename:d}=M.useContext(zt),o=M.useContext(Ft);je(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),v={..._n(c||".",{relative:f})},T=ja();if(c==null){v.search=T.search;let z=new URLSearchParams(v.search),j=z.getAll("index");if(j.some(N=>N==="")){z.delete("index"),j.filter(_=>_).forEach(_=>z.append("index",_));let N=z.toString();v.search=N?`?${N}`:""}}return(!c||c===".")&&m.route.index&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(v.pathname=v.pathname==="/"?d:Kt([d,v.pathname])),zn(v)}function cg(c,{relative:f}={}){let d=M.useContext(Fd);je(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=nh("useViewTransitionState"),m=_n(c,{relative:f});if(!d.isTransitioning)return!1;let v=Jt(d.currentLocation.pathname,o)||d.currentLocation.pathname,T=Jt(d.nextLocation.pathname,o)||d.nextLocation.pathname;return Pi(m.pathname,T)!=null||Pi(m.pathname,v)!=null}const ug=()=>r.jsx("style",{children:`
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
        margin: 0 10px;
    }
    
    .btn-red-cta {
        background-color: #dc3545;
        color: white;
    }
    
    .btn-red-cta:hover {
        background-color: #ffc107;
        color: #212529;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .btn-secondary {
        background-color: #6c757d;
        color: white;
    }
    
    .btn-secondary:hover {
        background-color: #5a6268;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(108, 117, 125, 0.3);
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
    .faculty-box {
        background: #fff;
        border-radius: 15px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
        margin: 20px;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .faculty-box:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
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
        transition: color 0.3s ease;
        cursor: pointer;
    }
    
    .faculty-content h3:hover {
        color: #D32F2F;
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
        padding: 50px 20px;
        text-align: center;
        position: relative;
        width: 100%;
    }
    
    .form-page .page-banner h2 {
        color: white;
        font-size: 2.5rem;
        margin-bottom: 10px;
        font-weight: 600;
    }
    
    .form-page .page-banner p {
        max-width: 600px;
        margin: 0 auto 20px;
        font-size: 1rem;
    }
    
    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 40px;
        padding: 40px 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .form-info {
        background: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        border: none;
    }
    
    .form-info h3 {
        color: #212529;
        margin-bottom: 12px;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
        position: relative;
    }
    
    .form-info h3::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 2px;
        background: #D32F2F;
        border-radius: 1px;
    }
    
    .form-info p {
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.4;
        text-align: center;
        font-size: 0.9rem;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .info-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 1px;
        padding: 3px 0;
        border-bottom: 1px solid #f0f0f0;
        transition: all 0.3s ease;
        min-height: 30px;
    }
    
    .info-item:hover {
        border-bottom-color: #D32F2F;
        transform: translateX(3px);
    }
    
    .info-item:last-child {
        border-bottom: none;
    }
    
    .info-icon {
        width: 35px;
        height: 35px;
        background: transparent;
        color: #D32F2F;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        flex-shrink: 0;
        transition: all 0.3s ease;
        margin-top: 2px;
    }
    
    .info-item:hover .info-icon {
        transform: scale(1.05);
        color: #a32424;
    }
    
    .info-content {
        flex: 1;
        min-width: 0;
    }
    
    .info-item strong {
        color: #212529;
        font-weight: 600;
        display: block;
        margin-bottom: 5px;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.2px;
    }
    
    .info-item span {
        color: #495057;
        line-height: 1.5;
        font-size: 0.9rem;
        display: block;
    }
    
    .info-item.special {
        background: transparent;
        padding: 0;
        text-align: center;
        border: none;
        margin: 15px 0;
    }
    
    .info-item.special strong {
        color: #212529;
        font-weight: 700;
        text-transform: none;
        font-size: 1rem;
        letter-spacing: normal;
    }
    
    .social-icons {
        display: flex;
        gap: 12px;
        margin-top: 12px;
        justify-content: center;
    }
    
    .social-icons a {
        color: #D32F2F;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #fff;
        text-decoration: none;
        font-size: 1.1rem;
        border: none;
        box-shadow: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .social-icons a:hover {
        color: #fff;
        background: #D32F2F;
        transform: scale(1.1);
        box-shadow: 0 2px 8px rgba(211, 47, 47, 0.2);
    }
    
    .form-container {
        background: #fff;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        border: none;
        position: relative;
    }
    
    .form-container h3 {
        color: #000000;
        margin-bottom: 15px;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: left;
        font-family: 'Inter', sans-serif;
        border-bottom: none;
        padding-bottom: 0;
    }
    
    .form-group {
        margin-bottom: 12px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 3px;
        color: #333;
        font-weight: 400;
        font-size: 0.85rem;
        font-family: 'Inter', sans-serif;
    }
    
    .form-group input,
    .form-group textarea,
    .form-group select {
        width: 100%;
        padding: 7px 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 0.85rem;
        font-family: 'Inter', sans-serif;
        transition: border-color 0.2s ease;
        box-sizing: border-box;
        background: #fff;
        color: #333;
    }
    
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
        outline: none;
        border-color: #D32F2F;
        background: #fff;
        box-shadow: none;
    }
    
    .form-group textarea {
        min-height: 70px;
        resize: vertical;
        line-height: 1.3;
    }
    
    .submit-btn {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 9px 18px;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.9rem;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        transition: all 0.2s ease;
        width: auto;
        display: block;
        margin: 0 auto;
        margin-top: 8px;
        text-align: center;
        box-shadow: none;
        letter-spacing: 0.3px;
    }
    
    .submit-btn:hover {
        background: #a32424;
        color: white;
        transform: none;
        box-shadow: none;
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
    
    .form-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
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
    
    .footer-nav-link {
        color: #adb5bd;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 0.9rem;
    }
    
    .footer-nav-link:hover {
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
    
    .newsletter-note {
        color: #6c757d;
        font-size: 0.8rem;
        margin-top: 15px;
        font-style: italic;
    }
    
    .footer-bottom {
        border-top: 1px solid #495057;
        padding-top: 20px;
        color: #adb5bd;
        font-size: 0.9rem;
    }
    
    .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }
    
    .footer-bottom-links {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
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
    
    /* ============== FOOTER RESPONSIVE STYLES ============== */
    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
        }
        
        .footer-column {
            text-align: center;
        }
        
        .newsletter-form {
            flex-direction: column;
            gap: 15px;
        }
        
        .newsletter-form button {
            width: 100%;
        }
        
        .footer-bottom {
            font-size: 0.8rem;
        }
        
        .footer-bottom a {
            display: block;
            margin: 5px 0;
        }
        
        .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
        }
        
        .footer-bottom-links {
            justify-content: center;
        }
    }
    
    @media (max-width: 480px) {
        .site-footer {
            padding: 40px 0 20px;
        }
        
        .footer-grid {
            gap: 25px;
        }
        
        .footer-column h3 {
            font-size: 1.1rem;
        }
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
        
        .form-info, .form-container {
            padding: 30px;
        }
        
        .form-page .page-banner h2 {
            font-size: 2.5rem;
        }
        
        .form-page .page-banner p {
            font-size: 1.1rem;
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
  `}),sg=()=>(M.useEffect(()=>{const c=document.createElement("link");c.rel="stylesheet",c.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(c);const f=document.createElement("link");return f.rel="stylesheet",f.href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",document.head.appendChild(f),()=>{document.head.removeChild(c),document.head.removeChild(f)}},[]),null),og=({activePage:c})=>{const[f,d]=M.useState(!1),o=()=>{d(!1)};return r.jsx("header",{className:"header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"logo-container",onClick:o,children:[r.jsx("img",{src:"https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png",alt:"IGT Logo",className:"logo-crest"}),r.jsxs("div",{className:"logo-text-container",children:[r.jsx("h1",{className:"logo-title",children:"INSTITUTE OF GLOBAL TECHNOLOGY"}),r.jsx("p",{className:"logo-tagline",children:"Gateway to Excellence in Education"})]})]}),r.jsx("nav",{children:r.jsxs("ul",{className:f?"active":"",children:[r.jsx("li",{children:r.jsx(Pe,{to:"/",className:c==="/"?"active":"",onClick:o,children:"Home"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/programs",className:c==="/programs"?"active":"",onClick:o,children:"Programs"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/departments",className:c==="/departments"?"active":"",onClick:o,children:"Departments"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/faculty",className:c==="/faculty"?"active":"",onClick:o,children:"Faculty"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/admissions",className:c==="/admissions"?"active":"",onClick:o,children:"Admissions"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/contact",className:c==="/contact"?"active":"",onClick:o,children:"Contact"})})]})}),r.jsx("button",{className:"menu-toggle",onClick:()=>d(!f),"aria-label":"Open Menu",children:r.jsx("i",{className:"fas fa-bars"})})]})})},fg=()=>r.jsx("section",{id:"hero",className:"hero",children:r.jsxs("div",{className:"hero-content",children:[r.jsxs("div",{className:"hero-title-glance",children:[r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-label",children:"WELCOME TO"})}),r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-main",children:"INSTITUTE OF"})}),r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-main",children:"GLOBAL TECHNOLOGY"})})]}),r.jsxs("div",{className:"hero-glance-content",children:[r.jsx("div",{className:"hero-description",children:r.jsx("p",{children:"Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future."})}),r.jsx("div",{className:"hero-accredited",children:"ACCREDITED BY AIAB EUROPE"})]})]})}),dg=()=>r.jsx("section",{id:"about",className:"about",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"ABOUT INSTITUTE OF GLOBAL TECHNOLOGY"}),r.jsx("p",{className:"section-subtitle",children:"Discover our mission, vision, and values that guide us in providing exceptional technology education"}),r.jsxs("div",{className:"about-grid",children:[r.jsx("div",{className:"about-image",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Institute of Global Technology Campus"})}),r.jsxs("div",{className:"about-content",children:[r.jsx("h3",{children:"Transforming Technology Education Since 2005"}),r.jsx("p",{children:"The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success."}),r.jsx("p",{children:"Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies."}),r.jsx("p",{className:"accredited-text",children:"ACCREDITED BY AIAB EUROPE"}),r.jsxs("div",{className:"stats-container",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"6000+"}),r.jsx("div",{className:"label",children:"STUDENTS"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"300+"}),r.jsx("div",{className:"label",children:"FACULTY"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"60+"}),r.jsx("div",{className:"label",children:"PROGRAMS"})]})]})]})]})]})}),hg=()=>r.jsx("section",{id:"why-choose-us",className:"why-choose-us",children:r.jsxs("div",{className:"container",children:[r.jsxs("h2",{children:["Why Choose Us",r.jsx("span",{className:"question-mark",children:"?"})]}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Industrial Partners"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"100+ Industrial Partners"}),r.jsx("p",{children:"Strong collaborations with leading technology companies for research and placements."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Expert Faculty"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Learn from Experts"}),r.jsx("p",{children:"Instruction from national and international experts in their respective fields."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Placement Support"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Placement Assistance"}),r.jsx("p",{children:"Complete placement support with career counseling and interview preparation."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Advanced Research"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Advanced Research"}),r.jsx("p",{children:"Opportunities to work on innovative research projects with commercialization potential."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Entrepreneurship Support"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Entrepreneurship Support"}),r.jsx("p",{children:"Incubation center and mentorship for student startups and innovations."})]})]})]})]})}),mg=[{category:"Precision Agriculture",subtitle:"Innovative programs combining technology with modern agricultural practices",courses:[{title:"MASTER PROGRAM in Precision Agriculture",image:"https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg",duration:"12 Months",description:"Master data-driven farming techniques using IoT, sensors, and AI for crop optimization."},{title:"MASTER PROGRAM in Agriculture Drones",image:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Train in drone piloting, imaging, and data analysis for agricultural applications."},{title:"MASTER PROGRAM in Hydroponics & Vertical Farming",image:"https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg",duration:"12 Months",description:"Learn sustainable farming techniques without soil in controlled environments."},{title:"MASTER PROGRAM in AI & ML in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg",duration:"12 Months",description:"Apply artificial intelligence and machine learning to solve agricultural challenges."},{title:"MASTER PROGRAM in Agriculture Robotics",image:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",duration:"12 Months",description:"Develop and implement robotic solutions for planting, harvesting, and farm automation."},{title:"MASTER PROGRAM in Advanced Technologies in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp",duration:"12 Months",description:"Explore cutting-edge technologies transforming modern agriculture."},{title:"MASTER PROGRAM in Agri Entrepreneurship",image:"https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business skills specific to agricultural ventures and startups."}]},{category:"AI & Robotics",subtitle:"Specialized programs in artificial intelligence and robotic systems",courses:[{title:"MASTER PROGRAM in AI & Robotics",image:"https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg",duration:"12 Months",description:"Comprehensive training in AI-driven robotic systems and automation."},{title:"MASTER PROGRAM in Generative AI",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master the creation of AI models that generate text, images, and media."},{title:"MASTER PROGRAM in AI & Blockchain",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the convergence of AI and decentralized blockchain technologies."},{title:"MASTER PROGRAM in AI & Data Analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI techniques to extract insights from complex datasets."},{title:"MASTER PROGRAM in AI & Biological Sciences",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to biological research, drug discovery, and genetic analysis."},{title:"MASTER PROGRAM in AI & Cybersecurity Systems",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop AI-powered solutions for cybersecurity threats and vulnerabilities."}]},{category:"AI & Business",subtitle:"Programs at the intersection of artificial intelligence and business applications",courses:[{title:"MASTER PROGRAM in AI & Business",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Transform business operations with AI-driven strategies and solutions."},{title:"MASTER PROGRAM in AI & Management Studies",image:"https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg",duration:"12 Months",description:"Apply AI to organizational leadership, decision-making, and strategy."},{title:"MASTER PROGRAM in AI & Law",image:"https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg",duration:"12 Months",description:"Explore the legal implications and applications of artificial intelligence."},{title:"MASTER PROGRAM in IP Law",image:"https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg",duration:"12 Months",description:"Specialize in intellectual property law for technology and innovation."},{title:"MASTER PROGRAM in AI & Marketing",image:"https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg",duration:"12 Months",description:"Leverage AI for customer insights, personalization, and campaign optimization."}]},{category:"Healthcare & Life Sciences",subtitle:"Programs at the intersection of technology and life sciences",courses:[{title:"MASTER PROGRAM in Clinical Research & Regulatory Affairs",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Gain expertise in clinical trials and pharmaceutical regulations."},{title:"MASTER PROGRAM in Medical Coding",image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg",duration:"12 Months",description:"Learn standardized coding systems for healthcare documentation."},{title:"MASTER PROGRAM in Digital Forensics",image:"https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af",duration:"12 Months",description:"Investigate cybercrimes and recover digital evidence."},{title:"MASTER PROGRAM in Industrial Fermentation Technology",image:"https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master microbial processes for food, pharmaceuticals, and biofuels."},{title:"MASTER PROGRAM in Vaccine Technology",image:"https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png",duration:"12 Months",description:"Study vaccine development, production, and quality control."},{title:"MASTER PROGRAM in Bioentrepreneurship",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business ventures in biotechnology and life sciences."}]},{category:"AI & Creative Technologies",subtitle:"Programs combining artificial intelligence with creative disciplines",courses:[{title:"MASTER PROGRAM in AI & Designing Technology",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to product, graphic, and UX/UI design processes."},{title:"MASTER PROGRAM in AI & Arts",image:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the intersection of artificial intelligence and creative arts."}]},{category:"Emerging Technologies & Smart Systems",subtitle:"Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",courses:[{title:"Reality Architect: Master of AR/VR/XR Development",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master immersive technologies to build future-ready AR, VR, and XR applications."},{title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",image:"https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",duration:"12 Months",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications."},{title:"Game Changer: Master Program in XR Gaming",image:"https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg",duration:"12 Months",description:"Design and develop immersive games using XR technology and gamification strategy."},{title:"Master Program in AR and Mixed Reality",image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",duration:"12 Months",description:"Specialize in designing cutting-edge MR life environments and interfaces."},{title:"Master Program in Electric Vehicle Technology",image:"https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png",duration:"12 Months",description:"Learn about EV systems, battery design, automatic mobility, and energy management."},{title:"Master Program in IoT and Embedded Systems",image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp",duration:"12 Months",description:"Build connected smart devices with microcontrollers, sensors, and communication protocols."},{title:"Master Program in Human-Computer Interaction",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Focus on designing intuitive interfaces, enhancing user experiences, and usability testing."}]},{category:"Doctoral & Postdoctoral Programs",subtitle:"Advanced research programs for scholars and fellows in science, engineering, and humanities",courses:[{title:"Doctoral Programs",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Varies",description:"Research-focused degrees in multiple disciplines:",list:["PhD in Engineering in ICT disciplines","PhD in Science and Mathematics","PhD in Humanities, Social Science and Design"]},{title:"Postdoctoral Programs",image:"https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Flexible",description:"Postdoctoral fellowships in emerging domains:",list:["Wireless Communications, Embedded Systems","AI, ML, and Information Security","5G/6G, Robotics, VLSI, NLP, Adversarial ML"]}]}],pg=({course:c})=>r.jsxs("div",{className:"program-card",children:[r.jsx("img",{src:c.image,alt:c.title,className:"program-card-image"}),r.jsxs("div",{className:"program-card-content",children:[r.jsx("h4",{children:c.title}),r.jsxs("div",{className:"program-card-duration",children:[r.jsx("i",{className:"far fa-clock"}),c.duration]}),r.jsxs("div",{className:"program-card-description",children:[c.description,c.list&&r.jsx("ul",{children:c.list.map((f,d)=>r.jsx("li",{children:f},d))})]}),r.jsxs("div",{className:"program-card-buttons",children:[r.jsx("a",{href:"#",className:"btn btn-details",children:"Details"}),r.jsx("a",{href:"#",className:"btn btn-apply",children:"Apply"})]})]})]}),gg=()=>r.jsxs("section",{id:"programs",className:"programs-page",children:[r.jsx("div",{className:"page-banner programs-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Transform Your Future"}),r.jsx("p",{children:"Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market."})]})}),mg.map((c,f)=>r.jsx("div",{className:"program-category",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"category-header",children:[r.jsx("h3",{children:c.category}),r.jsx("p",{children:c.subtitle})]}),r.jsx("div",{className:"program-cards-grid",children:c.courses.map((d,o)=>r.jsx(pg,{course:d},`${d.title}-${o}`))})]})},`${c.category}-${f}`)),r.jsxs("div",{className:"admissions-cta",children:[r.jsx("h3",{children:"Ready to take the next step?"}),r.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),r.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),r.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]}),xg=()=>r.jsxs("section",{className:"admissions-page",children:[r.jsx("div",{className:"admissions-journey-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Begin Your Academic Journey"}),r.jsx("p",{children:"Join our community of innovators and thought leaders"})]})}),r.jsx("div",{className:"admissions-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"section-title",children:"Admissions Process"}),r.jsx("p",{className:"section-tagline",children:"Our streamlined admission process makes it easy to join our academic community"}),r.jsxs("div",{className:"process-grid",children:[r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"1"}),r.jsx("h3",{children:"Application"}),r.jsx("p",{children:"Submit your online application along with required documents through our portal."}),r.jsx("a",{href:"#",className:"process-btn",children:"Apply Now →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"2"}),r.jsx("h3",{children:"Review"}),r.jsx("p",{children:"Our admissions committee will carefully evaluate your application and credentials."}),r.jsx("a",{href:"#",className:"process-btn",children:"Learn More →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"3"}),r.jsx("h3",{children:"Interview"}),r.jsx("p",{children:"Selected candidates will be invited for an interview (in-person or virtual)."}),r.jsx("a",{href:"#",className:"process-btn",children:"Prepare →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"4"}),r.jsx("h3",{children:"Decision"}),r.jsx("p",{children:"Receive your admission decision within 2-4 weeks of your interview."}),r.jsx("a",{href:"#",className:"process-btn",children:"Timeline →"})]})]}),r.jsx("h2",{className:"section-title",children:"Admission Details"}),r.jsx("p",{className:"section-tagline",children:"Key information to help you prepare your application"}),r.jsxs("div",{className:"details-grid",children:[r.jsxs("div",{className:"details-card",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-file-alt"})}),"Application Requirements"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Completed online application form"}),r.jsx("li",{children:"Bachelor's degree in relevant field with minimum 50% marks"}),r.jsx("li",{children:"Statement of purpose (500-1000 words)"}),r.jsx("li",{children:"Two letters of recommendation"}),r.jsx("li",{children:"Professional resume/CV"}),r.jsx("li",{children:"Application fee (waivers available)"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Download Checklist"})]}),r.jsxs("div",{className:"details-card important-dates",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-calendar-alt"})}),"Important Dates"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Jul 15 Fall Semester Deadline"}),r.jsx("li",{children:"Nov 15 Spring Semester Deadline"}),r.jsx("li",{children:"Apr 15 Summer Semester Deadline"}),r.jsx("li",{children:"Dec 1 Early Decision Deadline"}),r.jsx("li",{children:"Aug 20-25 Orientation Week"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Add to Calendar"})]}),r.jsxs("div",{className:"details-card",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-university"})}),"Tuition & Financial Aid"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Tuition: ₹1,50,000 per semester"}),r.jsx("li",{children:"Merit-based scholarships available"}),r.jsx("li",{children:"Research and teaching assistantships"}),r.jsx("li",{children:"Education loan partnerships"}),r.jsx("li",{children:"Flexible payment plans"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Financial Aid Information"})]})]}),r.jsxs("div",{className:"admissions-cta",children:[r.jsx("h3",{children:"Ready to take the next step?"}),r.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),r.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),r.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})})]}),bg=()=>{const[c,f]=M.useState(""),[d,o]=M.useState(!1),[m,v]=M.useState({name:"",email:"",phone:"",subject:"",message:""}),T=j=>{const{name:g,value:N}=j.target;v(_=>({..._,[g]:N}))},z=async j=>{if(j.preventDefault(),!m.name.trim()){f("Please enter your name."),setTimeout(()=>f(""),5e3);return}if(!m.email.trim()){f("Please enter your email address."),setTimeout(()=>f(""),5e3);return}if(!m.message.trim()){f("Please enter your message."),setTimeout(()=>f(""),5e3);return}if(!m.email.includes("@")){f("Please enter a valid email address."),setTimeout(()=>f(""),5e3);return}o(!0);try{await new Promise(g=>setTimeout(g,1500)),f("Your message has been sent successfully! We will get back to you soon."),v({name:"",email:"",phone:"",subject:"",message:""}),j.target.reset()}catch{f("Sorry, there was an error sending your message. Please try again.")}finally{o(!1),setTimeout(()=>f(""),5e3)}};return r.jsxs("section",{className:"form-page",children:[r.jsx("div",{className:"page-banner contact-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Get In Touch"}),r.jsx("p",{children:"We're here to help and answer any question you might have."})]})}),r.jsx("div",{className:"container",children:r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-info",children:[r.jsx("h3",{children:"Contact Information"}),r.jsx("p",{children:"Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below."}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-map-marker-alt"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Address"}),r.jsx("span",{children:"REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11."})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-envelope"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Email"}),r.jsx("span",{children:"admissions@igt.edu.in"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-clock"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Timing"}),r.jsx("span",{children:"Mon - Sat: 9:00 AM - 5:30 PM"})]})]}),r.jsx("div",{className:"info-item special",children:r.jsx("strong",{children:"A UNIT OF BRC"})}),r.jsxs("div",{className:"social-icons",children:[r.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:r.jsx("i",{className:"fab fa-twitter"})}),r.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:r.jsx("i",{className:"fab fa-youtube"})})]})]}),r.jsxs("div",{className:"form-container",children:[r.jsx("h3",{children:"Send Us a Message"}),r.jsxs("form",{onSubmit:z,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"name",children:"Your Name"}),r.jsx("input",{type:"text",id:"name",name:"name",value:m.name,onChange:T,required:!0,placeholder:"Enter your full name"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"email",children:"Email Address"}),r.jsx("input",{type:"email",id:"email",name:"email",value:m.email,onChange:T,required:!0,placeholder:"Enter your email address"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"phone",children:"Phone Number"}),r.jsx("input",{type:"tel",id:"phone",name:"phone",value:m.phone,onChange:T,placeholder:"Enter your phone number"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"subject",children:"Subject"}),r.jsx("input",{type:"text",id:"subject",name:"subject",value:m.subject,onChange:T,placeholder:"What is this regarding?"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"message",children:"Your Message"}),r.jsx("textarea",{id:"message",name:"message",value:m.message,onChange:T,required:!0,placeholder:"Tell us how we can help you",rows:5})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:d,children:d?r.jsxs(r.Fragment,{children:[r.jsx("i",{className:"fas fa-spinner fa-spin"}),"Sending..."]}):"Send Message"}),c&&r.jsx("div",{className:`form-message ${c.includes("error")?"error":"success"}`,children:c})]})]})]})})]})},vg=()=>{const[c,f]=M.useState(""),d=o=>{o.preventDefault(),f("Your tour has been scheduled successfully!"),setTimeout(()=>f(""),5e3),o.target.reset()};return r.jsxs("section",{className:"form-page",children:[r.jsx("div",{className:"page-banner tour-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Schedule a Campus Tour"}),r.jsx("p",{children:"We would love to show you around our campus."})]})}),r.jsx("div",{className:"container",children:r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-info",children:[r.jsx("h3",{children:"Visit Us"}),r.jsx("p",{children:"Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT."}),r.jsxs("div",{className:"info-item",children:[r.jsxs("strong",{children:[r.jsx("i",{className:"fas fa-clock"})," Tour Hours"]}),r.jsx("span",{children:"Monday - Friday: 10:00 AM - 4:00 PM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsxs("strong",{children:[r.jsx("i",{className:"fas fa-map-marker-alt"})," Location"]}),r.jsx("span",{children:"123 Tech Avenue, Innovation City"})]})]}),r.jsxs("div",{className:"form-container",children:[r.jsx("h3",{children:"Book Your Visit"}),r.jsxs("form",{onSubmit:d,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"name",children:"Your Name"}),r.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"email",children:"Email Address"}),r.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"date",children:"Preferred Date"}),r.jsx("input",{type:"date",id:"date",name:"date",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"time",children:"Preferred Time"}),r.jsx("input",{type:"time",id:"time",name:"time",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"guests",children:"Number of Guests"}),r.jsxs("select",{id:"guests",name:"guests",children:[r.jsx("option",{children:"1"}),r.jsx("option",{children:"2"}),r.jsx("option",{children:"3"}),r.jsx("option",{children:"4"}),r.jsx("option",{children:"5+"})]})]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"Schedule Tour"}),c&&r.jsx("div",{className:"form-message success",children:c})]})]})]})})]})},yg=()=>r.jsx("section",{id:"academic-programs",className:"academic-programs",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Academic Programs"}),r.jsx("p",{className:"section-subtitle",children:"Explore our diverse range of postgraduate diploma programs in emerging technologies"}),r.jsxs("div",{className:"programs-grid",children:[r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg",alt:"AI & Management"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"EU ACC Certificate Program in AI & Management"}),r.jsx("p",{children:"Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-certificate"}),r.jsx("span",{children:"Certificate Program"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"1st Sep - 30th Sep 2025"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"AR VR Technology"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"EU ACC Master Program in AR & VR Technology"}),r.jsx("p",{children:"Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-building"}),r.jsx("span",{children:"100+ Industrial Partners"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-hands-helping"}),r.jsx("span",{children:"10+ Hands-on Projects"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Agri Drones"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Agri Drones"}),r.jsx("p",{children:"Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Medical Robotics"}),r.jsx("p",{children:"Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration."}),r.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agri Robotics"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Agri Robotics"}),r.jsx("p",{children:"Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems."}),r.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]})]})]})}),Sg=()=>r.jsx("section",{id:"upcoming-courses",className:"upcoming-courses",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"courses-header",children:[r.jsx("div",{className:"expand-knowledge",children:"EXPAND YOUR KNOWLEDGE"}),r.jsx("h2",{children:"Upcoming Courses"}),r.jsx("p",{className:"section-subtitle",children:"Discover our latest course offerings designed to keep you at the forefront of technology"})]}),r.jsxs("div",{className:"courses-grid",children:[r.jsxs("div",{className:"course-card featured",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://agmay.in/images/manufacturing.webp",alt:"Drone Manufacturing"}),r.jsx("div",{className:"course-badge",children:"Featured"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Drone Manufacturing"}),r.jsx("p",{children:"Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),r.jsxs("div",{className:"course-card",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"}),r.jsx("div",{className:"course-badge",children:"Popular"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Medical Robotics"}),r.jsx("p",{children:"Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),r.jsxs("div",{className:"course-card",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agriculture Robotics"}),r.jsx("div",{className:"course-badge",children:"New"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Agriculture Robotics"}),r.jsx("p",{children:"Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-details-blue",children:"Details"})]})]})]}),r.jsx("div",{className:"view-all-courses",children:r.jsx("button",{className:"btn-view-all",children:"View All Upcoming Courses"})})]})}),jg=()=>r.jsx("section",{id:"research",className:"research-projects",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Ongoing Research Projects"}),r.jsx("p",{className:"section-subtitle",children:"Explore our cutting-edge research initiatives across various technology domains"}),r.jsxs("div",{className:"research-grid",children:[r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI-Powered Predictive Maintenance"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"AI-Powered Predictive Maintenance"}),r.jsx("p",{children:"Developing AI models for predictive maintenance of industrial equipment to reduce downtime."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conversational AI Assistant"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Conversational AI Assistant"}),r.jsx("p",{children:"Creating an AI assistant for mental health support and counseling services."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=",alt:"Automated Disease Detection"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Automated Disease Detection"}),r.jsx("p",{children:"Using deep learning for automated detection of diseases in medical images."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Point-of-Care Diagnostic Device"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Point-of-Care Diagnostic Device"}),r.jsx("p",{children:"Developing portable diagnostic tools for rapid detection of infectious diseases."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Smart Grid Systems"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Smart Grid Systems"}),r.jsx("p",{children:"Creating intelligent grid systems for efficient energy distribution and management."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=",alt:"EV Charging Infrastructure"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"EV Charging Infrastructure"}),r.jsx("p",{children:"Designing urban electric vehicle charging networks for sustainable transportation."})]})]})]})]})}),Ag=()=>{const[c,f]=M.useState("conferences"),d=()=>{switch(c){case"conferences":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conference Hall"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"International Conference on AI & Robotics"}),r.jsx("p",{children:"Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Virtual & On-campus"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"People collaborating"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Tech for Sustainable Development"}),r.jsx("p",{children:"Exploring technological solutions for achieving sustainable development goals."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Main Campus"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agri-Tech"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Future of Agri-Tech"}),r.jsx("p",{children:"Conference focusing on emerging technologies in agriculture and food production."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Agricultural Research Center"})]})]})]})]});case"webinars":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone in flight"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Introduction to Drone Technology"}),r.jsx("p",{children:"Free webinar covering basics of drone technology and its industrial applications."})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI and ML concept"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Career in AI & ML"}),r.jsx("p",{children:"Webinar discussing career opportunities and skill requirements in AI/ML fields."})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Precision agriculture"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Precision Agriculture Techniques"}),r.jsx("p",{children:"Learn about modern precision farming methods using IoT and data analytics."})]})]})]});case"courses":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone piloting"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Certificate in Drone Piloting"}),r.jsx("p",{children:"3-month program covering drone operation, regulations, and commercial applications."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"DGCA Approved"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Business analytics dashboard"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"AI for Business Professionals"}),r.jsx("p",{children:"6-week certificate course on AI applications for non-technical business leaders."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"Industry Recognized"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"IoT circuit board"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"IoT Fundamentals"}),r.jsx("p",{children:"8-week hands-on course on Internet of Things concepts and implementation."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"With Lab Access"})]})]})]})]});default:return null}};return r.jsx("section",{id:"events",className:"events-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Conferences, Webinars & Certificate Courses"}),r.jsx("p",{className:"section-subtitle",children:"Participate in our knowledge-sharing events and short-term certification programs"}),r.jsxs("div",{className:"events-tabs",children:[r.jsx("button",{onClick:()=>f("conferences"),className:`tab-btn ${c==="conferences"?"active":""}`,children:"Conferences"}),r.jsx("button",{onClick:()=>f("webinars"),className:`tab-btn ${c==="webinars"?"active":""}`,children:"Webinars"}),r.jsx("button",{onClick:()=>f("courses"),className:`tab-btn ${c==="courses"?"active":""}`,children:"Certificate Courses"})]}),d()]})})},Eg=()=>{const[c,f]=M.useState(""),d=m=>{m.preventDefault(),f("Thank you for subscribing!"),setTimeout(()=>f(""),5e3),m.target.reset()},o=new Date().getFullYear();return r.jsx("footer",{id:"contact",className:"site-footer",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"footer-grid",children:[r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"About Institute of Global Technology"}),r.jsx("p",{children:"Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields."}),r.jsx("p",{children:r.jsx("strong",{children:"Accredited by AIAB Europe"})}),r.jsxs("div",{className:"social-icons",children:[r.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:r.jsx("i",{className:"fab fa-twitter"})}),r.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:r.jsx("i",{className:"fab fa-youtube"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Quick Links"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Pe,{to:"/",className:"footer-nav-link",children:"Home"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/programs",className:"footer-nav-link",children:"Academic Programs"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/departments",className:"footer-nav-link",children:"Research Departments"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/faculty",className:"footer-nav-link",children:"Faculty"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/admissions",className:"footer-nav-link",children:"Admissions"})}),r.jsx("li",{children:r.jsx(Pe,{to:"/contact",className:"footer-nav-link",children:"Contact"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Academic Programs"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Robotics & AI"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Precision Agriculture"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Drone Technology"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Healthcare & Life Sciences"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Emerging Technologies"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Research Opportunities"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Newsletter"}),r.jsx("p",{children:"Subscribe to our newsletter to receive updates on events, admissions, and institute news."}),r.jsxs("form",{className:"newsletter-form",onSubmit:d,children:[r.jsx("input",{type:"email",placeholder:"Enter your email address",required:!0,"aria-label":"Email address for newsletter"}),r.jsx("button",{type:"submit","aria-label":"Subscribe to newsletter",children:r.jsx("i",{className:"fas fa-paper-plane"})})]}),c&&r.jsx("p",{className:"newsletter-message",children:c}),r.jsx("p",{className:"newsletter-note",children:"We respect your privacy. Unsubscribe at any time."})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsxs("div",{className:"footer-bottom-content",children:[r.jsxs("span",{children:["© ",o," Institute of Global Technology. All Rights Reserved."]}),r.jsxs("div",{className:"footer-bottom-links",children:[r.jsx("a",{href:"#","aria-label":"Terms of Use",children:"Terms of Use"}),r.jsx("a",{href:"#","aria-label":"Privacy Policy",children:"Privacy Policy"}),r.jsx("a",{href:"#","aria-label":"Accessibility",children:"Accessibility"}),r.jsx("a",{href:"#","aria-label":"Contact Support",children:"Support"})]})]})})]})})},Ng=()=>r.jsxs(r.Fragment,{children:[r.jsx(fg,{}),r.jsx(dg,{}),r.jsx(hg,{}),r.jsx(yg,{}),r.jsx(Sg,{}),r.jsx(jg,{}),r.jsx(Ag,{})]}),Tg=[{name:"AI & Machine Learning",description:"Developing AI and ML algorithms, models, and applications for various industries.",researchAreas:["Natural Language Processing","Computer Vision","Predictive Analytics","Robotics"],image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg"},{name:"Cybersecurity",description:"Investigating cybersecurity threats, vulnerabilities, and countermeasures.",researchAreas:["Threat Intelligence","Incident Response","Cryptography","Network Security"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Data Science & Analytics",description:"Developing data-driven solutions for insights and decision-making.",researchAreas:["Big Data Analytics","Data Visualization","Predictive Modelling","Statistical Analysis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"IoT & Edge Computing",description:"Designing and implementing IoT systems and edge computing architectures.",researchAreas:["IoT Security","Edge AI","Real-time Analytics","Industrial Automation"],image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp"},{name:"Sustainable Energy",description:"Investigating sustainable energy solutions and climate change mitigation.",researchAreas:["Renewable Energy","Energy Storage","Green Buildings","Sustainable Infrastructure"],image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Biotechnology & Healthcare",description:"Developing innovative solutions for healthcare and medicine.",researchAreas:["Personalized Medicine","Regenerative Medicine","Gene Editing","Medical Imaging"],image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"},{name:"Robotics & Autonomous Systems",description:"Designing advanced robotic systems and autonomous vehicles.",researchAreas:["Robotics","Autonomous Systems","Human-Robot Interaction","Swarm Robotics"],image:"https://media.licdn.com/dms/image/v2/D5612AQFLdebIV4BTYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721157098257?e=1761782400&v=beta&t=yLMm79DcuvTBA2jgbmubv_CMdyNlY8RQ8Kli_bTzNMo"},{name:"Advanced Materials",description:"Investigating novel materials and manufacturing processes.",researchAreas:["Nanomaterials","Biomaterials","3D Printing","Advanced Manufacturing"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Human-Computer Interaction",description:"Developing user-centered interfaces and experiences.",researchAreas:["User Experience Design","Human-Computer Interaction","Accessibility","Usability"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Zoology & Animal Biotechnology",description:"Exploring the genetic and cellular aspects of animals for sustainable development.",researchAreas:["Animal Genetics","Cellular Biotechnology","Wildlife Conservation","Veterinary Applications"],image:"https://i.ibb.co/WNZ4GPQ1/download-11.jpg"},{name:"Botany & Plant Biotechnology",description:"Advancing plant science through genetic engineering and sustainable agriculture.",researchAreas:["Plant Tissue Culture","Genetically Modified Crops","Medicinal Plants","Agro-biotechnology"],image:"https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg"},{name:"Quantum Computing",description:"Exploring quantum computing and emerging technologies.",researchAreas:["Quantum Algorithms","Quantum Applications","Blockchain","Distributed Ledger Tech"],image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}],Rg=()=>r.jsxs("section",{className:"departments-page",children:[r.jsx("div",{className:"page-banner departments-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Research Departments"}),r.jsx("p",{children:"Explore our specialized research departments that are pushing the boundaries of knowledge and innovation"})]})}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"department-grid",children:Tg.map((c,f)=>r.jsxs("div",{className:"department-card",children:[r.jsx("img",{src:c.image,alt:c.name}),r.jsxs("div",{className:"department-card-content",children:[r.jsx("h3",{children:c.name}),r.jsx("p",{children:c.description}),r.jsx("strong",{children:"Research Areas:"}),r.jsx("ul",{children:c.researchAreas.map((d,o)=>r.jsx("li",{children:d},o))}),r.jsx("a",{href:"#",children:"Explore Department"})]})]},f))})})]}),wg=[{name:"Dr Ipseeta Nanda",title:"Hon.Director Dean IGT",bio:"With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.",image:"https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Rahul Vadiseety",title:"Director AI",bio:"Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.",image:"https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr. Rath Satyasambit",title:"Director Robotics",bio:"Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",image:"https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Harshichander",title:"Director Biology",bio:"Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.",image:"https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png",social:{email:"#",linkedin:"#",scholar:"#"}}],Mg=()=>r.jsxs("section",{className:"faculty-page",children:[r.jsxs("div",{className:"faculty-header",children:[r.jsx("h2",{children:"Our Distinguished Faculty"}),r.jsx("p",{children:"Meet our accomplished faculty members who are experts in their fields and dedicated to student success."})]}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"faculty-grid",children:wg.map((c,f)=>r.jsx("div",{className:"faculty-box",children:r.jsxs("div",{className:"faculty-card",children:[r.jsx("img",{src:c.image,alt:`Portrait of ${c.name}`,className:"faculty-image"}),r.jsxs("div",{className:"faculty-content",children:[r.jsx("h3",{children:c.name}),r.jsx("span",{className:"title",children:c.title}),r.jsx("p",{children:c.bio}),r.jsxs("div",{className:"faculty-social",children:[r.jsx("a",{href:c.social.email,"aria-label":"Email",children:r.jsx("i",{className:"fas fa-envelope"})}),r.jsx("a",{href:c.social.linkedin,"aria-label":"LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:c.social.scholar,"aria-label":"Google Scholar",children:r.jsx("i",{className:"ai ai-google-scholar"})})]})]})]})},f))})})]}),Dg=()=>{const c=ja();return M.useEffect(()=>{window.scrollTo(0,0)},[c.pathname]),r.jsxs(r.Fragment,{children:[r.jsx(ug,{}),r.jsx(sg,{}),r.jsx(og,{activePage:c.pathname}),r.jsx("main",{children:r.jsxs(M0,{children:[r.jsx(Sa,{path:"/",element:r.jsx(Ng,{})}),r.jsx(Sa,{path:"/programs",element:r.jsx(gg,{})}),r.jsx(Sa,{path:"/departments",element:r.jsx(Rg,{})}),r.jsx(Sa,{path:"/faculty",element:r.jsx(Mg,{})}),r.jsx(Sa,{path:"/admissions",element:r.jsx(xg,{})}),r.jsx(Sa,{path:"/contact",element:r.jsx(bg,{})}),r.jsx(Sa,{path:"/tour",element:r.jsx(vg,{})})]})}),r.jsx(Eg,{})]})};function zg(){return r.jsx(I0,{children:r.jsx(Dg,{})})}Bp.createRoot(document.getElementById("root")).render(r.jsx(Dp.StrictMode,{children:r.jsx(zg,{})}));
