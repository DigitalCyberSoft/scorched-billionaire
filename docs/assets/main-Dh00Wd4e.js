var Mp=Object.defineProperty;var Sp=(i,t,e)=>t in i?Mp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var v=(i,t,e)=>Sp(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="170",Ep=0,Gl=1,Tp=2,Ef=1,bp=2,kn=3,Kn=0,ze=1,ln=2,mi=0,ms=1,nc=2,Vl=3,Wl=4,Ap=5,Ni=100,wp=101,Rp=102,Cp=103,Lp=104,Ip=200,Pp=201,Dp=202,Np=203,ic=204,sc=205,Up=206,Op=207,Fp=208,Bp=209,kp=210,Hp=211,zp=212,Gp=213,Vp=214,rc=0,oc=1,ac=2,ys=3,cc=4,lc=5,hc=6,uc=7,Tf=0,Wp=1,Xp=2,_i=0,qp=1,Yp=2,Kp=3,$p=4,Zp=5,Jp=6,Qp=7,Xl="attached",jp="detached",bf=300,Ms=301,Ss=302,fc=303,dc=304,Bo=306,Es=1e3,di=1001,bo=1002,Ne=1003,Af=1004,ir=1005,Ye=1006,fo=1007,Gn=1008,$n=1009,wf=1010,Rf=1011,fr=1012,ol=1013,Hi=1014,dn=1015,xr=1016,al=1017,cl=1018,Ts=1020,Cf=35902,Lf=1021,If=1022,je=1023,Pf=1024,Df=1025,_s=1026,bs=1027,ll=1028,hl=1029,Nf=1030,ul=1031,fl=1033,po=33776,mo=33777,_o=33778,go=33779,pc=35840,mc=35841,_c=35842,gc=35843,xc=36196,vc=37492,yc=37496,Mc=37808,Sc=37809,Ec=37810,Tc=37811,bc=37812,Ac=37813,wc=37814,Rc=37815,Cc=37816,Lc=37817,Ic=37818,Pc=37819,Dc=37820,Nc=37821,xo=36492,Uc=36494,Oc=36495,Uf=36283,Fc=36284,Bc=36285,kc=36286,dr=2300,pr=2301,Qo=2302,ql=2400,Yl=2401,Kl=2402,tm=2500,em=0,Of=1,Hc=2,nm=3200,im=3201,Ff=0,sm=1,fi="",be="srgb",Oe="srgb-linear",ko="linear",ee="srgb",qi=7680,$l=519,rm=512,om=513,am=514,Bf=515,cm=516,lm=517,hm=518,um=519,zc=35044,Zl="300 es",Vn=2e3,Ao=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const lr=Math.PI/180,As=180/Math.PI;function pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function fm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dm(i,t,e){return i!==t?(e-i)/(t-i):0}function hr(i,t,e){return(1-e)*i+e*t}function pm(i,t,e,n){return hr(i,t,1-Math.exp(-e*n))}function mm(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function _m(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vm(i,t){return i+Math.random()*(t-i)}function ym(i){return i*(.5-Math.random())}function Mm(i){i!==void 0&&(Jl=i);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sm(i){return i*lr}function Em(i){return i*As}function Tm(i){return(i&i-1)===0&&i!==0}function bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Am(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rm={DEG2RAD:lr,RAD2DEG:As,generateUUID:pn,clamp:Ie,euclideanModulo:dl,mapLinear:fm,inverseLerp:dm,lerp:hr,damp:pm,pingpong:mm,smoothstep:_m,smootherstep:gm,randInt:xm,randFloat:vm,randFloatSpread:ym,seededRandom:Mm,degToRad:Sm,radToDeg:Em,isPowerOfTwo:Tm,ceilPowerOfTwo:bm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:wm,normalize:jt,denormalize:hn};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=s[0],m=s[3],p=s[6],T=s[1],A=s[4],S=s[7],O=s[2],C=s[5],w=s[8];return r[0]=o*g+a*T+c*O,r[3]=o*m+a*A+c*C,r[6]=o*p+a*S+c*w,r[1]=l*g+h*T+u*O,r[4]=l*m+h*A+u*C,r[7]=l*p+h*S+u*w,r[2]=f*g+d*T+_*O,r[5]=f*m+d*A+_*C,r[8]=f*p+d*S+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=e*u+n*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new Nt;function kf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){const i=mr("canvas");return i.style.display="block",i}const Ql={};function sr(i){i in Ql||(Ql[i]=!0,console.warn(i))}function Lm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Im(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zt={enabled:!0,workingColorSpace:Oe,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?ko:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jl=[.64,.33,.3,.6,.15,.06],th=[.2126,.7152,.0722],eh=[.3127,.329],nh=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Oe]:{primaries:jl,whitePoint:eh,transfer:ko,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:th,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:jl,whitePoint:eh,transfer:ee,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:th,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let Yi;class Dm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=mr("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nm=0;class Hf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ta(s[o].image)):r.push(ta(s[o]))}else r=ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Um=0;class Se extends Is{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=di,s=di,r=Ye,o=Gn,a=je,c=$n,l=Se.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=pn(),this.name="",this.source=new Hf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=bf;Se.DEFAULT_ANISOTROPY=1;class $t{constructor(t=0,e=0,n=0,s=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(l+1)/2,S=(d+1)/2,O=(p+1)/2,C=(h+f)/4,w=(u+g)/4,U=(_+m)/4;return A>S&&A>O?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=C/n,r=w/n):S>O?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=U/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=w/r,s=U/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-g)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Om extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Se(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Om{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zf extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==d||h!==_){let m=1-a;const p=c*f+l*d+h*_+u*g,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const O=Math.sqrt(A),C=Math.atan2(O,p*T);m=Math.sin(m*C)/O,a=Math.sin(a*C)/O}const S=a*T;if(c=c*m+f*S,l=l*m+d*S,h=h*m+_*S,u=u*m+g*S,m===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-a*d,t[e+2]=l*_+h*d+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new I,sh=new Mi;class Qn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Rr.subVectors(this.max,zs),Ki.subVectors(t.a,zs),$i.subVectors(t.b,zs),Zi.subVectors(t.c,zs),ei.subVectors($i,Ki),ni.subVectors(Zi,$i),bi.subVectors(Ki,Zi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-bi.z,bi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,bi.z,0,-bi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-bi.y,bi.x,0];return!na(e,Ki,$i,Zi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!na(e,Ki,$i,Zi,Rr))?!1:(Cr.crossVectors(ei,ni),e=[Cr.x,Cr.y,Cr.z],na(e,Ki,$i,Zi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new I,new I,new I,new I,new I,new I,new I,new I],rn=new I,wr=new Qn,Ki=new I,$i=new I,Zi=new I,ei=new I,ni=new I,bi=new I,zs=new I,Rr=new I,Cr=new I,Ai=new I;function na(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Bm=new Qn,Gs=new I,ia=new I;class Rn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(ia)),this.expandByPoint(Gs.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new I,sa=new I,Lr=new I,ii=new I,ra=new I,Ir=new I,oa=new I;class Ho{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sa.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Lr),a=ii.dot(this.direction),c=-ii.dot(Lr),l=ii.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sa).addScaledVector(Lr,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){ra.subVectors(e,t),Ir.subVectors(n,t),oa.crossVectors(ra,Ir);let o=this.direction.dot(oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(Ir.crossVectors(ii,Ir));if(c<0)return null;const l=a*this.direction.dot(ra.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(oa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,_,g,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,_,g,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,Hm)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),si.crossVectors(n,We),si.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),si.crossVectors(n,We)),si.normalize(),Pr.crossVectors(We,si),s[0]=si.x,s[4]=Pr.x,s[8]=We.x,s[1]=si.y,s[5]=Pr.y,s[9]=We.y,s[2]=si.z,s[6]=Pr.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],A=n[7],S=n[11],O=n[15],C=s[0],w=s[4],U=s[8],E=s[12],M=s[1],R=s[5],W=s[9],H=s[13],$=s[2],Z=s[6],q=s[10],Q=s[14],G=s[3],st=s[7],ht=s[11],yt=s[15];return r[0]=o*C+a*M+c*$+l*G,r[4]=o*w+a*R+c*Z+l*st,r[8]=o*U+a*W+c*q+l*ht,r[12]=o*E+a*H+c*Q+l*yt,r[1]=h*C+u*M+f*$+d*G,r[5]=h*w+u*R+f*Z+d*st,r[9]=h*U+u*W+f*q+d*ht,r[13]=h*E+u*H+f*Q+d*yt,r[2]=_*C+g*M+m*$+p*G,r[6]=_*w+g*R+m*Z+p*st,r[10]=_*U+g*W+m*q+p*ht,r[14]=_*E+g*H+m*Q+p*yt,r[3]=T*C+A*M+S*$+O*G,r[7]=T*w+A*R+S*Z+O*st,r[11]=T*U+A*W+S*q+O*ht,r[15]=T*E+A*H+S*Q+O*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+g*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],T=u*m*l-g*f*l+g*c*d-a*m*d-u*c*p+a*f*p,A=_*f*l-h*m*l-_*c*d+o*m*d+h*c*p-o*f*p,S=h*g*l-_*u*l+_*a*d-o*g*d-h*a*p+o*u*p,O=_*u*c-h*g*c-_*a*f+o*g*f+h*a*m-o*u*m,C=e*T+n*A+s*S+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=T*w,t[1]=(g*f*r-u*m*r-g*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*w,t[4]=A*w,t[5]=(h*m*r-_*f*r+_*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*w,t[8]=S*w,t[9]=(_*u*r-h*g*r-_*n*d+e*g*d+h*n*p-e*u*p)*w,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*w,t[12]=O*w,t[13]=(h*g*s-_*u*s+_*n*f-e*g*f-h*n*m+e*u*m)*w,t[14]=(_*a*s-o*g*s-_*n*c+e*g*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,g=o*h,m=o*u,p=a*u,T=c*l,A=c*h,S=c*u,O=n.x,C=n.y,w=n.z;return s[0]=(1-(g+p))*O,s[1]=(d+S)*O,s[2]=(_-A)*O,s[3]=0,s[4]=(d-S)*C,s[5]=(1-(f+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(_+A)*w,s[9]=(m-T)*w,s[10]=(1-(f+g))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const l=1/r,h=1/o,u=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,_;if(a===Vn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h;let _,g;if(a===Vn)_=(o+r)*u,g=-2*u;else if(a===Ao)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new I,on=new Lt,km=new I(0,0,0),Hm=new I(1,1,1),si=new I,Pr=new I,We=new I,rh=new Lt,oh=new Mi;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Gf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zm=0;const ah=new I,Qi=new Mi,Un=new Lt,Dr=new I,Vs=new I,Gm=new I,Vm=new Mi,ch=new I(1,0,0),lh=new I(0,1,0),hh=new I(0,0,1),uh={type:"added"},Wm={type:"removed"},ji={type:"childadded",child:null},aa={type:"childremoved",child:null};class ue extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new I,e=new bn,n=new Mi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Nt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Vs,Dr,this.up):Un.lookAt(Dr,Vs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Un),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wm),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ue.DEFAULT_UP=new I(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new I,On=new I,ca=new I,Fn=new I,ts=new I,es=new I,fh=new I,la=new I,ha=new I,ua=new I,fa=new $t,da=new $t,pa=new $t;class Qe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),On.subVectors(n,e),ca.subVectors(t,e);const o=an.dot(an),a=an.dot(On),c=an.dot(ca),l=On.dot(On),h=On.dot(ca),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return fa.setScalar(0),da.setScalar(0),pa.setScalar(0),fa.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(da,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),On.subVectors(t,e),an.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),On.subVectors(this.a,this.b),an.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,n),es.subVectors(r,n),la.subVectors(t,n);const c=ts.dot(la),l=es.dot(la);if(c<=0&&l<=0)return e.copy(n);ha.subVectors(t,s);const h=ts.dot(ha),u=es.dot(ha);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ts,o);ua.subVectors(t,r);const d=ts.dot(ua),_=es.dot(ua);if(_>=0&&d<=_)return e.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(es,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return fh.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(fh,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=dl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ma(o,r,t+1/3),this.g=ma(o,r,t),this.b=ma(o,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=Vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ie(Ce.r*255,0,255))*65536+Math.round(Ie(Ce.g*255,0,255))*256+Math.round(Ie(Ce.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=be){zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Nr);const n=hr(ri.h,Nr.h,e),s=hr(ri.s,Nr.s,e),r=hr(ri.l,Nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new At;At.NAMES=Vf;let Xm=0;class mn extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=pn(),this.name="",this.blending=ms,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fi extends mn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new I,Ur=new Ut;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}}class Wf extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xf extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qn extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qm=0;const Ze=new Lt,_a=new ue,ns=new I,Xe=new Qn,Ws=new Qn,ye=new I;class _n extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kf(t)?Xf:Wf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Xe.min,Ws.min),Xe.expandByPoint(ye),ye.addVectors(Xe.max,Ws.max),Xe.expandByPoint(ye)):(Xe.expandByPoint(Ws.min),Xe.expandByPoint(Ws.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ye.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(t,l),ye.add(ns)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new I,c[U]=new I;const l=new I,h=new I,u=new I,f=new Ut,d=new Ut,_=new Ut,g=new I,m=new I;function p(U,E,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const R=1/(d.x*_.y-_.x*d.y);isFinite(R)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(R),a[U].add(g),a[E].add(g),a[M].add(g),c[U].add(m),c[E].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,E=T.length;U<E;++U){const M=T[U],R=M.start,W=M.count;for(let H=R,$=R+W;H<$;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const A=new I,S=new I,O=new I,C=new I;function w(U){O.fromBufferAttribute(s,U),C.copy(O);const E=a[U];A.copy(E),A.sub(O.multiplyScalar(O.dot(E))).normalize(),S.crossVectors(C,E);const R=S.dot(c[U])<0?-1:1;o.setXYZW(U,A.x,A.y,A.z,R)}for(let U=0,E=T.length;U<E;++U){const M=T[U],R=M.start,W=M.count;for(let H=R,$=R+W;H<$;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*h;for(let p=0;p<h;p++)f[_++]=l[d++]}return new Ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new Lt,wi=new Ho,Or=new Rn,ph=new I,Fr=new I,Br=new I,kr=new I,ga=new I,Hr=new I,mh=new I,zr=new I;class ke extends ue{constructor(t=new _n,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ga.fromBufferAttribute(u,t),o?Hr.addScaledVector(ga,h):Hr.addScaledVector(ga.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Or.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Or,ph)===null||wi.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(dh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,O=A;S<O;S+=3){const C=a.getX(S),w=a.getX(S+1),U=a.getX(S+2);s=Gr(this,p,t,n,l,h,u,C,w,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);s=Gr(this,o,t,n,l,h,u,T,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,O=A;S<O;S+=3){const C=S,w=S+1,U=S+2;s=Gr(this,p,t,n,l,h,u,C,w,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=m,A=m+1,S=m+2;s=Gr(this,o,t,n,l,h,u,T,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ym(i,t,e,n,s,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Kn,a),c===null)return null;zr.copy(a),zr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zr);return l<e.near||l>e.far?null:{distance:l,point:zr.clone(),object:i}}function Gr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Fr),i.getVertexPosition(c,Br),i.getVertexPosition(l,kr);const h=Ym(i,t,e,n,Fr,Br,kr,mh);if(h){const u=new I;Qe.getBarycoord(mh,Fr,Br,kr,u),s&&(h.uv=Qe.getInterpolatedAttribute(s,a,c,l,u,new Ut)),r&&(h.uv1=Qe.getInterpolatedAttribute(r,a,c,l,u,new Ut)),o&&(h.normal=Qe.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};Qe.getNormal(Fr,Br,kr,f.normal),h.face=f,h.barycoord=u}return h}class Ps extends _n{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(u,2));function _(g,m,p,T,A,S,O,C,w,U,E){const M=S/w,R=O/U,W=S/2,H=O/2,$=C/2,Z=w+1,q=U+1;let Q=0,G=0;const st=new I;for(let ht=0;ht<q;ht++){const yt=ht*R-H;for(let Bt=0;Bt<Z;Bt++){const ne=Bt*M-W;st[g]=ne*T,st[m]=yt*A,st[p]=$,l.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[p]=C>0?1:-1,h.push(st.x,st.y,st.z),u.push(Bt/w),u.push(1-ht/U),Q+=1}}for(let ht=0;ht<U;ht++)for(let yt=0;yt<w;yt++){const Bt=f+yt+Z*ht,ne=f+yt+Z*(ht+1),X=f+(yt+1)+Z*(ht+1),et=f+(yt+1)+Z*ht;c.push(Bt,ne,et),c.push(ne,X,et),G+=6}a.addGroup(d,G,E),d+=G,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function Km(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const $m={clone:ws,merge:De};var Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends mn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yf extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new I,_h=new Ut,gh=new Ut;class Be extends Yf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,_h,gh),e.subVectors(gh,_h)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class Qm extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new Be(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new Be(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new Be(is,ss,t,e);a.layers=this.layers,this.add(a);const c=new Be(is,ss,t,e);c.layers=this.layers,this.add(c);const l=new Be(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Kf extends Se{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jm extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ps(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:mi});r.uniforms.tEquirect.value=e;const o=new ke(s,r),a=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Ye),new Qm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const xa=new I,t_=new I,e_=new Nt;class Pi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xa.subVectors(n,e).cross(t_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||e_.getNormalMatrix(t),s=this.coplanarPoint(xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Rn,Vr=new I;class pl{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],g=s[10],m=s[11],p=s[12],T=s[13],A=s[14],S=s[15];if(n[0].setComponents(c-r,f-l,m-d,S-p).normalize(),n[1].setComponents(c+r,f+l,m+d,S+p).normalize(),n[2].setComponents(c+o,f+h,m+_,S+T).normalize(),n[3].setComponents(c-o,f-h,m-_,S-T).normalize(),n[4].setComponents(c-a,f-u,m-g,S-A).normalize(),e===Vn)n[5].setComponents(c+a,f+u,m+g,S+A).normalize();else if(e===Ao)n[5].setComponents(a,u,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $f(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function n_(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class vr extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const T=p*f-o;for(let A=0;A<l;A++){const S=A*u-r;_.push(S,-T,0),g.push(0,0,1),m.push(A/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const A=T+l*p,S=T+l*(p+1),O=T+1+l*(p+1),C=T+1+l*p;d.push(A,S,C),d.push(S,O,C)}this.setIndex(d),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(g,3)),this.setAttribute("uv",new qn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.width,t.height,t.widthSegments,t.heightSegments)}}var i_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,__=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:i_,alphahash_pars_fragment:s_,alphamap_fragment:r_,alphamap_pars_fragment:o_,alphatest_fragment:a_,alphatest_pars_fragment:c_,aomap_fragment:l_,aomap_pars_fragment:h_,batching_pars_vertex:u_,batching_vertex:f_,begin_vertex:d_,beginnormal_vertex:p_,bsdfs:m_,iridescence_fragment:__,bumpmap_pars_fragment:g_,clipping_planes_fragment:x_,clipping_planes_pars_fragment:v_,clipping_planes_pars_vertex:y_,clipping_planes_vertex:M_,color_fragment:S_,color_pars_fragment:E_,color_pars_vertex:T_,color_vertex:b_,common:A_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:R_,displacementmap_pars_vertex:C_,displacementmap_vertex:L_,emissivemap_fragment:I_,emissivemap_pars_fragment:P_,colorspace_fragment:D_,colorspace_pars_fragment:N_,envmap_fragment:U_,envmap_common_pars_fragment:O_,envmap_pars_fragment:F_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:$_,envmap_vertex:k_,fog_vertex:H_,fog_pars_vertex:z_,fog_fragment:G_,fog_pars_fragment:V_,gradientmap_pars_fragment:W_,lightmap_pars_fragment:X_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:Y_,lights_pars_begin:K_,lights_toon_fragment:Z_,lights_toon_pars_fragment:J_,lights_phong_fragment:Q_,lights_phong_pars_fragment:j_,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:cg,map_fragment:lg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:fg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:_g,morphnormal_vertex:gg,morphtarget_pars_vertex:xg,morphtarget_vertex:vg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Lg,packing:Ig,premultiplied_alpha_fragment:Pg,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:kg,shadowmap_vertex:Hg,shadowmask_pars_fragment:zg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Kg,tonemapping_pars_fragment:$g,transmission_fragment:Zg,transmission_pars_fragment:Jg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:o0,cube_frag:a0,depth_vert:c0,depth_frag:l0,distanceRGBA_vert:h0,distanceRGBA_frag:u0,equirect_vert:f0,equirect_frag:d0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:_0,meshbasic_frag:g0,meshlambert_vert:x0,meshlambert_frag:v0,meshmatcap_vert:y0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:E0,meshphong_vert:T0,meshphong_frag:b0,meshphysical_vert:A0,meshphysical_frag:w0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:L0,points_frag:I0,shadow_vert:P0,shadow_frag:D0,sprite_vert:N0,sprite_frag:U0},nt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Mn={basic:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new At(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:De([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:De([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new At(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:De([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:De([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:De([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:De([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:De([nt.common,nt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:De([nt.lights,nt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Mn.physical={uniforms:De([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Wr={r:0,b:0,g:0},Ci=new bn,O0=new Lt;function F0(i,t,e,n,s,r,o){const a=new At(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?e:t).get(A)),A}function g(T){let A=!1;const S=_(T);S===null?p(a,c):S&&S.isColor&&(p(S,1),A=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,A){const S=_(A);S&&(S.isCubeTexture||S.mapping===Bo)?(h===void 0&&(h=new ke(new Ps(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:ws(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(A.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Ci)),h.material.toneMapped=zt.getTransfer(S.colorSpace)!==ee,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ke(new vr(2,2),new xi({name:"BackgroundMaterial",uniforms:ws(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=zt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,A){T.getRGB(Wr,qf(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),c=A,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:g,addToRenderList:m}}function B0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,R,W,H,$){let Z=!1;const q=u(H,W,R);r!==q&&(r=q,l(r.object)),Z=d(M,H,W,$),Z&&_(M,H,W,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(M,R,W,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,R,W){const H=W.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let Z=$[R.id];Z===void 0&&(Z={},$[R.id]=Z);let q=Z[H];return q===void 0&&(q=f(c()),Z[H]=q),q}function f(M){const R=[],W=[],H=[];for(let $=0;$<e;$++)R[$]=0,W[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,R,W,H){const $=r.attributes,Z=R.attributes;let q=0;const Q=W.getAttributes();for(const G in Q)if(Q[G].location>=0){const ht=$[G];let yt=Z[G];if(yt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function _(M,R,W,H){const $={},Z=R.attributes;let q=0;const Q=W.getAttributes();for(const G in Q)if(Q[G].location>=0){let ht=Z[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),$[G]=yt,q++}r.attributes=$,r.attributesNum=q,r.index=H}function g(){const M=r.newAttributes;for(let R=0,W=M.length;R<W;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const W=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;W[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),$[M]!==R&&(i.vertexAttribDivisor(M,R),$[M]=R)}function T(){const M=r.newAttributes,R=r.enabledAttributes;for(let W=0,H=R.length;W<H;W++)R[W]!==M[W]&&(i.disableVertexAttribArray(W),R[W]=0)}function A(M,R,W,H,$,Z,q){q===!0?i.vertexAttribIPointer(M,R,W,$,Z):i.vertexAttribPointer(M,R,W,H,$,Z)}function S(M,R,W,H){g();const $=H.attributes,Z=W.getAttributes(),q=R.defaultAttributeValues;for(const Q in Z){const G=Z[Q];if(G.location>=0){let st=$[Q];if(st===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ht=st.normalized,yt=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const ne=Bt.buffer,X=Bt.type,et=Bt.bytesPerElement,gt=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===ol;if(st.isInterleavedBufferAttribute){const rt=st.data,bt=rt.stride,Ct=st.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)p(G.location+kt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let kt=0;kt<G.locationSize;kt++)A(G.location+kt,yt/G.locationSize,X,ht,bt*et,(Ct+yt/G.locationSize*kt)*et,gt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let rt=0;rt<G.locationSize;rt++)A(G.location+rt,yt/G.locationSize,X,ht,yt*et,yt/G.locationSize*rt*et,gt)}}else if(q!==void 0){const ht=q[Q];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}T()}function O(){U();for(const M in n){const R=n[M];for(const W in R){const H=R[W];for(const $ in H)h(H[$].object),delete H[$];delete R[W]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const W in R){const H=R[W];for(const $ in H)h(H[$].object),delete H[$];delete R[W]}delete n[M.id]}function w(M){for(const R in n){const W=n[R];if(W[M.id]===void 0)continue;const H=W[M.id];for(const $ in H)h(H[$].object),delete H[$];delete W[M.id]}}function U(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function k0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==je&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const U=w===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==$n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dn&&!U)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:O,maxSamples:C}}function z0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Pi,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,A=T*4;let S=p.clippingState||null;c.value=S,S=h(_,f,A,d);for(let O=0;O!==A;++O)S[O]=e[O];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=d;A!==g;++A,S+=4)o.copy(u[A]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function G0(i){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=Ms:a===dc&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===dc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zo extends Yf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,xh=[.125,.215,.35,.446,.526,.582],Ui=20,va=new zo,vh=new At;let ya=null,Ma=0,Sa=0,Ea=!1;const Di=(1+Math.sqrt(5))/2,rs=1/Di,yh=[new I(-Di,rs,0),new I(Di,rs,0),new I(-rs,0,Di),new I(rs,0,Di),new I(0,Di,-rs),new I(0,Di,rs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Mh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ya,Ma,Sa),this._renderer.xr.enabled=Ea,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:xr,format:je,colorSpace:Oe,depthBuffer:!1},s=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(r)),this._blurMaterial=W0(r,t,e)}return s}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,va)}_sceneToCubeUV(t,e,n,s){const a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vh),h.toneMapping=_i,h.autoClear=!1;const d=new Fi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new ke(new Ps,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(vh),g=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const A=this._cubeSize;Xr(s,T*A,p>2?A:0,A,A),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ms||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Xr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yh[(s-r-1)%yh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ke(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let T=0;for(let w=0;w<Ui;++w){const U=w/g,E=Math.exp(-U*U/2);p.push(E),w===0?T+=E:w<m&&(T+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;const S=this._sizeLods[s],O=3*S*(s>A-ps?s-A+ps:0),C=4*(this._cubeSize-S);Xr(e,O,C,3*S,2*S),c.setRenderTarget(e),c.render(u,va)}}function V0(i){const t=[],e=[],n=[];let s=i;const r=i-ps+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ps?c=xh[o-i+ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*d),A=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,U=C>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];T.set(E,g*_*C),A.set(f,m*_*C);const M=[C,C,C,C,C,C];S.set(M,p*_*C)}const O=new _n;O.setAttribute("position",new Ue(T,g)),O.setAttribute("uv",new Ue(A,m)),O.setAttribute("faceIndex",new Ue(S,p)),t.push(O),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sh(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function W0(i,t,e){const n=new Float32Array(Ui),s=new I(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Eh(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Th(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===fc||c===dc,h=c===Ms||c===Ss;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Mh(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Mh(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function q0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const T=d.array;g=d.version;for(let A=0,S=T.length;A<S;A+=3){const O=T[A+0],C=T[A+1],w=T[A+2];f.push(O,C,C,w,w,O)}}else if(_!==void 0){const T=_.array;g=_.version;for(let A=0,S=T.length/3-1;A<S;A+=3){const O=A+0,C=A+1,w=A+2;f.push(O,C,C,w,w,O)}}else return;const m=new(kf(f)?Xf:Wf)(f,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function K0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function u(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=d[T]*g[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Z0(i,t,e){const n=new WeakMap,s=new $t;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let O=a.attributes.position.count*S,C=1;O>t.maxTextureSize&&(C=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const w=new Float32Array(O*C*4*u),U=new zf(w,O,C,u);U.type=dn,U.needsUpdate=!0;const E=S*4;for(let R=0;R<u;R++){const W=p[R],H=T[R],$=A[R],Z=O*C*4*R;for(let q=0;q<W.count;q++){const Q=q*E;_===!0&&(s.fromBufferAttribute(W,q),w[Z+Q+0]=s.x,w[Z+Q+1]=s.y,w[Z+Q+2]=s.z,w[Z+Q+3]=0),g===!0&&(s.fromBufferAttribute(H,q),w[Z+Q+4]=s.x,w[Z+Q+5]=s.y,w[Z+Q+6]=s.z,w[Z+Q+7]=0),m===!0&&(s.fromBufferAttribute($,q),w[Z+Q+8]=s.x,w[Z+Q+9]=s.y,w[Z+Q+10]=s.z,w[Z+Q+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:U,size:new Ut(O,C)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function J0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Zf extends Se{constructor(t,e,n,s,r,o,a,c,l,h=_s){if(h!==_s&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Hi),n===void 0&&h===bs&&(n=Ts),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jf=new Se,bh=new Zf(1,1),Qf=new zf,jf=new Fm,td=new Kf,Ah=[],wh=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Lh=new Float32Array(4);function Ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Go(i,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function nx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),ve(e,n)}}function ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),ve(e,n)}}function sx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),ve(e,n)}}function rx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function lx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function dx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bh.compareFunction=Bf,r=bh):r=Jf,e.setTexture2D(t||r,s)}function px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jf,s)}function mx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||td,s)}function _x(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qf,s)}function gx(i){switch(i){case 5126:return Q0;case 35664:return j0;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return cx;case 5125:return lx;case 36294:return hx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return _x}}function xx(i,t){i.uniform1fv(this.addr,t)}function vx(i,t){const e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function yx(i,t){const e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Mx(i,t){const e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Sx(i,t){const e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ex(i,t){const e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tx(i,t){const e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bx(i,t){i.uniform1iv(this.addr,t)}function Ax(i,t){i.uniform2iv(this.addr,t)}function wx(i,t){i.uniform3iv(this.addr,t)}function Rx(i,t){i.uniform4iv(this.addr,t)}function Cx(i,t){i.uniform1uiv(this.addr,t)}function Lx(i,t){i.uniform2uiv(this.addr,t)}function Ix(i,t){i.uniform3uiv(this.addr,t)}function Px(i,t){i.uniform4uiv(this.addr,t)}function Dx(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jf,r[o])}function Nx(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jf,r[o])}function Ux(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||td,r[o])}function Ox(i,t,e){const n=this.cache,s=t.length,r=Go(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qf,r[o])}function Fx(i){switch(i){case 5126:return xx;case 35664:return vx;case 35665:return yx;case 35666:return Mx;case 35674:return Sx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return bx;case 35667:case 35671:return Ax;case 35668:case 35672:return wx;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Lx;case 36295:return Ix;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ox}}class Bx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gx(e.type)}}class kx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}}class Hx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Ih(i,t){i.seq.push(t),i.map[t.id]=t}function zx(i,t,e){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),o=Ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ih(e,l===void 0?new Bx(a,i,t):new kx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Hx(a),Ih(e,u)),e=u}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);zx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ph(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gx=37297;let Vx=0;function Wx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Dh=new Nt;function Xx(i){zt._getMatrix(Dh,zt.workingColorSpace,i);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case ko:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wx(i.getShaderSource(t),o)}else return s}function qx(i,t){const e=Xx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yx(i,t){let e;switch(t){case qp:e="Linear";break;case Yp:e="Reinhard";break;case Kp:e="Cineon";break;case $p:e="ACESFilmic";break;case Jp:e="AgX";break;case Qp:e="Neutral";break;case Zp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new I;function Kx(){zt.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Zx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rr(i){return i!==""}function Uh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(Qx,tv)}const jx=new Map;function tv(i,t){let e=Ft[t];if(e===void 0){const n=jx.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}const ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(i){return i.replace(ev,nv)}function nv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ef?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function sv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case Ss:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function ov(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tf:t="ENVMAP_BLENDING_MULTIPLY";break;case Wp:t="ENVMAP_BLENDING_MIX";break;case Xp:t="ENVMAP_BLENDING_ADD";break}return t}function av(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=iv(e),l=sv(e),h=rv(e),u=ov(e),f=av(e),d=$x(e),_=Zx(r),g=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Ft.tonemapping_pars_fragment:"",e.toneMapping!==_i?Yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),Kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=Gc(o),o=Uh(o,e),o=Oh(o,e),a=Gc(a),a=Uh(a,e),a=Oh(a,e),o=Fh(o),a=Fh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+o,S=T+p+a,O=Ph(s,s.VERTEX_SHADER,A),C=Ph(s,s.FRAGMENT_SHADER,S);s.attachShader(g,O),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(R){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(g).trim(),H=s.getShaderInfoLog(O).trim(),$=s.getShaderInfoLog(C).trim();let Z=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,O,C);else{const Q=Nh(s,O,"vertex"),G=Nh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+Q+`
`+G)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||$==="")&&(q=!1);q&&(R.diagnostics={runnable:Z,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(O),s.deleteShader(C),U=new vo(s,g),E=Jx(s,g)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,Gx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=C,this}let lv=0;class hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uv(t),e.set(t,n)),n}}class uv{constructor(t){this.id=lv++,this.code=t,this.usedTimes=0}}function fv(i,t,e,n,s,r,o){const a=new Gf,c=new hv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,R,W,H){const $=W.fog,Z=H.geometry,q=E.isMeshStandardMaterial?W.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),G=Q&&Q.mapping===Bo?Q.image.height:null,st=_[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=ht!==void 0?ht.length:0;let Bt=0;Z.morphAttributes.position!==void 0&&(Bt=1),Z.morphAttributes.normal!==void 0&&(Bt=2),Z.morphAttributes.color!==void 0&&(Bt=3);let ne,X,et,gt;if(st){const Qt=Mn[st];ne=Qt.vertexShader,X=Qt.fragmentShader}else ne=E.vertexShader,X=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);const rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ct=H.isInstancedMesh===!0,kt=H.isBatchedMesh===!0,fe=!!E.map,Xt=!!E.matcap,pe=!!Q,N=!!E.aoMap,Ke=!!E.lightMap,Gt=!!E.bumpMap,Vt=!!E.normalMap,St=!!E.displacementMap,ce=!!E.emissiveMap,Mt=!!E.metalnessMap,b=!!E.roughnessMap,x=E.anisotropy>0,F=E.clearcoat>0,Y=E.dispersion>0,J=E.iridescence>0,V=E.sheen>0,xt=E.transmission>0,ot=x&&!!E.anisotropyMap,ut=F&&!!E.clearcoatMap,qt=F&&!!E.clearcoatNormalMap,j=F&&!!E.clearcoatRoughnessMap,ft=J&&!!E.iridescenceMap,Et=J&&!!E.iridescenceThicknessMap,wt=V&&!!E.sheenColorMap,dt=V&&!!E.sheenRoughnessMap,Wt=!!E.specularMap,Ot=!!E.specularColorMap,oe=!!E.specularIntensityMap,L=xt&&!!E.transmissionMap,it=xt&&!!E.thicknessMap,z=!!E.gradientMap,K=!!E.alphaMap,lt=E.alphaTest>0,at=!!E.alphaHash,It=!!E.extensions;let de=_i;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(de=i.toneMapping);const we={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:X,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:kt,batchingColor:kt&&H._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&H.instanceColor!==null,instancingMorph:Ct&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Oe,alphaToCoverage:!!E.alphaToCoverage,map:fe,matcap:Xt,envMap:pe,envMapMode:pe&&Q.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Ke,bumpMap:Gt,normalMap:Vt,displacementMap:f&&St,emissiveMap:ce,normalMapObjectSpace:Vt&&E.normalMapType===sm,normalMapTangentSpace:Vt&&E.normalMapType===Ff,metalnessMap:Mt,roughnessMap:b,anisotropy:x,anisotropyMap:ot,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:qt,clearcoatRoughnessMap:j,dispersion:Y,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:Et,sheen:V,sheenColorMap:wt,sheenRoughnessMap:dt,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:oe,transmission:xt,transmissionMap:L,thicknessMap:it,gradientMap:z,opaque:E.transparent===!1&&E.blending===ms&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:at,combine:E.combine,mapUv:fe&&g(E.map.channel),aoMapUv:N&&g(E.aoMap.channel),lightMapUv:Ke&&g(E.lightMap.channel),bumpMapUv:Gt&&g(E.bumpMap.channel),normalMapUv:Vt&&g(E.normalMap.channel),displacementMapUv:St&&g(E.displacementMap.channel),emissiveMapUv:ce&&g(E.emissiveMap.channel),metalnessMapUv:Mt&&g(E.metalnessMap.channel),roughnessMapUv:b&&g(E.roughnessMap.channel),anisotropyMapUv:ot&&g(E.anisotropyMap.channel),clearcoatMapUv:ut&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(E.sheenRoughnessMap.channel),specularMapUv:Wt&&g(E.specularMap.channel),specularColorMapUv:Ot&&g(E.specularColorMap.channel),specularIntensityMapUv:oe&&g(E.specularIntensityMap.channel),transmissionMapUv:L&&g(E.transmissionMap.channel),thicknessMapUv:it&&g(E.thicknessMap.channel),alphaMapUv:K&&g(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Vt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(fe||K),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:fe&&E.map.isVideoTexture===!0&&zt.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:ce&&E.emissiveMap.isVideoTexture===!0&&zt.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(T(M,E),A(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function T(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function A(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=_[E.type];let R;if(M){const W=Mn[M];R=$m.clone(W.uniforms)}else R=E.uniforms;return R}function O(E,M){let R;for(let W=0,H=h.length;W<H;W++){const $=h[W];if($.cacheKey===M){R=$,++R.usedTimes;break}}return R===void 0&&(R=new cv(i,M,E,r),h.push(R)),R}function C(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:O,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:U}}function dv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,_,g,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||pv),n.length>1&&n.sort(f||kh),s.length>1&&s.sort(f||kh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function mv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hh,i.set(n,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _v(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new At};break;case"SpotLight":e={position:new I,direction:new I,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function gv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xv=0;function vv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yv(i){const t=new _v,e=gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new Lt,o=new Lt;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,T=0,A=0,S=0,O=0,C=0,w=0;l.sort(vv);for(let E=0,M=l.length;E<M;E++){const R=l[E],W=R.color,H=R.intensity,$=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=W.r*H,u+=W.g*H,f+=W.b*H;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],H);w++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=R.shadow.matrix,T++}n.directional[d]=q,d++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(W).multiplyScalar(H),q.distance=$,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[g]=q;const Q=R.shadow;if(R.map&&(n.spotLightMap[O]=R.map,O++,Q.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[g]=Q.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=Z,S++}g++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(W).multiplyScalar(H),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Q=R.shadow,G=e.get(R);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=R.shadow.matrix,A++}n.point[_]=q,_++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(H),q.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==d||U.pointLength!==_||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==T||U.numPointShadows!==A||U.numSpotShadows!==S||U.numSpotMaps!==O||U.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=S+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,U.directionalLength=d,U.pointLength=_,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=T,U.numPointShadows=A,U.numSpotShadows=S,U.numSpotMaps=O,U.numLightProbes=w,n.version=xv++)}function c(l,h){let u=0,f=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const A=l[p];if(A.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(A.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(A.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function zh(i){const t=new yv(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Mv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zh(i),t.set(s,[a])):r>=o.length?(a=new zh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sv extends mn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ev extends mn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Av(i,t,e){let n=new pl;const s=new Ut,r=new Ut,o=new $t,a=new Sv({depthPacking:im}),c=new Ev,l={},h=e.maxTextureSize,u={[Kn]:ze,[ze]:Kn,[ln]:ln},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Tv,fragmentShader:bv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef;let p=this.type;this.render=function(C,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),W=i.state;W.setBlending(mi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=p!==kn&&this.type===kn,$=p===kn&&this.type!==kn;for(let Z=0,q=C.length;Z<q;Z++){const Q=C[Z],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||H===!0||$===!0){const yt=this.type!==kn?{minFilter:Ne,magFilter:Ne}:{};G.map!==null&&G.map.dispose(),G.map=new zi(s.x,s.y,yt),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ht=G.getViewportCount();for(let yt=0;yt<ht;yt++){const Bt=G.getViewport(yt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),W.viewport(o),G.updateMatrices(Q,yt),n=G.getFrustum(),S(w,U,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&T(G,U),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,R)};function T(C,w){const U=t.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,U,f,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,U,d,g,null)}function A(C,w,U,E){let M=null;const R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=U.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=M.uuid,H=w.uuid;let $=l[W];$===void 0&&($={},l[W]=$);let Z=$[H];Z===void 0&&(Z=M.clone(),$[H]=Z,w.addEventListener("dispose",O)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,E===kn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=U}return M}function S(C,w,U,E,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const H=t.update(C),$=C.material;if(Array.isArray($)){const Z=H.groups;for(let q=0,Q=Z.length;q<Q;q++){const G=Z[q],st=$[G.materialIndex];if(st&&st.visible){const ht=A(C,st,E,M);C.onBeforeShadow(i,C,w,U,H,ht,G),i.renderBufferDirect(U,null,H,ht,C,G),C.onAfterShadow(i,C,w,U,H,ht,G)}}}else if($.visible){const Z=A(C,$,E,M);C.onBeforeShadow(i,C,w,U,H,Z,null),i.renderBufferDirect(U,null,H,Z,C,null),C.onAfterShadow(i,C,w,U,H,Z,null)}}const W=C.children;for(let H=0,$=W.length;H<$;H++)S(W[H],w,U,E,M)}function O(C){C.target.removeEventListener("dispose",O);for(const U in l){const E=l[U],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const wv={[rc]:oc,[ac]:hc,[cc]:uc,[ys]:lc,[oc]:rc,[hc]:ac,[uc]:cc,[lc]:ys};function Rv(i,t){function e(){let L=!1;const it=new $t;let z=null;const K=new $t(0,0,0,0);return{setMask:function(lt){z!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),z=lt)},setLocked:function(lt){L=lt},setClear:function(lt,at,It,de,we){we===!0&&(lt*=de,at*=de,It*=de),it.set(lt,at,It,de),K.equals(it)===!1&&(i.clearColor(lt,at,It,de),K.copy(it))},reset:function(){L=!1,z=null,K.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,z=null,K=null,lt=null;return{setReversed:function(at){if(it!==at){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const de=lt;lt=null,this.setClear(de)}it=at},getReversed:function(){return it},setTest:function(at){at?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){z!==at&&!L&&(i.depthMask(at),z=at)},setFunc:function(at){if(it&&(at=wv[at]),K!==at){switch(at){case rc:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case lc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=at}},setLocked:function(at){L=at},setClear:function(at){lt!==at&&(it&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){L=!1,z=null,K=null,lt=null,it=!1}}}function s(){let L=!1,it=null,z=null,K=null,lt=null,at=null,It=null,de=null,we=null;return{setTest:function(Qt){L||(Qt?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!L&&(i.stencilMask(Qt),it=Qt)},setFunc:function(Qt,nn,In){(z!==Qt||K!==nn||lt!==In)&&(i.stencilFunc(Qt,nn,In),z=Qt,K=nn,lt=In)},setOp:function(Qt,nn,In){(at!==Qt||It!==nn||de!==In)&&(i.stencilOp(Qt,nn,In),at=Qt,It=nn,de=In)},setLocked:function(Qt){L=Qt},setClear:function(Qt){we!==Qt&&(i.clearStencil(Qt),we=Qt)},reset:function(){L=!1,it=null,z=null,K=null,lt=null,at=null,It=null,de=null,we=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,A=null,S=null,O=null,C=null,w=new At(0,0,0),U=0,E=!1,M=null,R=null,W=null,H=null,$=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=Q>=2);let st=null,ht={};const yt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ne=new $t().fromArray(yt),X=new $t().fromArray(Bt);function et(L,it,z,K){const lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(L,at),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<z;It++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}const gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(ys),Gt(!1),Vt(Gl),rt(i.CULL_FACE),N(mi);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function bt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ct(L,it){return u[L]!==it?(i.bindFramebuffer(L,it),u[L]=it,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function kt(L,it){let z=d,K=!1;if(L){z=f.get(it),z===void 0&&(z=[],f.set(it,z));const lt=L.textures;if(z.length!==lt.length||z[0]!==i.COLOR_ATTACHMENT0){for(let at=0,It=lt.length;at<It;at++)z[at]=i.COLOR_ATTACHMENT0+at;z.length=lt.length,K=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,K=!0);K&&i.drawBuffers(z)}function fe(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Xt={[Ni]:i.FUNC_ADD,[wp]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};Xt[Cp]=i.MIN,Xt[Lp]=i.MAX;const pe={[Ip]:i.ZERO,[Pp]:i.ONE,[Dp]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[kp]:i.SRC_ALPHA_SATURATE,[Fp]:i.DST_COLOR,[Up]:i.DST_ALPHA,[Np]:i.ONE_MINUS_SRC_COLOR,[sc]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[Op]:i.ONE_MINUS_DST_ALPHA,[Hp]:i.CONSTANT_COLOR,[zp]:i.ONE_MINUS_CONSTANT_COLOR,[Gp]:i.CONSTANT_ALPHA,[Vp]:i.ONE_MINUS_CONSTANT_ALPHA};function N(L,it,z,K,lt,at,It,de,we,Qt){if(L===mi){g===!0&&(bt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),L!==Ap){if(L!==m||Qt!==E){if((p!==Ni||S!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,S=Ni),Qt)switch(L){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,A=null,O=null,C=null,w.set(0,0,0),U=0,m=L,E=Qt}return}lt=lt||it,at=at||z,It=It||K,(it!==p||lt!==S)&&(i.blendEquationSeparate(Xt[it],Xt[lt]),p=it,S=lt),(z!==T||K!==A||at!==O||It!==C)&&(i.blendFuncSeparate(pe[z],pe[K],pe[at],pe[It]),T=z,A=K,O=at,C=It),(de.equals(w)===!1||we!==U)&&(i.blendColor(de.r,de.g,de.b,we),w.copy(de),U=we),m=L,E=!1}function Ke(L,it){L.side===ln?bt(i.CULL_FACE):rt(i.CULL_FACE);let z=L.side===ze;it&&(z=!z),Gt(z),L.blending===ms&&L.transparent===!1?N(mi):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Vt(L){L!==Ep?(rt(i.CULL_FACE),L!==R&&(L===Gl?i.cullFace(i.BACK):L===Tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),R=L}function St(L){L!==W&&(q&&i.lineWidth(L),W=L)}function ce(L,it,z){L?(rt(i.POLYGON_OFFSET_FILL),(H!==it||$!==z)&&(i.polygonOffset(it,z),H=it,$=z)):bt(i.POLYGON_OFFSET_FILL)}function Mt(L){L?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function b(L){L===void 0&&(L=i.TEXTURE0+Z-1),st!==L&&(i.activeTexture(L),st=L)}function x(L,it,z){z===void 0&&(st===null?z=i.TEXTURE0+Z-1:z=st);let K=ht[z];K===void 0&&(K={type:void 0,texture:void 0},ht[z]=K),(K.type!==L||K.texture!==it)&&(st!==z&&(i.activeTexture(z),st=z),i.bindTexture(L,it||gt[L]),K.type=L,K.texture=it)}function F(){const L=ht[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){ne.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function dt(L){X.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Wt(L,it){let z=l.get(it);z===void 0&&(z=new WeakMap,l.set(it,z));let K=z.get(L);K===void 0&&(K=i.getUniformBlockIndex(it,L.name),z.set(L,K))}function Ot(L,it){const K=l.get(it).get(L);c.get(it)!==K&&(i.uniformBlockBinding(it,K,L.__bindingPointIndex),c.set(it,K))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,A=null,S=null,O=null,C=null,w=new At(0,0,0),U=0,E=!1,M=null,R=null,W=null,H=null,$=null,ne.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:bt,bindFramebuffer:Ct,drawBuffers:kt,useProgram:fe,setBlending:N,setMaterial:Ke,setFlipSided:Gt,setCullFace:Vt,setLineWidth:St,setPolygonOffset:ce,setScissorTest:Mt,activeTexture:b,bindTexture:x,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:ft,texImage3D:Et,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:qt,texStorage3D:j,texSubImage2D:V,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:wt,viewport:dt,reset:oe}}function Gh(i,t,e,n){const s=Cv(n);switch(e){case Lf:return i*t;case Pf:return i*t;case Df:return i*t*2;case ll:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case Nf:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case If:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:case gc:return Math.max(i,16)*Math.max(t,8)/4;case pc:case _c:return Math.max(i,8)*Math.max(t,8)/2;case xc:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xo:case Uc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uf:case Fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cv(i){switch(i){case $n:case wf:return{byteLength:1,components:1};case fr:case Rf:case xr:return{byteLength:2,components:1};case al:case cl:return{byteLength:2,components:4};case Hi:case ol:case dn:return{byteLength:4,components:1};case Cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return d?new OffscreenCanvas(b,x):mr("canvas")}function g(b,x,F){let Y=1;const J=Mt(b);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(Y*J.width),xt=Math.floor(Y*J.height);u===void 0&&(u=_(V,xt));const ot=x?_(V,xt):u;return ot.width=V,ot.height=xt,ot.getContext("2d").drawImage(b,0,0,V,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+xt+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(b,x,F,Y,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=x;if(x===i.RED&&(F===i.FLOAT&&(V=i.R32F),F===i.HALF_FLOAT&&(V=i.R16F),F===i.UNSIGNED_BYTE&&(V=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.R8UI),F===i.UNSIGNED_SHORT&&(V=i.R16UI),F===i.UNSIGNED_INT&&(V=i.R32UI),F===i.BYTE&&(V=i.R8I),F===i.SHORT&&(V=i.R16I),F===i.INT&&(V=i.R32I)),x===i.RG&&(F===i.FLOAT&&(V=i.RG32F),F===i.HALF_FLOAT&&(V=i.RG16F),F===i.UNSIGNED_BYTE&&(V=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RG8UI),F===i.UNSIGNED_SHORT&&(V=i.RG16UI),F===i.UNSIGNED_INT&&(V=i.RG32UI),F===i.BYTE&&(V=i.RG8I),F===i.SHORT&&(V=i.RG16I),F===i.INT&&(V=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGB8UI),F===i.UNSIGNED_SHORT&&(V=i.RGB16UI),F===i.UNSIGNED_INT&&(V=i.RGB32UI),F===i.BYTE&&(V=i.RGB8I),F===i.SHORT&&(V=i.RGB16I),F===i.INT&&(V=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),F===i.UNSIGNED_INT&&(V=i.RGBA32UI),F===i.BYTE&&(V=i.RGBA8I),F===i.SHORT&&(V=i.RGBA16I),F===i.INT&&(V=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),x===i.RGBA){const xt=J?ko:zt.getTransfer(Y);F===i.FLOAT&&(V=i.RGBA32F),F===i.HALF_FLOAT&&(V=i.RGBA16F),F===i.UNSIGNED_BYTE&&(V=xt===ee?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(b,x){let F;return b?x===null||x===Hi||x===Ts?F=i.DEPTH24_STENCIL8:x===dn?F=i.DEPTH32F_STENCIL8:x===fr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Hi||x===Ts?F=i.DEPTH_COMPONENT24:x===dn?F=i.DEPTH_COMPONENT32F:x===fr&&(F=i.DEPTH_COMPONENT16),F}function O(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ne&&b.minFilter!==Ye?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){const x=b.target;x.removeEventListener("dispose",C),U(x),x.isVideoTexture&&h.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),M(x)}function U(b){const x=n.get(b);if(x.__webglInit===void 0)return;const F=b.source,Y=f.get(F);if(Y){const J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(b),Object.keys(Y).length===0&&f.delete(F)}n.remove(b)}function E(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const F=b.source,Y=f.get(F);delete Y[x.__cacheKey],o.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let Y=0,J=F.length;Y<J;Y++){const V=n.get(F[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(b)}let R=0;function W(){R=0}function H(){const b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function $(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function Z(b,x){const F=n.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,b,x);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function q(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){X(F,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Q(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){X(F,b,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function G(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){et(F,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const st={[Es]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},ht={[Ne]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},yt={[rm]:i.NEVER,[um]:i.ALWAYS,[om]:i.LESS,[Bf]:i.LEQUAL,[am]:i.EQUAL,[hm]:i.GEQUAL,[cm]:i.GREATER,[lm]:i.NOTEQUAL};function Bt(b,x){if(x.type===dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ye||x.magFilter===fo||x.magFilter===ir||x.magFilter===Gn||x.minFilter===Ye||x.minFilter===fo||x.minFilter===ir||x.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,st[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ne||x.minFilter!==ir&&x.minFilter!==Gn||x.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const Y=x.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const V=$(x);if(V!==b.__cacheKey){J[V]===void 0&&(J[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[V].usedTimes++;const xt=J[b.__cacheKey];xt!==void 0&&(J[b.__cacheKey].usedTimes--,xt.usedTimes===0&&E(x)),b.__cacheKey=V,b.__webglTexture=J[V].texture}return F}function X(b,x,F){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const J=ne(b,x),V=x.source;e.bindTexture(Y,b.__webglTexture,i.TEXTURE0+F);const xt=n.get(V);if(V.version!==xt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const ot=zt.getPrimaries(zt.workingColorSpace),ut=x.colorSpace===fi?null:zt.getPrimaries(x.colorSpace),qt=x.colorSpace===fi||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let j=g(x.image,!1,s.maxTextureSize);j=ce(x,j);const ft=r.convert(x.format,x.colorSpace),Et=r.convert(x.type);let wt=A(x.internalFormat,ft,Et,x.colorSpace,x.isVideoTexture);Bt(Y,x);let dt;const Wt=x.mipmaps,Ot=x.isVideoTexture!==!0,oe=xt.__version===void 0||J===!0,L=V.dataReady,it=O(x,j);if(x.isDepthTexture)wt=S(x.format===bs,x.type),oe&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,wt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,wt,j.width,j.height,0,ft,Et,null));else if(x.isDataTexture)if(Wt.length>0){Ot&&oe&&e.texStorage2D(i.TEXTURE_2D,it,wt,Wt[0].width,Wt[0].height);for(let z=0,K=Wt.length;z<K;z++)dt=Wt[z],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(i.TEXTURE_2D,z,wt,dt.width,dt.height,0,ft,Et,dt.data);x.generateMipmaps=!1}else Ot?(oe&&e.texStorage2D(i.TEXTURE_2D,it,wt,j.width,j.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ft,Et,j.data)):e.texImage2D(i.TEXTURE_2D,0,wt,j.width,j.height,0,ft,Et,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,Wt[0].width,Wt[0].height,j.depth);for(let z=0,K=Wt.length;z<K;z++)if(dt=Wt[z],x.format!==je)if(ft!==null)if(Ot){if(L)if(x.layerUpdates.size>0){const lt=Gh(dt.width,dt.height,x.format,x.type);for(const at of x.layerUpdates){const It=dt.data.subarray(at*lt/dt.data.BYTES_PER_ELEMENT,(at+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,at,dt.width,dt.height,1,ft,It)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,j.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,wt,dt.width,dt.height,j.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,j.depth,ft,Et,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,wt,dt.width,dt.height,j.depth,0,ft,Et,dt.data)}else{Ot&&oe&&e.texStorage2D(i.TEXTURE_2D,it,wt,Wt[0].width,Wt[0].height);for(let z=0,K=Wt.length;z<K;z++)dt=Wt[z],x.format!==je?ft!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(i.TEXTURE_2D,z,wt,dt.width,dt.height,0,ft,Et,dt.data)}else if(x.isDataArrayTexture)if(Ot){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,j.width,j.height,j.depth),L)if(x.layerUpdates.size>0){const z=Gh(j.width,j.height,x.format,x.type);for(const K of x.layerUpdates){const lt=j.data.subarray(K*z/j.data.BYTES_PER_ELEMENT,(K+1)*z/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,j.width,j.height,1,ft,Et,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,Et,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,j.width,j.height,j.depth,0,ft,Et,j.data);else if(x.isData3DTexture)Ot?(oe&&e.texStorage3D(i.TEXTURE_3D,it,wt,j.width,j.height,j.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,Et,j.data)):e.texImage3D(i.TEXTURE_3D,0,wt,j.width,j.height,j.depth,0,ft,Et,j.data);else if(x.isFramebufferTexture){if(oe)if(Ot)e.texStorage2D(i.TEXTURE_2D,it,wt,j.width,j.height);else{let z=j.width,K=j.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,wt,z,K,0,ft,Et,null),z>>=1,K>>=1}}else if(Wt.length>0){if(Ot&&oe){const z=Mt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,it,wt,z.width,z.height)}for(let z=0,K=Wt.length;z<K;z++)dt=Wt[z],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft,Et,dt):e.texImage2D(i.TEXTURE_2D,z,wt,ft,Et,dt);x.generateMipmaps=!1}else if(Ot){if(oe){const z=Mt(j);e.texStorage2D(i.TEXTURE_2D,it,wt,z.width,z.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Et,j)}else e.texImage2D(i.TEXTURE_2D,0,wt,ft,Et,j);m(x)&&p(Y),xt.__version=V.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function et(b,x,F){if(x.image.length!==6)return;const Y=ne(b,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const V=n.get(J);if(J.version!==V.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const xt=zt.getPrimaries(zt.workingColorSpace),ot=x.colorSpace===fi?null:zt.getPrimaries(x.colorSpace),ut=x.colorSpace===fi||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const qt=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!qt&&!j?ft[K]=g(x.image[K],!0,s.maxCubemapSize):ft[K]=j?x.image[K].image:x.image[K],ft[K]=ce(x,ft[K]);const Et=ft[0],wt=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),Wt=A(x.internalFormat,wt,dt,x.colorSpace),Ot=x.isVideoTexture!==!0,oe=V.__version===void 0||Y===!0,L=J.dataReady;let it=O(x,Et);Bt(i.TEXTURE_CUBE_MAP,x);let z;if(qt){Ot&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,Et.width,Et.height);for(let K=0;K<6;K++){z=ft[K].mipmaps;for(let lt=0;lt<z.length;lt++){const at=z[lt];x.format!==je?wt!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,at.width,at.height,wt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Wt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,at.width,at.height,wt,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Wt,at.width,at.height,0,wt,dt,at.data)}}}else{if(z=x.mipmaps,Ot&&oe){z.length>0&&it++;const K=Mt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(j){Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,wt,dt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,ft[K].width,ft[K].height,0,wt,dt,ft[K].data);for(let lt=0;lt<z.length;lt++){const It=z[lt].image[K].image;Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,It.width,It.height,wt,dt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Wt,It.width,It.height,0,wt,dt,It.data)}}else{Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt,dt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,wt,dt,ft[K]);for(let lt=0;lt<z.length;lt++){const at=z[lt];Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,wt,dt,at.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Wt,wt,dt,at.image[K])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),V.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function gt(b,x,F,Y,J,V){const xt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ut=A(F.internalFormat,xt,ot,F.colorSpace),qt=n.get(x),j=n.get(F);if(j.__renderTarget=x,!qt.__hasExternalTextures){const ft=Math.max(1,x.width>>V),Et=Math.max(1,x.height>>V);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,V,ut,ft,Et,x.depth,0,xt,ot,null):e.texImage2D(J,V,ut,ft,Et,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,j.__webglTexture,0,Gt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,j.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(b,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,V=S(x.stencilBuffer,J),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Gt(x);Vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,V,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,b)}else{const Y=x.textures;for(let J=0;J<Y.length;J++){const V=Y[J],xt=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),ut=A(V.internalFormat,xt,ot,V.colorSpace),qt=Gt(x);F&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ut,x.width,x.height):Vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const J=Y.__webglTexture,V=Gt(x);if(x.depthTexture.format===_s)Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===bs)Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const x=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");bt(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[Y],b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,V)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,x,F){const Y=n.get(b);x!==void 0&&gt(Y.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ct(b)}function fe(b){const x=b.texture,F=n.get(b),Y=n.get(x);b.addEventListener("dispose",w);const J=b.textures,V=b.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),V){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ot=0,ut=J.length;ot<ut;ot++){const qt=n.get(J[ot]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Vt(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ut=J[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const qt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),ft=A(ut.internalFormat,qt,j,ut.colorSpace,b.isXRRenderTarget===!0),Et=Gt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)gt(F.__webglFramebuffer[ot][ut],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else gt(F.__webglFramebuffer[ot],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=J.length;ot<ut;ot++){const qt=J[ot],j=n.get(qt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Bt(i.TEXTURE_2D,qt),gt(F.__webglFramebuffer,b,qt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Bt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)gt(F.__webglFramebuffer[ut],b,x,i.COLOR_ATTACHMENT0,ot,ut);else gt(F.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&p(ot),e.unbindTexture()}b.depthBuffer&&Ct(b)}function Xt(b){const x=b.textures;for(let F=0,Y=x.length;F<Y;F++){const J=x[F];if(m(J)){const V=T(b),xt=n.get(J).__webglTexture;e.bindTexture(V,xt),p(V),e.unbindTexture()}}}const pe=[],N=[];function Ke(b){if(b.samples>0){if(Vt(b)===!1){const x=b.textures,F=b.width,Y=b.height;let J=i.COLOR_BUFFER_BIT;const V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(b),ot=x.length>1;if(ot)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const qt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,i.NEAREST),c===!0&&(pe.length=0,N.length=0,pe.push(i.COLOR_ATTACHMENT0+ut),b.depthBuffer&&b.resolveDepthBuffer===!1&&(pe.push(V),N.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const qt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Gt(b){return Math.min(s.maxSamples,b.samples)}function Vt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ce(b,x){const F=b.colorSpace,Y=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Oe&&F!==fi&&(zt.getTransfer(F)===ee?(Y!==je||J!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Vt}function Iv(i,t){function e(n,s=fi){let r;const o=zt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wf)return i.BYTE;if(n===Rf)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===Lf)return i.ALPHA;if(n===If)return i.RGB;if(n===je)return i.RGBA;if(n===Pf)return i.LUMINANCE;if(n===Df)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Nf)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===po||n===mo||n===_o||n===go)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===_c||n===gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===vc||n===yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===vc)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Sc||n===Ec||n===Tc||n===bc||n===Ac||n===wc||n===Rc||n===Cc||n===Lc||n===Ic||n===Pc||n===Dc||n===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===Uc||n===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uf||n===Fc||n===Bc||n===kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Pv extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bi extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dv={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Se,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:Nv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends Is{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const g=new Ov,m=e.getContextAttributes();let p=null,T=null;const A=[],S=[],O=new Ut;let C=null;const w=new Be;w.viewport=new $t;const U=new Be;U.viewport=new $t;const E=[w,U],M=new Pv;let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=A[X];return et===void 0&&(et=new ba,A[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=A[X];return et===void 0&&(et=new ba,A[X]=et),et.getGripSpace()},this.getHand=function(X){let et=A[X];return et===void 0&&(et=new ba,A[X]=et),et.getHandSpace()};function H(X){const et=S.indexOf(X.inputSource);if(et===-1)return;const gt=A[et];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<A.length;X++){const et=S[X];et!==null&&(S[X]=null,A[X].disconnect(et))}R=null,W=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,T=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new zi(d.framebufferWidth,d.framebufferHeight,{format:je,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?bs:_s,gt=m.stencil?Ts:Hi);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new zi(f.textureWidth,f.textureHeight,{format:je,type:$n,depthTexture:new Zf(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(X){for(let et=0;et<X.removed.length;et++){const gt=X.removed[et],rt=S.indexOf(gt);rt>=0&&(S[rt]=null,A[rt].disconnect(gt))}for(let et=0;et<X.added.length;et++){const gt=X.added[et];let rt=S.indexOf(gt);if(rt===-1){for(let Ct=0;Ct<A.length;Ct++)if(Ct>=S.length){S.push(gt),rt=Ct;break}else if(S[Ct]===null){S[Ct]=gt,rt=Ct;break}if(rt===-1)break}const bt=A[rt];bt&&bt.connect(gt)}}const q=new I,Q=new I;function G(X,et,gt){q.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);const rt=q.distanceTo(Q),bt=et.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,kt=bt[14]/(bt[10]-1),fe=bt[14]/(bt[10]+1),Xt=(bt[9]+1)/bt[5],pe=(bt[9]-1)/bt[5],N=(bt[8]-1)/bt[0],Ke=(Ct[8]+1)/Ct[0],Gt=kt*N,Vt=kt*Ke,St=rt/(-N+Ke),ce=St*-N;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Mt=kt+St,b=fe+St,x=Gt-ce,F=Vt+(rt-ce),Y=Xt*fe/b*Mt,J=pe*fe/b*Mt;X.projectionMatrix.makePerspective(x,F,Y,J,Mt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,gt=X.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),M.near=U.near=w.near=et,M.far=U.far=w.far=gt,(R!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,W=M.far),w.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,M.layers.mask=w.layers.mask|U.layers.mask;const rt=X.parent,bt=M.cameras;st(M,rt);for(let Ct=0;Ct<bt.length;Ct++)st(bt[Ct],rt);bt.length===2?G(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),ht(X,M,rt)};function ht(X,et,gt){gt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=As*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let yt=null;function Bt(X,et){if(h=et.getViewerPose(l||o),_=et,h!==null){const gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Ct=0;Ct<gt.length;Ct++){const kt=gt[Ct];let fe=null;if(d!==null)fe=d.getViewport(kt);else{const pe=u.getViewSubImage(f,kt);fe=pe.viewport,Ct===0&&(t.setRenderTargetTextures(T,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(T))}let Xt=E[Ct];Xt===void 0&&(Xt=new Be,Xt.layers.enable(Ct),Xt.viewport=new $t,E[Ct]=Xt),Xt.matrix.fromArray(kt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(kt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(fe.x,fe.y,fe.width,fe.height),Ct===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Xt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Ct=u.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,s.renderState)}}for(let gt=0;gt<A.length;gt++){const rt=S[gt],bt=A[gt];rt!==null&&bt!==void 0&&bt.update(rt,et,l||o)}yt&&yt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const ne=new $f;ne.setAnimationLoop(Bt),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}}const Li=new bn,Bv=new Lt;function kv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),A=T.envMap,S=T.envMapRotation;A&&(m.envMap.value=A,Li.copy(S),Li.x*=-1,Li.y*=-1,Li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(Li)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,A){const S=A.program;n.uniformBlockBinding(T,S)}function l(T,A){let S=s[T.id];S===void 0&&(_(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",m));const O=A.program;n.updateUBOMapping(T,O);const C=t.render.frame;r[T.id]!==C&&(f(T),r[T.id]=C)}function h(T){const A=u();T.__bindingPointIndex=A;const S=i.createBuffer(),O=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const A=s[T.id],S=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,w=S.length;C<w;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,M=U.length;E<M;E++){const R=U[E];if(d(R,C,E,O)===!0){const W=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let Z=0;Z<H.length;Z++){const q=H[Z],Q=g(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,W+$,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,A,S,O){const C=T.value,w=A+"_"+S;if(O[w]===void 0)return typeof C=="number"||typeof C=="boolean"?O[w]=C:O[w]=C.clone(),!0;{const U=O[w];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return O[w]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(T){const A=T.uniforms;let S=0;const O=16;for(let w=0,U=A.length;w<U;w++){const E=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,R=E.length;M<R;M++){const W=E[M],H=Array.isArray(W.value)?W.value:[W.value];for(let $=0,Z=H.length;$<Z;$++){const q=H[$],Q=g(q),G=S%O,st=G%Q.boundary,ht=G+st;S+=st,ht!==0&&O-ht<Q.storage&&(S+=O-ht),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Q.storage}}}const C=S%O;return C>0&&(S+=O-C),T.__size=S,T.__cache={},this}function g(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const S=o.indexOf(A.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class zv{constructor(t={}){const{canvas:e=Cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=_i,this.toneMappingExposure=1;const S=this;let O=!1,C=0,w=0,U=null,E=-1,M=null;const R=new $t,W=new $t;let H=null;const $=new At(0);let Z=0,q=e.width,Q=e.height,G=1,st=null,ht=null;const yt=new $t(0,0,q,Q),Bt=new $t(0,0,q,Q);let ne=!1;const X=new pl;let et=!1,gt=!1;const rt=new Lt,bt=new Lt,Ct=new I,kt=new $t,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function pe(){return U===null?G:1}let N=n;function Ke(y,P){return e.getContext(y,P)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),N===null){const P="webgl2";if(N=Ke(P,y),N===null)throw Ke(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Gt,Vt,St,ce,Mt,b,x,F,Y,J,V,xt,ot,ut,qt,j,ft,Et,wt,dt,Wt,Ot,oe,L;function it(){Gt=new q0(N),Gt.init(),Ot=new Iv(N,Gt),Vt=new H0(N,Gt,t,Ot),St=new Rv(N,Gt),Vt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),ce=new $0(N),Mt=new dv,b=new Lv(N,Gt,St,Mt,Vt,Ot,ce),x=new G0(S),F=new X0(S),Y=new n_(N),oe=new B0(N,Y),J=new Y0(N,Y,ce,oe),V=new J0(N,J,Y,ce),wt=new Z0(N,Vt,b),j=new z0(Mt),xt=new fv(S,x,F,Gt,Vt,oe,j),ot=new kv(S,Mt),ut=new mv,qt=new Mv(Gt),Et=new F0(S,x,F,St,V,d,c),ft=new Av(S,V,Vt),L=new Hv(N,ce,Vt,St),dt=new k0(N,Gt,ce),Wt=new K0(N,Gt,ce),ce.programs=xt.programs,S.capabilities=Vt,S.extensions=Gt,S.properties=Mt,S.renderLists=ut,S.shadowMap=ft,S.state=St,S.info=ce}it();const z=new Fv(S,N);this.xr=z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(q,Q,!1))},this.getSize=function(y){return y.set(q,Q)},this.setSize=function(y,P,B=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Q=P,e.width=Math.floor(y*G),e.height=Math.floor(P*G),B===!0&&(e.style.width=y+"px",e.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(q*G,Q*G).floor()},this.setDrawingBufferSize=function(y,P,B){q=y,Q=P,G=B,e.width=Math.floor(y*B),e.height=Math.floor(P*B),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,P,B,k){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,P,B,k),St.viewport(R.copy(yt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,P,B,k){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,P,B,k),St.scissor(W.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(y){St.setScissorTest(ne=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(y=!0,P=!0,B=!0){let k=0;if(y){let D=!1;if(U!==null){const tt=U.texture.format;D=tt===fl||tt===ul||tt===hl}if(D){const tt=U.texture.type,ct=tt===$n||tt===Hi||tt===fr||tt===Ts||tt===al||tt===cl,pt=Et.getClearColor(),mt=Et.getClearAlpha(),Rt=pt.r,Pt=pt.g,_t=pt.b;ct?(_[0]=Rt,_[1]=Pt,_[2]=_t,_[3]=mt,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Rt,g[1]=Pt,g[2]=_t,g[3]=mt,N.clearBufferiv(N.COLOR,0,g))}else k|=N.COLOR_BUFFER_BIT}P&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),qt.dispose(),Mt.dispose(),x.dispose(),F.dispose(),V.dispose(),oe.dispose(),L.dispose(),xt.dispose(),z.dispose(),z.removeEventListener("sessionstart",Nl),z.removeEventListener("sessionend",Ul),Ti.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const y=ce.autoReset,P=ft.enabled,B=ft.autoUpdate,k=ft.needsUpdate,D=ft.type;it(),ce.autoReset=y,ft.enabled=P,ft.autoUpdate=B,ft.needsUpdate=k,ft.type=D}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function It(y){const P=y.target;P.removeEventListener("dispose",It),de(P)}function de(y){we(y),Mt.remove(y)}function we(y){const P=Mt.get(y).programs;P!==void 0&&(P.forEach(function(B){xt.releaseProgram(B)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,B,k,D,tt){P===null&&(P=fe);const ct=D.isMesh&&D.matrixWorld.determinant()<0,pt=xp(y,P,B,k,D);St.setMaterial(k,ct);let mt=B.index,Rt=1;if(k.wireframe===!0){if(mt=J.getWireframeAttribute(B),mt===void 0)return;Rt=2}const Pt=B.drawRange,_t=B.attributes.position;let Kt=Pt.start*Rt,ae=(Pt.start+Pt.count)*Rt;tt!==null&&(Kt=Math.max(Kt,tt.start*Rt),ae=Math.min(ae,(tt.start+tt.count)*Rt)),mt!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,mt.count)):_t!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,_t.count));const le=ae-Kt;if(le<0||le===1/0)return;oe.setup(D,k,pt,B,mt);let Fe,Zt=dt;if(mt!==null&&(Fe=Y.get(mt),Zt=Wt,Zt.setIndex(Fe)),D.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*pe()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(D.isLine){let vt=k.linewidth;vt===void 0&&(vt=1),St.setLineWidth(vt*pe()),D.isLineSegments?Zt.setMode(N.LINES):D.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else D.isPoints?Zt.setMode(N.POINTS):D.isSprite&&Zt.setMode(N.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Zt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const vt=D._multiDrawStarts,Pn=D._multiDrawCounts,Jt=D._multiDrawCount,sn=mt?Y.get(mt).bytesPerElement:1,Xi=Mt.get(k).currentProgram.getUniforms();for(let Ve=0;Ve<Jt;Ve++)Xi.setValue(N,"_gl_DrawID",Ve),Zt.render(vt[Ve]/sn,Pn[Ve])}else if(D.isInstancedMesh)Zt.renderInstances(Kt,le,D.count);else if(B.isInstancedBufferGeometry){const vt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Pn=Math.min(B.instanceCount,vt);Zt.renderInstances(Kt,le,Pn)}else Zt.render(Kt,le)};function Qt(y,P,B){y.transparent===!0&&y.side===ln&&y.forceSinglePass===!1?(y.side=ze,y.needsUpdate=!0,Ar(y,P,B),y.side=Kn,y.needsUpdate=!0,Ar(y,P,B),y.side=ln):Ar(y,P,B)}this.compile=function(y,P,B=null){B===null&&(B=y),p=qt.get(B),p.init(P),A.push(p),B.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),y!==B&&y.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const k=new Set;return y.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const pt=tt[ct];Qt(pt,B,D),k.add(pt)}else Qt(tt,B,D),k.add(tt)}),A.pop(),p=null,k},this.compileAsync=function(y,P,B=null){const k=this.compile(y,P,B);return new Promise(D=>{function tt(){if(k.forEach(function(ct){Mt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){D(y);return}setTimeout(tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let nn=null;function In(y){nn&&nn(y)}function Nl(){Ti.stop()}function Ul(){Ti.start()}const Ti=new $f;Ti.setAnimationLoop(In),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(y){nn=y,z.setAnimationLoop(y),y===null?Ti.stop():Ti.start()},z.addEventListener("sessionstart",Nl),z.addEventListener("sessionend",Ul),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,P,U),p=qt.get(y,A.length),p.init(P),A.push(p),bt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,et=j.init(this.clippingPlanes,gt),m=ut.get(y,T.length),m.init(),T.push(m),z.enabled===!0&&z.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&Jo(tt,P,-1/0,S.sortObjects)}Jo(y,P,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ht),Xt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Xt&&Et.addToRenderList(m,y),this.info.render.frame++,et===!0&&j.beginShadows();const B=p.state.shadowsArray;ft.render(B,y,P),et===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,D=m.transmissive;if(p.setupLights(),P.isArrayCamera){const tt=P.cameras;if(D.length>0)for(let ct=0,pt=tt.length;ct<pt;ct++){const mt=tt[ct];Fl(k,D,y,mt)}Xt&&Et.render(y);for(let ct=0,pt=tt.length;ct<pt;ct++){const mt=tt[ct];Ol(m,y,mt,mt.viewport)}}else D.length>0&&Fl(k,D,y,P),Xt&&Et.render(y),Ol(m,y,P);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(S,y,P),oe.resetDefaultState(),E=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],et===!0&&j.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Jo(y,P,B,k){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||X.intersectsSprite(y)){k&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(bt);const ct=V.update(y),pt=y.material;pt.visible&&m.push(y,ct,pt,B,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||X.intersectsObject(y))){const ct=V.update(y),pt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),kt.copy(ct.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){const mt=ct.groups;for(let Rt=0,Pt=mt.length;Rt<Pt;Rt++){const _t=mt[Rt],Kt=pt[_t.materialIndex];Kt&&Kt.visible&&m.push(y,ct,Kt,B,kt.z,_t)}}else pt.visible&&m.push(y,ct,pt,B,kt.z,null)}}const tt=y.children;for(let ct=0,pt=tt.length;ct<pt;ct++)Jo(tt[ct],P,B,k)}function Ol(y,P,B,k){const D=y.opaque,tt=y.transmissive,ct=y.transparent;p.setupLightsView(B),et===!0&&j.setGlobalState(S.clippingPlanes,B),k&&St.viewport(R.copy(k)),D.length>0&&br(D,P,B),tt.length>0&&br(tt,P,B),ct.length>0&&br(ct,P,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Fl(y,P,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new zi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?xr:$n,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[k.id],ct=k.viewport||R;tt.setSize(ct.z,ct.w);const pt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor($),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),Xt&&Et.render(B);const mt=S.toneMapping;S.toneMapping=_i;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),et===!0&&j.setGlobalState(S.clippingPlanes,k),br(y,B,k),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let _t=0,Kt=P.length;_t<Kt;_t++){const ae=P[_t],le=ae.object,Fe=ae.geometry,Zt=ae.material,vt=ae.group;if(Zt.side===ln&&le.layers.test(k.layers)){const Pn=Zt.side;Zt.side=ze,Zt.needsUpdate=!0,Bl(le,B,k,Fe,Zt,vt),Zt.side=Pn,Zt.needsUpdate=!0,Pt=!0}}Pt===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}S.setRenderTarget(pt),S.setClearColor($,Z),Rt!==void 0&&(k.viewport=Rt),S.toneMapping=mt}function br(y,P,B){const k=P.isScene===!0?P.overrideMaterial:null;for(let D=0,tt=y.length;D<tt;D++){const ct=y[D],pt=ct.object,mt=ct.geometry,Rt=k===null?ct.material:k,Pt=ct.group;pt.layers.test(B.layers)&&Bl(pt,P,B,mt,Rt,Pt)}}function Bl(y,P,B,k,D,tt){y.onBeforeRender(S,P,B,k,D,tt),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),D.onBeforeRender(S,P,B,k,y,tt),D.transparent===!0&&D.side===ln&&D.forceSinglePass===!1?(D.side=ze,D.needsUpdate=!0,S.renderBufferDirect(B,P,k,D,y,tt),D.side=Kn,D.needsUpdate=!0,S.renderBufferDirect(B,P,k,D,y,tt),D.side=ln):S.renderBufferDirect(B,P,k,D,y,tt),y.onAfterRender(S,P,B,k,D,tt)}function Ar(y,P,B){P.isScene!==!0&&(P=fe);const k=Mt.get(y),D=p.state.lights,tt=p.state.shadowsArray,ct=D.state.version,pt=xt.getParameters(y,D.state,tt,P,B),mt=xt.getProgramCacheKey(pt);let Rt=k.programs;k.environment=y.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",It),Rt=new Map,k.programs=Rt);let Pt=Rt.get(mt);if(Pt!==void 0){if(k.currentProgram===Pt&&k.lightsStateVersion===ct)return Hl(y,pt),Pt}else pt.uniforms=xt.getUniforms(y),y.onBeforeCompile(pt,S),Pt=xt.acquireProgram(pt,mt),Rt.set(mt,Pt),k.uniforms=pt.uniforms;const _t=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(_t.clippingPlanes=j.uniform),Hl(y,pt),k.needsLights=yp(y),k.lightsStateVersion=ct,k.needsLights&&(_t.ambientLightColor.value=D.state.ambient,_t.lightProbe.value=D.state.probe,_t.directionalLights.value=D.state.directional,_t.directionalLightShadows.value=D.state.directionalShadow,_t.spotLights.value=D.state.spot,_t.spotLightShadows.value=D.state.spotShadow,_t.rectAreaLights.value=D.state.rectArea,_t.ltc_1.value=D.state.rectAreaLTC1,_t.ltc_2.value=D.state.rectAreaLTC2,_t.pointLights.value=D.state.point,_t.pointLightShadows.value=D.state.pointShadow,_t.hemisphereLights.value=D.state.hemi,_t.directionalShadowMap.value=D.state.directionalShadowMap,_t.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_t.spotShadowMap.value=D.state.spotShadowMap,_t.spotLightMatrix.value=D.state.spotLightMatrix,_t.spotLightMap.value=D.state.spotLightMap,_t.pointShadowMap.value=D.state.pointShadowMap,_t.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Pt,k.uniformsList=null,Pt}function kl(y){if(y.uniformsList===null){const P=y.currentProgram.getUniforms();y.uniformsList=vo.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Hl(y,P){const B=Mt.get(y);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function xp(y,P,B,k,D){P.isScene!==!0&&(P=fe),b.resetTextureUnits();const tt=P.fog,ct=k.isMeshStandardMaterial?P.environment:null,pt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Oe,mt=(k.isMeshStandardMaterial?F:x).get(k.envMap||ct),Rt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color;let le=_i;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(le=S.toneMapping);const Fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=Fe!==void 0?Fe.length:0,vt=Mt.get(k),Pn=p.state.lights;if(et===!0&&(gt===!0||y!==M)){const $e=y===M&&k.id===E;j.setState(k,y,$e)}let Jt=!1;k.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Pn.state.version||vt.outputColorSpace!==pt||D.isBatchedMesh&&vt.batching===!1||!D.isBatchedMesh&&vt.batching===!0||D.isBatchedMesh&&vt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&vt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&vt.instancing===!1||!D.isInstancedMesh&&vt.instancing===!0||D.isSkinnedMesh&&vt.skinning===!1||!D.isSkinnedMesh&&vt.skinning===!0||D.isInstancedMesh&&vt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&vt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&vt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&vt.instancingMorph===!1&&D.morphTexture!==null||vt.envMap!==mt||k.fog===!0&&vt.fog!==tt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==j.numPlanes||vt.numIntersection!==j.numIntersection)||vt.vertexAlphas!==Rt||vt.vertexTangents!==Pt||vt.morphTargets!==_t||vt.morphNormals!==Kt||vt.morphColors!==ae||vt.toneMapping!==le||vt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,vt.__version=k.version);let sn=vt.currentProgram;Jt===!0&&(sn=Ar(k,P,D));let Xi=!1,Ve=!1,ks=!1;const he=sn.getUniforms(),gn=vt.uniforms;if(St.useProgram(sn.program)&&(Xi=!0,Ve=!0,ks=!0),k.id!==E&&(E=k.id,Ve=!0),Xi||M!==y){St.buffers.depth.getReversed()?(rt.copy(y.projectionMatrix),Im(rt),Pm(rt),he.setValue(N,"projectionMatrix",rt)):he.setValue(N,"projectionMatrix",y.projectionMatrix),he.setValue(N,"viewMatrix",y.matrixWorldInverse);const jn=he.map.cameraPosition;jn!==void 0&&jn.setValue(N,Ct.setFromMatrixPosition(y.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ve=!0,ks=!0)}if(D.isSkinnedMesh){he.setOptional(N,D,"bindMatrix"),he.setOptional(N,D,"bindMatrixInverse");const $e=D.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),he.setValue(N,"boneTexture",$e.boneTexture,b))}D.isBatchedMesh&&(he.setOptional(N,D,"batchingTexture"),he.setValue(N,"batchingTexture",D._matricesTexture,b),he.setOptional(N,D,"batchingIdTexture"),he.setValue(N,"batchingIdTexture",D._indirectTexture,b),he.setOptional(N,D,"batchingColorTexture"),D._colorsTexture!==null&&he.setValue(N,"batchingColorTexture",D._colorsTexture,b));const Hs=B.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&wt.update(D,B,sn),(Ve||vt.receiveShadow!==D.receiveShadow)&&(vt.receiveShadow=D.receiveShadow,he.setValue(N,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(gn.envMap.value=mt,gn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(gn.envMapIntensity.value=P.environmentIntensity),Ve&&(he.setValue(N,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&vp(gn,ks),tt&&k.fog===!0&&ot.refreshFogUniforms(gn,tt),ot.refreshMaterialUniforms(gn,k,G,Q,p.state.transmissionRenderTarget[y.id]),vo.upload(N,kl(vt),gn,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vo.upload(N,kl(vt),gn,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(N,"center",D.center),he.setValue(N,"modelViewMatrix",D.modelViewMatrix),he.setValue(N,"normalMatrix",D.normalMatrix),he.setValue(N,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $e=k.uniformsGroups;for(let jn=0,ti=$e.length;jn<ti;jn++){const zl=$e[jn];L.update(zl,sn),L.bind(zl,sn)}}return sn}function vp(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function yp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,P,B){Mt.get(y.texture).__webglTexture=P,Mt.get(y.depthTexture).__webglTexture=B;const k=Mt.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,P){const B=Mt.get(y);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,B=0){U=y,C=P,w=B;let k=!0,D=null,tt=!1,ct=!1;if(y){const mt=Mt.get(y);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(mt.__hasExternalTextures)b.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const _t=y.depthTexture;if(mt.__boundDepthTexture!==_t){if(_t!==null&&Mt.has(_t)&&(y.width!==_t.image.width||y.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);const Pt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[P])?D=Pt[P][B]:D=Pt[P],tt=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?D=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?D=Pt[B]:D=Pt,R.copy(y.viewport),W.copy(y.scissor),H=y.scissorTest}else R.copy(yt).multiplyScalar(G).floor(),W.copy(Bt).multiplyScalar(G).floor(),H=ne;if(St.bindFramebuffer(N.FRAMEBUFFER,D)&&k&&St.drawBuffers(y,D),St.viewport(R),St.scissor(W),St.setScissorTest(H),tt){const mt=Mt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,B)}else if(ct){const mt=Mt.get(y.texture),Rt=P||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,Rt)}E=-1},this.readRenderTargetPixels=function(y,P,B,k,D,tt,ct){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){St.bindFramebuffer(N.FRAMEBUFFER,pt);try{const mt=y.texture,Rt=mt.format,Pt=mt.type;if(!Vt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-k&&B>=0&&B<=y.height-D&&N.readPixels(P,B,k,D,Ot.convert(Rt),Ot.convert(Pt),tt)}finally{const mt=U!==null?Mt.get(U).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(y,P,B,k,D,tt,ct){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){const mt=y.texture,Rt=mt.format,Pt=mt.type;if(!Vt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=y.width-k&&B>=0&&B<=y.height-D){St.bindFramebuffer(N.FRAMEBUFFER,pt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(P,B,k,D,Ot.convert(Rt),Ot.convert(Pt),0);const Kt=U!==null?Mt.get(U).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,Kt);const ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Lm(N,ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(_t),N.deleteSync(ae),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,P=null,B=0){y.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-B),D=Math.floor(y.image.width*k),tt=Math.floor(y.image.height*k),ct=P!==null?P.x:0,pt=P!==null?P.y:0;b.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ct,pt,D,tt),St.unbindTexture()},this.copyTextureToTexture=function(y,P,B=null,k=null,D=0){y.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],P=arguments[2],D=arguments[3]||0,B=null);let tt,ct,pt,mt,Rt,Pt,_t,Kt,ae;const le=y.isCompressedTexture?y.mipmaps[D]:y.image;B!==null?(tt=B.max.x-B.min.x,ct=B.max.y-B.min.y,pt=B.isBox3?B.max.z-B.min.z:1,mt=B.min.x,Rt=B.min.y,Pt=B.isBox3?B.min.z:0):(tt=le.width,ct=le.height,pt=le.depth||1,mt=0,Rt=0,Pt=0),k!==null?(_t=k.x,Kt=k.y,ae=k.z):(_t=0,Kt=0,ae=0);const Fe=Ot.convert(P.format),Zt=Ot.convert(P.type);let vt;P.isData3DTexture?(b.setTexture3D(P,0),vt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(b.setTexture2DArray(P,0),vt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(P,0),vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const Pn=N.getParameter(N.UNPACK_ROW_LENGTH),Jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=N.getParameter(N.UNPACK_SKIP_PIXELS),Xi=N.getParameter(N.UNPACK_SKIP_ROWS),Ve=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,le.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);const ks=y.isDataArrayTexture||y.isData3DTexture,he=P.isDataArrayTexture||P.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const gn=Mt.get(y),Hs=Mt.get(P),$e=Mt.get(gn.__renderTarget),jn=Mt.get(Hs.__renderTarget);St.bindFramebuffer(N.READ_FRAMEBUFFER,$e.__webglFramebuffer),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let ti=0;ti<pt;ti++)ks&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,D,Pt+ti),y.isDepthTexture?(he&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,D,ae+ti),N.blitFramebuffer(mt,Rt,tt,ct,_t,Kt,tt,ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):he?N.copyTexSubImage3D(vt,D,_t,Kt,ae+ti,mt,Rt,tt,ct):N.copyTexSubImage2D(vt,D,_t,Kt,ae+ti,mt,Rt,tt,ct);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else he?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(vt,D,_t,Kt,ae,tt,ct,pt,Fe,Zt,le.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,D,_t,Kt,ae,tt,ct,pt,Fe,le.data):N.texSubImage3D(vt,D,_t,Kt,ae,tt,ct,pt,Fe,Zt,le):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,_t,Kt,tt,ct,Fe,Zt,le.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,_t,Kt,le.width,le.height,Fe,le.data):N.texSubImage2D(N.TEXTURE_2D,D,_t,Kt,tt,ct,Fe,Zt,le);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve),D===0&&P.generateMipmaps&&N.generateMipmap(vt),St.unbindTexture()},this.copyTextureToTexture3D=function(y,P,B=null,k=null,D=0){return y.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],P=arguments[3],D=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,B,k,D)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){C=0,w=0,U=null,St.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}class _l{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gv extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ed{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new I;class _r{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nd extends mn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let os;const Xs=new I,as=new I,cs=new I,ls=new Ut,qs=new Ut,id=new Lt,Yr=new I,Ys=new I,Kr=new I,Vh=new Ut,Aa=new Ut,Wh=new Ut;class Vv extends ue{constructor(t=new nd){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new _n;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ed(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new _r(n,3,0,!1)),os.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;$r(Yr.set(-.5,-.5,0),cs,o,as,s,r),$r(Ys.set(.5,-.5,0),cs,o,as,s,r),$r(Kr.set(.5,.5,0),cs,o,as,s,r),Vh.set(0,0),Aa.set(1,0),Wh.set(1,1);let a=t.ray.intersectTriangle(Yr,Ys,Kr,!1,Xs);if(a===null&&($r(Ys.set(-.5,.5,0),cs,o,as,s,r),Aa.set(0,1),a=t.ray.intersectTriangle(Yr,Kr,Ys,!1,Xs),a===null))return;const c=t.ray.origin.distanceTo(Xs);c<t.near||c>t.far||e.push({distance:c,point:Xs.clone(),uv:Qe.getInterpolation(Xs,Yr,Ys,Kr,Vh,Aa,Wh,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $r(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(qs.x=r*ls.x-s*ls.y,qs.y=s*ls.x+r*ls.y):qs.copy(ls),i.copy(t),i.x+=qs.x,i.y+=qs.y,i.applyMatrix4(id)}const Xh=new I,qh=new $t,Yh=new $t,Wv=new I,Kh=new Lt,Zr=new I,wa=new Rn,$h=new Lt,Ra=new Ho;class Xv extends ke{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xl,this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zr),this.boundingBox.expandByPoint(Zr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zr),this.boundingSphere.expandByPoint(Zr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(s),t.ray.intersectsSphere(wa)!==!1&&($h.copy(s).invert(),Ra.copy(t.ray).applyMatrix4($h),!(this.boundingBox!==null&&Ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ra)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new $t,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Xl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;qh.fromBufferAttribute(s.attributes.skinIndex,t),Yh.fromBufferAttribute(s.attributes.skinWeight,t),Xh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Yh.getComponent(r);if(o!==0){const a=qh.getComponent(r);Kh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Wv.copy(Xh).applyMatrix4(Kh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class sd extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rd extends Se{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ne,h=Ne,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new Lt,qv=new Lt;class gl{constructor(t=[],e=[]){this.uuid=pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Lt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Lt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:qv;Zh.multiplyMatrices(a,e[r]),Zh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new rd(e,t,t,je,dn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sd),this.bones.push(o),this.boneInverses.push(new Lt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Vc extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new Lt,Jh=new Lt,Jr=[],Qh=new Qn,Yv=new Lt,Ks=new ke,$s=new Rn;class Kv extends ke{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Qh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Qh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),$s.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Jh.multiplyMatrices(n,hs),Ks.matrixWorld=Jh,Ks.raycast(t,Jr);for(let o=0,a=Jr.length;o<a;o++){const c=Jr[o];c.instanceId=r,c.object=this,e.push(c)}Jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rd(new Float32Array(s*this.count),s,this.count,ll,dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class od extends mn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wo=new I,Ro=new I,jh=new Lt,Zs=new Ho,Qr=new Rn,Ca=new I,tu=new I;class xl extends ue{constructor(t=new _n,e=new od){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wo.fromBufferAttribute(e,s-1),Ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wo.distanceTo(Ro);t.setAttribute("lineDistance",new qn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;jh.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=h.getX(g),T=h.getX(g+1),A=jr(this,t,Zs,c,p,T);A&&e.push(A)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(d),p=jr(this,t,Zs,c,g,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=jr(this,t,Zs,c,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=jr(this,t,Zs,c,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(wo.fromBufferAttribute(o,s),Ro.fromBufferAttribute(o,r),e.distanceSqToSegment(wo,Ro,Ca,tu)>n)return;Ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ca);if(!(c<t.near||c>t.far))return{distance:c,point:tu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const eu=new I,nu=new I;class $v extends xl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)eu.fromBufferAttribute(e,s),nu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eu.distanceTo(nu);t.setAttribute("lineDistance",new qn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zv extends xl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ad extends mn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const iu=new Lt,Wc=new Ho,to=new Rn,eo=new I;class Jv extends ue{constructor(t=new _n,e=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,t.ray.intersectsSphere(to)===!1)return;iu.copy(s).invert(),Wc.copy(t.ray).applyMatrix4(iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);eo.fromBufferAttribute(u,m),su(eo,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)eo.fromBufferAttribute(u,_),su(eo,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function su(i,t,e,n,s,r,o){const a=Wc.distanceSqToPoint(i);if(a<e){const c=new I;Wc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Vo extends mn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cn extends Vo{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function no(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jv(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function ru(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function cd(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class yr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ty extends yr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yl:r=t,a=2*e-n;break;case Kl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yl:o=t,c=2*n-e;break;case Kl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-e)/(s-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,T=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,A=(-1-d)*m+(1.5+d)*g+.5*_,S=d*m-d*g;for(let O=0;O!==a;++O)r[O]=p*o[h+O]+T*o[l+O]+A*o[c+O]+S*o[u+O];return r}}class ey extends yr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class ny extends yr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ln{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=no(e,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:no(t.times,Array),values:no(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ny(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ey(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ty(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case pr:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Qv(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){const g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=pr;class Ns extends Ln{constructor(t,e,n){super(t,e,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=dr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class ld extends Ln{}ld.prototype.ValueTypeName="color";class Rs extends Ln{}Rs.prototype.ValueTypeName="number";class iy extends yr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Mi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Cs extends Ln{InterpolantFactoryMethodLinear(t){return new iy(this.times,this.values,this.getValueSize(),t)}}Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Ln{constructor(t,e,n){super(t,e,n)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=dr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Ln{}Ls.prototype.ValueTypeName="vector";class sy{constructor(t="",e=-1,n=[],s=tm){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(oy(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=jv(c);c=ru(c,1,h),l=ru(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Rs(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,_,g){if(d.length!==0){const m=[],p=[];cd(d,m,p,_),m.length!==0&&g.push(new u(f,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let T=0;T!==f[_].morphTargets.length;++T){const A=f[_];m.push(A.time),p.push(A.morphTarget===g?1:0)}s.push(new Rs(".morphTargetInfluence["+g+"]",m,p))}c=d.length*o}else{const d=".bones["+e[u].name+"]";n(Ls,d+".position",f,"pos",s),n(Cs,d+".quaternion",f,"rot",s),n(Ls,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ry(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return ld;case"quaternion":return Cs;case"bool":case"boolean":return Ns;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function oy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ry(i.type);if(i.times===void 0){const e=[],n=[];cd(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const pi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ay{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const cy=new ay;class Os{constructor(t){this.manager=t!==void 0?t:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class ly extends Error{constructor(t,e){super(t),this.response=e}}class hd extends Os{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=pi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Bn[t]!==void 0){Bn[t].push({onLoad:e,onProgress:n,onError:s});return}Bn[t]=[],Bn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:A,value:S})=>{if(A)p.close();else{g+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let C=0,w=h.length;C<w;C++){const U=h[C];U.onProgress&&U.onProgress(O)}p.enqueue(S),T()}},A=>{p.error(A)})}}});return new Response(m)}else throw new ly(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{pi.add(t,l);const h=Bn[t];delete Bn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Bn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Bn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class hy extends Os{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=pi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=mr("img");function c(){h(),pi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class uy extends Os{constructor(t){super(t)}load(t,e,n,s){const r=new Se,o=new hy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Wo extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const La=new Lt,ou=new I,au=new I;class vl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class fy extends vl{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=As*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class dy extends Wo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const cu=new Lt,Js=new I,Ia=new I;class py extends vl{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Ia.copy(n.position),Ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ia),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu)}}class my extends Wo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new py}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _y extends vl{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new _y}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fd extends Wo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ur{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class gy extends Os{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=pi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),pi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});pi.add(t,c),r.manager.itemStart(t)}}class xy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lu(){return performance.now()}const yl="\\[\\]\\.:\\/",vy=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",yy="[^"+yl.replace("\\.","")+"]",My=/((?:WC+[\/:])*)/.source.replace("WC",Ml),Sy=/(WCOD+)?/.source.replace("WCOD",yy),Ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),Ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),by=new RegExp("^"+My+Sy+Ey+Ty+"$"),Ay=["material","materials","bones","map"];class wy{constructor(t,e,n){const s=n||te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class te{constructor(t,e,n){this.path=e,this.parsedPath=n||te.parseTrackName(e),this.node=te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new te.Composite(t,e,n):new te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vy,"")}static parseTrackName(t){const e=by.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ay.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}te.Composite=wy;te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};te.prototype.GetterByBindingType=[te.prototype._getValue_direct,te.prototype._getValue_array,te.prototype._getValue_arrayElement,te.prototype._getValue_toArray];te.prototype.SetterByBindingTypeAndVersioning=[[te.prototype._setValue_direct,te.prototype._setValue_direct_setNeedsUpdate,te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[te.prototype._setValue_array,te.prototype._setValue_array_setNeedsUpdate,te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[te.prototype._setValue_arrayElement,te.prototype._setValue_arrayElement_setNeedsUpdate,te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[te.prototype._setValue_fromArray,te.prototype._setValue_fromArray_setNeedsUpdate,te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);const Ry=50,Sl=2500,Cy=1.25,hu=1e3,Ly=1e6,Iy=1e4,dd=.8,Pa={RUBBER:-1,PADDED:-.5,DEFAULT:-2},El=1,pd=1/60,md=32,Py=pd/md,Dy=70,Tl=100,_d=2,Ny=50,Uy=10,Oy=5,Fy=3,Xc=100,uu=Ry,By=15,ky=4,Hy=2,fu=.7,zy=8,yn=0,un=80,Te=88,Sn=104,Da=200,Gy=239,gd=221,Vy=230,xd=224;function Wy(i){return i===un||Te<=i&&i<=Sn}function Xy(i){return i===un||i>=Te}const qy=4e3,Yy=500,Ky=-1500,$y=-2e3,vd=1e3,yd=5e3,Zy=2,Na=99,Jy=.05,Md=.8,Qy=.65,Xo=0,jy=2,tM=0,eM=1,nM=2,iM=3,qo=0,sM=3,rM=0,du=1,io=2,ui=0,Sd=1,oM=2,aM=3,cM=4,lM=5,hM=6,uM=7,Ed=8;class Tt{constructor(t,e,n,s,r,o,a={}){v(this,"idx");v(this,"name");v(this,"cost");v(this,"bundle");v(this,"arms");v(this,"category");v(this,"blast");v(this,"behavior");v(this,"warheads");v(this,"fan");v(this,"heat");v(this,"params");v(this,"enabled");this.idx=t,this.name=e,this.cost=n,this.bundle=s,this.arms=r,this.category=o,this.blast=a.blast??0,this.behavior=a.behavior??"explosive",this.warheads=a.warheads??1,this.fan=a.fan??0,this.heat=a.heat??0,this.params=a.params??{},this.enabled=a.enabled??!0}get offensive(){return this.category!=="guidance"&&this.category!=="shield"&&this.category!=="utility"}}const me=[new Tt(0,"Baby Missile",400,10,0,"explosive",{blast:10,behavior:"explosive"}),new Tt(1,"Missile",1875,5,0,"explosive",{blast:20,behavior:"explosive"}),new Tt(2,"Baby Nuke",1e4,3,0,"nuclear",{blast:40,behavior:"explosive"}),new Tt(3,"Nuke",12e3,1,1,"nuclear",{blast:75,behavior:"explosive"}),new Tt(4,"LeapFrog",1e4,2,3,"multi",{blast:20,behavior:"leapfrog",warheads:3,params:{radii:[20,25,30]}}),new Tt(5,"Funky Bomb",7e3,2,4,"special",{blast:80,behavior:"funky",params:{scatter:15}}),new Tt(6,"MIRV",1e4,3,2,"multi",{blast:20,behavior:"mirv",warheads:5,fan:50}),new Tt(7,"Death's Head",2e4,1,4,"multi",{blast:35,behavior:"mirv",warheads:9,fan:20}),new Tt(8,"Napalm",1e4,10,2,"fire",{blast:15,behavior:"napalm",heat:25,params:{deep_heat:30}}),new Tt(9,"Hot Napalm",2e4,2,4,"fire",{blast:20,behavior:"napalm",heat:40,params:{deep_heat:50}}),new Tt(10,"Tracer",10,20,0,"tracer",{blast:0,behavior:"tracer"}),new Tt(11,"Smoke Tracer",500,10,0,"tracer",{blast:0,behavior:"tracer",params:{smoke:!0}}),new Tt(12,"Baby Roller",5e3,10,2,"roller",{blast:10,behavior:"roller"}),new Tt(13,"Roller",6e3,5,2,"roller",{blast:20,behavior:"roller"}),new Tt(14,"Heavy Roller",6750,2,3,"roller",{blast:45,behavior:"roller"}),new Tt(15,"Riot Charge",2e3,10,2,"riot",{blast:36,behavior:"riot_wedge"}),new Tt(16,"Riot Blast",5e3,5,3,"riot",{blast:60,behavior:"riot_wedge"}),new Tt(17,"Riot Bomb",5e3,5,3,"riot",{blast:30,behavior:"riot_sphere"}),new Tt(18,"Heavy Riot Bomb",4750,2,3,"riot",{blast:45,behavior:"riot_sphere"}),new Tt(19,"Baby Digger",3e3,10,0,"digger",{blast:-10,behavior:"digger"}),new Tt(20,"Digger",2500,5,0,"digger",{blast:-20,behavior:"digger"}),new Tt(21,"Heavy Digger",6750,2,1,"digger",{blast:-35,behavior:"digger"}),new Tt(22,"Baby Sandhog",1e4,10,0,"sandhog",{blast:10,behavior:"sandhog",warheads:1}),new Tt(23,"Sandhog",16750,5,0,"sandhog",{blast:15,behavior:"sandhog",warheads:2}),new Tt(24,"Heavy Sandhog",25e3,2,1,"sandhog",{blast:20,behavior:"sandhog",warheads:4}),new Tt(25,"Dirt Clod",5e3,10,0,"dirt",{blast:20,behavior:"dirt_sphere"}),new Tt(26,"Dirt Ball",5e3,5,0,"dirt",{blast:35,behavior:"dirt_sphere"}),new Tt(27,"Ton of Dirt",6750,2,1,"dirt",{blast:70,behavior:"dirt_sphere"}),new Tt(28,"Liquid Dirt",5e3,5,2,"dirt",{blast:25,behavior:"dirt_slump"}),new Tt(29,"Dirt Charge",5e3,10,1,"dirt",{blast:30,behavior:"dirt_wedge"}),new Tt(30,"Earth Disrupter",5e3,10,0,"dirt",{blast:0,behavior:"dirt_settle"}),new Tt(31,"Plasma Blast",9e3,5,3,"energy",{blast:40,behavior:"plasma"}),new Tt(32,"Laser",5e3,5,2,"energy",{blast:0,behavior:"laser"}),new Tt(33,"Heat Guidance",1e4,6,2,"guidance",{behavior:"equip"}),new Tt(34,"Bal Guidance",1e4,2,2,"guidance",{behavior:"equip"}),new Tt(35,"Horz Guidance",15e3,5,1,"guidance",{behavior:"equip"}),new Tt(36,"Vert Guidance",2e4,5,1,"guidance",{behavior:"equip"}),new Tt(37,"Lazy Boy",2e4,2,3,"guidance",{behavior:"equip"}),new Tt(38,"Parachute",1e4,8,2,"utility",{behavior:"equip"}),new Tt(39,"Battery",5e3,10,2,"utility",{behavior:"equip"}),new Tt(40,"Mag Deflector",1e4,2,2,"shield",{behavior:"equip",params:{hp:55,push:!0}}),new Tt(41,"Shield",2e4,3,3,"shield",{behavior:"equip",params:{hp:100}}),new Tt(42,"Force Shield",25e3,3,3,"shield",{behavior:"equip",params:{hp:100,deflect:!0}}),new Tt(43,"Heavy Shield",3e4,2,4,"shield",{behavior:"equip",params:{hp:150}}),new Tt(44,"Super Mag",4e4,2,4,"shield",{behavior:"equip",params:{hp:200,push:!0,laserproof:!0}}),new Tt(45,"Auto Defense",1500,1,3,"utility",{behavior:"equip"}),new Tt(46,"Fuel Tank",1e4,10,3,"utility",{behavior:"equip"}),new Tt(47,"Contact Trigger",1e3,25,3,"utility",{behavior:"equip"})],vi=me.length;if(vi!==48)throw new Error(`NUM_ITEMS must be 48, got ${vi}`);const fn=0,Co=1,ki=38,En=39,fM=40,Td=41,bd=42,Ad=43,dM=44,or=45,wd=46,pM=47,Lo=[fM,Td,bd,Ad,dM],pu={0:3,1:2,2:1,3:2,6:.2,7:.1,8:.2,9:.1,12:.2,13:.2,17:.2,25:.1,31:.2,32:.2};function Zn(i){const t=Math.floor(i),e=i-t;return e<.5?t+0:e>.5?t+1:t%2===0?t+0:t+1}class Rd{constructor(t,e,n,s,r,o){v(this,"vx");v(this,"vy");v(this,"px");v(this,"py");v(this,"sx");v(this,"sy");v(this,"prev_px");v(this,"prev_py");v(this,"saved_vx");v(this,"saved_vy");v(this,"weapon");v(this,"weapon_type");v(this,"owner");v(this,"owner_index");v(this,"active");v(this,"mode");v(this,"flags");v(this,"bounce_energy");v(this,"bounce_count");v(this,"spring_armed");v(this,"warheads_left");v(this,"guidance");v(this,"target");v(this,"state");v(this,"trail");v(this,"armed");v(this,"split_done");v(this,"contact");this.vx=r,this.vy=o,this.px=n,this.py=s,this.sx=Zn(n),this.sy=Zn(s),this.prev_px=this.px,this.prev_py=this.py,this.saved_vx=this.vx,this.saved_vy=this.vy,this.weapon=e,this.weapon_type=e.idx,this.owner=t,this.owner_index=t?t.player_index:-1,this.active=!0,this.mode=0,this.flags=0,this.bounce_energy=dd,this.bounce_count=0,this.spring_armed=!1,this.warheads_left=e.warheads,this.guidance=null,this.target=null,this.state={},this.trail=[],this.armed=!0,this.split_done=!1,this.contact=!1}}class mM{constructor(t,e,n=0,s=0,r=0){v(this,"player_index");v(this,"name");v(this,"ai_class");v(this,"reveal_type");v(this,"team_id");v(this,"color");v(this,"tank_icon");v(this,"mobile");v(this,"x");v(this,"y");v(this,"half_width");v(this,"angle");v(this,"power");v(this,"health");v(this,"alive");v(this,"shield_hp");v(this,"shield_item");v(this,"shield_push");v(this,"shield_deflect");v(this,"shield_laserproof");v(this,"shield_failproof");v(this,"parachute_deployed");v(this,"parachute_threshold");v(this,"chute_up");v(this,"contact_trigger");v(this,"selected_guidance");v(this,"guidance_target");v(this,"guidance_target_pt");v(this,"cash");v(this,"cash_ceiling");v(this,"inventory");v(this,"selected_weapon");v(this,"fuel_remainder");v(this,"score");v(this,"win_counter");v(this,"hits_this_round");v(this,"hits_career");v(this,"fall_accum");v(this,"falling");v(this,"ai_tries");v(this,"ai_saved_tactic");this.player_index=t,this.name=e,this.ai_class=n,this.reveal_type=n?n-1:-1,this.team_id=s,this.color=0,this.tank_icon=r,this.mobile=!0,this.x=0,this.y=0,this.half_width=7,this.angle=45,this.power=500,this.health=Xc,this.alive=!0,this.shield_hp=0,this.shield_item=0,this.shield_push=!1,this.shield_deflect=!1,this.shield_laserproof=!1,this.shield_failproof=!1,this.parachute_deployed=!0,this.parachute_threshold=Oy,this.chute_up=0,this.contact_trigger=!1,this.selected_guidance=null,this.guidance_target=null,this.guidance_target_pt=null,this.cash=0,this.cash_ceiling=0,this.inventory=new Array(vi).fill(0),this.inventory[fn]=99,this.selected_weapon=0,this.fuel_remainder=0,this.score=0,this.win_counter=0,this.hits_this_round={},this.hits_career={},this.fall_accum=0,this.falling=!1,this.ai_tries=0,this.ai_saved_tactic=null}has_ammo(t){return t===fn?!0:this.inventory[t]>0}consume(t){if(t===fn){this.inventory[t]=this.inventory[t]>1?this.inventory[t]-1:99;return}this.inventory[t]>0&&(this.inventory[t]-=1)}get fuel(){return this.inventory[wd]*10+this.fuel_remainder}get parachutes(){return this.inventory[ki]}get batteries(){return this.inventory[En]}}function yo(i,t){return Math.floor(i/t)}function Cd(i,t,e,n,s,r){const o=Sl*i.GRAVITY;let a=Math.abs(n-t);const c=e-s;a<1&&(a=1);const l=wl(r),h=Math.cos(l),u=h*h*(a*Math.tan(l)-c);if(u<=0)return null;const f=o*a*a/(2*u);return f<=0?null:Math.sqrt(f)/El}const qc=-1,Ld=-2;function Yc(i,t,e,n,s,r){let o=e<=90?e:180-e;o=Math.max(0,Math.min(90,o));const a=Sl*i.GRAVITY,c=Math.max(1,Math.abs(n-t.x)),l=t.y-s,h=wl(o),u=Math.cos(h),f=u*u*(c*Math.tan(h)-l);if(f===0)return r?Ld:0;let d=a*c*c/(2*f);if(d<0){if(r)return qc;d=-d}const _=Math.sqrt(d)/El,g=10*Math.max(1,t.health);return r&&_>g?qc:_}function _M(i){const t=i.cfg.live_elastic!==void 0?i.cfg.live_elastic:i.cfg.elastic??0;return t!==0&&t!==1}function gM(i,t,e,n){const s=e<=90?e:180-e,r=Zn(n*Math.sin(wl(s)));return t.y-r<2}function Id(i,t,e,n){const s=i.cfg;let r=Math.trunc(t.angle),o=0;const a=_M(i);let c=null;for(let l=0;l<200;l++){const h=Yc(s,t,r,e,n,!0);if(h===qc)o|=1,r+=r<90?-1:1;else if(h===Ld)o|=2,r+=r<90?1:-1;else if(a&&gM(i,t,r,h))o|=1,r+=r<90?-2:2;else{c=h;break}if(o===3||r<0||r>180)break}return c===null&&(c=Yc(s,t,Math.max(0,Math.min(180,r)),e,n,!1)||800),[An(r),Gi(c)]}function bl(i,t){let e=null,n=1e18;for(const s of i.tanks)if(s.alive&&s!==t&&!Vi(i,t,s)){const r=Math.abs(s.x-t.x);r<n&&(e=s,n=r)}return e}function Vi(i,t,e){return t!==e&&i.cfg.team_mode!==qo&&t.team_id===e.team_id}function xM(i,t){const e=i.tanks.slice().sort((a,c)=>a.score-c.score),n=new Map;e.forEach((a,c)=>n.set(a,c));const s=i.round_index+1;let r=null,o=-1e18;for(const a of i.tanks){if(!a.alive||a===t||Vi(i,t,a))continue;const c=t.hits_this_round[a.player_index]??0,h=(t.hits_career[a.player_index]??0)*(t.shield_hp>0?3:5);let u=i.rng.pick(32e3)/2e3+c/s+h;a.shield_hp>0&&(u-=a.shield_hp/10+1);const f=Math.abs(n.get(t)-n.get(a))-1;u-=3*Math.max(0,f),u>o&&(r=a,o=u)}return r||bl(i,t)}function tn(i,t,e=!1){const n=[];for(let s=0;s<vi;s++)me[s].offensive&&t.has_ammo(s)&&n.push(s);return e&&n.length>0?n[i.rng.pick(n.length)]:t.has_ammo(Co)?Co:fn}function vM(i,t){t.ai_class===Ed&&t.reveal_type!==-2&&(t.ai_class=i.rng.pick(7)+1,t.reveal_type=-2)}function Ua(i,t){vM(i,t);const e=t.ai_class;return(LM[e]??Yo)(i,t)}function yM(i,t){let e=Math.abs(3*i.cfg.wind/10)+i.cfg.AIR_VISCOSITY/2;return e=Math.min(70,e),t?85-e:95+e}function MM(i,t){const e=(i.rng.pick(Math.max(1,t.health))+1)*10;let n=0,s=0;for(const o of i.tanks)o.alive&&o!==t&&!Vi(i,t,o)&&(o.x<t.x&&(n+=1),o.x>=t.x&&(s+=1));let r=i.rng.pick(181);if(n||s)for(let o=0;o<64;o++){const a=r>90;if(a&&n||!a&&s)break;r=i.rng.pick(181)}return[An(r),Gi(e),tn(i,t,!0)]}function Pd(i,t,e){let n=null,s=1<<30;for(const r of i.tanks)if(!(e&&e.has(r))&&r.alive&&r!==t&&!Vi(i,t,r)){const o=Math.abs(r.x-t.x);o<s&&(n=r,s=o)}return n}function Dd(i,t){const e=i.y-t.y+2,n=t.x-i.x,s=NM(Math.atan2(e,Math.abs(n))),r=Math.max(1,Math.min(89,s));return Zn(n>=0?r:180-r)}function Nd(i,t,e){const n=i.cfg;let s=Math.trunc(t.angle),r=null;for(let o=0;o<200;o++){const a=Yc(n,t,s,e.x,e.y,!0);if(a<0)s+=s<90?1:-1;else if(a>=1){r=a;break}else break;if(s===90)return null}return[An(s),Gi(r!==null?r:0)]}function Yo(i,t,e){const n=e!==void 0?e:new Set,s=Pd(i,t,n);if(!s)return Al(i,t,tn(i,t));t.angle=An(Dd(t,s));const r=Nd(i,t,s);if(r===null){const c=new Set(n);return c.add(s),Yo(i,t,c)}const[o,a]=r;return[o,a,tn(i,t)]}function Ud(i,t){const e=new Set;for(let n=0;n<8;n++){const s=Pd(i,t,e);if(!s)return Al(i,t,tn(i,t));const r=SM(i,t,s);if(r!==null)return[r[0],r[1],tn(i,t)];t.angle=An(Dd(t,s));const o=Nd(i,t,s);if(o===null){e.add(s);continue}const[a,c]=o;return[a,c,tn(i,t)]}return[t.angle,t.power,tn(i,t)]}function Od(i){const t=i.cfg.live_elastic!==void 0?i.cfg.live_elastic:i.cfg.elastic??0;return t===3||t===4}function SM(i,t,e){const n=i.last_landing;if(n===null||!Od(i))return null;const s=n[0],r=n[1];if(t.ai_tries+=1,t.ai_tries>4)return t.ai_tries=0,null;let o=Math.trunc(t.angle);if(Math.abs(t.x-e.x)<Math.abs(t.x-s)){if(o+=1,o===90)return t.ai_tries=0,null}else r>=e.y&&o!==0&&(o-=1);return[An(o),Gi(t.power)]}function Al(i,t,e){const n=bl(i,t),s=n?n.x>=t.x:!0;let r=i.rng.pick(70)+10,o;s?o=t.x+yo(i.w-1-t.x,2):(r=180-r,o=yo(t.x,2));const a=yo(i.h-1,2),c=Math.min(89,r<=90?r:180-r);let l=Cd(i.cfg,t.x,t.y,o,a,c);return l===null&&(l=600),[An(r),Gi(l),e]}function EM(i,t){const e=i.last_landing,n=tn(i,t);if(e===null)return Al(i,t,n);const s=e[0],r=e[1],o=i.direct_hit_tank,a=o!==null&&o.alive&&!Vi(i,t,o)?o:TM(i,t,s);if(a===null)return[An(t.angle),Gi(t.power),n];let c=t.angle,l=t.power;return Math.abs(t.x-a.x)<Math.abs(t.x-s)?l-=10:(r<a.y&&bM(i,r)&&(c<85?c+=2:c>95&&(c-=2)),l+=10),[An(c),Gi(l),n]}function TM(i,t,e){let n=null,s=1<<30;for(const r of i.tanks)if(r.alive&&r!==t&&!Vi(i,t,r)){const o=Math.abs(r.x-e);o<s&&(n=r,s=o)}return n}function bM(i,t){return(i.live_sky??"").toUpperCase()!=="CAVERN"?!0:yo(i.h,2)<t}function An(i){return Math.trunc(Math.max(0,Math.min(180,i)))}function Gi(i){return Math.trunc(Math.max(0,Math.min(1e3,i)))}function AM(i,t){const e=[];for(const n of i.tanks)n.alive&&n!==t&&!Vi(i,t,n)&&e.push(n);return e.length===0?null:e[i.rng.pick(e.length)]}function Fd(i,t){const e=AM(i,t);if(!e)return[t.angle,t.power,tn(i,t)];t.angle=t.x<e.x?65:115;const[n,s]=Id(i,t,e.x,e.y);return[n,s,tn(i,t)]}function wM(i,t){const e=xM(i,t);if(!e)return[t.angle,t.power,tn(i,t)];t.angle=An(yM(i,t.x<e.x));const[n,s]=Id(i,t,e.x,e.y);return[n,s,tn(i,t)]}function RM(i,t){const e=bl(i,t);return e&&CM(i,t,e)?Yo(i,t):Od(i)?Ud(i,t):Fd(i,t)}function CM(i,t,e){const n=t.x,s=t.y-6,r=e.x,o=e.y-6,a=Math.max(1,Math.trunc(Math.hypot(r-n,o-s)));for(let c=1;c<a;c++){const l=Math.trunc(n+(r-n)*c/a),h=Math.trunc(s+(o-s)*c/a);if(i.terrain.is_dirt(l,h))return!1}return!0}const LM={[Sd]:MM,[oM]:Yo,[aM]:Ud,[cM]:EM,[lM]:RM,[hM]:Fd,[uM]:wM};function IM(i,t){i.cfg.is_on("COMPUTERS_BUY")&&(t.ai_class===Sd?DM(i,t):PM(i,t))}function mu(i,t){return i.inventory[t]>0}function PM(i,t){const e=i.economy;for(const s of[Ad,bd,Td])Lo.some(r=>mu(t,r))||e.buy(t,s);mu(t,ki)||e.buy(t,ki)&&(t.parachute_deployed=!0);for(const s of[Co,fn]){let r=0;for(;t.inventory[s]<5&&e.available[s]&&r<20&&e.buy(t,s);)r+=1}let n=0;for(;t.inventory[En]<8&&n<20&&e.buy(t,En);)n+=1}function DM(i,t){const e=i.economy;for(let n=0;n<10;n++){const s=[],r=[];for(const a of Object.keys(pu)){const c=Number(a),l=pu[c];e.available[c]&&t.cash>=e.price[c]&&l>0&&(s.push(c),r.push(l))}if(s.length===0)break;const o=s[i.rng.roulette(r)];if(!e.buy(t,o))break}}function wl(i){return i*Math.PI/180}function NM(i){return i*180/Math.PI}const UM={33:"heat",34:"ballistic",35:"horizontal",36:"vertical",37:"lazyboy"},Bd=new Set(["mirv","riot_wedge","riot_sphere","plasma"]),OM=80,_u=.35;function FM(i,t,e,n){const s=i.selected_guidance;if(s==null)return n.guidance=null,null;const r=UM[s];if(r===void 0||Bd.has(e.behavior))return n.guidance=null,null;const o={type:r,target:i.guidance_target??null,point:i.guidance_target_pt??null,tanks:null,armed:!1,_last_x:null,_last_y:null};return n.guidance=o,o}function BM(i,t,e=null){const n=i.guidance;if(!n)return!0;e!=null&&(n.tanks=e);const s=n._last_x,r=n._last_y,o=n.type;return o==="heat"?zM(i,n):o==="horizontal"?GM(i,n,s,r):o==="vertical"?VM(i,n,s):o==="lazyboy"&&WM(i,n),n._last_x=i.px,n._last_y=i.py,!0}function Ko(i){return Math.hypot(i.vx,i.vy)}function kM(i,t){const e=t.tanks;if(!e||e.length===0)return null;const n=i.owner,s=n?.team_id??null;let r=null,o=OM;for(const a of e){if(!a.alive||a===n||s!==null&&(a.team_id??null)===s&&HM(a,n))continue;const c=Math.hypot(a.x-i.px,a.y-4-i.py);c<=o&&(r=a,o=c)}return r}function HM(i,t){const e=i?.team_id??0,n=t?.team_id??0;return e!==0&&e===n}function zM(i,t){const e=kM(i,t);if(e===null)return;const n=Ko(i);if(n<1e-6)return;const s=e.x-i.px,r=e.y-4-i.py,o=Math.hypot(s,r);if(o<1e-6)return;const a=s/o,c=-r/o,l=i.vx+(a*n-i.vx)*_u,h=i.vy+(c*n-i.vy)*_u,u=Math.hypot(l,h);u<1e-6||(i.vx=l/u*n,i.vy=h/u*n)}function GM(i,t,e,n){const s=t.target,r=t.point,o=s!==null?s.y-4:r?r[1]:null,a=s!==null?s.x:r?r[0]:null;if(o===null||a===null||(t.armed||n!==null&&(n-o)*(i.py-o)<=0&&(t.armed=!0),!t.armed))return;const c=Ko(i),l=a>=i.px?1:-1;i.vx=l*c,i.vy=0}function VM(i,t,e,n){const s=t.target,r=t.point,o=s!==null?s.x:r?r[0]:null;if(o===null||(t.armed||e!==null&&(e-o)*(i.px-o)<=0&&(t.armed=!0,i.px=o),!t.armed))return;const a=Ko(i);i.vx=0,i.vy=-a,i.px=o}function WM(i,t){let e=t.point;if(e===null){const d=t.target;if(d===null)return;e=[d.x,d.y-4]}const n=Ko(i);if(n<1e-6)return;const s=e[0]-i.px,r=e[1]-i.py,o=Math.hypot(s,r);if(o<1e-6)return;const a=s/o,c=-r/o,l=.6,h=i.vx+(a*n-i.vx)*l,u=i.vy+(c*n-i.vy)*l,f=Math.hypot(h,u);f<1e-6||(i.vx=h/f*n,i.vy=u/f*n)}function XM(i,t,e){const n=t.guidance_target??null,s=t.guidance_target_pt??null;let r,o;if(n!==null)r=n.x,o=n.y-4;else if(s!==null)r=s[0],o=s[1];else return null;const a=t.angle,c=a<=90?a:180-a,l=Cd(i,t.x,t.y,r,o,c);return l===null?1e3:Zn(Math.max(30,Math.min(1e3,l)))}const qM=.017453293,gu=12,xu=0,vu=1,yu=2;function so(i,t,e,n=null,s=null){if(s===null&&(s=i.angle),n===null&&i.selected_guidance===34&&!Bd.has(e.behavior)){const m=XM(t,i);m!==null&&(n=m)}n===null&&(n=i.power);const r=s*qM,o=Math.cos(r),a=Math.sin(r),c=i.x,l=i.y-4,h=c+o*gu,u=l-a*gu,f=n*El,d=f*o,_=f*a,g=new Rd(i,e,h,u,d,_);return FM(i,t,e,g),g}function YM(i,t,e=Py,n=null){i.prev_px=i.px,i.prev_py=i.py,i.guidance!==null&&i.guidance!==void 0&&BM(i,t,n);const s=i.vx*i.vx+i.vy*i.vy;if(s>Ly){const o=Math.sqrt(s);i.vx=i.vx/(o/hu),i.vy=i.vy/(o/hu)}i.px+=i.vx*e,i.py-=i.vy*e,i.saved_vx=i.vx,i.saved_vy=i.vy;const r=t.viscosity_mult;if(i.mode!==1&&r!==1&&(i.vx*=r,i.vy*=r),i.mode!==1){const o=Sl*t.GRAVITY;if(i.vy-=o*e,t.wind){const a=Cy*t.wind;i.vx+=a*e}}i.sx=Zn(i.px),i.sy=Zn(i.py)}function KM(i,t,e,n){const s=t.live_elastic!==void 0?t.live_elastic:t.elastic??0,r=t.EDGES_EXTEND,o=i.px,a=i.py,c=0,l=e-1,h=0,u=n-1;let f=xu,d=null;if(o<c||o>l){if(s===0)return!(o<c-r||o>l+r);if(s===5)return!1;f=vu,s===1?d=o<c?l:c:d=o<c?c:l}else if(a<h){if(s===0||s===1)return!0;if(s===5)return!1;f=yu,d=h}else if(a>=u)if(s===3||s===4){if(-50<i.vy&&i.vy<50)return!1;f=yu,d=u}else return!1;if(f===xu)return!0;i.bounce_count+=1;let _;return s===3?_=Pa.RUBBER:s===2?_=Pa.PADDED:_=Pa.DEFAULT,i.bounce_count>6&&(_*=i.bounce_energy,i.bounce_energy*=dd),f===vu?(i.px=d,i.vx*=_):(i.py=d,i.vy*=_),i.sx=Zn(i.px),i.sy=Zn(i.py),!0}const $M=30;function Mu(i,t){return Math.floor(i/t)}function gi(i,t){i.score+=t,i.cash=Math.max(0,i.cash+t)}function kd(i,t,e){return t===e||i.cfg.team_mode!==qo&&t.team_id===e.team_id}function ZM(i,t,e){if(t!==null)if(kd(i,t,e))gi(t,t===e?Ky:$y);else{const n=i.cfg.scoring===Xo?qy:Yy;gi(t,n)}}function Hd(i,t,e,n,s){t===null||n<=0||i.cfg.scoring!==Xo&&(kd(i,t,e)?gi(t,-15*Math.trunc(n)):s?gi(t,Zy*Math.trunc(n)):gi(t,Math.trunc(n*$M)))}function JM(i){const t=i.tanks.filter(n=>n.alive);if(t.length===0)return;let e;if(i.cfg.scoring===Xo?e=i.tanks.length*vd:e=yd,i.cfg.team_mode===qo)for(const n of t)n.win_counter+=1,gi(n,e);else{const n=t[0].team_id,s=i.tanks.filter(a=>a.team_id===n),r=s.filter(a=>a.alive).length,o=Mu(e,Math.max(1,r));for(const a of s)a.alive?(a.win_counter+=1,gi(a,o)):gi(a,Mu(o,2))}}function QM(i,t){let e=t.cash;for(let n=0;n<t.inventory.length;n++){const s=t.inventory[n];if(s>0){const r=i.economy.unit_price(n)*Md;e+=Math.trunc(s*r)}}return e}function Su(i){const t=i.cfg.scoring===jy?n=>QM(i,n):n=>n.score,e=i.tanks.map(n=>({t:n,k:t(n)}));return e.sort((n,s)=>n.k<s.k?1:n.k>s.k?-1:0),e.map(n=>n.t)}const Eu=44100,Tu=2,jM=.28,cn=19,ai=12e3,tS=200,eS=64;function xn(i,t,e){return i<t?t:i>e?e:i}function bu(i,t,e){const n=new Float64Array(e);if(e===1)return n[0]=i,n;const s=(t-i)/(e-1);for(let r=0;r<e;r++)n[r]=i+s*r;return n[e-1]=t,n}function nS(){const i=globalThis;return i.AudioContext??i.webkitAudioContext??null}class iS{constructor(){v(this,"enabled",!0);v(this,"fly_mode","OFF");v(this,"field_height",480);v(this,"_ready",!1);v(this,"_init_failed",!1);v(this,"_ctx",null);v(this,"_mix_rate",Eu);v(this,"_mix_channels",Tu);v(this,"_tone_cache",new Map);v(this,"_sweep_cache",new Map);v(this,"_seq_cache",new Map);v(this,"_fly_source",null);v(this,"_fly_freq",0);v(this,"_fly_launch_y",null)}init(){if(this._ready)return!0;if(this._init_failed)return!1;const t=nS();if(t===null)return this._init_failed=!0,!1;try{const e=new t;return this._ctx=e,this._mix_rate=e.sampleRate||Eu,this._mix_channels=Tu,this._ready=!0,!0}catch{return this._init_failed=!0,!1}}_square_wave(t,e,n,s){const r=new Float64Array(e);if(s==null||s===t)for(let o=0;o<e;o++){const a=o/n,c=2*Math.PI*t*a;r[o]=Math.sign(Math.sin(c))}else{const o=e/n,a=o>0?(s-t)/o:0;for(let c=0;c<e;c++){const l=c/n,h=2*Math.PI*(t*l+.5*a*l*l);r[c]=Math.sign(Math.sin(h))}}return r}_envelope(t,e,n){const s=Math.max(1,Math.trunc(n*.003));if(e>2*s){const r=bu(0,1,s),o=bu(1,0,s);for(let a=0;a<s;a++)t[a]=t[a]*r[a],t[e-s+a]=t[e-s+a]*o[a]}return t}_finish(t,e){const n=new Int16Array(e);for(let s=0;s<e;s++)n[s]=Math.trunc(t[s]*jM*32767);return n}_square_array(t,e,n){const s=this._mix_rate,r=Math.max(1,Math.trunc(s*e/1e3)),o=this._envelope(this._square_wave(t,r,s,n),r,s);return this._finish(o,r)}_seq_array(t){const e=this._mix_rate,n=[];for(const o of t){const a=o[0],c=o[1],l=o.length>2?o[2]:null,h=Math.max(1,Math.trunc(e*c/1e3));if(a<cn&&(l===null||l<cn)){n.push(new Float64Array(h));continue}const u=xn(a,cn,ai),f=l===null?null:xn(l,cn,ai);n.push(this._envelope(this._square_wave(u,h,e,f),h,e))}let s=0;for(const o of n)s+=o.length;let r;if(s===0)r=new Float64Array(1);else{r=new Float64Array(s);let o=0;for(const a of n)r.set(a,o),o+=a.length}return this._finish(r,r.length)}_buffer(t){const e=this._ctx;if(e===null)return null;const n=t.length;try{const s=e.createBuffer(this._mix_channels,n,this._mix_rate);for(let r=0;r<this._mix_channels;r++){const o=s.getChannelData(r);for(let a=0;a<n;a++)o[a]=t[a]/32768}return s}catch{return null}}_tone_buffer(t,e){if(!this.init())return null;const n=Math.trunc(xn(t,cn,ai)),s=Math.trunc(Math.max(1,e)),r=`${n}:${s}`;let o=this._tone_cache.get(r);if(o===void 0){const a=this._buffer(this._square_array(n,s));if(a===null)return null;o=a,this._tone_cache.set(r,o)}return o}_sweep_buffer(t,e,n){if(!this.init())return null;const s=Math.trunc(xn(t,cn,ai)),r=Math.trunc(xn(e,cn,ai)),o=Math.trunc(Math.max(1,n)),a=`${s}:${r}:${o}`;let c=this._sweep_cache.get(a);if(c===void 0){const l=this._buffer(this._square_array(s,o,r));if(l===null)return null;c=l,this._sweep_cache.set(a,c)}return c}_seq_buffer(t){if(!this.init())return null;const e=JSON.stringify(t);let n=this._seq_cache.get(e);if(n===void 0){const s=this._buffer(this._seq_array(t));if(s===null)return null;n=s,this._seq_cache.set(e,n)}return n}_play_buffer(t){const e=this._ctx;if(t===null||e===null)return null;try{e.state==="suspended"&&typeof e.resume=="function"&&e.resume();const n=e.createBufferSource();return n.buffer=t,n.connect(e.destination),n.start(),n}catch{return null}}beep(t,e,n){!(n===void 0?this.enabled:n)||t<cn||this._play_buffer(this._tone_buffer(t,e))}_play_sweep(t,e,n){this._play_buffer(this._sweep_buffer(t,e,n))}_play_tones(t,e){e&&this._play_buffer(this._seq_buffer(t))}play(t,e,n){const s=e===void 0?this.enabled:e;if(s){if(t==="fire"){const r=[];for(let o=0;o<100;o+=15)r.push([o,14]);return this._play_tones(r,s)}if(t==="explosion"||t==="nuke"){const r=Number(n?.size??20)||20,o=Math.trunc(xn(4+r/8,4,14)),a=Math.trunc(xn(22+r*.4,22,60)),c=[];for(let l=0;l<o;l++)c.push([l%2===0?200:100,a]);return this._play_tones(c,s)}if(t==="plasma"){const r=[];for(let o=1;o<10;o++)r.push([o*1e3,16]);for(let o=1;o<10;o++)r.push([(10-o)*1e3,16]);return this._play_tones(r,s)}if(t==="shield_collapse"){const r=this._sweep_steps(6e3,-100,51,6);return r.push([1e3,40]),this._play_tones(r,s)}if(t==="shield_deploy")return this._play_tones(this._sweep_steps(1e3,100,51,6),s);if(t==="shield_hit")return this.beep(900,40,s);if(t==="throe_front"){const r=[];let o=1e3;for(let a=0;a<40;a++)r.push([o,12]),o+=200,o>4e3&&(o=1e3);return this._play_tones(r,s)}if(t==="throe_thud")return this._play_tones([[100,90]],s);if(t==="sink")return this._play_tones(this._sweep_steps(5e3,-200,24,10),s);if(t==="death"){const r=[];for(let o=10;o<20;o++)r.push([20,22]),r.push([0,(o-10)*-2+25]);return this._play_tones(r,s)}if(t==="battery")return this._play_tones([[100,22],[200,28],[100,34]],s);if(t==="parachute")return this.beep(2e3,48,s);if(t==="dirt_settle")return this._play_tones([[30,18],[30,18],[20,30]],s);if(t==="teleport"){const r=[];let o=1000n;for(let a=0;a<12;a++)o=o*1103515245n+12345n&0x7fffffffn,r.push([Number(o%100n)*100+1e3,10]);return this._play_tones(r,s)}if(t==="lightning")return this.beep(2e3,70,s);if(t==="thunder")return this._play_tones([[70,24],[40,30],[90,22],[50,28]],s);if(t==="laser")return this._play_sweep(1e3,6e3,90);if(t==="bounce"||t==="fizzle"||t==="mirv")return t==="bounce"?this.beep(520,36,s):t==="mirv"?this.beep(700,30,s):this.beep(300,40,s);if(t==="victory")return this._play_sweep(5e3,15e3,260);if(t==="ui_beep")return this.beep(tS,eS,s);if(t==="turn"||t==="menu_move"||t==="select")return this.beep(20,70,s);if(t==="dialog_open"||t==="dialog_close")return t==="dialog_open"?this._play_sweep(260,720,150):this._play_sweep(720,260,150)}}_sweep_steps(t,e,n,s){const r=[];let o=t;for(let a=0;a<n;a++)r.push([Math.trunc(xn(o,cn,ai)),s]),o+=e;return r}set_launch_y(t){this._fly_launch_y=t}_fly_freq_for(t,e){if(t==="POS"){const s=e.sy??0;let o=((this._fly_launch_y!==null?this._fly_launch_y:0)-s)*8+1e3;return o<50&&(o=50),Math.trunc(xn(o,cn,ai))}const n=Math.hypot(e.vx??0,e.vy??0);return Math.trunc(xn(n,cn,ai))}start_fly(t,e){const n=e===void 0?this.enabled:e,s=(t!==void 0?t:this.fly_mode)||"OFF";if(this.fly_mode=s,!n||s==="OFF"||!this.init())return;const r=this._tone_buffer(300,60),o=this._ctx;if(!(r===null||o===null))try{const a=o.createBufferSource();a.buffer=r,a.loop=!0,a.connect(o.destination),a.start(),this._fly_source=a,this._fly_freq=300}catch{this._fly_source=null}}fly_tone(t,e,n){const s=n===void 0?this.enabled:n,r=t||"OFF";if(this.fly_mode=r,!s||r==="OFF"){this.stop_fly();return}if(!this.init()||this._fly_source===null&&(this.start_fly(r,s),this._fly_source===null))return;const o=this._fly_freq_for(r,e);if(o!==this._fly_freq){const a=this._tone_buffer(o,60),c=this._ctx;if(a!==null&&c!==null){try{this._fly_source!==null&&this._fly_source.stop()}catch{}try{const l=c.createBufferSource();l.buffer=a,l.loop=!0,l.connect(c.destination),l.start(),this._fly_source=l,this._fly_freq=o}catch{}}}}stop_fly(){if(this._fly_source!==null)try{this._fly_source.stop()}catch{}this._fly_source=null,this._fly_freq=0}}const Yt=new iS;function $o(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}const sS=Tl;function rS(i){return[i.x,i.y]}function oS(i,t){if(i.shield_hp!==0&&t!==0){if(t<i.shield_hp)return i.shield_hp-=t,[0,t];const e=t-i.shield_hp,n=i.shield_hp;return i.shield_hp=0,i.shield_item=0,[e,n]}return[t,0]}function Wi(i,t,e){if(e=Math.trunc(e),t===null||e<=0||!t.alive)return;const n=i.current_shooter;if(n!==null){const o=n.player_index;t.hits_this_round[o]=(t.hits_this_round[o]??0)+1,t.hits_career[o]=(t.hits_career[o]??0)+1}const[s,r]=oS(t,e);r>0&&t.shield_hp===0&&Yt.play("shield_collapse",i.cfg.is_on("SOUND")),r>0&&(Hd(i,n,t,r,!0),t.shield_hp>0),s>0&&Rl(i,t,s,!1)}function Rl(i,t,e,n=!0){e=Math.trunc(e),!(e<=0||!t.alive)&&(n&&Hd(i,i.current_shooter,t,e,!1),t.health-=e,t.health<=0&&(t.health=0,aS(i,t)))}function Au(i,t,e){Rl(i,t,e,!1)}function aS(i,t,e=null){t.alive&&(t.alive=!1,t.health=0,e===null&&(e=i.current_weapon??null),i.on_tank_destroyed(t,e))}function en(i,t,e,n,s=!0){if(n=Math.trunc(n),!(n<=0)){s&&(i.terrain.carve_circle(t,e,n),i.add_explosion(t,e,n));for(const r of i.tanks.slice()){if(!r.alive)continue;const[o,a]=rS(r),c=o-t,l=a-e,h=Math.sqrt(c*c+l*l);if(h<n){const u=$o((n-h)*Tl/n);Wi(i,r,u)}}}}function cS(i,t){t.alive&&Rl(i,t,t.health,!0)}function wu(i,t=sS){i.shield_hp>0&&(i.shield_hp=Math.max(0,i.shield_hp-Math.trunc(t)),i.shield_hp===0&&(i.shield_item=0))}function lS(i,t){const e=t.x;let n=t.y;const s=i.h-2;let r=0;for(;n<s&&!i.is_supported(e,n,t.half_width);)n+=1,r+=1;return r*_d}function hS(i,t){return!t.parachute_deployed||t.parachutes<1?!1:t.parachute_threshold===0?!0:t.parachute_threshold<lS(i,t)}function Oa(i){return Math.min(255,(Math.trunc(i)&63)<<2)}function Ee(i,t,e){return[Oa(i),Oa(t),Oa(e)]}const zd=110,Io=[[63,10,10],[35,55,10],[40,20,63],[63,63,10],[10,63,63],[63,10,63],[60,60,60],[63,40,20],[20,63,40],[0,0,63]];Io.map(i=>Ee(i[0],i[1],i[2]));const Mo=[[38,25,17],[54,36,28],[53,53,47],[20,62,20],[9,35,9],[36,54,28]],uS=30;function fS(){const i=[];for(let t=0;t<uS;t++)i.push([29-t,29-t,63]);return i}function dS(){const i=[];for(let l=0;l<256;l++)i.push([0,0,0]);i[yn]=[0,0,0];const t=[[0,0,0],[0,0,170],[0,170,0],[0,170,170],[170,0,0],[170,0,170],[170,85,0],[170,170,170],[85,85,85],[85,85,255],[85,255,85],[85,255,255],[255,85,85],[255,85,255],[255,255,85],[255,255,255]];for(let l=0;l<t.length;l++)i[l]=[t[l][0],t[l][1],t[l][2]];i[un]=Ee(Mo[0][0],Mo[0][1],Mo[0][2]);const e=i[un][0],n=i[un][1],s=i[un][2],r=Sn-Te;for(let l=Te;l<=Sn;l++){const u=.45+.55*((l-Te)/r);i[l]=[Math.trunc(e*u),Math.trunc(n*u),Math.trunc(s*u)]}for(let l=0;l<Io.length;l++){const h=Io[l];i[zd+l]=Ee(h[0],h[1],h[2])}const o=[[87,[40,40,63]],[120,[9,9,31]],[150,[50,50,50]],[151,[45,45,45]],[152,[0,0,0]],[153,[30,30,30]],[154,[40,40,63]],[155,[63,63,63]],[156,[15,15,15]],[157,[50,50,50]],[158,[5,5,5]],[159,[55,55,55]],[160,[20,60,20]],[161,[10,63,63]],[162,[45,45,45]]];for(const[l,h]of o)i[l]=Ee(h[0],h[1],h[2]);const a=fS();for(let l=0;l<a.length;l++){const h=a[l];i[Kc+l]=Ee(h[0],h[1],h[2])}const c=[252,220,120];for(let l=Da;l<=Gy;l++){let h=(l-Da)/(gd-Da);h=Math.max(0,Math.min(1,h));const u=Math.trunc(c[0]*h),f=Math.trunc(c[1]*Math.pow(h,1.4)),d=Math.trunc(c[2]*Math.pow(h,2.2));i[l]=[u,f,d]}return i[200]=Ee(60,60,60),i[203]=Ee(40,40,40),i[254]=Ee(40,15,15),i[255]=Ee(63,63,63),i[Vy]=Ee(20,60,60),i[231]=Ee(20,60,20),i[232]=Ee(20,20,60),i[xd]=[252,240,200],i}function pS(i){const t=Io.length;return zd+(i%t+t)%t}const Kc=120,Ru=149,mS=200,_S=239,gS=120,xS=149,ar=175,xs=184,$c=8,Cu=11,Po=14,Lu=18,Zc=2;function qe(i){return Math.fround(i)}class vS{constructor(t){v(this,"table");v(this,"rev");if(t===void 0&&(t=dS()),t.length!==256)throw new Error(`LiveLUT expects a (256,3) table, got length ${t.length}`);this.table=[];for(let e=0;e<256;e++){const n=t[e];if(n.length!==3)throw new Error(`LiveLUT expects a (256,3) table, got row ${e} length ${n.length}`);this.table.push([n[0]&255,n[1]&255,n[2]&255])}this.rev=0}get(t){return this.table[t]}copy_table(){const t=[];for(let e=0;e<256;e++){const n=this.table[e];t.push([n[0],n[1],n[2]])}return t}rotate_band(t,e,n=1){if(t=Math.trunc(t),e=Math.trunc(e),e<=t)return;const s=e-t+1,o=(Math.trunc(n)%s+s)%s;if(o===0)return;const a=[];for(let c=0;c<s;c++){const l=this.table[t+c];a.push([l[0],l[1],l[2]])}for(let c=0;c<s;c++){const l=((c-o)%s+s)%s;this.table[t+c]=a[l]}this.rev+=1}reramp_band(t,e,n,s){if(t=Math.trunc(t),e=Math.trunc(e),e<t)return;const r=e-t+1,o=[qe(n[0]),qe(n[1]),qe(n[2])],a=[qe(s[0]),qe(s[1]),qe(s[2])],c=[];if(r===1)c.push(qe(0));else{const h=1/(r-1);for(let u=0;u<r;u++)c.push(qe(u*h));c[r-1]=qe(1)}for(let l=0;l<r;l++){const h=c[l],u=qe(1-h),f=[0,0,0];for(let d=0;d<3;d++){const _=qe(o[d]*u),g=qe(a[d]*h),m=qe(_+g);f[d]=Math.trunc(Math.min(255,Math.max(0,m)))}this.table[t+l]=f}this.rev+=1}set_band(t,e,n){t=Math.trunc(t),e=Math.trunc(e);const s=e-t+1;for(let r=0;r<s;r++){const o=n[r];this.table[t+r]=[o[0]&255,o[1]&255,o[2]&255]}this.rev+=1}set_index(t,e){this.table[Math.trunc(t)]=[e[0]&255,e[1]&255,e[2]&255],this.rev+=1}}function yS(i){i===void 0&&(i=Mo[0]);const t=i[0],e=i[1],n=i[2],s=[];for(let r=0;r<5;r++)s.push([Math.floor(((r+1)*63+(4-r)*t)/5),Math.floor(((r+1)*20+(4-r)*e)/5),Math.floor(((r+1)*20+(4-r)*n)/5)]);for(let r=0;r<5;r++){const o=r*-5+63;s.push([o,o,63])}return s}function MS(i){return yS(i).map(t=>Ee(t[0],t[1],t[2]))}const SS=[[63,32,10],[63,0,63],[63,12,12],[63,0,30]];function Iu(i,t){const e=(Math.trunc(t)%101+101)%101,n=e<=49?e:100-e;if(i.set_index(Zc,Ee(Math.floor(n*63/50),Math.floor(n*10/50),0)),!(e&7)){let a=(e>>3&3)+1;for(let c=0;c<4;c++){const l=SS[((a-1)%4+4)%4];i.set_index($c+c,Ee(l[0],l[1],l[2])),a+=1,a>4&&(a=1)}}const s=(e>>1)%5;i.set_index(Po+s,Ee(0,0,0));const r=[15,30,45,60];let o=s;for(let a=0;a<4;a++)o+=1,o>4&&(o=0),i.set_index(Po+o,Ee(r[a],r[a],r[a]))}function Cl(i,t){return Math.sqrt(i*i+t*t)}function ES(i){return i*Math.PI/180}function Ae(i,t){return Math.abs(t.blast)*i.explosion_scale}function fs(i,t,e,n){const s=t.weapon;i.current_weapon=s;const r=s.category??"";if(s.behavior!=="tracer"&&s.behavior!=="plasma"&&r!=="nuclear"&&Yt.play("explosion",i.cfg.is_on("SOUND")),(s.category??"")==="nuclear"){TS(i,t,e,n);return}(HS[s.behavior]??cr)(i,t,e,n)}function cr(i,t,e,n){en(i,e,n,Ae(i,t.weapon))}function TS(i,t,e,n){Yt.play("nuke",i.cfg.is_on("SOUND"));const s=Ae(i,t.weapon);en(i,e,n,s,!1),i.terrain.carve_circle(Math.trunc(e),Math.trunc(n),Math.trunc(s)),i.add_explosion(Math.trunc(e),Math.trunc(n),Math.trunc(s),{nuke:!0})}function bS(i,t,e,n){const s=Ae(i,t.weapon),r=Math.trunc(Math.abs(t.weapon.blast))*10,o=t.weapon.params.scatter??15,a=[];for(let f=0;f<o;f++)a.push([i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s),i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s)]);const c=Math.max(8,s*.3),l=[[0,0],...a];let h=0,u=Math.floor(r/5);for(;u>0;){const[f,d]=l[(h%l.length+l.length)%l.length],_=Math.trunc(e+f),g=Math.trunc(n+d);en(i,_,g,c);const m=AS(i,_,g);if(m!==null&&Cl(m.x-_,m.y-g)<=c){const p=u<=10?u:10;Wi(i,m,p)}u-=50,h+=1}}function AS(i,t,e){let n=null,s=1e9;for(const r of i.tanks)if(r.alive){const o=Cl(r.x-t,r.y-e);o<s&&(n=r,s=o)}return n}function wS(i,t,e,n){const s=i.terrain;n=Math.max(1,Math.trunc(n));const r=s.column_top(t),o=h=>{let u=0;for(let f=1;f<=n;f++){const d=s.column_top(t+h*f);u=Math.max(u,r-d)}return u},a=o(-1),c=o(1),l=Math.min(a,c);return Math.max(0,Math.min(1,l/n))}function RS(i,t,e,n){const s=Ae(i,t.weapon),r=t.weapon.heat,o=t.weapon.params.deep_heat??r,a=wS(i,Math.trunc(e),Math.trunc(n),s),c=r+(o-r)*a,l=s*(1+.5*a);en(i,e,n,s,!1),i.add_explosion(Math.trunc(e),Math.trunc(n),Math.trunc(l));for(const h of i.tanks){if(!h.alive)continue;const u=Cl(h.x-e,h.y-n);u<l&&Wi(i,h,$o(c*(1-u/l)))}}function Mr(i){Yt.play("dirt_settle",i.cfg.is_on("SOUND"))}function CS(i,t,e,n){i.terrain.deposit_circle(e,n,Ae(i,t.weapon)),i.terrain.settle(i.cfg,i.rng,e-60,e+60),Mr(i)}function LS(i,t,e,n){i.terrain.deposit_circle(e,n,Ae(i,t.weapon));for(let s=0;s<3;s++)i.terrain.settle(i.cfg,i.rng,e-80,e+80);Mr(i)}function IS(i,t,e,n){const s=Math.trunc(Ae(i,t.weapon)),r=ES(35);for(let o=0;o<=s;o++){const a=Math.trunc(o*Math.tan(r))+2,c=n-o;for(let l=-a;l<=a;l++)i.terrain.is_solid(e+l,c)||i.terrain.write(e+l,c,Te+4)}Mr(i)}function PS(i,t,e,n){i.terrain.settle(i.cfg,i.rng,0,i.terrain.w),Mr(i)}function DS(i,t,e,n){i.terrain.carve_circle(e,n,Ae(i,t.weapon)),i.add_explosion(e,n,Math.trunc(Ae(i,t.weapon)),{dirt_only:!0})}const NS={"Riot Charge":45,"Riot Blast":60};function US(i,t,e,n){const s=NS[t.weapon.name]??45,r=t.owner?.angle??90;i.terrain.carve_wedge(e,n,Ae(i,t.weapon),s,r)}function OS(i,t,e,n){}function Gd(i,t,e,n){i.current_weapon=t.weapon,Yt.play("plasma",i.cfg.is_on("SOUND"));const s=Ae(i,t.weapon);en(i,e,n,s,!1),i.terrain.carve_circle(Math.trunc(e),Math.trunc(n),Math.trunc(s)),i.add_plasma_ring(e,n,s)}function Pu(i,t,e,n){}function FS(i,t,e,n){const s=Ae(i,t.weapon),r=t.weapon.params.pops??8,o=Math.max(4,s*.35);en(i,e,n,o);for(let a=0;a<r;a++){const c=i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s),l=i.rng.pick(Math.trunc(s)+1);en(i,Math.trunc(e+c),Math.trunc(n-l),o)}}function BS(i,t,e,n){const s=Math.trunc(Ae(i,t.weapon)),r=Math.max(2,Math.trunc(s/4)),o=Math.max(s,s*2),a=Math.max(0,n-o);for(let c=e-r;c<=e+r;c++)for(let l=a;l<=n;l++)i.terrain.is_solid(c,l)||i.terrain.write(c,l,Te+8);i.terrain.settle(i.cfg,i.rng,e-r-4,e+r+4),Mr(i)}function kS(i,t,e,n){Gd(i,t,e,n)}const HS={explosive:cr,funky:bS,napalm:RS,dirt_sphere:CS,dirt_slump:LS,dirt_wedge:IS,dirt_settle:PS,riot_sphere:DS,riot_wedge:US,tracer:OS,plasma:Gd,roller:cr,leapfrog:cr,mirv:cr,digger:Pu,sandhog:Pu,popcorn:FS,dirt_tower:BS,plasma_laser:kS};function zS(i,t){if(t.weapon.behavior!=="mirv"||t.split_done)return;Yt.play("mirv",i.cfg.is_on("SOUND")),t.split_done=!0,t.active=!1;const e=t.weapon.warheads,n=t.weapon.fan,s=Math.floor((e+1)/2);for(let r=0;r<e;r++){const o=n*(r-s);if(o===0)continue;const a=new Rd(t.owner,Vd(t.weapon),t.px,t.py,t.vx+o,t.vy);a.warheads_left=1,a.split_done=!0,i.projectiles.push(a)}}function Vd(i){const t=Object.assign(Object.create(Object.getPrototypeOf(i)),i);return t.behavior="explosive",t.warheads=1,t}function GS(i,t,e,n){t.state.rolling=!0,t.vx=t.vy=0;const s=i.terrain.column_top(e-3),r=i.terrain.column_top(e+3);t.state.dir=r>s?1:-1,t.px=e,t.py=i.terrain.column_top(e)-1}function VS(i,t){const e=i.terrain,n=t.state.dir,s=Math.trunc(t.px)+n;if(s<=1||s>=e.w-1)return Fa(i,t);const r=e.column_top(s),o=e.column_top(Math.trunc(t.px));for(const a of i.tanks)if(a.alive&&Math.abs(a.x-s)<=a.half_width)return Fa(i,t);if(r>o+6)t.px=s,t.py=r-1;else{if(r<o-1)return Fa(i,t);t.px=s,t.py=r-1}return t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py),!0}function Fa(i,t){return fs(i,t,Math.trunc(t.px),Math.trunc(t.py)),t.active=!1,!1}function WS(i,t,e,n){t.state.tunneling=!0,t.state.depth=0,t.state.max_depth=Math.abs(t.weapon.blast);const s=Math.abs(t.weapon.blast);t.state.bore_half=Math.max(5,Math.trunc(s/2)),t.px=e,t.py=n,t.vx=t.vy=0}function Wd(i,t,e,n){const s=i.terrain,r=ar,o=xs-r;for(let a=-n;a<=n;a++)s.write(t+a,e,yn);{let a=0;for(let c=n;c<=n+2;c++,a++){const l=Math.min(xs,r+a);s.is_solid(t+c,e)&&s.write(t+c,e,l),s.is_solid(t-c,e)&&s.write(t-c,e,l)}}{const a=Math.min(n+1,o+1);let c=0;for(let l=0;l<a;l++,c++){const h=Math.min(xs,r+c);s.is_solid(t+l,e+1)&&s.write(t+l,e+1,h),s.is_solid(t-l,e+1)&&s.write(t-l,e+1,h)}}i.start_digger_cycle!==void 0&&i.start_digger_cycle()}function XS(i,t){const e=i.terrain,n=Math.trunc(t.px),s=Math.trunc(t.py);return Wd(i,n,s,t.state.bore_half??3),t.state.depth=t.state.depth+1,t.py+=1,t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py),t.state.depth>=t.state.max_depth||t.py>=e.h-2?(t.active=!1,!1):!0}function qS(i,t,e,n){t.state.tunneling=!0,t.state.depth=0,t.state.start_y=n,t.state.warheads=t.weapon.warheads;const s=ZS(i,t.owner);t.state.target_x=s?s.x:e,t.px=e,t.py=n,t.vx=t.vy=0}function YS(i,t){const e=i.terrain,n=Math.trunc(t.px),s=Math.trunc(t.py);Wd(i,n,s,2);const r=t.state.target_x;t.px+=r>n?1:r<n?-1:0,t.py+=1,t.state.depth=t.state.depth+1,t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py);for(const o of i.tanks)if(o.alive&&Math.abs(o.x-Math.trunc(t.px))<=o.half_width&&t.py>=o.y){const a=Math.max(1,t.state.depth),c=Math.max(0,o.y-t.state.start_y);if(c<a){i.current_weapon=t.weapon;const l=$o((a-c)*Tl/a);Wi(i,o,l)}if(t.state.warheads=t.state.warheads-1,t.state.warheads<=0)return t.active=!1,!1}return t.py>=e.h-2||t.state.depth>200?(t.active=!1,!1):!0}const KS=40;function $S(i,t){i.current_weapon=t.weapon,Yt.play("laser",i.cfg.is_on("SOUND"));let e=t.state.energy??50;const n=Math.atan2(t.vy,t.vx),s=Math.cos(n),r=-Math.sin(n);let o=t.px,a=t.py;const c=[],l=new Set;for(;e>=1&&0<=o&&o<i.terrain.w&&0<=a&&a<i.terrain.h;){const h=Math.trunc(o),u=Math.trunc(a);c.push([h,u]),i.terrain.is_dirt(h,u)&&i.terrain.write(h,u,yn);for(const f of i.tanks)if(f.alive&&!l.has(f)&&Math.abs(f.x-h)<=f.half_width&&Math.abs(f.y-4-u)<=6){if(f.shield_laserproof&&f.shield_hp>0){e=0;break}Wi(i,f,Math.max(1,Math.floor(e/5))),l.add(f)}o+=s,a+=r,e-=KS}t.trail=c,i.add_beam(c),t.active=!1}function ZS(i,t){for(const e of i.tanks)if(e.alive&&e!==t)return e;return null}const ro=new Uint8Array([77,84,190,239]),Qs=24;function vn(i,t){return i[t]|i[t+1]<<8}function JS(i,t){return i[t]<<8|i[t+1]}function QS(i,t="<mtn>"){if(i.length<Qs||!jS(i)){const _=Array.from(i.subarray(0,4));throw new Error(`${t}: bad MTN magic ${JSON.stringify(_)}`)}const e=JS(i,4),n=vn(i,6),s=vn(i,8),r=vn(i,10),o=vn(i,12),a=vn(i,14),c=vn(i,16),l=vn(i,18),h=vn(i,20),u=vn(i,22),f=Qs+o*3;if(i.length<f)throw new Error(`${t}: truncated palette`);const d=[];for(let _=0;_<o;_++){const g=Qs+_*3;d.push([i[g],i[g+1],i[g+2]])}return{version:e,width:n,height:r,xoff:s,ncolors:o,sky_index:c,palette:d,header_extra:[a,l,h,u],palette_offset:Qs,body_offset:Qs+o*3}}function jS(i){return i[0]===ro[0]&&i[1]===ro[1]&&i[2]===ro[2]&&i[3]===ro[3]}function tE(i,t="<mtn>"){const e=QS(i,t),n=e.width,s=e.height;let r=e.body_offset;const o=new Int32Array(n),a=[];for(let l=0;l<n;l++){if(r+2>i.length)throw new Error(`${t}: underrun reading count for column ${l}`);const h=vn(i,r);if(r+=2,h>s)throw new Error(`${t}: column ${l} count ${h} exceeds height ${s}`);const u=h+1>>1;if(r+u>i.length)throw new Error(`${t}: underrun reading pixels for column ${l}`);const f=new Int16Array(h);for(let d=0;d<u;d++){const _=i[r+d],g=d*2;g<h&&(f[g]=_&15);const m=g+1;m<h&&(f[m]=_>>4&15)}r+=u,a.push(f),o[l]=h}const c=i.length-r;if(c!==0)throw new Error(`${t}: ${c} trailing bytes after ${n} columns (over/underrun)`);return{hdr:e,counts:o,columns:a}}function eE(i,t="<mtn>"){const{hdr:e,counts:n,columns:s}=tE(i,t),r=e.width,o=e.height,a=e.sky_index,c=new Int32Array(r);for(let u=0;u<r;u++)c[u]=o-n[u];const l=new Set;for(const u of s)for(let f=0;f<u.length;f++)l.add(u[f]);l.delete(a);const h=Array.from(l).sort((u,f)=>u-f);return{surface:c,counts:n.slice(),height:o,width:r,xoff:e.xoff,sky_indices:[a],ground_indices:h}}function nE(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}function ci(i){return Math.trunc(i)}function iE(i,t,e){const n=new Float64Array(e);if(e<=0)return n;if(e===1)return n[0]=i,n;const s=(t-i)/(e-1);for(let r=0;r<e;r++)n[r]=i+r*s;return n[e-1]=t,n}function sE(i,t,e){const n=t.length,s=new Float64Array(i.length),r=t[0],o=t[n-1],a=e[0],c=e[n-1];for(let l=0;l<i.length;l++){const h=i[l];if(h<=r){s[l]=a;continue}if(h>=o){s[l]=c;continue}let u=0,f=n;for(;u<f;){const g=u+f>>>1;t[g]<=h?u=g+1:f=g}let d=u-1;if(d<0&&(d=0),d>=n-1){s[l]=c;continue}const _=(e[d+1]-e[d])/(t[d+1]-t[d]);s[l]=_*(h-t[d])+e[d]}return s}class rE{constructor(t,e){v(this,"w");v(this,"h");v(this,"grid");this.w=t,this.h=e,this.grid=new Uint8Array(t*e)}read(t,e){return 0<=t&&t<this.w&&0<=e&&e<this.h?this.grid[t*this.h+e]:yn}write(t,e,n){0<=t&&t<this.w&&0<=e&&e<this.h&&(this.grid[t*this.h+e]=n)}is_dirt(t,e){return Wy(this.read(t,e))}is_solid(t,e){return Xy(this.read(t,e))}drop_to_footprint(t,e){return Math.max(2,Math.min(this.h-2,this.column_top(t)-1))}column_top(t){if(!(0<=t&&t<this.w))return this.h;const e=this.h,n=t*e,s=this.grid,r=c=>{const l=s[n+c];return l===un||l>=Te&&l<=Sn};if(!r(0)){const c=this._argmaxSolid(n,0,e,!1);return r(c)?c:e}const o=this._argmaxSolid(n,0,e,!0);if(r(o))return e;const a=this._argmaxSolid(n,o,e,!1);return r(a)?a:e}_argmaxSolid(t,e,n,s){const r=this.grid;for(let o=e;o<n;o++){const a=r[t+o],c=a===un||a>=Te&&a<=Sn;if(s?!c:c)return o}return e}generate(t,e,n){this.grid.fill(yn);let s=null;if(n&&n.length>0){const r=Math.max(ci(t.MTN_PERCENT),60);if(e.chance(r,100)){const o=n[e.pick(n.length)];s=this._from_mtn(o,e)}}s===null&&(s=this._midpoint(t,e)),this._rasterize(s,e)}_midpoint(t,e){const n=this.w,s=this.h,r=new Array(n).fill(0);let o,a;t.is_on("RANDOM_LAND")?(o=100,a=!1):(o=t.LAND1,t.LAND2,a=t.is_on("FLATLAND"));const c=s*.55,l=(.45+o/100*.45)*s;r[0]=c,r[n-1]=c;const h=l,u=(g,m,p)=>{if(m-g<2)return;const T=Math.floor((g+m)/2);r[T]=(r[g]+r[m])/2+e.uniform(-1,1)*p,u(g,T,p*.58),u(T,m,p*.58)};u(0,n-1,h);const f=s*.05,d=s-2,_=s*.28;for(let g=0;g<n;g++){let m=r[g];a&&m<_&&(m=_),r[g]=Math.min(d,Math.max(f,m))}return r}_from_mtn(t,e){const n=eE(t.data,t.name),s=n.surface,r=n.width,o=new Float64Array(r);for(let d=0;d<r;d++)o[d]=s[d];let a;if(r>=this.w){const d=e.pick(r-this.w+1);a=o.subarray(d,d+this.w)}else{const d=iE(0,r-1,this.w),_=new Float64Array(r);for(let g=0;g<r;g++)_[g]=g;a=sE(d,_,o)}const c=this.h*.12,l=this.h-2;let h=1/0,u=-1/0;for(let d=0;d<a.length;d++){const _=a[d];_<h&&(h=_),_>u&&(u=_)}h=h,u=u;const f=new Array(a.length);if(u-h<1e-6){const d=c+.6*(l-c);for(let _=0;_<a.length;_++)f[_]=d}else{const d=u-h,_=l-c;for(let g=0;g<a.length;g++){const m=(a[g]-h)/d;f[g]=c+m*_}}return f}_rasterize(t,e){const n=this.h,s=Sn,r=Te+8,o=Te+3,a=this.grid;for(let c=0;c<this.w;c++){const l=Math.max(0,Math.min(n-1,nE(t[c]))),h=n-l;if(h<=0)continue;const u=c*n;for(let _=l;_<n;_++)a[u+_]=r;const f=l+Math.floor(h*2/3);if(f<n)for(let _=f;_<n;_++)a[u+_]=o;const d=Math.min(n,l+2);for(let _=l;_<d;_++)a[u+_]=s}}_circleRect(t,e,n){const s=Math.max(0,t-n),r=Math.min(this.w,t+n+1),o=Math.max(0,e-n),a=Math.min(this.h,e+n+1);return s>=r||o>=a?null:[s,r,o,a]}clear_index_band(t,e,n=null){const s=n===null?yn:n,r=this.grid;for(let o=0;o<r.length;o++){const a=r[o];a>=t&&a<=e&&(r[o]=s)}}carve_circle(t,e,n){const s=ci(n),r=this._circleRect(t,e,s);if(!r)return;const[o,a,c,l]=r,h=s*s,u=this.h,f=this.grid;for(let d=o;d<a;d++){const _=d-t,g=_*_,m=d*u;for(let p=c;p<l;p++){const T=p-e;if(g+T*T<=h){const A=f[m+p];(A===un||A>=Te&&A<=Sn)&&(f[m+p]=yn)}}}}deposit_circle(t,e,n){const s=ci(n),r=this._circleRect(t,e,s);if(!r)return;const[o,a,c,l]=r,h=s*s,u=Te+8,f=this.h,d=this.grid;for(let _=o;_<a;_++){const g=_-t,m=g*g,p=_*f;for(let T=c;T<l;T++){const A=T-e;m+A*A<=h&&(d[p+T]=u)}}}level_under_tank(t,e,n){const s=Math.max(0,t-n),r=Math.min(this.w,t+n+1);if(s>=r)return;const o=this.h,a=Math.max(0,Math.min(o-1,ci(e))),c=Te+8,l=Math.max(8,2*n+2),h=this.grid,u=f=>f===un||Te<=f&&f<=Sn;for(let f=s;f<r;f++){const d=f*o;let _=a;const g=Math.max(0,a-l);for(;_>=g&&u(h[d+_]);)h[d+_]=yn,_-=1;_=a+1;const m=Math.min(o,a+1+l);for(;_<m&&!u(h[d+_]);)h[d+_]=c,_+=1}}carve_wedge(t,e,n,s=45,r=90){const o=.017453292519943295,a=57.29577951308232,c=(r-s)*o,l=(r+s)*o,h=Math.max(1,ci((l-c)*a)),u=ci(n);for(let f=0;f<=h;f++){const d=c+(l-c)*f/h,_=Math.cos(d),g=-Math.sin(d);for(let m=1;m<=u;m++){const p=ci(t+_*m),T=ci(e+g*m);this.is_dirt(p,T)&&this.write(p,T,yn)}}}settle(t,e,n=0,s=null){const r=100-t.SUSPEND_DIRT;if(r<=0||r!==100&&!e.chance(r,100))return;let o=s===null?this.w:s,a=Math.max(0,n);o=Math.min(this.w,o);for(let c=a;c<o;c++)this._settle_column(c)}_settle_column(t){const e=this.h,n=t*e,s=this.grid,r=a=>{const c=s[n+a];return c===un||c>=Te&&c<=Sn};let o=0;for(;o<e;){if(!r(o)){o+=1;continue}const a=o;for(;o<e&&r(o);)o+=1;const c=o;if(c>=e)return;let h=c;for(;h<e&&!r(h);)h+=1;const u=h-c;if(u<=0)return;const f=c-a,d=new Uint8Array(f);for(let _=0;_<f;_++)d[_]=s[n+a+_];for(let _=a;_<c;_++)s[n+_]=yn;for(let _=0;_<f;_++)s[n+a+u+_]=d[_];return}}support_count(t,e,n){let s=0;const r=e+1;for(let o=-n;o<=n;o++)this.is_solid(t+o,r)&&(s+=1);return s}is_supported(t,e,n){const s=e+1;let r=0;for(let o=-n;o<=n;o++)this.is_solid(t+o,s)&&(r+=1);if(r>=Fy)return!0;for(const o of[-1,0,1])if(this.is_solid(t+o,s))return!0;return!1}}function oo(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}class oE{constructor(t){v(this,"cfg");v(this,"n");v(this,"price");v(this,"demand_tally");v(this,"nobuy");v(this,"demand_ema");v(this,"ratio_ema");v(this,"available");this.cfg=t,this.n=vi,this.price=me.map(e=>e.cost),this.demand_tally=new Array(this.n).fill(0),this.nobuy=new Array(this.n).fill(0),this.demand_ema=new Array(this.n).fill(.1),this.ratio_ema=new Array(this.n).fill(.1),this.available=new Array(this.n).fill(!0)}refresh_availability(){const t=this.cfg.ARMS;this.cfg.is_on("USELESS_ITEMS");for(let e=0;e<me.length;e++){const s=me[e].arms<=t;this.available[e]=s}}unit_price(t){const e=me[t].bundle||1;return this.price[t]/e}buy(t,e){if(!this.available[e]||t.inventory[e]>=Na)return!1;const n=this.price[e];return t.cash<n?!1:(t.cash-=n,this.demand_tally[e]+=1,t.inventory[e]+=me[e].bundle,t.inventory[e]>Na&&(t.inventory[e]=Na),!0)}sell(t,e,n){if(n=Math.min(n,t.inventory[e]),n<=0)return 0;const s=this.cfg.is_on("FREE_MARKET")?Qy:Md,r=me[e].bundle||1,o=oo(this.price[e]*n*s/r);return t.inventory[e]-=n,this.credit(t,o),o}credit(t,e){t.cash=Math.max(0,t.cash+e)}market_update(t){if(!this.cfg.is_on("FREE_MARKET"))return;const e=.7;for(let n=0;n<me.length;n++){const s=me[n];if(!this.available[n])continue;const r=this.demand_tally[n];this.nobuy[n]=r?0:this.nobuy[n]+1,this.demand_ema[n]=(1-e)*r/Math.max(1,t)+this.demand_ema[n]*e;const o=s.cost||1,a=(this.price[n]/o)**2/10;this.ratio_ema[n]=this.ratio_ema[n]*e+(1-e)*a,this.price[n]=oo(this.price[n]*(1+Jy*(this.demand_ema[n]-this.ratio_ema[n]))),this.price[n]=Math.max(1,this.price[n]),this.demand_tally[n]=0}}annuity_price(t,e){const n=this.cfg.INTEREST_RATE,s=me[t].cost;if(n===0||e<=0)return s;const r=(1+n-(1+n)**-e)/n;return oo(s*r)}update_repeated_use(t){const e=or;this.price[e]=this.annuity_price(e,t)}accrue_interest(t){const e=this.cfg.INTEREST_RATE;if(e!==0)for(const n of t)(n.alive??!0)&&n.cash>0&&this.credit(n,oo(n.cash*e))}}const Le=624,ao=397,Ba=2567483615,ka=2147483648,Ha=2147483647;class Xd{constructor(t){v(this,"mt",new Uint32Array(Le));v(this,"mti",Le+1);t!==void 0&&this.seed(t)}initGenrand(t){this.mt[0]=t>>>0;for(let e=1;e<Le;e++){const n=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=Math.imul(1812433253,n)+e>>>0}this.mti=Le}initByArray(t){this.initGenrand(19650218);let e=1,n=0,s=Math.max(Le,t.length);for(;s;s--){const r=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=((this.mt[e]^Math.imul(r,1664525))>>>0)+t[n]+n>>>0,e++,n++,e>=Le&&(this.mt[0]=this.mt[Le-1],e=1),n>=t.length&&(n=0)}for(s=Le-1;s;s--){const r=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=((this.mt[e]^Math.imul(r,1566083941))>>>0)-e>>>0,e++,e>=Le&&(this.mt[0]=this.mt[Le-1],e=1)}this.mt[0]=2147483648}seed(t){let e=BigInt(Math.abs(Math.trunc(t)));const n=[];if(e===0n)n.push(0);else for(;e>0n;)n.push(Number(e&0xffffffffn)),e>>=32n;this.initByArray(n)}genrandUint32(){if(this.mti>=Le){const e=this.mt;let n,s=0;for(;s<Le-ao;s++)n=(e[s]&ka|e[s+1]&Ha)>>>0,e[s]=(e[s+ao]^n>>>1^(n&1?Ba:0))>>>0;for(;s<Le-1;s++)n=(e[s]&ka|e[s+1]&Ha)>>>0,e[s]=(e[s+(ao-Le)]^n>>>1^(n&1?Ba:0))>>>0;n=(e[Le-1]&ka|e[0]&Ha)>>>0,e[Le-1]=(e[ao-1]^n>>>1^(n&1?Ba:0))>>>0,this.mti=0}let t=this.mt[this.mti++];return t^=t>>>11,t=(t^t<<7&2636928640)>>>0,t=(t^t<<15&4022730752)>>>0,t^=t>>>18,t>>>0}getrandbits(t){if(t<=0)throw new RangeError("number of bits must be greater than zero");if(t<=32)return this.genrandUint32()>>>32-t;let e=0,n=0,s=t;for(;s>0;){const r=s<32?s:32,o=this.genrandUint32()>>>32-r;e+=o*Math.pow(2,n),n+=32,s-=32}return e}randbelow(t){if(t<=0)return 0;const e=32-Math.clz32(t);let n=this.getrandbits(e);for(;n>=t;)n=this.getrandbits(e);return n}pick(t){return t<=0?0:this.randbelow(t)}chance(t,e){return this.randbelow(e)<t}random(){const t=this.genrandUint32()>>>5,e=this.genrandUint32()>>>6;return(t*67108864+e)/9007199254740992}uniform(t,e){return t+(e-t)*this.random()}roulette(t){let e=0;for(const r of t)e+=r;if(e<=0)return this.randbelow(t.length);const n=this.uniform(0,e);let s=0;for(let r=0;r<t.length;r++)if(s+=t[r],n<=s)return r;return t.length-1}}const Sr=new Xd;function qd(i,t){return Math.floor(i/t)}const Du=13,Nu=10,Uu=7,aE=[1,4],cE=[1,2],lE=30,hE=30,uE=[255,255,255],fE=2,dE=4,Ou=8,Fu=8,pE=6,mE=[230,230,235],_E=10,gE=6,Bu=["PLAIN","STORMY","STARS","SHADED","SUNSET","CAVERN"],xE=["STORMY"];function Ll(i,t){const e=(i.SKY||"PLAIN").toUpperCase();return e==="RANDOM"?Bu[t.pick(Bu.length)]:e}function vE(i){return xE.indexOf((i||"").toUpperCase())!==-1}function Jc(i,t,e,n,s=null){s===null&&(s=[0]);const r=[],o=[[Math.trunc(i),Math.trunc(t)]];let a=i,c=t,l=0;for(;c!==e&&l<4096;){l+=1;const h=e-c,u=Math.abs(h)<=12?h:h>0?12:-12,f=c+u,d=Math.abs(h),_=n.pick(d+1)-(d>>1),g=a+qd(_*u,Math.max(1,d));if(o.push([Math.trunc(g),Math.trunc(f)]),s[0]<Du&&n.pick(Nu)>Uu){s[0]+=1;for(const m of Jc(g,f,e,n,s))r.push(m);if(s[0]<Du&&n.pick(Nu)>Uu){s[0]+=1;for(const m of Jc(g,f,e,n,s))r.push(m)}}a=g,c=f}return[o,...r]}function yE(i,t,e){const n=Math.max(2,qd(i.w,16));let s=t+i.rng.pick(2*n+1)-n;return s=Math.max(0,Math.min(i.w-1,s)),Jc(s,0,Math.trunc(e),i.rng)}function ME(i){let t=i.live_sky??null;if(t==null&&(t=Ll(i.cfg,i.rng),i.live_sky=t),!vE(t))return null;const[e,n]=aE;if(!i.rng.chance(e,n)){const[l,h]=cE;return i.rng.chance(l,h)&&SE(i),null}const s=i.tanks.filter(l=>l.alive);if(s.length===0)return null;const r=s[i.rng.pick(s.length)],o=r.x,a=r.y-4,c=yE(i,o,a);return TE(i,c),Yt.play("lightning",i.cfg.is_on("SOUND")),typeof i.add_flash=="function"&&i.add_flash(lE,hE,uE),i.cfg.is_on("HOSTILE_ENVIRONMENT")&&EE(i,o,a),c}function SE(i){if(typeof i.add_flash!="function")return;Yt.play("thunder",i.cfg.is_on("SOUND"));const t=i.rng.pick(dE)+fE,e=Ou+Fu+pE;for(let n=0;n<t;n++)i.add_flash(Ou,Fu,mE,n*e)}function EE(i,t,e){for(const n of i.tanks.slice())n.alive&&Math.abs(n.x-t)<=n.half_width+gE&&n.y-4>=e-4&&Wi(i,n,_E)}function TE(i,t){Array.isArray(i.active_bolts)||(i.active_bolts=[]);for(const e of t)e.length>=2&&i.active_bolts.push({pts:e,frame:0})}function bE(i,t=6){const e=i.active_bolts??null;if(!(!e||e.length===0)){for(const n of e)n.frame+=1;i.active_bolts=e.filter(n=>n.frame<=t)}}const AE=10;function wE(i){if((i.live_sky||Ll(i.cfg,i.rng)).toUpperCase()!=="CAVERN")return 0;const e=Math.min(AE,i.terrain.h),n=Te+8,s=Sn,r=i.terrain;for(let o=0;o<r.w;o++){for(let a=0;a<e;a++)r.write(o,a,n);e>=1&&r.write(o,e-1,s)}return e}const RE=40,CE=20,Yd=20,Kd=40,$d=75,LE=8,IE=24,Zd=6,PE=2,DE=6,NE=7,UE=18,ku=2,OE=22;function FE(i,t=null){if(t!==null){const n=Ae(i,t);if(n&&n>0)return Math.trunc(n)}const e=i.explosion_scale??1;return Math.trunc(UE*e)}function Jd(i,t){return Math.max(1,Math.trunc(t*(i.explosion_scale??1)))}function Qd(i,t,e=!1){const n=i.cfg,r=n!==void 0&&n.is_on("ICON_BAR")?OE:ku,o=Math.max(ku,r)+NE;if(i.add_death_fountain===void 0){i.add_explosion(Math.max(0,Math.min(i.w-1,t.x)),t.y,PE,{dirt_only:!0});return}i.add_death_fountain(t.x,t.y,o,{color:t.color??15,stride:DE,scatter:e?3:1})}function jd(i,t,e){en(i,t.x,t.y,e,!0)}function BE(i,t,e=null){const n=i.death_queue;if(n===void 0){const s=tp(i);return WE(i,t,s),s}return n.push({kind:"throe",tank:t,stage:"start",roll:null,tick:0,sub:0}),null}function kE(i,t,e=null){const n=i.death_queue,s=FE(i,e);if(n===void 0){Qd(i,t,!1),jd(i,t,s);return}n.push({kind:"ascension",tank:t,stage:"climb",radius:s,tick:0,spawned:!1})}function tp(i){const t=i.cfg,e=t!==void 0&&!!(t.SUSPEND_DIRT??0);let n=i.rng.pick(11);for(;e&&n===8;)n=i.rng.pick(11);return n}function HE(i){const t=[],e=i.death_queue;if(e===void 0||e.length===0)return t;let n=0;for(;e.length>0&&n<64&&(n+=1,!(i.projectiles!==void 0&&i.projectiles.length>0));){const s=e[0];if(s.kind==="ascension"){if(!zE(i,s,t))break}else if(!GE(i,s,t))break;e.length>0&&e[0]===s&&s.stage==="done"&&e.shift()}return t}function zE(i,t,e){if(t.stage==="climb"){if(t.spawned||(t.spawned=!0,Qd(i,t.tank,!1),e.push(["climb",null])),i.death_fountains!==void 0&&i.death_fountains.length>0)return!1;t.stage="blast"}return t.stage==="blast"&&(jd(i,t.tank,t.radius),t.stage="done"),!0}function GE(i,t,e){const n=t.tank;if(t.stage==="start"){if(e.push(["award",n]),t.roll=tp(i),t.roll<=5)return t.stage="front",t.tick=0,e.push(["front",n.color??15]),!1;t.stage="body"}if(t.stage==="front"){if(t.tick+=1,t.tick<RE)return!1;t.stage="body",t.tick=0}return t.stage==="body"?VE(i,t,e):!0}function VE(i,t,e){const n=t.tank,s=t.roll;if(s===0)return e.push(["thud",null]),t.stage="done",!0;if(s===1||s===2||s===3){const r=[Yd,Kd,$d].slice(0,s);if(t.tick>0)return t.tick-=1,!1;const o=Jd(i,r[t.sub]);return en(i,n.x,n.y,o,!0),e.push(["blast",o]),t.sub=t.sub+1,t.sub>=r.length?(t.stage="done",!0):(t.tick=CE,!1)}if(s===4){if(!t.spawned){t.spawned=!0;const r=i.rng.pick(6)+5;return i.add_throe("ball",n.x,n.y,n.color??15,r*Zd),!1}return i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0)}if(s===5)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("spiral",n.x,n.y,n.color??15),!1);if(s===6)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("sparkle",n.x,n.y,n.color??15),!1);if(s===7)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("fireworks",n.x,n.y,n.color??15),!1);if(s===8)return t.spawned?t.tick>0?(t.tick-=1,n.y=Math.min(i.h-1,n.y+1),!1):i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,t.tick=LE+i.rng.pick(IE),i.add_throe("sink",n.x,n.y,n.color??15),e.push(["sink",null]),!1);if(s===9)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("ring",n.x,n.y,n.color??15),!1);if(s===10){if(!t.spawned){if(t.spawned=!0,typeof n.has_ammo=="function"&&n.has_ammo(n.selected_weapon??0))i.add_throe("debris",n.x,n.y,n.color??15),e.push(["cookoff",null]);else return t.stage="done",!0;return!1}return i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0)}return t.stage="done",!0}function WE(i,t,e){if(e===1||e===2||e===3)for(const n of[Yd,Kd,$d].slice(0,e))en(i,t.x,t.y,Jd(i,n),!0);else e===4?i.add_throe("ball",t.x,t.y,t.color??15,(i.rng.pick(6)+5)*Zd):e===5?i.add_throe("spiral",t.x,t.y,t.color??15):e===6?i.add_throe("sparkle",t.x,t.y,t.color??15):e===7?i.add_throe("fireworks",t.x,t.y,t.color??15):e===8?i.add_throe("sink",t.x,t.y,t.color??15):e===9?i.add_throe("ring",t.x,t.y,t.color??15):e===10&&typeof t.has_ammo=="function"&&t.has_ammo(t.selected_weapon??0)&&i.add_throe("debris",t.x,t.y,t.color??15)}class XE{constructor(t,e,n){v(this,"attack");v(this,"die");v(this,"talking");v(this,"probability");v(this,"delay");this.attack=t,this.die=e,this.talking=String(n.TALKING_TANKS).toUpperCase(),this.probability=Do(n.TALK_PROBABILITY),this.delay=Do(n.TALK_DELAY)}}function Do(i){const t=typeof i=="string"?parseInt(i,10):i;return Math.trunc(t)}function Hu(i){const e=i.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`);return e.length>0&&e[e.length-1]===""&&e.pop(),e}function zu(i,t){const e=t(i);if(e===null)return"";let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}function qE(i,t,e,n){const s=Hu(zu(i,n)),r=Hu(zu(t,n));return new XE(s,r,e)}function Gu(i,t,e){const n=e.joinPath(i,t);if(e.pathExists(n))return n;const s=e.listDir(i);if(s!==null){const r=t.toLowerCase();for(const o of s)if(o.toLowerCase()===r)return e.joinPath(i,o)}return n}function YE(i,t,e){const n=Gu(t,i.ATTACK_COMMENTS,e),s=Gu(t,i.DIE_COMMENTS,e);return qE(n,s,i,e.readFile)}function ep(i,t){const e=t.talking;return e==="ALL"?!0:e==="COMPUTERS"?i.ai_class!==ui:!1}function np(i,t){return i.length===0?null:i[t.pick(i.length)]}function KE(i,t,e=Sr){return!ep(i,t)||e.pick(100)>=t.probability?null:np(t.attack,e)}function $E(i,t,e=Sr){return!ep(i,t)||e.pick(100)>=t.probability?null:np(t.die,e)}function za(i,t,e,n=null){if(!e){i.speech=null;return}ip(i,"_speech_frame")||(i._speech_frame=0);let s;if(n!=null&&JE(n,"delay"))s=n.delay;else if(n!=null)s=Do(So(n,"TALK_DELAY",50));else{const r=So(i,"cfg",null);s=Do(So(r,"TALK_DELAY",50))}s=Math.max(1,Math.trunc(s)),i.speech={tank:t,text:e,until_frame:i._speech_frame+s}}function ZE(i,t){ip(i,"_speech_frame")||(i._speech_frame=0),i._speech_frame=i._speech_frame+t/pd;const e=So(i,"speech",null);e!==null&&i._speech_frame>=e.until_frame&&(i.speech=null)}function ip(i,t){return Object.prototype.hasOwnProperty.call(i,t)}function JE(i,t){return i!=null&&t in i}function So(i,t,e){return i!=null&&t in i?i[t]:e}function Tn(i){if(typeof i=="string")return QE(i);const t=i[0]|0,e=i[1]|0,n=i[2]|0,s=i.length>=4?i[3]|0:255;return[t&255,e&255,n&255,s&255]}function Wn(i){return i[3]===255?`rgb(${i[0]},${i[1]},${i[2]})`:`rgba(${i[0]},${i[1]},${i[2]},${i[3]/255})`}let Ga=null;const Vu=new Map;function QE(i){const t=Vu.get(i);if(t)return t;if(Ga===null){const r=document.createElement("canvas");r.width=1,r.height=1,Ga={ctx:r.getContext("2d",{willReadFrequently:!0}),data:new Uint8ClampedArray(4)}}const{ctx:e}=Ga;e.clearRect(0,0,1,1),e.fillStyle="#000",e.fillStyle=i,e.fillRect(0,0,1,1);const n=e.getImageData(0,0,1,1).data,s=[n[0],n[1],n[2],n[3]];return Vu.set(i,s),s}class se{constructor(t,e,n,s){v(this,"x");v(this,"y");v(this,"w");v(this,"h");if(t instanceof se)this.x=t.x,this.y=t.y,this.w=t.w,this.h=t.h;else if(Array.isArray(t)&&Array.isArray(e))this.x=t[0],this.y=t[1],this.w=e[0],this.h=e[1];else if(Array.isArray(t)){const r=t;this.x=r[0],this.y=r[1],this.w=r[2],this.h=r[3]}else this.x=t,this.y=e??0,this.w=n??0,this.h=s??0}get width(){return this.w}set width(t){this.w=t}get height(){return this.h}set height(t){this.h=t}get size(){return[this.w,this.h]}set size(t){this.w=t[0],this.h=t[1]}get left(){return this.x}set left(t){this.x=t}get top(){return this.y}set top(t){this.y=t}get right(){return this.x+this.w}set right(t){this.x=t-this.w}get bottom(){return this.y+this.h}set bottom(t){this.y=t-this.h}get centerx(){return this.x+(this.w>>1)}set centerx(t){this.x=t-(this.w>>1)}get centery(){return this.y+(this.h>>1)}set centery(t){this.y=t-(this.h>>1)}get topleft(){return[this.x,this.y]}set topleft(t){this.x=t[0],this.y=t[1]}get topright(){return[this.x+this.w,this.y]}set topright(t){this.x=t[0]-this.w,this.y=t[1]}get bottomleft(){return[this.x,this.y+this.h]}set bottomleft(t){this.x=t[0],this.y=t[1]-this.h}get bottomright(){return[this.x+this.w,this.y+this.h]}set bottomright(t){this.x=t[0]-this.w,this.y=t[1]-this.h}get center(){return[this.x+(this.w>>1),this.y+(this.h>>1)]}set center(t){this.x=t[0]-(this.w>>1),this.y=t[1]-(this.h>>1)}get midtop(){return[this.x+(this.w>>1),this.y]}get midbottom(){return[this.x+(this.w>>1),this.y+this.h]}get midleft(){return[this.x,this.y+(this.h>>1)]}get midright(){return[this.x+this.w,this.y+(this.h>>1)]}copy(){return new se(this.x,this.y,this.w,this.h)}collidepoint(t,e){const n=typeof t=="number"?t:t[0],s=typeof t=="number"?e:t[1];return n>=this.x&&n<this.x+this.w&&s>=this.y&&s<this.y+this.h}inflate(t,e){return new se(this.x-(t>>1),this.y-(e>>1),this.w+t,this.h+e)}inflate_ip(t,e){this.x-=t>>1,this.y-=e>>1,this.w+=t,this.h+=e}move(t,e){return new se(this.x+t,this.y+e,this.w,this.h)}move_ip(t,e){this.x+=t,this.y+=e}clip(t){const e=Math.max(this.x,t.x),n=Math.max(this.y,t.y),s=Math.min(this.x+this.w,t.x+t.w),r=Math.min(this.y+this.h,t.y+t.h),o=s-e,a=r-n;return o<=0||a<=0?new se(this.x,this.y,0,0):new se(e,n,o,a)}}class gr{constructor(t,e=0){v(this,"canvas");v(this,"ctx");v(this,"_w");v(this,"_h");v(this,"_colorkey",null);v(this,"_alpha",null);v(this,"_hasAlpha");this._w=Math.max(1,t[0]|0),this._h=Math.max(1,t[1]|0),this._hasAlpha=(e&Eo)!==0,this.canvas=document.createElement("canvas"),this.canvas.width=this._w,this.canvas.height=this._h,this.ctx=this.canvas.getContext("2d",e&iT?{willReadFrequently:!0}:void 0),this._hasAlpha||(this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this._w,this._h))}get_size(){return[this._w,this._h]}get_width(){return this._w}get_height(){return this._h}get_rect(t){const e=new se(0,0,this._w,this._h);return t&&(t.topleft&&(e.topleft=t.topleft),t.center&&(e.center=t.center)),e}fill(t,e){const n=Tn(t);let s=0,r=0,o=this._w,a=this._h;e&&(e instanceof se?(s=e.x,r=e.y,o=e.w,a=e.h):(s=e[0],r=e[1],o=e[2],a=e[3])),this._hasAlpha&&this.ctx.clearRect(s,r,o,a),this.ctx.fillStyle=Wn(n),this.ctx.fillRect(s,r,o,a)}blit(t,e,n,s=0){const r=e instanceof se?e.x:e[0],o=e instanceof se?e.y:e[1];let a=0,c=0,l=t._w,h=t._h;n&&(a=n.x,c=n.y,l=n.w,h=n.h);const u=this.ctx.globalCompositeOperation,f=this.ctx.globalAlpha;s&nT?this.ctx.globalCompositeOperation="lighter":t._alpha!==null&&(this.ctx.globalAlpha=t._alpha/255);const d=t._colorkey!==null?t._withColorkeyStripped():t.canvas;return this.ctx.drawImage(d,a,c,l,h,r,o,l,h),this.ctx.globalCompositeOperation=u,this.ctx.globalAlpha=f,new se(r,o,l,h)}_withColorkeyStripped(){const t=this._colorkey,e=document.createElement("canvas");e.width=this._w,e.height=this._h;const n=e.getContext("2d",{willReadFrequently:!0}),s=this.ctx.getImageData(0,0,this._w,this._h),r=s.data;for(let o=0;o<r.length;o+=4)r[o]===t[0]&&r[o+1]===t[1]&&r[o+2]===t[2]&&(r[o+3]=0);return n.putImageData(s,0,0),e}copy(){const t=new gr([this._w,this._h],this._hasAlpha?Eo:0);return this._hasAlpha&&t.ctx.clearRect(0,0,this._w,this._h),t.ctx.drawImage(this.canvas,0,0),t._colorkey=this._colorkey,t._alpha=this._alpha,t}subsurface(t){const e=new gr([t.w,t.h],this._hasAlpha?Eo:0);return this._hasAlpha&&e.ctx.clearRect(0,0,t.w,t.h),e.ctx.drawImage(this.canvas,t.x,t.y,t.w,t.h,0,0,t.w,t.h),e}set_at(t,e){const n=Tn(e);this.ctx.fillStyle=Wn(n),(this._hasAlpha||n[3]!==255)&&this.ctx.clearRect(t[0],t[1],1,1),this.ctx.fillRect(t[0],t[1],1,1)}get_at(t){const e=this.ctx.getImageData(t[0],t[1],1,1).data;return[e[0],e[1],e[2],e[3]]}set_colorkey(t){this._colorkey=t===null?null:Tn(t)}get_colorkey(){return this._colorkey}set_alpha(t){this._alpha=t===null?null:t&255}get_alpha(){return this._alpha}convert_alpha(){const t=this.copy();return t._hasAlpha=!0,t}convert(){const t=this.copy();return t._hasAlpha=!1,t}get hasAlpha(){return this._hasAlpha}}const re={rect(i,t,e,n=0){const s=e instanceof se?e.x:e[0],r=e instanceof se?e.y:e[1],o=e instanceof se?e.w:e[2],a=e instanceof se?e.h:e[3],c=Tn(t),l=i.ctx;if(l.fillStyle=Wn(c),n<=0)l.fillRect(s,r,o,a);else{const h=Math.min(n,Math.ceil(o/2)),u=Math.min(n,Math.ceil(a/2));l.fillRect(s,r,o,u),l.fillRect(s,r+a-u,o,u),l.fillRect(s,r,h,a),l.fillRect(s+o-h,r,h,a)}return new se(s,r,o,a)},circle(i,t,e,n,s=0){const r=e[0]|0,o=e[1]|0,a=Math.max(0,n|0),c=Tn(t),l=i.ctx;return a===0?(i.set_at([r,o],c),new se(r,o,1,1)):(s<=0||s>=a?(l.fillStyle=Wn(c),l.beginPath(),l.arc(r+.5,o+.5,a,0,Math.PI*2),l.fill()):(l.strokeStyle=Wn(c),l.lineWidth=s,l.beginPath(),l.arc(r+.5,o+.5,a-s/2,0,Math.PI*2),l.stroke()),new se(r-a,o-a,a*2,a*2))},line(i,t,e,n,s=1){Va(i,Tn(t),[e,n],!1,Math.max(1,s))},lines(i,t,e,n,s=1){Va(i,Tn(t),n,e,Math.max(1,s))},polygon(i,t,e,n=0){const s=Tn(t),r=i.ctx;if(e.length!==0)if(n<=0){r.fillStyle=Wn(s),r.beginPath(),r.moveTo(e[0][0],e[0][1]);for(let o=1;o<e.length;o++)r.lineTo(e[o][0],e[o][1]);r.closePath(),r.fill()}else Va(i,s,e,!0,Math.max(1,n))}};function Va(i,t,e,n,s){if(e.length===0)return;const r=i.ctx;r.strokeStyle=Wn(t),r.lineWidth=s,r.lineCap="butt",r.lineJoin="miter";const o=s%2===1?.5:0;r.beginPath(),r.moveTo(e[0][0]+o,e[0][1]+o);for(let a=1;a<e.length;a++)r.lineTo(e[a][0]+o,e[a][1]+o);n&&r.closePath(),r.stroke()}const jE='"Consolas","Courier New",monospace';function tT(i){const t=i.toLowerCase();return t.includes("mono")||t.includes("consolas")||t.includes("courier")?jE:`"${i}",monospace`}const ge=class ge{constructor(t,e,n=!1){v(this,"size_px");v(this,"bold");v(this,"family");v(this,"cssFont");v(this,"_ascentDescent",null);this.size_px=e|0,this.bold=n,this.family=tT(t),this.cssFont=`${n?"bold ":""}${this.size_px}px ${this.family}`}measureCtx(){if(ge._measureCtx===null){const e=document.createElement("canvas");ge._measureCtx=e.getContext("2d",{willReadFrequently:!0})}const t=ge._measureCtx;return t.font=this.cssFont,t.textBaseline="alphabetic",t}static _evict(t,e){for(;t.size>e;){const n=t.keys().next().value;t.delete(n)}}size(t){const e=this.cssFont+"\0"+t;let n=ge._sizeCache.get(e);if(n===void 0){const s=this.measureCtx();n=Math.ceil(s.measureText(t).width),ge._sizeCache.set(e,n),ge._evict(ge._sizeCache,ge._SIZE_CACHE_CAP)}return[n,this.get_height()]}get_height(){const t=this.metrics();return Math.ceil(t.ascent+t.descent)}metrics(){if(this._ascentDescent===null){const e=this.measureCtx().measureText("Mg"),n=e.fontBoundingBoxAscent??this.size_px*.8,s=e.fontBoundingBoxDescent??this.size_px*.2;this._ascentDescent={ascent:n,descent:s}}return this._ascentDescent}render(t,e,n,s){const r=Tn(n),o=s==null?null:Tn(s),a=this.cssFont+"\0"+t+"\0"+r.join(",")+"\0"+(o===null?"-":o.join(",")),c=ge._renderCache.get(a);if(c!==void 0)return c;const l=this.measureCtx(),h=Math.max(1,Math.ceil(l.measureText(t).width)),u=this.metrics(),f=Math.max(1,Math.ceil(u.ascent+u.descent)),d=new gr([h,f],o?0:Eo),_=d.ctx;return o?(_.fillStyle=Wn(o),_.fillRect(0,0,h,f)):_.clearRect(0,0,h,f),_.font=this.cssFont,_.textBaseline="alphabetic",_.fillStyle=Wn(r),_.fillText(t,0,u.ascent),ge._renderCache.set(a,d),ge._evict(ge._renderCache,ge._RENDER_CACHE_CAP),d}};v(ge,"_measureCtx",null),v(ge,"_sizeCache",new Map),v(ge,"_renderCache",new Map),v(ge,"_SIZE_CACHE_CAP",4096),v(ge,"_RENDER_CACHE_CAP",1024);let No=ge;const eT={SysFont(i,t,e=!1){return new No(i,t,e)},init(){},Font:No},nT=6,Eo=65536,iT=1073741824,Wa=768,sT=1024,sp=1025,rT=1026,oT=9,Wu=13,Xu=27,aT=32,Zo=1<<30,cT=Zo|82,lT=Zo|81,Xa=Zo|79,qu=Zo|80;const hT=[200,200,200],Er=[170,170,170],Yn=[210,210,210],yi=[110,110,110],Me=[0,0,0],rp=[255,255,255],Uo=[40,252,252],wn=[0,0,160],uT=[255,255,255],Yu={};function Ge(i=15,t=!1){const e=`${i},${t}`;let n=Yu[e];return n===void 0&&(n=eT.SysFont("consolas,couriernew,monospace",i,t),Yu[e]=n),n}function Fs(i,t,e,n,s=Me,r=null){const o=r||Ge();let a=e,c=0;for(;c<t.length;){const l=t[c];if(l==="~"&&c+1<t.length){const h=t[c+1],u=o.render(h,!0,Uo);i.blit(u,[a,n]),re.line(i,Uo,[a,n+u.get_height()-2],[a+u.get_width(),n+u.get_height()-2]),a+=u.get_width(),c+=2}else{const h=o.render(l,!0,s);i.blit(h,[a,n]),a+=h.get_width(),c+=1}}return a}function op(i){const t=i.indexOf("~");return 0<=t&&t<i.length-1?i[t+1].toLowerCase():null}function Oo(i){return i.replace(/~/g,"")}class Si{constructor(t,e,n,s,r="",o=null){v(this,"rect");v(this,"label");v(this,"action");v(this,"accel");v(this,"enabled");this.rect=new se(t,e,n,s),this.label=r,this.action=o,this.accel=op(r),this.enabled=!0}hit(t){return this.enabled&&this.rect.collidepoint(t)}on_click(t,e){return this.action}on_accel(){return this.action}draw(t,e=!1){}}class fT extends Si{constructor(e,n,s,r=Me,o=15,a=!1,c=null){const l=Ge(o,a);super(e,n,l.size(Oo(s))[0]+4,l.get_height(),s,c);v(this,"color");v(this,"size");v(this,"bold");this.color=r,this.size=o,this.bold=a}get clickable(){return this.action!==null}hit(e){return this.clickable&&this.enabled&&this.rect.collidepoint(e)}on_click(e,n){return this.action}on_accel(){return this.action}draw(e,n=!1){const s=this.clickable&&n?wn:this.color;Fs(e,this.label,this.rect.x,this.rect.y,s,Ge(this.size,this.bold))}}class ap extends Si{constructor(e,n,s,r,o=null,a=!1){const c=Ge(15,!0),l=o||c.size(Oo(s))[0]+18;super(e,n,l,22,s,r);v(this,"default");this.default=a}draw(e,n=!1){const s=this.rect,r=n?Yn:Er;re.rect(e,r,s),re.line(e,Yn,s.topleft,s.topright),re.line(e,Yn,s.topleft,s.bottomleft),re.line(e,yi,s.bottomleft,s.bottomright),re.line(e,yi,s.topright,s.bottomright),this.default&&re.rect(e,[0,0,0],s,1);const o=Ge(15,!0).size(Oo(this.label))[0];Fs(e,this.label,s.centerx-Math.trunc(o/2),s.y+3,Me,Ge(15,!0))}}class dT extends Si{constructor(e,n,s,r,o,a,c,l=1,h=String,u=260){super(e,n,u,20,s);v(this,"get");v(this,"set");v(this,"lo");v(this,"hi");v(this,"step");v(this,"fmt");this.get=r,this.set=o,this.lo=a,this.hi=c,this.step=l,this.fmt=h}_clamp(e){return Math.max(this.lo,Math.min(this.hi,e))}adjust(e){this.set(this._clamp(this.get()+e*this.step))}on_click(e,n){return n===3?this.adjust(-1):e[0]>this.rect.centerx?this.adjust(1):this.adjust(-1),null}on_accel(){return this.adjust(1),null}draw(e,n=!1){const s=this.rect;n&&re.rect(e,Yn,s),Fs(e,this.label,s.x,s.y,Me);const r=`  < ${this.fmt(this.get())} >`;e.blit(Ge().render(r,!0,wn),[s.x+150,s.y])}}class pT extends Si{constructor(e,n,s,r,o,a,c=300){super(e,n,c,20,s);v(this,"options");v(this,"get_idx");v(this,"set_idx");this.options=r,this.get_idx=o,this.set_idx=a}cycle(e){this.set_idx(Oi(this.get_idx()+e,this.options.length))}on_click(e,n){return this.cycle(n===3?-1:1),null}on_accel(){return this.cycle(1),null}draw(e,n=!1){const s=this.rect;n&&re.rect(e,Yn,s),Fs(e,this.label,s.x,s.y,Me);const r=this.options[Oi(this.get_idx(),this.options.length)];e.blit(Ge().render(`< ${r} >`,!0,wn),[s.x+150,s.y])}}class mT extends Si{constructor(e,n,s,r,o,a=34,c=null){super(e,n,a*s.length,a,"");v(this,"cells");v(this,"get_idx");v(this,"set_idx");v(this,"cell");v(this,"draw_cell");this.cells=s,this.get_idx=r,this.set_idx=o,this.cell=a,this.draw_cell=c}on_click(e,n){const s=Math.floor((e[0]-this.rect.x)/this.cell);return 0<=s&&s<this.cells.length&&this.set_idx(s),null}draw(e,n=!1){for(let s=0;s<this.cells.length;s++){const r=this.cells[s],o=this.rect.x+s*this.cell,a=new se(o,this.rect.y,this.cell-2,this.cell-2);re.rect(e,Er,a),re.rect(e,s===this.get_idx()?wn:yi,a,s===this.get_idx()?2:1),this.draw_cell&&this.draw_cell(e,a,s,r)}}}class qa extends Si{constructor(e,n,s,r,o,a,c=240,l=String){super(e,n,c,30,s);v(this,"values");v(this,"get");v(this,"set");v(this,"fmt");v(this,"track_x");v(this,"track_w");v(this,"dragging");this.values=Array.from(r),this.get=o,this.set=a,this.fmt=l,this.track_x=e+8,this.track_w=c-16,this.dragging=!1}_cur_index(){const e=this.get();let n=0,s=Math.abs(this.values[0]-e);for(let r=1;r<this.values.length;r++){const o=Math.abs(this.values[r]-e);o<s&&(s=o,n=r)}return n}_set_index(e){e=Math.max(0,Math.min(this.values.length-1,e)),this.set(this.values[e])}_x_to_index(e){if(this.track_w<=0||this.values.length<=1)return 0;const n=(e-this.track_x)/this.track_w;return $o(n*(this.values.length-1))}_thumb_x(){return this.values.length<=1?this.track_x:this.track_x+Math.trunc(this.track_w*this._cur_index()/(this.values.length-1))}on_click(e,n){if(n===3)return this._set_index(this._cur_index()-1),null;const s=this._thumb_x();return Math.abs(e[0]-s)<=6?this.dragging=!0:this._set_index(this._x_to_index(e[0])),null}on_drag(e){this.dragging&&this._set_index(this._x_to_index(e[0]))}on_release(){this.dragging=!1}on_accel(){return this._set_index(this._cur_index()+1),null}draw(e,n=!1){const s=this.rect;Fs(e,this.label,s.x,s.y,n?rp:Me);const r=s.y+20;re.line(e,yi,[this.track_x,r],[this.track_x+this.track_w,r],2);const o=this.values.length;if(o>1)for(let h=0;h<o;h++){const u=this.track_x+Math.trunc(this.track_w*h/(o-1));re.line(e,yi,[u,r-2],[u,r+2],1)}const a=this._thumb_x(),c=new se(a-4,r-6,8,12);re.rect(e,n?Yn:Er,c),re.rect(e,Me,c,1);const l=this.fmt(this.get());e.blit(Ge().render(String(l),!0,wn),[this.track_x+this.track_w+8,s.y])}}class Ku extends Si{constructor(e,n,s,r,o,a=1,c=150,l=20){const h=Math.floor((s.length+a-1)/a);super(e,n,c*a,l*h,"");v(this,"labels");v(this,"get_idx");v(this,"set_idx");v(this,"cols");v(this,"cell_w");v(this,"cell_h");v(this,"cell_accels");this.labels=Array.from(s),this.get_idx=r,this.set_idx=o,this.cols=a,this.cell_w=c,this.cell_h=l,this.cell_accels=this.labels.map(u=>op(u))}_cell_rect(e){const n=e%this.cols,s=Math.floor(e/this.cols);return new se(this.rect.x+n*this.cell_w,this.rect.y+s*this.cell_h,this.cell_w,this.cell_h)}hit(e){return this.enabled&&this.rect.collidepoint(e)}on_click(e,n){for(let s=0;s<this.labels.length;s++)if(this._cell_rect(s).collidepoint(e)){this.set_idx(s);break}return null}accel_hit(e){for(let n=0;n<this.cell_accels.length;n++)if(this.cell_accels[n]===e)return this.set_idx(n),!0;return!1}draw(e,n=!1){for(let s=0;s<this.labels.length;s++){const r=this.labels[s],o=this._cell_rect(s),a=s===this.get_idx(),c=o.y+Math.floor(o.h/2);re.circle(e,uT,[o.x+7,c],6),re.circle(e,Me,[o.x+7,c],6,1),a&&re.circle(e,Me,[o.x+7,c],3),Fs(e,r,o.x+18,o.y+1,Me)}}}class _T extends Si{constructor(e,n,s,r,o="",a=!1,c=null,l=null){super(e,n,s,r,o);v(this,"title");v(this,"capture");v(this,"get_key");v(this,"set_key");v(this,"arming");this.title=o,this.capture=a,this.get_key=c,this.set_key=l,this.arming=!1}hit(e){return this.capture&&this.enabled&&this.rect.collidepoint(e)}on_click(e,n){return this.capture?(this.arming=!0,"capture_key"):null}take_key(e){this.set_key&&this.set_key(e.unicode?e.unicode.toUpperCase():e.key),this.arming=!1}draw(e,n=!1){const s=this.rect;if(re.rect(e,this.arming?wn:yi,s,1),this.title){const r=Ge(13).render(Oo(this.title),!0,Me);e.fill(Er,[s.x+6,s.y-7,r.get_width()+4,12]),e.blit(r,[s.x+8,s.y-7])}if(this.capture){let r=this.get_key?String(this.get_key()):"";this.arming&&(r="press a key...");const o=Ge(13).render(r,!0,wn);e.blit(o,[s.centerx-Math.floor(o.get_width()/2),s.centery-6])}}}class gT{constructor(t,e,n,s,r="",o=!1,a="back"){v(this,"rect");v(this,"title");v(this,"widgets");v(this,"focus");v(this,"text_widget");v(this,"no_cancel");v(this,"cancel_action");v(this,"default_widget");v(this,"capture_widget");this.rect=new se(t,e,n,s),this.title=r,this.widgets=[],this.focus=0,this.text_widget=null,this.no_cancel=o,this.cancel_action=a,this.default_widget=null,this.capture_widget=null}add(t){return this.widgets.push(t),t instanceof ap&&t.default&&(this.default_widget=t),t}_focusables(){const t=[];for(const e of this.widgets)e instanceof fT&&!e.clickable||e instanceof _T&&!e.capture||t.push(e);return t}_resolve(t,e){return t==="focus_text"?(this.text_widget=e,null):t==="capture_key"?(this.capture_widget=e,null):t}handle(t){if(this.text_widget&&this.text_widget.editing&&t.type===Wa)return this.text_widget.on_text_key(t),this.text_widget.editing||(this.text_widget=null),null;if(this.capture_widget&&t.type===Wa)return t.key===Xu?this.capture_widget.arming=!1:this.capture_widget.take_key(t),this.capture_widget=null,null;if(t.type===sp){for(const e of this.widgets)if(e.hit(t.pos)){const s=this._focusables().indexOf(e);return s>=0&&(this.focus=s),this._resolve(e.on_click(t.pos,t.button),e)}return!this.rect.collidepoint(t.pos)&&!this.no_cancel?this.cancel_action:null}if(t.type===sT){for(const e of this.widgets)e instanceof qa&&e.dragging&&e.on_drag(t.pos);return null}if(t.type===rT){for(const e of this.widgets)e instanceof qa&&e.on_release();return null}if(t.type===Wa){if(t.key===Xu)return this.no_cancel?null:this.cancel_action;if(t.key===lT||t.key===oT)return this.focus=Oi(this.focus+1,Math.max(1,this._focusables().length)),null;if(t.key===cT)return this.focus=Oi(this.focus-1,Math.max(1,this._focusables().length)),null;if(t.key===Wu&&this.default_widget!==null)return this._resolve(this.default_widget.on_accel(),this.default_widget);if(t.key===Wu||t.key===aT||t.key===qu||t.key===Xa){const n=this._focusables();if(n.length){const s=n[Oi(this.focus,n.length)];if(t.key===qu||t.key===Xa){const r=t.key===Xa?1:-1;if(s instanceof dT)return s.adjust(r),null;if(s instanceof pT)return s.cycle(r),null;if(s instanceof qa)return s._set_index(s._cur_index()+r),null;if(s instanceof Ku)return s.set_idx(Oi(s.get_idx()+r,s.labels.length)),null}return this._resolve(s.on_accel(),s)}return null}const e=t.unicode?t.unicode.toLowerCase():null;if(e)for(const n of this.widgets){if(n instanceof Ku&&n.enabled&&n.accel_hit(e))return null;if(n.accel===e&&n.enabled)return this._resolve(n.on_accel(),n)}}return null}draw(t,e=!0){if(e){const s=new gr(t.get_size());s.set_alpha(140),s.fill([0,0,0]),t.blit(s,[0,0])}if(re.rect(t,Er,this.rect),re.rect(t,Yn,this.rect,1),re.line(t,yi,this.rect.bottomleft,this.rect.bottomright,2),re.line(t,yi,this.rect.topright,this.rect.bottomright,2),this.title){const s=new se(this.rect.x,this.rect.y,this.rect.w,20);re.rect(t,wn,s);const r=Ge(15,!0).render(this.title,!0,rp);t.blit(r,[s.centerx-Math.floor(r.get_width()/2),s.y+2])}const n=this._focusables();for(const s of this.widgets){const r=n.length>0&&s===n[Oi(this.focus,n.length)];s.draw(t,r)}}}function xT(i){i.get_size()}function Oi(i,t){return(i%t+t)%t}const $u={BASIC:0,STANDARD:1,GREEDY:2},Zu={NONE:0,STANDARD:1,CORPORATE:2,VICIOUS:3},Ju={SEQUENTIAL:0,SYNCHRONOUS:1,SIMULTANEOUS:2},Qu={RANDOM:0,"LOSERS-FIRST":1,"WINNERS-FIRST":2,"ROUND-ROBIN":3},ju={NONE:0,WRAP:1,PADDED:2,RUBBER:3,SPRING:4,CONCRETE:5,RANDOM:6,ERRATIC:7},tf={NORMAL:0,MEDIUM:1,LARGE:2},Il=[{name:"MAXPLAYERS",type:"int"},{name:"MAXROUNDS",type:"int"},{name:"ARMS",type:"int"},{name:"PLAY_MODE",type:"str"},{name:"PLAY_ORDER",type:"str"},{name:"TEAM_MODE",type:"str"},{name:"HOSTILE_ENVIRONMENT",type:"str"},{name:"TUNNELLING",type:"str"},{name:"USELESS_ITEMS",type:"str"},{name:"EXPLOSION_SCALE",type:"str"},{name:"INITIAL_CASH",type:"int"},{name:"INTEREST_RATE",type:"float"},{name:"COMPUTERS_BUY",type:"str"},{name:"FREE_MARKET",type:"str"},{name:"SCORING",type:"str"},{name:"GRAVITY",type:"float"},{name:"AIR_VISCOSITY",type:"int"},{name:"MAX_WIND",type:"int"},{name:"CHANGING_WIND",type:"str"},{name:"ELASTIC",type:"str"},{name:"FALLING_TANKS",type:"str"},{name:"EDGES_EXTEND",type:"int"},{name:"DAMAGE_TANKS_ON_IMPACT",type:"str"},{name:"LAND1",type:"int"},{name:"LAND2",type:"int"},{name:"FLATLAND",type:"str"},{name:"RANDOM_LAND",type:"str"},{name:"MTN_PERCENT",type:"float"},{name:"SUSPEND_DIRT",type:"int"},{name:"EXTRA_DIRT",type:"str"},{name:"SKY",type:"str"},{name:"GRAPHICS_MODE",type:"str"},{name:"LOWMEM",type:"str"},{name:"FIRE_DELAY",type:"int"},{name:"FALLING_DELAY",type:"int"},{name:"STATUS_BAR",type:"str"},{name:"ICON_BAR",type:"str"},{name:"BOMB_ICON",type:"str"},{name:"TRACE",type:"str"},{name:"FAST_COMPUTERS",type:"str"},{name:"BIOS_KEYBOARD",type:"str"},{name:"POINTER",type:"str"},{name:"MOUSE_RATE",type:"float"},{name:"SOUND",type:"str"},{name:"FLY_SOUND",type:"str"},{name:"TALKING_TANKS",type:"str"},{name:"TALK_PROBABILITY",type:"int"},{name:"TALK_DELAY",type:"int"},{name:"ATTACK_COMMENTS",type:"str"},{name:"DIE_COMMENTS",type:"str"}],Qc={};for(const i of Il)Qc[i.name]=i.type;function li(i){return i.toUpperCase()}const ef=new Set(["	",`
`,"\v","\f","\r","","","",""," ",""," "," "," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　"]);function Pl(i){let t=0,e=i.length;for(;t<e&&ef.has(i[t]);)t++;for(;e>t&&ef.has(i[e-1]);)e--;return i.slice(t,e)}function jc(i){const t=Pl(i);if(t.length===0)return null;let e=0,n=1;(t[e]==="+"||t[e]==="-")&&(t[e]==="-"&&(n=-1),e++);const s=t.slice(e);if(s.length===0||!/^[0-9]/.test(s)||!/[0-9]$/.test(s))return null;let r=!1,o="";for(const c of s){if(c==="_"){if(r)return null;r=!0;continue}if(c<"0"||c>"9")return null;r=!1,o+=c}const a=Number(o);return a===0?0:n*a}function vT(i){const t=Pl(i);if(t.length===0)return null;let e=0,n=1;(t[e]==="+"||t[e]==="-")&&(t[e]==="-"&&(n=-1),e++);const s=t.slice(e);if(s.length===0)return null;const r=s.toLowerCase();if(r==="inf"||r==="infinity")return n*(1/0);if(r==="nan")return n*NaN;if(!/^[0-9._eE+\-]+$/.test(s))return null;for(let l=0;l<s.length;l++)if(s[l]==="_"){const h=s[l-1],u=s[l+1];if(h===void 0||u===void 0||h<"0"||h>"9"||u<"0"||u>"9")return null}const o=s.replace(/_/g,"");if(!/^(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:[eE][+\-]?[0-9]+)?$/.test(o))return null;const c=Number(o);return Number.isNaN(c)?null:n*c}function yT(i,t){if(i==="int"){const e=jc(t);return e===null?0:e}if(i==="float"){const e=vT(t);return e===null?0:e}return t}function MT(i,t){const e=i.indexOf(t);return e<0?[i,"",""]:[i.slice(0,e),t,i.slice(e+t.length)]}function Ya(i){return Pl(i)}class Dl{constructor(){v(this,"MAXPLAYERS",2);v(this,"MAXROUNDS",10);v(this,"ARMS",4);v(this,"PLAY_MODE","SEQUENTIAL");v(this,"PLAY_ORDER","RANDOM");v(this,"TEAM_MODE","NONE");v(this,"HOSTILE_ENVIRONMENT","ON");v(this,"TUNNELLING","OFF");v(this,"USELESS_ITEMS","ON");v(this,"EXPLOSION_SCALE","NORMAL");v(this,"INITIAL_CASH",0);v(this,"INTEREST_RATE",.05);v(this,"COMPUTERS_BUY","ON");v(this,"FREE_MARKET","OFF");v(this,"SCORING","STANDARD");v(this,"GRAVITY",.2);v(this,"AIR_VISCOSITY",0);v(this,"MAX_WIND",200);v(this,"CHANGING_WIND","OFF");v(this,"ELASTIC","NONE");v(this,"FALLING_TANKS","ON");v(this,"EDGES_EXTEND",75);v(this,"DAMAGE_TANKS_ON_IMPACT","ON");v(this,"LAND1",20);v(this,"LAND2",20);v(this,"FLATLAND","ON");v(this,"RANDOM_LAND","ON");v(this,"MTN_PERCENT",20);v(this,"SUSPEND_DIRT",0);v(this,"EXTRA_DIRT","OFF");v(this,"SKY","RANDOM");v(this,"GRAPHICS_MODE","1024x768");v(this,"LOWMEM","OFF");v(this,"FIRE_DELAY",100);v(this,"FALLING_DELAY",10);v(this,"STATUS_BAR","OFF");v(this,"ICON_BAR","ON");v(this,"BOMB_ICON","BIG");v(this,"TRACE","OFF");v(this,"FAST_COMPUTERS","OFF");v(this,"BIOS_KEYBOARD","OFF");v(this,"POINTER","Mouse");v(this,"MOUSE_RATE",.5);v(this,"SOUND","ON");v(this,"FLY_SOUND","OFF");v(this,"TALKING_TANKS","OFF");v(this,"TALK_PROBABILITY",100);v(this,"TALK_DELAY",50);v(this,"ATTACK_COMMENTS","talk1.cfg");v(this,"DIE_COMMENTS","talk2.cfg");v(this,"wind",0);v(this,"live_elastic");this.live_elastic=this.elastic}get(t){return this[t]}set(t,e){this[t]=e}get scoring(){const t=li(this.SCORING);return t in $u?$u[t]:1}get team_mode(){const t=li(this.TEAM_MODE);return t in Zu?Zu[t]:0}get play_mode(){const t=li(this.PLAY_MODE);return t in Ju?Ju[t]:0}get play_order(){const t=li(this.PLAY_ORDER);return t in Qu?Qu[t]:0}get elastic(){const t=li(this.ELASTIC);return t in ju?ju[t]:0}get explosion_scale(){const t=li(this.EXPLOSION_SCALE);return t in tf?tf[t]:0}is_on(t){return li(ST(this.get(t)))==="ON"}get resolution(){const t=this.GRAPHICS_MODE;if(typeof t!="string")return[1024,768];const e=t.toLowerCase().split("x");if(e.length!==2)return[1024,768];const n=jc(e[0]),s=jc(e[1]);return n===null||s===null?[1024,768]:[n,s]}get viscosity_mult(){return 1-this.AIR_VISCOSITY/Iy}static load(t){const e=new Dl;if(t==null)return e;const n=t.split(`
`);for(let s of n){if(s=Ya(s),s.length===0||s.startsWith(";")||!s.includes("="))continue;const[r,,o]=MT(s,"="),a=li(Ya(r)),c=Ya(o);a in Qc&&e.set(a,yT(Qc[a],c))}return e}save(){let t=`; Configuration File for Scorched Earth Version 1.5-py
`;for(const e of Il){const n=ET(e.type,this.get(e.name));t+=`${e.name}=${n}
`}return t}}function ST(i){return typeof i=="string"?i:typeof i=="number"?cp(i,void 0):String(i)}function cp(i,t){return t===!1?nf(i):t===!0?sf(i):Number.isInteger(i)?nf(i):sf(i)}function nf(i){const t=Math.trunc(i);return Object.is(t,-0)?"0":String(t)}function sf(i){if(Number.isNaN(i))return"nan";if(i===1/0)return"inf";if(i===-1/0)return"-inf";if(i===0)return Object.is(i,-0)?"-0.0":"0.0";const t=i<0||Object.is(i,-0),s=Math.abs(i).toExponential().match(/^(\d)(?:\.(\d+))?e([+\-]\d+)$/),r=s[1],o=s[2]||"",a=r+o,c=parseInt(s[3],10);let l;if(c<-4||c>=16){let h=r;o.length>0&&(h+="."+o);const u=c<0?"-":"+";let f=Math.abs(c).toString();f.length<2&&(f="0"+f),l=`${h}e${u}${f}`}else if(c>=0){const h=c+1;a.length<=h?l=a+"0".repeat(h-a.length)+".0":l=a.slice(0,h)+"."+a.slice(h)}else l="0."+"0".repeat(-c-1)+a;return(t?"-":"")+l}function ET(i,t){return typeof t=="boolean"?t?"on":"off":typeof t=="number"?cp(t,i==="float"):t}const TT={};for(const i of Il)TT[i.name]=i.type;new TextEncoder;new TextDecoder("utf-8",{fatal:!0});class bT{constructor(){v(this,"opaque",!0)}handle(t){return null}update(t){return null}draw(t){}}function Ka(i,t,e,n,s=Me,r=null){const o=r||Ge();let a=e,c=0;for(;c<t.length;){const l=t[c];if(l==="~"&&c+1<t.length){const h=t[c+1],u=o.render(h,!0,Uo);i.blit(u,[a,n]),re.line(i,Uo,[a,n+u.get_height()-2],[a+u.get_width(),n+u.get_height()-2]),a+=u.get_width(),c+=2}else{const h=o.render(l,!0,s);i.blit(h,[a,n]),a+=h.get_width(),c+=1}}return a}function AT(i){const t=[];for(let e=0;e<vi;e++)me[e].offensive&&i.has_ammo(e)&&t.push(e);return t}const lp=[[!0,!1],[!0,!1],[!1,!1],[!0,!1],[!0,!1],[!1,!1],[!0,!0]],hp=lp.length,wT=hp-1;function RT(i){return 0<=i&&i<hp?lp[i][0]:!0}const Fo=class Fo extends bT{constructor(e,n,s,r){super();v(this,"opaque",!0);v(this,"state");v(this,"tank");v(this,"w");v(this,"h");v(this,"weapon_slots");v(this,"guidance_slots");v(this,"panel");v(this,"_wrows",[]);v(this,"_grows",[]);v(this,"_array_slots",[]);v(this,"_array_y");v(this,"weapon_array",null);v(this,"_wcol_x",0);v(this,"_gcol_x",0);v(this,"_list_top",0);v(this,"_guidance_bottom",0);this.state=e,this.tank=n,this.w=s,this.h=r,this.weapon_slots=AT(n),this.guidance_slots=Fo._GUIDANCE_SLOTS.filter(o=>n.inventory[o]>0),this.panel=new gT(20,16,s-40,r-32,"Inventory",!1,"pop"),this._wrows=[],this._grows=[],this._build_chrome()}_count_str(e){return e===fn?"unlimited":String(this.tank.inventory[e])}_select_weapon(e){this.tank.selected_weapon=e}_select_guidance(e){this.tank.selected_guidance=e}_weapon_array_index(){return this.weapon_slots.indexOf(this.tank.selected_weapon)}_build_chrome(){const e=this.panel;e.add(new ap(e.rect.right-80,e.rect.bottom-30,"~Done","pop",null,!0)),this._array_slots=this.weapon_slots.slice(0,8);const n=e.rect.x+16,s=e.rect.bottom-30-40;this._array_y=s,this._array_slots.length?this.weapon_array=e.add(new mT(n,s,Array.from({length:this._array_slots.length},(r,o)=>o),()=>this._weapon_array_index(),r=>this._array_click(r),36,(r,o,a,c)=>this._draw_array_cell(r,o,a,c))):this.weapon_array=null}_array_click(e){0<=e&&e<this._array_slots.length&&this._select_weapon(this._array_slots[e])}_draw_array_cell(e,n,s,r){this._array_slots[s]}_layout_lists(){const e=this.panel,n=Math.trunc((e.rect.w-48)/2),s=e.rect.x+16,r=e.rect.x+24+n,o=e.rect.y+48;this._wcol_x=s,this._gcol_x=r,this._list_top=o,this._wrows=[];for(let c=0;c<this.weapon_slots.length;c++)this._wrows.push([this.weapon_slots[c],o+c*18]);this._grows=[];let a=o;for(const c of this.guidance_slots)this._grows.push([c,a]),a+=18;this._grows.push([null,a]),this._guidance_bottom=a+18}handle(e){if(e.type===sp&&e.button===1&&e.pos){this._layout_lists();for(const[n,s]of this._wrows)if(new se(this._wcol_x-2,s-1,this._gcol_x-8-this._wcol_x,17).collidepoint(e.pos))return this._select_weapon(n),null;for(const[n,s]of this._grows)if(new se(this._gcol_x-2,s-1,this.panel.rect.right-16-this._gcol_x,17).collidepoint(e.pos))return this._select_guidance(n),null}return this.panel.handle(e)}draw(e){e.fill(hT),this.panel.draw(e,!1),this._layout_lists();const n=this.panel,s=this.tank,r=Ge(14);Ka(e,"Weapons",this._wcol_x,this._list_top-18,wn),Ka(e,"Guidance",this._gcol_x,this._list_top-18,wn);for(const[l,h]of this._wrows){l===s.selected_weapon&&re.rect(e,Yn,[this._wcol_x-2,h-1,this._gcol_x-8-this._wcol_x,17]);const f=me[l];e.blit(r.render(f.name,!0,Me),[this._wcol_x,h]);const d=this._count_str(l),_=r.size(d)[0];e.blit(r.render(d,!0,Me),[this._gcol_x-12-_,h])}for(const[l,h]of this._grows){s.selected_guidance===l&&re.rect(e,Yn,[this._gcol_x-2,h-1,n.rect.right-16-this._gcol_x,17]);let f,d;if(l===null?(f="None",d=""):(f=me[l].name,d=String(s.inventory[l])),e.blit(r.render(f,!0,Me),[this._gcol_x,h]),d){const _=r.size(d)[0];e.blit(r.render(d,!0,Me),[n.rect.right-24-_,h])}}let o=Math.max(this._guidance_bottom,this._array_y-110)+8,a=0;for(const l of Lo)a+=s.inventory[l];const c=[["Shields",a],["Parachutes",s.inventory[ki]],["Batteries",s.inventory[En]],["Triggers",s.inventory[pM]],["Fuel",s.inventory[wd]]];for(const[l,h]of c)e.blit(r.render(`${l}: ${h}`,!0,Me),[this._gcol_x,o]),o+=18;this.weapon_array!==null&&Ka(e,"Weapon array (click to select):",this._wcol_x,this._array_y-18,Me),xT(e)}};v(Fo,"_GUIDANCE_SLOTS",(()=>{const e=[];for(let n=0;n<me.length;n++)me[n].category==="guidance"&&e.push(n);return e})());let rf=Fo;const CT="place",co="turn_start",ds="aim",of="firing",lo="settle",af="round_end",cf="shop",LT="game_over",js="sync_aim",lf="sync_volley",tr="sim_live",IT=.6,$a=md,hf=.25,PT=.4,DT=.5,NT=.6,uf=50,ff=250,UT=2,df=5;function Za(i){const t=Math.floor(i),e=i-t;return e<.5?t+0:e>.5?t+1:t%2===0?t+0:t+1}function Dt(i){return Math.trunc(i)}function er(i,t){return Math.floor(i/t)}function ho(i){return(i>0?1:0)-(i<0?1:0)}function pf(i,t,e,n){const s=[],r=Math.abs(e-i),o=-Math.abs(n-t),a=i<e?1:-1,c=t<n?1:-1;let l=r+o,h=i,u=t,f=r-o+2;for(;f>=0&&(s.push([h,u]),!(h===e&&u===n));){const d=2*l;d>=o&&(l+=o,h+=a),d<=r&&(l+=r,u+=c),f-=1}return s}const ie=class ie{constructor(t,e,n){v(this,"cfg");v(this,"w");v(this,"h");v(this,"rng");v(this,"_pyrandom");v(this,"terrain");v(this,"economy");v(this,"tanks");v(this,"round_index");v(this,"current_shooter");v(this,"current_weapon");v(this,"projectiles");v(this,"explosions");v(this,"beams");v(this,"last_landing");v(this,"direct_hit_tank");v(this,"firing_order");v(this,"fire_index");v(this,"phase");v(this,"timer");v(this,"message");v(this,"ranking");v(this,"winner");v(this,"explosion_scale");v(this,"mtn_ranges");v(this,"awaiting_human");v(this,"active_bolts");v(this,"trace_marks");v(this,"plasma_rings");v(this,"death_fountains");v(this,"throe_fx");v(this,"death_queue");v(this,"flashes");v(this,"shield_fades");v(this,"_prev_shield_hp");v(this,"speech");v(this,"_speech_frame");v(this,"live_sky");v(this,"lut");v(this,"_lut_base");v(this,"_sky_step");v(this,"_pal_accum");v(this,"_digger_cycle");v(this,"_digger_step");v(this,"_explo_band_active");v(this,"_death_pulse");v(this,"firewalls");v(this,"_firewall_counter");v(this,"_firewall_band_active");v(this,"sfx");v(this,"talk");v(this,"_data_dir");v(this,"_settle_done",!1);v(this,"_sync_locks",{});v(this,"_sync_queue",[]);v(this,"_sim",{});v(this,"_sim_human",null);v(this,"_sim_keymap",{});this.cfg=t,this.w=e,this.h=n,this.rng=Sr,this._pyrandom=new Xd,this.terrain=new rE(e,n),this.economy=new oE(t),this.tanks=[],this.round_index=0,this.current_shooter=null,this.current_weapon=null,this.projectiles=[],this.explosions=[],this.beams=[],this.last_landing=null,this.direct_hit_tank=null,this.firing_order=[],this.fire_index=0,this.phase=CT,this.timer=0,this.message="",this.ranking=[],this.winner=null,this.explosion_scale=this._scale_factor(),this.mtn_ranges=[],this.awaiting_human=!1,this._data_dir="",this.active_bolts=[],this.trace_marks=[],this.plasma_rings=[],this.death_fountains=[],this.throe_fx=[],this.death_queue=[],this.flashes=[],this.shield_fades={},this._prev_shield_hp={},this.speech=null,this._speech_frame=0,this.live_sky=(t.SKY||"PLAIN").toUpperCase(),this.lut=new vS;const s=MS();this.lut.set_band(ar,xs,s),this._lut_base=this.lut.copy_table();{const r=xs-ar+1;for(let o=0;o<r;o++){const a=s[o];this._lut_base[ar+o]=[a[0]&255,a[1]&255,a[2]&255]}}this._sky_step=0,this._pal_accum=0,this._digger_cycle=0,this._digger_step=0,this._explo_band_active=!1,this._death_pulse=null,this.firewalls=[],this._firewall_counter=0,this._firewall_band_active=!1,this.sfx=Yt,Yt.enabled=t.is_on("SOUND"),Yt.fly_mode=t.FLY_SOUND,Yt.field_height=n,this.talk=null}_scale_factor(){return{0:1,1:1.5,2:2}[this.cfg.explosion_scale]}_shuffle(t){for(let e=t.length-1;e>=1;e--){const n=this._pyrandom.pick(e+1),s=t[e];t[e]=t[n],t[n]=s}}add_player(t,e=0,n=0,s=0){const r=new mM(this.tanks.length,t,e,n,s);return r.mobile=RT(s),this.tanks.push(r),r}new_game(){this.round_index=0;const t=this.cfg.INITIAL_CASH;for(const e of this.tanks){e.cash=t,e.cash_ceiling=t,e.score=0,e.win_counter=0,e.hits_career={};for(let n=0;n<vi;n++)e.inventory[n]=0;e.inventory[fn]=99}if(this.cfg.mayhem)for(const e of this.tanks)for(let n=1;n<vi;n++)me[n].enabled&&(e.inventory[n]=99);this.economy.refresh_availability(),this.talk===null&&(this.talk=YE(this.cfg,this._data_dir,{joinPath:(e,n)=>e?`${e}/${n}`:n,pathExists:()=>!1,listDir:()=>null,readFile:()=>null})),t>0?this.phase=cf:this.start_round()}start_round(){this.cfg.live_elastic=this._roll_elastic(),this._setup_wind(),this.terrain.generate(this.cfg,this.rng,this.mtn_ranges),this.live_sky=Ll(this.cfg,this.rng),wE(this),Yt.field_height=this.h,this._place_tanks(),this._reset_round_tanks(),this._build_firing_order(),this.projectiles.length=0,this.explosions.length=0,this.beams.length=0,this.plasma_rings.length=0,this.death_fountains.length=0,this.throe_fx.length=0,this.death_queue.length=0,this._death_pulse=null,this.flashes.length=0,this.trace_marks.length=0,this.shield_fades={},this._prev_shield_hp={},this.last_landing=null,this.direct_hit_tank=null,this.fire_index=0,this.timer=0;const t=this.cfg.play_mode;t===du?this._sync_begin_round():t===io?this._sim_begin_round():this.phase=co}_roll_elastic(){const t=this.cfg.elastic;return t===6?this.rng.pick(6):t===7?this.rng.pick(6):t}_reroll_erratic(){this.cfg.elastic===7&&(this.cfg.live_elastic=this.rng.pick(6))}_setup_wind(){const t=this.cfg.MAX_WIND;if(t<=0){this.cfg.wind=0;return}let e=this.rng.pick(Math.max(1,er(t,2)))-er(t,4);this.rng.chance(20,100)&&(e*=2,this.rng.chance(40,100)&&(e*=2)),this.cfg.wind=e}_perturb_wind(){const t=this.cfg.MAX_WIND;if(t<=0){this.cfg.wind=0;return}this.cfg.wind=Math.max(-t,Math.min(t,this.cfg.wind+this.rng.pick(11)-5))}_place_tanks(){const t=this.tanks.length,e=30,n=this.w-2*e,s=[];for(let r=0;r<t;r++){const o=e+Dt(n*(r+.5)/t),a=this.rng.pick(20)-10;s.push(Math.max(e,Math.min(this.w-e,o+a)))}s.sort((r,o)=>r-o);for(let r=1;r<t;r++)s[r]-s[r-1]<15&&(s[r]=Math.min(this.w-e,s[r-1]+15));this._shuffle(s);for(let r=0;r<this.tanks.length;r++){const o=this.tanks[r],a=s[r];o.x=a,o.y=this.terrain.drop_to_footprint(a,o.half_width),this.terrain.level_under_tank(a,o.y,o.half_width),o.color=pS(o.player_index)}}_reset_round_tanks(){for(const t of this.tanks)t.alive=!0,t.health=Xc,t.shield_hp=0,t.shield_item=0,t.chute_up=0,t.chute_descent=null,t.fall_accum=0,t.hits_this_round={},t.ai_tries=0,t.angle=t.x<this.w/2?45:135,t.power=500,t.selected_guidance=null,t.selected_weapon=0,this._arm_defenses(t)}_announce_defense(t,e){const n=me[e].name;za(this,t,`${t.name} activating ${n}`,this.talk)}_arm_defenses(t){if(this.cfg.play_mode===io&&t.inventory[or]<=0){t.shield_hp=0,t.shield_item=0;return}if(this.cfg.play_mode===io&&t.inventory[or]>0){const e=this._arm_best_shield(t,!1);e!==null&&(this._announce_defense(t,or),this._announce_defense(t,e));return}this._arm_best_shield(t,!1)}_arm_best_shield(t,e=!0){if(t.shield_hp>0)return null;for(let n=Lo.length-1;n>=0;n--){const s=Lo[n];if(t.inventory[s]>0){const r=me[s].params;return t.shield_hp=r.hp??100,t.shield_item=s,t.shield_push=r.push??!1,t.shield_deflect=r.deflect??!1,t.shield_laserproof=r.laserproof??!1,t.shield_failproof=r.failproof??!1,t.inventory[s]-=1,this._start_shield_fade(t,1),Yt.play("shield_deploy",this.cfg.is_on("SOUND")),e&&this._announce_defense(t,s),s}}return null}_start_shield_fade(t,e){this.shield_fades[t.player_index]={dir:e,frame:0}}_tick_shield_fades(){for(const e of this.tanks)(this._prev_shield_hp[e.player_index]??0)>0&&e.shield_hp<=0&&this._start_shield_fade(e,-1),this._prev_shield_hp[e.player_index]=e.shield_hp;for(const e of Object.keys(this.shield_fades))this.shield_fades[Number(e)].frame+=1;const t={};for(const e of Object.keys(this.shield_fades)){const n=this.shield_fades[Number(e)];n.frame<=ie.SHIELD_FADE_FRAMES&&(t[Number(e)]=n)}this.shield_fades=t}_build_firing_order(){let t=[];for(let n=0;n<this.tanks.length;n++)t.push(n);const e=this.cfg.play_order;if(e===tM)this._shuffle(t);else if(e===eM)t=this._stableSort(t,n=>this.tanks[n].score);else if(e===nM)t=this._stableSortReverse(t,n=>this.tanks[n].score);else if(e===iM){const n=this.round_index%t.length;t=t.slice(n).concat(t.slice(0,n))}this.firing_order=t}_stableSort(t,e){return t.map((n,s)=>({v:n,idx:s,k:e(n)})).sort((n,s)=>n.k-s.k||n.idx-s.idx).map(n=>n.v)}_stableSortReverse(t,e){return t.map((n,s)=>({v:n,idx:s,k:e(n)})).sort((n,s)=>s.k-n.k||n.idx-s.idx).map(n=>n.v)}_alive_count(){let t=0;for(const e of this.tanks)e.alive&&(t+=1);return t}_win_check(){const t=this.cfg.team_mode;if(t===qo||t===sM)return this._alive_count()<2;const e=new Set;for(const n of this.tanks)n.alive&&e.add(n.team_id);return e.size<=1}_next_shooter(){const t=this.firing_order.length;for(let e=0;e<t;e++){const n=this.tanks[this.firing_order[this.fire_index]];if(this.fire_index=(this.fire_index+1)%t,n.alive)return n}return null}_resolve_unknown_class(t){t.ai_class===Ed&&t.reveal_type!==-2&&(t.reveal_type=-2,t.ai_class=this.rng.pick(7)+1)}_begin_turn(){if(this._win_check()){this._end_round();return}const t=this._next_shooter();if(t===null){this._end_round();return}if(this.current_shooter=t,Yt.play("turn",this.cfg.is_on("SOUND")),this._resolve_unknown_class(t),this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind(),this._arm_best_shield(t,!0),ME(this),t.ai_class===ui)this.awaiting_human=!0,this.phase=ds;else{this.awaiting_human=!1;const[e,n,s]=Ua(this,t);t.angle=Dt(Math.max(0,Math.min(180,e))),t.power=Dt(Math.max(0,Math.min(1e3,n))),t.selected_weapon=s,this.phase=co,this.timer=IT}}retreat(t=null){const e=t!==null?t:this.current_shooter;return e===null||!e.alive?!1:(this.current_shooter=null,e.alive=!1,e.health=0,kE(this,e),this.cfg.play_mode===rM&&(this.awaiting_human=!1,this.phase=lo),!0)}skip_turn(){const t=this.current_shooter;return t===null||!t.alive?!1:(this.current_shooter=null,this.awaiting_human=!1,this.phase=lo,!0)}fire(t=null){const e=t!==null?t:this.current_shooter;if(e===null)return[];if(t===null){if(this.phase===ds&&this.cfg.play_mode===du)return this._sync_human_fire(e),[];if(this.phase===tr&&this.cfg.play_mode===io)return this._sim_human_fire(e),[]}this._reroll_erratic(),this.direct_hit_tank=null,Yt.set_launch_y(e.y-4);let n=e.selected_weapon,s=me[n];e.has_ammo(n)||(n=fn,s=me[n]),e.consume(n),e.selected_weapon!==fn&&!e.has_ammo(e.selected_weapon)&&(e.selected_weapon=fn),this.awaiting_human=!1;const r=KE(e,this.talk,this.rng);r!==null&&za(this,e,r,this.talk),Yt.play("fire",this.cfg.is_on("SOUND"));const o=s.behavior;if(o==="laser"){const l=so(e,this.cfg,s);return l.state.energy=Math.max(200,e.power)*10,$S(this,l),this._enter_firing(),[l]}if(o==="plasma"){const l=so(e,this.cfg,s);return fs(this,l,e.x,e.y-4),this._enter_firing(),[l]}const a=this._triple_fan_angles(e,n),c=[];for(const l of a){const h=so(e,this.cfg,s,null,l);e.contact_trigger&&(h.contact=!0),this.projectiles.push(h),c.push(h)}return e.contact_trigger&&(e.contact_trigger=!1),c.length>0&&Yt.start_fly(this.cfg.FLY_SOUND,this.cfg.is_on("SOUND")),this._enter_firing(),c}_triple_fan_angles(t,e){return t.tank_icon===wT&&(e===Co||e===fn)?[t.angle-df,t.angle,t.angle+df]:[t.angle]}_enter_firing(){(this.phase===ds||this.phase===co)&&(this.phase=of)}_discharge_batteries(t,e=null){e===null&&(e=t.batteries);let n=0;for(let s=0;s<e;s++)t.inventory[En]>0&&(t.inventory[En]-=1,Yt.play("battery",this.cfg.is_on("SOUND")),n+=1);n>0&&this._announce_defense(t,En)}_battery_auto_trigger(t){let e=0;for(;t.alive&&t.health<91&&t.inventory[En]>0;)t.inventory[En]-=1,t.health=Math.min(Xc,t.health+10),e+=1;return e>0&&this._announce_defense(t,En),e}update(t){if(ZE(this,t),this._tick_palette(t),this._tick_sky(),this.phase===co)this.timer-=t,this.timer<=0&&(this.current_shooter&&this.current_shooter.ai_class!==ui&&this.projectiles.length===0?this.fire():this._begin_turn());else if(this.phase!==ds)if(this.phase===of){for(let e=0;e<$a;e++)this._step_flight();this._animate_effects(),this.projectiles.length===0&&this.explosions.length===0&&this.beams.length===0&&this.plasma_rings.length===0&&this.death_fountains.length===0&&this.throe_fx.length===0&&this.death_queue.length===0&&(Yt.stop_fly(),this.phase=lo,this._settle_done=!1)}else if(this.phase===lo){if(this.death_queue.length>0||this.death_fountains.length>0||this.throe_fx.length>0||this.explosions.length>0){this._animate_effects(),this._settle_done=!1;return}if(this._settle_done||(this._do_settle(),this._settle_done=!0),this._step_chute_anims(t),this.tanks.some(e=>e.chute_descent))return;this._settle_done=!1,this._win_check()?this.speech===null&&this._end_round():this._begin_turn()}else this.phase===js?this._sync_collect(t):this.phase===lf?this._sync_volley(t):this.phase===tr&&this._sim_update(t)}_sync_begin_round(){this._sync_locks={},this._sync_queue=this.firing_order.filter(t=>this.tanks[t].alive),this.current_shooter=null,this.awaiting_human=!1,this.phase=js,this.timer=0,this._sync_advance()}_sync_start_volley(){this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind(),this._sync_locks={},this._sync_queue=this.firing_order.filter(t=>this.tanks[t].alive),this.current_shooter=null,this.awaiting_human=!1,this.phase=js,this.timer=0,this._sync_advance()}_sync_advance(){if(this._win_check()){this._end_round();return}for(;this._sync_queue.length>0&&(!this.tanks[this._sync_queue[0]].alive||this._sync_queue[0]in this._sync_locks);)this._sync_queue.shift();if(this._sync_queue.length===0){this._sync_launch_volley();return}const t=this._sync_queue[0],e=this.tanks[t];if(this.current_shooter=e,e.ai_class===ui)this.awaiting_human=!0,this.phase=ds;else{this.awaiting_human=!1;const[n,s,r]=Ua(this,e);this._sync_record_lock(e,n,s,r),this.phase=js,this.timer=hf}}_sync_record_lock(t,e,n,s){t.angle=Dt(Math.max(0,Math.min(180,e))),t.power=Dt(Math.max(0,Math.min(1e3,n))),t.selected_weapon=s,this._sync_locks[t.player_index]=[t.angle,t.power,s],this._sync_queue.length>0&&this._sync_queue[0]===t.player_index&&this._sync_queue.shift()}_sync_human_fire(t){return this._sync_record_lock(t,t.angle,t.power,t.selected_weapon),this.awaiting_human=!1,this.current_shooter=null,this.phase=js,this.timer=hf,!0}_sync_collect(t){this.current_shooter!==null&&this.current_shooter.ai_class===ui||this.timer>0&&(this.timer-=t,this.timer>0)||this._sync_advance()}_sync_launch_volley(){this.current_shooter=null,this.awaiting_human=!1,this.phase=lf;for(const t of this.firing_order){const e=this.tanks[t];e.alive&&e.player_index in this._sync_locks&&(this.current_shooter=e,this.fire(e))}this.current_shooter=null,this.timer=PT}_sync_volley(t){for(let e=0;e<$a;e++)this._step_flight();if(this._animate_effects(),!(this.projectiles.length>0||this.explosions.length>0||this.beams.length>0||this.plasma_rings.length>0||this.death_fountains.length>0||this.throe_fx.length>0||this.death_queue.length>0)){if(this.timer>0){this.timer-=t;return}this._do_settle(),this._win_check()?this._end_round():this._sync_start_volley()}}_sim_begin_round(){this.current_shooter=null,this.awaiting_human=!1,this._sim={};for(const t of this.tanks){if(!t.alive)continue;t.inventory[or]>0?t.parachute_deployed=!1:t.parachute_deployed=!0;const e=this.rng.pick(Math.max(1,Dt(NT*1e3)))/1e3;this._sim[t.player_index]={timer:e,shots:0}}this._sim_human=this.tanks.find(t=>t.alive&&t.ai_class===ui)??null,this._sim_keymap=this._sim_build_keymap(this._sim_human),this.phase=tr,this.timer=0}_sim_build_keymap(t){return{}}_sim_in_flight(t){return this.projectiles.some(e=>e.owner===t)}_sim_update(t){for(let e=0;e<$a;e++)this._step_flight();this._animate_effects(),this.projectiles.length===0&&this._do_settle();for(const e of this.tanks)this._battery_auto_trigger(e);if(this.death_queue.length===0&&this._win_check()){this._end_round();return}for(const e of this.tanks){if(!e.alive||e.ai_class===ui)continue;const n=this._sim[e.player_index];if(n===void 0||this._sim_in_flight(e))continue;if(n.timer>0){n.timer-=t;continue}this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind();const[s,r,o]=Ua(this,e);e.angle=Dt(Math.max(0,Math.min(180,s))),e.power=Dt(Math.max(0,Math.min(1e3,r))),e.selected_weapon=o,this.current_shooter=e,this.fire(e),n.shots+=1,n.timer=DT}this.current_shooter=this._sim_human}_sim_human_fire(t){return this._sim_in_flight(t)||(this.current_shooter=t,this.fire(t)),!0}_sim_human_input(t,e){const n=this._sim_human;if(n===null||!n.alive||this.phase!==tr||!t||Object.keys(this._sim_keymap).length===0)return;const s=a=>{const c=this._sim_keymap[a];return c!==void 0&&c>=0&&c<t.length&&!!t[c]};let r=n.angle,o=n.power;s("cw")&&(r-=uf*e),s("ccw")&&(r+=uf*e),s("power_up")&&(o+=ff*e),s("power_down")&&(o-=ff*e),n.angle=Dt(Math.max(0,Math.min(180,r))),n.power=Dt(Math.max(0,Math.min(1e3,o)))}_sim_human_keydown(t){const e=this._sim_human;return e===null||!e.alive||this.phase!==tr||Object.keys(this._sim_keymap).length===0?!1:t===this._sim_keymap.fire?(this._sim_human_fire(e),!0):t===this._sim_keymap.weapon}_step_flight(){for(const t of this.projectiles.slice()){if(!t.active)continue;const e=t.state;if(e.rolling){VS(this,t);continue}if(e.tunneling){t.weapon.behavior==="sandhog"?YS(this,t):XS(this,t);continue}const n=t.vy;YM(t,this.cfg,void 0,this.tanks),Yt.fly_tone(this.cfg.FLY_SOUND,t,this.cfg.is_on("SOUND"));const s=t.bounce_count??0;if(!KM(t,this.cfg,this.w,this.h)){this._resolve_off_field(t);continue}if((t.bounce_count??0)>s&&Yt.play("bounce",this.cfg.is_on("SOUND")),t.weapon.behavior==="mirv"&&!t.split_done&&n>0&&0>=t.vy){const o=this.projectiles.length;if(zS(this,t),t.contact)for(const a of this.projectiles.slice(o))a.contact=!0;continue}this._mag_deflect(t),this._force_deflect(t),this._collect_trace(t);const r=this._check_collision(t);r&&this._resolve_hit(t,r)}for(const t of this.projectiles)t.active||this._flush_trace(t);this.projectiles=this.projectiles.filter(t=>t.active)}_resolve_off_field(t){const e=this.cfg.live_elastic!==void 0?this.cfg.live_elastic:this.cfg.elastic,n=this.h-2,s=Math.max(0,Math.min(this.w-1,t.sx)),r=t.py>=this.h-1,o=e===5,a=t.px<0||t.px>this.w-1,c=t.py<0;let l,h=s,u=n;if(r?(l=!0,h=s,u=n):o&&(a||c)?(h=t.px<0?0:t.px>this.w-1?this.w-2:s,u=c?2:Math.max(2,Math.min(n,t.sy)),l=!0):l=!1,t.active=!1,!l){this.last_landing=[t.sx,t.sy];return}this.last_landing=[h,u];const f=t.weapon.behavior;if(f!=="tracer"){if(f==="digger"||f==="sandhog"){if(Math.abs(t.weapon.blast)<=0)return;en(this,h,u,Ae(this,t.weapon));return}fs(this,t,h,u)}}_flush_trace(t){const e=t.state.trace_path;if(!e||e.length===0)return;const n=t.owner,s=Math.max(0,Math.min(255,(n!==null?n.color:xd)+110));for(const[r,o]of e)this.trace_marks.push([r,o,s]);t.state.trace_path=[]}_collect_trace(t){if(!(this.cfg.is_on("TRACE")||t.weapon.behavior==="tracer"))return;let n=t.state.trace_path;n===void 0&&(n=[],t.state.trace_path=n);const s=Dt(t.prev_px),r=Dt(t.prev_py),o=t.sx,a=t.sy;for(const c of pf(s,r,o,a))(n.length===0||n[n.length-1][0]!==c[0]||n[n.length-1][1]!==c[1])&&n.push(c)}_mag_deflect(t){const e=this.cfg.FIRE_DELAY,n=e===0?uu:uu/e,s=er(this.h-1,ky);for(const r of this.tanks){if(!(r.alive&&r.shield_hp>0&&r.shield_push)||r===t.owner||t.vx===0||Math.abs(Za(t.px-r.x))>By)continue;const o=Za(r.y-t.py);0<o&&o<=s&&(t.vy+=n)}}_force_deflect(t){const e=t.state.force_reflect_in_ring;let n=!1;for(const s of this.tanks){if(!(s.alive&&s.shield_hp>0&&s.shield_deflect))continue;const r=s.half_width+zy,o=t.sx-s.x,a=t.sy-(s.y-4);if(o*o+a*a>=r*r||(n=!0,e))continue;const c=t.sx-s.x,l=s.y-t.sy,h=t.vx,u=-t.vy;if(ho(c)===ho(h)&&ho(l)===ho(u)){t.state.force_reflect_in_ring=!0;continue}const f=Math.atan2(l,c),_=(Math.atan2(u,h)-f)*Hy,g=Math.cos(_),m=Math.sin(_),p=(-g*h-m*u)*fu,T=(m*h-g*u)*fu;t.vx=p,t.vy=-T,wu(s),t.state.force_reflect_in_ring=!0}!n&&e&&(t.state.force_reflect_in_ring=!1)}_check_collision(t){const e=Dt(t.prev_px),n=Dt(t.prev_py),s=t.sx,r=t.sy;for(const[o,a]of pf(e,n,s,r)){if(a>=this.h-1)return{0:"terrain",1:null,2:o,3:this.h-2};for(const c of this.tanks){if(c.alive&&c!==t.owner&&Math.abs(c.x-o)<=c.half_width&&0<=c.y-a&&c.y-a<=10)return{0:"tank",1:c,2:o,3:a};if(c===t.owner&&t.owner!==null&&Math.abs(c.x-o)<=c.half_width&&0<=c.y-a&&c.y-a<=10&&t.armed&&Math.hypot(o-t.owner.x,a-(t.owner.y-4))>16)return{0:"tank",1:c,2:o,3:a}}if(0<=o&&o<this.w&&0<=a&&a<this.h&&this.terrain.is_dirt(o,a))return{0:"terrain",1:null,2:o,3:a}}return null}_resolve_hit(t,e){const n=e[0],s=e[1],r=e[2],o=e[3],a=t.weapon.behavior;if(this.last_landing=[r,o],n==="tank"&&s!==null){if(s.shield_hp>0&&a!=="laser"){a==="digger"||(wu(s),Yt.play("shield_hit",this.cfg.is_on("SOUND"))),t.active=!1;return}if(a==="digger"){t.active=!1,Yt.play("fizzle",this.cfg.is_on("SOUND"));return}if(a==="dirt_sphere"||a==="dirt_slump"||a==="dirt_wedge"||a==="dirt_settle"||a==="riot_sphere"||a==="riot_wedge"||a==="tracer"){fs(this,t,r,o),t.active=!1;return}this.direct_hit_tank=s,cS(this,s),fs(this,t,r,o),t.active=!1}else{if(!t.contact){if(a==="roller"){GS(this,t,r);return}if(a==="digger"){WS(this,t,r,o);return}if(a==="sandhog"){qS(this,t,r,o);return}}if(a==="tracer"){t.active=!1;return}if(t.contact&&a==="digger"){const c=Dt(Ae(this,t.weapon));this.terrain.carve_circle(r,o,c),this.add_explosion(r,o,c,{dirt_only:!0}),t.active=!1;return}if(t.contact&&a==="sandhog"){en(this,r,o,Ae(this,t.weapon)),t.active=!1;return}fs(this,t,r,o),a==="leapfrog"&&t.warheads_left>1&&this._leapfrog_hop(t,r,o),t.active=!1}}_leapfrog_hop(t,e,n){const s=t.owner;if(s===null)return;const r=t.weapon.warheads-t.warheads_left+1,o=t.weapon.params.radii??[20,25,30],a=so(s,this.cfg,t.weapon,350,t.vx>=0?60:120);a.warheads_left=t.warheads_left-1,a.weapon=Vd(t.weapon),a.weapon.behavior="leapfrog",a.weapon.warheads=t.weapon.warheads,a.weapon.blast=o[Math.min(r,o.length-1)],a.px=e,a.py=n-4,a.contact=t.contact,this.projectiles.push(a)}_do_settle(){this.terrain.settle(this.cfg,this.rng);for(const t of this.tanks)t.alive&&this._settle_tank(t)}_settle_tank(t){if(!this.cfg.is_on("FALLING_TANKS")){t.y=Math.max(2,this.terrain.column_top(t.x)-1);return}const e=this.h-2,n=hS(this.terrain,t);let s=0;const r=[[t.x,t.y]];for(;t.y<e&&!this.terrain.is_supported(t.x,t.y,t.half_width);){if(t.y+=1,s+=1,n&&Math.abs(this.cfg.wind)>10&&this.rng.pick(100)<Za(Math.abs(this.cfg.wind))){const c=this.cfg.wind>0?1:-1,l=t.x+c;9<=l&&l<=this.w-10&&!this.terrain.is_solid(l,t.y)&&(t.x=l)}r.push([t.x,t.y])}if(s<=0)return;const o=s*_d,a=this._tank_under(t);if(a!==null){Wi(this,a,o+Ny),Au(this,t,er(o,2)+Uy);return}if(n){Yt.play("parachute",this.cfg.is_on("SOUND")),this._announce_defense(t,ki),t.inventory[ki]>0&&(t.inventory[ki]-=1),t.parachutes<1&&(t.parachute_deployed=!1),this._start_chute_descent(t,r);return}Au(this,t,o)}_start_chute_descent(t,e){!e||e.length<2||(t.chute_descent={path:e,i:0})}_step_chute_anims(t){for(const e of this.tanks){const n=e.chute_descent;n&&(n.i+=UT,n.i>=n.path.length-1&&(e.chute_descent=null))}}_tank_under(t){for(const e of this.tanks)if(e!==t&&e.alive&&Math.abs(e.x-t.x)<=e.half_width+2&&0<=t.y-e.y&&t.y-e.y<=4)return e;return null}add_explosion(t,e,n,s){const r=s?.dirt_only??!1,o=s?.nuke??!1;n=Math.max(2,Dt(n));const a=o||n<40?1:2;let c;o?c="nuke":r?c="stamp":c="grow";const l=o||!r&&n>=ie.EXPLO_FLASH_MIN_R;this.explosions.push({x:Dt(t),y:Dt(e),maxr:n,style:c,dirt:r,step:a,flash:l,phase:0,frame:0})}add_beam(t){this.beams.push({pts:t,frame:0})}add_plasma_ring(t,e,n){n=Math.max(2,Dt(n)),this.plasma_rings.push({x:Dt(t),y:Dt(e),maxr:n,r:1,dir:1})}_step_plasma_rings(){for(const t of this.plasma_rings)t.r+=t.dir,t.r>=t.maxr&&(t.r=t.maxr,t.dir=-1);this.plasma_rings=this.plasma_rings.filter(t=>t.r>=1)}add_flash(t,e,n=[255,255,235],s=0){this.flashes.push({up:Math.max(1,Dt(t)),down:Math.max(1,Dt(e)),frame:-Math.max(0,Dt(s)),rgb:n})}_step_flashes(){for(const t of this.flashes)t.frame+=1;this.flashes=this.flashes.filter(t=>t.frame<=t.up+t.down)}add_death_fountain(t,e,n,s){this.death_fountains.push({col:Dt(t),y:Dt(e),top:Dt(n),color:Dt(s?.color??15),stride:Dt(s?.stride??6),scatter:Dt(s?.scatter??1)})}_step_death_fountains(){for(const t of this.death_fountains){const e=(this.rng.pick(3)-1)*t.scatter;t.col=Math.max(0,Math.min(this.w-1,t.col+e)),t.y-=t.stride}this.death_fountains=this.death_fountains.filter(t=>t.y>=t.top)}add_throe(t,e,n,s,r=null){const o={kind:t,x:Dt(e),y:Dt(n),color:Dt(s),frame:0,life:r?Dt(r):ie.THROE_LIFE[t]??40};if(t==="fireworks"||t==="sparkle"){const a=[];for(let c=0;c<36;c++){const l=this.rng.pick(360)*Math.PI/180,h=1+this.rng.pick(40)/10;a.push([e,n,h*Math.cos(l),h*Math.sin(l)-2.4])}o.parts=a}else if(t==="debris"){const a=[];for(let c=0;c<14;c++){const l=this.rng.pick(360)*Math.PI/180,h=.6+this.rng.pick(24)/10;a.push([e,n,h*Math.cos(l),h*Math.sin(l)-3])}o.parts=a}else t==="sink"&&this.terrain.carve_circle(Dt(e),Dt(n),11);this.throe_fx.push(o)}_step_throe_fx(){for(const t of this.throe_fx)if(t.frame+=1,t.kind==="fireworks"||t.kind==="sparkle"||t.kind==="debris")for(const e of t.parts)e[0]+=e[2],e[1]+=e[3],e[3]+=.35;this.throe_fx=this.throe_fx.filter(t=>t.frame<t.life)}_step_explosion(t){if(t.frame+=1,t.style==="stamp"){t.frame>ie.EXPLO_STAMP_HOLD&&(t.phase=3);return}const e=t.style==="nuke"?ie.NUKE_FLASH_FRAMES:ie.EXPLO_FLASH_FRAMES,n=t.phase;n===0?t.frame*t.step>=t.maxr&&(t.phase=t.flash?1:2,t.frame=0):n===1?t.frame>=e&&(t.phase=2,t.frame=0):n===2&&t.frame>=ie.EXPLO_SHRINK_FRAMES&&(t.phase=3)}_animate_effects(){this._step_death_fountains();for(const t of this.explosions)this._step_explosion(t);this.explosions=this.explosions.filter(t=>t.phase<3);for(const t of this.beams)t.frame+=1;this.beams=this.beams.filter(t=>t.frame<=8),this._step_plasma_rings(),this._step_throe_fx(),this._step_death_queue()}_step_death_queue(){const t=this.cfg.is_on("SOUND");for(const[e,n]of HE(this))if(e==="award"){ZM(this,this.current_shooter,n);const s=$E(n,this.talk,this.rng);s!==null&&za(this,n,s,this.talk)}else e==="front"?(this._death_pulse={color:Dt(n),frame:0},Yt.play("throe_front",t)):e==="thud"?Yt.play("throe_thud",t):e==="blast"?Yt.play("explosion",t,{size:n}):e==="sink"?Yt.play("sink",t):e==="cookoff"?Yt.play("explosion",t,{size:18}):e==="climb"&&Yt.play("death",t)}_tick_sky(){this._step_flashes(),this._tick_shield_fades(),bE(this)}_tick_palette(t){const e=this.lut;this._pal_accum+=t*Dy;const n=Dt(this._pal_accum);this._pal_accum-=n;const s=this._sliceTable(this._lut_base,Kc,Ru);if(e.set_band(Kc,Ru,s),this._tick_explosion_band(),this._tick_lightning_band(),this._death_pulse!==null){const r=this._death_pulse,o=r.color,a=this._lut_base[o];if(r.frame>=40)e.set_band(o,o,[a]),this._death_pulse=null;else{const c=[255,255,255];e.set_band(o,o,[r.frame%2?c:a]),r.frame+=1}}this._tick_digger_band(n),this._tick_firewall_band(n)}_tick_explosion_band(){const t=mS,e=_S,n=gd;let s=null,r=null;for(const o of this.explosions){if(o.style==="stamp")continue;const a=o.phase;if(a===0||a===1){s=o;break}if(a===2){const c=Math.min(1,o.frame/ie.EXPLO_SHRINK_FRAMES);r=r===null?c:Math.min(r,c)}}if(s!==null||r!==null){if(this.lut.reramp_band(t,n,ie._EXPLO_HOT_OUTER,ie._EXPLO_HOT_INNER),this.lut.reramp_band(n,e,ie._EXPLO_HOT_INNER,ie._EXPLO_HOT_INNER),r!==null&&s===null){const o=Math.max(0,1-.9*r),a=[];for(let c=t;c<=e;c++){const l=this.lut.table[c];a.push([Math.trunc(l[0]*o)&255,Math.trunc(l[1]*o)&255,Math.trunc(l[2]*o)&255])}this.lut.set_band(t,e,a)}this._explo_band_active=!0}else this._explo_band_active&&(this.lut.set_band(t,e,this._sliceTable(this._lut_base,t,e)),this._explo_band_active=!1)}_tick_lightning_band(){const t=this.flashes;if(t.length===0)return;let e=0;for(const o of t){const a=o.frame;if(a<0)continue;const c=o.up,l=o.down,h=a<=c?a/c:Math.max(0,1-(a-c)/l);e=Math.max(e,h)}if(e<=0)return;const n=gS,s=xS,r=[];for(let o=n;o<=s;o++){const a=this.lut.table[o],c=Math.max(0,Math.min(255,Math.trunc(a[0]*(1-e)+255*e))),l=Math.max(0,Math.min(255,Math.trunc(a[1]*(1-e)+255*e))),h=Math.max(0,Math.min(255,Math.trunc(a[2]*(1-e)+255*e)));r.push([c,l,h])}this.lut.set_band(n,s,r)}start_digger_cycle(){this._digger_cycle=ie.DIGGER_CYCLE_FRAMES}_tick_digger_band(t=1){const e=ar,n=xs,s=n-e+1;if(this._digger_cycle>0){this._digger_step=(this._digger_step+t)%s;const r=this._sliceTable(this._lut_base,e,n);this.lut.set_band(e,n,this._rollRows(r,this._digger_step)),this._digger_cycle-=1,this._digger_cycle===0&&(this.lut.set_band(e,n,r),this._digger_step=0,this.terrain.clear_index_band(e,n))}}add_firewall(t,e,n){this.firewalls.push({x:Dt(t),y0:Dt(Math.min(e,n)),y1:Dt(Math.max(e,n)),frame:0}),Iu(this.lut,0),this._firewall_band_active=!0}_tick_firewall_band(t=1){if(this.firewalls.length>0){this._firewall_counter+=t,this._firewall_counter>100&&(this._firewall_counter%=101),Iu(this.lut,this._firewall_counter),this._firewall_band_active=!0;for(const e of this.firewalls)e.frame+=1;this.firewalls=this.firewalls.filter(e=>e.frame<=ie.FIREWALL_FRAMES)}else this._firewall_band_active&&(this.lut.set_index(Zc,this._lut_base[Zc]),this.lut.set_band($c,Cu,this._sliceTable(this._lut_base,$c,Cu)),this.lut.set_band(Po,Lu,this._sliceTable(this._lut_base,Po,Lu)),this._firewall_band_active=!1)}_sliceTable(t,e,n){const s=[];for(let r=e;r<=n;r++){const o=t[r];s.push([o[0],o[1],o[2]])}return s}_rollRows(t,e){const n=t.length;if(n===0)return t;const s=(e%n+n)%n,r=new Array(n);for(let o=0;o<n;o++)r[(o+s)%n]=t[o];return r}on_tank_destroyed(t,e=null){BE(this,t,e)}_end_round(){JM(this),this.tanks.some(t=>t.alive)&&Yt.play("victory",this.cfg.is_on("SOUND")),this.round_index+=1,this.ranking=Su(this),this.phase=af}mass_kill(){const t=this.tanks.length;if(t===0)return;const e=this.cfg.scoring===Xo?t*vd:yd,n=er(e,t);for(const s of this.tanks)s.alive=!1,s.health=0,s.score+=n,s.cash=Math.max(0,s.cash+n);this.round_index+=1,this.ranking=Su(this),this.phase=af}proceed_after_round(){if(this.round_index>=this.cfg.MAXROUNDS){this.winner=this.ranking.length>0?this.ranking[0]:null,this.phase=LT;return}this.economy.accrue_interest(this.tanks),this.economy.update_repeated_use(this.cfg.MAXROUNDS-this.round_index-1),this.economy.market_update(this.tanks.length),this.phase=cf}run_ai_buys(){for(const t of this.tanks)t.ai_class!==ui&&IM(this,t)}begin_next_round(){this.start_round()}};v(ie,"SHIELD_FADE_FRAMES",51),v(ie,"EXPLO_FLASH_FRAMES",49),v(ie,"EXPLO_SHRINK_FRAMES",25),v(ie,"EXPLO_FLASH_MIN_R",31),v(ie,"EXPLO_STAMP_HOLD",3),v(ie,"NUKE_FLASH_FRAMES",129),v(ie,"THROE_LIFE",{ball:60,spiral:46,sparkle:46,ring:40,fireworks:56,sink:34,debris:50}),v(ie,"_EXPLO_HOT_OUTER",[24,0,0]),v(ie,"_EXPLO_HOT_INNER",[252,0,0]),v(ie,"DIGGER_CYCLE_FRAMES",200),v(ie,"FIREWALL_FRAMES",120);let tl=ie;function OT(i,t){const e=i.w,n=i.h,s=Math.min(e,256),r=Math.min(n,64),o=new vr(e,n,s,r);o.rotateX(-Math.PI/2);const a=new Vo({color:8947848,flatShading:!0,side:ln}),c=new ke(o,a);return c.receiveShadow=!0,c.castShadow=!0,up(c,i),c}function up(i,t){const e=i.geometry,n=e.attributes.position,s=t.w,r=t.h,o=300,a=0;Math.sqrt(n.count/((e.parameters.heightSegments??64)+1));for(let c=0;c<n.count;c++){const l=n.getX(c),h=Math.round(l+s/2);if(h<0||h>=s){n.setY(c,a);continue}let u=r-1;for(let d=0;d<r;d++)if(t.is_dirt(h,d)){u=d;break}const f=(r-u)/r*o;n.setY(c,f)}n.needsUpdate=!0,e.computeVertexNormals()}function mf(i,t){if(t===em)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Hc||t===Of){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Hc)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class FT extends Os{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new GT(e)}),this.register(function(e){return new VT(e)}),this.register(function(e){return new QT(e)}),this.register(function(e){return new jT(e)}),this.register(function(e){return new tb(e)}),this.register(function(e){return new XT(e)}),this.register(function(e){return new qT(e)}),this.register(function(e){return new YT(e)}),this.register(function(e){return new KT(e)}),this.register(function(e){return new zT(e)}),this.register(function(e){return new $T(e)}),this.register(function(e){return new WT(e)}),this.register(function(e){return new JT(e)}),this.register(function(e){return new ZT(e)}),this.register(function(e){return new kT(e)}),this.register(function(e){return new eb(e)}),this.register(function(e){return new nb(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ur.extractUrlBase(t);o=ur.resolveURL(l,this.path)}else o=ur.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new hd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===fp){try{o[Ht.KHR_BINARY_GLTF]=new ib(t)}catch(u){s&&s(u);return}r=JSON.parse(o[Ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new _b(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ht.KHR_MATERIALS_UNLIT:o[u]=new HT;break;case Ht.KHR_DRACO_MESH_COMPRESSION:o[u]=new sb(r,this.dracoLoader);break;case Ht.KHR_TEXTURE_TRANSFORM:o[u]=new rb;break;case Ht.KHR_MESH_QUANTIZATION:o[u]=new ob;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function BT(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kT{constructor(t){this.parser=t,this.name=Ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new At(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Oe);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ud(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new my(h),l.distance=u;break;case"spot":l=new dy(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Hn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class HT{constructor(){this.name=Ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Fi}extendParams(t,e,n){const s=[];t.color=new At(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Oe),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,be))}return Promise.all(s)}}class zT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class GT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ut(a,a)}return Promise.all(r)}}class VT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class WT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class XT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new At(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Oe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,be)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class qT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class YT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new At().setRGB(a[0],a[1],a[2],Oe),Promise.all(r)}}class KT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class $T{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new At().setRGB(a[0],a[1],a[2],Oe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,be)),Promise.all(r)}}class ZT{constructor(t){this.parser=t,this.name=Ht.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class JT{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class QT{constructor(t){this.parser=t,this.name=Ht.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class jT{constructor(t){this.parser=t,this.name=Ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class tb{constructor(t){this.parser=t,this.name=Ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class eb{constructor(t){this.name=Ht.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class nb{constructor(t){this.name=Ht.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Je.TRIANGLES&&l.mode!==Je.TRIANGLE_STRIP&&l.mode!==Je.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const _ of u){const g=new Lt,m=new I,p=new Mi,T=new I(1,1,1),A=new Kv(_.geometry,_.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&T.fromBufferAttribute(c.SCALE,S),A.setMatrixAt(S,g.compose(m,p,T));for(const S in c)if(S==="_COLOR_0"){const O=c[S];A.instanceColor=new Vc(O.array,O.itemSize,O.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);ue.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),d.push(A)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const fp="glTF",nr=12,_f={JSON:1313821514,BIN:5130562};class ib{constructor(t){this.name=Ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==fp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-nr,r=new DataView(t,nr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===_f.JSON){const l=new Uint8Array(t,nr+o,a);this.content=n.decode(l)}else if(c===_f.BIN){const l=nr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sb{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ht.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=el[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=el[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=vs[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}u(d)},a,l,Oe,f)})})}}class rb{constructor(){this.name=Ht.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ob{constructor(){this.name=Ht.KHR_MESH_QUANTIZATION}}class dp extends yr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,f=u*u,d=f*u,_=t*l,g=_-l,m=-2*d+3*f,p=d-f,T=1-m,A=p-f+u;for(let S=0;S!==a;S++){const O=o[g+S+a],C=o[g+S+c]*h,w=o[_+S+a],U=o[_+S]*h;r[S]=T*O+A*C+m*w+p*U}return r}}const ab=new Mi;class cb extends dp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return ab.fromArray(r).normalize().toArray(r),r}}const Je={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gf={9728:Ne,9729:Ye,9984:Af,9985:fo,9986:ir,9987:Gn},xf={33071:di,33648:bo,10497:Es},Ja={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},el={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lb={CUBICSPLINE:void 0,LINEAR:pr,STEP:dr},Qa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Vo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function Ii(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Hn(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ub(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function fb(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function db(i){let t;const e=i.extensions&&i.extensions[Ht.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ja(e.attributes):t=i.indices+":"+ja(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+ja(i.targets[n]);return t}function ja(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function nl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mb=new Lt;class _b{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new BT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new uy(this.options.manager):this.textureLoader=new gy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ii(r,a,s),Hn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ht.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ur.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ja[s.type],a=vs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ue(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ja[s.type],l=vs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,m;if(d&&d!==u){const p=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let A=e.cache.get(T);A||(g=new l(a,p*d,s.count*d/h),A=new ed(g,d/h),e.cache.add(T,A)),m=new _r(A,c,f%d/h,_)}else a===null?g=new l(s.count*c):g=new l(a,f,s.count*c),m=new Ue(g,c,_);if(s.sparse!==void 0){const p=Ja.SCALAR,T=vs[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,O=new T(o[1],A,s.sparse.count*p),C=new l(o[2],S,s.sparse.count*c);a!==null&&(m=new Ue(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,U=O.length;w<U;w++){const E=O[w];if(m.setX(E,C[w*c]),c>=2&&m.setY(E,C[w*c+1]),c>=3&&m.setZ(E,C[w*c+2]),c>=4&&m.setW(E,C[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=gf[f.magFilter]||Ye,h.minFilter=gf[f.minFilter]||Gn,h.wrapS=xf[f.wrapS]||Es,h.wrapT=xf[f.wrapT]||Es,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ne&&h.minFilter!==Ye,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let _=f;e.isImageBitmapLoader===!0&&(_=function(g){const m=new Se(g);m.needsUpdate=!0,f(m)}),e.load(ur.resolveURL(u,r.path),_,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Hn(u,o),u.userData.mimeType=o.mimeType||pb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ad,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new od,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Vo}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[Ht.KHR_MATERIALS_UNLIT]){const u=s[Ht.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new At(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Oe),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,be)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=ln);const h=r.alphaMode||Qa.OPAQUE;if(h===Qa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Qa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Fi&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ut(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Fi&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Fi){const u=r.emissiveFactor;a.emissive=new At().setRGB(u[0],u[1],u[2],Oe)}return r.emissiveTexture!==void 0&&o!==Fi&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,be)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Hn(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ii(s,u,r),u})}createUniqueName(t){const e=te.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return vf(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=db(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Ht.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=vf(new _n,l,e),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?hb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,_=h.length;d<_;d++){const g=h[d],m=o[d];let p;const T=l[d];if(m.mode===Je.TRIANGLES||m.mode===Je.TRIANGLE_STRIP||m.mode===Je.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Xv(g,T):new ke(g,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Je.TRIANGLE_STRIP?p.geometry=mf(p.geometry,Of):m.mode===Je.TRIANGLE_FAN&&(p.geometry=mf(p.geometry,Hc));else if(m.mode===Je.LINES)p=new $v(g,T);else if(m.mode===Je.LINE_STRIP)p=new xl(g,T);else if(m.mode===Je.LINE_LOOP)p=new Zv(g,T);else if(m.mode===Je.POINTS)p=new Jv(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fb(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Hn(p,r),m.extensions&&Ii(s,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,_=u.length;d<_;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ii(s,u[0],r),u[0];const f=new Bi;r.extensions&&Ii(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Be(Rm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new zo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Hn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Lt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new gl(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],_=s.samplers[d.sampler],g=d.target,m=g.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,T=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],_=u[2],g=u[3],m=u[4],p=[];for(let T=0,A=f.length;T<A;T++){const S=f[T],O=d[T],C=_[T],w=g[T],U=m[T];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=n._createAnimationTracks(S,O,C,w,U);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new sy(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,mb)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new sd:l.length>1?h=new Bi:l.length===1?h=l[0]:h=new ue,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Hn(h,r),r.extensions&&Ii(n,h,r),r.matrix!==void 0){const u=new Lt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new Bi;n.name&&(r.name=s.createUniqueName(n.name)),Hn(r,n),n.extensions&&Ii(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof mn||f instanceof Se)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];hi[r.path]===hi.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(hi[r.path]){case hi.weights:l=Rs;break;case hi.rotation:l=Cs;break;case hi.position:case hi.scale:l=Ls;break;default:switch(n.itemSize){case 1:l=Rs;break;case 2:case 3:default:l=Ls;break}break}const h=s.interpolation!==void 0?lb[s.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+hi[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=nl(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Cs?cb:dp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gb(i,t,e){const n=t.attributes,s=new Qn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const h=nl(vs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=nl(vs[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vf(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=el[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return zt.workingColorSpace!==Oe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zt.workingColorSpace}" not supported.`),Hn(i,t),gb(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?ub(i,t.targets,e):i})}const pp=new Map,xb=new FT,tc=new Map;async function vb(i){if(tc.has(i))return tc.get(i).clone(!0);const t=await xb.loadAsync(i);return tc.set(i,t.scene),t.scene.clone(!0)}function us(i,t){return i.traverse(e=>{if(e.name.startsWith(t))return e}),null}const yf={0:"/models/falcon9.glb",1:"/models/new_shepard.glb",2:"/models/delta_spaceplane.glb",3:"/models/terran_r.glb",4:"/models/starship.glb",5:"/models/falcon9.glb",6:"/models/new_shepard.glb",7:"/models/starship.glb"};function yb(i){return yf[i.tank_icon??i.player_index]??yf[0]}async function Mb(i,t){const e=yb(i),n=await vb(e),s=us(n,"turret")??us(n,"weapon"),r=us(n,"nozzle")??us(n,"engine"),o=us(n,"nose")??us(n,"cone");n.position.set(i.x-512,0,0),t.add(n);const a={tank:i,group:n,turret:s,nozzle:r,noseCone:o};return pp.set(i.player_index,a),a}function Sb(i,t){for(const e of pp.values()){const n=e.tank;if(!n.alive){e.group.visible=!1;continue}e.group.visible=!0;const s=Math.round(n.x),r=s-t.w/2;let o=0;for(let a=0;a<t.h;a++)if(t.is_dirt(s,a)){o=(t.h-a)/t.h*300;break}if(e.group.position.set(r,o,0),e.turret){const a=(n.angle-90)*(Math.PI/180);e.turret.rotation.z=a}}}const To=[],Eb=new nd({map:null,blending:nc,depthWrite:!1,transparent:!0,opacity:.8});function Tb(i,t,e,n,s,r){const o=i-s/2,a=(r-t)/r*300+e*.3,c=0,l=new Vv(Eb.clone());l.position.set(o,a,c),l.scale.set(e*.5,e*.5,1),n.add(l),To.push({sprite:l,maxRadius:e,frame:0,age:0})}function bb(i){for(let e=To.length-1;e>=0;e--){const n=To[e];n.age+=i;const s=n.age/.6;if(s>=1){n.sprite.removeFromParent(),n.sprite.material.dispose(),To.splice(e,1);continue}const r=n.maxRadius*(.3+s*.7);n.sprite.scale.set(r,r,1),n.sprite.material.opacity=1-s}}const uo=new Set;function Ab(i,t){const e=new Set;for(const n of i.explosions){const s=n.x*1e4+n.y;e.add(s),uo.has(s)||(Tb(n.x,n.y,n.maxr||20,t,i.w,i.h),uo.add(s))}for(const n of uo)e.has(n)||uo.delete(n)}function wb(i){return{x:0,y:0}}const ec=[];new Ps(2,2,2);const Rb=-50;function Cb(i){for(let t=ec.length-1;t>=0;t--){const e=ec[t];if(e.age+=i,e.age>=e.life){e.mesh.removeFromParent(),e.mesh.material.dispose(),ec.splice(t,1);continue}e.velocity.y+=Rb*i,e.mesh.position.x+=e.velocity.x*i,e.mesh.position.y+=e.velocity.y*i,e.mesh.position.z+=e.velocity.z*i,e.mesh.position.y<0&&(e.mesh.position.y=0,e.velocity.y*=-.3,e.velocity.x*=.5);const n=e.age/e.life,s=e.mesh.material;s.opacity=1-n,s.transparent=!0}}const Lb={earth:{bg:4878245,fog:8892112,fogNear:400,fogFar:900},moon:{bg:328976,fog:0,fogNear:300,fogFar:700},mars:{bg:9127187,fog:12883306,fogNear:200,fogFar:600}};function mp(i,t){const e=Lb[t];i.background=new At(e.bg),i.fog=new _l(e.fog,e.fogNear,e.fogFar);const n=i.children.find(s=>s instanceof fd);n&&(t==="moon"?n.intensity=.3:t==="mars"?n.intensity=.5:n.intensity=.6)}let Mf="earth",Ib=new xy;function Pb(i,t,e,n){const s=Math.min(Ib.getDelta(),.1);i.update(s),up(n,i.terrain),Sb(i,i.terrain),Ab(i,t),bb(s),Cb(s);const r=wb();e.position.x+=r.x,e.position.y+=r.y;const o=Db(i.round_index);o!==Mf&&(Mf=o,mp(t,o))}function Db(i){return i<=1?"earth":i<=3?"moon":"mars"}const Nb=document.getElementById("game"),Tr=new zv({canvas:Nb,antialias:!0});Tr.setPixelRatio(Math.min(window.devicePixelRatio,2));Tr.setSize(window.innerWidth,window.innerHeight);Tr.shadowMap.enabled=!0;const Jn=new Gv;Jn.background=new At(657946);const Ub=window.innerWidth/window.innerHeight,il=800,Sf=il*Ub,zn=new zo(-Sf/2,Sf/2,il/2,-il/2,.1,2e3);zn.position.set(0,100,500);zn.lookAt(0,350,0);const Ob=new fd(4210784,.6);Jn.add(Ob);const Ei=new ud(16777164,1.2);Ei.position.set(200,400,100);Ei.castShadow=!0;Ei.shadow.mapSize.set(1024,1024);Ei.shadow.camera.left=-600;Ei.shadow.camera.right=600;Ei.shadow.camera.top=400;Ei.shadow.camera.bottom=-400;Jn.add(Ei);const Fb=42;Sr.seed(Fb);const Bs=new Dl;Bs.GRAVITY=.2;Bs.wind=0;Bs.MAX_WIND=200;Bs.INITIAL_CASH=5e3;Bs.SOUND="OFF";const He=new tl(Bs,1024,768);He.add_player("Elon Musk",0,0,0);He.add_player("Jeff Bezos",1,1,1);He.add_player("Trump",4,2,7);He.add_player("Scam Altman",5,3,7);He.new_game();const _p=OT(He.terrain);Jn.add(_p);mp(Jn,"earth");async function Bb(){for(const i of He.tanks)try{await Mb(i,Jn)}catch{console.warn(`No 3D model for ${i.name}, using fallback`)}}const gp={};window.addEventListener("keydown",i=>{if(gp[i.key]=!0,He.phase===ds&&He.awaiting_human){const t=He.current_shooter;i.key==="ArrowLeft"&&(t.angle=Math.min(180,t.angle+2)),i.key==="ArrowRight"&&(t.angle=Math.max(0,t.angle-2)),i.key==="ArrowUp"&&(t.power=Math.min(1e3,t.power+25)),i.key==="ArrowDown"&&(t.power=Math.max(0,t.power-25)),i.key==="Tab"&&(i.preventDefault(),t.selected_weapon=(t.selected_weapon+1)%32),(i.key===" "||i.key==="Enter")&&(i.preventDefault(),He.fire())}});window.addEventListener("keyup",i=>{gp[i.key]=!1});window.addEventListener("resize",()=>{const i=window.innerWidth/window.innerHeight,t=800,e=t*i;zn.left=-e/2,zn.right=e/2,zn.top=t/2,zn.bottom=-t/2,zn.updateProjectionMatrix(),Tr.setSize(window.innerWidth,window.innerHeight)});function sl(){requestAnimationFrame(sl),Pb(He,Jn,zn,_p),Tr.render(Jn,zn)}async function kb(){const i=document.getElementById("loading-bar"),t=document.getElementById("loading-pct"),e=document.getElementById("loading");function n(r){i.style.width="100%",t.textContent=r??"Ready",t.style.color=r?"#f44":"",setTimeout(()=>e?.classList.add("done"),600)}function s(r,o){t.textContent=r,i.style.width=o+"%"}try{s("Seeding RNG...",10),Sr.seed(42),s("Starting engine...",20),He.start_round(),s("Building terrain...",60),s("Loading rockets...",80),Bb().catch(()=>{}),s("",100),n(),requestAnimationFrame(sl)}catch(r){console.error("Boot failed:",r),n("Error: "+String(r).slice(0,60)),requestAnimationFrame(sl)}}kb();window.__game=He;window.__scene=Jn;
