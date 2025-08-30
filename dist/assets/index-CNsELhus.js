(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const w of b.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function f(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(m){if(m.ep)return;m.ep=!0;const b=f(m);fetch(m.href,b)}})();function pm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var As={exports:{}},Ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function Wp(){if(kf)return Ci;kf=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,b){var w=null;if(b!==void 0&&(w=""+b),m.key!==void 0&&(w=""+m.key),"key"in m){b={};for(var C in m)C!=="key"&&(b[C]=m[C])}else b=m;return m=b.ref,{$$typeof:o,type:u,key:w,ref:m!==void 0?m:null,props:b}}return Ci.Fragment=d,Ci.jsx=f,Ci.jsxs=f,Ci}var Bf;function $p(){return Bf||(Bf=1,As.exports=Wp()),As.exports}var r=$p(),Ss={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function eh(){if(Uf)return ae;Uf=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function _(h){return h===null||typeof h!="object"?null:(h=k&&h[k]||h["@@iterator"],typeof h=="function"?h:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,W={};function Y(h,O,H){this.props=h,this.context=O,this.refs=W,this.updater=H||G}Y.prototype.isReactComponent={},Y.prototype.setState=function(h,O){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,O,"setState")},Y.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function I(){}I.prototype=Y.prototype;function q(h,O,H){this.props=h,this.context=O,this.refs=W,this.updater=H||G}var te=q.prototype=new I;te.constructor=q,F(te,Y.prototype),te.isPureReactComponent=!0;var Se=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},ke=Object.prototype.hasOwnProperty;function Ne(h,O,H,B,Q,se){return H=se.ref,{$$typeof:o,type:h,key:O,ref:H!==void 0?H:null,props:se}}function Be(h,O){return Ne(h.type,O,void 0,void 0,void 0,h.props)}function je(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function et(h){var O={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(H){return O[H]})}var dt=/\/+/g;function Pe(h,O){return typeof h=="object"&&h!==null&&h.key!=null?et(""+h.key):O.toString(36)}function ja(){}function Da(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(ja,ja):(h.status="pending",h.then(function(O){h.status==="pending"&&(h.status="fulfilled",h.value=O)},function(O){h.status==="pending"&&(h.status="rejected",h.reason=O)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function Fe(h,O,H,B,Q){var se=typeof h;(se==="undefined"||se==="boolean")&&(h=null);var ee=!1;if(h===null)ee=!0;else switch(se){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(h.$$typeof){case o:case d:ee=!0;break;case E:return ee=h._init,Fe(ee(h._payload),O,H,B,Q)}}if(ee)return Q=Q(h),ee=B===""?"."+Pe(h,0):B,Se(Q)?(H="",ee!=null&&(H=ee.replace(dt,"$&/")+"/"),Fe(Q,O,H,"",function(Wt){return Wt})):Q!=null&&(je(Q)&&(Q=Be(Q,H+(Q.key==null||h&&h.key===Q.key?"":(""+Q.key).replace(dt,"$&/")+"/")+ee)),O.push(Q)),1;ee=0;var tt=B===""?".":B+":";if(Se(h))for(var ve=0;ve<h.length;ve++)B=h[ve],se=tt+Pe(B,ve),ee+=Fe(B,O,H,se,Q);else if(ve=_(h),typeof ve=="function")for(h=ve.call(h),ve=0;!(B=h.next()).done;)B=B.value,se=tt+Pe(B,ve++),ee+=Fe(B,O,H,se,Q);else if(se==="object"){if(typeof h.then=="function")return Fe(Da(h),O,H,B,Q);throw O=String(h),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ee}function T(h,O,H){if(h==null)return h;var B=[],Q=0;return Fe(h,B,"","",function(se){return O.call(H,se,Q++)}),B}function U(h){if(h._status===-1){var O=h._result;O=O(),O.then(function(H){(h._status===0||h._status===-1)&&(h._status=1,h._result=H)},function(H){(h._status===0||h._status===-1)&&(h._status=2,h._result=H)}),h._status===-1&&(h._status=0,h._result=O)}if(h._status===1)return h._result.default;throw h._result}var K=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function he(){}return ae.Children={map:T,forEach:function(h,O,H){T(h,function(){O.apply(this,arguments)},H)},count:function(h){var O=0;return T(h,function(){O++}),O},toArray:function(h){return T(h,function(O){return O})||[]},only:function(h){if(!je(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},ae.Component=Y,ae.Fragment=f,ae.Profiler=m,ae.PureComponent=q,ae.StrictMode=u,ae.Suspense=A,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ae.__COMPILER_RUNTIME={__proto__:null,c:function(h){return $.H.useMemoCache(h)}},ae.cache=function(h){return function(){return h.apply(null,arguments)}},ae.cloneElement=function(h,O,H){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var B=F({},h.props),Q=h.key,se=void 0;if(O!=null)for(ee in O.ref!==void 0&&(se=void 0),O.key!==void 0&&(Q=""+O.key),O)!ke.call(O,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&O.ref===void 0||(B[ee]=O[ee]);var ee=arguments.length-2;if(ee===1)B.children=H;else if(1<ee){for(var tt=Array(ee),ve=0;ve<ee;ve++)tt[ve]=arguments[ve+2];B.children=tt}return Ne(h.type,Q,void 0,void 0,se,B)},ae.createContext=function(h){return h={$$typeof:w,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:b,_context:h},h},ae.createElement=function(h,O,H){var B,Q={},se=null;if(O!=null)for(B in O.key!==void 0&&(se=""+O.key),O)ke.call(O,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Q[B]=O[B]);var ee=arguments.length-2;if(ee===1)Q.children=H;else if(1<ee){for(var tt=Array(ee),ve=0;ve<ee;ve++)tt[ve]=arguments[ve+2];Q.children=tt}if(h&&h.defaultProps)for(B in ee=h.defaultProps,ee)Q[B]===void 0&&(Q[B]=ee[B]);return Ne(h,se,void 0,void 0,null,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(h){return{$$typeof:C,render:h}},ae.isValidElement=je,ae.lazy=function(h){return{$$typeof:E,_payload:{_status:-1,_result:h},_init:U}},ae.memo=function(h,O){return{$$typeof:p,type:h,compare:O===void 0?null:O}},ae.startTransition=function(h){var O=$.T,H={};$.T=H;try{var B=h(),Q=$.S;Q!==null&&Q(H,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(he,K)}catch(se){K(se)}finally{$.T=O}},ae.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ae.use=function(h){return $.H.use(h)},ae.useActionState=function(h,O,H){return $.H.useActionState(h,O,H)},ae.useCallback=function(h,O){return $.H.useCallback(h,O)},ae.useContext=function(h){return $.H.useContext(h)},ae.useDebugValue=function(){},ae.useDeferredValue=function(h,O){return $.H.useDeferredValue(h,O)},ae.useEffect=function(h,O,H){var B=$.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(h,O)},ae.useId=function(){return $.H.useId()},ae.useImperativeHandle=function(h,O,H){return $.H.useImperativeHandle(h,O,H)},ae.useInsertionEffect=function(h,O){return $.H.useInsertionEffect(h,O)},ae.useLayoutEffect=function(h,O){return $.H.useLayoutEffect(h,O)},ae.useMemo=function(h,O){return $.H.useMemo(h,O)},ae.useOptimistic=function(h,O){return $.H.useOptimistic(h,O)},ae.useReducer=function(h,O,H){return $.H.useReducer(h,O,H)},ae.useRef=function(h){return $.H.useRef(h)},ae.useState=function(h){return $.H.useState(h)},ae.useSyncExternalStore=function(h,O,H){return $.H.useSyncExternalStore(h,O,H)},ae.useTransition=function(){return $.H.useTransition()},ae.version="19.1.1",ae}var _f;function Os(){return _f||(_f=1,Ss.exports=eh()),Ss.exports}var M=Os();const th=pm(M);var ws={exports:{}},Ni={},js={exports:{}},Ds={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function ah(){return Hf||(Hf=1,(function(o){function d(T,U){var K=T.length;T.push(U);e:for(;0<K;){var he=K-1>>>1,h=T[he];if(0<m(h,U))T[he]=U,T[K]=h,K=he;else break e}}function f(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var U=T[0],K=T.pop();if(K!==U){T[0]=K;e:for(var he=0,h=T.length,O=h>>>1;he<O;){var H=2*(he+1)-1,B=T[H],Q=H+1,se=T[Q];if(0>m(B,K))Q<h&&0>m(se,B)?(T[he]=se,T[Q]=K,he=Q):(T[he]=B,T[H]=K,he=H);else if(Q<h&&0>m(se,K))T[he]=se,T[Q]=K,he=Q;else break e}}return U}function m(T,U){var K=T.sortIndex-U.sortIndex;return K!==0?K:T.id-U.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;o.unstable_now=function(){return b.now()}}else{var w=Date,C=w.now();o.unstable_now=function(){return w.now()-C}}var A=[],p=[],E=1,k=null,_=3,G=!1,F=!1,W=!1,Y=!1,I=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function Se(T){for(var U=f(p);U!==null;){if(U.callback===null)u(p);else if(U.startTime<=T)u(p),U.sortIndex=U.expirationTime,d(A,U);else break;U=f(p)}}function $(T){if(W=!1,Se(T),!F)if(f(A)!==null)F=!0,ke||(ke=!0,Pe());else{var U=f(p);U!==null&&Fe($,U.startTime-T)}}var ke=!1,Ne=-1,Be=5,je=-1;function et(){return Y?!0:!(o.unstable_now()-je<Be)}function dt(){if(Y=!1,ke){var T=o.unstable_now();je=T;var U=!0;try{e:{F=!1,W&&(W=!1,q(Ne),Ne=-1),G=!0;var K=_;try{t:{for(Se(T),k=f(A);k!==null&&!(k.expirationTime>T&&et());){var he=k.callback;if(typeof he=="function"){k.callback=null,_=k.priorityLevel;var h=he(k.expirationTime<=T);if(T=o.unstable_now(),typeof h=="function"){k.callback=h,Se(T),U=!0;break t}k===f(A)&&u(A),Se(T)}else u(A);k=f(A)}if(k!==null)U=!0;else{var O=f(p);O!==null&&Fe($,O.startTime-T),U=!1}}break e}finally{k=null,_=K,G=!1}U=void 0}}finally{U?Pe():ke=!1}}}var Pe;if(typeof te=="function")Pe=function(){te(dt)};else if(typeof MessageChannel<"u"){var ja=new MessageChannel,Da=ja.port2;ja.port1.onmessage=dt,Pe=function(){Da.postMessage(null)}}else Pe=function(){I(dt,0)};function Fe(T,U){Ne=I(function(){T(o.unstable_now())},U)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(T){switch(_){case 1:case 2:case 3:var U=3;break;default:U=_}var K=_;_=U;try{return T()}finally{_=K}},o.unstable_requestPaint=function(){Y=!0},o.unstable_runWithPriority=function(T,U){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var K=_;_=T;try{return U()}finally{_=K}},o.unstable_scheduleCallback=function(T,U,K){var he=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?he+K:he):K=he,T){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=K+h,T={id:E++,callback:U,priorityLevel:T,startTime:K,expirationTime:h,sortIndex:-1},K>he?(T.sortIndex=K,d(p,T),f(A)===null&&T===f(p)&&(W?(q(Ne),Ne=-1):W=!0,Fe($,K-he))):(T.sortIndex=h,d(A,T),F||G||(F=!0,ke||(ke=!0,Pe()))),T},o.unstable_shouldYield=et,o.unstable_wrapCallback=function(T){var U=_;return function(){var K=_;_=U;try{return T.apply(this,arguments)}finally{_=K}}}})(Ds)),Ds}var Lf;function nh(){return Lf||(Lf=1,js.exports=ah()),js.exports}var Es={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function ih(){if(Yf)return Qe;Yf=1;var o=Os();function d(A){var p="https://react.dev/errors/"+A;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+A+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(A,p,E){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:k==null?null:""+k,children:A,containerInfo:p,implementation:E}}var w=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(A,p){if(A==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Qe.createPortal=function(A,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(d(299));return b(A,p,null,E)},Qe.flushSync=function(A){var p=w.T,E=u.p;try{if(w.T=null,u.p=2,A)return A()}finally{w.T=p,u.p=E,u.d.f()}},Qe.preconnect=function(A,p){typeof A=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(A,p))},Qe.prefetchDNS=function(A){typeof A=="string"&&u.d.D(A)},Qe.preinit=function(A,p){if(typeof A=="string"&&p&&typeof p.as=="string"){var E=p.as,k=C(E,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,G=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?u.d.S(A,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:k,integrity:_,fetchPriority:G}):E==="script"&&u.d.X(A,{crossOrigin:k,integrity:_,fetchPriority:G,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Qe.preinitModule=function(A,p){if(typeof A=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=C(p.as,p.crossOrigin);u.d.M(A,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(A)},Qe.preload=function(A,p){if(typeof A=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,k=C(E,p.crossOrigin);u.d.L(A,E,{crossOrigin:k,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Qe.preloadModule=function(A,p){if(typeof A=="string")if(p){var E=C(p.as,p.crossOrigin);u.d.m(A,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(A)},Qe.requestFormReset=function(A){u.d.r(A)},Qe.unstable_batchedUpdates=function(A,p){return A(p)},Qe.useFormState=function(A,p,E){return w.H.useFormState(A,p,E)},Qe.useFormStatus=function(){return w.H.useHostTransitionStatus()},Qe.version="19.1.1",Qe}var qf;function rh(){if(qf)return Es.exports;qf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Es.exports=ih(),Es.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function lh(){if(Gf)return Ni;Gf=1;var o=nh(),d=Os(),f=rh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(b(e)!==e)throw Error(u(188))}function A(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return C(i),e;if(l===n)return C(i),t;l=l.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=l;else{for(var s=!1,c=i.child;c;){if(c===a){s=!0,a=i,n=l;break}if(c===n){s=!0,n=i,a=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===a){s=!0,a=l,n=i;break}if(c===n){s=!0,n=l,a=i;break}c=c.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,k=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),te=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var ja=Symbol.for("react.client.reference");function Da(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ja?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case Y:return"Profiler";case W:return"StrictMode";case $:return"Suspense";case ke:return"SuspenseList";case je:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case te:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:Da(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return Da(e(t))}catch{}}return null}var Fe=Array.isArray,T=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},he=[],h=-1;function O(e){return{current:e}}function H(e){0>h||(e.current=he[h],he[h]=null,h--)}function B(e,t){h++,he[h]=e.current,e.current=t}var Q=O(null),se=O(null),ee=O(null),tt=O(null);function ve(e,t){switch(B(ee,t),B(se,e),B(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sf(t),e=cf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Q),B(Q,e)}function Wt(){H(Q),H(se),H(ee)}function rl(e){e.memoizedState!==null&&B(tt,e);var t=Q.current,a=cf(t,e.type);t!==a&&(B(se,e),B(Q,a))}function Ui(e){se.current===e&&(H(Q),H(se)),tt.current===e&&(H(tt),Di._currentValue=K)}var ll=Object.prototype.hasOwnProperty,ol=o.unstable_scheduleCallback,sl=o.unstable_cancelCallback,Cm=o.unstable_shouldYield,Nm=o.unstable_requestPaint,Rt=o.unstable_now,zm=o.unstable_getCurrentPriorityLevel,qs=o.unstable_ImmediatePriority,Gs=o.unstable_UserBlockingPriority,_i=o.unstable_NormalPriority,Om=o.unstable_LowPriority,Ps=o.unstable_IdlePriority,km=o.log,Bm=o.unstable_setDisableYieldValue,On=null,at=null;function $t(e){if(typeof km=="function"&&Bm(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(On,e)}catch{}}var nt=Math.clz32?Math.clz32:Hm,Um=Math.log,_m=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-(Um(e)/_m|0)|0}var Hi=256,Li=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~l,n!==0?i=Ea(n):(s&=c,s!==0?i=Ea(s):a||(a=c&~e,a!==0&&(i=Ea(a))))):(c=n&~l,c!==0?i=Ea(c):s!==0?i=Ea(s):a||(a=n&~e,a!==0&&(i=Ea(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function kn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fs(){var e=Hi;return Hi<<=1,(Hi&4194048)===0&&(Hi=256),e}function Is(){var e=Li;return Li<<=1,(Li&62914560)===0&&(Li=4194304),e}function cl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Bn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ym(e,t,a,n,i,l){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,g=e.expirationTimes,S=e.hiddenUpdates;for(a=s&~a;0<a;){var R=31-nt(a),z=1<<R;c[R]=0,g[R]=-1;var j=S[R];if(j!==null)for(S[R]=null,R=0;R<j.length;R++){var D=j[R];D!==null&&(D.lane&=-536870913)}a&=~z}n!==0&&Vs(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function Vs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-nt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Qs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-nt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function ul(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xs(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Rf(e.type))}function qm(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var ea=Math.random().toString(36).slice(2),Ie="__reactFiber$"+ea,Ze="__reactProps$"+ea,Fa="__reactContainer$"+ea,fl="__reactEvents$"+ea,Gm="__reactListeners$"+ea,Pm="__reactHandles$"+ea,Zs="__reactResources$"+ea,Un="__reactMarker$"+ea;function ml(e){delete e[Ie],delete e[Ze],delete e[fl],delete e[Gm],delete e[Pm]}function Ia(e){var t=e[Ie];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Fa]||a[Ie]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=mf(e);e!==null;){if(a=e[Ie])return a;e=mf(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Ie]||e[Fa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _n(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Qa(e){var t=e[Zs];return t||(t=e[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Un]=!0}var Ks=new Set,Js={};function Ma(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(Js[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var Fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ws={},$s={};function Im(e){return ll.call($s,e)?!0:ll.call(Ws,e)?!1:Fm.test(e)?$s[e]=!0:(Ws[e]=!0,!1)}function qi(e,t,a){if(Im(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function kt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var gl,ec;function Za(e){if(gl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||"",ec=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gl+e+ec}var pl=!1;function hl(e,t){if(!e||pl)return"";pl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(D){var j=D}Reflect.construct(e,[],z)}else{try{z.call()}catch(D){j=D}e.call(z.prototype)}}else{try{throw Error()}catch(D){j=D}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(D){if(D&&j&&typeof D.stack=="string")return[D.stack,j.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var g=s.split(`
`),S=c.split(`
`);for(i=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(n===g.length||i===S.length)for(n=g.length-1,i=S.length-1;1<=n&&0<=i&&g[n]!==S[i];)i--;for(;1<=n&&0<=i;n--,i--)if(g[n]!==S[i]){if(n!==1||i!==1)do if(n--,i--,0>i||g[n]!==S[i]){var R=`
`+g[n].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=n&&0<=i);break}}}finally{pl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Za(a):""}function Vm(e){switch(e.tag){case 26:case 27:case 5:return Za(e.type);case 16:return Za("Lazy");case 13:return Za("Suspense");case 19:return Za("SuspenseList");case 0:case 15:return hl(e.type,!1);case 11:return hl(e.type.render,!1);case 1:return hl(e.type,!0);case 31:return Za("Activity");default:return""}}function tc(e){try{var t="";do t+=Vm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qm(e){var t=ac(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=Qm(e))}function nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ac(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xm=/[\n"\\]/g;function mt(e){return e.replace(Xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xl(e,t,a,n,i,l,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?bl(e,s,ft(t)):a!=null?bl(e,s,ft(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ft(c):e.removeAttribute("name")}function ic(e,t,a,n,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null))return;a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function bl(e,t,a){t==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ka(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rc(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function lc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(Fe(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Zm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Zm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function sc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&oc(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&oc(e,l,t[l])}function vl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Km=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return Jm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yl=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,$a=null;function cc(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(xl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Ze]||null;if(!i)throw Error(u(90));xl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&nc(n)}break e;case"textarea":rc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ka(e,!!a.multiple,t,!1)}}}var Sl=!1;function uc(e,t,a){if(Sl)return e(t,a);Sl=!0;try{var n=e(t);return n}finally{if(Sl=!1,(Wa!==null||$a!==null)&&(Cr(),Wa&&(t=Wa,e=$a,$a=Wa=null,cc(t),e)))for(t=0;t<e.length;t++)cc(e[t])}}function Hn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ze]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wl=!1;if(Bt)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{wl=!1}var ta=null,jl=null,Vi=null;function dc(){if(Vi)return Vi;var e,t=jl,a=t.length,n,i="value"in ta?ta.value:ta.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[l-n];n++);return Vi=i.slice(e,1<n?1-n:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function fc(){return!1}function Ke(e){function t(a,n,i,l,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xi:fc,this.isPropagationStopped=fc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Ke(Ra),Yn=E({},Ra,{view:0,detail:0}),Wm=Ke(Yn),Dl,El,qn,Ki=E({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(Dl=e.screenX-qn.screenX,El=e.screenY-qn.screenY):El=Dl=0,qn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),mc=Ke(Ki),$m=E({},Ki,{dataTransfer:0}),eg=Ke($m),tg=E({},Yn,{relatedTarget:0}),Ml=Ke(tg),ag=E({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=Ke(ag),ig=E({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=Ke(ig),lg=E({},Ra,{data:0}),gc=Ke(lg),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cg[e])?!!t[e]:!1}function Rl(){return ug}var dg=E({},Yn,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fg=Ke(dg),mg=E({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=Ke(mg),gg=E({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),pg=Ke(gg),hg=E({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Ke(hg),bg=E({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=Ke(bg),yg=E({},Ra,{newState:0,oldState:0}),Ag=Ke(yg),Sg=[9,13,27,32],Tl=Bt&&"CompositionEvent"in window,Gn=null;Bt&&"documentMode"in document&&(Gn=document.documentMode);var wg=Bt&&"TextEvent"in window&&!Gn,hc=Bt&&(!Tl||Gn&&8<Gn&&11>=Gn),xc=" ",bc=!1;function vc(e,t){switch(e){case"keyup":return Sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function jg(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(bc=!0,xc);case"textInput":return e=t.data,e===xc&&bc?null:e;default:return null}}function Dg(e,t){if(en)return e==="compositionend"||!Tl&&vc(e,t)?(e=dc(),Vi=jl=ta=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hc&&t.locale!=="ko"?null:t.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eg[e.type]:t==="textarea"}function Sc(e,t,a,n){Wa?$a?$a.push(n):$a=[n]:Wa=n,t=Ur(t,"onChange"),0<t.length&&(a=new Zi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Pn=null,Fn=null;function Mg(e){af(e,0)}function Ji(e){var t=_n(e);if(nc(t))return e}function wc(e,t){if(e==="change")return t}var jc=!1;if(Bt){var Cl;if(Bt){var Nl="oninput"in document;if(!Nl){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),Nl=typeof Dc.oninput=="function"}Cl=Nl}else Cl=!1;jc=Cl&&(!document.documentMode||9<document.documentMode)}function Ec(){Pn&&(Pn.detachEvent("onpropertychange",Mc),Fn=Pn=null)}function Mc(e){if(e.propertyName==="value"&&Ji(Fn)){var t=[];Sc(t,Fn,e,Al(e)),uc(Mg,t)}}function Rg(e,t,a){e==="focusin"?(Ec(),Pn=t,Fn=a,Pn.attachEvent("onpropertychange",Mc)):e==="focusout"&&Ec()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(Fn)}function Cg(e,t){if(e==="click")return Ji(t)}function Ng(e,t){if(e==="input"||e==="change")return Ji(t)}function zg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:zg;function In(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ll.call(t,i)||!it(e[i],t[i]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,t){var a=Rc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rc(a)}}function Cc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Fi(e.document)}return t}function zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Og=Bt&&"documentMode"in document&&11>=document.documentMode,tn=null,Ol=null,Vn=null,kl=!1;function zc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kl||tn==null||tn!==Fi(n)||(n=tn,"selectionStart"in n&&zl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&In(Vn,n)||(Vn=n,n=Ur(Ol,"onSelect"),0<n.length&&(t=new Zi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=tn)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var an={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},Bl={},Oc={};Bt&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Ca(e){if(Bl[e])return Bl[e];if(!an[e])return e;var t=an[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Oc)return Bl[e]=t[a];return e}var kc=Ca("animationend"),Bc=Ca("animationiteration"),Uc=Ca("animationstart"),kg=Ca("transitionrun"),Bg=Ca("transitionstart"),Ug=Ca("transitioncancel"),_c=Ca("transitionend"),Hc=new Map,Ul="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ul.push("scrollEnd");function At(e,t){Hc.set(e,t),Ma(t,[e])}var Lc=new WeakMap;function gt(e,t){if(typeof e=="object"&&e!==null){var a=Lc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:tc(t)},Lc.set(e,t),t)}return{value:e,source:t,stack:tc(t)}}var pt=[],nn=0,_l=0;function Wi(){for(var e=nn,t=_l=nn=0;t<e;){var a=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var i=pt[t];pt[t++]=null;var l=pt[t];if(pt[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}l!==0&&Yc(a,i,l)}}function $i(e,t,a,n){pt[nn++]=e,pt[nn++]=t,pt[nn++]=a,pt[nn++]=n,_l|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Hl(e,t,a,n){return $i(e,t,a,n),er(e)}function rn(e,t){return $i(e,null,null,t),er(e)}function Yc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-nt(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function er(e){if(50<xi)throw xi=0,Io=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ln={};function _g(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,a,n){return new _g(e,t,a,n)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=rt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tr(e,t,a,n,i,l){var s=0;if(n=e,typeof e=="function")Ll(e)&&(s=1);else if(typeof e=="string")s=Lp(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case je:return e=rt(31,a,t,i),e.elementType=je,e.lanes=l,e;case F:return Na(a.children,i,l,t);case W:s=8,i|=24;break;case Y:return e=rt(12,a,t,i|2),e.elementType=Y,e.lanes=l,e;case $:return e=rt(13,a,t,i),e.elementType=$,e.lanes=l,e;case ke:return e=rt(19,a,t,i),e.elementType=ke,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:case te:s=10;break e;case q:s=9;break e;case Se:s=11;break e;case Ne:s=14;break e;case Be:s=16,n=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=rt(s,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Na(e,t,a,n){return e=rt(7,e,n,t),e.lanes=a,e}function Yl(e,t,a){return e=rt(6,e,null,t),e.lanes=a,e}function ql(e,t,a){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var on=[],sn=0,ar=null,nr=0,ht=[],xt=0,za=null,_t=1,Ht="";function Oa(e,t){on[sn++]=nr,on[sn++]=ar,ar=e,nr=t}function Gc(e,t,a){ht[xt++]=_t,ht[xt++]=Ht,ht[xt++]=za,za=e;var n=_t;e=Ht;var i=32-nt(n)-1;n&=~(1<<i),a+=1;var l=32-nt(t)+i;if(30<l){var s=i-i%5;l=(n&(1<<s)-1).toString(32),n>>=s,i-=s,_t=1<<32-nt(t)+i|a<<i|n,Ht=l+e}else _t=1<<l|a<<i|n,Ht=e}function Gl(e){e.return!==null&&(Oa(e,1),Gc(e,1,0))}function Pl(e){for(;e===ar;)ar=on[--sn],on[sn]=null,nr=on[--sn],on[sn]=null;for(;e===za;)za=ht[--xt],ht[xt]=null,Ht=ht[--xt],ht[xt]=null,_t=ht[--xt],ht[xt]=null}var Xe=null,De=null,ue=!1,ka=null,Tt=!1,Fl=Error(u(519));function Ba(e){var t=Error(u(418,""));throw Zn(gt(t,e)),Fl}function Pc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ie]=e,t[Ze]=n,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<vi.length;a++)le(vi[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),ic(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Pi(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),lc(t,n.value,n.defaultValue,n.children),Pi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||of(t.textContent,a)?(n.popover!=null&&(le("beforetoggle",t),le("toggle",t)),n.onScroll!=null&&le("scroll",t),n.onScrollEnd!=null&&le("scrollend",t),n.onClick!=null&&(t.onclick=_r),t=!0):t=!1,t||Ba(e)}function Fc(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Xe=Xe.return}}function Qn(e){if(e!==Xe)return!1;if(!ue)return Fc(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||os(e.type,e.memoizedProps)),a=!a),a&&De&&Ba(e),Fc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){De=wt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}De=null}}else t===27?(t=De,xa(e.type)?(e=ds,ds=null,De=e):De=t):De=Xe?wt(e.stateNode.nextSibling):null;return!0}function Xn(){De=Xe=null,ue=!1}function Ic(){var e=ka;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),ka=null),e}function Zn(e){ka===null?ka=[e]:ka.push(e)}var Il=O(null),Ua=null,Lt=null;function aa(e,t,a){B(Il,t._currentValue),t._currentValue=a}function Yt(e){e._currentValue=Il.current,H(Il)}function Vl(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ql(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=i;for(var g=0;g<t.length;g++)if(c.context===t[g]){l.lanes|=a,c=l.alternate,c!==null&&(c.lanes|=a),Vl(l.return,a,e),n||(s=null);break e}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(u(341));s.lanes|=a,l=s.alternate,l!==null&&(l.lanes|=a),Vl(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Kn(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var c=i.type;it(i.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(i===tt.current){if(s=i.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Di):e=[Di])}i=i.return}e!==null&&Ql(t,e,a,n),t.flags|=262144}function ir(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){Ua=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Vc(Ua,e)}function rr(e,t){return Ua===null&&_a(e),Vc(e,t)}function Vc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Lt===null){if(e===null)throw Error(u(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return a}var Hg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lg=o.unstable_scheduleCallback,Yg=o.unstable_NormalPriority,ze={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xl(){return{controller:new Hg,data:new Map,refCount:0}}function Jn(e){e.refCount--,e.refCount===0&&Lg(Yg,function(){e.controller.abort()})}var Wn=null,Zl=0,cn=0,un=null;function qg(e,t){if(Wn===null){var a=Wn=[];Zl=0,cn=Wo(),un={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Zl++,t.then(Qc,Qc),t}function Qc(){if(--Zl===0&&Wn!==null){un!==null&&(un.status="fulfilled");var e=Wn;Wn=null,cn=0,un=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Xc=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&qg(e,t),Xc!==null&&Xc(e,t)};var Ha=O(null);function Kl(){var e=Ha.current;return e!==null?e:be.pooledCache}function lr(e,t){t===null?B(Ha,Ha.current):B(Ha,t.pool)}function Zc(){var e=Kl();return e===null?null:{parent:ze._currentValue,pool:e}}var $n=Error(u(460)),Kc=Error(u(474)),or=Error(u(542)),Jl={then:function(){}};function Jc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sr(){}function Wc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sr,sr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,eu(e),e;default:if(typeof t.status=="string")t.then(sr,sr);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,eu(e),e}throw ei=t,$n}}var ei=null;function $c(){if(ei===null)throw Error(u(459));var e=ei;return ei=null,e}function eu(e){if(e===$n||e===or)throw Error(u(483))}var na=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $l(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(de&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=er(e),Yc(e,null,a),t}return $i(e,n,t,a),er(e)}function ti(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Qs(e,a)}}function eo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var to=!1;function ai(){if(to){var e=un;if(e!==null)throw e}}function ni(e,t,a,n){to=!1;var i=e.updateQueue;na=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var g=c,S=g.next;g.next=null,s===null?l=S:s.next=S,s=g;var R=e.alternate;R!==null&&(R=R.updateQueue,c=R.lastBaseUpdate,c!==s&&(c===null?R.firstBaseUpdate=S:c.next=S,R.lastBaseUpdate=g))}if(l!==null){var z=i.baseState;s=0,R=S=g=null,c=l;do{var j=c.lane&-536870913,D=j!==c.lane;if(D?(oe&j)===j:(n&j)===j){j!==0&&j===cn&&(to=!0),R!==null&&(R=R.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var J=e,X=c;j=t;var pe=a;switch(X.tag){case 1:if(J=X.payload,typeof J=="function"){z=J.call(pe,z,j);break e}z=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=X.payload,j=typeof J=="function"?J.call(pe,z,j):J,j==null)break e;z=E({},z,j);break e;case 2:na=!0}}j=c.callback,j!==null&&(e.flags|=64,D&&(e.flags|=8192),D=i.callbacks,D===null?i.callbacks=[j]:D.push(j))}else D={lane:j,tag:c.tag,payload:c.payload,callback:c.callback,next:null},R===null?(S=R=D,g=z):R=R.next=D,s|=j;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;D=c,c=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);R===null&&(g=z),i.baseState=g,i.firstBaseUpdate=S,i.lastBaseUpdate=R,l===null&&(i.shared.lanes=0),ma|=s,e.lanes=s,e.memoizedState=z}}function tu(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function au(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tu(a[e],t)}var dn=O(null),cr=O(0);function nu(e,t){e=Qt,B(cr,e),B(dn,t),Qt=e|t.baseLanes}function ao(){B(cr,Qt),B(dn,dn.current)}function no(){Qt=cr.current,H(dn),H(cr)}var la=0,ne=null,me=null,Te=null,ur=!1,fn=!1,La=!1,dr=0,ii=0,mn=null,Pg=0;function Me(){throw Error(u(321))}function io(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!it(e[a],t[a]))return!1;return!0}function ro(e,t,a,n,i,l){return la=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Yu:qu,La=!1,l=a(n,i),La=!1,fn&&(l=ru(t,a,n,i)),iu(e),l}function iu(e){T.H=xr;var t=me!==null&&me.next!==null;if(la=0,Te=me=ne=null,ur=!1,ii=0,mn=null,t)throw Error(u(300));e===null||_e||(e=e.dependencies,e!==null&&ir(e)&&(_e=!0))}function ru(e,t,a,n){ne=e;var i=0;do{if(fn&&(mn=null),ii=0,fn=!1,25<=i)throw Error(u(301));if(i+=1,Te=me=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}T.H=Kg,l=t(a,n)}while(fn);return l}function Fg(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?ri(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(ne.flags|=1024),t}function lo(){var e=dr!==0;return dr=0,e}function oo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function so(e){if(ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ur=!1}la=0,Te=me=ne=null,fn=!1,ii=dr=0,mn=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ne.memoizedState=Te=e:Te=Te.next=e,Te}function Ce(){if(me===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=Te===null?ne.memoizedState:Te.next;if(t!==null)Te=t,me=e;else{if(e===null)throw ne.alternate===null?Error(u(467)):Error(u(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Te===null?ne.memoizedState=Te=e:Te=Te.next=e}return Te}function co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ri(e){var t=ii;return ii+=1,mn===null&&(mn=[]),e=Wc(mn,e,t),t=ne,(Te===null?t.memoizedState:Te.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Yu:qu),e}function fr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ri(e);if(e.$$typeof===te)return Ve(e)}throw Error(u(438,String(e)))}function uo(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ne.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=co(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=et;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function mr(e){var t=Ce();return fo(t,me,e)}function fo(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var c=s=null,g=null,S=t,R=!1;do{var z=S.lane&-536870913;if(z!==S.lane?(oe&z)===z:(la&z)===z){var j=S.revertLane;if(j===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),z===cn&&(R=!0);else if((la&j)===j){S=S.next,j===cn&&(R=!0);continue}else z={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},g===null?(c=g=z,s=l):g=g.next=z,ne.lanes|=j,ma|=j;z=S.action,La&&a(l,z),l=S.hasEagerState?S.eagerState:a(l,z)}else j={lane:z,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},g===null?(c=g=j,s=l):g=g.next=j,ne.lanes|=z,ma|=z;S=S.next}while(S!==null&&S!==t);if(g===null?s=l:g.next=c,!it(l,e.memoizedState)&&(_e=!0,R&&(a=un,a!==null)))throw a;e.memoizedState=l,e.baseState=s,e.baseQueue=g,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function mo(e){var t=Ce(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);it(l,t.memoizedState)||(_e=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function lu(e,t,a){var n=ne,i=Ce(),l=ue;if(l){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!it((me||i).memoizedState,a);s&&(i.memoizedState=a,_e=!0),i=i.queue;var c=cu.bind(null,n,i,e);if(li(2048,8,c,[e]),i.getSnapshot!==t||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,gn(9,gr(),su.bind(null,n,i,a,t),null),be===null)throw Error(u(349));l||(la&124)!==0||ou(n,t,a)}return a}function ou(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=co(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function su(e,t,a,n){t.value=a,t.getSnapshot=n,uu(t)&&du(e)}function cu(e,t,a){return a(function(){uu(t)&&du(e)})}function uu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!it(e,a)}catch{return!0}}function du(e){var t=rn(e,2);t!==null&&ut(t,e,2)}function go(e){var t=Je();if(typeof e=="function"){var a=e;if(e=a(),La){$t(!0);try{a()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function fu(e,t,a,n){return e.baseState=a,fo(e,me,typeof n=="function"?n:qt)}function Ig(e,t,a,n,i){if(hr(e))throw Error(u(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};T.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,mu(t,l)):(l.next=a.next,t.pending=a.next=l)}}function mu(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=T.T,s={};T.T=s;try{var c=a(i,n),g=T.S;g!==null&&g(s,c),gu(e,t,c)}catch(S){po(e,t,S)}finally{T.T=l}}else try{l=a(i,n),gu(e,t,l)}catch(S){po(e,t,S)}}function gu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){pu(e,t,n)},function(n){return po(e,t,n)}):pu(e,t,a)}function pu(e,t,a){t.status="fulfilled",t.value=a,hu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,mu(e,a)))}function po(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,hu(t),t=t.next;while(t!==n)}e.action=null}function hu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xu(e,t){return t}function bu(e,t){if(ue){var a=be.formState;if(a!==null){e:{var n=ne;if(ue){if(De){t:{for(var i=De,l=Tt;i.nodeType!==8;){if(!l){i=null;break t}if(i=wt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){De=wt(i.nextSibling),n=i.data==="F!";break e}}Ba(n)}n=!1}n&&(t=a[0])}}return a=Je(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:t},a.queue=n,a=_u.bind(null,ne,n),n.dispatch=a,n=go(!1),l=yo.bind(null,ne,!1,n.queue),n=Je(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Ig.bind(null,ne,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function vu(e){var t=Ce();return yu(t,me,e)}function yu(e,t,a){if(t=fo(e,t,xu)[0],e=mr(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ri(t)}catch(s){throw s===$n?or:s}else n=t;t=Ce();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,gn(9,gr(),Vg.bind(null,i,a),null)),[n,l,e]}function Vg(e,t){e.action=t}function Au(e){var t=Ce(),a=me;if(a!==null)return yu(t,a,e);Ce(),t=t.memoizedState,a=Ce();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function gn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ne.updateQueue,t===null&&(t=co(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function gr(){return{destroy:void 0,resource:void 0}}function Su(){return Ce().memoizedState}function pr(e,t,a,n){var i=Je();n=n===void 0?null:n,ne.flags|=e,i.memoizedState=gn(1|t,gr(),a,n)}function li(e,t,a,n){var i=Ce();n=n===void 0?null:n;var l=i.memoizedState.inst;me!==null&&n!==null&&io(n,me.memoizedState.deps)?i.memoizedState=gn(t,l,a,n):(ne.flags|=e,i.memoizedState=gn(1|t,l,a,n))}function wu(e,t){pr(8390656,8,e,t)}function ju(e,t){li(2048,8,e,t)}function Du(e,t){return li(4,2,e,t)}function Eu(e,t){return li(4,4,e,t)}function Mu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,a){a=a!=null?a.concat([e]):null,li(4,4,Mu.bind(null,t,e),a)}function ho(){}function Tu(e,t){var a=Ce();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&io(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Cu(e,t){var a=Ce();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&io(t,n[1]))return n[0];if(n=e(),La){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[n,t],n}function xo(e,t,a){return a===void 0||(la&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Od(),ne.lanes|=e,ma|=e,a)}function Nu(e,t,a,n){return it(a,t)?a:dn.current!==null?(e=xo(e,a,n),it(e,t)||(_e=!0),e):(la&42)===0?(_e=!0,e.memoizedState=a):(e=Od(),ne.lanes|=e,ma|=e,t)}function zu(e,t,a,n,i){var l=U.p;U.p=l!==0&&8>l?l:8;var s=T.T,c={};T.T=c,yo(e,!1,t,a);try{var g=i(),S=T.S;if(S!==null&&S(c,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var R=Gg(g,n);oi(e,t,R,ct(e))}else oi(e,t,n,ct(e))}catch(z){oi(e,t,{then:function(){},status:"rejected",reason:z},ct())}finally{U.p=l,T.T=s}}function Qg(){}function bo(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=Ou(e).queue;zu(e,i,t,K,a===null?Qg:function(){return ku(e),a(n)})}function Ou(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:K},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ku(e){var t=Ou(e).next.queue;oi(e,t,{},ct())}function vo(){return Ve(Di)}function Bu(){return Ce().memoizedState}function Uu(){return Ce().memoizedState}function Xg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=ia(a);var n=ra(t,e,a);n!==null&&(ut(n,t,a),ti(n,t,a)),t={cache:Xl()},e.payload=t;return}t=t.return}}function Zg(e,t,a){var n=ct();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hr(e)?Hu(t,a):(a=Hl(e,t,a,n),a!==null&&(ut(a,e,n),Lu(a,t,n)))}function _u(e,t,a){var n=ct();oi(e,t,a,n)}function oi(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hr(e))Hu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,c=l(s,a);if(i.hasEagerState=!0,i.eagerState=c,it(c,s))return $i(e,t,i,0),be===null&&Wi(),!1}catch{}finally{}if(a=Hl(e,t,i,n),a!==null)return ut(a,e,n),Lu(a,t,n),!0}return!1}function yo(e,t,a,n){if(n={lane:2,revertLane:Wo(),action:n,hasEagerState:!1,eagerState:null,next:null},hr(e)){if(t)throw Error(u(479))}else t=Hl(e,a,n,2),t!==null&&ut(t,e,2)}function hr(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Hu(e,t){fn=ur=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Lu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Qs(e,a)}}var xr={readContext:Ve,use:fr,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me},Yu={readContext:Ve,use:fr,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:wu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pr(4194308,4,Mu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pr(4194308,4,e,t)},useInsertionEffect:function(e,t){pr(4,2,e,t)},useMemo:function(e,t){var a=Je();t=t===void 0?null:t;var n=e();if(La){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Je();if(a!==void 0){var i=a(t);if(La){$t(!0);try{a(t)}finally{$t(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Zg.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:function(e){e=go(e);var t=e.queue,a=_u.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ho,useDeferredValue:function(e,t){var a=Je();return xo(a,e,t)},useTransition:function(){var e=go(!1);return e=zu.bind(null,ne,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ne,i=Je();if(ue){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),be===null)throw Error(u(349));(oe&124)!==0||ou(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,wu(cu.bind(null,n,l,e),[e]),n.flags|=2048,gn(9,gr(),su.bind(null,n,l,a,t),null),a},useId:function(){var e=Je(),t=be.identifierPrefix;if(ue){var a=Ht,n=_t;a=(n&~(1<<32-nt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=dr++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Pg++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vo,useFormState:bu,useActionState:bu,useOptimistic:function(e){var t=Je();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=yo.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:uo,useCacheRefresh:function(){return Je().memoizedState=Xg.bind(null,ne)}},qu={readContext:Ve,use:fr,useCallback:Tu,useContext:Ve,useEffect:ju,useImperativeHandle:Ru,useInsertionEffect:Du,useLayoutEffect:Eu,useMemo:Cu,useReducer:mr,useRef:Su,useState:function(){return mr(qt)},useDebugValue:ho,useDeferredValue:function(e,t){var a=Ce();return Nu(a,me.memoizedState,e,t)},useTransition:function(){var e=mr(qt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:ri(e),t]},useSyncExternalStore:lu,useId:Bu,useHostTransitionStatus:vo,useFormState:vu,useActionState:vu,useOptimistic:function(e,t){var a=Ce();return fu(a,me,e,t)},useMemoCache:uo,useCacheRefresh:Uu},Kg={readContext:Ve,use:fr,useCallback:Tu,useContext:Ve,useEffect:ju,useImperativeHandle:Ru,useInsertionEffect:Du,useLayoutEffect:Eu,useMemo:Cu,useReducer:mo,useRef:Su,useState:function(){return mo(qt)},useDebugValue:ho,useDeferredValue:function(e,t){var a=Ce();return me===null?xo(a,e,t):Nu(a,me.memoizedState,e,t)},useTransition:function(){var e=mo(qt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:ri(e),t]},useSyncExternalStore:lu,useId:Bu,useHostTransitionStatus:vo,useFormState:Au,useActionState:Au,useOptimistic:function(e,t){var a=Ce();return me!==null?fu(a,me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uo,useCacheRefresh:Uu},pn=null,si=0;function br(e){var t=si;return si+=1,pn===null&&(pn=[]),Wc(pn,e,t)}function ci(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vr(e,t){throw t.$$typeof===k?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gu(e){var t=e._init;return t(e._payload)}function Pu(e){function t(v,x){if(e){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function a(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(v,x){return v=Ut(v,x),v.index=0,v.sibling=null,v}function l(v,x,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=67108866,x):y):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function s(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function c(v,x,y,N){return x===null||x.tag!==6?(x=Yl(y,v.mode,N),x.return=v,x):(x=i(x,y),x.return=v,x)}function g(v,x,y,N){var L=y.type;return L===F?R(v,x,y.props.children,N,y.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Be&&Gu(L)===x.type)?(x=i(x,y.props),ci(x,y),x.return=v,x):(x=tr(y.type,y.key,y.props,null,v.mode,N),ci(x,y),x.return=v,x)}function S(v,x,y,N){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=ql(y,v.mode,N),x.return=v,x):(x=i(x,y.children||[]),x.return=v,x)}function R(v,x,y,N,L){return x===null||x.tag!==7?(x=Na(y,v.mode,N,L),x.return=v,x):(x=i(x,y),x.return=v,x)}function z(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Yl(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _:return y=tr(x.type,x.key,x.props,null,v.mode,y),ci(y,x),y.return=v,y;case G:return x=ql(x,v.mode,y),x.return=v,x;case Be:var N=x._init;return x=N(x._payload),z(v,x,y)}if(Fe(x)||Pe(x))return x=Na(x,v.mode,y,null),x.return=v,x;if(typeof x.then=="function")return z(v,br(x),y);if(x.$$typeof===te)return z(v,rr(v,x),y);vr(v,x)}return null}function j(v,x,y,N){var L=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return L!==null?null:c(v,x,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _:return y.key===L?g(v,x,y,N):null;case G:return y.key===L?S(v,x,y,N):null;case Be:return L=y._init,y=L(y._payload),j(v,x,y,N)}if(Fe(y)||Pe(y))return L!==null?null:R(v,x,y,N,null);if(typeof y.then=="function")return j(v,x,br(y),N);if(y.$$typeof===te)return j(v,x,rr(v,y),N);vr(v,y)}return null}function D(v,x,y,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return v=v.get(y)||null,c(x,v,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return v=v.get(N.key===null?y:N.key)||null,g(x,v,N,L);case G:return v=v.get(N.key===null?y:N.key)||null,S(x,v,N,L);case Be:var ie=N._init;return N=ie(N._payload),D(v,x,y,N,L)}if(Fe(N)||Pe(N))return v=v.get(y)||null,R(x,v,N,L,null);if(typeof N.then=="function")return D(v,x,y,br(N),L);if(N.$$typeof===te)return D(v,x,y,rr(x,N),L);vr(x,N)}return null}function J(v,x,y,N){for(var L=null,ie=null,P=x,Z=x=0,Le=null;P!==null&&Z<y.length;Z++){P.index>Z?(Le=P,P=null):Le=P.sibling;var ce=j(v,P,y[Z],N);if(ce===null){P===null&&(P=Le);break}e&&P&&ce.alternate===null&&t(v,P),x=l(ce,x,Z),ie===null?L=ce:ie.sibling=ce,ie=ce,P=Le}if(Z===y.length)return a(v,P),ue&&Oa(v,Z),L;if(P===null){for(;Z<y.length;Z++)P=z(v,y[Z],N),P!==null&&(x=l(P,x,Z),ie===null?L=P:ie.sibling=P,ie=P);return ue&&Oa(v,Z),L}for(P=n(P);Z<y.length;Z++)Le=D(P,v,Z,y[Z],N),Le!==null&&(e&&Le.alternate!==null&&P.delete(Le.key===null?Z:Le.key),x=l(Le,x,Z),ie===null?L=Le:ie.sibling=Le,ie=Le);return e&&P.forEach(function(Sa){return t(v,Sa)}),ue&&Oa(v,Z),L}function X(v,x,y,N){if(y==null)throw Error(u(151));for(var L=null,ie=null,P=x,Z=x=0,Le=null,ce=y.next();P!==null&&!ce.done;Z++,ce=y.next()){P.index>Z?(Le=P,P=null):Le=P.sibling;var Sa=j(v,P,ce.value,N);if(Sa===null){P===null&&(P=Le);break}e&&P&&Sa.alternate===null&&t(v,P),x=l(Sa,x,Z),ie===null?L=Sa:ie.sibling=Sa,ie=Sa,P=Le}if(ce.done)return a(v,P),ue&&Oa(v,Z),L;if(P===null){for(;!ce.done;Z++,ce=y.next())ce=z(v,ce.value,N),ce!==null&&(x=l(ce,x,Z),ie===null?L=ce:ie.sibling=ce,ie=ce);return ue&&Oa(v,Z),L}for(P=n(P);!ce.done;Z++,ce=y.next())ce=D(P,v,Z,ce.value,N),ce!==null&&(e&&ce.alternate!==null&&P.delete(ce.key===null?Z:ce.key),x=l(ce,x,Z),ie===null?L=ce:ie.sibling=ce,ie=ce);return e&&P.forEach(function(Jp){return t(v,Jp)}),ue&&Oa(v,Z),L}function pe(v,x,y,N){if(typeof y=="object"&&y!==null&&y.type===F&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _:e:{for(var L=y.key;x!==null;){if(x.key===L){if(L=y.type,L===F){if(x.tag===7){a(v,x.sibling),N=i(x,y.props.children),N.return=v,v=N;break e}}else if(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Be&&Gu(L)===x.type){a(v,x.sibling),N=i(x,y.props),ci(N,y),N.return=v,v=N;break e}a(v,x);break}else t(v,x);x=x.sibling}y.type===F?(N=Na(y.props.children,v.mode,N,y.key),N.return=v,v=N):(N=tr(y.type,y.key,y.props,null,v.mode,N),ci(N,y),N.return=v,v=N)}return s(v);case G:e:{for(L=y.key;x!==null;){if(x.key===L)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){a(v,x.sibling),N=i(x,y.children||[]),N.return=v,v=N;break e}else{a(v,x);break}else t(v,x);x=x.sibling}N=ql(y,v.mode,N),N.return=v,v=N}return s(v);case Be:return L=y._init,y=L(y._payload),pe(v,x,y,N)}if(Fe(y))return J(v,x,y,N);if(Pe(y)){if(L=Pe(y),typeof L!="function")throw Error(u(150));return y=L.call(y),X(v,x,y,N)}if(typeof y.then=="function")return pe(v,x,br(y),N);if(y.$$typeof===te)return pe(v,x,rr(v,y),N);vr(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,x!==null&&x.tag===6?(a(v,x.sibling),N=i(x,y),N.return=v,v=N):(a(v,x),N=Yl(y,v.mode,N),N.return=v,v=N),s(v)):a(v,x)}return function(v,x,y,N){try{si=0;var L=pe(v,x,y,N);return pn=null,L}catch(P){if(P===$n||P===or)throw P;var ie=rt(29,P,null,v.mode);return ie.lanes=N,ie.return=v,ie}finally{}}}var hn=Pu(!0),Fu=Pu(!1),bt=O(null),Ct=null;function oa(e){var t=e.alternate;B(Oe,Oe.current&1),B(bt,e),Ct===null&&(t===null||dn.current!==null||t.memoizedState!==null)&&(Ct=e)}function Iu(e){if(e.tag===22){if(B(Oe,Oe.current),B(bt,e),Ct===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ct=e)}}else sa()}function sa(){B(Oe,Oe.current),B(bt,bt.current)}function Gt(e){H(bt),Ct===e&&(Ct=null),H(Oe)}var Oe=O(0);function yr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||us(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ao(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var So={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ct(),i=ia(n);i.payload=t,a!=null&&(i.callback=a),t=ra(e,i,n),t!==null&&(ut(t,e,n),ti(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ct(),i=ia(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ra(e,i,n),t!==null&&(ut(t,e,n),ti(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),n=ia(a);n.tag=2,t!=null&&(n.callback=t),t=ra(e,n,a),t!==null&&(ut(t,e,a),ti(t,e,a))}};function Vu(e,t,a,n,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,s):t.prototype&&t.prototype.isPureReactComponent?!In(a,n)||!In(i,l):!0}function Qu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xu(e){Ar(e)}function Zu(e){console.error(e)}function Ku(e){Ar(e)}function Sr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ju(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function wo(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Sr(e,t)},a}function Wu(e){return e=ia(e),e.tag=3,e}function $u(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){Ju(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Ju(t,a,n),typeof i!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Jg(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Kn(t,a,i,!0),a=bt.current,a!==null){switch(a.tag){case 13:return Ct===null?Qo():a.alternate===null&&Ee===0&&(Ee=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Jl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Zo(e,n,i)),!1;case 22:return a.flags|=65536,n===Jl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Zo(e,n,i)),!1}throw Error(u(435,a.tag))}return Zo(e,n,i),Qo(),!1}if(ue)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Fl&&(e=Error(u(422),{cause:n}),Zn(gt(e,a)))):(n!==Fl&&(t=Error(u(423),{cause:n}),Zn(gt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=gt(n,a),i=wo(e.stateNode,n,i),eo(e,i),Ee!==4&&(Ee=2)),!1;var l=Error(u(520),{cause:n});if(l=gt(l,a),hi===null?hi=[l]:hi.push(l),Ee!==4&&(Ee=2),t===null)return!0;n=gt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=wo(a.stateNode,n,e),eo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ga===null||!ga.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Wu(i),$u(i,e,a,n),eo(a,i),!1}a=a.return}while(a!==null);return!1}var ed=Error(u(461)),_e=!1;function Ye(e,t,a,n){t.child=e===null?Fu(t,null,a,n):hn(t,e.child,a,n)}function td(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var s={};for(var c in n)c!=="ref"&&(s[c]=n[c])}else s=n;return _a(t),n=ro(e,t,a,s,l,i),c=lo(),e!==null&&!_e?(oo(e,t,i),Pt(e,t,i)):(ue&&c&&Gl(t),t.flags|=1,Ye(e,t,n,i),t.child)}function ad(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!Ll(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,nd(e,t,l,n,i)):(e=tr(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!No(e,i)){var s=l.memoizedProps;if(a=a.compare,a=a!==null?a:In,a(s,n)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Ut(l,n),e.ref=t.ref,e.return=t,t.child=e}function nd(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(In(l,n)&&e.ref===t.ref)if(_e=!1,t.pendingProps=n=l,No(e,i))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return jo(e,t,a,n,i)}function id(e,t,a){var n=t.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=l!==null?l.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;t.childLanes=l&~n}else t.childLanes=0,t.child=null;return rd(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(t,l!==null?l.cachePool:null),l!==null?nu(t,l):ao(),Iu(t);else return t.lanes=t.childLanes=536870912,rd(e,t,l!==null?l.baseLanes|a:a,a)}else l!==null?(lr(t,l.cachePool),nu(t,l),sa(),t.memoizedState=null):(e!==null&&lr(t,null),ao(),sa());return Ye(e,t,i,a),t.child}function rd(e,t,a,n){var i=Kl();return i=i===null?null:{parent:ze._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&lr(t,null),ao(),Iu(t),e!==null&&Kn(e,t,n,!0),null}function wr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function jo(e,t,a,n,i){return _a(t),a=ro(e,t,a,n,void 0,i),n=lo(),e!==null&&!_e?(oo(e,t,i),Pt(e,t,i)):(ue&&n&&Gl(t),t.flags|=1,Ye(e,t,a,i),t.child)}function ld(e,t,a,n,i,l){return _a(t),t.updateQueue=null,a=ru(t,n,a,i),iu(e),n=lo(),e!==null&&!_e?(oo(e,t,l),Pt(e,t,l)):(ue&&n&&Gl(t),t.flags|=1,Ye(e,t,a,l),t.child)}function od(e,t,a,n,i){if(_a(t),t.stateNode===null){var l=ln,s=a.contextType;typeof s=="object"&&s!==null&&(l=Ve(s)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=So,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},Wl(t),s=a.contextType,l.context=typeof s=="object"&&s!==null?Ve(s):ln,l.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ao(t,a,s,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&So.enqueueReplaceState(l,l.state,null),ni(t,n,l,i),ai(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var c=t.memoizedProps,g=Ya(a,c);l.props=g;var S=l.context,R=a.contextType;s=ln,typeof R=="object"&&R!==null&&(s=Ve(R));var z=a.getDerivedStateFromProps;R=typeof z=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,R||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||S!==s)&&Qu(t,l,n,s),na=!1;var j=t.memoizedState;l.state=j,ni(t,n,l,i),ai(),S=t.memoizedState,c||j!==S||na?(typeof z=="function"&&(Ao(t,a,z,n),S=t.memoizedState),(g=na||Vu(t,a,g,n,j,S,s))?(R||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=S),l.props=n,l.state=S,l.context=s,n=g):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,$l(e,t),s=t.memoizedProps,R=Ya(a,s),l.props=R,z=t.pendingProps,j=l.context,S=a.contextType,g=ln,typeof S=="object"&&S!==null&&(g=Ve(S)),c=a.getDerivedStateFromProps,(S=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==z||j!==g)&&Qu(t,l,n,g),na=!1,j=t.memoizedState,l.state=j,ni(t,n,l,i),ai();var D=t.memoizedState;s!==z||j!==D||na||e!==null&&e.dependencies!==null&&ir(e.dependencies)?(typeof c=="function"&&(Ao(t,a,c,n),D=t.memoizedState),(R=na||Vu(t,a,R,n,j,D,g)||e!==null&&e.dependencies!==null&&ir(e.dependencies))?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,D,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,D,g)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=D),l.props=n,l.state=D,l.context=g,n=R):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,wr(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,a,i)):Ye(e,t,a,i),t.memoizedState=l.state,e=t.child):e=Pt(e,t,i),e}function sd(e,t,a,n){return Xn(),t.flags|=256,Ye(e,t,a,n),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eo(e){return{baseLanes:e,cachePool:Zc()}}function Mo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function cd(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(i?oa(t):sa(),ue){var c=De,g;if(g=c){e:{for(g=c,c=Tt;g.nodeType!==8;){if(!c){c=null;break e}if(g=wt(g.nextSibling),g===null){c=null;break e}}c=g}c!==null?(t.memoizedState={dehydrated:c,treeContext:za!==null?{id:_t,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},g=rt(18,null,null,0),g.stateNode=c,g.return=t,t.child=g,Xe=t,De=null,g=!0):g=!1}g||Ba(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return us(c)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return c=n.children,n=n.fallback,i?(sa(),i=t.mode,c=jr({mode:"hidden",children:c},i),n=Na(n,i,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,i=t.child,i.memoizedState=Eo(a),i.childLanes=Mo(e,s,a),t.memoizedState=Do,n):(oa(t),Ro(t,c))}if(g=e.memoizedState,g!==null&&(c=g.dehydrated,c!==null)){if(l)t.flags&256?(oa(t),t.flags&=-257,t=To(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),i=n.fallback,c=t.mode,n=jr({mode:"visible",children:n.children},c),i=Na(i,c,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,hn(t,e.child,null,a),n=t.child,n.memoizedState=Eo(a),n.childLanes=Mo(e,s,a),t.memoizedState=Do,t=i);else if(oa(t),us(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var S=s.dgst;s=S,n=Error(u(419)),n.stack="",n.digest=s,Zn({value:n,source:null,stack:null}),t=To(e,t,a)}else if(_e||Kn(e,t,a,!1),s=(a&e.childLanes)!==0,_e||s){if(s=be,s!==null&&(n=a&-a,n=(n&42)!==0?1:ul(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==g.retryLane))throw g.retryLane=n,rn(e,n),ut(s,e,n),ed;c.data==="$?"||Qo(),t=To(e,t,a)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,De=wt(c.nextSibling),Xe=t,ue=!0,ka=null,Tt=!1,e!==null&&(ht[xt++]=_t,ht[xt++]=Ht,ht[xt++]=za,_t=e.id,Ht=e.overflow,za=t),t=Ro(t,n.children),t.flags|=4096);return t}return i?(sa(),i=n.fallback,c=t.mode,g=e.child,S=g.sibling,n=Ut(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,S!==null?i=Ut(S,i):(i=Na(i,c,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,c=e.child.memoizedState,c===null?c=Eo(a):(g=c.cachePool,g!==null?(S=ze._currentValue,g=g.parent!==S?{parent:S,pool:S}:g):g=Zc(),c={baseLanes:c.baseLanes|a,cachePool:g}),i.memoizedState=c,i.childLanes=Mo(e,s,a),t.memoizedState=Do,n):(oa(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Ro(e,t){return t=jr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function jr(e,t){return e=rt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function To(e,t,a){return hn(t,e.child,null,a),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Vl(e.return,t,a)}function Co(e,t,a,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=a,l.tailMode=i)}function dd(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;if(Ye(e,t,n.children,a),n=Oe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,a,t);else if(e.tag===19)ud(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(B(Oe,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&yr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Co(t,!1,i,a,l);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Co(t,!0,a,null,l);break;case"together":Co(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function No(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ir(e)))}function Wg(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),aa(t,ze,e.memoizedState.cache),Xn();break;case 27:case 5:rl(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?cd(e,t,a):(oa(t),e=Pt(e,t,a),e!==null?e.sibling:null);oa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Kn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return dd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Oe,Oe.current),n)break;return null;case 22:case 23:return t.lanes=0,id(e,t,a);case 24:aa(t,ze,e.memoizedState.cache)}return Pt(e,t,a)}function fd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!No(e,a)&&(t.flags&128)===0)return _e=!1,Wg(e,t,a);_e=(e.flags&131072)!==0}else _e=!1,ue&&(t.flags&1048576)!==0&&Gc(t,nr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Ll(n)?(e=Ya(n,e),t.tag=1,t=od(null,t,n,e,a)):(t.tag=0,t=jo(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===Se){t.tag=11,t=td(null,t,n,e,a);break e}else if(i===Ne){t.tag=14,t=ad(null,t,n,e,a);break e}}throw t=Da(n)||n,Error(u(306,t,""))}}return t;case 0:return jo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ya(n,t.pendingProps),od(e,t,n,i,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,$l(e,t),ni(t,n,null,a);var s=t.memoizedState;if(n=s.cache,aa(t,ze,n),n!==l.cache&&Ql(t,[ze],a,!0),ai(),n=s.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=sd(e,t,n,a);break e}else if(n!==i){i=gt(Error(u(424)),t),Zn(i),t=sd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=wt(e.firstChild),Xe=t,ue=!0,ka=null,Tt=!0,a=Fu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xn(),n===i){t=Pt(e,t,a);break e}Ye(e,t,n,a)}t=t.child}return t;case 26:return wr(e,t),e===null?(a=xf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,n=Hr(ee.current).createElement(a),n[Ie]=t,n[Ze]=e,Ge(n,a,e),Ue(n),t.stateNode=n):t.memoizedState=xf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rl(t),e===null&&ue&&(n=t.stateNode=gf(t.type,t.pendingProps,ee.current),Xe=t,Tt=!0,i=De,xa(t.type)?(ds=i,De=wt(n.firstChild)):De=i),Ye(e,t,t.pendingProps.children,a),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((i=n=De)&&(n=Ep(n,t.type,t.pendingProps,Tt),n!==null?(t.stateNode=n,Xe=t,De=wt(n.firstChild),Tt=!1,i=!0):i=!1),i||Ba(t)),rl(t),i=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,n=l.children,os(i,l)?n=null:s!==null&&os(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=ro(e,t,Fg,null,null,a),Di._currentValue=i),wr(e,t),Ye(e,t,n,a),t.child;case 6:return e===null&&ue&&((e=a=De)&&(a=Mp(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Xe=t,De=null,e=!0):e=!1),e||Ba(t)),null;case 13:return cd(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hn(t,null,n,a):Ye(e,t,n,a),t.child;case 11:return td(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,aa(t,t.type,n.value),Ye(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,_a(t),i=Ve(i),n=n(i),t.flags|=1,Ye(e,t,n,a),t.child;case 14:return ad(e,t,t.type,t.pendingProps,a);case 15:return nd(e,t,t.type,t.pendingProps,a);case 19:return dd(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=jr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ut(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return id(e,t,a);case 24:return _a(t),n=Ve(ze),e===null?(i=Kl(),i===null&&(i=be,l=Xl(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},Wl(t),aa(t,ze,i)):((e.lanes&a)!==0&&($l(e,t),ni(t,null,null,a),ai()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),aa(t,ze,n)):(n=l.cache,aa(t,ze,n),n!==i.cache&&Ql(t,[ze],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Ft(e){e.flags|=4}function md(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sf(t)){if(t=bt.current,t!==null&&((oe&4194048)===oe?Ct!==null:(oe&62914560)!==oe&&(oe&536870912)===0||t!==Ct))throw ei=Jl,Kc;e.flags|=8192}}function Dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Is():536870912,e.lanes|=t,yn|=t)}function ui(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function $g(e,t,a){var n=t.pendingProps;switch(Pl(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(ze),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qn(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ic())),we(t),null;case 26:return a=t.memoizedState,e===null?(Ft(t),a!==null?(we(t),md(t,a)):(we(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Ft(t),we(t),md(t,a)):(we(t),t.flags&=-16777217):(e.memoizedProps!==n&&Ft(t),we(t),t.flags&=-16777217),null;case 27:Ui(t),a=ee.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return we(t),null}e=Q.current,Qn(t)?Pc(t):(e=gf(i,n,a),t.stateNode=e,Ft(t))}return we(t),null;case 5:if(Ui(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return we(t),null}if(e=Q.current,Qn(t))Pc(t);else{switch(i=Hr(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[Ie]=t,e[Ze]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ge(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ft(t)}}return we(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=ee.current,Qn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Xe,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||of(e.nodeValue,a)),e||Ba(t)}else e=Hr(e).createTextNode(n),e[Ie]=t,t.stateNode=e}return we(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Qn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ie]=t}else Xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else i=Ic(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var l=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Dr(t,t.updateQueue),we(t),null;case 4:return Wt(),e===null&&as(t.stateNode.containerInfo),we(t),null;case 10:return Yt(t.type),we(t),null;case 19:if(H(Oe),i=t.memoizedState,i===null)return we(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)ui(i,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=yr(e),l!==null){for(t.flags|=128,ui(i,!1),e=l.updateQueue,t.updateQueue=e,Dr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)qc(a,e),a=a.sibling;return B(Oe,Oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Rt()>Rr&&(t.flags|=128,n=!0,ui(i,!1),t.lanes=4194304)}else{if(!n)if(e=yr(l),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Dr(t,e),ui(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ue)return we(t),null}else 2*Rt()-i.renderingStartTime>Rr&&a!==536870912&&(t.flags|=128,n=!0,ui(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Rt(),t.sibling=null,e=Oe.current,B(Oe,n?e&1|2:e&1),t):(we(t),null);case 22:case 23:return Gt(t),no(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&Dr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&H(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(ze),we(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ep(e,t){switch(Pl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(ze),Wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ui(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Oe),null;case 4:return Wt(),null;case 10:return Yt(t.type),null;case 22:case 23:return Gt(t),no(),e!==null&&H(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(ze),null;case 25:return null;default:return null}}function gd(e,t){switch(Pl(t),t.tag){case 3:Yt(ze),Wt();break;case 26:case 27:case 5:Ui(t);break;case 4:Wt();break;case 13:Gt(t);break;case 19:H(Oe);break;case 10:Yt(t.type);break;case 22:case 23:Gt(t),no(),e!==null&&H(Ha);break;case 24:Yt(ze)}}function di(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,s=a.inst;n=l(),s.destroy=n}a=a.next}while(a!==i)}}catch(c){xe(t,t.return,c)}}function ca(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var s=n.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=t;var g=a,S=c;try{S()}catch(R){xe(i,g,R)}}}n=n.next}while(n!==l)}}catch(R){xe(t,t.return,R)}}function pd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{au(t,a)}catch(n){xe(e,e.return,n)}}}function hd(e,t,a){a.props=Ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){xe(e,t,n)}}function fi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){xe(e,t,i)}}function Nt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){xe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){xe(e,t,i)}else a.current=null}function xd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){xe(e,e.return,i)}}function zo(e,t,a){try{var n=e.stateNode;Ap(n,e.type,a,t),n[Ze]=t}catch(i){xe(e,e.return,i)}}function bd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=_r));else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ko(e,t,a),e=e.sibling;e!==null;)ko(e,t,a),e=e.sibling}function Er(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Er(e,t,a),e=e.sibling;e!==null;)Er(e,t,a),e=e.sibling}function vd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ge(t,n,a),t[Ie]=e,t[Ze]=a}catch(l){xe(e,e.return,l)}}var It=!1,Re=!1,Bo=!1,yd=typeof WeakSet=="function"?WeakSet:Set,He=null;function tp(e,t){if(e=e.containerInfo,rs=Fr,e=Nc(e),zl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var s=0,c=-1,g=-1,S=0,R=0,z=e,j=null;t:for(;;){for(var D;z!==a||i!==0&&z.nodeType!==3||(c=s+i),z!==l||n!==0&&z.nodeType!==3||(g=s+n),z.nodeType===3&&(s+=z.nodeValue.length),(D=z.firstChild)!==null;)j=z,z=D;for(;;){if(z===e)break t;if(j===a&&++S===i&&(c=s),j===l&&++R===n&&(g=s),(D=z.nextSibling)!==null)break;z=j,j=z.parentNode}z=D}a=c===-1||g===-1?null:{start:c,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(ls={focusedElem:e,selectionRange:a},Fr=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,l=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var J=Ya(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(J,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(X){xe(a,a.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)cs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function Ad(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),n&4&&di(5,a);break;case 1:if(ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){xe(a,a.return,s)}else{var i=Ya(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){xe(a,a.return,s)}}n&64&&pd(a),n&512&&fi(a,a.return);break;case 3:if(ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{au(e,t)}catch(s){xe(a,a.return,s)}}break;case 27:t===null&&n&4&&vd(a);case 26:case 5:ua(e,a),t===null&&n&4&&xd(a),n&512&&fi(a,a.return);break;case 12:ua(e,a);break;case 13:ua(e,a),n&4&&jd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=up.bind(null,a),Rp(e,a))));break;case 22:if(n=a.memoizedState!==null||It,!n){t=t!==null&&t.memoizedState!==null||Re,i=It;var l=Re;It=n,(Re=t)&&!l?da(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),It=i,Re=l}break;case 30:break;default:ua(e,a)}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ml(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,We=!1;function Vt(e,t,a){for(a=a.child;a!==null;)wd(e,t,a),a=a.sibling}function wd(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 26:Re||Nt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Nt(a,t);var n=ye,i=We;xa(a.type)&&(ye=a.stateNode,We=!1),Vt(e,t,a),Ai(a.stateNode),ye=n,We=i;break;case 5:Re||Nt(a,t);case 6:if(n=ye,i=We,ye=null,Vt(e,t,a),ye=n,We=i,ye!==null)if(We)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(l){xe(a,t,l)}else try{ye.removeChild(a.stateNode)}catch(l){xe(a,t,l)}break;case 18:ye!==null&&(We?(e=ye,ff(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ti(e)):ff(ye,a.stateNode));break;case 4:n=ye,i=We,ye=a.stateNode.containerInfo,We=!0,Vt(e,t,a),ye=n,We=i;break;case 0:case 11:case 14:case 15:Re||ca(2,a,t),Re||ca(4,a,t),Vt(e,t,a);break;case 1:Re||(Nt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&hd(a,t,n)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:Re=(n=Re)||a.memoizedState!==null,Vt(e,t,a),Re=n;break;default:Vt(e,t,a)}}function jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(a){xe(t,t.return,a)}}function ap(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yd),t;default:throw Error(u(435,e.tag))}}function Uo(e,t){var a=ap(e);t.forEach(function(n){var i=dp.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function lt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(xa(c.type)){ye=c.stateNode,We=!1;break e}break;case 5:ye=c.stateNode,We=!1;break e;case 3:case 4:ye=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(ye===null)throw Error(u(160));wd(l,s,i),ye=null,We=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}var St=null;function Dd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),ot(e),n&4&&(ca(3,e,e.return),di(3,e),ca(5,e,e.return));break;case 1:lt(t,e),ot(e),n&512&&(Re||a===null||Nt(a,a.return)),n&64&&It&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=St;if(lt(t,e),ot(e),n&512&&(Re||a===null||Nt(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Un]||l[Ie]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),Ge(l,n,a),l[Ie]=e,Ue(l),n=l;break e;case"link":var s=yf("link","href",i).get(n+(a.href||""));if(s){for(var c=0;c<s.length;c++)if(l=s[c],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(c,1);break t}}l=i.createElement(n),Ge(l,n,a),i.head.appendChild(l);break;case"meta":if(s=yf("meta","content",i).get(n+(a.content||""))){for(c=0;c<s.length;c++)if(l=s[c],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(c,1);break t}}l=i.createElement(n),Ge(l,n,a),i.head.appendChild(l);break;default:throw Error(u(468,n))}l[Ie]=e,Ue(l),n=l}e.stateNode=n}else Af(i,e.type,e.stateNode);else e.stateNode=vf(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?Af(i,e.type,e.stateNode):vf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&zo(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),ot(e),n&512&&(Re||a===null||Nt(a,a.return)),a!==null&&n&4&&zo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),ot(e),n&512&&(Re||a===null||Nt(a,a.return)),e.flags&32){i=e.stateNode;try{Ja(i,"")}catch(D){xe(e,e.return,D)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,zo(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Bo=!0);break;case 6:if(lt(t,e),ot(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(D){xe(e,e.return,D)}}break;case 3:if(qr=null,i=St,St=Lr(t.containerInfo),lt(t,e),St=i,ot(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(D){xe(e,e.return,D)}Bo&&(Bo=!1,Ed(e));break;case 4:n=St,St=Lr(e.stateNode.containerInfo),lt(t,e),ot(e),St=n;break;case 12:lt(t,e),ot(e);break;case 13:lt(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Go=Rt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uo(e,n)));break;case 22:i=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,S=It,R=Re;if(It=S||i,Re=R||g,lt(t,e),Re=R,It=S,ot(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||g||It||Re||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(l=g.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=g.stateNode;var z=g.memoizedProps.style,j=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(D){xe(g,g.return,D)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(D){xe(g,g.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Uo(e,a))));break;case 19:lt(t,e),ot(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uo(e,n)));break;case 30:break;case 21:break;default:lt(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(bd(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,l=Oo(e);Er(e,l,i);break;case 5:var s=a.stateNode;a.flags&32&&(Ja(s,""),a.flags&=-33);var c=Oo(e);Er(e,c,s);break;case 3:case 4:var g=a.stateNode.containerInfo,S=Oo(e);ko(e,S,g);break;default:throw Error(u(161))}}catch(R){xe(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ed(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ad(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),qa(t);break;case 1:Nt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&hd(t,t.return,a),qa(t);break;case 27:Ai(t.stateNode);case 26:case 5:Nt(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:da(i,l,a),di(4,l);break;case 1:if(da(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){xe(n,n.return,S)}if(n=l,i=n.updateQueue,i!==null){var c=n.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)tu(g[i],c)}catch(S){xe(n,n.return,S)}}a&&s&64&&pd(l),fi(l,l.return);break;case 27:vd(l);case 26:case 5:da(i,l,a),a&&n===null&&s&4&&xd(l),fi(l,l.return);break;case 12:da(i,l,a);break;case 13:da(i,l,a),a&&s&4&&jd(i,l);break;case 22:l.memoizedState===null&&da(i,l,a),fi(l,l.return);break;case 30:break;default:da(i,l,a)}t=t.sibling}}function _o(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jn(a))}function Ho(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jn(e))}function zt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Md(e,t,a,n),t=t.sibling}function Md(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,n),i&2048&&di(9,t);break;case 1:zt(e,t,a,n);break;case 3:zt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jn(e)));break;case 12:if(i&2048){zt(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,c=l.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){xe(t,t.return,g)}}else zt(e,t,a,n);break;case 13:zt(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?zt(e,t,a,n):mi(e,t):l._visibility&2?zt(e,t,a,n):(l._visibility|=2,xn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&_o(s,t);break;case 24:zt(e,t,a,n),i&2048&&Ho(t.alternate,t);break;default:zt(e,t,a,n)}}function xn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var l=e,s=t,c=a,g=n,S=s.flags;switch(s.tag){case 0:case 11:case 15:xn(l,s,c,g,i),di(8,s);break;case 23:break;case 22:var R=s.stateNode;s.memoizedState!==null?R._visibility&2?xn(l,s,c,g,i):mi(l,s):(R._visibility|=2,xn(l,s,c,g,i)),i&&S&2048&&_o(s.alternate,s);break;case 24:xn(l,s,c,g,i),i&&S&2048&&Ho(s.alternate,s);break;default:xn(l,s,c,g,i)}t=t.sibling}}function mi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:mi(a,n),i&2048&&_o(n.alternate,n);break;case 24:mi(a,n),i&2048&&Ho(n.alternate,n);break;default:mi(a,n)}t=t.sibling}}var gi=8192;function bn(e){if(e.subtreeFlags&gi)for(e=e.child;e!==null;)Rd(e),e=e.sibling}function Rd(e){switch(e.tag){case 26:bn(e),e.flags&gi&&e.memoizedState!==null&&qp(St,e.memoizedState,e.memoizedProps);break;case 5:bn(e);break;case 3:case 4:var t=St;St=Lr(e.stateNode.containerInfo),bn(e),St=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=gi,gi=16777216,bn(e),gi=t):bn(e));break;default:bn(e)}}function Td(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];He=n,Nd(n,e)}Td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 0:case 11:case 15:pi(e),e.flags&2048&&ca(9,e,e.return);break;case 3:pi(e);break;case 12:pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mr(e)):pi(e);break;default:pi(e)}}function Mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];He=n,Nd(n,e)}Td(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Mr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mr(t));break;default:Mr(t)}e=e.sibling}}function Nd(e,t){for(;He!==null;){var a=He;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Jn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,He=n;else e:for(a=e;He!==null;){n=He;var i=n.sibling,l=n.return;if(Sd(n),n===a){He=null;break e}if(i!==null){i.return=l,He=i;break e}He=l}}}var np={getCacheForType:function(e){var t=Ve(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},ip=typeof WeakMap=="function"?WeakMap:Map,de=0,be=null,re=null,oe=0,fe=0,st=null,fa=!1,vn=!1,Lo=!1,Qt=0,Ee=0,ma=0,Ga=0,Yo=0,vt=0,yn=0,hi=null,$e=null,qo=!1,Go=0,Rr=1/0,Tr=null,ga=null,qe=0,pa=null,An=null,Sn=0,Po=0,Fo=null,zd=null,xi=0,Io=null;function ct(){if((de&2)!==0&&oe!==0)return oe&-oe;if(T.T!==null){var e=cn;return e!==0?e:Wo()}return Xs()}function Od(){vt===0&&(vt=(oe&536870912)===0||ue?Fs():536870912);var e=bt.current;return e!==null&&(e.flags|=32),vt}function ut(e,t,a){(e===be&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(wn(e,0),ha(e,oe,vt,!1)),Bn(e,a),((de&2)===0||e!==be)&&(e===be&&((de&2)===0&&(Ga|=a),Ee===4&&ha(e,oe,vt,!1)),Ot(e))}function kd(e,t,a){if((de&6)!==0)throw Error(u(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||kn(e,t),i=n?op(e,t):Xo(e,t,!0),l=n;do{if(i===0){vn&&!n&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!rp(a)){i=Xo(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var c=e;i=hi;var g=c.current.memoizedState.isDehydrated;if(g&&(wn(c,s).flags|=256),s=Xo(c,s,!1),s!==2){if(Lo&&!g){c.errorRecoveryDisabledLanes|=l,Ga|=l,i=4;break e}l=$e,$e=i,l!==null&&($e===null?$e=l:$e.push.apply($e,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){wn(e,0),ha(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ha(n,t,vt,!fa);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Go+300-Rt(),10<i)){if(ha(n,t,vt,!fa),Yi(n,0,!0)!==0)break e;n.timeoutHandle=uf(Bd.bind(null,n,a,$e,Tr,qo,t,vt,Ga,yn,fa,l,2,-0,0),i);break e}Bd(n,a,$e,Tr,qo,t,vt,Ga,yn,fa,l,0,-0,0)}}break}while(!0);Ot(e)}function Bd(e,t,a,n,i,l,s,c,g,S,R,z,j,D){if(e.timeoutHandle=-1,z=t.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(ji={stylesheets:null,count:0,unsuspend:Yp},Rd(t),z=Gp(),z!==null)){e.cancelPendingCommit=z(Gd.bind(null,e,t,l,a,n,i,s,c,g,R,1,j,D)),ha(e,l,s,!S);return}Gd(e,t,l,a,n,i,s,c,g)}function rp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!it(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,n){t&=~Yo,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-nt(i),s=1<<l;n[l]=-1,i&=~s}a!==0&&Vs(e,a,t)}function Cr(){return(de&6)===0?(bi(0),!1):!0}function Vo(){if(re!==null){if(fe===0)var e=re.return;else e=re,Lt=Ua=null,so(e),pn=null,si=0,e=re;for(;e!==null;)gd(e.alternate,e),e=e.return;re=null}}function wn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,wp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vo(),be=e,re=a=Ut(e.current,null),oe=t,fe=0,st=null,fa=!1,vn=kn(e,t),Lo=!1,yn=vt=Yo=Ga=ma=Ee=0,$e=hi=null,qo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-nt(n),l=1<<i;t|=e[i],n&=~l}return Qt=t,Wi(),a}function Ud(e,t){ne=null,T.H=xr,t===$n||t===or?(t=$c(),fe=3):t===Kc?(t=$c(),fe=4):fe=t===ed?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,re===null&&(Ee=1,Sr(e,gt(t,e.current)))}function _d(){var e=T.H;return T.H=xr,e===null?xr:e}function Hd(){var e=T.A;return T.A=np,e}function Qo(){Ee=4,fa||(oe&4194048)!==oe&&bt.current!==null||(vn=!0),(ma&134217727)===0&&(Ga&134217727)===0||be===null||ha(be,oe,vt,!1)}function Xo(e,t,a){var n=de;de|=2;var i=_d(),l=Hd();(be!==e||oe!==t)&&(Tr=null,wn(e,t)),t=!1;var s=Ee;e:do try{if(fe!==0&&re!==null){var c=re,g=st;switch(fe){case 8:Vo(),s=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var S=fe;if(fe=0,st=null,jn(e,c,g,S),a&&vn){s=0;break e}break;default:S=fe,fe=0,st=null,jn(e,c,g,S)}}lp(),s=Ee;break}catch(R){Ud(e,R)}while(!0);return t&&e.shellSuspendCounter++,Lt=Ua=null,de=n,T.H=i,T.A=l,re===null&&(be=null,oe=0,Wi()),s}function lp(){for(;re!==null;)Ld(re)}function op(e,t){var a=de;de|=2;var n=_d(),i=Hd();be!==e||oe!==t?(Tr=null,Rr=Rt()+500,wn(e,t)):vn=kn(e,t);e:do try{if(fe!==0&&re!==null){t=re;var l=st;t:switch(fe){case 1:fe=0,st=null,jn(e,t,l,1);break;case 2:case 9:if(Jc(l)){fe=0,st=null,Yd(t);break}t=function(){fe!==2&&fe!==9||be!==e||(fe=7),Ot(e)},l.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Jc(l)?(fe=0,st=null,Yd(t)):(fe=0,st=null,jn(e,t,l,7));break;case 5:var s=null;switch(re.tag){case 26:s=re.memoizedState;case 5:case 27:var c=re;if(!s||Sf(s)){fe=0,st=null;var g=c.sibling;if(g!==null)re=g;else{var S=c.return;S!==null?(re=S,Nr(S)):re=null}break t}}fe=0,st=null,jn(e,t,l,5);break;case 6:fe=0,st=null,jn(e,t,l,6);break;case 8:Vo(),Ee=6;break e;default:throw Error(u(462))}}sp();break}catch(R){Ud(e,R)}while(!0);return Lt=Ua=null,T.H=n,T.A=i,de=a,re!==null?0:(be=null,oe=0,Wi(),Ee)}function sp(){for(;re!==null&&!Cm();)Ld(re)}function Ld(e){var t=fd(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?Nr(e):re=t}function Yd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ld(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=ld(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:so(t);default:gd(a,t),t=re=qc(t,Qt),t=fd(a,t,Qt)}e.memoizedProps=e.pendingProps,t===null?Nr(e):re=t}function jn(e,t,a,n){Lt=Ua=null,so(t),pn=null,si=0;var i=t.return;try{if(Jg(e,i,t,a,oe)){Ee=1,Sr(e,gt(a,e.current)),re=null;return}}catch(l){if(i!==null)throw re=i,l;Ee=1,Sr(e,gt(a,e.current)),re=null;return}t.flags&32768?(ue||n===1?e=!0:vn||(oe&536870912)!==0?e=!1:(fa=e=!0,(n===2||n===9||n===3||n===6)&&(n=bt.current,n!==null&&n.tag===13&&(n.flags|=16384))),qd(t,e)):Nr(t)}function Nr(e){var t=e;do{if((t.flags&32768)!==0){qd(t,fa);return}e=t.return;var a=$g(t.alternate,t,Qt);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ee===0&&(Ee=5)}function qd(e,t){do{var a=ep(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Ee=6,re=null}function Gd(e,t,a,n,i,l,s,c,g){e.cancelPendingCommit=null;do zr();while(qe!==0);if((de&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(l=t.lanes|t.childLanes,l|=_l,Ym(e,a,l,s,c,g),e===be&&(re=be=null,oe=0),An=t,pa=e,Sn=a,Po=l,Fo=i,zd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fp(_i,function(){return Qd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,i=U.p,U.p=2,s=de,de|=4;try{tp(e,t,a)}finally{de=s,U.p=i,T.T=n}}qe=1,Pd(),Fd(),Id()}}function Pd(){if(qe===1){qe=0;var e=pa,t=An,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var n=U.p;U.p=2;var i=de;de|=4;try{Dd(t,e);var l=ls,s=Nc(e.containerInfo),c=l.focusedElem,g=l.selectionRange;if(s!==c&&c&&c.ownerDocument&&Cc(c.ownerDocument.documentElement,c)){if(g!==null&&zl(c)){var S=g.start,R=g.end;if(R===void 0&&(R=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(R,c.value.length);else{var z=c.ownerDocument||document,j=z&&z.defaultView||window;if(j.getSelection){var D=j.getSelection(),J=c.textContent.length,X=Math.min(g.start,J),pe=g.end===void 0?X:Math.min(g.end,J);!D.extend&&X>pe&&(s=pe,pe=X,X=s);var v=Tc(c,X),x=Tc(c,pe);if(v&&x&&(D.rangeCount!==1||D.anchorNode!==v.node||D.anchorOffset!==v.offset||D.focusNode!==x.node||D.focusOffset!==x.offset)){var y=z.createRange();y.setStart(v.node,v.offset),D.removeAllRanges(),X>pe?(D.addRange(y),D.extend(x.node,x.offset)):(y.setEnd(x.node,x.offset),D.addRange(y))}}}}for(z=[],D=c;D=D.parentNode;)D.nodeType===1&&z.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var N=z[c];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Fr=!!rs,ls=rs=null}finally{de=i,U.p=n,T.T=a}}e.current=t,qe=2}}function Fd(){if(qe===2){qe=0;var e=pa,t=An,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var n=U.p;U.p=2;var i=de;de|=4;try{Ad(e,t.alternate,t)}finally{de=i,U.p=n,T.T=a}}qe=3}}function Id(){if(qe===4||qe===3){qe=0,Nm();var e=pa,t=An,a=Sn,n=zd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,An=pa=null,Vd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ga=null),dl(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=T.T,i=U.p,U.p=2,T.T=null;try{for(var l=e.onRecoverableError,s=0;s<n.length;s++){var c=n[s];l(c.value,{componentStack:c.stack})}}finally{T.T=t,U.p=i}}(Sn&3)!==0&&zr(),Ot(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Io?xi++:(xi=0,Io=e):xi=0,bi(0)}}function Vd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jn(t)))}function zr(e){return Pd(),Fd(),Id(),Qd()}function Qd(){if(qe!==5)return!1;var e=pa,t=Po;Po=0;var a=dl(Sn),n=T.T,i=U.p;try{U.p=32>a?32:a,T.T=null,a=Fo,Fo=null;var l=pa,s=Sn;if(qe=0,An=pa=null,Sn=0,(de&6)!==0)throw Error(u(331));var c=de;if(de|=4,Cd(l.current),Md(l,l.current,s,a),de=c,bi(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(On,l)}catch{}return!0}finally{U.p=i,T.T=n,Vd(e,t)}}function Xd(e,t,a){t=gt(a,t),t=wo(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Bn(e,2),Ot(e))}function xe(e,t,a){if(e.tag===3)Xd(e,e,a);else for(;t!==null;){if(t.tag===3){Xd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ga===null||!ga.has(n))){e=gt(a,e),a=Wu(2),n=ra(t,a,2),n!==null&&($u(a,n,t,e),Bn(n,2),Ot(n));break}}t=t.return}}function Zo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ip;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Lo=!0,i.add(a),e=cp.bind(null,e,t,a),t.then(e,e))}function cp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,be===e&&(oe&a)===a&&(Ee===4||Ee===3&&(oe&62914560)===oe&&300>Rt()-Go?(de&2)===0&&wn(e,0):Yo|=a,yn===oe&&(yn=0)),Ot(e)}function Zd(e,t){t===0&&(t=Is()),e=rn(e,t),e!==null&&(Bn(e,t),Ot(e))}function up(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zd(e,a)}function dp(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Zd(e,a)}function fp(e,t){return ol(e,t)}var Or=null,Dn=null,Ko=!1,kr=!1,Jo=!1,Pa=0;function Ot(e){e!==Dn&&e.next===null&&(Dn===null?Or=Dn=e:Dn=Dn.next=e),kr=!0,Ko||(Ko=!0,gp())}function bi(e,t){if(!Jo&&kr){Jo=!0;do for(var a=!1,n=Or;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var s=n.suspendedLanes,c=n.pingedLanes;l=(1<<31-nt(42|e)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,$d(n,l))}else l=oe,l=Yi(n,n===be?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||kn(n,l)||(a=!0,$d(n,l));n=n.next}while(a);Jo=!1}}function mp(){Kd()}function Kd(){kr=Ko=!1;var e=0;Pa!==0&&(Sp()&&(e=Pa),Pa=0);for(var t=Rt(),a=null,n=Or;n!==null;){var i=n.next,l=Jd(n,t);l===0?(n.next=null,a===null?Or=i:a.next=i,i===null&&(Dn=a)):(a=n,(e!==0||(l&3)!==0)&&(kr=!0)),n=i}bi(e)}function Jd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-nt(l),c=1<<s,g=i[s];g===-1?((c&a)===0||(c&n)!==0)&&(i[s]=Lm(c,t)):g<=t&&(e.expiredLanes|=c),l&=~c}if(t=be,a=oe,a=Yi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&sl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&sl(n),dl(a)){case 2:case 8:a=Gs;break;case 32:a=_i;break;case 268435456:a=Ps;break;default:a=_i}return n=Wd.bind(null,e),a=ol(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&sl(n),e.callbackPriority=2,e.callbackNode=null,2}function Wd(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zr()&&e.callbackNode!==a)return null;var n=oe;return n=Yi(e,e===be?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(kd(e,n,t),Jd(e,Rt()),e.callbackNode!=null&&e.callbackNode===a?Wd.bind(null,e):null)}function $d(e,t){if(zr())return null;kd(e,t,!0)}function gp(){jp(function(){(de&6)!==0?ol(qs,mp):Kd()})}function Wo(){return Pa===0&&(Pa=Fs()),Pa}function ef(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(""+e)}function tf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function pp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=ef((i[Ze]||null).action),s=n.submitter;s&&(t=(t=s[Ze]||null)?ef(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var c=new Zi("action","action",null,n,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Pa!==0){var g=s?tf(i,s):new FormData(i);bo(a,{pending:!0,data:g,method:i.method,action:l},null,g)}}else typeof l=="function"&&(c.preventDefault(),g=s?tf(i,s):new FormData(i),bo(a,{pending:!0,data:g,method:i.method,action:l},l,g))},currentTarget:i}]})}}for(var $o=0;$o<Ul.length;$o++){var es=Ul[$o],hp=es.toLowerCase(),xp=es[0].toUpperCase()+es.slice(1);At(hp,"on"+xp)}At(kc,"onAnimationEnd"),At(Bc,"onAnimationIteration"),At(Uc,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(kg,"onTransitionRun"),At(Bg,"onTransitionStart"),At(Ug,"onTransitionCancel"),At(_c,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function af(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var s=n.length-1;0<=s;s--){var c=n[s],g=c.instance,S=c.currentTarget;if(c=c.listener,g!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=S;try{l(i)}catch(R){Ar(R)}i.currentTarget=null,l=g}else for(s=0;s<n.length;s++){if(c=n[s],g=c.instance,S=c.currentTarget,c=c.listener,g!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=S;try{l(i)}catch(R){Ar(R)}i.currentTarget=null,l=g}}}}function le(e,t){var a=t[fl];a===void 0&&(a=t[fl]=new Set);var n=e+"__bubble";a.has(n)||(nf(t,e,2,!1),a.add(n))}function ts(e,t,a){var n=0;t&&(n|=4),nf(a,e,n,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Br]){e[Br]=!0,Ks.forEach(function(a){a!=="selectionchange"&&(bp.has(a)||ts(a,!1,e),ts(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,ts("selectionchange",!1,t))}}function nf(e,t,a,n){switch(Rf(t)){case 2:var i=Ip;break;case 8:i=Vp;break;default:i=hs}a=i.bind(null,t,a,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function ns(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var c=n.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=n.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ia(c),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){n=l=s;continue e}c=c.parentNode}}n=n.return}uc(function(){var S=l,R=Al(a),z=[];e:{var j=Hc.get(e);if(j!==void 0){var D=Zi,J=e;switch(e){case"keypress":if(Qi(a)===0)break e;case"keydown":case"keyup":D=fg;break;case"focusin":J="focus",D=Ml;break;case"focusout":J="blur",D=Ml;break;case"beforeblur":case"afterblur":D=Ml;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=pg;break;case kc:case Bc:case Uc:D=ng;break;case _c:D=xg;break;case"scroll":case"scrollend":D=Wm;break;case"wheel":D=vg;break;case"copy":case"cut":case"paste":D=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=pc;break;case"toggle":case"beforetoggle":D=Ag}var X=(t&4)!==0,pe=!X&&(e==="scroll"||e==="scrollend"),v=X?j!==null?j+"Capture":null:j;X=[];for(var x=S,y;x!==null;){var N=x;if(y=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||y===null||v===null||(N=Hn(x,v),N!=null&&X.push(yi(x,N,y))),pe)break;x=x.return}0<X.length&&(j=new D(j,J,null,a,R),z.push({event:j,listeners:X}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",j&&a!==yl&&(J=a.relatedTarget||a.fromElement)&&(Ia(J)||J[Fa]))break e;if((D||j)&&(j=R.window===R?R:(j=R.ownerDocument)?j.defaultView||j.parentWindow:window,D?(J=a.relatedTarget||a.toElement,D=S,J=J?Ia(J):null,J!==null&&(pe=b(J),X=J.tag,J!==pe||X!==5&&X!==27&&X!==6)&&(J=null)):(D=null,J=S),D!==J)){if(X=mc,N="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(X=pc,N="onPointerLeave",v="onPointerEnter",x="pointer"),pe=D==null?j:_n(D),y=J==null?j:_n(J),j=new X(N,x+"leave",D,a,R),j.target=pe,j.relatedTarget=y,N=null,Ia(R)===S&&(X=new X(v,x+"enter",J,a,R),X.target=y,X.relatedTarget=pe,N=X),pe=N,D&&J)t:{for(X=D,v=J,x=0,y=X;y;y=En(y))x++;for(y=0,N=v;N;N=En(N))y++;for(;0<x-y;)X=En(X),x--;for(;0<y-x;)v=En(v),y--;for(;x--;){if(X===v||v!==null&&X===v.alternate)break t;X=En(X),v=En(v)}X=null}else X=null;D!==null&&rf(z,j,D,X,!1),J!==null&&pe!==null&&rf(z,pe,J,X,!0)}}e:{if(j=S?_n(S):window,D=j.nodeName&&j.nodeName.toLowerCase(),D==="select"||D==="input"&&j.type==="file")var L=wc;else if(Ac(j))if(jc)L=Ng;else{L=Tg;var ie=Rg}else D=j.nodeName,!D||D.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?S&&vl(S.elementType)&&(L=wc):L=Cg;if(L&&(L=L(e,S))){Sc(z,L,a,R);break e}ie&&ie(e,j,S),e==="focusout"&&S&&j.type==="number"&&S.memoizedProps.value!=null&&bl(j,"number",j.value)}switch(ie=S?_n(S):window,e){case"focusin":(Ac(ie)||ie.contentEditable==="true")&&(tn=ie,Ol=S,Vn=null);break;case"focusout":Vn=Ol=tn=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,zc(z,a,R);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":zc(z,a,R)}var P;if(Tl)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else en?vc(e,a)&&(Z="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(hc&&a.locale!=="ko"&&(en||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&en&&(P=dc()):(ta=R,jl="value"in ta?ta.value:ta.textContent,en=!0)),ie=Ur(S,Z),0<ie.length&&(Z=new gc(Z,e,null,a,R),z.push({event:Z,listeners:ie}),P?Z.data=P:(P=yc(a),P!==null&&(Z.data=P)))),(P=wg?jg(e,a):Dg(e,a))&&(Z=Ur(S,"onBeforeInput"),0<Z.length&&(ie=new gc("onBeforeInput","beforeinput",null,a,R),z.push({event:ie,listeners:Z}),ie.data=P)),pp(z,e,S,a,R)}af(z,t)})}function yi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ur(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Hn(e,a),i!=null&&n.unshift(yi(e,i,l)),i=Hn(e,t),i!=null&&n.push(yi(e,i,l))),e.tag===3)return n;e=e.return}return[]}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rf(e,t,a,n,i){for(var l=t._reactName,s=[];a!==null&&a!==n;){var c=a,g=c.alternate,S=c.stateNode;if(c=c.tag,g!==null&&g===n)break;c!==5&&c!==26&&c!==27||S===null||(g=S,i?(S=Hn(a,l),S!=null&&s.unshift(yi(a,S,g))):i||(S=Hn(a,l),S!=null&&s.push(yi(a,S,g)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var vp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(yp,"")}function of(e,t){return t=lf(t),lf(e)===t}function _r(){}function ge(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ja(e,""+n);break;case"className":Gi(e,"class",n);break;case"tabIndex":Gi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gi(e,a,n);break;case"style":sc(e,n,l);break;case"data":if(t!=="object"){Gi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ii(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",i.name,i,null),ge(e,t,"formEncType",i.formEncType,i,null),ge(e,t,"formMethod",i.formMethod,i,null),ge(e,t,"formTarget",i.formTarget,i,null)):(ge(e,t,"encType",i.encType,i,null),ge(e,t,"method",i.method,i,null),ge(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ii(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=_r);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ii(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":le("beforetoggle",e),le("toggle",e),qi(e,"popover",n);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":qi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Km.get(a)||a,qi(e,a,n))}}function is(e,t,a,n,i,l){switch(a){case"style":sc(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&Ja(e,""+n);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"onClick":n!=null&&(e.onclick=_r);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Js.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[Ze]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):qi(e,a,n)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];if(s!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,l,s,a,null)}}i&&ge(e,t,"srcSet",a.srcSet,a,null),n&&ge(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var c=l=s=i=null,g=null,S=null;for(n in a)if(a.hasOwnProperty(n)){var R=a[n];if(R!=null)switch(n){case"name":i=R;break;case"type":s=R;break;case"checked":g=R;break;case"defaultChecked":S=R;break;case"value":l=R;break;case"defaultValue":c=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:ge(e,t,n,R,a,null)}}ic(e,l,c,g,S,s,i,!1),Pi(e);return;case"select":le("invalid",e),n=s=l=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":n=c;default:ge(e,t,i,c,a,null)}t=l,a=s,e.multiple=!!n,t!=null?Ka(e,!!n,t,!1):a!=null&&Ka(e,!!n,a,!0);return;case"textarea":le("invalid",e),l=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(c=a[s],c!=null))switch(s){case"value":n=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:ge(e,t,s,c,a,null)}lc(e,n,i,l),Pi(e);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ge(e,t,g,n,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(n=0;n<vi.length;n++)le(vi[n],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,S,n,a,null)}return;default:if(vl(t)){for(R in a)a.hasOwnProperty(R)&&(n=a[R],n!==void 0&&is(e,t,R,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&ge(e,t,c,n,a,null))}function Ap(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,g=null,S=null,R=null;for(D in a){var z=a[D];if(a.hasOwnProperty(D)&&z!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":g=z;default:n.hasOwnProperty(D)||ge(e,t,D,null,n,z)}}for(var j in n){var D=n[j];if(z=a[j],n.hasOwnProperty(j)&&(D!=null||z!=null))switch(j){case"type":l=D;break;case"name":i=D;break;case"checked":S=D;break;case"defaultChecked":R=D;break;case"value":s=D;break;case"defaultValue":c=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:D!==z&&ge(e,t,j,D,n,z)}}xl(e,s,c,g,S,R,l,i);return;case"select":D=s=c=j=null;for(l in a)if(g=a[l],a.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":D=g;default:n.hasOwnProperty(l)||ge(e,t,l,null,n,g)}for(i in n)if(l=n[i],g=a[i],n.hasOwnProperty(i)&&(l!=null||g!=null))switch(i){case"value":j=l;break;case"defaultValue":c=l;break;case"multiple":s=l;default:l!==g&&ge(e,t,i,l,n,g)}t=c,a=s,n=D,j!=null?Ka(e,!!a,j,!1):!!n!=!!a&&(t!=null?Ka(e,!!a,t,!0):Ka(e,!!a,a?[]:"",!1));return;case"textarea":D=j=null;for(c in a)if(i=a[c],a.hasOwnProperty(c)&&i!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ge(e,t,c,null,n,i)}for(s in n)if(i=n[s],l=a[s],n.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":j=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==l&&ge(e,t,s,i,n,l)}rc(e,j,D);return;case"option":for(var J in a)if(j=a[J],a.hasOwnProperty(J)&&j!=null&&!n.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:ge(e,t,J,null,n,j)}for(g in n)if(j=n[g],D=a[g],n.hasOwnProperty(g)&&j!==D&&(j!=null||D!=null))switch(g){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:ge(e,t,g,j,n,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in a)j=a[X],a.hasOwnProperty(X)&&j!=null&&!n.hasOwnProperty(X)&&ge(e,t,X,null,n,j);for(S in n)if(j=n[S],D=a[S],n.hasOwnProperty(S)&&j!==D&&(j!=null||D!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,t));break;default:ge(e,t,S,j,n,D)}return;default:if(vl(t)){for(var pe in a)j=a[pe],a.hasOwnProperty(pe)&&j!==void 0&&!n.hasOwnProperty(pe)&&is(e,t,pe,void 0,n,j);for(R in n)j=n[R],D=a[R],!n.hasOwnProperty(R)||j===D||j===void 0&&D===void 0||is(e,t,R,j,n,D);return}}for(var v in a)j=a[v],a.hasOwnProperty(v)&&j!=null&&!n.hasOwnProperty(v)&&ge(e,t,v,null,n,j);for(z in n)j=n[z],D=a[z],!n.hasOwnProperty(z)||j===D||j==null&&D==null||ge(e,t,z,j,n,D)}var rs=null,ls=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function sf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=null;function Sp(){var e=window.event;return e&&e.type==="popstate"?e===ss?!1:(ss=e,!0):(ss=null,!1)}var uf=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(e){return df.resolve(null).then(e).catch(Dp)}:uf;function Dp(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function ff(e,t){var a=t,n=0,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(0<n&&8>n){a=n;var s=e.ownerDocument;if(a&1&&Ai(s.documentElement),a&2&&Ai(s.body),a&4)for(a=s.head,Ai(a),s=a.firstChild;s;){var c=s.nextSibling,g=s.nodeName;s[Un]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}if(i===0){e.removeChild(l),Ti(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=l}while(a);Ti(t)}function cs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cs(a),ml(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ep(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function Mp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function us(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Rp(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ds=null;function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function gf(e,t,a){switch(t=Hr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ai(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ml(e)}var yt=new Map,pf=new Set;function Lr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xt=U.d;U.d={f:Tp,r:Cp,D:Np,C:zp,L:Op,m:kp,X:Up,S:Bp,M:_p};function Tp(){var e=Xt.f(),t=Cr();return e||t}function Cp(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?ku(t):Xt.r(e)}var Mn=typeof document>"u"?null:document;function hf(e,t,a){var n=Mn;if(n&&typeof t=="string"&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),pf.has(i)||(pf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ge(t,"link",e),Ue(t),n.head.appendChild(t)))}}function Np(e){Xt.D(e),hf("dns-prefetch",e,null)}function zp(e,t){Xt.C(e,t),hf("preconnect",e,t)}function Op(e,t,a){Xt.L(e,t,a);var n=Mn;if(n&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+mt(a.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var l=i;switch(t){case"style":l=Rn(e);break;case"script":l=Tn(e)}yt.has(l)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Si(l))||t==="script"&&n.querySelector(wi(l))||(t=n.createElement("link"),Ge(t,"link",e),Ue(t),n.head.appendChild(t)))}}function kp(e,t){Xt.m(e,t);var a=Mn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+mt(n)+'"][href="'+mt(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Tn(e)}if(!yt.has(l)&&(e=E({rel:"modulepreload",href:e},t),yt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wi(l)))return}n=a.createElement("link"),Ge(n,"link",e),Ue(n),a.head.appendChild(n)}}}function Bp(e,t,a){Xt.S(e,t,a);var n=Mn;if(n&&e){var i=Qa(n).hoistableStyles,l=Rn(e);t=t||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=n.querySelector(Si(l)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(l))&&fs(e,a);var g=s=n.createElement("link");Ue(g),Ge(g,"link",e),g._p=new Promise(function(S,R){g.onload=S,g.onerror=R}),g.addEventListener("load",function(){c.loading|=1}),g.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Yr(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function Up(e,t){Xt.X(e,t);var a=Mn;if(a&&e){var n=Qa(a).hoistableScripts,i=Tn(e),l=n.get(i);l||(l=a.querySelector(wi(i)),l||(e=E({src:e,async:!0},t),(t=yt.get(i))&&ms(e,t),l=a.createElement("script"),Ue(l),Ge(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function _p(e,t){Xt.M(e,t);var a=Mn;if(a&&e){var n=Qa(a).hoistableScripts,i=Tn(e),l=n.get(i);l||(l=a.querySelector(wi(i)),l||(e=E({src:e,async:!0,type:"module"},t),(t=yt.get(i))&&ms(e,t),l=a.createElement("script"),Ue(l),Ge(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function xf(e,t,a,n){var i=(i=ee.current)?Lr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Rn(a.href),a=Qa(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rn(a.href);var l=Qa(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(Si(e)))&&!l._p&&(s.instance=l,s.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),l||Hp(i,e,a,s.state))),t&&n===null)throw Error(u(528,""));return s}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tn(a),a=Qa(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Rn(e){return'href="'+mt(e)+'"'}function Si(e){return'link[rel="stylesheet"]['+e+"]"}function bf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Hp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ge(t,"link",a),Ue(t),e.head.appendChild(t))}function Tn(e){return'[src="'+mt(e)+'"]'}function wi(e){return"script[async]"+e}function vf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+mt(a.href)+'"]');if(n)return t.instance=n,Ue(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ue(n),Ge(n,"style",i),Yr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Rn(a.href);var l=e.querySelector(Si(i));if(l)return t.state.loading|=4,t.instance=l,Ue(l),l;n=bf(a),(i=yt.get(i))&&fs(n,i),l=(e.ownerDocument||e).createElement("link"),Ue(l);var s=l;return s._p=new Promise(function(c,g){s.onload=c,s.onerror=g}),Ge(l,"link",n),t.state.loading|=4,Yr(l,a.precedence,e),t.instance=l;case"script":return l=Tn(a.src),(i=e.querySelector(wi(l)))?(t.instance=i,Ue(i),i):(n=a,(i=yt.get(l))&&(n=E({},a),ms(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ue(i),Ge(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Yr(n,a.precedence,e));return t.instance}function Yr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,s=0;s<n.length;s++){var c=n[s];if(c.dataset.precedence===t)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function fs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qr=null;function yf(e,t,a){if(qr===null){var n=new Map,i=qr=new Map;i.set(a,n)}else i=qr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[Un]||l[Ie]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var c=n.get(s);c?c.push(l):n.set(s,[l])}}return n}function Af(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Lp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ji=null;function Yp(){}function qp(e,t,a){if(ji===null)throw Error(u(475));var n=ji;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Rn(a.href),l=e.querySelector(Si(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Gr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,Ue(l);return}l=e.ownerDocument||e,a=bf(a),(i=yt.get(i))&&fs(a,i),l=l.createElement("link"),Ue(l);var s=l;s._p=new Promise(function(c,g){s.onload=c,s.onerror=g}),Ge(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Gr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Gp(){if(ji===null)throw Error(u(475));var e=ji;return e.stylesheets&&e.count===0&&gs(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&gs(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gr(){if(this.count--,this.count===0){if(this.stylesheets)gs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pr=null;function gs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pr=new Map,t.forEach(Pp,e),Pr=null,Gr.call(e))}function Pp(e,t){if(!(t.state.loading&4)){var a=Pr.get(e);if(a)var n=a.get(null);else{a=new Map,Pr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),l=a.get(s)||n,l===n&&a.set(null,i),a.set(s,i),this.count++,n=Gr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Di={$$typeof:te,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Fp(e,t,a,n,i,l,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.hiddenUpdates=cl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function wf(e,t,a,n,i,l,s,c,g,S,R,z){return e=new Fp(e,t,a,s,c,g,S,z),t=1,l===!0&&(t|=24),l=rt(3,null,null,t),e.current=l,l.stateNode=e,t=Xl(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},Wl(l),e}function jf(e){return e?(e=ln,e):ln}function Df(e,t,a,n,i,l){i=jf(i),n.context===null?n.context=i:n.pendingContext=i,n=ia(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=ra(e,n,t),a!==null&&(ut(a,e,t),ti(a,e,t))}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ps(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function Mf(e){if(e.tag===13){var t=rn(e,67108864);t!==null&&ut(t,e,67108864),ps(e,67108864)}}var Fr=!0;function Ip(e,t,a,n){var i=T.T;T.T=null;var l=U.p;try{U.p=2,hs(e,t,a,n)}finally{U.p=l,T.T=i}}function Vp(e,t,a,n){var i=T.T;T.T=null;var l=U.p;try{U.p=8,hs(e,t,a,n)}finally{U.p=l,T.T=i}}function hs(e,t,a,n){if(Fr){var i=xs(n);if(i===null)ns(e,t,n,Ir,a),Tf(e,n);else if(Xp(i,e,t,a,n))n.stopPropagation();else if(Tf(e,n),t&4&&-1<Qp.indexOf(e)){for(;i!==null;){var l=Va(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Ea(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var g=1<<31-nt(s);c.entanglements[1]|=g,s&=~g}Ot(l),(de&6)===0&&(Rr=Rt()+500,bi(0))}}break;case 13:c=rn(l,2),c!==null&&ut(c,l,2),Cr(),ps(l,2)}if(l=xs(n),l===null&&ns(e,t,n,Ir,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else ns(e,t,n,null,a)}}function xs(e){return e=Al(e),bs(e)}var Ir=null;function bs(e){if(Ir=null,e=Ia(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ir=e,null}function Rf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zm()){case qs:return 2;case Gs:return 8;case _i:case Om:return 32;case Ps:return 268435456;default:return 32}default:return 32}}var vs=!1,ba=null,va=null,ya=null,Ei=new Map,Mi=new Map,Aa=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tf(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(t.pointerId)}}function Ri(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&Mf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xp(e,t,a,n,i){switch(t){case"focusin":return ba=Ri(ba,e,t,a,n,i),!0;case"dragenter":return va=Ri(va,e,t,a,n,i),!0;case"mouseover":return ya=Ri(ya,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return Ei.set(l,Ri(Ei.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Mi.set(l,Ri(Mi.get(l)||null,e,t,a,n,i)),!0}return!1}function Cf(e){var t=Ia(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=w(a),t!==null){e.blockedOn=t,qm(e.priority,function(){if(a.tag===13){var n=ct();n=ul(n);var i=rn(a,n);i!==null&&ut(i,a,n),ps(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=xs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);yl=n,a.target.dispatchEvent(n),yl=null}else return t=Va(a),t!==null&&Mf(t),e.blockedOn=a,!1;t.shift()}return!0}function Nf(e,t,a){Vr(e)&&a.delete(t)}function Zp(){vs=!1,ba!==null&&Vr(ba)&&(ba=null),va!==null&&Vr(va)&&(va=null),ya!==null&&Vr(ya)&&(ya=null),Ei.forEach(Nf),Mi.forEach(Nf)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Zp)))}var Xr=null;function zf(e){Xr!==e&&(Xr=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xr===e&&(Xr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(bs(n||a)===null)continue;break}var l=Va(a);l!==null&&(e.splice(t,3),t-=3,bo(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Ti(e){function t(g){return Qr(g,e)}ba!==null&&Qr(ba,e),va!==null&&Qr(va,e),ya!==null&&Qr(ya,e),Ei.forEach(t),Mi.forEach(t);for(var a=0;a<Aa.length;a++){var n=Aa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Cf(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],s=i[Ze]||null;if(typeof l=="function")s||zf(a);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[Ze]||null)c=s.formAction;else if(bs(i)!==null)continue}else c=s.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),zf(a)}}}function ys(e){this._internalRoot=e}Zr.prototype.render=ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=ct();Df(a,n,e,t,null,null)},Zr.prototype.unmount=ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Df(e.current,2,null,e,null,null),Cr(),t[Fa]=null}};function Zr(e){this._internalRoot=e}Zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&Cf(e)}};var Of=d.version;if(Of!=="19.1.1")throw Error(u(527,Of,"19.1.1"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=A(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Kp={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{On=Kr.inject(Kp),at=Kr}catch{}}return Ni.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,n="",i=Xu,l=Zu,s=Ku,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=wf(e,1,!1,null,null,a,n,i,l,s,c,null),e[Fa]=t.current,as(e),new ys(t)},Ni.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var n=!1,i="",l=Xu,s=Zu,c=Ku,g=null,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(S=a.formState)),t=wf(e,1,!0,t,a??null,n,i,l,s,c,g,S),t.context=jf(null),a=t.current,n=ct(),n=ul(n),i=ia(n),i.callback=null,ra(a,i,n),a=n,t.current.lanes=a,Bn(t,a),Ot(t),e[Fa]=t.current,as(e),new Zr(t)},Ni.version="19.1.1",Ni}var Pf;function oh(){if(Pf)return ws.exports;Pf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),ws.exports=lh(),ws.exports}var sh=oh();const ch=pm(sh);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ff="popstate";function uh(o={}){function d(u,m){let{pathname:b,search:w,hash:C}=u.location;return Ns("",{pathname:b,search:w,hash:C},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(u,m){return typeof m=="string"?m:Oi(m)}return fh(d,f,null,o)}function Ae(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Dt(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function dh(){return Math.random().toString(36).substring(2,10)}function If(o,d){return{usr:o.state,key:o.key,idx:d}}function Ns(o,d,f=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Cn(d):d,state:f,key:d&&d.key||u||dh()}}function Oi({pathname:o="/",search:d="",hash:f=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function Cn(o){let d={};if(o){let f=o.indexOf("#");f>=0&&(d.hash=o.substring(f),o=o.substring(0,f));let u=o.indexOf("?");u>=0&&(d.search=o.substring(u),o=o.substring(0,u)),o&&(d.pathname=o)}return d}function fh(o,d,f,u={}){let{window:m=document.defaultView,v5Compat:b=!1}=u,w=m.history,C="POP",A=null,p=E();p==null&&(p=0,w.replaceState({...w.state,idx:p},""));function E(){return(w.state||{idx:null}).idx}function k(){C="POP";let Y=E(),I=Y==null?null:Y-p;p=Y,A&&A({action:C,location:W.location,delta:I})}function _(Y,I){C="PUSH";let q=Ns(W.location,Y,I);p=E()+1;let te=If(q,p),Se=W.createHref(q);try{w.pushState(te,"",Se)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;m.location.assign(Se)}b&&A&&A({action:C,location:W.location,delta:1})}function G(Y,I){C="REPLACE";let q=Ns(W.location,Y,I);p=E();let te=If(q,p),Se=W.createHref(q);w.replaceState(te,"",Se),b&&A&&A({action:C,location:W.location,delta:0})}function F(Y){return mh(Y)}let W={get action(){return C},get location(){return o(m,w)},listen(Y){if(A)throw new Error("A history only accepts one active listener");return m.addEventListener(Ff,k),A=Y,()=>{m.removeEventListener(Ff,k),A=null}},createHref(Y){return d(m,Y)},createURL:F,encodeLocation(Y){let I=F(Y);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:_,replace:G,go(Y){return w.go(Y)}};return W}function mh(o,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(f,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:Oi(o);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function hm(o,d,f="/"){return gh(o,d,f,!1)}function gh(o,d,f,u){let m=typeof d=="string"?Cn(d):d,b=Kt(m.pathname||"/",f);if(b==null)return null;let w=xm(o);ph(w);let C=null;for(let A=0;C==null&&A<w.length;++A){let p=Eh(b);C=jh(w[A],p,u)}return C}function xm(o,d=[],f=[],u="",m=!1){let b=(w,C,A=m,p)=>{let E={relativePath:p===void 0?w.path||"":p,caseSensitive:w.caseSensitive===!0,childrenIndex:C,route:w};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(u)&&A)return;Ae(E.relativePath.startsWith(u),`Absolute route path "${E.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(u.length)}let k=Zt([u,E.relativePath]),_=f.concat(E);w.children&&w.children.length>0&&(Ae(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${k}".`),xm(w.children,d,_,k,A)),!(w.path==null&&!w.index)&&d.push({path:k,score:Sh(k,w.index),routesMeta:_})};return o.forEach((w,C)=>{if(w.path===""||!w.path?.includes("?"))b(w,C);else for(let A of bm(w.path))b(w,C,!0,A)}),d}function bm(o){let d=o.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),b=f.replace(/\?$/,"");if(u.length===0)return m?[b,""]:[b];let w=bm(u.join("/")),C=[];return C.push(...w.map(A=>A===""?b:[b,A].join("/"))),m&&C.push(...w),C.map(A=>o.startsWith("/")&&A===""?"/":A)}function ph(o){o.sort((d,f)=>d.score!==f.score?f.score-d.score:wh(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var hh=/^:[\w-]+$/,xh=3,bh=2,vh=1,yh=10,Ah=-2,Vf=o=>o==="*";function Sh(o,d){let f=o.split("/"),u=f.length;return f.some(Vf)&&(u+=Ah),d&&(u+=bh),f.filter(m=>!Vf(m)).reduce((m,b)=>m+(hh.test(b)?xh:b===""?vh:yh),u)}function wh(o,d){return o.length===d.length&&o.slice(0,-1).every((u,m)=>u===d[m])?o[o.length-1]-d[d.length-1]:0}function jh(o,d,f=!1){let{routesMeta:u}=o,m={},b="/",w=[];for(let C=0;C<u.length;++C){let A=u[C],p=C===u.length-1,E=b==="/"?d:d.slice(b.length)||"/",k=tl({path:A.relativePath,caseSensitive:A.caseSensitive,end:p},E),_=A.route;if(!k&&p&&f&&!u[u.length-1].route.index&&(k=tl({path:A.relativePath,caseSensitive:A.caseSensitive,end:!1},E)),!k)return null;Object.assign(m,k.params),w.push({params:m,pathname:Zt([b,k.pathname]),pathnameBase:Ch(Zt([b,k.pathnameBase])),route:_}),k.pathnameBase!=="/"&&(b=Zt([b,k.pathnameBase]))}return w}function tl(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,u]=Dh(o.path,o.caseSensitive,o.end),m=d.match(f);if(!m)return null;let b=m[0],w=b.replace(/(.)\/+$/,"$1"),C=m.slice(1);return{params:u.reduce((p,{paramName:E,isOptional:k},_)=>{if(E==="*"){let F=C[_]||"";w=b.slice(0,b.length-F.length).replace(/(.)\/+$/,"$1")}const G=C[_];return k&&!G?p[E]=void 0:p[E]=(G||"").replace(/%2F/g,"/"),p},{}),pathname:b,pathnameBase:w,pattern:o}}function Dh(o,d=!1,f=!0){Dt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,C,A)=>(u.push({paramName:C,isOptional:A!=null}),A?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function Eh(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Dt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function Kt(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=o.charAt(f);return u&&u!=="/"?null:o.slice(f)||"/"}function Mh(o,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof o=="string"?Cn(o):o;return{pathname:f?f.startsWith("/")?f:Rh(f,d):d,search:Nh(u),hash:zh(m)}}function Rh(o,d){let f=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Ms(o,d,f,u){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Th(o){return o.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function ks(o){let d=Th(o);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function Bs(o,d,f,u=!1){let m;typeof o=="string"?m=Cn(o):(m={...o},Ae(!m.pathname||!m.pathname.includes("?"),Ms("?","pathname","search",m)),Ae(!m.pathname||!m.pathname.includes("#"),Ms("#","pathname","hash",m)),Ae(!m.search||!m.search.includes("#"),Ms("#","search","hash",m)));let b=o===""||m.pathname==="",w=b?"/":m.pathname,C;if(w==null)C=f;else{let k=d.length-1;if(!u&&w.startsWith("..")){let _=w.split("/");for(;_[0]==="..";)_.shift(),k-=1;m.pathname=_.join("/")}C=k>=0?d[k]:"/"}let A=Mh(m,C),p=w&&w!=="/"&&w.endsWith("/"),E=(b||w===".")&&f.endsWith("/");return!A.pathname.endsWith("/")&&(p||E)&&(A.pathname+="/"),A}var Zt=o=>o.join("/").replace(/\/\/+/g,"/"),Ch=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Nh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,zh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function Oh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var vm=["POST","PUT","PATCH","DELETE"];new Set(vm);var kh=["GET",...vm];new Set(kh);var Nn=M.createContext(null);Nn.displayName="DataRouter";var al=M.createContext(null);al.displayName="DataRouterState";M.createContext(!1);var ym=M.createContext({isTransitioning:!1});ym.displayName="ViewTransition";var Bh=M.createContext(new Map);Bh.displayName="Fetchers";var Uh=M.createContext(null);Uh.displayName="Await";var Et=M.createContext(null);Et.displayName="Navigation";var ki=M.createContext(null);ki.displayName="Location";var Mt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Mt.displayName="Route";var Us=M.createContext(null);Us.displayName="RouteError";function _h(o,{relative:d}={}){Ae(zn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=M.useContext(Et),{hash:m,pathname:b,search:w}=Bi(o,{relative:d}),C=b;return f!=="/"&&(C=b==="/"?f:Zt([f,b])),u.createHref({pathname:C,search:w,hash:m})}function zn(){return M.useContext(ki)!=null}function Jt(){return Ae(zn(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(ki).location}var Am="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sm(o){M.useContext(Et).static||M.useLayoutEffect(o)}function nl(){let{isDataRoute:o}=M.useContext(Mt);return o?Jh():Hh()}function Hh(){Ae(zn(),"useNavigate() may be used only in the context of a <Router> component.");let o=M.useContext(Nn),{basename:d,navigator:f}=M.useContext(Et),{matches:u}=M.useContext(Mt),{pathname:m}=Jt(),b=JSON.stringify(ks(u)),w=M.useRef(!1);return Sm(()=>{w.current=!0}),M.useCallback((A,p={})=>{if(Dt(w.current,Am),!w.current)return;if(typeof A=="number"){f.go(A);return}let E=Bs(A,JSON.parse(b),m,p.relative==="path");o==null&&d!=="/"&&(E.pathname=E.pathname==="/"?d:Zt([d,E.pathname])),(p.replace?f.replace:f.push)(E,p.state,p)},[d,f,b,m,o])}M.createContext(null);function Lh(){let{matches:o}=M.useContext(Mt),d=o[o.length-1];return d?d.params:{}}function Bi(o,{relative:d}={}){let{matches:f}=M.useContext(Mt),{pathname:u}=Jt(),m=JSON.stringify(ks(f));return M.useMemo(()=>Bs(o,JSON.parse(m),u,d==="path"),[o,m,u,d])}function Yh(o,d){return wm(o,d)}function wm(o,d,f,u,m){Ae(zn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=M.useContext(Et),{matches:w}=M.useContext(Mt),C=w[w.length-1],A=C?C.params:{},p=C?C.pathname:"/",E=C?C.pathnameBase:"/",k=C&&C.route;{let q=k&&k.path||"";jm(p,!k||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let _=Jt(),G;if(d){let q=typeof d=="string"?Cn(d):d;Ae(E==="/"||q.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${q.pathname}" was given in the \`location\` prop.`),G=q}else G=_;let F=G.pathname||"/",W=F;if(E!=="/"){let q=E.replace(/^\//,"").split("/");W="/"+F.replace(/^\//,"").split("/").slice(q.length).join("/")}let Y=hm(o,{pathname:W});Dt(k||Y!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),Dt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=Ih(Y&&Y.map(q=>Object.assign({},q,{params:Object.assign({},A,q.params),pathname:Zt([E,b.encodeLocation?b.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?E:Zt([E,b.encodeLocation?b.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),w,f,u,m);return d&&I?M.createElement(ki.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},I):I}function qh(){let o=Kh(),d=Oh(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},b={padding:"2px 4px",backgroundColor:u},w=null;return console.error("Error handled by React Router default ErrorBoundary:",o),w=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:b},"ErrorBoundary")," or"," ",M.createElement("code",{style:b},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},d),f?M.createElement("pre",{style:m},f):null,w)}var Gh=M.createElement(qh,null),Ph=class extends M.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.unstable_onError?this.props.unstable_onError(o,d):console.error("React Router caught the following error during render",o)}render(){return this.state.error!==void 0?M.createElement(Mt.Provider,{value:this.props.routeContext},M.createElement(Us.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Fh({routeContext:o,match:d,children:f}){let u=M.useContext(Nn);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),M.createElement(Mt.Provider,{value:o},f)}function Ih(o,d=[],f=null,u=null,m=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let b=o,w=f?.errors;if(w!=null){let p=b.findIndex(E=>E.route.id&&w?.[E.route.id]!==void 0);Ae(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),b=b.slice(0,Math.min(b.length,p+1))}let C=!1,A=-1;if(f)for(let p=0;p<b.length;p++){let E=b[p];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(A=p),E.route.id){let{loaderData:k,errors:_}=f,G=E.route.loader&&!k.hasOwnProperty(E.route.id)&&(!_||_[E.route.id]===void 0);if(E.route.lazy||G){C=!0,A>=0?b=b.slice(0,A+1):b=[b[0]];break}}}return b.reduceRight((p,E,k)=>{let _,G=!1,F=null,W=null;f&&(_=w&&E.route.id?w[E.route.id]:void 0,F=E.route.errorElement||Gh,C&&(A<0&&k===0?(jm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,W=null):A===k&&(G=!0,W=E.route.hydrateFallbackElement||null)));let Y=d.concat(b.slice(0,k+1)),I=()=>{let q;return _?q=F:G?q=W:E.route.Component?q=M.createElement(E.route.Component,null):E.route.element?q=E.route.element:q=p,M.createElement(Fh,{match:E,routeContext:{outlet:p,matches:Y,isDataRoute:f!=null},children:q})};return f&&(E.route.ErrorBoundary||E.route.errorElement||k===0)?M.createElement(Ph,{location:f.location,revalidation:f.revalidation,component:F,error:_,children:I(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},unstable_onError:u}):I()},null)}function _s(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vh(o){let d=M.useContext(Nn);return Ae(d,_s(o)),d}function Qh(o){let d=M.useContext(al);return Ae(d,_s(o)),d}function Xh(o){let d=M.useContext(Mt);return Ae(d,_s(o)),d}function Hs(o){let d=Xh(o),f=d.matches[d.matches.length-1];return Ae(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function Zh(){return Hs("useRouteId")}function Kh(){let o=M.useContext(Us),d=Qh("useRouteError"),f=Hs("useRouteError");return o!==void 0?o:d.errors?.[f]}function Jh(){let{router:o}=Vh("useNavigate"),d=Hs("useNavigate"),f=M.useRef(!1);return Sm(()=>{f.current=!0}),M.useCallback(async(m,b={})=>{Dt(f.current,Am),f.current&&(typeof m=="number"?o.navigate(m):await o.navigate(m,{fromRouteId:d,...b}))},[o,d])}var Qf={};function jm(o,d,f){!d&&!Qf[o]&&(Qf[o]=!0,Dt(!1,f))}M.memo(Wh);function Wh({routes:o,future:d,state:f,unstable_onError:u}){return wm(o,void 0,f,u,d)}function Xf({to:o,replace:d,state:f,relative:u}){Ae(zn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=M.useContext(Et);Dt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:b}=M.useContext(Mt),{pathname:w}=Jt(),C=nl(),A=Bs(o,ks(b),w,u==="path"),p=JSON.stringify(A);return M.useEffect(()=>{C(JSON.parse(p),{replace:d,state:f,relative:u})},[C,p,u,d,f]),null}function jt(o){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $h({basename:o="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:b=!1}){Ae(!zn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=o.replace(/^\/*/,"/"),C=M.useMemo(()=>({basename:w,navigator:m,static:b,future:{}}),[w,m,b]);typeof f=="string"&&(f=Cn(f));let{pathname:A="/",search:p="",hash:E="",state:k=null,key:_="default"}=f,G=M.useMemo(()=>{let F=Kt(A,w);return F==null?null:{location:{pathname:F,search:p,hash:E,state:k,key:_},navigationType:u}},[w,A,p,E,k,_,u]);return Dt(G!=null,`<Router basename="${w}"> is not able to match the URL "${A}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:M.createElement(Et.Provider,{value:C},M.createElement(ki.Provider,{children:d,value:G}))}function e0({children:o,location:d}){return Yh(zs(o),d)}function zs(o,d=[]){let f=[];return M.Children.forEach(o,(u,m)=>{if(!M.isValidElement(u))return;let b=[...d,m];if(u.type===M.Fragment){f.push.apply(f,zs(u.props.children,b));return}Ae(u.type===jt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!u.props.index||!u.props.children,"An index route cannot have child routes.");let w={id:u.props.id||b.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(w.children=zs(u.props.children,b)),f.push(w)}),f}var $r="get",el="application/x-www-form-urlencoded";function il(o){return o!=null&&typeof o.tagName=="string"}function t0(o){return il(o)&&o.tagName.toLowerCase()==="button"}function a0(o){return il(o)&&o.tagName.toLowerCase()==="form"}function n0(o){return il(o)&&o.tagName.toLowerCase()==="input"}function i0(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function r0(o,d){return o.button===0&&(!d||d==="_self")&&!i0(o)}var Jr=null;function l0(){if(Jr===null)try{new FormData(document.createElement("form"),0),Jr=!1}catch{Jr=!0}return Jr}var o0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rs(o){return o!=null&&!o0.has(o)?(Dt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${el}"`),null):o}function s0(o,d){let f,u,m,b,w;if(a0(o)){let C=o.getAttribute("action");u=C?Kt(C,d):null,f=o.getAttribute("method")||$r,m=Rs(o.getAttribute("enctype"))||el,b=new FormData(o)}else if(t0(o)||n0(o)&&(o.type==="submit"||o.type==="image")){let C=o.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let A=o.getAttribute("formaction")||C.getAttribute("action");if(u=A?Kt(A,d):null,f=o.getAttribute("formmethod")||C.getAttribute("method")||$r,m=Rs(o.getAttribute("formenctype"))||Rs(C.getAttribute("enctype"))||el,b=new FormData(C,o),!l0()){let{name:p,type:E,value:k}=o;if(E==="image"){let _=p?`${p}.`:"";b.append(`${_}x`,"0"),b.append(`${_}y`,"0")}else p&&b.append(p,k)}}else{if(il(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=$r,u=null,m=el,w=o}return b&&m==="text/plain"&&(w=b,b=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:b,body:w}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ls(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function c0(o,d,f){let u=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return u.pathname==="/"?u.pathname=`_root.${f}`:d&&Kt(u.pathname,d)==="/"?u.pathname=`${d.replace(/\/$/,"")}/_root.${f}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${f}`,u}async function u0(o,d){if(o.id in d)return d[o.id];try{let f=await import(o.module);return d[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function d0(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function f0(o,d,f){let u=await Promise.all(o.map(async m=>{let b=d.routes[m.route.id];if(b){let w=await u0(b,f);return w.links?w.links():[]}return[]}));return h0(u.flat(1).filter(d0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Zf(o,d,f,u,m,b){let w=(A,p)=>f[p]?A.route.id!==f[p].route.id:!0,C=(A,p)=>f[p].pathname!==A.pathname||f[p].route.path?.endsWith("*")&&f[p].params["*"]!==A.params["*"];return b==="assets"?d.filter((A,p)=>w(A,p)||C(A,p)):b==="data"?d.filter((A,p)=>{let E=u.routes[A.route.id];if(!E||!E.hasLoader)return!1;if(w(A,p)||C(A,p))return!0;if(A.route.shouldRevalidate){let k=A.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:A.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function m0(o,d,{includeHydrateFallback:f}={}){return g0(o.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let b=[m.module];return m.clientActionModule&&(b=b.concat(m.clientActionModule)),m.clientLoaderModule&&(b=b.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(b=b.concat(m.hydrateFallbackModule)),m.imports&&(b=b.concat(m.imports)),b}).flat(1))}function g0(o){return[...new Set(o)]}function p0(o){let d={},f=Object.keys(o).sort();for(let u of f)d[u]=o[u];return d}function h0(o,d){let f=new Set;return new Set(d),o.reduce((u,m)=>{let b=JSON.stringify(p0(m));return f.has(b)||(f.add(b),u.push({key:b,link:m})),u},[])}function Dm(){let o=M.useContext(Nn);return Ls(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function x0(){let o=M.useContext(al);return Ls(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Ys=M.createContext(void 0);Ys.displayName="FrameworkContext";function Em(){let o=M.useContext(Ys);return Ls(o,"You must render this element inside a <HydratedRouter> element"),o}function b0(o,d){let f=M.useContext(Ys),[u,m]=M.useState(!1),[b,w]=M.useState(!1),{onFocus:C,onBlur:A,onMouseEnter:p,onMouseLeave:E,onTouchStart:k}=d,_=M.useRef(null);M.useEffect(()=>{if(o==="render"&&w(!0),o==="viewport"){let W=I=>{I.forEach(q=>{w(q.isIntersecting)})},Y=new IntersectionObserver(W,{threshold:.5});return _.current&&Y.observe(_.current),()=>{Y.disconnect()}}},[o]),M.useEffect(()=>{if(u){let W=setTimeout(()=>{w(!0)},100);return()=>{clearTimeout(W)}}},[u]);let G=()=>{m(!0)},F=()=>{m(!1),w(!1)};return f?o!=="intent"?[b,_,{}]:[b,_,{onFocus:zi(C,G),onBlur:zi(A,F),onMouseEnter:zi(p,G),onMouseLeave:zi(E,F),onTouchStart:zi(k,G)}]:[!1,_,{}]}function zi(o,d){return f=>{o&&o(f),f.defaultPrevented||d(f)}}function v0({page:o,...d}){let{router:f}=Dm(),u=M.useMemo(()=>hm(f.routes,o,f.basename),[f.routes,o,f.basename]);return u?M.createElement(A0,{page:o,matches:u,...d}):null}function y0(o){let{manifest:d,routeModules:f}=Em(),[u,m]=M.useState([]);return M.useEffect(()=>{let b=!1;return f0(o,d,f).then(w=>{b||m(w)}),()=>{b=!0}},[o,d,f]),u}function A0({page:o,matches:d,...f}){let u=Jt(),{manifest:m,routeModules:b}=Em(),{basename:w}=Dm(),{loaderData:C,matches:A}=x0(),p=M.useMemo(()=>Zf(o,d,A,m,u,"data"),[o,d,A,m,u]),E=M.useMemo(()=>Zf(o,d,A,m,u,"assets"),[o,d,A,m,u]),k=M.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let F=new Set,W=!1;if(d.forEach(I=>{let q=m.routes[I.route.id];!q||!q.hasLoader||(!p.some(te=>te.route.id===I.route.id)&&I.route.id in C&&b[I.route.id]?.shouldRevalidate||q.hasClientLoader?W=!0:F.add(I.route.id))}),F.size===0)return[];let Y=c0(o,w,"data");return W&&F.size>0&&Y.searchParams.set("_routes",d.filter(I=>F.has(I.route.id)).map(I=>I.route.id).join(",")),[Y.pathname+Y.search]},[w,C,u,m,p,d,o,b]),_=M.useMemo(()=>m0(E,m),[E,m]),G=y0(E);return M.createElement(M.Fragment,null,k.map(F=>M.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...f})),_.map(F=>M.createElement("link",{key:F,rel:"modulepreload",href:F,...f})),G.map(({key:F,link:W})=>M.createElement("link",{key:F,nonce:f.nonce,...W})))}function S0(...o){return d=>{o.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var Mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mm&&(window.__reactRouterVersion="7.8.2")}catch{}function w0({basename:o,children:d,window:f}){let u=M.useRef();u.current==null&&(u.current=uh({window:f,v5Compat:!0}));let m=u.current,[b,w]=M.useState({action:m.action,location:m.location}),C=M.useCallback(A=>{M.startTransition(()=>w(A))},[w]);return M.useLayoutEffect(()=>m.listen(C),[m,C]),M.createElement($h,{basename:o,children:d,location:b.location,navigationType:b.action,navigator:m})}var Rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wa=M.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:b,replace:w,state:C,target:A,to:p,preventScrollReset:E,viewTransition:k,..._},G){let{basename:F}=M.useContext(Et),W=typeof p=="string"&&Rm.test(p),Y,I=!1;if(typeof p=="string"&&W&&(Y=p,Mm))try{let je=new URL(window.location.href),et=p.startsWith("//")?new URL(je.protocol+p):new URL(p),dt=Kt(et.pathname,F);et.origin===je.origin&&dt!=null?p=dt+et.search+et.hash:I=!0}catch{Dt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=_h(p,{relative:m}),[te,Se,$]=b0(u,_),ke=M0(p,{replace:w,state:C,target:A,preventScrollReset:E,relative:m,viewTransition:k});function Ne(je){d&&d(je),je.defaultPrevented||ke(je)}let Be=M.createElement("a",{..._,...$,href:Y||q,onClick:I||b?d:Ne,ref:S0(G,Se),target:A,"data-discover":!W&&f==="render"?"true":void 0});return te&&!W?M.createElement(M.Fragment,null,Be,M.createElement(v0,{page:q})):Be});wa.displayName="Link";var j0=M.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:b,to:w,viewTransition:C,children:A,...p},E){let k=Bi(w,{relative:p.relative}),_=Jt(),G=M.useContext(al),{navigator:F,basename:W}=M.useContext(Et),Y=G!=null&&z0(k)&&C===!0,I=F.encodeLocation?F.encodeLocation(k).pathname:k.pathname,q=_.pathname,te=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;f||(q=q.toLowerCase(),te=te?te.toLowerCase():null,I=I.toLowerCase()),te&&W&&(te=Kt(te,W)||te);const Se=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let $=q===I||!m&&q.startsWith(I)&&q.charAt(Se)==="/",ke=te!=null&&(te===I||!m&&te.startsWith(I)&&te.charAt(I.length)==="/"),Ne={isActive:$,isPending:ke,isTransitioning:Y},Be=$?d:void 0,je;typeof u=="function"?je=u(Ne):je=[u,$?"active":null,ke?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let et=typeof b=="function"?b(Ne):b;return M.createElement(wa,{...p,"aria-current":Be,className:je,ref:E,style:et,to:w,viewTransition:C},typeof A=="function"?A(Ne):A)});j0.displayName="NavLink";var D0=M.forwardRef(({discover:o="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:b,method:w=$r,action:C,onSubmit:A,relative:p,preventScrollReset:E,viewTransition:k,..._},G)=>{let F=C0(),W=N0(C,{relative:p}),Y=w.toLowerCase()==="get"?"get":"post",I=typeof C=="string"&&Rm.test(C),q=te=>{if(A&&A(te),te.defaultPrevented)return;te.preventDefault();let Se=te.nativeEvent.submitter,$=Se?.getAttribute("formmethod")||w;F(Se||te.currentTarget,{fetcherKey:d,method:$,navigate:f,replace:m,state:b,relative:p,preventScrollReset:E,viewTransition:k})};return M.createElement("form",{ref:G,method:Y,action:W,onSubmit:u?A:q,..._,"data-discover":!I&&o==="render"?"true":void 0})});D0.displayName="Form";function E0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tm(o){let d=M.useContext(Nn);return Ae(d,E0(o)),d}function M0(o,{target:d,replace:f,state:u,preventScrollReset:m,relative:b,viewTransition:w}={}){let C=nl(),A=Jt(),p=Bi(o,{relative:b});return M.useCallback(E=>{if(r0(E,d)){E.preventDefault();let k=f!==void 0?f:Oi(A)===Oi(p);C(o,{replace:k,state:u,preventScrollReset:m,relative:b,viewTransition:w})}},[A,C,p,f,u,d,o,m,b,w])}var R0=0,T0=()=>`__${String(++R0)}__`;function C0(){let{router:o}=Tm("useSubmit"),{basename:d}=M.useContext(Et),f=Zh();return M.useCallback(async(u,m={})=>{let{action:b,method:w,encType:C,formData:A,body:p}=s0(u,d);if(m.navigate===!1){let E=m.fetcherKey||T0();await o.fetch(E,f,m.action||b,{preventScrollReset:m.preventScrollReset,formData:A,body:p,formMethod:m.method||w,formEncType:m.encType||C,flushSync:m.flushSync})}else await o.navigate(m.action||b,{preventScrollReset:m.preventScrollReset,formData:A,body:p,formMethod:m.method||w,formEncType:m.encType||C,replace:m.replace,state:m.state,fromRouteId:f,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,d,f])}function N0(o,{relative:d}={}){let{basename:f}=M.useContext(Et),u=M.useContext(Mt);Ae(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),b={...Bi(o||".",{relative:d})},w=Jt();if(o==null){b.search=w.search;let C=new URLSearchParams(b.search),A=C.getAll("index");if(A.some(E=>E==="")){C.delete("index"),A.filter(k=>k).forEach(k=>C.append("index",k));let E=C.toString();b.search=E?`?${E}`:""}}return(!o||o===".")&&m.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(b.pathname=b.pathname==="/"?f:Zt([f,b.pathname])),Oi(b)}function z0(o,{relative:d}={}){let f=M.useContext(ym);Ae(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Tm("useViewTransitionState"),m=Bi(o,{relative:d});if(!f.isTransitioning)return!1;let b=Kt(f.currentLocation.pathname,u)||f.currentLocation.pathname,w=Kt(f.nextLocation.pathname,u)||f.nextLocation.pathname;return tl(m.pathname,w)!=null||tl(m.pathname,b)!=null}const V=({programData:o})=>r.jsxs("div",{className:"program-template",children:[r.jsx("section",{className:"introduction-section",children:r.jsx("div",{className:"container",children:r.jsx("div",{className:"section-header",children:r.jsx("h1",{className:"program-title",children:o.title})})})}),r.jsx("section",{className:"introduction-content-section",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h2",{children:"Introduction"}),r.jsx("div",{className:"section-underline"})]}),r.jsx("div",{className:"overview-content",children:r.jsx("p",{children:o.overview})})]})}),r.jsx("section",{className:"career-section",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h2",{children:"Career Opportunities"}),r.jsx("div",{className:"section-underline"})]}),r.jsx("div",{className:"career-grid",children:o.careerOpportunities.slice(0,5).map((d,f)=>r.jsxs("div",{className:"career-card",children:[r.jsx("div",{className:"card-gradient-border"}),r.jsx("h3",{children:d})]},f))})]})}),r.jsx("section",{className:"key-areas-section",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h2",{children:"Key Areas of Study"}),r.jsx("div",{className:"section-underline"})]}),r.jsx("div",{className:"areas-grid",children:o.keyAreas.map((d,f)=>r.jsxs("div",{className:"area-card",children:[r.jsx("div",{className:"area-icon",children:"📚"}),r.jsx("h3",{children:d})]},f))})]})}),r.jsx("section",{className:"syllabus-section",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h2",{children:"Semester-wise Syllabus"}),r.jsx("div",{className:"section-underline"})]}),r.jsxs("div",{className:"semester-container",children:[r.jsxs("div",{className:"semester-module",children:[r.jsx("div",{className:"semester-header",children:r.jsx("h3",{children:"Semester 1: Foundations"})}),r.jsx("div",{className:"course-list",children:o.semester1.map((d,f)=>r.jsxs("div",{className:"course-item",children:[r.jsx("div",{className:"course-header",children:r.jsx("h4",{className:"course-title",children:d})}),r.jsxs("div",{className:"learning-objectives",children:[r.jsx("h5",{children:"Learning Objectives:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Master fundamental concepts and principles"}),r.jsx("li",{children:"Develop practical skills and techniques"}),r.jsx("li",{children:"Apply knowledge to real-world scenarios"})]})]})]},f))})]}),r.jsxs("div",{className:"semester-module",children:[r.jsx("div",{className:"semester-header",children:r.jsx("h3",{children:"Semester 2: Advanced Applications"})}),r.jsx("div",{className:"course-list",children:o.semester2.map((d,f)=>r.jsxs("div",{className:"course-item",children:[r.jsx("div",{className:"course-header",children:r.jsx("h4",{className:"course-title",children:d})}),r.jsxs("div",{className:"learning-objectives",children:[r.jsx("h5",{children:"Learning Objectives:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Advanced implementation and development"}),r.jsx("li",{children:"Industry-standard practices and tools"}),r.jsx("li",{children:"Project-based learning and assessment"})]})]})]},f))})]})]})]})}),r.jsx("section",{className:"apply-section",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"apply-content",children:[r.jsx("h2",{children:"Ready to Start Your Journey?"}),r.jsx("p",{children:"Join our program and transform your career"}),r.jsx("button",{className:"apply-button",children:"Apply Now"})]})})})]}),O0=()=>{const o={title:"Master Program in Agriculture Technology",description:"Transform traditional farming through cutting-edge technology and sustainable practices",duration:"2 Years (4 Semesters)",overview:"Our Agriculture Technology Program revolutionizes farming practices through modern technology integration, sustainable methods, and innovative agricultural solutions. Students learn precision agriculture techniques, IoT sensors for crop monitoring, and smart farming systems that optimize resource usage and increase yields.",careerOpportunities:["Agricultural Technology Specialist","Precision Agriculture Consultant","Smart Farming Manager","Agricultural Robotics Engineer","Sustainable Farming Coordinator","Agricultural Data Analyst"],keyAreas:["Drone Technology & Crop Monitoring","IoT & Smart Farming Systems","Agricultural Robotics & Automation","Precision Agriculture Techniques","Sustainable Farming Practices","Agricultural Data Analytics"],semester1:["Agricultural Science Fundamentals","Soil Science and Management","Plant Physiology and Growth","Climate and Weather Patterns","Agricultural Economics Basics","Introduction to Agricultural Technology"],semester2:["IoT in Agriculture","Drone Technology for Farming","GPS and GIS Applications","Automated Irrigation Systems","Smart Greenhouse Technology","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Wr=()=>{const o={title:"Master Program in Artificial Intelligence",description:"Master cutting-edge AI technologies and machine learning algorithms",duration:"2 Years (4 Semesters)",overview:"Our AI Program provides comprehensive training in artificial intelligence, machine learning, and deep learning technologies. Students learn to develop intelligent systems, implement AI algorithms, and create innovative solutions for real-world problems.",careerOpportunities:["AI Engineer","Machine Learning Specialist","Data Scientist","AI Research Analyst","AI Product Manager","AI Consultant"],keyAreas:["Machine Learning Algorithms","Deep Learning & Neural Networks","Natural Language Processing","Computer Vision","AI Ethics & Governance","AI System Development"],semester1:["Introduction to Artificial Intelligence","Mathematics for AI","Programming Fundamentals","Machine Learning Basics","Data Structures & Algorithms","Statistics for AI"],semester2:["Advanced Machine Learning","Deep Learning & Neural Networks","Natural Language Processing","Computer Vision","AI Ethics & Governance","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Kf=()=>{const o={title:"Master Program in Robotics Engineering",description:"Design and build intelligent robotic systems",duration:"2 Years (4 Semesters)",overview:"Our Robotics Program covers the design, development, and control of robotic systems. Students learn mechanical design, electronics, programming, control systems, and artificial intelligence for robotics.",careerOpportunities:["Robotics Engineer","Automation Engineer","Control Systems Engineer","Robotics Software Developer","Robotics Research Scientist","Robotics Consultant"],keyAreas:["Mechanical Design & Robotics","Electronics & Control Systems","Robotics Programming","Artificial Intelligence in Robotics","Robot Kinematics & Dynamics","Robotics Applications"],semester1:["Introduction to Robotics","Mechanical Design Fundamentals","Electronics Basics","Programming for Robotics","Control Systems","Basic Robotics Applications"],semester2:["Advanced Robotics Design","Control Systems Engineering","AI in Robotics","Robot Kinematics","Robotics Applications","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Jf=()=>{const o={title:"Master Program in Cybersecurity",description:"Protect digital assets and secure information systems from cyber threats",duration:"2 Years (4 Semesters)",overview:"Our Cybersecurity Program prepares students to defend against cyber threats and secure digital infrastructure. Students learn ethical hacking, network security, cryptography, and incident response to protect organizations from cyber attacks.",careerOpportunities:["Cybersecurity Analyst","Security Engineer","Penetration Tester","Security Consultant","Incident Response Specialist","Security Architect"],keyAreas:["Network Security & Defense","Ethical Hacking & Penetration Testing","Cryptography & Encryption","Incident Response & Forensics","Security Architecture","Cyber Threat Intelligence"],semester1:["Introduction to Cybersecurity","Network Security Fundamentals","Operating System Security","Cryptography Basics","Security Policies & Compliance","Basic Security Tools"],semester2:["Advanced Network Security","Ethical Hacking Techniques","Digital Forensics","Incident Response","Security Architecture Design","Capstone Project Planning"]};return r.jsx(V,{programData:o})},k0=()=>{const o={title:"Master Program in Data Science",description:"Transform data into actionable insights with advanced analytics and machine learning",duration:"2 Years (4 Semesters)",overview:"Our Data Science Program equips students with the skills to extract meaningful insights from complex data sets. Students learn statistical analysis, machine learning, data visualization, and big data technologies to solve real-world problems.",careerOpportunities:["Data Scientist","Data Analyst","Machine Learning Engineer","Business Intelligence Analyst","Data Engineer","Quantitative Analyst"],keyAreas:["Statistical Analysis & Modeling","Machine Learning Algorithms","Data Visualization & Storytelling","Big Data Technologies","Database Management","Predictive Analytics"],semester1:["Introduction to Data Science","Statistics & Probability","Programming for Data Science","Data Wrangling & Cleaning","Exploratory Data Analysis","Database Fundamentals"],semester2:["Machine Learning Fundamentals","Advanced Statistical Modeling","Data Visualization Techniques","Big Data Processing","Predictive Analytics","Capstone Project Planning"]};return r.jsx(V,{programData:o})},B0=()=>{const o={title:"Master Program in Web Development",description:"Build modern, responsive websites and web applications",duration:"2 Years (4 Semesters)",overview:"Our Web Development Program covers full-stack web development including frontend, backend, and database technologies. Students learn HTML, CSS, JavaScript, modern frameworks, and web application deployment.",careerOpportunities:["Full-Stack Web Developer","Frontend Developer","Backend Developer","Web Application Developer","Web UI/UX Developer","Web Development Consultant"],keyAreas:["Frontend Development (HTML, CSS, JavaScript)","Backend Development & APIs","Database Design & Management","Modern Web Frameworks","Web Security & Performance","Web Application Deployment"],semester1:["Introduction to Web Development","HTML & CSS Fundamentals","JavaScript Programming","Web Design Principles","Basic Backend Concepts","Web Development Tools"],semester2:["Advanced Frontend Development","Backend Development","Database Integration","Web Security","Web Application Deployment","Capstone Project Planning"]};return r.jsx(V,{programData:o})},U0=()=>{const o={title:"Master Program in Mobile App Development",description:"Create innovative mobile applications for iOS and Android",duration:"2 Years (4 Semesters)",overview:"Our Mobile App Development Program covers the complete mobile app development lifecycle. Students learn iOS and Android development, cross-platform solutions, UI/UX design, and mobile app deployment.",careerOpportunities:["Mobile App Developer","iOS Developer","Android Developer","Cross-Platform Developer","Mobile UI/UX Designer","Mobile App Consultant"],keyAreas:["iOS App Development","Android App Development","Cross-Platform Development","Mobile UI/UX Design","Mobile App Testing","App Store Deployment"],semester1:["Introduction to Mobile Development","Programming Fundamentals","Mobile UI/UX Basics","iOS Development Basics","Android Development Basics","Mobile App Design"],semester2:["Advanced iOS Development","Advanced Android Development","Cross-Platform Development","Mobile App Testing","App Store Deployment","Capstone Project Planning"]};return r.jsx(V,{programData:o})},_0=()=>{const o={title:"Master Program in Cloud Computing",description:"Master cloud infrastructure and scalable computing solutions",duration:"2 Years (4 Semesters)",overview:"Our Cloud Computing Program covers cloud infrastructure, platform services, and software solutions. Students learn AWS, Azure, Google Cloud, containerization, and building scalable cloud applications.",careerOpportunities:["Cloud Engineer","DevOps Engineer","Cloud Solutions Architect","Cloud Security Specialist","Cloud Infrastructure Manager","Cloud Consultant"],keyAreas:["Cloud Infrastructure & Services","Cloud Security & Compliance","Containerization & Orchestration","Serverless Computing","Cloud Migration & Strategy","Multi-Cloud Management"],semester1:["Introduction to Cloud Computing","Cloud Fundamentals","Virtualization Technology","Cloud Security Basics","Programming for Cloud","Basic Cloud Services"],semester2:["Advanced Cloud Services","Containerization & Kubernetes","Cloud Security & Compliance","Serverless Computing","Cloud Migration","Capstone Project Planning"]};return r.jsx(V,{programData:o})},H0=()=>{const o={title:"Master Program in Blockchain Technology",description:"Build decentralized applications and blockchain solutions",duration:"2 Years (4 Semesters)",overview:"Our Blockchain Program covers the development of decentralized applications and blockchain solutions. Students learn smart contracts, distributed systems, cryptography, and creating secure blockchain applications.",careerOpportunities:["Blockchain Developer","Smart Contract Engineer","Blockchain Solutions Architect","Cryptocurrency Developer","DeFi Specialist","Blockchain Consultant"],keyAreas:["Blockchain Fundamentals & Architecture","Smart Contract Development","Cryptography & Security","Distributed Systems","DeFi & Cryptocurrency","Blockchain Applications"],semester1:["Introduction to Blockchain","Cryptography Basics","Distributed Systems","Programming Fundamentals","Blockchain Architecture","Smart Contract Basics"],semester2:["Advanced Smart Contracts","Blockchain Development","DeFi Applications","Blockchain Security","DApp Development","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Wf=()=>{const o={title:"Master Program in Internet of Things",description:"Connect and control smart devices in the digital world",duration:"2 Years (4 Semesters)",overview:"Our IoT Program covers the development of connected devices and smart systems. Students learn sensor technology, embedded systems, cloud computing, data analytics, and creating intelligent IoT solutions.",careerOpportunities:["IoT Engineer","Embedded Systems Developer","IoT Solutions Architect","Smart Device Developer","IoT Data Analyst","IoT Security Specialist"],keyAreas:["Embedded Systems & Sensors","IoT Connectivity & Protocols","Cloud Computing & IoT","IoT Data Analytics","IoT Security & Privacy","Smart Device Development"],semester1:["Introduction to Internet of Things","Embedded Systems Basics","Sensor Technology","IoT Connectivity","Programming for IoT","Basic IoT Applications"],semester2:["Advanced IoT Development","Cloud IoT Integration","IoT Data Analytics","IoT Security","Smart Device Development","Capstone Project Planning"]};return r.jsx(V,{programData:o})},L0=()=>{const o={title:"Master Program in Game Development",description:"Create engaging games and interactive entertainment experiences",duration:"2 Years (4 Semesters)",overview:"Our Game Development Program covers the complete game development process from concept to deployment. Students learn game design, programming, 3D modeling, animation, and game engine development.",careerOpportunities:["Game Developer","Game Designer","3D Game Artist","Game Programmer","Game Producer","Game Quality Assurance Tester"],keyAreas:["Game Design & Mechanics","Game Programming & Development","3D Modeling & Animation","Game Engine Development","Game Audio & Visual Effects","Game Testing & Quality Assurance"],semester1:["Introduction to Game Development","Game Design Fundamentals","Programming for Games","3D Modeling Basics","Game Engine Overview","Basic Game Development"],semester2:["Advanced Game Programming","3D Animation & Rigging","Game Engine Development","Game Audio & Effects","Game Testing & QA","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Y0=()=>{const o={title:"Master Program in Digital Marketing",description:"Master online marketing strategies and digital brand building",duration:"2 Years (4 Semesters)",overview:"Our Digital Marketing Program covers comprehensive online marketing strategies including social media, SEO, content marketing, and analytics. Students learn to build digital brands and drive online business growth.",careerOpportunities:["Digital Marketing Manager","Social Media Specialist","SEO Specialist","Content Marketing Manager","Digital Analytics Expert","Digital Brand Strategist"],keyAreas:["Social Media Marketing","Search Engine Optimization (SEO)","Content Marketing & Strategy","Digital Analytics & Reporting","Email Marketing & Automation","Digital Brand Building"],semester1:["Introduction to Digital Marketing","Marketing Fundamentals","Social Media Marketing","Content Creation","Basic Analytics","Digital Marketing Tools"],semester2:["Advanced SEO Strategies","Content Marketing","Digital Analytics","Email Marketing","Digital Brand Strategy","Capstone Project Planning"]};return r.jsx(V,{programData:o})},q0=()=>{const o={title:"Master Program in Biotechnology",description:"Advance healthcare and industry through biological innovation",duration:"2 Years (4 Semesters)",overview:"Our Biotechnology Program covers the application of biological processes for industrial and medical purposes. Students learn genetic engineering, bioprocessing, pharmaceutical biotechnology, and sustainable biotech solutions.",careerOpportunities:["Biotechnology Engineer","Research Scientist","Pharmaceutical Biotechnologist","Biotech Product Developer","Quality Control Specialist","Biotech Consultant"],keyAreas:["Genetic Engineering & Genomics","Bioprocessing & Fermentation","Pharmaceutical Biotechnology","Agricultural Biotechnology","Biotech Quality Control","Sustainable Biotech Solutions"],semester1:["Introduction to Biotechnology","Molecular Biology","Cell Biology","Biochemistry Fundamentals","Laboratory Techniques","Biotech Safety"],semester2:["Advanced Genetic Engineering","Bioprocessing Technology","Pharmaceutical Applications","Quality Control Systems","Biotech Regulations","Capstone Project Planning"]};return r.jsx(V,{programData:o})},G0=()=>{const o={title:"Master Program in AR/VR Development",description:"Create immersive augmented and virtual reality experiences",duration:"2 Years (4 Semesters)",overview:"Our AR/VR Program covers the development of augmented and virtual reality applications. Students learn 3D modeling, game development, spatial computing, and creating immersive digital experiences.",careerOpportunities:["AR/VR Developer","3D Content Creator","Immersive Experience Designer","AR/VR Engineer","Spatial Computing Specialist","Virtual World Designer"],keyAreas:["Augmented Reality Development","Virtual Reality Applications","3D Modeling & Animation","Spatial Computing","Immersive Storytelling","AR/VR Hardware Integration"],semester1:["Introduction to AR/VR","3D Modeling Fundamentals","Game Development Basics","Programming for AR/VR","Spatial Computing","AR/VR Hardware Overview"],semester2:["Advanced AR Development","VR Application Development","3D Animation & Rigging","Spatial Audio Design","AR/VR User Experience","Capstone Project Planning"]};return r.jsx(V,{programData:o})},P0=()=>{const o={title:"Master Program in Financial Technology",description:"Transform finance with cutting-edge technology and innovation",duration:"2 Years (4 Semesters)",overview:"Our Fintech Program combines financial services with technology to create innovative financial solutions. Students learn blockchain, AI in finance, digital payments, regulatory technology, and financial innovation.",careerOpportunities:["Fintech Engineer","Blockchain Developer","Digital Payments Specialist","Regulatory Technology Expert","Financial Innovation Consultant","Fintech Product Manager"],keyAreas:["Blockchain & Cryptocurrency","Digital Payments & Banking","AI in Financial Services","Regulatory Technology","Financial Data Analytics","Financial Innovation"],semester1:["Introduction to Financial Technology","Financial Services Fundamentals","Blockchain Basics","Digital Payments","Financial Regulations","Programming for Fintech"],semester2:["Advanced Blockchain Applications","AI in Financial Services","Regulatory Technology","Financial Data Analytics","Fintech Innovation","Capstone Project Planning"]};return r.jsx(V,{programData:o})},$f=()=>{const o={title:"Master Program in Electric Vehicle Technology",description:"Design and develop next-generation electric vehicles and charging systems",duration:"2 Years (4 Semesters)",overview:"Our Electric Vehicle Program covers the design, development, and implementation of electric vehicles and charging infrastructure. Students learn battery technology, electric motors, power electronics, and sustainable transportation solutions.",careerOpportunities:["Electric Vehicle Engineer","Battery Systems Engineer","Charging Infrastructure Specialist","Power Electronics Engineer","EV Technology Consultant","Sustainable Transportation Engineer"],keyAreas:["Battery Technology & Management","Electric Motor Design","Power Electronics & Control","Charging Infrastructure","Vehicle Integration","Sustainable Transportation"],semester1:["Introduction to Electric Vehicles","Battery Technology Fundamentals","Electric Motor Basics","Power Electronics","Vehicle Dynamics","Charging Systems"],semester2:["Advanced Battery Management","Electric Motor Design","Power Control Systems","Charging Infrastructure","Vehicle Integration","Capstone Project Planning"]};return r.jsx(V,{programData:o})},F0=()=>{const o={title:"Master Program in Quantum Computing",description:"Explore the future of computing with quantum technologies",duration:"2 Years (4 Semesters)",overview:"Our Quantum Computing Program covers the principles of quantum mechanics applied to computing. Students learn quantum algorithms, quantum programming, quantum cryptography, and the development of quantum applications.",careerOpportunities:["Quantum Computing Engineer","Quantum Algorithm Developer","Quantum Software Engineer","Quantum Research Scientist","Quantum Technology Consultant","Quantum Cryptography Specialist"],keyAreas:["Quantum Mechanics Fundamentals","Quantum Algorithms & Programming","Quantum Cryptography","Quantum Error Correction","Quantum Hardware","Quantum Applications"],semester1:["Introduction to Quantum Computing","Quantum Mechanics Basics","Linear Algebra for Quantum","Quantum Gates & Circuits","Basic Quantum Algorithms","Quantum Programming Tools"],semester2:["Advanced Quantum Algorithms","Quantum Error Correction","Quantum Cryptography","Quantum Hardware","Quantum Applications","Capstone Project Planning"]};return r.jsx(V,{programData:o})},I0=()=>{const o={title:"Master Program in Network Engineering",description:"Design, build, and maintain robust network infrastructure",duration:"2 Years (4 Semesters)",overview:"Our Network Engineering Program covers the design, implementation, and management of computer networks. Students learn network protocols, security, wireless technologies, and cloud networking for enterprise environments.",careerOpportunities:["Network Engineer","Network Administrator","Network Security Specialist","Cloud Network Engineer","Network Architect","IT Infrastructure Manager"],keyAreas:["Network Design & Architecture","Network Protocols & Standards","Network Security & Firewalls","Wireless & Mobile Networks","Cloud Networking","Network Management & Monitoring"],semester1:["Introduction to Network Engineering","Network Fundamentals","Network Protocols","Network Security Basics","Network Design Principles","Basic Network Administration"],semester2:["Advanced Network Design","Network Security & Firewalls","Wireless Networks","Cloud Networking","Network Management","Capstone Project Planning"]};return r.jsx(V,{programData:o})},V0=()=>{const o={title:"Master Program in Software Engineering",description:"Build robust, scalable software systems and applications",duration:"2 Years (4 Semesters)",overview:"Our Software Engineering Program covers the complete software development lifecycle, from design to deployment. Students learn programming, software architecture, testing, DevOps, and best practices for building quality software.",careerOpportunities:["Software Engineer","Full-Stack Developer","Software Architect","DevOps Engineer","Quality Assurance Engineer","Technical Lead"],keyAreas:["Software Development Lifecycle","Programming & Algorithms","Software Architecture & Design","Testing & Quality Assurance","DevOps & Deployment","Software Project Management"],semester1:["Introduction to Software Engineering","Programming Fundamentals","Data Structures & Algorithms","Software Design Principles","Version Control Systems","Basic Testing Methods"],semester2:["Advanced Programming","Software Architecture","Database Design","Testing & Quality Assurance","DevOps Practices","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Q0=()=>{const o={title:"Master Program in Machine Learning",description:"Master algorithms and models that learn from data",duration:"2 Years (4 Semesters)",overview:"Our Machine Learning Program covers the development of algorithms and models that can learn from data. Students learn supervised and unsupervised learning, neural networks, deep learning, and real-world ML applications.",careerOpportunities:["Machine Learning Engineer","ML Research Scientist","Data Scientist","AI Engineer","ML Product Manager","ML Consultant"],keyAreas:["Supervised & Unsupervised Learning","Neural Networks & Deep Learning","Natural Language Processing","Computer Vision","ML Model Deployment","ML Ethics & Fairness"],semester1:["Introduction to Machine Learning","Mathematics for ML","Programming Fundamentals","Data Preprocessing","Supervised Learning","Model Evaluation"],semester2:["Advanced ML Algorithms","Deep Learning & Neural Networks","Unsupervised Learning","ML Model Deployment","ML Ethics & Fairness","Capstone Project Planning"]};return r.jsx(V,{programData:o})},em=()=>{const o={title:"Master Program in Data Analytics",description:"Transform raw data into actionable business insights",duration:"2 Years (4 Semesters)",overview:"Our Data Analytics Program teaches students to analyze complex data sets and extract meaningful insights. Students learn statistical analysis, data visualization, predictive modeling, and business intelligence tools.",careerOpportunities:["Data Analyst","Business Intelligence Analyst","Data Visualization Specialist","Predictive Analytics Expert","Data Strategy Consultant","Analytics Manager"],keyAreas:["Statistical Analysis & Modeling","Data Visualization & Storytelling","Predictive Analytics","Business Intelligence","Data Mining & Processing","Analytics Tools & Platforms"],semester1:["Introduction to Data Analytics","Statistics & Probability","Data Management","Programming for Analytics","Data Visualization Basics","Business Intelligence Tools"],semester2:["Advanced Statistical Analysis","Predictive Modeling","Data Mining Techniques","Advanced Visualization","Analytics Strategy","Capstone Project Planning"]};return r.jsx(V,{programData:o})},X0=()=>{const o={title:"Master Program in Database Management",description:"Master database design, administration, and optimization",duration:"2 Years (4 Semesters)",overview:"Our Database Management Program covers database design, administration, optimization, and management. Students learn SQL, database architecture, data modeling, and database security for enterprise applications.",careerOpportunities:["Database Administrator","Database Developer","Data Engineer","Database Architect","Data Analyst","Database Security Specialist"],keyAreas:["Database Design & Architecture","SQL & Database Programming","Database Administration","Data Modeling & Optimization","Database Security","Big Data Technologies"],semester1:["Introduction to Database Management","Database Fundamentals","SQL Programming","Data Modeling","Database Design","Relational Database Theory"],semester2:["Advanced Database Administration","Database Optimization","Database Security","Big Data Technologies","Cloud Databases","Capstone Project Planning"]};return r.jsx(V,{programData:o})},tm=()=>{const o={title:"Master Program in Human-Computer Interaction",description:"Design intuitive user experiences and interactive systems",duration:"2 Years (4 Semesters)",overview:"Our HCI Program focuses on designing user-friendly interfaces and interactive systems. Students learn user research, interface design, usability testing, and creating seamless human-computer interactions.",careerOpportunities:["UX/UI Designer","Interaction Designer","User Experience Researcher","Usability Specialist","Product Designer","HCI Researcher"],keyAreas:["User Experience Design","Interface Design & Prototyping","User Research & Testing","Information Architecture","Accessibility Design","Interactive Systems"],semester1:["Introduction to HCI","User Experience Fundamentals","Design Principles","User Research Methods","Prototyping Tools","Human Factors"],semester2:["Advanced UX Design","Interface Design","Usability Testing","Accessibility Design","Interactive Systems","Capstone Project Planning"]};return r.jsx(V,{programData:o})},am=()=>{const o={title:"Master Program in Mixed Reality",description:"Create immersive mixed reality experiences and applications",duration:"2 Years (4 Semesters)",overview:"Our Mixed Reality Program covers the development of applications that blend virtual and real-world elements. Students learn AR/VR development, 3D modeling, spatial computing, and creating seamless mixed reality experiences.",careerOpportunities:["Mixed Reality Developer","AR/VR Developer","3D Content Creator","Spatial Computing Specialist","Immersive Experience Designer","MR Technology Consultant"],keyAreas:["Augmented Reality Development","Virtual Reality Applications","3D Content Creation","Spatial Computing","Mixed Reality Hardware","Immersive Storytelling"],semester1:["Introduction to Mixed Reality","AR/VR Fundamentals","3D Modeling Basics","Programming for MR","Spatial Computing","MR Hardware Overview"],semester2:["Advanced AR Development","VR Application Development","3D Animation & Rigging","Spatial Audio Design","MR User Experience","Capstone Project Planning"]};return r.jsx(V,{programData:o})},nm=()=>{const o={title:"Master Program in XR Gaming",description:"Create immersive gaming experiences with extended reality technology",duration:"2 Years (4 Semesters)",overview:"Our XR Gaming Program covers virtual reality, augmented reality, and mixed reality gaming development. Students learn 3D modeling, game design, VR/AR development, and immersive storytelling for next-generation gaming.",careerOpportunities:["XR Game Developer","VR/AR Developer","3D Game Artist","Game Designer","XR Technology Specialist","Immersive Experience Designer"],keyAreas:["Virtual Reality Development","Augmented Reality Gaming","3D Modeling & Animation","Game Design & Mechanics","XR Hardware Integration","Immersive Storytelling"],semester1:["Introduction to XR Gaming","Game Development Fundamentals","3D Modeling Basics","Programming for Games","Game Design Principles","XR Technology Overview"],semester2:["Advanced VR Development","AR Gaming Applications","3D Animation & Rigging","Game Engine Integration","XR User Experience","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Z0=()=>{const o={title:"Master Program in Autonomous Vehicle Technology",description:"Develop self-driving vehicles and advanced transportation systems",duration:"2 Years (4 Semesters)",overview:"Our Autonomous Vehicle Program covers the development of self-driving cars, drones, and transportation systems. Students learn computer vision, robotics, AI algorithms, and safety systems for autonomous vehicles.",careerOpportunities:["Autonomous Vehicle Engineer","Robotics Engineer","Computer Vision Specialist","Autonomous Systems Developer","Safety Systems Engineer","Transportation Technology Specialist"],keyAreas:["Computer Vision & Perception","Robotics & Control Systems","AI & Machine Learning","Sensor Fusion & Localization","Safety & Reliability Systems","Autonomous Navigation"],semester1:["Introduction to Autonomous Vehicles","Computer Vision Fundamentals","Robotics Basics","Sensor Technology","Programming for Robotics","Control Systems"],semester2:["Advanced Computer Vision","Autonomous Navigation","Safety Systems","Sensor Fusion","Real-time Systems","Capstone Project Planning"]};return r.jsx(V,{programData:o})},K0=()=>{const o={title:"Master Program in Healthcare AI",description:"Transform healthcare with artificial intelligence and machine learning",duration:"2 Years (4 Semesters)",overview:"Our Healthcare AI Program combines artificial intelligence with healthcare to improve patient care, diagnosis, and treatment. Students learn AI applications in medical imaging, drug discovery, patient monitoring, and healthcare analytics.",careerOpportunities:["Healthcare AI Engineer","Medical AI Researcher","Clinical Data Scientist","AI Healthcare Consultant","Medical Imaging AI Specialist","Healthcare Technology Manager"],keyAreas:["AI in Medical Imaging","Healthcare Data Analytics","Drug Discovery AI","Patient Monitoring Systems","Clinical Decision Support","Healthcare AI Ethics"],semester1:["Introduction to Healthcare AI","Healthcare Fundamentals","AI & Machine Learning Basics","Medical Data Management","Healthcare Systems","AI Ethics in Healthcare"],semester2:["Advanced Healthcare AI","Medical Imaging AI","Clinical Decision Support","Healthcare Analytics","AI Implementation","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Ts=()=>{const o={title:"Master Program in AI Business",description:"Transform business operations with artificial intelligence and data-driven strategies",duration:"2 Years (4 Semesters)",overview:"Our AI Business Program combines artificial intelligence with business strategy to create innovative business solutions. Students learn AI applications in business, data analytics, automation, and strategic decision-making.",careerOpportunities:["AI Business Analyst","Business Intelligence Manager","AI Strategy Consultant","Data-Driven Business Manager","AI Product Manager","Business Automation Specialist"],keyAreas:["AI in Business Strategy","Data Analytics & Business Intelligence","Business Process Automation","AI-Powered Decision Making","Digital Transformation","AI Business Ethics"],semester1:["Introduction to AI in Business","Business Fundamentals","Data Analytics Basics","AI Technology Overview","Business Strategy","Digital Business Models"],semester2:["Advanced AI Business Applications","Business Process Automation","AI Strategy Development","Digital Transformation","AI Business Ethics","Capstone Project Planning"]};return r.jsx(V,{programData:o})},im=()=>{const o={title:"Master Program in AI Cybersecurity",description:"Protect systems using artificial intelligence and advanced security techniques",duration:"2 Years (4 Semesters)",overview:"Our AI Cybersecurity Program combines artificial intelligence with cybersecurity to create intelligent defense systems. Students learn AI-powered threat detection, automated security responses, and advanced cybersecurity techniques.",careerOpportunities:["AI Cybersecurity Engineer","Security AI Specialist","Threat Intelligence Analyst","AI Security Researcher","Cybersecurity Architect","Security Automation Engineer"],keyAreas:["AI-Powered Threat Detection","Machine Learning Security","Automated Security Response","Cybersecurity Fundamentals","AI Security Ethics","Advanced Security Analytics"],semester1:["Introduction to AI Cybersecurity","Cybersecurity Fundamentals","AI & Machine Learning Basics","Network Security","Programming for Security","Security Tools & Techniques"],semester2:["AI-Powered Security Systems","Advanced Threat Detection","Security Automation","AI Security Ethics","Incident Response AI","Capstone Project Planning"]};return r.jsx(V,{programData:o})},rm=()=>{const o={title:"Master Program in AI & Blockchain",description:"Combine artificial intelligence with blockchain technology for innovative solutions",duration:"2 Years (4 Semesters)",overview:"Our AI & Blockchain Program integrates artificial intelligence with blockchain technology to create innovative decentralized solutions. Students learn smart contracts, AI algorithms, distributed systems, and their applications in finance, healthcare, and beyond.",careerOpportunities:["AI Blockchain Developer","Smart Contract Engineer","Blockchain Solutions Architect","AI Blockchain Researcher","DeFi Technology Specialist","Blockchain AI Consultant"],keyAreas:["Artificial Intelligence & Machine Learning","Blockchain Technology & Cryptography","Smart Contracts & DApps","Distributed Systems & Consensus","AI-Blockchain Integration","Decentralized Finance (DeFi)"],semester1:["Introduction to AI & Blockchain","Blockchain Fundamentals","Cryptography Basics","Programming Fundamentals","Data Structures & Algorithms","Smart Contract Basics"],semester2:["Advanced AI Algorithms","Blockchain Development","Smart Contract Security","AI-Blockchain Integration","DeFi Applications","Capstone Project Planning"]};return r.jsx(V,{programData:o})},lm=()=>{const o={title:"Master Program in Agriculture Robotics",description:"Automate farming operations with cutting-edge robotics and AI technology",duration:"2 Years (4 Semesters)",overview:"Our Agriculture Robotics Program combines robotics engineering with agricultural science to create intelligent farming systems. Students learn to design, build, and program robots for planting, harvesting, monitoring, and maintaining crops.",careerOpportunities:["Agricultural Robotics Engineer","Automation Specialist","Robotics System Designer","Precision Agriculture Engineer","Agricultural Technology Consultant","Robotics Maintenance Technician"],keyAreas:["Robotics Engineering & Design","Agricultural Automation Systems","Computer Vision & AI","Precision Agriculture Technology","Sensor Integration","Robotic Control Systems"],semester1:["Introduction to Agricultural Robotics","Robotics Fundamentals","Agricultural Science Basics","Programming for Robotics","Mechanical Design Principles","Sensor Technology"],semester2:["Advanced Robotics Systems","Computer Vision & AI","Agricultural Automation","Precision Agriculture","Robotic Control Systems","Capstone Project Planning"]};return r.jsx(V,{programData:o})},om=()=>{const o={title:"Master Program in Agri-Entrepreneurship",description:"Build successful agricultural businesses with innovative farming solutions",duration:"2 Years (4 Semesters)",overview:"Our Agri-Entrepreneurship Program combines agricultural knowledge with business acumen to create successful farming entrepreneurs. Students learn sustainable farming practices, business management, marketing strategies, and innovative agricultural solutions.",careerOpportunities:["Agricultural Entrepreneur","Farm Business Manager","Agricultural Consultant","Agri-Tech Startup Founder","Sustainable Farming Specialist","Agricultural Business Analyst"],keyAreas:["Agricultural Business Management","Sustainable Farming Practices","Marketing & Sales Strategies","Financial Planning & Management","Innovation in Agriculture","Supply Chain Management"],semester1:["Introduction to Agri-Entrepreneurship","Agricultural Business Fundamentals","Sustainable Farming Methods","Business Planning & Strategy","Financial Management Basics","Market Research Methods"],semester2:["Advanced Business Strategies","Agricultural Marketing","Innovation & Technology","Supply Chain Management","Risk Management","Capstone Project Planning"]};return r.jsx(V,{programData:o})},sm=()=>{const o={title:"Master Program in Precision Agriculture",description:"Advanced technology-driven agricultural practices for sustainable farming",duration:"2 Years (4 Semesters)",overview:"This comprehensive program combines cutting-edge technology with traditional agricultural knowledge to prepare students for the future of farming. You'll learn to use drones, sensors, AI, and data analytics to optimize crop production, reduce resource waste, and increase agricultural efficiency.",careerOpportunities:["Precision Agriculture Specialist","Agricultural Technology Consultant","Farm Management Analyst","Drone Technology Expert","Agricultural Data Scientist","Smart Farming Coordinator"],keyAreas:["Drone Technology & Remote Sensing","Soil & Crop Monitoring Systems","Data Analytics & AI in Agriculture","Sustainable Resource Management","Agricultural Robotics & Automation","Climate-Smart Farming Practices"],semester1:["Introduction to Precision Agriculture","Agricultural Technology Fundamentals","Soil Science & Management","Crop Physiology & Monitoring","Basic Data Analysis for Agriculture","Agricultural Drone Operations"],semester2:["Advanced Remote Sensing Techniques","AI & Machine Learning in Agriculture","Precision Irrigation Systems","Crop Modeling & Prediction","Agricultural Robotics & Automation","Capstone Project Planning"]};return r.jsx(V,{programData:o})},Cs=()=>{const o={title:"Master Program in Hydroponics & Vertical Farming",description:"Learn sustainable farming techniques without soil in controlled environments",duration:"2 Years (4 Semesters)",overview:"Our Hydroponics & Vertical Farming Program revolutionizes agriculture through innovative soilless farming techniques and vertical growing systems. Students learn to implement hydroponic systems, utilize vertical farming technologies, and develop sustainable agricultural solutions for urban environments.",careerOpportunities:["Hydroponic Farm Manager","Urban Agriculture Specialist","Agricultural Technology Consultant","Vertical Farming Engineer","Sustainable Agriculture Coordinator","Hydroponic System Designer"],keyAreas:["Hydroponic Systems & Methods","Vertical Farming Technologies","Nutrient Solution Management","Climate Control Systems","Urban Agriculture Principles","Automated Growing Systems"],semester1:["Plant Physiology Fundamentals","Hydroponic System Types","Nutrient Solution Basics","Environmental Control Systems","Urban Agriculture Principles","Basic Hydroponic Operations"],semester2:["Advanced Nutrient Management","Vertical Stacking Technologies","Climate Control Technology","Automation and IoT Systems","Disease Prevention & Control","Capstone Project Planning"]};return r.jsx(V,{programData:o})},cm=()=>{const o={title:"Master Program in Fermentation Technology",description:"Master the science and technology of industrial fermentation processes",duration:"2 Years (4 Semesters)",overview:"Our Fermentation Technology Program covers the scientific principles and industrial applications of fermentation processes. Students learn to design, operate, and optimize fermentation systems for food, pharmaceutical, and biofuel production.",careerOpportunities:["Fermentation Engineer","Biotechnology Specialist","Food Technology Engineer","Pharmaceutical Process Engineer","Biofuel Production Specialist","Quality Control Manager"],keyAreas:["Fermentation Science & Microbiology","Industrial Fermentation Processes","Bioreactor Design & Operation","Downstream Processing","Quality Control & Assurance","Scale-up & Optimization"],semester1:["Introduction to Fermentation Technology","Microbiology Fundamentals","Biochemistry Basics","Fermentation Kinetics","Bioreactor Fundamentals","Process Control Basics"],semester2:["Advanced Fermentation Processes","Industrial Scale Operations","Downstream Processing","Quality Control Systems","Process Optimization","Capstone Project Planning"]};return r.jsx(V,{programData:o})},um=()=>{const o={title:"Master Program in Vaccine Technology",description:"Develop life-saving vaccines and advance immunization science",duration:"2 Years (4 Semesters)",overview:"Our Vaccine Technology Program covers the development, production, and distribution of vaccines. Students learn immunology, vaccine design, manufacturing processes, and regulatory requirements for vaccine development.",careerOpportunities:["Vaccine Development Scientist","Immunology Researcher","Vaccine Manufacturing Specialist","Clinical Research Associate","Regulatory Affairs Specialist","Public Health Advisor"],keyAreas:["Immunology & Vaccine Science","Vaccine Development & Design","Manufacturing & Quality Control","Clinical Trials & Safety","Regulatory Compliance","Public Health Applications"],semester1:["Introduction to Vaccine Technology","Immunology Fundamentals","Microbiology Basics","Vaccine Development Principles","Laboratory Safety","Research Methods"],semester2:["Advanced Vaccine Development","Manufacturing Processes","Clinical Trial Design","Quality Control Systems","Regulatory Requirements","Capstone Project Planning"]};return r.jsx(V,{programData:o})},dm=()=>{const o={title:"Master Program in Medical Coding",description:"Master healthcare coding systems and medical billing procedures",duration:"2 Years (4 Semesters)",overview:"Our Medical Coding Program provides comprehensive training in healthcare coding systems, medical terminology, and billing procedures. Students learn to accurately code medical procedures and diagnoses for healthcare reimbursement.",careerOpportunities:["Medical Coder","Medical Biller","Health Information Specialist","Coding Auditor","Healthcare Administrator","Medical Records Manager"],keyAreas:["Medical Coding Systems (ICD, CPT, HCPCS)","Medical Terminology & Anatomy","Healthcare Billing Procedures","Health Information Management","Coding Compliance & Ethics","Healthcare Reimbursement"],semester1:["Introduction to Medical Coding","Medical Terminology","Human Anatomy & Physiology","Basic Coding Systems","Healthcare Documentation","Medical Ethics & Compliance"],semester2:["Advanced Coding Systems","Specialty Area Coding","Healthcare Billing","Coding Auditing","Health Information Management","Capstone Project Planning"]};return r.jsx(V,{programData:o})},fm=()=>{const o={title:"Master Program in Intellectual Property Law",description:"Navigate the complex world of IP law and protect innovative ideas",duration:"2 Years (4 Semesters)",overview:"Our IP Law Program provides comprehensive training in intellectual property law, patent law, copyright, trademarks, and trade secrets. Students learn to protect innovations, navigate legal frameworks, and advise on IP strategy.",careerOpportunities:["IP Attorney","Patent Lawyer","IP Consultant","Legal Advisor","IP Strategy Manager","Technology Transfer Specialist"],keyAreas:["Patent Law & Applications","Copyright & Trademark Law","Trade Secret Protection","IP Litigation & Enforcement","International IP Law","IP Strategy & Management"],semester1:["Introduction to Intellectual Property Law","Patent Law Fundamentals","Copyright Law Basics","Trademark Law Principles","Legal Research Methods","IP Law Framework"],semester2:["Advanced Patent Law","IP Litigation & Enforcement","International IP Law","IP Strategy & Management","Technology Transfer","Capstone Project Planning"]};return r.jsx(V,{programData:o})},J0=()=>{const o={title:"Master Program in Regulatory Affairs",description:"Navigate complex regulatory frameworks in healthcare and life sciences",duration:"2 Years (4 Semesters)",overview:"Our Regulatory Affairs Program prepares students to navigate complex regulatory frameworks in healthcare, pharmaceuticals, and life sciences. Students learn regulatory compliance, documentation, and approval processes for medical products.",careerOpportunities:["Regulatory Affairs Specialist","Regulatory Compliance Manager","Regulatory Affairs Consultant","Quality Assurance Manager","Regulatory Policy Analyst","Clinical Research Coordinator"],keyAreas:["Regulatory Framework & Compliance","Drug & Device Approval Processes","Clinical Trial Regulations","Quality Assurance & Control","Regulatory Documentation","International Regulatory Standards"],semester1:["Introduction to Regulatory Affairs","Regulatory Framework Basics","Healthcare Law & Policy","Quality Systems Fundamentals","Documentation Standards","Regulatory Compliance Basics"],semester2:["Advanced Regulatory Processes","Clinical Trial Regulations","International Standards","Regulatory Strategy","Quality Assurance Systems","Capstone Project Planning"]};return r.jsx(V,{programData:o})},W0=()=>{const o={title:"Master Program in Agriculture Drones",description:"Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring.",duration:"12 Months",overview:"Our comprehensive Agriculture Drones program equips you with the skills to operate and manage drone technology for modern farming. Learn advanced flight planning, multispectral imaging, thermal sensing, and data analysis techniques that revolutionize agricultural practices.",careerOpportunities:["Drone Pilot for Agriculture","Precision Agriculture Specialist","Agricultural Data Analyst","Drone Technology Consultant","Crop Monitoring Specialist"],keyAreas:["Drone Flight Planning & Operations","Multispectral Imaging & Analysis","Thermal Sensing & Crop Health","Agricultural Data Processing","Drone Maintenance & Safety","Regulatory Compliance"],semester1:["Introduction to Agricultural Drones","Drone Flight Principles & Safety","Basic Flight Planning & Operations","Multispectral Camera Systems","Thermal Imaging Fundamentals","Agricultural Applications Overview"],semester2:["Advanced Flight Planning","Data Collection & Processing","Crop Health Analysis","Precision Agriculture Integration","Drone Maintenance & Troubleshooting","Capstone Project Implementation"]};return r.jsx(V,{programData:o})},$0=()=>{const o={title:"Master Program in Advanced Technologies in Agriculture",description:"Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement.",duration:"12 Months",overview:"Our Advanced Technologies in Agriculture program introduces you to the latest innovations revolutionizing farming practices. Learn about blockchain technology for supply chain transparency, IoT systems for smart farming, and biotechnology applications for crop improvement.",careerOpportunities:["Agricultural Technology Specialist","Smart Farming Consultant","Blockchain Agriculture Expert","IoT Agriculture Developer","Agricultural Biotechnology Researcher"],keyAreas:["Blockchain in Agriculture","IoT & Smart Farming Systems","Agricultural Biotechnology","Supply Chain Transparency","Precision Agriculture Technologies","Sustainable Farming Solutions"],semester1:["Introduction to Agricultural Technologies","Blockchain Fundamentals & Applications","IoT Systems in Agriculture","Smart Farming Infrastructure","Agricultural Data Management","Technology Integration Strategies"],semester2:["Advanced Blockchain Applications","IoT Development & Deployment","Biotechnology in Crop Improvement","Supply Chain Management","Technology Implementation","Capstone Project"]};return r.jsx(V,{programData:o})},ex=()=>{const o={title:"Master Program in Generative AI",description:"Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation.",duration:"12 Months",overview:"Our Generative AI program teaches you to create sophisticated AI models that generate text, images, and multimedia content. Master natural language processing, computer vision, and creative AI applications that are transforming content creation across industries.",careerOpportunities:["Generative AI Engineer","AI Content Creator","Natural Language Processing Specialist","Computer Vision Engineer","Creative AI Developer"],keyAreas:["Natural Language Processing","Computer Vision & Image Generation","Text Generation Models","Creative AI Applications","Model Training & Optimization","Ethical AI Development"],semester1:["Introduction to Generative AI","Natural Language Processing Fundamentals","Text Generation Models","Computer Vision Basics","Image Generation Techniques","AI Model Architecture"],semester2:["Advanced Language Models","Multimodal AI Generation","Creative AI Applications","Model Training & Fine-tuning","Ethical Considerations","Capstone Project"]};return r.jsx(V,{programData:o})},tx=()=>{const o={title:"Master Program in AI & Biological Sciences",description:"Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development.",duration:"12 Months",overview:"Our AI & Biological Sciences program combines artificial intelligence with biological research to accelerate drug discovery and genetic analysis. Learn bioinformatics algorithms, protein structure prediction, and AI-driven drug screening techniques that are revolutionizing pharmaceutical development.",careerOpportunities:["Bioinformatics Specialist","AI Drug Discovery Researcher","Computational Biologist","Pharmaceutical AI Developer","Genetic Data Analyst"],keyAreas:["Bioinformatics Algorithms","Protein Structure Prediction","AI-Driven Drug Screening","Genetic Data Analysis","Machine Learning in Biology","Computational Drug Design"],semester1:["Introduction to AI in Biology","Bioinformatics Fundamentals","Machine Learning for Biology","Protein Structure Analysis","Genetic Data Processing","AI Tools in Research"],semester2:["Advanced Bioinformatics","Drug Discovery Algorithms","Protein Folding Prediction","AI Drug Screening","Computational Biology","Capstone Research Project"]};return r.jsx(V,{programData:o})},ax=()=>{const o={title:"Master Program in AI & Law",description:"Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies.",duration:"12 Months",overview:"Our AI & Law program examines the intersection of artificial intelligence and legal practice. Learn about legal tech tools, AI ethics frameworks, and regulatory compliance requirements for emerging AI technologies that are transforming the legal industry.",careerOpportunities:["Legal Tech Specialist","AI Ethics Consultant","Technology Lawyer","AI Regulatory Expert","Legal AI Developer"],keyAreas:["AI Ethics & Governance","Legal Technology Tools","AI Regulatory Compliance","Intellectual Property in AI","Data Privacy & AI Law","Legal AI Applications"],semester1:["Introduction to AI & Law","AI Ethics & Governance","Legal Technology Fundamentals","AI Regulatory Frameworks","Data Privacy Laws","Legal AI Tools"],semester2:["Advanced AI Law Topics","AI Intellectual Property","Regulatory Compliance","Legal AI Development","AI in Legal Practice","Capstone Project"]};return r.jsx(V,{programData:o})},nx=()=>{const o={title:"Master Program in AI & Marketing",description:"Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns.",duration:"12 Months",overview:"Our AI & Marketing program teaches you to harness artificial intelligence for advanced marketing strategies. Learn predictive customer analytics, automated marketing workflows, and AI-driven content generation that create personalized, effective marketing campaigns.",careerOpportunities:["AI Marketing Specialist","Marketing Data Analyst","Customer Analytics Expert","Marketing Automation Specialist","AI Content Strategist"],keyAreas:["Predictive Customer Analytics","Marketing Automation","AI Content Generation","Customer Segmentation","Campaign Optimization","Marketing AI Tools"],semester1:["Introduction to AI in Marketing","Customer Analytics Fundamentals","Marketing Data Processing","AI Tools for Marketing","Customer Segmentation","Marketing Automation Basics"],semester2:["Advanced Customer Analytics","AI Content Generation","Campaign Optimization","Predictive Marketing","Marketing AI Strategy","Capstone Project"]};return r.jsx(V,{programData:o})},ix=()=>{const o={title:"Master Program in Clinical Research & Regulatory Affairs",description:"Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets.",duration:"12 Months",overview:"Our Clinical Research & Regulatory Affairs program provides comprehensive training in clinical trial management and pharmaceutical regulations. Learn clinical trial design, regulatory compliance, and drug development processes that meet global pharmaceutical market requirements.",careerOpportunities:["Clinical Research Associate","Regulatory Affairs Specialist","Clinical Trial Manager","Pharmaceutical Compliance Officer","Drug Development Coordinator"],keyAreas:["Clinical Trial Design","Regulatory Compliance","Drug Development Processes","Clinical Data Management","Pharmaceutical Regulations","Global Market Requirements"],semester1:["Introduction to Clinical Research","Clinical Trial Fundamentals","Regulatory Framework Basics","Drug Development Process","Clinical Data Collection","Ethics in Clinical Research"],semester2:["Advanced Clinical Trial Design","Regulatory Compliance","Global Market Regulations","Clinical Data Analysis","Quality Assurance","Capstone Project"]};return r.jsx(V,{programData:o})},rx=()=>{const o={title:"Master Program in Digital Forensics",description:"Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution.",duration:"12 Months",overview:"Our Digital Forensics program prepares you for cybercrime investigation and digital evidence recovery. Learn forensic tools, evidence preservation techniques, and legal procedures essential for successful digital crime investigation and prosecution.",careerOpportunities:["Digital Forensics Investigator","Cybercrime Analyst","Digital Evidence Specialist","Computer Forensics Expert","Cybersecurity Consultant"],keyAreas:["Digital Evidence Collection","Forensic Tools & Techniques","Evidence Preservation","Cybercrime Investigation","Legal Procedures","Digital Forensics Analysis"],semester1:["Introduction to Digital Forensics","Digital Evidence Fundamentals","Forensic Tools & Software","Evidence Collection Methods","Data Recovery Techniques","Basic Investigation Procedures"],semester2:["Advanced Forensic Analysis","Cybercrime Investigation","Evidence Preservation","Legal & Ethical Considerations","Case Study Analysis","Capstone Investigation Project"]};return r.jsx(V,{programData:o})},lx=()=>{const o={title:"Master Program in Bioentrepreneurship",description:"Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies.",duration:"12 Months",overview:"Our Bioentrepreneurship program combines biotechnology expertise with entrepreneurial skills to help you launch successful life science ventures. Learn biotech business models, funding strategies, and commercialization pathways for innovative technologies.",careerOpportunities:["Biotech Startup Founder","Life Sciences Business Developer","Biotech Investment Analyst","Technology Transfer Specialist","Biotech Strategy Consultant"],keyAreas:["Biotech Business Models","Funding & Investment Strategies","Technology Commercialization","Intellectual Property Management","Market Analysis & Strategy","Biotech Innovation Management"],semester1:["Introduction to Bioentrepreneurship","Biotech Business Fundamentals","Market Analysis & Strategy","Intellectual Property Basics","Funding Sources & Strategies","Business Model Development"],semester2:["Advanced Business Strategy","Technology Commercialization","Investment & Partnership","Regulatory & Compliance","Scaling Biotech Ventures","Capstone Business Plan"]};return r.jsx(V,{programData:o})},ox=()=>{const o={title:"Master Program in AI & Designing Technology",description:"Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products.",duration:"12 Months",overview:"Our AI & Designing Technology program integrates artificial intelligence with design processes to create innovative digital products. Learn AI-powered design tools, automated layout generation, and intelligent user experience optimization that revolutionize modern design practices.",careerOpportunities:["AI Design Specialist","UX/UI Designer","Product Design Engineer","Design Technology Consultant","Creative AI Developer"],keyAreas:["AI-Powered Design Tools","Automated Layout Generation","User Experience Optimization","Product Design Integration","Design AI Applications","Creative Technology"],semester1:["Introduction to AI in Design","Design Fundamentals & Principles","AI Design Tools & Software","User Experience Basics","Design Automation","AI Design Applications"],semester2:["Advanced AI Design Techniques","Automated Layout Systems","UX Optimization with AI","Product Design Integration","Design AI Strategy","Capstone Design Project"]};return r.jsx(V,{programData:o})},sx=()=>{const o={title:"Master Program in AI & Arts",description:"Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression.",duration:"12 Months",overview:"Our AI & Arts program explores the fascinating intersection of artificial intelligence and creative expression. Learn generative art algorithms, AI-assisted composition, and digital creativity tools that open new possibilities for innovative artistic creation.",careerOpportunities:["AI Artist","Digital Art Creator","Creative AI Developer","AI Art Consultant","Digital Media Artist"],keyAreas:["Generative Art Algorithms","AI-Assisted Composition","Digital Creativity Tools","Creative AI Applications","Artistic AI Development","Digital Media Creation"],semester1:["Introduction to AI & Arts","Digital Art Fundamentals","Generative Art Basics","AI Composition Tools","Creative AI Software","Digital Media Creation"],semester2:["Advanced Generative Art","AI-Assisted Creativity","Interactive Art Systems","Creative AI Development","AI Art Applications","Capstone Art Project"]};return r.jsx(V,{programData:o})},cx=()=>{const o={title:"Reality Architect: Master of AR/VR/XR Development",description:"Design and develop cutting-edge augmented, virtual, and extended reality experiences. Master 3D modeling, programming, and UX design for immersive technologies.",duration:"12 Months",overview:"Our comprehensive AR/VR/XR Development program equips you with the skills to create immersive digital experiences. Learn 3D modeling, programming for game engines, user experience design, and development frameworks that power the future of interactive technology.",careerOpportunities:["AR/VR Developer","3D Modeler & Animator","UX Designer for Immersive Tech","Game Engine Programmer","XR Experience Designer"],keyAreas:["3D Modeling & Animation","Programming for AR/VR","User Experience Design","Game Engine Development","AR/VR Hardware Integration","Immersive Content Creation"],semester1:["Introduction to AR/VR Technologies","3D Modeling Fundamentals","Programming for Immersive Tech","User Experience Design Principles","AR/VR Development Frameworks"],semester2:["Advanced 3D Animation","Game Engine Programming","AR/VR Hardware & Sensors","Immersive Content Creation","Capstone Project Development"]};return r.jsx(V,{programData:o})},ux=()=>{const o={title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions.",duration:"12 Months",overview:"Our Virtual & Augmented Reality Engineering program positions you as a Virtual Vanguard, engineering advanced VR/AR systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge solutions.",careerOpportunities:["VR/AR Engineer","Immersive Systems Developer","Hardware Integration Specialist","VR/AR Software Developer","Immersive Technology Engineer"],keyAreas:["Hardware Integration","Software Development","User Interface Design","VR/AR Systems Engineering","Immersive Technology","System Architecture"],semester1:["Introduction to VR/AR Engineering","Hardware Fundamentals","Software Development Basics","User Interface Design","VR/AR System Architecture","Engineering Principles"],semester2:["Advanced Hardware Integration","Software Development","System Optimization","User Experience Design","VR/AR Applications","Capstone Engineering Project"]};return r.jsx(V,{programData:o})},dx=()=>{const{programSlug:o}=Lh(),d={"master-program-in-precision-agriculture":sm,"master-program-in-agriculture-drones":W0,"master-program-in-hydroponics-vertical-farming":Cs,"master-program-in-hydroponics--vertical-farming":Cs,"master-program-in-ai-ml-in-agriculture":Wr,"master-program-in-agriculture-robotics":lm,"master-program-in-advanced-technologies-in-agriculture":$0,"master-program-in-agri-entrepreneurship":om,"master-program-in-ai-robotics":Kf,"master-program-in-generative-ai":ex,"master-program-in-ai-blockchain":rm,"master-program-in-ai-data-analytics":em,"master-program-in-ai-biological-sciences":tx,"master-program-in-ai-cybersecurity-systems":im,"master-program-in-cybersecurity":Jf,"master-program-in-ai-business":Ts,"master-program-in-ai-management-studies":Ts,"master-program-in-ai-law":ax,"master-program-in-ip-law":fm,"master-program-in-ai-marketing":nx,"master-program-in-clinical-research-regulatory-affairs":ix,"master-program-in-medical-coding":dm,"master-program-in-digital-forensics":rx,"master-program-in-industrial-fermentation-technology":cm,"master-program-in-vaccine-technology":um,"master-program-in-bioentrepreneurship":lx,"master-program-in-ai-designing-technology":ox,"master-program-in-ai-arts":sx,"reality-architect-master-of-arvrxr-development":cx,"virtual-vanguard-master-in-virtual-augmented-reality-engineering":ux,"game-changer-master-program-in-xr-gaming":nm,"master-program-in-ar-and-mixed-reality":am,"master-program-in-electric-vehicle-technology":$f,"master-program-in-iot-and-embedded-systems":Wf,"master-program-in-human-computer-interaction":tm,"doctoral-programs":Wr,"postdoctoral-programs":Wr,agriculture:O0,ai:Wr,robotics:Kf,cybersecurity:Jf,"data-science":k0,"web-development":B0,"mobile-app-development":U0,"cloud-computing":_0,blockchain:H0,iot:Wf,"game-development":L0,"digital-marketing":Y0,biotechnology:q0,"ar-vr":G0,fintech:P0,"electric-vehicle":$f,"quantum-computing":F0,"network-engineering":I0,"software-engineering":V0,"machine-learning":Q0,"data-analytics":em,"database-management":X0,"human-computer-interaction":tm,"mixed-reality":am,"xr-gaming":nm,"autonomous-vehicle":Z0,"healthcare-ai":K0,"ai-business":Ts,"ai-cybersecurity":im,"ai-blockchain":rm,"agriculture-robotics":lm,"agri-entrepreneurship":om,"precision-agriculture":sm,"hydroponics-farming":Cs,"fermentation-technology":cm,"vaccine-technology":um,"medical-coding":dm,"ip-law":fm,"regulatory-affairs":J0},f=d[o||""];return f?r.jsx(f,{}):r.jsx("div",{className:"program-details-page",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"error-state",children:[r.jsx("h2",{children:"Program Not Found"}),r.jsxs("p",{children:['The requested program "',o,'" could not be found. Please go back to the programs page and try again.']}),r.jsxs("p",{children:["Available programs: ",Object.keys(d).slice(0,10).join(", "),"..."]})]})})})},fx=()=>r.jsx("style",{children:`
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
        background: white;
        color: #333;
        padding: 15px 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border-bottom: 1px solid #e5e7eb;
        backdrop-filter: none;
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
        transition: all 0.3s ease;
        padding: 8px 16px;
        border-radius: 12px;
    }
    
    .logo-container:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.15);
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
        color: #495057;
        text-decoration: none;
        font-weight: 600;
        font-size: 15px;
        transition: all 0.3s ease;
        cursor: pointer;
        background: none;
        border: none;
        font-family: inherit;
        padding: 12px 20px;
        margin: 0;
        border-radius: 25px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .header nav ul li a:hover,
    .header nav ul li a.active,
    .header nav ul li .nav-link:hover,
    .header nav ul li .nav-link.active {
        color: #D32F2F;
        background: rgba(211, 47, 47, 0.08);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(211, 47, 47, 0.15);
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
        justify-items: stretch;
        align-items: start;
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
        min-height: 500px;
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
        justify-content: space-between;
        height: 100%;
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
        justify-content: space-between;
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
    
    /* Additional program card alignment fixes */
    .program-cards-grid {
        align-items: stretch;
    }
    
    .program-card {
        align-self: stretch;
    }
    
    .program-card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .program-card-description {
        flex: 1;
        margin-bottom: 20px;
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
        padding: 20px 30px;
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
        padding: 20px 30px;
    }

    .modal-section {
        margin-bottom: 25px;
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
        margin-bottom: 20px;
    }

    .semester-section h4 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #D32F2F;
        margin: 0 0 15px 0;
        padding-bottom: 8px;
        border-bottom: 2px solid #e2e8f0;
        font-family: 'Poppins', sans-serif;
    }

    .course-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 15px;
    }

    .course-card {
        background: #f8f9fa;
        padding: 15px;
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
        padding: 20px 30px;
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
        
        .program-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            justify-items: stretch;
        }
        
        .program-card {
            min-height: 450px;
        }
    }

    /* New Modal Design - Matching Reference Images */
    .modal-header-banner {
        background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%);
        color: white;
        padding: 40px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .modal-header-banner::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" x="0" y="0" width="100" height="100"/></svg>');
        opacity: 0.3;
    }

    .modal-header-banner h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0 0 15px 0;
        font-family: 'Poppins', sans-serif;
        position: relative;
        z-index: 1;
    }

    .modal-header-banner p {
        font-size: 1.2rem;
        margin: 0;
        color: #A5D6A7;
        font-weight: 500;
        position: relative;
        z-index: 1;
    }

    /* Navigation Bar */
    .modal-navigation {
        background: white;
        padding: 20px 40px;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #e0e0e0;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 10px 20px;
        border-radius: 10px;
    }

    .nav-item:hover {
        background: #f5f5f5;
        transform: translateY(-2px);
    }

    .nav-item i {
        font-size: 1.5rem;
        color: #2E7D32;
    }

    .nav-item span {
        font-size: 0.9rem;
        font-weight: 600;
        color: #2E7D32;
    }

    /* Content */
    .modal-content {
        padding: 40px;
    }

    .content-section {
        margin-bottom: 50px;
    }

    .section-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
    }

    .section-icon {
        width: 60px;
        height: 60px;
        background: #E8F5E8;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .section-icon i {
        font-size: 1.8rem;
        color: #2E7D32;
    }

    .section-header h2 {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        color: #1B5E20;
        font-family: 'Poppins', sans-serif;
    }

    .overview-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #333;
        margin: 0 0 30px 0;
        max-width: 100%;
    }

    /* Statistics Grid */
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 30px;
    }

    .stat-card {
        background: white;
        padding: 25px 20px;
        border-radius: 15px;
        text-align: center;
        border: 2px solid #4CAF50;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .stat-card:hover {
        transform: translateY(-5px);
        border-color: #2E7D32;
        box-shadow: 0 15px 35px rgba(76, 175, 80, 0.2);
    }

    .stat-value {
        font-size: 3rem;
        font-weight: 800;
        color: #4CAF50;
        margin-bottom: 10px;
        font-family: 'Poppins', sans-serif;
    }

    .stat-label {
        font-size: 1rem;
        color: #666;
        font-weight: 600;
    }

    /* Career Grid */
    .career-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }

    .career-card {
        background: white;
        padding: 25px;
        border-radius: 15px;
        border: 1px solid #E8F5E8;
        display: flex;
        gap: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .career-card:hover {
        transform: translateY(-5px);
        border-color: #4CAF50;
        box-shadow: 0 15px 35px rgba(76, 175, 80, 0.2);
    }

    .career-icon {
        width: 60px;
        height: 60px;
        background: #E8F5E8;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .career-icon i {
        font-size: 1.5rem;
        color: #2E7D32;
    }

    .career-content h3 {
        margin: 0 0 10px 0;
        font-size: 1.2rem;
        font-weight: 700;
        color: #1B5E20;
        font-family: 'Poppins', sans-serif;
    }

    .career-content p {
        margin: 0;
        font-size: 0.95rem;
        color: #666;
        line-height: 1.6;
    }

    /* Areas Grid */
    .areas-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .area-card {
        background: white;
        padding: 20px;
        border-radius: 12px;
        border: 1px solid #E8F5E8;
        display: flex;
        align-items: center;
        gap: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .area-card:hover {
        border-color: #4CAF50;
        background: #F8F9FA;
        transform: translateY(-3px);
    }

    .area-icon {
        width: 50px;
        height: 50px;
        background: #E8F5E8;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .area-icon i {
        font-size: 1.3rem;
        color: #2E7D32;
    }

    .area-card span {
        font-weight: 600;
        color: #1B5E20;
        font-size: 1rem;
    }

    /* Semester Sections */
    .semester-section {
        margin-bottom: 40px;
    }

    .semester-section h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #2E7D32;
        margin: 0 0 20px 0;
        font-family: 'Poppins', sans-serif;
    }

    /* Syllabus Table */
    .syllabus-table {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        border: 1px solid #E8F5E8;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .table-header {
        background: #1B5E20;
        color: white;
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 20px;
        font-weight: 700;
        font-size: 1rem;
    }

    .table-row {
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 20px;
        border-bottom: 1px solid #E8F5E8;
        transition: background-color 0.2s ease;
    }

    .table-row:hover {
        background: #F8F9FA;
    }

    .table-row:last-child {
        border-bottom: none;
    }

    .subject {
        font-weight: 700;
        color: #1B5E20;
        font-size: 1rem;
    }

    .subtopics {
        color: #666;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    /* Apply Section */
    .apply-section {
        background: linear-gradient(135deg, #F8F9FA 0%, #E8F5E8 100%);
        border-radius: 20px;
        padding: 50px;
        text-align: center;
        margin-top: 40px;
    }

    .apply-content h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1B5E20;
        margin: 0 0 20px 0;
        font-family: 'Poppins', sans-serif;
    }

    .apply-content p {
        font-size: 1.2rem;
        color: #666;
        margin: 0 0 40px 0;
        line-height: 1.6;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .apply-button {
        background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
        color: white;
        padding: 20px 40px;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);
    }

    .apply-button:hover {
        background: linear-gradient(135deg, #45A049 0%, #1B5E20 100%);
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(76, 175, 80, 0.4);
    }

    .apply-button i {
        font-size: 1rem;
        transition: transform 0.3s ease;
    }

    .apply-button:hover i {
        transform: translateX(5px);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .modal-header-banner h1 {
            font-size: 2rem;
        }

        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .career-grid {
            grid-template-columns: 1fr;
        }

        .areas-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .modal-navigation {
            padding: 15px 20px;
        }

        .nav-item span {
            font-size: 0.8rem;
        }

        .modal-content {
            padding: 20px;
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
        height: 100%;
        min-height: 500px;
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
            top: 100px;
            left: 0;
            width: 100%;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
            border-radius: 0 0 20px 20px;
            padding: 20px 0;
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255,255,255,0.2);
            border-top: none;
        }
        .header nav ul.active {
            display: flex;
            animation: slideDown 0.3s ease-out;
        }
        .header nav ul li {
            margin: 0;
            width: 100%;
            text-align: center;
        }
        .header nav ul li a,
        .header nav ul li .nav-link {
            padding: 18px 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            margin: 0 20px;
            border-radius: 15px;
            transition: all 0.3s ease;
        }
        .header nav ul li a:hover,
        .header nav ul li .nav-link:hover {
            background: rgba(211, 47, 47, 0.1);
            transform: translateX(10px);
            box-shadow: 0 4px 15px rgba(211, 47, 47, 0.2);
        }
        .header nav ul li:last-child a,
        .header nav ul li:last-child .nav-link {
            border-bottom: none;
        }
        .menu-toggle {
            display: block;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
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
            justify-items: stretch;
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
            background: linear-gradient(rgba(30, 70, 32, 0.9), rgba(42, 114, 61, 0.9)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 100px 20px;
            text-align: center;
            position: relative;
        }

        .program-details-banner h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin: 0 0 20px 0;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
            line-height: 1.2;
        }

        .program-meta {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 30px;
            flex-wrap: wrap;
        }

        .program-meta span {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.2rem;
            font-weight: 500;
            background: rgba(255, 255, 255, 0.15);
            padding: 12px 24px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
        }

        .program-meta i {
            color: #4CAF50;
            font-size: 1.4rem;
        }

        /* Navigation Tabs */
        .program-nav-tabs {
            background: white;
            padding: 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            position: sticky;
            top: 90px;
            z-index: 100;
        }

        .nav-tabs-container {
            display: flex;
            justify-content: center;
            gap: 0;
            max-width: 800px;
            margin: 0 auto;
        }

        .nav-tab {
            flex: 1;
            padding: 20px 25px;
            background: none;
            border: none;
            color: #2a723d;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            border-bottom: 3px solid transparent;
        }

        .nav-tab:hover,
        .nav-tab.active {
            background: rgba(42, 114, 61, 0.1);
            border-bottom-color: #4CAF50;
            color: #1e4620;
        }

        .nav-tab i {
            font-size: 1.2rem;
        }

        /* Content Sections */
        .program-content-section {
            padding: 60px 20px;
            background: white;
            margin: 0;
        }

        .program-content-section:nth-child(even) {
            background: #f8f9fa;
        }

        .section-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 40px;
            text-align: center;
            justify-content: center;
        }

        .section-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .section-icon i {
            font-size: 1.8rem;
            color: white;
        }

        .section-header h2 {
            margin: 0;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e4620;
            font-family: 'Poppins', sans-serif;
        }

        .section-subtitle {
            font-size: 1.1rem;
            color: #666;
            margin: 0;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
        }

        /* Statistics Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            margin-top: 40px;
        }

        .stat-card {
            background: white;
            padding: 30px 20px;
            border-radius: 20px;
            text-align: center;
            border: 2px solid #E8F5E8;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .stat-card:hover {
            transform: translateY(-5px);
            border-color: #4CAF50;
            box-shadow: 0 15px 35px rgba(76, 175, 80, 0.2);
        }

        .stat-value {
            font-size: 3.5rem;
            font-weight: 800;
            color: #4CAF50;
            margin-bottom: 10px;
            font-family: 'Poppins', sans-serif;
        }

        .stat-label {
            font-size: 1rem;
            color: #666;
            font-weight: 600;
        }

        /* Career Grid */
        .career-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin-top: 40px;
        }

        .career-card {
            background: white;
            padding: 30px;
            border-radius: 20px;
            border: 1px solid #E8F5E8;
            display: flex;
            gap: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .career-card:hover {
            transform: translateY(-5px);
            border-color: #4CAF50;
            box-shadow: 0 15px 35px rgba(76, 175, 80, 0.2);
        }

        .career-icon {
            width: 60px;
            height: 60px;
            background: #E8F5E8;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .career-icon i {
            font-size: 1.5rem;
            color: #2E7D32;
        }

        .career-content h3 {
            margin: 0 0 10px 0;
            font-size: 1.3rem;
            font-weight: 700;
            color: #1e4620;
            font-family: 'Poppins', sans-serif;
        }

        .career-content p {
            margin: 0;
            font-size: 1rem;
            color: #666;
            line-height: 1.6;
        }

        /* Areas Grid */
        .areas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 40px;
        }

        .area-card {
            background: white;
            padding: 25px;
            border-radius: 20px;
            border: 1px solid #E8F5E8;
            display: flex;
            align-items: center;
            gap: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .area-card:hover {
            border-color: #4CAF50;
            background: #F8F9FA;
            transform: translateY(-3px);
        }

        .area-icon {
            width: 50px;
            height: 50px;
            background: #E8F5E8;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .area-icon i {
            font-size: 1.3rem;
            color: #2E7D32;
        }

        .area-card span {
            font-weight: 600;
            color: #1e4620;
            font-size: 1.1rem;
        }

        /* Syllabus Table */
        .syllabus-table {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid #E8F5E8;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            margin-top: 40px;
        }

        .table-header {
            background: linear-gradient(135deg, #1e4620, #2a723d);
            color: white;
            display: grid;
            grid-template-columns: 1fr 2fr;
            padding: 25px;
            font-weight: 700;
            font-size: 1.1rem;
        }

        .table-row {
            display: grid;
            grid-template-columns: 1fr 2fr;
            padding: 25px;
            border-bottom: 1px solid #E8F5E8;
            transition: background-color 0.2s ease;
        }

        .table-row:hover {
            background: #F8F9FA;
        }

        .table-row:last-child {
            border-bottom: none;
        }

        .subject {
            font-weight: 700;
            color: #1e4620;
            font-size: 1.1rem;
        }

        .subtopics {
            color: #666;
            font-size: 1rem;
            line-height: 1.6;
        }

        /* Semester Section */
        .semester-section {
            margin-bottom: 40px;
        }

        .semester-section h3 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2E7D32;
            margin: 0 0 25px 0;
            font-family: 'Poppins', sans-serif;
            text-align: center;
        }

        /* Apply Section */
        .apply-section {
            background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            border-radius: 25px;
            padding: 60px;
            text-align: center;
            margin-top: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .apply-content h3 {
            font-size: 3rem;
            font-weight: 700;
            color: #1e4620;
            margin: 0 0 20px 0;
            font-family: 'Poppins', sans-serif;
        }

        .apply-content p {
            font-size: 1.3rem;
            color: #666;
            margin: 0 0 40px 0;
            line-height: 1.6;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .apply-button {
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            padding: 20px 40px;
            font-size: 1.3rem;
            font-weight: 700;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 10px 30px rgba(76, 175, 80, 0.3);
        }

        .apply-button:hover {
            background: linear-gradient(135deg, #45A049, #1B5E20);
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(76, 175, 80, 0.4);
        }

        .apply-button i {
            font-size: 1.1rem;
            transition: transform 0.3s ease;
        }

        .apply-button:hover i {
            transform: translateX(5px);
        }

        /* Additional Program Elements */
        .program-features {
            margin-top: 40px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .feature-card {
            background: white;
            padding: 25px;
            border-radius: 20px;
            border: 1px solid #E8F5E8;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .feature-card:hover {
            transform: translateY(-5px);
            border-color: #4CAF50;
            box-shadow: 0 15px 35px rgba(76, 175, 80, 0.2);
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #E8F5E8, #C8E6C9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
        }

        .feature-icon i {
            font-size: 2rem;
            color: #2E7D32;
        }

        .feature-card h4 {
            color: #1e4620;
            font-size: 1.2rem;
            font-weight: 700;
            margin: 0 0 15px 0;
            font-family: 'Poppins', sans-serif;
        }

        .feature-card p {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.6;
            margin: 0;
        }

        /* Program Highlights */
        .program-highlights {
            background: linear-gradient(135deg, #F8F9FA, #E8F5E8);
            border-radius: 20px;
            padding: 40px;
            margin-top: 40px;
        }

        .highlights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .highlight-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px;
            background: white;
            border-radius: 15px;
            border: 1px solid #E8F5E8;
            transition: all 0.3s ease;
        }

        .highlight-item:hover {
            transform: translateY(-3px);
            border-color: #4CAF50;
            box-shadow: 0 8px 25px rgba(76, 175, 80, 0.15);
        }

        .highlight-icon {
            width: 50px;
            height: 50px;
            background: #E8F5E8;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .highlight-icon i {
            font-size: 1.3rem;
            color: #2E7D32;
        }

        .highlight-text {
            color: #1e4620;
            font-weight: 600;
            font-size: 1rem;
        }

        /* Admission Requirements */
        .admission-requirements {
            background: white;
            border-radius: 20px;
            padding: 40px;
            margin-top: 40px;
            border: 1px solid #E8F5E8;
        }

        .requirements-list {
            list-style: none;
            padding: 0;
            margin: 30px 0 0 0;
        }

        .requirements-list li {
            padding: 15px 0;
            border-bottom: 1px solid #E8F5E8;
            display: flex;
            align-items: center;
            gap: 15px;
            color: #666;
            font-size: 1rem;
        }

        .requirements-list li:last-child {
            border-bottom: none;
        }

        .requirements-list li::before {
            content: '✓';
            color: #4CAF50;
            font-weight: 700;
            font-size: 1.2rem;
            background: #E8F5E8;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        /* Faculty Section */
        .faculty-section {
            background: #F8F9FA;
            border-radius: 20px;
            padding: 40px;
            margin-top: 40px;
        }

        .faculty-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .faculty-member {
            background: white;
            padding: 25px;
            border-radius: 20px;
            border: 1px solid #E8F5E8;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .faculty-member:hover {
            transform: translateY(-5px);
            border-color: #4CAF50;
            box-shadow: 0 15px 35px rgba(76, 175, 80, 0.2);
        }

        .faculty-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, #E8F5E8, #C8E6C9);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #2E7D32;
        }

        .faculty-member h4 {
            color: #1e4620;
            font-size: 1.2rem;
            font-weight: 700;
            margin: 0 0 10px 0;
            font-family: 'Poppins', sans-serif;
        }

        .faculty-member .title {
            color: #2E7D32;
            font-weight: 600;
            margin-bottom: 15px;
            font-size: 0.95rem;
        }

        .faculty-member p {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 0;
        }

        /* Contact Section */
        .contact-section {
            background: linear-gradient(135deg, #1e4620, #2a723d);
            color: white;
            border-radius: 20px;
            padding: 40px;
            margin-top: 40px;
            text-align: center;
        }

        .contact-section h3 {
            font-size: 2rem;
            font-weight: 700;
            margin: 0 0 20px 0;
            font-family: 'Poppins', sans-serif;
        }

        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .contact-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .contact-item i {
            font-size: 1.5rem;
            color: #4CAF50;
        }

        .contact-item span {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        /* Responsive Design for Program Details */
        @media (max-width: 768px) {
            .program-details-banner h1 {
                font-size: 2.5rem;
            }
            
            .program-meta {
                flex-direction: column;
                gap: 15px;
            }
            
            .nav-tabs-container {
                flex-direction: column;
                max-width: 100%;
            }
            
            .nav-tab {
                padding: 15px 20px;
                font-size: 0.9rem;
            }
            
            .section-header {
                flex-direction: column;
                gap: 15px;
            }
            
            .section-header h2 {
                font-size: 2rem;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            
            .career-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .areas-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .syllabus-table {
                margin-top: 20px;
            }
            
            .table-header,
            .table-row {
                padding: 15px;
                font-size: 0.9rem;
            }
            
            .apply-content h3 {
                font-size: 2rem;
            }
            
            .apply-content p {
                font-size: 1.1rem;
            }
            
            .apply-button {
                padding: 15px 30px;
                font-size: 1.1rem;
            }

            /* Additional responsive styles for new elements */
            .features-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .highlights-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }

            .faculty-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .contact-info {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }

            .program-highlights,
            .admission-requirements,
            .faculty-section,
            .contact-section {
                padding: 25px;
                margin-top: 30px;
            }

            .feature-card,
            .faculty-member {
                padding: 20px;
            }

            .highlight-item {
                padding: 15px;
            }
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

        /* ============== SOCIAL MEDIA ICONS ============== */
        .social-icons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .social-icons a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: #fff;
            color: #D32F2F;
            border-radius: 50%;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }
        
        .social-icons a:hover {
            background: #D32F2F;
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(211, 47, 47, 0.3);
        }
    `}),mx=()=>(M.useEffect(()=>{const o=document.createElement("link");o.rel="stylesheet",o.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(o);const d=document.createElement("link");return d.rel="stylesheet",d.href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",document.head.appendChild(d),()=>{document.head.removeChild(o),document.head.removeChild(d)}},[]),null),gx=({activePage:o})=>{const[d,f]=M.useState(!1),u=nl(),m=b=>{f(!1),u(b)};return r.jsx("header",{className:"header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"logo-container",onClick:()=>m("/home"),children:[r.jsx("img",{src:"https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png",alt:"IGT Logo",className:"logo-crest"}),r.jsxs("div",{className:"logo-text-container",children:[r.jsx("h1",{className:"logo-title",children:"INSTITUTE OF GLOBAL TECHNOLOGY"}),r.jsx("p",{className:"logo-tagline",children:"Gateway to Excellence in Education"})]})]}),r.jsx("nav",{children:r.jsxs("ul",{className:d?"active":"",children:[r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/home"),className:`nav-link ${o==="/home"?"active":""}`,children:"Home"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/programs"),className:`nav-link ${o==="/programs"?"active":""}`,children:"Programs"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/departments"),className:`nav-link ${o==="/departments"?"active":""}`,children:"Departments"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/faculty"),className:`nav-link ${o==="/faculty"?"active":""}`,children:"Faculty"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/admissions"),className:`nav-link ${o==="/admissions"?"active":""}`,children:"Admissions"})}),r.jsx("li",{children:r.jsx("button",{onClick:()=>m("/contact"),className:`nav-link ${o==="/contact"?"active":""}`,children:"Contact"})})]})}),r.jsx("button",{className:"menu-toggle",onClick:()=>f(!d),"aria-label":"Open Menu",children:r.jsx("i",{className:"fas fa-bars"})})]})})},px=()=>r.jsx("section",{id:"hero",className:"hero",children:r.jsxs("div",{className:"hero-content",children:[r.jsxs("div",{className:"hero-title-glance",children:[r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-label",children:"WELCOME TO"})}),r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-main",children:"INSTITUTE OF"})}),r.jsx("div",{className:"glance-line",children:r.jsx("span",{className:"glance-main",children:"GLOBAL TECHNOLOGY"})})]}),r.jsxs("div",{className:"hero-glance-content",children:[r.jsx("div",{className:"hero-description",children:r.jsx("p",{children:"Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future."})}),r.jsx("div",{className:"hero-accredited",children:"ACCREDITED BY AIAB EUROPE"})]})]})}),hx=()=>r.jsx("section",{id:"about",className:"about",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"ABOUT INSTITUTE OF GLOBAL TECHNOLOGY"}),r.jsx("p",{className:"section-subtitle",children:"Discover our mission, vision, and values that guide us in providing exceptional technology education"}),r.jsxs("div",{className:"about-grid",children:[r.jsx("div",{className:"about-image",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Institute of Global Technology Campus"})}),r.jsxs("div",{className:"about-content",children:[r.jsx("h3",{children:"Transforming Technology Education Since 2005"}),r.jsx("p",{children:"The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success."}),r.jsx("p",{children:"Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies."}),r.jsx("p",{className:"accredited-text",children:"ACCREDITED BY AIAB EUROPE"}),r.jsxs("div",{className:"stats-container",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"6000+"}),r.jsx("div",{className:"label",children:"STUDENTS"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"300+"}),r.jsx("div",{className:"label",children:"FACULTY"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"number",children:"60+"}),r.jsx("div",{className:"label",children:"PROGRAMS"})]})]})]})]})]})}),xx=()=>r.jsx("section",{id:"why-choose-us",className:"why-choose-us",children:r.jsxs("div",{className:"container",children:[r.jsxs("h2",{children:["Why Choose Us",r.jsx("span",{className:"question-mark",children:"?"})]}),r.jsxs("div",{className:"features-grid",children:[r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Industrial Partners"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"100+ Industrial Partners"}),r.jsx("p",{children:"Strong collaborations with leading technology companies for research and placements."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Expert Faculty"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Learn from Experts"}),r.jsx("p",{children:"Instruction from national and international experts in their respective fields."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Placement Support"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Placement Assistance"}),r.jsx("p",{children:"Complete placement support with career counseling and interview preparation."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Advanced Research"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Advanced Research"}),r.jsx("p",{children:"Opportunities to work on innovative research projects with commercialization potential."})]})]}),r.jsxs("div",{className:"feature-item",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Entrepreneurship Support"}),r.jsxs("div",{className:"feature-content",children:[r.jsx("h3",{children:"Entrepreneurship Support"}),r.jsx("p",{children:"Incubation center and mentorship for student startups and innovations."})]})]})]})]})}),mm=[{category:"Precision Agriculture",subtitle:"Innovative programs combining technology with modern agricultural practices",courses:[{title:"MASTER PROGRAM in Precision Agriculture",image:"https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg",duration:"12 Months",description:"Master data-driven farming techniques using IoT, sensors, and AI for crop optimization. Learn advanced soil monitoring, weather prediction, and automated irrigation systems to maximize crop yields while minimizing resource waste."},{title:"MASTER PROGRAM in Agriculture Drones",image:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring."},{title:"MASTER PROGRAM in Hydroponics & Vertical Farming",image:"https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg",duration:"12 Months",description:"Learn sustainable farming techniques without soil in controlled environments. Master nutrient solution management, climate control systems, and vertical stacking technologies for urban agriculture."},{title:"MASTER PROGRAM in AI & ML in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg",duration:"12 Months",description:"Apply artificial intelligence and machine learning to solve agricultural challenges. Master predictive analytics for crop diseases, yield forecasting, and resource optimization."},{title:"MASTER PROGRAM in Agriculture Robotics",image:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",duration:"12 Months",description:"Develop and implement robotic solutions for planting, harvesting, and farm automation. Master robotic arm programming, computer vision integration, and autonomous navigation systems."},{title:"MASTER PROGRAM in Advanced Technologies in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp",duration:"12 Months",description:"Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement."},{title:"MASTER PROGRAM in Agri Entrepreneurship",image:"https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business skills specific to agricultural ventures and startups. Master market analysis, financial planning, and sustainable business models for agribusiness."}]},{category:"AI & Robotics",subtitle:"Specialized programs in artificial intelligence and robotic systems",courses:[{title:"MASTER PROGRAM in AI & Robotics",image:"https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg",duration:"12 Months",description:"Comprehensive training in AI-driven robotic systems and automation. Master machine learning algorithms for robotic control and autonomous decision-making in industrial applications."},{title:"MASTER PROGRAM in Generative AI",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation."},{title:"MASTER PROGRAM in AI & Blockchain",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the convergence of AI and decentralized blockchain technologies. Master smart contract development, AI-powered blockchain analytics, and decentralized AI systems for secure applications."},{title:"MASTER PROGRAM in AI & Data Analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI techniques to extract insights from complex datasets. Master predictive modeling, statistical analysis, and machine learning algorithms for business intelligence and decision-making."},{title:"MASTER PROGRAM in AI & Biological Sciences",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development."},{title:"MASTER PROGRAM in AI & Cybersecurity Systems",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop AI-powered solutions for cybersecurity threats and vulnerabilities. Master threat detection algorithms, anomaly identification, and automated security response systems for network protection."},{title:"Master Program in Cybersecurity",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"18 Months",description:"Defend the digital frontier with advanced cybersecurity techniques. Master threat detection, network security, ethical hacking, and security frameworks to protect organizations from evolving cyber threats."}]},{category:"AI & Business",subtitle:"Programs at the intersection of artificial intelligence and business applications",courses:[{title:"MASTER PROGRAM in AI & Business",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Transform business operations with AI-driven strategies and solutions. Master process automation, customer analytics, and AI-powered decision support systems for competitive advantage."},{title:"MASTER PROGRAM in AI & Management Studies",image:"https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg",duration:"12 Months",description:"Apply AI to organizational leadership, decision-making, and strategy. Master AI-driven management tools, predictive analytics for strategic planning, and intelligent automation for operational efficiency."},{title:"MASTER PROGRAM in AI & Law",image:"https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg",duration:"12 Months",description:"Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies."},{title:"MASTER PROGRAM in IP Law",image:"https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg",duration:"12 Months",description:"Specialize in intellectual property law for technology and innovation. Master patent law, copyright protection, and trademark strategies for emerging technologies and digital assets."},{title:"MASTER PROGRAM in AI & Marketing",image:"https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg",duration:"12 Months",description:"Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns."}]},{category:"Healthcare & Life Sciences",subtitle:"Programs at the intersection of technology and life sciences",courses:[{title:"MASTER PROGRAM in Clinical Research & Regulatory Affairs",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets."},{title:"MASTER PROGRAM in Medical Coding",image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg",duration:"12 Months",description:"Learn standardized coding systems for healthcare documentation. Master ICD-10, CPT coding, and healthcare billing systems for accurate medical record management and insurance processing."},{title:"MASTER PROGRAM in Digital Forensics",image:"https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af",duration:"12 Months",description:"Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution."},{title:"MASTER PROGRAM in Industrial Fermentation Technology",image:"https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master microbial processes for food, pharmaceuticals, and biofuels. Learn bioreactor design, process optimization, and quality control for large-scale fermentation operations."},{title:"MASTER PROGRAM in Vaccine Technology",image:"https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png",duration:"12 Months",description:"Study vaccine development, production, and quality control. Master vaccine formulation, manufacturing processes, and regulatory standards for safe and effective immunization products."},{title:"MASTER PROGRAM in Bioentrepreneurship",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies."}]},{category:"AI & Creative Technologies",subtitle:"Programs combining artificial intelligence with creative disciplines",courses:[{title:"MASTER PROGRAM in AI & Designing Technology",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products."},{title:"MASTER PROGRAM in AI & Arts",image:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression."}]},{category:"Emerging Technologies & Smart Systems",subtitle:"Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",courses:[{title:"Reality Architect: Master of AR/VR/XR Development",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master immersive technologies to build future-ready AR, VR, and XR applications. Learn 3D modeling, spatial computing, and interactive design for creating engaging virtual experiences."},{title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",image:"https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",duration:"12 Months",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions."},{title:"Game Changer: Master Program in XR Gaming",image:"https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg",duration:"12 Months",description:"Design and develop immersive games using XR technology and gamification strategy. Master game engine development, 3D asset creation, and interactive storytelling for next-generation gaming experiences."},{title:"Master Program in AR and Mixed Reality",image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",duration:"12 Months",description:"Specialize in designing cutting-edge MR life environments and interfaces. Master spatial computing, gesture recognition, and environmental mapping for seamless mixed reality experiences."},{title:"Master Program in Electric Vehicle Technology",image:"https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png",duration:"12 Months",description:"Learn about EV systems, battery design, automatic mobility, and energy management. Master electric powertrain design, battery management systems, and smart charging infrastructure for sustainable transportation."},{title:"Master Program in IoT and Embedded Systems",image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp",duration:"12 Months",description:"Build connected smart devices with microcontrollers, sensors, and communication protocols. Master embedded software development, wireless communication, and cloud integration for smart city and industrial IoT applications."},{title:"Master Program in Human-Computer Interaction",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Focus on designing intuitive interfaces, enhancing user experiences, and usability testing. Master user research methodologies, interaction design principles, and accessibility standards for inclusive digital products."}]},{category:"Doctoral & Postdoctoral Programs",subtitle:"Advanced research programs for scholars and fellows in science, engineering, and humanities",courses:[{title:"Doctoral Programs",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Varies",description:"Research-focused degrees in multiple disciplines:",list:["PhD in Engineering in ICT disciplines","PhD in Science and Mathematics","PhD in Humanities, Social Science and Design"]},{title:"Postdoctoral Programs",image:"https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Flexible",description:"Postdoctoral fellowships in emerging domains:",list:["Wireless Communications, Embedded Systems","AI, ML, and Information Security","5G/6G, Robotics, VLSI, NLP, Adversarial ML"]}]}],bx=({course:o})=>{const d=nl(),f=()=>{const u=o.title.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");d(`/program/${u}`,{state:{program:o}})};return r.jsxs("div",{className:"program-card",children:[r.jsx("img",{src:o.image,alt:o.title,className:"program-card-image"}),r.jsxs("div",{className:"program-card-content",children:[r.jsx("h4",{children:o.title}),r.jsxs("div",{className:"program-card-duration",children:[r.jsx("i",{className:"far fa-clock"}),o.duration]}),r.jsxs("div",{className:"program-card-description",children:[o.description,o.list&&r.jsx("ul",{children:o.list.map((u,m)=>r.jsx("li",{children:u},m))})]}),r.jsxs("div",{className:"program-card-buttons",children:[r.jsx("button",{className:"btn btn-details",onClick:f,children:"Details"}),r.jsx("button",{className:"btn btn-apply ag-btn-apply",children:"Apply"})]})]})]})},vx=()=>{const[o,d]=M.useState(""),[f,u]=M.useState("all"),m=mm.map(b=>({...b,courses:b.courses.filter(w=>(f==="all"||b.category===f)&&w.title.toLowerCase().includes(o.toLowerCase()))})).filter(b=>b.courses.length>0);return r.jsxs("section",{id:"programs",className:"programs-page",children:[r.jsx("div",{className:"page-banner programs-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Transform Your Future"}),r.jsx("p",{children:"Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market."})]})}),r.jsx("div",{className:"search-filter-section",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"search-filter-container",children:[r.jsxs("div",{className:"search-box",children:[r.jsx("i",{className:"fas fa-search"}),r.jsx("input",{type:"text",placeholder:"Search programs...",value:o,onChange:b=>d(b.target.value),"aria-label":"Search programs"})]}),r.jsx("div",{className:"category-filter",children:r.jsxs("select",{value:f,onChange:b=>u(b.target.value),"aria-label":"Filter by category",children:[r.jsx("option",{value:"all",children:"All Categories"}),mm.map((b,w)=>r.jsx("option",{value:b.category,children:b.category},w))]})})]})})}),m.length>0?m.map((b,w)=>r.jsx("div",{className:"program-category",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"category-header",children:[r.jsx("h3",{children:b.category}),r.jsx("p",{children:b.subtitle})]}),r.jsx("div",{className:"program-cards-grid",children:b.courses.map((C,A)=>r.jsx(bx,{course:C},`${C.title}-${A}`))})]})},`${b.category}-${w}`)):r.jsxs("div",{className:"container no-results-container",children:[r.jsx("h3",{className:"no-results-title",children:"No programs found"}),r.jsx("p",{className:"no-results-message",children:"Try adjusting your search terms or category filter to find what you're looking for."}),r.jsx("button",{onClick:()=>{d(""),u("all")},className:"clear-filters-btn",children:"Clear Filters"})]}),r.jsxs("div",{className:"admissions-cta",children:[r.jsx("h3",{children:"Ready to take the next step?"}),r.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),r.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),r.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})},yx=()=>r.jsxs("section",{className:"admissions-page",children:[r.jsx("div",{className:"admissions-journey-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Begin Your Academic Journey"}),r.jsx("p",{children:"Join our community of innovators and thought leaders"})]})}),r.jsx("div",{className:"admissions-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"section-title",children:"Admissions Process"}),r.jsx("p",{className:"section-tagline",children:"Our streamlined admission process makes it easy to join our academic community"}),r.jsxs("div",{className:"process-grid",children:[r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"1"}),r.jsx("h3",{children:"Application"}),r.jsx("p",{children:"Submit your online application along with required documents through our portal."}),r.jsx("a",{href:"#",className:"process-btn",children:"Apply Now →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"2"}),r.jsx("h3",{children:"Review"}),r.jsx("p",{children:"Our admissions committee will carefully evaluate your application and credentials."}),r.jsx("a",{href:"#",className:"process-btn",children:"Learn More →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"3"}),r.jsx("h3",{children:"Interview"}),r.jsx("p",{children:"Selected candidates will be invited for an interview (in-person or virtual)."}),r.jsx("a",{href:"#",className:"process-btn",children:"Prepare →"})]}),r.jsxs("div",{className:"process-card",children:[r.jsx("div",{className:"process-number",children:"4"}),r.jsx("h3",{children:"Decision"}),r.jsx("p",{children:"Receive your admission decision within 2-4 weeks of your interview."}),r.jsx("a",{href:"#",className:"process-btn",children:"Timeline →"})]})]}),r.jsx("h2",{className:"section-title",children:"Admission Details"}),r.jsx("p",{className:"section-tagline",children:"Key information to help you prepare your application"}),r.jsxs("div",{className:"details-grid",children:[r.jsxs("div",{className:"details-card",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-file-alt"})}),"Application Requirements"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Completed online application form"}),r.jsx("li",{children:"Bachelor's degree in relevant field with minimum 50% marks"}),r.jsx("li",{children:"Statement of purpose (500-1000 words)"}),r.jsx("li",{children:"Two letters of recommendation"}),r.jsx("li",{children:"Professional resume/CV"}),r.jsx("li",{children:"Application fee (waivers available)"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Download Checklist"})]}),r.jsxs("div",{className:"details-card important-dates",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-calendar-alt"})}),"Important Dates"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Jul 15 Fall Semester Deadline"}),r.jsx("li",{children:"Nov 15 Spring Semester Deadline"}),r.jsx("li",{children:"Apr 15 Summer Semester Deadline"}),r.jsx("li",{children:"Dec 1 Early Decision Deadline"}),r.jsx("li",{children:"Aug 20-25 Orientation Week"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Add to Calendar"})]}),r.jsxs("div",{className:"details-card",children:[r.jsxs("h3",{children:[r.jsx("span",{className:"details-icon",children:r.jsx("i",{className:"fas fa-university"})}),"Tuition & Financial Aid"]}),r.jsxs("ul",{className:"details-list",children:[r.jsx("li",{children:"Tuition: ₹1,50,000 per semester"}),r.jsx("li",{children:"Merit-based scholarships available"}),r.jsx("li",{children:"Research and teaching assistantships"}),r.jsx("li",{children:"Education loan partnerships"}),r.jsx("li",{children:"Flexible payment plans"})]}),r.jsx("a",{href:"#",className:"details-btn btn-red",children:"Financial Aid Information"})]})]}),r.jsxs("div",{className:"admissions-cta",children:[r.jsx("h3",{children:"Ready to take the next step?"}),r.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),r.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),r.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})})]}),Ax=()=>{const[o,d]=M.useState(""),[f,u]=M.useState(!1),[m,b]=M.useState({name:"",email:"",phone:"",subject:"",message:""}),w=A=>{const{name:p,value:E}=A.target;b(k=>({...k,[p]:E}))},C=async A=>{if(A.preventDefault(),!m.name.trim()){d("Please enter your name."),setTimeout(()=>d(""),5e3);return}if(!m.email.trim()){d("Please enter your email address."),setTimeout(()=>d(""),5e3);return}if(!m.message.trim()){d("Please enter your message."),setTimeout(()=>d(""),5e3);return}if(!m.email.includes("@")){d("Please enter a valid email address."),setTimeout(()=>d(""),5e3);return}u(!0);try{await new Promise(p=>setTimeout(p,1500)),d("Your message has been sent successfully! We will get back to you soon."),b({name:"",email:"",phone:"",subject:"",message:""}),A.target.reset()}catch{d("Sorry, there was an error sending your message. Please try again.")}finally{u(!1),setTimeout(()=>d(""),5e3)}};return r.jsxs("section",{className:"form-page",children:[r.jsx("div",{className:"page-banner contact-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Get In Touch"}),r.jsx("p",{children:"We're here to help and answer any question you might have."})]})}),r.jsx("div",{className:"container",children:r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-info",children:[r.jsx("h3",{children:"Contact Information"}),r.jsx("p",{children:"Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below."}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-map-marker-alt"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Address"}),r.jsx("span",{children:"REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11."})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-envelope"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Email"}),r.jsx("span",{children:"admissions@igt.edu.in"})]})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("div",{className:"info-icon",children:r.jsx("i",{className:"fas fa-clock"})}),r.jsxs("div",{className:"info-content",children:[r.jsx("strong",{children:"Timing"}),r.jsx("span",{children:"Mon - Sat: 9:00 AM - 5:30 PM"})]})]}),r.jsx("div",{className:"info-item special",children:r.jsx("strong",{children:"A UNIT OF BRC"})}),r.jsxs("div",{className:"social-icons",children:[r.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:r.jsx("i",{className:"fab fa-twitter"})}),r.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:r.jsx("i",{className:"fab fa-youtube"})})]})]}),r.jsxs("div",{className:"form-container",children:[r.jsx("h3",{children:"Send Us a Message"}),r.jsxs("form",{onSubmit:C,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"name",children:"Your Name"}),r.jsx("input",{type:"text",id:"name",name:"name",value:m.name,onChange:w,required:!0,placeholder:"Enter your full name"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"email",children:"Email Address"}),r.jsx("input",{type:"email",id:"email",name:"email",value:m.email,onChange:w,required:!0,placeholder:"Enter your email address"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"phone",children:"Phone Number"}),r.jsx("input",{type:"tel",id:"phone",name:"phone",value:m.phone,onChange:w,placeholder:"Enter your phone number"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"subject",children:"Subject"}),r.jsx("input",{type:"text",id:"subject",name:"subject",value:m.subject,onChange:w,placeholder:"What is this regarding?"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"message",children:"Your Message"}),r.jsx("textarea",{id:"message",name:"message",value:m.message,onChange:w,required:!0,placeholder:"Tell us how we can help you",rows:5})]}),r.jsx("button",{type:"submit",className:"submit-btn",disabled:f,children:f?r.jsxs(r.Fragment,{children:[r.jsx("i",{className:"fas fa-spinner fa-spin"}),"Sending..."]}):"Send Message"}),o&&r.jsx("div",{className:`form-message ${o.includes("error")?"error":"success"}`,children:o})]})]})]})})]})},Sx=()=>{const[o,d]=M.useState(""),f=u=>{u.preventDefault(),d("Your tour has been scheduled successfully!"),setTimeout(()=>d(""),5e3),u.target.reset()};return r.jsxs("section",{className:"form-page",children:[r.jsx("div",{className:"page-banner tour-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Schedule a Campus Tour"}),r.jsx("p",{children:"We would love to show you around our campus."})]})}),r.jsx("div",{className:"container",children:r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-info",children:[r.jsx("h3",{children:"Visit Us"}),r.jsx("p",{children:"Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT."}),r.jsxs("div",{className:"info-item",children:[r.jsxs("strong",{children:[r.jsx("i",{className:"fas fa-clock"})," Tour Hours"]}),r.jsx("span",{children:"Monday - Friday: 10:00 AM - 4:00 PM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsxs("strong",{children:[r.jsx("i",{className:"fas fa-map-marker-alt"})," Location"]}),r.jsx("span",{children:"123 Tech Avenue, Innovation City"})]})]}),r.jsxs("div",{className:"form-container",children:[r.jsx("h3",{children:"Book Your Visit"}),r.jsxs("form",{onSubmit:f,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"name",children:"Your Name"}),r.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"email",children:"Email Address"}),r.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"date",children:"Preferred Date"}),r.jsx("input",{type:"date",id:"date",name:"date",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"time",children:"Preferred Time"}),r.jsx("input",{type:"time",id:"time",name:"time",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"guests",children:"Number of Guests"}),r.jsxs("select",{id:"guests",name:"guests",children:[r.jsx("option",{children:"1"}),r.jsx("option",{children:"2"}),r.jsx("option",{children:"3"}),r.jsx("option",{children:"4"}),r.jsx("option",{children:"5+"})]})]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"Schedule Tour"}),o&&r.jsx("div",{className:"form-message success",children:o})]})]})]})})]})},wx=()=>r.jsx("section",{id:"academic-programs",className:"academic-programs",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Academic Programs"}),r.jsx("p",{className:"section-subtitle",children:"Explore our diverse range of postgraduate diploma programs in emerging technologies"}),r.jsxs("div",{className:"programs-grid",children:[r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg",alt:"AI & Management"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"EU ACC Certificate Program in AI & Management"}),r.jsx("p",{children:"Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-certificate"}),r.jsx("span",{children:"Certificate Program"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"1st Sep - 30th Sep 2025"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"AR VR Technology"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"EU ACC Master Program in AR & VR Technology"}),r.jsx("p",{children:"Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-building"}),r.jsx("span",{children:"100+ Industrial Partners"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-hands-helping"}),r.jsx("span",{children:"10+ Hands-on Projects"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Agri Drones"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Agri Drones"}),r.jsx("p",{children:"Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making."}),r.jsx("button",{className:"btn-details",children:"Details"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Medical Robotics"}),r.jsx("p",{children:"Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration."}),r.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]}),r.jsxs("div",{className:"program-card",children:[r.jsx("div",{className:"program-visual",children:r.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agri Robotics"})}),r.jsxs("div",{className:"program-content",children:[r.jsx("h4",{children:"MASTER PROGRAM in Agri Robotics"}),r.jsx("p",{children:"Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems."}),r.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),r.jsxs("div",{className:"program-info",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-graduation-cap"}),r.jsx("span",{children:"MASTER PROGRAM"})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]})]})]})]})]})}),jx=()=>r.jsx("section",{id:"upcoming-courses",className:"upcoming-courses",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"courses-header",children:[r.jsx("div",{className:"expand-knowledge",children:"EXPAND YOUR KNOWLEDGE"}),r.jsx("h2",{children:"Upcoming Courses"}),r.jsx("p",{className:"section-subtitle",children:"Discover our latest course offerings designed to keep you at the forefront of technology"})]}),r.jsxs("div",{className:"courses-grid",children:[r.jsxs("div",{className:"course-card featured",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://agmay.in/images/manufacturing.webp",alt:"Drone Manufacturing"}),r.jsx("div",{className:"course-badge",children:"Featured"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Drone Manufacturing"}),r.jsx("p",{children:"Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),r.jsxs("div",{className:"course-card",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"}),r.jsx("div",{className:"course-badge",children:"Popular"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Medical Robotics"}),r.jsx("p",{children:"Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),r.jsxs("div",{className:"course-card",children:[r.jsxs("div",{className:"course-image",children:[r.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agriculture Robotics"}),r.jsx("div",{className:"course-badge",children:"New"})]}),r.jsxs("div",{className:"course-content",children:[r.jsx("h3",{children:"MASTER PROGRAM in Agriculture Robotics"}),r.jsx("p",{children:"Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques."}),r.jsxs("div",{className:"course-status",children:[r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-calendar-alt"}),r.jsx("span",{children:"Coming soon"})]}),r.jsxs("div",{className:"status-item",children:[r.jsx("i",{className:"fas fa-clock"}),r.jsx("span",{children:"12 Months"})]})]}),r.jsx("button",{className:"btn-details-blue",children:"Details"})]})]})]}),r.jsx("div",{className:"view-all-courses",children:r.jsx("button",{className:"btn-view-all",children:"View All Upcoming Courses"})})]})}),Dx=()=>r.jsx("section",{id:"research",className:"research-projects",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Ongoing Research Projects"}),r.jsx("p",{className:"section-subtitle",children:"Explore our cutting-edge research initiatives across various technology domains"}),r.jsxs("div",{className:"research-grid",children:[r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI-Powered Predictive Maintenance"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"AI-Powered Predictive Maintenance"}),r.jsx("p",{children:"Developing AI models for predictive maintenance of industrial equipment to reduce downtime."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conversational AI Assistant"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Conversational AI Assistant"}),r.jsx("p",{children:"Creating an AI assistant for mental health support and counseling services."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=",alt:"Automated Disease Detection"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Automated Disease Detection"}),r.jsx("p",{children:"Using deep learning for automated detection of diseases in medical images."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Point-of-Care Diagnostic Device"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Point-of-Care Diagnostic Device"}),r.jsx("p",{children:"Developing portable diagnostic tools for rapid detection of infectious diseases."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Smart Grid Systems"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"Smart Grid Systems"}),r.jsx("p",{children:"Creating intelligent grid systems for efficient energy distribution and management."})]})]}),r.jsxs("div",{className:"research-card",children:[r.jsx("img",{src:"https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=",alt:"EV Charging Infrastructure"}),r.jsxs("div",{className:"research-card-content",children:[r.jsx("h3",{children:"EV Charging Infrastructure"}),r.jsx("p",{children:"Designing urban electric vehicle charging networks for sustainable transportation."})]})]})]})]})}),Ex=()=>{const[o,d]=M.useState("conferences"),f=()=>{switch(o){case"conferences":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conference Hall"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"International Conference on AI & Robotics"}),r.jsx("p",{children:"Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Virtual & On-campus"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"People collaborating"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Tech for Sustainable Development"}),r.jsx("p",{children:"Exploring technological solutions for achieving sustainable development goals."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Main Campus"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agri-Tech"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Future of Agri-Tech"}),r.jsx("p",{children:"Conference focusing on emerging technologies in agriculture and food production."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("span",{children:"Agricultural Research Center"})]})]})]})]});case"webinars":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone in flight"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Introduction to Drone Technology"}),r.jsx("p",{children:"Free webinar covering basics of drone technology and its industrial applications."})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI and ML concept"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Career in AI & ML"}),r.jsx("p",{children:"Webinar discussing career opportunities and skill requirements in AI/ML fields."})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Precision agriculture"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Precision Agriculture Techniques"}),r.jsx("p",{children:"Learn about modern precision farming methods using IoT and data analytics."})]})]})]});case"courses":return r.jsxs("div",{className:"events-grid",children:[r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone piloting"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"Certificate in Drone Piloting"}),r.jsx("p",{children:"3-month program covering drone operation, regulations, and commercial applications."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"DGCA Approved"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Business analytics dashboard"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"AI for Business Professionals"}),r.jsx("p",{children:"6-week certificate course on AI applications for non-technical business leaders."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"Industry Recognized"})]})]})]}),r.jsxs("div",{className:"event-card",children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"IoT circuit board"}),r.jsxs("div",{className:"event-card-content",children:[r.jsx("h3",{children:"IoT Fundamentals"}),r.jsx("p",{children:"8-week hands-on course on Internet of Things concepts and implementation."}),r.jsxs("div",{className:"event-card-info",children:[r.jsx("i",{className:"fas fa-check-circle"}),r.jsx("span",{children:"With Lab Access"})]})]})]})]});default:return null}};return r.jsx("section",{id:"events",className:"events-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Conferences, Webinars & Certificate Courses"}),r.jsx("p",{className:"section-subtitle",children:"Participate in our knowledge-sharing events and short-term certification programs"}),r.jsxs("div",{className:"events-tabs",children:[r.jsx("button",{onClick:()=>d("conferences"),className:`tab-btn ${o==="conferences"?"active":""}`,children:"Conferences"}),r.jsx("button",{onClick:()=>d("webinars"),className:`tab-btn ${o==="webinars"?"active":""}`,children:"Webinars"}),r.jsx("button",{onClick:()=>d("courses"),className:`tab-btn ${o==="courses"?"active":""}`,children:"Certificate Courses"})]}),f()]})})},Mx=()=>{const[o,d]=M.useState(""),f=m=>{m.preventDefault(),d("Thank you for subscribing!"),setTimeout(()=>d(""),5e3),m.target.reset()},u=new Date().getFullYear();return r.jsx("footer",{id:"contact",className:"site-footer",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"footer-grid",children:[r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"About Institute of Global Technology"}),r.jsx("p",{children:"Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields."}),r.jsx("p",{children:r.jsx("strong",{children:"Accredited by AIAB Europe"})}),r.jsxs("div",{className:"social-icons",children:[r.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:r.jsx("i",{className:"fab fa-twitter"})}),r.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:r.jsx("i",{className:"fab fa-youtube"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Quick Links"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(wa,{to:"/home",className:"footer-nav-link",children:"Home"})}),r.jsx("li",{children:r.jsx(wa,{to:"/programs",className:"footer-nav-link",children:"Academic Programs"})}),r.jsx("li",{children:r.jsx(wa,{to:"/departments",className:"footer-nav-link",children:"Research Departments"})}),r.jsx("li",{children:r.jsx(wa,{to:"/faculty",className:"footer-nav-link",children:"Faculty"})}),r.jsx("li",{children:r.jsx(wa,{to:"/admissions",className:"footer-nav-link",children:"Admissions"})}),r.jsx("li",{children:r.jsx(wa,{to:"/contact",className:"footer-nav-link",children:"Contact"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Academic Programs"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Robotics & AI"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Precision Agriculture"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Drone Technology"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Healthcare & Life Sciences"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Emerging Technologies"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"footer-nav-link",children:"Research Opportunities"})})]})]}),r.jsxs("div",{className:"footer-column",children:[r.jsx("h3",{children:"Newsletter"}),r.jsx("p",{children:"Subscribe to our newsletter to receive updates on events, admissions, and institute news."}),r.jsxs("form",{className:"newsletter-form",onSubmit:f,children:[r.jsx("input",{type:"email",placeholder:"Enter your email address",required:!0,"aria-label":"Email address for newsletter"}),r.jsx("button",{type:"submit","aria-label":"Subscribe to newsletter",children:r.jsx("i",{className:"fas fa-paper-plane"})})]}),o&&r.jsx("p",{className:"newsletter-message",children:o}),r.jsx("p",{className:"newsletter-note",children:"We respect your privacy. Unsubscribe at any time."})]})]}),r.jsx("div",{className:"footer-bottom",children:r.jsxs("div",{className:"footer-bottom-content",children:[r.jsxs("span",{children:["© ",u," Institute of Global Technology. All Rights Reserved."]}),r.jsxs("div",{className:"footer-bottom-links",children:[r.jsx("a",{href:"#","aria-label":"Terms of Use",children:"Terms of Use"}),r.jsx("a",{href:"#","aria-label":"Privacy Policy",children:"Privacy Policy"}),r.jsx("a",{href:"#","aria-label":"Accessibility",children:"Accessibility"}),r.jsx("a",{href:"#","aria-label":"Contact Support",children:"Support"})]})]})})]})})},Rx=()=>r.jsxs(r.Fragment,{children:[r.jsx(px,{}),r.jsx(hx,{}),r.jsx(xx,{}),r.jsx(wx,{}),r.jsx(jx,{}),r.jsx(Dx,{}),r.jsx(Ex,{})]}),Tx=[{name:"AI & Machine Learning",description:"Developing AI and ML algorithms, models, and applications for various industries.",researchAreas:["Natural Language Processing","Computer Vision","Predictive Analytics","Robotics"],image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg"},{name:"Cybersecurity",description:"Investigating cybersecurity threats, vulnerabilities, and countermeasures.",researchAreas:["Threat Intelligence","Incident Response","Cryptography","Network Security"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Data Science & Analytics",description:"Developing data-driven solutions for insights and decision-making.",researchAreas:["Big Data Analytics","Data Visualization","Predictive Modelling","Statistical Analysis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"IoT & Edge Computing",description:"Designing and implementing IoT systems and edge computing architectures.",researchAreas:["IoT Security","Edge AI","Real-time Analytics","Industrial Automation"],image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp"},{name:"Sustainable Energy",description:"Investigating sustainable energy solutions and climate change mitigation.",researchAreas:["Renewable Energy","Energy Storage","Green Buildings","Sustainable Infrastructure"],image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Biotechnology & Healthcare",description:"Developing innovative solutions for healthcare and medicine.",researchAreas:["Personalized Medicine","Regenerative Medicine","Gene Editing","Medical Imaging"],image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"},{name:"Robotics & Autonomous Systems",description:"Designing advanced robotic systems and autonomous vehicles.",researchAreas:["Robotics","Autonomous Systems","Human-Robot Interaction","Swarm Robotics"],image:"https://media.licdn.com/dms/image/v2/D5612AQFLdebIV4BTYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721157098257?e=1761782400&v=beta&t=yLMm79DcuvTBA2jgbmubv_CMdyNlY8RQ8Kli_bTzNMo"},{name:"Advanced Materials",description:"Investigating novel materials and manufacturing processes.",researchAreas:["Nanomaterials","Biomaterials","3D Printing","Advanced Manufacturing"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Human-Computer Interaction",description:"Developing user-centered interfaces and experiences.",researchAreas:["User Experience Design","Human-Computer Interaction","Accessibility","Usability"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Zoology & Animal Biotechnology",description:"Exploring the genetic and cellular aspects of animals for sustainable development.",researchAreas:["Animal Genetics","Cellular Biotechnology","Wildlife Conservation","Veterinary Applications"],image:"https://i.ibb.co/WNZ4GPQ1/download-11.jpg"},{name:"Botany & Plant Biotechnology",description:"Advancing plant science through genetic engineering and sustainable agriculture.",researchAreas:["Plant Tissue Culture","Genetically Modified Crops","Medicinal Plants","Agro-biotechnology"],image:"https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg"},{name:"Quantum Computing",description:"Exploring quantum computing and emerging technologies.",researchAreas:["Quantum Algorithms","Quantum Applications","Blockchain","Distributed Ledger Tech"],image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}],Cx=()=>r.jsxs("section",{className:"departments-page",children:[r.jsx("div",{className:"page-banner departments-banner",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Our Research Departments"}),r.jsx("p",{children:"Explore our specialized research departments that are pushing the boundaries of knowledge and innovation"})]})}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"department-grid",children:Tx.map((o,d)=>r.jsxs("div",{className:"department-card",children:[r.jsx("img",{src:o.image,alt:o.name}),r.jsxs("div",{className:"department-card-content",children:[r.jsx("h3",{children:o.name}),r.jsx("p",{children:o.description}),r.jsx("strong",{children:"Research Areas:"}),r.jsx("ul",{children:o.researchAreas.map((f,u)=>r.jsx("li",{children:f},u))}),r.jsx("a",{href:"#",children:"Explore Department"})]})]},d))})})]}),Nx=[{name:"Dr Ipseeta Nanda",title:"Hon.Director Dean IGT",bio:"With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.",image:"https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Rahul Vadiseety",title:"Director AI",bio:"Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.",image:"https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr. Rath Satyasambit",title:"Director Robotics",bio:"Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",image:"https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Harshichander",title:"Director Biology",bio:"Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.",image:"https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png",social:{email:"#",linkedin:"#",scholar:"#"}}],zx=()=>r.jsxs("section",{className:"faculty-page",children:[r.jsxs("div",{className:"faculty-header",children:[r.jsx("h2",{children:"Our Distinguished Faculty"}),r.jsx("p",{children:"Meet our accomplished faculty members who are experts in their fields and dedicated to student success."})]}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"faculty-grid",children:Nx.map((o,d)=>r.jsx("div",{className:"faculty-box",children:r.jsxs("div",{className:"faculty-card",children:[r.jsx("img",{src:o.image,alt:`Portrait of ${o.name}`,className:"faculty-image"}),r.jsxs("div",{className:"faculty-content",children:[r.jsx("h3",{children:o.name}),r.jsx("span",{className:"title",children:o.title}),r.jsx("p",{children:o.bio}),r.jsxs("div",{className:"faculty-social",children:[r.jsx("a",{href:o.social.email,"aria-label":"Email",children:r.jsx("i",{className:"fas fa-envelope"})}),r.jsx("a",{href:o.social.linkedin,"aria-label":"LinkedIn",children:r.jsx("i",{className:"fab fa-linkedin-in"})}),r.jsx("a",{href:o.social.scholar,"aria-label":"Google Scholar",children:r.jsx("i",{className:"ai ai-google-scholar"})})]})]})]})},d))})})]}),Ox=()=>{const o=Jt();return M.useEffect(()=>{window.scrollTo(0,0)},[o.pathname]),r.jsxs(r.Fragment,{children:[r.jsx(fx,{}),r.jsx(mx,{}),r.jsx(gx,{activePage:o.pathname}),r.jsx("main",{children:r.jsxs(e0,{children:[r.jsx(jt,{path:"/",element:r.jsx(Xf,{to:"/home",replace:!0})}),r.jsx(jt,{path:"/home",element:r.jsx(Rx,{})}),r.jsx(jt,{path:"/programs",element:r.jsx(vx,{})}),r.jsx(jt,{path:"/program/:programSlug",element:r.jsx(dx,{})}),r.jsx(jt,{path:"/departments",element:r.jsx(Cx,{})}),r.jsx(jt,{path:"/faculty",element:r.jsx(zx,{})}),r.jsx(jt,{path:"/admissions",element:r.jsx(yx,{})}),r.jsx(jt,{path:"/contact",element:r.jsx(Ax,{})}),r.jsx(jt,{path:"/tour",element:r.jsx(Sx,{})}),r.jsx(jt,{path:"*",element:r.jsx(Xf,{to:"/home",replace:!0})})]})}),r.jsx(Mx,{})]})};function kx(){return r.jsx(w0,{children:r.jsx(Ox,{})})}const gm=document.getElementById("root");gm&&ch.createRoot(gm).render(r.jsx(th.StrictMode,{children:r.jsx(kx,{})}));
