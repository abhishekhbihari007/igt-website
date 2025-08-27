(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const w of b.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function f(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(m){if(m.ep)return;m.ep=!0;const b=f(m);fetch(m.href,b)}})();function Ff(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vs={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function Mh(){if(Mf)return Ri;Mf=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,b){var w=null;if(b!==void 0&&(w=""+b),m.key!==void 0&&(w=""+m.key),"key"in m){b={};for(var M in m)M!=="key"&&(b[M]=m[M])}else b=m;return m=b.ref,{$$typeof:o,type:u,key:w,ref:m!==void 0?m:null,props:b}}return Ri.Fragment=d,Ri.jsx=f,Ri.jsxs=f,Ri}var Df;function Dh(){return Df||(Df=1,vs.exports=Mh()),vs.exports}var l=Dh(),ys={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function Oh(){if(Of)return te;Of=1;var o=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),_=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=_&&g[_]||g["@@iterator"],typeof g=="function"?g:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,W={};function H(g,C,q){this.props=g,this.context=C,this.refs=W,this.updater=q||L}H.prototype.isReactComponent={},H.prototype.setState=function(g,C){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,C,"setState")},H.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function V(){}V.prototype=H.prototype;function G(g,C,q){this.props=g,this.context=C,this.refs=W,this.updater=q||L}var ee=G.prototype=new V;ee.constructor=G,Q(ee,H.prototype),ee.isPureReactComponent=!0;var je=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function Me(g,C,q,U,Z,oe){return q=oe.ref,{$$typeof:o,type:g,key:C,ref:q!==void 0?q:null,props:oe}}function _e(g,C){return Me(g.type,C,void 0,void 0,void 0,g.props)}function we(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Ie(g){var C={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return C[q]})}var ut=/\/+/g;function Le(g,C){return typeof g=="object"&&g!==null&&g.key!=null?Ie(""+g.key):C.toString(36)}function wa(){}function Na(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(wa,wa):(g.status="pending",g.then(function(C){g.status==="pending"&&(g.status="fulfilled",g.value=C)},function(C){g.status==="pending"&&(g.status="rejected",g.reason=C)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Xe(g,C,q,U,Z){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var I=!1;if(g===null)I=!0;else switch(oe){case"bigint":case"string":case"number":I=!0;break;case"object":switch(g.$$typeof){case o:case d:I=!0;break;case E:return I=g._init,Xe(I(g._payload),C,q,U,Z)}}if(I)return Z=Z(g),I=U===""?"."+Le(g,0):U,je(Z)?(q="",I!=null&&(q=I.replace(ut,"$&/")+"/"),Xe(Z,C,q,"",function(Wt){return Wt})):Z!=null&&(we(Z)&&(Z=_e(Z,q+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(ut,"$&/")+"/")+I)),C.push(Z)),1;I=0;var et=U===""?".":U+":";if(je(g))for(var be=0;be<g.length;be++)U=g[be],oe=et+Le(U,be),I+=Xe(U,C,q,oe,Z);else if(be=Y(g),typeof be=="function")for(g=be.call(g),be=0;!(U=g.next()).done;)U=U.value,oe=et+Le(U,be++),I+=Xe(U,C,q,oe,Z);else if(oe==="object"){if(typeof g.then=="function")return Xe(Na(g),C,q,U,Z);throw C=String(g),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return I}function R(g,C,q){if(g==null)return g;var U=[],Z=0;return Xe(g,U,"","",function(oe){return C.call(q,oe,Z++)}),U}function k(g){if(g._status===-1){var C=g._result;C=C(),C.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=C)}if(g._status===1)return g._result.default;throw g._result}var J=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function he(){}return te.Children={map:R,forEach:function(g,C,q){R(g,function(){C.apply(this,arguments)},q)},count:function(g){var C=0;return R(g,function(){C++}),C},toArray:function(g){return R(g,function(C){return C})||[]},only:function(g){if(!we(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=H,te.Fragment=f,te.Profiler=m,te.PureComponent=G,te.StrictMode=u,te.Suspense=j,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,te.__COMPILER_RUNTIME={__proto__:null,c:function(g){return P.H.useMemoCache(g)}},te.cache=function(g){return function(){return g.apply(null,arguments)}},te.cloneElement=function(g,C,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var U=Q({},g.props),Z=g.key,oe=void 0;if(C!=null)for(I in C.ref!==void 0&&(oe=void 0),C.key!==void 0&&(Z=""+C.key),C)!Ce.call(C,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&C.ref===void 0||(U[I]=C[I]);var I=arguments.length-2;if(I===1)U.children=q;else if(1<I){for(var et=Array(I),be=0;be<I;be++)et[be]=arguments[be+2];U.children=et}return Me(g.type,Z,void 0,void 0,oe,U)},te.createContext=function(g){return g={$$typeof:w,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},te.createElement=function(g,C,q){var U,Z={},oe=null;if(C!=null)for(U in C.key!==void 0&&(oe=""+C.key),C)Ce.call(C,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Z[U]=C[U]);var I=arguments.length-2;if(I===1)Z.children=q;else if(1<I){for(var et=Array(I),be=0;be<I;be++)et[be]=arguments[be+2];Z.children=et}if(g&&g.defaultProps)for(U in I=g.defaultProps,I)Z[U]===void 0&&(Z[U]=I[U]);return Me(g,oe,void 0,void 0,null,Z)},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:M,render:g}},te.isValidElement=we,te.lazy=function(g){return{$$typeof:E,_payload:{_status:-1,_result:g},_init:k}},te.memo=function(g,C){return{$$typeof:h,type:g,compare:C===void 0?null:C}},te.startTransition=function(g){var C=P.T,q={};P.T=q;try{var U=g(),Z=P.S;Z!==null&&Z(q,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(he,J)}catch(oe){J(oe)}finally{P.T=C}},te.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},te.use=function(g){return P.H.use(g)},te.useActionState=function(g,C,q){return P.H.useActionState(g,C,q)},te.useCallback=function(g,C){return P.H.useCallback(g,C)},te.useContext=function(g){return P.H.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g,C){return P.H.useDeferredValue(g,C)},te.useEffect=function(g,C,q){var U=P.H;if(typeof q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(g,C)},te.useId=function(){return P.H.useId()},te.useImperativeHandle=function(g,C,q){return P.H.useImperativeHandle(g,C,q)},te.useInsertionEffect=function(g,C){return P.H.useInsertionEffect(g,C)},te.useLayoutEffect=function(g,C){return P.H.useLayoutEffect(g,C)},te.useMemo=function(g,C){return P.H.useMemo(g,C)},te.useOptimistic=function(g,C){return P.H.useOptimistic(g,C)},te.useReducer=function(g,C,q){return P.H.useReducer(g,C,q)},te.useRef=function(g){return P.H.useRef(g)},te.useState=function(g){return P.H.useState(g)},te.useSyncExternalStore=function(g,C,q){return P.H.useSyncExternalStore(g,C,q)},te.useTransition=function(){return P.H.useTransition()},te.version="19.1.1",te}var Cf;function Rs(){return Cf||(Cf=1,ys.exports=Oh()),ys.exports}var T=Rs();const Ch=Ff(T);var js={exports:{}},Mi={},Ss={exports:{}},ws={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function _h(){return _f||(_f=1,(function(o){function d(R,k){var J=R.length;R.push(k);e:for(;0<J;){var he=J-1>>>1,g=R[he];if(0<m(g,k))R[he]=k,R[J]=g,J=he;else break e}}function f(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var k=R[0],J=R.pop();if(J!==k){R[0]=J;e:for(var he=0,g=R.length,C=g>>>1;he<C;){var q=2*(he+1)-1,U=R[q],Z=q+1,oe=R[Z];if(0>m(U,J))Z<g&&0>m(oe,U)?(R[he]=oe,R[Z]=J,he=Z):(R[he]=U,R[q]=J,he=q);else if(Z<g&&0>m(oe,J))R[he]=oe,R[Z]=J,he=Z;else break e}}return k}function m(R,k){var J=R.sortIndex-k.sortIndex;return J!==0?J:R.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;o.unstable_now=function(){return b.now()}}else{var w=Date,M=w.now();o.unstable_now=function(){return w.now()-M}}var j=[],h=[],E=1,_=null,Y=3,L=!1,Q=!1,W=!1,H=!1,V=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function je(R){for(var k=f(h);k!==null;){if(k.callback===null)u(h);else if(k.startTime<=R)u(h),k.sortIndex=k.expirationTime,d(j,k);else break;k=f(h)}}function P(R){if(W=!1,je(R),!Q)if(f(j)!==null)Q=!0,Ce||(Ce=!0,Le());else{var k=f(h);k!==null&&Xe(P,k.startTime-R)}}var Ce=!1,Me=-1,_e=5,we=-1;function Ie(){return H?!0:!(o.unstable_now()-we<_e)}function ut(){if(H=!1,Ce){var R=o.unstable_now();we=R;var k=!0;try{e:{Q=!1,W&&(W=!1,G(Me),Me=-1),L=!0;var J=Y;try{t:{for(je(R),_=f(j);_!==null&&!(_.expirationTime>R&&Ie());){var he=_.callback;if(typeof he=="function"){_.callback=null,Y=_.priorityLevel;var g=he(_.expirationTime<=R);if(R=o.unstable_now(),typeof g=="function"){_.callback=g,je(R),k=!0;break t}_===f(j)&&u(j),je(R)}else u(j);_=f(j)}if(_!==null)k=!0;else{var C=f(h);C!==null&&Xe(P,C.startTime-R),k=!1}}break e}finally{_=null,Y=J,L=!1}k=void 0}}finally{k?Le():Ce=!1}}}var Le;if(typeof ee=="function")Le=function(){ee(ut)};else if(typeof MessageChannel<"u"){var wa=new MessageChannel,Na=wa.port2;wa.port1.onmessage=ut,Le=function(){Na.postMessage(null)}}else Le=function(){V(ut,0)};function Xe(R,k){Me=V(function(){R(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(R){R.callback=null},o.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<R?Math.floor(1e3/R):5},o.unstable_getCurrentPriorityLevel=function(){return Y},o.unstable_next=function(R){switch(Y){case 1:case 2:case 3:var k=3;break;default:k=Y}var J=Y;Y=k;try{return R()}finally{Y=J}},o.unstable_requestPaint=function(){H=!0},o.unstable_runWithPriority=function(R,k){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=Y;Y=R;try{return k()}finally{Y=J}},o.unstable_scheduleCallback=function(R,k,J){var he=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,R){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=J+g,R={id:E++,callback:k,priorityLevel:R,startTime:J,expirationTime:g,sortIndex:-1},J>he?(R.sortIndex=J,d(h,R),f(j)===null&&R===f(h)&&(W?(G(Me),Me=-1):W=!0,Xe(P,J-he))):(R.sortIndex=g,d(j,R),Q||L||(Q=!0,Ce||(Ce=!0,Le()))),R},o.unstable_shouldYield=Ie,o.unstable_wrapCallback=function(R){var k=Y;return function(){var J=Y;Y=k;try{return R.apply(this,arguments)}finally{Y=J}}}})(ws)),ws}var Uf;function Uh(){return Uf||(Uf=1,Ss.exports=_h()),Ss.exports}var Ns={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function kh(){if(kf)return Ze;kf=1;var o=Rs();function d(j){var h="https://react.dev/errors/"+j;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+j+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(j,h,E){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:_==null?null:""+_,children:j,containerInfo:h,implementation:E}}var w=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(j,h){if(j==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ze.createPortal=function(j,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(d(299));return b(j,h,null,E)},Ze.flushSync=function(j){var h=w.T,E=u.p;try{if(w.T=null,u.p=2,j)return j()}finally{w.T=h,u.p=E,u.d.f()}},Ze.preconnect=function(j,h){typeof j=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(j,h))},Ze.prefetchDNS=function(j){typeof j=="string"&&u.d.D(j)},Ze.preinit=function(j,h){if(typeof j=="string"&&h&&typeof h.as=="string"){var E=h.as,_=M(E,h.crossOrigin),Y=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?u.d.S(j,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:Y,fetchPriority:L}):E==="script"&&u.d.X(j,{crossOrigin:_,integrity:Y,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ze.preinitModule=function(j,h){if(typeof j=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=M(h.as,h.crossOrigin);u.d.M(j,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(j)},Ze.preload=function(j,h){if(typeof j=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,_=M(E,h.crossOrigin);u.d.L(j,E,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ze.preloadModule=function(j,h){if(typeof j=="string")if(h){var E=M(h.as,h.crossOrigin);u.d.m(j,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(j)},Ze.requestFormReset=function(j){u.d.r(j)},Ze.unstable_batchedUpdates=function(j,h){return j(h)},Ze.useFormState=function(j,h,E){return w.H.useFormState(j,h,E)},Ze.useFormStatus=function(){return w.H.useHostTransitionStatus()},Ze.version="19.1.1",Ze}var Yf;function Yh(){if(Yf)return Ns.exports;Yf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Ns.exports=kh(),Ns.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function qh(){if(qf)return Mi;qf=1;var o=Uh(),d=Rs(),f=Yh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(b(e)!==e)throw Error(u(188))}function j(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return M(i),e;if(r===n)return M(i),t;r=r.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=r;else{for(var s=!1,c=i.child;c;){if(c===a){s=!0,a=i,n=r;break}if(c===n){s=!0,n=i,a=r;break}c=c.sibling}if(!s){for(c=r.child;c;){if(c===a){s=!0,a=r,n=i;break}if(c===n){s=!0,n=r,a=i;break}c=c.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,_=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var wa=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case H:return"Profiler";case W:return"StrictMode";case P:return"Suspense";case Ce:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}var Xe=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},he=[],g=-1;function C(e){return{current:e}}function q(e){0>g||(e.current=he[g],he[g]=null,g--)}function U(e,t){g++,he[g]=e.current,e.current=t}var Z=C(null),oe=C(null),I=C(null),et=C(null);function be(e,t){switch(U(I,t),U(oe,e),U(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nf(t),e=lf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Z),U(Z,e)}function Wt(){q(Z),q(oe),q(I)}function nr(e){e.memoizedState!==null&&U(et,e);var t=Z.current,a=lf(t,e.type);t!==a&&(U(oe,e),U(Z,a))}function Ui(e){oe.current===e&&(q(Z),q(oe)),et.current===e&&(q(et),Ni._currentValue=J)}var ir=Object.prototype.hasOwnProperty,lr=o.unstable_scheduleCallback,rr=o.unstable_cancelCallback,sm=o.unstable_shouldYield,cm=o.unstable_requestPaint,Et=o.unstable_now,um=o.unstable_getCurrentPriorityLevel,Ys=o.unstable_ImmediatePriority,qs=o.unstable_UserBlockingPriority,ki=o.unstable_NormalPriority,dm=o.unstable_LowPriority,Bs=o.unstable_IdlePriority,fm=o.log,mm=o.unstable_setDisableYieldValue,On=null,tt=null;function Pt(e){if(typeof fm=="function"&&mm(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(On,e)}catch{}}var at=Math.clz32?Math.clz32:gm,pm=Math.log,hm=Math.LN2;function gm(e){return e>>>=0,e===0?32:31-(pm(e)/hm|0)|0}var Yi=256,qi=4194304;function Aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~r,n!==0?i=Aa(n):(s&=c,s!==0?i=Aa(s):a||(a=c&~e,a!==0&&(i=Aa(a))))):(c=n&~r,c!==0?i=Aa(c):s!==0?i=Aa(s):a||(a=n&~e,a!==0&&(i=Aa(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hs(){var e=Yi;return Yi<<=1,(Yi&4194048)===0&&(Yi=256),e}function Gs(){var e=qi;return qi<<=1,(qi&62914560)===0&&(qi=4194304),e}function or(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bm(e,t,a,n,i,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(a=s&~a;0<a;){var z=31-at(a),O=1<<z;c[z]=0,p[z]=-1;var N=S[z];if(N!==null)for(S[z]=null,z=0;z<N.length;z++){var A=N[z];A!==null&&(A.lane&=-536870913)}a&=~O}n!==0&&Ls(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Ls(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-at(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Xs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-at(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function sr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qs(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Nf(e.type))}function vm(e,t){var a=k.p;try{return k.p=e,t()}finally{k.p=a}}var It=Math.random().toString(36).slice(2),Qe="__reactFiber$"+It,Ke="__reactProps$"+It,Xa="__reactContainer$"+It,ur="__reactEvents$"+It,ym="__reactListeners$"+It,jm="__reactHandles$"+It,Vs="__reactResources$"+It,Un="__reactMarker$"+It;function dr(e){delete e[Qe],delete e[Ke],delete e[ur],delete e[ym],delete e[jm]}function Qa(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cf(e);e!==null;){if(a=e[Qe])return a;e=cf(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Qe]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function kn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Za(e){var t=e[Vs];return t||(t=e[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Un]=!0}var Zs=new Set,Fs={};function Ea(e,t){Fa(e,t),Fa(e+"Capture",t)}function Fa(e,t){for(Fs[e]=t,e=0;e<t.length;e++)Zs.add(t[e])}var Sm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ks={},Js={};function wm(e){return ir.call(Js,e)?!0:ir.call(Ks,e)?!1:Sm.test(e)?Js[e]=!0:(Ks[e]=!0,!1)}function Hi(e,t,a){if(wm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var fr,$s;function Ka(e){if(fr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fr=t&&t[1]||"",$s=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+e+$s}var mr=!1;function pr(e,t){if(!e||mr)return"";mr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var N=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){N=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){N=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&N&&typeof A.stack=="string")return[A.stack,N.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),s=r[0],c=r[1];if(s&&c){var p=s.split(`
`),S=c.split(`
`);for(i=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(n===p.length||i===S.length)for(n=p.length-1,i=S.length-1;1<=n&&0<=i&&p[n]!==S[i];)i--;for(;1<=n&&0<=i;n--,i--)if(p[n]!==S[i]){if(n!==1||i!==1)do if(n--,i--,0>i||p[n]!==S[i]){var z=`
`+p[n].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=n&&0<=i);break}}}finally{mr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ka(a):""}function Nm(e){switch(e.tag){case 26:case 27:case 5:return Ka(e.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 15:return pr(e.type,!1);case 11:return pr(e.type.render,!1);case 1:return pr(e.type,!0);case 31:return Ka("Activity");default:return""}}function Ws(e){try{var t="";do t+=Nm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Am(e){var t=Ps(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Li(e){e._valueTracker||(e._valueTracker=Am(e))}function Is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ps(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Em=/[\n"\\]/g;function ft(e){return e.replace(Em,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hr(e,t,a,n,i,r,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?gr(e,s,dt(t)):a!=null?gr(e,s,dt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+dt(c):e.removeAttribute("name")}function ec(e,t,a,n,i,r,s,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function gr(e,t,a){t==="number"&&Xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tc(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function ac(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(Xe(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Tm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Tm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ic(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&nc(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&nc(e,r,t[r])}function xr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(e){return Rm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var br=null;function vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Pa=null;function lc(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(hr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Ke]||null;if(!i)throw Error(u(90));hr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Is(n)}break e;case"textarea":tc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var yr=!1;function rc(e,t,a){if(yr)return e(t,a);yr=!0;try{var n=e(t);return n}finally{if(yr=!1,(Wa!==null||Pa!==null)&&(Rl(),Wa&&(t=Wa,e=Pa,Pa=Wa=null,lc(t),e)))for(t=0;t<e.length;t++)lc(e[t])}}function Yn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ke]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jr=!1;if(_t)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){jr=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{jr=!1}var ea=null,Sr=null,Vi=null;function oc(){if(Vi)return Vi;var e,t=Sr,a=t.length,n,i="value"in ea?ea.value:ea.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[r-n];n++);return Vi=i.slice(e,1<n?1-n:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function sc(){return!1}function Je(e){function t(a,n,i,r,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Fi:sc,this.isPropagationStopped=sc,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=Je(Ta),Bn=E({},Ta,{view:0,detail:0}),Mm=Je(Bn),wr,Nr,Hn,Ji=E({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(wr=e.screenX-Hn.screenX,Nr=e.screenY-Hn.screenY):Nr=wr=0,Hn=e),wr)},movementY:function(e){return"movementY"in e?e.movementY:Nr}}),cc=Je(Ji),Dm=E({},Ji,{dataTransfer:0}),Om=Je(Dm),Cm=E({},Bn,{relatedTarget:0}),Ar=Je(Cm),_m=E({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=Je(_m),km=E({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ym=Je(km),qm=E({},Ta,{data:0}),uc=Je(qm),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gm[e])?!!t[e]:!1}function Er(){return Lm}var Xm=E({},Bn,{key:function(e){if(e.key){var t=Bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Er,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qm=Je(Xm),Vm=E({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dc=Je(Vm),Zm=E({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Er}),Fm=Je(Zm),Km=E({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=Je(Km),$m=E({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wm=Je($m),Pm=E({},Ta,{newState:0,oldState:0}),Im=Je(Pm),ep=[9,13,27,32],Tr=_t&&"CompositionEvent"in window,Gn=null;_t&&"documentMode"in document&&(Gn=document.documentMode);var tp=_t&&"TextEvent"in window&&!Gn,fc=_t&&(!Tr||Gn&&8<Gn&&11>=Gn),mc=" ",pc=!1;function hc(e,t){switch(e){case"keyup":return ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function ap(e,t){switch(e){case"compositionend":return gc(t);case"keypress":return t.which!==32?null:(pc=!0,mc);case"textInput":return e=t.data,e===mc&&pc?null:e;default:return null}}function np(e,t){if(Ia)return e==="compositionend"||!Tr&&hc(e,t)?(e=oc(),Vi=Sr=ea=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fc&&t.locale!=="ko"?null:t.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ip[e.type]:t==="textarea"}function bc(e,t,a,n){Wa?Pa?Pa.push(n):Pa=[n]:Wa=n,t=Ul(t,"onChange"),0<t.length&&(a=new Ki("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ln=null,Xn=null;function lp(e){Pd(e,0)}function $i(e){var t=kn(e);if(Is(t))return e}function vc(e,t){if(e==="change")return t}var yc=!1;if(_t){var zr;if(_t){var Rr="oninput"in document;if(!Rr){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),Rr=typeof jc.oninput=="function"}zr=Rr}else zr=!1;yc=zr&&(!document.documentMode||9<document.documentMode)}function Sc(){Ln&&(Ln.detachEvent("onpropertychange",wc),Xn=Ln=null)}function wc(e){if(e.propertyName==="value"&&$i(Xn)){var t=[];bc(t,Xn,e,vr(e)),rc(lp,t)}}function rp(e,t,a){e==="focusin"?(Sc(),Ln=t,Xn=a,Ln.attachEvent("onpropertychange",wc)):e==="focusout"&&Sc()}function op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Xn)}function sp(e,t){if(e==="click")return $i(t)}function cp(e,t){if(e==="input"||e==="change")return $i(t)}function up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:up;function Qn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ir.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ac(e,t){var a=Nc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nc(a)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xi(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dp=_t&&"documentMode"in document&&11>=document.documentMode,en=null,Dr=null,Vn=null,Or=!1;function zc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Or||en==null||en!==Xi(n)||(n=en,"selectionStart"in n&&Mr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Qn(Vn,n)||(Vn=n,n=Ul(Dr,"onSelect"),0<n.length&&(t=new Ki("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=en)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tn={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},Cr={},Rc={};_t&&(Rc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ra(e){if(Cr[e])return Cr[e];if(!tn[e])return e;var t=tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Rc)return Cr[e]=t[a];return e}var Mc=Ra("animationend"),Dc=Ra("animationiteration"),Oc=Ra("animationstart"),fp=Ra("transitionrun"),mp=Ra("transitionstart"),pp=Ra("transitioncancel"),Cc=Ra("transitionend"),_c=new Map,_r="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_r.push("scrollEnd");function yt(e,t){_c.set(e,t),Ea(t,[e])}var Uc=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Uc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ws(t)},Uc.set(e,t),t)}return{value:e,source:t,stack:Ws(t)}}var pt=[],an=0,Ur=0;function Wi(){for(var e=an,t=Ur=an=0;t<e;){var a=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var i=pt[t];pt[t++]=null;var r=pt[t];if(pt[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}r!==0&&kc(a,i,r)}}function Pi(e,t,a,n){pt[an++]=e,pt[an++]=t,pt[an++]=a,pt[an++]=n,Ur|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function kr(e,t,a,n){return Pi(e,t,a,n),Ii(e)}function nn(e,t){return Pi(e,null,null,t),Ii(e)}function kc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-at(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Ii(e){if(50<gi)throw gi=0,Xo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ln={};function hp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,n){return new hp(e,t,a,n)}function Yr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function el(e,t,a,n,i,r){var s=0;if(n=e,typeof e=="function")Yr(e)&&(s=1);else if(typeof e=="string")s=xh(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=it(31,a,t,i),e.elementType=we,e.lanes=r,e;case Q:return Ma(a.children,i,r,t);case W:s=8,i|=24;break;case H:return e=it(12,a,t,i|2),e.elementType=H,e.lanes=r,e;case P:return e=it(13,a,t,i),e.elementType=P,e.lanes=r,e;case Ce:return e=it(19,a,t,i),e.elementType=Ce,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case ee:s=10;break e;case G:s=9;break e;case je:s=11;break e;case Me:s=14;break e;case _e:s=16,n=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=it(s,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function Ma(e,t,a,n){return e=it(7,e,n,t),e.lanes=a,e}function qr(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Br(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rn=[],on=0,tl=null,al=0,ht=[],gt=0,Da=null,kt=1,Yt="";function Oa(e,t){rn[on++]=al,rn[on++]=tl,tl=e,al=t}function qc(e,t,a){ht[gt++]=kt,ht[gt++]=Yt,ht[gt++]=Da,Da=e;var n=kt;e=Yt;var i=32-at(n)-1;n&=~(1<<i),a+=1;var r=32-at(t)+i;if(30<r){var s=i-i%5;r=(n&(1<<s)-1).toString(32),n>>=s,i-=s,kt=1<<32-at(t)+i|a<<i|n,Yt=r+e}else kt=1<<r|a<<i|n,Yt=e}function Hr(e){e.return!==null&&(Oa(e,1),qc(e,1,0))}function Gr(e){for(;e===tl;)tl=rn[--on],rn[on]=null,al=rn[--on],rn[on]=null;for(;e===Da;)Da=ht[--gt],ht[gt]=null,Yt=ht[--gt],ht[gt]=null,kt=ht[--gt],ht[gt]=null}var Fe=null,Ne=null,ce=!1,Ca=null,Tt=!1,Lr=Error(u(519));function _a(e){var t=Error(u(418,""));throw Kn(mt(t,e)),Lr}function Bc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Qe]=e,t[Ke]=n,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<bi.length;a++)le(bi[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),ec(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Li(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),ac(t,n.value,n.defaultValue,n.children),Li(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||af(t.textContent,a)?(n.popover!=null&&(le("beforetoggle",t),le("toggle",t)),n.onScroll!=null&&le("scroll",t),n.onScrollEnd!=null&&le("scrollend",t),n.onClick!=null&&(t.onclick=kl),t=!0):t=!1,t||_a(e)}function Hc(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Fe=Fe.return}}function Zn(e){if(e!==Fe)return!1;if(!ce)return Hc(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ls(e.type,e.memoizedProps)),a=!a),a&&Ne&&_a(e),Hc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ne=St(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,ga(e.type)?(e=cs,cs=null,Ne=e):Ne=t):Ne=Fe?St(e.stateNode.nextSibling):null;return!0}function Fn(){Ne=Fe=null,ce=!1}function Gc(){var e=Ca;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),Ca=null),e}function Kn(e){Ca===null?Ca=[e]:Ca.push(e)}var Xr=C(null),Ua=null,qt=null;function ta(e,t,a){U(Xr,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Xr.current,q(Xr)}function Qr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Vr(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var s=i.child;r=r.firstContext;e:for(;r!==null;){var c=r;r=i;for(var p=0;p<t.length;p++)if(c.context===t[p]){r.lanes|=a,c=r.alternate,c!==null&&(c.lanes|=a),Qr(r.return,a,e),n||(s=null);break e}r=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(u(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Qr(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Jn(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var c=i.type;nt(i.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(i===et.current){if(s=i.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ni):e=[Ni])}i=i.return}e!==null&&Vr(t,e,a,n),t.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Ua=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Lc(Ua,e)}function il(e,t){return Ua===null&&ka(e),Lc(e,t)}function Lc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(u(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var gp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xp=o.unstable_scheduleCallback,bp=o.unstable_NormalPriority,De={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zr(){return{controller:new gp,data:new Map,refCount:0}}function $n(e){e.refCount--,e.refCount===0&&xp(bp,function(){e.controller.abort()})}var Wn=null,Fr=0,sn=0,cn=null;function vp(e,t){if(Wn===null){var a=Wn=[];Fr=0,sn=$o(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Fr++,t.then(Xc,Xc),t}function Xc(){if(--Fr===0&&Wn!==null){cn!==null&&(cn.status="fulfilled");var e=Wn;Wn=null,sn=0,cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Qc=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&vp(e,t),Qc!==null&&Qc(e,t)};var Ya=C(null);function Kr(){var e=Ya.current;return e!==null?e:xe.pooledCache}function ll(e,t){t===null?U(Ya,Ya.current):U(Ya,t.pool)}function Vc(){var e=Kr();return e===null?null:{parent:De._currentValue,pool:e}}var Pn=Error(u(460)),Zc=Error(u(474)),rl=Error(u(542)),Jr={then:function(){}};function Fc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ol(){}function Kc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ol,ol),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$c(e),e;default:if(typeof t.status=="string")t.then(ol,ol);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$c(e),e}throw In=t,Pn}}var In=null;function Jc(){if(In===null)throw Error(u(459));var e=In;return In=null,e}function $c(e){if(e===Pn||e===rl)throw Error(u(483))}var aa=!1;function $r(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ue&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ii(e),kc(e,null,a),t}return Pi(e,n,t,a),Ii(e)}function ei(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xs(e,a)}}function Pr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ir=!1;function ti(){if(Ir){var e=cn;if(e!==null)throw e}}function ai(e,t,a,n){Ir=!1;var i=e.updateQueue;aa=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var p=c,S=p.next;p.next=null,s===null?r=S:s.next=S,s=p;var z=e.alternate;z!==null&&(z=z.updateQueue,c=z.lastBaseUpdate,c!==s&&(c===null?z.firstBaseUpdate=S:c.next=S,z.lastBaseUpdate=p))}if(r!==null){var O=i.baseState;s=0,z=S=p=null,c=r;do{var N=c.lane&-536870913,A=N!==c.lane;if(A?(re&N)===N:(n&N)===N){N!==0&&N===sn&&(Ir=!0),z!==null&&(z=z.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var $=e,F=c;N=t;var pe=a;switch(F.tag){case 1:if($=F.payload,typeof $=="function"){O=$.call(pe,O,N);break e}O=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=F.payload,N=typeof $=="function"?$.call(pe,O,N):$,N==null)break e;O=E({},O,N);break e;case 2:aa=!0}}N=c.callback,N!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[N]:A.push(N))}else A={lane:N,tag:c.tag,payload:c.payload,callback:c.callback,next:null},z===null?(S=z=A,p=O):z=z.next=A,s|=N;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;A=c,c=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);z===null&&(p=O),i.baseState=p,i.firstBaseUpdate=S,i.lastBaseUpdate=z,r===null&&(i.shared.lanes=0),fa|=s,e.lanes=s,e.memoizedState=O}}function Wc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Pc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wc(a[e],t)}var un=C(null),sl=C(0);function Ic(e,t){e=Zt,U(sl,e),U(un,t),Zt=e|t.baseLanes}function eo(){U(sl,Zt),U(un,un.current)}function to(){Zt=sl.current,q(un),q(sl)}var la=0,ae=null,fe=null,ze=null,cl=!1,dn=!1,qa=!1,ul=0,ni=0,fn=null,jp=0;function Ee(){throw Error(u(321))}function ao(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function no(e,t,a,n,i,r){return la=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?ku:Yu,qa=!1,r=a(n,i),qa=!1,dn&&(r=tu(t,a,n,i)),eu(e),r}function eu(e){R.H=gl;var t=fe!==null&&fe.next!==null;if(la=0,ze=fe=ae=null,cl=!1,ni=0,fn=null,t)throw Error(u(300));e===null||ke||(e=e.dependencies,e!==null&&nl(e)&&(ke=!0))}function tu(e,t,a,n){ae=e;var i=0;do{if(dn&&(fn=null),ni=0,dn=!1,25<=i)throw Error(u(301));if(i+=1,ze=fe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=zp,r=t(a,n)}while(dn);return r}function Sp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ii(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(ae.flags|=1024),t}function io(){var e=ul!==0;return ul=0,e}function lo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ro(e){if(cl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cl=!1}la=0,ze=fe=ae=null,dn=!1,ni=ul=0,fn=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ae.memoizedState=ze=e:ze=ze.next=e,ze}function Re(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ze===null?ae.memoizedState:ze.next;if(t!==null)ze=t,fe=e;else{if(e===null)throw ae.alternate===null?Error(u(467)):Error(u(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ze===null?ae.memoizedState=ze=e:ze=ze.next=e}return ze}function oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ii(e){var t=ni;return ni+=1,fn===null&&(fn=[]),e=Kc(fn,e,t),t=ae,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?ku:Yu),e}function dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ii(e);if(e.$$typeof===ee)return Ve(e)}throw Error(u(438,String(e)))}function so(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=oo(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ie;return t.index++,a}function Ht(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=Re();return co(t,fe,e)}function co(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var s=i.next;i.next=r.next,r.next=s}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var c=s=null,p=null,S=t,z=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(re&O)===O:(la&O)===O){var N=S.revertLane;if(N===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===sn&&(z=!0);else if((la&N)===N){S=S.next,N===sn&&(z=!0);continue}else O={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(c=p=O,s=r):p=p.next=O,ae.lanes|=N,fa|=N;O=S.action,qa&&a(r,O),r=S.hasEagerState?S.eagerState:a(r,O)}else N={lane:O,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(c=p=N,s=r):p=p.next=N,ae.lanes|=O,fa|=O;S=S.next}while(S!==null&&S!==t);if(p===null?s=r:p.next=c,!nt(r,e.memoizedState)&&(ke=!0,z&&(a=cn,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=p,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function uo(e){var t=Re(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do r=e(r,s.action),s=s.next;while(s!==i);nt(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function au(e,t,a){var n=ae,i=Re(),r=ce;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!nt((fe||i).memoizedState,a);s&&(i.memoizedState=a,ke=!0),i=i.queue;var c=lu.bind(null,n,i,e);if(li(2048,8,c,[e]),i.getSnapshot!==t||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,mn(9,ml(),iu.bind(null,n,i,a,t),null),xe===null)throw Error(u(349));r||(la&124)!==0||nu(n,t,a)}return a}function nu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=oo(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function iu(e,t,a,n){t.value=a,t.getSnapshot=n,ru(t)&&ou(e)}function lu(e,t,a){return a(function(){ru(t)&&ou(e)})}function ru(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function ou(e){var t=nn(e,2);t!==null&&ct(t,e,2)}function fo(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),qa){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function su(e,t,a,n){return e.baseState=a,co(e,fe,typeof n=="function"?n:Ht)}function wp(e,t,a,n,i){if(hl(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};R.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,cu(t,r)):(r.next=a.next,t.pending=a.next=r)}}function cu(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=R.T,s={};R.T=s;try{var c=a(i,n),p=R.S;p!==null&&p(s,c),uu(e,t,c)}catch(S){mo(e,t,S)}finally{R.T=r}}else try{r=a(i,n),uu(e,t,r)}catch(S){mo(e,t,S)}}function uu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){du(e,t,n)},function(n){return mo(e,t,n)}):du(e,t,a)}function du(e,t,a){t.status="fulfilled",t.value=a,fu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cu(e,a)))}function mo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,fu(t),t=t.next;while(t!==n)}e.action=null}function fu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mu(e,t){return t}function pu(e,t){if(ce){var a=xe.formState;if(a!==null){e:{var n=ae;if(ce){if(Ne){t:{for(var i=Ne,r=Tt;i.nodeType!==8;){if(!r){i=null;break t}if(i=St(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ne=St(i.nextSibling),n=i.data==="F!";break e}}_a(n)}n=!1}n&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:t},a.queue=n,a=Cu.bind(null,ae,n),n.dispatch=a,n=fo(!1),r=bo.bind(null,ae,!1,n.queue),n=$e(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=wp.bind(null,ae,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function hu(e){var t=Re();return gu(t,fe,e)}function gu(e,t,a){if(t=co(e,t,mu)[0],e=fl(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ii(t)}catch(s){throw s===Pn?rl:s}else n=t;t=Re();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,mn(9,ml(),Np.bind(null,i,a),null)),[n,r,e]}function Np(e,t){e.action=t}function xu(e){var t=Re(),a=fe;if(a!==null)return gu(t,a,e);Re(),t=t.memoizedState,a=Re();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=oo(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function ml(){return{destroy:void 0,resource:void 0}}function bu(){return Re().memoizedState}function pl(e,t,a,n){var i=$e();n=n===void 0?null:n,ae.flags|=e,i.memoizedState=mn(1|t,ml(),a,n)}function li(e,t,a,n){var i=Re();n=n===void 0?null:n;var r=i.memoizedState.inst;fe!==null&&n!==null&&ao(n,fe.memoizedState.deps)?i.memoizedState=mn(t,r,a,n):(ae.flags|=e,i.memoizedState=mn(1|t,r,a,n))}function vu(e,t){pl(8390656,8,e,t)}function yu(e,t){li(2048,8,e,t)}function ju(e,t){return li(4,2,e,t)}function Su(e,t){return li(4,4,e,t)}function wu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,a){a=a!=null?a.concat([e]):null,li(4,4,wu.bind(null,t,e),a)}function po(){}function Au(e,t){var a=Re();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ao(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Eu(e,t){var a=Re();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ao(t,n[1]))return n[0];if(n=e(),qa){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[n,t],n}function ho(e,t,a){return a===void 0||(la&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Rd(),ae.lanes|=e,fa|=e,a)}function Tu(e,t,a,n){return nt(a,t)?a:un.current!==null?(e=ho(e,a,n),nt(e,t)||(ke=!0),e):(la&42)===0?(ke=!0,e.memoizedState=a):(e=Rd(),ae.lanes|=e,fa|=e,t)}function zu(e,t,a,n,i){var r=k.p;k.p=r!==0&&8>r?r:8;var s=R.T,c={};R.T=c,bo(e,!1,t,a);try{var p=i(),S=R.S;if(S!==null&&S(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var z=yp(p,n);ri(e,t,z,st(e))}else ri(e,t,n,st(e))}catch(O){ri(e,t,{then:function(){},status:"rejected",reason:O},st())}finally{k.p=r,R.T=s}}function Ap(){}function go(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=Ru(e).queue;zu(e,i,t,J,a===null?Ap:function(){return Mu(e),a(n)})}function Ru(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mu(e){var t=Ru(e).next.queue;ri(e,t,{},st())}function xo(){return Ve(Ni)}function Du(){return Re().memoizedState}function Ou(){return Re().memoizedState}function Ep(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=na(a);var n=ia(t,e,a);n!==null&&(ct(n,t,a),ei(n,t,a)),t={cache:Zr()},e.payload=t;return}t=t.return}}function Tp(e,t,a){var n=st();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?_u(t,a):(a=kr(e,t,a,n),a!==null&&(ct(a,e,n),Uu(a,t,n)))}function Cu(e,t,a){var n=st();ri(e,t,a,n)}function ri(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))_u(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,c=r(s,a);if(i.hasEagerState=!0,i.eagerState=c,nt(c,s))return Pi(e,t,i,0),xe===null&&Wi(),!1}catch{}finally{}if(a=kr(e,t,i,n),a!==null)return ct(a,e,n),Uu(a,t,n),!0}return!1}function bo(e,t,a,n){if(n={lane:2,revertLane:$o(),action:n,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(t)throw Error(u(479))}else t=kr(e,a,n,2),t!==null&&ct(t,e,2)}function hl(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function _u(e,t){dn=cl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Uu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xs(e,a)}}var gl={readContext:Ve,use:dl,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee},ku={readContext:Ve,use:dl,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:vu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pl(4194308,4,wu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){pl(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var n=e();if(qa){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=$e();if(a!==void 0){var i=a(t);if(qa){Pt(!0);try{a(t)}finally{Pt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Tp.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=fo(e);var t=e.queue,a=Cu.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:po,useDeferredValue:function(e,t){var a=$e();return ho(a,e,t)},useTransition:function(){var e=fo(!1);return e=zu.bind(null,ae,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,i=$e();if(ce){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),xe===null)throw Error(u(349));(re&124)!==0||nu(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,vu(lu.bind(null,n,r,e),[e]),n.flags|=2048,mn(9,ml(),iu.bind(null,n,r,a,t),null),a},useId:function(){var e=$e(),t=xe.identifierPrefix;if(ce){var a=Yt,n=kt;a=(n&~(1<<32-at(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=ul++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=jp++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:xo,useFormState:pu,useActionState:pu,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=bo.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:so,useCacheRefresh:function(){return $e().memoizedState=Ep.bind(null,ae)}},Yu={readContext:Ve,use:dl,useCallback:Au,useContext:Ve,useEffect:yu,useImperativeHandle:Nu,useInsertionEffect:ju,useLayoutEffect:Su,useMemo:Eu,useReducer:fl,useRef:bu,useState:function(){return fl(Ht)},useDebugValue:po,useDeferredValue:function(e,t){var a=Re();return Tu(a,fe.memoizedState,e,t)},useTransition:function(){var e=fl(Ht)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:au,useId:Du,useHostTransitionStatus:xo,useFormState:hu,useActionState:hu,useOptimistic:function(e,t){var a=Re();return su(a,fe,e,t)},useMemoCache:so,useCacheRefresh:Ou},zp={readContext:Ve,use:dl,useCallback:Au,useContext:Ve,useEffect:yu,useImperativeHandle:Nu,useInsertionEffect:ju,useLayoutEffect:Su,useMemo:Eu,useReducer:uo,useRef:bu,useState:function(){return uo(Ht)},useDebugValue:po,useDeferredValue:function(e,t){var a=Re();return fe===null?ho(a,e,t):Tu(a,fe.memoizedState,e,t)},useTransition:function(){var e=uo(Ht)[0],t=Re().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:au,useId:Du,useHostTransitionStatus:xo,useFormState:xu,useActionState:xu,useOptimistic:function(e,t){var a=Re();return fe!==null?su(a,fe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:so,useCacheRefresh:Ou},pn=null,oi=0;function xl(e){var t=oi;return oi+=1,pn===null&&(pn=[]),Kc(pn,e,t)}function si(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bl(e,t){throw t.$$typeof===_?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qu(e){var t=e._init;return t(e._payload)}function Bu(e){function t(v,x){if(e){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function a(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(v,x){return v=Ut(v,x),v.index=0,v.sibling=null,v}function r(v,x,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=67108866,x):y):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function s(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function c(v,x,y,D){return x===null||x.tag!==6?(x=qr(y,v.mode,D),x.return=v,x):(x=i(x,y),x.return=v,x)}function p(v,x,y,D){var B=y.type;return B===Q?z(v,x,y.props.children,D,y.key):x!==null&&(x.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_e&&qu(B)===x.type)?(x=i(x,y.props),si(x,y),x.return=v,x):(x=el(y.type,y.key,y.props,null,v.mode,D),si(x,y),x.return=v,x)}function S(v,x,y,D){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Br(y,v.mode,D),x.return=v,x):(x=i(x,y.children||[]),x.return=v,x)}function z(v,x,y,D,B){return x===null||x.tag!==7?(x=Ma(y,v.mode,D,B),x.return=v,x):(x=i(x,y),x.return=v,x)}function O(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=qr(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Y:return y=el(x.type,x.key,x.props,null,v.mode,y),si(y,x),y.return=v,y;case L:return x=Br(x,v.mode,y),x.return=v,x;case _e:var D=x._init;return x=D(x._payload),O(v,x,y)}if(Xe(x)||Le(x))return x=Ma(x,v.mode,y,null),x.return=v,x;if(typeof x.then=="function")return O(v,xl(x),y);if(x.$$typeof===ee)return O(v,il(v,x),y);bl(v,x)}return null}function N(v,x,y,D){var B=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return B!==null?null:c(v,x,""+y,D);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Y:return y.key===B?p(v,x,y,D):null;case L:return y.key===B?S(v,x,y,D):null;case _e:return B=y._init,y=B(y._payload),N(v,x,y,D)}if(Xe(y)||Le(y))return B!==null?null:z(v,x,y,D,null);if(typeof y.then=="function")return N(v,x,xl(y),D);if(y.$$typeof===ee)return N(v,x,il(v,y),D);bl(v,y)}return null}function A(v,x,y,D,B){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return v=v.get(y)||null,c(x,v,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Y:return v=v.get(D.key===null?y:D.key)||null,p(x,v,D,B);case L:return v=v.get(D.key===null?y:D.key)||null,S(x,v,D,B);case _e:var ne=D._init;return D=ne(D._payload),A(v,x,y,D,B)}if(Xe(D)||Le(D))return v=v.get(y)||null,z(x,v,D,B,null);if(typeof D.then=="function")return A(v,x,y,xl(D),B);if(D.$$typeof===ee)return A(v,x,y,il(x,D),B);bl(x,D)}return null}function $(v,x,y,D){for(var B=null,ne=null,X=x,K=x=0,qe=null;X!==null&&K<y.length;K++){X.index>K?(qe=X,X=null):qe=X.sibling;var se=N(v,X,y[K],D);if(se===null){X===null&&(X=qe);break}e&&X&&se.alternate===null&&t(v,X),x=r(se,x,K),ne===null?B=se:ne.sibling=se,ne=se,X=qe}if(K===y.length)return a(v,X),ce&&Oa(v,K),B;if(X===null){for(;K<y.length;K++)X=O(v,y[K],D),X!==null&&(x=r(X,x,K),ne===null?B=X:ne.sibling=X,ne=X);return ce&&Oa(v,K),B}for(X=n(X);K<y.length;K++)qe=A(X,v,K,y[K],D),qe!==null&&(e&&qe.alternate!==null&&X.delete(qe.key===null?K:qe.key),x=r(qe,x,K),ne===null?B=qe:ne.sibling=qe,ne=qe);return e&&X.forEach(function(ja){return t(v,ja)}),ce&&Oa(v,K),B}function F(v,x,y,D){if(y==null)throw Error(u(151));for(var B=null,ne=null,X=x,K=x=0,qe=null,se=y.next();X!==null&&!se.done;K++,se=y.next()){X.index>K?(qe=X,X=null):qe=X.sibling;var ja=N(v,X,se.value,D);if(ja===null){X===null&&(X=qe);break}e&&X&&ja.alternate===null&&t(v,X),x=r(ja,x,K),ne===null?B=ja:ne.sibling=ja,ne=ja,X=qe}if(se.done)return a(v,X),ce&&Oa(v,K),B;if(X===null){for(;!se.done;K++,se=y.next())se=O(v,se.value,D),se!==null&&(x=r(se,x,K),ne===null?B=se:ne.sibling=se,ne=se);return ce&&Oa(v,K),B}for(X=n(X);!se.done;K++,se=y.next())se=A(X,v,K,se.value,D),se!==null&&(e&&se.alternate!==null&&X.delete(se.key===null?K:se.key),x=r(se,x,K),ne===null?B=se:ne.sibling=se,ne=se);return e&&X.forEach(function(Rh){return t(v,Rh)}),ce&&Oa(v,K),B}function pe(v,x,y,D){if(typeof y=="object"&&y!==null&&y.type===Q&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Y:e:{for(var B=y.key;x!==null;){if(x.key===B){if(B=y.type,B===Q){if(x.tag===7){a(v,x.sibling),D=i(x,y.props.children),D.return=v,v=D;break e}}else if(x.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_e&&qu(B)===x.type){a(v,x.sibling),D=i(x,y.props),si(D,y),D.return=v,v=D;break e}a(v,x);break}else t(v,x);x=x.sibling}y.type===Q?(D=Ma(y.props.children,v.mode,D,y.key),D.return=v,v=D):(D=el(y.type,y.key,y.props,null,v.mode,D),si(D,y),D.return=v,v=D)}return s(v);case L:e:{for(B=y.key;x!==null;){if(x.key===B)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){a(v,x.sibling),D=i(x,y.children||[]),D.return=v,v=D;break e}else{a(v,x);break}else t(v,x);x=x.sibling}D=Br(y,v.mode,D),D.return=v,v=D}return s(v);case _e:return B=y._init,y=B(y._payload),pe(v,x,y,D)}if(Xe(y))return $(v,x,y,D);if(Le(y)){if(B=Le(y),typeof B!="function")throw Error(u(150));return y=B.call(y),F(v,x,y,D)}if(typeof y.then=="function")return pe(v,x,xl(y),D);if(y.$$typeof===ee)return pe(v,x,il(v,y),D);bl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,x!==null&&x.tag===6?(a(v,x.sibling),D=i(x,y),D.return=v,v=D):(a(v,x),D=qr(y,v.mode,D),D.return=v,v=D),s(v)):a(v,x)}return function(v,x,y,D){try{oi=0;var B=pe(v,x,y,D);return pn=null,B}catch(X){if(X===Pn||X===rl)throw X;var ne=it(29,X,null,v.mode);return ne.lanes=D,ne.return=v,ne}finally{}}}var hn=Bu(!0),Hu=Bu(!1),xt=C(null),zt=null;function ra(e){var t=e.alternate;U(Oe,Oe.current&1),U(xt,e),zt===null&&(t===null||un.current!==null||t.memoizedState!==null)&&(zt=e)}function Gu(e){if(e.tag===22){if(U(Oe,Oe.current),U(xt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else oa()}function oa(){U(Oe,Oe.current),U(xt,xt.current)}function Gt(e){q(xt),zt===e&&(zt=null),q(Oe)}var Oe=C(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ss(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=st(),i=na(n);i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(ct(t,e,n),ei(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=st(),i=na(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(ct(t,e,n),ei(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(ct(t,e,a),ei(t,e,a))}};function Lu(e,t,a,n,i,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,s):t.prototype&&t.prototype.isPureReactComponent?!Qn(a,n)||!Qn(i,r):!0}function Xu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&yo.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qu(e){yl(e)}function Vu(e){console.error(e)}function Zu(e){yl(e)}function jl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Fu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function jo(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,t)},a}function Ku(e){return e=na(e),e.tag=3,e}function Ju(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Fu(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Fu(t,a,n),typeof i!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Rp(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Jn(t,a,i,!0),a=xt.current,a!==null){switch(a.tag){case 13:return zt===null?Vo():a.alternate===null&&Ae===0&&(Ae=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Jr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Fo(e,n,i)),!1;case 22:return a.flags|=65536,n===Jr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Fo(e,n,i)),!1}throw Error(u(435,a.tag))}return Fo(e,n,i),Vo(),!1}if(ce)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Lr&&(e=Error(u(422),{cause:n}),Kn(mt(e,a)))):(n!==Lr&&(t=Error(u(423),{cause:n}),Kn(mt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=mt(n,a),i=jo(e.stateNode,n,i),Pr(e,i),Ae!==4&&(Ae=2)),!1;var r=Error(u(520),{cause:n});if(r=mt(r,a),hi===null?hi=[r]:hi.push(r),Ae!==4&&(Ae=2),t===null)return!0;n=mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=jo(a.stateNode,n,e),Pr(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Ku(i),Ju(i,e,a,n),Pr(a,i),!1}a=a.return}while(a!==null);return!1}var $u=Error(u(461)),ke=!1;function Be(e,t,a,n){t.child=e===null?Hu(t,null,a,n):hn(t,e.child,a,n)}function Wu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var s={};for(var c in n)c!=="ref"&&(s[c]=n[c])}else s=n;return ka(t),n=no(e,t,a,s,r,i),c=io(),e!==null&&!ke?(lo(e,t,i),Lt(e,t,i)):(ce&&c&&Hr(t),t.flags|=1,Be(e,t,n,i),t.child)}function Pu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Yr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Iu(e,t,r,n,i)):(e=el(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ro(e,i)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Qn,a(s,n)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=Ut(r,n),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Qn(r,n)&&e.ref===t.ref)if(ke=!1,t.pendingProps=n=r,Ro(e,i))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return So(e,t,a,n,i)}function ed(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return td(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(t,r!==null?r.cachePool:null),r!==null?Ic(t,r):eo(),Gu(t);else return t.lanes=t.childLanes=536870912,td(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(ll(t,r.cachePool),Ic(t,r),oa(),t.memoizedState=null):(e!==null&&ll(t,null),eo(),oa());return Be(e,t,i,a),t.child}function td(e,t,a,n){var i=Kr();return i=i===null?null:{parent:De._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ll(t,null),eo(),Gu(t),e!==null&&Jn(e,t,n,!0),null}function Sl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function So(e,t,a,n,i){return ka(t),a=no(e,t,a,n,void 0,i),n=io(),e!==null&&!ke?(lo(e,t,i),Lt(e,t,i)):(ce&&n&&Hr(t),t.flags|=1,Be(e,t,a,i),t.child)}function ad(e,t,a,n,i,r){return ka(t),t.updateQueue=null,a=tu(t,n,a,i),eu(e),n=io(),e!==null&&!ke?(lo(e,t,r),Lt(e,t,r)):(ce&&n&&Hr(t),t.flags|=1,Be(e,t,a,r),t.child)}function nd(e,t,a,n,i){if(ka(t),t.stateNode===null){var r=ln,s=a.contextType;typeof s=="object"&&s!==null&&(r=Ve(s)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},$r(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?Ve(s):ln,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(vo(t,a,s,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&yo.enqueueReplaceState(r,r.state,null),ai(t,n,r,i),ti(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var c=t.memoizedProps,p=Ba(a,c);r.props=p;var S=r.context,z=a.contextType;s=ln,typeof z=="object"&&z!==null&&(s=Ve(z));var O=a.getDerivedStateFromProps;z=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,z||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||S!==s)&&Xu(t,r,n,s),aa=!1;var N=t.memoizedState;r.state=N,ai(t,n,r,i),ti(),S=t.memoizedState,c||N!==S||aa?(typeof O=="function"&&(vo(t,a,O,n),S=t.memoizedState),(p=aa||Lu(t,a,p,n,N,S,s))?(z||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=S),r.props=n,r.state=S,r.context=s,n=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Wr(e,t),s=t.memoizedProps,z=Ba(a,s),r.props=z,O=t.pendingProps,N=r.context,S=a.contextType,p=ln,typeof S=="object"&&S!==null&&(p=Ve(S)),c=a.getDerivedStateFromProps,(S=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==O||N!==p)&&Xu(t,r,n,p),aa=!1,N=t.memoizedState,r.state=N,ai(t,n,r,i),ti();var A=t.memoizedState;s!==O||N!==A||aa||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof c=="function"&&(vo(t,a,c,n),A=t.memoizedState),(z=aa||Lu(t,a,z,n,N,A,p)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,A,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,A,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),r.props=n,r.state=A,r.context=p,n=z):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Sl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,a,i)):Be(e,t,a,i),t.memoizedState=r.state,e=t.child):e=Lt(e,t,i),e}function id(e,t,a,n){return Fn(),t.flags|=256,Be(e,t,a,n),t.child}var wo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(e){return{baseLanes:e,cachePool:Vc()}}function Ao(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function ld(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(i?ra(t):oa(),ce){var c=Ne,p;if(p=c){e:{for(p=c,c=Tt;p.nodeType!==8;){if(!c){c=null;break e}if(p=St(p.nextSibling),p===null){c=null;break e}}c=p}c!==null?(t.memoizedState={dehydrated:c,treeContext:Da!==null?{id:kt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},p=it(18,null,null,0),p.stateNode=c,p.return=t,t.child=p,Fe=t,Ne=null,p=!0):p=!1}p||_a(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return ss(c)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return c=n.children,n=n.fallback,i?(oa(),i=t.mode,c=wl({mode:"hidden",children:c},i),n=Ma(n,i,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,i=t.child,i.memoizedState=No(a),i.childLanes=Ao(e,s,a),t.memoizedState=wo,n):(ra(t),Eo(t,c))}if(p=e.memoizedState,p!==null&&(c=p.dehydrated,c!==null)){if(r)t.flags&256?(ra(t),t.flags&=-257,t=To(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),i=n.fallback,c=t.mode,n=wl({mode:"visible",children:n.children},c),i=Ma(i,c,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,hn(t,e.child,null,a),n=t.child,n.memoizedState=No(a),n.childLanes=Ao(e,s,a),t.memoizedState=wo,t=i);else if(ra(t),ss(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var S=s.dgst;s=S,n=Error(u(419)),n.stack="",n.digest=s,Kn({value:n,source:null,stack:null}),t=To(e,t,a)}else if(ke||Jn(e,t,a,!1),s=(a&e.childLanes)!==0,ke||s){if(s=xe,s!==null&&(n=a&-a,n=(n&42)!==0?1:sr(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==p.retryLane))throw p.retryLane=n,nn(e,n),ct(s,e,n),$u;c.data==="$?"||Vo(),t=To(e,t,a)}else c.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ne=St(c.nextSibling),Fe=t,ce=!0,Ca=null,Tt=!1,e!==null&&(ht[gt++]=kt,ht[gt++]=Yt,ht[gt++]=Da,kt=e.id,Yt=e.overflow,Da=t),t=Eo(t,n.children),t.flags|=4096);return t}return i?(oa(),i=n.fallback,c=t.mode,p=e.child,S=p.sibling,n=Ut(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,S!==null?i=Ut(S,i):(i=Ma(i,c,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,c=e.child.memoizedState,c===null?c=No(a):(p=c.cachePool,p!==null?(S=De._currentValue,p=p.parent!==S?{parent:S,pool:S}:p):p=Vc(),c={baseLanes:c.baseLanes|a,cachePool:p}),i.memoizedState=c,i.childLanes=Ao(e,s,a),t.memoizedState=wo,n):(ra(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Eo(e,t){return t=wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wl(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function To(e,t,a){return hn(t,e.child,null,a),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Qr(e.return,t,a)}function zo(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function od(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(Be(e,t,n.children,a),n=Oe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,a,t);else if(e.tag===19)rd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(U(Oe,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),zo(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}zo(t,!0,a,null,r);break;case"together":zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function Mp(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,De,e.memoizedState.cache),Fn();break;case 27:case 5:nr(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ld(e,t,a):(ra(t),e=Lt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Jn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return od(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Oe,Oe.current),n)break;return null;case 22:case 23:return t.lanes=0,ed(e,t,a);case 24:ta(t,De,e.memoizedState.cache)}return Lt(e,t,a)}function sd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Ro(e,a)&&(t.flags&128)===0)return ke=!1,Mp(e,t,a);ke=(e.flags&131072)!==0}else ke=!1,ce&&(t.flags&1048576)!==0&&qc(t,al,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Yr(n)?(e=Ba(n,e),t.tag=1,t=nd(null,t,n,e,a)):(t.tag=0,t=So(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===je){t.tag=11,t=Wu(null,t,n,e,a);break e}else if(i===Me){t.tag=14,t=Pu(null,t,n,e,a);break e}}throw t=Na(n)||n,Error(u(306,t,""))}}return t;case 0:return So(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ba(n,t.pendingProps),nd(e,t,n,i,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,Wr(e,t),ai(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,De,n),n!==r.cache&&Vr(t,[De],a,!0),ti(),n=s.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=id(e,t,n,a);break e}else if(n!==i){i=mt(Error(u(424)),t),Kn(i),t=id(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=St(e.firstChild),Fe=t,ce=!0,Ca=null,Tt=!0,a=Hu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fn(),n===i){t=Lt(e,t,a);break e}Be(e,t,n,a)}t=t.child}return t;case 26:return Sl(e,t),e===null?(a=mf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,n=Yl(I.current).createElement(a),n[Qe]=t,n[Ke]=e,Ge(n,a,e),Ue(n),t.stateNode=n):t.memoizedState=mf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nr(t),e===null&&ce&&(n=t.stateNode=uf(t.type,t.pendingProps,I.current),Fe=t,Tt=!0,i=Ne,ga(t.type)?(cs=i,Ne=St(n.firstChild)):Ne=i),Be(e,t,t.pendingProps.children,a),Sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((i=n=Ne)&&(n=ih(n,t.type,t.pendingProps,Tt),n!==null?(t.stateNode=n,Fe=t,Ne=St(n.firstChild),Tt=!1,i=!0):i=!1),i||_a(t)),nr(t),i=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,n=r.children,ls(i,r)?n=null:s!==null&&ls(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=no(e,t,Sp,null,null,a),Ni._currentValue=i),Sl(e,t),Be(e,t,n,a),t.child;case 6:return e===null&&ce&&((e=a=Ne)&&(a=lh(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Fe=t,Ne=null,e=!0):e=!1),e||_a(t)),null;case 13:return ld(e,t,a);case 4:return be(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=hn(t,null,n,a):Be(e,t,n,a),t.child;case 11:return Wu(e,t,t.type,t.pendingProps,a);case 7:return Be(e,t,t.pendingProps,a),t.child;case 8:return Be(e,t,t.pendingProps.children,a),t.child;case 12:return Be(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Be(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,ka(t),i=Ve(i),n=n(i),t.flags|=1,Be(e,t,n,a),t.child;case 14:return Pu(e,t,t.type,t.pendingProps,a);case 15:return Iu(e,t,t.type,t.pendingProps,a);case 19:return od(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=wl(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ut(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return ed(e,t,a);case 24:return ka(t),n=Ve(De),e===null?(i=Kr(),i===null&&(i=xe,r=Zr(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},$r(t),ta(t,De,i)):((e.lanes&a)!==0&&(Wr(e,t),ai(t,null,null,a),ti()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,De,n)):(n=r.cache,ta(t,De,n),n!==i.cache&&Vr(t,[De],a,!0))),Be(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Xt(e){e.flags|=4}function cd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bf(t)){if(t=xt.current,t!==null&&((re&4194048)===re?zt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==zt))throw In=Jr,Zc;e.flags|=8192}}function Nl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gs():536870912,e.lanes|=t,vn|=t)}function ci(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Dp(e,t,a){var n=t.pendingProps;switch(Gr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(De),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gc())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(Se(t),cd(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),Se(t),cd(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==n&&Xt(t),Se(t),t.flags&=-16777217),null;case 27:Ui(t),a=I.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Se(t),null}e=Z.current,Zn(t)?Bc(t):(e=uf(i,n,a),t.stateNode=e,Xt(t))}return Se(t),null;case 5:if(Ui(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Se(t),null}if(e=Z.current,Zn(t))Bc(t);else{switch(i=Yl(I.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[Qe]=t,e[Ke]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Ge(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=I.current,Zn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Fe,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||af(e.nodeValue,a)),e||_a(t)}else e=Yl(e).createTextNode(n),e[Qe]=t,t.stateNode=e}return Se(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Qe]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),i=!1}else i=Gc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Nl(t,t.updateQueue),Se(t),null;case 4:return Wt(),e===null&&es(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(q(Oe),i=t.memoizedState,i===null)return Se(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)ci(i,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=vl(e),r!==null){for(t.flags|=128,ci(i,!1),e=r.updateQueue,t.updateQueue=e,Nl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Yc(a,e),a=a.sibling;return U(Oe,Oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Et()>Tl&&(t.flags|=128,n=!0,ci(i,!1),t.lanes=4194304)}else{if(!n)if(e=vl(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Nl(t,e),ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ce)return Se(t),null}else 2*Et()-i.renderingStartTime>Tl&&a!==536870912&&(t.flags|=128,n=!0,ci(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Et(),t.sibling=null,e=Oe.current,U(Oe,n?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Gt(t),to(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Nl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&q(Ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(De),Se(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Op(e,t){switch(Gr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(De),Wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ui(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Oe),null;case 4:return Wt(),null;case 10:return Bt(t.type),null;case 22:case 23:return Gt(t),to(),e!==null&&q(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(De),null;case 25:return null;default:return null}}function ud(e,t){switch(Gr(t),t.tag){case 3:Bt(De),Wt();break;case 26:case 27:case 5:Ui(t);break;case 4:Wt();break;case 13:Gt(t);break;case 19:q(Oe);break;case 10:Bt(t.type);break;case 22:case 23:Gt(t),to(),e!==null&&q(Ya);break;case 24:Bt(De)}}function ui(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,s=a.inst;n=r(),s.destroy=n}a=a.next}while(a!==i)}}catch(c){ge(t,t.return,c)}}function sa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var s=n.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=t;var p=a,S=c;try{S()}catch(z){ge(i,p,z)}}}n=n.next}while(n!==r)}}catch(z){ge(t,t.return,z)}}function dd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Pc(t,a)}catch(n){ge(e,e.return,n)}}}function fd(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ge(e,t,n)}}function di(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ge(e,t,i)}}function Rt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ge(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ge(e,t,i)}else a.current=null}function md(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ge(e,e.return,i)}}function Mo(e,t,a){try{var n=e.stateNode;Ip(n,e.type,a,t),n[Ke]=t}catch(i){ge(e,e.return,i)}}function pd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kl));else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Oo(e,t,a),e=e.sibling;e!==null;)Oo(e,t,a),e=e.sibling}function Al(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,t,a),e=e.sibling;e!==null;)Al(e,t,a),e=e.sibling}function hd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ge(t,n,a),t[Qe]=e,t[Ke]=a}catch(r){ge(e,e.return,r)}}var Qt=!1,Te=!1,Co=!1,gd=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Cp(e,t){if(e=e.containerInfo,ns=Xl,e=Tc(e),Mr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,c=-1,p=-1,S=0,z=0,O=e,N=null;t:for(;;){for(var A;O!==a||i!==0&&O.nodeType!==3||(c=s+i),O!==r||n!==0&&O.nodeType!==3||(p=s+n),O.nodeType===3&&(s+=O.nodeValue.length),(A=O.firstChild)!==null;)N=O,O=A;for(;;){if(O===e)break t;if(N===a&&++S===i&&(c=s),N===r&&++z===n&&(p=s),(A=O.nextSibling)!==null)break;O=N,N=O.parentNode}O=A}a=c===-1||p===-1?null:{start:c,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(is={focusedElem:e,selectionRange:a},Xl=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var $=Ba(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate($,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(F){ge(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)os(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":os(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function xd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),n&4&&ui(5,a);break;case 1:if(ca(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ge(a,a.return,s)}else{var i=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ge(a,a.return,s)}}n&64&&dd(a),n&512&&di(a,a.return);break;case 3:if(ca(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Pc(e,t)}catch(s){ge(a,a.return,s)}}break;case 27:t===null&&n&4&&hd(a);case 26:case 5:ca(e,a),t===null&&n&4&&md(a),n&512&&di(a,a.return);break;case 12:ca(e,a);break;case 13:ca(e,a),n&4&&yd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lp.bind(null,a),rh(e,a))));break;case 22:if(n=a.memoizedState!==null||Qt,!n){t=t!==null&&t.memoizedState!==null||Te,i=Qt;var r=Te;Qt=n,(Te=t)&&!r?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),Qt=i,Te=r}break;case 30:break;default:ca(e,a)}}function bd(e){var t=e.alternate;t!==null&&(e.alternate=null,bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,We=!1;function Vt(e,t,a){for(a=a.child;a!==null;)vd(e,t,a),a=a.sibling}function vd(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(On,a)}catch{}switch(a.tag){case 26:Te||Rt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Rt(a,t);var n=ve,i=We;ga(a.type)&&(ve=a.stateNode,We=!1),Vt(e,t,a),yi(a.stateNode),ve=n,We=i;break;case 5:Te||Rt(a,t);case 6:if(n=ve,i=We,ve=null,Vt(e,t,a),ve=n,We=i,ve!==null)if(We)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(a.stateNode)}catch(r){ge(a,t,r)}else try{ve.removeChild(a.stateNode)}catch(r){ge(a,t,r)}break;case 18:ve!==null&&(We?(e=ve,sf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zi(e)):sf(ve,a.stateNode));break;case 4:n=ve,i=We,ve=a.stateNode.containerInfo,We=!0,Vt(e,t,a),ve=n,We=i;break;case 0:case 11:case 14:case 15:Te||sa(2,a,t),Te||sa(4,a,t),Vt(e,t,a);break;case 1:Te||(Rt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&fd(a,t,n)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:Te=(n=Te)||a.memoizedState!==null,Vt(e,t,a),Te=n;break;default:Vt(e,t,a)}}function yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zi(e)}catch(a){ge(t,t.return,a)}}function _p(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gd),t;default:throw Error(u(435,e.tag))}}function _o(e,t){var a=_p(e);t.forEach(function(n){var i=Xp.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function lt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(ga(c.type)){ve=c.stateNode,We=!1;break e}break;case 5:ve=c.stateNode,We=!1;break e;case 3:case 4:ve=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(ve===null)throw Error(u(160));vd(r,s,i),ve=null,We=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jd(t,e),t=t.sibling}var jt=null;function jd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),rt(e),n&4&&(sa(3,e,e.return),ui(3,e),sa(5,e,e.return));break;case 1:lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),n&64&&Qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=jt;if(lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Un]||r[Qe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),Ge(r,n,a),r[Qe]=e,Ue(r),n=r;break e;case"link":var s=gf("link","href",i).get(n+(a.href||""));if(s){for(var c=0;c<s.length;c++)if(r=s[c],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(c,1);break t}}r=i.createElement(n),Ge(r,n,a),i.head.appendChild(r);break;case"meta":if(s=gf("meta","content",i).get(n+(a.content||""))){for(c=0;c<s.length;c++)if(r=s[c],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(c,1);break t}}r=i.createElement(n),Ge(r,n,a),i.head.appendChild(r);break;default:throw Error(u(468,n))}r[Qe]=e,Ue(r),n=r}e.stateNode=n}else xf(i,e.type,e.stateNode);else e.stateNode=hf(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?xf(i,e.type,e.stateNode):hf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Mo(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),a!==null&&n&4&&Mo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),rt(e),n&512&&(Te||a===null||Rt(a,a.return)),e.flags&32){i=e.stateNode;try{$a(i,"")}catch(A){ge(e,e.return,A)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Mo(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Co=!0);break;case 6:if(lt(t,e),rt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(A){ge(e,e.return,A)}}break;case 3:if(Hl=null,i=jt,jt=ql(t.containerInfo),lt(t,e),jt=i,rt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(A){ge(e,e.return,A)}Co&&(Co=!1,Sd(e));break;case 4:n=jt,jt=ql(e.stateNode.containerInfo),lt(t,e),rt(e),jt=n;break;case 12:lt(t,e),rt(e);break;case 13:lt(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ho=Et()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_o(e,n)));break;case 22:i=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,S=Qt,z=Te;if(Qt=S||i,Te=z||p,lt(t,e),Te=z,Qt=S,rt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||p||Qt||Te||Ha(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(r=p.stateNode,i)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=p.stateNode;var O=p.memoizedProps.style,N=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(A){ge(p,p.return,A)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(A){ge(p,p.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,_o(e,a))));break;case 19:lt(t,e),rt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_o(e,n)));break;case 30:break;case 21:break;default:lt(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(pd(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,r=Do(e);Al(e,r,i);break;case 5:var s=a.stateNode;a.flags&32&&($a(s,""),a.flags&=-33);var c=Do(e);Al(e,c,s);break;case 3:case 4:var p=a.stateNode.containerInfo,S=Do(e);Oo(e,S,p);break;default:throw Error(u(161))}}catch(z){ge(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xd(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),Ha(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&fd(t,t.return,a),Ha(t);break;case 27:yi(t.stateNode);case 26:case 5:Rt(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:ua(i,r,a),ui(4,r);break;case 1:if(ua(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){ge(n,n.return,S)}if(n=r,i=n.updateQueue,i!==null){var c=n.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)Wc(p[i],c)}catch(S){ge(n,n.return,S)}}a&&s&64&&dd(r),di(r,r.return);break;case 27:hd(r);case 26:case 5:ua(i,r,a),a&&n===null&&s&4&&md(r),di(r,r.return);break;case 12:ua(i,r,a);break;case 13:ua(i,r,a),a&&s&4&&yd(i,r);break;case 22:r.memoizedState===null&&ua(i,r,a),di(r,r.return);break;case 30:break;default:ua(i,r,a)}t=t.sibling}}function Uo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$n(a))}function ko(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e))}function Mt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wd(e,t,a,n),t=t.sibling}function wd(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,n),i&2048&&ui(9,t);break;case 1:Mt(e,t,a,n);break;case 3:Mt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e)));break;case 12:if(i&2048){Mt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,c=r.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ge(t,t.return,p)}}else Mt(e,t,a,n);break;case 13:Mt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Mt(e,t,a,n):fi(e,t):r._visibility&2?Mt(e,t,a,n):(r._visibility|=2,gn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&Uo(s,t);break;case 24:Mt(e,t,a,n),i&2048&&ko(t.alternate,t);break;default:Mt(e,t,a,n)}}function gn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,c=a,p=n,S=s.flags;switch(s.tag){case 0:case 11:case 15:gn(r,s,c,p,i),ui(8,s);break;case 23:break;case 22:var z=s.stateNode;s.memoizedState!==null?z._visibility&2?gn(r,s,c,p,i):fi(r,s):(z._visibility|=2,gn(r,s,c,p,i)),i&&S&2048&&Uo(s.alternate,s);break;case 24:gn(r,s,c,p,i),i&&S&2048&&ko(s.alternate,s);break;default:gn(r,s,c,p,i)}t=t.sibling}}function fi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:fi(a,n),i&2048&&Uo(n.alternate,n);break;case 24:fi(a,n),i&2048&&ko(n.alternate,n);break;default:fi(a,n)}t=t.sibling}}var mi=8192;function xn(e){if(e.subtreeFlags&mi)for(e=e.child;e!==null;)Nd(e),e=e.sibling}function Nd(e){switch(e.tag){case 26:xn(e),e.flags&mi&&e.memoizedState!==null&&vh(jt,e.memoizedState,e.memoizedProps);break;case 5:xn(e);break;case 3:case 4:var t=jt;jt=ql(e.stateNode.containerInfo),xn(e),jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=mi,mi=16777216,xn(e),mi=t):xn(e));break;default:xn(e)}}function Ad(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ye=n,Td(n,e)}Ad(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ed(e),e=e.sibling}function Ed(e){switch(e.tag){case 0:case 11:case 15:pi(e),e.flags&2048&&sa(9,e,e.return);break;case 3:pi(e);break;case 12:pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,El(e)):pi(e);break;default:pi(e)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ye=n,Td(n,e)}Ad(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),El(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,El(t));break;default:El(t)}e=e.sibling}}function Td(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:$n(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ye=n;else e:for(a=e;Ye!==null;){n=Ye;var i=n.sibling,r=n.return;if(bd(n),n===a){Ye=null;break e}if(i!==null){i.return=r,Ye=i;break e}Ye=r}}}var Up={getCacheForType:function(e){var t=Ve(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},kp=typeof WeakMap=="function"?WeakMap:Map,ue=0,xe=null,ie=null,re=0,de=0,ot=null,da=!1,bn=!1,Yo=!1,Zt=0,Ae=0,fa=0,Ga=0,qo=0,bt=0,vn=0,hi=null,Pe=null,Bo=!1,Ho=0,Tl=1/0,zl=null,ma=null,He=0,pa=null,yn=null,jn=0,Go=0,Lo=null,zd=null,gi=0,Xo=null;function st(){if((ue&2)!==0&&re!==0)return re&-re;if(R.T!==null){var e=sn;return e!==0?e:$o()}return Qs()}function Rd(){bt===0&&(bt=(re&536870912)===0||ce?Hs():536870912);var e=xt.current;return e!==null&&(e.flags|=32),bt}function ct(e,t,a){(e===xe&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),ha(e,re,bt,!1)),_n(e,a),((ue&2)===0||e!==xe)&&(e===xe&&((ue&2)===0&&(Ga|=a),Ae===4&&ha(e,re,bt,!1)),Dt(e))}function Md(e,t,a){if((ue&6)!==0)throw Error(u(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Cn(e,t),i=n?Bp(e,t):Zo(e,t,!0),r=n;do{if(i===0){bn&&!n&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Yp(a)){i=Zo(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var c=e;i=hi;var p=c.current.memoizedState.isDehydrated;if(p&&(Sn(c,s).flags|=256),s=Zo(c,s,!1),s!==2){if(Yo&&!p){c.errorRecoveryDisabledLanes|=r,Ga|=r,i=4;break e}r=Pe,Pe=i,r!==null&&(Pe===null?Pe=r:Pe.push.apply(Pe,r))}i=s}if(r=!1,i!==2)continue}}if(i===1){Sn(e,0),ha(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ha(n,t,bt,!da);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Ho+300-Et(),10<i)){if(ha(n,t,bt,!da),Bi(n,0,!0)!==0)break e;n.timeoutHandle=rf(Dd.bind(null,n,a,Pe,zl,Bo,t,bt,Ga,vn,da,r,2,-0,0),i);break e}Dd(n,a,Pe,zl,Bo,t,bt,Ga,vn,da,r,0,-0,0)}}break}while(!0);Dt(e)}function Dd(e,t,a,n,i,r,s,c,p,S,z,O,N,A){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(wi={stylesheets:null,count:0,unsuspend:bh},Nd(t),O=yh(),O!==null)){e.cancelPendingCommit=O(qd.bind(null,e,t,r,a,n,i,s,c,p,z,1,N,A)),ha(e,r,s,!S);return}qd(e,t,r,a,n,i,s,c,p)}function Yp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!nt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,n){t&=~qo,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-at(i),s=1<<r;n[r]=-1,i&=~s}a!==0&&Ls(e,a,t)}function Rl(){return(ue&6)===0?(xi(0),!1):!0}function Qo(){if(ie!==null){if(de===0)var e=ie.return;else e=ie,qt=Ua=null,ro(e),pn=null,oi=0,e=ie;for(;e!==null;)ud(e.alternate,e),e=e.return;ie=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,th(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qo(),xe=e,ie=a=Ut(e.current,null),re=t,de=0,ot=null,da=!1,bn=Cn(e,t),Yo=!1,vn=bt=qo=Ga=fa=Ae=0,Pe=hi=null,Bo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-at(n),r=1<<i;t|=e[i],n&=~r}return Zt=t,Wi(),a}function Od(e,t){ae=null,R.H=gl,t===Pn||t===rl?(t=Jc(),de=3):t===Zc?(t=Jc(),de=4):de=t===$u?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ie===null&&(Ae=1,jl(e,mt(t,e.current)))}function Cd(){var e=R.H;return R.H=gl,e===null?gl:e}function _d(){var e=R.A;return R.A=Up,e}function Vo(){Ae=4,da||(re&4194048)!==re&&xt.current!==null||(bn=!0),(fa&134217727)===0&&(Ga&134217727)===0||xe===null||ha(xe,re,bt,!1)}function Zo(e,t,a){var n=ue;ue|=2;var i=Cd(),r=_d();(xe!==e||re!==t)&&(zl=null,Sn(e,t)),t=!1;var s=Ae;e:do try{if(de!==0&&ie!==null){var c=ie,p=ot;switch(de){case 8:Qo(),s=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var S=de;if(de=0,ot=null,wn(e,c,p,S),a&&bn){s=0;break e}break;default:S=de,de=0,ot=null,wn(e,c,p,S)}}qp(),s=Ae;break}catch(z){Od(e,z)}while(!0);return t&&e.shellSuspendCounter++,qt=Ua=null,ue=n,R.H=i,R.A=r,ie===null&&(xe=null,re=0,Wi()),s}function qp(){for(;ie!==null;)Ud(ie)}function Bp(e,t){var a=ue;ue|=2;var n=Cd(),i=_d();xe!==e||re!==t?(zl=null,Tl=Et()+500,Sn(e,t)):bn=Cn(e,t);e:do try{if(de!==0&&ie!==null){t=ie;var r=ot;t:switch(de){case 1:de=0,ot=null,wn(e,t,r,1);break;case 2:case 9:if(Fc(r)){de=0,ot=null,kd(t);break}t=function(){de!==2&&de!==9||xe!==e||(de=7),Dt(e)},r.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Fc(r)?(de=0,ot=null,kd(t)):(de=0,ot=null,wn(e,t,r,7));break;case 5:var s=null;switch(ie.tag){case 26:s=ie.memoizedState;case 5:case 27:var c=ie;if(!s||bf(s)){de=0,ot=null;var p=c.sibling;if(p!==null)ie=p;else{var S=c.return;S!==null?(ie=S,Ml(S)):ie=null}break t}}de=0,ot=null,wn(e,t,r,5);break;case 6:de=0,ot=null,wn(e,t,r,6);break;case 8:Qo(),Ae=6;break e;default:throw Error(u(462))}}Hp();break}catch(z){Od(e,z)}while(!0);return qt=Ua=null,R.H=n,R.A=i,ue=a,ie!==null?0:(xe=null,re=0,Wi(),Ae)}function Hp(){for(;ie!==null&&!sm();)Ud(ie)}function Ud(e){var t=sd(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Ml(e):ie=t}function kd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ad(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=ad(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:ro(t);default:ud(a,t),t=ie=Yc(t,Zt),t=sd(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Ml(e):ie=t}function wn(e,t,a,n){qt=Ua=null,ro(t),pn=null,oi=0;var i=t.return;try{if(Rp(e,i,t,a,re)){Ae=1,jl(e,mt(a,e.current)),ie=null;return}}catch(r){if(i!==null)throw ie=i,r;Ae=1,jl(e,mt(a,e.current)),ie=null;return}t.flags&32768?(ce||n===1?e=!0:bn||(re&536870912)!==0?e=!1:(da=e=!0,(n===2||n===9||n===3||n===6)&&(n=xt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Yd(t,e)):Ml(t)}function Ml(e){var t=e;do{if((t.flags&32768)!==0){Yd(t,da);return}e=t.return;var a=Dp(t.alternate,t,Zt);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ae===0&&(Ae=5)}function Yd(e,t){do{var a=Op(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Ae=6,ie=null}function qd(e,t,a,n,i,r,s,c,p){e.cancelPendingCommit=null;do Dl();while(He!==0);if((ue&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=Ur,bm(e,a,r,s,c,p),e===xe&&(ie=xe=null,re=0),yn=t,pa=e,jn=a,Go=r,Lo=i,zd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qp(ki,function(){return Xd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,i=k.p,k.p=2,s=ue,ue|=4;try{Cp(e,t,a)}finally{ue=s,k.p=i,R.T=n}}He=1,Bd(),Hd(),Gd()}}function Bd(){if(He===1){He=0;var e=pa,t=yn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=k.p;k.p=2;var i=ue;ue|=4;try{jd(t,e);var r=is,s=Tc(e.containerInfo),c=r.focusedElem,p=r.selectionRange;if(s!==c&&c&&c.ownerDocument&&Ec(c.ownerDocument.documentElement,c)){if(p!==null&&Mr(c)){var S=p.start,z=p.end;if(z===void 0&&(z=S),"selectionStart"in c)c.selectionStart=S,c.selectionEnd=Math.min(z,c.value.length);else{var O=c.ownerDocument||document,N=O&&O.defaultView||window;if(N.getSelection){var A=N.getSelection(),$=c.textContent.length,F=Math.min(p.start,$),pe=p.end===void 0?F:Math.min(p.end,$);!A.extend&&F>pe&&(s=pe,pe=F,F=s);var v=Ac(c,F),x=Ac(c,pe);if(v&&x&&(A.rangeCount!==1||A.anchorNode!==v.node||A.anchorOffset!==v.offset||A.focusNode!==x.node||A.focusOffset!==x.offset)){var y=O.createRange();y.setStart(v.node,v.offset),A.removeAllRanges(),F>pe?(A.addRange(y),A.extend(x.node,x.offset)):(y.setEnd(x.node,x.offset),A.addRange(y))}}}}for(O=[],A=c;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var D=O[c];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Xl=!!ns,is=ns=null}finally{ue=i,k.p=n,R.T=a}}e.current=t,He=2}}function Hd(){if(He===2){He=0;var e=pa,t=yn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=k.p;k.p=2;var i=ue;ue|=4;try{xd(e,t.alternate,t)}finally{ue=i,k.p=n,R.T=a}}He=3}}function Gd(){if(He===4||He===3){He=0,cm();var e=pa,t=yn,a=jn,n=zd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?He=5:(He=0,yn=pa=null,Ld(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ma=null),cr(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(On,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=R.T,i=k.p,k.p=2,R.T=null;try{for(var r=e.onRecoverableError,s=0;s<n.length;s++){var c=n[s];r(c.value,{componentStack:c.stack})}}finally{R.T=t,k.p=i}}(jn&3)!==0&&Dl(),Dt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Xo?gi++:(gi=0,Xo=e):gi=0,xi(0)}}function Ld(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$n(t)))}function Dl(e){return Bd(),Hd(),Gd(),Xd()}function Xd(){if(He!==5)return!1;var e=pa,t=Go;Go=0;var a=cr(jn),n=R.T,i=k.p;try{k.p=32>a?32:a,R.T=null,a=Lo,Lo=null;var r=pa,s=jn;if(He=0,yn=pa=null,jn=0,(ue&6)!==0)throw Error(u(331));var c=ue;if(ue|=4,Ed(r.current),wd(r,r.current,s,a),ue=c,xi(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(On,r)}catch{}return!0}finally{k.p=i,R.T=n,Ld(e,t)}}function Qd(e,t,a){t=mt(a,t),t=jo(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(_n(e,2),Dt(e))}function ge(e,t,a){if(e.tag===3)Qd(e,e,a);else for(;t!==null;){if(t.tag===3){Qd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ma===null||!ma.has(n))){e=mt(a,e),a=Ku(2),n=ia(t,a,2),n!==null&&(Ju(a,n,t,e),_n(n,2),Dt(n));break}}t=t.return}}function Fo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new kp;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Yo=!0,i.add(a),e=Gp.bind(null,e,t,a),t.then(e,e))}function Gp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(Ae===4||Ae===3&&(re&62914560)===re&&300>Et()-Ho?(ue&2)===0&&Sn(e,0):qo|=a,vn===re&&(vn=0)),Dt(e)}function Vd(e,t){t===0&&(t=Gs()),e=nn(e,t),e!==null&&(_n(e,t),Dt(e))}function Lp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vd(e,a)}function Xp(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Vd(e,a)}function Qp(e,t){return lr(e,t)}var Ol=null,Nn=null,Ko=!1,Cl=!1,Jo=!1,La=0;function Dt(e){e!==Nn&&e.next===null&&(Nn===null?Ol=Nn=e:Nn=Nn.next=e),Cl=!0,Ko||(Ko=!0,Zp())}function xi(e,t){if(!Jo&&Cl){Jo=!0;do for(var a=!1,n=Ol;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var s=n.suspendedLanes,c=n.pingedLanes;r=(1<<31-at(42|e)+1)-1,r&=i&~(s&~c),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Jd(n,r))}else r=re,r=Bi(n,n===xe?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Cn(n,r)||(a=!0,Jd(n,r));n=n.next}while(a);Jo=!1}}function Vp(){Zd()}function Zd(){Cl=Ko=!1;var e=0;La!==0&&(eh()&&(e=La),La=0);for(var t=Et(),a=null,n=Ol;n!==null;){var i=n.next,r=Fd(n,t);r===0?(n.next=null,a===null?Ol=i:a.next=i,i===null&&(Nn=a)):(a=n,(e!==0||(r&3)!==0)&&(Cl=!0)),n=i}xi(e)}function Fd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-at(r),c=1<<s,p=i[s];p===-1?((c&a)===0||(c&n)!==0)&&(i[s]=xm(c,t)):p<=t&&(e.expiredLanes|=c),r&=~c}if(t=xe,a=re,a=Bi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&rr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&rr(n),cr(a)){case 2:case 8:a=qs;break;case 32:a=ki;break;case 268435456:a=Bs;break;default:a=ki}return n=Kd.bind(null,e),a=lr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&rr(n),e.callbackPriority=2,e.callbackNode=null,2}function Kd(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dl()&&e.callbackNode!==a)return null;var n=re;return n=Bi(e,e===xe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Md(e,n,t),Fd(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Kd.bind(null,e):null)}function Jd(e,t){if(Dl())return null;Md(e,t,!0)}function Zp(){ah(function(){(ue&6)!==0?lr(Ys,Vp):Zd()})}function $o(){return La===0&&(La=Hs()),La}function $d(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qi(""+e)}function Wd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Fp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=$d((i[Ke]||null).action),s=n.submitter;s&&(t=(t=s[Ke]||null)?$d(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var c=new Ki("action","action",null,n,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(La!==0){var p=s?Wd(i,s):new FormData(i);go(a,{pending:!0,data:p,method:i.method,action:r},null,p)}}else typeof r=="function"&&(c.preventDefault(),p=s?Wd(i,s):new FormData(i),go(a,{pending:!0,data:p,method:i.method,action:r},r,p))},currentTarget:i}]})}}for(var Wo=0;Wo<_r.length;Wo++){var Po=_r[Wo],Kp=Po.toLowerCase(),Jp=Po[0].toUpperCase()+Po.slice(1);yt(Kp,"on"+Jp)}yt(Mc,"onAnimationEnd"),yt(Dc,"onAnimationIteration"),yt(Oc,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(fp,"onTransitionRun"),yt(mp,"onTransitionStart"),yt(pp,"onTransitionCancel"),yt(Cc,"onTransitionEnd"),Fa("onMouseEnter",["mouseout","mouseover"]),Fa("onMouseLeave",["mouseout","mouseover"]),Fa("onPointerEnter",["pointerout","pointerover"]),Fa("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$p=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function Pd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var s=n.length-1;0<=s;s--){var c=n[s],p=c.instance,S=c.currentTarget;if(c=c.listener,p!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=S;try{r(i)}catch(z){yl(z)}i.currentTarget=null,r=p}else for(s=0;s<n.length;s++){if(c=n[s],p=c.instance,S=c.currentTarget,c=c.listener,p!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=S;try{r(i)}catch(z){yl(z)}i.currentTarget=null,r=p}}}}function le(e,t){var a=t[ur];a===void 0&&(a=t[ur]=new Set);var n=e+"__bubble";a.has(n)||(Id(t,e,2,!1),a.add(n))}function Io(e,t,a){var n=0;t&&(n|=4),Id(a,e,n,t)}var _l="_reactListening"+Math.random().toString(36).slice(2);function es(e){if(!e[_l]){e[_l]=!0,Zs.forEach(function(a){a!=="selectionchange"&&($p.has(a)||Io(a,!1,e),Io(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_l]||(t[_l]=!0,Io("selectionchange",!1,t))}}function Id(e,t,a,n){switch(Nf(t)){case 2:var i=wh;break;case 8:i=Nh;break;default:i=ps}a=i.bind(null,t,a,e),i=void 0,!jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function ts(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var c=n.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=n.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Qa(c),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){n=r=s;continue e}c=c.parentNode}}n=n.return}rc(function(){var S=r,z=vr(a),O=[];e:{var N=_c.get(e);if(N!==void 0){var A=Ki,$=e;switch(e){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":A=Qm;break;case"focusin":$="focus",A=Ar;break;case"focusout":$="blur",A=Ar;break;case"beforeblur":case"afterblur":A=Ar;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Fm;break;case Mc:case Dc:case Oc:A=Um;break;case Cc:A=Jm;break;case"scroll":case"scrollend":A=Mm;break;case"wheel":A=Wm;break;case"copy":case"cut":case"paste":A=Ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=dc;break;case"toggle":case"beforetoggle":A=Im}var F=(t&4)!==0,pe=!F&&(e==="scroll"||e==="scrollend"),v=F?N!==null?N+"Capture":null:N;F=[];for(var x=S,y;x!==null;){var D=x;if(y=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||y===null||v===null||(D=Yn(x,v),D!=null&&F.push(vi(x,D,y))),pe)break;x=x.return}0<F.length&&(N=new A(N,$,null,a,z),O.push({event:N,listeners:F}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",N&&a!==br&&($=a.relatedTarget||a.fromElement)&&(Qa($)||$[Xa]))break e;if((A||N)&&(N=z.window===z?z:(N=z.ownerDocument)?N.defaultView||N.parentWindow:window,A?($=a.relatedTarget||a.toElement,A=S,$=$?Qa($):null,$!==null&&(pe=b($),F=$.tag,$!==pe||F!==5&&F!==27&&F!==6)&&($=null)):(A=null,$=S),A!==$)){if(F=cc,D="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(F=dc,D="onPointerLeave",v="onPointerEnter",x="pointer"),pe=A==null?N:kn(A),y=$==null?N:kn($),N=new F(D,x+"leave",A,a,z),N.target=pe,N.relatedTarget=y,D=null,Qa(z)===S&&(F=new F(v,x+"enter",$,a,z),F.target=y,F.relatedTarget=pe,D=F),pe=D,A&&$)t:{for(F=A,v=$,x=0,y=F;y;y=An(y))x++;for(y=0,D=v;D;D=An(D))y++;for(;0<x-y;)F=An(F),x--;for(;0<y-x;)v=An(v),y--;for(;x--;){if(F===v||v!==null&&F===v.alternate)break t;F=An(F),v=An(v)}F=null}else F=null;A!==null&&ef(O,N,A,F,!1),$!==null&&pe!==null&&ef(O,pe,$,F,!0)}}e:{if(N=S?kn(S):window,A=N.nodeName&&N.nodeName.toLowerCase(),A==="select"||A==="input"&&N.type==="file")var B=vc;else if(xc(N))if(yc)B=cp;else{B=op;var ne=rp}else A=N.nodeName,!A||A.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?S&&xr(S.elementType)&&(B=vc):B=sp;if(B&&(B=B(e,S))){bc(O,B,a,z);break e}ne&&ne(e,N,S),e==="focusout"&&S&&N.type==="number"&&S.memoizedProps.value!=null&&gr(N,"number",N.value)}switch(ne=S?kn(S):window,e){case"focusin":(xc(ne)||ne.contentEditable==="true")&&(en=ne,Dr=S,Vn=null);break;case"focusout":Vn=Dr=en=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,zc(O,a,z);break;case"selectionchange":if(dp)break;case"keydown":case"keyup":zc(O,a,z)}var X;if(Tr)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ia?hc(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(fc&&a.locale!=="ko"&&(Ia||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ia&&(X=oc()):(ea=z,Sr="value"in ea?ea.value:ea.textContent,Ia=!0)),ne=Ul(S,K),0<ne.length&&(K=new uc(K,e,null,a,z),O.push({event:K,listeners:ne}),X?K.data=X:(X=gc(a),X!==null&&(K.data=X)))),(X=tp?ap(e,a):np(e,a))&&(K=Ul(S,"onBeforeInput"),0<K.length&&(ne=new uc("onBeforeInput","beforeinput",null,a,z),O.push({event:ne,listeners:K}),ne.data=X)),Fp(O,e,S,a,z)}Pd(O,t)})}function vi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ul(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Yn(e,a),i!=null&&n.unshift(vi(e,i,r)),i=Yn(e,t),i!=null&&n.push(vi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ef(e,t,a,n,i){for(var r=t._reactName,s=[];a!==null&&a!==n;){var c=a,p=c.alternate,S=c.stateNode;if(c=c.tag,p!==null&&p===n)break;c!==5&&c!==26&&c!==27||S===null||(p=S,i?(S=Yn(a,r),S!=null&&s.unshift(vi(a,S,p))):i||(S=Yn(a,r),S!=null&&s.push(vi(a,S,p)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Wp=/\r\n?/g,Pp=/\u0000|\uFFFD/g;function tf(e){return(typeof e=="string"?e:""+e).replace(Wp,`
`).replace(Pp,"")}function af(e,t){return t=tf(t),tf(e)===t}function kl(){}function me(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||$a(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&$a(e,""+n);break;case"className":Gi(e,"class",n);break;case"tabIndex":Gi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gi(e,a,n);break;case"style":ic(e,n,r);break;case"data":if(t!=="object"){Gi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",i.name,i,null),me(e,t,"formEncType",i.formEncType,i,null),me(e,t,"formMethod",i.formMethod,i,null),me(e,t,"formTarget",i.formTarget,i,null)):(me(e,t,"encType",i.encType,i,null),me(e,t,"method",i.method,i,null),me(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=kl);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Qi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":le("beforetoggle",e),le("toggle",e),Hi(e,"popover",n);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Hi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zm.get(a)||a,Hi(e,a,n))}}function as(e,t,a,n,i,r){switch(a){case"style":ic(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?$a(e,n):(typeof n=="number"||typeof n=="bigint")&&$a(e,""+n);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"onClick":n!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[Ke]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Hi(e,a,n)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,r,s,a,null)}}i&&me(e,t,"srcSet",a.srcSet,a,null),n&&me(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var c=r=s=i=null,p=null,S=null;for(n in a)if(a.hasOwnProperty(n)){var z=a[n];if(z!=null)switch(n){case"name":i=z;break;case"type":s=z;break;case"checked":p=z;break;case"defaultChecked":S=z;break;case"value":r=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:me(e,t,n,z,a,null)}}ec(e,r,c,p,S,s,i,!1),Li(e);return;case"select":le("invalid",e),n=s=r=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":r=c;break;case"defaultValue":s=c;break;case"multiple":n=c;default:me(e,t,i,c,a,null)}t=r,a=s,e.multiple=!!n,t!=null?Ja(e,!!n,t,!1):a!=null&&Ja(e,!!n,a,!0);return;case"textarea":le("invalid",e),r=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(c=a[s],c!=null))switch(s){case"value":n=c;break;case"defaultValue":i=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:me(e,t,s,c,a,null)}ac(e,n,i,r),Li(e);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:me(e,t,p,n,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(n=0;n<bi.length;n++)le(bi[n],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,S,n,a,null)}return;default:if(xr(t)){for(z in a)a.hasOwnProperty(z)&&(n=a[z],n!==void 0&&as(e,t,z,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&me(e,t,c,n,a,null))}function Ip(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,s=null,c=null,p=null,S=null,z=null;for(A in a){var O=a[A];if(a.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":p=O;default:n.hasOwnProperty(A)||me(e,t,A,null,n,O)}}for(var N in n){var A=n[N];if(O=a[N],n.hasOwnProperty(N)&&(A!=null||O!=null))switch(N){case"type":r=A;break;case"name":i=A;break;case"checked":S=A;break;case"defaultChecked":z=A;break;case"value":s=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==O&&me(e,t,N,A,n,O)}}hr(e,s,c,p,S,z,r,i);return;case"select":A=s=c=N=null;for(r in a)if(p=a[r],a.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":A=p;default:n.hasOwnProperty(r)||me(e,t,r,null,n,p)}for(i in n)if(r=n[i],p=a[i],n.hasOwnProperty(i)&&(r!=null||p!=null))switch(i){case"value":N=r;break;case"defaultValue":c=r;break;case"multiple":s=r;default:r!==p&&me(e,t,i,r,n,p)}t=c,a=s,n=A,N!=null?Ja(e,!!a,N,!1):!!n!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":A=N=null;for(c in a)if(i=a[c],a.hasOwnProperty(c)&&i!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:me(e,t,c,null,n,i)}for(s in n)if(i=n[s],r=a[s],n.hasOwnProperty(s)&&(i!=null||r!=null))switch(s){case"value":N=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&me(e,t,s,i,n,r)}tc(e,N,A);return;case"option":for(var $ in a)if(N=a[$],a.hasOwnProperty($)&&N!=null&&!n.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:me(e,t,$,null,n,N)}for(p in n)if(N=n[p],A=a[p],n.hasOwnProperty(p)&&N!==A&&(N!=null||A!=null))switch(p){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:me(e,t,p,N,n,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)N=a[F],a.hasOwnProperty(F)&&N!=null&&!n.hasOwnProperty(F)&&me(e,t,F,null,n,N);for(S in n)if(N=n[S],A=a[S],n.hasOwnProperty(S)&&N!==A&&(N!=null||A!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:me(e,t,S,N,n,A)}return;default:if(xr(t)){for(var pe in a)N=a[pe],a.hasOwnProperty(pe)&&N!==void 0&&!n.hasOwnProperty(pe)&&as(e,t,pe,void 0,n,N);for(z in n)N=n[z],A=a[z],!n.hasOwnProperty(z)||N===A||N===void 0&&A===void 0||as(e,t,z,N,n,A);return}}for(var v in a)N=a[v],a.hasOwnProperty(v)&&N!=null&&!n.hasOwnProperty(v)&&me(e,t,v,null,n,N);for(O in n)N=n[O],A=a[O],!n.hasOwnProperty(O)||N===A||N==null&&A==null||me(e,t,O,N,n,A)}var ns=null,is=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=null;function eh(){var e=window.event;return e&&e.type==="popstate"?e===rs?!1:(rs=e,!0):(rs=null,!1)}var rf=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,ah=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(nh)}:rf;function nh(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function sf(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var s=e.ownerDocument;if(a&1&&yi(s.documentElement),a&2&&yi(s.body),a&4)for(a=s.head,yi(a),s=a.firstChild;s;){var c=s.nextSibling,p=s.nodeName;s[Un]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}if(i===0){e.removeChild(r),zi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);zi(t)}function os(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":os(a),dr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ih(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function lh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function ss(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var cs=null;function cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function uf(e,t,a){switch(t=Yl(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dr(e)}var vt=new Map,df=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=k.d;k.d={f:oh,r:sh,D:ch,C:uh,L:dh,m:fh,X:ph,S:mh,M:hh};function oh(){var e=Ft.f(),t=Rl();return e||t}function sh(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Mu(t):Ft.r(e)}var En=typeof document>"u"?null:document;function ff(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var i=ft(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),df.has(i)||(df.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ge(t,"link",e),Ue(t),n.head.appendChild(t)))}}function ch(e){Ft.D(e),ff("dns-prefetch",e,null)}function uh(e,t){Ft.C(e,t),ff("preconnect",e,t)}function dh(e,t,a){Ft.L(e,t,a);var n=En;if(n&&e&&t){var i='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ft(a.imageSizes)+'"]')):i+='[href="'+ft(e)+'"]';var r=i;switch(t){case"style":r=Tn(e);break;case"script":r=zn(e)}vt.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ji(r))||t==="script"&&n.querySelector(Si(r))||(t=n.createElement("link"),Ge(t,"link",e),Ue(t),n.head.appendChild(t)))}}function fh(e,t){Ft.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ft(n)+'"][href="'+ft(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=zn(e)}if(!vt.has(r)&&(e=E({rel:"modulepreload",href:e},t),vt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Si(r)))return}n=a.createElement("link"),Ge(n,"link",e),Ue(n),a.head.appendChild(n)}}}function mh(e,t,a){Ft.S(e,t,a);var n=En;if(n&&e){var i=Za(n).hoistableStyles,r=Tn(e);t=t||"default";var s=i.get(r);if(!s){var c={loading:0,preload:null};if(s=n.querySelector(ji(r)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(r))&&us(e,a);var p=s=n.createElement("link");Ue(p),Ge(p,"link",e),p._p=new Promise(function(S,z){p.onload=S,p.onerror=z}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Bl(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(r,s)}}}function ph(e,t){Ft.X(e,t);var a=En;if(a&&e){var n=Za(a).hoistableScripts,i=zn(e),r=n.get(i);r||(r=a.querySelector(Si(i)),r||(e=E({src:e,async:!0},t),(t=vt.get(i))&&ds(e,t),r=a.createElement("script"),Ue(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function hh(e,t){Ft.M(e,t);var a=En;if(a&&e){var n=Za(a).hoistableScripts,i=zn(e),r=n.get(i);r||(r=a.querySelector(Si(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=vt.get(i))&&ds(e,t),r=a.createElement("script"),Ue(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function mf(e,t,a,n){var i=(i=I.current)?ql(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tn(a.href),a=Za(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tn(a.href);var r=Za(i).hoistableStyles,s=r.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=i.querySelector(ji(e)))&&!r._p&&(s.instance=r,s.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),r||gh(i,e,a,s.state))),t&&n===null)throw Error(u(528,""));return s}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zn(a),a=Za(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Tn(e){return'href="'+ft(e)+'"'}function ji(e){return'link[rel="stylesheet"]['+e+"]"}function pf(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function gh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ge(t,"link",a),Ue(t),e.head.appendChild(t))}function zn(e){return'[src="'+ft(e)+'"]'}function Si(e){return"script[async]"+e}function hf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(n)return t.instance=n,Ue(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ue(n),Ge(n,"style",i),Bl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Tn(a.href);var r=e.querySelector(ji(i));if(r)return t.state.loading|=4,t.instance=r,Ue(r),r;n=pf(a),(i=vt.get(i))&&us(n,i),r=(e.ownerDocument||e).createElement("link"),Ue(r);var s=r;return s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Ge(r,"link",n),t.state.loading|=4,Bl(r,a.precedence,e),t.instance=r;case"script":return r=zn(a.src),(i=e.querySelector(Si(r)))?(t.instance=i,Ue(i),i):(n=a,(i=vt.get(r))&&(n=E({},a),ds(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ue(i),Ge(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Bl(n,a.precedence,e));return t.instance}function Bl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,s=0;s<n.length;s++){var c=n[s];if(c.dataset.precedence===t)r=c;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function us(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ds(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hl=null;function gf(e,t,a){if(Hl===null){var n=new Map,i=Hl=new Map;i.set(a,n)}else i=Hl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Un]||r[Qe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var c=n.get(s);c?c.push(r):n.set(s,[r])}}return n}function xf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function xh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var wi=null;function bh(){}function vh(e,t,a){if(wi===null)throw Error(u(475));var n=wi;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Tn(a.href),r=e.querySelector(ji(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Gl.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Ue(r);return}r=e.ownerDocument||e,a=pf(a),(i=vt.get(i))&&us(a,i),r=r.createElement("link"),Ue(r);var s=r;s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Ge(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Gl.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function yh(){if(wi===null)throw Error(u(475));var e=wi;return e.stylesheets&&e.count===0&&fs(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gl(){if(this.count--,this.count===0){if(this.stylesheets)fs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ll=null;function fs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ll=new Map,t.forEach(jh,e),Ll=null,Gl.call(e))}function jh(e,t){if(!(t.state.loading&4)){var a=Ll.get(e);if(a)var n=a.get(null);else{a=new Map,Ll.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var s=i[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),r=a.get(s)||n,r===n&&a.set(null,i),a.set(s,i),this.count++,n=Gl.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ni={$$typeof:ee,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Sh(e,t,a,n,i,r,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=or(0),this.hiddenUpdates=or(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function vf(e,t,a,n,i,r,s,c,p,S,z,O){return e=new Sh(e,t,a,s,c,p,S,O),t=1,r===!0&&(t|=24),r=it(3,null,null,t),e.current=r,r.stateNode=e,t=Zr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},$r(r),e}function yf(e){return e?(e=ln,e):ln}function jf(e,t,a,n,i,r){i=yf(i),n.context===null?n.context=i:n.pendingContext=i,n=na(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ia(e,n,t),a!==null&&(ct(a,e,t),ei(a,e,t))}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ms(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function wf(e){if(e.tag===13){var t=nn(e,67108864);t!==null&&ct(t,e,67108864),ms(e,67108864)}}var Xl=!0;function wh(e,t,a,n){var i=R.T;R.T=null;var r=k.p;try{k.p=2,ps(e,t,a,n)}finally{k.p=r,R.T=i}}function Nh(e,t,a,n){var i=R.T;R.T=null;var r=k.p;try{k.p=8,ps(e,t,a,n)}finally{k.p=r,R.T=i}}function ps(e,t,a,n){if(Xl){var i=hs(n);if(i===null)ts(e,t,n,Ql,a),Af(e,n);else if(Eh(i,e,t,a,n))n.stopPropagation();else if(Af(e,n),t&4&&-1<Ah.indexOf(e)){for(;i!==null;){var r=Va(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Aa(r.pendingLanes);if(s!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var p=1<<31-at(s);c.entanglements[1]|=p,s&=~p}Dt(r),(ue&6)===0&&(Tl=Et()+500,xi(0))}}break;case 13:c=nn(r,2),c!==null&&ct(c,r,2),Rl(),ms(r,2)}if(r=hs(n),r===null&&ts(e,t,n,Ql,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else ts(e,t,n,null,a)}}function hs(e){return e=vr(e),gs(e)}var Ql=null;function gs(e){if(Ql=null,e=Qa(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ql=e,null}function Nf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(um()){case Ys:return 2;case qs:return 8;case ki:case dm:return 32;case Bs:return 268435456;default:return 32}default:return 32}}var xs=!1,xa=null,ba=null,va=null,Ai=new Map,Ei=new Map,ya=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Af(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Ti(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&wf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Eh(e,t,a,n,i){switch(t){case"focusin":return xa=Ti(xa,e,t,a,n,i),!0;case"dragenter":return ba=Ti(ba,e,t,a,n,i),!0;case"mouseover":return va=Ti(va,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Ai.set(r,Ti(Ai.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Ei.set(r,Ti(Ei.get(r)||null,e,t,a,n,i)),!0}return!1}function Ef(e){var t=Qa(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=w(a),t!==null){e.blockedOn=t,vm(e.priority,function(){if(a.tag===13){var n=st();n=sr(n);var i=nn(a,n);i!==null&&ct(i,a,n),ms(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=hs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);br=n,a.target.dispatchEvent(n),br=null}else return t=Va(a),t!==null&&wf(t),e.blockedOn=a,!1;t.shift()}return!0}function Tf(e,t,a){Vl(e)&&a.delete(t)}function Th(){xs=!1,xa!==null&&Vl(xa)&&(xa=null),ba!==null&&Vl(ba)&&(ba=null),va!==null&&Vl(va)&&(va=null),Ai.forEach(Tf),Ei.forEach(Tf)}function Zl(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Th)))}var Fl=null;function zf(e){Fl!==e&&(Fl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fl===e&&(Fl=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(gs(n||a)===null)continue;break}var r=Va(a);r!==null&&(e.splice(t,3),t-=3,go(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function zi(e){function t(p){return Zl(p,e)}xa!==null&&Zl(xa,e),ba!==null&&Zl(ba,e),va!==null&&Zl(va,e),Ai.forEach(t),Ei.forEach(t);for(var a=0;a<ya.length;a++){var n=ya[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],s=i[Ke]||null;if(typeof r=="function")s||zf(a);else if(s){var c=null;if(r&&r.hasAttribute("formAction")){if(i=r,s=r[Ke]||null)c=s.formAction;else if(gs(i)!==null)continue}else c=s.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),zf(a)}}}function bs(e){this._internalRoot=e}Kl.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=st();jf(a,n,e,t,null,null)},Kl.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jf(e.current,2,null,e,null,null),Rl(),t[Xa]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&Ef(e)}};var Rf=d.version;if(Rf!=="19.1.1")throw Error(u(527,Rf,"19.1.1"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=j(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var zh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{On=Jl.inject(zh),tt=Jl}catch{}}return Mi.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,n="",i=Qu,r=Vu,s=Zu,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=vf(e,1,!1,null,null,a,n,i,r,s,c,null),e[Xa]=t.current,es(e),new bs(t)},Mi.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var n=!1,i="",r=Qu,s=Vu,c=Zu,p=null,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(S=a.formState)),t=vf(e,1,!0,t,a??null,n,i,r,s,c,p,S),t.context=yf(null),a=t.current,n=st(),n=sr(n),i=na(n),i.callback=null,ia(a,i,n),a=n,t.current.lanes=a,_n(t,a),Dt(t),e[Xa]=t.current,es(e),new Kl(t)},Mi.version="19.1.1",Mi}var Bf;function Bh(){if(Bf)return js.exports;Bf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),js.exports=qh(),js.exports}var Hh=Bh();const Gh=Ff(Hh);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hf="popstate";function Lh(o={}){function d(u,m){let{pathname:b,search:w,hash:M}=u.location;return Ts("",{pathname:b,search:w,hash:M},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(u,m){return typeof m=="string"?m:Oi(m)}return Qh(d,f,null,o)}function ye(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Nt(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Xh(){return Math.random().toString(36).substring(2,10)}function Gf(o,d){return{usr:o.state,key:o.key,idx:d}}function Ts(o,d,f=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof d=="string"?Rn(d):d,state:f,key:d&&d.key||u||Xh()}}function Oi({pathname:o="/",search:d="",hash:f=""}){return d&&d!=="?"&&(o+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function Rn(o){let d={};if(o){let f=o.indexOf("#");f>=0&&(d.hash=o.substring(f),o=o.substring(0,f));let u=o.indexOf("?");u>=0&&(d.search=o.substring(u),o=o.substring(0,u)),o&&(d.pathname=o)}return d}function Qh(o,d,f,u={}){let{window:m=document.defaultView,v5Compat:b=!1}=u,w=m.history,M="POP",j=null,h=E();h==null&&(h=0,w.replaceState({...w.state,idx:h},""));function E(){return(w.state||{idx:null}).idx}function _(){M="POP";let H=E(),V=H==null?null:H-h;h=H,j&&j({action:M,location:W.location,delta:V})}function Y(H,V){M="PUSH";let G=Ts(W.location,H,V);h=E()+1;let ee=Gf(G,h),je=W.createHref(G);try{w.pushState(ee,"",je)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;m.location.assign(je)}b&&j&&j({action:M,location:W.location,delta:1})}function L(H,V){M="REPLACE";let G=Ts(W.location,H,V);h=E();let ee=Gf(G,h),je=W.createHref(G);w.replaceState(ee,"",je),b&&j&&j({action:M,location:W.location,delta:0})}function Q(H){return Vh(H)}let W={get action(){return M},get location(){return o(m,w)},listen(H){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(Hf,_),j=H,()=>{m.removeEventListener(Hf,_),j=null}},createHref(H){return d(m,H)},createURL:Q,encodeLocation(H){let V=Q(H);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:Y,replace:L,go(H){return w.go(H)}};return W}function Vh(o,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),ye(f,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:Oi(o);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function Kf(o,d,f="/"){return Zh(o,d,f,!1)}function Zh(o,d,f,u){let m=typeof d=="string"?Rn(d):d,b=Jt(m.pathname||"/",f);if(b==null)return null;let w=Jf(o);Fh(w);let M=null;for(let j=0;M==null&&j<w.length;++j){let h=ig(b);M=ag(w[j],h,u)}return M}function Jf(o,d=[],f=[],u="",m=!1){let b=(w,M,j=m,h)=>{let E={relativePath:h===void 0?w.path||"":h,caseSensitive:w.caseSensitive===!0,childrenIndex:M,route:w};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(u)&&j)return;ye(E.relativePath.startsWith(u),`Absolute route path "${E.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(u.length)}let _=Kt([u,E.relativePath]),Y=f.concat(E);w.children&&w.children.length>0&&(ye(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Jf(w.children,d,Y,_,j)),!(w.path==null&&!w.index)&&d.push({path:_,score:eg(_,w.index),routesMeta:Y})};return o.forEach((w,M)=>{if(w.path===""||!w.path?.includes("?"))b(w,M);else for(let j of $f(w.path))b(w,M,!0,j)}),d}function $f(o){let d=o.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),b=f.replace(/\?$/,"");if(u.length===0)return m?[b,""]:[b];let w=$f(u.join("/")),M=[];return M.push(...w.map(j=>j===""?b:[b,j].join("/"))),m&&M.push(...w),M.map(j=>o.startsWith("/")&&j===""?"/":j)}function Fh(o){o.sort((d,f)=>d.score!==f.score?f.score-d.score:tg(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var Kh=/^:[\w-]+$/,Jh=3,$h=2,Wh=1,Ph=10,Ih=-2,Lf=o=>o==="*";function eg(o,d){let f=o.split("/"),u=f.length;return f.some(Lf)&&(u+=Ih),d&&(u+=$h),f.filter(m=>!Lf(m)).reduce((m,b)=>m+(Kh.test(b)?Jh:b===""?Wh:Ph),u)}function tg(o,d){return o.length===d.length&&o.slice(0,-1).every((u,m)=>u===d[m])?o[o.length-1]-d[d.length-1]:0}function ag(o,d,f=!1){let{routesMeta:u}=o,m={},b="/",w=[];for(let M=0;M<u.length;++M){let j=u[M],h=M===u.length-1,E=b==="/"?d:d.slice(b.length)||"/",_=Il({path:j.relativePath,caseSensitive:j.caseSensitive,end:h},E),Y=j.route;if(!_&&h&&f&&!u[u.length-1].route.index&&(_=Il({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},E)),!_)return null;Object.assign(m,_.params),w.push({params:m,pathname:Kt([b,_.pathname]),pathnameBase:sg(Kt([b,_.pathnameBase])),route:Y}),_.pathnameBase!=="/"&&(b=Kt([b,_.pathnameBase]))}return w}function Il(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,u]=ng(o.path,o.caseSensitive,o.end),m=d.match(f);if(!m)return null;let b=m[0],w=b.replace(/(.)\/+$/,"$1"),M=m.slice(1);return{params:u.reduce((h,{paramName:E,isOptional:_},Y)=>{if(E==="*"){let Q=M[Y]||"";w=b.slice(0,b.length-Q.length).replace(/(.)\/+$/,"$1")}const L=M[Y];return _&&!L?h[E]=void 0:h[E]=(L||"").replace(/%2F/g,"/"),h},{}),pathname:b,pathnameBase:w,pattern:o}}function ng(o,d=!1,f=!0){Nt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,M,j)=>(u.push({paramName:M,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(u.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function ig(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Nt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),o}}function Jt(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=o.charAt(f);return u&&u!=="/"?null:o.slice(f)||"/"}function lg(o,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof o=="string"?Rn(o):o;return{pathname:f?f.startsWith("/")?f:rg(f,d):d,search:cg(u),hash:ug(m)}}function rg(o,d){let f=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function As(o,d,f,u){return`Cannot include a '${o}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function og(o){return o.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function Ms(o){let d=og(o);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function Ds(o,d,f,u=!1){let m;typeof o=="string"?m=Rn(o):(m={...o},ye(!m.pathname||!m.pathname.includes("?"),As("?","pathname","search",m)),ye(!m.pathname||!m.pathname.includes("#"),As("#","pathname","hash",m)),ye(!m.search||!m.search.includes("#"),As("#","search","hash",m)));let b=o===""||m.pathname==="",w=b?"/":m.pathname,M;if(w==null)M=f;else{let _=d.length-1;if(!u&&w.startsWith("..")){let Y=w.split("/");for(;Y[0]==="..";)Y.shift(),_-=1;m.pathname=Y.join("/")}M=_>=0?d[_]:"/"}let j=lg(m,M),h=w&&w!=="/"&&w.endsWith("/"),E=(b||w===".")&&f.endsWith("/");return!j.pathname.endsWith("/")&&(h||E)&&(j.pathname+="/"),j}var Kt=o=>o.join("/").replace(/\/\/+/g,"/"),sg=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),cg=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,ug=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function dg(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var Wf=["POST","PUT","PATCH","DELETE"];new Set(Wf);var fg=["GET",...Wf];new Set(fg);var Mn=T.createContext(null);Mn.displayName="DataRouter";var er=T.createContext(null);er.displayName="DataRouterState";T.createContext(!1);var Pf=T.createContext({isTransitioning:!1});Pf.displayName="ViewTransition";var mg=T.createContext(new Map);mg.displayName="Fetchers";var pg=T.createContext(null);pg.displayName="Await";var At=T.createContext(null);At.displayName="Navigation";var Ci=T.createContext(null);Ci.displayName="Location";var Ot=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var Os=T.createContext(null);Os.displayName="RouteError";function hg(o,{relative:d}={}){ye(Dn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=T.useContext(At),{hash:m,pathname:b,search:w}=_i(o,{relative:d}),M=b;return f!=="/"&&(M=b==="/"?f:Kt([f,b])),u.createHref({pathname:M,search:w,hash:m})}function Dn(){return T.useContext(Ci)!=null}function $t(){return ye(Dn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Ci).location}var If="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function em(o){T.useContext(At).static||T.useLayoutEffect(o)}function tr(){let{isDataRoute:o}=T.useContext(Ot);return o?zg():gg()}function gg(){ye(Dn(),"useNavigate() may be used only in the context of a <Router> component.");let o=T.useContext(Mn),{basename:d,navigator:f}=T.useContext(At),{matches:u}=T.useContext(Ot),{pathname:m}=$t(),b=JSON.stringify(Ms(u)),w=T.useRef(!1);return em(()=>{w.current=!0}),T.useCallback((j,h={})=>{if(Nt(w.current,If),!w.current)return;if(typeof j=="number"){f.go(j);return}let E=Ds(j,JSON.parse(b),m,h.relative==="path");o==null&&d!=="/"&&(E.pathname=E.pathname==="/"?d:Kt([d,E.pathname])),(h.replace?f.replace:f.push)(E,h.state,h)},[d,f,b,m,o])}T.createContext(null);function _i(o,{relative:d}={}){let{matches:f}=T.useContext(Ot),{pathname:u}=$t(),m=JSON.stringify(Ms(f));return T.useMemo(()=>Ds(o,JSON.parse(m),u,d==="path"),[o,m,u,d])}function xg(o,d){return tm(o,d)}function tm(o,d,f,u,m){ye(Dn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=T.useContext(At),{matches:w}=T.useContext(Ot),M=w[w.length-1],j=M?M.params:{},h=M?M.pathname:"/",E=M?M.pathnameBase:"/",_=M&&M.route;{let G=_&&_.path||"";am(h,!_||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let Y=$t(),L;if(d){let G=typeof d=="string"?Rn(d):d;ye(E==="/"||G.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${G.pathname}" was given in the \`location\` prop.`),L=G}else L=Y;let Q=L.pathname||"/",W=Q;if(E!=="/"){let G=E.replace(/^\//,"").split("/");W="/"+Q.replace(/^\//,"").split("/").slice(G.length).join("/")}let H=Kf(o,{pathname:W});Nt(_||H!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Nt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Sg(H&&H.map(G=>Object.assign({},G,{params:Object.assign({},j,G.params),pathname:Kt([E,b.encodeLocation?b.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?E:Kt([E,b.encodeLocation?b.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),w,f,u,m);return d&&V?T.createElement(Ci.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},V):V}function bg(){let o=Tg(),d=dg(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},b={padding:"2px 4px",backgroundColor:u},w=null;return console.error("Error handled by React Router default ErrorBoundary:",o),w=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:b},"ErrorBoundary")," or"," ",T.createElement("code",{style:b},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},d),f?T.createElement("pre",{style:m},f):null,w)}var vg=T.createElement(bg,null),yg=class extends T.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,d){return d.location!==o.location||d.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:d.error,location:d.location,revalidation:o.revalidation||d.revalidation}}componentDidCatch(o,d){this.props.unstable_onError?this.props.unstable_onError(o,d):console.error("React Router caught the following error during render",o)}render(){return this.state.error!==void 0?T.createElement(Ot.Provider,{value:this.props.routeContext},T.createElement(Os.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jg({routeContext:o,match:d,children:f}){let u=T.useContext(Mn);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),T.createElement(Ot.Provider,{value:o},f)}function Sg(o,d=[],f=null,u=null,m=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let b=o,w=f?.errors;if(w!=null){let h=b.findIndex(E=>E.route.id&&w?.[E.route.id]!==void 0);ye(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),b=b.slice(0,Math.min(b.length,h+1))}let M=!1,j=-1;if(f)for(let h=0;h<b.length;h++){let E=b[h];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(j=h),E.route.id){let{loaderData:_,errors:Y}=f,L=E.route.loader&&!_.hasOwnProperty(E.route.id)&&(!Y||Y[E.route.id]===void 0);if(E.route.lazy||L){M=!0,j>=0?b=b.slice(0,j+1):b=[b[0]];break}}}return b.reduceRight((h,E,_)=>{let Y,L=!1,Q=null,W=null;f&&(Y=w&&E.route.id?w[E.route.id]:void 0,Q=E.route.errorElement||vg,M&&(j<0&&_===0?(am("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,W=null):j===_&&(L=!0,W=E.route.hydrateFallbackElement||null)));let H=d.concat(b.slice(0,_+1)),V=()=>{let G;return Y?G=Q:L?G=W:E.route.Component?G=T.createElement(E.route.Component,null):E.route.element?G=E.route.element:G=h,T.createElement(jg,{match:E,routeContext:{outlet:h,matches:H,isDataRoute:f!=null},children:G})};return f&&(E.route.ErrorBoundary||E.route.errorElement||_===0)?T.createElement(yg,{location:f.location,revalidation:f.revalidation,component:Q,error:Y,children:V(),routeContext:{outlet:null,matches:H,isDataRoute:!0},unstable_onError:u}):V()},null)}function Cs(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wg(o){let d=T.useContext(Mn);return ye(d,Cs(o)),d}function Ng(o){let d=T.useContext(er);return ye(d,Cs(o)),d}function Ag(o){let d=T.useContext(Ot);return ye(d,Cs(o)),d}function _s(o){let d=Ag(o),f=d.matches[d.matches.length-1];return ye(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function Eg(){return _s("useRouteId")}function Tg(){let o=T.useContext(Os),d=Ng("useRouteError"),f=_s("useRouteError");return o!==void 0?o:d.errors?.[f]}function zg(){let{router:o}=wg("useNavigate"),d=_s("useNavigate"),f=T.useRef(!1);return em(()=>{f.current=!0}),T.useCallback(async(m,b={})=>{Nt(f.current,If),f.current&&(typeof m=="number"?o.navigate(m):await o.navigate(m,{fromRouteId:d,...b}))},[o,d])}var Xf={};function am(o,d,f){!d&&!Xf[o]&&(Xf[o]=!0,Nt(!1,f))}T.memo(Rg);function Rg({routes:o,future:d,state:f,unstable_onError:u}){return tm(o,void 0,f,u,d)}function Qf({to:o,replace:d,state:f,relative:u}){ye(Dn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=T.useContext(At);Nt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:b}=T.useContext(Ot),{pathname:w}=$t(),M=tr(),j=Ds(o,Ms(b),w,u==="path"),h=JSON.stringify(j);return T.useEffect(()=>{M(JSON.parse(h),{replace:d,state:f,relative:u})},[M,h,u,d,f]),null}function wt(o){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mg({basename:o="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:b=!1}){ye(!Dn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=o.replace(/^\/*/,"/"),M=T.useMemo(()=>({basename:w,navigator:m,static:b,future:{}}),[w,m,b]);typeof f=="string"&&(f=Rn(f));let{pathname:j="/",search:h="",hash:E="",state:_=null,key:Y="default"}=f,L=T.useMemo(()=>{let Q=Jt(j,w);return Q==null?null:{location:{pathname:Q,search:h,hash:E,state:_,key:Y},navigationType:u}},[w,j,h,E,_,Y,u]);return Nt(L!=null,`<Router basename="${w}"> is not able to match the URL "${j}${h}${E}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:T.createElement(At.Provider,{value:M},T.createElement(Ci.Provider,{children:d,value:L}))}function Dg({children:o,location:d}){return xg(zs(o),d)}function zs(o,d=[]){let f=[];return T.Children.forEach(o,(u,m)=>{if(!T.isValidElement(u))return;let b=[...d,m];if(u.type===T.Fragment){f.push.apply(f,zs(u.props.children,b));return}ye(u.type===wt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!u.props.index||!u.props.children,"An index route cannot have child routes.");let w={id:u.props.id||b.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(w.children=zs(u.props.children,b)),f.push(w)}),f}var Wl="get",Pl="application/x-www-form-urlencoded";function ar(o){return o!=null&&typeof o.tagName=="string"}function Og(o){return ar(o)&&o.tagName.toLowerCase()==="button"}function Cg(o){return ar(o)&&o.tagName.toLowerCase()==="form"}function _g(o){return ar(o)&&o.tagName.toLowerCase()==="input"}function Ug(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function kg(o,d){return o.button===0&&(!d||d==="_self")&&!Ug(o)}var $l=null;function Yg(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var qg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Es(o){return o!=null&&!qg.has(o)?(Nt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pl}"`),null):o}function Bg(o,d){let f,u,m,b,w;if(Cg(o)){let M=o.getAttribute("action");u=M?Jt(M,d):null,f=o.getAttribute("method")||Wl,m=Es(o.getAttribute("enctype"))||Pl,b=new FormData(o)}else if(Og(o)||_g(o)&&(o.type==="submit"||o.type==="image")){let M=o.form;if(M==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=o.getAttribute("formaction")||M.getAttribute("action");if(u=j?Jt(j,d):null,f=o.getAttribute("formmethod")||M.getAttribute("method")||Wl,m=Es(o.getAttribute("formenctype"))||Es(M.getAttribute("enctype"))||Pl,b=new FormData(M,o),!Yg()){let{name:h,type:E,value:_}=o;if(E==="image"){let Y=h?`${h}.`:"";b.append(`${Y}x`,"0"),b.append(`${Y}y`,"0")}else h&&b.append(h,_)}}else{if(ar(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Wl,u=null,m=Pl,w=o}return b&&m==="text/plain"&&(w=b,b=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:b,body:w}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Us(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function Hg(o,d,f){let u=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return u.pathname==="/"?u.pathname=`_root.${f}`:d&&Jt(u.pathname,d)==="/"?u.pathname=`${d.replace(/\/$/,"")}/_root.${f}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${f}`,u}async function Gg(o,d){if(o.id in d)return d[o.id];try{let f=await import(o.module);return d[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lg(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Xg(o,d,f){let u=await Promise.all(o.map(async m=>{let b=d.routes[m.route.id];if(b){let w=await Gg(b,f);return w.links?w.links():[]}return[]}));return Fg(u.flat(1).filter(Lg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Vf(o,d,f,u,m,b){let w=(j,h)=>f[h]?j.route.id!==f[h].route.id:!0,M=(j,h)=>f[h].pathname!==j.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==j.params["*"];return b==="assets"?d.filter((j,h)=>w(j,h)||M(j,h)):b==="data"?d.filter((j,h)=>{let E=u.routes[j.route.id];if(!E||!E.hasLoader)return!1;if(w(j,h)||M(j,h))return!0;if(j.route.shouldRevalidate){let _=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Qg(o,d,{includeHydrateFallback:f}={}){return Vg(o.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let b=[m.module];return m.clientActionModule&&(b=b.concat(m.clientActionModule)),m.clientLoaderModule&&(b=b.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(b=b.concat(m.hydrateFallbackModule)),m.imports&&(b=b.concat(m.imports)),b}).flat(1))}function Vg(o){return[...new Set(o)]}function Zg(o){let d={},f=Object.keys(o).sort();for(let u of f)d[u]=o[u];return d}function Fg(o,d){let f=new Set;return new Set(d),o.reduce((u,m)=>{let b=JSON.stringify(Zg(m));return f.has(b)||(f.add(b),u.push({key:b,link:m})),u},[])}function nm(){let o=T.useContext(Mn);return Us(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Kg(){let o=T.useContext(er);return Us(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var ks=T.createContext(void 0);ks.displayName="FrameworkContext";function im(){let o=T.useContext(ks);return Us(o,"You must render this element inside a <HydratedRouter> element"),o}function Jg(o,d){let f=T.useContext(ks),[u,m]=T.useState(!1),[b,w]=T.useState(!1),{onFocus:M,onBlur:j,onMouseEnter:h,onMouseLeave:E,onTouchStart:_}=d,Y=T.useRef(null);T.useEffect(()=>{if(o==="render"&&w(!0),o==="viewport"){let W=V=>{V.forEach(G=>{w(G.isIntersecting)})},H=new IntersectionObserver(W,{threshold:.5});return Y.current&&H.observe(Y.current),()=>{H.disconnect()}}},[o]),T.useEffect(()=>{if(u){let W=setTimeout(()=>{w(!0)},100);return()=>{clearTimeout(W)}}},[u]);let L=()=>{m(!0)},Q=()=>{m(!1),w(!1)};return f?o!=="intent"?[b,Y,{}]:[b,Y,{onFocus:Di(M,L),onBlur:Di(j,Q),onMouseEnter:Di(h,L),onMouseLeave:Di(E,Q),onTouchStart:Di(_,L)}]:[!1,Y,{}]}function Di(o,d){return f=>{o&&o(f),f.defaultPrevented||d(f)}}function $g({page:o,...d}){let{router:f}=nm(),u=T.useMemo(()=>Kf(f.routes,o,f.basename),[f.routes,o,f.basename]);return u?T.createElement(Pg,{page:o,matches:u,...d}):null}function Wg(o){let{manifest:d,routeModules:f}=im(),[u,m]=T.useState([]);return T.useEffect(()=>{let b=!1;return Xg(o,d,f).then(w=>{b||m(w)}),()=>{b=!0}},[o,d,f]),u}function Pg({page:o,matches:d,...f}){let u=$t(),{manifest:m,routeModules:b}=im(),{basename:w}=nm(),{loaderData:M,matches:j}=Kg(),h=T.useMemo(()=>Vf(o,d,j,m,u,"data"),[o,d,j,m,u]),E=T.useMemo(()=>Vf(o,d,j,m,u,"assets"),[o,d,j,m,u]),_=T.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let Q=new Set,W=!1;if(d.forEach(V=>{let G=m.routes[V.route.id];!G||!G.hasLoader||(!h.some(ee=>ee.route.id===V.route.id)&&V.route.id in M&&b[V.route.id]?.shouldRevalidate||G.hasClientLoader?W=!0:Q.add(V.route.id))}),Q.size===0)return[];let H=Hg(o,w,"data");return W&&Q.size>0&&H.searchParams.set("_routes",d.filter(V=>Q.has(V.route.id)).map(V=>V.route.id).join(",")),[H.pathname+H.search]},[w,M,u,m,h,d,o,b]),Y=T.useMemo(()=>Qg(E,m),[E,m]),L=Wg(E);return T.createElement(T.Fragment,null,_.map(Q=>T.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...f})),Y.map(Q=>T.createElement("link",{key:Q,rel:"modulepreload",href:Q,...f})),L.map(({key:Q,link:W})=>T.createElement("link",{key:Q,nonce:f.nonce,...W})))}function Ig(...o){return d=>{o.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lm&&(window.__reactRouterVersion="7.8.2")}catch{}function e0({basename:o,children:d,window:f}){let u=T.useRef();u.current==null&&(u.current=Lh({window:f,v5Compat:!0}));let m=u.current,[b,w]=T.useState({action:m.action,location:m.location}),M=T.useCallback(j=>{T.startTransition(()=>w(j))},[w]);return T.useLayoutEffect(()=>m.listen(M),[m,M]),T.createElement(Mg,{basename:o,children:d,location:b.location,navigationType:b.action,navigator:m})}var rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sa=T.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:b,replace:w,state:M,target:j,to:h,preventScrollReset:E,viewTransition:_,...Y},L){let{basename:Q}=T.useContext(At),W=typeof h=="string"&&rm.test(h),H,V=!1;if(typeof h=="string"&&W&&(H=h,lm))try{let we=new URL(window.location.href),Ie=h.startsWith("//")?new URL(we.protocol+h):new URL(h),ut=Jt(Ie.pathname,Q);Ie.origin===we.origin&&ut!=null?h=ut+Ie.search+Ie.hash:V=!0}catch{Nt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=hg(h,{relative:m}),[ee,je,P]=Jg(u,Y),Ce=i0(h,{replace:w,state:M,target:j,preventScrollReset:E,relative:m,viewTransition:_});function Me(we){d&&d(we),we.defaultPrevented||Ce(we)}let _e=T.createElement("a",{...Y,...P,href:H||G,onClick:V||b?d:Me,ref:Ig(L,je),target:j,"data-discover":!W&&f==="render"?"true":void 0});return ee&&!W?T.createElement(T.Fragment,null,_e,T.createElement($g,{page:G})):_e});Sa.displayName="Link";var t0=T.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:b,to:w,viewTransition:M,children:j,...h},E){let _=_i(w,{relative:h.relative}),Y=$t(),L=T.useContext(er),{navigator:Q,basename:W}=T.useContext(At),H=L!=null&&c0(_)&&M===!0,V=Q.encodeLocation?Q.encodeLocation(_).pathname:_.pathname,G=Y.pathname,ee=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;f||(G=G.toLowerCase(),ee=ee?ee.toLowerCase():null,V=V.toLowerCase()),ee&&W&&(ee=Jt(ee,W)||ee);const je=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let P=G===V||!m&&G.startsWith(V)&&G.charAt(je)==="/",Ce=ee!=null&&(ee===V||!m&&ee.startsWith(V)&&ee.charAt(V.length)==="/"),Me={isActive:P,isPending:Ce,isTransitioning:H},_e=P?d:void 0,we;typeof u=="function"?we=u(Me):we=[u,P?"active":null,Ce?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof b=="function"?b(Me):b;return T.createElement(Sa,{...h,"aria-current":_e,className:we,ref:E,style:Ie,to:w,viewTransition:M},typeof j=="function"?j(Me):j)});t0.displayName="NavLink";var a0=T.forwardRef(({discover:o="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:b,method:w=Wl,action:M,onSubmit:j,relative:h,preventScrollReset:E,viewTransition:_,...Y},L)=>{let Q=o0(),W=s0(M,{relative:h}),H=w.toLowerCase()==="get"?"get":"post",V=typeof M=="string"&&rm.test(M),G=ee=>{if(j&&j(ee),ee.defaultPrevented)return;ee.preventDefault();let je=ee.nativeEvent.submitter,P=je?.getAttribute("formmethod")||w;Q(je||ee.currentTarget,{fetcherKey:d,method:P,navigate:f,replace:m,state:b,relative:h,preventScrollReset:E,viewTransition:_})};return T.createElement("form",{ref:L,method:H,action:W,onSubmit:u?j:G,...Y,"data-discover":!V&&o==="render"?"true":void 0})});a0.displayName="Form";function n0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function om(o){let d=T.useContext(Mn);return ye(d,n0(o)),d}function i0(o,{target:d,replace:f,state:u,preventScrollReset:m,relative:b,viewTransition:w}={}){let M=tr(),j=$t(),h=_i(o,{relative:b});return T.useCallback(E=>{if(kg(E,d)){E.preventDefault();let _=f!==void 0?f:Oi(j)===Oi(h);M(o,{replace:_,state:u,preventScrollReset:m,relative:b,viewTransition:w})}},[j,M,h,f,u,d,o,m,b,w])}var l0=0,r0=()=>`__${String(++l0)}__`;function o0(){let{router:o}=om("useSubmit"),{basename:d}=T.useContext(At),f=Eg();return T.useCallback(async(u,m={})=>{let{action:b,method:w,encType:M,formData:j,body:h}=Bg(u,d);if(m.navigate===!1){let E=m.fetcherKey||r0();await o.fetch(E,f,m.action||b,{preventScrollReset:m.preventScrollReset,formData:j,body:h,formMethod:m.method||w,formEncType:m.encType||M,flushSync:m.flushSync})}else await o.navigate(m.action||b,{preventScrollReset:m.preventScrollReset,formData:j,body:h,formMethod:m.method||w,formEncType:m.encType||M,replace:m.replace,state:m.state,fromRouteId:f,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,d,f])}function s0(o,{relative:d}={}){let{basename:f}=T.useContext(At),u=T.useContext(Ot);ye(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),b={..._i(o||".",{relative:d})},w=$t();if(o==null){b.search=w.search;let M=new URLSearchParams(b.search),j=M.getAll("index");if(j.some(E=>E==="")){M.delete("index"),j.filter(_=>_).forEach(_=>M.append("index",_));let E=M.toString();b.search=E?`?${E}`:""}}return(!o||o===".")&&m.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(b.pathname=b.pathname==="/"?f:Kt([f,b.pathname])),Oi(b)}function c0(o,{relative:d}={}){let f=T.useContext(Pf);ye(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=om("useViewTransitionState"),m=_i(o,{relative:d});if(!f.isTransitioning)return!1;let b=Jt(f.currentLocation.pathname,u)||f.currentLocation.pathname,w=Jt(f.nextLocation.pathname,u)||f.nextLocation.pathname;return Il(m.pathname,w)!=null||Il(m.pathname,b)!=null}const u0=()=>l.jsxs("div",{className:"program-details-page",children:[l.jsx("div",{className:"program-banner",children:l.jsxs("div",{className:"banner-content",children:[l.jsxs("h1",{children:["Master Program in Advanced",l.jsx("br",{}),"Technologies in Agriculture"]}),l.jsx("p",{className:"program-banner-subtitle",children:"Transforming Agriculture Through Innovation & Technology"})]})}),l.jsxs("div",{className:"program-content-wrapper",children:[l.jsx("div",{className:"program-content-section",children:l.jsxs("div",{className:"section-container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-seedling"})}),l.jsx("h2",{children:"Introduction"})]}),l.jsx("p",{className:"section-subtitle",children:"The Master's Program in Advanced Technologies in Agriculture aims to equip students with modern tools and knowledge to transform traditional farming practices. It integrates precision farming, automation, AI, IoT, drone tech, and sustainable innovations to build the future of smart agriculture. Students gain hands-on experience with technologies shaping global agri-systems."}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:"95%"}),l.jsx("div",{className:"stat-label",children:"Job Placement Rate"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:"50+"}),l.jsx("div",{className:"stat-label",children:"Industry Partners"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:"2"}),l.jsx("div",{className:"stat-label",children:"Years Duration"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-value",children:"24/7"}),l.jsx("div",{className:"stat-label",children:"Lab Access"})]})]}),l.jsxs("div",{className:"program-features",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-star"})}),l.jsx("h2",{children:"Program Features"})]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-laptop-code"})}),l.jsx("h4",{children:"Hands-on Training"}),l.jsx("p",{children:"Practical experience with real agricultural technology systems and equipment"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-users"})}),l.jsx("h4",{children:"Industry Mentorship"}),l.jsx("p",{children:"Direct guidance from agricultural technology professionals and experts"})]}),l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx("i",{className:"fas fa-globe"})}),l.jsx("h4",{children:"Global Network"}),l.jsx("p",{children:"Connect with international students and professionals in agri-tech"})]})]})]})]})}),l.jsx("div",{className:"program-content-section",children:l.jsxs("div",{className:"section-container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-briefcase"})}),l.jsx("h2",{children:"Career Opportunities"})]}),l.jsxs("div",{className:"career-grid",children:[l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-brain"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"AgriTech Solution Architect"}),l.jsx("p",{children:"Design comprehensive agricultural technology solutions for modern farming operations"})]})]}),l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-crosshairs"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"Precision Agriculture Specialist"}),l.jsx("p",{children:"Implement precision farming techniques using GPS, sensors, and data analytics"})]})]}),l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-robot"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"AI/ML Expert in Farming Analytics"}),l.jsx("p",{children:"Develop machine learning models for crop prediction and yield optimization"})]})]}),l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-circle"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"Drone & IoT Integration Engineer"}),l.jsx("p",{children:"Build and maintain automated drone systems for agricultural monitoring"})]})]}),l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-leaf"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"Remote Sensing & GIS Analyst"}),l.jsx("p",{children:"Analyze satellite imagery and geographic data for agricultural insights"})]})]}),l.jsxs("div",{className:"career-card",children:[l.jsx("div",{className:"career-icon",children:l.jsx("i",{className:"fas fa-flask"})}),l.jsxs("div",{className:"career-content",children:[l.jsx("h3",{children:"R&D Scientist in Sustainable AgTech"}),l.jsx("p",{children:"Research and develop sustainable agricultural technologies and practices"})]})]})]})]})}),l.jsx("div",{className:"program-content-section",children:l.jsxs("div",{className:"section-container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-book"})}),l.jsx("h2",{children:"Key Areas of Study"})]}),l.jsxs("div",{className:"areas-grid",children:[l.jsxs("div",{className:"area-card",children:[l.jsx("div",{className:"area-icon",children:l.jsx("i",{className:"fas fa-tractor"})}),l.jsx("span",{children:"Smart Farming & Precision Agriculture"})]}),l.jsxs("div",{className:"area-card",children:[l.jsx("div",{className:"area-icon",children:l.jsx("i",{className:"fas fa-satellite-dish"})}),l.jsx("span",{children:"Remote Sensing & Satellite Technologies"})]}),l.jsxs("div",{className:"area-card",children:[l.jsx("div",{className:"area-icon",children:l.jsx("i",{className:"fas fa-wifi"})}),l.jsx("span",{children:"IoT & Wireless Sensor Networks"})]}),l.jsxs("div",{className:"area-card",children:[l.jsx("div",{className:"area-icon",children:l.jsx("i",{className:"fas fa-chart-line"})}),l.jsx("span",{children:"AI & Data Science for Agriculture"})]}),l.jsxs("div",{className:"area-card",children:[l.jsx("div",{className:"area-icon",children:l.jsx("i",{className:"fas fa-drone"})}),l.jsx("span",{children:"Agri Drones and Robotics"})]}),l.jsxs("div",{className:"area-card",children:[l.jsx("div",{className:"area-icon",children:l.jsx("i",{className:"fas fa-leaf"})}),l.jsx("span",{children:"Climate-Smart Agriculture & Sustainability"})]})]}),l.jsxs("div",{className:"semester-section",children:[l.jsx("h3",{children:"Semester 1: Core Concepts & Tech Foundations"}),l.jsxs("div",{className:"syllabus-table",children:[l.jsxs("div",{className:"table-header",children:[l.jsx("div",{children:"Subject"}),l.jsx("div",{children:"Subtopics"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"Introduction to Smart Agriculture"}),l.jsx("div",{className:"subtopics",children:"Smart farms, automation, impact of emerging technologies"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"Remote Sensing & GIS in Agriculture"}),l.jsx("div",{className:"subtopics",children:"Crop mapping, NDVI, multispectral data, decision support"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"IoT for Agri Systems"}),l.jsx("div",{className:"subtopics",children:"Sensor networks, wireless data, real-time environment monitoring"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"AI & ML Fundamentals"}),l.jsx("div",{className:"subtopics",children:"Prediction models, image classification, precision inputs"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"Lab I - Smart Farm Setup"}),l.jsx("div",{className:"subtopics",children:"IoT deployment, mobile app integration, data visualization"})]})]})]}),l.jsxs("div",{className:"semester-section",children:[l.jsx("h3",{children:"Semester 2: Advanced Integration & Applications"}),l.jsxs("div",{className:"syllabus-table",children:[l.jsxs("div",{className:"table-header",children:[l.jsx("div",{children:"Subject"}),l.jsx("div",{children:"Subtopics"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"Agri Drones & Robotics"}),l.jsx("div",{className:"subtopics",children:"UAV tech, robotic seeding/harvesting, automation in the field"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"Big Data & Predictive Analytics"}),l.jsx("div",{className:"subtopics",children:"Cloud storage, pattern analysis, crop yield prediction models"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"Sustainable & Climate-Smart Agriculture"}),l.jsx("div",{className:"subtopics",children:"Water use efficiency, carbon reduction, regenerative practices"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"AgriTech Entrepreneurship"}),l.jsx("div",{className:"subtopics",children:"Startup building, innovation in food-tech, funding opportunities"})]}),l.jsxs("div",{className:"table-row",children:[l.jsx("div",{className:"subject",children:"Capstone Project"}),l.jsx("div",{className:"subtopics",children:"Tech-enabled solution to real-life agriculture problem"})]})]})]}),l.jsxs("div",{className:"admission-requirements",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("div",{className:"section-icon",children:l.jsx("i",{className:"fas fa-clipboard-check"})}),l.jsx("h2",{children:"Admission Requirements"})]}),l.jsxs("ul",{className:"requirements-list",children:[l.jsx("li",{children:"Bachelor's degree in Agriculture, Engineering, or related field"}),l.jsx("li",{children:"Minimum 60% marks in qualifying examination"}),l.jsx("li",{children:"Proficiency in English language"}),l.jsx("li",{children:"Basic knowledge of computer applications"}),l.jsx("li",{children:"Statement of Purpose (500-1000 words)"}),l.jsx("li",{children:"Two letters of recommendation"}),l.jsx("li",{children:"Resume/CV highlighting relevant experience"})]})]})]})}),l.jsx("div",{className:"program-content-section",children:l.jsx("div",{className:"section-container",children:l.jsx("div",{className:"apply-section",children:l.jsxs("div",{className:"apply-content",children:[l.jsx("h3",{children:"Ready to Transform Agriculture?"}),l.jsx("p",{children:"Join the next generation of agricultural innovators and shape the future of farming with cutting-edge technology."}),l.jsxs("button",{className:"apply-button",children:["APPLY NOW",l.jsx("i",{className:"fas fa-arrow-right"})]})]})})})})]})]}),d0=()=>l.jsx("style",{children:`
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
    `}),f0=()=>(T.useEffect(()=>{const o=document.createElement("link");o.rel="stylesheet",o.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(o);const d=document.createElement("link");return d.rel="stylesheet",d.href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",document.head.appendChild(d),()=>{document.head.removeChild(o),document.head.removeChild(d)}},[]),null),m0=({activePage:o})=>{const[d,f]=T.useState(!1),u=tr(),m=b=>{f(!1),u(b)};return l.jsx("header",{className:"header",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"logo-container",onClick:()=>m("/home"),children:[l.jsx("img",{src:"https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png",alt:"IGT Logo",className:"logo-crest"}),l.jsxs("div",{className:"logo-text-container",children:[l.jsx("h1",{className:"logo-title",children:"INSTITUTE OF GLOBAL TECHNOLOGY"}),l.jsx("p",{className:"logo-tagline",children:"Gateway to Excellence in Education"})]})]}),l.jsx("nav",{children:l.jsxs("ul",{className:d?"active":"",children:[l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/home"),className:`nav-link ${o==="/home"?"active":""}`,children:"Home"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/programs"),className:`nav-link ${o==="/programs"?"active":""}`,children:"Programs"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/departments"),className:`nav-link ${o==="/departments"?"active":""}`,children:"Departments"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/faculty"),className:`nav-link ${o==="/faculty"?"active":""}`,children:"Faculty"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/admissions"),className:`nav-link ${o==="/admissions"?"active":""}`,children:"Admissions"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>m("/contact"),className:`nav-link ${o==="/contact"?"active":""}`,children:"Contact"})})]})}),l.jsx("button",{className:"menu-toggle",onClick:()=>f(!d),"aria-label":"Open Menu",children:l.jsx("i",{className:"fas fa-bars"})})]})})},p0=()=>l.jsx("section",{id:"hero",className:"hero",children:l.jsxs("div",{className:"hero-content",children:[l.jsxs("div",{className:"hero-title-glance",children:[l.jsx("div",{className:"glance-line",children:l.jsx("span",{className:"glance-label",children:"WELCOME TO"})}),l.jsx("div",{className:"glance-line",children:l.jsx("span",{className:"glance-main",children:"INSTITUTE OF"})}),l.jsx("div",{className:"glance-line",children:l.jsx("span",{className:"glance-main",children:"GLOBAL TECHNOLOGY"})})]}),l.jsxs("div",{className:"hero-glance-content",children:[l.jsx("div",{className:"hero-description",children:l.jsx("p",{children:"Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future."})}),l.jsx("div",{className:"hero-accredited",children:"ACCREDITED BY AIAB EUROPE"})]})]})}),h0=()=>l.jsx("section",{id:"about",className:"about",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"ABOUT INSTITUTE OF GLOBAL TECHNOLOGY"}),l.jsx("p",{className:"section-subtitle",children:"Discover our mission, vision, and values that guide us in providing exceptional technology education"}),l.jsxs("div",{className:"about-grid",children:[l.jsx("div",{className:"about-image",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Institute of Global Technology Campus"})}),l.jsxs("div",{className:"about-content",children:[l.jsx("h3",{children:"Transforming Technology Education Since 2005"}),l.jsx("p",{children:"The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success."}),l.jsx("p",{children:"Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies."}),l.jsx("p",{className:"accredited-text",children:"ACCREDITED BY AIAB EUROPE"}),l.jsxs("div",{className:"stats-container",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"number",children:"6000+"}),l.jsx("div",{className:"label",children:"STUDENTS"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"number",children:"300+"}),l.jsx("div",{className:"label",children:"FACULTY"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"number",children:"60+"}),l.jsx("div",{className:"label",children:"PROGRAMS"})]})]})]})]})]})}),g0=()=>l.jsx("section",{id:"why-choose-us",className:"why-choose-us",children:l.jsxs("div",{className:"container",children:[l.jsxs("h2",{children:["Why Choose Us",l.jsx("span",{className:"question-mark",children:"?"})]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Industrial Partners"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"100+ Industrial Partners"}),l.jsx("p",{children:"Strong collaborations with leading technology companies for research and placements."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Expert Faculty"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Learn from Experts"}),l.jsx("p",{children:"Instruction from national and international experts in their respective fields."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Placement Support"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Placement Assistance"}),l.jsx("p",{children:"Complete placement support with career counseling and interview preparation."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Advanced Research"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Advanced Research"}),l.jsx("p",{children:"Opportunities to work on innovative research projects with commercialization potential."})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Entrepreneurship Support"}),l.jsxs("div",{className:"feature-content",children:[l.jsx("h3",{children:"Entrepreneurship Support"}),l.jsx("p",{children:"Incubation center and mentorship for student startups and innovations."})]})]})]})]})}),Zf=[{category:"Precision Agriculture",subtitle:"Innovative programs combining technology with modern agricultural practices",courses:[{title:"MASTER PROGRAM in Precision Agriculture",image:"https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg",duration:"12 Months",description:"Master data-driven farming techniques using IoT, sensors, and AI for crop optimization. Learn advanced soil monitoring, weather prediction, and automated irrigation systems to maximize crop yields while minimizing resource waste."},{title:"MASTER PROGRAM in Agriculture Drones",image:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring."},{title:"MASTER PROGRAM in Hydroponics & Vertical Farming",image:"https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg",duration:"12 Months",description:"Learn sustainable farming techniques without soil in controlled environments. Master nutrient solution management, climate control systems, and vertical stacking technologies for urban agriculture."},{title:"MASTER PROGRAM in AI & ML in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg",duration:"12 Months",description:"Apply artificial intelligence and machine learning to solve agricultural challenges. Master predictive analytics for crop diseases, yield forecasting, and resource optimization."},{title:"MASTER PROGRAM in Agriculture Robotics",image:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",duration:"12 Months",description:"Develop and implement robotic solutions for planting, harvesting, and farm automation. Master robotic arm programming, computer vision integration, and autonomous navigation systems."},{title:"MASTER PROGRAM in Advanced Technologies in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp",duration:"12 Months",description:"Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement."},{title:"MASTER PROGRAM in Agri Entrepreneurship",image:"https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business skills specific to agricultural ventures and startups. Master market analysis, financial planning, and sustainable business models for agribusiness."}]},{category:"AI & Robotics",subtitle:"Specialized programs in artificial intelligence and robotic systems",courses:[{title:"MASTER PROGRAM in AI & Robotics",image:"https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg",duration:"12 Months",description:"Comprehensive training in AI-driven robotic systems and automation. Master machine learning algorithms for robotic control and autonomous decision-making in industrial applications."},{title:"MASTER PROGRAM in Generative AI",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation."},{title:"MASTER PROGRAM in AI & Blockchain",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the convergence of AI and decentralized blockchain technologies. Master smart contract development, AI-powered blockchain analytics, and decentralized AI systems for secure applications."},{title:"MASTER PROGRAM in AI & Data Analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI techniques to extract insights from complex datasets. Master predictive modeling, statistical analysis, and machine learning algorithms for business intelligence and decision-making."},{title:"MASTER PROGRAM in AI & Biological Sciences",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development."},{title:"MASTER PROGRAM in AI & Cybersecurity Systems",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop AI-powered solutions for cybersecurity threats and vulnerabilities. Master threat detection algorithms, anomaly identification, and automated security response systems for network protection."}]},{category:"AI & Business",subtitle:"Programs at the intersection of artificial intelligence and business applications",courses:[{title:"MASTER PROGRAM in AI & Business",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Transform business operations with AI-driven strategies and solutions. Master process automation, customer analytics, and AI-powered decision support systems for competitive advantage."},{title:"MASTER PROGRAM in AI & Management Studies",image:"https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg",duration:"12 Months",description:"Apply AI to organizational leadership, decision-making, and strategy. Master AI-driven management tools, predictive analytics for strategic planning, and intelligent automation for operational efficiency."},{title:"MASTER PROGRAM in AI & Law",image:"https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg",duration:"12 Months",description:"Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies."},{title:"MASTER PROGRAM in IP Law",image:"https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg",duration:"12 Months",description:"Specialize in intellectual property law for technology and innovation. Master patent law, copyright protection, and trademark strategies for emerging technologies and digital assets."},{title:"MASTER PROGRAM in AI & Marketing",image:"https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg",duration:"12 Months",description:"Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns."}]},{category:"Healthcare & Life Sciences",subtitle:"Programs at the intersection of technology and life sciences",courses:[{title:"MASTER PROGRAM in Clinical Research & Regulatory Affairs",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets."},{title:"MASTER PROGRAM in Medical Coding",image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg",duration:"12 Months",description:"Learn standardized coding systems for healthcare documentation. Master ICD-10, CPT coding, and healthcare billing systems for accurate medical record management and insurance processing."},{title:"MASTER PROGRAM in Digital Forensics",image:"https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af",duration:"12 Months",description:"Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution."},{title:"MASTER PROGRAM in Industrial Fermentation Technology",image:"https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master microbial processes for food, pharmaceuticals, and biofuels. Learn bioreactor design, process optimization, and quality control for large-scale fermentation operations."},{title:"MASTER PROGRAM in Vaccine Technology",image:"https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png",duration:"12 Months",description:"Study vaccine development, production, and quality control. Master vaccine formulation, manufacturing processes, and regulatory standards for safe and effective immunization products."},{title:"MASTER PROGRAM in Bioentrepreneurship",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies."}]},{category:"AI & Creative Technologies",subtitle:"Programs combining artificial intelligence with creative disciplines",courses:[{title:"MASTER PROGRAM in AI & Designing Technology",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products."},{title:"MASTER PROGRAM in AI & Arts",image:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression."}]},{category:"Emerging Technologies & Smart Systems",subtitle:"Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",courses:[{title:"Reality Architect: Master of AR/VR/XR Development",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master immersive technologies to build future-ready AR, VR, and XR applications. Learn 3D modeling, spatial computing, and interactive design for creating engaging virtual experiences."},{title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",image:"https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",duration:"12 Months",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions."},{title:"Game Changer: Master Program in XR Gaming",image:"https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg",duration:"12 Months",description:"Design and develop immersive games using XR technology and gamification strategy. Master game engine development, 3D asset creation, and interactive storytelling for next-generation gaming experiences."},{title:"Master Program in AR and Mixed Reality",image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",duration:"12 Months",description:"Specialize in designing cutting-edge MR life environments and interfaces. Master spatial computing, gesture recognition, and environmental mapping for seamless mixed reality experiences."},{title:"Master Program in Electric Vehicle Technology",image:"https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png",duration:"12 Months",description:"Learn about EV systems, battery design, automatic mobility, and energy management. Master electric powertrain design, battery management systems, and smart charging infrastructure for sustainable transportation."},{title:"Master Program in IoT and Embedded Systems",image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp",duration:"12 Months",description:"Build connected smart devices with microcontrollers, sensors, and communication protocols. Master embedded software development, wireless communication, and cloud integration for smart city and industrial IoT applications."},{title:"Master Program in Human-Computer Interaction",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Focus on designing intuitive interfaces, enhancing user experiences, and usability testing. Master user research methodologies, interaction design principles, and accessibility standards for inclusive digital products."}]},{category:"Doctoral & Postdoctoral Programs",subtitle:"Advanced research programs for scholars and fellows in science, engineering, and humanities",courses:[{title:"Doctoral Programs",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Varies",description:"Research-focused degrees in multiple disciplines:",list:["PhD in Engineering in ICT disciplines","PhD in Science and Mathematics","PhD in Humanities, Social Science and Design"]},{title:"Postdoctoral Programs",image:"https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Flexible",description:"Postdoctoral fellowships in emerging domains:",list:["Wireless Communications, Embedded Systems","AI, ML, and Information Security","5G/6G, Robotics, VLSI, NLP, Adversarial ML"]}]}],x0=({course:o})=>{const d=tr(),f=()=>{const u=o.title.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");d(`/program/${u}`,{state:{program:o}})};return l.jsxs("div",{className:"program-card",children:[l.jsx("img",{src:o.image,alt:o.title,className:"program-card-image"}),l.jsxs("div",{className:"program-card-content",children:[l.jsx("h4",{children:o.title}),l.jsxs("div",{className:"program-card-duration",children:[l.jsx("i",{className:"far fa-clock"}),o.duration]}),l.jsxs("div",{className:"program-card-description",children:[o.description,o.list&&l.jsx("ul",{children:o.list.map((u,m)=>l.jsx("li",{children:u},m))})]}),l.jsxs("div",{className:"program-card-buttons",children:[l.jsx("button",{className:"btn btn-details",onClick:f,children:"Details"}),l.jsx("button",{className:"btn btn-apply ag-btn-apply",children:"Apply"})]})]})]})},b0=()=>{const[o,d]=T.useState(""),[f,u]=T.useState("all"),m=Zf.map(b=>({...b,courses:b.courses.filter(w=>(f==="all"||b.category===f)&&w.title.toLowerCase().includes(o.toLowerCase()))})).filter(b=>b.courses.length>0);return l.jsxs("section",{id:"programs",className:"programs-page",children:[l.jsx("div",{className:"page-banner programs-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Transform Your Future"}),l.jsx("p",{children:"Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market."})]})}),l.jsx("div",{className:"search-filter-section",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"search-filter-container",children:[l.jsxs("div",{className:"search-box",children:[l.jsx("i",{className:"fas fa-search"}),l.jsx("input",{type:"text",placeholder:"Search programs...",value:o,onChange:b=>d(b.target.value),"aria-label":"Search programs"})]}),l.jsx("div",{className:"category-filter",children:l.jsxs("select",{value:f,onChange:b=>u(b.target.value),"aria-label":"Filter by category",children:[l.jsx("option",{value:"all",children:"All Categories"}),Zf.map((b,w)=>l.jsx("option",{value:b.category,children:b.category},w))]})})]})})}),m.length>0?m.map((b,w)=>l.jsx("div",{className:"program-category",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"category-header",children:[l.jsx("h3",{children:b.category}),l.jsx("p",{children:b.subtitle})]}),l.jsx("div",{className:"program-cards-grid",children:b.courses.map((M,j)=>l.jsx(x0,{course:M},`${M.title}-${j}`))})]})},`${b.category}-${w}`)):l.jsxs("div",{className:"container no-results-container",children:[l.jsx("h3",{className:"no-results-title",children:"No programs found"}),l.jsx("p",{className:"no-results-message",children:"Try adjusting your search terms or category filter to find what you're looking for."}),l.jsx("button",{onClick:()=>{d(""),u("all")},className:"clear-filters-btn",children:"Clear Filters"})]}),l.jsxs("div",{className:"admissions-cta",children:[l.jsx("h3",{children:"Ready to take the next step?"}),l.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),l.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),l.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})},v0=()=>l.jsxs("section",{className:"admissions-page",children:[l.jsx("div",{className:"admissions-journey-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Begin Your Academic Journey"}),l.jsx("p",{children:"Join our community of innovators and thought leaders"})]})}),l.jsx("div",{className:"admissions-section",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{className:"section-title",children:"Admissions Process"}),l.jsx("p",{className:"section-tagline",children:"Our streamlined admission process makes it easy to join our academic community"}),l.jsxs("div",{className:"process-grid",children:[l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"1"}),l.jsx("h3",{children:"Application"}),l.jsx("p",{children:"Submit your online application along with required documents through our portal."}),l.jsx("a",{href:"#",className:"process-btn",children:"Apply Now →"})]}),l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"2"}),l.jsx("h3",{children:"Review"}),l.jsx("p",{children:"Our admissions committee will carefully evaluate your application and credentials."}),l.jsx("a",{href:"#",className:"process-btn",children:"Learn More →"})]}),l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"3"}),l.jsx("h3",{children:"Interview"}),l.jsx("p",{children:"Selected candidates will be invited for an interview (in-person or virtual)."}),l.jsx("a",{href:"#",className:"process-btn",children:"Prepare →"})]}),l.jsxs("div",{className:"process-card",children:[l.jsx("div",{className:"process-number",children:"4"}),l.jsx("h3",{children:"Decision"}),l.jsx("p",{children:"Receive your admission decision within 2-4 weeks of your interview."}),l.jsx("a",{href:"#",className:"process-btn",children:"Timeline →"})]})]}),l.jsx("h2",{className:"section-title",children:"Admission Details"}),l.jsx("p",{className:"section-tagline",children:"Key information to help you prepare your application"}),l.jsxs("div",{className:"details-grid",children:[l.jsxs("div",{className:"details-card",children:[l.jsxs("h3",{children:[l.jsx("span",{className:"details-icon",children:l.jsx("i",{className:"fas fa-file-alt"})}),"Application Requirements"]}),l.jsxs("ul",{className:"details-list",children:[l.jsx("li",{children:"Completed online application form"}),l.jsx("li",{children:"Bachelor's degree in relevant field with minimum 50% marks"}),l.jsx("li",{children:"Statement of purpose (500-1000 words)"}),l.jsx("li",{children:"Two letters of recommendation"}),l.jsx("li",{children:"Professional resume/CV"}),l.jsx("li",{children:"Application fee (waivers available)"})]}),l.jsx("a",{href:"#",className:"details-btn btn-red",children:"Download Checklist"})]}),l.jsxs("div",{className:"details-card important-dates",children:[l.jsxs("h3",{children:[l.jsx("span",{className:"details-icon",children:l.jsx("i",{className:"fas fa-calendar-alt"})}),"Important Dates"]}),l.jsxs("ul",{className:"details-list",children:[l.jsx("li",{children:"Jul 15 Fall Semester Deadline"}),l.jsx("li",{children:"Nov 15 Spring Semester Deadline"}),l.jsx("li",{children:"Apr 15 Summer Semester Deadline"}),l.jsx("li",{children:"Dec 1 Early Decision Deadline"}),l.jsx("li",{children:"Aug 20-25 Orientation Week"})]}),l.jsx("a",{href:"#",className:"details-btn btn-red",children:"Add to Calendar"})]}),l.jsxs("div",{className:"details-card",children:[l.jsxs("h3",{children:[l.jsx("span",{className:"details-icon",children:l.jsx("i",{className:"fas fa-university"})}),"Tuition & Financial Aid"]}),l.jsxs("ul",{className:"details-list",children:[l.jsx("li",{children:"Tuition: ₹1,50,000 per semester"}),l.jsx("li",{children:"Merit-based scholarships available"}),l.jsx("li",{children:"Research and teaching assistantships"}),l.jsx("li",{children:"Education loan partnerships"}),l.jsx("li",{children:"Flexible payment plans"})]}),l.jsx("a",{href:"#",className:"details-btn btn-red",children:"Financial Aid Information"})]})]}),l.jsxs("div",{className:"admissions-cta",children:[l.jsx("h3",{children:"Ready to take the next step?"}),l.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),l.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),l.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})})]}),y0=()=>{const[o,d]=T.useState(""),[f,u]=T.useState(!1),[m,b]=T.useState({name:"",email:"",phone:"",subject:"",message:""}),w=j=>{const{name:h,value:E}=j.target;b(_=>({..._,[h]:E}))},M=async j=>{if(j.preventDefault(),!m.name.trim()){d("Please enter your name."),setTimeout(()=>d(""),5e3);return}if(!m.email.trim()){d("Please enter your email address."),setTimeout(()=>d(""),5e3);return}if(!m.message.trim()){d("Please enter your message."),setTimeout(()=>d(""),5e3);return}if(!m.email.includes("@")){d("Please enter a valid email address."),setTimeout(()=>d(""),5e3);return}u(!0);try{await new Promise(h=>setTimeout(h,1500)),d("Your message has been sent successfully! We will get back to you soon."),b({name:"",email:"",phone:"",subject:"",message:""}),j.target.reset()}catch{d("Sorry, there was an error sending your message. Please try again.")}finally{u(!1),setTimeout(()=>d(""),5e3)}};return l.jsxs("section",{className:"form-page",children:[l.jsx("div",{className:"page-banner contact-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Get In Touch"}),l.jsx("p",{children:"We're here to help and answer any question you might have."})]})}),l.jsx("div",{className:"container",children:l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-info",children:[l.jsx("h3",{children:"Contact Information"}),l.jsx("p",{children:"Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below."}),l.jsxs("div",{className:"info-item",children:[l.jsx("div",{className:"info-icon",children:l.jsx("i",{className:"fas fa-map-marker-alt"})}),l.jsxs("div",{className:"info-content",children:[l.jsx("strong",{children:"Address"}),l.jsx("span",{children:"REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11."})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("div",{className:"info-icon",children:l.jsx("i",{className:"fas fa-envelope"})}),l.jsxs("div",{className:"info-content",children:[l.jsx("strong",{children:"Email"}),l.jsx("span",{children:"admissions@igt.edu.in"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("div",{className:"info-icon",children:l.jsx("i",{className:"fas fa-clock"})}),l.jsxs("div",{className:"info-content",children:[l.jsx("strong",{children:"Timing"}),l.jsx("span",{children:"Mon - Sat: 9:00 AM - 5:30 PM"})]})]}),l.jsx("div",{className:"info-item special",children:l.jsx("strong",{children:"A UNIT OF BRC"})}),l.jsxs("div",{className:"social-icons",children:[l.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:l.jsx("i",{className:"fab fa-facebook-f"})}),l.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:l.jsx("i",{className:"fab fa-twitter"})}),l.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:l.jsx("i",{className:"fab fa-linkedin-in"})}),l.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:l.jsx("i",{className:"fab fa-instagram"})}),l.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:l.jsx("i",{className:"fab fa-youtube"})})]})]}),l.jsxs("div",{className:"form-container",children:[l.jsx("h3",{children:"Send Us a Message"}),l.jsxs("form",{onSubmit:M,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"name",children:"Your Name"}),l.jsx("input",{type:"text",id:"name",name:"name",value:m.name,onChange:w,required:!0,placeholder:"Enter your full name"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",name:"email",value:m.email,onChange:w,required:!0,placeholder:"Enter your email address"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"phone",children:"Phone Number"}),l.jsx("input",{type:"tel",id:"phone",name:"phone",value:m.phone,onChange:w,placeholder:"Enter your phone number"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"subject",children:"Subject"}),l.jsx("input",{type:"text",id:"subject",name:"subject",value:m.subject,onChange:w,placeholder:"What is this regarding?"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"message",children:"Your Message"}),l.jsx("textarea",{id:"message",name:"message",value:m.message,onChange:w,required:!0,placeholder:"Tell us how we can help you",rows:5})]}),l.jsx("button",{type:"submit",className:"submit-btn",disabled:f,children:f?l.jsxs(l.Fragment,{children:[l.jsx("i",{className:"fas fa-spinner fa-spin"}),"Sending..."]}):"Send Message"}),o&&l.jsx("div",{className:`form-message ${o.includes("error")?"error":"success"}`,children:o})]})]})]})})]})},j0=()=>{const[o,d]=T.useState(""),f=u=>{u.preventDefault(),d("Your tour has been scheduled successfully!"),setTimeout(()=>d(""),5e3),u.target.reset()};return l.jsxs("section",{className:"form-page",children:[l.jsx("div",{className:"page-banner tour-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Schedule a Campus Tour"}),l.jsx("p",{children:"We would love to show you around our campus."})]})}),l.jsx("div",{className:"container",children:l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-info",children:[l.jsx("h3",{children:"Visit Us"}),l.jsx("p",{children:"Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT."}),l.jsxs("div",{className:"info-item",children:[l.jsxs("strong",{children:[l.jsx("i",{className:"fas fa-clock"})," Tour Hours"]}),l.jsx("span",{children:"Monday - Friday: 10:00 AM - 4:00 PM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsxs("strong",{children:[l.jsx("i",{className:"fas fa-map-marker-alt"})," Location"]}),l.jsx("span",{children:"123 Tech Avenue, Innovation City"})]})]}),l.jsxs("div",{className:"form-container",children:[l.jsx("h3",{children:"Book Your Visit"}),l.jsxs("form",{onSubmit:f,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"name",children:"Your Name"}),l.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"date",children:"Preferred Date"}),l.jsx("input",{type:"date",id:"date",name:"date",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"time",children:"Preferred Time"}),l.jsx("input",{type:"time",id:"time",name:"time",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{htmlFor:"guests",children:"Number of Guests"}),l.jsxs("select",{id:"guests",name:"guests",children:[l.jsx("option",{children:"1"}),l.jsx("option",{children:"2"}),l.jsx("option",{children:"3"}),l.jsx("option",{children:"4"}),l.jsx("option",{children:"5+"})]})]}),l.jsx("button",{type:"submit",className:"submit-btn",children:"Schedule Tour"}),o&&l.jsx("div",{className:"form-message success",children:o})]})]})]})})]})},S0=()=>l.jsx("section",{id:"academic-programs",className:"academic-programs",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Our Academic Programs"}),l.jsx("p",{className:"section-subtitle",children:"Explore our diverse range of postgraduate diploma programs in emerging technologies"}),l.jsxs("div",{className:"programs-grid",children:[l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg",alt:"AI & Management"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"EU ACC Certificate Program in AI & Management"}),l.jsx("p",{children:"Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques."}),l.jsx("button",{className:"btn-details",children:"Details"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-certificate"}),l.jsx("span",{children:"Certificate Program"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"1st Sep - 30th Sep 2025"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"AR VR Technology"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"EU ACC Master Program in AR & VR Technology"}),l.jsx("p",{children:"Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design."}),l.jsx("button",{className:"btn-details",children:"Details"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-building"}),l.jsx("span",{children:"100+ Industrial Partners"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-hands-helping"}),l.jsx("span",{children:"10+ Hands-on Projects"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Agri Drones"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"MASTER PROGRAM in Agri Drones"}),l.jsx("p",{children:"Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making."}),l.jsx("button",{className:"btn-details",children:"Details"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-graduation-cap"}),l.jsx("span",{children:"MASTER PROGRAM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"MASTER PROGRAM in Medical Robotics"}),l.jsx("p",{children:"Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration."}),l.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-graduation-cap"}),l.jsx("span",{children:"MASTER PROGRAM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]})]})]}),l.jsxs("div",{className:"program-card",children:[l.jsx("div",{className:"program-visual",children:l.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agri Robotics"})}),l.jsxs("div",{className:"program-content",children:[l.jsx("h4",{children:"MASTER PROGRAM in Agri Robotics"}),l.jsx("p",{children:"Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems."}),l.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),l.jsxs("div",{className:"program-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-graduation-cap"}),l.jsx("span",{children:"MASTER PROGRAM"})]}),l.jsxs("div",{className:"info-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]})]})]})]})]})}),w0=()=>l.jsx("section",{id:"upcoming-courses",className:"upcoming-courses",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"courses-header",children:[l.jsx("div",{className:"expand-knowledge",children:"EXPAND YOUR KNOWLEDGE"}),l.jsx("h2",{children:"Upcoming Courses"}),l.jsx("p",{className:"section-subtitle",children:"Discover our latest course offerings designed to keep you at the forefront of technology"})]}),l.jsxs("div",{className:"courses-grid",children:[l.jsxs("div",{className:"course-card featured",children:[l.jsxs("div",{className:"course-image",children:[l.jsx("img",{src:"https://agmay.in/images/manufacturing.webp",alt:"Drone Manufacturing"}),l.jsx("div",{className:"course-badge",children:"Featured"})]}),l.jsxs("div",{className:"course-content",children:[l.jsx("h3",{children:"MASTER PROGRAM in Drone Manufacturing"}),l.jsx("p",{children:"Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training."}),l.jsxs("div",{className:"course-status",children:[l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"Coming soon"})]}),l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]}),l.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),l.jsxs("div",{className:"course-card",children:[l.jsxs("div",{className:"course-image",children:[l.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"}),l.jsx("div",{className:"course-badge",children:"Popular"})]}),l.jsxs("div",{className:"course-content",children:[l.jsx("h3",{children:"MASTER PROGRAM in Medical Robotics"}),l.jsx("p",{children:"Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics."}),l.jsxs("div",{className:"course-status",children:[l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"Coming soon"})]}),l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]}),l.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),l.jsxs("div",{className:"course-card",children:[l.jsxs("div",{className:"course-image",children:[l.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agriculture Robotics"}),l.jsx("div",{className:"course-badge",children:"New"})]}),l.jsxs("div",{className:"course-content",children:[l.jsx("h3",{children:"MASTER PROGRAM in Agriculture Robotics"}),l.jsx("p",{children:"Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques."}),l.jsxs("div",{className:"course-status",children:[l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-calendar-alt"}),l.jsx("span",{children:"Coming soon"})]}),l.jsxs("div",{className:"status-item",children:[l.jsx("i",{className:"fas fa-clock"}),l.jsx("span",{children:"12 Months"})]})]}),l.jsx("button",{className:"btn-details-blue",children:"Details"})]})]})]}),l.jsx("div",{className:"view-all-courses",children:l.jsx("button",{className:"btn-view-all",children:"View All Upcoming Courses"})})]})}),N0=()=>l.jsx("section",{id:"research",className:"research-projects",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Our Ongoing Research Projects"}),l.jsx("p",{className:"section-subtitle",children:"Explore our cutting-edge research initiatives across various technology domains"}),l.jsxs("div",{className:"research-grid",children:[l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI-Powered Predictive Maintenance"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"AI-Powered Predictive Maintenance"}),l.jsx("p",{children:"Developing AI models for predictive maintenance of industrial equipment to reduce downtime."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conversational AI Assistant"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Conversational AI Assistant"}),l.jsx("p",{children:"Creating an AI assistant for mental health support and counseling services."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=",alt:"Automated Disease Detection"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Automated Disease Detection"}),l.jsx("p",{children:"Using deep learning for automated detection of diseases in medical images."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Point-of-Care Diagnostic Device"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Point-of-Care Diagnostic Device"}),l.jsx("p",{children:"Developing portable diagnostic tools for rapid detection of infectious diseases."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Smart Grid Systems"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"Smart Grid Systems"}),l.jsx("p",{children:"Creating intelligent grid systems for efficient energy distribution and management."})]})]}),l.jsxs("div",{className:"research-card",children:[l.jsx("img",{src:"https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=",alt:"EV Charging Infrastructure"}),l.jsxs("div",{className:"research-card-content",children:[l.jsx("h3",{children:"EV Charging Infrastructure"}),l.jsx("p",{children:"Designing urban electric vehicle charging networks for sustainable transportation."})]})]})]})]})}),A0=()=>{const[o,d]=T.useState("conferences"),f=()=>{switch(o){case"conferences":return l.jsxs("div",{className:"events-grid",children:[l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conference Hall"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"International Conference on AI & Robotics"}),l.jsx("p",{children:"Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-map-marker-alt"}),l.jsx("span",{children:"Virtual & On-campus"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"People collaborating"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Tech for Sustainable Development"}),l.jsx("p",{children:"Exploring technological solutions for achieving sustainable development goals."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-map-marker-alt"}),l.jsx("span",{children:"Main Campus"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agri-Tech"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Future of Agri-Tech"}),l.jsx("p",{children:"Conference focusing on emerging technologies in agriculture and food production."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-map-marker-alt"}),l.jsx("span",{children:"Agricultural Research Center"})]})]})]})]});case"webinars":return l.jsxs("div",{className:"events-grid",children:[l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone in flight"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Introduction to Drone Technology"}),l.jsx("p",{children:"Free webinar covering basics of drone technology and its industrial applications."})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI and ML concept"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Career in AI & ML"}),l.jsx("p",{children:"Webinar discussing career opportunities and skill requirements in AI/ML fields."})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Precision agriculture"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Precision Agriculture Techniques"}),l.jsx("p",{children:"Learn about modern precision farming methods using IoT and data analytics."})]})]})]});case"courses":return l.jsxs("div",{className:"events-grid",children:[l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone piloting"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"Certificate in Drone Piloting"}),l.jsx("p",{children:"3-month program covering drone operation, regulations, and commercial applications."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-check-circle"}),l.jsx("span",{children:"DGCA Approved"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Business analytics dashboard"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"AI for Business Professionals"}),l.jsx("p",{children:"6-week certificate course on AI applications for non-technical business leaders."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-check-circle"}),l.jsx("span",{children:"Industry Recognized"})]})]})]}),l.jsxs("div",{className:"event-card",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"IoT circuit board"}),l.jsxs("div",{className:"event-card-content",children:[l.jsx("h3",{children:"IoT Fundamentals"}),l.jsx("p",{children:"8-week hands-on course on Internet of Things concepts and implementation."}),l.jsxs("div",{className:"event-card-info",children:[l.jsx("i",{className:"fas fa-check-circle"}),l.jsx("span",{children:"With Lab Access"})]})]})]})]});default:return null}};return l.jsx("section",{id:"events",className:"events-section",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Conferences, Webinars & Certificate Courses"}),l.jsx("p",{className:"section-subtitle",children:"Participate in our knowledge-sharing events and short-term certification programs"}),l.jsxs("div",{className:"events-tabs",children:[l.jsx("button",{onClick:()=>d("conferences"),className:`tab-btn ${o==="conferences"?"active":""}`,children:"Conferences"}),l.jsx("button",{onClick:()=>d("webinars"),className:`tab-btn ${o==="webinars"?"active":""}`,children:"Webinars"}),l.jsx("button",{onClick:()=>d("courses"),className:`tab-btn ${o==="courses"?"active":""}`,children:"Certificate Courses"})]}),f()]})})},E0=()=>{const[o,d]=T.useState(""),f=m=>{m.preventDefault(),d("Thank you for subscribing!"),setTimeout(()=>d(""),5e3),m.target.reset()},u=new Date().getFullYear();return l.jsx("footer",{id:"contact",className:"site-footer",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"About Institute of Global Technology"}),l.jsx("p",{children:"Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields."}),l.jsx("p",{children:l.jsx("strong",{children:"Accredited by AIAB Europe"})}),l.jsxs("div",{className:"social-icons",children:[l.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:l.jsx("i",{className:"fab fa-facebook-f"})}),l.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:l.jsx("i",{className:"fab fa-twitter"})}),l.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:l.jsx("i",{className:"fab fa-linkedin-in"})}),l.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:l.jsx("i",{className:"fab fa-instagram"})}),l.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:l.jsx("i",{className:"fab fa-youtube"})})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Quick Links"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx(Sa,{to:"/home",className:"footer-nav-link",children:"Home"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/programs",className:"footer-nav-link",children:"Academic Programs"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/departments",className:"footer-nav-link",children:"Research Departments"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/faculty",className:"footer-nav-link",children:"Faculty"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/admissions",className:"footer-nav-link",children:"Admissions"})}),l.jsx("li",{children:l.jsx(Sa,{to:"/contact",className:"footer-nav-link",children:"Contact"})})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Academic Programs"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Robotics & AI"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Precision Agriculture"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Drone Technology"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Healthcare & Life Sciences"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Emerging Technologies"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"footer-nav-link",children:"Research Opportunities"})})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Newsletter"}),l.jsx("p",{children:"Subscribe to our newsletter to receive updates on events, admissions, and institute news."}),l.jsxs("form",{className:"newsletter-form",onSubmit:f,children:[l.jsx("input",{type:"email",placeholder:"Enter your email address",required:!0,"aria-label":"Email address for newsletter"}),l.jsx("button",{type:"submit","aria-label":"Subscribe to newsletter",children:l.jsx("i",{className:"fas fa-paper-plane"})})]}),o&&l.jsx("p",{className:"newsletter-message",children:o}),l.jsx("p",{className:"newsletter-note",children:"We respect your privacy. Unsubscribe at any time."})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsxs("div",{className:"footer-bottom-content",children:[l.jsxs("span",{children:["© ",u," Institute of Global Technology. All Rights Reserved."]}),l.jsxs("div",{className:"footer-bottom-links",children:[l.jsx("a",{href:"#","aria-label":"Terms of Use",children:"Terms of Use"}),l.jsx("a",{href:"#","aria-label":"Privacy Policy",children:"Privacy Policy"}),l.jsx("a",{href:"#","aria-label":"Accessibility",children:"Accessibility"}),l.jsx("a",{href:"#","aria-label":"Contact Support",children:"Support"})]})]})})]})})},T0=()=>l.jsxs(l.Fragment,{children:[l.jsx(p0,{}),l.jsx(h0,{}),l.jsx(g0,{}),l.jsx(S0,{}),l.jsx(w0,{}),l.jsx(N0,{}),l.jsx(A0,{})]}),z0=[{name:"AI & Machine Learning",description:"Developing AI and ML algorithms, models, and applications for various industries.",researchAreas:["Natural Language Processing","Computer Vision","Predictive Analytics","Robotics"],image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg"},{name:"Cybersecurity",description:"Investigating cybersecurity threats, vulnerabilities, and countermeasures.",researchAreas:["Threat Intelligence","Incident Response","Cryptography","Network Security"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Data Science & Analytics",description:"Developing data-driven solutions for insights and decision-making.",researchAreas:["Big Data Analytics","Data Visualization","Predictive Modelling","Statistical Analysis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"IoT & Edge Computing",description:"Designing and implementing IoT systems and edge computing architectures.",researchAreas:["IoT Security","Edge AI","Real-time Analytics","Industrial Automation"],image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp"},{name:"Sustainable Energy",description:"Investigating sustainable energy solutions and climate change mitigation.",researchAreas:["Renewable Energy","Energy Storage","Green Buildings","Sustainable Infrastructure"],image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Biotechnology & Healthcare",description:"Developing innovative solutions for healthcare and medicine.",researchAreas:["Personalized Medicine","Regenerative Medicine","Gene Editing","Medical Imaging"],image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"},{name:"Robotics & Autonomous Systems",description:"Designing advanced robotic systems and autonomous vehicles.",researchAreas:["Robotics","Autonomous Systems","Human-Robot Interaction","Swarm Robotics"],image:"https://media.licdn.com/dms/image/v2/D5612AQFLdebIV4BTYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721157098257?e=1761782400&v=beta&t=yLMm79DcuvTBA2jgbmubv_CMdyNlY8RQ8Kli_bTzNMo"},{name:"Advanced Materials",description:"Investigating novel materials and manufacturing processes.",researchAreas:["Nanomaterials","Biomaterials","3D Printing","Advanced Manufacturing"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Human-Computer Interaction",description:"Developing user-centered interfaces and experiences.",researchAreas:["User Experience Design","Human-Computer Interaction","Accessibility","Usability"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Zoology & Animal Biotechnology",description:"Exploring the genetic and cellular aspects of animals for sustainable development.",researchAreas:["Animal Genetics","Cellular Biotechnology","Wildlife Conservation","Veterinary Applications"],image:"https://i.ibb.co/WNZ4GPQ1/download-11.jpg"},{name:"Botany & Plant Biotechnology",description:"Advancing plant science through genetic engineering and sustainable agriculture.",researchAreas:["Plant Tissue Culture","Genetically Modified Crops","Medicinal Plants","Agro-biotechnology"],image:"https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg"},{name:"Quantum Computing",description:"Exploring quantum computing and emerging technologies.",researchAreas:["Quantum Algorithms","Quantum Applications","Blockchain","Distributed Ledger Tech"],image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}],R0=()=>l.jsxs("section",{className:"departments-page",children:[l.jsx("div",{className:"page-banner departments-banner",children:l.jsxs("div",{className:"container",children:[l.jsx("h2",{children:"Our Research Departments"}),l.jsx("p",{children:"Explore our specialized research departments that are pushing the boundaries of knowledge and innovation"})]})}),l.jsx("div",{className:"container",children:l.jsx("div",{className:"department-grid",children:z0.map((o,d)=>l.jsxs("div",{className:"department-card",children:[l.jsx("img",{src:o.image,alt:o.name}),l.jsxs("div",{className:"department-card-content",children:[l.jsx("h3",{children:o.name}),l.jsx("p",{children:o.description}),l.jsx("strong",{children:"Research Areas:"}),l.jsx("ul",{children:o.researchAreas.map((f,u)=>l.jsx("li",{children:f},u))}),l.jsx("a",{href:"#",children:"Explore Department"})]})]},d))})})]}),M0=[{name:"Dr Ipseeta Nanda",title:"Hon.Director Dean IGT",bio:"With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.",image:"https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Rahul Vadiseety",title:"Director AI",bio:"Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.",image:"https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr. Rath Satyasambit",title:"Director Robotics",bio:"Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",image:"https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Harshichander",title:"Director Biology",bio:"Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.",image:"https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png",social:{email:"#",linkedin:"#",scholar:"#"}}],D0=()=>l.jsxs("section",{className:"faculty-page",children:[l.jsxs("div",{className:"faculty-header",children:[l.jsx("h2",{children:"Our Distinguished Faculty"}),l.jsx("p",{children:"Meet our accomplished faculty members who are experts in their fields and dedicated to student success."})]}),l.jsx("div",{className:"container",children:l.jsx("div",{className:"faculty-grid",children:M0.map((o,d)=>l.jsx("div",{className:"faculty-box",children:l.jsxs("div",{className:"faculty-card",children:[l.jsx("img",{src:o.image,alt:`Portrait of ${o.name}`,className:"faculty-image"}),l.jsxs("div",{className:"faculty-content",children:[l.jsx("h3",{children:o.name}),l.jsx("span",{className:"title",children:o.title}),l.jsx("p",{children:o.bio}),l.jsxs("div",{className:"faculty-social",children:[l.jsx("a",{href:o.social.email,"aria-label":"Email",children:l.jsx("i",{className:"fas fa-envelope"})}),l.jsx("a",{href:o.social.linkedin,"aria-label":"LinkedIn",children:l.jsx("i",{className:"fab fa-linkedin-in"})}),l.jsx("a",{href:o.social.scholar,"aria-label":"Google Scholar",children:l.jsx("i",{className:"ai ai-google-scholar"})})]})]})]})},d))})})]}),O0=()=>{const o=$t();return T.useEffect(()=>{window.scrollTo(0,0)},[o.pathname]),l.jsxs(l.Fragment,{children:[l.jsx(d0,{}),l.jsx(f0,{}),l.jsx(m0,{activePage:o.pathname}),l.jsx("main",{children:l.jsxs(Dg,{children:[l.jsx(wt,{path:"/",element:l.jsx(Qf,{to:"/home",replace:!0})}),l.jsx(wt,{path:"/home",element:l.jsx(T0,{})}),l.jsx(wt,{path:"/programs",element:l.jsx(b0,{})}),l.jsx(wt,{path:"/program/:programSlug",element:l.jsx(u0,{})}),l.jsx(wt,{path:"/departments",element:l.jsx(R0,{})}),l.jsx(wt,{path:"/faculty",element:l.jsx(D0,{})}),l.jsx(wt,{path:"/admissions",element:l.jsx(v0,{})}),l.jsx(wt,{path:"/contact",element:l.jsx(y0,{})}),l.jsx(wt,{path:"/tour",element:l.jsx(j0,{})}),l.jsx(wt,{path:"*",element:l.jsx(Qf,{to:"/home",replace:!0})})]})}),l.jsx(E0,{})]})};function C0(){return l.jsx(e0,{children:l.jsx(O0,{})})}Gh.createRoot(document.getElementById("root")).render(l.jsx(Ch.StrictMode,{children:l.jsx(C0,{})}));
