(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const g of m)if(g.type==="childList")for(const S of g.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&d(S)}).observe(document,{childList:!0,subtree:!0});function f(m){const g={};return m.integrity&&(g.integrity=m.integrity),m.referrerPolicy&&(g.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?g.credentials="include":m.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function d(m){if(m.ep)return;m.ep=!0;const g=f(m);fetch(m.href,g)}})();function $f(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ys={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function Ch(){if(Of)return Dl;Of=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(d,m,g){var S=null;if(g!==void 0&&(S=""+g),m.key!==void 0&&(S=""+m.key),"key"in m){g={};for(var N in m)N!=="key"&&(g[N]=m[N])}else g=m;return m=g.ref,{$$typeof:o,type:d,key:S,ref:m!==void 0?m:null,props:g}}return Dl.Fragment=c,Dl.jsx=f,Dl.jsxs=f,Dl}var _f;function Uh(){return _f||(_f=1,ys.exports=Ch()),ys.exports}var i=Uh(),js={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function kh(){if(Cf)return te;Cf=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),S=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,$={};function q(x,_,L){this.props=x,this.context=_,this.refs=$,this.updater=L||G}q.prototype.isReactComponent={},q.prototype.setState=function(x,_){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,_,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function F(){}F.prototype=q.prototype;function B(x,_,L){this.props=x,this.context=_,this.refs=$,this.updater=L||G}var ee=B.prototype=new F;ee.constructor=B,V(ee,q.prototype),ee.isPureReactComponent=!0;var Ae=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function ze(x,_,L,k,Q,se){return L=se.ref,{$$typeof:o,type:x,key:_,ref:L!==void 0?L:null,props:se}}function Ue(x,_){return ze(x.type,_,void 0,void 0,void 0,x.props)}function Ee(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function et(x){var _={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return _[L]})}var dt=/\/+/g;function Xe(x,_){return typeof x=="object"&&x!==null&&x.key!=null?et(""+x.key):_.toString(36)}function Ea(){}function wa(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Ea,Ea):(x.status="pending",x.then(function(_){x.status==="pending"&&(x.status="fulfilled",x.value=_)},function(_){x.status==="pending"&&(x.status="rejected",x.reason=_)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ve(x,_,L,k,Q){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var W=!1;if(x===null)W=!0;else switch(se){case"bigint":case"string":case"number":W=!0;break;case"object":switch(x.$$typeof){case o:case c:W=!0;break;case w:return W=x._init,Ve(W(x._payload),_,L,k,Q)}}if(W)return Q=Q(x),W=k===""?"."+Xe(x,0):k,Ae(Q)?(L="",W!=null&&(L=W.replace(dt,"$&/")+"/"),Ve(Q,_,L,"",function(It){return It})):Q!=null&&(Ee(Q)&&(Q=Ue(Q,L+(Q.key==null||x&&x.key===Q.key?"":(""+Q.key).replace(dt,"$&/")+"/")+W)),_.push(Q)),1;W=0;var tt=k===""?".":k+":";if(Ae(x))for(var ve=0;ve<x.length;ve++)k=x[ve],se=tt+Xe(k,ve),W+=Ve(k,_,L,se,Q);else if(ve=U(x),typeof ve=="function")for(x=ve.call(x),ve=0;!(k=x.next()).done;)k=k.value,se=tt+Xe(k,ve++),W+=Ve(k,_,L,se,Q);else if(se==="object"){if(typeof x.then=="function")return Ve(wa(x),_,L,k,Q);throw _=String(x),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return W}function D(x,_,L){if(x==null)return x;var k=[],Q=0;return Ve(x,k,"","",function(se){return _.call(L,se,Q++)}),k}function H(x){if(x._status===-1){var _=x._result;_=_(),_.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=_)}if(x._status===1)return x._result.default;throw x._result}var J=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ge(){}return te.Children={map:D,forEach:function(x,_,L){D(x,function(){_.apply(this,arguments)},L)},count:function(x){var _=0;return D(x,function(){_++}),_},toArray:function(x){return D(x,function(_){return _})||[]},only:function(x){if(!Ee(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},te.Component=q,te.Fragment=f,te.Profiler=m,te.PureComponent=B,te.StrictMode=d,te.Suspense=j,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,te.__COMPILER_RUNTIME={__proto__:null,c:function(x){return I.H.useMemoCache(x)}},te.cache=function(x){return function(){return x.apply(null,arguments)}},te.cloneElement=function(x,_,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var k=V({},x.props),Q=x.key,se=void 0;if(_!=null)for(W in _.ref!==void 0&&(se=void 0),_.key!==void 0&&(Q=""+_.key),_)!Ce.call(_,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&_.ref===void 0||(k[W]=_[W]);var W=arguments.length-2;if(W===1)k.children=L;else if(1<W){for(var tt=Array(W),ve=0;ve<W;ve++)tt[ve]=arguments[ve+2];k.children=tt}return ze(x.type,Q,void 0,void 0,se,k)},te.createContext=function(x){return x={$$typeof:S,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:g,_context:x},x},te.createElement=function(x,_,L){var k,Q={},se=null;if(_!=null)for(k in _.key!==void 0&&(se=""+_.key),_)Ce.call(_,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(Q[k]=_[k]);var W=arguments.length-2;if(W===1)Q.children=L;else if(1<W){for(var tt=Array(W),ve=0;ve<W;ve++)tt[ve]=arguments[ve+2];Q.children=tt}if(x&&x.defaultProps)for(k in W=x.defaultProps,W)Q[k]===void 0&&(Q[k]=W[k]);return ze(x,se,void 0,void 0,null,Q)},te.createRef=function(){return{current:null}},te.forwardRef=function(x){return{$$typeof:N,render:x}},te.isValidElement=Ee,te.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:H}},te.memo=function(x,_){return{$$typeof:h,type:x,compare:_===void 0?null:_}},te.startTransition=function(x){var _=I.T,L={};I.T=L;try{var k=x(),Q=I.S;Q!==null&&Q(L,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(ge,J)}catch(se){J(se)}finally{I.T=_}},te.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},te.use=function(x){return I.H.use(x)},te.useActionState=function(x,_,L){return I.H.useActionState(x,_,L)},te.useCallback=function(x,_){return I.H.useCallback(x,_)},te.useContext=function(x){return I.H.useContext(x)},te.useDebugValue=function(){},te.useDeferredValue=function(x,_){return I.H.useDeferredValue(x,_)},te.useEffect=function(x,_,L){var k=I.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return k.useEffect(x,_)},te.useId=function(){return I.H.useId()},te.useImperativeHandle=function(x,_,L){return I.H.useImperativeHandle(x,_,L)},te.useInsertionEffect=function(x,_){return I.H.useInsertionEffect(x,_)},te.useLayoutEffect=function(x,_){return I.H.useLayoutEffect(x,_)},te.useMemo=function(x,_){return I.H.useMemo(x,_)},te.useOptimistic=function(x,_){return I.H.useOptimistic(x,_)},te.useReducer=function(x,_,L){return I.H.useReducer(x,_,L)},te.useRef=function(x){return I.H.useRef(x)},te.useState=function(x){return I.H.useState(x)},te.useSyncExternalStore=function(x,_,L){return I.H.useSyncExternalStore(x,_,L)},te.useTransition=function(){return I.H.useTransition()},te.version="19.1.1",te}var Uf;function zs(){return Uf||(Uf=1,js.exports=kh()),js.exports}var v=zs();const Hh=$f(v);var As={exports:{}},zl={},Ss={exports:{}},Es={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function Lh(){return kf||(kf=1,(function(o){function c(D,H){var J=D.length;D.push(H);e:for(;0<J;){var ge=J-1>>>1,x=D[ge];if(0<m(x,H))D[ge]=H,D[J]=x,J=ge;else break e}}function f(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var H=D[0],J=D.pop();if(J!==H){D[0]=J;e:for(var ge=0,x=D.length,_=x>>>1;ge<_;){var L=2*(ge+1)-1,k=D[L],Q=L+1,se=D[Q];if(0>m(k,J))Q<x&&0>m(se,k)?(D[ge]=se,D[Q]=J,ge=Q):(D[ge]=k,D[L]=J,ge=L);else if(Q<x&&0>m(se,J))D[ge]=se,D[Q]=J,ge=Q;else break e}}return H}function m(D,H){var J=D.sortIndex-H.sortIndex;return J!==0?J:D.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var S=Date,N=S.now();o.unstable_now=function(){return S.now()-N}}var j=[],h=[],w=1,C=null,U=3,G=!1,V=!1,$=!1,q=!1,F=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function Ae(D){for(var H=f(h);H!==null;){if(H.callback===null)d(h);else if(H.startTime<=D)d(h),H.sortIndex=H.expirationTime,c(j,H);else break;H=f(h)}}function I(D){if($=!1,Ae(D),!V)if(f(j)!==null)V=!0,Ce||(Ce=!0,Xe());else{var H=f(h);H!==null&&Ve(I,H.startTime-D)}}var Ce=!1,ze=-1,Ue=5,Ee=-1;function et(){return q?!0:!(o.unstable_now()-Ee<Ue)}function dt(){if(q=!1,Ce){var D=o.unstable_now();Ee=D;var H=!0;try{e:{V=!1,$&&($=!1,B(ze),ze=-1),G=!0;var J=U;try{t:{for(Ae(D),C=f(j);C!==null&&!(C.expirationTime>D&&et());){var ge=C.callback;if(typeof ge=="function"){C.callback=null,U=C.priorityLevel;var x=ge(C.expirationTime<=D);if(D=o.unstable_now(),typeof x=="function"){C.callback=x,Ae(D),H=!0;break t}C===f(j)&&d(j),Ae(D)}else d(j);C=f(j)}if(C!==null)H=!0;else{var _=f(h);_!==null&&Ve(I,_.startTime-D),H=!1}}break e}finally{C=null,U=J,G=!1}H=void 0}}finally{H?Xe():Ce=!1}}}var Xe;if(typeof ee=="function")Xe=function(){ee(dt)};else if(typeof MessageChannel<"u"){var Ea=new MessageChannel,wa=Ea.port2;Ea.port1.onmessage=dt,Xe=function(){wa.postMessage(null)}}else Xe=function(){F(dt,0)};function Ve(D,H){ze=F(function(){D(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(D){switch(U){case 1:case 2:case 3:var H=3;break;default:H=U}var J=U;U=H;try{return D()}finally{U=J}},o.unstable_requestPaint=function(){q=!0},o.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=U;U=D;try{return H()}finally{U=J}},o.unstable_scheduleCallback=function(D,H,J){var ge=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,D){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=J+x,D={id:w++,callback:H,priorityLevel:D,startTime:J,expirationTime:x,sortIndex:-1},J>ge?(D.sortIndex=J,c(h,D),f(j)===null&&D===f(h)&&($?(B(ze),ze=-1):$=!0,Ve(I,J-ge))):(D.sortIndex=x,c(j,D),V||G||(V=!0,Ce||(Ce=!0,Xe()))),D},o.unstable_shouldYield=et,o.unstable_wrapCallback=function(D){var H=U;return function(){var J=U;U=H;try{return D.apply(this,arguments)}finally{U=J}}}})(Es)),Es}var Hf;function Yh(){return Hf||(Hf=1,Ss.exports=Lh()),Ss.exports}var ws={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function qh(){if(Lf)return Ze;Lf=1;var o=zs();function c(j){var h="https://react.dev/errors/"+j;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+j+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var d={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function g(j,h,w){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:C==null?null:""+C,children:j,containerInfo:h,implementation:w}}var S=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(j,h){if(j==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ze.createPortal=function(j,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return g(j,h,null,w)},Ze.flushSync=function(j){var h=S.T,w=d.p;try{if(S.T=null,d.p=2,j)return j()}finally{S.T=h,d.p=w,d.d.f()}},Ze.preconnect=function(j,h){typeof j=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(j,h))},Ze.prefetchDNS=function(j){typeof j=="string"&&d.d.D(j)},Ze.preinit=function(j,h){if(typeof j=="string"&&h&&typeof h.as=="string"){var w=h.as,C=N(w,h.crossOrigin),U=typeof h.integrity=="string"?h.integrity:void 0,G=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?d.d.S(j,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:C,integrity:U,fetchPriority:G}):w==="script"&&d.d.X(j,{crossOrigin:C,integrity:U,fetchPriority:G,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ze.preinitModule=function(j,h){if(typeof j=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=N(h.as,h.crossOrigin);d.d.M(j,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&d.d.M(j)},Ze.preload=function(j,h){if(typeof j=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,C=N(w,h.crossOrigin);d.d.L(j,w,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ze.preloadModule=function(j,h){if(typeof j=="string")if(h){var w=N(h.as,h.crossOrigin);d.d.m(j,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else d.d.m(j)},Ze.requestFormReset=function(j){d.d.r(j)},Ze.unstable_batchedUpdates=function(j,h){return j(h)},Ze.useFormState=function(j,h,w){return S.H.useFormState(j,h,w)},Ze.useFormStatus=function(){return S.H.useHostTransitionStatus()},Ze.version="19.1.1",Ze}var Yf;function Bh(){if(Yf)return ws.exports;Yf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),ws.exports=qh(),ws.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Gh(){if(qf)return zl;qf=1;var o=Yh(),c=zs(),f=Bh();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(g(e)!==e)throw Error(d(188))}function j(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return N(l),e;if(r===n)return N(l),t;r=r.sibling}throw Error(d(188))}if(a.return!==n.return)a=l,n=r;else{for(var s=!1,u=l.child;u;){if(u===a){s=!0,a=l,n=r;break}if(u===n){s=!0,n=l,a=r;break}u=u.sibling}if(!s){for(u=r.child;u;){if(u===a){s=!0,a=r,n=l;break}if(u===n){s=!0,n=r,a=l;break}u=u.sibling}if(!s)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,C=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var Ea=Symbol.for("react.client.reference");function wa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ea?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case q:return"Profiler";case $:return"StrictMode";case I:return"Suspense";case Ce:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case Ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:wa(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return wa(e(t))}catch{}}return null}var Ve=Array.isArray,D=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ge=[],x=-1;function _(e){return{current:e}}function L(e){0>x||(e.current=ge[x],ge[x]=null,x--)}function k(e,t){x++,ge[x]=e.current,e.current=t}var Q=_(null),se=_(null),W=_(null),tt=_(null);function ve(e,t){switch(k(W,t),k(se,e),k(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rf(t),e=of(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(Q),k(Q,e)}function It(){L(Q),L(se),L(W)}function lr(e){e.memoizedState!==null&&k(tt,e);var t=Q.current,a=of(t,e.type);t!==a&&(k(se,e),k(Q,a))}function kl(e){se.current===e&&(L(Q),L(se)),tt.current===e&&(L(tt),wl._currentValue=J)}var ir=Object.prototype.hasOwnProperty,rr=o.unstable_scheduleCallback,or=o.unstable_cancelCallback,fm=o.unstable_shouldYield,mm=o.unstable_requestPaint,Tt=o.unstable_now,pm=o.unstable_getCurrentPriorityLevel,Ys=o.unstable_ImmediatePriority,qs=o.unstable_UserBlockingPriority,Hl=o.unstable_NormalPriority,hm=o.unstable_LowPriority,Bs=o.unstable_IdlePriority,gm=o.log,xm=o.unstable_setDisableYieldValue,_n=null,at=null;function Wt(e){if(typeof gm=="function"&&xm(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(_n,e)}catch{}}var nt=Math.clz32?Math.clz32:ym,bm=Math.log,vm=Math.LN2;function ym(e){return e>>>=0,e===0?32:31-(bm(e)/vm|0)|0}var Ll=256,Yl=4194304;function Ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ql(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~r,n!==0?l=Ra(n):(s&=u,s!==0?l=Ra(s):a||(a=u&~e,a!==0&&(l=Ra(a))))):(u=n&~r,u!==0?l=Ra(u):s!==0?l=Ra(s):a||(a=n&~e,a!==0&&(l=Ra(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gs(){var e=Ll;return Ll<<=1,(Ll&4194048)===0&&(Ll=256),e}function Xs(){var e=Yl;return Yl<<=1,(Yl&62914560)===0&&(Yl=4194304),e}function sr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Un(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Am(e,t,a,n,l,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,p=e.expirationTimes,E=e.hiddenUpdates;for(a=s&~a;0<a;){var M=31-nt(a),O=1<<M;u[M]=0,p[M]=-1;var R=E[M];if(R!==null)for(E[M]=null,M=0;M<R.length;M++){var T=R[M];T!==null&&(T.lane&=-536870913)}a&=~O}n!==0&&Vs(e,n,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Vs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-nt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Fs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-nt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function cr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qs(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Rf(e.type))}function Sm(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var ea=Math.random().toString(36).slice(2),Fe="__reactFiber$"+ea,Je="__reactProps$"+ea,Va="__reactContainer$"+ea,dr="__reactEvents$"+ea,Em="__reactListeners$"+ea,wm="__reactHandles$"+ea,Zs="__reactResources$"+ea,kn="__reactMarker$"+ea;function fr(e){delete e[Fe],delete e[Je],delete e[dr],delete e[Em],delete e[wm]}function Fa(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Va]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=df(e);e!==null;){if(a=e[Fe])return a;e=df(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Fe]||e[Va]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Hn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Za(e){var t=e[Zs];return t||(t=e[Zs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[kn]=!0}var Ks=new Set,Js={};function Ta(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Js[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var Rm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ps={},$s={};function Tm(e){return ir.call($s,e)?!0:ir.call(Ps,e)?!1:Rm.test(e)?$s[e]=!0:(Ps[e]=!0,!1)}function Bl(e,t,a){if(Tm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ut(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var mr,Is;function Ja(e){if(mr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);mr=t&&t[1]||"",Is=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mr+e+Is}var pr=!1;function hr(e,t){if(!e||pr)return"";pr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(T){var R=T}Reflect.construct(e,[],O)}else{try{O.call()}catch(T){R=T}e.call(O.prototype)}}else{try{throw Error()}catch(T){R=T}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(T){if(T&&R&&typeof T.stack=="string")return[T.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),s=r[0],u=r[1];if(s&&u){var p=s.split(`
`),E=u.split(`
`);for(l=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(n===p.length||l===E.length)for(n=p.length-1,l=E.length-1;1<=n&&0<=l&&p[n]!==E[l];)l--;for(;1<=n&&0<=l;n--,l--)if(p[n]!==E[l]){if(n!==1||l!==1)do if(n--,l--,0>l||p[n]!==E[l]){var M=`
`+p[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=l);break}}}finally{pr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function Nm(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return hr(e.type,!1);case 11:return hr(e.type.render,!1);case 1:return hr(e.type,!0);case 31:return Ja("Activity");default:return""}}function Ws(e){try{var t="";do t+=Nm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mm(e){var t=ec(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xl(e){e._valueTracker||(e._valueTracker=Mm(e))}function tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ec(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Vl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dm=/[\n"\\]/g;function mt(e){return e.replace(Dm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gr(e,t,a,n,l,r,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?xr(e,s,ft(t)):a!=null?xr(e,s,ft(a)):n!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ft(u):e.removeAttribute("name")}function ac(e,t,a,n,l,r,s,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function xr(e,t,a){t==="number"&&Vl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function nc(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function lc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(Ve(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var zm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ic(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||zm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function rc(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&ic(e,l,n)}else for(var r in t)t.hasOwnProperty(r)&&ic(e,r,t[r])}function br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Om=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_m=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(e){return _m.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vr=null;function yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,Wa=null;function oc(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(gr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[Je]||null;if(!l)throw Error(d(90));gr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&tc(n)}break e;case"textarea":nc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var jr=!1;function sc(e,t,a){if(jr)return e(t,a);jr=!0;try{var n=e(t);return n}finally{if(jr=!1,(Ia!==null||Wa!==null)&&(Di(),Ia&&(t=Ia,e=Wa,Wa=Ia=null,oc(t),e)))for(t=0;t<e.length;t++)oc(e[t])}}function Ln(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Je]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ar=!1;if(kt)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Ar=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Ar=!1}var ta=null,Sr=null,Ql=null;function cc(){if(Ql)return Ql;var e,t=Sr,a=t.length,n,l="value"in ta?ta.value:ta.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[r-n];n++);return Ql=l.slice(e,1<n?1-n:void 0)}function Zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kl(){return!0}function uc(){return!1}function Pe(e){function t(a,n,l,r,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Kl:uc,this.isPropagationStopped=uc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Pe(Na),qn=w({},Na,{view:0,detail:0}),Cm=Pe(qn),Er,wr,Bn,Pl=w({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(Er=e.screenX-Bn.screenX,wr=e.screenY-Bn.screenY):wr=Er=0,Bn=e),Er)},movementY:function(e){return"movementY"in e?e.movementY:wr}}),dc=Pe(Pl),Um=w({},Pl,{dataTransfer:0}),km=Pe(Um),Hm=w({},qn,{relatedTarget:0}),Rr=Pe(Hm),Lm=w({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Ym=Pe(Lm),qm=w({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bm=Pe(qm),Gm=w({},Na,{data:0}),fc=Pe(Gm),Xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fm[e])?!!t[e]:!1}function Tr(){return Qm}var Zm=w({},qn,{key:function(e){if(e.key){var t=Xm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return e.type==="keypress"?Zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Km=Pe(Zm),Jm=w({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=Pe(Jm),Pm=w({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),$m=Pe(Pm),Im=w({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=Pe(Im),ep=w({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Pe(ep),ap=w({},Na,{newState:0,oldState:0}),np=Pe(ap),lp=[9,13,27,32],Nr=kt&&"CompositionEvent"in window,Gn=null;kt&&"documentMode"in document&&(Gn=document.documentMode);var ip=kt&&"TextEvent"in window&&!Gn,pc=kt&&(!Nr||Gn&&8<Gn&&11>=Gn),hc=" ",gc=!1;function xc(e,t){switch(e){case"keyup":return lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function rp(e,t){switch(e){case"compositionend":return bc(t);case"keypress":return t.which!==32?null:(gc=!0,hc);case"textInput":return e=t.data,e===hc&&gc?null:e;default:return null}}function op(e,t){if(en)return e==="compositionend"||!Nr&&xc(e,t)?(e=cc(),Ql=Sr=ta=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pc&&t.locale!=="ko"?null:t.data;default:return null}}var sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sp[e.type]:t==="textarea"}function yc(e,t,a,n){Ia?Wa?Wa.push(n):Wa=[n]:Ia=n,t=ki(t,"onChange"),0<t.length&&(a=new Jl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Xn=null,Vn=null;function cp(e){ef(e,0)}function $l(e){var t=Hn(e);if(tc(t))return e}function jc(e,t){if(e==="change")return t}var Ac=!1;if(kt){var Mr;if(kt){var Dr="oninput"in document;if(!Dr){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),Dr=typeof Sc.oninput=="function"}Mr=Dr}else Mr=!1;Ac=Mr&&(!document.documentMode||9<document.documentMode)}function Ec(){Xn&&(Xn.detachEvent("onpropertychange",wc),Vn=Xn=null)}function wc(e){if(e.propertyName==="value"&&$l(Vn)){var t=[];yc(t,Vn,e,yr(e)),sc(cp,t)}}function up(e,t,a){e==="focusin"?(Ec(),Xn=t,Vn=a,Xn.attachEvent("onpropertychange",wc)):e==="focusout"&&Ec()}function dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(Vn)}function fp(e,t){if(e==="click")return $l(t)}function mp(e,t){if(e==="input"||e==="change")return $l(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:pp;function Fn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ir.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,t){var a=Rc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rc(a)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vl(e.document)}return t}function zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hp=kt&&"documentMode"in document&&11>=document.documentMode,tn=null,Or=null,Qn=null,_r=!1;function Dc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_r||tn==null||tn!==Vl(n)||(n=tn,"selectionStart"in n&&zr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qn&&Fn(Qn,n)||(Qn=n,n=ki(Or,"onSelect"),0<n.length&&(t=new Jl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=tn)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var an={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Cr={},zc={};kt&&(zc=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Da(e){if(Cr[e])return Cr[e];if(!an[e])return e;var t=an[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zc)return Cr[e]=t[a];return e}var Oc=Da("animationend"),_c=Da("animationiteration"),Cc=Da("animationstart"),gp=Da("transitionrun"),xp=Da("transitionstart"),bp=Da("transitioncancel"),Uc=Da("transitionend"),kc=new Map,Ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ur.push("scrollEnd");function jt(e,t){kc.set(e,t),Ta(t,[e])}var Hc=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var a=Hc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ws(t)},Hc.set(e,t),t)}return{value:e,source:t,stack:Ws(t)}}var ht=[],nn=0,kr=0;function Il(){for(var e=nn,t=kr=nn=0;t<e;){var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var r=ht[t];if(ht[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}r!==0&&Lc(a,l,r)}}function Wl(e,t,a,n){ht[nn++]=e,ht[nn++]=t,ht[nn++]=a,ht[nn++]=n,kr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Hr(e,t,a,n){return Wl(e,t,a,n),ei(e)}function ln(e,t){return Wl(e,null,null,t),ei(e)}function Lc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-nt(a),e=r.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),r):null}function ei(e){if(50<xl)throw xl=0,Vo=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rn={};function vp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,n){return new vp(e,t,a,n)}function Lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,a,n,l,r){var s=0;if(n=e,typeof e=="function")Lr(e)&&(s=1);else if(typeof e=="string")s=jh(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=it(31,a,t,l),e.elementType=Ee,e.lanes=r,e;case V:return za(a.children,l,r,t);case $:s=8,l|=24;break;case q:return e=it(12,a,t,l|2),e.elementType=q,e.lanes=r,e;case I:return e=it(13,a,t,l),e.elementType=I,e.lanes=r,e;case Ce:return e=it(19,a,t,l),e.elementType=Ce,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:case ee:s=10;break e;case B:s=9;break e;case Ae:s=11;break e;case ze:s=14;break e;case Ue:s=16,n=null;break e}s=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=it(s,a,t,l),t.elementType=e,t.type=n,t.lanes=r,t}function za(e,t,a,n){return e=it(7,e,n,t),e.lanes=a,e}function Yr(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function qr(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var on=[],sn=0,ai=null,ni=0,gt=[],xt=0,Oa=null,Lt=1,Yt="";function _a(e,t){on[sn++]=ni,on[sn++]=ai,ai=e,ni=t}function qc(e,t,a){gt[xt++]=Lt,gt[xt++]=Yt,gt[xt++]=Oa,Oa=e;var n=Lt;e=Yt;var l=32-nt(n)-1;n&=~(1<<l),a+=1;var r=32-nt(t)+l;if(30<r){var s=l-l%5;r=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Lt=1<<32-nt(t)+l|a<<l|n,Yt=r+e}else Lt=1<<r|a<<l|n,Yt=e}function Br(e){e.return!==null&&(_a(e,1),qc(e,1,0))}function Gr(e){for(;e===ai;)ai=on[--sn],on[sn]=null,ni=on[--sn],on[sn]=null;for(;e===Oa;)Oa=gt[--xt],gt[xt]=null,Yt=gt[--xt],gt[xt]=null,Lt=gt[--xt],gt[xt]=null}var Ke=null,we=null,ue=!1,Ca=null,Nt=!1,Xr=Error(d(519));function Ua(e){var t=Error(d(418,""));throw Jn(pt(t,e)),Xr}function Bc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Fe]=e,t[Je]=n,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<vl.length;a++)ie(vl[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),ac(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Xl(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),lc(t,n.value,n.defaultValue,n.children),Xl(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||lf(t.textContent,a)?(n.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),n.onScroll!=null&&ie("scroll",t),n.onScrollEnd!=null&&ie("scrollend",t),n.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||Ua(e)}function Gc(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ke=Ke.return}}function Zn(e){if(e!==Ke)return!1;if(!ue)return Gc(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rs(e.type,e.memoizedProps)),a=!a),a&&we&&Ua(e),Gc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){we=St(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}we=null}}else t===27?(t=we,xa(e.type)?(e=us,us=null,we=e):we=t):we=Ke?St(e.stateNode.nextSibling):null;return!0}function Kn(){we=Ke=null,ue=!1}function Xc(){var e=Ca;return e!==null&&(We===null?We=e:We.push.apply(We,e),Ca=null),e}function Jn(e){Ca===null?Ca=[e]:Ca.push(e)}var Vr=_(null),ka=null,qt=null;function aa(e,t,a){k(Vr,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Vr.current,L(Vr)}function Fr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Qr(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=l;for(var p=0;p<t.length;p++)if(u.context===t[p]){r.lanes|=a,u=r.alternate,u!==null&&(u.lanes|=a),Fr(r.return,a,e),n||(s=null);break e}r=u.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(d(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),Fr(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function Pn(e,t,a,n){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=l.type;lt(l.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(l===tt.current){if(s=l.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}l=l.return}e!==null&&Qr(t,e,a,n),t.flags|=262144}function li(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){ka=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Vc(ka,e)}function ii(e,t){return ka===null&&Ha(e),Vc(e,t)}function Vc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(d(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var yp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},jp=o.unstable_scheduleCallback,Ap=o.unstable_NormalPriority,Oe={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zr(){return{controller:new yp,data:new Map,refCount:0}}function $n(e){e.refCount--,e.refCount===0&&jp(Ap,function(){e.controller.abort()})}var In=null,Kr=0,cn=0,un=null;function Sp(e,t){if(In===null){var a=In=[];Kr=0,cn=$o(),un={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Kr++,t.then(Fc,Fc),t}function Fc(){if(--Kr===0&&In!==null){un!==null&&(un.status="fulfilled");var e=In;In=null,cn=0,un=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ep(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Qc=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sp(e,t),Qc!==null&&Qc(e,t)};var La=_(null);function Jr(){var e=La.current;return e!==null?e:be.pooledCache}function ri(e,t){t===null?k(La,La.current):k(La,t.pool)}function Zc(){var e=Jr();return e===null?null:{parent:Oe._currentValue,pool:e}}var Wn=Error(d(460)),Kc=Error(d(474)),oi=Error(d(542)),Pr={then:function(){}};function Jc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function si(){}function Pc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(si,si),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ic(e),e;default:if(typeof t.status=="string")t.then(si,si);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ic(e),e}throw el=t,Wn}}var el=null;function $c(){if(el===null)throw Error(d(459));var e=el;return el=null,e}function Ic(e){if(e===Wn||e===oi)throw Error(d(483))}var na=!1;function $r(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ir(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(de&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ei(e),Lc(e,null,a),t}return Wl(e,n,t,a),ei(e)}function tl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Fs(e,a)}}function Wr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var eo=!1;function al(){if(eo){var e=un;if(e!==null)throw e}}function nl(e,t,a,n){eo=!1;var l=e.updateQueue;na=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var p=u,E=p.next;p.next=null,s===null?r=E:s.next=E,s=p;var M=e.alternate;M!==null&&(M=M.updateQueue,u=M.lastBaseUpdate,u!==s&&(u===null?M.firstBaseUpdate=E:u.next=E,M.lastBaseUpdate=p))}if(r!==null){var O=l.baseState;s=0,M=E=p=null,u=r;do{var R=u.lane&-536870913,T=R!==u.lane;if(T?(oe&R)===R:(n&R)===R){R!==0&&R===cn&&(eo=!0),M!==null&&(M=M.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var P=e,Z=u;R=t;var he=a;switch(Z.tag){case 1:if(P=Z.payload,typeof P=="function"){O=P.call(he,O,R);break e}O=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=Z.payload,R=typeof P=="function"?P.call(he,O,R):P,R==null)break e;O=w({},O,R);break e;case 2:na=!0}}R=u.callback,R!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[R]:T.push(R))}else T={lane:R,tag:u.tag,payload:u.payload,callback:u.callback,next:null},M===null?(E=M=T,p=O):M=M.next=T,s|=R;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;T=u,u=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);M===null&&(p=O),l.baseState=p,l.firstBaseUpdate=E,l.lastBaseUpdate=M,r===null&&(l.shared.lanes=0),ma|=s,e.lanes=s,e.memoizedState=O}}function Wc(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function eu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wc(a[e],t)}var dn=_(null),ci=_(0);function tu(e,t){e=Kt,k(ci,e),k(dn,t),Kt=e|t.baseLanes}function to(){k(ci,Kt),k(dn,dn.current)}function ao(){Kt=ci.current,L(dn),L(ci)}var ra=0,ae=null,me=null,Me=null,ui=!1,fn=!1,Ya=!1,di=0,ll=0,mn=null,wp=0;function Te(){throw Error(d(321))}function no(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!lt(e[a],t[a]))return!1;return!0}function lo(e,t,a,n,l,r){return ra=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Lu:Yu,Ya=!1,r=a(n,l),Ya=!1,fn&&(r=nu(t,a,n,l)),au(e),r}function au(e){D.H=xi;var t=me!==null&&me.next!==null;if(ra=0,Me=me=ae=null,ui=!1,ll=0,mn=null,t)throw Error(d(300));e===null||He||(e=e.dependencies,e!==null&&li(e)&&(He=!0))}function nu(e,t,a,n){ae=e;var l=0;do{if(fn&&(mn=null),ll=0,fn=!1,25<=l)throw Error(d(301));if(l+=1,Me=me=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=Op,r=t(a,n)}while(fn);return r}function Rp(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?il(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(ae.flags|=1024),t}function io(){var e=di!==0;return di=0,e}function ro(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function oo(e){if(ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ui=!1}ra=0,Me=me=ae=null,fn=!1,ll=di=0,mn=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ae.memoizedState=Me=e:Me=Me.next=e,Me}function De(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=Me===null?ae.memoizedState:Me.next;if(t!==null)Me=t,me=e;else{if(e===null)throw ae.alternate===null?Error(d(467)):Error(d(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Me===null?ae.memoizedState=Me=e:Me=Me.next=e}return Me}function so(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(e){var t=ll;return ll+=1,mn===null&&(mn=[]),e=Pc(mn,e,t),t=ae,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Lu:Yu),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return il(e);if(e.$$typeof===ee)return Qe(e)}throw Error(d(438,String(e)))}function co(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=so(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=et;return t.index++,a}function Gt(e,t){return typeof t=="function"?t(e):t}function mi(e){var t=De();return uo(t,me,e)}function uo(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var l=e.baseQueue,r=n.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}t.baseQueue=l=r,n.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var u=s=null,p=null,E=t,M=!1;do{var O=E.lane&-536870913;if(O!==E.lane?(oe&O)===O:(ra&O)===O){var R=E.revertLane;if(R===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),O===cn&&(M=!0);else if((ra&R)===R){E=E.next,R===cn&&(M=!0);continue}else O={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(u=p=O,s=r):p=p.next=O,ae.lanes|=R,ma|=R;O=E.action,Ya&&a(r,O),r=E.hasEagerState?E.eagerState:a(r,O)}else R={lane:O,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(u=p=R,s=r):p=p.next=R,ae.lanes|=O,ma|=O;E=E.next}while(E!==null&&E!==t);if(p===null?s=r:p.next=u,!lt(r,e.memoizedState)&&(He=!0,M&&(a=un,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=p,n.lastRenderedState=r}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function fo(e){var t=De(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do r=e(r,s.action),s=s.next;while(s!==l);lt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function lu(e,t,a){var n=ae,l=De(),r=ue;if(r){if(a===void 0)throw Error(d(407));a=a()}else a=t();var s=!lt((me||l).memoizedState,a);s&&(l.memoizedState=a,He=!0),l=l.queue;var u=ou.bind(null,n,l,e);if(rl(2048,8,u,[e]),l.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,pn(9,pi(),ru.bind(null,n,l,a,t),null),be===null)throw Error(d(349));r||(ra&124)!==0||iu(n,t,a)}return a}function iu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=so(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ru(e,t,a,n){t.value=a,t.getSnapshot=n,su(t)&&cu(e)}function ou(e,t,a){return a(function(){su(t)&&cu(e)})}function su(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!lt(e,a)}catch{return!0}}function cu(e){var t=ln(e,2);t!==null&&ut(t,e,2)}function mo(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ya){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function uu(e,t,a,n){return e.baseState=a,uo(e,me,typeof n=="function"?n:Gt)}function Tp(e,t,a,n,l){if(gi(e))throw Error(d(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,du(t,r)):(r.next=a.next,t.pending=a.next=r)}}function du(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var r=D.T,s={};D.T=s;try{var u=a(l,n),p=D.S;p!==null&&p(s,u),fu(e,t,u)}catch(E){po(e,t,E)}finally{D.T=r}}else try{r=a(l,n),fu(e,t,r)}catch(E){po(e,t,E)}}function fu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){mu(e,t,n)},function(n){return po(e,t,n)}):mu(e,t,a)}function mu(e,t,a){t.status="fulfilled",t.value=a,pu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,du(e,a)))}function po(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,pu(t),t=t.next;while(t!==n)}e.action=null}function pu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hu(e,t){return t}function gu(e,t){if(ue){var a=be.formState;if(a!==null){e:{var n=ae;if(ue){if(we){t:{for(var l=we,r=Nt;l.nodeType!==8;){if(!r){l=null;break t}if(l=St(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){we=St(l.nextSibling),n=l.data==="F!";break e}}Ua(n)}n=!1}n&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hu,lastRenderedState:t},a.queue=n,a=Uu.bind(null,ae,n),n.dispatch=a,n=mo(!1),r=vo.bind(null,ae,!1,n.queue),n=$e(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Tp.bind(null,ae,l,r,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function xu(e){var t=De();return bu(t,me,e)}function bu(e,t,a){if(t=uo(e,t,hu)[0],e=mi(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=il(t)}catch(s){throw s===Wn?oi:s}else n=t;t=De();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,pn(9,pi(),Np.bind(null,l,a),null)),[n,r,e]}function Np(e,t){e.action=t}function vu(e){var t=De(),a=me;if(a!==null)return bu(t,a,e);De(),t=t.memoizedState,a=De();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function pn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=so(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function pi(){return{destroy:void 0,resource:void 0}}function yu(){return De().memoizedState}function hi(e,t,a,n){var l=$e();n=n===void 0?null:n,ae.flags|=e,l.memoizedState=pn(1|t,pi(),a,n)}function rl(e,t,a,n){var l=De();n=n===void 0?null:n;var r=l.memoizedState.inst;me!==null&&n!==null&&no(n,me.memoizedState.deps)?l.memoizedState=pn(t,r,a,n):(ae.flags|=e,l.memoizedState=pn(1|t,r,a,n))}function ju(e,t){hi(8390656,8,e,t)}function Au(e,t){rl(2048,8,e,t)}function Su(e,t){return rl(4,2,e,t)}function Eu(e,t){return rl(4,4,e,t)}function wu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,a){a=a!=null?a.concat([e]):null,rl(4,4,wu.bind(null,t,e),a)}function ho(){}function Tu(e,t){var a=De();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&no(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Nu(e,t){var a=De();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&no(t,n[1]))return n[0];if(n=e(),Ya){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n}function go(e,t,a){return a===void 0||(ra&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=zd(),ae.lanes|=e,ma|=e,a)}function Mu(e,t,a,n){return lt(a,t)?a:dn.current!==null?(e=go(e,a,n),lt(e,t)||(He=!0),e):(ra&42)===0?(He=!0,e.memoizedState=a):(e=zd(),ae.lanes|=e,ma|=e,t)}function Du(e,t,a,n,l){var r=H.p;H.p=r!==0&&8>r?r:8;var s=D.T,u={};D.T=u,vo(e,!1,t,a);try{var p=l(),E=D.S;if(E!==null&&E(u,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var M=Ep(p,n);ol(e,t,M,ct(e))}else ol(e,t,n,ct(e))}catch(O){ol(e,t,{then:function(){},status:"rejected",reason:O},ct())}finally{H.p=r,D.T=s}}function Mp(){}function xo(e,t,a,n){if(e.tag!==5)throw Error(d(476));var l=zu(e).queue;Du(e,l,t,J,a===null?Mp:function(){return Ou(e),a(n)})}function zu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ou(e){var t=zu(e).next.queue;ol(e,t,{},ct())}function bo(){return Qe(wl)}function _u(){return De().memoizedState}function Cu(){return De().memoizedState}function Dp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=la(a);var n=ia(t,e,a);n!==null&&(ut(n,t,a),tl(n,t,a)),t={cache:Zr()},e.payload=t;return}t=t.return}}function zp(e,t,a){var n=ct();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gi(e)?ku(t,a):(a=Hr(e,t,a,n),a!==null&&(ut(a,e,n),Hu(a,t,n)))}function Uu(e,t,a){var n=ct();ol(e,t,a,n)}function ol(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gi(e))ku(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,u=r(s,a);if(l.hasEagerState=!0,l.eagerState=u,lt(u,s))return Wl(e,t,l,0),be===null&&Il(),!1}catch{}finally{}if(a=Hr(e,t,l,n),a!==null)return ut(a,e,n),Hu(a,t,n),!0}return!1}function vo(e,t,a,n){if(n={lane:2,revertLane:$o(),action:n,hasEagerState:!1,eagerState:null,next:null},gi(e)){if(t)throw Error(d(479))}else t=Hr(e,a,n,2),t!==null&&ut(t,e,2)}function gi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function ku(e,t){fn=ui=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Hu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Fs(e,a)}}var xi={readContext:Qe,use:fi,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te},Lu={readContext:Qe,use:fi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:ju,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hi(4194308,4,wu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var n=e();if(Ya){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=$e();if(a!==void 0){var l=a(t);if(Ya){Wt(!0);try{a(t)}finally{Wt(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=zp.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=mo(e);var t=e.queue,a=Uu.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ho,useDeferredValue:function(e,t){var a=$e();return go(a,e,t)},useTransition:function(){var e=mo(!1);return e=Du.bind(null,ae,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,l=$e();if(ue){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),be===null)throw Error(d(349));(oe&124)!==0||iu(n,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,ju(ou.bind(null,n,r,e),[e]),n.flags|=2048,pn(9,pi(),ru.bind(null,n,r,a,t),null),a},useId:function(){var e=$e(),t=be.identifierPrefix;if(ue){var a=Yt,n=Lt;a=(n&~(1<<32-nt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=di++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=wp++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:bo,useFormState:gu,useActionState:gu,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=vo.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:co,useCacheRefresh:function(){return $e().memoizedState=Dp.bind(null,ae)}},Yu={readContext:Qe,use:fi,useCallback:Tu,useContext:Qe,useEffect:Au,useImperativeHandle:Ru,useInsertionEffect:Su,useLayoutEffect:Eu,useMemo:Nu,useReducer:mi,useRef:yu,useState:function(){return mi(Gt)},useDebugValue:ho,useDeferredValue:function(e,t){var a=De();return Mu(a,me.memoizedState,e,t)},useTransition:function(){var e=mi(Gt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:il(e),t]},useSyncExternalStore:lu,useId:_u,useHostTransitionStatus:bo,useFormState:xu,useActionState:xu,useOptimistic:function(e,t){var a=De();return uu(a,me,e,t)},useMemoCache:co,useCacheRefresh:Cu},Op={readContext:Qe,use:fi,useCallback:Tu,useContext:Qe,useEffect:Au,useImperativeHandle:Ru,useInsertionEffect:Su,useLayoutEffect:Eu,useMemo:Nu,useReducer:fo,useRef:yu,useState:function(){return fo(Gt)},useDebugValue:ho,useDeferredValue:function(e,t){var a=De();return me===null?go(a,e,t):Mu(a,me.memoizedState,e,t)},useTransition:function(){var e=fo(Gt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:il(e),t]},useSyncExternalStore:lu,useId:_u,useHostTransitionStatus:bo,useFormState:vu,useActionState:vu,useOptimistic:function(e,t){var a=De();return me!==null?uu(a,me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:co,useCacheRefresh:Cu},hn=null,sl=0;function bi(e){var t=sl;return sl+=1,hn===null&&(hn=[]),Pc(hn,e,t)}function cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vi(e,t){throw t.$$typeof===C?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qu(e){var t=e._init;return t(e._payload)}function Bu(e){function t(y,b){if(e){var A=y.deletions;A===null?(y.deletions=[b],y.flags|=16):A.push(b)}}function a(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function n(y){for(var b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function l(y,b){return y=Ht(y,b),y.index=0,y.sibling=null,y}function r(y,b,A){return y.index=A,e?(A=y.alternate,A!==null?(A=A.index,A<b?(y.flags|=67108866,b):A):(y.flags|=67108866,b)):(y.flags|=1048576,b)}function s(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function u(y,b,A,z){return b===null||b.tag!==6?(b=Yr(A,y.mode,z),b.return=y,b):(b=l(b,A),b.return=y,b)}function p(y,b,A,z){var Y=A.type;return Y===V?M(y,b,A.props.children,z,A.key):b!==null&&(b.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ue&&qu(Y)===b.type)?(b=l(b,A.props),cl(b,A),b.return=y,b):(b=ti(A.type,A.key,A.props,null,y.mode,z),cl(b,A),b.return=y,b)}function E(y,b,A,z){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=qr(A,y.mode,z),b.return=y,b):(b=l(b,A.children||[]),b.return=y,b)}function M(y,b,A,z,Y){return b===null||b.tag!==7?(b=za(A,y.mode,z,Y),b.return=y,b):(b=l(b,A),b.return=y,b)}function O(y,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Yr(""+b,y.mode,A),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return A=ti(b.type,b.key,b.props,null,y.mode,A),cl(A,b),A.return=y,A;case G:return b=qr(b,y.mode,A),b.return=y,b;case Ue:var z=b._init;return b=z(b._payload),O(y,b,A)}if(Ve(b)||Xe(b))return b=za(b,y.mode,A,null),b.return=y,b;if(typeof b.then=="function")return O(y,bi(b),A);if(b.$$typeof===ee)return O(y,ii(y,b),A);vi(y,b)}return null}function R(y,b,A,z){var Y=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return Y!==null?null:u(y,b,""+A,z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case U:return A.key===Y?p(y,b,A,z):null;case G:return A.key===Y?E(y,b,A,z):null;case Ue:return Y=A._init,A=Y(A._payload),R(y,b,A,z)}if(Ve(A)||Xe(A))return Y!==null?null:M(y,b,A,z,null);if(typeof A.then=="function")return R(y,b,bi(A),z);if(A.$$typeof===ee)return R(y,b,ii(y,A),z);vi(y,A)}return null}function T(y,b,A,z,Y){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return y=y.get(A)||null,u(b,y,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case U:return y=y.get(z.key===null?A:z.key)||null,p(b,y,z,Y);case G:return y=y.get(z.key===null?A:z.key)||null,E(b,y,z,Y);case Ue:var ne=z._init;return z=ne(z._payload),T(y,b,A,z,Y)}if(Ve(z)||Xe(z))return y=y.get(A)||null,M(b,y,z,Y,null);if(typeof z.then=="function")return T(y,b,A,bi(z),Y);if(z.$$typeof===ee)return T(y,b,A,ii(b,z),Y);vi(b,z)}return null}function P(y,b,A,z){for(var Y=null,ne=null,X=b,K=b=0,Ye=null;X!==null&&K<A.length;K++){X.index>K?(Ye=X,X=null):Ye=X.sibling;var ce=R(y,X,A[K],z);if(ce===null){X===null&&(X=Ye);break}e&&X&&ce.alternate===null&&t(y,X),b=r(ce,b,K),ne===null?Y=ce:ne.sibling=ce,ne=ce,X=Ye}if(K===A.length)return a(y,X),ue&&_a(y,K),Y;if(X===null){for(;K<A.length;K++)X=O(y,A[K],z),X!==null&&(b=r(X,b,K),ne===null?Y=X:ne.sibling=X,ne=X);return ue&&_a(y,K),Y}for(X=n(X);K<A.length;K++)Ye=T(X,y,K,A[K],z),Ye!==null&&(e&&Ye.alternate!==null&&X.delete(Ye.key===null?K:Ye.key),b=r(Ye,b,K),ne===null?Y=Ye:ne.sibling=Ye,ne=Ye);return e&&X.forEach(function(Aa){return t(y,Aa)}),ue&&_a(y,K),Y}function Z(y,b,A,z){if(A==null)throw Error(d(151));for(var Y=null,ne=null,X=b,K=b=0,Ye=null,ce=A.next();X!==null&&!ce.done;K++,ce=A.next()){X.index>K?(Ye=X,X=null):Ye=X.sibling;var Aa=R(y,X,ce.value,z);if(Aa===null){X===null&&(X=Ye);break}e&&X&&Aa.alternate===null&&t(y,X),b=r(Aa,b,K),ne===null?Y=Aa:ne.sibling=Aa,ne=Aa,X=Ye}if(ce.done)return a(y,X),ue&&_a(y,K),Y;if(X===null){for(;!ce.done;K++,ce=A.next())ce=O(y,ce.value,z),ce!==null&&(b=r(ce,b,K),ne===null?Y=ce:ne.sibling=ce,ne=ce);return ue&&_a(y,K),Y}for(X=n(X);!ce.done;K++,ce=A.next())ce=T(X,y,K,ce.value,z),ce!==null&&(e&&ce.alternate!==null&&X.delete(ce.key===null?K:ce.key),b=r(ce,b,K),ne===null?Y=ce:ne.sibling=ce,ne=ce);return e&&X.forEach(function(_h){return t(y,_h)}),ue&&_a(y,K),Y}function he(y,b,A,z){if(typeof A=="object"&&A!==null&&A.type===V&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case U:e:{for(var Y=A.key;b!==null;){if(b.key===Y){if(Y=A.type,Y===V){if(b.tag===7){a(y,b.sibling),z=l(b,A.props.children),z.return=y,y=z;break e}}else if(b.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ue&&qu(Y)===b.type){a(y,b.sibling),z=l(b,A.props),cl(z,A),z.return=y,y=z;break e}a(y,b);break}else t(y,b);b=b.sibling}A.type===V?(z=za(A.props.children,y.mode,z,A.key),z.return=y,y=z):(z=ti(A.type,A.key,A.props,null,y.mode,z),cl(z,A),z.return=y,y=z)}return s(y);case G:e:{for(Y=A.key;b!==null;){if(b.key===Y)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){a(y,b.sibling),z=l(b,A.children||[]),z.return=y,y=z;break e}else{a(y,b);break}else t(y,b);b=b.sibling}z=qr(A,y.mode,z),z.return=y,y=z}return s(y);case Ue:return Y=A._init,A=Y(A._payload),he(y,b,A,z)}if(Ve(A))return P(y,b,A,z);if(Xe(A)){if(Y=Xe(A),typeof Y!="function")throw Error(d(150));return A=Y.call(A),Z(y,b,A,z)}if(typeof A.then=="function")return he(y,b,bi(A),z);if(A.$$typeof===ee)return he(y,b,ii(y,A),z);vi(y,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(a(y,b.sibling),z=l(b,A),z.return=y,y=z):(a(y,b),z=Yr(A,y.mode,z),z.return=y,y=z),s(y)):a(y,b)}return function(y,b,A,z){try{sl=0;var Y=he(y,b,A,z);return hn=null,Y}catch(X){if(X===Wn||X===oi)throw X;var ne=it(29,X,null,y.mode);return ne.lanes=z,ne.return=y,ne}finally{}}}var gn=Bu(!0),Gu=Bu(!1),bt=_(null),Mt=null;function oa(e){var t=e.alternate;k(_e,_e.current&1),k(bt,e),Mt===null&&(t===null||dn.current!==null||t.memoizedState!==null)&&(Mt=e)}function Xu(e){if(e.tag===22){if(k(_e,_e.current),k(bt,e),Mt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Mt=e)}}else sa()}function sa(){k(_e,_e.current),k(bt,bt.current)}function Xt(e){L(bt),Mt===e&&(Mt=null),L(_e)}var _e=_(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||cs(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var jo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ct(),l=la(n);l.payload=t,a!=null&&(l.callback=a),t=ia(e,l,n),t!==null&&(ut(t,e,n),tl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ct(),l=la(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ia(e,l,n),t!==null&&(ut(t,e,n),tl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),n=la(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(ut(t,e,a),tl(t,e,a))}};function Vu(e,t,a,n,l,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,s):t.prototype&&t.prototype.isPureReactComponent?!Fn(a,n)||!Fn(l,r):!0}function Fu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qu(e){ji(e)}function Zu(e){console.error(e)}function Ku(e){ji(e)}function Ai(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ju(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ao(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){Ai(e,t)},a}function Pu(e){return e=la(e),e.tag=3,e}function $u(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=n.value;e.payload=function(){return l(r)},e.callback=function(){Ju(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Ju(t,a,n),typeof l!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function _p(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Pn(t,a,l,!0),a=bt.current,a!==null){switch(a.tag){case 13:return Mt===null?Qo():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Pr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Ko(e,n,l)),!1;case 22:return a.flags|=65536,n===Pr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Ko(e,n,l)),!1}throw Error(d(435,a.tag))}return Ko(e,n,l),Qo(),!1}if(ue)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Xr&&(e=Error(d(422),{cause:n}),Jn(pt(e,a)))):(n!==Xr&&(t=Error(d(423),{cause:n}),Jn(pt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=pt(n,a),l=Ao(e.stateNode,n,l),Wr(e,l),Re!==4&&(Re=2)),!1;var r=Error(d(520),{cause:n});if(r=pt(r,a),gl===null?gl=[r]:gl.push(r),Re!==4&&(Re=2),t===null)return!0;n=pt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ao(a.stateNode,n,e),Wr(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(pa===null||!pa.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Pu(l),$u(l,e,a,n),Wr(a,l),!1}a=a.return}while(a!==null);return!1}var Iu=Error(d(461)),He=!1;function qe(e,t,a,n){t.child=e===null?Gu(t,null,a,n):gn(t,e.child,a,n)}function Wu(e,t,a,n,l){a=a.render;var r=t.ref;if("ref"in n){var s={};for(var u in n)u!=="ref"&&(s[u]=n[u])}else s=n;return Ha(t),n=lo(e,t,a,s,r,l),u=io(),e!==null&&!He?(ro(e,t,l),Vt(e,t,l)):(ue&&u&&Br(t),t.flags|=1,qe(e,t,n,l),t.child)}function ed(e,t,a,n,l){if(e===null){var r=a.type;return typeof r=="function"&&!Lr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,td(e,t,r,n,l)):(e=ti(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Do(e,l)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Fn,a(s,n)&&e.ref===t.ref)return Vt(e,t,l)}return t.flags|=1,e=Ht(r,n),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,a,n,l){if(e!==null){var r=e.memoizedProps;if(Fn(r,n)&&e.ref===t.ref)if(He=!1,t.pendingProps=n=r,Do(e,l))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Vt(e,t,l)}return So(e,t,a,n,l)}function ad(e,t,a){var n=t.pendingProps,l=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return nd(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ri(t,r!==null?r.cachePool:null),r!==null?tu(t,r):to(),Xu(t);else return t.lanes=t.childLanes=536870912,nd(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(ri(t,r.cachePool),tu(t,r),sa(),t.memoizedState=null):(e!==null&&ri(t,null),to(),sa());return qe(e,t,l,a),t.child}function nd(e,t,a,n){var l=Jr();return l=l===null?null:{parent:Oe._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&ri(t,null),to(),Xu(t),e!==null&&Pn(e,t,n,!0),null}function Si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function So(e,t,a,n,l){return Ha(t),a=lo(e,t,a,n,void 0,l),n=io(),e!==null&&!He?(ro(e,t,l),Vt(e,t,l)):(ue&&n&&Br(t),t.flags|=1,qe(e,t,a,l),t.child)}function ld(e,t,a,n,l,r){return Ha(t),t.updateQueue=null,a=nu(t,n,a,l),au(e),n=io(),e!==null&&!He?(ro(e,t,r),Vt(e,t,r)):(ue&&n&&Br(t),t.flags|=1,qe(e,t,a,r),t.child)}function id(e,t,a,n,l){if(Ha(t),t.stateNode===null){var r=rn,s=a.contextType;typeof s=="object"&&s!==null&&(r=Qe(s)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=jo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},$r(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?Qe(s):rn,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(yo(t,a,s,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&jo.enqueueReplaceState(r,r.state,null),nl(t,n,r,l),al(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,p=qa(a,u);r.props=p;var E=r.context,M=a.contextType;s=rn,typeof M=="object"&&M!==null&&(s=Qe(M));var O=a.getDerivedStateFromProps;M=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||E!==s)&&Fu(t,r,n,s),na=!1;var R=t.memoizedState;r.state=R,nl(t,n,r,l),al(),E=t.memoizedState,u||R!==E||na?(typeof O=="function"&&(yo(t,a,O,n),E=t.memoizedState),(p=na||Vu(t,a,p,n,R,E,s))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=E),r.props=n,r.state=E,r.context=s,n=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Ir(e,t),s=t.memoizedProps,M=qa(a,s),r.props=M,O=t.pendingProps,R=r.context,E=a.contextType,p=rn,typeof E=="object"&&E!==null&&(p=Qe(E)),u=a.getDerivedStateFromProps,(E=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==O||R!==p)&&Fu(t,r,n,p),na=!1,R=t.memoizedState,r.state=R,nl(t,n,r,l),al();var T=t.memoizedState;s!==O||R!==T||na||e!==null&&e.dependencies!==null&&li(e.dependencies)?(typeof u=="function"&&(yo(t,a,u,n),T=t.memoizedState),(M=na||Vu(t,a,M,n,R,T,p)||e!==null&&e.dependencies!==null&&li(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,T,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,T,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),r.props=n,r.state=T,r.context=p,n=M):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Si(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=gn(t,e.child,null,l),t.child=gn(t,null,a,l)):qe(e,t,a,l),t.memoizedState=r.state,e=t.child):e=Vt(e,t,l),e}function rd(e,t,a,n){return Kn(),t.flags|=256,qe(e,t,a,n),t.child}var Eo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wo(e){return{baseLanes:e,cachePool:Zc()}}function Ro(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function od(e,t,a){var n=t.pendingProps,l=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(l?oa(t):sa(),ue){var u=we,p;if(p=u){e:{for(p=u,u=Nt;p.nodeType!==8;){if(!u){u=null;break e}if(p=St(p.nextSibling),p===null){u=null;break e}}u=p}u!==null?(t.memoizedState={dehydrated:u,treeContext:Oa!==null?{id:Lt,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},p=it(18,null,null,0),p.stateNode=u,p.return=t,t.child=p,Ke=t,we=null,p=!0):p=!1}p||Ua(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return cs(u)?t.lanes=32:t.lanes=536870912,null;Xt(t)}return u=n.children,n=n.fallback,l?(sa(),l=t.mode,u=Ei({mode:"hidden",children:u},l),n=za(n,l,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,l=t.child,l.memoizedState=wo(a),l.childLanes=Ro(e,s,a),t.memoizedState=Eo,n):(oa(t),To(t,u))}if(p=e.memoizedState,p!==null&&(u=p.dehydrated,u!==null)){if(r)t.flags&256?(oa(t),t.flags&=-257,t=No(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),l=n.fallback,u=t.mode,n=Ei({mode:"visible",children:n.children},u),l=za(l,u,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,gn(t,e.child,null,a),n=t.child,n.memoizedState=wo(a),n.childLanes=Ro(e,s,a),t.memoizedState=Eo,t=l);else if(oa(t),cs(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var E=s.dgst;s=E,n=Error(d(419)),n.stack="",n.digest=s,Jn({value:n,source:null,stack:null}),t=No(e,t,a)}else if(He||Pn(e,t,a,!1),s=(a&e.childLanes)!==0,He||s){if(s=be,s!==null&&(n=a&-a,n=(n&42)!==0?1:cr(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==p.retryLane))throw p.retryLane=n,ln(e,n),ut(s,e,n),Iu;u.data==="$?"||Qo(),t=No(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,we=St(u.nextSibling),Ke=t,ue=!0,Ca=null,Nt=!1,e!==null&&(gt[xt++]=Lt,gt[xt++]=Yt,gt[xt++]=Oa,Lt=e.id,Yt=e.overflow,Oa=t),t=To(t,n.children),t.flags|=4096);return t}return l?(sa(),l=n.fallback,u=t.mode,p=e.child,E=p.sibling,n=Ht(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,E!==null?l=Ht(E,l):(l=za(l,u,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,u=e.child.memoizedState,u===null?u=wo(a):(p=u.cachePool,p!==null?(E=Oe._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=Zc(),u={baseLanes:u.baseLanes|a,cachePool:p}),l.memoizedState=u,l.childLanes=Ro(e,s,a),t.memoizedState=Eo,n):(oa(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function To(e,t){return t=Ei({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ei(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function No(e,t,a){return gn(t,e.child,null,a),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Fr(e.return,t,a)}function Mo(e,t,a,n,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=l)}function cd(e,t,a){var n=t.pendingProps,l=n.revealOrder,r=n.tail;if(qe(e,t,n.children,a),n=_e.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,a,t);else if(e.tag===19)sd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(k(_e,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Mo(t,!1,l,a,r);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yi(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Mo(t,!0,a,null,r);break;case"together":Mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Pn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Do(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&li(e)))}function Cp(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),aa(t,Oe,e.memoizedState.cache),Kn();break;case 27:case 5:lr(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?od(e,t,a):(oa(t),e=Vt(e,t,a),e!==null?e.sibling:null);oa(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Pn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return cd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(_e,_e.current),n)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,a);case 24:aa(t,Oe,e.memoizedState.cache)}return Vt(e,t,a)}function ud(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Do(e,a)&&(t.flags&128)===0)return He=!1,Cp(e,t,a);He=(e.flags&131072)!==0}else He=!1,ue&&(t.flags&1048576)!==0&&qc(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Lr(n)?(e=qa(n,e),t.tag=1,t=id(null,t,n,e,a)):(t.tag=0,t=So(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===Ae){t.tag=11,t=Wu(null,t,n,e,a);break e}else if(l===ze){t.tag=14,t=ed(null,t,n,e,a);break e}}throw t=wa(n)||n,Error(d(306,t,""))}}return t;case 0:return So(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=qa(n,t.pendingProps),id(e,t,n,l,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var r=t.memoizedState;l=r.element,Ir(e,t),nl(t,n,null,a);var s=t.memoizedState;if(n=s.cache,aa(t,Oe,n),n!==r.cache&&Qr(t,[Oe],a,!0),al(),n=s.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=rd(e,t,n,a);break e}else if(n!==l){l=pt(Error(d(424)),t),Jn(l),t=rd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=St(e.firstChild),Ke=t,ue=!0,Ca=null,Nt=!0,a=Gu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kn(),n===l){t=Vt(e,t,a);break e}qe(e,t,n,a)}t=t.child}return t;case 26:return Si(e,t),e===null?(a=hf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,n=Li(W.current).createElement(a),n[Fe]=t,n[Je]=e,Ge(n,a,e),ke(n),t.stateNode=n):t.memoizedState=hf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lr(t),e===null&&ue&&(n=t.stateNode=ff(t.type,t.pendingProps,W.current),Ke=t,Nt=!0,l=we,xa(t.type)?(us=l,we=St(n.firstChild)):we=l),qe(e,t,t.pendingProps.children,a),Si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((l=n=we)&&(n=sh(n,t.type,t.pendingProps,Nt),n!==null?(t.stateNode=n,Ke=t,we=St(n.firstChild),Nt=!1,l=!0):l=!1),l||Ua(t)),lr(t),l=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,n=r.children,rs(l,r)?n=null:s!==null&&rs(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=lo(e,t,Rp,null,null,a),wl._currentValue=l),Si(e,t),qe(e,t,n,a),t.child;case 6:return e===null&&ue&&((e=a=we)&&(a=ch(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,Ke=t,we=null,e=!0):e=!1),e||Ua(t)),null;case 13:return od(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=gn(t,null,n,a):qe(e,t,n,a),t.child;case 11:return Wu(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,aa(t,t.type,n.value),qe(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ha(t),l=Qe(l),n=n(l),t.flags|=1,qe(e,t,n,a),t.child;case 14:return ed(e,t,t.type,t.pendingProps,a);case 15:return td(e,t,t.type,t.pendingProps,a);case 19:return cd(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Ei(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ht(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return ad(e,t,a);case 24:return Ha(t),n=Qe(Oe),e===null?(l=Jr(),l===null&&(l=be,r=Zr(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:n,cache:l},$r(t),aa(t,Oe,l)):((e.lanes&a)!==0&&(Ir(e,t),nl(t,null,null,a),al()),l=e.memoizedState,r=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),aa(t,Oe,n)):(n=r.cache,aa(t,Oe,n),n!==l.cache&&Qr(t,[Oe],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Ft(e){e.flags|=4}function dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yf(t)){if(t=bt.current,t!==null&&((oe&4194048)===oe?Mt!==null:(oe&62914560)!==oe&&(oe&536870912)===0||t!==Mt))throw el=Pr,Kc;e.flags|=8192}}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xs():536870912,e.lanes|=t,yn|=t)}function ul(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Up(e,t,a){var n=t.pendingProps;switch(Gr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(Oe),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xc())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Ft(t),a!==null?(Se(t),dd(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Ft(t),Se(t),dd(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==n&&Ft(t),Se(t),t.flags&=-16777217),null;case 27:kl(t),a=W.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Se(t),null}e=Q.current,Zn(t)?Bc(t):(e=ff(l,n,a),t.stateNode=e,Ft(t))}return Se(t),null;case 5:if(kl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Se(t),null}if(e=Q.current,Zn(t))Bc(t);else{switch(l=Li(W.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[Fe]=t,e[Je]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ge(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ft(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=W.current,Zn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ke,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||lf(e.nodeValue,a)),e||Ua(t)}else e=Li(e).createTextNode(n),e[Fe]=t,t.stateNode=e}return Se(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[Fe]=t}else Kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),l=!1}else l=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Xt(t),t):(Xt(t),null)}if(Xt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),wi(t,t.updateQueue),Se(t),null;case 4:return It(),e===null&&ts(t.stateNode.containerInfo),Se(t),null;case 10:return Bt(t.type),Se(t),null;case 19:if(L(_e),l=t.memoizedState,l===null)return Se(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)ul(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=yi(e),r!==null){for(t.flags|=128,ul(l,!1),e=r.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Yc(a,e),a=a.sibling;return k(_e,_e.current&1|2),t.child}e=e.sibling}l.tail!==null&&Tt()>Ni&&(t.flags|=128,n=!0,ul(l,!1),t.lanes=4194304)}else{if(!n)if(e=yi(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),ul(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ue)return Se(t),null}else 2*Tt()-l.renderingStartTime>Ni&&a!==536870912&&(t.flags|=128,n=!0,ul(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Tt(),t.sibling=null,e=_e.current,k(_e,n?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Xt(t),ao(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&L(La),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Oe),Se(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function kp(e,t){switch(Gr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(Oe),It(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kl(t),null;case 13:if(Xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(_e),null;case 4:return It(),null;case 10:return Bt(t.type),null;case 22:case 23:return Xt(t),ao(),e!==null&&L(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(Oe),null;case 25:return null;default:return null}}function fd(e,t){switch(Gr(t),t.tag){case 3:Bt(Oe),It();break;case 26:case 27:case 5:kl(t);break;case 4:It();break;case 13:Xt(t);break;case 19:L(_e);break;case 10:Bt(t.type);break;case 22:case 23:Xt(t),ao(),e!==null&&L(La);break;case 24:Bt(Oe)}}function dl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var r=a.create,s=a.inst;n=r(),s.destroy=n}a=a.next}while(a!==l)}}catch(u){xe(t,t.return,u)}}function ca(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){var s=n.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,l=t;var p=a,E=u;try{E()}catch(M){xe(l,p,M)}}}n=n.next}while(n!==r)}}catch(M){xe(t,t.return,M)}}function md(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{eu(t,a)}catch(n){xe(e,e.return,n)}}}function pd(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){xe(e,t,n)}}function fl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){xe(e,t,l)}}function Dt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){xe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){xe(e,t,l)}else a.current=null}function hd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){xe(e,e.return,l)}}function zo(e,t,a){try{var n=e.stateNode;nh(n,e.type,a,t),n[Je]=t}catch(l){xe(e,e.return,l)}}function gd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _o(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Hi));else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(_o(e,t,a),e=e.sibling;e!==null;)_o(e,t,a),e=e.sibling}function Ri(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ri(e,t,a),e=e.sibling;e!==null;)Ri(e,t,a),e=e.sibling}function xd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ge(t,n,a),t[Fe]=e,t[Je]=a}catch(r){xe(e,e.return,r)}}var Qt=!1,Ne=!1,Co=!1,bd=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Hp(e,t){if(e=e.containerInfo,ls=Vi,e=Mc(e),zr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,u=-1,p=-1,E=0,M=0,O=e,R=null;t:for(;;){for(var T;O!==a||l!==0&&O.nodeType!==3||(u=s+l),O!==r||n!==0&&O.nodeType!==3||(p=s+n),O.nodeType===3&&(s+=O.nodeValue.length),(T=O.firstChild)!==null;)R=O,O=T;for(;;){if(O===e)break t;if(R===a&&++E===l&&(u=s),R===r&&++M===n&&(p=s),(T=O.nextSibling)!==null)break;O=R,R=O.parentNode}O=T}a=u===-1||p===-1?null:{start:u,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(is={focusedElem:e,selectionRange:a},Vi=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){switch(t=Le,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var P=qa(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(P,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(Z){xe(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ss(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ss(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}}function vd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),n&4&&dl(5,a);break;case 1:if(ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){xe(a,a.return,s)}else{var l=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){xe(a,a.return,s)}}n&64&&md(a),n&512&&fl(a,a.return);break;case 3:if(ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{eu(e,t)}catch(s){xe(a,a.return,s)}}break;case 27:t===null&&n&4&&xd(a);case 26:case 5:ua(e,a),t===null&&n&4&&hd(a),n&512&&fl(a,a.return);break;case 12:ua(e,a);break;case 13:ua(e,a),n&4&&Ad(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qp.bind(null,a),uh(e,a))));break;case 22:if(n=a.memoizedState!==null||Qt,!n){t=t!==null&&t.memoizedState!==null||Ne,l=Qt;var r=Ne;Qt=n,(Ne=t)&&!r?da(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),Qt=l,Ne=r}break;case 30:break;default:ua(e,a)}}function yd(e){var t=e.alternate;t!==null&&(e.alternate=null,yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,Ie=!1;function Zt(e,t,a){for(a=a.child;a!==null;)jd(e,t,a),a=a.sibling}function jd(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(_n,a)}catch{}switch(a.tag){case 26:Ne||Dt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ne||Dt(a,t);var n=ye,l=Ie;xa(a.type)&&(ye=a.stateNode,Ie=!1),Zt(e,t,a),jl(a.stateNode),ye=n,Ie=l;break;case 5:Ne||Dt(a,t);case 6:if(n=ye,l=Ie,ye=null,Zt(e,t,a),ye=n,Ie=l,ye!==null)if(Ie)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(r){xe(a,t,r)}else try{ye.removeChild(a.stateNode)}catch(r){xe(a,t,r)}break;case 18:ye!==null&&(Ie?(e=ye,uf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ml(e)):uf(ye,a.stateNode));break;case 4:n=ye,l=Ie,ye=a.stateNode.containerInfo,Ie=!0,Zt(e,t,a),ye=n,Ie=l;break;case 0:case 11:case 14:case 15:Ne||ca(2,a,t),Ne||ca(4,a,t),Zt(e,t,a);break;case 1:Ne||(Dt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&pd(a,t,n)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:Ne=(n=Ne)||a.memoizedState!==null,Zt(e,t,a),Ne=n;break;default:Zt(e,t,a)}}function Ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(a){xe(t,t.return,a)}}function Lp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bd),t;default:throw Error(d(435,e.tag))}}function Uo(e,t){var a=Lp(e);t.forEach(function(n){var l=Zp.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function rt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],r=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(xa(u.type)){ye=u.stateNode,Ie=!1;break e}break;case 5:ye=u.stateNode,Ie=!1;break e;case 3:case 4:ye=u.stateNode.containerInfo,Ie=!0;break e}u=u.return}if(ye===null)throw Error(d(160));jd(r,s,l),ye=null,Ie=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}var At=null;function Sd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ot(e),n&4&&(ca(3,e,e.return),dl(3,e),ca(5,e,e.return));break;case 1:rt(t,e),ot(e),n&512&&(Ne||a===null||Dt(a,a.return)),n&64&&Qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=At;if(rt(t,e),ot(e),n&512&&(Ne||a===null||Dt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[kn]||r[Fe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Ge(r,n,a),r[Fe]=e,ke(r),n=r;break e;case"link":var s=bf("link","href",l).get(n+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(r=s[u],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}r=l.createElement(n),Ge(r,n,a),l.head.appendChild(r);break;case"meta":if(s=bf("meta","content",l).get(n+(a.content||""))){for(u=0;u<s.length;u++)if(r=s[u],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}r=l.createElement(n),Ge(r,n,a),l.head.appendChild(r);break;default:throw Error(d(468,n))}r[Fe]=e,ke(r),n=r}e.stateNode=n}else vf(l,e.type,e.stateNode);else e.stateNode=xf(l,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?vf(l,e.type,e.stateNode):xf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&zo(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),ot(e),n&512&&(Ne||a===null||Dt(a,a.return)),a!==null&&n&4&&zo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),ot(e),n&512&&(Ne||a===null||Dt(a,a.return)),e.flags&32){l=e.stateNode;try{$a(l,"")}catch(T){xe(e,e.return,T)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,zo(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Co=!0);break;case 6:if(rt(t,e),ot(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(T){xe(e,e.return,T)}}break;case 3:if(Bi=null,l=At,At=Yi(t.containerInfo),rt(t,e),At=l,ot(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(T){xe(e,e.return,T)}Co&&(Co=!1,Ed(e));break;case 4:n=At,At=Yi(e.stateNode.containerInfo),rt(t,e),ot(e),At=n;break;case 12:rt(t,e),ot(e);break;case 13:rt(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bo=Tt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uo(e,n)));break;case 22:l=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,E=Qt,M=Ne;if(Qt=E||l,Ne=M||p,rt(t,e),Ne=M,Qt=E,ot(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||p||Qt||Ne||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(r=p.stateNode,l)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=p.stateNode;var O=p.memoizedProps.style,R=O!=null&&O.hasOwnProperty("display")?O.display:null;u.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(T){xe(p,p.return,T)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(T){xe(p,p.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Uo(e,a))));break;case 19:rt(t,e),ot(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Uo(e,n)));break;case 30:break;case 21:break;default:rt(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(gd(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var l=a.stateNode,r=Oo(e);Ri(e,r,l);break;case 5:var s=a.stateNode;a.flags&32&&($a(s,""),a.flags&=-33);var u=Oo(e);Ri(e,u,s);break;case 3:case 4:var p=a.stateNode.containerInfo,E=Oo(e);_o(e,E,p);break;default:throw Error(d(161))}}catch(M){xe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ed(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vd(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ba(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&pd(t,t.return,a),Ba(t);break;case 27:jl(t.stateNode);case 26:case 5:Dt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:da(l,r,a),dl(4,r);break;case 1:if(da(l,r,a),n=r,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){xe(n,n.return,E)}if(n=r,l=n.updateQueue,l!==null){var u=n.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)Wc(p[l],u)}catch(E){xe(n,n.return,E)}}a&&s&64&&md(r),fl(r,r.return);break;case 27:xd(r);case 26:case 5:da(l,r,a),a&&n===null&&s&4&&hd(r),fl(r,r.return);break;case 12:da(l,r,a);break;case 13:da(l,r,a),a&&s&4&&Ad(l,r);break;case 22:r.memoizedState===null&&da(l,r,a),fl(r,r.return);break;case 30:break;default:da(l,r,a)}t=t.sibling}}function ko(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$n(a))}function Ho(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e))}function zt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wd(e,t,a,n),t=t.sibling}function wd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,n),l&2048&&dl(9,t);break;case 1:zt(e,t,a,n);break;case 3:zt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$n(e)));break;case 12:if(l&2048){zt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,u=r.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){xe(t,t.return,p)}}else zt(e,t,a,n);break;case 13:zt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?zt(e,t,a,n):ml(e,t):r._visibility&2?zt(e,t,a,n):(r._visibility|=2,xn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&ko(s,t);break;case 24:zt(e,t,a,n),l&2048&&Ho(t.alternate,t);break;default:zt(e,t,a,n)}}function xn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,u=a,p=n,E=s.flags;switch(s.tag){case 0:case 11:case 15:xn(r,s,u,p,l),dl(8,s);break;case 23:break;case 22:var M=s.stateNode;s.memoizedState!==null?M._visibility&2?xn(r,s,u,p,l):ml(r,s):(M._visibility|=2,xn(r,s,u,p,l)),l&&E&2048&&ko(s.alternate,s);break;case 24:xn(r,s,u,p,l),l&&E&2048&&Ho(s.alternate,s);break;default:xn(r,s,u,p,l)}t=t.sibling}}function ml(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ml(a,n),l&2048&&ko(n.alternate,n);break;case 24:ml(a,n),l&2048&&Ho(n.alternate,n);break;default:ml(a,n)}t=t.sibling}}var pl=8192;function bn(e){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)Rd(e),e=e.sibling}function Rd(e){switch(e.tag){case 26:bn(e),e.flags&pl&&e.memoizedState!==null&&Sh(At,e.memoizedState,e.memoizedProps);break;case 5:bn(e);break;case 3:case 4:var t=At;At=Yi(e.stateNode.containerInfo),bn(e),At=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=pl,pl=16777216,bn(e),pl=t):bn(e));break;default:bn(e)}}function Td(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Le=n,Md(n,e)}Td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nd(e),e=e.sibling}function Nd(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&ca(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ti(e)):hl(e);break;default:hl(e)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Le=n,Md(n,e)}Td(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Ti(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ti(t));break;default:Ti(t)}e=e.sibling}}function Md(e,t){for(;Le!==null;){var a=Le;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:$n(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Le=n;else e:for(a=e;Le!==null;){n=Le;var l=n.sibling,r=n.return;if(yd(n),n===a){Le=null;break e}if(l!==null){l.return=r,Le=l;break e}Le=r}}}var Yp={getCacheForType:function(e){var t=Qe(Oe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},qp=typeof WeakMap=="function"?WeakMap:Map,de=0,be=null,le=null,oe=0,fe=0,st=null,fa=!1,vn=!1,Lo=!1,Kt=0,Re=0,ma=0,Ga=0,Yo=0,vt=0,yn=0,gl=null,We=null,qo=!1,Bo=0,Ni=1/0,Mi=null,pa=null,Be=0,ha=null,jn=null,An=0,Go=0,Xo=null,Dd=null,xl=0,Vo=null;function ct(){if((de&2)!==0&&oe!==0)return oe&-oe;if(D.T!==null){var e=cn;return e!==0?e:$o()}return Qs()}function zd(){vt===0&&(vt=(oe&536870912)===0||ue?Gs():536870912);var e=bt.current;return e!==null&&(e.flags|=32),vt}function ut(e,t,a){(e===be&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),ga(e,oe,vt,!1)),Un(e,a),((de&2)===0||e!==be)&&(e===be&&((de&2)===0&&(Ga|=a),Re===4&&ga(e,oe,vt,!1)),Ot(e))}function Od(e,t,a){if((de&6)!==0)throw Error(d(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Cn(e,t),l=n?Xp(e,t):Zo(e,t,!0),r=n;do{if(l===0){vn&&!n&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Bp(a)){l=Zo(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;l=gl;var p=u.current.memoizedState.isDehydrated;if(p&&(Sn(u,s).flags|=256),s=Zo(u,s,!1),s!==2){if(Lo&&!p){u.errorRecoveryDisabledLanes|=r,Ga|=r,l=4;break e}r=We,We=l,r!==null&&(We===null?We=r:We.push.apply(We,r))}l=s}if(r=!1,l!==2)continue}}if(l===1){Sn(e,0),ga(e,t,0,!0);break}e:{switch(n=e,r=l,r){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:ga(n,t,vt,!fa);break e;case 2:We=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=Bo+300-Tt(),10<l)){if(ga(n,t,vt,!fa),ql(n,0,!0)!==0)break e;n.timeoutHandle=sf(_d.bind(null,n,a,We,Mi,qo,t,vt,Ga,yn,fa,r,2,-0,0),l);break e}_d(n,a,We,Mi,qo,t,vt,Ga,yn,fa,r,0,-0,0)}}break}while(!0);Ot(e)}function _d(e,t,a,n,l,r,s,u,p,E,M,O,R,T){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(El={stylesheets:null,count:0,unsuspend:Ah},Rd(t),O=Eh(),O!==null)){e.cancelPendingCommit=O(qd.bind(null,e,t,r,a,n,l,s,u,p,M,1,R,T)),ga(e,r,s,!E);return}qd(e,t,r,a,n,l,s,u,p)}function Bp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],r=l.getSnapshot;l=l.value;try{if(!lt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,n){t&=~Yo,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var r=31-nt(l),s=1<<r;n[r]=-1,l&=~s}a!==0&&Vs(e,a,t)}function Di(){return(de&6)===0?(bl(0),!1):!0}function Fo(){if(le!==null){if(fe===0)var e=le.return;else e=le,qt=ka=null,oo(e),hn=null,sl=0,e=le;for(;e!==null;)fd(e.alternate,e),e=e.return;le=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ih(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Fo(),be=e,le=a=Ht(e.current,null),oe=t,fe=0,st=null,fa=!1,vn=Cn(e,t),Lo=!1,yn=vt=Yo=Ga=ma=Re=0,We=gl=null,qo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-nt(n),r=1<<l;t|=e[l],n&=~r}return Kt=t,Il(),a}function Cd(e,t){ae=null,D.H=xi,t===Wn||t===oi?(t=$c(),fe=3):t===Kc?(t=$c(),fe=4):fe=t===Iu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,le===null&&(Re=1,Ai(e,pt(t,e.current)))}function Ud(){var e=D.H;return D.H=xi,e===null?xi:e}function kd(){var e=D.A;return D.A=Yp,e}function Qo(){Re=4,fa||(oe&4194048)!==oe&&bt.current!==null||(vn=!0),(ma&134217727)===0&&(Ga&134217727)===0||be===null||ga(be,oe,vt,!1)}function Zo(e,t,a){var n=de;de|=2;var l=Ud(),r=kd();(be!==e||oe!==t)&&(Mi=null,Sn(e,t)),t=!1;var s=Re;e:do try{if(fe!==0&&le!==null){var u=le,p=st;switch(fe){case 8:Fo(),s=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var E=fe;if(fe=0,st=null,En(e,u,p,E),a&&vn){s=0;break e}break;default:E=fe,fe=0,st=null,En(e,u,p,E)}}Gp(),s=Re;break}catch(M){Cd(e,M)}while(!0);return t&&e.shellSuspendCounter++,qt=ka=null,de=n,D.H=l,D.A=r,le===null&&(be=null,oe=0,Il()),s}function Gp(){for(;le!==null;)Hd(le)}function Xp(e,t){var a=de;de|=2;var n=Ud(),l=kd();be!==e||oe!==t?(Mi=null,Ni=Tt()+500,Sn(e,t)):vn=Cn(e,t);e:do try{if(fe!==0&&le!==null){t=le;var r=st;t:switch(fe){case 1:fe=0,st=null,En(e,t,r,1);break;case 2:case 9:if(Jc(r)){fe=0,st=null,Ld(t);break}t=function(){fe!==2&&fe!==9||be!==e||(fe=7),Ot(e)},r.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Jc(r)?(fe=0,st=null,Ld(t)):(fe=0,st=null,En(e,t,r,7));break;case 5:var s=null;switch(le.tag){case 26:s=le.memoizedState;case 5:case 27:var u=le;if(!s||yf(s)){fe=0,st=null;var p=u.sibling;if(p!==null)le=p;else{var E=u.return;E!==null?(le=E,zi(E)):le=null}break t}}fe=0,st=null,En(e,t,r,5);break;case 6:fe=0,st=null,En(e,t,r,6);break;case 8:Fo(),Re=6;break e;default:throw Error(d(462))}}Vp();break}catch(M){Cd(e,M)}while(!0);return qt=ka=null,D.H=n,D.A=l,de=a,le!==null?0:(be=null,oe=0,Il(),Re)}function Vp(){for(;le!==null&&!fm();)Hd(le)}function Hd(e){var t=ud(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?zi(e):le=t}function Ld(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ld(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=ld(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:oo(t);default:fd(a,t),t=le=Yc(t,Kt),t=ud(a,t,Kt)}e.memoizedProps=e.pendingProps,t===null?zi(e):le=t}function En(e,t,a,n){qt=ka=null,oo(t),hn=null,sl=0;var l=t.return;try{if(_p(e,l,t,a,oe)){Re=1,Ai(e,pt(a,e.current)),le=null;return}}catch(r){if(l!==null)throw le=l,r;Re=1,Ai(e,pt(a,e.current)),le=null;return}t.flags&32768?(ue||n===1?e=!0:vn||(oe&536870912)!==0?e=!1:(fa=e=!0,(n===2||n===9||n===3||n===6)&&(n=bt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Yd(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){Yd(t,fa);return}e=t.return;var a=Up(t.alternate,t,Kt);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Re===0&&(Re=5)}function Yd(e,t){do{var a=kp(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Re=6,le=null}function qd(e,t,a,n,l,r,s,u,p){e.cancelPendingCommit=null;do Oi();while(Be!==0);if((de&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(r=t.lanes|t.childLanes,r|=kr,Am(e,a,r,s,u,p),e===be&&(le=be=null,oe=0),jn=t,ha=e,An=a,Go=r,Xo=l,Dd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kp(Hl,function(){return Fd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,l=H.p,H.p=2,s=de,de|=4;try{Hp(e,t,a)}finally{de=s,H.p=l,D.T=n}}Be=1,Bd(),Gd(),Xd()}}function Bd(){if(Be===1){Be=0;var e=ha,t=jn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=H.p;H.p=2;var l=de;de|=4;try{Sd(t,e);var r=is,s=Mc(e.containerInfo),u=r.focusedElem,p=r.selectionRange;if(s!==u&&u&&u.ownerDocument&&Nc(u.ownerDocument.documentElement,u)){if(p!==null&&zr(u)){var E=p.start,M=p.end;if(M===void 0&&(M=E),"selectionStart"in u)u.selectionStart=E,u.selectionEnd=Math.min(M,u.value.length);else{var O=u.ownerDocument||document,R=O&&O.defaultView||window;if(R.getSelection){var T=R.getSelection(),P=u.textContent.length,Z=Math.min(p.start,P),he=p.end===void 0?Z:Math.min(p.end,P);!T.extend&&Z>he&&(s=he,he=Z,Z=s);var y=Tc(u,Z),b=Tc(u,he);if(y&&b&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==b.node||T.focusOffset!==b.offset)){var A=O.createRange();A.setStart(y.node,y.offset),T.removeAllRanges(),Z>he?(T.addRange(A),T.extend(b.node,b.offset)):(A.setEnd(b.node,b.offset),T.addRange(A))}}}}for(O=[],T=u;T=T.parentNode;)T.nodeType===1&&O.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<O.length;u++){var z=O[u];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Vi=!!ls,is=ls=null}finally{de=l,H.p=n,D.T=a}}e.current=t,Be=2}}function Gd(){if(Be===2){Be=0;var e=ha,t=jn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=H.p;H.p=2;var l=de;de|=4;try{vd(e,t.alternate,t)}finally{de=l,H.p=n,D.T=a}}Be=3}}function Xd(){if(Be===4||Be===3){Be=0,mm();var e=ha,t=jn,a=An,n=Dd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,jn=ha=null,Vd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(pa=null),ur(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(_n,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,l=H.p,H.p=2,D.T=null;try{for(var r=e.onRecoverableError,s=0;s<n.length;s++){var u=n[s];r(u.value,{componentStack:u.stack})}}finally{D.T=t,H.p=l}}(An&3)!==0&&Oi(),Ot(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Vo?xl++:(xl=0,Vo=e):xl=0,bl(0)}}function Vd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$n(t)))}function Oi(e){return Bd(),Gd(),Xd(),Fd()}function Fd(){if(Be!==5)return!1;var e=ha,t=Go;Go=0;var a=ur(An),n=D.T,l=H.p;try{H.p=32>a?32:a,D.T=null,a=Xo,Xo=null;var r=ha,s=An;if(Be=0,jn=ha=null,An=0,(de&6)!==0)throw Error(d(331));var u=de;if(de|=4,Nd(r.current),wd(r,r.current,s,a),de=u,bl(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(_n,r)}catch{}return!0}finally{H.p=l,D.T=n,Vd(e,t)}}function Qd(e,t,a){t=pt(a,t),t=Ao(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(Un(e,2),Ot(e))}function xe(e,t,a){if(e.tag===3)Qd(e,e,a);else for(;t!==null;){if(t.tag===3){Qd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pa===null||!pa.has(n))){e=pt(a,e),a=Pu(2),n=ia(t,a,2),n!==null&&($u(a,n,t,e),Un(n,2),Ot(n));break}}t=t.return}}function Ko(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new qp;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Lo=!0,l.add(a),e=Fp.bind(null,e,t,a),t.then(e,e))}function Fp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,be===e&&(oe&a)===a&&(Re===4||Re===3&&(oe&62914560)===oe&&300>Tt()-Bo?(de&2)===0&&Sn(e,0):Yo|=a,yn===oe&&(yn=0)),Ot(e)}function Zd(e,t){t===0&&(t=Xs()),e=ln(e,t),e!==null&&(Un(e,t),Ot(e))}function Qp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zd(e,a)}function Zp(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),Zd(e,a)}function Kp(e,t){return rr(e,t)}var _i=null,wn=null,Jo=!1,Ci=!1,Po=!1,Xa=0;function Ot(e){e!==wn&&e.next===null&&(wn===null?_i=wn=e:wn=wn.next=e),Ci=!0,Jo||(Jo=!0,Pp())}function bl(e,t){if(!Po&&Ci){Po=!0;do for(var a=!1,n=_i;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var r=0;else{var s=n.suspendedLanes,u=n.pingedLanes;r=(1<<31-nt(42|e)+1)-1,r&=l&~(s&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,$d(n,r))}else r=oe,r=ql(n,n===be?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Cn(n,r)||(a=!0,$d(n,r));n=n.next}while(a);Po=!1}}function Jp(){Kd()}function Kd(){Ci=Jo=!1;var e=0;Xa!==0&&(lh()&&(e=Xa),Xa=0);for(var t=Tt(),a=null,n=_i;n!==null;){var l=n.next,r=Jd(n,t);r===0?(n.next=null,a===null?_i=l:a.next=l,l===null&&(wn=a)):(a=n,(e!==0||(r&3)!==0)&&(Ci=!0)),n=l}bl(e)}function Jd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-nt(r),u=1<<s,p=l[s];p===-1?((u&a)===0||(u&n)!==0)&&(l[s]=jm(u,t)):p<=t&&(e.expiredLanes|=u),r&=~u}if(t=be,a=oe,a=ql(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&or(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&or(n),ur(a)){case 2:case 8:a=qs;break;case 32:a=Hl;break;case 268435456:a=Bs;break;default:a=Hl}return n=Pd.bind(null,e),a=rr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&or(n),e.callbackPriority=2,e.callbackNode=null,2}function Pd(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Oi()&&e.callbackNode!==a)return null;var n=oe;return n=ql(e,e===be?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Od(e,n,t),Jd(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?Pd.bind(null,e):null)}function $d(e,t){if(Oi())return null;Od(e,t,!0)}function Pp(){rh(function(){(de&6)!==0?rr(Ys,Jp):Kd()})}function $o(){return Xa===0&&(Xa=Gs()),Xa}function Id(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fl(""+e)}function Wd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function $p(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var r=Id((l[Je]||null).action),s=n.submitter;s&&(t=(t=s[Je]||null)?Id(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var u=new Jl("action","action",null,n,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Xa!==0){var p=s?Wd(l,s):new FormData(l);xo(a,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(u.preventDefault(),p=s?Wd(l,s):new FormData(l),xo(a,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var Io=0;Io<Ur.length;Io++){var Wo=Ur[Io],Ip=Wo.toLowerCase(),Wp=Wo[0].toUpperCase()+Wo.slice(1);jt(Ip,"on"+Wp)}jt(Oc,"onAnimationEnd"),jt(_c,"onAnimationIteration"),jt(Cc,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(gp,"onTransitionRun"),jt(xp,"onTransitionStart"),jt(bp,"onTransitionCancel"),jt(Uc,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function ef(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var s=n.length-1;0<=s;s--){var u=n[s],p=u.instance,E=u.currentTarget;if(u=u.listener,p!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=E;try{r(l)}catch(M){ji(M)}l.currentTarget=null,r=p}else for(s=0;s<n.length;s++){if(u=n[s],p=u.instance,E=u.currentTarget,u=u.listener,p!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=E;try{r(l)}catch(M){ji(M)}l.currentTarget=null,r=p}}}}function ie(e,t){var a=t[dr];a===void 0&&(a=t[dr]=new Set);var n=e+"__bubble";a.has(n)||(tf(t,e,2,!1),a.add(n))}function es(e,t,a){var n=0;t&&(n|=4),tf(a,e,n,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function ts(e){if(!e[Ui]){e[Ui]=!0,Ks.forEach(function(a){a!=="selectionchange"&&(eh.has(a)||es(a,!1,e),es(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,es("selectionchange",!1,t))}}function tf(e,t,a,n){switch(Rf(t)){case 2:var l=Th;break;case 8:l=Nh;break;default:l=hs}a=l.bind(null,t,a,e),l=void 0,!Ar||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function as(e,t,a,n,l){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var u=n.stateNode.containerInfo;if(u===l)break;if(s===4)for(s=n.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;u!==null;){if(s=Fa(u),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){n=r=s;continue e}u=u.parentNode}}n=n.return}sc(function(){var E=r,M=yr(a),O=[];e:{var R=kc.get(e);if(R!==void 0){var T=Jl,P=e;switch(e){case"keypress":if(Zl(a)===0)break e;case"keydown":case"keyup":T=Km;break;case"focusin":P="focus",T=Rr;break;case"focusout":P="blur",T=Rr;break;case"beforeblur":case"afterblur":T=Rr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=$m;break;case Oc:case _c:case Cc:T=Ym;break;case Uc:T=Wm;break;case"scroll":case"scrollend":T=Cm;break;case"wheel":T=tp;break;case"copy":case"cut":case"paste":T=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=mc;break;case"toggle":case"beforetoggle":T=np}var Z=(t&4)!==0,he=!Z&&(e==="scroll"||e==="scrollend"),y=Z?R!==null?R+"Capture":null:R;Z=[];for(var b=E,A;b!==null;){var z=b;if(A=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||A===null||y===null||(z=Ln(b,y),z!=null&&Z.push(yl(b,z,A))),he)break;b=b.return}0<Z.length&&(R=new T(R,P,null,a,M),O.push({event:R,listeners:Z}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",R&&a!==vr&&(P=a.relatedTarget||a.fromElement)&&(Fa(P)||P[Va]))break e;if((T||R)&&(R=M.window===M?M:(R=M.ownerDocument)?R.defaultView||R.parentWindow:window,T?(P=a.relatedTarget||a.toElement,T=E,P=P?Fa(P):null,P!==null&&(he=g(P),Z=P.tag,P!==he||Z!==5&&Z!==27&&Z!==6)&&(P=null)):(T=null,P=E),T!==P)){if(Z=dc,z="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Z=mc,z="onPointerLeave",y="onPointerEnter",b="pointer"),he=T==null?R:Hn(T),A=P==null?R:Hn(P),R=new Z(z,b+"leave",T,a,M),R.target=he,R.relatedTarget=A,z=null,Fa(M)===E&&(Z=new Z(y,b+"enter",P,a,M),Z.target=A,Z.relatedTarget=he,z=Z),he=z,T&&P)t:{for(Z=T,y=P,b=0,A=Z;A;A=Rn(A))b++;for(A=0,z=y;z;z=Rn(z))A++;for(;0<b-A;)Z=Rn(Z),b--;for(;0<A-b;)y=Rn(y),A--;for(;b--;){if(Z===y||y!==null&&Z===y.alternate)break t;Z=Rn(Z),y=Rn(y)}Z=null}else Z=null;T!==null&&af(O,R,T,Z,!1),P!==null&&he!==null&&af(O,he,P,Z,!0)}}e:{if(R=E?Hn(E):window,T=R.nodeName&&R.nodeName.toLowerCase(),T==="select"||T==="input"&&R.type==="file")var Y=jc;else if(vc(R))if(Ac)Y=mp;else{Y=dp;var ne=up}else T=R.nodeName,!T||T.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?E&&br(E.elementType)&&(Y=jc):Y=fp;if(Y&&(Y=Y(e,E))){yc(O,Y,a,M);break e}ne&&ne(e,R,E),e==="focusout"&&E&&R.type==="number"&&E.memoizedProps.value!=null&&xr(R,"number",R.value)}switch(ne=E?Hn(E):window,e){case"focusin":(vc(ne)||ne.contentEditable==="true")&&(tn=ne,Or=E,Qn=null);break;case"focusout":Qn=Or=tn=null;break;case"mousedown":_r=!0;break;case"contextmenu":case"mouseup":case"dragend":_r=!1,Dc(O,a,M);break;case"selectionchange":if(hp)break;case"keydown":case"keyup":Dc(O,a,M)}var X;if(Nr)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else en?xc(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(pc&&a.locale!=="ko"&&(en||K!=="onCompositionStart"?K==="onCompositionEnd"&&en&&(X=cc()):(ta=M,Sr="value"in ta?ta.value:ta.textContent,en=!0)),ne=ki(E,K),0<ne.length&&(K=new fc(K,e,null,a,M),O.push({event:K,listeners:ne}),X?K.data=X:(X=bc(a),X!==null&&(K.data=X)))),(X=ip?rp(e,a):op(e,a))&&(K=ki(E,"onBeforeInput"),0<K.length&&(ne=new fc("onBeforeInput","beforeinput",null,a,M),O.push({event:ne,listeners:K}),ne.data=X)),$p(O,e,E,a,M)}ef(O,t)})}function yl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ki(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Ln(e,a),l!=null&&n.unshift(yl(e,l,r)),l=Ln(e,t),l!=null&&n.push(yl(e,l,r))),e.tag===3)return n;e=e.return}return[]}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function af(e,t,a,n,l){for(var r=t._reactName,s=[];a!==null&&a!==n;){var u=a,p=u.alternate,E=u.stateNode;if(u=u.tag,p!==null&&p===n)break;u!==5&&u!==26&&u!==27||E===null||(p=E,l?(E=Ln(a,r),E!=null&&s.unshift(yl(a,E,p))):l||(E=Ln(a,r),E!=null&&s.push(yl(a,E,p)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var th=/\r\n?/g,ah=/\u0000|\uFFFD/g;function nf(e){return(typeof e=="string"?e:""+e).replace(th,`
`).replace(ah,"")}function lf(e,t){return t=nf(t),nf(e)===t}function Hi(){}function pe(e,t,a,n,l,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||$a(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&$a(e,""+n);break;case"className":Gl(e,"class",n);break;case"tabIndex":Gl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(e,a,n);break;case"style":rc(e,n,r);break;case"data":if(t!=="object"){Gl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Fl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&pe(e,t,"name",l.name,l,null),pe(e,t,"formEncType",l.formEncType,l,null),pe(e,t,"formMethod",l.formMethod,l,null),pe(e,t,"formTarget",l.formTarget,l,null)):(pe(e,t,"encType",l.encType,l,null),pe(e,t,"method",l.method,l,null),pe(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Fl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Hi);break;case"onScroll":n!=null&&ie("scroll",e);break;case"onScrollEnd":n!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Fl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Bl(e,"popover",n);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Om.get(a)||a,Bl(e,a,n))}}function ns(e,t,a,n,l,r){switch(a){case"style":rc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?$a(e,n):(typeof n=="number"||typeof n=="bigint")&&$a(e,""+n);break;case"onScroll":n!=null&&ie("scroll",e);break;case"onScrollEnd":n!=null&&ie("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Js.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[Je]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Bl(e,a,n)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var n=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:pe(e,t,r,s,a,null)}}l&&pe(e,t,"srcSet",a.srcSet,a,null),n&&pe(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var u=r=s=l=null,p=null,E=null;for(n in a)if(a.hasOwnProperty(n)){var M=a[n];if(M!=null)switch(n){case"name":l=M;break;case"type":s=M;break;case"checked":p=M;break;case"defaultChecked":E=M;break;case"value":r=M;break;case"defaultValue":u=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(d(137,t));break;default:pe(e,t,n,M,a,null)}}ac(e,r,u,p,E,s,l,!1),Xl(e);return;case"select":ie("invalid",e),n=s=r=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":r=u;break;case"defaultValue":s=u;break;case"multiple":n=u;default:pe(e,t,l,u,a,null)}t=r,a=s,e.multiple=!!n,t!=null?Pa(e,!!n,t,!1):a!=null&&Pa(e,!!n,a,!0);return;case"textarea":ie("invalid",e),r=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":n=u;break;case"defaultValue":l=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:pe(e,t,s,u,a,null)}lc(e,n,l,r),Xl(e);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:pe(e,t,p,n,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(n=0;n<vl.length;n++)ie(vl[n],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(n=a[E],n!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:pe(e,t,E,n,a,null)}return;default:if(br(t)){for(M in a)a.hasOwnProperty(M)&&(n=a[M],n!==void 0&&ns(e,t,M,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&pe(e,t,u,n,a,null))}function nh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,u=null,p=null,E=null,M=null;for(T in a){var O=a[T];if(a.hasOwnProperty(T)&&O!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":p=O;default:n.hasOwnProperty(T)||pe(e,t,T,null,n,O)}}for(var R in n){var T=n[R];if(O=a[R],n.hasOwnProperty(R)&&(T!=null||O!=null))switch(R){case"type":r=T;break;case"name":l=T;break;case"checked":E=T;break;case"defaultChecked":M=T;break;case"value":s=T;break;case"defaultValue":u=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,t));break;default:T!==O&&pe(e,t,R,T,n,O)}}gr(e,s,u,p,E,M,r,l);return;case"select":T=s=u=R=null;for(r in a)if(p=a[r],a.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":T=p;default:n.hasOwnProperty(r)||pe(e,t,r,null,n,p)}for(l in n)if(r=n[l],p=a[l],n.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":R=r;break;case"defaultValue":u=r;break;case"multiple":s=r;default:r!==p&&pe(e,t,l,r,n,p)}t=u,a=s,n=T,R!=null?Pa(e,!!a,R,!1):!!n!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":T=R=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:pe(e,t,u,null,n,l)}for(s in n)if(l=n[s],r=a[s],n.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":R=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==r&&pe(e,t,s,l,n,r)}nc(e,R,T);return;case"option":for(var P in a)if(R=a[P],a.hasOwnProperty(P)&&R!=null&&!n.hasOwnProperty(P))switch(P){case"selected":e.selected=!1;break;default:pe(e,t,P,null,n,R)}for(p in n)if(R=n[p],T=a[p],n.hasOwnProperty(p)&&R!==T&&(R!=null||T!=null))switch(p){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:pe(e,t,p,R,n,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)R=a[Z],a.hasOwnProperty(Z)&&R!=null&&!n.hasOwnProperty(Z)&&pe(e,t,Z,null,n,R);for(E in n)if(R=n[E],T=a[E],n.hasOwnProperty(E)&&R!==T&&(R!=null||T!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,t));break;default:pe(e,t,E,R,n,T)}return;default:if(br(t)){for(var he in a)R=a[he],a.hasOwnProperty(he)&&R!==void 0&&!n.hasOwnProperty(he)&&ns(e,t,he,void 0,n,R);for(M in n)R=n[M],T=a[M],!n.hasOwnProperty(M)||R===T||R===void 0&&T===void 0||ns(e,t,M,R,n,T);return}}for(var y in a)R=a[y],a.hasOwnProperty(y)&&R!=null&&!n.hasOwnProperty(y)&&pe(e,t,y,null,n,R);for(O in n)R=n[O],T=a[O],!n.hasOwnProperty(O)||R===T||R==null&&T==null||pe(e,t,O,R,n,T)}var ls=null,is=null;function Li(e){return e.nodeType===9?e:e.ownerDocument}function rf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function of(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=null;function lh(){var e=window.event;return e&&e.type==="popstate"?e===os?!1:(os=e,!0):(os=null,!1)}var sf=typeof setTimeout=="function"?setTimeout:void 0,ih=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(e){return cf.resolve(null).then(e).catch(oh)}:sf;function oh(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function uf(e,t){var a=t,n=0,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var s=e.ownerDocument;if(a&1&&jl(s.documentElement),a&2&&jl(s.body),a&4)for(a=s.head,jl(a),s=a.firstChild;s;){var u=s.nextSibling,p=s.nodeName;s[kn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=u}}if(l===0){e.removeChild(r),Ml(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);Ml(t)}function ss(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ss(a),fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function ch(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function cs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function uh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var us=null;function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ff(e,t,a){switch(t=Li(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function jl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fr(e)}var yt=new Map,mf=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=H.d;H.d={f:dh,r:fh,D:mh,C:ph,L:hh,m:gh,X:bh,S:xh,M:vh};function dh(){var e=Jt.f(),t=Di();return e||t}function fh(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?Ou(t):Jt.r(e)}var Tn=typeof document>"u"?null:document;function pf(e,t,a){var n=Tn;if(n&&typeof t=="string"&&t){var l=mt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),mf.has(l)||(mf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Ge(t,"link",e),ke(t),n.head.appendChild(t)))}}function mh(e){Jt.D(e),pf("dns-prefetch",e,null)}function ph(e,t){Jt.C(e,t),pf("preconnect",e,t)}function hh(e,t,a){Jt.L(e,t,a);var n=Tn;if(n&&e&&t){var l='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+mt(a.imageSizes)+'"]')):l+='[href="'+mt(e)+'"]';var r=l;switch(t){case"style":r=Nn(e);break;case"script":r=Mn(e)}yt.has(r)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(r,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Al(r))||t==="script"&&n.querySelector(Sl(r))||(t=n.createElement("link"),Ge(t,"link",e),ke(t),n.head.appendChild(t)))}}function gh(e,t){Jt.m(e,t);var a=Tn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+mt(n)+'"][href="'+mt(e)+'"]',r=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Mn(e)}if(!yt.has(r)&&(e=w({rel:"modulepreload",href:e},t),yt.set(r,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(r)))return}n=a.createElement("link"),Ge(n,"link",e),ke(n),a.head.appendChild(n)}}}function xh(e,t,a){Jt.S(e,t,a);var n=Tn;if(n&&e){var l=Za(n).hoistableStyles,r=Nn(e);t=t||"default";var s=l.get(r);if(!s){var u={loading:0,preload:null};if(s=n.querySelector(Al(r)))u.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(r))&&ds(e,a);var p=s=n.createElement("link");ke(p),Ge(p,"link",e),p._p=new Promise(function(E,M){p.onload=E,p.onerror=M}),p.addEventListener("load",function(){u.loading|=1}),p.addEventListener("error",function(){u.loading|=2}),u.loading|=4,qi(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:u},l.set(r,s)}}}function bh(e,t){Jt.X(e,t);var a=Tn;if(a&&e){var n=Za(a).hoistableScripts,l=Mn(e),r=n.get(l);r||(r=a.querySelector(Sl(l)),r||(e=w({src:e,async:!0},t),(t=yt.get(l))&&fs(e,t),r=a.createElement("script"),ke(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function vh(e,t){Jt.M(e,t);var a=Tn;if(a&&e){var n=Za(a).hoistableScripts,l=Mn(e),r=n.get(l);r||(r=a.querySelector(Sl(l)),r||(e=w({src:e,async:!0,type:"module"},t),(t=yt.get(l))&&fs(e,t),r=a.createElement("script"),ke(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function hf(e,t,a,n){var l=(l=W.current)?Yi(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Nn(a.href),a=Za(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Nn(a.href);var r=Za(l).hoistableStyles,s=r.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=l.querySelector(Al(e)))&&!r._p&&(s.instance=r,s.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),r||yh(l,e,a,s.state))),t&&n===null)throw Error(d(528,""));return s}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Mn(a),a=Za(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Nn(e){return'href="'+mt(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function gf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function yh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ge(t,"link",a),ke(t),e.head.appendChild(t))}function Mn(e){return'[src="'+mt(e)+'"]'}function Sl(e){return"script[async]"+e}function xf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+mt(a.href)+'"]');if(n)return t.instance=n,ke(n),n;var l=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ke(n),Ge(n,"style",l),qi(n,a.precedence,e),t.instance=n;case"stylesheet":l=Nn(a.href);var r=e.querySelector(Al(l));if(r)return t.state.loading|=4,t.instance=r,ke(r),r;n=gf(a),(l=yt.get(l))&&ds(n,l),r=(e.ownerDocument||e).createElement("link"),ke(r);var s=r;return s._p=new Promise(function(u,p){s.onload=u,s.onerror=p}),Ge(r,"link",n),t.state.loading|=4,qi(r,a.precedence,e),t.instance=r;case"script":return r=Mn(a.src),(l=e.querySelector(Sl(r)))?(t.instance=l,ke(l),l):(n=a,(l=yt.get(r))&&(n=w({},a),fs(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),ke(l),Ge(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,qi(n,a.precedence,e));return t.instance}function qi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,r=l,s=0;s<n.length;s++){var u=n[s];if(u.dataset.precedence===t)r=u;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ds(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bi=null;function bf(e,t,a){if(Bi===null){var n=new Map,l=Bi=new Map;l.set(a,n)}else l=Bi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[kn]||r[Fe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var u=n.get(s);u?u.push(r):n.set(s,[r])}}return n}function vf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function jh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var El=null;function Ah(){}function Sh(e,t,a){if(El===null)throw Error(d(475));var n=El;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Nn(a.href),r=e.querySelector(Al(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Gi.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,ke(r);return}r=e.ownerDocument||e,a=gf(a),(l=yt.get(l))&&ds(a,l),r=r.createElement("link"),ke(r);var s=r;s._p=new Promise(function(u,p){s.onload=u,s.onerror=p}),Ge(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Gi.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Eh(){if(El===null)throw Error(d(475));var e=El;return e.stylesheets&&e.count===0&&ms(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ms(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gi(){if(this.count--,this.count===0){if(this.stylesheets)ms(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xi=null;function ms(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xi=new Map,t.forEach(wh,e),Xi=null,Gi.call(e))}function wh(e,t){if(!(t.state.loading&4)){var a=Xi.get(e);if(a)var n=a.get(null);else{a=new Map,Xi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),r=a.get(s)||n,r===n&&a.set(null,l),a.set(s,l),this.count++,n=Gi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var wl={$$typeof:ee,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Rh(e,t,a,n,l,r,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sr(0),this.hiddenUpdates=sr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function jf(e,t,a,n,l,r,s,u,p,E,M,O){return e=new Rh(e,t,a,s,u,p,E,O),t=1,r===!0&&(t|=24),r=it(3,null,null,t),e.current=r,r.stateNode=e,t=Zr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},$r(r),e}function Af(e){return e?(e=rn,e):rn}function Sf(e,t,a,n,l,r){l=Af(l),n.context===null?n.context=l:n.pendingContext=l,n=la(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ia(e,n,t),a!==null&&(ut(a,e,t),tl(a,e,t))}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ps(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function wf(e){if(e.tag===13){var t=ln(e,67108864);t!==null&&ut(t,e,67108864),ps(e,67108864)}}var Vi=!0;function Th(e,t,a,n){var l=D.T;D.T=null;var r=H.p;try{H.p=2,hs(e,t,a,n)}finally{H.p=r,D.T=l}}function Nh(e,t,a,n){var l=D.T;D.T=null;var r=H.p;try{H.p=8,hs(e,t,a,n)}finally{H.p=r,D.T=l}}function hs(e,t,a,n){if(Vi){var l=gs(n);if(l===null)as(e,t,n,Fi,a),Tf(e,n);else if(Dh(l,e,t,a,n))n.stopPropagation();else if(Tf(e,n),t&4&&-1<Mh.indexOf(e)){for(;l!==null;){var r=Qa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ra(r.pendingLanes);if(s!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var p=1<<31-nt(s);u.entanglements[1]|=p,s&=~p}Ot(r),(de&6)===0&&(Ni=Tt()+500,bl(0))}}break;case 13:u=ln(r,2),u!==null&&ut(u,r,2),Di(),ps(r,2)}if(r=gs(n),r===null&&as(e,t,n,Fi,a),r===l)break;l=r}l!==null&&n.stopPropagation()}else as(e,t,n,null,a)}}function gs(e){return e=yr(e),xs(e)}var Fi=null;function xs(e){if(Fi=null,e=Fa(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=S(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fi=e,null}function Rf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pm()){case Ys:return 2;case qs:return 8;case Hl:case hm:return 32;case Bs:return 268435456;default:return 32}default:return 32}}var bs=!1,ba=null,va=null,ya=null,Rl=new Map,Tl=new Map,ja=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tf(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Rl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(t.pointerId)}}function Nl(e,t,a,n,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&wf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Dh(e,t,a,n,l){switch(t){case"focusin":return ba=Nl(ba,e,t,a,n,l),!0;case"dragenter":return va=Nl(va,e,t,a,n,l),!0;case"mouseover":return ya=Nl(ya,e,t,a,n,l),!0;case"pointerover":var r=l.pointerId;return Rl.set(r,Nl(Rl.get(r)||null,e,t,a,n,l)),!0;case"gotpointercapture":return r=l.pointerId,Tl.set(r,Nl(Tl.get(r)||null,e,t,a,n,l)),!0}return!1}function Nf(e){var t=Fa(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=S(a),t!==null){e.blockedOn=t,Sm(e.priority,function(){if(a.tag===13){var n=ct();n=cr(n);var l=ln(a,n);l!==null&&ut(l,a,n),ps(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=gs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);vr=n,a.target.dispatchEvent(n),vr=null}else return t=Qa(a),t!==null&&wf(t),e.blockedOn=a,!1;t.shift()}return!0}function Mf(e,t,a){Qi(e)&&a.delete(t)}function zh(){bs=!1,ba!==null&&Qi(ba)&&(ba=null),va!==null&&Qi(va)&&(va=null),ya!==null&&Qi(ya)&&(ya=null),Rl.forEach(Mf),Tl.forEach(Mf)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zh)))}var Ki=null;function Df(e){Ki!==e&&(Ki=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(xs(n||a)===null)continue;break}var r=Qa(a);r!==null&&(e.splice(t,3),t-=3,xo(r,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Ml(e){function t(p){return Zi(p,e)}ba!==null&&Zi(ba,e),va!==null&&Zi(va,e),ya!==null&&Zi(ya,e),Rl.forEach(t),Tl.forEach(t);for(var a=0;a<ja.length;a++){var n=ja[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)Nf(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],r=a[n+1],s=l[Je]||null;if(typeof r=="function")s||Df(a);else if(s){var u=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[Je]||null)u=s.formAction;else if(xs(l)!==null)continue}else u=s.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),Df(a)}}}function vs(e){this._internalRoot=e}Ji.prototype.render=vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=ct();Sf(a,n,e,t,null,null)},Ji.prototype.unmount=vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sf(e.current,2,null,e,null,null),Di(),t[Va]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ja.length&&t!==0&&t<ja[a].priority;a++);ja.splice(a,0,e),a===0&&Nf(e)}};var zf=c.version;if(zf!=="19.1.1")throw Error(d(527,zf,"19.1.1"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=j(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var Oh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{_n=Pi.inject(Oh),at=Pi}catch{}}return zl.createRoot=function(e,t){if(!m(e))throw Error(d(299));var a=!1,n="",l=Qu,r=Zu,s=Ku,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=jf(e,1,!1,null,null,a,n,l,r,s,u,null),e[Va]=t.current,ts(e),new vs(t)},zl.hydrateRoot=function(e,t,a){if(!m(e))throw Error(d(299));var n=!1,l="",r=Qu,s=Zu,u=Ku,p=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),t=jf(e,1,!0,t,a??null,n,l,r,s,u,p,E),t.context=Af(null),a=t.current,n=ct(),n=cr(n),l=la(n),l.callback=null,ia(a,l,n),a=n,t.current.lanes=a,Un(t,a),Ot(t),e[Va]=t.current,ts(e),new Ji(t)},zl.version="19.1.1",zl}var Bf;function Xh(){if(Bf)return As.exports;Bf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),As.exports=Gh(),As.exports}var Vh=Xh();const Fh=$f(Vh);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gf="popstate";function Qh(o={}){function c(d,m){let{pathname:g,search:S,hash:N}=d.location;return Ms("",{pathname:g,search:S,hash:N},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(d,m){return typeof m=="string"?m:_l(m)}return Kh(c,f,null,o)}function je(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function wt(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Zh(){return Math.random().toString(36).substring(2,10)}function Xf(o,c){return{usr:o.state,key:o.key,idx:c}}function Ms(o,c,f=null,d){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof c=="string"?Dn(c):c,state:f,key:c&&c.key||d||Zh()}}function _l({pathname:o="/",search:c="",hash:f=""}){return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(o+=f.charAt(0)==="#"?f:"#"+f),o}function Dn(o){let c={};if(o){let f=o.indexOf("#");f>=0&&(c.hash=o.substring(f),o=o.substring(0,f));let d=o.indexOf("?");d>=0&&(c.search=o.substring(d),o=o.substring(0,d)),o&&(c.pathname=o)}return c}function Kh(o,c,f,d={}){let{window:m=document.defaultView,v5Compat:g=!1}=d,S=m.history,N="POP",j=null,h=w();h==null&&(h=0,S.replaceState({...S.state,idx:h},""));function w(){return(S.state||{idx:null}).idx}function C(){N="POP";let q=w(),F=q==null?null:q-h;h=q,j&&j({action:N,location:$.location,delta:F})}function U(q,F){N="PUSH";let B=Ms($.location,q,F);h=w()+1;let ee=Xf(B,h),Ae=$.createHref(B);try{S.pushState(ee,"",Ae)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;m.location.assign(Ae)}g&&j&&j({action:N,location:$.location,delta:1})}function G(q,F){N="REPLACE";let B=Ms($.location,q,F);h=w();let ee=Xf(B,h),Ae=$.createHref(B);S.replaceState(ee,"",Ae),g&&j&&j({action:N,location:$.location,delta:0})}function V(q){return Jh(q)}let $={get action(){return N},get location(){return o(m,S)},listen(q){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(Gf,C),j=q,()=>{m.removeEventListener(Gf,C),j=null}},createHref(q){return c(m,q)},createURL:V,encodeLocation(q){let F=V(q);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:U,replace:G,go(q){return S.go(q)}};return $}function Jh(o,c=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),je(f,"No window.location.(origin|href) available to create URL");let d=typeof o=="string"?o:_l(o);return d=d.replace(/ $/,"%20"),!c&&d.startsWith("//")&&(d=f+d),new URL(d,f)}function If(o,c,f="/"){return Ph(o,c,f,!1)}function Ph(o,c,f,d){let m=typeof c=="string"?Dn(c):c,g=$t(m.pathname||"/",f);if(g==null)return null;let S=Wf(o);$h(S);let N=null;for(let j=0;N==null&&j<S.length;++j){let h=sg(g);N=rg(S[j],h,d)}return N}function Wf(o,c=[],f=[],d="",m=!1){let g=(S,N,j=m,h)=>{let w={relativePath:h===void 0?S.path||"":h,caseSensitive:S.caseSensitive===!0,childrenIndex:N,route:S};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(d)&&j)return;je(w.relativePath.startsWith(d),`Absolute route path "${w.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(d.length)}let C=Pt([d,w.relativePath]),U=f.concat(w);S.children&&S.children.length>0&&(je(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),Wf(S.children,c,U,C,j)),!(S.path==null&&!S.index)&&c.push({path:C,score:lg(C,S.index),routesMeta:U})};return o.forEach((S,N)=>{if(S.path===""||!S.path?.includes("?"))g(S,N);else for(let j of em(S.path))g(S,N,!0,j)}),c}function em(o){let c=o.split("/");if(c.length===0)return[];let[f,...d]=c,m=f.endsWith("?"),g=f.replace(/\?$/,"");if(d.length===0)return m?[g,""]:[g];let S=em(d.join("/")),N=[];return N.push(...S.map(j=>j===""?g:[g,j].join("/"))),m&&N.push(...S),N.map(j=>o.startsWith("/")&&j===""?"/":j)}function $h(o){o.sort((c,f)=>c.score!==f.score?f.score-c.score:ig(c.routesMeta.map(d=>d.childrenIndex),f.routesMeta.map(d=>d.childrenIndex)))}var Ih=/^:[\w-]+$/,Wh=3,eg=2,tg=1,ag=10,ng=-2,Vf=o=>o==="*";function lg(o,c){let f=o.split("/"),d=f.length;return f.some(Vf)&&(d+=ng),c&&(d+=eg),f.filter(m=>!Vf(m)).reduce((m,g)=>m+(Ih.test(g)?Wh:g===""?tg:ag),d)}function ig(o,c){return o.length===c.length&&o.slice(0,-1).every((d,m)=>d===c[m])?o[o.length-1]-c[c.length-1]:0}function rg(o,c,f=!1){let{routesMeta:d}=o,m={},g="/",S=[];for(let N=0;N<d.length;++N){let j=d[N],h=N===d.length-1,w=g==="/"?c:c.slice(g.length)||"/",C=er({path:j.relativePath,caseSensitive:j.caseSensitive,end:h},w),U=j.route;if(!C&&h&&f&&!d[d.length-1].route.index&&(C=er({path:j.relativePath,caseSensitive:j.caseSensitive,end:!1},w)),!C)return null;Object.assign(m,C.params),S.push({params:m,pathname:Pt([g,C.pathname]),pathnameBase:fg(Pt([g,C.pathnameBase])),route:U}),C.pathnameBase!=="/"&&(g=Pt([g,C.pathnameBase]))}return S}function er(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[f,d]=og(o.path,o.caseSensitive,o.end),m=c.match(f);if(!m)return null;let g=m[0],S=g.replace(/(.)\/+$/,"$1"),N=m.slice(1);return{params:d.reduce((h,{paramName:w,isOptional:C},U)=>{if(w==="*"){let V=N[U]||"";S=g.slice(0,g.length-V.length).replace(/(.)\/+$/,"$1")}const G=N[U];return C&&!G?h[w]=void 0:h[w]=(G||"").replace(/%2F/g,"/"),h},{}),pathname:g,pathnameBase:S,pattern:o}}function og(o,c=!1,f=!0){wt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let d=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,N,j)=>(d.push({paramName:N,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(d.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,c?void 0:"i"),d]}function sg(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return wt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),o}}function $t(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,d=o.charAt(f);return d&&d!=="/"?null:o.slice(f)||"/"}function cg(o,c="/"){let{pathname:f,search:d="",hash:m=""}=typeof o=="string"?Dn(o):o;return{pathname:f?f.startsWith("/")?f:ug(f,c):c,search:mg(d),hash:pg(m)}}function ug(o,c){let f=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Rs(o,c,f,d){return`Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dg(o){return o.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function Os(o){let c=dg(o);return c.map((f,d)=>d===c.length-1?f.pathname:f.pathnameBase)}function _s(o,c,f,d=!1){let m;typeof o=="string"?m=Dn(o):(m={...o},je(!m.pathname||!m.pathname.includes("?"),Rs("?","pathname","search",m)),je(!m.pathname||!m.pathname.includes("#"),Rs("#","pathname","hash",m)),je(!m.search||!m.search.includes("#"),Rs("#","search","hash",m)));let g=o===""||m.pathname==="",S=g?"/":m.pathname,N;if(S==null)N=f;else{let C=c.length-1;if(!d&&S.startsWith("..")){let U=S.split("/");for(;U[0]==="..";)U.shift(),C-=1;m.pathname=U.join("/")}N=C>=0?c[C]:"/"}let j=cg(m,N),h=S&&S!=="/"&&S.endsWith("/"),w=(g||S===".")&&f.endsWith("/");return!j.pathname.endsWith("/")&&(h||w)&&(j.pathname+="/"),j}var Pt=o=>o.join("/").replace(/\/\/+/g,"/"),fg=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),mg=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,pg=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function hg(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var tm=["POST","PUT","PATCH","DELETE"];new Set(tm);var gg=["GET",...tm];new Set(gg);var zn=v.createContext(null);zn.displayName="DataRouter";var tr=v.createContext(null);tr.displayName="DataRouterState";v.createContext(!1);var am=v.createContext({isTransitioning:!1});am.displayName="ViewTransition";var xg=v.createContext(new Map);xg.displayName="Fetchers";var bg=v.createContext(null);bg.displayName="Await";var Rt=v.createContext(null);Rt.displayName="Navigation";var Cl=v.createContext(null);Cl.displayName="Location";var _t=v.createContext({outlet:null,matches:[],isDataRoute:!1});_t.displayName="Route";var Cs=v.createContext(null);Cs.displayName="RouteError";function vg(o,{relative:c}={}){je(On(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:d}=v.useContext(Rt),{hash:m,pathname:g,search:S}=Ul(o,{relative:c}),N=g;return f!=="/"&&(N=g==="/"?f:Pt([f,g])),d.createHref({pathname:N,search:S,hash:m})}function On(){return v.useContext(Cl)!=null}function Ct(){return je(On(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Cl).location}var nm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lm(o){v.useContext(Rt).static||v.useLayoutEffect(o)}function ar(){let{isDataRoute:o}=v.useContext(_t);return o?Og():yg()}function yg(){je(On(),"useNavigate() may be used only in the context of a <Router> component.");let o=v.useContext(zn),{basename:c,navigator:f}=v.useContext(Rt),{matches:d}=v.useContext(_t),{pathname:m}=Ct(),g=JSON.stringify(Os(d)),S=v.useRef(!1);return lm(()=>{S.current=!0}),v.useCallback((j,h={})=>{if(wt(S.current,nm),!S.current)return;if(typeof j=="number"){f.go(j);return}let w=_s(j,JSON.parse(g),m,h.relative==="path");o==null&&c!=="/"&&(w.pathname=w.pathname==="/"?c:Pt([c,w.pathname])),(h.replace?f.replace:f.push)(w,h.state,h)},[c,f,g,m,o])}v.createContext(null);function Ul(o,{relative:c}={}){let{matches:f}=v.useContext(_t),{pathname:d}=Ct(),m=JSON.stringify(Os(f));return v.useMemo(()=>_s(o,JSON.parse(m),d,c==="path"),[o,m,d,c])}function jg(o,c){return im(o,c)}function im(o,c,f,d,m){je(On(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=v.useContext(Rt),{matches:S}=v.useContext(_t),N=S[S.length-1],j=N?N.params:{},h=N?N.pathname:"/",w=N?N.pathnameBase:"/",C=N&&N.route;{let B=C&&C.path||"";rm(h,!C||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let U=Ct(),G;if(c){let B=typeof c=="string"?Dn(c):c;je(w==="/"||B.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${B.pathname}" was given in the \`location\` prop.`),G=B}else G=U;let V=G.pathname||"/",$=V;if(w!=="/"){let B=w.replace(/^\//,"").split("/");$="/"+V.replace(/^\//,"").split("/").slice(B.length).join("/")}let q=If(o,{pathname:$});wt(C||q!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),wt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=Rg(q&&q.map(B=>Object.assign({},B,{params:Object.assign({},j,B.params),pathname:Pt([w,g.encodeLocation?g.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?w:Pt([w,g.encodeLocation?g.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),S,f,d,m);return c&&F?v.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},F):F}function Ag(){let o=zg(),c=hg(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),f=o instanceof Error?o.stack:null,d="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:d},g={padding:"2px 4px",backgroundColor:d},S=null;return console.error("Error handled by React Router default ErrorBoundary:",o),S=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:g},"ErrorBoundary")," or"," ",v.createElement("code",{style:g},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},c),f?v.createElement("pre",{style:m},f):null,S)}var Sg=v.createElement(Ag,null),Eg=class extends v.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,c){return c.location!==o.location||c.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:c.error,location:c.location,revalidation:o.revalidation||c.revalidation}}componentDidCatch(o,c){this.props.unstable_onError?this.props.unstable_onError(o,c):console.error("React Router caught the following error during render",o)}render(){return this.state.error!==void 0?v.createElement(_t.Provider,{value:this.props.routeContext},v.createElement(Cs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wg({routeContext:o,match:c,children:f}){let d=v.useContext(zn);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),v.createElement(_t.Provider,{value:o},f)}function Rg(o,c=[],f=null,d=null,m=null){if(o==null){if(!f)return null;if(f.errors)o=f.matches;else if(c.length===0&&!f.initialized&&f.matches.length>0)o=f.matches;else return null}let g=o,S=f?.errors;if(S!=null){let h=g.findIndex(w=>w.route.id&&S?.[w.route.id]!==void 0);je(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`),g=g.slice(0,Math.min(g.length,h+1))}let N=!1,j=-1;if(f)for(let h=0;h<g.length;h++){let w=g[h];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(j=h),w.route.id){let{loaderData:C,errors:U}=f,G=w.route.loader&&!C.hasOwnProperty(w.route.id)&&(!U||U[w.route.id]===void 0);if(w.route.lazy||G){N=!0,j>=0?g=g.slice(0,j+1):g=[g[0]];break}}}return g.reduceRight((h,w,C)=>{let U,G=!1,V=null,$=null;f&&(U=S&&w.route.id?S[w.route.id]:void 0,V=w.route.errorElement||Sg,N&&(j<0&&C===0?(rm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,$=null):j===C&&(G=!0,$=w.route.hydrateFallbackElement||null)));let q=c.concat(g.slice(0,C+1)),F=()=>{let B;return U?B=V:G?B=$:w.route.Component?B=v.createElement(w.route.Component,null):w.route.element?B=w.route.element:B=h,v.createElement(wg,{match:w,routeContext:{outlet:h,matches:q,isDataRoute:f!=null},children:B})};return f&&(w.route.ErrorBoundary||w.route.errorElement||C===0)?v.createElement(Eg,{location:f.location,revalidation:f.revalidation,component:V,error:U,children:F(),routeContext:{outlet:null,matches:q,isDataRoute:!0},unstable_onError:d}):F()},null)}function Us(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tg(o){let c=v.useContext(zn);return je(c,Us(o)),c}function Ng(o){let c=v.useContext(tr);return je(c,Us(o)),c}function Mg(o){let c=v.useContext(_t);return je(c,Us(o)),c}function ks(o){let c=Mg(o),f=c.matches[c.matches.length-1];return je(f.route.id,`${o} can only be used on routes that contain a unique "id"`),f.route.id}function Dg(){return ks("useRouteId")}function zg(){let o=v.useContext(Cs),c=Ng("useRouteError"),f=ks("useRouteError");return o!==void 0?o:c.errors?.[f]}function Og(){let{router:o}=Tg("useNavigate"),c=ks("useNavigate"),f=v.useRef(!1);return lm(()=>{f.current=!0}),v.useCallback(async(m,g={})=>{wt(f.current,nm),f.current&&(typeof m=="number"?o.navigate(m):await o.navigate(m,{fromRouteId:c,...g}))},[o,c])}var Ff={};function rm(o,c,f){!c&&!Ff[o]&&(Ff[o]=!0,wt(!1,f))}v.memo(_g);function _g({routes:o,future:c,state:f,unstable_onError:d}){return im(o,void 0,f,d,c)}function Qf({to:o,replace:c,state:f,relative:d}){je(On(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=v.useContext(Rt);wt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=v.useContext(_t),{pathname:S}=Ct(),N=ar(),j=_s(o,Os(g),S,d==="path"),h=JSON.stringify(j);return v.useEffect(()=>{N(JSON.parse(h),{replace:c,state:f,relative:d})},[N,h,d,c,f]),null}function Et(o){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cg({basename:o="/",children:c=null,location:f,navigationType:d="POP",navigator:m,static:g=!1}){je(!On(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=o.replace(/^\/*/,"/"),N=v.useMemo(()=>({basename:S,navigator:m,static:g,future:{}}),[S,m,g]);typeof f=="string"&&(f=Dn(f));let{pathname:j="/",search:h="",hash:w="",state:C=null,key:U="default"}=f,G=v.useMemo(()=>{let V=$t(j,S);return V==null?null:{location:{pathname:V,search:h,hash:w,state:C,key:U},navigationType:d}},[S,j,h,w,C,U,d]);return wt(G!=null,`<Router basename="${S}"> is not able to match the URL "${j}${h}${w}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:v.createElement(Rt.Provider,{value:N},v.createElement(Cl.Provider,{children:c,value:G}))}function Ug({children:o,location:c}){return jg(Ds(o),c)}function Ds(o,c=[]){let f=[];return v.Children.forEach(o,(d,m)=>{if(!v.isValidElement(d))return;let g=[...c,m];if(d.type===v.Fragment){f.push.apply(f,Ds(d.props.children,g));return}je(d.type===Et,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!d.props.index||!d.props.children,"An index route cannot have child routes.");let S={id:d.props.id||g.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(S.children=Ds(d.props.children,g)),f.push(S)}),f}var Ii="get",Wi="application/x-www-form-urlencoded";function nr(o){return o!=null&&typeof o.tagName=="string"}function kg(o){return nr(o)&&o.tagName.toLowerCase()==="button"}function Hg(o){return nr(o)&&o.tagName.toLowerCase()==="form"}function Lg(o){return nr(o)&&o.tagName.toLowerCase()==="input"}function Yg(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function qg(o,c){return o.button===0&&(!c||c==="_self")&&!Yg(o)}var $i=null;function Bg(){if($i===null)try{new FormData(document.createElement("form"),0),$i=!1}catch{$i=!0}return $i}var Gg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ts(o){return o!=null&&!Gg.has(o)?(wt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wi}"`),null):o}function Xg(o,c){let f,d,m,g,S;if(Hg(o)){let N=o.getAttribute("action");d=N?$t(N,c):null,f=o.getAttribute("method")||Ii,m=Ts(o.getAttribute("enctype"))||Wi,g=new FormData(o)}else if(kg(o)||Lg(o)&&(o.type==="submit"||o.type==="image")){let N=o.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let j=o.getAttribute("formaction")||N.getAttribute("action");if(d=j?$t(j,c):null,f=o.getAttribute("formmethod")||N.getAttribute("method")||Ii,m=Ts(o.getAttribute("formenctype"))||Ts(N.getAttribute("enctype"))||Wi,g=new FormData(N,o),!Bg()){let{name:h,type:w,value:C}=o;if(w==="image"){let U=h?`${h}.`:"";g.append(`${U}x`,"0"),g.append(`${U}y`,"0")}else h&&g.append(h,C)}}else{if(nr(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Ii,d=null,m=Wi,S=o}return g&&m==="text/plain"&&(S=g,g=void 0),{action:d,method:f.toLowerCase(),encType:m,formData:g,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hs(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function Vg(o,c,f){let d=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return d.pathname==="/"?d.pathname=`_root.${f}`:c&&$t(d.pathname,c)==="/"?d.pathname=`${c.replace(/\/$/,"")}/_root.${f}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${f}`,d}async function Fg(o,c){if(o.id in c)return c[o.id];try{let f=await import(o.module);return c[o.id]=f,f}catch(f){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qg(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Zg(o,c,f){let d=await Promise.all(o.map(async m=>{let g=c.routes[m.route.id];if(g){let S=await Fg(g,f);return S.links?S.links():[]}return[]}));return $g(d.flat(1).filter(Qg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Zf(o,c,f,d,m,g){let S=(j,h)=>f[h]?j.route.id!==f[h].route.id:!0,N=(j,h)=>f[h].pathname!==j.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==j.params["*"];return g==="assets"?c.filter((j,h)=>S(j,h)||N(j,h)):g==="data"?c.filter((j,h)=>{let w=d.routes[j.route.id];if(!w||!w.hasLoader)return!1;if(S(j,h)||N(j,h))return!0;if(j.route.shouldRevalidate){let C=j.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:j.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Kg(o,c,{includeHydrateFallback:f}={}){return Jg(o.map(d=>{let m=c.routes[d.route.id];if(!m)return[];let g=[m.module];return m.clientActionModule&&(g=g.concat(m.clientActionModule)),m.clientLoaderModule&&(g=g.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(g=g.concat(m.hydrateFallbackModule)),m.imports&&(g=g.concat(m.imports)),g}).flat(1))}function Jg(o){return[...new Set(o)]}function Pg(o){let c={},f=Object.keys(o).sort();for(let d of f)c[d]=o[d];return c}function $g(o,c){let f=new Set;return new Set(c),o.reduce((d,m)=>{let g=JSON.stringify(Pg(m));return f.has(g)||(f.add(g),d.push({key:g,link:m})),d},[])}function om(){let o=v.useContext(zn);return Hs(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Ig(){let o=v.useContext(tr);return Hs(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Ls=v.createContext(void 0);Ls.displayName="FrameworkContext";function sm(){let o=v.useContext(Ls);return Hs(o,"You must render this element inside a <HydratedRouter> element"),o}function Wg(o,c){let f=v.useContext(Ls),[d,m]=v.useState(!1),[g,S]=v.useState(!1),{onFocus:N,onBlur:j,onMouseEnter:h,onMouseLeave:w,onTouchStart:C}=c,U=v.useRef(null);v.useEffect(()=>{if(o==="render"&&S(!0),o==="viewport"){let $=F=>{F.forEach(B=>{S(B.isIntersecting)})},q=new IntersectionObserver($,{threshold:.5});return U.current&&q.observe(U.current),()=>{q.disconnect()}}},[o]),v.useEffect(()=>{if(d){let $=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout($)}}},[d]);let G=()=>{m(!0)},V=()=>{m(!1),S(!1)};return f?o!=="intent"?[g,U,{}]:[g,U,{onFocus:Ol(N,G),onBlur:Ol(j,V),onMouseEnter:Ol(h,G),onMouseLeave:Ol(w,V),onTouchStart:Ol(C,G)}]:[!1,U,{}]}function Ol(o,c){return f=>{o&&o(f),f.defaultPrevented||c(f)}}function e0({page:o,...c}){let{router:f}=om(),d=v.useMemo(()=>If(f.routes,o,f.basename),[f.routes,o,f.basename]);return d?v.createElement(a0,{page:o,matches:d,...c}):null}function t0(o){let{manifest:c,routeModules:f}=sm(),[d,m]=v.useState([]);return v.useEffect(()=>{let g=!1;return Zg(o,c,f).then(S=>{g||m(S)}),()=>{g=!0}},[o,c,f]),d}function a0({page:o,matches:c,...f}){let d=Ct(),{manifest:m,routeModules:g}=sm(),{basename:S}=om(),{loaderData:N,matches:j}=Ig(),h=v.useMemo(()=>Zf(o,c,j,m,d,"data"),[o,c,j,m,d]),w=v.useMemo(()=>Zf(o,c,j,m,d,"assets"),[o,c,j,m,d]),C=v.useMemo(()=>{if(o===d.pathname+d.search+d.hash)return[];let V=new Set,$=!1;if(c.forEach(F=>{let B=m.routes[F.route.id];!B||!B.hasLoader||(!h.some(ee=>ee.route.id===F.route.id)&&F.route.id in N&&g[F.route.id]?.shouldRevalidate||B.hasClientLoader?$=!0:V.add(F.route.id))}),V.size===0)return[];let q=Vg(o,S,"data");return $&&V.size>0&&q.searchParams.set("_routes",c.filter(F=>V.has(F.route.id)).map(F=>F.route.id).join(",")),[q.pathname+q.search]},[S,N,d,m,h,c,o,g]),U=v.useMemo(()=>Kg(w,m),[w,m]),G=t0(w);return v.createElement(v.Fragment,null,C.map(V=>v.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...f})),U.map(V=>v.createElement("link",{key:V,rel:"modulepreload",href:V,...f})),G.map(({key:V,link:$})=>v.createElement("link",{key:V,nonce:f.nonce,...$})))}function n0(...o){return c=>{o.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var cm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cm&&(window.__reactRouterVersion="7.8.2")}catch{}function l0({basename:o,children:c,window:f}){let d=v.useRef();d.current==null&&(d.current=Qh({window:f,v5Compat:!0}));let m=d.current,[g,S]=v.useState({action:m.action,location:m.location}),N=v.useCallback(j=>{v.startTransition(()=>S(j))},[S]);return v.useLayoutEffect(()=>m.listen(N),[m,N]),v.createElement(Cg,{basename:o,children:c,location:g.location,navigationType:g.action,navigator:m})}var um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sa=v.forwardRef(function({onClick:c,discover:f="render",prefetch:d="none",relative:m,reloadDocument:g,replace:S,state:N,target:j,to:h,preventScrollReset:w,viewTransition:C,...U},G){let{basename:V}=v.useContext(Rt),$=typeof h=="string"&&um.test(h),q,F=!1;if(typeof h=="string"&&$&&(q=h,cm))try{let Ee=new URL(window.location.href),et=h.startsWith("//")?new URL(Ee.protocol+h):new URL(h),dt=$t(et.pathname,V);et.origin===Ee.origin&&dt!=null?h=dt+et.search+et.hash:F=!0}catch{wt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=vg(h,{relative:m}),[ee,Ae,I]=Wg(d,U),Ce=s0(h,{replace:S,state:N,target:j,preventScrollReset:w,relative:m,viewTransition:C});function ze(Ee){c&&c(Ee),Ee.defaultPrevented||Ce(Ee)}let Ue=v.createElement("a",{...U,...I,href:q||B,onClick:F||g?c:ze,ref:n0(G,Ae),target:j,"data-discover":!$&&f==="render"?"true":void 0});return ee&&!$?v.createElement(v.Fragment,null,Ue,v.createElement(e0,{page:B})):Ue});Sa.displayName="Link";var i0=v.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:d="",end:m=!1,style:g,to:S,viewTransition:N,children:j,...h},w){let C=Ul(S,{relative:h.relative}),U=Ct(),G=v.useContext(tr),{navigator:V,basename:$}=v.useContext(Rt),q=G!=null&&m0(C)&&N===!0,F=V.encodeLocation?V.encodeLocation(C).pathname:C.pathname,B=U.pathname,ee=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;f||(B=B.toLowerCase(),ee=ee?ee.toLowerCase():null,F=F.toLowerCase()),ee&&$&&(ee=$t(ee,$)||ee);const Ae=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let I=B===F||!m&&B.startsWith(F)&&B.charAt(Ae)==="/",Ce=ee!=null&&(ee===F||!m&&ee.startsWith(F)&&ee.charAt(F.length)==="/"),ze={isActive:I,isPending:Ce,isTransitioning:q},Ue=I?c:void 0,Ee;typeof d=="function"?Ee=d(ze):Ee=[d,I?"active":null,Ce?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let et=typeof g=="function"?g(ze):g;return v.createElement(Sa,{...h,"aria-current":Ue,className:Ee,ref:w,style:et,to:S,viewTransition:N},typeof j=="function"?j(ze):j)});i0.displayName="NavLink";var r0=v.forwardRef(({discover:o="render",fetcherKey:c,navigate:f,reloadDocument:d,replace:m,state:g,method:S=Ii,action:N,onSubmit:j,relative:h,preventScrollReset:w,viewTransition:C,...U},G)=>{let V=d0(),$=f0(N,{relative:h}),q=S.toLowerCase()==="get"?"get":"post",F=typeof N=="string"&&um.test(N),B=ee=>{if(j&&j(ee),ee.defaultPrevented)return;ee.preventDefault();let Ae=ee.nativeEvent.submitter,I=Ae?.getAttribute("formmethod")||S;V(Ae||ee.currentTarget,{fetcherKey:c,method:I,navigate:f,replace:m,state:g,relative:h,preventScrollReset:w,viewTransition:C})};return v.createElement("form",{ref:G,method:q,action:$,onSubmit:d?j:B,...U,"data-discover":!F&&o==="render"?"true":void 0})});r0.displayName="Form";function o0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dm(o){let c=v.useContext(zn);return je(c,o0(o)),c}function s0(o,{target:c,replace:f,state:d,preventScrollReset:m,relative:g,viewTransition:S}={}){let N=ar(),j=Ct(),h=Ul(o,{relative:g});return v.useCallback(w=>{if(qg(w,c)){w.preventDefault();let C=f!==void 0?f:_l(j)===_l(h);N(o,{replace:C,state:d,preventScrollReset:m,relative:g,viewTransition:S})}},[j,N,h,f,d,c,o,m,g,S])}var c0=0,u0=()=>`__${String(++c0)}__`;function d0(){let{router:o}=dm("useSubmit"),{basename:c}=v.useContext(Rt),f=Dg();return v.useCallback(async(d,m={})=>{let{action:g,method:S,encType:N,formData:j,body:h}=Xg(d,c);if(m.navigate===!1){let w=m.fetcherKey||u0();await o.fetch(w,f,m.action||g,{preventScrollReset:m.preventScrollReset,formData:j,body:h,formMethod:m.method||S,formEncType:m.encType||N,flushSync:m.flushSync})}else await o.navigate(m.action||g,{preventScrollReset:m.preventScrollReset,formData:j,body:h,formMethod:m.method||S,formEncType:m.encType||N,replace:m.replace,state:m.state,fromRouteId:f,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,c,f])}function f0(o,{relative:c}={}){let{basename:f}=v.useContext(Rt),d=v.useContext(_t);je(d,"useFormAction must be used inside a RouteContext");let[m]=d.matches.slice(-1),g={...Ul(o||".",{relative:c})},S=Ct();if(o==null){g.search=S.search;let N=new URLSearchParams(g.search),j=N.getAll("index");if(j.some(w=>w==="")){N.delete("index"),j.filter(C=>C).forEach(C=>N.append("index",C));let w=N.toString();g.search=w?`?${w}`:""}}return(!o||o===".")&&m.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(g.pathname=g.pathname==="/"?f:Pt([f,g.pathname])),_l(g)}function m0(o,{relative:c}={}){let f=v.useContext(am);je(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=dm("useViewTransitionState"),m=Ul(o,{relative:c});if(!f.isTransitioning)return!1;let g=$t(f.currentLocation.pathname,d)||f.currentLocation.pathname,S=$t(f.nextLocation.pathname,d)||f.nextLocation.pathname;return er(m.pathname,S)!=null||er(m.pathname,g)!=null}const p0="modulepreload",h0=function(o){return"/"+o},Kf={},re=function(c,f,d){let m=Promise.resolve();if(f&&f.length>0){let j=function(h){return Promise.all(h.map(w=>Promise.resolve(w).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const S=document.querySelector("meta[property=csp-nonce]"),N=S?.nonce||S?.getAttribute("nonce");m=j(f.map(h=>{if(h=h0(h),h in Kf)return;Kf[h]=!0;const w=h.endsWith(".css"),C=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${C}`))return;const U=document.createElement("link");if(U.rel=w?"stylesheet":p0,w||(U.as="script"),U.crossOrigin="",U.href=h,N&&U.setAttribute("nonce",N),document.head.appendChild(U),w)return new Promise((G,V)=>{U.addEventListener("load",G),U.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${h}`)))})}))}function g(S){const N=new Event("vite:preloadError",{cancelable:!0});if(N.payload=S,window.dispatchEvent(N),!N.defaultPrevented)throw S}return m.then(S=>{for(const N of S||[])N.status==="rejected"&&g(N.reason);return c().catch(g)})},g0=v.lazy(()=>re(()=>import("./AIDataAnalytics-DscGPHJH.js"),[])),Ns=v.lazy(()=>re(()=>import("./AgricultureDroneTechnology-B3TvvolE.js"),[])),x0=v.lazy(()=>re(()=>import("./PrecisionAgriculture-BAG0G6lM.js"),[])),b0=v.lazy(()=>re(()=>import("./AgricultureRobotics-0afrKRsa.js"),[])),v0=v.lazy(()=>re(()=>import("./AIRobotics-i5bfJzUu.js"),[])),y0=v.lazy(()=>re(()=>import("./GenerativeAI-TX7HjayO.js"),[])),j0=v.lazy(()=>re(()=>import("./AIBusiness-BPoVet4R.js"),[])),A0=v.lazy(()=>re(()=>import("./AIMarketing-BzUhrdbR.js"),[])),S0=v.lazy(()=>re(()=>import("./XRGaming-DIDYVeKd.js"),[])),E0=v.lazy(()=>re(()=>import("./VRARTechnology-Bt8vg98h.js"),[])),w0=v.lazy(()=>re(()=>import("./ElectricVehicleTechnology-GOB8ySim.js"),[])),R0=v.lazy(()=>re(()=>import("./IoTEmbeddedSystems-BheY-Yw4.js"),[])),T0=v.lazy(()=>re(()=>import("./HumanComputerInteraction-DTrWzi6F.js"),[])),N0=v.lazy(()=>re(()=>import("./DigitalForensics-BU_3Ne1n.js"),[])),M0=v.lazy(()=>re(()=>import("./MedicalCoding-BB0a5HTz.js"),[])),D0=v.lazy(()=>re(()=>import("./VaccineTechnology-HIvVewzw.js"),[])),z0=v.lazy(()=>re(()=>import("./FermentationTechnology-CutD3gwZ.js"),[])),O0=v.lazy(()=>re(()=>import("./AILaw-C120K6k-.js"),[])),_0=v.lazy(()=>re(()=>import("./AICybersecurity-D94nT5h1.js"),[])),C0=v.lazy(()=>re(()=>import("./AIBlockchain-deUAtZz3.js"),[])),U0=v.lazy(()=>re(()=>import("./AIManagement-Dvne0MSl.js"),[])),k0=v.lazy(()=>re(()=>import("./AIManagementStudies-AMbWTQUe.js"),[])),H0=v.lazy(()=>re(()=>import("./AIMLAgriculture-CK8DsY_3.js"),[])),L0=v.lazy(()=>re(()=>import("./IPLaw-ob718Zsk.js"),[])),Y0=v.lazy(()=>re(()=>import("./RegulatoryAffairs-CR8fb6Lc.js"),[])),q0=v.lazy(()=>re(()=>import("./HydroponicsFarming-Bnl8C-Hj.js"),[])),B0=v.lazy(()=>re(()=>import("./AIDesignTechnology-CeW5MGYO.js"),[])),G0=v.lazy(()=>re(()=>import("./Bioentrepreneurship-DJxT7i7V.js"),[])),X0=v.lazy(()=>re(()=>import("./AIArts-DZ7Yu1Si.js"),[])),V0=v.lazy(()=>re(()=>import("./PostdoctoralResearch-nUj2VTy9.js"),[])),F0=v.lazy(()=>re(()=>import("./DoctoralPrograms-3Llz-KQV.js"),[])),Q0=v.lazy(()=>re(()=>import("./AgriEntrepreneurship-BA9EKOYV.js"),[])),Z0=v.lazy(()=>re(()=>import("./MixedReality-B0EM_E8R.js"),[])),K0=v.lazy(()=>re(()=>import("./ARVRTechnology-wqeuiVGg.js"),[])),Jf=v.lazy(()=>re(()=>import("./Cybersecurity-BElh85tG.js"),[])),J0=()=>{const c=Ct().state?.program;return c?c.title.toLowerCase().includes("ai & data analytics")?i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(g0,{},`ai-data-analytics-${Date.now()}`)}):(console.log("Program title:",c.title),console.log("Program title lowercase:",c.title.toLowerCase()),console.log("Looking for Cybersecurity match..."),console.log("Expected title: 'Master Program in Cybersecurity'"),console.log("Actual title:",c.title),console.log("Exact match?",c.title==="Master Program in Cybersecurity"),c.title==="MASTER PROGRAM in Agriculture Drones"?(console.log("EXACT MATCH FOUND! Rendering AgricultureDroneTechnology component"),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(Ns,{},`agri-drone-${Date.now()}`)})):c.title.toLowerCase().includes("agriculture drones")?(console.log("Lowercase match found! Rendering AgricultureDroneTechnology component"),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(Ns,{},`agri-drone-${Date.now()}`)})):(console.log("No Agriculture Drones match found, checking for Precision Agriculture..."),c.title==="MASTER PROGRAM in Precision Agriculture"?(console.log("EXACT MATCH FOUND! Rendering PrecisionAgriculture component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(x0,{},`precision-agri-${Date.now()}`)})):c.title==="MASTER PROGRAM in Agriculture Robotics"?(console.log("EXACT MATCH FOUND! Rendering AgricultureRobotics component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(b0,{},`agri-robotics-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Robotics"?(console.log("EXACT MATCH FOUND! Rendering AIRobotics component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(v0,{},`ai-robotics-${Date.now()}`)})):c.title==="MASTER PROGRAM in Generative AI"?(console.log("EXACT MATCH FOUND! Rendering GenerativeAI component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(y0,{},`generative-ai-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Business"?(console.log("EXACT MATCH FOUND! Rendering AIBusiness component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(j0,{},`ai-business-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Marketing"?(console.log("EXACT MATCH FOUND! Rendering AIMarketing component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(A0,{},`xr-gaming-${Date.now()}`)})):c.title==="Game Changer: Master Program in XR Gaming"?(console.log("EXACT MATCH FOUND! Rendering XRGaming component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(S0,{},`xr-gaming-${Date.now()}`)})):c.title==="Virtual Vanguard: Master in Virtual & Augmented Reality Engineering"?(console.log("EXACT MATCH FOUND! Rendering VRARTechnology component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(E0,{},`vr-ar-technology-${Date.now()}`)})):c.title==="Master Program in AR and Mixed Reality"?(console.log("EXACT MATCH FOUND! Rendering MixedReality component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(Z0,{},`mixed-reality-${Date.now()}`)})):c.title==="EU ACC Master Program in AR & VR Technology"?(console.log("EXACT MATCH FOUND! Rendering ARVRTechnology component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(K0,{},`ar-vr-technology-${Date.now()}`)})):c.title==="Master Program in Cybersecurity"?(console.log("EXACT MATCH FOUND! Rendering Cybersecurity component"),console.log("Program title matched:",c.title),console.log("Cybersecurity component:",Jf),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(Jf,{},`cybersecurity-${Date.now()}`)})):c.title==="MASTER PROGRAM in Electric Vehicle (EV) Technology"?(console.log("EXACT MATCH FOUND! Rendering ElectricVehicleTechnology component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(w0,{},`electric-vehicle-technology-${Date.now()}`)})):c.title==="MASTER PROGRAM in IoT and Embedded Systems"?(console.log("EXACT MATCH FOUND! Rendering IoTEmbeddedSystems component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(R0,{},`iot-embedded-systems-${Date.now()}`)})):c.title==="MASTER PROGRAM in Human-Computer Interaction (HCI)"?(console.log("EXACT MATCH FOUND! Rendering HumanComputerInteraction component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(T0,{},`human-computer-interaction-${Date.now()}`)})):c.title==="MASTER PROGRAM in Digital Forensics"?(console.log("EXACT MATCH FOUND! Rendering DigitalForensics component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(N0,{},`digital-forensics-${Date.now()}`)})):c.title==="MASTER PROGRAM in Medical Coding"?(console.log("EXACT MATCH FOUND! Rendering MedicalCoding component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(M0,{},`medical-coding-${Date.now()}`)})):c.title==="MASTER PROGRAM in Vaccine Technology"?(console.log("EXACT MATCH FOUND! Rendering VaccineTechnology component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(D0,{},`vaccine-technology-${Date.now()}`)})):c.title==="MASTER PROGRAM in Industrial Fermentation Technology"?(console.log("EXACT MATCH FOUND! Rendering FermentationTechnology component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(z0,{},`fermentation-technology-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Law"?(console.log("EXACT MATCH FOUND! Rendering AILaw component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(O0,{},`ai-law-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Cybersecurity Systems"?(console.log("EXACT MATCH FOUND! Rendering AICybersecurity component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(_0,{},`ai-cybersecurity-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Blockchain"?(console.log("EXACT MATCH FOUND! Rendering AIBlockchain component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(C0,{},`ai-blockchain-${Date.now()}`)})):c.title==="EU ACC Certificate Program in AI & Management"?(console.log("EXACT MATCH FOUND! Rendering AIManagement component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(U0,{},`ai-management-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Management Studies"?(console.log("EXACT MATCH FOUND! Rendering AIManagementStudies component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(k0,{},`ai-management-studies-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & ML in Agriculture"?(console.log("EXACT MATCH FOUND! Rendering AIMLAgriculture component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(H0,{},`ai-ml-agriculture-${Date.now()}`)})):c.title==="MASTER PROGRAM in IP Law"?(console.log("EXACT MATCH FOUND! Rendering IPLaw component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(L0,{},`ip-law-${Date.now()}`)})):c.title==="MASTER PROGRAM in Clinical Research & Regulatory Affairs"?(console.log("EXACT MATCH FOUND! Rendering RegulatoryAffairs component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(Y0,{},`regulatory-affairs-${Date.now()}`)})):c.title==="MASTER PROGRAM in Hydroponics & Vertical Farming"?(console.log("EXACT MATCH FOUND! Rendering HydroponicsFarming component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(q0,{},`hydroponics-farming-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Designing Technology"?(console.log("EXACT MATCH FOUND! Rendering AIDesignTechnology component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(B0,{},`ai-design-technology-${Date.now()}`)})):c.title==="MASTER PROGRAM in Bioentrepreneurship"?(console.log("EXACT MATCH FOUND! Rendering Bioentrepreneurship component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(G0,{},`bioentrepreneurship-${Date.now()}`)})):c.title==="MASTER PROGRAM in AI & Arts"?(console.log("EXACT MATCH FOUND! Rendering AIArts component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(X0,{},`ai-arts-${Date.now()}`)})):c.title==="Postdoctoral Research Programs"?(console.log("EXACT MATCH FOUND! Rendering PostdoctoralResearch component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(V0,{},`postdoctoral-research-${Date.now()}`)})):c.title==="Doctoral Programs (Ph.D.)"?(console.log("EXACT MATCH FOUND! Rendering DoctoralPrograms component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(F0,{},`doctoral-programs-${Date.now()}`)})):c.title==="Master Program in Agriculture Drone Technology"?(console.log("EXACT MATCH FOUND! Rendering AgricultureDroneTechnology component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(Ns,{},`agriculture-drone-technology-${Date.now()}`)})):c.title==="Master Program in Agri Entrepreneurship"?(console.log("EXACT MATCH FOUND! Rendering AgriEntrepreneurship component"),console.log("Program title matched:",c.title),i.jsx(v.Suspense,{fallback:i.jsx("div",{className:"loading",children:"Loading program details..."}),children:i.jsx(Q0,{},`agri-entrepreneurship-${Date.now()}`)})):(console.log("No specific program match found, using new template"),i.jsx("div",{className:"program-details-page",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"program-header",children:[i.jsx("h1",{children:c.title}),i.jsx("p",{children:c.description||"Transform your future with cutting-edge technology education"})]}),i.jsx("div",{className:"program-content",children:i.jsx("p",{children:"Program details coming soon..."})})]})})))):i.jsx("div",{className:"program-details-page",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"error-state",children:[i.jsx("h2",{children:"Program Not Found"}),i.jsx("p",{children:"The requested program could not be loaded. Please go back to the programs page and try again."})]})})})},P0=()=>i.jsx("style",{children:`
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
    `}),$0=()=>(v.useEffect(()=>{const o=document.createElement("link");o.rel="stylesheet",o.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",document.head.appendChild(o);const c=document.createElement("link");return c.rel="stylesheet",c.href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",document.head.appendChild(c),()=>{document.head.removeChild(o),document.head.removeChild(c)}},[]),null),I0=({activePage:o})=>{const[c,f]=v.useState(!1),d=ar(),m=g=>{f(!1),d(g)};return i.jsx("header",{className:"header",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"logo-container",onClick:()=>m("/home"),children:[i.jsx("img",{src:"https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png",alt:"IGT Logo",className:"logo-crest"}),i.jsxs("div",{className:"logo-text-container",children:[i.jsx("h1",{className:"logo-title",children:"INSTITUTE OF GLOBAL TECHNOLOGY"}),i.jsx("p",{className:"logo-tagline",children:"Gateway to Excellence in Education"})]})]}),i.jsx("nav",{children:i.jsxs("ul",{className:c?"active":"",children:[i.jsx("li",{children:i.jsx("button",{onClick:()=>m("/home"),className:`nav-link ${o==="/home"?"active":""}`,children:"Home"})}),i.jsx("li",{children:i.jsx("button",{onClick:()=>m("/programs"),className:`nav-link ${o==="/programs"?"active":""}`,children:"Programs"})}),i.jsx("li",{children:i.jsx("button",{onClick:()=>m("/departments"),className:`nav-link ${o==="/departments"?"active":""}`,children:"Departments"})}),i.jsx("li",{children:i.jsx("button",{onClick:()=>m("/faculty"),className:`nav-link ${o==="/faculty"?"active":""}`,children:"Faculty"})}),i.jsx("li",{children:i.jsx("button",{onClick:()=>m("/admissions"),className:`nav-link ${o==="/admissions"?"active":""}`,children:"Admissions"})}),i.jsx("li",{children:i.jsx("button",{onClick:()=>m("/contact"),className:`nav-link ${o==="/contact"?"active":""}`,children:"Contact"})})]})}),i.jsx("button",{className:"menu-toggle",onClick:()=>f(!c),"aria-label":"Open Menu",children:i.jsx("i",{className:"fas fa-bars"})})]})})},W0=()=>i.jsx("section",{id:"hero",className:"hero",children:i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"hero-title-glance",children:[i.jsx("div",{className:"glance-line",children:i.jsx("span",{className:"glance-label",children:"WELCOME TO"})}),i.jsx("div",{className:"glance-line",children:i.jsx("span",{className:"glance-main",children:"INSTITUTE OF"})}),i.jsx("div",{className:"glance-line",children:i.jsx("span",{className:"glance-main",children:"GLOBAL TECHNOLOGY"})})]}),i.jsxs("div",{className:"hero-glance-content",children:[i.jsx("div",{className:"hero-description",children:i.jsx("p",{children:"Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future."})}),i.jsx("div",{className:"hero-accredited",children:"ACCREDITED BY AIAB EUROPE"})]})]})}),ex=()=>i.jsx("section",{id:"about",className:"about",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"ABOUT INSTITUTE OF GLOBAL TECHNOLOGY"}),i.jsx("p",{className:"section-subtitle",children:"Discover our mission, vision, and values that guide us in providing exceptional technology education"}),i.jsxs("div",{className:"about-grid",children:[i.jsx("div",{className:"about-image",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Institute of Global Technology Campus"})}),i.jsxs("div",{className:"about-content",children:[i.jsx("h3",{children:"Transforming Technology Education Since 2005"}),i.jsx("p",{children:"The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success."}),i.jsx("p",{children:"Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies."}),i.jsx("p",{className:"accredited-text",children:"ACCREDITED BY AIAB EUROPE"}),i.jsxs("div",{className:"stats-container",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"number",children:"6000+"}),i.jsx("div",{className:"label",children:"STUDENTS"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"number",children:"300+"}),i.jsx("div",{className:"label",children:"FACULTY"})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"number",children:"60+"}),i.jsx("div",{className:"label",children:"PROGRAMS"})]})]})]})]})]})}),tx=()=>i.jsx("section",{id:"why-choose-us",className:"why-choose-us",children:i.jsxs("div",{className:"container",children:[i.jsxs("h2",{children:["Why Choose Us",i.jsx("span",{className:"question-mark",children:"?"})]}),i.jsxs("div",{className:"features-grid",children:[i.jsxs("div",{className:"feature-item",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Industrial Partners"}),i.jsxs("div",{className:"feature-content",children:[i.jsx("h3",{children:"100+ Industrial Partners"}),i.jsx("p",{children:"Strong collaborations with leading technology companies for research and placements."})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Expert Faculty"}),i.jsxs("div",{className:"feature-content",children:[i.jsx("h3",{children:"Learn from Experts"}),i.jsx("p",{children:"Instruction from national and international experts in their respective fields."})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Placement Support"}),i.jsxs("div",{className:"feature-content",children:[i.jsx("h3",{children:"Placement Assistance"}),i.jsx("p",{children:"Complete placement support with career counseling and interview preparation."})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Advanced Research"}),i.jsxs("div",{className:"feature-content",children:[i.jsx("h3",{children:"Advanced Research"}),i.jsx("p",{children:"Opportunities to work on innovative research projects with commercialization potential."})]})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Entrepreneurship Support"}),i.jsxs("div",{className:"feature-content",children:[i.jsx("h3",{children:"Entrepreneurship Support"}),i.jsx("p",{children:"Incubation center and mentorship for student startups and innovations."})]})]})]})]})}),Pf=[{category:"Precision Agriculture",subtitle:"Innovative programs combining technology with modern agricultural practices",courses:[{title:"MASTER PROGRAM in Precision Agriculture",image:"https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg",duration:"12 Months",description:"Master data-driven farming techniques using IoT, sensors, and AI for crop optimization. Learn advanced soil monitoring, weather prediction, and automated irrigation systems to maximize crop yields while minimizing resource waste."},{title:"MASTER PROGRAM in Agriculture Drones",image:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring."},{title:"MASTER PROGRAM in Hydroponics & Vertical Farming",image:"https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg",duration:"12 Months",description:"Learn sustainable farming techniques without soil in controlled environments. Master nutrient solution management, climate control systems, and vertical stacking technologies for urban agriculture."},{title:"MASTER PROGRAM in AI & ML in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg",duration:"12 Months",description:"Apply artificial intelligence and machine learning to solve agricultural challenges. Master predictive analytics for crop diseases, yield forecasting, and resource optimization."},{title:"MASTER PROGRAM in Agriculture Robotics",image:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",duration:"12 Months",description:"Develop and implement robotic solutions for planting, harvesting, and farm automation. Master robotic arm programming, computer vision integration, and autonomous navigation systems."},{title:"MASTER PROGRAM in Advanced Technologies in Agriculture",image:"https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp",duration:"12 Months",description:"Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement."},{title:"MASTER PROGRAM in Agri Entrepreneurship",image:"https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business skills specific to agricultural ventures and startups. Master market analysis, financial planning, and sustainable business models for agribusiness."}]},{category:"AI & Robotics",subtitle:"Specialized programs in artificial intelligence and robotic systems",courses:[{title:"MASTER PROGRAM in AI & Robotics",image:"https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg",duration:"12 Months",description:"Comprehensive training in AI-driven robotic systems and automation. Master machine learning algorithms for robotic control and autonomous decision-making in industrial applications."},{title:"MASTER PROGRAM in Generative AI",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation."},{title:"MASTER PROGRAM in AI & Blockchain",image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the convergence of AI and decentralized blockchain technologies. Master smart contract development, AI-powered blockchain analytics, and decentralized AI systems for secure applications."},{title:"MASTER PROGRAM in AI & Data Analytics",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI techniques to extract insights from complex datasets. Master predictive modeling, statistical analysis, and machine learning algorithms for business intelligence and decision-making."},{title:"MASTER PROGRAM in AI & Biological Sciences",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development."},{title:"MASTER PROGRAM in AI & Cybersecurity Systems",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop AI-powered solutions for cybersecurity threats and vulnerabilities. Master threat detection algorithms, anomaly identification, and automated security response systems for network protection."},{title:"Master Program in Cybersecurity",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"18 Months",description:"Defend the digital frontier with advanced cybersecurity techniques. Master threat detection, network security, ethical hacking, and security frameworks to protect organizations from evolving cyber threats."}]},{category:"AI & Business",subtitle:"Programs at the intersection of artificial intelligence and business applications",courses:[{title:"MASTER PROGRAM in AI & Business",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Transform business operations with AI-driven strategies and solutions. Master process automation, customer analytics, and AI-powered decision support systems for competitive advantage."},{title:"MASTER PROGRAM in AI & Management Studies",image:"https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg",duration:"12 Months",description:"Apply AI to organizational leadership, decision-making, and strategy. Master AI-driven management tools, predictive analytics for strategic planning, and intelligent automation for operational efficiency."},{title:"MASTER PROGRAM in AI & Law",image:"https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg",duration:"12 Months",description:"Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies."},{title:"MASTER PROGRAM in IP Law",image:"https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg",duration:"12 Months",description:"Specialize in intellectual property law for technology and innovation. Master patent law, copyright protection, and trademark strategies for emerging technologies and digital assets."},{title:"MASTER PROGRAM in AI & Marketing",image:"https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg",duration:"12 Months",description:"Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns."}]},{category:"Healthcare & Life Sciences",subtitle:"Programs at the intersection of technology and life sciences",courses:[{title:"MASTER PROGRAM in Clinical Research & Regulatory Affairs",image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets."},{title:"MASTER PROGRAM in Medical Coding",image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg",duration:"12 Months",description:"Learn standardized coding systems for healthcare documentation. Master ICD-10, CPT coding, and healthcare billing systems for accurate medical record management and insurance processing."},{title:"MASTER PROGRAM in Digital Forensics",image:"https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af",duration:"12 Months",description:"Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution."},{title:"MASTER PROGRAM in Industrial Fermentation Technology",image:"https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master microbial processes for food, pharmaceuticals, and biofuels. Learn bioreactor design, process optimization, and quality control for large-scale fermentation operations."},{title:"MASTER PROGRAM in Vaccine Technology",image:"https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png",duration:"12 Months",description:"Study vaccine development, production, and quality control. Master vaccine formulation, manufacturing processes, and regulatory standards for safe and effective immunization products."},{title:"MASTER PROGRAM in Bioentrepreneurship",image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies."}]},{category:"AI & Creative Technologies",subtitle:"Programs combining artificial intelligence with creative disciplines",courses:[{title:"MASTER PROGRAM in AI & Designing Technology",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products."},{title:"MASTER PROGRAM in AI & Arts",image:"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression."}]},{category:"Emerging Technologies & Smart Systems",subtitle:"Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",courses:[{title:"Reality Architect: Master of AR/VR/XR Development",image:"https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Master immersive technologies to build future-ready AR, VR, and XR applications. Learn 3D modeling, spatial computing, and interactive design for creating engaging virtual experiences."},{title:"Virtual Vanguard: Master in Virtual & Augmented Reality Engineering",image:"https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg",duration:"12 Months",description:"Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions."},{title:"Game Changer: Master Program in XR Gaming",image:"https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg",duration:"12 Months",description:"Design and develop immersive games using XR technology and gamification strategy. Master game engine development, 3D asset creation, and interactive storytelling for next-generation gaming experiences."},{title:"Master Program in AR and Mixed Reality",image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",duration:"12 Months",description:"Specialize in designing cutting-edge MR life environments and interfaces. Master spatial computing, gesture recognition, and environmental mapping for seamless mixed reality experiences."},{title:"Master Program in Electric Vehicle Technology",image:"https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png",duration:"12 Months",description:"Learn about EV systems, battery design, automatic mobility, and energy management. Master electric powertrain design, battery management systems, and smart charging infrastructure for sustainable transportation."},{title:"Master Program in IoT and Embedded Systems",image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp",duration:"12 Months",description:"Build connected smart devices with microcontrollers, sensors, and communication protocols. Master embedded software development, wireless communication, and cloud integration for smart city and industrial IoT applications."},{title:"Master Program in Human-Computer Interaction",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"12 Months",description:"Focus on designing intuitive interfaces, enhancing user experiences, and usability testing. Master user research methodologies, interaction design principles, and accessibility standards for inclusive digital products."}]},{category:"Doctoral & Postdoctoral Programs",subtitle:"Advanced research programs for scholars and fellows in science, engineering, and humanities",courses:[{title:"Doctoral Programs",image:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Varies",description:"Research-focused degrees in multiple disciplines:",list:["PhD in Engineering in ICT disciplines","PhD in Science and Mathematics","PhD in Humanities, Social Science and Design"]},{title:"Postdoctoral Programs",image:"https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",duration:"Flexible",description:"Postdoctoral fellowships in emerging domains:",list:["Wireless Communications, Embedded Systems","AI, ML, and Information Security","5G/6G, Robotics, VLSI, NLP, Adversarial ML"]}]}],ax=({course:o})=>{const c=ar(),f=()=>{const d=o.title.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");c(`/program/${d}`,{state:{program:o}})};return i.jsxs("div",{className:"program-card",children:[i.jsx("img",{src:o.image,alt:o.title,className:"program-card-image"}),i.jsxs("div",{className:"program-card-content",children:[i.jsx("h4",{children:o.title}),i.jsxs("div",{className:"program-card-duration",children:[i.jsx("i",{className:"far fa-clock"}),o.duration]}),i.jsxs("div",{className:"program-card-description",children:[o.description,o.list&&i.jsx("ul",{children:o.list.map((d,m)=>i.jsx("li",{children:d},m))})]}),i.jsxs("div",{className:"program-card-buttons",children:[i.jsx("button",{className:"btn btn-details",onClick:f,children:"Details"}),i.jsx("button",{className:"btn btn-apply ag-btn-apply",children:"Apply"})]})]})]})},nx=()=>{const[o,c]=v.useState(""),[f,d]=v.useState("all"),m=Pf.map(g=>({...g,courses:g.courses.filter(S=>(f==="all"||g.category===f)&&S.title.toLowerCase().includes(o.toLowerCase()))})).filter(g=>g.courses.length>0);return i.jsxs("section",{id:"programs",className:"programs-page",children:[i.jsx("div",{className:"page-banner programs-banner",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Transform Your Future"}),i.jsx("p",{children:"Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market."})]})}),i.jsx("div",{className:"search-filter-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"search-filter-container",children:[i.jsxs("div",{className:"search-box",children:[i.jsx("i",{className:"fas fa-search"}),i.jsx("input",{type:"text",placeholder:"Search programs...",value:o,onChange:g=>c(g.target.value),"aria-label":"Search programs"})]}),i.jsx("div",{className:"category-filter",children:i.jsxs("select",{value:f,onChange:g=>d(g.target.value),"aria-label":"Filter by category",children:[i.jsx("option",{value:"all",children:"All Categories"}),Pf.map((g,S)=>i.jsx("option",{value:g.category,children:g.category},S))]})})]})})}),m.length>0?m.map((g,S)=>i.jsx("div",{className:"program-category",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"category-header",children:[i.jsx("h3",{children:g.category}),i.jsx("p",{children:g.subtitle})]}),i.jsx("div",{className:"program-cards-grid",children:g.courses.map((N,j)=>i.jsx(ax,{course:N},`${N.title}-${j}`))})]})},`${g.category}-${S}`)):i.jsxs("div",{className:"container no-results-container",children:[i.jsx("h3",{className:"no-results-title",children:"No programs found"}),i.jsx("p",{className:"no-results-message",children:"Try adjusting your search terms or category filter to find what you're looking for."}),i.jsx("button",{onClick:()=>{c(""),d("all")},className:"clear-filters-btn",children:"Clear Filters"})]}),i.jsxs("div",{className:"admissions-cta",children:[i.jsx("h3",{children:"Ready to take the next step?"}),i.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),i.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),i.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})},lx=()=>i.jsxs("section",{className:"admissions-page",children:[i.jsx("div",{className:"admissions-journey-banner",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Begin Your Academic Journey"}),i.jsx("p",{children:"Join our community of innovators and thought leaders"})]})}),i.jsx("div",{className:"admissions-section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Admissions Process"}),i.jsx("p",{className:"section-tagline",children:"Our streamlined admission process makes it easy to join our academic community"}),i.jsxs("div",{className:"process-grid",children:[i.jsxs("div",{className:"process-card",children:[i.jsx("div",{className:"process-number",children:"1"}),i.jsx("h3",{children:"Application"}),i.jsx("p",{children:"Submit your online application along with required documents through our portal."}),i.jsx("a",{href:"#",className:"process-btn",children:"Apply Now →"})]}),i.jsxs("div",{className:"process-card",children:[i.jsx("div",{className:"process-number",children:"2"}),i.jsx("h3",{children:"Review"}),i.jsx("p",{children:"Our admissions committee will carefully evaluate your application and credentials."}),i.jsx("a",{href:"#",className:"process-btn",children:"Learn More →"})]}),i.jsxs("div",{className:"process-card",children:[i.jsx("div",{className:"process-number",children:"3"}),i.jsx("h3",{children:"Interview"}),i.jsx("p",{children:"Selected candidates will be invited for an interview (in-person or virtual)."}),i.jsx("a",{href:"#",className:"process-btn",children:"Prepare →"})]}),i.jsxs("div",{className:"process-card",children:[i.jsx("div",{className:"process-number",children:"4"}),i.jsx("h3",{children:"Decision"}),i.jsx("p",{children:"Receive your admission decision within 2-4 weeks of your interview."}),i.jsx("a",{href:"#",className:"process-btn",children:"Timeline →"})]})]}),i.jsx("h2",{className:"section-title",children:"Admission Details"}),i.jsx("p",{className:"section-tagline",children:"Key information to help you prepare your application"}),i.jsxs("div",{className:"details-grid",children:[i.jsxs("div",{className:"details-card",children:[i.jsxs("h3",{children:[i.jsx("span",{className:"details-icon",children:i.jsx("i",{className:"fas fa-file-alt"})}),"Application Requirements"]}),i.jsxs("ul",{className:"details-list",children:[i.jsx("li",{children:"Completed online application form"}),i.jsx("li",{children:"Bachelor's degree in relevant field with minimum 50% marks"}),i.jsx("li",{children:"Statement of purpose (500-1000 words)"}),i.jsx("li",{children:"Two letters of recommendation"}),i.jsx("li",{children:"Professional resume/CV"}),i.jsx("li",{children:"Application fee (waivers available)"})]}),i.jsx("a",{href:"#",className:"details-btn btn-red",children:"Download Checklist"})]}),i.jsxs("div",{className:"details-card important-dates",children:[i.jsxs("h3",{children:[i.jsx("span",{className:"details-icon",children:i.jsx("i",{className:"fas fa-calendar-alt"})}),"Important Dates"]}),i.jsxs("ul",{className:"details-list",children:[i.jsx("li",{children:"Jul 15 Fall Semester Deadline"}),i.jsx("li",{children:"Nov 15 Spring Semester Deadline"}),i.jsx("li",{children:"Apr 15 Summer Semester Deadline"}),i.jsx("li",{children:"Dec 1 Early Decision Deadline"}),i.jsx("li",{children:"Aug 20-25 Orientation Week"})]}),i.jsx("a",{href:"#",className:"details-btn btn-red",children:"Add to Calendar"})]}),i.jsxs("div",{className:"details-card",children:[i.jsxs("h3",{children:[i.jsx("span",{className:"details-icon",children:i.jsx("i",{className:"fas fa-university"})}),"Tuition & Financial Aid"]}),i.jsxs("ul",{className:"details-list",children:[i.jsx("li",{children:"Tuition: ₹1,50,000 per semester"}),i.jsx("li",{children:"Merit-based scholarships available"}),i.jsx("li",{children:"Research and teaching assistantships"}),i.jsx("li",{children:"Education loan partnerships"}),i.jsx("li",{children:"Flexible payment plans"})]}),i.jsx("a",{href:"#",className:"details-btn btn-red",children:"Financial Aid Information"})]})]}),i.jsxs("div",{className:"admissions-cta",children:[i.jsx("h3",{children:"Ready to take the next step?"}),i.jsx("p",{children:"Our admissions team is here to help you through every step of the process."}),i.jsx("button",{className:"details-btn btn-red-cta",onClick:()=>window.location.href="/contact",children:"Contact Admissions"}),i.jsx("button",{className:"details-btn btn-secondary",onClick:()=>window.location.href="/tour",children:"Schedule Campus Tour"})]})]})})]}),ix=()=>{const[o,c]=v.useState(""),[f,d]=v.useState(!1),[m,g]=v.useState({name:"",email:"",phone:"",subject:"",message:""}),S=j=>{const{name:h,value:w}=j.target;g(C=>({...C,[h]:w}))},N=async j=>{if(j.preventDefault(),!m.name.trim()){c("Please enter your name."),setTimeout(()=>c(""),5e3);return}if(!m.email.trim()){c("Please enter your email address."),setTimeout(()=>c(""),5e3);return}if(!m.message.trim()){c("Please enter your message."),setTimeout(()=>c(""),5e3);return}if(!m.email.includes("@")){c("Please enter a valid email address."),setTimeout(()=>c(""),5e3);return}d(!0);try{await new Promise(h=>setTimeout(h,1500)),c("Your message has been sent successfully! We will get back to you soon."),g({name:"",email:"",phone:"",subject:"",message:""}),j.target.reset()}catch{c("Sorry, there was an error sending your message. Please try again.")}finally{d(!1),setTimeout(()=>c(""),5e3)}};return i.jsxs("section",{className:"form-page",children:[i.jsx("div",{className:"page-banner contact-banner",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Get In Touch"}),i.jsx("p",{children:"We're here to help and answer any question you might have."})]})}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-info",children:[i.jsx("h3",{children:"Contact Information"}),i.jsx("p",{children:"Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below."}),i.jsxs("div",{className:"info-item",children:[i.jsx("div",{className:"info-icon",children:i.jsx("i",{className:"fas fa-map-marker-alt"})}),i.jsxs("div",{className:"info-content",children:[i.jsx("strong",{children:"Address"}),i.jsx("span",{children:"REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11."})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("div",{className:"info-icon",children:i.jsx("i",{className:"fas fa-envelope"})}),i.jsxs("div",{className:"info-content",children:[i.jsx("strong",{children:"Email"}),i.jsx("span",{children:"admissions@igt.edu.in"})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("div",{className:"info-icon",children:i.jsx("i",{className:"fas fa-clock"})}),i.jsxs("div",{className:"info-content",children:[i.jsx("strong",{children:"Timing"}),i.jsx("span",{children:"Mon - Sat: 9:00 AM - 5:30 PM"})]})]}),i.jsx("div",{className:"info-item special",children:i.jsx("strong",{children:"A UNIT OF BRC"})}),i.jsxs("div",{className:"social-icons",children:[i.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:i.jsx("i",{className:"fab fa-facebook-f"})}),i.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:i.jsx("i",{className:"fab fa-twitter"})}),i.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin-in"})}),i.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:i.jsx("i",{className:"fab fa-instagram"})}),i.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:i.jsx("i",{className:"fab fa-youtube"})})]})]}),i.jsxs("div",{className:"form-container",children:[i.jsx("h3",{children:"Send Us a Message"}),i.jsxs("form",{onSubmit:N,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Your Name"}),i.jsx("input",{type:"text",id:"name",name:"name",value:m.name,onChange:S,required:!0,placeholder:"Enter your full name"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",id:"email",name:"email",value:m.email,onChange:S,required:!0,placeholder:"Enter your email address"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",id:"phone",name:"phone",value:m.phone,onChange:S,placeholder:"Enter your phone number"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"subject",children:"Subject"}),i.jsx("input",{type:"text",id:"subject",name:"subject",value:m.subject,onChange:S,placeholder:"What is this regarding?"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{id:"message",name:"message",value:m.message,onChange:S,required:!0,placeholder:"Tell us how we can help you",rows:5})]}),i.jsx("button",{type:"submit",className:"submit-btn",disabled:f,children:f?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-spinner fa-spin"}),"Sending..."]}):"Send Message"}),o&&i.jsx("div",{className:`form-message ${o.includes("error")?"error":"success"}`,children:o})]})]})]})})]})},rx=()=>{const[o,c]=v.useState(""),f=d=>{d.preventDefault(),c("Your tour has been scheduled successfully!"),setTimeout(()=>c(""),5e3),d.target.reset()};return i.jsxs("section",{className:"form-page",children:[i.jsx("div",{className:"page-banner tour-banner",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Schedule a Campus Tour"}),i.jsx("p",{children:"We would love to show you around our campus."})]})}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-info",children:[i.jsx("h3",{children:"Visit Us"}),i.jsx("p",{children:"Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT."}),i.jsxs("div",{className:"info-item",children:[i.jsxs("strong",{children:[i.jsx("i",{className:"fas fa-clock"})," Tour Hours"]}),i.jsx("span",{children:"Monday - Friday: 10:00 AM - 4:00 PM"})]}),i.jsxs("div",{className:"info-item",children:[i.jsxs("strong",{children:[i.jsx("i",{className:"fas fa-map-marker-alt"})," Location"]}),i.jsx("span",{children:"123 Tech Avenue, Innovation City"})]})]}),i.jsxs("div",{className:"form-container",children:[i.jsx("h3",{children:"Book Your Visit"}),i.jsxs("form",{onSubmit:f,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Your Name"}),i.jsx("input",{type:"text",id:"name",name:"name",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",id:"email",name:"email",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"date",children:"Preferred Date"}),i.jsx("input",{type:"date",id:"date",name:"date",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"time",children:"Preferred Time"}),i.jsx("input",{type:"time",id:"time",name:"time",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"guests",children:"Number of Guests"}),i.jsxs("select",{id:"guests",name:"guests",children:[i.jsx("option",{children:"1"}),i.jsx("option",{children:"2"}),i.jsx("option",{children:"3"}),i.jsx("option",{children:"4"}),i.jsx("option",{children:"5+"})]})]}),i.jsx("button",{type:"submit",className:"submit-btn",children:"Schedule Tour"}),o&&i.jsx("div",{className:"form-message success",children:o})]})]})]})})]})},ox=()=>i.jsx("section",{id:"academic-programs",className:"academic-programs",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Our Academic Programs"}),i.jsx("p",{className:"section-subtitle",children:"Explore our diverse range of postgraduate diploma programs in emerging technologies"}),i.jsxs("div",{className:"programs-grid",children:[i.jsxs("div",{className:"program-card",children:[i.jsx("div",{className:"program-visual",children:i.jsx("img",{src:"https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg",alt:"AI & Management"})}),i.jsxs("div",{className:"program-content",children:[i.jsx("h4",{children:"EU ACC Certificate Program in AI & Management"}),i.jsx("p",{children:"Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques."}),i.jsx("button",{className:"btn-details",children:"Details"}),i.jsxs("div",{className:"program-info",children:[i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-certificate"}),i.jsx("span",{children:"Certificate Program"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),i.jsx("span",{children:"1st Sep - 30th Sep 2025"})]})]})]})]}),i.jsxs("div",{className:"program-card",children:[i.jsx("div",{className:"program-visual",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"AR VR Technology"})}),i.jsxs("div",{className:"program-content",children:[i.jsx("h4",{children:"EU ACC Master Program in AR & VR Technology"}),i.jsx("p",{children:"Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design."}),i.jsx("button",{className:"btn-details",children:"Details"}),i.jsxs("div",{className:"program-info",children:[i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-building"}),i.jsx("span",{children:"100+ Industrial Partners"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-hands-helping"}),i.jsx("span",{children:"10+ Hands-on Projects"})]})]})]})]}),i.jsxs("div",{className:"program-card",children:[i.jsx("div",{className:"program-visual",children:i.jsx("img",{src:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"Agri Drones"})}),i.jsxs("div",{className:"program-content",children:[i.jsx("h4",{children:"MASTER PROGRAM in Agri Drones"}),i.jsx("p",{children:"Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making."}),i.jsx("button",{className:"btn-details",children:"Details"}),i.jsxs("div",{className:"program-info",children:[i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-graduation-cap"}),i.jsx("span",{children:"MASTER PROGRAM"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:"12 Months"})]})]})]})]}),i.jsxs("div",{className:"program-card",children:[i.jsx("div",{className:"program-visual",children:i.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"})}),i.jsxs("div",{className:"program-content",children:[i.jsx("h4",{children:"MASTER PROGRAM in Medical Robotics"}),i.jsx("p",{children:"Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration."}),i.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),i.jsxs("div",{className:"program-info",children:[i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-graduation-cap"}),i.jsx("span",{children:"MASTER PROGRAM"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:"12 Months"})]})]})]})]}),i.jsxs("div",{className:"program-card",children:[i.jsx("div",{className:"program-visual",children:i.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agri Robotics"})}),i.jsxs("div",{className:"program-content",children:[i.jsx("h4",{children:"MASTER PROGRAM in Agri Robotics"}),i.jsx("p",{children:"Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems."}),i.jsx("a",{href:"#",className:"learn-more",children:"Learn More"}),i.jsxs("div",{className:"program-info",children:[i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-graduation-cap"}),i.jsx("span",{children:"MASTER PROGRAM"})]}),i.jsxs("div",{className:"info-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:"12 Months"})]})]})]})]})]})]})}),sx=()=>i.jsx("section",{id:"upcoming-courses",className:"upcoming-courses",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"courses-header",children:[i.jsx("div",{className:"expand-knowledge",children:"EXPAND YOUR KNOWLEDGE"}),i.jsx("h2",{children:"Upcoming Courses"}),i.jsx("p",{className:"section-subtitle",children:"Discover our latest course offerings designed to keep you at the forefront of technology"})]}),i.jsxs("div",{className:"courses-grid",children:[i.jsxs("div",{className:"course-card featured",children:[i.jsxs("div",{className:"course-image",children:[i.jsx("img",{src:"https://agmay.in/images/manufacturing.webp",alt:"Drone Manufacturing"}),i.jsx("div",{className:"course-badge",children:"Featured"})]}),i.jsxs("div",{className:"course-content",children:[i.jsx("h3",{children:"MASTER PROGRAM in Drone Manufacturing"}),i.jsx("p",{children:"Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training."}),i.jsxs("div",{className:"course-status",children:[i.jsxs("div",{className:"status-item",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),i.jsx("span",{children:"Coming soon"})]}),i.jsxs("div",{className:"status-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:"12 Months"})]})]}),i.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),i.jsxs("div",{className:"course-card",children:[i.jsxs("div",{className:"course-image",children:[i.jsx("img",{src:"https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",alt:"Medical Robotics"}),i.jsx("div",{className:"course-badge",children:"Popular"})]}),i.jsxs("div",{className:"course-content",children:[i.jsx("h3",{children:"MASTER PROGRAM in Medical Robotics"}),i.jsx("p",{children:"Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics."}),i.jsxs("div",{className:"course-status",children:[i.jsxs("div",{className:"status-item",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),i.jsx("span",{children:"Coming soon"})]}),i.jsxs("div",{className:"status-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:"12 Months"})]})]}),i.jsx("button",{className:"btn-enroll",children:"Enroll Now"})]})]}),i.jsxs("div",{className:"course-card",children:[i.jsxs("div",{className:"course-image",children:[i.jsx("img",{src:"https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg",alt:"Agriculture Robotics"}),i.jsx("div",{className:"course-badge",children:"New"})]}),i.jsxs("div",{className:"course-content",children:[i.jsx("h3",{children:"MASTER PROGRAM in Agriculture Robotics"}),i.jsx("p",{children:"Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques."}),i.jsxs("div",{className:"course-status",children:[i.jsxs("div",{className:"status-item",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),i.jsx("span",{children:"Coming soon"})]}),i.jsxs("div",{className:"status-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:"12 Months"})]})]}),i.jsx("button",{className:"btn-details-blue",children:"Details"})]})]})]}),i.jsx("div",{className:"view-all-courses",children:i.jsx("button",{className:"btn-view-all",children:"View All Upcoming Courses"})})]})}),cx=()=>i.jsx("section",{id:"research",className:"research-projects",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Our Ongoing Research Projects"}),i.jsx("p",{className:"section-subtitle",children:"Explore our cutting-edge research initiatives across various technology domains"}),i.jsxs("div",{className:"research-grid",children:[i.jsxs("div",{className:"research-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI-Powered Predictive Maintenance"}),i.jsxs("div",{className:"research-card-content",children:[i.jsx("h3",{children:"AI-Powered Predictive Maintenance"}),i.jsx("p",{children:"Developing AI models for predictive maintenance of industrial equipment to reduce downtime."})]})]}),i.jsxs("div",{className:"research-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conversational AI Assistant"}),i.jsxs("div",{className:"research-card-content",children:[i.jsx("h3",{children:"Conversational AI Assistant"}),i.jsx("p",{children:"Creating an AI assistant for mental health support and counseling services."})]})]}),i.jsxs("div",{className:"research-card",children:[i.jsx("img",{src:"https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=",alt:"Automated Disease Detection"}),i.jsxs("div",{className:"research-card-content",children:[i.jsx("h3",{children:"Automated Disease Detection"}),i.jsx("p",{children:"Using deep learning for automated detection of diseases in medical images."})]})]}),i.jsxs("div",{className:"research-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Point-of-Care Diagnostic Device"}),i.jsxs("div",{className:"research-card-content",children:[i.jsx("h3",{children:"Point-of-Care Diagnostic Device"}),i.jsx("p",{children:"Developing portable diagnostic tools for rapid detection of infectious diseases."})]})]}),i.jsxs("div",{className:"research-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Smart Grid Systems"}),i.jsxs("div",{className:"research-card-content",children:[i.jsx("h3",{children:"Smart Grid Systems"}),i.jsx("p",{children:"Creating intelligent grid systems for efficient energy distribution and management."})]})]}),i.jsxs("div",{className:"research-card",children:[i.jsx("img",{src:"https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=",alt:"EV Charging Infrastructure"}),i.jsxs("div",{className:"research-card-content",children:[i.jsx("h3",{children:"EV Charging Infrastructure"}),i.jsx("p",{children:"Designing urban electric vehicle charging networks for sustainable transportation."})]})]})]})]})}),ux=()=>{const[o,c]=v.useState("conferences"),f=()=>{switch(o){case"conferences":return i.jsxs("div",{className:"events-grid",children:[i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Conference Hall"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"International Conference on AI & Robotics"}),i.jsx("p",{children:"Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements."}),i.jsxs("div",{className:"event-card-info",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsx("span",{children:"Virtual & On-campus"})]})]})]}),i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"People collaborating"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"Tech for Sustainable Development"}),i.jsx("p",{children:"Exploring technological solutions for achieving sustainable development goals."}),i.jsxs("div",{className:"event-card-info",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsx("span",{children:"Main Campus"})]})]})]}),i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Agri-Tech"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"Future of Agri-Tech"}),i.jsx("p",{children:"Conference focusing on emerging technologies in agriculture and food production."}),i.jsxs("div",{className:"event-card-info",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsx("span",{children:"Agricultural Research Center"})]})]})]})]});case"webinars":return i.jsxs("div",{className:"events-grid",children:[i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone in flight"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"Introduction to Drone Technology"}),i.jsx("p",{children:"Free webinar covering basics of drone technology and its industrial applications."})]})]}),i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"AI and ML concept"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"Career in AI & ML"}),i.jsx("p",{children:"Webinar discussing career opportunities and skill requirements in AI/ML fields."})]})]}),i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Precision agriculture"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"Precision Agriculture Techniques"}),i.jsx("p",{children:"Learn about modern precision farming methods using IoT and data analytics."})]})]})]});case"courses":return i.jsxs("div",{className:"events-grid",children:[i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Drone piloting"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"Certificate in Drone Piloting"}),i.jsx("p",{children:"3-month program covering drone operation, regulations, and commercial applications."}),i.jsxs("div",{className:"event-card-info",children:[i.jsx("i",{className:"fas fa-check-circle"}),i.jsx("span",{children:"DGCA Approved"})]})]})]}),i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Business analytics dashboard"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"AI for Business Professionals"}),i.jsx("p",{children:"6-week certificate course on AI applications for non-technical business leaders."}),i.jsxs("div",{className:"event-card-info",children:[i.jsx("i",{className:"fas fa-check-circle"}),i.jsx("span",{children:"Industry Recognized"})]})]})]}),i.jsxs("div",{className:"event-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"IoT circuit board"}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{children:"IoT Fundamentals"}),i.jsx("p",{children:"8-week hands-on course on Internet of Things concepts and implementation."}),i.jsxs("div",{className:"event-card-info",children:[i.jsx("i",{className:"fas fa-check-circle"}),i.jsx("span",{children:"With Lab Access"})]})]})]})]});default:return null}};return i.jsx("section",{id:"events",className:"events-section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Conferences, Webinars & Certificate Courses"}),i.jsx("p",{className:"section-subtitle",children:"Participate in our knowledge-sharing events and short-term certification programs"}),i.jsxs("div",{className:"events-tabs",children:[i.jsx("button",{onClick:()=>c("conferences"),className:`tab-btn ${o==="conferences"?"active":""}`,children:"Conferences"}),i.jsx("button",{onClick:()=>c("webinars"),className:`tab-btn ${o==="webinars"?"active":""}`,children:"Webinars"}),i.jsx("button",{onClick:()=>c("courses"),className:`tab-btn ${o==="courses"?"active":""}`,children:"Certificate Courses"})]}),f()]})})},dx=()=>{const[o,c]=v.useState(""),f=m=>{m.preventDefault(),c("Thank you for subscribing!"),setTimeout(()=>c(""),5e3),m.target.reset()},d=new Date().getFullYear();return i.jsx("footer",{id:"contact",className:"site-footer",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-column",children:[i.jsx("h3",{children:"About Institute of Global Technology"}),i.jsx("p",{children:"Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields."}),i.jsx("p",{children:i.jsx("strong",{children:"Accredited by AIAB Europe"})}),i.jsxs("div",{className:"social-icons",children:[i.jsx("a",{href:"#","aria-label":"Facebook",title:"Follow us on Facebook",children:i.jsx("i",{className:"fab fa-facebook-f"})}),i.jsx("a",{href:"#","aria-label":"Twitter",title:"Follow us on Twitter",children:i.jsx("i",{className:"fab fa-twitter"})}),i.jsx("a",{href:"#","aria-label":"LinkedIn",title:"Connect on LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin-in"})}),i.jsx("a",{href:"#","aria-label":"Instagram",title:"Follow us on Instagram",children:i.jsx("i",{className:"fab fa-instagram"})}),i.jsx("a",{href:"#","aria-label":"YouTube",title:"Watch our videos",children:i.jsx("i",{className:"fab fa-youtube"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h3",{children:"Quick Links"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx(Sa,{to:"/home",className:"footer-nav-link",children:"Home"})}),i.jsx("li",{children:i.jsx(Sa,{to:"/programs",className:"footer-nav-link",children:"Academic Programs"})}),i.jsx("li",{children:i.jsx(Sa,{to:"/departments",className:"footer-nav-link",children:"Research Departments"})}),i.jsx("li",{children:i.jsx(Sa,{to:"/faculty",className:"footer-nav-link",children:"Faculty"})}),i.jsx("li",{children:i.jsx(Sa,{to:"/admissions",className:"footer-nav-link",children:"Admissions"})}),i.jsx("li",{children:i.jsx(Sa,{to:"/contact",className:"footer-nav-link",children:"Contact"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h3",{children:"Academic Programs"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",className:"footer-nav-link",children:"Robotics & AI"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"footer-nav-link",children:"Precision Agriculture"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"footer-nav-link",children:"Drone Technology"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"footer-nav-link",children:"Healthcare & Life Sciences"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"footer-nav-link",children:"Emerging Technologies"})}),i.jsx("li",{children:i.jsx("a",{href:"#",className:"footer-nav-link",children:"Research Opportunities"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h3",{children:"Newsletter"}),i.jsx("p",{children:"Subscribe to our newsletter to receive updates on events, admissions, and institute news."}),i.jsxs("form",{className:"newsletter-form",onSubmit:f,children:[i.jsx("input",{type:"email",placeholder:"Enter your email address",required:!0,"aria-label":"Email address for newsletter"}),i.jsx("button",{type:"submit","aria-label":"Subscribe to newsletter",children:i.jsx("i",{className:"fas fa-paper-plane"})})]}),o&&i.jsx("p",{className:"newsletter-message",children:o}),i.jsx("p",{className:"newsletter-note",children:"We respect your privacy. Unsubscribe at any time."})]})]}),i.jsx("div",{className:"footer-bottom",children:i.jsxs("div",{className:"footer-bottom-content",children:[i.jsxs("span",{children:["© ",d," Institute of Global Technology. All Rights Reserved."]}),i.jsxs("div",{className:"footer-bottom-links",children:[i.jsx("a",{href:"#","aria-label":"Terms of Use",children:"Terms of Use"}),i.jsx("a",{href:"#","aria-label":"Privacy Policy",children:"Privacy Policy"}),i.jsx("a",{href:"#","aria-label":"Accessibility",children:"Accessibility"}),i.jsx("a",{href:"#","aria-label":"Contact Support",children:"Support"})]})]})})]})})},fx=()=>i.jsxs(i.Fragment,{children:[i.jsx(W0,{}),i.jsx(ex,{}),i.jsx(tx,{}),i.jsx(ox,{}),i.jsx(sx,{}),i.jsx(cx,{}),i.jsx(ux,{})]}),mx=[{name:"AI & Machine Learning",description:"Developing AI and ML algorithms, models, and applications for various industries.",researchAreas:["Natural Language Processing","Computer Vision","Predictive Analytics","Robotics"],image:"https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg"},{name:"Cybersecurity",description:"Investigating cybersecurity threats, vulnerabilities, and countermeasures.",researchAreas:["Threat Intelligence","Incident Response","Cryptography","Network Security"],image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Data Science & Analytics",description:"Developing data-driven solutions for insights and decision-making.",researchAreas:["Big Data Analytics","Data Visualization","Predictive Modelling","Statistical Analysis"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"IoT & Edge Computing",description:"Designing and implementing IoT systems and edge computing architectures.",researchAreas:["IoT Security","Edge AI","Real-time Analytics","Industrial Automation"],image:"https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp"},{name:"Sustainable Energy",description:"Investigating sustainable energy solutions and climate change mitigation.",researchAreas:["Renewable Energy","Energy Storage","Green Buildings","Sustainable Infrastructure"],image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Biotechnology & Healthcare",description:"Developing innovative solutions for healthcare and medicine.",researchAreas:["Personalized Medicine","Regenerative Medicine","Gene Editing","Medical Imaging"],image:"https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"},{name:"Robotics & Autonomous Systems",description:"Designing advanced robotic systems and autonomous vehicles.",researchAreas:["Robotics","Autonomous Systems","Human-Robot Interaction","Swarm Robotics"],image:"https://media.licdn.com/dms/image/v2/D5612AQFLdebIV4BTYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721157098257?e=1761782400&v=beta&t=yLMm79DcuvTBA2jgbmubv_CMdyNlY8RQ8Kli_bTzNMo"},{name:"Advanced Materials",description:"Investigating novel materials and manufacturing processes.",researchAreas:["Nanomaterials","Biomaterials","3D Printing","Advanced Manufacturing"],image:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{name:"Human-Computer Interaction",description:"Developing user-centered interfaces and experiences.",researchAreas:["User Experience Design","Human-Computer Interaction","Accessibility","Usability"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},{name:"Zoology & Animal Biotechnology",description:"Exploring the genetic and cellular aspects of animals for sustainable development.",researchAreas:["Animal Genetics","Cellular Biotechnology","Wildlife Conservation","Veterinary Applications"],image:"https://i.ibb.co/WNZ4GPQ1/download-11.jpg"},{name:"Botany & Plant Biotechnology",description:"Advancing plant science through genetic engineering and sustainable agriculture.",researchAreas:["Plant Tissue Culture","Genetically Modified Crops","Medicinal Plants","Agro-biotechnology"],image:"https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg"},{name:"Quantum Computing",description:"Exploring quantum computing and emerging technologies.",researchAreas:["Quantum Algorithms","Quantum Applications","Blockchain","Distributed Ledger Tech"],image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}],px=()=>i.jsxs("section",{className:"departments-page",children:[i.jsx("div",{className:"page-banner departments-banner",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{children:"Our Research Departments"}),i.jsx("p",{children:"Explore our specialized research departments that are pushing the boundaries of knowledge and innovation"})]})}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"department-grid",children:mx.map((o,c)=>i.jsxs("div",{className:"department-card",children:[i.jsx("img",{src:o.image,alt:o.name}),i.jsxs("div",{className:"department-card-content",children:[i.jsx("h3",{children:o.name}),i.jsx("p",{children:o.description}),i.jsx("strong",{children:"Research Areas:"}),i.jsx("ul",{children:o.researchAreas.map((f,d)=>i.jsx("li",{children:f},d))}),i.jsx("a",{href:"#",children:"Explore Department"})]})]},c))})})]}),hx=[{name:"Dr Ipseeta Nanda",title:"Hon.Director Dean IGT",bio:"With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.",image:"https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Rahul Vadiseety",title:"Director AI",bio:"Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.",image:"https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr. Rath Satyasambit",title:"Director Robotics",bio:"Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",image:"https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png",social:{email:"#",linkedin:"#",scholar:"#"}},{name:"Dr Harshichander",title:"Director Biology",bio:"Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.",image:"https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png",social:{email:"#",linkedin:"#",scholar:"#"}}],gx=()=>i.jsxs("section",{className:"faculty-page",children:[i.jsxs("div",{className:"faculty-header",children:[i.jsx("h2",{children:"Our Distinguished Faculty"}),i.jsx("p",{children:"Meet our accomplished faculty members who are experts in their fields and dedicated to student success."})]}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"faculty-grid",children:hx.map((o,c)=>i.jsx("div",{className:"faculty-box",children:i.jsxs("div",{className:"faculty-card",children:[i.jsx("img",{src:o.image,alt:`Portrait of ${o.name}`,className:"faculty-image"}),i.jsxs("div",{className:"faculty-content",children:[i.jsx("h3",{children:o.name}),i.jsx("span",{className:"title",children:o.title}),i.jsx("p",{children:o.bio}),i.jsxs("div",{className:"faculty-social",children:[i.jsx("a",{href:o.social.email,"aria-label":"Email",children:i.jsx("i",{className:"fas fa-envelope"})}),i.jsx("a",{href:o.social.linkedin,"aria-label":"LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin-in"})}),i.jsx("a",{href:o.social.scholar,"aria-label":"Google Scholar",children:i.jsx("i",{className:"ai ai-google-scholar"})})]})]})]})},c))})})]}),xx=()=>{const o=Ct();return v.useEffect(()=>{window.scrollTo(0,0)},[o.pathname]),i.jsxs(i.Fragment,{children:[i.jsx(P0,{}),i.jsx($0,{}),i.jsx(I0,{activePage:o.pathname}),i.jsx("main",{children:i.jsxs(Ug,{children:[i.jsx(Et,{path:"/",element:i.jsx(Qf,{to:"/home",replace:!0})}),i.jsx(Et,{path:"/home",element:i.jsx(fx,{})}),i.jsx(Et,{path:"/programs",element:i.jsx(nx,{})}),i.jsx(Et,{path:"/program/:programSlug",element:i.jsx(J0,{})}),i.jsx(Et,{path:"/departments",element:i.jsx(px,{})}),i.jsx(Et,{path:"/faculty",element:i.jsx(gx,{})}),i.jsx(Et,{path:"/admissions",element:i.jsx(lx,{})}),i.jsx(Et,{path:"/contact",element:i.jsx(ix,{})}),i.jsx(Et,{path:"/tour",element:i.jsx(rx,{})}),i.jsx(Et,{path:"*",element:i.jsx(Qf,{to:"/home",replace:!0})})]})}),i.jsx(dx,{})]})};function bx(){return i.jsx(l0,{children:i.jsx(xx,{})})}Fh.createRoot(document.getElementById("root")).render(i.jsx(Hh.StrictMode,{children:i.jsx(bx,{})}));export{i as j,v as r};
