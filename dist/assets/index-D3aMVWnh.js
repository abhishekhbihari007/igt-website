(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const N of b.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&u(N)}).observe(document,{childList:!0,subtree:!0});function d(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(m){if(m.ep)return;m.ep=!0;const b=d(m);fetch(m.href,b)}})();function Kd(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var bs={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function zp(){if(zd)return Ml;zd=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(u,m,b){var N=null;if(b!==void 0&&(N=""+b),m.key!==void 0&&(N=""+m.key),"key"in m){b={};for(var z in m)z!=="key"&&(b[z]=m[z])}else b=m;return m=b.ref,{$$typeof:o,type:u,key:N,ref:m!==void 0?m:null,props:b}}return Ml.Fragment=f,Ml.jsx=d,Ml.jsxs=d,Ml}var Dd;function Dp(){return Dd||(Dd=1,bs.exports=zp()),bs.exports}var r=Dp(),vs={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function Op(){if(Od)return te;Od=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),_=Symbol.iterator;function U(g){return g===null||typeof g!="object"?null:(g=_&&g[_]||g["@@iterator"],typeof g=="function"?g:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,W={};function k(g,C,Y){this.props=g,this.context=C,this.refs=W,this.updater=Y||G}k.prototype.isReactComponent={},k.prototype.setState=function(g,C){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,C,"setState")},k.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function V(){}V.prototype=k.prototype;function L(g,C,Y){this.props=g,this.context=C,this.refs=W,this.updater=Y||G}var ee=L.prototype=new V;ee.constructor=L,Q(ee,k.prototype),ee.isPureReactComponent=!0;var je=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function ze(g,C,Y,H,Z,oe){return Y=oe.ref,{$$typeof:o,type:g,key:C,ref:Y!==void 0?Y:null,props:oe}}function _e(g,C){return ze(g.type,C,void 0,void 0,void 0,g.props)}function Ae(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Pe(g){var C={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Y){return C[Y]})}var ut=/\/+/g;function Ge(g,C){return typeof g=="object"&&g!==null&&g.key!=null?Pe(""+g.key):C.toString(36)}function Aa(){}function wa(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Aa,Aa):(g.status="pending",g.then(function(C){g.status==="pending"&&(g.status="fulfilled",g.value=C)},function(C){g.status==="pending"&&(g.status="rejected",g.reason=C)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Xe(g,C,Y,H,Z){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var P=!1;if(g===null)P=!0;else switch(oe){case"bigint":case"string":case"number":P=!0;break;case"object":switch(g.$$typeof){case o:case f:P=!0;break;case A:return P=g._init,Xe(P(g._payload),C,Y,H,Z)}}if(P)return Z=Z(g),P=H===""?"."+Ge(g,0):H,je(Z)?(Y="",P!=null&&(Y=P.replace(ut,"$&/")+"/"),Xe(Z,C,Y,"",function(Wt){return Wt})):Z!=null&&(Ae(Z)&&(Z=_e(Z,Y+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(ut,"$&/")+"/")+P)),C.push(Z)),1;P=0;var et=H===""?".":H+":";if(je(g))for(var be=0;be<g.length;be++)H=g[be],oe=et+Ge(H,be),P+=Xe(H,C,Y,oe,Z);else if(be=U(g),typeof be=="function")for(g=be.call(g),be=0;!(H=g.next()).done;)H=H.value,oe=et+Ge(H,be++),P+=Xe(H,C,Y,oe,Z);else if(oe==="object"){if(typeof g.then=="function")return Xe(wa(g),C,Y,H,Z);throw C=String(g),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return P}function M(g,C,Y){if(g==null)return g;var H=[],Z=0;return Xe(g,H,"","",function(oe){return C.call(Y,oe,Z++)}),H}function q(g){if(g._status===-1){var C=g._result;C=C(),C.then(function(Y){(g._status===0||g._status===-1)&&(g._status=1,g._result=Y)},function(Y){(g._status===0||g._status===-1)&&(g._status=2,g._result=Y)}),g._status===-1&&(g._status=0,g._result=C)}if(g._status===1)return g._result.default;throw g._result}var J=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function pe(){}return te.Children={map:M,forEach:function(g,C,Y){M(g,function(){C.apply(this,arguments)},Y)},count:function(g){var C=0;return M(g,function(){C++}),C},toArray:function(g){return M(g,function(C){return C})||[]},only:function(g){if(!Ae(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=k,te.Fragment=d,te.Profiler=m,te.PureComponent=L,te.StrictMode=u,te.Suspense=y,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,te.__COMPILER_RUNTIME={__proto__:null,c:function(g){return I.H.useMemoCache(g)}},te.cache=function(g){return function(){return g.apply(null,arguments)}},te.cloneElement=function(g,C,Y){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=Q({},g.props),Z=g.key,oe=void 0;if(C!=null)for(P in C.ref!==void 0&&(oe=void 0),C.key!==void 0&&(Z=""+C.key),C)!Ce.call(C,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&C.ref===void 0||(H[P]=C[P]);var P=arguments.length-2;if(P===1)H.children=Y;else if(1<P){for(var et=Array(P),be=0;be<P;be++)et[be]=arguments[be+2];H.children=et}return ze(g.type,Z,void 0,void 0,oe,H)},te.createContext=function(g){return g={$$typeof:N,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},te.createElement=function(g,C,Y){var H,Z={},oe=null;if(C!=null)for(H in C.key!==void 0&&(oe=""+C.key),C)Ce.call(C,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Z[H]=C[H]);var P=arguments.length-2;if(P===1)Z.children=Y;else if(1<P){for(var et=Array(P),be=0;be<P;be++)et[be]=arguments[be+2];Z.children=et}if(g&&g.defaultProps)for(H in P=g.defaultProps,P)Z[H]===void 0&&(Z[H]=P[H]);return ze(g,oe,void 0,void 0,null,Z)},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:z,render:g}},te.isValidElement=Ae,te.lazy=function(g){return{$$typeof:A,_payload:{_status:-1,_result:g},_init:q}},te.memo=function(g,C){return{$$typeof:p,type:g,compare:C===void 0?null:C}},te.startTransition=function(g){var C=I.T,Y={};I.T=Y;try{var H=g(),Z=I.S;Z!==null&&Z(Y,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(pe,J)}catch(oe){J(oe)}finally{I.T=C}},te.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},te.use=function(g){return I.H.use(g)},te.useActionState=function(g,C,Y){return I.H.useActionState(g,C,Y)},te.useCallback=function(g,C){return I.H.useCallback(g,C)},te.useContext=function(g){return I.H.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g,C){return I.H.useDeferredValue(g,C)},te.useEffect=function(g,C,Y){var H=I.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(g,C)},te.useId=function(){return I.H.useId()},te.useImperativeHandle=function(g,C,Y){return I.H.useImperativeHandle(g,C,Y)},te.useInsertionEffect=function(g,C){return I.H.useInsertionEffect(g,C)},te.useLayoutEffect=function(g,C){return I.H.useLayoutEffect(g,C)},te.useMemo=function(g,C){return I.H.useMemo(g,C)},te.useOptimistic=function(g,C){return I.H.useOptimistic(g,C)},te.useReducer=function(g,C,Y){return I.H.useReducer(g,C,Y)},te.useRef=function(g){return I.H.useRef(g)},te.useState=function(g){return I.H.useState(g)},te.useSyncExternalStore=function(g,C,Y){return I.H.useSyncExternalStore(g,C,Y)},te.useTransition=function(){return I.H.useTransition()},te.version="19.1.1",te}var Cd;function Rs(){return Cd||(Cd=1,vs.exports=Op()),vs.exports}var T=Rs();const Cp=Kd(T);var ys={exports:{}},zl={},js={exports:{}},Ss={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function _p(){return _d||(_d=1,(function(o){function f(M,q){var J=M.length;M.push(q);e:for(;0<J;){var pe=J-1>>>1,g=M[pe];if(0<m(g,q))M[pe]=q,M[J]=g,J=pe;else break e}}function d(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var q=M[0],J=M.pop();if(J!==q){M[0]=J;e:for(var pe=0,g=M.length,C=g>>>1;pe<C;){var Y=2*(pe+1)-1,H=M[Y],Z=Y+1,oe=M[Z];if(0>m(H,J))Z<g&&0>m(oe,H)?(M[pe]=oe,M[Z]=J,pe=Z):(M[pe]=H,M[Y]=J,pe=Y);else if(Z<g&&0>m(oe,J))M[pe]=oe,M[Z]=J,pe=Z;else break e}}return q}function m(M,q){var J=M.sortIndex-q.sortIndex;return J!==0?J:M.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;o.unstable_now=function(){return b.now()}}else{var N=Date,z=N.now();o.unstable_now=function(){return N.now()-z}}var y=[],p=[],A=1,_=null,U=3,G=!1,Q=!1,W=!1,k=!1,V=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function je(M){for(var q=d(p);q!==null;){if(q.callback===null)u(p);else if(q.startTime<=M)u(p),q.sortIndex=q.expirationTime,f(y,q);else break;q=d(p)}}function I(M){if(W=!1,je(M),!Q)if(d(y)!==null)Q=!0,Ce||(Ce=!0,Ge());else{var q=d(p);q!==null&&Xe(I,q.startTime-M)}}var Ce=!1,ze=-1,_e=5,Ae=-1;function Pe(){return k?!0:!(o.unstable_now()-Ae<_e)}function ut(){if(k=!1,Ce){var M=o.unstable_now();Ae=M;var q=!0;try{e:{Q=!1,W&&(W=!1,L(ze),ze=-1),G=!0;var J=U;try{t:{for(je(M),_=d(y);_!==null&&!(_.expirationTime>M&&Pe());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,U=_.priorityLevel;var g=pe(_.expirationTime<=M);if(M=o.unstable_now(),typeof g=="function"){_.callback=g,je(M),q=!0;break t}_===d(y)&&u(y),je(M)}else u(y);_=d(y)}if(_!==null)q=!0;else{var C=d(p);C!==null&&Xe(I,C.startTime-M),q=!1}}break e}finally{_=null,U=J,G=!1}q=void 0}}finally{q?Ge():Ce=!1}}}var Ge;if(typeof ee=="function")Ge=function(){ee(ut)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,wa=Aa.port2;Aa.port1.onmessage=ut,Ge=function(){wa.postMessage(null)}}else Ge=function(){V(ut,0)};function Xe(M,q){ze=V(function(){M(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(M){switch(U){case 1:case 2:case 3:var q=3;break;default:q=U}var J=U;U=q;try{return M()}finally{U=J}},o.unstable_requestPaint=function(){k=!0},o.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var J=U;U=M;try{return q()}finally{U=J}},o.unstable_scheduleCallback=function(M,q,J){var pe=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,M){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=J+g,M={id:A++,callback:q,priorityLevel:M,startTime:J,expirationTime:g,sortIndex:-1},J>pe?(M.sortIndex=J,f(p,M),d(y)===null&&M===d(p)&&(W?(L(ze),ze=-1):W=!0,Xe(I,J-pe))):(M.sortIndex=g,f(y,M),Q||G||(Q=!0,Ce||(Ce=!0,Ge()))),M},o.unstable_shouldYield=Pe,o.unstable_wrapCallback=function(M){var q=U;return function(){var J=U;U=q;try{return M.apply(this,arguments)}finally{U=J}}}})(Ss)),Ss}var Ud;function Up(){return Ud||(Ud=1,js.exports=_p()),js.exports}var As={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Hp(){if(Hd)return Ze;Hd=1;var o=Rs();function f(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)p+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(y,p,A){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:_==null?null:""+_,children:y,containerInfo:p,implementation:A}}var N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ze.createPortal=function(y,p){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return b(y,p,null,A)},Ze.flushSync=function(y){var p=N.T,A=u.p;try{if(N.T=null,u.p=2,y)return y()}finally{N.T=p,u.p=A,u.d.f()}},Ze.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(y,p))},Ze.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},Ze.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var A=p.as,_=z(A,p.crossOrigin),U=typeof p.integrity=="string"?p.integrity:void 0,G=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;A==="style"?u.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:U,fetchPriority:G}):A==="script"&&u.d.X(y,{crossOrigin:_,integrity:U,fetchPriority:G,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ze.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var A=z(p.as,p.crossOrigin);u.d.M(y,{crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(y)},Ze.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var A=p.as,_=z(A,p.crossOrigin);u.d.L(y,A,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ze.preloadModule=function(y,p){if(typeof y=="string")if(p){var A=z(p.as,p.crossOrigin);u.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(y)},Ze.requestFormReset=function(y){u.d.r(y)},Ze.unstable_batchedUpdates=function(y,p){return y(p)},Ze.useFormState=function(y,p,A){return N.H.useFormState(y,p,A)},Ze.useFormStatus=function(){return N.H.useHostTransitionStatus()},Ze.version="19.1.1",Ze}var qd;function qp(){if(qd)return As.exports;qd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),As.exports=Hp(),As.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Yp(){if(Yd)return zl;Yd=1;var o=Up(),f=Rs(),d=qp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function N(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(b(e)!==e)throw Error(u(188))}function y(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return z(l),e;if(i===n)return z(l),t;i=i.sibling}throw Error(u(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,c=l.child;c;){if(c===a){s=!0,a=l,n=i;break}if(c===n){s=!0,n=l,a=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===a){s=!0,a=i,n=l;break}if(c===n){s=!0,n=i,a=l;break}c=c.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,_=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var Aa=Symbol.for("react.client.reference");function wa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Aa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case k:return"Profiler";case W:return"StrictMode";case I:return"Suspense";case Ce:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:wa(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return wa(e(t))}catch{}}return null}var Xe=Array.isArray,M=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],g=-1;function C(e){return{current:e}}function Y(e){0>g||(e.current=pe[g],pe[g]=null,g--)}function H(e,t){g++,pe[g]=e.current,e.current=t}var Z=C(null),oe=C(null),P=C(null),et=C(null);function be(e,t){switch(H(P,t),H(oe,e),H(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ld(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ld(t),e=id(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Z),H(Z,e)}function Wt(){Y(Z),Y(oe),Y(P)}function ar(e){e.memoizedState!==null&&H(et,e);var t=Z.current,a=id(t,e.type);t!==a&&(H(oe,e),H(Z,a))}function Ul(e){oe.current===e&&(Y(Z),Y(oe)),et.current===e&&(Y(et),wl._currentValue=J)}var nr=Object.prototype.hasOwnProperty,lr=o.unstable_scheduleCallback,ir=o.unstable_cancelCallback,sm=o.unstable_shouldYield,cm=o.unstable_requestPaint,Nt=o.unstable_now,um=o.unstable_getCurrentPriorityLevel,qs=o.unstable_ImmediatePriority,Ys=o.unstable_UserBlockingPriority,Hl=o.unstable_NormalPriority,fm=o.unstable_LowPriority,Bs=o.unstable_IdlePriority,dm=o.log,mm=o.unstable_setDisableYieldValue,On=null,tt=null;function It(e){if(typeof dm=="function"&&mm(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(On,e)}catch{}}var at=Math.clz32?Math.clz32:gm,hm=Math.log,pm=Math.LN2;function gm(e){return e>>>=0,e===0?32:31-(hm(e)/pm|0)|0}var ql=256,Yl=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~i,n!==0?l=Na(n):(s&=c,s!==0?l=Na(s):a||(a=c&~e,a!==0&&(l=Na(a))))):(c=n&~i,c!==0?l=Na(c):s!==0?l=Na(s):a||(a=n&~e,a!==0&&(l=Na(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ks(){var e=ql;return ql<<=1,(ql&4194048)===0&&(ql=256),e}function Ls(){var e=Yl;return Yl<<=1,(Yl&62914560)===0&&(Yl=4194304),e}function rr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bm(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,h=e.expirationTimes,S=e.hiddenUpdates;for(a=s&~a;0<a;){var R=31-at(a),O=1<<R;c[R]=0,h[R]=-1;var w=S[R];if(w!==null)for(S[R]=null,R=0;R<w.length;R++){var E=w[R];E!==null&&(E.lane&=-536870913)}a&=~O}n!==0&&Gs(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function Gs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-at(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Xs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-at(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function or(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:wd(e.type))}function vm(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var Pt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Pt,Fe="__reactProps$"+Pt,Xa="__reactContainer$"+Pt,cr="__reactEvents$"+Pt,ym="__reactListeners$"+Pt,jm="__reactHandles$"+Pt,Vs="__reactResources$"+Pt,Un="__reactMarker$"+Pt;function ur(e){delete e[Qe],delete e[Fe],delete e[cr],delete e[ym],delete e[jm]}function Qa(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Qe])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Qe]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Hn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Za(e){var t=e[Vs];return t||(t=e[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Un]=!0}var Zs=new Set,Ks={};function Ea(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Ks[e]=t,e=0;e<t.length;e++)Zs.add(t[e])}var Sm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fs={},Js={};function Am(e){return nr.call(Js,e)?!0:nr.call(Fs,e)?!1:Sm.test(e)?Js[e]=!0:(Fs[e]=!0,!1)}function kl(e,t,a){if(Am(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ll(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var fr,$s;function Fa(e){if(fr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fr=t&&t[1]||"",$s=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+e+$s}var dr=!1;function mr(e,t){if(!e||dr)return"";dr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(E){var w=E}Reflect.construct(e,[],O)}else{try{O.call()}catch(E){w=E}e.call(O.prototype)}}else{try{throw Error()}catch(E){w=E}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(E){if(E&&w&&typeof E.stack=="string")return[E.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],c=i[1];if(s&&c){var h=s.split(`
`),S=c.split(`
`);for(l=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;if(n===h.length||l===S.length)for(n=h.length-1,l=S.length-1;1<=n&&0<=l&&h[n]!==S[l];)l--;for(;1<=n&&0<=l;n--,l--)if(h[n]!==S[l]){if(n!==1||l!==1)do if(n--,l--,0>l||h[n]!==S[l]){var R=`
`+h[n].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=n&&0<=l);break}}}finally{dr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Fa(a):""}function wm(e){switch(e.tag){case 26:case 27:case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return mr(e.type,!1);case 11:return mr(e.type.render,!1);case 1:return mr(e.type,!0);case 31:return Fa("Activity");default:return""}}function Ws(e){try{var t="";do t+=wm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nm(e){var t=Is(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gl(e){e._valueTracker||(e._valueTracker=Nm(e))}function Ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Is(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Em=/[\n"\\]/g;function dt(e){return e.replace(Em,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hr(e,t,a,n,l,i,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?pr(e,s,ft(t)):a!=null?pr(e,s,ft(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ft(c):e.removeAttribute("name")}function ec(e,t,a,n,l,i,s,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function pr(e,t,a){t==="number"&&Xl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function tc(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function ac(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(Xe(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Tm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Tm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function lc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&nc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&nc(e,i,t[i])}function gr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(e){return Mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xr=null;function br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Ia=null;function ic(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(hr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[Fe]||null;if(!l)throw Error(u(90));hr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ps(n)}break e;case"textarea":tc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var vr=!1;function rc(e,t,a){if(vr)return e(t,a);vr=!0;try{var n=e(t);return n}finally{if(vr=!1,(Wa!==null||Ia!==null)&&(Mi(),Wa&&(t=Wa,e=Ia,Ia=Wa=null,ic(t),e)))for(t=0;t<e.length;t++)ic(e[t])}}function qn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Fe]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(_t)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){yr=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{yr=!1}var ea=null,jr=null,Vl=null;function oc(){if(Vl)return Vl;var e,t=jr,a=t.length,n,l="value"in ea?ea.value:ea.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return Vl=l.slice(e,1<n?1-n:void 0)}function Zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kl(){return!0}function sc(){return!1}function Je(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kl:sc,this.isPropagationStopped=sc,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Je(Ta),Bn=A({},Ta,{view:0,detail:0}),zm=Je(Bn),Sr,Ar,kn,Jl=A({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Sr=e.screenX-kn.screenX,Ar=e.screenY-kn.screenY):Ar=Sr=0,kn=e),Sr)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),cc=Je(Jl),Dm=A({},Jl,{dataTransfer:0}),Om=Je(Dm),Cm=A({},Bn,{relatedTarget:0}),wr=Je(Cm),_m=A({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=Je(_m),Hm=A({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qm=Je(Hm),Ym=A({},Ta,{data:0}),uc=Je(Ym),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lm[e])?!!t[e]:!1}function Nr(){return Gm}var Xm=A({},Bn,{key:function(e){if(e.key){var t=Bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nr,charCode:function(e){return e.type==="keypress"?Zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qm=Je(Xm),Vm=A({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=Je(Vm),Zm=A({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nr}),Km=Je(Zm),Fm=A({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=Je(Fm),$m=A({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wm=Je($m),Im=A({},Ta,{newState:0,oldState:0}),Pm=Je(Im),eh=[9,13,27,32],Er=_t&&"CompositionEvent"in window,Ln=null;_t&&"documentMode"in document&&(Ln=document.documentMode);var th=_t&&"TextEvent"in window&&!Ln,dc=_t&&(!Er||Ln&&8<Ln&&11>=Ln),mc=" ",hc=!1;function pc(e,t){switch(e){case"keyup":return eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function ah(e,t){switch(e){case"compositionend":return gc(t);case"keypress":return t.which!==32?null:(hc=!0,mc);case"textInput":return e=t.data,e===mc&&hc?null:e;default:return null}}function nh(e,t){if(Pa)return e==="compositionend"||!Er&&pc(e,t)?(e=oc(),Vl=jr=ea=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dc&&t.locale!=="ko"?null:t.data;default:return null}}var lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lh[e.type]:t==="textarea"}function bc(e,t,a,n){Wa?Ia?Ia.push(n):Ia=[n]:Wa=n,t=Ui(t,"onChange"),0<t.length&&(a=new Fl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Gn=null,Xn=null;function ih(e){Pf(e,0)}function $l(e){var t=Hn(e);if(Ps(t))return e}function vc(e,t){if(e==="change")return t}var yc=!1;if(_t){var Tr;if(_t){var Rr="oninput"in document;if(!Rr){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),Rr=typeof jc.oninput=="function"}Tr=Rr}else Tr=!1;yc=Tr&&(!document.documentMode||9<document.documentMode)}function Sc(){Gn&&(Gn.detachEvent("onpropertychange",Ac),Xn=Gn=null)}function Ac(e){if(e.propertyName==="value"&&$l(Xn)){var t=[];bc(t,Xn,e,br(e)),rc(ih,t)}}function rh(e,t,a){e==="focusin"?(Sc(),Gn=t,Xn=a,Gn.attachEvent("onpropertychange",Ac)):e==="focusout"&&Sc()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(Xn)}function sh(e,t){if(e==="click")return $l(t)}function ch(e,t){if(e==="input"||e==="change")return $l(t)}function uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:uh;function Qn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!nr.call(t,l)||!nt(e[l],t[l]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var a=wc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wc(a)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xl(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fh=_t&&"documentMode"in document&&11>=document.documentMode,en=null,zr=null,Vn=null,Dr=!1;function Rc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dr||en==null||en!==Xl(n)||(n=en,"selectionStart"in n&&Mr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Qn(Vn,n)||(Vn=n,n=Ui(zr,"onSelect"),0<n.length&&(t=new Fl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=en)))}function Ra(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tn={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},Or={},Mc={};_t&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ma(e){if(Or[e])return Or[e];if(!tn[e])return e;var t=tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Mc)return Or[e]=t[a];return e}var zc=Ma("animationend"),Dc=Ma("animationiteration"),Oc=Ma("animationstart"),dh=Ma("transitionrun"),mh=Ma("transitionstart"),hh=Ma("transitioncancel"),Cc=Ma("transitionend"),_c=new Map,Cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cr.push("scrollEnd");function yt(e,t){_c.set(e,t),Ea(t,[e])}var Uc=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Uc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ws(t)},Uc.set(e,t),t)}return{value:e,source:t,stack:Ws(t)}}var ht=[],an=0,_r=0;function Wl(){for(var e=an,t=_r=an=0;t<e;){var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&Hc(a,l,i)}}function Il(e,t,a,n){ht[an++]=e,ht[an++]=t,ht[an++]=a,ht[an++]=n,_r|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ur(e,t,a,n){return Il(e,t,a,n),Pl(e)}function nn(e,t){return Il(e,null,null,t),Pl(e)}function Hc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-at(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Pl(e){if(50<gl)throw gl=0,Go=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ln={};function ph(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,n){return new ph(e,t,a,n)}function Hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")Hr(e)&&(s=1);else if(typeof e=="string")s=xp(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=lt(31,a,t,l),e.elementType=Ae,e.lanes=i,e;case Q:return za(a.children,l,i,t);case W:s=8,l|=24;break;case k:return e=lt(12,a,t,l|2),e.elementType=k,e.lanes=i,e;case I:return e=lt(13,a,t,l),e.elementType=I,e.lanes=i,e;case Ce:return e=lt(19,a,t,l),e.elementType=Ce,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case ee:s=10;break e;case L:s=9;break e;case je:s=11;break e;case ze:s=14;break e;case _e:s=16,n=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=lt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function za(e,t,a,n){return e=lt(7,e,n,t),e.lanes=a,e}function qr(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function Yr(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rn=[],on=0,ti=null,ai=0,pt=[],gt=0,Da=null,Ht=1,qt="";function Oa(e,t){rn[on++]=ai,rn[on++]=ti,ti=e,ai=t}function Yc(e,t,a){pt[gt++]=Ht,pt[gt++]=qt,pt[gt++]=Da,Da=e;var n=Ht;e=qt;var l=32-at(n)-1;n&=~(1<<l),a+=1;var i=32-at(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Ht=1<<32-at(t)+l|a<<l|n,qt=i+e}else Ht=1<<i|a<<l|n,qt=e}function Br(e){e.return!==null&&(Oa(e,1),Yc(e,1,0))}function kr(e){for(;e===ti;)ti=rn[--on],rn[on]=null,ai=rn[--on],rn[on]=null;for(;e===Da;)Da=pt[--gt],pt[gt]=null,qt=pt[--gt],pt[gt]=null,Ht=pt[--gt],pt[gt]=null}var Ke=null,we=null,ce=!1,Ca=null,Et=!1,Lr=Error(u(519));function _a(e){var t=Error(u(418,""));throw Fn(mt(t,e)),Lr}function Bc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Qe]=e,t[Fe]=n,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<bl.length;a++)ie(bl[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),ec(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Gl(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),ac(t,n.value,n.defaultValue,n.children),Gl(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||nd(t.textContent,a)?(n.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),n.onScroll!=null&&ie("scroll",t),n.onScrollEnd!=null&&ie("scrollend",t),n.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||_a(e)}function kc(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ke=Ke.return}}function Zn(e){if(e!==Ke)return!1;if(!ce)return kc(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ls(e.type,e.memoizedProps)),a=!a),a&&we&&_a(e),kc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){we=St(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}we=null}}else t===27?(t=we,ga(e.type)?(e=ss,ss=null,we=e):we=t):we=Ke?St(e.stateNode.nextSibling):null;return!0}function Kn(){we=Ke=null,ce=!1}function Lc(){var e=Ca;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Ca=null),e}function Fn(e){Ca===null?Ca=[e]:Ca.push(e)}var Gr=C(null),Ua=null,Yt=null;function ta(e,t,a){H(Gr,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Gr.current,Y(Gr)}function Xr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Qr(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=l;for(var h=0;h<t.length;h++)if(c.context===t[h]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Xr(i.return,a,e),n||(s=null);break e}i=c.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Xr(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Jn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var c=l.type;nt(l.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(l===et.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}l=l.return}e!==null&&Qr(t,e,a,n),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ua=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Gc(Ua,e)}function li(e,t){return Ua===null&&Ha(e),Gc(e,t)}function Gc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Yt===null){if(e===null)throw Error(u(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return a}var gh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xh=o.unstable_scheduleCallback,bh=o.unstable_NormalPriority,De={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vr(){return{controller:new gh,data:new Map,refCount:0}}function $n(e){e.refCount--,e.refCount===0&&xh(bh,function(){e.controller.abort()})}var Wn=null,Zr=0,sn=0,cn=null;function vh(e,t){if(Wn===null){var a=Wn=[];Zr=0,sn=Jo(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Zr++,t.then(Xc,Xc),t}function Xc(){if(--Zr===0&&Wn!==null){cn!==null&&(cn.status="fulfilled");var e=Wn;Wn=null,sn=0,cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Qc=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&vh(e,t),Qc!==null&&Qc(e,t)};var qa=C(null);function Kr(){var e=qa.current;return e!==null?e:xe.pooledCache}function ii(e,t){t===null?H(qa,qa.current):H(qa,t.pool)}function Vc(){var e=Kr();return e===null?null:{parent:De._currentValue,pool:e}}var In=Error(u(460)),Zc=Error(u(474)),ri=Error(u(542)),Fr={then:function(){}};function Kc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function oi(){}function Fc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(oi,oi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$c(e),e;default:if(typeof t.status=="string")t.then(oi,oi);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$c(e),e}throw Pn=t,In}}var Pn=null;function Jc(){if(Pn===null)throw Error(u(459));var e=Pn;return Pn=null,e}function $c(e){if(e===In||e===ri)throw Error(u(483))}var aa=!1;function Jr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $r(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ue&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Pl(e),Hc(e,null,a),t}return Il(e,n,t,a),Pl(e)}function el(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xs(e,a)}}function Wr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ir=!1;function tl(){if(Ir){var e=cn;if(e!==null)throw e}}function al(e,t,a,n){Ir=!1;var l=e.updateQueue;aa=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var h=c,S=h.next;h.next=null,s===null?i=S:s.next=S,s=h;var R=e.alternate;R!==null&&(R=R.updateQueue,c=R.lastBaseUpdate,c!==s&&(c===null?R.firstBaseUpdate=S:c.next=S,R.lastBaseUpdate=h))}if(i!==null){var O=l.baseState;s=0,R=S=h=null,c=i;do{var w=c.lane&-536870913,E=w!==c.lane;if(E?(re&w)===w:(n&w)===w){w!==0&&w===sn&&(Ir=!0),R!==null&&(R=R.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var $=e,K=c;w=t;var he=a;switch(K.tag){case 1:if($=K.payload,typeof $=="function"){O=$.call(he,O,w);break e}O=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=K.payload,w=typeof $=="function"?$.call(he,O,w):$,w==null)break e;O=A({},O,w);break e;case 2:aa=!0}}w=c.callback,w!==null&&(e.flags|=64,E&&(e.flags|=8192),E=l.callbacks,E===null?l.callbacks=[w]:E.push(w))}else E={lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},R===null?(S=R=E,h=O):R=R.next=E,s|=w;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;E=c,c=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);R===null&&(h=O),l.baseState=h,l.firstBaseUpdate=S,l.lastBaseUpdate=R,i===null&&(l.shared.lanes=0),da|=s,e.lanes=s,e.memoizedState=O}}function Wc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ic(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wc(a[e],t)}var un=C(null),si=C(0);function Pc(e,t){e=Zt,H(si,e),H(un,t),Zt=e|t.baseLanes}function Pr(){H(si,Zt),H(un,un.current)}function eo(){Zt=si.current,Y(un),Y(si)}var ia=0,ae=null,de=null,Re=null,ci=!1,fn=!1,Ya=!1,ui=0,nl=0,dn=null,jh=0;function Ee(){throw Error(u(321))}function to(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function ao(e,t,a,n,l,i){return ia=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Hu:qu,Ya=!1,i=a(n,l),Ya=!1,fn&&(i=tu(t,a,n,l)),eu(e),i}function eu(e){M.H=gi;var t=de!==null&&de.next!==null;if(ia=0,Re=de=ae=null,ci=!1,nl=0,dn=null,t)throw Error(u(300));e===null||He||(e=e.dependencies,e!==null&&ni(e)&&(He=!0))}function tu(e,t,a,n){ae=e;var l=0;do{if(fn&&(dn=null),nl=0,fn=!1,25<=l)throw Error(u(301));if(l+=1,Re=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Rh,i=t(a,n)}while(fn);return i}function Sh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?ll(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(ae.flags|=1024),t}function no(){var e=ui!==0;return ui=0,e}function lo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function io(e){if(ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ci=!1}ia=0,Re=de=ae=null,fn=!1,nl=ui=0,dn=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ae.memoizedState=Re=e:Re=Re.next=e,Re}function Me(){if(de===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Re===null?ae.memoizedState:Re.next;if(t!==null)Re=t,de=e;else{if(e===null)throw ae.alternate===null?Error(u(467)):Error(u(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Re===null?ae.memoizedState=Re=e:Re=Re.next=e}return Re}function ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(e){var t=nl;return nl+=1,dn===null&&(dn=[]),e=Fc(dn,e,t),t=ae,(Re===null?t.memoizedState:Re.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Hu:qu),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ll(e);if(e.$$typeof===ee)return Ve(e)}throw Error(u(438,String(e)))}function oo(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ro(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Pe;return t.index++,a}function kt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=Me();return so(t,de,e)}function so(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var c=s=null,h=null,S=t,R=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(re&O)===O:(ia&O)===O){var w=S.revertLane;if(w===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===sn&&(R=!0);else if((ia&w)===w){S=S.next,w===sn&&(R=!0);continue}else O={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(c=h=O,s=i):h=h.next=O,ae.lanes|=w,da|=w;O=S.action,Ya&&a(i,O),i=S.hasEagerState?S.eagerState:a(i,O)}else w={lane:O,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(c=h=w,s=i):h=h.next=w,ae.lanes|=O,da|=O;S=S.next}while(S!==null&&S!==t);if(h===null?s=i:h.next=c,!nt(i,e.memoizedState)&&(He=!0,R&&(a=cn,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=h,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function co(e){var t=Me(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);nt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function au(e,t,a){var n=ae,l=Me(),i=ce;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!nt((de||l).memoizedState,a);s&&(l.memoizedState=a,He=!0),l=l.queue;var c=iu.bind(null,n,l,e);if(il(2048,8,c,[e]),l.getSnapshot!==t||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,mn(9,mi(),lu.bind(null,n,l,a,t),null),xe===null)throw Error(u(349));i||(ia&124)!==0||nu(n,t,a)}return a}function nu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=ro(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function lu(e,t,a,n){t.value=a,t.getSnapshot=n,ru(t)&&ou(e)}function iu(e,t,a){return a(function(){ru(t)&&ou(e)})}function ru(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function ou(e){var t=nn(e,2);t!==null&&ct(t,e,2)}function uo(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ya){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},t}function su(e,t,a,n){return e.baseState=a,so(e,de,typeof n=="function"?n:kt)}function Ah(e,t,a,n,l){if(pi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};M.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,cu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function cu(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=M.T,s={};M.T=s;try{var c=a(l,n),h=M.S;h!==null&&h(s,c),uu(e,t,c)}catch(S){fo(e,t,S)}finally{M.T=i}}else try{i=a(l,n),uu(e,t,i)}catch(S){fo(e,t,S)}}function uu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){fu(e,t,n)},function(n){return fo(e,t,n)}):fu(e,t,a)}function fu(e,t,a){t.status="fulfilled",t.value=a,du(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cu(e,a)))}function fo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,du(t),t=t.next;while(t!==n)}e.action=null}function du(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mu(e,t){return t}function hu(e,t){if(ce){var a=xe.formState;if(a!==null){e:{var n=ae;if(ce){if(we){t:{for(var l=we,i=Et;l.nodeType!==8;){if(!i){l=null;break t}if(l=St(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){we=St(l.nextSibling),n=l.data==="F!";break e}}_a(n)}n=!1}n&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:t},a.queue=n,a=Cu.bind(null,ae,n),n.dispatch=a,n=uo(!1),i=xo.bind(null,ae,!1,n.queue),n=$e(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Ah.bind(null,ae,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function pu(e){var t=Me();return gu(t,de,e)}function gu(e,t,a){if(t=so(e,t,mu)[0],e=di(kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ll(t)}catch(s){throw s===In?ri:s}else n=t;t=Me();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,mn(9,mi(),wh.bind(null,l,a),null)),[n,i,e]}function wh(e,t){e.action=t}function xu(e){var t=Me(),a=de;if(a!==null)return gu(t,a,e);Me(),t=t.memoizedState,a=Me();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=ro(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function bu(){return Me().memoizedState}function hi(e,t,a,n){var l=$e();n=n===void 0?null:n,ae.flags|=e,l.memoizedState=mn(1|t,mi(),a,n)}function il(e,t,a,n){var l=Me();n=n===void 0?null:n;var i=l.memoizedState.inst;de!==null&&n!==null&&to(n,de.memoizedState.deps)?l.memoizedState=mn(t,i,a,n):(ae.flags|=e,l.memoizedState=mn(1|t,i,a,n))}function vu(e,t){hi(8390656,8,e,t)}function yu(e,t){il(2048,8,e,t)}function ju(e,t){return il(4,2,e,t)}function Su(e,t){return il(4,4,e,t)}function Au(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,a){a=a!=null?a.concat([e]):null,il(4,4,Au.bind(null,t,e),a)}function mo(){}function Nu(e,t){var a=Me();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&to(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Eu(e,t){var a=Me();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&to(t,n[1]))return n[0];if(n=e(),Ya){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n}function ho(e,t,a){return a===void 0||(ia&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=zf(),ae.lanes|=e,da|=e,a)}function Tu(e,t,a,n){return nt(a,t)?a:un.current!==null?(e=ho(e,a,n),nt(e,t)||(He=!0),e):(ia&42)===0?(He=!0,e.memoizedState=a):(e=zf(),ae.lanes|=e,da|=e,t)}function Ru(e,t,a,n,l){var i=q.p;q.p=i!==0&&8>i?i:8;var s=M.T,c={};M.T=c,xo(e,!1,t,a);try{var h=l(),S=M.S;if(S!==null&&S(c,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=yh(h,n);rl(e,t,R,st(e))}else rl(e,t,n,st(e))}catch(O){rl(e,t,{then:function(){},status:"rejected",reason:O},st())}finally{q.p=i,M.T=s}}function Nh(){}function po(e,t,a,n){if(e.tag!==5)throw Error(u(476));var l=Mu(e).queue;Ru(e,l,t,J,a===null?Nh:function(){return zu(e),a(n)})}function Mu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zu(e){var t=Mu(e).next.queue;rl(e,t,{},st())}function go(){return Ve(wl)}function Du(){return Me().memoizedState}function Ou(){return Me().memoizedState}function Eh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=na(a);var n=la(t,e,a);n!==null&&(ct(n,t,a),el(n,t,a)),t={cache:Vr()},e.payload=t;return}t=t.return}}function Th(e,t,a){var n=st();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)?_u(t,a):(a=Ur(e,t,a,n),a!==null&&(ct(a,e,n),Uu(a,t,n)))}function Cu(e,t,a){var n=st();rl(e,t,a,n)}function rl(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(e))_u(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,c=i(s,a);if(l.hasEagerState=!0,l.eagerState=c,nt(c,s))return Il(e,t,l,0),xe===null&&Wl(),!1}catch{}finally{}if(a=Ur(e,t,l,n),a!==null)return ct(a,e,n),Uu(a,t,n),!0}return!1}function xo(e,t,a,n){if(n={lane:2,revertLane:Jo(),action:n,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(u(479))}else t=Ur(e,a,n,2),t!==null&&ct(t,e,2)}function pi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function _u(e,t){fn=ci=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Uu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xs(e,a)}}var gi={readContext:Ve,use:fi,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee},Hu={readContext:Ve,use:fi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:vu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hi(4194308,4,Au.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var n=e();if(Ya){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=$e();if(a!==void 0){var l=a(t);if(Ya){It(!0);try{a(t)}finally{It(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Th.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=uo(e);var t=e.queue,a=Cu.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:mo,useDeferredValue:function(e,t){var a=$e();return ho(a,e,t)},useTransition:function(){var e=uo(!1);return e=Ru.bind(null,ae,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,l=$e();if(ce){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),xe===null)throw Error(u(349));(re&124)!==0||nu(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,vu(iu.bind(null,n,i,e),[e]),n.flags|=2048,mn(9,mi(),lu.bind(null,n,i,a,t),null),a},useId:function(){var e=$e(),t=xe.identifierPrefix;if(ce){var a=qt,n=Ht;a=(n&~(1<<32-at(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=ui++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=jh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:go,useFormState:hu,useActionState:hu,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xo.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:oo,useCacheRefresh:function(){return $e().memoizedState=Eh.bind(null,ae)}},qu={readContext:Ve,use:fi,useCallback:Nu,useContext:Ve,useEffect:yu,useImperativeHandle:wu,useInsertionEffect:ju,useLayoutEffect:Su,useMemo:Eu,useReducer:di,useRef:bu,useState:function(){return di(kt)},useDebugValue:mo,useDeferredValue:function(e,t){var a=Me();return Tu(a,de.memoizedState,e,t)},useTransition:function(){var e=di(kt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:ll(e),t]},useSyncExternalStore:au,useId:Du,useHostTransitionStatus:go,useFormState:pu,useActionState:pu,useOptimistic:function(e,t){var a=Me();return su(a,de,e,t)},useMemoCache:oo,useCacheRefresh:Ou},Rh={readContext:Ve,use:fi,useCallback:Nu,useContext:Ve,useEffect:yu,useImperativeHandle:wu,useInsertionEffect:ju,useLayoutEffect:Su,useMemo:Eu,useReducer:co,useRef:bu,useState:function(){return co(kt)},useDebugValue:mo,useDeferredValue:function(e,t){var a=Me();return de===null?ho(a,e,t):Tu(a,de.memoizedState,e,t)},useTransition:function(){var e=co(kt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:ll(e),t]},useSyncExternalStore:au,useId:Du,useHostTransitionStatus:go,useFormState:xu,useActionState:xu,useOptimistic:function(e,t){var a=Me();return de!==null?su(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:oo,useCacheRefresh:Ou},hn=null,ol=0;function xi(e){var t=ol;return ol+=1,hn===null&&(hn=[]),Fc(hn,e,t)}function sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===_?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yu(e){var t=e._init;return t(e._payload)}function Bu(e){function t(v,x){if(e){var j=v.deletions;j===null?(v.deletions=[x],v.flags|=16):j.push(x)}}function a(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function l(v,x){return v=Ut(v,x),v.index=0,v.sibling=null,v}function i(v,x,j){return v.index=j,e?(j=v.alternate,j!==null?(j=j.index,j<x?(v.flags|=67108866,x):j):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function s(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function c(v,x,j,D){return x===null||x.tag!==6?(x=qr(j,v.mode,D),x.return=v,x):(x=l(x,j),x.return=v,x)}function h(v,x,j,D){var B=j.type;return B===Q?R(v,x,j.props.children,D,j.key):x!==null&&(x.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_e&&Yu(B)===x.type)?(x=l(x,j.props),sl(x,j),x.return=v,x):(x=ei(j.type,j.key,j.props,null,v.mode,D),sl(x,j),x.return=v,x)}function S(v,x,j,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=Yr(j,v.mode,D),x.return=v,x):(x=l(x,j.children||[]),x.return=v,x)}function R(v,x,j,D,B){return x===null||x.tag!==7?(x=za(j,v.mode,D,B),x.return=v,x):(x=l(x,j),x.return=v,x)}function O(v,x,j){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=qr(""+x,v.mode,j),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case U:return j=ei(x.type,x.key,x.props,null,v.mode,j),sl(j,x),j.return=v,j;case G:return x=Yr(x,v.mode,j),x.return=v,x;case _e:var D=x._init;return x=D(x._payload),O(v,x,j)}if(Xe(x)||Ge(x))return x=za(x,v.mode,j,null),x.return=v,x;if(typeof x.then=="function")return O(v,xi(x),j);if(x.$$typeof===ee)return O(v,li(v,x),j);bi(v,x)}return null}function w(v,x,j,D){var B=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return B!==null?null:c(v,x,""+j,D);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return j.key===B?h(v,x,j,D):null;case G:return j.key===B?S(v,x,j,D):null;case _e:return B=j._init,j=B(j._payload),w(v,x,j,D)}if(Xe(j)||Ge(j))return B!==null?null:R(v,x,j,D,null);if(typeof j.then=="function")return w(v,x,xi(j),D);if(j.$$typeof===ee)return w(v,x,li(v,j),D);bi(v,j)}return null}function E(v,x,j,D,B){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return v=v.get(j)||null,c(x,v,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case U:return v=v.get(D.key===null?j:D.key)||null,h(x,v,D,B);case G:return v=v.get(D.key===null?j:D.key)||null,S(x,v,D,B);case _e:var ne=D._init;return D=ne(D._payload),E(v,x,j,D,B)}if(Xe(D)||Ge(D))return v=v.get(j)||null,R(x,v,D,B,null);if(typeof D.then=="function")return E(v,x,j,xi(D),B);if(D.$$typeof===ee)return E(v,x,j,li(x,D),B);bi(x,D)}return null}function $(v,x,j,D){for(var B=null,ne=null,X=x,F=x=0,Ye=null;X!==null&&F<j.length;F++){X.index>F?(Ye=X,X=null):Ye=X.sibling;var se=w(v,X,j[F],D);if(se===null){X===null&&(X=Ye);break}e&&X&&se.alternate===null&&t(v,X),x=i(se,x,F),ne===null?B=se:ne.sibling=se,ne=se,X=Ye}if(F===j.length)return a(v,X),ce&&Oa(v,F),B;if(X===null){for(;F<j.length;F++)X=O(v,j[F],D),X!==null&&(x=i(X,x,F),ne===null?B=X:ne.sibling=X,ne=X);return ce&&Oa(v,F),B}for(X=n(X);F<j.length;F++)Ye=E(X,v,F,j[F],D),Ye!==null&&(e&&Ye.alternate!==null&&X.delete(Ye.key===null?F:Ye.key),x=i(Ye,x,F),ne===null?B=Ye:ne.sibling=Ye,ne=Ye);return e&&X.forEach(function(ja){return t(v,ja)}),ce&&Oa(v,F),B}function K(v,x,j,D){if(j==null)throw Error(u(151));for(var B=null,ne=null,X=x,F=x=0,Ye=null,se=j.next();X!==null&&!se.done;F++,se=j.next()){X.index>F?(Ye=X,X=null):Ye=X.sibling;var ja=w(v,X,se.value,D);if(ja===null){X===null&&(X=Ye);break}e&&X&&ja.alternate===null&&t(v,X),x=i(ja,x,F),ne===null?B=ja:ne.sibling=ja,ne=ja,X=Ye}if(se.done)return a(v,X),ce&&Oa(v,F),B;if(X===null){for(;!se.done;F++,se=j.next())se=O(v,se.value,D),se!==null&&(x=i(se,x,F),ne===null?B=se:ne.sibling=se,ne=se);return ce&&Oa(v,F),B}for(X=n(X);!se.done;F++,se=j.next())se=E(X,v,F,se.value,D),se!==null&&(e&&se.alternate!==null&&X.delete(se.key===null?F:se.key),x=i(se,x,F),ne===null?B=se:ne.sibling=se,ne=se);return e&&X.forEach(function(Mp){return t(v,Mp)}),ce&&Oa(v,F),B}function he(v,x,j,D){if(typeof j=="object"&&j!==null&&j.type===Q&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case U:e:{for(var B=j.key;x!==null;){if(x.key===B){if(B=j.type,B===Q){if(x.tag===7){a(v,x.sibling),D=l(x,j.props.children),D.return=v,v=D;break e}}else if(x.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_e&&Yu(B)===x.type){a(v,x.sibling),D=l(x,j.props),sl(D,j),D.return=v,v=D;break e}a(v,x);break}else t(v,x);x=x.sibling}j.type===Q?(D=za(j.props.children,v.mode,D,j.key),D.return=v,v=D):(D=ei(j.type,j.key,j.props,null,v.mode,D),sl(D,j),D.return=v,v=D)}return s(v);case G:e:{for(B=j.key;x!==null;){if(x.key===B)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){a(v,x.sibling),D=l(x,j.children||[]),D.return=v,v=D;break e}else{a(v,x);break}else t(v,x);x=x.sibling}D=Yr(j,v.mode,D),D.return=v,v=D}return s(v);case _e:return B=j._init,j=B(j._payload),he(v,x,j,D)}if(Xe(j))return $(v,x,j,D);if(Ge(j)){if(B=Ge(j),typeof B!="function")throw Error(u(150));return j=B.call(j),K(v,x,j,D)}if(typeof j.then=="function")return he(v,x,xi(j),D);if(j.$$typeof===ee)return he(v,x,li(v,j),D);bi(v,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,x!==null&&x.tag===6?(a(v,x.sibling),D=l(x,j),D.return=v,v=D):(a(v,x),D=qr(j,v.mode,D),D.return=v,v=D),s(v)):a(v,x)}return function(v,x,j,D){try{ol=0;var B=he(v,x,j,D);return hn=null,B}catch(X){if(X===In||X===ri)throw X;var ne=lt(29,X,null,v.mode);return ne.lanes=D,ne.return=v,ne}finally{}}}var pn=Bu(!0),ku=Bu(!1),xt=C(null),Tt=null;function ra(e){var t=e.alternate;H(Oe,Oe.current&1),H(xt,e),Tt===null&&(t===null||un.current!==null||t.memoizedState!==null)&&(Tt=e)}function Lu(e){if(e.tag===22){if(H(Oe,Oe.current),H(xt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else oa()}function oa(){H(Oe,Oe.current),H(xt,xt.current)}function Lt(e){Y(xt),Tt===e&&(Tt=null),Y(Oe)}var Oe=C(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||os(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function bo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=st(),l=na(n);l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(ct(t,e,n),el(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=st(),l=na(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(ct(t,e,n),el(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=la(e,n,a),t!==null&&(ct(t,e,a),el(t,e,a))}};function Gu(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Qn(a,n)||!Qn(l,i):!0}function Xu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qu(e){yi(e)}function Vu(e){console.error(e)}function Zu(e){yi(e)}function ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ku(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function yo(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(e,t)},a}function Fu(e){return e=na(e),e.tag=3,e}function Ju(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Ku(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Ku(t,a,n),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Mh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Jn(t,a,l,!0),a=xt.current,a!==null){switch(a.tag){case 13:return Tt===null?Qo():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Fr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Zo(e,n,l)),!1;case 22:return a.flags|=65536,n===Fr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Zo(e,n,l)),!1}throw Error(u(435,a.tag))}return Zo(e,n,l),Qo(),!1}if(ce)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Lr&&(e=Error(u(422),{cause:n}),Fn(mt(e,a)))):(n!==Lr&&(t=Error(u(423),{cause:n}),Fn(mt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=mt(n,a),l=yo(e.stateNode,n,l),Wr(e,l),Ne!==4&&(Ne=2)),!1;var i=Error(u(520),{cause:n});if(i=mt(i,a),pl===null?pl=[i]:pl.push(i),Ne!==4&&(Ne=2),t===null)return!0;n=mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=yo(a.stateNode,n,e),Wr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Fu(l),Ju(l,e,a,n),Wr(a,l),!1}a=a.return}while(a!==null);return!1}var $u=Error(u(461)),He=!1;function Be(e,t,a,n){t.child=e===null?ku(t,null,a,n):pn(t,e.child,a,n)}function Wu(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var c in n)c!=="ref"&&(s[c]=n[c])}else s=n;return Ha(t),n=ao(e,t,a,s,i,l),c=no(),e!==null&&!He?(lo(e,t,l),Gt(e,t,l)):(ce&&c&&Br(t),t.flags|=1,Be(e,t,n,l),t.child)}function Iu(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Hr(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Pu(e,t,i,n,l)):(e=ei(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ro(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Qn,a(s,n)&&e.ref===t.ref)return Gt(e,t,l)}return t.flags|=1,e=Ut(i,n),e.ref=t.ref,e.return=t,t.child=e}function Pu(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Qn(i,n)&&e.ref===t.ref)if(He=!1,t.pendingProps=n=i,Ro(e,l))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Gt(e,t,l)}return jo(e,t,a,n,l)}function ef(e,t,a){var n=t.pendingProps,l=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~n}else t.childLanes=0,t.child=null;return tf(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?Pc(t,i):Pr(),Lu(t);else return t.lanes=t.childLanes=536870912,tf(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ii(t,i.cachePool),Pc(t,i),oa(),t.memoizedState=null):(e!==null&&ii(t,null),Pr(),oa());return Be(e,t,l,a),t.child}function tf(e,t,a,n){var l=Kr();return l=l===null?null:{parent:De._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&ii(t,null),Pr(),Lu(t),e!==null&&Jn(e,t,n,!0),null}function Si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function jo(e,t,a,n,l){return Ha(t),a=ao(e,t,a,n,void 0,l),n=no(),e!==null&&!He?(lo(e,t,l),Gt(e,t,l)):(ce&&n&&Br(t),t.flags|=1,Be(e,t,a,l),t.child)}function af(e,t,a,n,l,i){return Ha(t),t.updateQueue=null,a=tu(t,n,a,l),eu(e),n=no(),e!==null&&!He?(lo(e,t,i),Gt(e,t,i)):(ce&&n&&Br(t),t.flags|=1,Be(e,t,a,i),t.child)}function nf(e,t,a,n,l){if(Ha(t),t.stateNode===null){var i=ln,s=a.contextType;typeof s=="object"&&s!==null&&(i=Ve(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Jr(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Ve(s):ln,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(bo(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&vo.enqueueReplaceState(i,i.state,null),al(t,n,i,l),tl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,h=Ba(a,c);i.props=h;var S=i.context,R=a.contextType;s=ln,typeof R=="object"&&R!==null&&(s=Ve(R));var O=a.getDerivedStateFromProps;R=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||S!==s)&&Xu(t,i,n,s),aa=!1;var w=t.memoizedState;i.state=w,al(t,n,i,l),tl(),S=t.memoizedState,c||w!==S||aa?(typeof O=="function"&&(bo(t,a,O,n),S=t.memoizedState),(h=aa||Gu(t,a,h,n,w,S,s))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=S),i.props=n,i.state=S,i.context=s,n=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,$r(e,t),s=t.memoizedProps,R=Ba(a,s),i.props=R,O=t.pendingProps,w=i.context,S=a.contextType,h=ln,typeof S=="object"&&S!==null&&(h=Ve(S)),c=a.getDerivedStateFromProps,(S=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==O||w!==h)&&Xu(t,i,n,h),aa=!1,w=t.memoizedState,i.state=w,al(t,n,i,l),tl();var E=t.memoizedState;s!==O||w!==E||aa||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof c=="function"&&(bo(t,a,c,n),E=t.memoizedState),(R=aa||Gu(t,a,R,n,w,E,h)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,E,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,E,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=E),i.props=n,i.state=E,i.context=h,n=R):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Si(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=pn(t,e.child,null,l),t.child=pn(t,null,a,l)):Be(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Gt(e,t,l),e}function lf(e,t,a,n){return Kn(),t.flags|=256,Be(e,t,a,n),t.child}var So={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ao(e){return{baseLanes:e,cachePool:Vc()}}function wo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function rf(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(l?ra(t):oa(),ce){var c=we,h;if(h=c){e:{for(h=c,c=Et;h.nodeType!==8;){if(!c){c=null;break e}if(h=St(h.nextSibling),h===null){c=null;break e}}c=h}c!==null?(t.memoizedState={dehydrated:c,treeContext:Da!==null?{id:Ht,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},h=lt(18,null,null,0),h.stateNode=c,h.return=t,t.child=h,Ke=t,we=null,h=!0):h=!1}h||_a(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return os(c)?t.lanes=32:t.lanes=536870912,null;Lt(t)}return c=n.children,n=n.fallback,l?(oa(),l=t.mode,c=Ai({mode:"hidden",children:c},l),n=za(n,l,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,l=t.child,l.memoizedState=Ao(a),l.childLanes=wo(e,s,a),t.memoizedState=So,n):(ra(t),No(t,c))}if(h=e.memoizedState,h!==null&&(c=h.dehydrated,c!==null)){if(i)t.flags&256?(ra(t),t.flags&=-257,t=Eo(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),l=n.fallback,c=t.mode,n=Ai({mode:"visible",children:n.children},c),l=za(l,c,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,pn(t,e.child,null,a),n=t.child,n.memoizedState=Ao(a),n.childLanes=wo(e,s,a),t.memoizedState=So,t=l);else if(ra(t),os(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var S=s.dgst;s=S,n=Error(u(419)),n.stack="",n.digest=s,Fn({value:n,source:null,stack:null}),t=Eo(e,t,a)}else if(He||Jn(e,t,a,!1),s=(a&e.childLanes)!==0,He||s){if(s=xe,s!==null&&(n=a&-a,n=(n&42)!==0?1:or(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==h.retryLane))throw h.retryLane=n,nn(e,n),ct(s,e,n),$u;c.data==="$?"||Qo(),t=Eo(e,t,a)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,we=St(c.nextSibling),Ke=t,ce=!0,Ca=null,Et=!1,e!==null&&(pt[gt++]=Ht,pt[gt++]=qt,pt[gt++]=Da,Ht=e.id,qt=e.overflow,Da=t),t=No(t,n.children),t.flags|=4096);return t}return l?(oa(),l=n.fallback,c=t.mode,h=e.child,S=h.sibling,n=Ut(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&65011712,S!==null?l=Ut(S,l):(l=za(l,c,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,c=e.child.memoizedState,c===null?c=Ao(a):(h=c.cachePool,h!==null?(S=De._currentValue,h=h.parent!==S?{parent:S,pool:S}:h):h=Vc(),c={baseLanes:c.baseLanes|a,cachePool:h}),l.memoizedState=c,l.childLanes=wo(e,s,a),t.memoizedState=So,n):(ra(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function No(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=lt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Eo(e,t,a){return pn(t,e.child,null,a),e=No(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function of(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xr(e.return,t,a)}function To(e,t,a,n,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l)}function sf(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;if(Be(e,t,n.children,a),n=Oe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&of(e,a,t);else if(e.tag===19)of(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(H(Oe,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&vi(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),To(t,!1,l,a,i);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vi(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}To(t,!0,a,null,i);break;case"together":To(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function zh(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,De,e.memoizedState.cache),Kn();break;case 27:case 5:ar(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?rf(e,t,a):(ra(t),e=Gt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Jn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return sf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Oe,Oe.current),n)break;return null;case 22:case 23:return t.lanes=0,ef(e,t,a);case 24:ta(t,De,e.memoizedState.cache)}return Gt(e,t,a)}function cf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Ro(e,a)&&(t.flags&128)===0)return He=!1,zh(e,t,a);He=(e.flags&131072)!==0}else He=!1,ce&&(t.flags&1048576)!==0&&Yc(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Hr(n)?(e=Ba(n,e),t.tag=1,t=nf(null,t,n,e,a)):(t.tag=0,t=jo(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===je){t.tag=11,t=Wu(null,t,n,e,a);break e}else if(l===ze){t.tag=14,t=Iu(null,t,n,e,a);break e}}throw t=wa(n)||n,Error(u(306,t,""))}}return t;case 0:return jo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Ba(n,t.pendingProps),nf(e,t,n,l,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,$r(e,t),al(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,De,n),n!==i.cache&&Qr(t,[De],a,!0),tl(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=lf(e,t,n,a);break e}else if(n!==l){l=mt(Error(u(424)),t),Fn(l),t=lf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=St(e.firstChild),Ke=t,ce=!0,Ca=null,Et=!0,a=ku(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kn(),n===l){t=Gt(e,t,a);break e}Be(e,t,n,a)}t=t.child}return t;case 26:return Si(e,t),e===null?(a=md(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,n=qi(P.current).createElement(a),n[Qe]=t,n[Fe]=e,Le(n,a,e),Ue(n),t.stateNode=n):t.memoizedState=md(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ar(t),e===null&&ce&&(n=t.stateNode=ud(t.type,t.pendingProps,P.current),Ke=t,Et=!0,l=we,ga(t.type)?(ss=l,we=St(n.firstChild)):we=l),Be(e,t,t.pendingProps.children,a),Si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((l=n=we)&&(n=lp(n,t.type,t.pendingProps,Et),n!==null?(t.stateNode=n,Ke=t,we=St(n.firstChild),Et=!1,l=!0):l=!1),l||_a(t)),ar(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,ls(l,i)?n=null:s!==null&&ls(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=ao(e,t,Sh,null,null,a),wl._currentValue=l),Si(e,t),Be(e,t,n,a),t.child;case 6:return e===null&&ce&&((e=a=we)&&(a=ip(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ke=t,we=null,e=!0):e=!1),e||_a(t)),null;case 13:return rf(e,t,a);case 4:return be(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=pn(t,null,n,a):Be(e,t,n,a),t.child;case 11:return Wu(e,t,t.type,t.pendingProps,a);case 7:return Be(e,t,t.pendingProps,a),t.child;case 8:return Be(e,t,t.pendingProps.children,a),t.child;case 12:return Be(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Be(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ha(t),l=Ve(l),n=n(l),t.flags|=1,Be(e,t,n,a),t.child;case 14:return Iu(e,t,t.type,t.pendingProps,a);case 15:return Pu(e,t,t.type,t.pendingProps,a);case 19:return sf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Ai(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ut(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return ef(e,t,a);case 24:return Ha(t),n=Ve(De),e===null?(l=Kr(),l===null&&(l=xe,i=Vr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},Jr(t),ta(t,De,l)):((e.lanes&a)!==0&&($r(e,t),al(t,null,null,a),tl()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,De,n)):(n=i.cache,ta(t,De,n),n!==l.cache&&Qr(t,[De],a,!0))),Be(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Xt(e){e.flags|=4}function uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bd(t)){if(t=xt.current,t!==null&&((re&4194048)===re?Tt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==Tt))throw Pn=Fr,Zc;e.flags|=8192}}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ls():536870912,e.lanes|=t,vn|=t)}function cl(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Dh(e,t,a){var n=t.pendingProps;switch(kr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(De),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lc())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(Se(t),uf(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),Se(t),uf(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==n&&Xt(t),Se(t),t.flags&=-16777217),null;case 27:Ul(t),a=P.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Se(t),null}e=Z.current,Zn(t)?Bc(t):(e=ud(l,n,a),t.stateNode=e,Xt(t))}return Se(t),null;case 5:if(Ul(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Se(t),null}if(e=Z.current,Zn(t))Bc(t);else{switch(l=qi(P.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[Qe]=t,e[Fe]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Le(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=P.current,Zn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ke,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||nd(e.nodeValue,a)),e||_a(t)}else e=qi(e).createTextNode(n),e[Qe]=t,t.stateNode=e}return Se(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Qe]=t}else Kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),l=!1}else l=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Lt(t),t):(Lt(t),null)}if(Lt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var i=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),wi(t,t.updateQueue),Se(t),null;case 4:return Wt(),e===null&&Po(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(Y(Oe),l=t.memoizedState,l===null)return Se(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)cl(l,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=vi(e),i!==null){for(t.flags|=128,cl(l,!1),e=i.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)qc(a,e),a=a.sibling;return H(Oe,Oe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Nt()>Ti&&(t.flags|=128,n=!0,cl(l,!1),t.lanes=4194304)}else{if(!n)if(e=vi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return Se(t),null}else 2*Nt()-l.renderingStartTime>Ti&&a!==536870912&&(t.flags|=128,n=!0,cl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Nt(),t.sibling=null,e=Oe.current,H(Oe,n?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Lt(t),eo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Y(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(De),Se(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Oh(e,t){switch(kr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(De),Wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ul(t),null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Oe),null;case 4:return Wt(),null;case 10:return Bt(t.type),null;case 22:case 23:return Lt(t),eo(),e!==null&&Y(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(De),null;case 25:return null;default:return null}}function ff(e,t){switch(kr(t),t.tag){case 3:Bt(De),Wt();break;case 26:case 27:case 5:Ul(t);break;case 4:Wt();break;case 13:Lt(t);break;case 19:Y(Oe);break;case 10:Bt(t.type);break;case 22:case 23:Lt(t),eo(),e!==null&&Y(qa);break;case 24:Bt(De)}}function ul(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(c){ge(t,t.return,c)}}function sa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,l=t;var h=a,S=c;try{S()}catch(R){ge(l,h,R)}}}n=n.next}while(n!==i)}}catch(R){ge(t,t.return,R)}}function df(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ic(t,a)}catch(n){ge(e,e.return,n)}}}function mf(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ge(e,t,n)}}function fl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ge(e,t,l)}}function Rt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ge(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ge(e,t,l)}else a.current=null}function hf(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ge(e,e.return,l)}}function Mo(e,t,a){try{var n=e.stateNode;Ph(n,e.type,a,t),n[Fe]=t}catch(l){ge(e,e.return,l)}}function pf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Hi));else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Do(e,t,a),e=e.sibling;e!==null;)Do(e,t,a),e=e.sibling}function Ni(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ni(e,t,a),e=e.sibling;e!==null;)Ni(e,t,a),e=e.sibling}function gf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Le(t,n,a),t[Qe]=e,t[Fe]=a}catch(i){ge(e,e.return,i)}}var Qt=!1,Te=!1,Oo=!1,xf=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Ch(e,t){if(e=e.containerInfo,as=Xi,e=Tc(e),Mr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,c=-1,h=-1,S=0,R=0,O=e,w=null;t:for(;;){for(var E;O!==a||l!==0&&O.nodeType!==3||(c=s+l),O!==i||n!==0&&O.nodeType!==3||(h=s+n),O.nodeType===3&&(s+=O.nodeValue.length),(E=O.firstChild)!==null;)w=O,O=E;for(;;){if(O===e)break t;if(w===a&&++S===l&&(c=s),w===i&&++R===n&&(h=s),(E=O.nextSibling)!==null)break;O=w,w=O.parentNode}O=E}a=c===-1||h===-1?null:{start:c,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(ns={focusedElem:e,selectionRange:a},Xi=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var $=Ba(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate($,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)rs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function bf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),n&4&&ul(5,a);break;case 1:if(ca(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ge(a,a.return,s)}else{var l=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ge(a,a.return,s)}}n&64&&df(a),n&512&&fl(a,a.return);break;case 3:if(ca(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ic(e,t)}catch(s){ge(a,a.return,s)}}break;case 27:t===null&&n&4&&gf(a);case 26:case 5:ca(e,a),t===null&&n&4&&hf(a),n&512&&fl(a,a.return);break;case 12:ca(e,a);break;case 13:ca(e,a),n&4&&jf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gh.bind(null,a),rp(e,a))));break;case 22:if(n=a.memoizedState!==null||Qt,!n){t=t!==null&&t.memoizedState!==null||Te,l=Qt;var i=Te;Qt=n,(Te=t)&&!i?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),Qt=l,Te=i}break;case 30:break;default:ca(e,a)}}function vf(e){var t=e.alternate;t!==null&&(e.alternate=null,vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ur(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,We=!1;function Vt(e,t,a){for(a=a.child;a!==null;)yf(e,t,a),a=a.sibling}function yf(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 26:Te||Rt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Rt(a,t);var n=ve,l=We;ga(a.type)&&(ve=a.stateNode,We=!1),Vt(e,t,a),yl(a.stateNode),ve=n,We=l;break;case 5:Te||Rt(a,t);case 6:if(n=ve,l=We,ve=null,Vt(e,t,a),ve=n,We=l,ve!==null)if(We)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{ve.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:ve!==null&&(We?(e=ve,sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rl(e)):sd(ve,a.stateNode));break;case 4:n=ve,l=We,ve=a.stateNode.containerInfo,We=!0,Vt(e,t,a),ve=n,We=l;break;case 0:case 11:case 14:case 15:Te||sa(2,a,t),Te||sa(4,a,t),Vt(e,t,a);break;case 1:Te||(Rt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&mf(a,t,n)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:Te=(n=Te)||a.memoizedState!==null,Vt(e,t,a),Te=n;break;default:Vt(e,t,a)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(a){ge(t,t.return,a)}}function _h(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(u(435,e.tag))}}function Co(e,t){var a=_h(e);t.forEach(function(n){var l=Xh.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function it(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(ga(c.type)){ve=c.stateNode,We=!1;break e}break;case 5:ve=c.stateNode,We=!1;break e;case 3:case 4:ve=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(ve===null)throw Error(u(160));yf(i,s,l),ve=null,We=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}var jt=null;function Sf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),rt(e),n&4&&(sa(3,e,e.return),ul(3,e),sa(5,e,e.return));break;case 1:it(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),n&64&&Qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=jt;if(it(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Un]||i[Qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Le(i,n,a),i[Qe]=e,Ue(i),n=i;break e;case"link":var s=gd("link","href",l).get(n+(a.href||""));if(s){for(var c=0;c<s.length;c++)if(i=s[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(c,1);break t}}i=l.createElement(n),Le(i,n,a),l.head.appendChild(i);break;case"meta":if(s=gd("meta","content",l).get(n+(a.content||""))){for(c=0;c<s.length;c++)if(i=s[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(c,1);break t}}i=l.createElement(n),Le(i,n,a),l.head.appendChild(i);break;default:throw Error(u(468,n))}i[Qe]=e,Ue(i),n=i}e.stateNode=n}else xd(l,e.type,e.stateNode);else e.stateNode=pd(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?xd(l,e.type,e.stateNode):pd(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Mo(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),a!==null&&n&4&&Mo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),e.flags&32){l=e.stateNode;try{$a(l,"")}catch(E){ge(e,e.return,E)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Mo(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Oo=!0);break;case 6:if(it(t,e),rt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(E){ge(e,e.return,E)}}break;case 3:if(ki=null,l=jt,jt=Yi(t.containerInfo),it(t,e),jt=l,rt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Rl(t.containerInfo)}catch(E){ge(e,e.return,E)}Oo&&(Oo=!1,Af(e));break;case 4:n=jt,jt=Yi(e.stateNode.containerInfo),it(t,e),rt(e),jt=n;break;case 12:it(t,e),rt(e);break;case 13:it(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bo=Nt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Co(e,n)));break;case 22:l=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,S=Qt,R=Te;if(Qt=S||l,Te=R||h,it(t,e),Te=R,Qt=S,rt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||h||Qt||Te||ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=h.stateNode;var O=h.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(E){ge(h,h.return,E)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(E){ge(h,h.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Co(e,a))));break;case 19:it(t,e),rt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Co(e,n)));break;case 30:break;case 21:break;default:it(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(pf(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var l=a.stateNode,i=zo(e);Ni(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&($a(s,""),a.flags&=-33);var c=zo(e);Ni(e,c,s);break;case 3:case 4:var h=a.stateNode.containerInfo,S=zo(e);Do(e,S,h);break;default:throw Error(u(161))}}catch(R){ge(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Af(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Af(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bf(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),ka(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&mf(t,t.return,a),ka(t);break;case 27:yl(t.stateNode);case 26:case 5:Rt(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:ua(l,i,a),ul(4,i);break;case 1:if(ua(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(S){ge(n,n.return,S)}if(n=i,l=n.updateQueue,l!==null){var c=n.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)Wc(h[l],c)}catch(S){ge(n,n.return,S)}}a&&s&64&&df(i),fl(i,i.return);break;case 27:gf(i);case 26:case 5:ua(l,i,a),a&&n===null&&s&4&&hf(i),fl(i,i.return);break;case 12:ua(l,i,a);break;case 13:ua(l,i,a),a&&s&4&&jf(l,i);break;case 22:i.memoizedState===null&&ua(l,i,a),fl(i,i.return);break;case 30:break;default:ua(l,i,a)}t=t.sibling}}function _o(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$n(a))}function Uo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e))}function Mt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wf(e,t,a,n),t=t.sibling}function wf(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,n),l&2048&&ul(9,t);break;case 1:Mt(e,t,a,n);break;case 3:Mt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e)));break;case 12:if(l&2048){Mt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,c=i.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Mt(e,t,a,n);break;case 13:Mt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,a,n):dl(e,t):i._visibility&2?Mt(e,t,a,n):(i._visibility|=2,gn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&_o(s,t);break;case 24:Mt(e,t,a,n),l&2048&&Uo(t.alternate,t);break;default:Mt(e,t,a,n)}}function gn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,s=t,c=a,h=n,S=s.flags;switch(s.tag){case 0:case 11:case 15:gn(i,s,c,h,l),ul(8,s);break;case 23:break;case 22:var R=s.stateNode;s.memoizedState!==null?R._visibility&2?gn(i,s,c,h,l):dl(i,s):(R._visibility|=2,gn(i,s,c,h,l)),l&&S&2048&&_o(s.alternate,s);break;case 24:gn(i,s,c,h,l),l&&S&2048&&Uo(s.alternate,s);break;default:gn(i,s,c,h,l)}t=t.sibling}}function dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:dl(a,n),l&2048&&_o(n.alternate,n);break;case 24:dl(a,n),l&2048&&Uo(n.alternate,n);break;default:dl(a,n)}t=t.sibling}}var ml=8192;function xn(e){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 26:xn(e),e.flags&ml&&e.memoizedState!==null&&vp(jt,e.memoizedState,e.memoizedProps);break;case 5:xn(e);break;case 3:case 4:var t=jt;jt=Yi(e.stateNode.containerInfo),xn(e),jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ml,ml=16777216,xn(e),ml=t):xn(e));break;default:xn(e)}}function Ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];qe=n,Rf(n,e)}Ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tf(e),e=e.sibling}function Tf(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&sa(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ei(e)):hl(e);break;default:hl(e)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];qe=n,Rf(n,e)}Ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),Ei(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ei(t));break;default:Ei(t)}e=e.sibling}}function Rf(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:$n(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,qe=n;else e:for(a=e;qe!==null;){n=qe;var l=n.sibling,i=n.return;if(vf(n),n===a){qe=null;break e}if(l!==null){l.return=i,qe=l;break e}qe=i}}}var Uh={getCacheForType:function(e){var t=Ve(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Hh=typeof WeakMap=="function"?WeakMap:Map,ue=0,xe=null,le=null,re=0,fe=0,ot=null,fa=!1,bn=!1,Ho=!1,Zt=0,Ne=0,da=0,La=0,qo=0,bt=0,vn=0,pl=null,Ie=null,Yo=!1,Bo=0,Ti=1/0,Ri=null,ma=null,ke=0,ha=null,yn=null,jn=0,ko=0,Lo=null,Mf=null,gl=0,Go=null;function st(){if((ue&2)!==0&&re!==0)return re&-re;if(M.T!==null){var e=sn;return e!==0?e:Jo()}return Qs()}function zf(){bt===0&&(bt=(re&536870912)===0||ce?ks():536870912);var e=xt.current;return e!==null&&(e.flags|=32),bt}function ct(e,t,a){(e===xe&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),pa(e,re,bt,!1)),_n(e,a),((ue&2)===0||e!==xe)&&(e===xe&&((ue&2)===0&&(La|=a),Ne===4&&pa(e,re,bt,!1)),zt(e))}function Df(e,t,a){if((ue&6)!==0)throw Error(u(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Cn(e,t),l=n?Bh(e,t):Vo(e,t,!0),i=n;do{if(l===0){bn&&!n&&pa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!qh(a)){l=Vo(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var c=e;l=pl;var h=c.current.memoizedState.isDehydrated;if(h&&(Sn(c,s).flags|=256),s=Vo(c,s,!1),s!==2){if(Ho&&!h){c.errorRecoveryDisabledLanes|=i,La|=i,l=4;break e}i=Ie,Ie=l,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Sn(e,0),pa(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:pa(n,t,bt,!fa);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Bo+300-Nt(),10<l)){if(pa(n,t,bt,!fa),Bl(n,0,!0)!==0)break e;n.timeoutHandle=rd(Of.bind(null,n,a,Ie,Ri,Yo,t,bt,La,vn,fa,i,2,-0,0),l);break e}Of(n,a,Ie,Ri,Yo,t,bt,La,vn,fa,i,0,-0,0)}}break}while(!0);zt(e)}function Of(e,t,a,n,l,i,s,c,h,S,R,O,w,E){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Al={stylesheets:null,count:0,unsuspend:bp},Nf(t),O=yp(),O!==null)){e.cancelPendingCommit=O(Bf.bind(null,e,t,i,a,n,l,s,c,h,R,1,w,E)),pa(e,i,s,!S);return}Bf(e,t,i,a,n,l,s,c,h)}function qh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!nt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,a,n){t&=~qo,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-at(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&Gs(e,a,t)}function Mi(){return(ue&6)===0?(xl(0),!1):!0}function Xo(){if(le!==null){if(fe===0)var e=le.return;else e=le,Yt=Ua=null,io(e),hn=null,ol=0,e=le;for(;e!==null;)ff(e.alternate,e),e=e.return;le=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xo(),xe=e,le=a=Ut(e.current,null),re=t,fe=0,ot=null,fa=!1,bn=Cn(e,t),Ho=!1,vn=bt=qo=La=da=Ne=0,Ie=pl=null,Yo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-at(n),i=1<<l;t|=e[l],n&=~i}return Zt=t,Wl(),a}function Cf(e,t){ae=null,M.H=gi,t===In||t===ri?(t=Jc(),fe=3):t===Zc?(t=Jc(),fe=4):fe=t===$u?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,le===null&&(Ne=1,ji(e,mt(t,e.current)))}function _f(){var e=M.H;return M.H=gi,e===null?gi:e}function Uf(){var e=M.A;return M.A=Uh,e}function Qo(){Ne=4,fa||(re&4194048)!==re&&xt.current!==null||(bn=!0),(da&134217727)===0&&(La&134217727)===0||xe===null||pa(xe,re,bt,!1)}function Vo(e,t,a){var n=ue;ue|=2;var l=_f(),i=Uf();(xe!==e||re!==t)&&(Ri=null,Sn(e,t)),t=!1;var s=Ne;e:do try{if(fe!==0&&le!==null){var c=le,h=ot;switch(fe){case 8:Xo(),s=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var S=fe;if(fe=0,ot=null,An(e,c,h,S),a&&bn){s=0;break e}break;default:S=fe,fe=0,ot=null,An(e,c,h,S)}}Yh(),s=Ne;break}catch(R){Cf(e,R)}while(!0);return t&&e.shellSuspendCounter++,Yt=Ua=null,ue=n,M.H=l,M.A=i,le===null&&(xe=null,re=0,Wl()),s}function Yh(){for(;le!==null;)Hf(le)}function Bh(e,t){var a=ue;ue|=2;var n=_f(),l=Uf();xe!==e||re!==t?(Ri=null,Ti=Nt()+500,Sn(e,t)):bn=Cn(e,t);e:do try{if(fe!==0&&le!==null){t=le;var i=ot;t:switch(fe){case 1:fe=0,ot=null,An(e,t,i,1);break;case 2:case 9:if(Kc(i)){fe=0,ot=null,qf(t);break}t=function(){fe!==2&&fe!==9||xe!==e||(fe=7),zt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Kc(i)?(fe=0,ot=null,qf(t)):(fe=0,ot=null,An(e,t,i,7));break;case 5:var s=null;switch(le.tag){case 26:s=le.memoizedState;case 5:case 27:var c=le;if(!s||bd(s)){fe=0,ot=null;var h=c.sibling;if(h!==null)le=h;else{var S=c.return;S!==null?(le=S,zi(S)):le=null}break t}}fe=0,ot=null,An(e,t,i,5);break;case 6:fe=0,ot=null,An(e,t,i,6);break;case 8:Xo(),Ne=6;break e;default:throw Error(u(462))}}kh();break}catch(R){Cf(e,R)}while(!0);return Yt=Ua=null,M.H=n,M.A=l,ue=a,le!==null?0:(xe=null,re=0,Wl(),Ne)}function kh(){for(;le!==null&&!sm();)Hf(le)}function Hf(e){var t=cf(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?zi(e):le=t}function qf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=af(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=af(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:io(t);default:ff(a,t),t=le=qc(t,Zt),t=cf(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?zi(e):le=t}function An(e,t,a,n){Yt=Ua=null,io(t),hn=null,ol=0;var l=t.return;try{if(Mh(e,l,t,a,re)){Ne=1,ji(e,mt(a,e.current)),le=null;return}}catch(i){if(l!==null)throw le=l,i;Ne=1,ji(e,mt(a,e.current)),le=null;return}t.flags&32768?(ce||n===1?e=!0:bn||(re&536870912)!==0?e=!1:(fa=e=!0,(n===2||n===9||n===3||n===6)&&(n=xt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Yf(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){Yf(t,fa);return}e=t.return;var a=Dh(t.alternate,t,Zt);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Ne===0&&(Ne=5)}function Yf(e,t){do{var a=Oh(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Ne=6,le=null}function Bf(e,t,a,n,l,i,s,c,h){e.cancelPendingCommit=null;do Di();while(ke!==0);if((ue&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=_r,bm(e,a,i,s,c,h),e===xe&&(le=xe=null,re=0),yn=t,ha=e,jn=a,ko=i,Lo=l,Mf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qh(Hl,function(){return Qf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,l=q.p,q.p=2,s=ue,ue|=4;try{Ch(e,t,a)}finally{ue=s,q.p=l,M.T=n}}ke=1,kf(),Lf(),Gf()}}function kf(){if(ke===1){ke=0;var e=ha,t=yn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var n=q.p;q.p=2;var l=ue;ue|=4;try{Sf(t,e);var i=ns,s=Tc(e.containerInfo),c=i.focusedElem,h=i.selectionRange;if(s!==c&&c&&c.ownerDocument&&Ec(c.ownerDocument.documentElement,c)){if(h!==null&&Mr(c)){var S=h.start,R=h.end;if(R===void 0&&(R=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(R,c.value.length);else{var O=c.ownerDocument||document,w=O&&O.defaultView||window;if(w.getSelection){var E=w.getSelection(),$=c.textContent.length,K=Math.min(h.start,$),he=h.end===void 0?K:Math.min(h.end,$);!E.extend&&K>he&&(s=he,he=K,K=s);var v=Nc(c,K),x=Nc(c,he);if(v&&x&&(E.rangeCount!==1||E.anchorNode!==v.node||E.anchorOffset!==v.offset||E.focusNode!==x.node||E.focusOffset!==x.offset)){var j=O.createRange();j.setStart(v.node,v.offset),E.removeAllRanges(),K>he?(E.addRange(j),E.extend(x.node,x.offset)):(j.setEnd(x.node,x.offset),E.addRange(j))}}}}for(O=[],E=c;E=E.parentNode;)E.nodeType===1&&O.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var D=O[c];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Xi=!!as,ns=as=null}finally{ue=l,q.p=n,M.T=a}}e.current=t,ke=2}}function Lf(){if(ke===2){ke=0;var e=ha,t=yn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var n=q.p;q.p=2;var l=ue;ue|=4;try{bf(e,t.alternate,t)}finally{ue=l,q.p=n,M.T=a}}ke=3}}function Gf(){if(ke===4||ke===3){ke=0,cm();var e=ha,t=yn,a=jn,n=Mf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,yn=ha=null,Xf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ma=null),sr(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=M.T,l=q.p,q.p=2,M.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var c=n[s];i(c.value,{componentStack:c.stack})}}finally{M.T=t,q.p=l}}(jn&3)!==0&&Di(),zt(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Go?gl++:(gl=0,Go=e):gl=0,xl(0)}}function Xf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$n(t)))}function Di(e){return kf(),Lf(),Gf(),Qf()}function Qf(){if(ke!==5)return!1;var e=ha,t=ko;ko=0;var a=sr(jn),n=M.T,l=q.p;try{q.p=32>a?32:a,M.T=null,a=Lo,Lo=null;var i=ha,s=jn;if(ke=0,yn=ha=null,jn=0,(ue&6)!==0)throw Error(u(331));var c=ue;if(ue|=4,Tf(i.current),wf(i,i.current,s,a),ue=c,xl(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(On,i)}catch{}return!0}finally{q.p=l,M.T=n,Xf(e,t)}}function Vf(e,t,a){t=mt(a,t),t=yo(e.stateNode,t,2),e=la(e,t,2),e!==null&&(_n(e,2),zt(e))}function ge(e,t,a){if(e.tag===3)Vf(e,e,a);else for(;t!==null;){if(t.tag===3){Vf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ma===null||!ma.has(n))){e=mt(a,e),a=Fu(2),n=la(t,a,2),n!==null&&(Ju(a,n,t,e),_n(n,2),zt(n));break}}t=t.return}}function Zo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Hh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Ho=!0,l.add(a),e=Lh.bind(null,e,t,a),t.then(e,e))}function Lh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(Ne===4||Ne===3&&(re&62914560)===re&&300>Nt()-Bo?(ue&2)===0&&Sn(e,0):qo|=a,vn===re&&(vn=0)),zt(e)}function Zf(e,t){t===0&&(t=Ls()),e=nn(e,t),e!==null&&(_n(e,t),zt(e))}function Gh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zf(e,a)}function Xh(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Zf(e,a)}function Qh(e,t){return lr(e,t)}var Oi=null,wn=null,Ko=!1,Ci=!1,Fo=!1,Ga=0;function zt(e){e!==wn&&e.next===null&&(wn===null?Oi=wn=e:wn=wn.next=e),Ci=!0,Ko||(Ko=!0,Zh())}function xl(e,t){if(!Fo&&Ci){Fo=!0;do for(var a=!1,n=Oi;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,c=n.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=l&~(s&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,$f(n,i))}else i=re,i=Bl(n,n===xe?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Cn(n,i)||(a=!0,$f(n,i));n=n.next}while(a);Fo=!1}}function Vh(){Kf()}function Kf(){Ci=Ko=!1;var e=0;Ga!==0&&(ep()&&(e=Ga),Ga=0);for(var t=Nt(),a=null,n=Oi;n!==null;){var l=n.next,i=Ff(n,t);i===0?(n.next=null,a===null?Oi=l:a.next=l,l===null&&(wn=a)):(a=n,(e!==0||(i&3)!==0)&&(Ci=!0)),n=l}xl(e)}function Ff(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-at(i),c=1<<s,h=l[s];h===-1?((c&a)===0||(c&n)!==0)&&(l[s]=xm(c,t)):h<=t&&(e.expiredLanes|=c),i&=~c}if(t=xe,a=re,a=Bl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ir(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ir(n),sr(a)){case 2:case 8:a=Ys;break;case 32:a=Hl;break;case 268435456:a=Bs;break;default:a=Hl}return n=Jf.bind(null,e),a=lr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ir(n),e.callbackPriority=2,e.callbackNode=null,2}function Jf(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Di()&&e.callbackNode!==a)return null;var n=re;return n=Bl(e,e===xe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Df(e,n,t),Ff(e,Nt()),e.callbackNode!=null&&e.callbackNode===a?Jf.bind(null,e):null)}function $f(e,t){if(Di())return null;Df(e,t,!0)}function Zh(){ap(function(){(ue&6)!==0?lr(qs,Vh):Kf()})}function Jo(){return Ga===0&&(Ga=ks()),Ga}function Wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ql(""+e)}function If(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Kh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Wf((l[Fe]||null).action),s=n.submitter;s&&(t=(t=s[Fe]||null)?Wf(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var c=new Fl("action","action",null,n,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ga!==0){var h=s?If(l,s):new FormData(l);po(a,{pending:!0,data:h,method:l.method,action:i},null,h)}}else typeof i=="function"&&(c.preventDefault(),h=s?If(l,s):new FormData(l),po(a,{pending:!0,data:h,method:l.method,action:i},i,h))},currentTarget:l}]})}}for(var $o=0;$o<Cr.length;$o++){var Wo=Cr[$o],Fh=Wo.toLowerCase(),Jh=Wo[0].toUpperCase()+Wo.slice(1);yt(Fh,"on"+Jh)}yt(zc,"onAnimationEnd"),yt(Dc,"onAnimationIteration"),yt(Oc,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(dh,"onTransitionRun"),yt(mh,"onTransitionStart"),yt(hh,"onTransitionCancel"),yt(Cc,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function Pf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var c=n[s],h=c.instance,S=c.currentTarget;if(c=c.listener,h!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=S;try{i(l)}catch(R){yi(R)}l.currentTarget=null,i=h}else for(s=0;s<n.length;s++){if(c=n[s],h=c.instance,S=c.currentTarget,c=c.listener,h!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=S;try{i(l)}catch(R){yi(R)}l.currentTarget=null,i=h}}}}function ie(e,t){var a=t[cr];a===void 0&&(a=t[cr]=new Set);var n=e+"__bubble";a.has(n)||(ed(t,e,2,!1),a.add(n))}function Io(e,t,a){var n=0;t&&(n|=4),ed(a,e,n,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[_i]){e[_i]=!0,Zs.forEach(function(a){a!=="selectionchange"&&($h.has(a)||Io(a,!1,e),Io(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Io("selectionchange",!1,t))}}function ed(e,t,a,n){switch(wd(t)){case 2:var l=Ap;break;case 8:l=wp;break;default:l=ms}a=l.bind(null,t,a,e),l=void 0,!yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function es(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var c=n.stateNode.containerInfo;if(c===l)break;if(s===4)for(s=n.return;s!==null;){var h=s.tag;if((h===3||h===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;c!==null;){if(s=Qa(c),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){n=i=s;continue e}c=c.parentNode}}n=n.return}rc(function(){var S=i,R=br(a),O=[];e:{var w=_c.get(e);if(w!==void 0){var E=Fl,$=e;switch(e){case"keypress":if(Zl(a)===0)break e;case"keydown":case"keyup":E=Qm;break;case"focusin":$="focus",E=wr;break;case"focusout":$="blur",E=wr;break;case"beforeblur":case"afterblur":E=wr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Km;break;case zc:case Dc:case Oc:E=Um;break;case Cc:E=Jm;break;case"scroll":case"scrollend":E=zm;break;case"wheel":E=Wm;break;case"copy":case"cut":case"paste":E=qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=fc;break;case"toggle":case"beforetoggle":E=Pm}var K=(t&4)!==0,he=!K&&(e==="scroll"||e==="scrollend"),v=K?w!==null?w+"Capture":null:w;K=[];for(var x=S,j;x!==null;){var D=x;if(j=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||j===null||v===null||(D=qn(x,v),D!=null&&K.push(vl(x,D,j))),he)break;x=x.return}0<K.length&&(w=new E(w,$,null,a,R),O.push({event:w,listeners:K}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",w&&a!==xr&&($=a.relatedTarget||a.fromElement)&&(Qa($)||$[Xa]))break e;if((E||w)&&(w=R.window===R?R:(w=R.ownerDocument)?w.defaultView||w.parentWindow:window,E?($=a.relatedTarget||a.toElement,E=S,$=$?Qa($):null,$!==null&&(he=b($),K=$.tag,$!==he||K!==5&&K!==27&&K!==6)&&($=null)):(E=null,$=S),E!==$)){if(K=cc,D="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=fc,D="onPointerLeave",v="onPointerEnter",x="pointer"),he=E==null?w:Hn(E),j=$==null?w:Hn($),w=new K(D,x+"leave",E,a,R),w.target=he,w.relatedTarget=j,D=null,Qa(R)===S&&(K=new K(v,x+"enter",$,a,R),K.target=j,K.relatedTarget=he,D=K),he=D,E&&$)t:{for(K=E,v=$,x=0,j=K;j;j=Nn(j))x++;for(j=0,D=v;D;D=Nn(D))j++;for(;0<x-j;)K=Nn(K),x--;for(;0<j-x;)v=Nn(v),j--;for(;x--;){if(K===v||v!==null&&K===v.alternate)break t;K=Nn(K),v=Nn(v)}K=null}else K=null;E!==null&&td(O,w,E,K,!1),$!==null&&he!==null&&td(O,he,$,K,!0)}}e:{if(w=S?Hn(S):window,E=w.nodeName&&w.nodeName.toLowerCase(),E==="select"||E==="input"&&w.type==="file")var B=vc;else if(xc(w))if(yc)B=ch;else{B=oh;var ne=rh}else E=w.nodeName,!E||E.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?S&&gr(S.elementType)&&(B=vc):B=sh;if(B&&(B=B(e,S))){bc(O,B,a,R);break e}ne&&ne(e,w,S),e==="focusout"&&S&&w.type==="number"&&S.memoizedProps.value!=null&&pr(w,"number",w.value)}switch(ne=S?Hn(S):window,e){case"focusin":(xc(ne)||ne.contentEditable==="true")&&(en=ne,zr=S,Vn=null);break;case"focusout":Vn=zr=en=null;break;case"mousedown":Dr=!0;break;case"contextmenu":case"mouseup":case"dragend":Dr=!1,Rc(O,a,R);break;case"selectionchange":if(fh)break;case"keydown":case"keyup":Rc(O,a,R)}var X;if(Er)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Pa?pc(e,a)&&(F="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(F="onCompositionStart");F&&(dc&&a.locale!=="ko"&&(Pa||F!=="onCompositionStart"?F==="onCompositionEnd"&&Pa&&(X=oc()):(ea=R,jr="value"in ea?ea.value:ea.textContent,Pa=!0)),ne=Ui(S,F),0<ne.length&&(F=new uc(F,e,null,a,R),O.push({event:F,listeners:ne}),X?F.data=X:(X=gc(a),X!==null&&(F.data=X)))),(X=th?ah(e,a):nh(e,a))&&(F=Ui(S,"onBeforeInput"),0<F.length&&(ne=new uc("onBeforeInput","beforeinput",null,a,R),O.push({event:ne,listeners:F}),ne.data=X)),Kh(O,e,S,a,R)}Pf(O,t)})}function vl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ui(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=qn(e,a),l!=null&&n.unshift(vl(e,l,i)),l=qn(e,t),l!=null&&n.push(vl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function td(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var c=a,h=c.alternate,S=c.stateNode;if(c=c.tag,h!==null&&h===n)break;c!==5&&c!==26&&c!==27||S===null||(h=S,l?(S=qn(a,i),S!=null&&s.unshift(vl(a,S,h))):l||(S=qn(a,i),S!=null&&s.push(vl(a,S,h)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Wh=/\r\n?/g,Ih=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(Ih,"")}function nd(e,t){return t=ad(t),ad(e)===t}function Hi(){}function me(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||$a(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&$a(e,""+n);break;case"className":Ll(e,"class",n);break;case"tabIndex":Ll(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ll(e,a,n);break;case"style":lc(e,n,i);break;case"data":if(t!=="object"){Ll(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ql(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",l.name,l,null),me(e,t,"formEncType",l.formEncType,l,null),me(e,t,"formMethod",l.formMethod,l,null),me(e,t,"formTarget",l.formTarget,l,null)):(me(e,t,"encType",l.encType,l,null),me(e,t,"method",l.method,l,null),me(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ql(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Hi);break;case"onScroll":n!=null&&ie("scroll",e);break;case"onScrollEnd":n!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ql(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ie("beforetoggle",e),ie("toggle",e),kl(e,"popover",n);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":kl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rm.get(a)||a,kl(e,a,n))}}function ts(e,t,a,n,l,i){switch(a){case"style":lc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?$a(e,n):(typeof n=="number"||typeof n=="bigint")&&$a(e,""+n);break;case"onScroll":n!=null&&ie("scroll",e);break;case"onScrollEnd":n!=null&&ie("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ks.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[Fe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):kl(e,a,n)}}}function Le(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,i,s,a,null)}}l&&me(e,t,"srcSet",a.srcSet,a,null),n&&me(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var c=i=s=l=null,h=null,S=null;for(n in a)if(a.hasOwnProperty(n)){var R=a[n];if(R!=null)switch(n){case"name":l=R;break;case"type":s=R;break;case"checked":h=R;break;case"defaultChecked":S=R;break;case"value":i=R;break;case"defaultValue":c=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:me(e,t,n,R,a,null)}}ec(e,i,c,h,S,s,l,!1),Gl(e);return;case"select":ie("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(c=a[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":s=c;break;case"multiple":n=c;default:me(e,t,l,c,a,null)}t=i,a=s,e.multiple=!!n,t!=null?Ja(e,!!n,t,!1):a!=null&&Ja(e,!!n,a,!0);return;case"textarea":ie("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(c=a[s],c!=null))switch(s){case"value":n=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:me(e,t,s,c,a,null)}ac(e,n,l,i),Gl(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:me(e,t,h,n,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(n=0;n<bl.length;n++)ie(bl[n],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,S,n,a,null)}return;default:if(gr(t)){for(R in a)a.hasOwnProperty(R)&&(n=a[R],n!==void 0&&ts(e,t,R,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&me(e,t,c,n,a,null))}function Ph(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,c=null,h=null,S=null,R=null;for(E in a){var O=a[E];if(a.hasOwnProperty(E)&&O!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":h=O;default:n.hasOwnProperty(E)||me(e,t,E,null,n,O)}}for(var w in n){var E=n[w];if(O=a[w],n.hasOwnProperty(w)&&(E!=null||O!=null))switch(w){case"type":i=E;break;case"name":l=E;break;case"checked":S=E;break;case"defaultChecked":R=E;break;case"value":s=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:E!==O&&me(e,t,w,E,n,O)}}hr(e,s,c,h,S,R,i,l);return;case"select":E=s=c=w=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":E=h;default:n.hasOwnProperty(i)||me(e,t,i,null,n,h)}for(l in n)if(i=n[l],h=a[l],n.hasOwnProperty(l)&&(i!=null||h!=null))switch(l){case"value":w=i;break;case"defaultValue":c=i;break;case"multiple":s=i;default:i!==h&&me(e,t,l,i,n,h)}t=c,a=s,n=E,w!=null?Ja(e,!!a,w,!1):!!n!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":E=w=null;for(c in a)if(l=a[c],a.hasOwnProperty(c)&&l!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:me(e,t,c,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":w=l;break;case"defaultValue":E=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&me(e,t,s,l,n,i)}tc(e,w,E);return;case"option":for(var $ in a)if(w=a[$],a.hasOwnProperty($)&&w!=null&&!n.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:me(e,t,$,null,n,w)}for(h in n)if(w=n[h],E=a[h],n.hasOwnProperty(h)&&w!==E&&(w!=null||E!=null))switch(h){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:me(e,t,h,w,n,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)w=a[K],a.hasOwnProperty(K)&&w!=null&&!n.hasOwnProperty(K)&&me(e,t,K,null,n,w);for(S in n)if(w=n[S],E=a[S],n.hasOwnProperty(S)&&w!==E&&(w!=null||E!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:me(e,t,S,w,n,E)}return;default:if(gr(t)){for(var he in a)w=a[he],a.hasOwnProperty(he)&&w!==void 0&&!n.hasOwnProperty(he)&&ts(e,t,he,void 0,n,w);for(R in n)w=n[R],E=a[R],!n.hasOwnProperty(R)||w===E||w===void 0&&E===void 0||ts(e,t,R,w,n,E);return}}for(var v in a)w=a[v],a.hasOwnProperty(v)&&w!=null&&!n.hasOwnProperty(v)&&me(e,t,v,null,n,w);for(O in n)w=n[O],E=a[O],!n.hasOwnProperty(O)||w===E||w==null&&E==null||me(e,t,O,w,n,E)}var as=null,ns=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function ld(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var is=null;function ep(){var e=window.event;return e&&e.type==="popstate"?e===is?!1:(is=e,!0):(is=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,ap=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(np)}:rd;function np(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function sd(e,t){var a=t,n=0,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<n&&8>n){a=n;var s=e.ownerDocument;if(a&1&&yl(s.documentElement),a&2&&yl(s.body),a&4)for(a=s.head,yl(a),s=a.firstChild;s;){var c=s.nextSibling,h=s.nodeName;s[Un]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}if(l===0){e.removeChild(i),Rl(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=i}while(a);Rl(t)}function rs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rs(a),ur(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lp(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function ip(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function os(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rp(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ss=null;function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ud(e,t,a){switch(t=qi(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function yl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ur(e)}var vt=new Map,fd=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=q.d;q.d={f:op,r:sp,D:cp,C:up,L:fp,m:dp,X:hp,S:mp,M:pp};function op(){var e=Kt.f(),t=Mi();return e||t}function sp(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?zu(t):Kt.r(e)}var En=typeof document>"u"?null:document;function dd(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var l=dt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),fd.has(l)||(fd.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Le(t,"link",e),Ue(t),n.head.appendChild(t)))}}function cp(e){Kt.D(e),dd("dns-prefetch",e,null)}function up(e,t){Kt.C(e,t),dd("preconnect",e,t)}function fp(e,t,a){Kt.L(e,t,a);var n=En;if(n&&e&&t){var l='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+dt(a.imageSizes)+'"]')):l+='[href="'+dt(e)+'"]';var i=l;switch(t){case"style":i=Tn(e);break;case"script":i=Rn(e)}vt.has(i)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(jl(i))||t==="script"&&n.querySelector(Sl(i))||(t=n.createElement("link"),Le(t,"link",e),Ue(t),n.head.appendChild(t)))}}function dp(e,t){Kt.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+dt(n)+'"][href="'+dt(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rn(e)}if(!vt.has(i)&&(e=A({rel:"modulepreload",href:e},t),vt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(i)))return}n=a.createElement("link"),Le(n,"link",e),Ue(n),a.head.appendChild(n)}}}function mp(e,t,a){Kt.S(e,t,a);var n=En;if(n&&e){var l=Za(n).hoistableStyles,i=Tn(e);t=t||"default";var s=l.get(i);if(!s){var c={loading:0,preload:null};if(s=n.querySelector(jl(i)))c.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(i))&&cs(e,a);var h=s=n.createElement("link");Ue(h),Le(h,"link",e),h._p=new Promise(function(S,R){h.onload=S,h.onerror=R}),h.addEventListener("load",function(){c.loading|=1}),h.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Bi(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:c},l.set(i,s)}}}function hp(e,t){Kt.X(e,t);var a=En;if(a&&e){var n=Za(a).hoistableScripts,l=Rn(e),i=n.get(l);i||(i=a.querySelector(Sl(l)),i||(e=A({src:e,async:!0},t),(t=vt.get(l))&&us(e,t),i=a.createElement("script"),Ue(i),Le(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function pp(e,t){Kt.M(e,t);var a=En;if(a&&e){var n=Za(a).hoistableScripts,l=Rn(e),i=n.get(l);i||(i=a.querySelector(Sl(l)),i||(e=A({src:e,async:!0,type:"module"},t),(t=vt.get(l))&&us(e,t),i=a.createElement("script"),Ue(i),Le(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function md(e,t,a,n){var l=(l=P.current)?Yi(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tn(a.href),a=Za(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tn(a.href);var i=Za(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(jl(e)))&&!i._p&&(s.instance=i,s.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),i||gp(l,e,a,s.state))),t&&n===null)throw Error(u(528,""));return s}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rn(a),a=Za(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Tn(e){return'href="'+dt(e)+'"'}function jl(e){return'link[rel="stylesheet"]['+e+"]"}function hd(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function gp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Le(t,"link",a),Ue(t),e.head.appendChild(t))}function Rn(e){return'[src="'+dt(e)+'"]'}function Sl(e){return"script[async]"+e}function pd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+dt(a.href)+'"]');if(n)return t.instance=n,Ue(n),n;var l=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ue(n),Le(n,"style",l),Bi(n,a.precedence,e),t.instance=n;case"stylesheet":l=Tn(a.href);var i=e.querySelector(jl(l));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;n=hd(a),(l=vt.get(l))&&cs(n,l),i=(e.ownerDocument||e).createElement("link"),Ue(i);var s=i;return s._p=new Promise(function(c,h){s.onload=c,s.onerror=h}),Le(i,"link",n),t.state.loading|=4,Bi(i,a.precedence,e),t.instance=i;case"script":return i=Rn(a.src),(l=e.querySelector(Sl(i)))?(t.instance=l,Ue(l),l):(n=a,(l=vt.get(i))&&(n=A({},a),us(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ue(l),Le(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Bi(n,a.precedence,e));return t.instance}function Bi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var c=n[s];if(c.dataset.precedence===t)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function cs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function us(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ki=null;function gd(e,t,a){if(ki===null){var n=new Map,l=ki=new Map;l.set(a,n)}else l=ki,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[Un]||i[Qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var c=n.get(s);c?c.push(i):n.set(s,[i])}}return n}function xd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function xp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Al=null;function bp(){}function vp(e,t,a){if(Al===null)throw Error(u(475));var n=Al;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Tn(a.href),i=e.querySelector(jl(l));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Li.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=i,Ue(i);return}i=e.ownerDocument||e,a=hd(a),(l=vt.get(l))&&cs(a,l),i=i.createElement("link"),Ue(i);var s=i;s._p=new Promise(function(c,h){s.onload=c,s.onerror=h}),Le(i,"link",a),t.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Li.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function yp(){if(Al===null)throw Error(u(475));var e=Al;return e.stylesheets&&e.count===0&&fs(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Li(){if(this.count--,this.count===0){if(this.stylesheets)fs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gi=null;function fs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gi=new Map,t.forEach(jp,e),Gi=null,Li.call(e))}function jp(e,t){if(!(t.state.loading&4)){var a=Gi.get(e);if(a)var n=a.get(null);else{a=new Map,Gi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=Li.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var wl={$$typeof:ee,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Sp(e,t,a,n,l,i,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function vd(e,t,a,n,l,i,s,c,h,S,R,O){return e=new Sp(e,t,a,s,c,h,S,O),t=1,i===!0&&(t|=24),i=lt(3,null,null,t),e.current=i,i.stateNode=e,t=Vr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Jr(i),e}function yd(e){return e?(e=ln,e):ln}function jd(e,t,a,n,l,i){l=yd(l),n.context===null?n.context=l:n.pendingContext=l,n=na(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=la(e,n,t),a!==null&&(ct(a,e,t),el(a,e,t))}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ds(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function Ad(e){if(e.tag===13){var t=nn(e,67108864);t!==null&&ct(t,e,67108864),ds(e,67108864)}}var Xi=!0;function Ap(e,t,a,n){var l=M.T;M.T=null;var i=q.p;try{q.p=2,ms(e,t,a,n)}finally{q.p=i,M.T=l}}function wp(e,t,a,n){var l=M.T;M.T=null;var i=q.p;try{q.p=8,ms(e,t,a,n)}finally{q.p=i,M.T=l}}function ms(e,t,a,n){if(Xi){var l=hs(n);if(l===null)es(e,t,n,Qi,a),Nd(e,n);else if(Ep(l,e,t,a,n))n.stopPropagation();else if(Nd(e,n),t&4&&-1<Np.indexOf(e)){for(;l!==null;){var i=Va(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Na(i.pendingLanes);if(s!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var h=1<<31-at(s);c.entanglements[1]|=h,s&=~h}zt(i),(ue&6)===0&&(Ti=Nt()+500,xl(0))}}break;case 13:c=nn(i,2),c!==null&&ct(c,i,2),Mi(),ds(i,2)}if(i=hs(n),i===null&&es(e,t,n,Qi,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else es(e,t,n,null,a)}}function hs(e){return e=br(e),ps(e)}var Qi=null;function ps(e){if(Qi=null,e=Qa(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=N(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qi=e,null}function wd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(um()){case qs:return 2;case Ys:return 8;case Hl:case fm:return 32;case Bs:return 268435456;default:return 32}default:return 32}}var gs=!1,xa=null,ba=null,va=null,Nl=new Map,El=new Map,ya=[],Np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(t.pointerId)}}function Tl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Va(t),t!==null&&Ad(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ep(e,t,a,n,l){switch(t){case"focusin":return xa=Tl(xa,e,t,a,n,l),!0;case"dragenter":return ba=Tl(ba,e,t,a,n,l),!0;case"mouseover":return va=Tl(va,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return Nl.set(i,Tl(Nl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,El.set(i,Tl(El.get(i)||null,e,t,a,n,l)),!0}return!1}function Ed(e){var t=Qa(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=N(a),t!==null){e.blockedOn=t,vm(e.priority,function(){if(a.tag===13){var n=st();n=or(n);var l=nn(a,n);l!==null&&ct(l,a,n),ds(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=hs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);xr=n,a.target.dispatchEvent(n),xr=null}else return t=Va(a),t!==null&&Ad(t),e.blockedOn=a,!1;t.shift()}return!0}function Td(e,t,a){Vi(e)&&a.delete(t)}function Tp(){gs=!1,xa!==null&&Vi(xa)&&(xa=null),ba!==null&&Vi(ba)&&(ba=null),va!==null&&Vi(va)&&(va=null),Nl.forEach(Td),El.forEach(Td)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,gs||(gs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Tp)))}var Ki=null;function Rd(e){Ki!==e&&(Ki=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(ps(n||a)===null)continue;break}var i=Va(a);i!==null&&(e.splice(t,3),t-=3,po(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Rl(e){function t(h){return Zi(h,e)}xa!==null&&Zi(xa,e),ba!==null&&Zi(ba,e),va!==null&&Zi(va,e),Nl.forEach(t),El.forEach(t);for(var a=0;a<ya.length;a++){var n=ya[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)Ed(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[Fe]||null;if(typeof i=="function")s||Rd(a);else if(s){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Fe]||null)c=s.formAction;else if(ps(l)!==null)continue}else c=s.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),Rd(a)}}}function xs(e){this._internalRoot=e}Fi.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=st();jd(a,n,e,t,null,null)},Fi.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jd(e.current,2,null,e,null,null),Mi(),t[Xa]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&Ed(e)}};var Md=f.version;if(Md!=="19.1.1")throw Error(u(527,Md,"19.1.1"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{On=Ji.inject(Rp),tt=Ji}catch{}}return zl.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,n="",l=Qu,i=Vu,s=Zu,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=vd(e,1,!1,null,null,a,n,l,i,s,c,null),e[Xa]=t.current,Po(e),new xs(t)},zl.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var n=!1,l="",i=Qu,s=Vu,c=Zu,h=null,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(S=a.formState)),t=vd(e,1,!0,t,a??null,n,l,i,s,c,h,S),t.context=yd(null),a=t.current,n=st(),n=or(n),l=na(n),l.callback=null,la(a,l,n),a=n,t.current.lanes=a,_n(t,a),zt(t),e[Xa]=t.current,Po(e),new Fi(t)},zl.version="19.1.1",zl}var Bd;function Bp(){if(Bd)return ys.exports;Bd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),ys.exports=Yp(),ys.exports}var kp=Bp();const Lp=Kd(kp);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var kd="popstate";function Gp(o={}){function f(u,m){let{pathname:b,search:N,hash:z}=u.location;return Es("",{pathname:b,search:N,hash:z},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(u,m){return typeof m=="string"?m:Ol(m)}return Qp(f,d,null,o)}function ye(o,f){if(o===!1||o===null||typeof o>"u")throw new Error(f)}function At(o,f){if(!o){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Xp(){return Math.random().toString(36).substring(2,10)}function Ld(o,f){return{usr:o.state,key:o.key,idx:f}}function Es(o,f,d=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof f=="string"?Mn(f):f,state:d,key:f&&f.key||u||Xp()}}function Ol({pathname:o="/",search:f="",hash:d=""}){return f&&f!=="?"&&(o+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function Mn(o){let f={};if(o){let d=o.indexOf("#");d>=0&&(f.hash=o.substring(d),o=o.substring(0,d));let u=o.indexOf("?");u>=0&&(f.search=o.substring(u),o=o.substring(0,u)),o&&(f.pathname=o)}return f}function Qp(o,f,d,u={}){let{window:m=document.defaultView,v5Compat:b=!1}=u,N=m.history,z="POP",y=null,p=A();p==null&&(p=0,N.replaceState({...N.state,idx:p},""));function A(){return(N.state||{idx:null}).idx}function _(){z="POP";let k=A(),V=k==null?null:k-p;p=k,y&&y({action:z,location:W.location,delta:V})}function U(k,V){z="PUSH";let L=Es(W.location,k,V);p=A()+1;let ee=Ld(L,p),je=W.createHref(L);try{N.pushState(ee,"",je)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;m.location.assign(je)}b&&y&&y({action:z,location:W.location,delta:1})}function G(k,V){z="REPLACE";let L=Es(W.location,k,V);p=A();let ee=Ld(L,p),je=W.createHref(L);N.replaceState(ee,"",je),b&&y&&y({action:z,location:W.location,delta:0})}function Q(k){return Vp(k)}let W={get action(){return z},get location(){return o(m,N)},listen(k){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(kd,_),y=k,()=>{m.removeEventListener(kd,_),y=null}},createHref(k){return f(m,k)},createURL:Q,encodeLocation(k){let V=Q(k);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:U,replace:G,go(k){return N.go(k)}};return W}function Vp(o,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),ye(d,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:Ol(o);return u=u.replace(/ $/,"%20"),!f&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function Fd(o,f,d="/"){return Zp(o,f,d,!1)}function Zp(o,f,d,u){let m=typeof f=="string"?Mn(f):f,b=Jt(m.pathname||"/",d);if(b==null)return null;let N=Jd(o);Kp(N);let z=null;for(let y=0;z==null&&y<N.length;++y){let p=lg(b);z=ag(N[y],p,u)}return z}function Jd(o,f=[],d=[],u="",m=!1){let b=(N,z,y=m,p)=>{let A={relativePath:p===void 0?N.path||"":p,caseSensitive:N.caseSensitive===!0,childrenIndex:z,route:N};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(u)&&y)return;ye(A.relativePath.startsWith(u),`Absolute route path "${A.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(u.length)}let _=Ft([u,A.relativePath]),U=d.concat(A);N.children&&N.children.length>0&&(ye(N.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Jd(N.children,f,U,_,y)),!(N.path==null&&!N.index)&&f.push({path:_,score:eg(_,N.index),routesMeta:U})};return o.forEach((N,z)=>{if(N.path===""||!N.path?.includes("?"))b(N,z);else for(let y of $d(N.path))b(N,z,!0,y)}),f}function $d(o){let f=o.split("/");if(f.length===0)return[];let[d,...u]=f,m=d.endsWith("?"),b=d.replace(/\?$/,"");if(u.length===0)return m?[b,""]:[b];let N=$d(u.join("/")),z=[];return z.push(...N.map(y=>y===""?b:[b,y].join("/"))),m&&z.push(...N),z.map(y=>o.startsWith("/")&&y===""?"/":y)}function Kp(o){o.sort((f,d)=>f.score!==d.score?d.score-f.score:tg(f.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Fp=/^:[\w-]+$/,Jp=3,$p=2,Wp=1,Ip=10,Pp=-2,Gd=o=>o==="*";function eg(o,f){let d=o.split("/"),u=d.length;return d.some(Gd)&&(u+=Pp),f&&(u+=$p),d.filter(m=>!Gd(m)).reduce((m,b)=>m+(Fp.test(b)?Jp:b===""?Wp:Ip),u)}function tg(o,f){return o.length===f.length&&o.slice(0,-1).every((u,m)=>u===f[m])?o[o.length-1]-f[f.length-1]:0}function ag(o,f,d=!1){let{routesMeta:u}=o,m={},b="/",N=[];for(let z=0;z<u.length;++z){let y=u[z],p=z===u.length-1,A=b==="/"?f:f.slice(b.length)||"/",_=Pi({path:y.relativePath,caseSensitive:y.caseSensitive,end:p},A),U=y.route;if(!_&&p&&d&&!u[u.length-1].route.index&&(_=Pi({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},A)),!_)return null;Object.assign(m,_.params),N.push({params:m,pathname:Ft([b,_.pathname]),pathnameBase:sg(Ft([b,_.pathnameBase])),route:U}),_.pathnameBase!=="/"&&(b=Ft([b,_.pathnameBase]))}return N}function Pi(o,f){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[d,u]=ng(o.path,o.caseSensitive,o.end),m=f.match(d);if(!m)return null;let b=m[0],N=b.replace(/(.)\/+$/,"$1"),z=m.slice(1);return{params:u.reduce((p,{paramName:A,isOptional:_},U)=>{if(A==="*"){let Q=z[U]||"";N=b.slice(0,b.length-Q.length).replace(/(.)\/+$/,"$1")}const G=z[U];return _&&!G?p[A]=void 0:p[A]=(G||"").replace(/%2F/g,"/"),p},{}),pathname:b,pathnameBase:N,pattern:o}}function ng(o,f=!1,d=!0){At(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(N,z,y)=>(u.push({paramName:z,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),u]}function lg(o){try{return o.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return At(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),o}}function Jt(o,f){if(f==="/")return o;if(!o.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,u=o.charAt(d);return u&&u!=="/"?null:o.slice(d)||"/"}function ig(o,f="/"){let{pathname:d,search:u="",hash:m=""}=typeof o=="string"?Mn(o):o;return{pathname:d?d.startsWith("/")?d:rg(d,f):f,search:cg(u),hash:ug(m)}}function rg(o,f){let d=f.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function ws(o,f,d,u){return`Cannot include a '${o}' character in a manually specified \`to.${f}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function og(o){return o.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function Ms(o){let f=og(o);return f.map((d,u)=>u===f.length-1?d.pathname:d.pathnameBase)}function zs(o,f,d,u=!1){let m;typeof o=="string"?m=Mn(o):(m={...o},ye(!m.pathname||!m.pathname.includes("?"),ws("?","pathname","search",m)),ye(!m.pathname||!m.pathname.includes("#"),ws("#","pathname","hash",m)),ye(!m.search||!m.search.includes("#"),ws("#","search","hash",m)));let b=o===""||m.pathname==="",N=b?"/":m.pathname,z;if(N==null)z=d;else{let _=f.length-1;if(!u&&N.startsWith("..")){let U=N.split("/");for(;U[0]==="..";)U.shift(),_-=1;m.pathname=U.join("/")}z=_>=0?f[_]:"/"}let y=ig(m,z),p=N&&N!=="/"&&N.endsWith("/"),A=(b||N===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(p||A)&&(y.pathname+="/"),y}var Ft=o=>o.join("/").replace(/\/\/+/g,"/"),sg=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),cg=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,ug=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function fg(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var Wd=["POST","PUT","PATCH","DELETE"];new Set(Wd);var dg=["GET",...Wd];new Set(dg);var zn=T.createContext(null);zn.displayName="DataRouter";var er=T.createContext(null);er.displayName="DataRouterState";T.createContext(!1);var Id=T.createContext({isTransitioning:!1});Id.displayName="ViewTransition";var mg=T.createContext(new Map);mg.displayName="Fetchers";var hg=T.createContext(null);hg.displayName="Await";var wt=T.createContext(null);wt.displayName="Navigation";var Cl=T.createContext(null);Cl.displayName="Location";var Ot=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var Ds=T.createContext(null);Ds.displayName="RouteError";function pg(o,{relative:f}={}){ye(Dn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=T.useContext(wt),{hash:m,pathname:b,search:N}=_l(o,{relative:f}),z=b;return d!=="/"&&(z=b==="/"?d:Ft([d,b])),u.createHref({pathname:z,search:N,hash:m})}function Dn(){return T.useContext(Cl)!=null}function $t(){return ye(Dn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Cl).location}var Pd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function em(o){T.useContext(wt).static||T.useLayoutEffect(o)}function Os(){let{isDataRoute:o}=T.useContext(Ot);return o?Rg():gg()}function gg(){ye(Dn(),"useNavigate() may be used only in the context of a <Router> component.");let o=T.useContext(zn),{basename:f,navigator:d}=T.useContext(wt),{matches:u}=T.useContext(Ot),{pathname:m}=$t(),b=JSON.stringify(Ms(u)),N=T.useRef(!1);return em(()=>{N.current=!0}),T.useCallback((y,p={})=>{if(At(N.current,Pd),!N.current)return;if(typeof y=="number"){d.go(y);return}let A=zs(y,JSON.parse(b),m,p.relative==="path");o==null&&f!=="/"&&(A.pathname=A.pathname==="/"?f:Ft([f,A.pathname])),(p.replace?d.replace:d.push)(A,p.state,p)},[f,d,b,m,o])}T.createContext(null);function _l(o,{relative:f}={}){let{matches:d}=T.useContext(Ot),{pathname:u}=$t(),m=JSON.stringify(Ms(d));return T.useMemo(()=>zs(o,JSON.parse(m),u,f==="path"),[o,m,u,f])}function xg(o,f){return tm(o,f)}function tm(o,f,d,u,m){ye(Dn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=T.useContext(wt),{matches:N}=T.useContext(Ot),z=N[N.length-1],y=z?z.params:{},p=z?z.pathname:"/",A=z?z.pathnameBase:"/",_=z&&z.route;{let L=_&&_.path||"";am(p,!_||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let U=$t(),G;if(f){let L=typeof f=="string"?Mn(f):f;ye(A==="/"||L.pathname?.startsWith(A),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${L.pathname}" was given in the \`location\` prop.`),G=L}else G=U;let Q=G.pathname||"/",W=Q;if(A!=="/"){let L=A.replace(/^\//,"").split("/");W="/"+Q.replace(/^\//,"").split("/").slice(L.length).join("/")}let k=Fd(o,{pathname:W});At(_||k!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),At(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Sg(k&&k.map(L=>Object.assign({},L,{params:Object.assign({},y,L.params),pathname:Ft([A,b.encodeLocation?b.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?A:Ft([A,b.encodeLocation?b.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),N,d,u,m);return f&&V?T.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},V):V}function bg(){let o=Tg(),f=fg(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),d=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},b={padding:"2px 4px",backgroundColor:u},N=null;return console.error("Error handled by React Router default ErrorBoundary:",o),N=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:b},"ErrorBoundary")," or"," ",T.createElement("code",{style:b},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},f),d?T.createElement("pre",{style:m},d):null,N)}var vg=T.createElement(bg,null),yg=class extends T.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,f){return f.location!==o.location||f.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:f.error,location:f.location,revalidation:o.revalidation||f.revalidation}}componentDidCatch(o,f){this.props.unstable_onError?this.props.unstable_onError(o,f):console.error("React Router caught the following error during render",o)}render(){return this.state.error!==void 0?T.createElement(Ot.Provider,{value:this.props.routeContext},T.createElement(Ds.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jg({routeContext:o,match:f,children:d}){let u=T.useContext(zn);return u&&u.static&&u.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=f.route.id),T.createElement(Ot.Provider,{value:o},d)}function Sg(o,f=[],d=null,u=null,m=null){if(o==null){if(!d)return null;if(d.errors)o=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)o=d.matches;else return null}let b=o,N=d?.errors;if(N!=null){let p=b.findIndex(A=>A.route.id&&N?.[A.route.id]!==void 0);ye(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(N).join(",")}`),b=b.slice(0,Math.min(b.length,p+1))}let z=!1,y=-1;if(d)for(let p=0;p<b.length;p++){let A=b[p];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(y=p),A.route.id){let{loaderData:_,errors:U}=d,G=A.route.loader&&!_.hasOwnProperty(A.route.id)&&(!U||U[A.route.id]===void 0);if(A.route.lazy||G){z=!0,y>=0?b=b.slice(0,y+1):b=[b[0]];break}}}return b.reduceRight((p,A,_)=>{let U,G=!1,Q=null,W=null;d&&(U=N&&A.route.id?N[A.route.id]:void 0,Q=A.route.errorElement||vg,z&&(y<0&&_===0?(am("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,W=null):y===_&&(G=!0,W=A.route.hydrateFallbackElement||null)));let k=f.concat(b.slice(0,_+1)),V=()=>{let L;return U?L=Q:G?L=W:A.route.Component?L=T.createElement(A.route.Component,null):A.route.element?L=A.route.element:L=p,T.createElement(jg,{match:A,routeContext:{outlet:p,matches:k,isDataRoute:d!=null},children:L})};return d&&(A.route.ErrorBoundary||A.route.errorElement||_===0)?T.createElement(yg,{location:d.location,revalidation:d.revalidation,component:Q,error:U,children:V(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:u}):V()},null)}function Cs(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ag(o){let f=T.useContext(zn);return ye(f,Cs(o)),f}function wg(o){let f=T.useContext(er);return ye(f,Cs(o)),f}function Ng(o){let f=T.useContext(Ot);return ye(f,Cs(o)),f}function _s(o){let f=Ng(o),d=f.matches[f.matches.length-1];return ye(d.route.id,`${o} can only be used on routes that contain a unique "id"`),d.route.id}function Eg(){return _s("useRouteId")}function Tg(){let o=T.useContext(Ds),f=wg("useRouteError"),d=_s("useRouteError");return o!==void 0?o:f.errors?.[d]}function Rg(){let{router:o}=Ag("useNavigate"),f=_s("useNavigate"),d=T.useRef(!1);return em(()=>{d.current=!0}),T.useCallback(async(m,b={})=>{At(d.current,Pd),d.current&&(typeof m=="number"?o.navigate(m):await o.navigate(m,{fromRouteId:f,...b}))},[o,f])}var Xd={};function am(o,f,d){!f&&!Xd[o]&&(Xd[o]=!0,At(!1,d))}T.memo(Mg);function Mg({routes:o,future:f,state:d,unstable_onError:u}){return tm(o,void 0,d,u,f)}function Qd({to:o,replace:f,state:d,relative:u}){ye(Dn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=T.useContext(wt);At(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:b}=T.useContext(Ot),{pathname:N}=$t(),z=Os(),y=zs(o,Ms(b),N,u==="path"),p=JSON.stringify(y);return T.useEffect(()=>{z(JSON.parse(p),{replace:f,state:d,relative:u})},[z,p,u,f,d]),null}function Dt(o){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zg({basename:o="/",children:f=null,location:d,navigationType:u="POP",navigator:m,static:b=!1}){ye(!Dn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=o.replace(/^\/*/,"/"),z=T.useMemo(()=>({basename:N,navigator:m,static:b,future:{}}),[N,m,b]);typeof d=="string"&&(d=Mn(d));let{pathname:y="/",search:p="",hash:A="",state:_=null,key:U="default"}=d,G=T.useMemo(()=>{let Q=Jt(y,N);return Q==null?null:{location:{pathname:Q,search:p,hash:A,state:_,key:U},navigationType:u}},[N,y,p,A,_,U,u]);return At(G!=null,`<Router basename="${N}"> is not able to match the URL "${y}${p}${A}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:T.createElement(wt.Provider,{value:z},T.createElement(Cl.Provider,{children:f,value:G}))}function Dg({children:o,location:f}){return xg(Ts(o),f)}function Ts(o,f=[]){let d=[];return T.Children.forEach(o,(u,m)=>{if(!T.isValidElement(u))return;let b=[...f,m];if(u.type===T.Fragment){d.push.apply(d,Ts(u.props.children,b));return}ye(u.type===Dt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!u.props.index||!u.props.children,"An index route cannot have child routes.");let N={id:u.props.id||b.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(N.children=Ts(u.props.children,b)),d.push(N)}),d}var Wi="get",Ii="application/x-www-form-urlencoded";function tr(o){return o!=null&&typeof o.tagName=="string"}function Og(o){return tr(o)&&o.tagName.toLowerCase()==="button"}function Cg(o){return tr(o)&&o.tagName.toLowerCase()==="form"}function _g(o){return tr(o)&&o.tagName.toLowerCase()==="input"}function Ug(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Hg(o,f){return o.button===0&&(!f||f==="_self")&&!Ug(o)}var $i=null;function qg(){if($i===null)try{new FormData(document.createElement("form"),0),$i=!1}catch{$i=!0}return $i}var Yg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ns(o){return o!=null&&!Yg.has(o)?(At(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`),null):o}function Bg(o,f){let d,u,m,b,N;if(Cg(o)){let z=o.getAttribute("action");u=z?Jt(z,f):null,d=o.getAttribute("method")||Wi,m=Ns(o.getAttribute("enctype"))||Ii,b=new FormData(o)}else if(Og(o)||_g(o)&&(o.type==="submit"||o.type==="image")){let z=o.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=o.getAttribute("formaction")||z.getAttribute("action");if(u=y?Jt(y,f):null,d=o.getAttribute("formmethod")||z.getAttribute("method")||Wi,m=Ns(o.getAttribute("formenctype"))||Ns(z.getAttribute("enctype"))||Ii,b=new FormData(z,o),!qg()){let{name:p,type:A,value:_}=o;if(A==="image"){let U=p?`${p}.`:"";b.append(`${U}x`,"0"),b.append(`${U}y`,"0")}else p&&b.append(p,_)}}else{if(tr(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Wi,u=null,m=Ii,N=o}return b&&m==="text/plain"&&(N=b,b=void 0),{action:u,method:d.toLowerCase(),encType:m,formData:b,body:N}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Us(o,f){if(o===!1||o===null||typeof o>"u")throw new Error(f)}function kg(o,f,d){let u=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return u.pathname==="/"?u.pathname=`_root.${d}`:f&&Jt(u.pathname,f)==="/"?u.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${d}`,u}async function Lg(o,f){if(o.id in f)return f[o.id];try{let d=await import(o.module);return f[o.id]=d,d}catch(d){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gg(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Xg(o,f,d){let u=await Promise.all(o.map(async m=>{let b=f.routes[m.route.id];if(b){let N=await Lg(b,d);return N.links?N.links():[]}return[]}));return Kg(u.flat(1).filter(Gg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Vd(o,f,d,u,m,b){let N=(y,p)=>d[p]?y.route.id!==d[p].route.id:!0,z=(y,p)=>d[p].pathname!==y.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==y.params["*"];return b==="assets"?f.filter((y,p)=>N(y,p)||z(y,p)):b==="data"?f.filter((y,p)=>{let A=u.routes[y.route.id];if(!A||!A.hasLoader)return!1;if(N(y,p)||z(y,p))return!0;if(y.route.shouldRevalidate){let _=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Qg(o,f,{includeHydrateFallback:d}={}){return Vg(o.map(u=>{let m=f.routes[u.route.id];if(!m)return[];let b=[m.module];return m.clientActionModule&&(b=b.concat(m.clientActionModule)),m.clientLoaderModule&&(b=b.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(b=b.concat(m.hydrateFallbackModule)),m.imports&&(b=b.concat(m.imports)),b}).flat(1))}function Vg(o){return[...new Set(o)]}function Zg(o){let f={},d=Object.keys(o).sort();for(let u of d)f[u]=o[u];return f}function Kg(o,f){let d=new Set;return new Set(f),o.reduce((u,m)=>{let b=JSON.stringify(Zg(m));return d.has(b)||(d.add(b),u.push({key:b,link:m})),u},[])}function nm(){let o=T.useContext(zn);return Us(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Fg(){let o=T.useContext(er);return Us(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Hs=T.createContext(void 0);Hs.displayName="FrameworkContext";function lm(){let o=T.useContext(Hs);return Us(o,"You must render this element inside a <HydratedRouter> element"),o}function Jg(o,f){let d=T.useContext(Hs),[u,m]=T.useState(!1),[b,N]=T.useState(!1),{onFocus:z,onBlur:y,onMouseEnter:p,onMouseLeave:A,onTouchStart:_}=f,U=T.useRef(null);T.useEffect(()=>{if(o==="render"&&N(!0),o==="viewport"){let W=V=>{V.forEach(L=>{N(L.isIntersecting)})},k=new IntersectionObserver(W,{threshold:.5});return U.current&&k.observe(U.current),()=>{k.disconnect()}}},[o]),T.useEffect(()=>{if(u){let W=setTimeout(()=>{N(!0)},100);return()=>{clearTimeout(W)}}},[u]);let G=()=>{m(!0)},Q=()=>{m(!1),N(!1)};return d?o!=="intent"?[b,U,{}]:[b,U,{onFocus:Dl(z,G),onBlur:Dl(y,Q),onMouseEnter:Dl(p,G),onMouseLeave:Dl(A,Q),onTouchStart:Dl(_,G)}]:[!1,U,{}]}function Dl(o,f){return d=>{o&&o(d),d.defaultPrevented||f(d)}}function $g({page:o,...f}){let{router:d}=nm(),u=T.useMemo(()=>Fd(d.routes,o,d.basename),[d.routes,o,d.basename]);return u?T.createElement(Ig,{page:o,matches:u,...f}):null}function Wg(o){let{manifest:f,routeModules:d}=lm(),[u,m]=T.useState([]);return T.useEffect(()=>{let b=!1;return Xg(o,f,d).then(N=>{b||m(N)}),()=>{b=!0}},[o,f,d]),u}function Ig({page:o,matches:f,...d}){let u=$t(),{manifest:m,routeModules:b}=lm(),{basename:N}=nm(),{loaderData:z,matches:y}=Fg(),p=T.useMemo(()=>Vd(o,f,y,m,u,"data"),[o,f,y,m,u]),A=T.useMemo(()=>Vd(o,f,y,m,u,"assets"),[o,f,y,m,u]),_=T.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let Q=new Set,W=!1;if(f.forEach(V=>{let L=m.routes[V.route.id];!L||!L.hasLoader||(!p.some(ee=>ee.route.id===V.route.id)&&V.route.id in z&&b[V.route.id]?.shouldRevalidate||L.hasClientLoader?W=!0:Q.add(V.route.id))}),Q.size===0)return[];let k=kg(o,N,"data");return W&&Q.size>0&&k.searchParams.set("_routes",f.filter(V=>Q.has(V.route.id)).map(V=>V.route.id).join(",")),[k.pathname+k.search]},[N,z,u,m,p,f,o,b]),U=T.useMemo(()=>Qg(A,m),[A,m]),G=Wg(A);return T.createElement(T.Fragment,null,_.map(Q=>T.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...d})),U.map(Q=>T.createElement("link",{key:Q,rel:"modulepreload",href:Q,...d})),G.map(({key:Q,link:W})=>T.createElement("link",{key:Q,nonce:d.nonce,...W})))}function Pg(...o){return f=>{o.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var im=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{im&&(window.__reactRouterVersion="7.8.2")}catch{}function e0({basename:o,children:f,window:d}){let u=T.useRef();u.current==null&&(u.current=Gp({window:d,v5Compat:!0}));let m=u.current,[b,N]=T.useState({action:m.action,location:m.location}),z=T.useCallback(y=>{T.startTransition(()=>N(y))},[N]);return T.useLayoutEffect(()=>m.listen(z),[m,z]),T.createElement(zg,{basename:o,children:f,location:b.location,navigationType:b.action,navigator:m})}var rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sa=T.forwardRef(function({onClick:f,discover:d="render",prefetch:u="none",relative:m,reloadDocument:b,replace:N,state:z,target:y,to:p,preventScrollReset:A,viewTransition:_,...U},G){let{basename:Q}=T.useContext(wt),W=typeof p=="string"&&rm.test(p),k,V=!1;if(typeof p=="string"&&W&&(k=p,im))try{let Ae=new URL(window.location.href),Pe=p.startsWith("//")?new URL(Ae.protocol+p):new URL(p),ut=Jt(Pe.pathname,Q);Pe.origin===Ae.origin&&ut!=null?p=ut+Pe.search+Pe.hash:V=!0}catch{At(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=pg(p,{relative:m}),[ee,je,I]=Jg(u,U),Ce=l0(p,{replace:N,state:z,target:y,preventScrollReset:A,relative:m,viewTransition:_});function ze(Ae){f&&f(Ae),Ae.defaultPrevented||Ce(Ae)}let _e=T.createElement("a",{...U,...I,href:k||L,onClick:V||b?f:ze,ref:Pg(G,je),target:y,"data-discover":!W&&d==="render"?"true":void 0});return ee&&!W?T.createElement(T.Fragment,null,_e,T.createElement($g,{page:L})):_e});Sa.displayName="Link";var t0=T.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:u="",end:m=!1,style:b,to:N,viewTransition:z,children:y,...p},A){let _=_l(N,{relative:p.relative}),U=$t(),G=T.useContext(er),{navigator:Q,basename:W}=T.useContext(wt),k=G!=null&&c0(_)&&z===!0,V=Q.encodeLocation?Q.encodeLocation(_).pathname:_.pathname,L=U.pathname,ee=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;d||(L=L.toLowerCase(),ee=ee?ee.toLowerCase():null,V=V.toLowerCase()),ee&&W&&(ee=Jt(ee,W)||ee);const je=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let I=L===V||!m&&L.startsWith(V)&&L.charAt(je)==="/",Ce=ee!=null&&(ee===V||!m&&ee.startsWith(V)&&ee.charAt(V.length)==="/"),ze={isActive:I,isPending:Ce,isTransitioning:k},_e=I?f:void 0,Ae;typeof u=="function"?Ae=u(ze):Ae=[u,I?"active":null,Ce?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof b=="function"?b(ze):b;return T.createElement(Sa,{...p,"aria-current":_e,className:Ae,ref:A,style:Pe,to:N,viewTransition:z},typeof y=="function"?y(ze):y)});t0.displayName="NavLink";var a0=T.forwardRef(({discover:o="render",fetcherKey:f,navigate:d,reloadDocument:u,replace:m,state:b,method:N=Wi,action:z,onSubmit:y,relative:p,preventScrollReset:A,viewTransition:_,...U},G)=>{let Q=o0(),W=s0(z,{relative:p}),k=N.toLowerCase()==="get"?"get":"post",V=typeof z=="string"&&rm.test(z),L=ee=>{if(y&&y(ee),ee.defaultPrevented)return;ee.preventDefault();let je=ee.nativeEvent.submitter,I=je?.getAttribute("formmethod")||N;Q(je||ee.currentTarget,{fetcherKey:f,method:I,navigate:d,replace:m,state:b,relative:p,preventScrollReset:A,viewTransition:_})};return T.createElement("form",{ref:G,method:k,action:W,onSubmit:u?y:L,...U,"data-discover":!V&&o==="render"?"true":void 0})});a0.displayName="Form";function n0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function om(o){let f=T.useContext(zn);return ye(f,n0(o)),f}function l0(o,{target:f,replace:d,state:u,preventScrollReset:m,relative:b,viewTransition:N}={}){let z=Os(),y=$t(),p=_l(o,{relative:b});return T.useCallback(A=>{if(Hg(A,f)){A.preventDefault();let _=d!==void 0?d:Ol(y)===Ol(p);z(o,{replace:_,state:u,preventScrollReset:m,relative:b,viewTransition:N})}},[y,z,p,d,u,f,o,m,b,N])}var i0=0,r0=()=>`__${String(++i0)}__`;function o0(){let{router:o}=om("useSubmit"),{basename:f}=T.useContext(wt),d=Eg();return T.useCallback(async(u,m={})=>{let{action:b,method:N,encType:z,formData:y,body:p}=Bg(u,f);if(m.navigate===!1){let A=m.fetcherKey||r0();await o.fetch(A,d,m.action||b,{preventScrollReset:m.preventScrollReset,formData:y,body:p,formMethod:m.method||N,formEncType:m.encType||z,flushSync:m.flushSync})}else await o.navigate(m.action||b,{preventScrollReset:m.preventScrollReset,formData:y,body:p,formMethod:m.method||N,formEncType:m.encType||z,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,f,d])}function s0(o,{relative:f}={}){let{basename:d}=T.useContext(wt),u=T.useContext(Ot);ye(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),b={..._l(o||".",{relative:f})},N=$t();if(o==null){b.search=N.search;let z=new URLSearchParams(b.search),y=z.getAll("index");if(y.some(A=>A==="")){z.delete("index"),y.filter(_=>_).forEach(_=>z.append("index",_));let A=z.toString();b.search=A?`?${A}`:""}}return(!o||o===".")&&m.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(b.pathname=b.pathname==="/"?d:Ft([d,b.pathname])),Ol(b)}function c0(o,{relative:f}={}){let d=T.useContext(Id);ye(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=om("useViewTransitionState"),m=_l(o,{relative:f});if(!d.isTransitioning)return!1;let b=Jt(d.currentLocation.pathname,u)||d.currentLocation.pathname,N=Jt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return Pi(m.pathname,N)!=null||Pi(m.pathname,b)!=null}const u0=()=>r.jsx("style",{children:`
    /* ============== FONT IMPORT ============== */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

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
        text-decoration: none;
        border-bottom: none;
        transition: opacity 0.3s ease;
    }
    
    .logo-container:hover {
        opacity: 0.8;
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
        text-decoration: none;
        border-bottom: none;
    }

    .logo-tagline {
        font-size: 12px;
        color: #212529;
        margin: 0;
        text-decoration: none;
        border-bottom: none;
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

    .header nav ul li a,
    .header nav ul li .nav-link {
        color: #212529;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
        cursor: pointer;
        background: none;
        border: none;
        font-size: inherit;
        font-family: inherit;
        padding: 0;
        margin: 0;
    }

    .header nav ul li a:hover,
    .header nav ul li a.active,
    .header nav ul li .nav-link:hover,
    .header nav ul li .nav-link.active {
        color: #D32F2F;
    }
    
    .header nav ul li .nav-link:focus {
        outline: none;
    }
    
    .header nav ul li .nav-link:active {
        transform: none;
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
    
    .no-results-container {
        text-align: center;
        padding: 60px 20px;
    }
    
    .no-results-title {
        color: #495057;
        margin-bottom: 20px;
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .no-results-message {
        color: #6c757d;
        margin-bottom: 20px;
        font-size: 1rem;
        line-height: 1.5;
    }
    
    .clear-filters-btn {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 20px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .clear-filters-btn:hover {
        background: #B71C1C;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
    }
    
    .programs-overview {
        background: linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%);
        color: white;
        padding: 60px 20px;
        margin: 0;
    }
    
    .overview-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .overview-stats .stat-item {
        text-align: center;
        padding: 20px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .overview-stats .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        color: #FFD700;
    }
    
    .overview-stats .stat-label {
        font-size: 1rem;
        font-weight: 500;
        opacity: 0.9;
    }
    
    .search-filter-section {
        background: #f8f9fa;
        padding: 15px 20px;
        border-bottom: 1px solid #e9ecef;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        position: relative;
    }
    

    
    .search-filter-container {
        display: flex;
        gap: 30px;
        max-width: 1000px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
        padding: 20px;
    }
    
    .search-box {
        position: relative;
        flex: 1;
        min-width: 320px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .search-box:hover {
        transform: translateY(-3px) scale(1.02);
    }
    
    .search-box i {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: #6c757d;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        z-index: 2;
    }
    
    .search-box input {
        width: 100%;
        padding: 18px 25px 18px 55px;
        border: 2px solid #dee2e6;
        border-radius: 35px;
        font-size: 1.1rem;
        font-weight: 600;
        font-family: 'Poppins', 'Inter', sans-serif;
        transition: all 0.3s ease;
        background: white;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        color: #495057;
    }
    
    .search-box input:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 6px 20px rgba(0, 123, 255, 0.15);
        transform: translateY(-2px);
        background: white;
    }
    
    .search-box input:focus + i {
        color: #007bff;
        transform: translateY(-50%) scale(1.1);
    }
    
    .search-box input::placeholder {
        color: #6c757d;
        font-weight: 500;
        font-family: 'Poppins', 'Inter', sans-serif;
    }
    
    .search-box input:hover {
        border-color: #adb5bd;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    }
    
    .category-filter {
        position: relative;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .category-filter:hover {
        transform: translateY(-3px) scale(1.02);
    }
    
    .category-filter select {
        padding: 18px 25px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 35px;
        font-size: 1.1rem;
        font-weight: 600;
        font-family: 'Poppins', 'Inter', sans-serif;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        cursor: pointer;
        min-width: 240px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23667eea' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 20px center;
        background-size: 18px;
        padding-right: 55px;
        color: #2d3748;
    }
    
    .category-filter select:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0 12px 40px rgba(255, 255, 255, 0.2);
        transform: translateY(-2px) scale(1.02);
        background: rgba(255, 255, 255, 1);
    }
    
    .category-filter select:hover {
        border-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 10px 35px rgba(255, 255, 255, 0.15);
    }
    
    .category-filter select option {
        font-family: 'Poppins', 'Inter', sans-serif;
        font-weight: 500;
        padding: 12px;
        background: white;
        color: #2d3748;
    }
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    
    /* ============== MODAL STYLES ============== */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 20px;
    }
    
    .modal-content {
        background: white;
        border-radius: 12px;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 10000;
    }
    
    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #f8f9fa;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1.2rem;
        color: #6c757d;
        transition: all 0.3s ease;
        z-index: 10;
    }
    
    .modal-close:hover {
        background: #e9ecef;
        color: #495057;
    }
    
    .modal-header {
        display: flex;
        gap: 20px;
        padding: 30px;
        border-bottom: 1px solid #e9ecef;
        align-items: center;
    }
    
    .modal-image {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
        border: 3px solid #D32F2F;
    }
    
    .modal-title h2 {
        margin: 0 0 15px;
        font-size: 1.8rem;
        color: #212529;
    }
    
    .modal-meta {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    
    .modal-meta span {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #6c757d;
        font-size: 0.9rem;
    }
    
    .modal-meta i {
        color: #D32F2F;
    }
    
    .modal-body {
        padding: 30px;
    }
    
    .modal-description h3,
    .modal-list h3,
    .modal-features h3 {
        margin: 0 0 15px;
        font-size: 1.3rem;
        color: #212529;
        border-bottom: 2px solid #D32F2F;
        padding-bottom: 8px;
    }
    
    .modal-description p {
        color: #495057;
        line-height: 1.6;
        margin-bottom: 25px;
    }
    
    .modal-list ul {
        padding-left: 20px;
        margin-bottom: 25px;
    }
    
    .modal-list li {
        color: #495057;
        margin-bottom: 8px;
        line-height: 1.5;
    }
    
    .modal-features .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }
    
    .modal-features .feature-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #D32F2F;
    }
    
    .modal-features .feature-item i {
        color: #D32F2F;
        font-size: 1.2rem;
    }
    
    .modal-footer {
        padding: 30px;
        border-top: 1px solid #e9ecef;
        display: flex;
        gap: 15px;
        justify-content: flex-end;
    }
    
    .btn-apply-large {
        background: #D32F2F;
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn-apply-large:hover {
        background: #B71C1C;
        transform: translateY(-2px);
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
        color: #000000;
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
        background: linear-gradient(90deg, #000000, #C0A062);
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
        min-width: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .btn-details {
        background-color: #D32F2F;
        color: #fff;
        border: 2px solid #D32F2F;
        transition: all 0.3s ease;
    }
    
    .btn-details:hover {
        background-color: #fff;
        color: #D32F2F;
        border: 2px solid #D32F2F;
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

    /* ============== PROGRAM MODAL STYLES ============== */
    .program-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
        backdrop-filter: blur(5px);
    }

    .program-modal {
        background: white;
        border-radius: 16px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: modalSlideIn 0.3s ease-out;
    }

    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .program-modal-header {
        background: linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%);
        color: white;
        padding: 30px;
        border-radius: 16px 16px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .program-modal-header h2 {
        margin: 0;
        font-size: 1.8rem;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
    }

    .modal-close-btn {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }

    .modal-close-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }

    .program-modal-content {
        padding: 30px;
    }

    .modal-section {
        margin-bottom: 40px;
    }

    .section-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
    }

    .section-header i {
        font-size: 1.5rem;
        color: #D32F2F;
        width: 30px;
    }

    .section-header h3 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 600;
        color: #2d3748;
        font-family: 'Poppins', sans-serif;
    }

    .modal-section p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #4a5568;
        margin: 0;
    }

    .career-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;
    }

    .career-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #D32F2F;
    }

    .career-item i {
        color: #D32F2F;
        font-size: 1rem;
    }

    .career-item span {
        font-weight: 500;
        color: #2d3748;
    }

    .semester-section {
        margin-bottom: 30px;
    }

    .semester-section h4 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #D32F2F;
        margin: 0 0 20px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid #e2e8f0;
        font-family: 'Poppins', sans-serif;
    }

    .course-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }

    .course-card {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
    }

    .course-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        border-color: #D32F2F;
    }

    .course-card h5 {
        margin: 0 0 12px 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #2d3748;
        font-family: 'Poppins', sans-serif;
    }

    .course-card p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
        color: #4a5568;
    }

    .program-modal-footer {
        padding: 30px;
        border-top: 1px solid #e2e8f0;
        display: flex;
        gap: 15px;
        justify-content: center;
        background: #f8f9fa;
        border-radius: 0 0 16px 16px;
    }

    .program-modal-footer .btn {
        padding: 15px 30px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        min-width: 150px;
    }

    .program-modal-footer .btn-apply {
        background: #D32F2F;
        color: white;
    }

    .program-modal-footer .btn-apply:hover {
        background: #B71C1C;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(211, 47, 47, 0.3);
    }

    .program-modal-footer .btn-secondary {
        background: #6c757d;
        color: white;
    }

    .program-modal-footer .btn-secondary:hover {
        background: #5a6268;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(108, 117, 125, 0.3);
    }

    /* Responsive Modal */
    @media (max-width: 768px) {
        .program-modal {
            max-width: 95vw;
            max-height: 95vh;
        }

        .program-modal-header {
            padding: 20px;
        }

        .program-modal-header h2 {
            font-size: 1.4rem;
        }

        .program-modal-content {
            padding: 20px;
        }

        .career-grid {
            grid-template-columns: 1fr;
        }

        .course-grid {
            grid-template-columns: 1fr;
        }

        .program-modal-footer {
            flex-direction: column;
            padding: 20px;
        }

        .program-modal-footer .btn {
            width: 100%;
        }
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
        border: 2px solid #D32F2F;
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
        background: white;
        color: #D32F2F;
        border: 2px solid #D32F2F;
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
        
        .overview-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        
        .overview-stats .stat-number {
            font-size: 2rem;
        }
        
        .search-filter-container {
            flex-direction: column;
            gap: 15px;
        }
        
        .search-box {
            min-width: 100%;
        }
        
        .category-filter select {
            min-width: 100%;
        }
        
        .modal-header {
            flex-direction: column;
            text-align: center;
        }
        
        .modal-image {
            width: 100px;
            height: 100px;
        }
        
        .modal-content {
            max-width: 95vw;
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
        
        .overview-stats {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .overview-stats .stat-number {
            font-size: 1.8rem;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .modal-footer {
            padding: 20px;
            flex-direction: column;
        }
        
        .btn-apply-large {
            width: 100%;
        }
        .form-container {
            padding: 25px;
        }

        /* Advanced Agriculture Details Styles */
        .advanced-agriculture-details {
            padding: 20px 0;
        }

        .details-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px;
            background: linear-gradient(135deg, #f8fbf8, #e8f5e9);
            border-radius: 15px;
            border-left: 5px solid #6ab04c;
        }

        .details-header h2 {
            color: #1e4620;
            font-size: 32px;
            margin-bottom: 15px;
            padding-left: 0;
            display: block;
            text-align: center;
        }

        .details-header .subtitle {
            font-size: 18px;
            color: #2a723d;
            font-weight: 500;
        }

        .details-section {
            margin-bottom: 40px;
            padding: 30px;
            background: #fff;
            border-radius: 15px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .details-section h3 {
            color: #1e4620;
            font-size: 24px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .details-section h3 i {
            color: #6ab04c;
            font-size: 20px;
        }

        .details-section h4 {
            color: #2a723d;
            font-size: 20px;
            margin: 25px 0 15px 0;
            font-weight: 600;
        }

        .details-section p {
            color: #555;
            line-height: 1.7;
            margin-bottom: 20px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .stat-card {
            text-align: center;
            padding: 25px 20px;
            background: #f8fbf8;
            border-radius: 12px;
            border-bottom: 4px solid #6ab04c;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .stat-number {
            font-size: 36px;
            font-weight: 700;
            color: #2a723d;
            display: block;
            margin-bottom: 8px;
        }

        .stat-label {
            color: #555;
            font-weight: 600;
            font-size: 14px;
        }

        .career-grid, .study-areas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }

        .career-card, .study-area-card {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 20px;
            background: #f8fbf8;
            border-radius: 12px;
            border: 1px solid #e0e0e0;
            transition: all 0.3s ease;
        }

        .career-card:hover, .study-area-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            border-color: #6ab04c;
        }

        .career-card i, .study-area-card i {
            color: #6ab04c;
            font-size: 24px;
            margin-top: 5px;
            background: #e8f5e9;
            padding: 12px;
            border-radius: 50%;
            min-width: 48px;
            text-align: center;
        }

        .career-card h4, .study-area-card h4 {
            color: #1e4620;
            font-weight: 600;
            margin-bottom: 8px;
            font-size: 16px;
        }

        .career-card p {
            color: #666;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
        }

        .syllabus-table {
            margin: 20px 0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .syllabus-table table {
            width: 100%;
            border-collapse: collapse;
        }

        .syllabus-table th {
            background: linear-gradient(135deg, #2a723d, #1e4620);
            color: white;
            padding: 18px;
            font-weight: 600;
            text-align: left;
            font-size: 16px;
        }

        .syllabus-table td {
            padding: 18px;
            border-bottom: 1px solid #f0f0f0;
            transition: background 0.3s ease;
        }

        .syllabus-table td:first-child {
            font-weight: 600;
            color: #1e4620;
            background: #f8fbf8;
        }

        .syllabus-table tr:hover td {
            background: #f7fdf7;
        }

        .syllabus-table tr:last-child td {
            border-bottom: none;
        }

        .cta-section {
            text-align: center;
            padding: 40px;
            background: linear-gradient(135deg, rgba(232, 245, 233, 0.5), rgba(241, 248, 233, 0.5));
            border-radius: 15px;
            border: 2px dashed #6ab04c;
        }

        .cta-section h3 {
            color: #1e4620;
            font-size: 28px;
            margin-bottom: 15px;
            padding-left: 0;
            display: block;
            text-align: center;
        }

        .cta-section p {
            color: #333;
            font-size: 16px;
            margin-bottom: 25px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .apply-btn {
            display: inline-block;
            padding: 18px 40px;
            background: linear-gradient(135deg, #6ab04c, #82c91e);
            color: white;
            text-decoration: none;
            font-weight: 700;
            font-size: 18px;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(106, 176, 76, 0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .apply-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 12px 30px rgba(106, 176, 76, 0.5);
        }

        .apply-btn i {
            margin-left: 10px;
            transition: transform 0.3s ease;
        }

        .apply-btn:hover i {
            transform: translateX(5px);
        }

        @media (max-width: 768px) {
            .details-section {
                padding: 20px;
            }
            
            .details-header h2 {
                font-size: 24px;
            }
            
            .stats-grid, .career-grid, .study-areas-grid {
                grid-template-columns: 1fr;
            }
            
            .syllabus-table th,
            .syllabus-table td {
                padding: 12px;
                font-size: 14px;
            }
        }

        /* Program Details Page Styles */
        .program-details-page {
            background: #f8f9fa;
            min-height: 100vh;
        }

        .program-details-banner {
            background: linear-gradient(135deg, #1e4620, #2a723d);
            color: white;
            padding: 80px 20px;
            text-align: center;
            position: relative;
        }

        .back-btn {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .back-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        .program-meta {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        .program-meta span {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 18px;
            font-weight: 500;
        }

        .program-meta i {
            color: #6ab04c;
            font-size: 20px;
        }

        .program-content {
            padding: 60px 0;
        }

        .program-overview, .program-details, .program-features, .program-cta {
            background: white;
            margin: 30px 0;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .program-overview h3, .program-details h3, .program-features h3, .program-cta h3 {
            color: #1e4620;
            font-size: 28px;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .program-overview p, .program-details p, .program-features p, .program-cta p {
            color: #555;
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 20px;
        }

        .program-details ul {
            list-style: none;
            padding: 0;
        }

        .program-details li {
            padding: 12px 0;
            border-bottom: 1px solid #f0f0f0;
            color: #666;
            font-size: 16px;
        }

        .program-details li:last-child {
            border-bottom: none;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px;
            background: #f8fbf8;
            border-radius: 12px;
            border-left: 4px solid #6ab04c;
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .feature-item i {
            color: #6ab04c;
            font-size: 24px;
            background: #e8f5e9;
            padding: 12px;
            border-radius: 50%;
        }

        .feature-item span {
            color: #1e4620;
            font-weight: 600;
            font-size: 16px;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            margin-top: 30px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .btn-apply-large {
            background: linear-gradient(135deg, #6ab04c, #82c91e);
            color: white;
            padding: 18px 40px;
            border: none;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 700;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(106, 176, 76, 0.4);
        }

        .btn-apply-large:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 12px 30px rgba(106, 176, 76, 0.5);
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
            padding: 18px 40px;
            border: none;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-secondary:hover {
            background: #5a6268;
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .program-details-banner {
                padding: 60px 20px;
            }

            .back-btn {
                position: relative;
                top: auto;
                left: auto;
                margin-bottom: 20px;
            }

            .program-meta {
                flex-direction: column;
                gap: 15px;
            }

            .program-content {
                padding: 40px 0;
            }

            .program-overview, .program-details, .program-features, .program-cta {
                padding: 25px;
                margin: 20px 0;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn-apply-large, .btn-secondary {
                width: 100%;
                max-width: 300px;
                justify-content: center;
            }
        }

        /* Staggered animation for grid items */
        .stagger-item {
            transition-delay: var(--stagger-delay, 0s);
        }

        /* Staggered animation delays */
        .stagger-0 { transition-delay: 0ms; }
        .stagger-1 { transition-delay: 100ms; }
        .stagger-2 { transition-delay: 200ms; }
        .stagger-3 { transition-delay: 300ms; }
        .stagger-4 { transition-delay: 400ms; }
        .stagger-5 { transition-delay: 500ms; }

        /* Additional styles for replaced inline styles */
        .intro-description {
            font-size: 18px;
            margin-bottom: 30px;
            color: #444;
        }

        .semester-title {
            color: #1e4620;
            font-size: 24px;
            margin: 30px 0 15px 0;
            font-weight: 600;
        }

        .semester-title-second {
            margin: 40px 0 15px 0;
        }

        .apply-section {
            padding: 0;
            background: none;
            box-shadow: none;
        }

        .cta-title {
            text-align: center;
            padding-left: 0;
            display: block;
            color: #1e4620;
        }

        .cta-description {
            font-size: 18px;
            margin-bottom: 40px;
            text-align: center;
            color: #333;
            max-width: 700px;
            margin: 20px auto 40px;
        }
    `}),f0=()=>(T.useEffect(()=>{const o=document.createElement("link");o.rel="stylesheet",o.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(o);const f=document.createElement("link");return f.rel="stylesheet",f.href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",document.head.appendChild(f),()=>{document.head.removeChild(o),document.head.removeChild(f)}},[]),null),d0=({activePage:o})=>{const[f,d]=T.useState(!1),u=Os(),m=b=>{d(!1),u(b)};return r.jsx("header",{className:"header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"logo-container",onClick:()=>m("/home"),children:[r.jsx("img",{src:"https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png",alt:"IGT Logo",className:"logo-crest"}),r.jsxs("div",{className:"logo-text-container",children:[r.jsx("h1",{className:"logo-title",children:"INSTITUTE OF GLOBAL TECHNOLOGY"}),r.jsx("p",{className:"logo-tagline",children:"Gateway to Excellence in Education"})]})]}),r.jsx("nav",{children:r.jsxs("ul",{className:f?"active":"",children:[r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/home"),className:`nav-link ${o==="/home"?"active":""}`,children:"Home"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/programs"),className:`nav-link ${o==="/programs"?"active":""}`,children:"Programs"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/departments"),className:`nav-link ${o==="/departments"?"active":""}`,children:"Departments"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/faculty"),className:`nav-link ${o==="/faculty"?"active":""}`,children:"Faculty"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/admissions"),className:`nav-link ${o==="/admissions"?"active":""}`,children:"Admissions"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/contact"),className:`nav-link ${o==="/contact"?"active":""}`,children:"Contact"})})]})}),r.jsx("button",{className:"menu-toggle",onClick:()=>d(!f),"aria-label":"Open Menu",children:r.jsx("i",{className:"fas fa-bars"})})]})})},m0=()=>r.jsx("section",{id:"hero",className:"hero",children:r.jsxs("div",{className:"hero-content",children:[r.jsxs("div",{className:"hero-title-glance",children:[r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-label",children:"WELCOME TO"})}),r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-main",children:"INSTITUTE OF"})}),r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-main",children:"GLOBAL TECHNOLOGY"})})]}),r.jsxs("div",{className:"hero-glance-content",children:[r.jsx("div",{className:"hero-description",children:r.jsx("p",{children:"Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future."})}),r.jsx("div",{className:"hero-accredited",children:"ACCREDITED BY AIAB EUROPE"})]})]})}),h0=()=>r.jsx("section",{id:"about",className:"about",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"ABOUT INSTITUTE OF GLOBAL TECHNOLOGY"}),r.jsx("p",{className:"section-subtitle",children:"Discover our mission, vision, and values that guide us in providing exceptional technology education"}),r.jsxs("div",{className:"about-grid",children:[r.jsx("div",{className:"about-image",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Institute of Global Technology Campus"})}),r.jsxs("div",{className:"about-content",children:[r.jsx("h3",{children:"Transforming Technology Education Since 2005"}),r.jsx("p",{children:"The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success."}),r.jsx("p",{children:"Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies."}),r.jsx("p",{className:"accredited-text",children:"ACCREDITED BY AIAB EUROPE"}),r.jsxs("div",{className:"stats-container",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"6000+"}),r.jsx("div",{className:"label",children:"STUDENTS"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"300+"}),r.jsx("div",{className:"label",children:"FACULTY"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"60+"}),r.jsx("div",{className:"label",children:"PROGRAMS"})]})]})]})]})]})}),p0=()=>r.jsx("section",{id:"why-choose-us",className:"why-choose-us",children:r.jsxs("div",{className:"container",children:[r.jsxs("h2",{children:["Why Choose Us",r.jsx("span",{className:"question-mark",children:"?"})]}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Industrial Partners"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"100+ Industrial Partners"}),r.jsx("p",{children:"Strong collaborations with leading technology companies for research and placements."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Expert Faculty"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Learn from Experts"}),r.jsx("p",{children:"Instruction from national and international experts in their respective fields."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Placement Support"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Placement Assistance"}),r.jsx("p",{children:"Complete placement support with career counseling and interview preparation."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Advanced Research"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Advanced Research"}),r.jsx("p",{children:"Opportunities to work on innovative research projects with commercialization potential."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Entrepreneurship Support"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Entrepreneurship Support"}),r.jsx("p",{children:"Incubation center and mentorship for student startups and innovations."})]})]})]})]})}),Zd=[{category:"Precision Agriculture",subtitle:"Innovative programs combining technology with modern agricultural practices",courses:[{title:"MASTER PROGRAM in Precision Agriculture",image:"https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg",duration:"12 Months",description:"Master data-driven farming techniques using IoT, sensors, and AI for crop optimization. Learn advanced soil monitoring, weather prediction, and automated irrigation systems to maximize crop yields while minimizing resource waste."},{title:"MASTER PROGRAM in Agriculture Drones",image:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring."},{title:"MASTER PROGRAM in Hydroponics & Vertical Farming",image:"https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg",duration:"12 Months",description:"Learn sustainable farming techniques without soil in controlled environments. Master nutrient solution management, climate control systems, and vertical stacking technologies for urban agriculture."},{title:"MASTER PROGRAM in AI & ML in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg",duration:"12 Months",description:"Apply artificial intelligence and machine learning to solve agricultural challenges. Master predictive analytics for crop diseases, yield forecasting, and resource optimization."},{title:"MASTER PROGRAM in Agriculture Robotics",image:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",duration:"12 Months",description:"Develop and implement robotic solutions for planting, harvesting, and farm automation. Master robotic arm programming, computer vision integration, and autonomous navigation systems."},{title:"MASTER PROGRAM in Advanced Technologies in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp",duration:"12 Months",description:"Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement."},{title:"MASTER PROGRAM in Agri Entrepreneurship",image:"https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business skills specific to agricultural ventures and startups. Master market analysis, financial planning, and sustainable business models for agribusiness."}]},{category:"AI & Robotics",subtitle:"Specialized programs in artificial intelligence and robotic systems",courses:[{title:"MASTER PROGRAM in AI & Robotics",image:"https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg",duration:"12 Months",description:"Comprehensive training in AI-driven robotic systems and automation. Master machine learning algorithms for robotic control and autonomous decision-making in industrial applications."},{title:"MASTER PROGRAM in Generative AI",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation."},{title:"MASTER PROGRAM in AI & Blockchain",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the convergence of AI and decentralized blockchain technologies. Master smart contract development, AI-powered blockchain analytics, and decentralized AI systems for secure applications."},{title:"MASTER PROGRAM in AI & Data Analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI techniques to extract insights from complex datasets. Master predictive modeling, statistical analysis, and machine learning algorithms for business intelligence and decision-making."},{title:"MASTER PROGRAM in AI & Biological Sciences",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development."},{title:"MASTER PROGRAM in AI & Cybersecurity Systems",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop AI-powered solutions for cybersecurity threats and vulnerabilities. Master threat detection algorithms, anomaly identification, and automated security response systems for network protection."}]},{category:"AI & Business",subtitle:"Programs at the intersection of artificial intelligence and business applications",courses:[{title:"MASTER PROGRAM in AI & Business",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Transform business operations with AI-driven strategies and solutions. Master process automation, customer analytics, and AI-powered decision support systems for competitive advantage."},{title:"MASTER PROGRAM in AI & Management Studies",image:"https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg",duration:"12 Months",description:"Apply AI to organizational leadership, decision-making, and strategy. Master AI-driven management tools, predictive analytics for strategic planning, and intelligent automation for operational efficiency."},{title:"MASTER PROGRAM in AI & Law",image:"https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg",duration:"12 Months",description:"Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies."},{title:"MASTER PROGRAM in IP Law",image:"https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg",duration:"12 Months",description:"Specialize in intellectual property law for technology and innovation. Master patent law, copyright protection, and trademark strategies for emerging technologies and digital assets."},{title:"MASTER PROGRAM in AI & Marketing",image:"https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg",duration:"12 Months",description:"Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns."}]},{category:"Healthcare & Life Sciences",subtitle:"Programs at the intersection of technology and life sciences",courses:[{title:"MASTER PROGRAM in Clinical Research & Regulatory Affairs",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets."},{title:"MASTER PROGRAM in Medical Coding",image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg",duration:"12 Months",description:"Learn standardized coding systems for healthcare documentation. Master ICD-10, CPT coding, and healthcare billing systems for accurate medical record management and insurance processing."},{title:"MASTER PROGRAM in Digital Forensics",image:"https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af",duration:"12 Months",description:"Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution."},{title:"MASTER PROGRAM in Industrial Fermentation Technology",image:"https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master microbial processes for food, pharmaceuticals, and biofuels. Learn bioreactor design, process optimization, and quality control for large-scale fermentation operations."},{title:"MASTER PROGRAM in Vaccine Technology",image:"https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png",duration:"12 Months",description:"Study vaccine development, production, and quality control. Master vaccine formulation, manufacturing processes, and regulatory standards for safe and effective immunization products."},{title:"MASTER PROGRAM in Bioentrepreneurship",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies."}]},{category:"AI & Creative Technologies",subtitle:"Programs combining artificial intelligence with creative disciplines",courses:[{title:"MASTER PROGRAM in AI & Designing Technology",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products."},{title:"MASTER PROGRAM in AI & Arts",image:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression."}]},{category:"Emerging Technologies & Smart Systems",subtitle:"Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",courses:[{title:"Reality Architect: Master of AR/VR/XR Development",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master immersive technologies to build future-ready AR, VR, and XR applications. Learn 3D modeling, spatial computing, and interactive design for creating engaging virtual experiences."},{title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",image:"https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",duration:"12 Months",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions."},{title:"Game Changer: Master Program in XR Gaming",image:"https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg",duration:"12 Months",description:"Design and develop immersive games using XR technology and gamification strategy. Master game engine development, 3D asset creation, and interactive storytelling for next-generation gaming experiences."},{title:"Master Program in AR and Mixed Reality",image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",duration:"12 Months",description:"Specialize in designing cutting-edge MR life environments and interfaces. Master spatial computing, gesture recognition, and environmental mapping for seamless mixed reality experiences."},{title:"Master Program in Electric Vehicle Technology",image:"https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png",duration:"12 Months",description:"Learn about EV systems, battery design, automatic mobility, and energy management. Master electric powertrain design, battery management systems, and smart charging infrastructure for sustainable transportation."},{title:"Master Program in IoT and Embedded Systems",image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp",duration:"12 Months",description:"Build connected smart devices with microcontrollers, sensors, and communication protocols. Master embedded software development, wireless communication, and cloud integration for smart city and industrial IoT applications."},{title:"Master Program in Human-Computer Interaction",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Focus on designing intuitive interfaces, enhancing user experiences, and usability testing. Master user research methodologies, interaction design principles, and accessibility standards for inclusive digital products."}]},{category:"Doctoral & Postdoctoral Programs",subtitle:"Advanced research programs for scholars and fellows in science, engineering, and humanities",courses:[{title:"Doctoral Programs",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Varies",description:"Research-focused degrees in multiple disciplines:",list:["PhD in Engineering in ICT disciplines","PhD in Science and Mathematics","PhD in Humanities, Social Science and Design"]},{title:"Postdoctoral Programs",image:"https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Flexible",description:"Postdoctoral fellowships in emerging domains:",list:["Wireless Communications, Embedded Systems","AI, ML, and Information Security","5G/6G, Robotics, VLSI, NLP, Adversarial ML"]}]}],g0=({program:o,onClose:f})=>{const u=(m=>m.includes("AI & Data Analytics")?{overview:"The Master Program in AI & Data Analytics is designed to empower students with the ability to extract actionable insights from data using advanced Artificial Intelligence techniques. It blends machine learning, statistical modeling, big data processing, and modern AI tools to build intelligent, data-driven systems and solutions.",careerOpportunities:["Data Scientist / Machine Learning Engineer","Business Intelligence Analyst","Data Visualization Expert","Predictive Modeling Specialist","AI & Analytics Consultant","Big Data Engineer","Product Analyst / AI Product Manager"],semester1:[{title:"Foundations of AI & ML",description:"Supervised & unsupervised learning, neural networks, model training"},{title:"Data Mining & Warehousing",description:"ETL processes, data marts, clustering & association techniques"},{title:"Statistics for Data Science",description:"Probability, hypothesis testing, regression, inferential stats"},{title:"Python & Data Visualization",description:"NumPy, Pandas, Matplotlib, Seaborn, Dash/Plotly"}],semester2:[{title:"Deep Learning & Neural Networks",description:"CNNs, RNNs, LSTMs, model tuning, Keras/PyTorch"},{title:"Big Data Analytics",description:"Hadoop, Spark, Hive, distributed data processing"},{title:"Natural Language Processing",description:"Text classification, sentiment analysis, transformers"},{title:"AI Ethics & Explainability",description:"Bias, fairness, transparency, model interpretability"},{title:"Capstone Project",description:"Real-world AI project implementation"}]}:{overview:o.description,careerOpportunities:["Industry Specialist","Research Analyst","Technology Consultant","Project Manager","Innovation Lead"],semester1:[{title:"Core Fundamentals",description:"Essential concepts and foundational knowledge"},{title:"Advanced Techniques",description:"Specialized methods and practical applications"},{title:"Industry Applications",description:"Real-world implementation and case studies"}],semester2:[{title:"Specialized Topics",description:"Advanced specialization and cutting-edge topics"},{title:"Research Project",description:"Capstone project and research implementation"}]})(o.title);return r.jsx("div",{className:"program-modal-overlay",onClick:f,children:r.jsxs("div",{className:"program-modal",onClick:m=>m.stopPropagation(),children:[r.jsxs("div",{className:"program-modal-header",children:[r.jsx("h2",{children:o.title}),r.jsx("button",{className:"modal-close-btn",onClick:f,children:r.jsx("i",{className:"fas fa-times"})})]}),r.jsxs("div",{className:"program-modal-content",children:[r.jsxs("div",{className:"modal-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("i",{className:"fas fa-brain"}),r.jsx("h3",{children:"Introduction"})]}),r.jsx("p",{children:u.overview})]}),r.jsxs("div",{className:"modal-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("i",{className:"fas fa-briefcase"}),r.jsx("h3",{children:"Career Opportunities"})]}),r.jsx("div",{className:"career-grid",children:u.careerOpportunities.map((m,b)=>r.jsxs("div",{className:"career-item",children:[r.jsx("i",{className:"fas fa-check"}),r.jsx("span",{children:m})]},b))})]}),r.jsxs("div",{className:"modal-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("i",{className:"fas fa-book"}),r.jsx("h3",{children:"Semester-wise Syllabus"})]}),r.jsxs("div",{className:"semester-section",children:[r.jsx("h4",{children:"Semester 1: Core Fundamentals"}),r.jsx("div",{className:"course-grid",children:u.semester1.map((m,b)=>r.jsxs("div",{className:"course-card",children:[r.jsx("h5",{children:m.title}),r.jsx("p",{children:m.description})]},b))})]}),r.jsxs("div",{className:"semester-section",children:[r.jsx("h4",{children:"Semester 2: Advanced Applications"}),r.jsx("div",{className:"course-grid",children:u.semester2.map((m,b)=>r.jsxs("div",{className:"course-card",children:[r.jsx("h5",{children:m.title}),r.jsx("p",{children:m.description})]},b))})]})]})]}),r.jsxs("div",{className:"program-modal-footer",children:[r.jsx("button",{className:"btn btn-apply",children:"Apply Now"}),r.jsx("button",{className:"btn btn-secondary",children:"Download Brochure"})]})]})})},x0=({course:o,onDetailsClick:f})=>r.jsxs("div",{className:"program-card",children:[r.jsx("img",{src:o.image,alt:o.title,className:"program-card-image"}),r.jsxs("div",{className:"program-card-content",children:[r.jsx("h4",{children:o.title}),r.jsxs("div",{className:"program-card-duration",children:[r.jsx("i",{className:"far fa-clock"}),o.duration]}),r.jsxs("div",{className:"program-card-description",children:[o.description,o.list&&r.jsx("ul",{children:o.list.map((d,u)=>r.jsx("li",{children:d},u))})]}),r.jsxs("div",{className:"program-card-buttons",children:[r.jsx("button",{className:"btn btn-details",onClick:()=>f(o),children:"Details"}),r.jsx("button",{className:"btn btn-apply ag-btn-apply",children:"Apply"})]})]})]}),b0=()=>{const[o,f]=T.useState(""),[d,u]=T.useState("all"),[m,b]=T.useState(null),[N,z]=T.useState(!1),y=Zd.map(p=>({...p,courses:p.courses.filter(A=>(d==="all"||p.category===d)&&A.title.toLowerCase().includes(o.toLowerCase()))})).filter(p=>p.courses.length>0);return r.jsxs("section",{id:"programs",className:"programs-page",children:[r.jsx("div",{className:"page-banner programs-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Transform Your Future"}),r.jsx("p",{children:"Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market."})]})}),r.jsx("div",{className:"search-filter-section",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"search-filter-container",children:[r.jsxs("div",{className:"search-box",children:[r.jsx("i",{className:"fas fa-search"}),r.jsx("input",{type:"text",placeholder:"Search programs...",value:o,onChange:p=>f(p.target.value),"aria-label":"Search programs"})]}),r.jsx("div",{className:"category-filter",children:r.jsxs("select",{value:d,onChange:p=>u(p.target.value),"aria-label":"Filter by category",children:[r.jsx("option",{value:"all",children:"All Categories"}),Zd.map((p,A)=>r.jsx("option",{value:p.category,children:p.category},A))]})})]})})}),y.length>0?y.map((p,A)=>r.jsx("div",{className:"program-category",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"category-header",children:[r.jsx("h3",{children:p.category}),r.jsx("p",{children:p.subtitle})]}),r.jsx("div",{className:"program-cards-grid",children:p.courses.map((_,U)=>r.jsx(x0,{course:_,onDetailsClick:G=>{b(G),z(!0)}},`${_.title}-${U}`))})]})},`${p.category}-${A}`)):r.jsxs("div",{className:"container no-results-container",children:[r.jsx("h3",{className:"no-results-title",children:"No programs found"}),r.jsx("p",{className:"no-results-message",children:"Try adjusting your search terms or category filter to find what you're looking for."}),r.jsx("button",{onClick:()=>{f(""),u("all")},className:"clear-filters-btn",children:"Clear Filters"})]}),r.jsxs("div",{className:"admissions-cta",children:[r.jsx("h3",{children:"Ready to take the next step?"}),r.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),r.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),r.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]}),N&&m&&r.jsx(g0,{program:m,onClose:()=>{z(!1),b(null)}})]})},v0=()=>r.jsxs("section",{className:"admissions-page",children:[r.jsx("div",{className:"admissions-journey-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Begin Your Academic Journey"}),r.jsx("p",{children:"Join our community of innovators and thought leaders"})]})}),r.jsx("div",{className:"admissions-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"section-title",children:"Admissions Process"}),r.jsx("p",{className:"section-tagline",children:"Our streamlined admission process makes it easy to join our academic community"}),r.jsxs("div",{className:"process-grid",children:[r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"1"}),r.jsx("h3",{children:"Application"}),r.jsx("p",{children:"Submit your online application along with required documents through our portal."}),r.jsx("a",{href:"#",className:"process-btn",children:"Apply Now →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"2"}),r.jsx("h3",{children:"Review"}),r.jsx("p",{children:"Our admissions committee will carefully evaluate your application and credentials."}),r.jsx("a",{href:"#",className:"process-btn",children:"Learn More →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"3"}),r.jsx("h3",{children:"Interview"}),r.jsx("p",{children:"Selected candidates will be invited for an interview (in-person or virtual)."}),r.jsx("a",{href:"#",className:"process-btn",children:"Prepare →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"4"}),r.jsx("h3",{children:"Decision"}),r.jsx("p",{children:"Receive your admission decision within 2-4 weeks of your interview."}),r.jsx("a",{href:"#",className:"process-btn",children:"Timeline →"})]})]}),r.jsx("h2",{className:"section-title",children:"Admission Details"}),r.jsx("p",{className:"section-tagline",children:"Key information to help you prepare your application"}),r.jsxs("div",{className:"details-grid",children:[r.jsxs("div",{className:"details-card",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-file-alt"})}),"Application Requirements"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Completed online application form"}),r.jsx("li",{children:"Bachelor's degree in relevant field with minimum 50% marks"}),r.jsx("li",{children:"Statement of purpose (500-1000 words)"}),r.jsx("li",{children:"Two letters of recommendation"}),r.jsx("li",{children:"Professional resume/CV"}),r.jsx("li",{children:"Application fee (waivers available)"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Download Checklist"})]}),r.jsxs("div",{className:"details-card important-dates",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-calendar-alt"})}),"Important Dates"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Jul 15 Fall Semester Deadline"}),r.jsx("li",{children:"Nov 15 Spring Semester Deadline"}),r.jsx("li",{children:"Apr 15 Summer Semester Deadline"}),r.jsx("li",{children:"Dec 1 Early Decision Deadline"}),r.jsx("li",{children:"Aug 20-25 Orientation Week"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Add to Calendar"})]}),r.jsxs("div",{className:"details-card",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-university"})}),"Tuition & Financial Aid"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Tuition: ₹1,50,000 per semester"}),r.jsx("li",{children:"Merit-based scholarships available"}),r.jsx("li",{children:"Research and teaching assistantships"}),r.jsx("li",{children:"Education loan partnerships"}),r.jsx("li",{children:"Flexible payment plans"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Financial Aid Information"})]})]}),r.jsxs("div",{className:"admissions-cta",children:[r.jsx("h3",{children:"Ready to take the next step?"}),r.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),r.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),r.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})})]}),y0=()=>{const[o,f]=T.useState(""),[d,u]=T.useState(!1),[m,b]=T.useState({name:"",email:"",phone:"",subject:"",message:""}),N=y=>{const{name:p,value:A}=y.target;b(_=>({..._,[p]:A}))},z=async y=>{if(y.preventDefault(),!m.name.trim()){f("Please enter your name."),setTimeout(()=>f(""),5e3);return}if(!m.email.trim()){f("Please enter your email address."),setTimeout(()=>f(""),5e3);return}if(!m.message.trim()){f("Please enter your message."),setTimeout(()=>f(""),5e3);return}if(!m.email.includes("@")){f("Please enter a valid email address."),setTimeout(()=>f(""),5e3);return}u(!0);try{await new Promise(p=>setTimeout(p,1500)),f("Your message has been sent successfully! We will get back to you soon."),b({name:"",email:"",phone:"",subject:"",message:""}),y.target.reset()}catch{f("Sorry, there was an error sending your message. Please try again.")}finally{u(!1),setTimeout(()=>f(""),5e3)}};return r.jsxs("section",{className:"form-page",children:[r.jsx("div",{className:"page-banner contact-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Get In Touch"}),r.jsx("p",{children:"We're here to help and answer any question you might have."})]})}),r.jsx("div",{className:"container",children:r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-info",children:[r.jsx("h3",{children:"Contact Information"}),r.jsx("p",{children:"Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below."}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-map-marker-alt"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Address"}),r.jsx("span",{children:"REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11."})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-envelope"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Email"}),r.jsx("span",{children:"admissions@igt.edu.in"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-clock"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Timing"}),r.jsx("span",{children:"Mon - Sat: 9:00 AM - 5:30 PM"})]})]}),r.jsx("div",{className:"info-item special",children:r.jsx("strong",{children:"A UNIT OF BRC"})}),r.jsxs("div",{className:"social-icons",children:[r.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:r.jsx("i",{className:"fab fa-twitter"})}),r.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:r.jsx("i",{className:"fab fa-youtube"})})]})]}),r.jsxs("div",{className:"form-container",children:[r.jsx("h3",{children:"Send Us a Message"}),r.jsxs("form",{onSubmit:z,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"name",children:"Your Name"}),r.jsx("input",{type:"text",id:"name",name:"name",value:m.name,onChange:N,required:!0,placeholder:"Enter your full name"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"email",children:"Email Address"}),r.jsx("input",{type:"email",id:"email",name:"email",value:m.email,onChange:N,required:!0,placeholder:"Enter your email address"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"phone",children:"Phone Number"}),r.jsx("input",{type:"tel",id:"phone",name:"phone",value:m.phone,onChange:N,placeholder:"Enter your phone number"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"subject",children:"Subject"}),r.jsx("input",{type:"text",id:"subject",name:"subject",value:m.subject,onChange:N,placeholder:"What is this regarding?"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"message",children:"Your Message"}),r.jsx("textarea",{id:"message",name:"message",value:m.message,onChange:N,required:!0,placeholder:"Tell us how we can help you",rows:5})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:d,children:d?r.jsxs(r.Fragment,{children:[r.jsx("i",{className:"fas fa-spinner fa-spin"}),"Sending..."]}):"Send Message"}),o&&r.jsx("div",{className:`form-message ${o.includes("error")?"error":"success"}`,children:o})]})]})]})})]})},j0=()=>{const[o,f]=T.useState(""),d=u=>{u.preventDefault(),f("Your tour has been scheduled successfully!"),setTimeout(()=>f(""),5e3),u.target.reset()};return r.jsxs("section",{className:"form-page",children:[r.jsx("div",{className:"page-banner tour-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Schedule a Campus Tour"}),r.jsx("p",{children:"We would love to show you around our campus."})]})}),r.jsx("div",{className:"container",children:r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-info",children:[r.jsx("h3",{children:"Visit Us"}),r.jsx("p",{children:"Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT."}),r.jsxs("div",{className:"info-item",children:[r.jsxs("strong",{children:[r.jsx("i",{className:"fas fa-clock"})," Tour Hours"]}),r.jsx("span",{children:"Monday - Friday: 10:00 AM - 4:00 PM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsxs("strong",{children:[r.jsx("i",{className:"fas fa-map-marker-alt"})," Location"]}),r.jsx("span",{children:"123 Tech Avenue, Innovation City"})]})]}),r.jsxs("div",{className:"form-container",children:[r.jsx("h3",{children:"Book Your Visit"}),r.jsxs("form",{onSubmit:d,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"name",children:"Your Name"}),r.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"email",children:"Email Address"}),r.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"date",children:"Preferred Date"}),r.jsx("input",{type:"date",id:"date",name:"date",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"time",children:"Preferred Time"}),r.jsx("input",{type:"time",id:"time",name:"time",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"guests",children:"Number of Guests"}),r.jsxs("select",{id:"guests",name:"guests",children:[r.jsx("option",{children:"1"}),r.jsx("option",{children:"2"}),r.jsx("option",{children:"3"}),r.jsx("option",{children:"4"}),r.jsx("option",{children:"5+"})]})]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"Schedule Tour"}),o&&r.jsx("div",{className:"form-message success",children:o})]})]})]})})]})},S0=()=>r.jsx("section",{id:"academic-programs",className:"academic-programs",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Academic Programs"}),r.jsx("p",{className:"section-subtitle",children:"Explore our diverse range of postgraduate diploma programs in emerging technologies"}),r.jsxs("div",{className:"programs-grid",children:[r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg",alt:"AI & Management"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"EU ACC Certificate Program in AI & Management"}),r.jsx("p",{children:"Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-certificate"}),r.jsx("span",{children:"Certificate Program"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"1st Sep - 30th Sep 2025"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"AR VR Technology"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"EU ACC Master Program in AR & VR Technology"}),r.jsx("p",{children:"Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-building"}),r.jsx("span",{children:"100+ Industrial Partners"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-hands-helping"}),r.jsx("span",{children:"10+ Hands-on Projects"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Agri Drones"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Agri Drones"}),r.jsx("p",{children:"Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Medical Robotics"}),r.jsx("p",{children:"Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration."}),r.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agri Robotics"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Agri Robotics"}),r.jsx("p",{children:"Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems."}),r.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]})]})]})}),A0=()=>r.jsx("section",{id:"upcoming-courses",className:"upcoming-courses",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"courses-header",children:[r.jsx("div",{className:"expand-knowledge",children:"EXPAND YOUR KNOWLEDGE"}),r.jsx("h2",{children:"Upcoming Courses"}),r.jsx("p",{className:"section-subtitle",children:"Discover our latest course offerings designed to keep you at the forefront of technology"})]}),r.jsxs("div",{className:"courses-grid",children:[r.jsxs("div",{className:"course-card featured",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://agmay.in/images/manufacturing.webp",alt:"Drone Manufacturing"}),r.jsx("div",{className:"course-badge",children:"Featured"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Drone Manufacturing"}),r.jsx("p",{children:"Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),r.jsxs("div",{className:"course-card",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"}),r.jsx("div",{className:"course-badge",children:"Popular"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Medical Robotics"}),r.jsx("p",{children:"Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),r.jsxs("div",{className:"course-card",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agriculture Robotics"}),r.jsx("div",{className:"course-badge",children:"New"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Agriculture Robotics"}),r.jsx("p",{children:"Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-details-blue",children:"Details"})]})]})]}),r.jsx("div",{className:"view-all-courses",children:r.jsx("button",{className:"btn-view-all",children:"View All Upcoming Courses"})})]})}),w0=()=>r.jsx("section",{id:"research",className:"research-projects",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Ongoing Research Projects"}),r.jsx("p",{className:"section-subtitle",children:"Explore our cutting-edge research initiatives across various technology domains"}),r.jsxs("div",{className:"research-grid",children:[r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI-Powered Predictive Maintenance"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"AI-Powered Predictive Maintenance"}),r.jsx("p",{children:"Developing AI models for predictive maintenance of industrial equipment to reduce downtime."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conversational AI Assistant"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Conversational AI Assistant"}),r.jsx("p",{children:"Creating an AI assistant for mental health support and counseling services."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=",alt:"Automated Disease Detection"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Automated Disease Detection"}),r.jsx("p",{children:"Using deep learning for automated detection of diseases in medical images."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Point-of-Care Diagnostic Device"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Point-of-Care Diagnostic Device"}),r.jsx("p",{children:"Developing portable diagnostic tools for rapid detection of infectious diseases."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Smart Grid Systems"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Smart Grid Systems"}),r.jsx("p",{children:"Creating intelligent grid systems for efficient energy distribution and management."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=",alt:"EV Charging Infrastructure"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"EV Charging Infrastructure"}),r.jsx("p",{children:"Designing urban electric vehicle charging networks for sustainable transportation."})]})]})]})]})}),N0=()=>{const[o,f]=T.useState("conferences"),d=()=>{switch(o){case"conferences":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conference Hall"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"International Conference on AI & Robotics"}),r.jsx("p",{children:"Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Virtual & On-campus"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"People collaborating"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Tech for Sustainable Development"}),r.jsx("p",{children:"Exploring technological solutions for achieving sustainable development goals."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Main Campus"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agri-Tech"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Future of Agri-Tech"}),r.jsx("p",{children:"Conference focusing on emerging technologies in agriculture and food production."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Agricultural Research Center"})]})]})]})]});case"webinars":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone in flight"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Introduction to Drone Technology"}),r.jsx("p",{children:"Free webinar covering basics of drone technology and its industrial applications."})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI and ML concept"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Career in AI & ML"}),r.jsx("p",{children:"Webinar discussing career opportunities and skill requirements in AI/ML fields."})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Precision agriculture"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Precision Agriculture Techniques"}),r.jsx("p",{children:"Learn about modern precision farming methods using IoT and data analytics."})]})]})]});case"courses":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone piloting"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Certificate in Drone Piloting"}),r.jsx("p",{children:"3-month program covering drone operation, regulations, and commercial applications."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"DGCA Approved"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Business analytics dashboard"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"AI for Business Professionals"}),r.jsx("p",{children:"6-week certificate course on AI applications for non-technical business leaders."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"Industry Recognized"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"IoT circuit board"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"IoT Fundamentals"}),r.jsx("p",{children:"8-week hands-on course on Internet of Things concepts and implementation."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"With Lab Access"})]})]})]})]});default:return null}};return r.jsx("section",{id:"events",className:"events-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Conferences, Webinars & Certificate Courses"}),r.jsx("p",{className:"section-subtitle",children:"Participate in our knowledge-sharing events and short-term certification programs"}),r.jsxs("div",{className:"events-tabs",children:[r.jsx("button",{onClick:()=>f("conferences"),className:`tab-btn ${o==="conferences"?"active":""}`,children:"Conferences"}),r.jsx("button",{onClick:()=>f("webinars"),className:`tab-btn ${o==="webinars"?"active":""}`,children:"Webinars"}),r.jsx("button",{onClick:()=>f("courses"),className:`tab-btn ${o==="courses"?"active":""}`,children:"Certificate Courses"})]}),d()]})})},E0=()=>{const[o,f]=T.useState(""),d=m=>{m.preventDefault(),f("Thank you for subscribing!"),setTimeout(()=>f(""),5e3),m.target.reset()},u=new Date().getFullYear();return r.jsx("footer",{id:"contact",className:"site-footer",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"footer-grid",children:[r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"About Institute of Global Technology"}),r.jsx("p",{children:"Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields."}),r.jsx("p",{children:r.jsx("strong",{children:"Accredited by AIAB Europe"})}),r.jsxs("div",{className:"social-icons",children:[r.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:r.jsx("i",{className:"fab fa-twitter"})}),r.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:r.jsx("i",{className:"fab fa-youtube"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Quick Links"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Sa,{to:"/home",className:"footer-nav-link",children:"Home"})}),r.jsx("li",{children:r.jsx(Sa,{to:"/programs",className:"footer-nav-link",children:"Academic Programs"})}),r.jsx("li",{children:r.jsx(Sa,{to:"/departments",className:"footer-nav-link",children:"Research Departments"})}),r.jsx("li",{children:r.jsx(Sa,{to:"/faculty",className:"footer-nav-link",children:"Faculty"})}),r.jsx("li",{children:r.jsx(Sa,{to:"/admissions",className:"footer-nav-link",children:"Admissions"})}),r.jsx("li",{children:r.jsx(Sa,{to:"/contact",className:"footer-nav-link",children:"Contact"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Academic Programs"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Robotics & AI"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Precision Agriculture"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Drone Technology"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Healthcare & Life Sciences"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Emerging Technologies"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Research Opportunities"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Newsletter"}),r.jsx("p",{children:"Subscribe to our newsletter to receive updates on events, admissions, and institute news."}),r.jsxs("form",{className:"newsletter-form",onSubmit:d,children:[r.jsx("input",{type:"email",placeholder:"Enter your email address",required:!0,"aria-label":"Email address for newsletter"}),r.jsx("button",{type:"submit","aria-label":"Subscribe to newsletter",children:r.jsx("i",{className:"fas fa-paper-plane"})})]}),o&&r.jsx("p",{className:"newsletter-message",children:o}),r.jsx("p",{className:"newsletter-note",children:"We respect your privacy. Unsubscribe at any time."})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsxs("div",{className:"footer-bottom-content",children:[r.jsxs("span",{children:["© ",u," Institute of Global Technology. All Rights Reserved."]}),r.jsxs("div",{className:"footer-bottom-links",children:[r.jsx("a",{href:"#","aria-label":"Terms of Use",children:"Terms of Use"}),r.jsx("a",{href:"#","aria-label":"Privacy Policy",children:"Privacy Policy"}),r.jsx("a",{href:"#","aria-label":"Accessibility",children:"Accessibility"}),r.jsx("a",{href:"#","aria-label":"Contact Support",children:"Support"})]})]})})]})})},T0=()=>r.jsxs(r.Fragment,{children:[r.jsx(m0,{}),r.jsx(h0,{}),r.jsx(p0,{}),r.jsx(S0,{}),r.jsx(A0,{}),r.jsx(w0,{}),r.jsx(N0,{})]}),R0=[{name:"AI & Machine Learning",description:"Developing AI and ML algorithms, models, and applications for various industries.",researchAreas:["Natural Language Processing","Computer Vision","Predictive Analytics","Robotics"],image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg"},{name:"Cybersecurity",description:"Investigating cybersecurity threats, vulnerabilities, and countermeasures.",researchAreas:["Threat Intelligence","Incident Response","Cryptography","Network Security"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Data Science & Analytics",description:"Developing data-driven solutions for insights and decision-making.",researchAreas:["Big Data Analytics","Data Visualization","Predictive Modelling","Statistical Analysis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"IoT & Edge Computing",description:"Designing and implementing IoT systems and edge computing architectures.",researchAreas:["IoT Security","Edge AI","Real-time Analytics","Industrial Automation"],image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp"},{name:"Sustainable Energy",description:"Investigating sustainable energy solutions and climate change mitigation.",researchAreas:["Renewable Energy","Energy Storage","Green Buildings","Sustainable Infrastructure"],image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Biotechnology & Healthcare",description:"Developing innovative solutions for healthcare and medicine.",researchAreas:["Personalized Medicine","Regenerative Medicine","Gene Editing","Medical Imaging"],image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"},{name:"Robotics & Autonomous Systems",description:"Designing advanced robotic systems and autonomous vehicles.",researchAreas:["Robotics","Autonomous Systems","Human-Robot Interaction","Swarm Robotics"],image:"https://media.licdn.com/dms/image/v2/D5612AQFLdebIV4BTYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721157098257?e=1761782400&v=beta&t=yLMm79DcuvTBA2jgbmubv_CMdyNlY8RQ8Kli_bTzNMo"},{name:"Advanced Materials",description:"Investigating novel materials and manufacturing processes.",researchAreas:["Nanomaterials","Biomaterials","3D Printing","Advanced Manufacturing"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Human-Computer Interaction",description:"Developing user-centered interfaces and experiences.",researchAreas:["User Experience Design","Human-Computer Interaction","Accessibility","Usability"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Zoology & Animal Biotechnology",description:"Exploring the genetic and cellular aspects of animals for sustainable development.",researchAreas:["Animal Genetics","Cellular Biotechnology","Wildlife Conservation","Veterinary Applications"],image:"https://i.ibb.co/WNZ4GPQ1/download-11.jpg"},{name:"Botany & Plant Biotechnology",description:"Advancing plant science through genetic engineering and sustainable agriculture.",researchAreas:["Plant Tissue Culture","Genetically Modified Crops","Medicinal Plants","Agro-biotechnology"],image:"https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg"},{name:"Quantum Computing",description:"Exploring quantum computing and emerging technologies.",researchAreas:["Quantum Algorithms","Quantum Applications","Blockchain","Distributed Ledger Tech"],image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}],M0=()=>r.jsxs("section",{className:"departments-page",children:[r.jsx("div",{className:"page-banner departments-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Research Departments"}),r.jsx("p",{children:"Explore our specialized research departments that are pushing the boundaries of knowledge and innovation"})]})}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"department-grid",children:R0.map((o,f)=>r.jsxs("div",{className:"department-card",children:[r.jsx("img",{src:o.image,alt:o.name}),r.jsxs("div",{className:"department-card-content",children:[r.jsx("h3",{children:o.name}),r.jsx("p",{children:o.description}),r.jsx("strong",{children:"Research Areas:"}),r.jsx("ul",{children:o.researchAreas.map((d,u)=>r.jsx("li",{children:d},u))}),r.jsx("a",{href:"#",children:"Explore Department"})]})]},f))})})]}),z0=[{name:"Dr Ipseeta Nanda",title:"Hon.Director Dean IGT",bio:"With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.",image:"https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Rahul Vadiseety",title:"Director AI",bio:"Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.",image:"https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr. Rath Satyasambit",title:"Director Robotics",bio:"Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",image:"https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Harshichander",title:"Director Biology",bio:"Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.",image:"https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png",social:{email:"#",linkedin:"#",scholar:"#"}}],D0=()=>r.jsxs("section",{className:"faculty-page",children:[r.jsxs("div",{className:"faculty-header",children:[r.jsx("h2",{children:"Our Distinguished Faculty"}),r.jsx("p",{children:"Meet our accomplished faculty members who are experts in their fields and dedicated to student success."})]}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"faculty-grid",children:z0.map((o,f)=>r.jsx("div",{className:"faculty-box",children:r.jsxs("div",{className:"faculty-card",children:[r.jsx("img",{src:o.image,alt:`Portrait of ${o.name}`,className:"faculty-image"}),r.jsxs("div",{className:"faculty-content",children:[r.jsx("h3",{children:o.name}),r.jsx("span",{className:"title",children:o.title}),r.jsx("p",{children:o.bio}),r.jsxs("div",{className:"faculty-social",children:[r.jsx("a",{href:o.social.email,"aria-label":"Email",children:r.jsx("i",{className:"fas fa-envelope"})}),r.jsx("a",{href:o.social.linkedin,"aria-label":"LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:o.social.scholar,"aria-label":"Google Scholar",children:r.jsx("i",{className:"ai ai-google-scholar"})})]})]})]})},f))})})]}),O0=()=>{const o=$t();return T.useEffect(()=>{window.scrollTo(0,0)},[o.pathname]),r.jsxs(r.Fragment,{children:[r.jsx(u0,{}),r.jsx(f0,{}),r.jsx(d0,{activePage:o.pathname}),r.jsx("main",{children:r.jsxs(Dg,{children:[r.jsx(Dt,{path:"/",element:r.jsx(Qd,{to:"/home",replace:!0})}),r.jsx(Dt,{path:"/home",element:r.jsx(T0,{})}),r.jsx(Dt,{path:"/programs",element:r.jsx(b0,{})}),r.jsx(Dt,{path:"/departments",element:r.jsx(M0,{})}),r.jsx(Dt,{path:"/faculty",element:r.jsx(D0,{})}),r.jsx(Dt,{path:"/admissions",element:r.jsx(v0,{})}),r.jsx(Dt,{path:"/contact",element:r.jsx(y0,{})}),r.jsx(Dt,{path:"/tour",element:r.jsx(j0,{})}),r.jsx(Dt,{path:"*",element:r.jsx(Qd,{to:"/home",replace:!0})})]})}),r.jsx(E0,{})]})};function C0(){return r.jsx(e0,{children:r.jsx(O0,{})})}Lp.createRoot(document.getElementById("root")).render(r.jsx(Cp.StrictMode,{children:r.jsx(C0,{})}));
