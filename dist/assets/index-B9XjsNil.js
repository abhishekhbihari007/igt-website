(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const w of b.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&c(w)}).observe(document,{childList:!0,subtree:!0});function f(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(m){if(m.ep)return;m.ep=!0;const b=f(m);fetch(m.href,b)}})();function em(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vo={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function Yh(){if(Mf)return Ri;Mf=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(c,m,b){var w=null;if(b!==void 0&&(w=""+b),m.key!==void 0&&(w=""+m.key),"key"in m){b={};for(var D in m)D!=="key"&&(b[D]=m[D])}else b=m;return m=b.ref,{$$typeof:s,type:c,key:w,ref:m!==void 0?m:null,props:b}}return Ri.Fragment=d,Ri.jsx=f,Ri.jsxs=f,Ri}var Of;function qh(){return Of||(Of=1,vo.exports=Yh()),vo.exports}var l=qh(),yo={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function Hh(){if(Cf)return te;Cf=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),_=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=_&&g[_]||g["@@iterator"],typeof g=="function"?g:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,P={};function B(g,C,q){this.props=g,this.context=C,this.refs=P,this.updater=q||G}B.prototype.isReactComponent={},B.prototype.setState=function(g,C){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,C,"setState")},B.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function V(){}V.prototype=B.prototype;function L(g,C,q){this.props=g,this.context=C,this.refs=P,this.updater=q||G}var ee=L.prototype=new V;ee.constructor=L,Q(ee,B.prototype),ee.isPureReactComponent=!0;var je=Array.isArray,W={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function De(g,C,q,k,F,se){return q=se.ref,{$$typeof:s,type:g,key:C,ref:q!==void 0?q:null,props:se}}function _e(g,C){return De(g.type,C,void 0,void 0,void 0,g.props)}function we(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function Ie(g){var C={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return C[q]})}var ut=/\/+/g;function Ge(g,C){return typeof g=="object"&&g!==null&&g.key!=null?Ie(""+g.key):C.toString(36)}function wa(){}function Aa(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(wa,wa):(g.status="pending",g.then(function(C){g.status==="pending"&&(g.status="fulfilled",g.value=C)},function(C){g.status==="pending"&&(g.status="rejected",g.reason=C)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Xe(g,C,q,k,F){var se=typeof g;(se==="undefined"||se==="boolean")&&(g=null);var I=!1;if(g===null)I=!0;else switch(se){case"bigint":case"string":case"number":I=!0;break;case"object":switch(g.$$typeof){case s:case d:I=!0;break;case E:return I=g._init,Xe(I(g._payload),C,q,k,F)}}if(I)return F=F(g),I=k===""?"."+Ge(g,0):k,je(F)?(q="",I!=null&&(q=I.replace(ut,"$&/")+"/"),Xe(F,C,q,"",function(Pt){return Pt})):F!=null&&(we(F)&&(F=_e(F,q+(F.key==null||g&&g.key===F.key?"":(""+F.key).replace(ut,"$&/")+"/")+I)),C.push(F)),1;I=0;var et=k===""?".":k+":";if(je(g))for(var be=0;be<g.length;be++)k=g[be],se=et+Ge(k,be),I+=Xe(k,C,q,se,F);else if(be=Y(g),typeof be=="function")for(g=be.call(g),be=0;!(k=g.next()).done;)k=k.value,se=et+Ge(k,be++),I+=Xe(k,C,q,se,F);else if(se==="object"){if(typeof g.then=="function")return Xe(Aa(g),C,q,k,F);throw C=String(g),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return I}function R(g,C,q){if(g==null)return g;var k=[],F=0;return Xe(g,k,"","",function(se){return C.call(q,se,F++)}),k}function U(g){if(g._status===-1){var C=g._result;C=C(),C.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=C)}if(g._status===1)return g._result.default;throw g._result}var J=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function he(){}return te.Children={map:R,forEach:function(g,C,q){R(g,function(){C.apply(this,arguments)},q)},count:function(g){var C=0;return R(g,function(){C++}),C},toArray:function(g){return R(g,function(C){return C})||[]},only:function(g){if(!we(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=B,te.Fragment=f,te.Profiler=m,te.PureComponent=L,te.StrictMode=c,te.Suspense=j,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,te.__COMPILER_RUNTIME={__proto__:null,c:function(g){return W.H.useMemoCache(g)}},te.cache=function(g){return function(){return g.apply(null,arguments)}},te.cloneElement=function(g,C,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var k=Q({},g.props),F=g.key,se=void 0;if(C!=null)for(I in C.ref!==void 0&&(se=void 0),C.key!==void 0&&(F=""+C.key),C)!Ce.call(C,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&C.ref===void 0||(k[I]=C[I]);var I=arguments.length-2;if(I===1)k.children=q;else if(1<I){for(var et=Array(I),be=0;be<I;be++)et[be]=arguments[be+2];k.children=et}return De(g.type,F,void 0,void 0,se,k)},te.createContext=function(g){return g={$$typeof:w,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},te.createElement=function(g,C,q){var k,F={},se=null;if(C!=null)for(k in C.key!==void 0&&(se=""+C.key),C)Ce.call(C,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(F[k]=C[k]);var I=arguments.length-2;if(I===1)F.children=q;else if(1<I){for(var et=Array(I),be=0;be<I;be++)et[be]=arguments[be+2];F.children=et}if(g&&g.defaultProps)for(k in I=g.defaultProps,I)F[k]===void 0&&(F[k]=I[k]);return De(g,se,void 0,void 0,null,F)},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:D,render:g}},te.isValidElement=we,te.lazy=function(g){return{$$typeof:E,_payload:{_status:-1,_result:g},_init:U}},te.memo=function(g,C){return{$$typeof:h,type:g,compare:C===void 0?null:C}},te.startTransition=function(g){var C=W.T,q={};W.T=q;try{var k=g(),F=W.S;F!==null&&F(q,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(he,J)}catch(se){J(se)}finally{W.T=C}},te.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},te.use=function(g){return W.H.use(g)},te.useActionState=function(g,C,q){return W.H.useActionState(g,C,q)},te.useCallback=function(g,C){return W.H.useCallback(g,C)},te.useContext=function(g){return W.H.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g,C){return W.H.useDeferredValue(g,C)},te.useEffect=function(g,C,q){var k=W.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return k.useEffect(g,C)},te.useId=function(){return W.H.useId()},te.useImperativeHandle=function(g,C,q){return W.H.useImperativeHandle(g,C,q)},te.useInsertionEffect=function(g,C){return W.H.useInsertionEffect(g,C)},te.useLayoutEffect=function(g,C){return W.H.useLayoutEffect(g,C)},te.useMemo=function(g,C){return W.H.useMemo(g,C)},te.useOptimistic=function(g,C){return W.H.useOptimistic(g,C)},te.useReducer=function(g,C,q){return W.H.useReducer(g,C,q)},te.useRef=function(g){return W.H.useRef(g)},te.useState=function(g){return W.H.useState(g)},te.useSyncExternalStore=function(g,C,q){return W.H.useSyncExternalStore(g,C,q)},te.useTransition=function(){return W.H.useTransition()},te.version="19.1.1",te}var _f;function Do(){return _f||(_f=1,yo.exports=Hh()),yo.exports}var T=Do();const Bh=em(T);var jo={exports:{}},Di={},So={exports:{}},wo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function Lh(){return kf||(kf=1,(function(s){function d(R,U){var J=R.length;R.push(U);e:for(;0<J;){var he=J-1>>>1,g=R[he];if(0<m(g,U))R[he]=U,R[J]=g,J=he;else break e}}function f(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var U=R[0],J=R.pop();if(J!==U){R[0]=J;e:for(var he=0,g=R.length,C=g>>>1;he<C;){var q=2*(he+1)-1,k=R[q],F=q+1,se=R[F];if(0>m(k,J))F<g&&0>m(se,k)?(R[he]=se,R[F]=J,he=F):(R[he]=k,R[q]=J,he=q);else if(F<g&&0>m(se,J))R[he]=se,R[F]=J,he=F;else break e}}return U}function m(R,U){var J=R.sortIndex-U.sortIndex;return J!==0?J:R.id-U.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;s.unstable_now=function(){return b.now()}}else{var w=Date,D=w.now();s.unstable_now=function(){return w.now()-D}}var j=[],h=[],E=1,_=null,Y=3,G=!1,Q=!1,P=!1,B=!1,V=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function je(R){for(var U=f(h);U!==null;){if(U.callback===null)c(h);else if(U.startTime<=R)c(h),U.sortIndex=U.expirationTime,d(j,U);else break;U=f(h)}}function W(R){if(P=!1,je(R),!Q)if(f(j)!==null)Q=!0,Ce||(Ce=!0,Ge());else{var U=f(h);U!==null&&Xe(W,U.startTime-R)}}var Ce=!1,De=-1,_e=5,we=-1;function Ie(){return B?!0:!(s.unstable_now()-we<_e)}function ut(){if(B=!1,Ce){var R=s.unstable_now();we=R;var U=!0;try{e:{Q=!1,P&&(P=!1,L(De),De=-1),G=!0;var J=Y;try{t:{for(je(R),_=f(j);_!==null&&!(_.expirationTime>R&&Ie());){var he=_.callback;if(typeof he=="function"){_.callback=null,Y=_.priorityLevel;var g=he(_.expirationTime<=R);if(R=s.unstable_now(),typeof g=="function"){_.callback=g,je(R),U=!0;break t}_===f(j)&&c(j),je(R)}else c(j);_=f(j)}if(_!==null)U=!0;else{var C=f(h);C!==null&&Xe(W,C.startTime-R),U=!1}}break e}finally{_=null,Y=J,G=!1}U=void 0}}finally{U?Ge():Ce=!1}}}var Ge;if(typeof ee=="function")Ge=function(){ee(ut)};else if(typeof MessageChannel<"u"){var wa=new MessageChannel,Aa=wa.port2;wa.port1.onmessage=ut,Ge=function(){Aa.postMessage(null)}}else Ge=function(){V(ut,0)};function Xe(R,U){De=V(function(){R(s.unstable_now())},U)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return Y},s.unstable_next=function(R){switch(Y){case 1:case 2:case 3:var U=3;break;default:U=Y}var J=Y;Y=U;try{return R()}finally{Y=J}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=Y;Y=R;try{return U()}finally{Y=J}},s.unstable_scheduleCallback=function(R,U,J){var he=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,R){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=J+g,R={id:E++,callback:U,priorityLevel:R,startTime:J,expirationTime:g,sortIndex:-1},J>he?(R.sortIndex=J,d(h,R),f(j)===null&&R===f(h)&&(P?(L(De),De=-1):P=!0,Xe(W,J-he))):(R.sortIndex=g,d(j,R),Q||G||(Q=!0,Ce||(Ce=!0,Ge()))),R},s.unstable_shouldYield=Ie,s.unstable_wrapCallback=function(R){var U=Y;return function(){var J=Y;Y=U;try{return R.apply(this,arguments)}finally{Y=J}}}})(wo)),wo}var Uf;function Gh(){return Uf||(Uf=1,So.exports=Lh()),So.exports}var Ao={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Xh(){if(Yf)return Fe;Yf=1;var s=Do();function d(j){var h="https://react.dev/errors/"+j;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+j+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(j,h,E){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:_==null?null:""+_,children:j,containerInfo:h,implementation:E}}var w=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(j,h){if(j==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Fe.createPortal=function(j,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(d(299));return b(j,h,null,E)},Fe.flushSync=function(j){var h=w.T,E=c.p;try{if(w.T=null,c.p=2,j)return j()}finally{w.T=h,c.p=E,c.d.f()}},Fe.preconnect=function(j,h){typeof j=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(j,h))},Fe.prefetchDNS=function(j){typeof j=="string"&&c.d.D(j)},Fe.preinit=function(j,h){if(typeof j=="string"&&h&&typeof h.as=="string"){var E=h.as,_=D(E,h.crossOrigin),Y=typeof h.integrity=="string"?h.integrity:void 0,G=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?c.d.S(j,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:Y,fetchPriority:G}):E==="script"&&c.d.X(j,{crossOrigin:_,integrity:Y,fetchPriority:G,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Fe.preinitModule=function(j,h){if(typeof j=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=D(h.as,h.crossOrigin);c.d.M(j,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(j)},Fe.preload=function(j,h){if(typeof j=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,_=D(E,h.crossOrigin);c.d.L(j,E,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Fe.preloadModule=function(j,h){if(typeof j=="string")if(h){var E=D(h.as,h.crossOrigin);c.d.m(j,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(j)},Fe.requestFormReset=function(j){c.d.r(j)},Fe.unstable_batchedUpdates=function(j,h){return j(h)},Fe.useFormState=function(j,h,E){return w.H.useFormState(j,h,E)},Fe.useFormStatus=function(){return w.H.useHostTransitionStatus()},Fe.version="19.1.1",Fe}var qf;function Qh(){if(qf)return Ao.exports;qf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Ao.exports=Xh(),Ao.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Vh(){if(Hf)return Di;Hf=1;var s=Gh(),d=Do(),f=Qh();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(b(e)!==e)throw Error(c(188))}function j(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return D(i),e;if(r===n)return D(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var o=!1,u=i.child;u;){if(u===a){o=!0,a=i,n=r;break}if(u===n){o=!0,n=i,a=r;break}u=u.sibling}if(!o){for(u=r.child;u;){if(u===a){o=!0,a=r,n=i;break}if(u===n){o=!0,n=r,a=i;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,_=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var wa=Symbol.for("react.client.reference");function Aa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case B:return"Profiler";case P:return"StrictMode";case W:return"Suspense";case Ce:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:Aa(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Aa(e(t))}catch{}}return null}var Xe=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},he=[],g=-1;function C(e){return{current:e}}function q(e){0>g||(e.current=he[g],he[g]=null,g--)}function k(e,t){g++,he[g]=e.current,e.current=t}var F=C(null),se=C(null),I=C(null),et=C(null);function be(e,t){switch(k(I,t),k(se,e),k(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lf(t),e=rf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(F),k(F,e)}function Pt(){q(F),q(se),q(I)}function nr(e){e.memoizedState!==null&&k(et,e);var t=F.current,a=rf(t,e.type);t!==a&&(k(se,e),k(F,a))}function ki(e){se.current===e&&(q(F),q(se)),et.current===e&&(q(et),Ai._currentValue=J)}var ir=Object.prototype.hasOwnProperty,lr=s.unstable_scheduleCallback,rr=s.unstable_cancelCallback,hm=s.unstable_shouldYield,gm=s.unstable_requestPaint,Et=s.unstable_now,xm=s.unstable_getCurrentPriorityLevel,qo=s.unstable_ImmediatePriority,Ho=s.unstable_UserBlockingPriority,Ui=s.unstable_NormalPriority,bm=s.unstable_LowPriority,Bo=s.unstable_IdlePriority,vm=s.log,ym=s.unstable_setDisableYieldValue,On=null,tt=null;function Wt(e){if(typeof vm=="function"&&ym(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(On,e)}catch{}}var at=Math.clz32?Math.clz32:wm,jm=Math.log,Sm=Math.LN2;function wm(e){return e>>>=0,e===0?32:31-(jm(e)/Sm|0)|0}var Yi=256,qi=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~r,n!==0?i=Na(n):(o&=u,o!==0?i=Na(o):a||(a=u&~e,a!==0&&(i=Na(a))))):(u=n&~r,u!==0?i=Na(u):o!==0?i=Na(o):a||(a=n&~e,a!==0&&(i=Na(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Am(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lo(){var e=Yi;return Yi<<=1,(Yi&4194048)===0&&(Yi=256),e}function Go(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function sr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nm(e,t,a,n,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(a=o&~a;0<a;){var z=31-at(a),O=1<<z;u[z]=0,p[z]=-1;var A=S[z];if(A!==null)for(S[z]=null,z=0;z<A.length;z++){var N=A[z];N!==null&&(N.lane&=-536870913)}a&=~O}n!==0&&Xo(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Xo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-at(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Qo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-at(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function or(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vo(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Nf(e.type))}function Em(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var It=Math.random().toString(36).slice(2),Qe="__reactFiber$"+It,Ke="__reactProps$"+It,Xa="__reactContainer$"+It,ur="__reactEvents$"+It,Tm="__reactListeners$"+It,zm="__reactHandles$"+It,Fo="__reactResources$"+It,kn="__reactMarker$"+It;function dr(e){delete e[Qe],delete e[Ke],delete e[ur],delete e[Tm],delete e[zm]}function Qa(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=uf(e);e!==null;){if(a=e[Qe])return a;e=uf(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Qe]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Fa(e){var t=e[Fo];return t||(t=e[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[kn]=!0}var Zo=new Set,Ko={};function Ea(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(Ko[e]=t,e=0;e<t.length;e++)Zo.add(t[e])}var Rm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jo={},$o={};function Dm(e){return ir.call($o,e)?!0:ir.call(Jo,e)?!1:Rm.test(e)?$o[e]=!0:(Jo[e]=!0,!1)}function Bi(e,t,a){if(Dm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Li(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var fr,Po;function Ka(e){if(fr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fr=t&&t[1]||"",Po=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+e+Po}var mr=!1;function pr(e,t){if(!e||mr)return"";mr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(N){var A=N}Reflect.construct(e,[],O)}else{try{O.call()}catch(N){A=N}e.call(O.prototype)}}else{try{throw Error()}catch(N){A=N}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(N){if(N&&A&&typeof N.stack=="string")return[N.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],u=r[1];if(o&&u){var p=o.split(`
`),S=u.split(`
`);for(i=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(n===p.length||i===S.length)for(n=p.length-1,i=S.length-1;1<=n&&0<=i&&p[n]!==S[i];)i--;for(;1<=n&&0<=i;n--,i--)if(p[n]!==S[i]){if(n!==1||i!==1)do if(n--,i--,0>i||p[n]!==S[i]){var z=`
`+p[n].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=n&&0<=i);break}}}finally{mr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ka(a):""}function Mm(e){switch(e.tag){case 26:case 27:case 5:return Ka(e.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 15:return pr(e.type,!1);case 11:return pr(e.type.render,!1);case 1:return pr(e.type,!0);case 31:return Ka("Activity");default:return""}}function Wo(e){try{var t="";do t+=Mm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Io(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Om(e){var t=Io(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=Om(e))}function ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Io(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cm=/[\n"\\]/g;function ft(e){return e.replace(Cm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hr(e,t,a,n,i,r,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?gr(e,o,dt(t)):a!=null?gr(e,o,dt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+dt(u):e.removeAttribute("name")}function tc(e,t,a,n,i,r,o,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function gr(e,t,a){t==="number"&&Xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ac(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function nc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Xe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ic(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||_m.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function lc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&ic(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&ic(e,r,t[r])}function xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var km=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(e){return Um.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var br=null;function vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Wa=null;function rc(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(hr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Ke]||null;if(!i)throw Error(c(90));hr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&ec(n)}break e;case"textarea":ac(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var yr=!1;function sc(e,t,a){if(yr)return e(t,a);yr=!0;try{var n=e(t);return n}finally{if(yr=!1,(Pa!==null||Wa!==null)&&(Rl(),Pa&&(t=Pa,e=Wa,Wa=Pa=null,rc(t),e)))for(t=0;t<e.length;t++)rc(e[t])}}function Yn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ke]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jr=!1;if(kt)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){jr=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{jr=!1}var ea=null,Sr=null,Vi=null;function oc(){if(Vi)return Vi;var e,t=Sr,a=t.length,n,i="value"in ea?ea.value:ea.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[r-n];n++);return Vi=i.slice(e,1<n?1-n:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function cc(){return!1}function Je(e){function t(a,n,i,r,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Zi:cc,this.isPropagationStopped=cc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=Je(Ta),Hn=E({},Ta,{view:0,detail:0}),Ym=Je(Hn),wr,Ar,Bn,Ji=E({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(wr=e.screenX-Bn.screenX,Ar=e.screenY-Bn.screenY):Ar=wr=0,Bn=e),wr)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),uc=Je(Ji),qm=E({},Ji,{dataTransfer:0}),Hm=Je(qm),Bm=E({},Hn,{relatedTarget:0}),Nr=Je(Bm),Lm=E({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=Je(Lm),Xm=E({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qm=Je(Xm),Vm=E({},Ta,{data:0}),dc=Je(Vm),Fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Km[e])?!!t[e]:!1}function Er(){return Jm}var $m=E({},Hn,{key:function(e){if(e.key){var t=Fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Er,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=Je($m),Wm=E({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=Je(Wm),Im=E({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Er}),ep=Je(Im),tp=E({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),ap=Je(tp),np=E({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ip=Je(np),lp=E({},Ta,{newState:0,oldState:0}),rp=Je(lp),sp=[9,13,27,32],Tr=kt&&"CompositionEvent"in window,Ln=null;kt&&"documentMode"in document&&(Ln=document.documentMode);var op=kt&&"TextEvent"in window&&!Ln,mc=kt&&(!Tr||Ln&&8<Ln&&11>=Ln),pc=" ",hc=!1;function gc(e,t){switch(e){case"keyup":return sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function cp(e,t){switch(e){case"compositionend":return xc(t);case"keypress":return t.which!==32?null:(hc=!0,pc);case"textInput":return e=t.data,e===pc&&hc?null:e;default:return null}}function up(e,t){if(Ia)return e==="compositionend"||!Tr&&gc(e,t)?(e=oc(),Vi=Sr=ea=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mc&&t.locale!=="ko"?null:t.data;default:return null}}var dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dp[e.type]:t==="textarea"}function vc(e,t,a,n){Pa?Wa?Wa.push(n):Wa=[n]:Pa=n,t=kl(t,"onChange"),0<t.length&&(a=new Ki("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Gn=null,Xn=null;function fp(e){Id(e,0)}function $i(e){var t=Un(e);if(ec(t))return e}function yc(e,t){if(e==="change")return t}var jc=!1;if(kt){var zr;if(kt){var Rr="oninput"in document;if(!Rr){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),Rr=typeof Sc.oninput=="function"}zr=Rr}else zr=!1;jc=zr&&(!document.documentMode||9<document.documentMode)}function wc(){Gn&&(Gn.detachEvent("onpropertychange",Ac),Xn=Gn=null)}function Ac(e){if(e.propertyName==="value"&&$i(Xn)){var t=[];vc(t,Xn,e,vr(e)),sc(fp,t)}}function mp(e,t,a){e==="focusin"?(wc(),Gn=t,Xn=a,Gn.attachEvent("onpropertychange",Ac)):e==="focusout"&&wc()}function pp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Xn)}function hp(e,t){if(e==="click")return $i(t)}function gp(e,t){if(e==="input"||e==="change")return $i(t)}function xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:xp;function Qn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ir.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var a=Nc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nc(a)}}function Tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xi(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bp=kt&&"documentMode"in document&&11>=document.documentMode,en=null,Mr=null,Vn=null,Or=!1;function Rc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Or||en==null||en!==Xi(n)||(n=en,"selectionStart"in n&&Dr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Qn(Vn,n)||(Vn=n,n=kl(Mr,"onSelect"),0<n.length&&(t=new Ki("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=en)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tn={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Cr={},Dc={};kt&&(Dc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ra(e){if(Cr[e])return Cr[e];if(!tn[e])return e;var t=tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Dc)return Cr[e]=t[a];return e}var Mc=Ra("animationend"),Oc=Ra("animationiteration"),Cc=Ra("animationstart"),vp=Ra("transitionrun"),yp=Ra("transitionstart"),jp=Ra("transitioncancel"),_c=Ra("transitionend"),kc=new Map,_r="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_r.push("scrollEnd");function yt(e,t){kc.set(e,t),Ea(t,[e])}var Uc=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Uc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Wo(t)},Uc.set(e,t),t)}return{value:e,source:t,stack:Wo(t)}}var pt=[],an=0,kr=0;function Pi(){for(var e=an,t=kr=an=0;t<e;){var a=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var i=pt[t];pt[t++]=null;var r=pt[t];if(pt[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}r!==0&&Yc(a,i,r)}}function Wi(e,t,a,n){pt[an++]=e,pt[an++]=t,pt[an++]=a,pt[an++]=n,kr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ur(e,t,a,n){return Wi(e,t,a,n),Ii(e)}function nn(e,t){return Wi(e,null,null,t),Ii(e)}function Yc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-at(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Ii(e){if(50<gi)throw gi=0,Gs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ln={};function Sp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,n){return new Sp(e,t,a,n)}function Yr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function el(e,t,a,n,i,r){var o=0;if(n=e,typeof e=="function")Yr(e)&&(o=1);else if(typeof e=="string")o=Ah(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=it(31,a,t,i),e.elementType=we,e.lanes=r,e;case Q:return Da(a.children,i,r,t);case P:o=8,i|=24;break;case B:return e=it(12,a,t,i|2),e.elementType=B,e.lanes=r,e;case W:return e=it(13,a,t,i),e.elementType=W,e.lanes=r,e;case Ce:return e=it(19,a,t,i),e.elementType=Ce,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case ee:o=10;break e;case L:o=9;break e;case je:o=11;break e;case De:o=14;break e;case _e:o=16,n=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=it(o,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Da(e,t,a,n){return e=it(7,e,n,t),e.lanes=a,e}function qr(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Hr(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rn=[],sn=0,tl=null,al=0,ht=[],gt=0,Ma=null,Yt=1,qt="";function Oa(e,t){rn[sn++]=al,rn[sn++]=tl,tl=e,al=t}function Hc(e,t,a){ht[gt++]=Yt,ht[gt++]=qt,ht[gt++]=Ma,Ma=e;var n=Yt;e=qt;var i=32-at(n)-1;n&=~(1<<i),a+=1;var r=32-at(t)+i;if(30<r){var o=i-i%5;r=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Yt=1<<32-at(t)+i|a<<i|n,qt=r+e}else Yt=1<<r|a<<i|n,qt=e}function Br(e){e.return!==null&&(Oa(e,1),Hc(e,1,0))}function Lr(e){for(;e===tl;)tl=rn[--sn],rn[sn]=null,al=rn[--sn],rn[sn]=null;for(;e===Ma;)Ma=ht[--gt],ht[gt]=null,qt=ht[--gt],ht[gt]=null,Yt=ht[--gt],ht[gt]=null}var Ze=null,Ae=null,ce=!1,Ca=null,Tt=!1,Gr=Error(c(519));function _a(e){var t=Error(c(418,""));throw Kn(mt(t,e)),Gr}function Bc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Qe]=e,t[Ke]=n,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<bi.length;a++)le(bi[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),tc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Gi(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),nc(t,n.value,n.defaultValue,n.children),Gi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||nf(t.textContent,a)?(n.popover!=null&&(le("beforetoggle",t),le("toggle",t)),n.onScroll!=null&&le("scroll",t),n.onScrollEnd!=null&&le("scrollend",t),n.onClick!=null&&(t.onclick=Ul),t=!0):t=!1,t||_a(e)}function Lc(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ze=Ze.return}}function Fn(e){if(e!==Ze)return!1;if(!ce)return Lc(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||io(e.type,e.memoizedProps)),a=!a),a&&Ae&&_a(e),Lc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ae=St(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ae=null}}else t===27?(t=Ae,ga(e.type)?(e=oo,oo=null,Ae=e):Ae=t):Ae=Ze?St(e.stateNode.nextSibling):null;return!0}function Zn(){Ae=Ze=null,ce=!1}function Gc(){var e=Ca;return e!==null&&(We===null?We=e:We.push.apply(We,e),Ca=null),e}function Kn(e){Ca===null?Ca=[e]:Ca.push(e)}var Xr=C(null),ka=null,Ht=null;function ta(e,t,a){k(Xr,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Xr.current,q(Xr)}function Qr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Vr(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=i;for(var p=0;p<t.length;p++)if(u.context===t[p]){r.lanes|=a,u=r.alternate,u!==null&&(u.lanes|=a),Qr(r.return,a,e),n||(o=null);break e}r=u.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),Qr(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Jn(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=i.type;nt(i.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(i===et.current){if(o=i.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ai):e=[Ai])}i=i.return}e!==null&&Vr(t,e,a,n),t.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ka=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Xc(ka,e)}function il(e,t){return ka===null&&Ua(e),Xc(e,t)}function Xc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(c(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var wp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Ap=s.unstable_scheduleCallback,Np=s.unstable_NormalPriority,Me={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fr(){return{controller:new wp,data:new Map,refCount:0}}function $n(e){e.refCount--,e.refCount===0&&Ap(Np,function(){e.controller.abort()})}var Pn=null,Zr=0,on=0,cn=null;function Ep(e,t){if(Pn===null){var a=Pn=[];Zr=0,on=Js(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Zr++,t.then(Qc,Qc),t}function Qc(){if(--Zr===0&&Pn!==null){cn!==null&&(cn.status="fulfilled");var e=Pn;Pn=null,on=0,cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Vc=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ep(e,t),Vc!==null&&Vc(e,t)};var Ya=C(null);function Kr(){var e=Ya.current;return e!==null?e:xe.pooledCache}function ll(e,t){t===null?k(Ya,Ya.current):k(Ya,t.pool)}function Fc(){var e=Kr();return e===null?null:{parent:Me._currentValue,pool:e}}var Wn=Error(c(460)),Zc=Error(c(474)),rl=Error(c(542)),Jr={then:function(){}};function Kc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function Jc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sl,sl),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e;default:if(typeof t.status=="string")t.then(sl,sl);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e}throw In=t,Wn}}var In=null;function $c(){if(In===null)throw Error(c(459));var e=In;return In=null,e}function Pc(e){if(e===Wn||e===rl)throw Error(c(483))}var aa=!1;function $r(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ue&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ii(e),Yc(e,null,a),t}return Wi(e,n,t,a),Ii(e)}function ei(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Qo(e,a)}}function Wr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ir=!1;function ti(){if(Ir){var e=cn;if(e!==null)throw e}}function ai(e,t,a,n){Ir=!1;var i=e.updateQueue;aa=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var p=u,S=p.next;p.next=null,o===null?r=S:o.next=S,o=p;var z=e.alternate;z!==null&&(z=z.updateQueue,u=z.lastBaseUpdate,u!==o&&(u===null?z.firstBaseUpdate=S:u.next=S,z.lastBaseUpdate=p))}if(r!==null){var O=i.baseState;o=0,z=S=p=null,u=r;do{var A=u.lane&-536870913,N=A!==u.lane;if(N?(re&A)===A:(n&A)===A){A!==0&&A===on&&(Ir=!0),z!==null&&(z=z.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var $=e,Z=u;A=t;var pe=a;switch(Z.tag){case 1:if($=Z.payload,typeof $=="function"){O=$.call(pe,O,A);break e}O=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=Z.payload,A=typeof $=="function"?$.call(pe,O,A):$,A==null)break e;O=E({},O,A);break e;case 2:aa=!0}}A=u.callback,A!==null&&(e.flags|=64,N&&(e.flags|=8192),N=i.callbacks,N===null?i.callbacks=[A]:N.push(A))}else N={lane:A,tag:u.tag,payload:u.payload,callback:u.callback,next:null},z===null?(S=z=N,p=O):z=z.next=N,o|=A;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;N=u,u=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);z===null&&(p=O),i.baseState=p,i.firstBaseUpdate=S,i.lastBaseUpdate=z,r===null&&(i.shared.lanes=0),fa|=o,e.lanes=o,e.memoizedState=O}}function Wc(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ic(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wc(a[e],t)}var un=C(null),ol=C(0);function eu(e,t){e=Zt,k(ol,e),k(un,t),Zt=e|t.baseLanes}function es(){k(ol,Zt),k(un,un.current)}function ts(){Zt=ol.current,q(un),q(ol)}var la=0,ae=null,fe=null,ze=null,cl=!1,dn=!1,qa=!1,ul=0,ni=0,fn=null,zp=0;function Ee(){throw Error(c(321))}function as(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function ns(e,t,a,n,i,r){return la=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Yu:qu,qa=!1,r=a(n,i),qa=!1,dn&&(r=au(t,a,n,i)),tu(e),r}function tu(e){R.H=gl;var t=fe!==null&&fe.next!==null;if(la=0,ze=fe=ae=null,cl=!1,ni=0,fn=null,t)throw Error(c(300));e===null||Ue||(e=e.dependencies,e!==null&&nl(e)&&(Ue=!0))}function au(e,t,a,n){ae=e;var i=0;do{if(dn&&(fn=null),ni=0,dn=!1,25<=i)throw Error(c(301));if(i+=1,ze=fe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=kp,r=t(a,n)}while(dn);return r}function Rp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ii(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(ae.flags|=1024),t}function is(){var e=ul!==0;return ul=0,e}function ls(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function rs(e){if(cl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cl=!1}la=0,ze=fe=ae=null,dn=!1,ni=ul=0,fn=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ae.memoizedState=ze=e:ze=ze.next=e,ze}function Re(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ze===null?ae.memoizedState:ze.next;if(t!==null)ze=t,fe=e;else{if(e===null)throw ae.alternate===null?Error(c(467)):Error(c(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ze===null?ae.memoizedState=ze=e:ze=ze.next=e}return ze}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ii(e){var t=ni;return ni+=1,fn===null&&(fn=[]),e=Jc(fn,e,t),t=ae,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Yu:qu),e}function dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ii(e);if(e.$$typeof===ee)return Ve(e)}throw Error(c(438,String(e)))}function os(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ss(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ie;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=Re();return cs(t,fe,e)}function cs(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var u=o=null,p=null,S=t,z=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(re&O)===O:(la&O)===O){var A=S.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===on&&(z=!0);else if((la&A)===A){S=S.next,A===on&&(z=!0);continue}else O={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(u=p=O,o=r):p=p.next=O,ae.lanes|=A,fa|=A;O=S.action,qa&&a(r,O),r=S.hasEagerState?S.eagerState:a(r,O)}else A={lane:O,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(u=p=A,o=r):p=p.next=A,ae.lanes|=O,fa|=O;S=S.next}while(S!==null&&S!==t);if(p===null?o=r:p.next=u,!nt(r,e.memoizedState)&&(Ue=!0,z&&(a=cn,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=p,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function us(e){var t=Re(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);nt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function nu(e,t,a){var n=ae,i=Re(),r=ce;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!nt((fe||i).memoizedState,a);o&&(i.memoizedState=a,Ue=!0),i=i.queue;var u=ru.bind(null,n,i,e);if(li(2048,8,u,[e]),i.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,mn(9,ml(),lu.bind(null,n,i,a,t),null),xe===null)throw Error(c(349));r||(la&124)!==0||iu(n,t,a)}return a}function iu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=ss(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function lu(e,t,a,n){t.value=a,t.getSnapshot=n,su(t)&&ou(e)}function ru(e,t,a){return a(function(){su(t)&&ou(e)})}function su(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function ou(e){var t=nn(e,2);t!==null&&ct(t,e,2)}function ds(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),qa){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function cu(e,t,a,n){return e.baseState=a,cs(e,fe,typeof n=="function"?n:Lt)}function Dp(e,t,a,n,i){if(hl(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};R.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,uu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function uu(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=R.T,o={};R.T=o;try{var u=a(i,n),p=R.S;p!==null&&p(o,u),du(e,t,u)}catch(S){fs(e,t,S)}finally{R.T=r}}else try{r=a(i,n),du(e,t,r)}catch(S){fs(e,t,S)}}function du(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){fu(e,t,n)},function(n){return fs(e,t,n)}):fu(e,t,a)}function fu(e,t,a){t.status="fulfilled",t.value=a,mu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,uu(e,a)))}function fs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,mu(t),t=t.next;while(t!==n)}e.action=null}function mu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pu(e,t){return t}function hu(e,t){if(ce){var a=xe.formState;if(a!==null){e:{var n=ae;if(ce){if(Ae){t:{for(var i=Ae,r=Tt;i.nodeType!==8;){if(!r){i=null;break t}if(i=St(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ae=St(i.nextSibling),n=i.data==="F!";break e}}_a(n)}n=!1}n&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pu,lastRenderedState:t},a.queue=n,a=_u.bind(null,ae,n),n.dispatch=a,n=ds(!1),r=xs.bind(null,ae,!1,n.queue),n=$e(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Dp.bind(null,ae,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function gu(e){var t=Re();return xu(t,fe,e)}function xu(e,t,a){if(t=cs(e,t,pu)[0],e=fl(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ii(t)}catch(o){throw o===Wn?rl:o}else n=t;t=Re();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,mn(9,ml(),Mp.bind(null,i,a),null)),[n,r,e]}function Mp(e,t){e.action=t}function bu(e){var t=Re(),a=fe;if(a!==null)return xu(t,a,e);Re(),t=t.memoizedState,a=Re();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=ss(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function ml(){return{destroy:void 0,resource:void 0}}function vu(){return Re().memoizedState}function pl(e,t,a,n){var i=$e();n=n===void 0?null:n,ae.flags|=e,i.memoizedState=mn(1|t,ml(),a,n)}function li(e,t,a,n){var i=Re();n=n===void 0?null:n;var r=i.memoizedState.inst;fe!==null&&n!==null&&as(n,fe.memoizedState.deps)?i.memoizedState=mn(t,r,a,n):(ae.flags|=e,i.memoizedState=mn(1|t,r,a,n))}function yu(e,t){pl(8390656,8,e,t)}function ju(e,t){li(2048,8,e,t)}function Su(e,t){return li(4,2,e,t)}function wu(e,t){return li(4,4,e,t)}function Au(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,a){a=a!=null?a.concat([e]):null,li(4,4,Au.bind(null,t,e),a)}function ms(){}function Eu(e,t){var a=Re();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&as(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Tu(e,t){var a=Re();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&as(t,n[1]))return n[0];if(n=e(),qa){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n}function ps(e,t,a){return a===void 0||(la&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Dd(),ae.lanes|=e,fa|=e,a)}function zu(e,t,a,n){return nt(a,t)?a:un.current!==null?(e=ps(e,a,n),nt(e,t)||(Ue=!0),e):(la&42)===0?(Ue=!0,e.memoizedState=a):(e=Dd(),ae.lanes|=e,fa|=e,t)}function Ru(e,t,a,n,i){var r=U.p;U.p=r!==0&&8>r?r:8;var o=R.T,u={};R.T=u,xs(e,!1,t,a);try{var p=i(),S=R.S;if(S!==null&&S(u,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var z=Tp(p,n);ri(e,t,z,ot(e))}else ri(e,t,n,ot(e))}catch(O){ri(e,t,{then:function(){},status:"rejected",reason:O},ot())}finally{U.p=r,R.T=o}}function Op(){}function hs(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Du(e).queue;Ru(e,i,t,J,a===null?Op:function(){return Mu(e),a(n)})}function Du(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mu(e){var t=Du(e).next.queue;ri(e,t,{},ot())}function gs(){return Ve(Ai)}function Ou(){return Re().memoizedState}function Cu(){return Re().memoizedState}function Cp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ot();e=na(a);var n=ia(t,e,a);n!==null&&(ct(n,t,a),ei(n,t,a)),t={cache:Fr()},e.payload=t;return}t=t.return}}function _p(e,t,a){var n=ot();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?ku(t,a):(a=Ur(e,t,a,n),a!==null&&(ct(a,e,n),Uu(a,t,n)))}function _u(e,t,a){var n=ot();ri(e,t,a,n)}function ri(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))ku(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,u=r(o,a);if(i.hasEagerState=!0,i.eagerState=u,nt(u,o))return Wi(e,t,i,0),xe===null&&Pi(),!1}catch{}finally{}if(a=Ur(e,t,i,n),a!==null)return ct(a,e,n),Uu(a,t,n),!0}return!1}function xs(e,t,a,n){if(n={lane:2,revertLane:Js(),action:n,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(t)throw Error(c(479))}else t=Ur(e,a,n,2),t!==null&&ct(t,e,2)}function hl(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function ku(e,t){dn=cl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Uu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Qo(e,a)}}var gl={readContext:Ve,use:dl,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee},Yu={readContext:Ve,use:dl,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:yu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pl(4194308,4,Au.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){pl(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var n=e();if(qa){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=$e();if(a!==void 0){var i=a(t);if(qa){Wt(!0);try{a(t)}finally{Wt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=_p.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=ds(e);var t=e.queue,a=_u.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ms,useDeferredValue:function(e,t){var a=$e();return ps(a,e,t)},useTransition:function(){var e=ds(!1);return e=Ru.bind(null,ae,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,i=$e();if(ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),xe===null)throw Error(c(349));(re&124)!==0||iu(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,yu(ru.bind(null,n,r,e),[e]),n.flags|=2048,mn(9,ml(),lu.bind(null,n,r,a,t),null),a},useId:function(){var e=$e(),t=xe.identifierPrefix;if(ce){var a=qt,n=Yt;a=(n&~(1<<32-at(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=ul++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=zp++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:gs,useFormState:hu,useActionState:hu,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xs.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:os,useCacheRefresh:function(){return $e().memoizedState=Cp.bind(null,ae)}},qu={readContext:Ve,use:dl,useCallback:Eu,useContext:Ve,useEffect:ju,useImperativeHandle:Nu,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:Tu,useReducer:fl,useRef:vu,useState:function(){return fl(Lt)},useDebugValue:ms,useDeferredValue:function(e,t){var a=Re();return zu(a,fe.memoizedState,e,t)},useTransition:function(){var e=fl(Lt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:nu,useId:Ou,useHostTransitionStatus:gs,useFormState:gu,useActionState:gu,useOptimistic:function(e,t){var a=Re();return cu(a,fe,e,t)},useMemoCache:os,useCacheRefresh:Cu},kp={readContext:Ve,use:dl,useCallback:Eu,useContext:Ve,useEffect:ju,useImperativeHandle:Nu,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:Tu,useReducer:us,useRef:vu,useState:function(){return us(Lt)},useDebugValue:ms,useDeferredValue:function(e,t){var a=Re();return fe===null?ps(a,e,t):zu(a,fe.memoizedState,e,t)},useTransition:function(){var e=us(Lt)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:nu,useId:Ou,useHostTransitionStatus:gs,useFormState:bu,useActionState:bu,useOptimistic:function(e,t){var a=Re();return fe!==null?cu(a,fe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:os,useCacheRefresh:Cu},pn=null,si=0;function xl(e){var t=si;return si+=1,pn===null&&(pn=[]),Jc(pn,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bl(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hu(e){var t=e._init;return t(e._payload)}function Bu(e){function t(v,x){if(e){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function a(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(v,x){return v=Ut(v,x),v.index=0,v.sibling=null,v}function r(v,x,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=67108866,x):y):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function o(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function u(v,x,y,M){return x===null||x.tag!==6?(x=qr(y,v.mode,M),x.return=v,x):(x=i(x,y),x.return=v,x)}function p(v,x,y,M){var H=y.type;return H===Q?z(v,x,y.props.children,M,y.key):x!==null&&(x.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===_e&&Hu(H)===x.type)?(x=i(x,y.props),oi(x,y),x.return=v,x):(x=el(y.type,y.key,y.props,null,v.mode,M),oi(x,y),x.return=v,x)}function S(v,x,y,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Hr(y,v.mode,M),x.return=v,x):(x=i(x,y.children||[]),x.return=v,x)}function z(v,x,y,M,H){return x===null||x.tag!==7?(x=Da(y,v.mode,M,H),x.return=v,x):(x=i(x,y),x.return=v,x)}function O(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=qr(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Y:return y=el(x.type,x.key,x.props,null,v.mode,y),oi(y,x),y.return=v,y;case G:return x=Hr(x,v.mode,y),x.return=v,x;case _e:var M=x._init;return x=M(x._payload),O(v,x,y)}if(Xe(x)||Ge(x))return x=Da(x,v.mode,y,null),x.return=v,x;if(typeof x.then=="function")return O(v,xl(x),y);if(x.$$typeof===ee)return O(v,il(v,x),y);bl(v,x)}return null}function A(v,x,y,M){var H=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return H!==null?null:u(v,x,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Y:return y.key===H?p(v,x,y,M):null;case G:return y.key===H?S(v,x,y,M):null;case _e:return H=y._init,y=H(y._payload),A(v,x,y,M)}if(Xe(y)||Ge(y))return H!==null?null:z(v,x,y,M,null);if(typeof y.then=="function")return A(v,x,xl(y),M);if(y.$$typeof===ee)return A(v,x,il(v,y),M);bl(v,y)}return null}function N(v,x,y,M,H){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return v=v.get(y)||null,u(x,v,""+M,H);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Y:return v=v.get(M.key===null?y:M.key)||null,p(x,v,M,H);case G:return v=v.get(M.key===null?y:M.key)||null,S(x,v,M,H);case _e:var ne=M._init;return M=ne(M._payload),N(v,x,y,M,H)}if(Xe(M)||Ge(M))return v=v.get(y)||null,z(x,v,M,H,null);if(typeof M.then=="function")return N(v,x,y,xl(M),H);if(M.$$typeof===ee)return N(v,x,y,il(x,M),H);bl(x,M)}return null}function $(v,x,y,M){for(var H=null,ne=null,X=x,K=x=0,qe=null;X!==null&&K<y.length;K++){X.index>K?(qe=X,X=null):qe=X.sibling;var oe=A(v,X,y[K],M);if(oe===null){X===null&&(X=qe);break}e&&X&&oe.alternate===null&&t(v,X),x=r(oe,x,K),ne===null?H=oe:ne.sibling=oe,ne=oe,X=qe}if(K===y.length)return a(v,X),ce&&Oa(v,K),H;if(X===null){for(;K<y.length;K++)X=O(v,y[K],M),X!==null&&(x=r(X,x,K),ne===null?H=X:ne.sibling=X,ne=X);return ce&&Oa(v,K),H}for(X=n(X);K<y.length;K++)qe=N(X,v,K,y[K],M),qe!==null&&(e&&qe.alternate!==null&&X.delete(qe.key===null?K:qe.key),x=r(qe,x,K),ne===null?H=qe:ne.sibling=qe,ne=qe);return e&&X.forEach(function(ja){return t(v,ja)}),ce&&Oa(v,K),H}function Z(v,x,y,M){if(y==null)throw Error(c(151));for(var H=null,ne=null,X=x,K=x=0,qe=null,oe=y.next();X!==null&&!oe.done;K++,oe=y.next()){X.index>K?(qe=X,X=null):qe=X.sibling;var ja=A(v,X,oe.value,M);if(ja===null){X===null&&(X=qe);break}e&&X&&ja.alternate===null&&t(v,X),x=r(ja,x,K),ne===null?H=ja:ne.sibling=ja,ne=ja,X=qe}if(oe.done)return a(v,X),ce&&Oa(v,K),H;if(X===null){for(;!oe.done;K++,oe=y.next())oe=O(v,oe.value,M),oe!==null&&(x=r(oe,x,K),ne===null?H=oe:ne.sibling=oe,ne=oe);return ce&&Oa(v,K),H}for(X=n(X);!oe.done;K++,oe=y.next())oe=N(X,v,K,oe.value,M),oe!==null&&(e&&oe.alternate!==null&&X.delete(oe.key===null?K:oe.key),x=r(oe,x,K),ne===null?H=oe:ne.sibling=oe,ne=oe);return e&&X.forEach(function(Uh){return t(v,Uh)}),ce&&Oa(v,K),H}function pe(v,x,y,M){if(typeof y=="object"&&y!==null&&y.type===Q&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Y:e:{for(var H=y.key;x!==null;){if(x.key===H){if(H=y.type,H===Q){if(x.tag===7){a(v,x.sibling),M=i(x,y.props.children),M.return=v,v=M;break e}}else if(x.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===_e&&Hu(H)===x.type){a(v,x.sibling),M=i(x,y.props),oi(M,y),M.return=v,v=M;break e}a(v,x);break}else t(v,x);x=x.sibling}y.type===Q?(M=Da(y.props.children,v.mode,M,y.key),M.return=v,v=M):(M=el(y.type,y.key,y.props,null,v.mode,M),oi(M,y),M.return=v,v=M)}return o(v);case G:e:{for(H=y.key;x!==null;){if(x.key===H)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){a(v,x.sibling),M=i(x,y.children||[]),M.return=v,v=M;break e}else{a(v,x);break}else t(v,x);x=x.sibling}M=Hr(y,v.mode,M),M.return=v,v=M}return o(v);case _e:return H=y._init,y=H(y._payload),pe(v,x,y,M)}if(Xe(y))return $(v,x,y,M);if(Ge(y)){if(H=Ge(y),typeof H!="function")throw Error(c(150));return y=H.call(y),Z(v,x,y,M)}if(typeof y.then=="function")return pe(v,x,xl(y),M);if(y.$$typeof===ee)return pe(v,x,il(v,y),M);bl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,x!==null&&x.tag===6?(a(v,x.sibling),M=i(x,y),M.return=v,v=M):(a(v,x),M=qr(y,v.mode,M),M.return=v,v=M),o(v)):a(v,x)}return function(v,x,y,M){try{si=0;var H=pe(v,x,y,M);return pn=null,H}catch(X){if(X===Wn||X===rl)throw X;var ne=it(29,X,null,v.mode);return ne.lanes=M,ne.return=v,ne}finally{}}}var hn=Bu(!0),Lu=Bu(!1),xt=C(null),zt=null;function ra(e){var t=e.alternate;k(Oe,Oe.current&1),k(xt,e),zt===null&&(t===null||un.current!==null||t.memoizedState!==null)&&(zt=e)}function Gu(e){if(e.tag===22){if(k(Oe,Oe.current),k(xt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else sa()}function sa(){k(Oe,Oe.current),k(xt,xt.current)}function Gt(e){q(xt),zt===e&&(zt=null),q(Oe)}var Oe=C(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||so(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function bs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vs={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ot(),i=na(n);i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(ct(t,e,n),ei(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ot(),i=na(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(ct(t,e,n),ei(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ot(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(ct(t,e,a),ei(t,e,a))}};function Xu(e,t,a,n,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!Qn(a,n)||!Qn(i,r):!0}function Qu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vu(e){yl(e)}function Fu(e){console.error(e)}function Zu(e){yl(e)}function jl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ku(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ys(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,t)},a}function Ju(e){return e=na(e),e.tag=3,e}function $u(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Ku(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ku(t,a,n),typeof i!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Up(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Jn(t,a,i,!0),a=xt.current,a!==null){switch(a.tag){case 13:return zt===null?Qs():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Jr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Fs(e,n,i)),!1;case 22:return a.flags|=65536,n===Jr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Fs(e,n,i)),!1}throw Error(c(435,a.tag))}return Fs(e,n,i),Qs(),!1}if(ce)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Gr&&(e=Error(c(422),{cause:n}),Kn(mt(e,a)))):(n!==Gr&&(t=Error(c(423),{cause:n}),Kn(mt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=mt(n,a),i=ys(e.stateNode,n,i),Wr(e,i),Ne!==4&&(Ne=2)),!1;var r=Error(c(520),{cause:n});if(r=mt(r,a),hi===null?hi=[r]:hi.push(r),Ne!==4&&(Ne=2),t===null)return!0;n=mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ys(a.stateNode,n,e),Wr(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Ju(i),$u(i,e,a,n),Wr(a,i),!1}a=a.return}while(a!==null);return!1}var Pu=Error(c(461)),Ue=!1;function He(e,t,a,n){t.child=e===null?Lu(t,null,a,n):hn(t,e.child,a,n)}function Wu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var u in n)u!=="ref"&&(o[u]=n[u])}else o=n;return Ua(t),n=ns(e,t,a,o,r,i),u=is(),e!==null&&!Ue?(ls(e,t,i),Xt(e,t,i)):(ce&&u&&Br(t),t.flags|=1,He(e,t,n,i),t.child)}function Iu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Yr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,ed(e,t,r,n,i)):(e=el(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!zs(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Qn,a(o,n)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=Ut(r,n),e.ref=t.ref,e.return=t,t.child=e}function ed(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Qn(r,n)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=n=r,zs(e,i))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return js(e,t,a,n,i)}function td(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return ad(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(t,r!==null?r.cachePool:null),r!==null?eu(t,r):es(),Gu(t);else return t.lanes=t.childLanes=536870912,ad(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(ll(t,r.cachePool),eu(t,r),sa(),t.memoizedState=null):(e!==null&&ll(t,null),es(),sa());return He(e,t,i,a),t.child}function ad(e,t,a,n){var i=Kr();return i=i===null?null:{parent:Me._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ll(t,null),es(),Gu(t),e!==null&&Jn(e,t,n,!0),null}function Sl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function js(e,t,a,n,i){return Ua(t),a=ns(e,t,a,n,void 0,i),n=is(),e!==null&&!Ue?(ls(e,t,i),Xt(e,t,i)):(ce&&n&&Br(t),t.flags|=1,He(e,t,a,i),t.child)}function nd(e,t,a,n,i,r){return Ua(t),t.updateQueue=null,a=au(t,n,a,i),tu(e),n=is(),e!==null&&!Ue?(ls(e,t,r),Xt(e,t,r)):(ce&&n&&Br(t),t.flags|=1,He(e,t,a,r),t.child)}function id(e,t,a,n,i){if(Ua(t),t.stateNode===null){var r=ln,o=a.contextType;typeof o=="object"&&o!==null&&(r=Ve(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=vs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},$r(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Ve(o):ln,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(bs(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&vs.enqueueReplaceState(r,r.state,null),ai(t,n,r,i),ti(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,p=Ha(a,u);r.props=p;var S=r.context,z=a.contextType;o=ln,typeof z=="object"&&z!==null&&(o=Ve(z));var O=a.getDerivedStateFromProps;z=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||S!==o)&&Qu(t,r,n,o),aa=!1;var A=t.memoizedState;r.state=A,ai(t,n,r,i),ti(),S=t.memoizedState,u||A!==S||aa?(typeof O=="function"&&(bs(t,a,O,n),S=t.memoizedState),(p=aa||Xu(t,a,p,n,A,S,o))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=S),r.props=n,r.state=S,r.context=o,n=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Pr(e,t),o=t.memoizedProps,z=Ha(a,o),r.props=z,O=t.pendingProps,A=r.context,S=a.contextType,p=ln,typeof S=="object"&&S!==null&&(p=Ve(S)),u=a.getDerivedStateFromProps,(S=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==O||A!==p)&&Qu(t,r,n,p),aa=!1,A=t.memoizedState,r.state=A,ai(t,n,r,i),ti();var N=t.memoizedState;o!==O||A!==N||aa||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof u=="function"&&(bs(t,a,u,n),N=t.memoizedState),(z=aa||Xu(t,a,z,n,A,N,p)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,N,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,N,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=N),r.props=n,r.state=N,r.context=p,n=z):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Sl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,a,i)):He(e,t,a,i),t.memoizedState=r.state,e=t.child):e=Xt(e,t,i),e}function ld(e,t,a,n){return Zn(),t.flags|=256,He(e,t,a,n),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ws(e){return{baseLanes:e,cachePool:Fc()}}function As(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function rd(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(i?ra(t):sa(),ce){var u=Ae,p;if(p=u){e:{for(p=u,u=Tt;p.nodeType!==8;){if(!u){u=null;break e}if(p=St(p.nextSibling),p===null){u=null;break e}}u=p}u!==null?(t.memoizedState={dehydrated:u,treeContext:Ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},p=it(18,null,null,0),p.stateNode=u,p.return=t,t.child=p,Ze=t,Ae=null,p=!0):p=!1}p||_a(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return so(u)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return u=n.children,n=n.fallback,i?(sa(),i=t.mode,u=wl({mode:"hidden",children:u},i),n=Da(n,i,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,i=t.child,i.memoizedState=ws(a),i.childLanes=As(e,o,a),t.memoizedState=Ss,n):(ra(t),Ns(t,u))}if(p=e.memoizedState,p!==null&&(u=p.dehydrated,u!==null)){if(r)t.flags&256?(ra(t),t.flags&=-257,t=Es(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),i=n.fallback,u=t.mode,n=wl({mode:"visible",children:n.children},u),i=Da(i,u,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,hn(t,e.child,null,a),n=t.child,n.memoizedState=ws(a),n.childLanes=As(e,o,a),t.memoizedState=Ss,t=i);else if(ra(t),so(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var S=o.dgst;o=S,n=Error(c(419)),n.stack="",n.digest=o,Kn({value:n,source:null,stack:null}),t=Es(e,t,a)}else if(Ue||Jn(e,t,a,!1),o=(a&e.childLanes)!==0,Ue||o){if(o=xe,o!==null&&(n=a&-a,n=(n&42)!==0?1:or(n),n=(n&(o.suspendedLanes|a))!==0?0:n,n!==0&&n!==p.retryLane))throw p.retryLane=n,nn(e,n),ct(o,e,n),Pu;u.data==="$?"||Qs(),t=Es(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ae=St(u.nextSibling),Ze=t,ce=!0,Ca=null,Tt=!1,e!==null&&(ht[gt++]=Yt,ht[gt++]=qt,ht[gt++]=Ma,Yt=e.id,qt=e.overflow,Ma=t),t=Ns(t,n.children),t.flags|=4096);return t}return i?(sa(),i=n.fallback,u=t.mode,p=e.child,S=p.sibling,n=Ut(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,S!==null?i=Ut(S,i):(i=Da(i,u,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,u=e.child.memoizedState,u===null?u=ws(a):(p=u.cachePool,p!==null?(S=Me._currentValue,p=p.parent!==S?{parent:S,pool:S}:p):p=Fc(),u={baseLanes:u.baseLanes|a,cachePool:p}),i.memoizedState=u,i.childLanes=As(e,o,a),t.memoizedState=Ss,n):(ra(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Ns(e,t){return t=wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wl(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Es(e,t,a){return hn(t,e.child,null,a),e=Ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Qr(e.return,t,a)}function Ts(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function od(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(He(e,t,n.children,a),n=Oe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,a,t);else if(e.tag===19)sd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(k(Oe,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Ts(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Ts(t,!0,a,null,r);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function zs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function Yp(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,Me,e.memoizedState.cache),Zn();break;case 27:case 5:nr(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?rd(e,t,a):(ra(t),e=Xt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Jn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return od(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(Oe,Oe.current),n)break;return null;case 22:case 23:return t.lanes=0,td(e,t,a);case 24:ta(t,Me,e.memoizedState.cache)}return Xt(e,t,a)}function cd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!zs(e,a)&&(t.flags&128)===0)return Ue=!1,Yp(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,ce&&(t.flags&1048576)!==0&&Hc(t,al,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Yr(n)?(e=Ha(n,e),t.tag=1,t=id(null,t,n,e,a)):(t.tag=0,t=js(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===je){t.tag=11,t=Wu(null,t,n,e,a);break e}else if(i===De){t.tag=14,t=Iu(null,t,n,e,a);break e}}throw t=Aa(n)||n,Error(c(306,t,""))}}return t;case 0:return js(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ha(n,t.pendingProps),id(e,t,n,i,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Pr(e,t),ai(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ta(t,Me,n),n!==r.cache&&Vr(t,[Me],a,!0),ti(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ld(e,t,n,a);break e}else if(n!==i){i=mt(Error(c(424)),t),Kn(i),t=ld(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=St(e.firstChild),Ze=t,ce=!0,Ca=null,Tt=!0,a=Lu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zn(),n===i){t=Xt(e,t,a);break e}He(e,t,n,a)}t=t.child}return t;case 26:return Sl(e,t),e===null?(a=pf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,n=Yl(I.current).createElement(a),n[Qe]=t,n[Ke]=e,Le(n,a,e),ke(n),t.stateNode=n):t.memoizedState=pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nr(t),e===null&&ce&&(n=t.stateNode=df(t.type,t.pendingProps,I.current),Ze=t,Tt=!0,i=Ae,ga(t.type)?(oo=i,Ae=St(n.firstChild)):Ae=i),He(e,t,t.pendingProps.children,a),Sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((i=n=Ae)&&(n=dh(n,t.type,t.pendingProps,Tt),n!==null?(t.stateNode=n,Ze=t,Ae=St(n.firstChild),Tt=!1,i=!0):i=!1),i||_a(t)),nr(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,io(i,r)?n=null:o!==null&&io(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ns(e,t,Rp,null,null,a),Ai._currentValue=i),Sl(e,t),He(e,t,n,a),t.child;case 6:return e===null&&ce&&((e=a=Ae)&&(a=fh(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ze=t,Ae=null,e=!0):e=!1),e||_a(t)),null;case 13:return rd(e,t,a);case 4:return be(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hn(t,null,n,a):He(e,t,n,a),t.child;case 11:return Wu(e,t,t.type,t.pendingProps,a);case 7:return He(e,t,t.pendingProps,a),t.child;case 8:return He(e,t,t.pendingProps.children,a),t.child;case 12:return He(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),He(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ua(t),i=Ve(i),n=n(i),t.flags|=1,He(e,t,n,a),t.child;case 14:return Iu(e,t,t.type,t.pendingProps,a);case 15:return ed(e,t,t.type,t.pendingProps,a);case 19:return od(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=wl(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ut(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return td(e,t,a);case 24:return Ua(t),n=Ve(Me),e===null?(i=Kr(),i===null&&(i=xe,r=Fr(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},$r(t),ta(t,Me,i)):((e.lanes&a)!==0&&(Pr(e,t),ai(t,null,null,a),ti()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,Me,n)):(n=r.cache,ta(t,Me,n),n!==i.cache&&Vr(t,[Me],a,!0))),He(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Qt(e){e.flags|=4}function ud(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vf(t)){if(t=xt.current,t!==null&&((re&4194048)===re?zt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==zt))throw In=Jr,Zc;e.flags|=8192}}function Al(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Go():536870912,e.lanes|=t,vn|=t)}function ci(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function qp(e,t,a){var n=t.pendingProps;switch(Lr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(Me),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gc())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Qt(t),a!==null?(Se(t),ud(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Qt(t),Se(t),ud(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==n&&Qt(t),Se(t),t.flags&=-16777217),null;case 27:ki(t),a=I.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Qt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Se(t),null}e=F.current,Fn(t)?Bc(t):(e=df(i,n,a),t.stateNode=e,Qt(t))}return Se(t),null;case 5:if(ki(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Qt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Se(t),null}if(e=F.current,Fn(t))Bc(t);else{switch(i=Yl(I.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[Qe]=t,e[Ke]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Le(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Qt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=I.current,Fn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Ze,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||nf(e.nodeValue,a)),e||_a(t)}else e=Yl(e).createTextNode(n),e[Qe]=t,t.stateNode=e}return Se(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Qe]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),i=!1}else i=Gc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Al(t,t.updateQueue),Se(t),null;case 4:return Pt(),e===null&&Is(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(q(Oe),i=t.memoizedState,i===null)return Se(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)ci(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=vl(e),r!==null){for(t.flags|=128,ci(i,!1),e=r.updateQueue,t.updateQueue=e,Al(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)qc(a,e),a=a.sibling;return k(Oe,Oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Et()>Tl&&(t.flags|=128,n=!0,ci(i,!1),t.lanes=4194304)}else{if(!n)if(e=vl(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Al(t,e),ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ce)return Se(t),null}else 2*Et()-i.renderingStartTime>Tl&&a!==536870912&&(t.flags|=128,n=!0,ci(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Et(),t.sibling=null,e=Oe.current,k(Oe,n?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Gt(t),ts(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Al(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&q(Ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Me),Se(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Hp(e,t){switch(Lr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(Me),Pt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ki(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Oe),null;case 4:return Pt(),null;case 10:return Bt(t.type),null;case 22:case 23:return Gt(t),ts(),e!==null&&q(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(Me),null;case 25:return null;default:return null}}function dd(e,t){switch(Lr(t),t.tag){case 3:Bt(Me),Pt();break;case 26:case 27:case 5:ki(t);break;case 4:Pt();break;case 13:Gt(t);break;case 19:q(Oe);break;case 10:Bt(t.type);break;case 22:case 23:Gt(t),ts(),e!==null&&q(Ya);break;case 24:Bt(Me)}}function ui(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==i)}}catch(u){ge(t,t.return,u)}}function oa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var o=n.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,i=t;var p=a,S=u;try{S()}catch(z){ge(i,p,z)}}}n=n.next}while(n!==r)}}catch(z){ge(t,t.return,z)}}function fd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ic(t,a)}catch(n){ge(e,e.return,n)}}}function md(e,t,a){a.props=Ha(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ge(e,t,n)}}function di(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ge(e,t,i)}}function Rt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ge(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ge(e,t,i)}else a.current=null}function pd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ge(e,e.return,i)}}function Rs(e,t,a){try{var n=e.stateNode;rh(n,e.type,a,t),n[Ke]=t}catch(i){ge(e,e.return,i)}}function hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ms(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ul));else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ms(e,t,a),e=e.sibling;e!==null;)Ms(e,t,a),e=e.sibling}function Nl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,t,a),e=e.sibling;e!==null;)Nl(e,t,a),e=e.sibling}function gd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Le(t,n,a),t[Qe]=e,t[Ke]=a}catch(r){ge(e,e.return,r)}}var Vt=!1,Te=!1,Os=!1,xd=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Bp(e,t){if(e=e.containerInfo,ao=Xl,e=zc(e),Dr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,u=-1,p=-1,S=0,z=0,O=e,A=null;t:for(;;){for(var N;O!==a||i!==0&&O.nodeType!==3||(u=o+i),O!==r||n!==0&&O.nodeType!==3||(p=o+n),O.nodeType===3&&(o+=O.nodeValue.length),(N=O.firstChild)!==null;)A=O,O=N;for(;;){if(O===e)break t;if(A===a&&++S===i&&(u=o),A===r&&++z===n&&(p=o),(N=O.nextSibling)!==null)break;O=A,A=O.parentNode}O=N}a=u===-1||p===-1?null:{start:u,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(no={focusedElem:e,selectionRange:a},Xl=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var $=Ha(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate($,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ge(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ro(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ro(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function bd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),n&4&&ui(5,a);break;case 1:if(ca(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(a,a.return,o)}else{var i=Ha(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(a,a.return,o)}}n&64&&fd(a),n&512&&di(a,a.return);break;case 3:if(ca(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ic(e,t)}catch(o){ge(a,a.return,o)}}break;case 27:t===null&&n&4&&gd(a);case 26:case 5:ca(e,a),t===null&&n&4&&pd(a),n&512&&di(a,a.return);break;case 12:ca(e,a);break;case 13:ca(e,a),n&4&&jd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Jp.bind(null,a),mh(e,a))));break;case 22:if(n=a.memoizedState!==null||Vt,!n){t=t!==null&&t.memoizedState!==null||Te,i=Vt;var r=Te;Vt=n,(Te=t)&&!r?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),Vt=i,Te=r}break;case 30:break;default:ca(e,a)}}function vd(e){var t=e.alternate;t!==null&&(e.alternate=null,vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,Pe=!1;function Ft(e,t,a){for(a=a.child;a!==null;)yd(e,t,a),a=a.sibling}function yd(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 26:Te||Rt(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Rt(a,t);var n=ve,i=Pe;ga(a.type)&&(ve=a.stateNode,Pe=!1),Ft(e,t,a),yi(a.stateNode),ve=n,Pe=i;break;case 5:Te||Rt(a,t);case 6:if(n=ve,i=Pe,ve=null,Ft(e,t,a),ve=n,Pe=i,ve!==null)if(Pe)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(a.stateNode)}catch(r){ge(a,t,r)}else try{ve.removeChild(a.stateNode)}catch(r){ge(a,t,r)}break;case 18:ve!==null&&(Pe?(e=ve,cf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zi(e)):cf(ve,a.stateNode));break;case 4:n=ve,i=Pe,ve=a.stateNode.containerInfo,Pe=!0,Ft(e,t,a),ve=n,Pe=i;break;case 0:case 11:case 14:case 15:Te||oa(2,a,t),Te||oa(4,a,t),Ft(e,t,a);break;case 1:Te||(Rt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&md(a,t,n)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:Te=(n=Te)||a.memoizedState!==null,Ft(e,t,a),Te=n;break;default:Ft(e,t,a)}}function jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zi(e)}catch(a){ge(t,t.return,a)}}function Lp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xd),t;default:throw Error(c(435,e.tag))}}function Cs(e,t){var a=Lp(e);t.forEach(function(n){var i=$p.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function lt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ga(u.type)){ve=u.stateNode,Pe=!1;break e}break;case 5:ve=u.stateNode,Pe=!1;break e;case 3:case 4:ve=u.stateNode.containerInfo,Pe=!0;break e}u=u.return}if(ve===null)throw Error(c(160));yd(r,o,i),ve=null,Pe=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}var jt=null;function Sd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),rt(e),n&4&&(oa(3,e,e.return),ui(3,e),oa(5,e,e.return));break;case 1:lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),n&64&&Vt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=jt;if(lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[kn]||r[Qe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),Le(r,n,a),r[Qe]=e,ke(r),n=r;break e;case"link":var o=xf("link","href",i).get(n+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(r=o[u],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}r=i.createElement(n),Le(r,n,a),i.head.appendChild(r);break;case"meta":if(o=xf("meta","content",i).get(n+(a.content||""))){for(u=0;u<o.length;u++)if(r=o[u],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}r=i.createElement(n),Le(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[Qe]=e,ke(r),n=r}e.stateNode=n}else bf(i,e.type,e.stateNode);else e.stateNode=gf(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?bf(i,e.type,e.stateNode):gf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Rs(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),a!==null&&n&4&&Rs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),e.flags&32){i=e.stateNode;try{$a(i,"")}catch(N){ge(e,e.return,N)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Rs(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Os=!0);break;case 6:if(lt(t,e),rt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(N){ge(e,e.return,N)}}break;case 3:if(Bl=null,i=jt,jt=ql(t.containerInfo),lt(t,e),jt=i,rt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(N){ge(e,e.return,N)}Os&&(Os=!1,wd(e));break;case 4:n=jt,jt=ql(e.stateNode.containerInfo),lt(t,e),rt(e),jt=n;break;case 12:lt(t,e),rt(e);break;case 13:lt(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hs=Et()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Cs(e,n)));break;case 22:i=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,S=Vt,z=Te;if(Vt=S||i,Te=z||p,lt(t,e),Te=z,Vt=S,rt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||p||Vt||Te||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(r=p.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=p.stateNode;var O=p.memoizedProps.style,A=O!=null&&O.hasOwnProperty("display")?O.display:null;u.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(N){ge(p,p.return,N)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(N){ge(p,p.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Cs(e,a))));break;case 19:lt(t,e),rt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Cs(e,n)));break;case 30:break;case 21:break;default:lt(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(hd(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=Ds(e);Nl(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&($a(o,""),a.flags&=-33);var u=Ds(e);Nl(e,u,o);break;case 3:case 4:var p=a.stateNode.containerInfo,S=Ds(e);Ms(e,S,p);break;default:throw Error(c(161))}}catch(z){ge(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bd(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),Ba(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&md(t,t.return,a),Ba(t);break;case 27:yi(t.stateNode);case 26:case 5:Rt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:ua(i,r,a),ui(4,r);break;case 1:if(ua(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){ge(n,n.return,S)}if(n=r,i=n.updateQueue,i!==null){var u=n.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)Wc(p[i],u)}catch(S){ge(n,n.return,S)}}a&&o&64&&fd(r),di(r,r.return);break;case 27:gd(r);case 26:case 5:ua(i,r,a),a&&n===null&&o&4&&pd(r),di(r,r.return);break;case 12:ua(i,r,a);break;case 13:ua(i,r,a),a&&o&4&&jd(i,r);break;case 22:r.memoizedState===null&&ua(i,r,a),di(r,r.return);break;case 30:break;default:ua(i,r,a)}t=t.sibling}}function _s(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$n(a))}function ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e))}function Dt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ad(e,t,a,n),t=t.sibling}function Ad(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,n),i&2048&&ui(9,t);break;case 1:Dt(e,t,a,n);break;case 3:Dt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e)));break;case 12:if(i&2048){Dt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,u=r.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ge(t,t.return,p)}}else Dt(e,t,a,n);break;case 13:Dt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Dt(e,t,a,n):fi(e,t):r._visibility&2?Dt(e,t,a,n):(r._visibility|=2,gn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&_s(o,t);break;case 24:Dt(e,t,a,n),i&2048&&ks(t.alternate,t);break;default:Dt(e,t,a,n)}}function gn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,u=a,p=n,S=o.flags;switch(o.tag){case 0:case 11:case 15:gn(r,o,u,p,i),ui(8,o);break;case 23:break;case 22:var z=o.stateNode;o.memoizedState!==null?z._visibility&2?gn(r,o,u,p,i):fi(r,o):(z._visibility|=2,gn(r,o,u,p,i)),i&&S&2048&&_s(o.alternate,o);break;case 24:gn(r,o,u,p,i),i&&S&2048&&ks(o.alternate,o);break;default:gn(r,o,u,p,i)}t=t.sibling}}function fi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:fi(a,n),i&2048&&_s(n.alternate,n);break;case 24:fi(a,n),i&2048&&ks(n.alternate,n);break;default:fi(a,n)}t=t.sibling}}var mi=8192;function xn(e){if(e.subtreeFlags&mi)for(e=e.child;e!==null;)Nd(e),e=e.sibling}function Nd(e){switch(e.tag){case 26:xn(e),e.flags&mi&&e.memoizedState!==null&&Eh(jt,e.memoizedState,e.memoizedProps);break;case 5:xn(e);break;case 3:case 4:var t=jt;jt=ql(e.stateNode.containerInfo),xn(e),jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=mi,mi=16777216,xn(e),mi=t):xn(e));break;default:xn(e)}}function Ed(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ye=n,zd(n,e)}Ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Td(e),e=e.sibling}function Td(e){switch(e.tag){case 0:case 11:case 15:pi(e),e.flags&2048&&oa(9,e,e.return);break;case 3:pi(e);break;case 12:pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,El(e)):pi(e);break;default:pi(e)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ye=n,zd(n,e)}Ed(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),El(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,El(t));break;default:El(t)}e=e.sibling}}function zd(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:$n(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ye=n;else e:for(a=e;Ye!==null;){n=Ye;var i=n.sibling,r=n.return;if(vd(n),n===a){Ye=null;break e}if(i!==null){i.return=r,Ye=i;break e}Ye=r}}}var Gp={getCacheForType:function(e){var t=Ve(Me),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Xp=typeof WeakMap=="function"?WeakMap:Map,ue=0,xe=null,ie=null,re=0,de=0,st=null,da=!1,bn=!1,Us=!1,Zt=0,Ne=0,fa=0,La=0,Ys=0,bt=0,vn=0,hi=null,We=null,qs=!1,Hs=0,Tl=1/0,zl=null,ma=null,Be=0,pa=null,yn=null,jn=0,Bs=0,Ls=null,Rd=null,gi=0,Gs=null;function ot(){if((ue&2)!==0&&re!==0)return re&-re;if(R.T!==null){var e=on;return e!==0?e:Js()}return Vo()}function Dd(){bt===0&&(bt=(re&536870912)===0||ce?Lo():536870912);var e=xt.current;return e!==null&&(e.flags|=32),bt}function ct(e,t,a){(e===xe&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),ha(e,re,bt,!1)),_n(e,a),((ue&2)===0||e!==xe)&&(e===xe&&((ue&2)===0&&(La|=a),Ne===4&&ha(e,re,bt,!1)),Mt(e))}function Md(e,t,a){if((ue&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Cn(e,t),i=n?Fp(e,t):Vs(e,t,!0),r=n;do{if(i===0){bn&&!n&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Qp(a)){i=Vs(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;i=hi;var p=u.current.memoizedState.isDehydrated;if(p&&(Sn(u,o).flags|=256),o=Vs(u,o,!1),o!==2){if(Us&&!p){u.errorRecoveryDisabledLanes|=r,La|=r,i=4;break e}r=We,We=i,r!==null&&(We===null?We=r:We.push.apply(We,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){Sn(e,0),ha(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ha(n,t,bt,!da);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Hs+300-Et(),10<i)){if(ha(n,t,bt,!da),Hi(n,0,!0)!==0)break e;n.timeoutHandle=sf(Od.bind(null,n,a,We,zl,qs,t,bt,La,vn,da,r,2,-0,0),i);break e}Od(n,a,We,zl,qs,t,bt,La,vn,da,r,0,-0,0)}}break}while(!0);Mt(e)}function Od(e,t,a,n,i,r,o,u,p,S,z,O,A,N){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(wi={stylesheets:null,count:0,unsuspend:Nh},Nd(t),O=Th(),O!==null)){e.cancelPendingCommit=O(Hd.bind(null,e,t,r,a,n,i,o,u,p,z,1,A,N)),ha(e,r,o,!S);return}Hd(e,t,r,a,n,i,o,u,p)}function Qp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!nt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,n){t&=~Ys,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-at(i),o=1<<r;n[r]=-1,i&=~o}a!==0&&Xo(e,a,t)}function Rl(){return(ue&6)===0?(xi(0),!1):!0}function Xs(){if(ie!==null){if(de===0)var e=ie.return;else e=ie,Ht=ka=null,rs(e),pn=null,si=0,e=ie;for(;e!==null;)dd(e.alternate,e),e=e.return;ie=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xs(),xe=e,ie=a=Ut(e.current,null),re=t,de=0,st=null,da=!1,bn=Cn(e,t),Us=!1,vn=bt=Ys=La=fa=Ne=0,We=hi=null,qs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-at(n),r=1<<i;t|=e[i],n&=~r}return Zt=t,Pi(),a}function Cd(e,t){ae=null,R.H=gl,t===Wn||t===rl?(t=$c(),de=3):t===Zc?(t=$c(),de=4):de=t===Pu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,ie===null&&(Ne=1,jl(e,mt(t,e.current)))}function _d(){var e=R.H;return R.H=gl,e===null?gl:e}function kd(){var e=R.A;return R.A=Gp,e}function Qs(){Ne=4,da||(re&4194048)!==re&&xt.current!==null||(bn=!0),(fa&134217727)===0&&(La&134217727)===0||xe===null||ha(xe,re,bt,!1)}function Vs(e,t,a){var n=ue;ue|=2;var i=_d(),r=kd();(xe!==e||re!==t)&&(zl=null,Sn(e,t)),t=!1;var o=Ne;e:do try{if(de!==0&&ie!==null){var u=ie,p=st;switch(de){case 8:Xs(),o=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var S=de;if(de=0,st=null,wn(e,u,p,S),a&&bn){o=0;break e}break;default:S=de,de=0,st=null,wn(e,u,p,S)}}Vp(),o=Ne;break}catch(z){Cd(e,z)}while(!0);return t&&e.shellSuspendCounter++,Ht=ka=null,ue=n,R.H=i,R.A=r,ie===null&&(xe=null,re=0,Pi()),o}function Vp(){for(;ie!==null;)Ud(ie)}function Fp(e,t){var a=ue;ue|=2;var n=_d(),i=kd();xe!==e||re!==t?(zl=null,Tl=Et()+500,Sn(e,t)):bn=Cn(e,t);e:do try{if(de!==0&&ie!==null){t=ie;var r=st;t:switch(de){case 1:de=0,st=null,wn(e,t,r,1);break;case 2:case 9:if(Kc(r)){de=0,st=null,Yd(t);break}t=function(){de!==2&&de!==9||xe!==e||(de=7),Mt(e)},r.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Kc(r)?(de=0,st=null,Yd(t)):(de=0,st=null,wn(e,t,r,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var u=ie;if(!o||vf(o)){de=0,st=null;var p=u.sibling;if(p!==null)ie=p;else{var S=u.return;S!==null?(ie=S,Dl(S)):ie=null}break t}}de=0,st=null,wn(e,t,r,5);break;case 6:de=0,st=null,wn(e,t,r,6);break;case 8:Xs(),Ne=6;break e;default:throw Error(c(462))}}Zp();break}catch(z){Cd(e,z)}while(!0);return Ht=ka=null,R.H=n,R.A=i,ue=a,ie!==null?0:(xe=null,re=0,Pi(),Ne)}function Zp(){for(;ie!==null&&!hm();)Ud(ie)}function Ud(e){var t=cd(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Dl(e):ie=t}function Yd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=nd(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=nd(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:rs(t);default:dd(a,t),t=ie=qc(t,Zt),t=cd(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Dl(e):ie=t}function wn(e,t,a,n){Ht=ka=null,rs(t),pn=null,si=0;var i=t.return;try{if(Up(e,i,t,a,re)){Ne=1,jl(e,mt(a,e.current)),ie=null;return}}catch(r){if(i!==null)throw ie=i,r;Ne=1,jl(e,mt(a,e.current)),ie=null;return}t.flags&32768?(ce||n===1?e=!0:bn||(re&536870912)!==0?e=!1:(da=e=!0,(n===2||n===9||n===3||n===6)&&(n=xt.current,n!==null&&n.tag===13&&(n.flags|=16384))),qd(t,e)):Dl(t)}function Dl(e){var t=e;do{if((t.flags&32768)!==0){qd(t,da);return}e=t.return;var a=qp(t.alternate,t,Zt);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ne===0&&(Ne=5)}function qd(e,t){do{var a=Hp(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Ne=6,ie=null}function Hd(e,t,a,n,i,r,o,u,p){e.cancelPendingCommit=null;do Ml();while(Be!==0);if((ue&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=kr,Nm(e,a,r,o,u,p),e===xe&&(ie=xe=null,re=0),yn=t,pa=e,jn=a,Bs=r,Ls=i,Rd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pp(Ui,function(){return Qd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,i=U.p,U.p=2,o=ue,ue|=4;try{Bp(e,t,a)}finally{ue=o,U.p=i,R.T=n}}Be=1,Bd(),Ld(),Gd()}}function Bd(){if(Be===1){Be=0;var e=pa,t=yn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=U.p;U.p=2;var i=ue;ue|=4;try{Sd(t,e);var r=no,o=zc(e.containerInfo),u=r.focusedElem,p=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&Tc(u.ownerDocument.documentElement,u)){if(p!==null&&Dr(u)){var S=p.start,z=p.end;if(z===void 0&&(z=S),"selectionStart"in u)u.selectionStart=S,u.selectionEnd=Math.min(z,u.value.length);else{var O=u.ownerDocument||document,A=O&&O.defaultView||window;if(A.getSelection){var N=A.getSelection(),$=u.textContent.length,Z=Math.min(p.start,$),pe=p.end===void 0?Z:Math.min(p.end,$);!N.extend&&Z>pe&&(o=pe,pe=Z,Z=o);var v=Ec(u,Z),x=Ec(u,pe);if(v&&x&&(N.rangeCount!==1||N.anchorNode!==v.node||N.anchorOffset!==v.offset||N.focusNode!==x.node||N.focusOffset!==x.offset)){var y=O.createRange();y.setStart(v.node,v.offset),N.removeAllRanges(),Z>pe?(N.addRange(y),N.extend(x.node,x.offset)):(y.setEnd(x.node,x.offset),N.addRange(y))}}}}for(O=[],N=u;N=N.parentNode;)N.nodeType===1&&O.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<O.length;u++){var M=O[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Xl=!!ao,no=ao=null}finally{ue=i,U.p=n,R.T=a}}e.current=t,Be=2}}function Ld(){if(Be===2){Be=0;var e=pa,t=yn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=U.p;U.p=2;var i=ue;ue|=4;try{bd(e,t.alternate,t)}finally{ue=i,U.p=n,R.T=a}}Be=3}}function Gd(){if(Be===4||Be===3){Be=0,gm();var e=pa,t=yn,a=jn,n=Rd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,yn=pa=null,Xd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ma=null),cr(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=R.T,i=U.p,U.p=2,R.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var u=n[o];r(u.value,{componentStack:u.stack})}}finally{R.T=t,U.p=i}}(jn&3)!==0&&Ml(),Mt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Gs?gi++:(gi=0,Gs=e):gi=0,xi(0)}}function Xd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$n(t)))}function Ml(e){return Bd(),Ld(),Gd(),Qd()}function Qd(){if(Be!==5)return!1;var e=pa,t=Bs;Bs=0;var a=cr(jn),n=R.T,i=U.p;try{U.p=32>a?32:a,R.T=null,a=Ls,Ls=null;var r=pa,o=jn;if(Be=0,yn=pa=null,jn=0,(ue&6)!==0)throw Error(c(331));var u=ue;if(ue|=4,Td(r.current),Ad(r,r.current,o,a),ue=u,xi(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(On,r)}catch{}return!0}finally{U.p=i,R.T=n,Xd(e,t)}}function Vd(e,t,a){t=mt(a,t),t=ys(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(_n(e,2),Mt(e))}function ge(e,t,a){if(e.tag===3)Vd(e,e,a);else for(;t!==null;){if(t.tag===3){Vd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ma===null||!ma.has(n))){e=mt(a,e),a=Ju(2),n=ia(t,a,2),n!==null&&($u(a,n,t,e),_n(n,2),Mt(n));break}}t=t.return}}function Fs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Xp;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Us=!0,i.add(a),e=Kp.bind(null,e,t,a),t.then(e,e))}function Kp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(Ne===4||Ne===3&&(re&62914560)===re&&300>Et()-Hs?(ue&2)===0&&Sn(e,0):Ys|=a,vn===re&&(vn=0)),Mt(e)}function Fd(e,t){t===0&&(t=Go()),e=nn(e,t),e!==null&&(_n(e,t),Mt(e))}function Jp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Fd(e,a)}function $p(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Fd(e,a)}function Pp(e,t){return lr(e,t)}var Ol=null,An=null,Zs=!1,Cl=!1,Ks=!1,Ga=0;function Mt(e){e!==An&&e.next===null&&(An===null?Ol=An=e:An=An.next=e),Cl=!0,Zs||(Zs=!0,Ip())}function xi(e,t){if(!Ks&&Cl){Ks=!0;do for(var a=!1,n=Ol;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var o=n.suspendedLanes,u=n.pingedLanes;r=(1<<31-at(42|e)+1)-1,r&=i&~(o&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,$d(n,r))}else r=re,r=Hi(n,n===xe?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Cn(n,r)||(a=!0,$d(n,r));n=n.next}while(a);Ks=!1}}function Wp(){Zd()}function Zd(){Cl=Zs=!1;var e=0;Ga!==0&&(sh()&&(e=Ga),Ga=0);for(var t=Et(),a=null,n=Ol;n!==null;){var i=n.next,r=Kd(n,t);r===0?(n.next=null,a===null?Ol=i:a.next=i,i===null&&(An=a)):(a=n,(e!==0||(r&3)!==0)&&(Cl=!0)),n=i}xi(e)}function Kd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-at(r),u=1<<o,p=i[o];p===-1?((u&a)===0||(u&n)!==0)&&(i[o]=Am(u,t)):p<=t&&(e.expiredLanes|=u),r&=~u}if(t=xe,a=re,a=Hi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&rr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&rr(n),cr(a)){case 2:case 8:a=Ho;break;case 32:a=Ui;break;case 268435456:a=Bo;break;default:a=Ui}return n=Jd.bind(null,e),a=lr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&rr(n),e.callbackPriority=2,e.callbackNode=null,2}function Jd(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ml()&&e.callbackNode!==a)return null;var n=re;return n=Hi(e,e===xe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Md(e,n,t),Kd(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Jd.bind(null,e):null)}function $d(e,t){if(Ml())return null;Md(e,t,!0)}function Ip(){ch(function(){(ue&6)!==0?lr(qo,Wp):Zd()})}function Js(){return Ga===0&&(Ga=Lo()),Ga}function Pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qi(""+e)}function Wd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function eh(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Pd((i[Ke]||null).action),o=n.submitter;o&&(t=(t=o[Ke]||null)?Pd(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var u=new Ki("action","action",null,n,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ga!==0){var p=o?Wd(i,o):new FormData(i);hs(a,{pending:!0,data:p,method:i.method,action:r},null,p)}}else typeof r=="function"&&(u.preventDefault(),p=o?Wd(i,o):new FormData(i),hs(a,{pending:!0,data:p,method:i.method,action:r},r,p))},currentTarget:i}]})}}for(var $s=0;$s<_r.length;$s++){var Ps=_r[$s],th=Ps.toLowerCase(),ah=Ps[0].toUpperCase()+Ps.slice(1);yt(th,"on"+ah)}yt(Mc,"onAnimationEnd"),yt(Oc,"onAnimationIteration"),yt(Cc,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(vp,"onTransitionRun"),yt(yp,"onTransitionStart"),yt(jp,"onTransitionCancel"),yt(_c,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function Id(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var u=n[o],p=u.instance,S=u.currentTarget;if(u=u.listener,p!==r&&i.isPropagationStopped())break e;r=u,i.currentTarget=S;try{r(i)}catch(z){yl(z)}i.currentTarget=null,r=p}else for(o=0;o<n.length;o++){if(u=n[o],p=u.instance,S=u.currentTarget,u=u.listener,p!==r&&i.isPropagationStopped())break e;r=u,i.currentTarget=S;try{r(i)}catch(z){yl(z)}i.currentTarget=null,r=p}}}}function le(e,t){var a=t[ur];a===void 0&&(a=t[ur]=new Set);var n=e+"__bubble";a.has(n)||(ef(t,e,2,!1),a.add(n))}function Ws(e,t,a){var n=0;t&&(n|=4),ef(a,e,n,t)}var _l="_reactListening"+Math.random().toString(36).slice(2);function Is(e){if(!e[_l]){e[_l]=!0,Zo.forEach(function(a){a!=="selectionchange"&&(nh.has(a)||Ws(a,!1,e),Ws(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_l]||(t[_l]=!0,Ws("selectionchange",!1,t))}}function ef(e,t,a,n){switch(Nf(t)){case 2:var i=Dh;break;case 8:i=Mh;break;default:i=po}a=i.bind(null,t,a,e),i=void 0,!jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function eo(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var u=n.stateNode.containerInfo;if(u===i)break;if(o===4)for(o=n.return;o!==null;){var p=o.tag;if((p===3||p===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;u!==null;){if(o=Qa(u),o===null)return;if(p=o.tag,p===5||p===6||p===26||p===27){n=r=o;continue e}u=u.parentNode}}n=n.return}sc(function(){var S=r,z=vr(a),O=[];e:{var A=kc.get(e);if(A!==void 0){var N=Ki,$=e;switch(e){case"keypress":if(Fi(a)===0)break e;case"keydown":case"keyup":N=Pm;break;case"focusin":$="focus",N=Nr;break;case"focusout":$="blur",N=Nr;break;case"beforeblur":case"afterblur":N=Nr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=ep;break;case Mc:case Oc:case Cc:N=Gm;break;case _c:N=ap;break;case"scroll":case"scrollend":N=Ym;break;case"wheel":N=ip;break;case"copy":case"cut":case"paste":N=Qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=fc;break;case"toggle":case"beforetoggle":N=rp}var Z=(t&4)!==0,pe=!Z&&(e==="scroll"||e==="scrollend"),v=Z?A!==null?A+"Capture":null:A;Z=[];for(var x=S,y;x!==null;){var M=x;if(y=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||y===null||v===null||(M=Yn(x,v),M!=null&&Z.push(vi(x,M,y))),pe)break;x=x.return}0<Z.length&&(A=new N(A,$,null,a,z),O.push({event:A,listeners:Z}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",A&&a!==br&&($=a.relatedTarget||a.fromElement)&&(Qa($)||$[Xa]))break e;if((N||A)&&(A=z.window===z?z:(A=z.ownerDocument)?A.defaultView||A.parentWindow:window,N?($=a.relatedTarget||a.toElement,N=S,$=$?Qa($):null,$!==null&&(pe=b($),Z=$.tag,$!==pe||Z!==5&&Z!==27&&Z!==6)&&($=null)):(N=null,$=S),N!==$)){if(Z=uc,M="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(Z=fc,M="onPointerLeave",v="onPointerEnter",x="pointer"),pe=N==null?A:Un(N),y=$==null?A:Un($),A=new Z(M,x+"leave",N,a,z),A.target=pe,A.relatedTarget=y,M=null,Qa(z)===S&&(Z=new Z(v,x+"enter",$,a,z),Z.target=y,Z.relatedTarget=pe,M=Z),pe=M,N&&$)t:{for(Z=N,v=$,x=0,y=Z;y;y=Nn(y))x++;for(y=0,M=v;M;M=Nn(M))y++;for(;0<x-y;)Z=Nn(Z),x--;for(;0<y-x;)v=Nn(v),y--;for(;x--;){if(Z===v||v!==null&&Z===v.alternate)break t;Z=Nn(Z),v=Nn(v)}Z=null}else Z=null;N!==null&&tf(O,A,N,Z,!1),$!==null&&pe!==null&&tf(O,pe,$,Z,!0)}}e:{if(A=S?Un(S):window,N=A.nodeName&&A.nodeName.toLowerCase(),N==="select"||N==="input"&&A.type==="file")var H=yc;else if(bc(A))if(jc)H=gp;else{H=pp;var ne=mp}else N=A.nodeName,!N||N.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?S&&xr(S.elementType)&&(H=yc):H=hp;if(H&&(H=H(e,S))){vc(O,H,a,z);break e}ne&&ne(e,A,S),e==="focusout"&&S&&A.type==="number"&&S.memoizedProps.value!=null&&gr(A,"number",A.value)}switch(ne=S?Un(S):window,e){case"focusin":(bc(ne)||ne.contentEditable==="true")&&(en=ne,Mr=S,Vn=null);break;case"focusout":Vn=Mr=en=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Rc(O,a,z);break;case"selectionchange":if(bp)break;case"keydown":case"keyup":Rc(O,a,z)}var X;if(Tr)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ia?gc(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(mc&&a.locale!=="ko"&&(Ia||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ia&&(X=oc()):(ea=z,Sr="value"in ea?ea.value:ea.textContent,Ia=!0)),ne=kl(S,K),0<ne.length&&(K=new dc(K,e,null,a,z),O.push({event:K,listeners:ne}),X?K.data=X:(X=xc(a),X!==null&&(K.data=X)))),(X=op?cp(e,a):up(e,a))&&(K=kl(S,"onBeforeInput"),0<K.length&&(ne=new dc("onBeforeInput","beforeinput",null,a,z),O.push({event:ne,listeners:K}),ne.data=X)),eh(O,e,S,a,z)}Id(O,t)})}function vi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function kl(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Yn(e,a),i!=null&&n.unshift(vi(e,i,r)),i=Yn(e,t),i!=null&&n.push(vi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tf(e,t,a,n,i){for(var r=t._reactName,o=[];a!==null&&a!==n;){var u=a,p=u.alternate,S=u.stateNode;if(u=u.tag,p!==null&&p===n)break;u!==5&&u!==26&&u!==27||S===null||(p=S,i?(S=Yn(a,r),S!=null&&o.unshift(vi(a,S,p))):i||(S=Yn(a,r),S!=null&&o.push(vi(a,S,p)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var ih=/\r\n?/g,lh=/\u0000|\uFFFD/g;function af(e){return(typeof e=="string"?e:""+e).replace(ih,`
`).replace(lh,"")}function nf(e,t){return t=af(t),af(e)===t}function Ul(){}function me(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||$a(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&$a(e,""+n);break;case"className":Li(e,"class",n);break;case"tabIndex":Li(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Li(e,a,n);break;case"style":lc(e,n,r);break;case"data":if(t!=="object"){Li(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",i.name,i,null),me(e,t,"formEncType",i.formEncType,i,null),me(e,t,"formMethod",i.formMethod,i,null),me(e,t,"formTarget",i.formTarget,i,null)):(me(e,t,"encType",i.encType,i,null),me(e,t,"method",i.method,i,null),me(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ul);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Qi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":le("beforetoggle",e),le("toggle",e),Bi(e,"popover",n);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=km.get(a)||a,Bi(e,a,n))}}function to(e,t,a,n,i,r){switch(a){case"style":lc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?$a(e,n):(typeof n=="number"||typeof n=="bigint")&&$a(e,""+n);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[Ke]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Bi(e,a,n)}}}function Le(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,r,o,a,null)}}i&&me(e,t,"srcSet",a.srcSet,a,null),n&&me(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var u=r=o=i=null,p=null,S=null;for(n in a)if(a.hasOwnProperty(n)){var z=a[n];if(z!=null)switch(n){case"name":i=z;break;case"type":o=z;break;case"checked":p=z;break;case"defaultChecked":S=z;break;case"value":r=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:me(e,t,n,z,a,null)}}tc(e,r,u,p,S,o,i,!1),Gi(e);return;case"select":le("invalid",e),n=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":r=u;break;case"defaultValue":o=u;break;case"multiple":n=u;default:me(e,t,i,u,a,null)}t=r,a=o,e.multiple=!!n,t!=null?Ja(e,!!n,t,!1):a!=null&&Ja(e,!!n,a,!0);return;case"textarea":le("invalid",e),r=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":n=u;break;case"defaultValue":i=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:me(e,t,o,u,a,null)}nc(e,n,i,r),Gi(e);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:me(e,t,p,n,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(n=0;n<bi.length;n++)le(bi[n],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,S,n,a,null)}return;default:if(xr(t)){for(z in a)a.hasOwnProperty(z)&&(n=a[z],n!==void 0&&to(e,t,z,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&me(e,t,u,n,a,null))}function rh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,u=null,p=null,S=null,z=null;for(N in a){var O=a[N];if(a.hasOwnProperty(N)&&O!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":p=O;default:n.hasOwnProperty(N)||me(e,t,N,null,n,O)}}for(var A in n){var N=n[A];if(O=a[A],n.hasOwnProperty(A)&&(N!=null||O!=null))switch(A){case"type":r=N;break;case"name":i=N;break;case"checked":S=N;break;case"defaultChecked":z=N;break;case"value":o=N;break;case"defaultValue":u=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==O&&me(e,t,A,N,n,O)}}hr(e,o,u,p,S,z,r,i);return;case"select":N=o=u=A=null;for(r in a)if(p=a[r],a.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":N=p;default:n.hasOwnProperty(r)||me(e,t,r,null,n,p)}for(i in n)if(r=n[i],p=a[i],n.hasOwnProperty(i)&&(r!=null||p!=null))switch(i){case"value":A=r;break;case"defaultValue":u=r;break;case"multiple":o=r;default:r!==p&&me(e,t,i,r,n,p)}t=u,a=o,n=N,A!=null?Ja(e,!!a,A,!1):!!n!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":N=A=null;for(u in a)if(i=a[u],a.hasOwnProperty(u)&&i!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:me(e,t,u,null,n,i)}for(o in n)if(i=n[o],r=a[o],n.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":A=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&me(e,t,o,i,n,r)}ac(e,A,N);return;case"option":for(var $ in a)if(A=a[$],a.hasOwnProperty($)&&A!=null&&!n.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:me(e,t,$,null,n,A)}for(p in n)if(A=n[p],N=a[p],n.hasOwnProperty(p)&&A!==N&&(A!=null||N!=null))switch(p){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:me(e,t,p,A,n,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)A=a[Z],a.hasOwnProperty(Z)&&A!=null&&!n.hasOwnProperty(Z)&&me(e,t,Z,null,n,A);for(S in n)if(A=n[S],N=a[S],n.hasOwnProperty(S)&&A!==N&&(A!=null||N!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:me(e,t,S,A,n,N)}return;default:if(xr(t)){for(var pe in a)A=a[pe],a.hasOwnProperty(pe)&&A!==void 0&&!n.hasOwnProperty(pe)&&to(e,t,pe,void 0,n,A);for(z in n)A=n[z],N=a[z],!n.hasOwnProperty(z)||A===N||A===void 0&&N===void 0||to(e,t,z,A,n,N);return}}for(var v in a)A=a[v],a.hasOwnProperty(v)&&A!=null&&!n.hasOwnProperty(v)&&me(e,t,v,null,n,A);for(O in n)A=n[O],N=a[O],!n.hasOwnProperty(O)||A===N||A==null&&N==null||me(e,t,O,A,n,N)}var ao=null,no=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function lf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lo=null;function sh(){var e=window.event;return e&&e.type==="popstate"?e===lo?!1:(lo=e,!0):(lo=null,!1)}var sf=typeof setTimeout=="function"?setTimeout:void 0,oh=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,ch=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(uh)}:sf;function uh(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function cf(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var o=e.ownerDocument;if(a&1&&yi(o.documentElement),a&2&&yi(o.body),a&4)for(a=o.head,yi(a),o=a.firstChild;o;){var u=o.nextSibling,p=o.nodeName;o[kn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}if(i===0){e.removeChild(r),zi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);zi(t)}function ro(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ro(a),dr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dh(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function fh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function so(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function mh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var oo=null;function uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function df(e,t,a){switch(t=Yl(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dr(e)}var vt=new Map,ff=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=U.d;U.d={f:ph,r:hh,D:gh,C:xh,L:bh,m:vh,X:jh,S:yh,M:Sh};function ph(){var e=Kt.f(),t=Rl();return e||t}function hh(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Mu(t):Kt.r(e)}var En=typeof document>"u"?null:document;function mf(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var i=ft(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),ff.has(i)||(ff.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Le(t,"link",e),ke(t),n.head.appendChild(t)))}}function gh(e){Kt.D(e),mf("dns-prefetch",e,null)}function xh(e,t){Kt.C(e,t),mf("preconnect",e,t)}function bh(e,t,a){Kt.L(e,t,a);var n=En;if(n&&e&&t){var i='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ft(a.imageSizes)+'"]')):i+='[href="'+ft(e)+'"]';var r=i;switch(t){case"style":r=Tn(e);break;case"script":r=zn(e)}vt.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ji(r))||t==="script"&&n.querySelector(Si(r))||(t=n.createElement("link"),Le(t,"link",e),ke(t),n.head.appendChild(t)))}}function vh(e,t){Kt.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ft(n)+'"][href="'+ft(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=zn(e)}if(!vt.has(r)&&(e=E({rel:"modulepreload",href:e},t),vt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Si(r)))return}n=a.createElement("link"),Le(n,"link",e),ke(n),a.head.appendChild(n)}}}function yh(e,t,a){Kt.S(e,t,a);var n=En;if(n&&e){var i=Fa(n).hoistableStyles,r=Tn(e);t=t||"default";var o=i.get(r);if(!o){var u={loading:0,preload:null};if(o=n.querySelector(ji(r)))u.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(r))&&co(e,a);var p=o=n.createElement("link");ke(p),Le(p,"link",e),p._p=new Promise(function(S,z){p.onload=S,p.onerror=z}),p.addEventListener("load",function(){u.loading|=1}),p.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Hl(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:u},i.set(r,o)}}}function jh(e,t){Kt.X(e,t);var a=En;if(a&&e){var n=Fa(a).hoistableScripts,i=zn(e),r=n.get(i);r||(r=a.querySelector(Si(i)),r||(e=E({src:e,async:!0},t),(t=vt.get(i))&&uo(e,t),r=a.createElement("script"),ke(r),Le(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Sh(e,t){Kt.M(e,t);var a=En;if(a&&e){var n=Fa(a).hoistableScripts,i=zn(e),r=n.get(i);r||(r=a.querySelector(Si(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=vt.get(i))&&uo(e,t),r=a.createElement("script"),ke(r),Le(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function pf(e,t,a,n){var i=(i=I.current)?ql(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tn(a.href),a=Fa(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tn(a.href);var r=Fa(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(ji(e)))&&!r._p&&(o.instance=r,o.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),r||wh(i,e,a,o.state))),t&&n===null)throw Error(c(528,""));return o}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zn(a),a=Fa(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Tn(e){return'href="'+ft(e)+'"'}function ji(e){return'link[rel="stylesheet"]['+e+"]"}function hf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function wh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Le(t,"link",a),ke(t),e.head.appendChild(t))}function zn(e){return'[src="'+ft(e)+'"]'}function Si(e){return"script[async]"+e}function gf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(n)return t.instance=n,ke(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ke(n),Le(n,"style",i),Hl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Tn(a.href);var r=e.querySelector(ji(i));if(r)return t.state.loading|=4,t.instance=r,ke(r),r;n=hf(a),(i=vt.get(i))&&co(n,i),r=(e.ownerDocument||e).createElement("link"),ke(r);var o=r;return o._p=new Promise(function(u,p){o.onload=u,o.onerror=p}),Le(r,"link",n),t.state.loading|=4,Hl(r,a.precedence,e),t.instance=r;case"script":return r=zn(a.src),(i=e.querySelector(Si(r)))?(t.instance=i,ke(i),i):(n=a,(i=vt.get(r))&&(n=E({},a),uo(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),ke(i),Le(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Hl(n,a.precedence,e));return t.instance}function Hl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,o=0;o<n.length;o++){var u=n[o];if(u.dataset.precedence===t)r=u;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function co(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bl=null;function xf(e,t,a){if(Bl===null){var n=new Map,i=Bl=new Map;i.set(a,n)}else i=Bl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[kn]||r[Qe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var u=n.get(o);u?u.push(r):n.set(o,[r])}}return n}function bf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ah(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var wi=null;function Nh(){}function Eh(e,t,a){if(wi===null)throw Error(c(475));var n=wi;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Tn(a.href),r=e.querySelector(ji(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Ll.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,ke(r);return}r=e.ownerDocument||e,a=hf(a),(i=vt.get(i))&&co(a,i),r=r.createElement("link"),ke(r);var o=r;o._p=new Promise(function(u,p){o.onload=u,o.onerror=p}),Le(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ll.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Th(){if(wi===null)throw Error(c(475));var e=wi;return e.stylesheets&&e.count===0&&fo(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&fo(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)fo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function fo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,t.forEach(zh,e),Gl=null,Ll.call(e))}function zh(e,t){if(!(t.state.loading&4)){var a=Gl.get(e);if(a)var n=a.get(null);else{a=new Map,Gl.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,i),a.set(o,i),this.count++,n=Ll.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ai={$$typeof:ee,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Rh(e,t,a,n,i,r,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sr(0),this.hiddenUpdates=sr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function yf(e,t,a,n,i,r,o,u,p,S,z,O){return e=new Rh(e,t,a,o,u,p,S,O),t=1,r===!0&&(t|=24),r=it(3,null,null,t),e.current=r,r.stateNode=e,t=Fr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},$r(r),e}function jf(e){return e?(e=ln,e):ln}function Sf(e,t,a,n,i,r){i=jf(i),n.context===null?n.context=i:n.pendingContext=i,n=na(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ia(e,n,t),a!==null&&(ct(a,e,t),ei(a,e,t))}function wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function mo(e,t){wf(e,t),(e=e.alternate)&&wf(e,t)}function Af(e){if(e.tag===13){var t=nn(e,67108864);t!==null&&ct(t,e,67108864),mo(e,67108864)}}var Xl=!0;function Dh(e,t,a,n){var i=R.T;R.T=null;var r=U.p;try{U.p=2,po(e,t,a,n)}finally{U.p=r,R.T=i}}function Mh(e,t,a,n){var i=R.T;R.T=null;var r=U.p;try{U.p=8,po(e,t,a,n)}finally{U.p=r,R.T=i}}function po(e,t,a,n){if(Xl){var i=ho(n);if(i===null)eo(e,t,n,Ql,a),Ef(e,n);else if(Ch(i,e,t,a,n))n.stopPropagation();else if(Ef(e,n),t&4&&-1<Oh.indexOf(e)){for(;i!==null;){var r=Va(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Na(r.pendingLanes);if(o!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var p=1<<31-at(o);u.entanglements[1]|=p,o&=~p}Mt(r),(ue&6)===0&&(Tl=Et()+500,xi(0))}}break;case 13:u=nn(r,2),u!==null&&ct(u,r,2),Rl(),mo(r,2)}if(r=ho(n),r===null&&eo(e,t,n,Ql,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else eo(e,t,n,null,a)}}function ho(e){return e=vr(e),go(e)}var Ql=null;function go(e){if(Ql=null,e=Qa(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ql=e,null}function Nf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xm()){case qo:return 2;case Ho:return 8;case Ui:case bm:return 32;case Bo:return 268435456;default:return 32}default:return 32}}var xo=!1,xa=null,ba=null,va=null,Ni=new Map,Ei=new Map,ya=[],Oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Ti(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&Af(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ch(e,t,a,n,i){switch(t){case"focusin":return xa=Ti(xa,e,t,a,n,i),!0;case"dragenter":return ba=Ti(ba,e,t,a,n,i),!0;case"mouseover":return va=Ti(va,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Ni.set(r,Ti(Ni.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Ei.set(r,Ti(Ei.get(r)||null,e,t,a,n,i)),!0}return!1}function Tf(e){var t=Qa(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=w(a),t!==null){e.blockedOn=t,Em(e.priority,function(){if(a.tag===13){var n=ot();n=or(n);var i=nn(a,n);i!==null&&ct(i,a,n),mo(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ho(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);br=n,a.target.dispatchEvent(n),br=null}else return t=Va(a),t!==null&&Af(t),e.blockedOn=a,!1;t.shift()}return!0}function zf(e,t,a){Vl(e)&&a.delete(t)}function _h(){xo=!1,xa!==null&&Vl(xa)&&(xa=null),ba!==null&&Vl(ba)&&(ba=null),va!==null&&Vl(va)&&(va=null),Ni.forEach(zf),Ei.forEach(zf)}function Fl(e,t){e.blockedOn===t&&(e.blockedOn=null,xo||(xo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,_h)))}var Zl=null;function Rf(e){Zl!==e&&(Zl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Zl===e&&(Zl=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(go(n||a)===null)continue;break}var r=Va(a);r!==null&&(e.splice(t,3),t-=3,hs(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function zi(e){function t(p){return Fl(p,e)}xa!==null&&Fl(xa,e),ba!==null&&Fl(ba,e),va!==null&&Fl(va,e),Ni.forEach(t),Ei.forEach(t);for(var a=0;a<ya.length;a++){var n=ya[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)Tf(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],o=i[Ke]||null;if(typeof r=="function")o||Rf(a);else if(o){var u=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[Ke]||null)u=o.formAction;else if(go(i)!==null)continue}else u=o.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),Rf(a)}}}function bo(e){this._internalRoot=e}Kl.prototype.render=bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=ot();Sf(a,n,e,t,null,null)},Kl.prototype.unmount=bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sf(e.current,2,null,e,null,null),Rl(),t[Xa]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&Tf(e)}};var Df=d.version;if(Df!=="19.1.1")throw Error(c(527,Df,"19.1.1"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=j(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var kh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{On=Jl.inject(kh),tt=Jl}catch{}}return Di.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,n="",i=Vu,r=Fu,o=Zu,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=yf(e,1,!1,null,null,a,n,i,r,o,u,null),e[Xa]=t.current,Is(e),new bo(t)},Di.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var n=!1,i="",r=Vu,o=Fu,u=Zu,p=null,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(S=a.formState)),t=yf(e,1,!0,t,a??null,n,i,r,o,u,p,S),t.context=jf(null),a=t.current,n=ot(),n=or(n),i=na(n),i.callback=null,ia(a,i,n),a=n,t.current.lanes=a,_n(t,a),Mt(t),e[Xa]=t.current,Is(e),new Kl(t)},Di.version="19.1.1",Di}var Bf;function Fh(){if(Bf)return jo.exports;Bf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),jo.exports=Vh(),jo.exports}var Zh=Fh();const Kh=em(Zh);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lf="popstate";function Jh(s={}){function d(c,m){let{pathname:b,search:w,hash:D}=c.location;return zo("",{pathname:b,search:w,hash:D},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(c,m){return typeof m=="string"?m:Oi(m)}return Ph(d,f,null,s)}function ye(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function At(s,d){if(!s){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function $h(){return Math.random().toString(36).substring(2,10)}function Gf(s,d){return{usr:s.state,key:s.key,idx:d}}function zo(s,d,f=null,c){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof d=="string"?Rn(d):d,state:f,key:d&&d.key||c||$h()}}function Oi({pathname:s="/",search:d="",hash:f=""}){return d&&d!=="?"&&(s+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function Rn(s){let d={};if(s){let f=s.indexOf("#");f>=0&&(d.hash=s.substring(f),s=s.substring(0,f));let c=s.indexOf("?");c>=0&&(d.search=s.substring(c),s=s.substring(0,c)),s&&(d.pathname=s)}return d}function Ph(s,d,f,c={}){let{window:m=document.defaultView,v5Compat:b=!1}=c,w=m.history,D="POP",j=null,h=E();h==null&&(h=0,w.replaceState({...w.state,idx:h},""));function E(){return(w.state||{idx:null}).idx}function _(){D="POP";let B=E(),V=B==null?null:B-h;h=B,j&&j({action:D,location:P.location,delta:V})}function Y(B,V){D="PUSH";let L=zo(P.location,B,V);h=E()+1;let ee=Gf(L,h),je=P.createHref(L);try{w.pushState(ee,"",je)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;m.location.assign(je)}b&&j&&j({action:D,location:P.location,delta:1})}function G(B,V){D="REPLACE";let L=zo(P.location,B,V);h=E();let ee=Gf(L,h),je=P.createHref(L);w.replaceState(ee,"",je),b&&j&&j({action:D,location:P.location,delta:0})}function Q(B){return Wh(B)}let P={get action(){return D},get location(){return s(m,w)},listen(B){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(Lf,_),j=B,()=>{m.removeEventListener(Lf,_),j=null}},createHref(B){return d(m,B)},createURL:Q,encodeLocation(B){let V=Q(B);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:Y,replace:G,go(B){return w.go(B)}};return P}function Wh(s,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),ye(f,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Oi(s);return c=c.replace(/ $/,"%20"),!d&&c.startsWith("//")&&(c=f+c),new URL(c,f)}function tm(s,d,f="/"){return Ih(s,d,f,!1)}function Ih(s,d,f,c){let m=typeof d=="string"?Rn(d):d,b=$t(m.pathname||"/",f);if(b==null)return null;let w=am(s);eg(w);let D=null;for(let j=0;D==null&&j<w.length;++j){let h=dg(b);D=cg(w[j],h,c)}return D}function am(s,d=[],f=[],c="",m=!1){let b=(w,D,j=m,h)=>{let E={relativePath:h===void 0?w.path||"":h,caseSensitive:w.caseSensitive===!0,childrenIndex:D,route:w};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&j)return;ye(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let _=Jt([c,E.relativePath]),Y=f.concat(E);w.children&&w.children.length>0&&(ye(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),am(w.children,d,Y,_,j)),!(w.path==null&&!w.index)&&d.push({path:_,score:sg(_,w.index),routesMeta:Y})};return s.forEach((w,D)=>{if(w.path===""||!w.path?.includes("?"))b(w,D);else for(let j of nm(w.path))b(w,D,!0,j)}),d}function nm(s){let d=s.split("/");if(d.length===0)return[];let[f,...c]=d,m=f.endsWith("?"),b=f.replace(/\?$/,"");if(c.length===0)return m?[b,""]:[b];let w=nm(c.join("/")),D=[];return D.push(...w.map(j=>j===""?b:[b,j].join("/"))),m&&D.push(...w),D.map(j=>s.startsWith("/")&&j===""?"/":j)}function eg(s){s.sort((d,f)=>d.score!==f.score?f.score-d.score:og(d.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var tg=/^:[\w-]+$/,ag=3,ng=2,ig=1,lg=10,rg=-2,Xf=s=>s==="*";function sg(s,d){let f=s.split("/"),c=f.length;return f.some(Xf)&&(c+=rg),d&&(c+=ng),f.filter(m=>!Xf(m)).reduce((m,b)=>m+(tg.test(b)?ag:b===""?ig:lg),c)}function og(s,d){return s.length===d.length&&s.slice(0,-1).every((c,m)=>c===d[m])?s[s.length-1]-d[d.length-1]:0}function cg(s,d,f=!1){let{routesMeta:c}=s,m={},b="/",w=[];for(let D=0;D<c.length;++D){let j=c[D],h=D===c.length-1,E=b==="/"?d:d.slice(b.length)||"/",_=Il({path:j.relativePath,caseSensitive:j.caseSensitive,end:h},E),Y=j.route;if(!_&&h&&f&&!c[c.length-1].route.index&&(_=Il({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},E)),!_)return null;Object.assign(m,_.params),w.push({params:m,pathname:Jt([b,_.pathname]),pathnameBase:hg(Jt([b,_.pathnameBase])),route:Y}),_.pathnameBase!=="/"&&(b=Jt([b,_.pathnameBase]))}return w}function Il(s,d){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,c]=ug(s.path,s.caseSensitive,s.end),m=d.match(f);if(!m)return null;let b=m[0],w=b.replace(/(.)\/+$/,"$1"),D=m.slice(1);return{params:c.reduce((h,{paramName:E,isOptional:_},Y)=>{if(E==="*"){let Q=D[Y]||"";w=b.slice(0,b.length-Q.length).replace(/(.)\/+$/,"$1")}const G=D[Y];return _&&!G?h[E]=void 0:h[E]=(G||"").replace(/%2F/g,"/"),h},{}),pathname:b,pathnameBase:w,pattern:s}}function ug(s,d=!1,f=!0){At(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,D,j)=>(c.push({paramName:D,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),c]}function dg(s){try{return s.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return At(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),s}}function $t(s,d){if(d==="/")return s;if(!s.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,c=s.charAt(f);return c&&c!=="/"?null:s.slice(f)||"/"}function fg(s,d="/"){let{pathname:f,search:c="",hash:m=""}=typeof s=="string"?Rn(s):s;return{pathname:f?f.startsWith("/")?f:mg(f,d):d,search:gg(c),hash:xg(m)}}function mg(s,d){let f=d.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function No(s,d,f,c){return`Cannot include a '${s}' character in a manually specified \`to.${d}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pg(s){return s.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function Mo(s){let d=pg(s);return d.map((f,c)=>c===d.length-1?f.pathname:f.pathnameBase)}function Oo(s,d,f,c=!1){let m;typeof s=="string"?m=Rn(s):(m={...s},ye(!m.pathname||!m.pathname.includes("?"),No("?","pathname","search",m)),ye(!m.pathname||!m.pathname.includes("#"),No("#","pathname","hash",m)),ye(!m.search||!m.search.includes("#"),No("#","search","hash",m)));let b=s===""||m.pathname==="",w=b?"/":m.pathname,D;if(w==null)D=f;else{let _=d.length-1;if(!c&&w.startsWith("..")){let Y=w.split("/");for(;Y[0]==="..";)Y.shift(),_-=1;m.pathname=Y.join("/")}D=_>=0?d[_]:"/"}let j=fg(m,D),h=w&&w!=="/"&&w.endsWith("/"),E=(b||w===".")&&f.endsWith("/");return!j.pathname.endsWith("/")&&(h||E)&&(j.pathname+="/"),j}var Jt=s=>s.join("/").replace(/\/\/+/g,"/"),hg=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),gg=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,xg=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function bg(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var im=["POST","PUT","PATCH","DELETE"];new Set(im);var vg=["GET",...im];new Set(vg);var Dn=T.createContext(null);Dn.displayName="DataRouter";var er=T.createContext(null);er.displayName="DataRouterState";T.createContext(!1);var lm=T.createContext({isTransitioning:!1});lm.displayName="ViewTransition";var yg=T.createContext(new Map);yg.displayName="Fetchers";var jg=T.createContext(null);jg.displayName="Await";var Nt=T.createContext(null);Nt.displayName="Navigation";var Ci=T.createContext(null);Ci.displayName="Location";var Ot=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var Co=T.createContext(null);Co.displayName="RouteError";function Sg(s,{relative:d}={}){ye(Mn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=T.useContext(Nt),{hash:m,pathname:b,search:w}=_i(s,{relative:d}),D=b;return f!=="/"&&(D=b==="/"?f:Jt([f,b])),c.createHref({pathname:D,search:w,hash:m})}function Mn(){return T.useContext(Ci)!=null}function Ct(){return ye(Mn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Ci).location}var rm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sm(s){T.useContext(Nt).static||T.useLayoutEffect(s)}function tr(){let{isDataRoute:s}=T.useContext(Ot);return s?kg():wg()}function wg(){ye(Mn(),"useNavigate() may be used only in the context of a <Router> component.");let s=T.useContext(Dn),{basename:d,navigator:f}=T.useContext(Nt),{matches:c}=T.useContext(Ot),{pathname:m}=Ct(),b=JSON.stringify(Mo(c)),w=T.useRef(!1);return sm(()=>{w.current=!0}),T.useCallback((j,h={})=>{if(At(w.current,rm),!w.current)return;if(typeof j=="number"){f.go(j);return}let E=Oo(j,JSON.parse(b),m,h.relative==="path");s==null&&d!=="/"&&(E.pathname=E.pathname==="/"?d:Jt([d,E.pathname])),(h.replace?f.replace:f.push)(E,h.state,h)},[d,f,b,m,s])}T.createContext(null);function _i(s,{relative:d}={}){let{matches:f}=T.useContext(Ot),{pathname:c}=Ct(),m=JSON.stringify(Mo(f));return T.useMemo(()=>Oo(s,JSON.parse(m),c,d==="path"),[s,m,c,d])}function Ag(s,d){return om(s,d)}function om(s,d,f,c,m){ye(Mn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=T.useContext(Nt),{matches:w}=T.useContext(Ot),D=w[w.length-1],j=D?D.params:{},h=D?D.pathname:"/",E=D?D.pathnameBase:"/",_=D&&D.route;{let L=_&&_.path||"";cm(h,!_||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let Y=Ct(),G;if(d){let L=typeof d=="string"?Rn(d):d;ye(E==="/"||L.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${L.pathname}" was given in the \`location\` prop.`),G=L}else G=Y;let Q=G.pathname||"/",P=Q;if(E!=="/"){let L=E.replace(/^\//,"").split("/");P="/"+Q.replace(/^\//,"").split("/").slice(L.length).join("/")}let B=tm(s,{pathname:P});At(_||B!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),At(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Rg(B&&B.map(L=>Object.assign({},L,{params:Object.assign({},j,L.params),pathname:Jt([E,b.encodeLocation?b.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?E:Jt([E,b.encodeLocation?b.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),w,f,c,m);return d&&V?T.createElement(Ci.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},V):V}function Ng(){let s=_g(),d=bg(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},b={padding:"2px 4px",backgroundColor:c},w=null;return console.error("Error handled by React Router default ErrorBoundary:",s),w=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:b},"ErrorBoundary")," or"," ",T.createElement("code",{style:b},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},d),f?T.createElement("pre",{style:m},f):null,w)}var Eg=T.createElement(Ng,null),Tg=class extends T.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,d){return d.location!==s.location||d.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:d.error,location:d.location,revalidation:s.revalidation||d.revalidation}}componentDidCatch(s,d){this.props.unstable_onError?this.props.unstable_onError(s,d):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?T.createElement(Ot.Provider,{value:this.props.routeContext},T.createElement(Co.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zg({routeContext:s,match:d,children:f}){let c=T.useContext(Dn);return c&&c.static&&c.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=d.route.id),T.createElement(Ot.Provider,{value:s},f)}function Rg(s,d=[],f=null,c=null,m=null){if(s==null){if(!f)return null;if(f.errors)s=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)s=f.matches;else return null}let b=s,w=f?.errors;if(w!=null){let h=b.findIndex(E=>E.route.id&&w?.[E.route.id]!==void 0);ye(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),b=b.slice(0,Math.min(b.length,h+1))}let D=!1,j=-1;if(f)for(let h=0;h<b.length;h++){let E=b[h];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(j=h),E.route.id){let{loaderData:_,errors:Y}=f,G=E.route.loader&&!_.hasOwnProperty(E.route.id)&&(!Y||Y[E.route.id]===void 0);if(E.route.lazy||G){D=!0,j>=0?b=b.slice(0,j+1):b=[b[0]];break}}}return b.reduceRight((h,E,_)=>{let Y,G=!1,Q=null,P=null;f&&(Y=w&&E.route.id?w[E.route.id]:void 0,Q=E.route.errorElement||Eg,D&&(j<0&&_===0?(cm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,P=null):j===_&&(G=!0,P=E.route.hydrateFallbackElement||null)));let B=d.concat(b.slice(0,_+1)),V=()=>{let L;return Y?L=Q:G?L=P:E.route.Component?L=T.createElement(E.route.Component,null):E.route.element?L=E.route.element:L=h,T.createElement(zg,{match:E,routeContext:{outlet:h,matches:B,isDataRoute:f!=null},children:L})};return f&&(E.route.ErrorBoundary||E.route.errorElement||_===0)?T.createElement(Tg,{location:f.location,revalidation:f.revalidation,component:Q,error:Y,children:V(),routeContext:{outlet:null,matches:B,isDataRoute:!0},unstable_onError:c}):V()},null)}function _o(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dg(s){let d=T.useContext(Dn);return ye(d,_o(s)),d}function Mg(s){let d=T.useContext(er);return ye(d,_o(s)),d}function Og(s){let d=T.useContext(Ot);return ye(d,_o(s)),d}function ko(s){let d=Og(s),f=d.matches[d.matches.length-1];return ye(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function Cg(){return ko("useRouteId")}function _g(){let s=T.useContext(Co),d=Mg("useRouteError"),f=ko("useRouteError");return s!==void 0?s:d.errors?.[f]}function kg(){let{router:s}=Dg("useNavigate"),d=ko("useNavigate"),f=T.useRef(!1);return sm(()=>{f.current=!0}),T.useCallback(async(m,b={})=>{At(f.current,rm),f.current&&(typeof m=="number"?s.navigate(m):await s.navigate(m,{fromRouteId:d,...b}))},[s,d])}var Qf={};function cm(s,d,f){!d&&!Qf[s]&&(Qf[s]=!0,At(!1,f))}T.memo(Ug);function Ug({routes:s,future:d,state:f,unstable_onError:c}){return om(s,void 0,f,c,d)}function Vf({to:s,replace:d,state:f,relative:c}){ye(Mn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=T.useContext(Nt);At(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:b}=T.useContext(Ot),{pathname:w}=Ct(),D=tr(),j=Oo(s,Mo(b),w,c==="path"),h=JSON.stringify(j);return T.useEffect(()=>{D(JSON.parse(h),{replace:d,state:f,relative:c})},[D,h,c,d,f]),null}function wt(s){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yg({basename:s="/",children:d=null,location:f,navigationType:c="POP",navigator:m,static:b=!1}){ye(!Mn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=s.replace(/^\/*/,"/"),D=T.useMemo(()=>({basename:w,navigator:m,static:b,future:{}}),[w,m,b]);typeof f=="string"&&(f=Rn(f));let{pathname:j="/",search:h="",hash:E="",state:_=null,key:Y="default"}=f,G=T.useMemo(()=>{let Q=$t(j,w);return Q==null?null:{location:{pathname:Q,search:h,hash:E,state:_,key:Y},navigationType:c}},[w,j,h,E,_,Y,c]);return At(G!=null,`<Router basename="${w}"> is not able to match the URL "${j}${h}${E}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:T.createElement(Nt.Provider,{value:D},T.createElement(Ci.Provider,{children:d,value:G}))}function qg({children:s,location:d}){return Ag(Ro(s),d)}function Ro(s,d=[]){let f=[];return T.Children.forEach(s,(c,m)=>{if(!T.isValidElement(c))return;let b=[...d,m];if(c.type===T.Fragment){f.push.apply(f,Ro(c.props.children,b));return}ye(c.type===wt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!c.props.index||!c.props.children,"An index route cannot have child routes.");let w={id:c.props.id||b.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(w.children=Ro(c.props.children,b)),f.push(w)}),f}var Pl="get",Wl="application/x-www-form-urlencoded";function ar(s){return s!=null&&typeof s.tagName=="string"}function Hg(s){return ar(s)&&s.tagName.toLowerCase()==="button"}function Bg(s){return ar(s)&&s.tagName.toLowerCase()==="form"}function Lg(s){return ar(s)&&s.tagName.toLowerCase()==="input"}function Gg(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Xg(s,d){return s.button===0&&(!d||d==="_self")&&!Gg(s)}var $l=null;function Qg(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var Vg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Eo(s){return s!=null&&!Vg.has(s)?(At(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wl}"`),null):s}function Fg(s,d){let f,c,m,b,w;if(Bg(s)){let D=s.getAttribute("action");c=D?$t(D,d):null,f=s.getAttribute("method")||Pl,m=Eo(s.getAttribute("enctype"))||Wl,b=new FormData(s)}else if(Hg(s)||Lg(s)&&(s.type==="submit"||s.type==="image")){let D=s.form;if(D==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=s.getAttribute("formaction")||D.getAttribute("action");if(c=j?$t(j,d):null,f=s.getAttribute("formmethod")||D.getAttribute("method")||Pl,m=Eo(s.getAttribute("formenctype"))||Eo(D.getAttribute("enctype"))||Wl,b=new FormData(D,s),!Qg()){let{name:h,type:E,value:_}=s;if(E==="image"){let Y=h?`${h}.`:"";b.append(`${Y}x`,"0"),b.append(`${Y}y`,"0")}else h&&b.append(h,_)}}else{if(ar(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Pl,c=null,m=Wl,w=s}return b&&m==="text/plain"&&(w=b,b=void 0),{action:c,method:f.toLowerCase(),encType:m,formData:b,body:w}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uo(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function Zg(s,d,f){let c=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return c.pathname==="/"?c.pathname=`_root.${f}`:d&&$t(c.pathname,d)==="/"?c.pathname=`${d.replace(/\/$/,"")}/_root.${f}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${f}`,c}async function Kg(s,d){if(s.id in d)return d[s.id];try{let f=await import(s.module);return d[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jg(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function $g(s,d,f){let c=await Promise.all(s.map(async m=>{let b=d.routes[m.route.id];if(b){let w=await Kg(b,f);return w.links?w.links():[]}return[]}));return e0(c.flat(1).filter(Jg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Ff(s,d,f,c,m,b){let w=(j,h)=>f[h]?j.route.id!==f[h].route.id:!0,D=(j,h)=>f[h].pathname!==j.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==j.params["*"];return b==="assets"?d.filter((j,h)=>w(j,h)||D(j,h)):b==="data"?d.filter((j,h)=>{let E=c.routes[j.route.id];if(!E||!E.hasLoader)return!1;if(w(j,h)||D(j,h))return!0;if(j.route.shouldRevalidate){let _=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Pg(s,d,{includeHydrateFallback:f}={}){return Wg(s.map(c=>{let m=d.routes[c.route.id];if(!m)return[];let b=[m.module];return m.clientActionModule&&(b=b.concat(m.clientActionModule)),m.clientLoaderModule&&(b=b.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(b=b.concat(m.hydrateFallbackModule)),m.imports&&(b=b.concat(m.imports)),b}).flat(1))}function Wg(s){return[...new Set(s)]}function Ig(s){let d={},f=Object.keys(s).sort();for(let c of f)d[c]=s[c];return d}function e0(s,d){let f=new Set;return new Set(d),s.reduce((c,m)=>{let b=JSON.stringify(Ig(m));return f.has(b)||(f.add(b),c.push({key:b,link:m})),c},[])}function um(){let s=T.useContext(Dn);return Uo(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function t0(){let s=T.useContext(er);return Uo(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Yo=T.createContext(void 0);Yo.displayName="FrameworkContext";function dm(){let s=T.useContext(Yo);return Uo(s,"You must render this element inside a <HydratedRouter> element"),s}function a0(s,d){let f=T.useContext(Yo),[c,m]=T.useState(!1),[b,w]=T.useState(!1),{onFocus:D,onBlur:j,onMouseEnter:h,onMouseLeave:E,onTouchStart:_}=d,Y=T.useRef(null);T.useEffect(()=>{if(s==="render"&&w(!0),s==="viewport"){let P=V=>{V.forEach(L=>{w(L.isIntersecting)})},B=new IntersectionObserver(P,{threshold:.5});return Y.current&&B.observe(Y.current),()=>{B.disconnect()}}},[s]),T.useEffect(()=>{if(c){let P=setTimeout(()=>{w(!0)},100);return()=>{clearTimeout(P)}}},[c]);let G=()=>{m(!0)},Q=()=>{m(!1),w(!1)};return f?s!=="intent"?[b,Y,{}]:[b,Y,{onFocus:Mi(D,G),onBlur:Mi(j,Q),onMouseEnter:Mi(h,G),onMouseLeave:Mi(E,Q),onTouchStart:Mi(_,G)}]:[!1,Y,{}]}function Mi(s,d){return f=>{s&&s(f),f.defaultPrevented||d(f)}}function n0({page:s,...d}){let{router:f}=um(),c=T.useMemo(()=>tm(f.routes,s,f.basename),[f.routes,s,f.basename]);return c?T.createElement(l0,{page:s,matches:c,...d}):null}function i0(s){let{manifest:d,routeModules:f}=dm(),[c,m]=T.useState([]);return T.useEffect(()=>{let b=!1;return $g(s,d,f).then(w=>{b||m(w)}),()=>{b=!0}},[s,d,f]),c}function l0({page:s,matches:d,...f}){let c=Ct(),{manifest:m,routeModules:b}=dm(),{basename:w}=um(),{loaderData:D,matches:j}=t0(),h=T.useMemo(()=>Ff(s,d,j,m,c,"data"),[s,d,j,m,c]),E=T.useMemo(()=>Ff(s,d,j,m,c,"assets"),[s,d,j,m,c]),_=T.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let Q=new Set,P=!1;if(d.forEach(V=>{let L=m.routes[V.route.id];!L||!L.hasLoader||(!h.some(ee=>ee.route.id===V.route.id)&&V.route.id in D&&b[V.route.id]?.shouldRevalidate||L.hasClientLoader?P=!0:Q.add(V.route.id))}),Q.size===0)return[];let B=Zg(s,w,"data");return P&&Q.size>0&&B.searchParams.set("_routes",d.filter(V=>Q.has(V.route.id)).map(V=>V.route.id).join(",")),[B.pathname+B.search]},[w,D,c,m,h,d,s,b]),Y=T.useMemo(()=>Pg(E,m),[E,m]),G=i0(E);return T.createElement(T.Fragment,null,_.map(Q=>T.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...f})),Y.map(Q=>T.createElement("link",{key:Q,rel:"modulepreload",href:Q,...f})),G.map(({key:Q,link:P})=>T.createElement("link",{key:Q,nonce:f.nonce,...P})))}function r0(...s){return d=>{s.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fm&&(window.__reactRouterVersion="7.8.2")}catch{}function s0({basename:s,children:d,window:f}){let c=T.useRef();c.current==null&&(c.current=Jh({window:f,v5Compat:!0}));let m=c.current,[b,w]=T.useState({action:m.action,location:m.location}),D=T.useCallback(j=>{T.startTransition(()=>w(j))},[w]);return T.useLayoutEffect(()=>m.listen(D),[m,D]),T.createElement(Yg,{basename:s,children:d,location:b.location,navigationType:b.action,navigator:m})}var mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sa=T.forwardRef(function({onClick:d,discover:f="render",prefetch:c="none",relative:m,reloadDocument:b,replace:w,state:D,target:j,to:h,preventScrollReset:E,viewTransition:_,...Y},G){let{basename:Q}=T.useContext(Nt),P=typeof h=="string"&&mm.test(h),B,V=!1;if(typeof h=="string"&&P&&(B=h,fm))try{let we=new URL(window.location.href),Ie=h.startsWith("//")?new URL(we.protocol+h):new URL(h),ut=$t(Ie.pathname,Q);Ie.origin===we.origin&&ut!=null?h=ut+Ie.search+Ie.hash:V=!0}catch{At(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Sg(h,{relative:m}),[ee,je,W]=a0(c,Y),Ce=d0(h,{replace:w,state:D,target:j,preventScrollReset:E,relative:m,viewTransition:_});function De(we){d&&d(we),we.defaultPrevented||Ce(we)}let _e=T.createElement("a",{...Y,...W,href:B||L,onClick:V||b?d:De,ref:r0(G,je),target:j,"data-discover":!P&&f==="render"?"true":void 0});return ee&&!P?T.createElement(T.Fragment,null,_e,T.createElement(n0,{page:L})):_e});Sa.displayName="Link";var o0=T.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:c="",end:m=!1,style:b,to:w,viewTransition:D,children:j,...h},E){let _=_i(w,{relative:h.relative}),Y=Ct(),G=T.useContext(er),{navigator:Q,basename:P}=T.useContext(Nt),B=G!=null&&g0(_)&&D===!0,V=Q.encodeLocation?Q.encodeLocation(_).pathname:_.pathname,L=Y.pathname,ee=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;f||(L=L.toLowerCase(),ee=ee?ee.toLowerCase():null,V=V.toLowerCase()),ee&&P&&(ee=$t(ee,P)||ee);const je=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let W=L===V||!m&&L.startsWith(V)&&L.charAt(je)==="/",Ce=ee!=null&&(ee===V||!m&&ee.startsWith(V)&&ee.charAt(V.length)==="/"),De={isActive:W,isPending:Ce,isTransitioning:B},_e=W?d:void 0,we;typeof c=="function"?we=c(De):we=[c,W?"active":null,Ce?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof b=="function"?b(De):b;return T.createElement(Sa,{...h,"aria-current":_e,className:we,ref:E,style:Ie,to:w,viewTransition:D},typeof j=="function"?j(De):j)});o0.displayName="NavLink";var c0=T.forwardRef(({discover:s="render",fetcherKey:d,navigate:f,reloadDocument:c,replace:m,state:b,method:w=Pl,action:D,onSubmit:j,relative:h,preventScrollReset:E,viewTransition:_,...Y},G)=>{let Q=p0(),P=h0(D,{relative:h}),B=w.toLowerCase()==="get"?"get":"post",V=typeof D=="string"&&mm.test(D),L=ee=>{if(j&&j(ee),ee.defaultPrevented)return;ee.preventDefault();let je=ee.nativeEvent.submitter,W=je?.getAttribute("formmethod")||w;Q(je||ee.currentTarget,{fetcherKey:d,method:W,navigate:f,replace:m,state:b,relative:h,preventScrollReset:E,viewTransition:_})};return T.createElement("form",{ref:G,method:B,action:P,onSubmit:c?j:L,...Y,"data-discover":!V&&s==="render"?"true":void 0})});c0.displayName="Form";function u0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pm(s){let d=T.useContext(Dn);return ye(d,u0(s)),d}function d0(s,{target:d,replace:f,state:c,preventScrollReset:m,relative:b,viewTransition:w}={}){let D=tr(),j=Ct(),h=_i(s,{relative:b});return T.useCallback(E=>{if(Xg(E,d)){E.preventDefault();let _=f!==void 0?f:Oi(j)===Oi(h);D(s,{replace:_,state:c,preventScrollReset:m,relative:b,viewTransition:w})}},[j,D,h,f,c,d,s,m,b,w])}var f0=0,m0=()=>`__${String(++f0)}__`;function p0(){let{router:s}=pm("useSubmit"),{basename:d}=T.useContext(Nt),f=Cg();return T.useCallback(async(c,m={})=>{let{action:b,method:w,encType:D,formData:j,body:h}=Fg(c,d);if(m.navigate===!1){let E=m.fetcherKey||m0();await s.fetch(E,f,m.action||b,{preventScrollReset:m.preventScrollReset,formData:j,body:h,formMethod:m.method||w,formEncType:m.encType||D,flushSync:m.flushSync})}else await s.navigate(m.action||b,{preventScrollReset:m.preventScrollReset,formData:j,body:h,formMethod:m.method||w,formEncType:m.encType||D,replace:m.replace,state:m.state,fromRouteId:f,flushSync:m.flushSync,viewTransition:m.viewTransition})},[s,d,f])}function h0(s,{relative:d}={}){let{basename:f}=T.useContext(Nt),c=T.useContext(Ot);ye(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),b={..._i(s||".",{relative:d})},w=Ct();if(s==null){b.search=w.search;let D=new URLSearchParams(b.search),j=D.getAll("index");if(j.some(E=>E==="")){D.delete("index"),j.filter(_=>_).forEach(_=>D.append("index",_));let E=D.toString();b.search=E?`?${E}`:""}}return(!s||s===".")&&m.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(b.pathname=b.pathname==="/"?f:Jt([f,b.pathname])),Oi(b)}function g0(s,{relative:d}={}){let f=T.useContext(lm);ye(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=pm("useViewTransitionState"),m=_i(s,{relative:d});if(!f.isTransitioning)return!1;let b=$t(f.currentLocation.pathname,c)||f.currentLocation.pathname,w=$t(f.nextLocation.pathname,c)||f.nextLocation.pathname;return Il(m.pathname,w)!=null||Il(m.pathname,b)!=null}const x0=["Drone Pilot / Operator for Agriculture","Precision Agriculture Consultant","UAV Imaging and Survey Specialist","Drone Data Analyst","AgriTech Systems Developer","Remote Sensing & GIS Analyst","Agri-Robotics Engineer","Government Drone Policy Advisor"],b0=["Drone Engineering & Flight Systems","UAV Mapping & Survey Techniques","Remote Sensing & Crop Imaging","Precision Farming & Smart Irrigation","NDVI Analysis for Crop Health","GIS & GPS Integration","AI & Machine Learning in Drone Data","Drone Laws and Compliance"],v0=[{subject:"Fundamentals of Drone Technology",subtopics:"Types of UAVs, drone mechanics, components, payloads, safety features"},{subject:"Flight Dynamics and Control",subtopics:"Autopilot systems, telemetry, GPS navigation, mission planning"},{subject:"Introduction to Precision Agriculture",subtopics:"Site-specific crop management, sensor-based agriculture, smart practices"},{subject:"Aerial Imaging and Remote Sensing",subtopics:"Camera types, NDVI, orthomosaic generation, calibration techniques"},{subject:"Drone Laws and Safety",subtopics:"DGCA/FAA guidelines, licensing, no-fly zones, airspace regulations"},{subject:"Practical Lab I",subtopics:"Drone assembly, manual flying, simulator training, GPS flight testing"}],y0=[{subject:"NDVI & Crop Monitoring",subtopics:"Vegetation indices, pest & disease detection, soil health visualization"},{subject:"Drone Mapping & Surveying",subtopics:"3D terrain mapping, contour creation, yield prediction, digital elevation models"},{subject:"IoT & Drone Integration",subtopics:"Sensor fusion, edge devices, automated irrigation alerts, cloud syncing"},{subject:"Capstone Project",subtopics:"Industry-based research project solving a real-world agri-drone challenge"},{subject:"Practical Lab II",subtopics:"Autonomous flying, multispectral imaging, spraying modules, advanced missions"}],j0=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500;700&display=swap');

  .page-container {
    background-color: #f1f5f9;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    color: #1e293b;
  }

  .header {
    background-size: cover;
    background-position: center;
    color: white;
    padding: 6rem 2.5rem;
    text-align: center;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    position: relative;
  }

  .header-overlay {
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: 0.6;
  }

  .header-content {
    position: relative;
    z-index: 10;
  }

  .header-title {
    font-size: 3rem;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    line-height: 1.2;
  }

  .header-subtitle {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #e2e8f0;
  }

  .main-content {
    max-width: 1152px;
    margin: 0 auto;
    padding: 5rem 1.5rem;
  }
  
  .section-title {
    font-size: 2.25rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }

  .section-title span {
    color: #0d9488;
    margin-right: 1rem;
  }
  
  .intro-section {
    text-align: center;
    max-width: 56rem;
    margin: 0 auto;
  }
  
  .intro-text {
    font-size: 1.25rem;
    line-height: 1.75;
    color: #334155;
  }

  .info-grid {
    display: grid;
    gap: 3rem;
    margin-top: 6rem;
  }

  .info-card {
    background-color: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    transition: box-shadow 0.3s ease-in-out;
  }

  .info-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  }
  
  .info-card-title {
    font-size: 1.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
  }
  
  .info-card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 1.125rem;
    color: #4b5563;
  }
  
  .info-card-list li {
    display: flex;
    align-items: flex-start;
  }
  
  .info-card-list svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #14b8a6;
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  .syllabus-section {
    margin-top: 6rem;
  }

  .syllabus-table-container {
    margin-top: 3rem;
  }
  
  .syllabus-table-title {
    font-size: 1.875rem;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .table-wrapper {
    overflow-x: auto;
    border-radius: 0.75rem;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  }
  
  .syllabus-table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  .syllabus-table th, .syllabus-table td {
    padding: 1.25rem;
  }
  
  .syllabus-table thead {
    background-color: #1e293b;
    color: white;
  }

  .syllabus-table th {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
  
  .syllabus-table tbody tr {
    border-bottom: 1px solid #e5e7eb;
  }

  .syllabus-table tbody tr:nth-child(odd) {
    background-color: white;
  }

  .syllabus-table tbody tr:nth-child(even) {
    background-color: #f1f5f9;
  }

  .syllabus-table tbody tr:hover {
    background-color: #f0fdfa;
    transition: background-color 0.3s;
  }
  
  .syllabus-table td:first-child {
    font-weight: 500;
    color: #1e293b;
  }

  .syllabus-table td {
    color: #334155;
    line-height: 1.6;
  }

  .apply-button-container {
    text-align: center;
    margin-top: 6rem;
  }
  
  .apply-button {
    display: inline-block;
    background-color: #0d9488;
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    padding: 1.25rem 3rem;
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }

  .apply-button:hover {
    background-color: #0f766e;
    transform: scale(1.05);
  }

  .footer {
    background-color: #020617;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: 5rem;
  }

  /* Responsive Styles */
  @media (min-width: 768px) {
    .header-title {
      font-size: 3.75rem;
    }
    .info-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,Zf=({icon:s,children:d})=>l.jsxs("h2",{className:"section-title",children:[l.jsx("span",{children:s}),d]}),Kf=({title:s,icon:d,items:f})=>l.jsxs("div",{className:"info-card",children:[l.jsxs("h3",{className:"info-card-title",children:[l.jsx("span",{children:d}),s]}),l.jsx("ul",{className:"info-card-list",children:f.map((c,m)=>l.jsxs("li",{children:[l.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),l.jsx("span",{children:c})]},m))})]}),Jf=({title:s,data:d})=>l.jsxs("div",{className:"syllabus-table-container",children:[l.jsx("h3",{className:"syllabus-table-title",children:s}),l.jsx("div",{className:"table-wrapper",children:l.jsxs("table",{className:"syllabus-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Subject"}),l.jsx("th",{children:"Subtopics"})]})}),l.jsx("tbody",{children:d.map((f,c)=>l.jsxs("tr",{children:[l.jsx("td",{children:f.subject}),l.jsx("td",{children:f.subtopics})]},c))})]})})]});function To(){return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:j0}),l.jsxs("div",{className:"page-container",children:[l.jsxs("header",{className:"header agri-drone-header",children:[l.jsx("div",{className:"header-overlay"}),l.jsxs("div",{className:"header-content",children:[l.jsx("h1",{className:"header-title",children:"Master Program in Agriculture Drone Technology"}),l.jsx("p",{className:"header-subtitle",children:"Pioneering the future of farming from above."})]})]}),l.jsxs("main",{className:"main-content",children:[l.jsxs("section",{className:"intro-section",children:[l.jsx(Zf,{icon:"🛸",children:"Introduction"}),l.jsx("p",{className:"intro-text",children:"The Master’s in Agriculture Drone Technology is an advanced postgraduate program designed to revolutionize farming through aerial technology. It blends drone engineering, remote sensing, AI, and data analytics to create intelligent agricultural systems. The course equips students with skills to apply UAVs in crop monitoring, spraying, and yield prediction — boosting productivity and sustainability."})]}),l.jsxs("section",{className:"info-grid",children:[l.jsx(Kf,{title:"Career Opportunities",icon:"💼",items:x0}),l.jsx(Kf,{title:"Key Areas of Study",icon:"🎯",items:b0})]}),l.jsxs("section",{className:"syllabus-section",children:[l.jsx(Zf,{icon:"📘",children:"Semester-wise Syllabus"}),l.jsx(Jf,{title:"Semester 1: Core Foundations",data:v0}),l.jsx(Jf,{title:"Semester 2: Advanced Applications",data:y0})]}),l.jsx("div",{className:"apply-button-container",children:l.jsx("a",{href:"https://brpublication.github.io/IGT_FINAL/form.html",target:"_blank",rel:"noopener noreferrer",className:"apply-button",children:"Apply Now"})})]}),l.jsx("footer",{className:"footer",children:l.jsxs("p",{children:["© ",new Date().getFullYear()," Agriculture Drone Technology Program. All Rights Reserved."]})})]})]})}const S0=["Precision Agriculture Specialist","IoT & Sensor Technology Consultant","Crop Management Systems Developer","Agricultural Data Analyst","Smart Farming Solutions Engineer","Climate & Weather Prediction Specialist","Agricultural Automation Engineer","Sustainable Agriculture Consultant"],w0=["IoT Sensors & Smart Monitoring","Data-Driven Crop Management","Automated Irrigation Systems","Weather Prediction & Climate Control","Soil Health & Nutrient Management","Crop Yield Optimization","Agricultural Robotics & Automation","Sustainable Farming Practices"],A0=[{subject:"Fundamentals of Precision Agriculture",subtopics:"GPS technology, GIS mapping, variable rate technology, site-specific management"},{subject:"IoT & Sensor Technology",subtopics:"Soil sensors, weather stations, crop monitoring devices, data collection systems"},{subject:"Data Analytics in Agriculture",subtopics:"Big data processing, statistical analysis, predictive modeling, decision support systems"},{subject:"Smart Irrigation Systems",subtopics:"Automated watering, moisture sensors, climate-based irrigation, water conservation"},{subject:"Crop Management Software",subtopics:"Farm management platforms, crop planning tools, yield tracking, record keeping"},{subject:"Practical Lab I",subtopics:"Sensor installation, data collection, software setup, field mapping exercises"}],N0=[{subject:"Advanced Crop Monitoring",subtopics:"Satellite imagery, drone technology, multispectral analysis, disease detection"},{subject:"Climate-Smart Agriculture",subtopics:"Weather forecasting, climate adaptation, seasonal planning, risk management"},{subject:"Agricultural Automation",subtopics:"Robotic systems, autonomous vehicles, smart machinery, precision planting"},{subject:"Capstone Project",subtopics:"Industry-based research project implementing precision agriculture solutions"},{subject:"Practical Lab II",subtopics:"Advanced monitoring systems, automation testing, data analysis, project implementation"}],$f=({icon:s,children:d})=>l.jsxs("h2",{className:"text-4xl font-serif font-bold text-slate-800 mb-8 flex items-center",children:[l.jsx("span",{className:"text-teal-600 mr-4",children:s}),d]}),Pf=({title:s,icon:d,items:f})=>l.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300",children:[l.jsxs("h3",{className:"text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center",children:[l.jsx("span",{className:"mr-3",children:d}),s]}),l.jsx("ul",{className:"space-y-3 text-lg text-gray-600",children:f.map((c,m)=>l.jsxs("li",{className:"flex items-start",children:[l.jsx("svg",{className:"w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),l.jsx("span",{children:c})]},m))})]}),Wf=({title:s,data:d})=>l.jsxs("div",{className:"mt-12",children:[l.jsx("h3",{className:"text-3xl font-serif font-semibold text-slate-800 mb-6 text-center",children:s}),l.jsx("div",{className:"overflow-x-auto rounded-xl shadow-2xl",children:l.jsxs("table",{className:"w-full text-left",children:[l.jsx("thead",{className:"bg-slate-800 text-white",children:l.jsxs("tr",{children:[l.jsx("th",{className:"p-5 text-lg font-semibold tracking-wider",children:"Subject"}),l.jsx("th",{className:"p-5 text-lg font-semibold tracking-wider",children:"Subtopics"})]})}),l.jsx("tbody",{className:"bg-white",children:d.map((f,c)=>l.jsxs("tr",{className:`border-b border-gray-200 ${c%2===0?"bg-white":"bg-slate-50"} hover:bg-teal-50 transition-colors duration-300`,children:[l.jsx("td",{className:"p-5 font-medium text-slate-800",children:f.subject}),l.jsx("td",{className:"p-5 text-slate-600 leading-relaxed",children:f.subtopics})]},c))})]})})]});function E0(){return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500;700&display=swap');
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Roboto', sans-serif; }
        `}),l.jsxs("div",{className:"bg-slate-100 min-h-screen font-sans text-slate-800",children:[l.jsxs("header",{className:"bg-cover bg-center text-white py-24 px-10 text-center shadow-lg relative precision-agri-header",children:[l.jsx("div",{className:"absolute inset-0 bg-black opacity-60"}),l.jsxs("div",{className:"relative z-10",children:[l.jsx("h1",{className:"text-5xl md:text-6xl font-serif font-extrabold tracking-wide leading-tight",children:"Master Program in Precision Agriculture"}),l.jsx("p",{className:"mt-4 text-xl text-gray-200",children:"Revolutionizing farming through data-driven technology and smart systems."})]})]}),l.jsxs("main",{className:"container mx-auto px-6 py-20 md:px-10",children:[l.jsxs("section",{className:"text-center max-w-4xl mx-auto",children:[l.jsx($f,{icon:"🌱",children:"Introduction"}),l.jsx("p",{className:"text-xl leading-relaxed text-slate-700",children:"The Master's in Precision Agriculture is an advanced postgraduate program designed to transform traditional farming through cutting-edge technology. It combines IoT sensors, data analytics, AI, and automation to create intelligent agricultural systems that maximize crop yields while minimizing resource waste."}),l.jsx("p",{className:"text-xl leading-relaxed text-slate-700 mt-4",children:"Students will master data-driven farming techniques, learn to implement smart irrigation systems, and develop skills in crop monitoring and yield optimization using the latest precision agriculture technologies."})]}),l.jsxs("section",{className:"grid md:grid-cols-2 gap-12 mt-24",children:[l.jsx(Pf,{title:"Career Opportunities",icon:"💼",items:S0}),l.jsx(Pf,{title:"Key Areas of Study",icon:"🎯",items:w0})]}),l.jsxs("section",{className:"mt-24",children:[l.jsx($f,{icon:"📘",children:"Semester-wise Syllabus"}),l.jsx(Wf,{title:"Semester 1: Core Foundations",data:A0}),l.jsx(Wf,{title:"Semester 2: Advanced Applications",data:N0})]}),l.jsx("div",{className:"text-center mt-24",children:l.jsx("a",{href:"https://brpublication.github.io/IGT_FINAL/form.html",target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-teal-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-xl hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out",children:"Apply Now"})})]}),l.jsx("footer",{className:"bg-slate-900 text-white text-center p-6 mt-20",children:l.jsxs("p",{children:["© ",new Date().getFullYear()," Precision Agriculture Program. All Rights Reserved."]})})]})]})}const T0=()=>{const d=Ct().state?.program;return d?d.title.toLowerCase().includes("ai & data analytics")?l.jsx(z0,{programData:d}):(console.log("Program title:",d.title),console.log("Program title lowercase:",d.title.toLowerCase()),console.log("Checking for Agriculture Drones match..."),d.title==="MASTER PROGRAM in Agriculture Drones"?(console.log("EXACT MATCH FOUND! Rendering AgricultureDroneTechnology component"),l.jsx(To,{},`agri-drone-${Date.now()}`)):d.title.toLowerCase().includes("agriculture drones")?(console.log("Lowercase match found! Rendering AgricultureDroneTechnology component"),l.jsx(To,{},`agri-drone-${Date.now()}`)):(console.log("No Agriculture Drones match found, checking for Precision Agriculture..."),d.title==="MASTER PROGRAM in Precision Agriculture"?(console.log("EXACT MATCH FOUND! Rendering PrecisionAgriculture component"),console.log("Program title matched:",d.title),l.jsx(E0,{},`precision-agri-${Date.now()}`)):d.title==="MASTER PROGRAM in Agriculture Drones"?(console.log("EXACT MATCH FOUND! Rendering AgricultureDroneTechnology component"),console.log("Program title matched:",d.title),l.jsx(To,{},`agri-drone-${Date.now()}`)):(console.log("No specific program match found, using default page"),l.jsxs("div",{className:"program-details-page",children:[l.jsx("div",{className:"program-banner",children:l.jsxs("div",{className:"banner-content",children:[l.jsx("h1",{children:d.title}),l.jsx("p",{className:"program-banner-subtitle",children:d.description||"Transform your future with cutting-edge technology education"})]})}),l.jsxs("div",{className:"program-content-wrapper",children:[l.jsx("div",{className:"program-content-section",children:l.jsxs("div",{className:"section-container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-seedling"})}),l.jsx("h2",{children:"Introduction"})]}),l.jsx("p",{className:"section-subtitle",children:d.description||"This program aims to equip students with modern tools and knowledge to transform traditional practices through innovation and technology."}),l.jsx("p",{className:"section-subtitle",children:"Our comprehensive curriculum covers cutting-edge AI technologies, machine learning algorithms, and advanced data analytics methodologies that are essential for today's digital economy."}),l.jsx("p",{className:"section-subtitle",children:"Students will gain hands-on experience with industry-standard tools and platforms, preparing them for successful careers in the rapidly evolving field of artificial intelligence and data science."}),l.jsx("p",{className:"section-subtitle",children:"The program emphasizes practical applications through real-world projects, case studies, and industry collaborations, ensuring graduates are job-ready upon completion."}),l.jsx("p",{className:"section-subtitle",children:"We focus on developing both technical skills and business acumen, enabling students to bridge the gap between data science and strategic decision-making in organizations."}),l.jsx("p",{className:"section-subtitle",children:"Our faculty consists of industry experts and academic researchers who bring current market insights and cutting-edge research findings into the classroom."}),l.jsx("p",{className:"section-subtitle",children:"The program includes specialized tracks in machine learning, business analytics, and AI applications, allowing students to tailor their education to their career goals."}),l.jsx("p",{className:"section-subtitle",children:"Graduates will be equipped with the skills to implement AI solutions, analyze big data, and drive innovation across various industries including healthcare, finance, and technology."}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:"95%"}),l.jsx("div",{className:"stat-label",children:"Job Placement Rate"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:"50+"}),l.jsx("div",{className:"stat-label",children:"Industry Partners"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:d.duration||"2 Years"}),l.jsx("div",{className:"stat-label",children:"Duration"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:d.type||"Master's Degree"}),l.jsx("div",{className:"stat-label",children:"Program Type"})]})]}),l.jsxs("div",{className:"program-features",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-star"})}),l.jsx("h2",{children:"Program Features"})]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-laptop-code"})}),l.jsx("h4",{children:"Hands-on Training"}),l.jsx("p",{children:"Practical experience with real technology systems and equipment"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-users"})}),l.jsx("h4",{children:"Industry Mentorship"}),l.jsx("p",{children:"Direct guidance from technology professionals and experts"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-globe"})}),l.jsx("h4",{children:"Global Network"}),l.jsx("p",{children:"Connect with international students and professionals"})]})]})]})]})}),l.jsx("div",{className:"program-content-section",children:l.jsxs("div",{className:"section-container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-briefcase"})}),l.jsx("h2",{children:"Career Opportunities"})]}),l.jsxs("div",{className:"career-grid",children:[l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-brain"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"Technology Specialist"}),l.jsx("p",{children:"Design comprehensive technology solutions for modern operations"})]})]}),l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-crosshairs"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"Innovation Expert"}),l.jsx("p",{children:"Implement cutting-edge techniques using advanced technologies"})]})]}),l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-robot"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"AI/ML Specialist"}),l.jsx("p",{children:"Develop intelligent models for prediction and optimization"})]})]})]})]})}),l.jsx("div",{className:"program-content-section",children:l.jsx("div",{className:"section-container",children:l.jsx("div",{className:"apply-section",children:l.jsxs("div",{className:"apply-content",children:[l.jsx("h3",{children:"Ready to Transform Your Future?"}),l.jsx("p",{children:"Join the next generation of technology innovators and shape the future with cutting-edge knowledge."}),l.jsxs("button",{className:"apply-button",children:["APPLY NOW",l.jsx("i",{className:"fas fa-arrow-right"})]})]})})})})]})]})))):l.jsx("div",{className:"program-details-page",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"error-state",children:[l.jsx("h2",{children:"Program Not Found"}),l.jsx("p",{children:"The requested program could not be loaded. Please go back to the programs page and try again."})]})})})},z0=({programData:s})=>{const d=[{subject:"Foundations of AI & ML",subtopics:"Supervised & unsupervised learning, neural networks, model training"},{subject:"Data Mining & Warehousing",subtopics:"ETL processes, data marts, clustering & association techniques"},{subject:"Statistics for Data Science",subtopics:"Probability, hypothesis testing, regression, inferential stats"},{subject:"Python & Data Visualization",subtopics:"NumPy, Pandas, Matplotlib, Seaborn, Dash/Plotly"},{subject:"Lab I – ML Models",subtopics:"Hands-on with datasets in healthcare, agriculture, finance"}],f=[{subject:"Deep Learning & Neural Networks",subtopics:"CNNs, RNNs, LSTMs, model tuning, Keras/PyTorch"},{subject:"Big Data Analytics",subtopics:"Hadoop, Spark, Hive, distributed data processing"},{subject:"Natural Language Processing",subtopics:"Text classification, sentiment analysis, transformers"},{subject:"AI Ethics & Explainability",subtopics:"Bias, fairness, transparency, model interpretability"},{subject:"Capstone Project",subtopics:"End-to-end AI/Analytics solution to a real industry problem"}];return l.jsxs("div",{className:"ai-data-analytics-program",children:[l.jsx("header",{className:"ai-header",children:l.jsxs("div",{className:"container",children:[l.jsx("h1",{children:s.title}),l.jsx("p",{children:"Unlock the power of data and artificial intelligence to shape the future."})]})}),l.jsxs("main",{children:[l.jsx("section",{className:"ai-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-brain"})}),l.jsx("h2",{children:"Introduction"})]}),l.jsx("p",{children:s.description||"The Master Program in AI & Data Analytics is designed to empower students with the ability to extract actionable insights from data using advanced Artificial Intelligence techniques. It blends machine learning, statistical modeling, big data processing, and modern AI tools to build intelligent, data-driven systems and solutions."})]})})}),l.jsx("section",{className:"ai-section ai-section-alt",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-briefcase"})}),l.jsx("h2",{children:"Career Opportunities"})]}),l.jsxs("div",{className:"career-list",children:[l.jsx("div",{className:"career-item",children:"Data Scientist / Machine Learning Engineer"}),l.jsx("div",{className:"career-item",children:"AI & Analytics Consultant"}),l.jsx("div",{className:"career-item",children:"Business Intelligence Analyst"}),l.jsx("div",{className:"career-item",children:"Big Data Engineer"}),l.jsx("div",{className:"career-item",children:"Data Visualization Expert"}),l.jsx("div",{className:"career-item",children:"Product Analyst / AI Product Manager"}),l.jsx("div",{className:"career-item",children:"Predictive Modeling Specialist"})]})]})})}),l.jsx("section",{className:"ai-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-crosshairs"})}),l.jsx("h2",{children:"Key Areas of Study"})]}),l.jsxs("div",{className:"study-areas",children:[l.jsx("div",{className:"study-item",children:"Machine Learning & Deep Learning"}),l.jsx("div",{className:"study-item",children:"Big Data Analytics & Cloud Platforms"}),l.jsx("div",{className:"study-item",children:"Data Mining & Data Warehousing"}),l.jsx("div",{className:"study-item",children:"Predictive Analytics & Forecasting"}),l.jsx("div",{className:"study-item",children:"Natural Language Processing"}),l.jsx("div",{className:"study-item",children:"Business Intelligence Tools & Dashboards"}),l.jsx("div",{className:"study-item",children:"Responsible AI and Ethics"})]})]})})}),l.jsx("section",{className:"ai-section ai-section-alt",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-book-open"})}),l.jsx("h2",{children:"Semester-wise Syllabus"})]}),l.jsxs("div",{className:"syllabus-section",children:[l.jsx("h3",{children:"Semester 1: Core AI and Analytics"}),l.jsx("div",{className:"syllabus-grid",children:d.map((c,m)=>l.jsxs("div",{className:"syllabus-item",children:[l.jsx("h4",{children:c.subject}),l.jsx("p",{children:c.subtopics})]},m))})]}),l.jsxs("div",{className:"syllabus-section",children:[l.jsx("h3",{children:"Semester 2: Advanced Analytics & Applications"}),l.jsx("div",{className:"syllabus-grid",children:f.map((c,m)=>l.jsxs("div",{className:"syllabus-item",children:[l.jsx("h4",{children:c.subject}),l.jsx("p",{children:c.subtopics})]},m))})]})]})})}),l.jsx("section",{className:"ai-apply-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"apply-content",children:[l.jsx("h3",{children:"Ready to Shape the Future with AI?"}),l.jsx("a",{href:"https://brpublication.github.io/IGT_FINAL/form.html",target:"_blank",rel:"noopener noreferrer",className:"apply-button",children:"Apply Now"})]})})})]})]})},R0=()=>l.jsx("style",{children:`
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
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        color: #333;
        padding: 15px 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border-bottom: 2px solid #e8e8e8;
        backdrop-filter: blur(10px);
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
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" x="0" y="0" width="100" height="100"/></svg>');
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
    `}),D0=()=>(T.useEffect(()=>{const s=document.createElement("link");s.rel="stylesheet",s.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(s);const d=document.createElement("link");return d.rel="stylesheet",d.href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",document.head.appendChild(d),()=>{document.head.removeChild(s),document.head.removeChild(d)}},[]),null),M0=({activePage:s})=>{const[d,f]=T.useState(!1),c=tr(),m=b=>{f(!1),c(b)};return l.jsx("header",{className:"header",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"logo-container",onClick:()=>m("/home"),children:[l.jsx("img",{src:"https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png",alt:"IGT Logo",className:"logo-crest"}),l.jsxs("div",{className:"logo-text-container",children:[l.jsx("h1",{className:"logo-title",children:"INSTITUTE OF GLOBAL TECHNOLOGY"}),l.jsx("p",{className:"logo-tagline",children:"Gateway to Excellence in Education"})]})]}),l.jsx("nav",{children:l.jsxs("ul",{className:d?"active":"",children:[l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/home"),className:`nav-link ${s==="/home"?"active":""}`,children:"Home"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/programs"),className:`nav-link ${s==="/programs"?"active":""}`,children:"Programs"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/departments"),className:`nav-link ${s==="/departments"?"active":""}`,children:"Departments"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/faculty"),className:`nav-link ${s==="/faculty"?"active":""}`,children:"Faculty"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/admissions"),className:`nav-link ${s==="/admissions"?"active":""}`,children:"Admissions"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/contact"),className:`nav-link ${s==="/contact"?"active":""}`,children:"Contact"})})]})}),l.jsx("button",{className:"menu-toggle",onClick:()=>f(!d),"aria-label":"Open Menu",children:l.jsx("i",{className:"fas fa-bars"})})]})})},O0=()=>l.jsx("section",{id:"hero",className:"hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsxs("div",{className:"hero-title-glance",children:[l.jsx("div",{className:"glance-line",children:l.jsx("span",{className:"glance-label",children:"WELCOME TO"})}),l.jsx("div",{className:"glance-line",children:l.jsx("span",{className:"glance-main",children:"INSTITUTE OF"})}),l.jsx("div",{className:"glance-line",children:l.jsx("span",{className:"glance-main",children:"GLOBAL TECHNOLOGY"})})]}),l.jsxs("div",{className:"hero-glance-content",children:[l.jsx("div",{className:"hero-description",children:l.jsx("p",{children:"Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future."})}),l.jsx("div",{className:"hero-accredited",children:"ACCREDITED BY AIAB EUROPE"})]})]})}),C0=()=>l.jsx("section",{id:"about",className:"about",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"ABOUT INSTITUTE OF GLOBAL TECHNOLOGY"}),l.jsx("p",{className:"section-subtitle",children:"Discover our mission, vision, and values that guide us in providing exceptional technology education"}),l.jsxs("div",{className:"about-grid",children:[l.jsx("div",{className:"about-image",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Institute of Global Technology Campus"})}),l.jsxs("div",{className:"about-content",children:[l.jsx("h3",{children:"Transforming Technology Education Since 2005"}),l.jsx("p",{children:"The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success."}),l.jsx("p",{children:"Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies."}),l.jsx("p",{className:"accredited-text",children:"ACCREDITED BY AIAB EUROPE"}),l.jsxs("div",{className:"stats-container",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"number",children:"6000+"}),l.jsx("div",{className:"label",children:"STUDENTS"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"number",children:"300+"}),l.jsx("div",{className:"label",children:"FACULTY"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"number",children:"60+"}),l.jsx("div",{className:"label",children:"PROGRAMS"})]})]})]})]})]})}),_0=()=>l.jsx("section",{id:"why-choose-us",className:"why-choose-us",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{children:["Why Choose Us",l.jsx("span",{className:"question-mark",children:"?"})]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Industrial Partners"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"100+ Industrial Partners"}),l.jsx("p",{children:"Strong collaborations with leading technology companies for research and placements."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Expert Faculty"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Learn from Experts"}),l.jsx("p",{children:"Instruction from national and international experts in their respective fields."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Placement Support"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Placement Assistance"}),l.jsx("p",{children:"Complete placement support with career counseling and interview preparation."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Advanced Research"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Advanced Research"}),l.jsx("p",{children:"Opportunities to work on innovative research projects with commercialization potential."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Entrepreneurship Support"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Entrepreneurship Support"}),l.jsx("p",{children:"Incubation center and mentorship for student startups and innovations."})]})]})]})]})}),If=[{category:"Precision Agriculture",subtitle:"Innovative programs combining technology with modern agricultural practices",courses:[{title:"MASTER PROGRAM in Precision Agriculture",image:"https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg",duration:"12 Months",description:"Master data-driven farming techniques using IoT, sensors, and AI for crop optimization. Learn advanced soil monitoring, weather prediction, and automated irrigation systems to maximize crop yields while minimizing resource waste."},{title:"MASTER PROGRAM in Agriculture Drones",image:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring."},{title:"MASTER PROGRAM in Hydroponics & Vertical Farming",image:"https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg",duration:"12 Months",description:"Learn sustainable farming techniques without soil in controlled environments. Master nutrient solution management, climate control systems, and vertical stacking technologies for urban agriculture."},{title:"MASTER PROGRAM in AI & ML in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg",duration:"12 Months",description:"Apply artificial intelligence and machine learning to solve agricultural challenges. Master predictive analytics for crop diseases, yield forecasting, and resource optimization."},{title:"MASTER PROGRAM in Agriculture Robotics",image:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",duration:"12 Months",description:"Develop and implement robotic solutions for planting, harvesting, and farm automation. Master robotic arm programming, computer vision integration, and autonomous navigation systems."},{title:"MASTER PROGRAM in Advanced Technologies in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp",duration:"12 Months",description:"Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement."},{title:"MASTER PROGRAM in Agri Entrepreneurship",image:"https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business skills specific to agricultural ventures and startups. Master market analysis, financial planning, and sustainable business models for agribusiness."}]},{category:"AI & Robotics",subtitle:"Specialized programs in artificial intelligence and robotic systems",courses:[{title:"MASTER PROGRAM in AI & Robotics",image:"https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg",duration:"12 Months",description:"Comprehensive training in AI-driven robotic systems and automation. Master machine learning algorithms for robotic control and autonomous decision-making in industrial applications."},{title:"MASTER PROGRAM in Generative AI",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation."},{title:"MASTER PROGRAM in AI & Blockchain",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the convergence of AI and decentralized blockchain technologies. Master smart contract development, AI-powered blockchain analytics, and decentralized AI systems for secure applications."},{title:"MASTER PROGRAM in AI & Data Analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI techniques to extract insights from complex datasets. Master predictive modeling, statistical analysis, and machine learning algorithms for business intelligence and decision-making."},{title:"MASTER PROGRAM in AI & Biological Sciences",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development."},{title:"MASTER PROGRAM in AI & Cybersecurity Systems",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop AI-powered solutions for cybersecurity threats and vulnerabilities. Master threat detection algorithms, anomaly identification, and automated security response systems for network protection."}]},{category:"AI & Business",subtitle:"Programs at the intersection of artificial intelligence and business applications",courses:[{title:"MASTER PROGRAM in AI & Business",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Transform business operations with AI-driven strategies and solutions. Master process automation, customer analytics, and AI-powered decision support systems for competitive advantage."},{title:"MASTER PROGRAM in AI & Management Studies",image:"https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg",duration:"12 Months",description:"Apply AI to organizational leadership, decision-making, and strategy. Master AI-driven management tools, predictive analytics for strategic planning, and intelligent automation for operational efficiency."},{title:"MASTER PROGRAM in AI & Law",image:"https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg",duration:"12 Months",description:"Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies."},{title:"MASTER PROGRAM in IP Law",image:"https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg",duration:"12 Months",description:"Specialize in intellectual property law for technology and innovation. Master patent law, copyright protection, and trademark strategies for emerging technologies and digital assets."},{title:"MASTER PROGRAM in AI & Marketing",image:"https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg",duration:"12 Months",description:"Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns."}]},{category:"Healthcare & Life Sciences",subtitle:"Programs at the intersection of technology and life sciences",courses:[{title:"MASTER PROGRAM in Clinical Research & Regulatory Affairs",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets."},{title:"MASTER PROGRAM in Medical Coding",image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg",duration:"12 Months",description:"Learn standardized coding systems for healthcare documentation. Master ICD-10, CPT coding, and healthcare billing systems for accurate medical record management and insurance processing."},{title:"MASTER PROGRAM in Digital Forensics",image:"https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af",duration:"12 Months",description:"Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution."},{title:"MASTER PROGRAM in Industrial Fermentation Technology",image:"https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master microbial processes for food, pharmaceuticals, and biofuels. Learn bioreactor design, process optimization, and quality control for large-scale fermentation operations."},{title:"MASTER PROGRAM in Vaccine Technology",image:"https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png",duration:"12 Months",description:"Study vaccine development, production, and quality control. Master vaccine formulation, manufacturing processes, and regulatory standards for safe and effective immunization products."},{title:"MASTER PROGRAM in Bioentrepreneurship",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies."}]},{category:"AI & Creative Technologies",subtitle:"Programs combining artificial intelligence with creative disciplines",courses:[{title:"MASTER PROGRAM in AI & Designing Technology",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products."},{title:"MASTER PROGRAM in AI & Arts",image:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression."}]},{category:"Emerging Technologies & Smart Systems",subtitle:"Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",courses:[{title:"Reality Architect: Master of AR/VR/XR Development",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master immersive technologies to build future-ready AR, VR, and XR applications. Learn 3D modeling, spatial computing, and interactive design for creating engaging virtual experiences."},{title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",image:"https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",duration:"12 Months",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions."},{title:"Game Changer: Master Program in XR Gaming",image:"https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg",duration:"12 Months",description:"Design and develop immersive games using XR technology and gamification strategy. Master game engine development, 3D asset creation, and interactive storytelling for next-generation gaming experiences."},{title:"Master Program in AR and Mixed Reality",image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",duration:"12 Months",description:"Specialize in designing cutting-edge MR life environments and interfaces. Master spatial computing, gesture recognition, and environmental mapping for seamless mixed reality experiences."},{title:"Master Program in Electric Vehicle Technology",image:"https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png",duration:"12 Months",description:"Learn about EV systems, battery design, automatic mobility, and energy management. Master electric powertrain design, battery management systems, and smart charging infrastructure for sustainable transportation."},{title:"Master Program in IoT and Embedded Systems",image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp",duration:"12 Months",description:"Build connected smart devices with microcontrollers, sensors, and communication protocols. Master embedded software development, wireless communication, and cloud integration for smart city and industrial IoT applications."},{title:"Master Program in Human-Computer Interaction",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Focus on designing intuitive interfaces, enhancing user experiences, and usability testing. Master user research methodologies, interaction design principles, and accessibility standards for inclusive digital products."}]},{category:"Doctoral & Postdoctoral Programs",subtitle:"Advanced research programs for scholars and fellows in science, engineering, and humanities",courses:[{title:"Doctoral Programs",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Varies",description:"Research-focused degrees in multiple disciplines:",list:["PhD in Engineering in ICT disciplines","PhD in Science and Mathematics","PhD in Humanities, Social Science and Design"]},{title:"Postdoctoral Programs",image:"https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Flexible",description:"Postdoctoral fellowships in emerging domains:",list:["Wireless Communications, Embedded Systems","AI, ML, and Information Security","5G/6G, Robotics, VLSI, NLP, Adversarial ML"]}]}],k0=({course:s})=>{const d=tr(),f=()=>{const c=s.title.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");d(`/program/${c}`,{state:{program:s}})};return l.jsxs("div",{className:"program-card",children:[l.jsx("img",{src:s.image,alt:s.title,className:"program-card-image"}),l.jsxs("div",{className:"program-card-content",children:[l.jsx("h4",{children:s.title}),l.jsxs("div",{className:"program-card-duration",children:[l.jsx("i",{className:"far fa-clock"}),s.duration]}),l.jsxs("div",{className:"program-card-description",children:[s.description,s.list&&l.jsx("ul",{children:s.list.map((c,m)=>l.jsx("li",{children:c},m))})]}),l.jsxs("div",{className:"program-card-buttons",children:[l.jsx("button",{className:"btn btn-details",onClick:f,children:"Details"}),l.jsx("button",{className:"btn btn-apply ag-btn-apply",children:"Apply"})]})]})]})},U0=()=>{const[s,d]=T.useState(""),[f,c]=T.useState("all"),m=If.map(b=>({...b,courses:b.courses.filter(w=>(f==="all"||b.category===f)&&w.title.toLowerCase().includes(s.toLowerCase()))})).filter(b=>b.courses.length>0);return l.jsxs("section",{id:"programs",className:"programs-page",children:[l.jsx("div",{className:"page-banner programs-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Transform Your Future"}),l.jsx("p",{children:"Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market."})]})}),l.jsx("div",{className:"search-filter-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"search-filter-container",children:[l.jsxs("div",{className:"search-box",children:[l.jsx("i",{className:"fas fa-search"}),l.jsx("input",{type:"text",placeholder:"Search programs...",value:s,onChange:b=>d(b.target.value),"aria-label":"Search programs"})]}),l.jsx("div",{className:"category-filter",children:l.jsxs("select",{value:f,onChange:b=>c(b.target.value),"aria-label":"Filter by category",children:[l.jsx("option",{value:"all",children:"All Categories"}),If.map((b,w)=>l.jsx("option",{value:b.category,children:b.category},w))]})})]})})}),m.length>0?m.map((b,w)=>l.jsx("div",{className:"program-category",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"category-header",children:[l.jsx("h3",{children:b.category}),l.jsx("p",{children:b.subtitle})]}),l.jsx("div",{className:"program-cards-grid",children:b.courses.map((D,j)=>l.jsx(k0,{course:D},`${D.title}-${j}`))})]})},`${b.category}-${w}`)):l.jsxs("div",{className:"container no-results-container",children:[l.jsx("h3",{className:"no-results-title",children:"No programs found"}),l.jsx("p",{className:"no-results-message",children:"Try adjusting your search terms or category filter to find what you're looking for."}),l.jsx("button",{onClick:()=>{d(""),c("all")},className:"clear-filters-btn",children:"Clear Filters"})]}),l.jsxs("div",{className:"admissions-cta",children:[l.jsx("h3",{children:"Ready to take the next step?"}),l.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),l.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),l.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})},Y0=()=>l.jsxs("section",{className:"admissions-page",children:[l.jsx("div",{className:"admissions-journey-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Begin Your Academic Journey"}),l.jsx("p",{children:"Join our community of innovators and thought leaders"})]})}),l.jsx("div",{className:"admissions-section",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title",children:"Admissions Process"}),l.jsx("p",{className:"section-tagline",children:"Our streamlined admission process makes it easy to join our academic community"}),l.jsxs("div",{className:"process-grid",children:[l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"1"}),l.jsx("h3",{children:"Application"}),l.jsx("p",{children:"Submit your online application along with required documents through our portal."}),l.jsx("a",{href:"#",className:"process-btn",children:"Apply Now →"})]}),l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"2"}),l.jsx("h3",{children:"Review"}),l.jsx("p",{children:"Our admissions committee will carefully evaluate your application and credentials."}),l.jsx("a",{href:"#",className:"process-btn",children:"Learn More →"})]}),l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"3"}),l.jsx("h3",{children:"Interview"}),l.jsx("p",{children:"Selected candidates will be invited for an interview (in-person or virtual)."}),l.jsx("a",{href:"#",className:"process-btn",children:"Prepare →"})]}),l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"4"}),l.jsx("h3",{children:"Decision"}),l.jsx("p",{children:"Receive your admission decision within 2-4 weeks of your interview."}),l.jsx("a",{href:"#",className:"process-btn",children:"Timeline →"})]})]}),l.jsx("h2",{className:"section-title",children:"Admission Details"}),l.jsx("p",{className:"section-tagline",children:"Key information to help you prepare your application"}),l.jsxs("div",{className:"details-grid",children:[l.jsxs("div",{className:"details-card",children:[l.jsxs("h3",{children:[l.jsx("span",{className:"details-icon",children:l.jsx("i",{className:"fas fa-file-alt"})}),"Application Requirements"]}),l.jsxs("ul",{className:"details-list",children:[l.jsx("li",{children:"Completed online application form"}),l.jsx("li",{children:"Bachelor's degree in relevant field with minimum 50% marks"}),l.jsx("li",{children:"Statement of purpose (500-1000 words)"}),l.jsx("li",{children:"Two letters of recommendation"}),l.jsx("li",{children:"Professional resume/CV"}),l.jsx("li",{children:"Application fee (waivers available)"})]}),l.jsx("a",{href:"#",className:"details-btn btn-red",children:"Download Checklist"})]}),l.jsxs("div",{className:"details-card important-dates",children:[l.jsxs("h3",{children:[l.jsx("span",{className:"details-icon",children:l.jsx("i",{className:"fas fa-calendar-alt"})}),"Important Dates"]}),l.jsxs("ul",{className:"details-list",children:[l.jsx("li",{children:"Jul 15 Fall Semester Deadline"}),l.jsx("li",{children:"Nov 15 Spring Semester Deadline"}),l.jsx("li",{children:"Apr 15 Summer Semester Deadline"}),l.jsx("li",{children:"Dec 1 Early Decision Deadline"}),l.jsx("li",{children:"Aug 20-25 Orientation Week"})]}),l.jsx("a",{href:"#",className:"details-btn btn-red",children:"Add to Calendar"})]}),l.jsxs("div",{className:"details-card",children:[l.jsxs("h3",{children:[l.jsx("span",{className:"details-icon",children:l.jsx("i",{className:"fas fa-university"})}),"Tuition & Financial Aid"]}),l.jsxs("ul",{className:"details-list",children:[l.jsx("li",{children:"Tuition: ₹1,50,000 per semester"}),l.jsx("li",{children:"Merit-based scholarships available"}),l.jsx("li",{children:"Research and teaching assistantships"}),l.jsx("li",{children:"Education loan partnerships"}),l.jsx("li",{children:"Flexible payment plans"})]}),l.jsx("a",{href:"#",className:"details-btn btn-red",children:"Financial Aid Information"})]})]}),l.jsxs("div",{className:"admissions-cta",children:[l.jsx("h3",{children:"Ready to take the next step?"}),l.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),l.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),l.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})})]}),q0=()=>{const[s,d]=T.useState(""),[f,c]=T.useState(!1),[m,b]=T.useState({name:"",email:"",phone:"",subject:"",message:""}),w=j=>{const{name:h,value:E}=j.target;b(_=>({..._,[h]:E}))},D=async j=>{if(j.preventDefault(),!m.name.trim()){d("Please enter your name."),setTimeout(()=>d(""),5e3);return}if(!m.email.trim()){d("Please enter your email address."),setTimeout(()=>d(""),5e3);return}if(!m.message.trim()){d("Please enter your message."),setTimeout(()=>d(""),5e3);return}if(!m.email.includes("@")){d("Please enter a valid email address."),setTimeout(()=>d(""),5e3);return}c(!0);try{await new Promise(h=>setTimeout(h,1500)),d("Your message has been sent successfully! We will get back to you soon."),b({name:"",email:"",phone:"",subject:"",message:""}),j.target.reset()}catch{d("Sorry, there was an error sending your message. Please try again.")}finally{c(!1),setTimeout(()=>d(""),5e3)}};return l.jsxs("section",{className:"form-page",children:[l.jsx("div",{className:"page-banner contact-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Get In Touch"}),l.jsx("p",{children:"We're here to help and answer any question you might have."})]})}),l.jsx("div",{className:"container",children:l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-info",children:[l.jsx("h3",{children:"Contact Information"}),l.jsx("p",{children:"Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below."}),l.jsxs("div",{className:"info-item",children:[l.jsx("div",{className:"info-icon",children:l.jsx("i",{className:"fas fa-map-marker-alt"})}),l.jsxs("div",{className:"info-content",children:[l.jsx("strong",{children:"Address"}),l.jsx("span",{children:"REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11."})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("div",{className:"info-icon",children:l.jsx("i",{className:"fas fa-envelope"})}),l.jsxs("div",{className:"info-content",children:[l.jsx("strong",{children:"Email"}),l.jsx("span",{children:"admissions@igt.edu.in"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("div",{className:"info-icon",children:l.jsx("i",{className:"fas fa-clock"})}),l.jsxs("div",{className:"info-content",children:[l.jsx("strong",{children:"Timing"}),l.jsx("span",{children:"Mon - Sat: 9:00 AM - 5:30 PM"})]})]}),l.jsx("div",{className:"info-item special",children:l.jsx("strong",{children:"A UNIT OF BRC"})}),l.jsxs("div",{className:"social-icons",children:[l.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:l.jsx("i",{className:"fab fa-facebook-f"})}),l.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:l.jsx("i",{className:"fab fa-twitter"})}),l.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:l.jsx("i",{className:"fab fa-linkedin-in"})}),l.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:l.jsx("i",{className:"fab fa-instagram"})}),l.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:l.jsx("i",{className:"fab fa-youtube"})})]})]}),l.jsxs("div",{className:"form-container",children:[l.jsx("h3",{children:"Send Us a Message"}),l.jsxs("form",{onSubmit:D,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"name",children:"Your Name"}),l.jsx("input",{type:"text",id:"name",name:"name",value:m.name,onChange:w,required:!0,placeholder:"Enter your full name"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",name:"email",value:m.email,onChange:w,required:!0,placeholder:"Enter your email address"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"phone",children:"Phone Number"}),l.jsx("input",{type:"tel",id:"phone",name:"phone",value:m.phone,onChange:w,placeholder:"Enter your phone number"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"subject",children:"Subject"}),l.jsx("input",{type:"text",id:"subject",name:"subject",value:m.subject,onChange:w,placeholder:"What is this regarding?"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"message",children:"Your Message"}),l.jsx("textarea",{id:"message",name:"message",value:m.message,onChange:w,required:!0,placeholder:"Tell us how we can help you",rows:5})]}),l.jsx("button",{type:"submit",className:"submit-btn",disabled:f,children:f?l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"fas fa-spinner fa-spin"}),"Sending..."]}):"Send Message"}),s&&l.jsx("div",{className:`form-message ${s.includes("error")?"error":"success"}`,children:s})]})]})]})})]})},H0=()=>{const[s,d]=T.useState(""),f=c=>{c.preventDefault(),d("Your tour has been scheduled successfully!"),setTimeout(()=>d(""),5e3),c.target.reset()};return l.jsxs("section",{className:"form-page",children:[l.jsx("div",{className:"page-banner tour-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Schedule a Campus Tour"}),l.jsx("p",{children:"We would love to show you around our campus."})]})}),l.jsx("div",{className:"container",children:l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-info",children:[l.jsx("h3",{children:"Visit Us"}),l.jsx("p",{children:"Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT."}),l.jsxs("div",{className:"info-item",children:[l.jsxs("strong",{children:[l.jsx("i",{className:"fas fa-clock"})," Tour Hours"]}),l.jsx("span",{children:"Monday - Friday: 10:00 AM - 4:00 PM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsxs("strong",{children:[l.jsx("i",{className:"fas fa-map-marker-alt"})," Location"]}),l.jsx("span",{children:"123 Tech Avenue, Innovation City"})]})]}),l.jsxs("div",{className:"form-container",children:[l.jsx("h3",{children:"Book Your Visit"}),l.jsxs("form",{onSubmit:f,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"name",children:"Your Name"}),l.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"date",children:"Preferred Date"}),l.jsx("input",{type:"date",id:"date",name:"date",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"time",children:"Preferred Time"}),l.jsx("input",{type:"time",id:"time",name:"time",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"guests",children:"Number of Guests"}),l.jsxs("select",{id:"guests",name:"guests",children:[l.jsx("option",{children:"1"}),l.jsx("option",{children:"2"}),l.jsx("option",{children:"3"}),l.jsx("option",{children:"4"}),l.jsx("option",{children:"5+"})]})]}),l.jsx("button",{type:"submit",className:"submit-btn",children:"Schedule Tour"}),s&&l.jsx("div",{className:"form-message success",children:s})]})]})]})})]})},B0=()=>l.jsx("section",{id:"academic-programs",className:"academic-programs",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Our Academic Programs"}),l.jsx("p",{className:"section-subtitle",children:"Explore our diverse range of postgraduate diploma programs in emerging technologies"}),l.jsxs("div",{className:"programs-grid",children:[l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg",alt:"AI & Management"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"EU ACC Certificate Program in AI & Management"}),l.jsx("p",{children:"Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques."}),l.jsx("button",{className:"btn-details",children:"Details"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-certificate"}),l.jsx("span",{children:"Certificate Program"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"1st Sep - 30th Sep 2025"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"AR VR Technology"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"EU ACC Master Program in AR & VR Technology"}),l.jsx("p",{children:"Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design."}),l.jsx("button",{className:"btn-details",children:"Details"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-building"}),l.jsx("span",{children:"100+ Industrial Partners"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-hands-helping"}),l.jsx("span",{children:"10+ Hands-on Projects"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Agri Drones"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"MASTER PROGRAM in Agri Drones"}),l.jsx("p",{children:"Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making."}),l.jsx("button",{className:"btn-details",children:"Details"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-graduation-cap"}),l.jsx("span",{children:"MASTER PROGRAM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"MASTER PROGRAM in Medical Robotics"}),l.jsx("p",{children:"Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration."}),l.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-graduation-cap"}),l.jsx("span",{children:"MASTER PROGRAM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agri Robotics"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"MASTER PROGRAM in Agri Robotics"}),l.jsx("p",{children:"Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems."}),l.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-graduation-cap"}),l.jsx("span",{children:"MASTER PROGRAM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]})]})]})]})]})}),L0=()=>l.jsx("section",{id:"upcoming-courses",className:"upcoming-courses",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"courses-header",children:[l.jsx("div",{className:"expand-knowledge",children:"EXPAND YOUR KNOWLEDGE"}),l.jsx("h2",{children:"Upcoming Courses"}),l.jsx("p",{className:"section-subtitle",children:"Discover our latest course offerings designed to keep you at the forefront of technology"})]}),l.jsxs("div",{className:"courses-grid",children:[l.jsxs("div",{className:"course-card featured",children:[l.jsxs("div",{className:"course-image",children:[l.jsx("img",{src:"https://agmay.in/images/manufacturing.webp",alt:"Drone Manufacturing"}),l.jsx("div",{className:"course-badge",children:"Featured"})]}),l.jsxs("div",{className:"course-content",children:[l.jsx("h3",{children:"MASTER PROGRAM in Drone Manufacturing"}),l.jsx("p",{children:"Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training."}),l.jsxs("div",{className:"course-status",children:[l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"Coming soon"})]}),l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]}),l.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),l.jsxs("div",{className:"course-card",children:[l.jsxs("div",{className:"course-image",children:[l.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"}),l.jsx("div",{className:"course-badge",children:"Popular"})]}),l.jsxs("div",{className:"course-content",children:[l.jsx("h3",{children:"MASTER PROGRAM in Medical Robotics"}),l.jsx("p",{children:"Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics."}),l.jsxs("div",{className:"course-status",children:[l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"Coming soon"})]}),l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]}),l.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),l.jsxs("div",{className:"course-card",children:[l.jsxs("div",{className:"course-image",children:[l.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agriculture Robotics"}),l.jsx("div",{className:"course-badge",children:"New"})]}),l.jsxs("div",{className:"course-content",children:[l.jsx("h3",{children:"MASTER PROGRAM in Agriculture Robotics"}),l.jsx("p",{children:"Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques."}),l.jsxs("div",{className:"course-status",children:[l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"Coming soon"})]}),l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]}),l.jsx("button",{className:"btn-details-blue",children:"Details"})]})]})]}),l.jsx("div",{className:"view-all-courses",children:l.jsx("button",{className:"btn-view-all",children:"View All Upcoming Courses"})})]})}),G0=()=>l.jsx("section",{id:"research",className:"research-projects",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Our Ongoing Research Projects"}),l.jsx("p",{className:"section-subtitle",children:"Explore our cutting-edge research initiatives across various technology domains"}),l.jsxs("div",{className:"research-grid",children:[l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI-Powered Predictive Maintenance"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"AI-Powered Predictive Maintenance"}),l.jsx("p",{children:"Developing AI models for predictive maintenance of industrial equipment to reduce downtime."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conversational AI Assistant"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Conversational AI Assistant"}),l.jsx("p",{children:"Creating an AI assistant for mental health support and counseling services."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=",alt:"Automated Disease Detection"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Automated Disease Detection"}),l.jsx("p",{children:"Using deep learning for automated detection of diseases in medical images."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Point-of-Care Diagnostic Device"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Point-of-Care Diagnostic Device"}),l.jsx("p",{children:"Developing portable diagnostic tools for rapid detection of infectious diseases."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Smart Grid Systems"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Smart Grid Systems"}),l.jsx("p",{children:"Creating intelligent grid systems for efficient energy distribution and management."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=",alt:"EV Charging Infrastructure"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"EV Charging Infrastructure"}),l.jsx("p",{children:"Designing urban electric vehicle charging networks for sustainable transportation."})]})]})]})]})}),X0=()=>{const[s,d]=T.useState("conferences"),f=()=>{switch(s){case"conferences":return l.jsxs("div",{className:"events-grid",children:[l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conference Hall"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"International Conference on AI & Robotics"}),l.jsx("p",{children:"Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-map-marker-alt"}),l.jsx("span",{children:"Virtual & On-campus"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"People collaborating"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Tech for Sustainable Development"}),l.jsx("p",{children:"Exploring technological solutions for achieving sustainable development goals."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-map-marker-alt"}),l.jsx("span",{children:"Main Campus"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agri-Tech"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Future of Agri-Tech"}),l.jsx("p",{children:"Conference focusing on emerging technologies in agriculture and food production."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-map-marker-alt"}),l.jsx("span",{children:"Agricultural Research Center"})]})]})]})]});case"webinars":return l.jsxs("div",{className:"events-grid",children:[l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone in flight"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Introduction to Drone Technology"}),l.jsx("p",{children:"Free webinar covering basics of drone technology and its industrial applications."})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI and ML concept"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Career in AI & ML"}),l.jsx("p",{children:"Webinar discussing career opportunities and skill requirements in AI/ML fields."})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Precision agriculture"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Precision Agriculture Techniques"}),l.jsx("p",{children:"Learn about modern precision farming methods using IoT and data analytics."})]})]})]});case"courses":return l.jsxs("div",{className:"events-grid",children:[l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone piloting"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Certificate in Drone Piloting"}),l.jsx("p",{children:"3-month program covering drone operation, regulations, and commercial applications."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-check-circle"}),l.jsx("span",{children:"DGCA Approved"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Business analytics dashboard"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"AI for Business Professionals"}),l.jsx("p",{children:"6-week certificate course on AI applications for non-technical business leaders."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-check-circle"}),l.jsx("span",{children:"Industry Recognized"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"IoT circuit board"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"IoT Fundamentals"}),l.jsx("p",{children:"8-week hands-on course on Internet of Things concepts and implementation."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-check-circle"}),l.jsx("span",{children:"With Lab Access"})]})]})]})]});default:return null}};return l.jsx("section",{id:"events",className:"events-section",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Conferences, Webinars & Certificate Courses"}),l.jsx("p",{className:"section-subtitle",children:"Participate in our knowledge-sharing events and short-term certification programs"}),l.jsxs("div",{className:"events-tabs",children:[l.jsx("button",{onClick:()=>d("conferences"),className:`tab-btn ${s==="conferences"?"active":""}`,children:"Conferences"}),l.jsx("button",{onClick:()=>d("webinars"),className:`tab-btn ${s==="webinars"?"active":""}`,children:"Webinars"}),l.jsx("button",{onClick:()=>d("courses"),className:`tab-btn ${s==="courses"?"active":""}`,children:"Certificate Courses"})]}),f()]})})},Q0=()=>{const[s,d]=T.useState(""),f=m=>{m.preventDefault(),d("Thank you for subscribing!"),setTimeout(()=>d(""),5e3),m.target.reset()},c=new Date().getFullYear();return l.jsx("footer",{id:"contact",className:"site-footer",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"About Institute of Global Technology"}),l.jsx("p",{children:"Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields."}),l.jsx("p",{children:l.jsx("strong",{children:"Accredited by AIAB Europe"})}),l.jsxs("div",{className:"social-icons",children:[l.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:l.jsx("i",{className:"fab fa-facebook-f"})}),l.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:l.jsx("i",{className:"fab fa-twitter"})}),l.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:l.jsx("i",{className:"fab fa-linkedin-in"})}),l.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:l.jsx("i",{className:"fab fa-instagram"})}),l.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:l.jsx("i",{className:"fab fa-youtube"})})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Quick Links"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx(Sa,{to:"/home",className:"footer-nav-link",children:"Home"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/programs",className:"footer-nav-link",children:"Academic Programs"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/departments",className:"footer-nav-link",children:"Research Departments"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/faculty",className:"footer-nav-link",children:"Faculty"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/admissions",className:"footer-nav-link",children:"Admissions"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/contact",className:"footer-nav-link",children:"Contact"})})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Academic Programs"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Robotics & AI"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Precision Agriculture"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Drone Technology"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Healthcare & Life Sciences"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Emerging Technologies"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Research Opportunities"})})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Newsletter"}),l.jsx("p",{children:"Subscribe to our newsletter to receive updates on events, admissions, and institute news."}),l.jsxs("form",{className:"newsletter-form",onSubmit:f,children:[l.jsx("input",{type:"email",placeholder:"Enter your email address",required:!0,"aria-label":"Email address for newsletter"}),l.jsx("button",{type:"submit","aria-label":"Subscribe to newsletter",children:l.jsx("i",{className:"fas fa-paper-plane"})})]}),s&&l.jsx("p",{className:"newsletter-message",children:s}),l.jsx("p",{className:"newsletter-note",children:"We respect your privacy. Unsubscribe at any time."})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsxs("div",{className:"footer-bottom-content",children:[l.jsxs("span",{children:["© ",c," Institute of Global Technology. All Rights Reserved."]}),l.jsxs("div",{className:"footer-bottom-links",children:[l.jsx("a",{href:"#","aria-label":"Terms of Use",children:"Terms of Use"}),l.jsx("a",{href:"#","aria-label":"Privacy Policy",children:"Privacy Policy"}),l.jsx("a",{href:"#","aria-label":"Accessibility",children:"Accessibility"}),l.jsx("a",{href:"#","aria-label":"Contact Support",children:"Support"})]})]})})]})})},V0=()=>l.jsxs(l.Fragment,{children:[l.jsx(O0,{}),l.jsx(C0,{}),l.jsx(_0,{}),l.jsx(B0,{}),l.jsx(L0,{}),l.jsx(G0,{}),l.jsx(X0,{})]}),F0=[{name:"AI & Machine Learning",description:"Developing AI and ML algorithms, models, and applications for various industries.",researchAreas:["Natural Language Processing","Computer Vision","Predictive Analytics","Robotics"],image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg"},{name:"Cybersecurity",description:"Investigating cybersecurity threats, vulnerabilities, and countermeasures.",researchAreas:["Threat Intelligence","Incident Response","Cryptography","Network Security"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Data Science & Analytics",description:"Developing data-driven solutions for insights and decision-making.",researchAreas:["Big Data Analytics","Data Visualization","Predictive Modelling","Statistical Analysis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"IoT & Edge Computing",description:"Designing and implementing IoT systems and edge computing architectures.",researchAreas:["IoT Security","Edge AI","Real-time Analytics","Industrial Automation"],image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp"},{name:"Sustainable Energy",description:"Investigating sustainable energy solutions and climate change mitigation.",researchAreas:["Renewable Energy","Energy Storage","Green Buildings","Sustainable Infrastructure"],image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Biotechnology & Healthcare",description:"Developing innovative solutions for healthcare and medicine.",researchAreas:["Personalized Medicine","Regenerative Medicine","Gene Editing","Medical Imaging"],image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"},{name:"Robotics & Autonomous Systems",description:"Designing advanced robotic systems and autonomous vehicles.",researchAreas:["Robotics","Autonomous Systems","Human-Robot Interaction","Swarm Robotics"],image:"https://media.licdn.com/dms/image/v2/D5612AQFLdebIV4BTYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721157098257?e=1761782400&v=beta&t=yLMm79DcuvTBA2jgbmubv_CMdyNlY8RQ8Kli_bTzNMo"},{name:"Advanced Materials",description:"Investigating novel materials and manufacturing processes.",researchAreas:["Nanomaterials","Biomaterials","3D Printing","Advanced Manufacturing"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Human-Computer Interaction",description:"Developing user-centered interfaces and experiences.",researchAreas:["User Experience Design","Human-Computer Interaction","Accessibility","Usability"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Zoology & Animal Biotechnology",description:"Exploring the genetic and cellular aspects of animals for sustainable development.",researchAreas:["Animal Genetics","Cellular Biotechnology","Wildlife Conservation","Veterinary Applications"],image:"https://i.ibb.co/WNZ4GPQ1/download-11.jpg"},{name:"Botany & Plant Biotechnology",description:"Advancing plant science through genetic engineering and sustainable agriculture.",researchAreas:["Plant Tissue Culture","Genetically Modified Crops","Medicinal Plants","Agro-biotechnology"],image:"https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg"},{name:"Quantum Computing",description:"Exploring quantum computing and emerging technologies.",researchAreas:["Quantum Algorithms","Quantum Applications","Blockchain","Distributed Ledger Tech"],image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}],Z0=()=>l.jsxs("section",{className:"departments-page",children:[l.jsx("div",{className:"page-banner departments-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Our Research Departments"}),l.jsx("p",{children:"Explore our specialized research departments that are pushing the boundaries of knowledge and innovation"})]})}),l.jsx("div",{className:"container",children:l.jsx("div",{className:"department-grid",children:F0.map((s,d)=>l.jsxs("div",{className:"department-card",children:[l.jsx("img",{src:s.image,alt:s.name}),l.jsxs("div",{className:"department-card-content",children:[l.jsx("h3",{children:s.name}),l.jsx("p",{children:s.description}),l.jsx("strong",{children:"Research Areas:"}),l.jsx("ul",{children:s.researchAreas.map((f,c)=>l.jsx("li",{children:f},c))}),l.jsx("a",{href:"#",children:"Explore Department"})]})]},d))})})]}),K0=[{name:"Dr Ipseeta Nanda",title:"Hon.Director Dean IGT",bio:"With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.",image:"https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Rahul Vadiseety",title:"Director AI",bio:"Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.",image:"https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr. Rath Satyasambit",title:"Director Robotics",bio:"Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",image:"https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Harshichander",title:"Director Biology",bio:"Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.",image:"https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png",social:{email:"#",linkedin:"#",scholar:"#"}}],J0=()=>l.jsxs("section",{className:"faculty-page",children:[l.jsxs("div",{className:"faculty-header",children:[l.jsx("h2",{children:"Our Distinguished Faculty"}),l.jsx("p",{children:"Meet our accomplished faculty members who are experts in their fields and dedicated to student success."})]}),l.jsx("div",{className:"container",children:l.jsx("div",{className:"faculty-grid",children:K0.map((s,d)=>l.jsx("div",{className:"faculty-box",children:l.jsxs("div",{className:"faculty-card",children:[l.jsx("img",{src:s.image,alt:`Portrait of ${s.name}`,className:"faculty-image"}),l.jsxs("div",{className:"faculty-content",children:[l.jsx("h3",{children:s.name}),l.jsx("span",{className:"title",children:s.title}),l.jsx("p",{children:s.bio}),l.jsxs("div",{className:"faculty-social",children:[l.jsx("a",{href:s.social.email,"aria-label":"Email",children:l.jsx("i",{className:"fas fa-envelope"})}),l.jsx("a",{href:s.social.linkedin,"aria-label":"LinkedIn",children:l.jsx("i",{className:"fab fa-linkedin-in"})}),l.jsx("a",{href:s.social.scholar,"aria-label":"Google Scholar",children:l.jsx("i",{className:"ai ai-google-scholar"})})]})]})]})},d))})})]}),$0=()=>{const s=Ct();return T.useEffect(()=>{window.scrollTo(0,0)},[s.pathname]),l.jsxs(l.Fragment,{children:[l.jsx(R0,{}),l.jsx(D0,{}),l.jsx(M0,{activePage:s.pathname}),l.jsx("main",{children:l.jsxs(qg,{children:[l.jsx(wt,{path:"/",element:l.jsx(Vf,{to:"/home",replace:!0})}),l.jsx(wt,{path:"/home",element:l.jsx(V0,{})}),l.jsx(wt,{path:"/programs",element:l.jsx(U0,{})}),l.jsx(wt,{path:"/program/:programSlug",element:l.jsx(T0,{})}),l.jsx(wt,{path:"/departments",element:l.jsx(Z0,{})}),l.jsx(wt,{path:"/faculty",element:l.jsx(J0,{})}),l.jsx(wt,{path:"/admissions",element:l.jsx(Y0,{})}),l.jsx(wt,{path:"/contact",element:l.jsx(q0,{})}),l.jsx(wt,{path:"/tour",element:l.jsx(H0,{})}),l.jsx(wt,{path:"*",element:l.jsx(Vf,{to:"/home",replace:!0})})]})}),l.jsx(Q0,{})]})};function P0(){return l.jsx(s0,{children:l.jsx($0,{})})}Kh.createRoot(document.getElementById("root")).render(l.jsx(Bh.StrictMode,{children:l.jsx(P0,{})}));
