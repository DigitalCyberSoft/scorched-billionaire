var Fg=Object.defineProperty;var kg=(i,t,e)=>t in i?Fg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var g=(i,t,e)=>kg(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="170",Bg=0,Uu=1,Hg=2,Zp=1,zg=2,ri=3,pi=0,Xe=1,wn=2,Fi=0,Gs=1,bl=2,Ou=3,Fu=4,Vg=5,ts=100,Gg=101,Wg=102,Xg=103,qg=104,Yg=200,Kg=201,$g=202,Zg=203,Ml=204,El=205,Jg=206,jg=207,Qg=208,t0=209,e0=210,n0=211,i0=212,s0=213,r0=214,wl=0,Sl=1,Tl=2,Ks=3,Al=4,Rl=5,Cl=6,Ll=7,Jp=0,o0=1,a0=2,ki=0,c0=1,l0=2,h0=3,u0=4,d0=5,f0=6,p0=7,ku="attached",m0="detached",jp=300,$s=301,Zs=302,Il=303,Pl=304,Ba=306,Js=1e3,Di=1001,pa=1002,Fe=1003,Qp=1004,Fr=1005,Ge=1006,ta=1007,ci=1008,mi=1009,tm=1010,em=1011,$r=1012,Uh=1013,hs=1014,Rn=1015,no=1016,Oh=1017,Fh=1018,js=1020,nm=35902,im=1021,sm=1022,ln=1023,rm=1024,om=1025,Ws=1026,Qs=1027,kh=1028,Bh=1029,am=1030,Hh=1031,zh=1033,ea=33776,na=33777,ia=33778,sa=33779,Nl=35840,Dl=35841,Ul=35842,Ol=35843,Fl=36196,kl=37492,Bl=37496,Hl=37808,zl=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Kl=37816,$l=37817,Zl=37818,Jl=37819,jl=37820,Ql=37821,ra=36492,th=36494,eh=36495,cm=36283,nh=36284,ih=36285,sh=36286,Zr=2300,Jr=2301,oc=2302,Bu=2400,Hu=2401,zu=2402,_0=2500,g0=0,lm=1,rh=2,x0=3200,y0=3201,hm=0,v0=1,Ni="",Ae="srgb",He="srgb-linear",Ha="linear",ie="srgb",gs=7680,Vu=519,b0=512,M0=513,E0=514,um=515,w0=516,S0=517,T0=518,A0=519,oh=35044,Gu="300 es",li=2e3,ma=2001;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wu=1234567;const Wr=Math.PI/180,tr=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Vh(i,t){return(i%t+t)%t}function R0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function C0(i,t,e){return i!==t?(e-i)/(t-i):0}function Xr(i,t,e){return(1-e)*i+e*t}function L0(i,t,e,n){return Xr(i,t,1-Math.exp(-e*n))}function I0(i,t=1){return t-Math.abs(Vh(i,t*2)-t)}function P0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function N0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function D0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function U0(i,t){return i+Math.random()*(t-i)}function O0(i){return i*(.5-Math.random())}function F0(i){i!==void 0&&(Wu=i);let t=Wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function k0(i){return i*Wr}function B0(i){return i*tr}function H0(i){return(i&i-1)===0&&i!==0}function z0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function V0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function G0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const W0={DEG2RAD:Wr,RAD2DEG:tr,generateUUID:Cn,clamp:De,euclideanModulo:Vh,mapLinear:R0,inverseLerp:C0,lerp:Xr,damp:L0,pingpong:I0,smoothstep:P0,smootherstep:N0,randInt:D0,randFloat:U0,randFloatSpread:O0,seededRandom:F0,degToRad:k0,radToDeg:B0,isPowerOfTwo:H0,ceilPowerOfTwo:z0,floorPowerOfTwo:V0,setQuaternionFromProperEuler:G0,normalize:ee,denormalize:Sn};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],_=s[3],p=s[6],w=s[1],S=s[4],v=s[7],O=s[2],R=s[5],A=s[8];return r[0]=o*x+a*w+c*O,r[3]=o*_+a*S+c*R,r[6]=o*p+a*v+c*A,r[1]=l*x+h*w+u*O,r[4]=l*_+h*S+u*R,r[7]=l*p+h*v+u*A,r[2]=d*x+f*w+m*O,r[5]=d*_+f*S+m*R,r[8]=d*p+f*v+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ac.makeScale(t,e)),this}rotate(t){return this.premultiply(ac.makeRotation(-t)),this}translate(t,e){return this.premultiply(ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new kt;function dm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function X0(){const i=jr("canvas");return i.style.display="block",i}const Xu={};function kr(i){i in Xu||(Xu[i]=!0,console.warn(i))}function q0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Y0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function K0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gt={enabled:!0,workingColorSpace:He,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?Ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const qu=[.64,.33,.3,.6,.15,.06],Yu=[.2126,.7152,.0722],Ku=[.3127,.329],$u=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[He]:{primaries:qu,whitePoint:Ku,transfer:Ha,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:Yu,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:qu,whitePoint:Ku,transfer:ie,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:Yu,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});let xs;class $0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=jr("canvas")),xs.width=t.width,xs.height=t.height;const n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Z0=0;class fm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cc(s[o].image)):r.push(cc(s[o]))}else r=cc(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J0=0;class ve extends or{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Di,s=Di,r=Ge,o=ci,a=ln,c=mi,l=ve.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Cn(),this.name="",this.source=new fm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=jp;ve.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],_=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+_)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(f+1)/2,O=(p+1)/2,R=(h+d)/4,A=(u+x)/4,N=(m+_)/4;return S>v&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=A/n):v>O?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=N/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=A/r,s=N/r),this.set(n,s,r,e),this}let w=Math.sqrt((_-m)*(_-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(_-m)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j0 extends or{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends j0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pm extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q0 extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let _=1-a;const p=c*d+l*f+h*m+u*x,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const O=Math.sqrt(S),R=Math.atan2(O,p*w);_=Math.sin(_*R)/O,a=Math.sin(a*R)/O}const v=a*w;if(c=c*_+d*v,l=l*_+f*v,h=h*_+m*v,u=u*_+x*v,_===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ju.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lc.copy(this).projectOnVector(t),this.sub(lc)}reflect(t){return this.sub(lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new P,Ju=new zi;class xi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),mo.subVectors(this.max,gr),ys.subVectors(t.a,gr),vs.subVectors(t.b,gr),bs.subVectors(t.c,gr),bi.subVectors(vs,ys),Mi.subVectors(bs,vs),Wi.subVectors(ys,bs);let e=[0,-bi.z,bi.y,0,-Mi.z,Mi.y,0,-Wi.z,Wi.y,bi.z,0,-bi.x,Mi.z,0,-Mi.x,Wi.z,0,-Wi.x,-bi.y,bi.x,0,-Mi.y,Mi.x,0,-Wi.y,Wi.x,0];return!hc(e,ys,vs,bs,mo)||(e=[1,0,0,0,1,0,0,0,1],!hc(e,ys,vs,bs,mo))?!1:(_o.crossVectors(bi,Mi),e=[_o.x,_o.y,_o.z],hc(e,ys,vs,bs,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,po=new xi,ys=new P,vs=new P,bs=new P,bi=new P,Mi=new P,Wi=new P,gr=new P,mo=new P,_o=new P,Xi=new P;function hc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const tx=new xi,xr=new P,uc=new P;class Yn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(uc)),this.expandByPoint(xr.copy(t.center).sub(uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new P,dc=new P,go=new P,Ei=new P,fc=new P,xo=new P,pc=new P;class za{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dc.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(dc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=Ei.dot(this.direction),c=-Ei.dot(go),l=Ei.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dc).addScaledVector(go,d),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){fc.subVectors(e,t),xo.subVectors(n,t),pc.crossVectors(fc,xo);let o=this.direction.dot(pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const c=a*this.direction.dot(xo.crossVectors(Ei,xo));if(c<0)return null;const l=a*this.direction.dot(fc.cross(Ei));if(l<0||c+l>o)return null;const h=-a*Ei.dot(pc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,_){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,_)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ex,t,nx)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),wi.crossVectors(n,Ze),wi.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),wi.crossVectors(n,Ze)),wi.normalize(),yo.crossVectors(Ze,wi),s[0]=wi.x,s[4]=yo.x,s[8]=Ze.x,s[1]=wi.y,s[5]=yo.y,s[9]=Ze.y,s[2]=wi.z,s[6]=yo.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],_=n[10],p=n[14],w=n[3],S=n[7],v=n[11],O=n[15],R=s[0],A=s[4],N=s[8],E=s[12],M=s[1],C=s[5],H=s[9],k=s[13],L=s[2],B=s[6],z=s[10],q=s[14],V=s[3],j=s[7],et=s[11],nt=s[15];return r[0]=o*R+a*M+c*L+l*V,r[4]=o*A+a*C+c*B+l*j,r[8]=o*N+a*H+c*z+l*et,r[12]=o*E+a*k+c*q+l*nt,r[1]=h*R+u*M+d*L+f*V,r[5]=h*A+u*C+d*B+f*j,r[9]=h*N+u*H+d*z+f*et,r[13]=h*E+u*k+d*q+f*nt,r[2]=m*R+x*M+_*L+p*V,r[6]=m*A+x*C+_*B+p*j,r[10]=m*N+x*H+_*z+p*et,r[14]=m*E+x*k+_*q+p*nt,r[3]=w*R+S*M+v*L+O*V,r[7]=w*A+S*C+v*B+O*j,r[11]=w*N+S*H+v*z+O*et,r[15]=w*E+S*k+v*q+O*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],_=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+_*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],_=t[14],p=t[15],w=u*_*l-x*d*l+x*c*f-a*_*f-u*c*p+a*d*p,S=m*d*l-h*_*l-m*c*f+o*_*f+h*c*p-o*d*p,v=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,O=m*u*c-h*x*c-m*a*d+o*x*d+h*a*_-o*u*_,R=e*w+n*S+s*v+r*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=w*A,t[1]=(x*d*r-u*_*r-x*s*f+n*_*f+u*s*p-n*d*p)*A,t[2]=(a*_*r-x*c*r+x*s*l-n*_*l-a*s*p+n*c*p)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,t[4]=S*A,t[5]=(h*_*r-m*d*r+m*s*f-e*_*f-h*s*p+e*d*p)*A,t[6]=(m*c*r-o*_*r-m*s*l+e*_*l+o*s*p-e*c*p)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*A,t[8]=v*A,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=O*A,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*_+e*u*_)*A,t[14]=(m*a*s-o*x*s-m*n*c+e*x*c+o*n*_-e*a*_)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,_=o*u,p=a*u,w=c*l,S=c*h,v=c*u,O=n.x,R=n.y,A=n.z;return s[0]=(1-(x+p))*O,s[1]=(f+v)*O,s[2]=(m-S)*O,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(_+w)*R,s[7]=0,s[8]=(m+S)*A,s[9]=(_-w)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=li){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===li)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ma)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=li){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let m,x;if(a===li)m=(o+r)*u,x=-2*u;else if(a===ma)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new P,yn=new Dt,ex=new P(0,0,0),nx=new P(1,1,1),wi=new P,yo=new P,Ze=new P,ju=new Dt,Qu=new zi;class Wn{constructor(t=0,e=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class mm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ix=0;const td=new P,Es=new zi,ti=new Dt,vo=new P,yr=new P,sx=new P,rx=new zi,ed=new P(1,0,0),nd=new P(0,1,0),id=new P(0,0,1),sd={type:"added"},ox={type:"removed"},ws={type:"childadded",child:null},mc={type:"childremoved",child:null};class pe extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new P,e=new Wn,n=new zi,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new kt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(ed,t)}rotateY(t){return this.rotateOnAxis(nd,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return td.copy(t).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ed,t)}translateY(t){return this.translateOnAxis(nd,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vo.copy(t):vo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(yr,vo,this.up):ti.lookAt(vo,yr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ti),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sd),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ox),mc.child=t,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sd),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,sx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,rx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new P(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new P,ei=new P,_c=new P,ni=new P,Ss=new P,Ts=new P,rd=new P,gc=new P,xc=new P,yc=new P,vc=new Jt,bc=new Jt,Mc=new Jt;class cn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),ei.subVectors(n,e),_c.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(ei),c=vn.dot(_c),l=ei.dot(ei),h=ei.dot(_c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return vc.setScalar(0),bc.setScalar(0),Mc.setScalar(0),vc.fromBufferAttribute(t,e),bc.fromBufferAttribute(t,n),Mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vc,r.x),o.addScaledVector(bc,r.y),o.addScaledVector(Mc,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),ei.subVectors(t,e),vn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),vn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,n),Ts.subVectors(r,n),gc.subVectors(t,n);const c=Ss.dot(gc),l=Ts.dot(gc);if(c<=0&&l<=0)return e.copy(n);xc.subVectors(t,s);const h=Ss.dot(xc),u=Ts.dot(xc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ss,o);yc.subVectors(t,r);const f=Ss.dot(yc),m=Ts.dot(yc);if(m>=0&&f<=m)return e.copy(r);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ts,a);const _=h*m-f*u;if(_<=0&&u-h>=0&&f-m>=0)return rd.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(rd,a);const p=1/(_+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Ss,o).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Vh(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ec(o,r,t+1/3),this.g=Ec(o,r,t),this.b=Ec(o,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=_m[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Gt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(De(Pe.r*255,0,255))*65536+Math.round(De(Pe.g*255,0,255))*256+Math.round(De(Pe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ae){Gt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(bo);const n=Xr(Si.h,bo.h,e),s=Xr(Si.s,bo.s,e),r=Xr(Si.l,bo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Tt;Tt.NAMES=_m;let ax=0;class Ln extends or{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Cn(),this.name="",this.blending=Gs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=El,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class is extends Ln{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new P,Mo=new Nt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}}class gm extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xm extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class un extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cx=0;const sn=new Dt,wc=new pe,As=new P,Je=new xi,vr=new xi,Ee=new P;class mn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dm(t)?xm:gm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new un(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Je.min,vr.min),Je.expandByPoint(Ee),Ee.addVectors(Je.max,vr.max),Je.expandByPoint(Ee)):(Je.expandByPoint(vr.min),Je.expandByPoint(vr.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(As.fromBufferAttribute(t,l),Ee.add(As)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new P,c[N]=new P;const l=new P,h=new P,u=new P,d=new Nt,f=new Nt,m=new Nt,x=new P,_=new P;function p(N,E,M){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),_.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[N].add(x),a[E].add(x),a[M].add(x),c[N].add(_),c[E].add(_),c[M].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,E=w.length;N<E;++N){const M=w[N],C=M.start,H=M.count;for(let k=C,L=C+H;k<L;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new P,v=new P,O=new P,R=new P;function A(N){O.fromBufferAttribute(s,N),R.copy(O);const E=a[N];S.copy(E),S.sub(O.multiplyScalar(O.dot(E))).normalize(),v.crossVectors(R,E);const C=v.dot(c[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,C)}for(let N=0,E=w.length;N<E;++N){const M=w[N],C=M.start,H=M.count;for(let k=C,L=C+H;k<L;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,_),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,_=c.length;x<_;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new Dt,qi=new za,Eo=new Yn,ad=new P,wo=new P,So=new P,To=new P,Sc=new P,Ao=new P,cd=new P,Ro=new P;class Re extends pe{constructor(t=new mn,e=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Sc.fromBufferAttribute(u,t),o?Ao.addScaledVector(Sc,h):Ao.addScaledVector(Sc.sub(e),h))}e.add(Ao)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Eo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Eo,ad)===null||qi.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(od.copy(r).invert(),qi.copy(t.ray).applyMatrix4(od),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const _=d[m],p=o[_.materialIndex],w=Math.max(_.start,f.start),S=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let v=w,O=S;v<O;v+=3){const R=a.getX(v),A=a.getX(v+1),N=a.getX(v+2);s=Co(this,p,t,n,l,h,u,R,A,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let _=m,p=x;_<p;_+=3){const w=a.getX(_),S=a.getX(_+1),v=a.getX(_+2);s=Co(this,o,t,n,l,h,u,w,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const _=d[m],p=o[_.materialIndex],w=Math.max(_.start,f.start),S=Math.min(c.count,Math.min(_.start+_.count,f.start+f.count));for(let v=w,O=S;v<O;v+=3){const R=v,A=v+1,N=v+2;s=Co(this,p,t,n,l,h,u,R,A,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let _=m,p=x;_<p;_+=3){const w=_,S=_+1,v=_+2;s=Co(this,o,t,n,l,h,u,w,S,v),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function lx(i,t,e,n,s,r,o,a){let c;if(t.side===Xe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===pi,a),c===null)return null;Ro.copy(a),Ro.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ro);return l<e.near||l>e.far?null:{distance:l,point:Ro.clone(),object:i}}function Co(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,wo),i.getVertexPosition(c,So),i.getVertexPosition(l,To);const h=lx(i,t,e,n,wo,So,To,cd);if(h){const u=new P;cn.getBarycoord(cd,wo,So,To,u),s&&(h.uv=cn.getInterpolatedAttribute(s,a,c,l,u,new Nt)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,c,l,u,new Nt)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};cn.getNormal(wo,So,To,d.normal),h.face=d,h.barycoord=u}return h}class ar extends mn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(u,2));function m(x,_,p,w,S,v,O,R,A,N,E){const M=v/A,C=O/N,H=v/2,k=O/2,L=R/2,B=A+1,z=N+1;let q=0,V=0;const j=new P;for(let et=0;et<z;et++){const nt=et*C-k;for(let dt=0;dt<B;dt++){const bt=dt*M-H;j[x]=bt*w,j[_]=nt*S,j[p]=L,l.push(j.x,j.y,j.z),j[x]=0,j[_]=0,j[p]=R>0?1:-1,h.push(j.x,j.y,j.z),u.push(dt/A),u.push(1-et/N),q+=1}}for(let et=0;et<N;et++)for(let nt=0;nt<A;nt++){const dt=d+nt+B*et,bt=d+nt+B*(et+1),K=d+(nt+1)+B*(et+1),Q=d+(nt+1)+B*et;c.push(dt,bt,Q),c.push(bt,K,Q),V+=6}a.addGroup(f,V,E),f+=V,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const s in n)t[s]=n[s]}return t}function hx(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ym(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const ux={clone:er,merge:Oe};var dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Ln{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=hx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vm extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new P,ld=new Nt,hd=new Nt;class Ve extends vm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,ld,hd),e.subVectors(hd,ld)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Cs=1;class px extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Rs,Cs,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Rs,Cs,t,e);r.layers=this.layers,this.add(r);const o=new Ve(Rs,Cs,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Rs,Cs,t,e);a.layers=this.layers,this.add(a);const c=new Ve(Rs,Cs,t,e);c.layers=this.layers,this.add(c);const l=new Ve(Rs,Cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bm extends ve{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mx extends us{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ar(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Fi});r.uniforms.tEquirect.value=e;const o=new Re(s,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=Ge),new px(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Tc=new P,_x=new P,gx=new kt;class ji{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Tc.subVectors(n,e).cross(_x.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gx.getNormalMatrix(t),s=this.coplanarPoint(Tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Yn,Lo=new P;class Gh{constructor(t=new ji,e=new ji,n=new ji,s=new ji,r=new ji,o=new ji){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],_=s[11],p=s[12],w=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,_-f,v-p).normalize(),n[1].setComponents(c+r,d+l,_+f,v+p).normalize(),n[2].setComponents(c+o,d+h,_+m,v+w).normalize(),n[3].setComponents(c-o,d-h,_-m,v-w).normalize(),n[4].setComponents(c-a,d-u,_-x,v-S).normalize(),e===li)n[5].setComponents(c+a,d+u,_+x,v+S).normalize();else if(e===ma)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mm(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xx(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class cr extends mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],_=[];for(let p=0;p<h;p++){const w=p*d-o;for(let S=0;S<l;S++){const v=S*u-r;m.push(v,-w,0),x.push(0,0,1),_.push(S/a),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const S=w+l*p,v=w+l*(p+1),O=w+1+l*(p+1),R=w+1+l*p;f.push(S,v,R),f.push(v,O,R)}this.setIndex(f),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}var yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
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
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
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
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Px=`#ifdef USE_IRIDESCENCE
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
#endif`,Nx=`#ifdef USE_BUMPMAP
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vx=`#define PI 3.141592653589793
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
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oy=`#ifdef USE_GRADIENTMAP
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
}`,ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hy=`uniform bool receiveShadow;
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
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
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
#endif`,gy=`struct PhysicalMaterial {
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
}`,xy=`
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
#endif`,yy=`#if defined( RE_IndirectDiffuse )
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ry=`#if defined( USE_POINTS_UV )
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
#endif`,Cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`#ifdef USE_MORPHTARGETS
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
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zy=`#ifdef USE_NORMALMAP
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
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iv=`float getShadowMask() {
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
}`,sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
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
#endif`,cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#ifdef USE_TRANSMISSION
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yv=`uniform sampler2D t2D;
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`#include <common>
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
}`,Sv=`#if DEPTH_PACKING == 3200
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
}`,Tv=`#define DISTANCE
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
}`,Av=`#define DISTANCE
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`uniform float scale;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Uv=`#define LAMBERT
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
}`,Ov=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,kv=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,Hv=`#define PHONG
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
}`,zv=`#define PHONG
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
}`,Vv=`#define STANDARD
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
}`,Gv=`#define STANDARD
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
}`,Wv=`#define TOON
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
}`,Xv=`#define TOON
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
}`,qv=`uniform float size;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,$v=`uniform vec3 color;
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
}`,Zv=`uniform float rotation;
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
}`,Jv=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:yx,alphahash_pars_fragment:vx,alphamap_fragment:bx,alphamap_pars_fragment:Mx,alphatest_fragment:Ex,alphatest_pars_fragment:wx,aomap_fragment:Sx,aomap_pars_fragment:Tx,batching_pars_vertex:Ax,batching_vertex:Rx,begin_vertex:Cx,beginnormal_vertex:Lx,bsdfs:Ix,iridescence_fragment:Px,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Fx,color_fragment:kx,color_pars_fragment:Bx,color_pars_vertex:Hx,color_vertex:zx,common:Vx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:Xx,displacementmap_vertex:qx,emissivemap_fragment:Yx,emissivemap_pars_fragment:Kx,colorspace_fragment:$x,colorspace_pars_fragment:Zx,envmap_fragment:Jx,envmap_common_pars_fragment:jx,envmap_pars_fragment:Qx,envmap_pars_vertex:ty,envmap_physical_pars_fragment:uy,envmap_vertex:ey,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:sy,fog_pars_fragment:ry,gradientmap_pars_fragment:oy,lightmap_pars_fragment:ay,lights_lambert_fragment:cy,lights_lambert_pars_fragment:ly,lights_pars_begin:hy,lights_toon_fragment:dy,lights_toon_pars_fragment:fy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:_y,lights_physical_pars_fragment:gy,lights_fragment_begin:xy,lights_fragment_maps:yy,lights_fragment_end:vy,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:My,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:wy,map_fragment:Sy,map_pars_fragment:Ty,map_particle_fragment:Ay,map_particle_pars_fragment:Ry,metalnessmap_fragment:Cy,metalnessmap_pars_fragment:Ly,morphinstance_vertex:Iy,morphcolor_vertex:Py,morphnormal_vertex:Ny,morphtarget_pars_vertex:Dy,morphtarget_vertex:Uy,normal_fragment_begin:Oy,normal_fragment_maps:Fy,normal_pars_fragment:ky,normal_pars_vertex:By,normal_vertex:Hy,normalmap_pars_fragment:zy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Wy,iridescence_pars_fragment:Xy,opaque_fragment:qy,packing:Yy,premultiplied_alpha_fragment:Ky,project_vertex:$y,dithering_fragment:Zy,dithering_pars_fragment:Jy,roughnessmap_fragment:jy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:ev,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:sv,skinning_pars_vertex:rv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:cv,specularmap_pars_fragment:lv,tonemapping_fragment:hv,tonemapping_pars_fragment:uv,transmission_fragment:dv,transmission_pars_fragment:fv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:_v,worldpos_vertex:gv,background_vert:xv,background_frag:yv,backgroundCube_vert:vv,backgroundCube_frag:bv,cube_vert:Mv,cube_frag:Ev,depth_vert:wv,depth_frag:Sv,distanceRGBA_vert:Tv,distanceRGBA_frag:Av,equirect_vert:Rv,equirect_frag:Cv,linedashed_vert:Lv,linedashed_frag:Iv,meshbasic_vert:Pv,meshbasic_frag:Nv,meshlambert_vert:Dv,meshlambert_frag:Uv,meshmatcap_vert:Ov,meshmatcap_frag:Fv,meshnormal_vert:kv,meshnormal_frag:Bv,meshphong_vert:Hv,meshphong_frag:zv,meshphysical_vert:Vv,meshphysical_frag:Gv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:qv,points_frag:Yv,shadow_vert:Kv,shadow_frag:$v,sprite_vert:Zv,sprite_frag:Jv},at={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Fn={basic:{uniforms:Oe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Oe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Oe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Oe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Oe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Oe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Oe([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Oe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Oe([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Oe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Oe([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Oe([at.common,at.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Oe([at.lights,at.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Fn.physical={uniforms:Oe([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Io={r:0,b:0,g:0},Ki=new Wn,jv=new Dt;function Qv(i,t,e,n,s,r,o){const a=new Tt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function x(w){let S=!1;const v=m(w);v===null?p(a,c):v&&v.isColor&&(p(v,1),S=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,S){const v=m(S);v&&(v.isCubeTexture||v.mapping===Ba)?(h===void 0&&(h=new Re(new ar(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:er(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(S.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(Ki)),h.material.toneMapped=Gt.getTransfer(v.colorSpace)!==ie,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Re(new cr(2,2),new _i({name:"BackgroundMaterial",uniforms:er(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,S){w.getRGB(Io,ym(i)),n.buffers.color.setClear(Io.r,Io.g,Io.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:_}}function tb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,H,k,L){let B=!1;const z=u(k,H,C);r!==z&&(r=z,l(r.object)),B=f(M,k,H,L),B&&m(M,k,H,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(M,C,H,k),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,H){const k=H.wireframe===!0;let L=n[M.id];L===void 0&&(L={},n[M.id]=L);let B=L[C.id];B===void 0&&(B={},L[C.id]=B);let z=B[k];return z===void 0&&(z=d(c()),B[k]=z),z}function d(M){const C=[],H=[],k=[];for(let L=0;L<e;L++)C[L]=0,H[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,C,H,k){const L=r.attributes,B=C.attributes;let z=0;const q=H.getAttributes();for(const V in q)if(q[V].location>=0){const et=L[V];let nt=B[V];if(nt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),et===void 0||et.attribute!==nt||nt&&et.data!==nt.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function m(M,C,H,k){const L={},B=C.attributes;let z=0;const q=H.getAttributes();for(const V in q)if(q[V].location>=0){let et=B[V];et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const nt={};nt.attribute=et,et&&et.data&&(nt.data=et.data),L[V]=nt,z++}r.attributes=L,r.attributesNum=z,r.index=k}function x(){const M=r.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function _(M){p(M,0)}function p(M,C){const H=r.newAttributes,k=r.enabledAttributes,L=r.attributeDivisors;H[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),L[M]!==C&&(i.vertexAttribDivisor(M,C),L[M]=C)}function w(){const M=r.newAttributes,C=r.enabledAttributes;for(let H=0,k=C.length;H<k;H++)C[H]!==M[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function S(M,C,H,k,L,B,z){z===!0?i.vertexAttribIPointer(M,C,H,L,B):i.vertexAttribPointer(M,C,H,k,L,B)}function v(M,C,H,k){x();const L=k.attributes,B=H.getAttributes(),z=C.defaultAttributeValues;for(const q in B){const V=B[q];if(V.location>=0){let j=L[q];if(j===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const et=j.normalized,nt=j.itemSize,dt=t.get(j);if(dt===void 0)continue;const bt=dt.buffer,K=dt.type,Q=dt.bytesPerElement,rt=K===i.INT||K===i.UNSIGNED_INT||j.gpuType===Uh;if(j.isInterleavedBufferAttribute){const ot=j.data,gt=ot.stride,At=j.offset;if(ot.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)p(V.location+wt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let wt=0;wt<V.locationSize;wt++)_(V.location+wt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let wt=0;wt<V.locationSize;wt++)S(V.location+wt,nt/V.locationSize,K,et,gt*Q,(At+nt/V.locationSize*wt)*Q,rt)}else{if(j.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)p(V.location+ot,j.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ot=0;ot<V.locationSize;ot++)_(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let ot=0;ot<V.locationSize;ot++)S(V.location+ot,nt/V.locationSize,K,et,nt*Q,nt/V.locationSize*ot*Q,rt)}}else if(z!==void 0){const et=z[q];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(V.location,et);break;case 3:i.vertexAttrib3fv(V.location,et);break;case 4:i.vertexAttrib4fv(V.location,et);break;default:i.vertexAttrib1fv(V.location,et)}}}}w()}function O(){N();for(const M in n){const C=n[M];for(const H in C){const k=C[H];for(const L in k)h(k[L].object),delete k[L];delete C[H]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const H in C){const k=C[H];for(const L in k)h(k[L].object),delete k[L];delete C[H]}delete n[M.id]}function A(M){for(const C in n){const H=n[C];if(H[M.id]===void 0)continue;const k=H[M.id];for(const L in k)h(k[L].object),delete k[L];delete H[M.id]}}function N(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:_,disableUnusedAttributes:w}}function eb(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function nb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===no&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!N)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:O,maxSamples:R}}function ib(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ji,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,_=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!_)r?h(null):l();else{const w=r?0:n,S=w*4;let v=p.clippingState||null;c.value=v,v=h(m,d,S,f);for(let O=0;O!==S;++O)v[O]=e[O];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let _=null;if(x!==0){if(_=c.value,m!==!0||_===null){const p=f+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<p)&&(_=new Float32Array(p));for(let S=0,v=f;S!==x;++S,v+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(_,v),_[v+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}function sb(i){let t=new WeakMap;function e(o,a){return a===Il?o.mapping=$s:a===Pl&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Il||a===Pl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new mx(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Va extends vm{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hs=4,ud=[.125,.215,.35,.446,.526,.582],es=20,Ac=new Va,dd=new Tt;let Rc=null,Cc=0,Lc=0,Ic=!1;const Qi=(1+Math.sqrt(5))/2,Ls=1/Qi,fd=[new P(-Qi,Ls,0),new P(Qi,Ls,0),new P(-Ls,0,Qi),new P(Ls,0,Qi),new P(0,Qi,-Ls),new P(0,Qi,Ls),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class pd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rc,Cc,Lc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:no,format:ln,colorSpace:He,depthBuffer:!1},s=md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rb(r)),this._blurMaterial=ob(r,t,e)}return s}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,Ac)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dd),h.toneMapping=ki,h.autoClear=!1;const f=new is({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new Re(new ar,f);let x=!1;const _=t.background;_?_.isColor&&(f.color.copy(_),t.background=null,x=!0):(f.color.copy(dd),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Po(s,w*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$s||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Po(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ac)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(s-r-1)%fd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Re(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),x=r/m,_=isFinite(r)?1+Math.floor(h*x):es;_>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${es}`);const p=[];let w=0;for(let A=0;A<es;++A){const N=A/x,E=Math.exp(-N*N/2);p.push(E),A===0?w+=E:A<_&&(w+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;const v=this._sizeLods[s],O=3*v*(s>S-Hs?s-S+Hs:0),R=4*(this._cubeSize-v);Po(e,O,R,3*v,2*v),c.setRenderTarget(e),c.render(u,Ac)}}function rb(i){const t=[],e=[],n=[];let s=i;const r=i-Hs+1+ud.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Hs?c=ud[o-i+Hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,_=2,p=1,w=new Float32Array(x*m*f),S=new Float32Array(_*m*f),v=new Float32Array(p*m*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,N=R>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];w.set(E,x*m*R),S.set(d,_*m*R);const M=[R,R,R,R,R,R];v.set(M,p*m*R)}const O=new mn;O.setAttribute("position",new ke(w,x)),O.setAttribute("uv",new ke(S,_)),O.setAttribute("faceIndex",new ke(v,p)),t.push(O),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function md(i,t,e){const n=new us(i,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ob(i,t,e){const n=new Float32Array(es),s=new P(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function _d(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function gd(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}function ab(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Il||c===Pl,h=c===$s||c===Zs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new pd(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new pd(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function cb(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lb(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const x=d.morphAttributes[m];for(let _=0,p=x.length;_<p;_++)t.remove(x[_])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const x=f[m];for(let _=0,p=x.length;_<p;_++)t.update(x[_],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let S=0,v=w.length;S<v;S+=3){const O=w[S+0],R=w[S+1],A=w[S+2];d.push(O,R,R,A,A,O)}}else if(m!==void 0){const w=m.array;x=m.version;for(let S=0,v=w.length/3-1;S<v;S+=3){const O=S+0,R=S+1,A=S+2;d.push(O,R,R,A,A,O)}}else return;const _=new(dm(d)?xm:gm)(d,1);_.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,_)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function hb(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let _=0;for(let p=0;p<m;p++)_+=f[p];e.update(_,n,1)}function u(d,f,m,x){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{_.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ub(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function db(i,t,e){const n=new WeakMap,s=new Jt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let O=a.attributes.position.count*v,R=1;O>t.maxTextureSize&&(R=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const A=new Float32Array(O*R*4*u),N=new pm(A,O,R,u);N.type=Rn,N.needsUpdate=!0;const E=v*4;for(let C=0;C<u;C++){const H=p[C],k=w[C],L=S[C],B=O*R*4*C;for(let z=0;z<H.count;z++){const q=z*E;m===!0&&(s.fromBufferAttribute(H,z),A[B+q+0]=s.x,A[B+q+1]=s.y,A[B+q+2]=s.z,A[B+q+3]=0),x===!0&&(s.fromBufferAttribute(k,z),A[B+q+4]=s.x,A[B+q+5]=s.y,A[B+q+6]=s.z,A[B+q+7]=0),_===!0&&(s.fromBufferAttribute(L,z),A[B+q+8]=s.x,A[B+q+9]=s.y,A[B+q+10]=s.z,A[B+q+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new Nt(O,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function fb(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Em extends ve{constructor(t,e,n,s,r,o,a,c,l,h=Ws){if(h!==Ws&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ws&&(n=hs),n===void 0&&h===Qs&&(n=js),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wm=new ve,xd=new Em(1,1),Sm=new pm,Tm=new Q0,Am=new bm,yd=[],vd=[],bd=new Float32Array(16),Md=new Float32Array(9),Ed=new Float32Array(4);function lr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ga(i,t){let e=vd[t];e===void 0&&(e=new Int32Array(t),vd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function _b(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function gb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function xb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;Ed.set(n),i.uniformMatrix2fv(this.addr,!1,Ed),Me(e,n)}}function yb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),Me(e,n)}}function vb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;bd.set(n),i.uniformMatrix4fv(this.addr,!1,bd),Me(e,n)}}function bb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Eb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function wb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Sb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Ab(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Rb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Cb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=um,r=xd):r=wm,e.setTexture2D(t||r,s)}function Lb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tm,s)}function Ib(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Am,s)}function Pb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sm,s)}function Nb(i){switch(i){case 5126:return pb;case 35664:return mb;case 35665:return _b;case 35666:return gb;case 35674:return xb;case 35675:return yb;case 35676:return vb;case 5124:case 35670:return bb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return wb;case 5125:return Sb;case 36294:return Tb;case 36295:return Ab;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Pb}}function Db(i,t){i.uniform1fv(this.addr,t)}function Ub(i,t){const e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ob(i,t){const e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function Fb(i,t){const e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function kb(i,t){const e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bb(i,t){const e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hb(i,t){const e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zb(i,t){i.uniform1iv(this.addr,t)}function Vb(i,t){i.uniform2iv(this.addr,t)}function Gb(i,t){i.uniform3iv(this.addr,t)}function Wb(i,t){i.uniform4iv(this.addr,t)}function Xb(i,t){i.uniform1uiv(this.addr,t)}function qb(i,t){i.uniform2uiv(this.addr,t)}function Yb(i,t){i.uniform3uiv(this.addr,t)}function Kb(i,t){i.uniform4uiv(this.addr,t)}function $b(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wm,r[o])}function Zb(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tm,r[o])}function Jb(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Am,r[o])}function jb(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sm,r[o])}function Qb(i){switch(i){case 5126:return Db;case 35664:return Ub;case 35665:return Ob;case 35666:return Fb;case 35674:return kb;case 35675:return Bb;case 35676:return Hb;case 5124:case 35670:return zb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return qb;case 36295:return Yb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return jb}}class tM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nb(e.type)}}class eM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qb(e.type)}}class nM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function wd(i,t){i.seq.push(t),i.map[t.id]=t}function iM(i,t,e){const n=i.name,s=n.length;for(Pc.lastIndex=0;;){const r=Pc.exec(n),o=Pc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){wd(e,l===void 0?new tM(a,i,t):new eM(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new nM(a),wd(e,u)),e=u}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);iM(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const sM=37297;let rM=0;function oM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Td=new kt;function aM(i){Gt._getMatrix(Td,Gt.workingColorSpace,i);const t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Ha:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ad(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+oM(i.getShaderSource(t),o)}else return s}function cM(i,t){const e=aM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lM(i,t){let e;switch(t){case c0:e="Linear";break;case l0:e="Reinhard";break;case h0:e="Cineon";break;case u0:e="ACESFilmic";break;case f0:e="AgX";break;case p0:e="Neutral";break;case d0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const No=new P;function hM(){Gt.getLuminanceCoefficients(No);const i=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function dM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Br(i){return i!==""}function Rd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(i){return i.replace(pM,_M)}const mM=new Map;function _M(i,t){let e=Ht[t];if(e===void 0){const n=mM.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(gM,xM)}function xM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Id(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function yM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zg?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function vM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Zs:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function MM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jp:t="ENVMAP_BLENDING_MULTIPLY";break;case o0:t="ENVMAP_BLENDING_MIX";break;case a0:t="ENVMAP_BLENDING_ADD";break}return t}function EM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=yM(e),l=vM(e),h=bM(e),u=MM(e),d=EM(e),f=uM(e),m=dM(r),x=s.createProgram();let _,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Br).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(_=[Id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[Id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ki?lM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,cM("linearToOutputTexel",e.outputColorSpace),hM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=ah(o),o=Rd(o,e),o=Cd(o,e),a=ah(a),a=Rd(a,e),a=Cd(a,e),o=Ld(o),a=Ld(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+_+o,v=w+p+a,O=Sd(s,s.VERTEX_SHADER,S),R=Sd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,O),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(O).trim(),L=s.getShaderInfoLog(R).trim();let B=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,O,R);else{const q=Ad(s,O,"vertex"),V=Ad(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+q+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||L==="")&&(z=!1);z&&(C.diagnostics={runnable:B,programLog:H,vertexShader:{log:k,prefix:_},fragmentShader:{log:L,prefix:p}})}s.deleteShader(O),s.deleteShader(R),N=new oa(s,x),E=fM(s,x)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,sM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=R,this}let SM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new AM(t),e.set(t,n)),n}}class AM{constructor(t){this.id=SM++,this.code=t,this.usedTimes=0}}function RM(i,t,e,n,s,r,o){const a=new mm,c=new TM,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function _(E,M,C,H,k){const L=H.fog,B=k.geometry,z=E.isMeshStandardMaterial?H.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||z),V=q&&q.mapping===Ba?q.image.height:null,j=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=et!==void 0?et.length:0;let dt=0;B.morphAttributes.position!==void 0&&(dt=1),B.morphAttributes.normal!==void 0&&(dt=2),B.morphAttributes.color!==void 0&&(dt=3);let bt,K,Q,rt;if(j){const te=Fn[j];bt=te.vertexShader,K=te.fragmentShader}else bt=E.vertexShader,K=E.fragmentShader,c.update(E),Q=c.getVertexShaderID(E),rt=c.getFragmentShaderID(E);const ot=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),At=k.isInstancedMesh===!0,wt=k.isBatchedMesh===!0,Wt=!!E.map,Kt=!!E.matcap,ge=!!q,F=!!E.aoMap,en=!!E.lightMap,Xt=!!E.bumpMap,qt=!!E.normalMap,Rt=!!E.displacementMap,le=!!E.emissiveMap,St=!!E.metalnessMap,T=!!E.roughnessMap,y=E.anisotropy>0,G=E.clearcoat>0,Z=E.dispersion>0,tt=E.iridescence>0,$=E.sheen>0,Mt=E.transmission>0,lt=y&&!!E.anisotropyMap,pt=G&&!!E.clearcoatMap,$t=G&&!!E.clearcoatNormalMap,it=G&&!!E.clearcoatRoughnessMap,mt=tt&&!!E.iridescenceMap,Ct=tt&&!!E.iridescenceThicknessMap,It=$&&!!E.sheenColorMap,_t=$&&!!E.sheenRoughnessMap,Yt=!!E.specularMap,Bt=!!E.specularColorMap,ae=!!E.specularIntensityMap,I=Mt&&!!E.transmissionMap,ct=Mt&&!!E.thicknessMap,Y=!!E.gradientMap,J=!!E.alphaMap,ft=E.alphaTest>0,ht=!!E.alphaHash,Ut=!!E.extensions;let me=ki;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(me=i.toneMapping);const Le={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:bt,fragmentShader:K,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:wt,batchingColor:wt&&k._colorsTexture!==null,instancing:At,instancingColor:At&&k.instanceColor!==null,instancingMorph:At&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:He,alphaToCoverage:!!E.alphaToCoverage,map:Wt,matcap:Kt,envMap:ge,envMapMode:ge&&q.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:en,bumpMap:Xt,normalMap:qt,displacementMap:d&&Rt,emissiveMap:le,normalMapObjectSpace:qt&&E.normalMapType===v0,normalMapTangentSpace:qt&&E.normalMapType===hm,metalnessMap:St,roughnessMap:T,anisotropy:y,anisotropyMap:lt,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:$t,clearcoatRoughnessMap:it,dispersion:Z,iridescence:tt,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:It,sheenRoughnessMap:_t,specularMap:Yt,specularColorMap:Bt,specularIntensityMap:ae,transmission:Mt,transmissionMap:I,thicknessMap:ct,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ht,combine:E.combine,mapUv:Wt&&x(E.map.channel),aoMapUv:F&&x(E.aoMap.channel),lightMapUv:en&&x(E.lightMap.channel),bumpMapUv:Xt&&x(E.bumpMap.channel),normalMapUv:qt&&x(E.normalMap.channel),displacementMapUv:Rt&&x(E.displacementMap.channel),emissiveMapUv:le&&x(E.emissiveMap.channel),metalnessMapUv:St&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:lt&&x(E.anisotropyMap.channel),clearcoatMapUv:pt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(E.sheenRoughnessMap.channel),specularMapUv:Yt&&x(E.specularMap.channel),specularColorMapUv:Bt&&x(E.specularColorMap.channel),specularIntensityMapUv:ae&&x(E.specularIntensityMap.channel),transmissionMapUv:I&&x(E.transmissionMap.channel),thicknessMapUv:ct&&x(E.thicknessMap.channel),alphaMapUv:J&&x(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Wt||J),fog:!!L,useFog:E.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:gt,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Wt&&E.map.isVideoTexture===!0&&Gt.getTransfer(E.map.colorSpace)===ie,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(E.emissiveMap.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===Xe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(w(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=m[E.type];let C;if(M){const H=Fn[M];C=ux.clone(H.uniforms)}else C=E.uniforms;return C}function O(E,M){let C;for(let H=0,k=h.length;H<k;H++){const L=h[H];if(L.cacheKey===M){C=L,++C.usedTimes;break}}return C===void 0&&(C=new wM(i,M,E,r),h.push(C)),C}function R(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function N(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:v,acquireProgram:O,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:N}}function CM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function LM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,_){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:_},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=_),t++,p}function a(u,d,f,m,x,_){const p=o(u,d,f,m,x,_);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,_){const p=o(u,d,f,m,x,_);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||LM),n.length>1&&n.sort(d||Pd),s.length>1&&s.sort(d||Pd)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function IM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Nd,i.set(n,[o])):s>=r.length?(o=new Nd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function PM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Tt};break;case"SpotLight":e={position:new P,direction:new P,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function NM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let DM=0;function UM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function OM(i){const t=new PM,e=NM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new Dt,o=new Dt;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,x=0,_=0,p=0,w=0,S=0,v=0,O=0,R=0,A=0;l.sort(UM);for(let E=0,M=l.length;E<M;E++){const C=l[E],H=C.color,k=C.intensity,L=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],k);A++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,V=e.get(C);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(H).multiplyScalar(k),z.distance=L,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[x]=z;const q=C.shadow;if(C.map&&(n.spotLightMap[O]=C.map,O++,q.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[x]=q.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=B,v++}x++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(H).multiplyScalar(k),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=z,_++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const q=C.shadow,V=e.get(C);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=z,m++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(k),z.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=z,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==x||N.rectAreaLength!==_||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==S||N.numSpotShadows!==v||N.numSpotMaps!==O||N.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,N.directionalLength=f,N.pointLength=m,N.spotLength=x,N.rectAreaLength=_,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=S,N.numSpotShadows=v,N.numSpotMaps=O,N.numLightProbes=A,n.version=DM++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0;const _=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const S=l[p];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),u++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),f++}else if(S.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(S.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),d++}else if(S.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),x++}}}return{setup:a,setupView:c,state:n}}function Dd(i){const t=new OM(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function FM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Dd(i),t.set(s,[a])):r>=o.length?(a=new Dd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class kM extends Ln{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class BM extends Ln{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
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
}`;function VM(i,t,e){let n=new Gh;const s=new Nt,r=new Nt,o=new Jt,a=new kM({depthPacking:y0}),c=new BM,l={},h=e.maxTextureSize,u={[pi]:Xe,[Xe]:pi,[wn]:wn},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:HM,fragmentShader:zM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new mn;m.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Re(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zp;let p=this.type;this.render=function(R,A,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Fi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==ri&&this.type===ri,L=p===ri&&this.type!==ri;for(let B=0,z=R.length;B<z;B++){const q=R[B],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const j=V.getFrameExtents();if(s.multiply(j),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||k===!0||L===!0){const nt=this.type!==ri?{minFilter:Fe,magFilter:Fe}:{};V.map!==null&&V.map.dispose(),V.map=new us(s.x,s.y,nt),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const et=V.getViewportCount();for(let nt=0;nt<et;nt++){const dt=V.getViewport(nt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),H.viewport(o),V.updateMatrices(q,nt),n=V.getFrustum(),v(A,N,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&w(V,N),V.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(E,M,C)};function w(R,A){const N=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new us(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,N,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,N,f,x,null)}function S(R,A,N,E){let M=null;const C=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=N.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,k=A.uuid;let L=l[H];L===void 0&&(L={},l[H]=L);let B=L[k];B===void 0&&(B=M.clone(),L[k]=B,A.addEventListener("dispose",O)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,E===ri?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=N}return M}function v(R,A,N,E,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ri)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const k=t.update(R),L=R.material;if(Array.isArray(L)){const B=k.groups;for(let z=0,q=B.length;z<q;z++){const V=B[z],j=L[V.materialIndex];if(j&&j.visible){const et=S(R,j,E,M);R.onBeforeShadow(i,R,A,N,k,et,V),i.renderBufferDirect(N,null,k,et,R,V),R.onAfterShadow(i,R,A,N,k,et,V)}}}else if(L.visible){const B=S(R,L,E,M);R.onBeforeShadow(i,R,A,N,k,B,null),i.renderBufferDirect(N,null,k,B,R,null),R.onAfterShadow(i,R,A,N,k,B,null)}}const H=R.children;for(let k=0,L=H.length;k<L;k++)v(H[k],A,N,E,M)}function O(R){R.target.removeEventListener("dispose",O);for(const N in l){const E=l[N],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const GM={[wl]:Sl,[Tl]:Cl,[Al]:Ll,[Ks]:Rl,[Sl]:wl,[Cl]:Tl,[Ll]:Al,[Rl]:Ks};function WM(i,t){function e(){let I=!1;const ct=new Jt;let Y=null;const J=new Jt(0,0,0,0);return{setMask:function(ft){Y!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){I=ft},setClear:function(ft,ht,Ut,me,Le){Le===!0&&(ft*=me,ht*=me,Ut*=me),ct.set(ft,ht,Ut,me),J.equals(ct)===!1&&(i.clearColor(ft,ht,Ut,me),J.copy(ct))},reset:function(){I=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,Y=null,J=null,ft=null;return{setReversed:function(ht){if(ct!==ht){const Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const me=ft;ft=null,this.setClear(me)}ct=ht},getReversed:function(){return ct},setTest:function(ht){ht?ot(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!I&&(i.depthMask(ht),Y=ht)},setFunc:function(ht){if(ct&&(ht=GM[ht]),J!==ht){switch(ht){case wl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case Tl:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Al:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){I=ht},setClear:function(ht){ft!==ht&&(ct&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){I=!1,Y=null,J=null,ft=null,ct=!1}}}function s(){let I=!1,ct=null,Y=null,J=null,ft=null,ht=null,Ut=null,me=null,Le=null;return{setTest:function(te){I||(te?ot(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(te){ct!==te&&!I&&(i.stencilMask(te),ct=te)},setFunc:function(te,_n,Zn){(Y!==te||J!==_n||ft!==Zn)&&(i.stencilFunc(te,_n,Zn),Y=te,J=_n,ft=Zn)},setOp:function(te,_n,Zn){(ht!==te||Ut!==_n||me!==Zn)&&(i.stencilOp(te,_n,Zn),ht=te,Ut=_n,me=Zn)},setLocked:function(te){I=te},setClear:function(te){Le!==te&&(i.clearStencil(te),Le=te)},reset:function(){I=!1,ct=null,Y=null,J=null,ft=null,ht=null,Ut=null,me=null,Le=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,_=null,p=null,w=null,S=null,v=null,O=null,R=null,A=new Tt(0,0,0),N=0,E=!1,M=null,C=null,H=null,k=null,L=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=q>=2);let j=null,et={};const nt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),bt=new Jt().fromArray(nt),K=new Jt().fromArray(dt);function Q(I,ct,Y,J){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<Y;Ut++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ct+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const rt={};rt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Ks),Xt(!1),qt(Uu),ot(i.CULL_FACE),F(Fi);function ot(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function gt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function At(I,ct){return u[I]!==ct?(i.bindFramebuffer(I,ct),u[I]=ct,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function wt(I,ct){let Y=f,J=!1;if(I){Y=d.get(ct),Y===void 0&&(Y=[],d.set(ct,Y));const ft=I.textures;if(Y.length!==ft.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=ft.length;ht<Ut;ht++)Y[ht]=i.COLOR_ATTACHMENT0+ht;Y.length=ft.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function Wt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Kt={[ts]:i.FUNC_ADD,[Gg]:i.FUNC_SUBTRACT,[Wg]:i.FUNC_REVERSE_SUBTRACT};Kt[Xg]=i.MIN,Kt[qg]=i.MAX;const ge={[Yg]:i.ZERO,[Kg]:i.ONE,[$g]:i.SRC_COLOR,[Ml]:i.SRC_ALPHA,[e0]:i.SRC_ALPHA_SATURATE,[Qg]:i.DST_COLOR,[Jg]:i.DST_ALPHA,[Zg]:i.ONE_MINUS_SRC_COLOR,[El]:i.ONE_MINUS_SRC_ALPHA,[t0]:i.ONE_MINUS_DST_COLOR,[jg]:i.ONE_MINUS_DST_ALPHA,[n0]:i.CONSTANT_COLOR,[i0]:i.ONE_MINUS_CONSTANT_COLOR,[s0]:i.CONSTANT_ALPHA,[r0]:i.ONE_MINUS_CONSTANT_ALPHA};function F(I,ct,Y,J,ft,ht,Ut,me,Le,te){if(I===Fi){x===!0&&(gt(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),I!==Vg){if(I!==_||te!==E){if((p!==ts||v!==ts)&&(i.blendEquation(i.FUNC_ADD),p=ts,v=ts),te)switch(I){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,S=null,O=null,R=null,A.set(0,0,0),N=0,_=I,E=te}return}ft=ft||ct,ht=ht||Y,Ut=Ut||J,(ct!==p||ft!==v)&&(i.blendEquationSeparate(Kt[ct],Kt[ft]),p=ct,v=ft),(Y!==w||J!==S||ht!==O||Ut!==R)&&(i.blendFuncSeparate(ge[Y],ge[J],ge[ht],ge[Ut]),w=Y,S=J,O=ht,R=Ut),(me.equals(A)===!1||Le!==N)&&(i.blendColor(me.r,me.g,me.b,Le),A.copy(me),N=Le),_=I,E=!1}function en(I,ct){I.side===wn?gt(i.CULL_FACE):ot(i.CULL_FACE);let Y=I.side===Xe;ct&&(Y=!Y),Xt(Y),I.blending===Gs&&I.transparent===!1?F(Fi):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function qt(I){I!==Bg?(ot(i.CULL_FACE),I!==C&&(I===Uu?i.cullFace(i.BACK):I===Hg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),C=I}function Rt(I){I!==H&&(z&&i.lineWidth(I),H=I)}function le(I,ct,Y){I?(ot(i.POLYGON_OFFSET_FILL),(k!==ct||L!==Y)&&(i.polygonOffset(ct,Y),k=ct,L=Y)):gt(i.POLYGON_OFFSET_FILL)}function St(I){I?ot(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+B-1),j!==I&&(i.activeTexture(I),j=I)}function y(I,ct,Y){Y===void 0&&(j===null?Y=i.TEXTURE0+B-1:Y=j);let J=et[Y];J===void 0&&(J={type:void 0,texture:void 0},et[Y]=J),(J.type!==I||J.texture!==ct)&&(j!==Y&&(i.activeTexture(Y),j=Y),i.bindTexture(I,ct||rt[I]),J.type=I,J.texture=ct)}function G(){const I=et[j];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(I){bt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),bt.copy(I))}function _t(I){K.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Yt(I,ct){let Y=l.get(ct);Y===void 0&&(Y=new WeakMap,l.set(ct,Y));let J=Y.get(I);J===void 0&&(J=i.getUniformBlockIndex(ct,I.name),Y.set(I,J))}function Bt(I,ct){const J=l.get(ct).get(I);c.get(ct)!==J&&(i.uniformBlockBinding(ct,J,I.__bindingPointIndex),c.set(ct,J))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,et={},u={},d=new WeakMap,f=[],m=null,x=!1,_=null,p=null,w=null,S=null,v=null,O=null,R=null,A=new Tt(0,0,0),N=0,E=!1,M=null,C=null,H=null,k=null,L=null,bt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:gt,bindFramebuffer:At,drawBuffers:wt,useProgram:Wt,setBlending:F,setMaterial:en,setFlipSided:Xt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:le,setScissorTest:St,activeTexture:T,bindTexture:y,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:$t,texStorage3D:it,texSubImage2D:$,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:It,viewport:_t,reset:ae}}function Ud(i,t,e,n){const s=XM(n);switch(e){case im:return i*t;case rm:return i*t;case om:return i*t*2;case kh:return i*t/s.components*s.byteLength;case Bh:return i*t/s.components*s.byteLength;case am:return i*t*2/s.components*s.byteLength;case Hh:return i*t*2/s.components*s.byteLength;case sm:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case zh:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:case Ol:return Math.max(i,16)*Math.max(t,8)/4;case Nl:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case Fl:case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ra:case th:case eh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cm:case nh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ih:case sh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function XM(i){switch(i){case mi:case tm:return{byteLength:1,components:1};case $r:case em:case no:return{byteLength:2,components:1};case Oh:case Fh:return{byteLength:2,components:4};case hs:case Uh:case Rn:return{byteLength:4,components:1};case nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return f?new OffscreenCanvas(T,y):jr("canvas")}function x(T,y,G){let Z=1;const tt=St(T);if((tt.width>G||tt.height>G)&&(Z=G/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Z*tt.width),Mt=Math.floor(Z*tt.height);u===void 0&&(u=m($,Mt));const lt=y?m($,Mt):u;return lt.width=$,lt.height=Mt,lt.getContext("2d").drawImage(T,0,0,$,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Mt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function _(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,y,G,Z,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),y===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),y===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){const Mt=tt?Ha:Gt.getTransfer(Z);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=Mt===ie?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(T,y){let G;return T?y===null||y===hs||y===js?G=i.DEPTH24_STENCIL8:y===Rn?G=i.DEPTH32F_STENCIL8:y===$r&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hs||y===js?G=i.DEPTH_COMPONENT24:y===Rn?G=i.DEPTH_COMPONENT32F:y===$r&&(G=i.DEPTH_COMPONENT16),G}function O(T,y){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fe&&T.minFilter!==Ge?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){const y=T.target;y.removeEventListener("dispose",R),N(y),y.isVideoTexture&&h.delete(y)}function A(T){const y=T.target;y.removeEventListener("dispose",A),M(y)}function N(T){const y=n.get(T);if(y.__webglInit===void 0)return;const G=T.source,Z=d.get(G);if(Z){const tt=Z[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(Z).length===0&&d.delete(G)}n.remove(T)}function E(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const G=T.source,Z=d.get(G);delete Z[y.__cacheKey],o.memory.textures--}function M(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let tt=0;tt<y.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=T.textures;for(let Z=0,tt=G.length;Z<tt;Z++){const $=n.get(G[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(T)}let C=0;function H(){C=0}function k(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function L(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function B(T,y){const G=n.get(T);if(T.isVideoTexture&&Rt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,T,y);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function z(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){K(G,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function q(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){K(G,T,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function V(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Q(G,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const j={[Js]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},et={[Fe]:i.NEAREST,[Qp]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},nt={[b0]:i.NEVER,[A0]:i.ALWAYS,[M0]:i.LESS,[um]:i.LEQUAL,[E0]:i.EQUAL,[T0]:i.GEQUAL,[w0]:i.GREATER,[S0]:i.NOTEQUAL};function dt(T,y){if(y.type===Rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ge||y.magFilter===ta||y.magFilter===Fr||y.magFilter===ci||y.minFilter===Ge||y.minFilter===ta||y.minFilter===Fr||y.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,j[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,j[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,j[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,et[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,et[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fe||y.minFilter!==Fr&&y.minFilter!==ci||y.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function bt(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));const Z=y.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const $=L(y);if($!==T.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[$].usedTimes++;const Mt=tt[T.__cacheKey];Mt!==void 0&&(tt[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(y)),T.__cacheKey=$,T.__webglTexture=tt[$].texture}return G}function K(T,y,G){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=bt(T,y),$=y.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+G);const Mt=n.get($);if($.version!==Mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const lt=Gt.getPrimaries(Gt.workingColorSpace),pt=y.colorSpace===Ni?null:Gt.getPrimaries(y.colorSpace),$t=y.colorSpace===Ni||lt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let it=x(y.image,!1,s.maxTextureSize);it=le(y,it);const mt=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let It=S(y.internalFormat,mt,Ct,y.colorSpace,y.isVideoTexture);dt(Z,y);let _t;const Yt=y.mipmaps,Bt=y.isVideoTexture!==!0,ae=Mt.__version===void 0||tt===!0,I=$.dataReady,ct=O(y,it);if(y.isDepthTexture)It=v(y.format===Qs,y.type),ae&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,mt,Ct,null));else if(y.isDataTexture)if(Yt.length>0){Bt&&ae&&e.texStorage2D(i.TEXTURE_2D,ct,It,Yt[0].width,Yt[0].height);for(let Y=0,J=Yt.length;Y<J;Y++)_t=Yt[Y],Bt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,_t.width,_t.height,mt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,Y,It,_t.width,_t.height,0,mt,Ct,_t.data);y.generateMipmaps=!1}else Bt?(ae&&e.texStorage2D(i.TEXTURE_2D,ct,It,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,mt,Ct,it.data)):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,mt,Ct,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,It,Yt[0].width,Yt[0].height,it.depth);for(let Y=0,J=Yt.length;Y<J;Y++)if(_t=Yt[Y],y.format!==ln)if(mt!==null)if(Bt){if(I)if(y.layerUpdates.size>0){const ft=Ud(_t.width,_t.height,y.format,y.type);for(const ht of y.layerUpdates){const Ut=_t.data.subarray(ht*ft/_t.data.BYTES_PER_ELEMENT,(ht+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ht,_t.width,_t.height,1,mt,Ut)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,it.depth,mt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,It,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,it.depth,mt,Ct,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,It,_t.width,_t.height,it.depth,0,mt,Ct,_t.data)}else{Bt&&ae&&e.texStorage2D(i.TEXTURE_2D,ct,It,Yt[0].width,Yt[0].height);for(let Y=0,J=Yt.length;Y<J;Y++)_t=Yt[Y],y.format!==ln?mt!==null?Bt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,_t.width,_t.height,mt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,Y,It,_t.width,_t.height,0,mt,Ct,_t.data)}else if(y.isDataArrayTexture)if(Bt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,It,it.width,it.height,it.depth),I)if(y.layerUpdates.size>0){const Y=Ud(it.width,it.height,y.format,y.type);for(const J of y.layerUpdates){const ft=it.data.subarray(J*Y/it.data.BYTES_PER_ELEMENT,(J+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,mt,Ct,ft)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Ct,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,mt,Ct,it.data);else if(y.isData3DTexture)Bt?(ae&&e.texStorage3D(i.TEXTURE_3D,ct,It,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Ct,it.data)):e.texImage3D(i.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,mt,Ct,it.data);else if(y.isFramebufferTexture){if(ae)if(Bt)e.texStorage2D(i.TEXTURE_2D,ct,It,it.width,it.height);else{let Y=it.width,J=it.height;for(let ft=0;ft<ct;ft++)e.texImage2D(i.TEXTURE_2D,ft,It,Y,J,0,mt,Ct,null),Y>>=1,J>>=1}}else if(Yt.length>0){if(Bt&&ae){const Y=St(Yt[0]);e.texStorage2D(i.TEXTURE_2D,ct,It,Y.width,Y.height)}for(let Y=0,J=Yt.length;Y<J;Y++)_t=Yt[Y],Bt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt,Ct,_t):e.texImage2D(i.TEXTURE_2D,Y,It,mt,Ct,_t);y.generateMipmaps=!1}else if(Bt){if(ae){const Y=St(it);e.texStorage2D(i.TEXTURE_2D,ct,It,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,it)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Ct,it);_(y)&&p(Z),Mt.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Q(T,y,G){if(y.image.length!==6)return;const Z=bt(T,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);const Mt=Gt.getPrimaries(Gt.workingColorSpace),lt=y.colorSpace===Ni?null:Gt.getPrimaries(y.colorSpace),pt=y.colorSpace===Ni||Mt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!$t&&!it?mt[J]=x(y.image[J],!0,s.maxCubemapSize):mt[J]=it?y.image[J].image:y.image[J],mt[J]=le(y,mt[J]);const Ct=mt[0],It=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),Yt=S(y.internalFormat,It,_t,y.colorSpace),Bt=y.isVideoTexture!==!0,ae=$.__version===void 0||Z===!0,I=tt.dataReady;let ct=O(y,Ct);dt(i.TEXTURE_CUBE_MAP,y);let Y;if($t){Bt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Yt,Ct.width,Ct.height);for(let J=0;J<6;J++){Y=mt[J].mipmaps;for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];y.format!==ln?It!==null?Bt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,It,_t,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Yt,ht.width,ht.height,0,It,_t,ht.data)}}}else{if(Y=y.mipmaps,Bt&&ae){Y.length>0&&ct++;const J=St(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,It,_t,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,mt[J].width,mt[J].height,0,It,_t,mt[J].data);for(let ft=0;ft<Y.length;ft++){const Ut=Y[ft].image[J].image;Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ut.width,Ut.height,It,_t,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Yt,Ut.width,Ut.height,0,It,_t,Ut.data)}}else{Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,_t,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,It,_t,mt[J]);for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];Bt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,It,_t,ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Yt,It,_t,ht.image[J])}}}_(y)&&p(i.TEXTURE_CUBE_MAP),$.__version=tt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function rt(T,y,G,Z,tt,$){const Mt=r.convert(G.format,G.colorSpace),lt=r.convert(G.type),pt=S(G.internalFormat,Mt,lt,G.colorSpace),$t=n.get(y),it=n.get(G);if(it.__renderTarget=y,!$t.__hasExternalTextures){const mt=Math.max(1,y.width>>$),Ct=Math.max(1,y.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,pt,mt,Ct,y.depth,0,Mt,lt,null):e.texImage2D(tt,$,pt,mt,Ct,0,Mt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,it.__webglTexture,0,Xt(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,it.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const Z=y.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=v(y.stencilBuffer,tt),Mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Xt(y);qt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,$,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,T)}else{const Z=y.textures;for(let tt=0;tt<Z.length;tt++){const $=Z[tt],Mt=r.convert($.format,$.colorSpace),lt=r.convert($.type),pt=S($.internalFormat,Mt,lt,$.colorSpace),$t=Xt(y);G&&qt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,pt,y.width,y.height):qt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const tt=Z.__webglTexture,$=Xt(y);if(y.depthTexture.format===Ws)qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(y.depthTexture.format===Qs)qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function At(T){const y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=Z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,T)}else if(G){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),ot(y.__webglDepthbuffer[Z],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ot(y.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(T,y,G){const Z=n.get(T);y!==void 0&&rt(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&At(T)}function Wt(T){const y=T.texture,G=n.get(T),Z=n.get(y);T.addEventListener("dispose",A);const tt=T.textures,$=T.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let pt=0;pt<y.mipmaps.length;pt++)G.__webglFramebuffer[lt][pt]=i.createFramebuffer()}else G.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)G.__webglFramebuffer[lt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let lt=0,pt=tt.length;lt<pt;lt++){const $t=n.get(tt[lt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&qt(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const pt=tt[lt];G.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const $t=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),mt=S(pt.internalFormat,$t,it,pt.colorSpace,T.isXRRenderTarget===!0),Ct=Xt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),dt(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)rt(G.__webglFramebuffer[lt][pt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else rt(G.__webglFramebuffer[lt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);_(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,pt=tt.length;lt<pt;lt++){const $t=tt[lt],it=n.get($t);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),dt(i.TEXTURE_2D,$t),rt(G.__webglFramebuffer,T,$t,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),_($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),dt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)rt(G.__webglFramebuffer[pt],T,y,i.COLOR_ATTACHMENT0,lt,pt);else rt(G.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,lt,0);_(y)&&p(lt),e.unbindTexture()}T.depthBuffer&&At(T)}function Kt(T){const y=T.textures;for(let G=0,Z=y.length;G<Z;G++){const tt=y[G];if(_(tt)){const $=w(T),Mt=n.get(tt).__webglTexture;e.bindTexture($,Mt),p($),e.unbindTexture()}}}const ge=[],F=[];function en(T){if(T.samples>0){if(qt(T)===!1){const y=T.textures,G=T.width,Z=T.height;let tt=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(T),lt=y.length>1;if(lt)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const $t=n.get(y[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,tt,i.NEAREST),c===!0&&(ge.length=0,F.length=0,ge.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ge.push($),F.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const $t=n.get(y[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Xt(T){return Math.min(s.maxSamples,T.samples)}function qt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function le(T,y){const G=T.colorSpace,Z=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==He&&G!==Ni&&(Gt.getTransfer(G)===ie?(Z!==ln||tt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=wt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=qt}function YM(i,t){function e(n,s=Ni){let r;const o=Gt.getTransfer(s);if(n===mi)return i.UNSIGNED_BYTE;if(n===Oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tm)return i.BYTE;if(n===em)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Uh)return i.INT;if(n===hs)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===no)return i.HALF_FLOAT;if(n===im)return i.ALPHA;if(n===sm)return i.RGB;if(n===ln)return i.RGBA;if(n===rm)return i.LUMINANCE;if(n===om)return i.LUMINANCE_ALPHA;if(n===Ws)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===Bh)return i.RED_INTEGER;if(n===am)return i.RG;if(n===Hh)return i.RG_INTEGER;if(n===zh)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Dl||n===Ul||n===Ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===kl||n===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fl||n===kl)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===zl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===$l||n===Zl||n===Jl||n===jl||n===Ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===th||n===eh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cm||n===nh||n===ih||n===sh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class KM extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ui extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const _=e.getJointPose(x,n),p=this._getHandJoint(l,x);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($M)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JM=`
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

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:ZM,fragmentShader:JM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QM extends or{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const x=new jM,_=e.getContextAttributes();let p=null,w=null;const S=[],v=[],O=new Nt;let R=null;const A=new Ve;A.viewport=new Jt;const N=new Ve;N.viewport=new Jt;const E=[A,N],M=new KM;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=S[K];return Q===void 0&&(Q=new Nc,S[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=S[K];return Q===void 0&&(Q=new Nc,S[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=S[K];return Q===void 0&&(Q=new Nc,S[K]=Q),Q.getHandSpace()};function k(K){const Q=v.indexOf(K.inputSource);if(Q===-1)return;const rt=S[Q];rt!==void 0&&(rt.update(K.inputSource,K.frame,l||o),rt.dispatchEvent({type:K.type,data:K.inputSource}))}function L(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",B);for(let K=0;K<S.length;K++){const Q=v[K];Q!==null&&(v[K]=null,S[K].disconnect(Q))}C=null,H=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,w=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",L),s.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const Q={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new us(f.framebufferWidth,f.framebufferHeight,{format:ln,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,rt=null,ot=null;_.depth&&(ot=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=_.stencil?Qs:Ws,rt=_.stencil?js:hs);const gt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new us(d.textureWidth,d.textureHeight,{format:ln,type:mi,depthTexture:new Em(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(K){for(let Q=0;Q<K.removed.length;Q++){const rt=K.removed[Q],ot=v.indexOf(rt);ot>=0&&(v[ot]=null,S[ot].disconnect(rt))}for(let Q=0;Q<K.added.length;Q++){const rt=K.added[Q];let ot=v.indexOf(rt);if(ot===-1){for(let At=0;At<S.length;At++)if(At>=v.length){v.push(rt),ot=At;break}else if(v[At]===null){v[At]=rt,ot=At;break}if(ot===-1)break}const gt=S[ot];gt&&gt.connect(rt)}}const z=new P,q=new P;function V(K,Q,rt){z.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(rt.matrixWorld);const ot=z.distanceTo(q),gt=Q.projectionMatrix.elements,At=rt.projectionMatrix.elements,wt=gt[14]/(gt[10]-1),Wt=gt[14]/(gt[10]+1),Kt=(gt[9]+1)/gt[5],ge=(gt[9]-1)/gt[5],F=(gt[8]-1)/gt[0],en=(At[8]+1)/At[0],Xt=wt*F,qt=wt*en,Rt=ot/(-F+en),le=Rt*-F;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(le),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),gt[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const St=wt+Rt,T=Wt+Rt,y=Xt-le,G=qt+(ot-le),Z=Kt*Wt/T*St,tt=ge*Wt/T*St;K.projectionMatrix.makePerspective(y,G,Z,tt,St,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function j(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,rt=K.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(rt=x.depthFar)),M.near=N.near=A.near=Q,M.far=N.far=A.far=rt,(C!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far),A.layers.mask=K.layers.mask|2,N.layers.mask=K.layers.mask|4,M.layers.mask=A.layers.mask|N.layers.mask;const ot=K.parent,gt=M.cameras;j(M,ot);for(let At=0;At<gt.length;At++)j(gt[At],ot);gt.length===2?V(M,A,N):M.projectionMatrix.copy(A.projectionMatrix),et(K,M,ot)};function et(K,Q,rt){rt===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=tr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let nt=null;function dt(K,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){const rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ot=!1;rt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let At=0;At<rt.length;At++){const wt=rt[At];let Wt=null;if(f!==null)Wt=f.getViewport(wt);else{const ge=u.getViewSubImage(d,wt);Wt=ge.viewport,At===0&&(t.setRenderTargetTextures(w,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(w))}let Kt=E[At];Kt===void 0&&(Kt=new Ve,Kt.layers.enable(At),Kt.viewport=new Jt,E[At]=Kt),Kt.matrix.fromArray(wt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(wt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),At===0&&(M.matrix.copy(Kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Kt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const At=u.getDepthInformation(rt[0]);At&&At.isValid&&At.texture&&x.init(t,At,s.renderState)}}for(let rt=0;rt<S.length;rt++){const ot=v[rt],gt=S[rt];ot!==null&&gt!==void 0&&gt.update(ot,Q,l||o)}nt&&nt(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const bt=new Mm;bt.setAnimationLoop(dt),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}}const $i=new Wn,tE=new Dt;function eE(i,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,ym(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,w,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(_,p):p.isMeshToonMaterial?(r(_,p),u(_,p)):p.isMeshPhongMaterial?(r(_,p),h(_,p)):p.isMeshStandardMaterial?(r(_,p),d(_,p),p.isMeshPhysicalMaterial&&f(_,p,v)):p.isMeshMatcapMaterial?(r(_,p),m(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),x(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?c(_,p,w,S):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Xe&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Xe&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const w=t.get(p),S=w.envMap,v=w.envMapRotation;S&&(_.envMap.value=S,$i.copy(v),$i.x*=-1,$i.y*=-1,$i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),_.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler($i)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,w,S){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*w,_.scale.value=S*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function u(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,w){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function x(_,p){const w=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nE(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const v=S.program;n.uniformBlockBinding(w,v)}function l(w,S){let v=s[w.id];v===void 0&&(m(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",_));const O=S.program;n.updateUBOMapping(w,O);const R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){const S=u();w.__bindingPointIndex=S;const v=i.createBuffer(),O=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const S=s[w.id],v=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=v.length;R<A;R++){const N=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,M=N.length;E<M;E++){const C=N[E];if(f(C,R,E,O)===!0){const H=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let B=0;B<k.length;B++){const z=k[B],q=x(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+L,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,v,O){const R=w.value,A=S+"_"+v;if(O[A]===void 0)return typeof R=="number"||typeof R=="boolean"?O[A]=R:O[A]=R.clone(),!0;{const N=O[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return O[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function m(w){const S=w.uniforms;let v=0;const O=16;for(let A=0,N=S.length;A<N;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=E.length;M<C;M++){const H=E[M],k=Array.isArray(H.value)?H.value:[H.value];for(let L=0,B=k.length;L<B;L++){const z=k[L],q=x(z),V=v%O,j=V%q.boundary,et=V+j;v+=j,et!==0&&O-et<q.storage&&(v+=O-et),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=q.storage}}}const R=v%O;return R>0&&(v+=O-R),w.__size=v,w.__cache={},this}function x(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function _(w){const S=w.target;S.removeEventListener("dispose",_);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class iE{constructor(t={}){const{canvas:e=X0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=ki,this.toneMappingExposure=1;const v=this;let O=!1,R=0,A=0,N=null,E=-1,M=null;const C=new Jt,H=new Jt;let k=null;const L=new Tt(0);let B=0,z=e.width,q=e.height,V=1,j=null,et=null;const nt=new Jt(0,0,z,q),dt=new Jt(0,0,z,q);let bt=!1;const K=new Gh;let Q=!1,rt=!1;const ot=new Dt,gt=new Dt,At=new P,wt=new Jt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ge(){return N===null?V:1}let F=n;function en(b,D){return e.getContext(b,D)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dh}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){const D="webgl2";if(F=en(D,b),F===null)throw en(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Xt,qt,Rt,le,St,T,y,G,Z,tt,$,Mt,lt,pt,$t,it,mt,Ct,It,_t,Yt,Bt,ae,I;function ct(){Xt=new cb(F),Xt.init(),Bt=new YM(F,Xt),qt=new nb(F,Xt,t,Bt),Rt=new WM(F,Xt),qt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),le=new ub(F),St=new CM,T=new qM(F,Xt,Rt,St,qt,Bt,le),y=new sb(v),G=new ab(v),Z=new xx(F),ae=new tb(F,Z),tt=new lb(F,Z,le,ae),$=new fb(F,tt,Z,le),It=new db(F,qt,T),it=new ib(St),Mt=new RM(v,y,G,Xt,qt,ae,it),lt=new eE(v,St),pt=new IM,$t=new FM(Xt),Ct=new Qv(v,y,G,Rt,$,f,c),mt=new VM(v,$,qt),I=new nE(F,le,qt,Rt),_t=new eb(F,Xt,le),Yt=new hb(F,Xt,le),le.programs=Mt.programs,v.capabilities=qt,v.extensions=Xt,v.properties=St,v.renderLists=pt,v.shadowMap=mt,v.state=Rt,v.info=le}ct();const Y=new QM(v,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(z,q,!1))},this.getSize=function(b){return b.set(z,q)},this.setSize=function(b,D,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,q=D,e.width=Math.floor(b*V),e.height=Math.floor(D*V),W===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(z*V,q*V).floor()},this.setDrawingBufferSize=function(b,D,W){z=b,q=D,V=W,e.width=Math.floor(b*W),e.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,D,W,X){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,D,W,X),Rt.viewport(C.copy(nt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(dt)},this.setScissor=function(b,D,W,X){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,D,W,X),Rt.scissor(H.copy(dt).multiplyScalar(V).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(b){Rt.setScissorTest(bt=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,D=!0,W=!0){let X=0;if(b){let U=!1;if(N!==null){const st=N.texture.format;U=st===zh||st===Hh||st===Bh}if(U){const st=N.texture.type,ut=st===mi||st===hs||st===$r||st===js||st===Oh||st===Fh,xt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Pt=xt.r,Ot=xt.g,vt=xt.b;ut?(m[0]=Pt,m[1]=Ot,m[2]=vt,m[3]=yt,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Pt,x[1]=Ot,x[2]=vt,x[3]=yt,F.clearBufferiv(F.COLOR,0,x))}else X|=F.COLOR_BUFFER_BIT}D&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),$t.dispose(),St.dispose(),y.dispose(),G.dispose(),$.dispose(),ae.dispose(),I.dispose(),Mt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Au),Y.removeEventListener("sessionend",Ru),Gi.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const b=le.autoReset,D=mt.enabled,W=mt.autoUpdate,X=mt.needsUpdate,U=mt.type;ct(),le.autoReset=b,mt.enabled=D,mt.autoUpdate=W,mt.needsUpdate=X,mt.type=U}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){const D=b.target;D.removeEventListener("dispose",Ut),me(D)}function me(b){Le(b),St.remove(b)}function Le(b){const D=St.get(b).programs;D!==void 0&&(D.forEach(function(W){Mt.releaseProgram(W)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,X,U,st){D===null&&(D=Wt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,xt=Dg(b,D,W,X,U);Rt.setMaterial(X,ut);let yt=W.index,Pt=1;if(X.wireframe===!0){if(yt=tt.getWireframeAttribute(W),yt===void 0)return;Pt=2}const Ot=W.drawRange,vt=W.attributes.position;let Zt=Ot.start*Pt,ce=(Ot.start+Ot.count)*Pt;st!==null&&(Zt=Math.max(Zt,st.start*Pt),ce=Math.min(ce,(st.start+st.count)*Pt)),yt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,yt.count)):vt!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,vt.count));const he=ce-Zt;if(he<0||he===1/0)return;ae.setup(U,X,xt,W,yt);let ze,jt=_t;if(yt!==null&&(ze=Z.get(yt),jt=Yt,jt.setIndex(ze)),U.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*ge()),jt.setMode(F.LINES)):jt.setMode(F.TRIANGLES);else if(U.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*ge()),U.isLineSegments?jt.setMode(F.LINES):U.isLineLoop?jt.setMode(F.LINE_LOOP):jt.setMode(F.LINE_STRIP)}else U.isPoints?jt.setMode(F.POINTS):U.isSprite&&jt.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,Jn=U._multiDrawCounts,Qt=U._multiDrawCount,gn=yt?Z.get(yt).bytesPerElement:1,_s=St.get(X).currentProgram.getUniforms();for(let $e=0;$e<Qt;$e++)_s.setValue(F,"_gl_DrawID",$e),jt.render(Et[$e]/gn,Jn[$e])}else if(U.isInstancedMesh)jt.renderInstances(Zt,he,U.count);else if(W.isInstancedBufferGeometry){const Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jn=Math.min(W.instanceCount,Et);jt.renderInstances(Zt,he,Jn)}else jt.render(Zt,he)};function te(b,D,W){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Xe,b.needsUpdate=!0,fo(b,D,W),b.side=pi,b.needsUpdate=!0,fo(b,D,W),b.side=wn):fo(b,D,W)}this.compile=function(b,D,W=null){W===null&&(W=b),p=$t.get(W),p.init(D),S.push(p),W.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==W&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const X=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){const xt=st[ut];te(xt,W,U),X.add(xt)}else te(st,W,U),X.add(st)}),S.pop(),p=null,X},this.compileAsync=function(b,D,W=null){const X=this.compile(b,D,W);return new Promise(U=>{function st(){if(X.forEach(function(ut){St.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){U(b);return}setTimeout(st,10)}Xt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let _n=null;function Zn(b){_n&&_n(b)}function Au(){Gi.stop()}function Ru(){Gi.start()}const Gi=new Mm;Gi.setAnimationLoop(Zn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){_n=b,Y.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Y.addEventListener("sessionstart",Au),Y.addEventListener("sessionend",Ru),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,N),p=$t.get(b,S.length),p.init(D),S.push(p),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(gt),rt=this.localClippingEnabled,Q=it.init(this.clippingPlanes,rt),_=pt.get(b,w.length),_.init(),w.push(_),Y.enabled===!0&&Y.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&rc(st,D,-1/0,v.sortObjects)}rc(b,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,et),Kt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Kt&&Ct.addToRenderList(_,b),this.info.render.frame++,Q===!0&&it.beginShadows();const W=p.state.shadowsArray;mt.render(W,b,D),Q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,U=_.transmissive;if(p.setupLights(),D.isArrayCamera){const st=D.cameras;if(U.length>0)for(let ut=0,xt=st.length;ut<xt;ut++){const yt=st[ut];Lu(X,U,b,yt)}Kt&&Ct.render(b);for(let ut=0,xt=st.length;ut<xt;ut++){const yt=st[ut];Cu(_,b,yt,yt.viewport)}}else U.length>0&&Lu(X,U,b,D),Kt&&Ct.render(b),Cu(_,b,D);N!==null&&(T.updateMultisampleRenderTarget(N),T.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(v,b,D),ae.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],Q===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function rc(b,D,W,X){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){X&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const ut=$.update(b),xt=b.material;xt.visible&&_.push(b,ut,xt,W,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const ut=$.update(b),xt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),wt.copy(ut.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(xt)){const yt=ut.groups;for(let Pt=0,Ot=yt.length;Pt<Ot;Pt++){const vt=yt[Pt],Zt=xt[vt.materialIndex];Zt&&Zt.visible&&_.push(b,ut,Zt,W,wt.z,vt)}}else xt.visible&&_.push(b,ut,xt,W,wt.z,null)}}const st=b.children;for(let ut=0,xt=st.length;ut<xt;ut++)rc(st[ut],D,W,X)}function Cu(b,D,W,X){const U=b.opaque,st=b.transmissive,ut=b.transparent;p.setupLightsView(W),Q===!0&&it.setGlobalState(v.clippingPlanes,W),X&&Rt.viewport(C.copy(X)),U.length>0&&uo(U,D,W),st.length>0&&uo(st,D,W),ut.length>0&&uo(ut,D,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Lu(b,D,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new us(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?no:mi,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const st=p.state.transmissionRenderTarget[X.id],ut=X.viewport||C;st.setSize(ut.z,ut.w);const xt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(L),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&Ct.render(W);const yt=v.toneMapping;v.toneMapping=ki;const Pt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Q===!0&&it.setGlobalState(v.clippingPlanes,X),uo(b,W,X),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let vt=0,Zt=D.length;vt<Zt;vt++){const ce=D[vt],he=ce.object,ze=ce.geometry,jt=ce.material,Et=ce.group;if(jt.side===wn&&he.layers.test(X.layers)){const Jn=jt.side;jt.side=Xe,jt.needsUpdate=!0,Iu(he,W,X,ze,jt,Et),jt.side=Jn,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}v.setRenderTarget(xt),v.setClearColor(L,B),Pt!==void 0&&(X.viewport=Pt),v.toneMapping=yt}function uo(b,D,W){const X=D.isScene===!0?D.overrideMaterial:null;for(let U=0,st=b.length;U<st;U++){const ut=b[U],xt=ut.object,yt=ut.geometry,Pt=X===null?ut.material:X,Ot=ut.group;xt.layers.test(W.layers)&&Iu(xt,D,W,yt,Pt,Ot)}}function Iu(b,D,W,X,U,st){b.onBeforeRender(v,D,W,X,U,st),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(v,D,W,X,b,st),U.transparent===!0&&U.side===wn&&U.forceSinglePass===!1?(U.side=Xe,U.needsUpdate=!0,v.renderBufferDirect(W,D,X,U,b,st),U.side=pi,U.needsUpdate=!0,v.renderBufferDirect(W,D,X,U,b,st),U.side=wn):v.renderBufferDirect(W,D,X,U,b,st),b.onAfterRender(v,D,W,X,U,st)}function fo(b,D,W){D.isScene!==!0&&(D=Wt);const X=St.get(b),U=p.state.lights,st=p.state.shadowsArray,ut=U.state.version,xt=Mt.getParameters(b,U.state,st,D,W),yt=Mt.getProgramCacheKey(xt);let Pt=X.programs;X.environment=b.isMeshStandardMaterial?D.environment:null,X.fog=D.fog,X.envMap=(b.isMeshStandardMaterial?G:y).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",Ut),Pt=new Map,X.programs=Pt);let Ot=Pt.get(yt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===ut)return Nu(b,xt),Ot}else xt.uniforms=Mt.getUniforms(b),b.onBeforeCompile(xt,v),Ot=Mt.acquireProgram(xt,yt),Pt.set(yt,Ot),X.uniforms=xt.uniforms;const vt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(vt.clippingPlanes=it.uniform),Nu(b,xt),X.needsLights=Og(b),X.lightsStateVersion=ut,X.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function Pu(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=oa.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Nu(b,D){const W=St.get(b);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Dg(b,D,W,X,U){D.isScene!==!0&&(D=Wt),T.resetTextureUnits();const st=D.fog,ut=X.isMeshStandardMaterial?D.environment:null,xt=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:He,yt=(X.isMeshStandardMaterial?G:y).get(X.envMap||ut),Pt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),vt=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,ce=!!W.morphAttributes.color;let he=ki;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(he=v.toneMapping);const ze=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=ze!==void 0?ze.length:0,Et=St.get(X),Jn=p.state.lights;if(Q===!0&&(rt===!0||b!==M)){const nn=b===M&&X.id===E;it.setState(X,b,nn)}let Qt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Jn.state.version||Et.outputColorSpace!==xt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==yt||X.fog===!0&&Et.fog!==st||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Pt||Et.vertexTangents!==Ot||Et.morphTargets!==vt||Et.morphNormals!==Zt||Et.morphColors!==ce||Et.toneMapping!==he||Et.morphTargetsCount!==jt)&&(Qt=!0):(Qt=!0,Et.__version=X.version);let gn=Et.currentProgram;Qt===!0&&(gn=fo(X,D,U));let _s=!1,$e=!1,mr=!1;const ue=gn.getUniforms(),Pn=Et.uniforms;if(Rt.useProgram(gn.program)&&(_s=!0,$e=!0,mr=!0),X.id!==E&&(E=X.id,$e=!0),_s||M!==b){Rt.buffers.depth.getReversed()?(ot.copy(b.projectionMatrix),Y0(ot),K0(ot),ue.setValue(F,"projectionMatrix",ot)):ue.setValue(F,"projectionMatrix",b.projectionMatrix),ue.setValue(F,"viewMatrix",b.matrixWorldInverse);const yi=ue.map.cameraPosition;yi!==void 0&&yi.setValue(F,At.setFromMatrixPosition(b.matrixWorld)),qt.logarithmicDepthBuffer&&ue.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ue.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,$e=!0,mr=!0)}if(U.isSkinnedMesh){ue.setOptional(F,U,"bindMatrix"),ue.setOptional(F,U,"bindMatrixInverse");const nn=U.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ue.setValue(F,"boneTexture",nn.boneTexture,T))}U.isBatchedMesh&&(ue.setOptional(F,U,"batchingTexture"),ue.setValue(F,"batchingTexture",U._matricesTexture,T),ue.setOptional(F,U,"batchingIdTexture"),ue.setValue(F,"batchingIdTexture",U._indirectTexture,T),ue.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&ue.setValue(F,"batchingColorTexture",U._colorsTexture,T));const _r=W.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&It.update(U,W,gn),($e||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,ue.setValue(F,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Pn.envMap.value=yt,Pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&D.environment!==null&&(Pn.envMapIntensity.value=D.environmentIntensity),$e&&(ue.setValue(F,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&Ug(Pn,mr),st&&X.fog===!0&&lt.refreshFogUniforms(Pn,st),lt.refreshMaterialUniforms(Pn,X,V,q,p.state.transmissionRenderTarget[b.id]),oa.upload(F,Pu(Et),Pn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(oa.upload(F,Pu(Et),Pn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ue.setValue(F,"center",U.center),ue.setValue(F,"modelViewMatrix",U.modelViewMatrix),ue.setValue(F,"normalMatrix",U.normalMatrix),ue.setValue(F,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const nn=X.uniformsGroups;for(let yi=0,vi=nn.length;yi<vi;yi++){const Du=nn[yi];I.update(Du,gn),I.bind(Du,gn)}}return gn}function Ug(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Og(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,D,W){St.get(b.texture).__webglTexture=D,St.get(b.depthTexture).__webglTexture=W;const X=St.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const W=St.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){N=b,R=D,A=W;let X=!0,U=null,st=!1,ut=!1;if(b){const yt=St.get(b);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(yt.__hasExternalTextures)T.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const vt=b.depthTexture;if(yt.__boundDepthTexture!==vt){if(vt!==null&&St.has(vt)&&(b.width!==vt.image.width||b.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Ot=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[D])?U=Ot[D][W]:U=Ot[D],st=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?U=St.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[W]:U=Ot,C.copy(b.viewport),H.copy(b.scissor),k=b.scissorTest}else C.copy(nt).multiplyScalar(V).floor(),H.copy(dt).multiplyScalar(V).floor(),k=bt;if(Rt.bindFramebuffer(F.FRAMEBUFFER,U)&&X&&Rt.drawBuffers(b,U),Rt.viewport(C),Rt.scissor(H),Rt.setScissorTest(k),st){const yt=St.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,W)}else if(ut){const yt=St.get(b.texture),Pt=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,W||0,Pt)}E=-1},this.readRenderTargetPixels=function(b,D,W,X,U,st,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Rt.bindFramebuffer(F.FRAMEBUFFER,xt);try{const yt=b.texture,Pt=yt.format,Ot=yt.type;if(!qt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-X&&W>=0&&W<=b.height-U&&F.readPixels(D,W,X,U,Bt.convert(Pt),Bt.convert(Ot),st)}finally{const yt=N!==null?St.get(N).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,D,W,X,U,st,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const yt=b.texture,Pt=yt.format,Ot=yt.type;if(!qt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-X&&W>=0&&W<=b.height-U){Rt.bindFramebuffer(F.FRAMEBUFFER,xt);const vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),F.readPixels(D,W,X,U,Bt.convert(Pt),Bt.convert(Ot),0);const Zt=N!==null?St.get(N).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Zt);const ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await q0(F,ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(vt),F.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,W=0){b.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),U=Math.floor(b.image.width*X),st=Math.floor(b.image.height*X),ut=D!==null?D.x:0,xt=D!==null?D.y:0;T.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,ut,xt,U,st),Rt.unbindTexture()},this.copyTextureToTexture=function(b,D,W=null,X=null,U=0){b.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,W=null);let st,ut,xt,yt,Pt,Ot,vt,Zt,ce;const he=b.isCompressedTexture?b.mipmaps[U]:b.image;W!==null?(st=W.max.x-W.min.x,ut=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,yt=W.min.x,Pt=W.min.y,Ot=W.isBox3?W.min.z:0):(st=he.width,ut=he.height,xt=he.depth||1,yt=0,Pt=0,Ot=0),X!==null?(vt=X.x,Zt=X.y,ce=X.z):(vt=0,Zt=0,ce=0);const ze=Bt.convert(D.format),jt=Bt.convert(D.type);let Et;D.isData3DTexture?(T.setTexture3D(D,0),Et=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Et=F.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Jn=F.getParameter(F.UNPACK_ROW_LENGTH),Qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),gn=F.getParameter(F.UNPACK_SKIP_PIXELS),_s=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot);const mr=b.isDataArrayTexture||b.isData3DTexture,ue=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Pn=St.get(b),_r=St.get(D),nn=St.get(Pn.__renderTarget),yi=St.get(_r.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,nn.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let vi=0;vi<xt;vi++)mr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(b).__webglTexture,U,Ot+vi),b.isDepthTexture?(ue&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(D).__webglTexture,U,ce+vi),F.blitFramebuffer(yt,Pt,st,ut,vt,Zt,st,ut,F.DEPTH_BUFFER_BIT,F.NEAREST)):ue?F.copyTexSubImage3D(Et,U,vt,Zt,ce+vi,yt,Pt,st,ut):F.copyTexSubImage2D(Et,U,vt,Zt,ce+vi,yt,Pt,st,ut);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ue?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Et,U,vt,Zt,ce,st,ut,xt,ze,jt,he.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,U,vt,Zt,ce,st,ut,xt,ze,he.data):F.texSubImage3D(Et,U,vt,Zt,ce,st,ut,xt,ze,jt,he):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,vt,Zt,st,ut,ze,jt,he.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,vt,Zt,he.width,he.height,ze,he.data):F.texSubImage2D(F.TEXTURE_2D,U,vt,Zt,st,ut,ze,jt,he);F.pixelStorei(F.UNPACK_ROW_LENGTH,Jn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gn),F.pixelStorei(F.UNPACK_SKIP_ROWS,_s),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),U===0&&D.generateMipmaps&&F.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,W=null,X=null,U=0){return b.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,W,X,U)},this.initRenderTarget=function(b){St.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){R=0,A=0,N=null,Rt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}class Xh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new Xh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sE extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new P;class Qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qh extends Ln{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Is;const br=new P,Ps=new P,Ns=new P,Ds=new Nt,Mr=new Nt,Cm=new Dt,Do=new P,Er=new P,Uo=new P,Od=new Nt,Dc=new Nt,Fd=new Nt;class Lm extends pe{constructor(t=new qh){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new mn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rm(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Qr(n,3,0,!1)),Is.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=Is,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Cm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ns.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Oo(Do.set(-.5,-.5,0),Ns,o,Ps,s,r),Oo(Er.set(.5,-.5,0),Ns,o,Ps,s,r),Oo(Uo.set(.5,.5,0),Ns,o,Ps,s,r),Od.set(0,0),Dc.set(1,0),Fd.set(1,1);let a=t.ray.intersectTriangle(Do,Er,Uo,!1,br);if(a===null&&(Oo(Er.set(-.5,.5,0),Ns,o,Ps,s,r),Dc.set(0,1),a=t.ray.intersectTriangle(Do,Uo,Er,!1,br),a===null))return;const c=t.ray.origin.distanceTo(br);c<t.near||c>t.far||e.push({distance:c,point:br.clone(),uv:cn.getInterpolation(br,Do,Er,Uo,Od,Dc,Fd,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Oo(i,t,e,n,s,r){Ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Mr.x=r*Ds.x-s*Ds.y,Mr.y=s*Ds.x+r*Ds.y):Mr.copy(Ds),i.copy(t),i.x+=Mr.x,i.y+=Mr.y,i.applyMatrix4(Cm)}const kd=new P,Bd=new Jt,Hd=new Jt,rE=new P,zd=new Dt,Fo=new P,Uc=new Yn,Vd=new Dt,Oc=new za;class oE extends Re{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ku,this.bindMatrix=new Dt,this.bindMatrixInverse=new Dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new xi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fo),this.boundingBox.expandByPoint(Fo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fo),this.boundingSphere.expandByPoint(Fo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uc.copy(this.boundingSphere),Uc.applyMatrix4(s),t.ray.intersectsSphere(Uc)!==!1&&(Vd.copy(s).invert(),Oc.copy(t.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&Oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Oc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===m0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Bd.fromBufferAttribute(s.attributes.skinIndex,t),Hd.fromBufferAttribute(s.attributes.skinWeight,t),kd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Hd.getComponent(r);if(o!==0){const a=Bd.getComponent(r);zd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(rE.copy(kd).applyMatrix4(zd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Im extends pe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pm extends ve{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Fe,h=Fe,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gd=new Dt,aE=new Dt;class Yh{constructor(t=[],e=[]){this.uuid=Cn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Dt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Dt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:aE;Gd.multiplyMatrices(a,e[r]),Gd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Pm(e,t,t,ln,Rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Im),this.bones.push(o),this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class ch extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Us=new Dt,Wd=new Dt,ko=[],Xd=new xi,cE=new Dt,wr=new Re,Sr=new Yn;class lE extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ch(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Xd.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Xd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Sr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Wd.multiplyMatrices(n,Us),wr.matrixWorld=Wd,wr.raycast(t,ko);for(let o=0,a=ko.length;o<a;o++){const c=ko[o];c.instanceId=r,c.object=this,e.push(c)}ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ch(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pm(new Float32Array(s*this.count),s,this.count,kh,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Nm extends Ln{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _a=new P,ga=new P,qd=new Dt,Tr=new za,Bo=new Yn,Fc=new P,Yd=new P;class Kh extends pe{constructor(t=new mn,e=new Nm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_a.fromBufferAttribute(e,s-1),ga.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_a.distanceTo(ga);t.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;qd.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(qd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,_=m-1;x<_;x+=l){const p=h.getX(x),w=h.getX(x+1),S=Ho(this,t,Tr,c,p,w);S&&e.push(S)}if(this.isLineLoop){const x=h.getX(m-1),_=h.getX(f),p=Ho(this,t,Tr,c,x,_);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,_=m-1;x<_;x+=l){const p=Ho(this,t,Tr,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Ho(this,t,Tr,c,m-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ho(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(_a.fromBufferAttribute(o,s),ga.fromBufferAttribute(o,r),e.distanceSqToSegment(_a,ga,Fc,Yd)>n)return;Fc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fc);if(!(c<t.near||c>t.far))return{distance:c,point:Yd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Kd=new P,$d=new P;class hE extends Kh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Kd.fromBufferAttribute(e,s),$d.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kd.distanceTo($d);t.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uE extends Kh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Dm extends Ln{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zd=new Dt,lh=new za,zo=new Yn,Vo=new P;class dE extends pe{constructor(t=new mn,e=new Dm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;Zd.copy(s).invert(),lh.copy(t.ray).applyMatrix4(Zd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){const _=l.getX(m);Vo.fromBufferAttribute(u,_),Jd(Vo,_,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Vo.fromBufferAttribute(u,m),Jd(Vo,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jd(i,t,e,n,s,r,o){const a=lh.distanceSqToPoint(i);if(a<e){const c=new P;lh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fE extends ve{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wa extends mn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const x=[],_=n/2;let p=0;w(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2));function w(){const v=new P,O=new P;let R=0;const A=(e-t)/n;for(let N=0;N<=r;N++){const E=[],M=N/r,C=M*(e-t)+t;for(let H=0;H<=s;H++){const k=H/s,L=k*c+a,B=Math.sin(L),z=Math.cos(L);O.x=C*B,O.y=-M*n+_,O.z=C*z,u.push(O.x,O.y,O.z),v.set(B,A,z).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-M),E.push(m++)}x.push(E)}for(let N=0;N<s;N++)for(let E=0;E<r;E++){const M=x[E][N],C=x[E+1][N],H=x[E+1][N+1],k=x[E][N+1];(t>0||E!==0)&&(h.push(M,C,k),R+=3),(e>0||E!==r-1)&&(h.push(C,H,k),R+=3)}l.addGroup(p,R,0),p+=R}function S(v){const O=m,R=new Nt,A=new P;let N=0;const E=v===!0?t:e,M=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,_*M,0),d.push(0,M,0),f.push(.5,.5),m++;const C=m;for(let H=0;H<=s;H++){const L=H/s*c+a,B=Math.cos(L),z=Math.sin(L);A.x=E*z,A.y=_*M,A.z=E*B,u.push(A.x,A.y,A.z),d.push(0,M,0),R.x=B*.5+.5,R.y=z*.5*M+.5,f.push(R.x,R.y),m++}for(let H=0;H<s;H++){const k=O+H,L=C+H;v===!0?h.push(L,L+1,k):h.push(L+1,L,k),N+=3}l.addGroup(p,N,v===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $h extends Wa{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new $h(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends Ln{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kn extends io{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Go(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mE(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function jd(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Um(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class so{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _E extends so{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hu:r=t,a=2*e-n;break;case zu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hu:o=t,c=2*n-e;break;case zu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,_=x*m,p=-d*_+2*d*x-d*m,w=(1+d)*_+(-1.5-2*d)*x+(-.5+d)*m+1,S=(-1-f)*_+(1.5+f)*x+.5*m,v=f*_-f*x;for(let O=0;O!==a;++O)r[O]=p*o[h+O]+w*o[l+O]+S*o[c+O]+v*o[u+O];return r}}class gE extends so{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class xE extends so{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class $n{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Go(e,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Go(t.times,Array),values:Go(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _E(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zr:e=this.InterpolantFactoryMethodDiscrete;break;case Jr:e=this.InterpolantFactoryMethodLinear;break;case oc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&pE(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oc,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Jr;class hr extends $n{constructor(t,e,n){super(t,e,n)}}hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Zr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Om extends $n{}Om.prototype.ValueTypeName="color";class nr extends $n{}nr.prototype.ValueTypeName="number";class yE extends so{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)zi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ir extends $n{InterpolantFactoryMethodLinear(t){return new yE(this.times,this.values,this.getValueSize(),t)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends $n{constructor(t,e,n){super(t,e,n)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Zr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends $n{}sr.prototype.ValueTypeName="vector";class vE{constructor(t="",e=-1,n=[],s=_0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ME(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=mE(c);c=jd(c,1,h),l=jd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new nr(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const _=[],p=[];Um(f,_,p,m),_.length!==0&&x.push(new u(d,_,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const _=[],p=[];for(let w=0;w!==d[m].morphTargets.length;++w){const S=d[m];_.push(S.time),p.push(S.morphTarget===x?1:0)}s.push(new nr(".morphTargetInfluence["+x+"]",_,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(sr,f+".position",d,"pos",s),n(ir,f+".quaternion",d,"rot",s),n(sr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Om;case"quaternion":return ir;case"bool":case"boolean":return hr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ME(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=bE(i.type);if(i.times===void 0){const e=[],n=[];Um(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Oi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class EE{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const wE=new EE;class dr{constructor(t){this.manager=t!==void 0?t:wE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}dr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class SE extends Error{constructor(t,e){super(t),this.response=e}}class Fm extends dr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Oi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ii[t]!==void 0){ii[t].push({onLoad:e,onProgress:n,onError:s});return}ii[t]=[],ii[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ii[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const _=new ReadableStream({start(p){w();function w(){u.read().then(({done:S,value:v})=>{if(S)p.close();else{x+=v.byteLength;const O=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let R=0,A=h.length;R<A;R++){const N=h[R];N.onProgress&&N.onProgress(O)}p.enqueue(v),w()}},S=>{p.error(S)})}}});return new Response(_)}else throw new SE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Oi.add(t,l);const h=ii[t];delete ii[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ii[t];if(h===void 0)throw this.manager.itemError(t),l;delete ii[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class TE extends dr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Oi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=jr("img");function c(){h(),Oi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Zh extends dr{constructor(t){super(t)}load(t,e,n,s){const r=new ve,o=new TE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ro extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class AE extends ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const kc=new Dt,Qd=new P,tf=new P;class Jh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gh,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qd),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class RE extends Jh{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=tr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class CE extends ro{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new RE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ef=new Dt,Ar=new P,Bc=new P;class LE extends Jh{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ar),Bc.copy(n.position),Bc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Bc),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}}class IE extends ro{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new LE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class PE extends Jh{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new PE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bm extends ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class qr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class NE extends dr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Oi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Oi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Oi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Oi.add(t,c),r.manager.itemStart(t)}}class DE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nf(){return performance.now()}const jh="\\[\\]\\.:\\/",UE=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",OE="[^"+jh.replace("\\.","")+"]",FE=/((?:WC+[\/:])*)/.source.replace("WC",Qh),kE=/(WCOD+)?/.source.replace("WCOD",OE),BE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),HE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),zE=new RegExp("^"+FE+kE+BE+HE+"$"),VE=["material","materials","bones","map"];class GE{constructor(t,e,n){const s=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ne{constructor(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ne.Composite(t,e,n):new ne(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(UE,"")}static parseTrackName(t){const e=zE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);VE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ne.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ne.Composite=GE;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);function sf(i,t){if(t===g0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===rh||t===lm){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===rh)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class Hm extends dr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new KE(e)}),this.register(function(e){return new $E(e)}),this.register(function(e){return new sw(e)}),this.register(function(e){return new rw(e)}),this.register(function(e){return new ow(e)}),this.register(function(e){return new JE(e)}),this.register(function(e){return new jE(e)}),this.register(function(e){return new QE(e)}),this.register(function(e){return new tw(e)}),this.register(function(e){return new YE(e)}),this.register(function(e){return new ew(e)}),this.register(function(e){return new ZE(e)}),this.register(function(e){return new iw(e)}),this.register(function(e){return new nw(e)}),this.register(function(e){return new XE(e)}),this.register(function(e){return new aw(e)}),this.register(function(e){return new cw(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=qr.extractUrlBase(t);o=qr.resolveURL(l,this.path)}else o=qr.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Fm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===zm){try{o[zt.KHR_BINARY_GLTF]=new lw(t)}catch(u){s&&s(u);return}r=JSON.parse(o[zt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Mw(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case zt.KHR_MATERIALS_UNLIT:o[u]=new qE;break;case zt.KHR_DRACO_MESH_COMPRESSION:o[u]=new hw(r,this.dracoLoader);break;case zt.KHR_TEXTURE_TRANSFORM:o[u]=new uw;break;case zt.KHR_MESH_QUANTIZATION:o[u]=new dw;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function WE(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XE{constructor(t){this.parser=t,this.name=zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new Tt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],He);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new km(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new IE(h),l.distance=u;break;case"spot":l=new CE(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class qE{constructor(){this.name=zt.KHR_MATERIALS_UNLIT}getMaterialType(){return is}extendParams(t,e,n){const s=[];t.color=new Tt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],He),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Ae))}return Promise.all(s)}}class YE{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class KE{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Nt(a,a)}return Promise.all(r)}}class $E{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ZE{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class JE{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Tt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],He)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ae)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class jE{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class QE{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Tt().setRGB(a[0],a[1],a[2],He),Promise.all(r)}}class tw{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ew{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Tt().setRGB(a[0],a[1],a[2],He),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ae)),Promise.all(r)}}class nw{constructor(t){this.parser=t,this.name=zt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class iw{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class sw{constructor(t){this.parser=t,this.name=zt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class rw{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class ow{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class aw{constructor(t){this.name=zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class cw{constructor(t){this.name=zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==an.TRIANGLES&&l.mode!==an.TRIANGLE_STRIP&&l.mode!==an.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const x=new Dt,_=new P,p=new zi,w=new P(1,1,1),S=new lE(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&w.fromBufferAttribute(c.SCALE,v),S.setMatrixAt(v,x.compose(_,p,w));for(const v in c)if(v==="_COLOR_0"){const O=c[v];S.instanceColor=new ch(O.array,O.itemSize,O.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);pe.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const zm="glTF",Rr=12,rf={JSON:1313821514,BIN:5130562};class lw{constructor(t){this.name=zt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Rr,r=new DataView(t,Rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===rf.JSON){const l=new Uint8Array(t,Rr+o,a);this.content=n.decode(l)}else if(c===rf.BIN){const l=Rr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hw{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=hh[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=hh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=qs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const x=f.attributes[m],_=c[m];_!==void 0&&(x.normalized=_)}u(f)},a,l,He,d)})})}}class uw{constructor(){this.name=zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class dw{constructor(){this.name=zt.KHR_MESH_QUANTIZATION}}class Vm extends so{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,x=m-l,_=-2*f+3*d,p=f-d,w=1-_,S=p-d+u;for(let v=0;v!==a;v++){const O=o[x+v+a],R=o[x+v+c]*h,A=o[m+v+a],N=o[m+v]*h;r[v]=w*O+S*R+_*A+p*N}return r}}const fw=new zi;class pw extends Vm{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return fw.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},of={9728:Fe,9729:Ge,9984:Qp,9985:ta,9986:Fr,9987:ci},af={33071:Di,33648:pa,10497:Js},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mw={CUBICSPLINE:void 0,LINEAR:Jr,STEP:Zr},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _w(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new io({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),i.DefaultMaterial}function Zi(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function oi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function gw(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function xw(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yw(i){let t;const e=i.extensions&&i.extensions[zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Vc(e.attributes):t=i.indices+":"+Vc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Vc(i.targets[n]);return t}function Vc(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function uh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bw=new Dt;class Mw{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new WE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Zh(this.options.manager):this.textureLoader=new NE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Zi(r,a,s),oi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[zt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(qr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Hc[s.type],a=qs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new ke(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Hc[s.type],l=qs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let x,_;if(f&&f!==u){const p=Math.floor(d/f),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=e.cache.get(w);S||(x=new l(a,p*f,s.count*f/h),S=new Rm(x,f/h),e.cache.add(w,S)),_=new Qr(S,c,d%f/h,m)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),_=new ke(x,c,m);if(s.sparse!==void 0){const p=Hc.SCALAR,w=qs[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,O=new w(o[1],S,s.sparse.count*p),R=new l(o[2],v,s.sparse.count*c);a!==null&&(_=new ke(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let A=0,N=O.length;A<N;A++){const E=O[A];if(_.setX(E,R[A*c]),c>=2&&_.setY(E,R[A*c+1]),c>=3&&_.setZ(E,R[A*c+2]),c>=4&&_.setW(E,R[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=m}return _})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=of[d.magFilter]||Ge,h.minFilter=of[d.minFilter]||ci,h.wrapS=af[d.wrapS]||Js,h.wrapT=af[d.wrapT]||Js,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Fe&&h.minFilter!==Ge,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(x){const _=new ve(x);_.needsUpdate=!0,d(_)}),e.load(qr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),oi(u,o),u.userData.mimeType=o.mimeType||vw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[zt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[zt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[zt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Dm,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Nm,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return io}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[zt.KHR_MATERIALS_UNLIT]){const u=s[zt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Tt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],He),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ae)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=wn);const h=r.alphaMode||zc.OPAQUE;if(h===zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==is&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Nt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==is&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==is){const u=r.emissiveFactor;a.emissive=new Tt().setRGB(u[0],u[1],u[2],He)}return r.emissiveTexture!==void 0&&o!==is&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ae)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),oi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Zi(s,u,r),u})}createUniqueName(t){const e=ne.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return cf(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=yw(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[zt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=cf(new mn,l,e),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?_w(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],_=o[f];let p;const w=l[f];if(_.mode===an.TRIANGLES||_.mode===an.TRIANGLE_STRIP||_.mode===an.TRIANGLE_FAN||_.mode===void 0)p=r.isSkinnedMesh===!0?new oE(x,w):new Re(x,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),_.mode===an.TRIANGLE_STRIP?p.geometry=sf(p.geometry,lm):_.mode===an.TRIANGLE_FAN&&(p.geometry=sf(p.geometry,rh));else if(_.mode===an.LINES)p=new hE(x,w);else if(_.mode===an.LINE_STRIP)p=new Kh(x,w);else if(_.mode===an.LINE_LOOP)p=new uE(x,w);else if(_.mode===an.POINTS)p=new dE(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(p.geometry.morphAttributes).length>0&&xw(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),oi(p,r),_.extensions&&Zi(s,p,_),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Zi(s,u[0],r),u[0];const d=new Ui;r.extensions&&Zi(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ve(W0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Va(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),oi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Dt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Yh(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],m=s.samplers[f.sampler],x=f.target,_=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,w=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",w)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],x=u[3],_=u[4],p=[];for(let w=0,S=d.length;w<S;w++){const v=d[w],O=f[w],R=m[w],A=x[w],N=_[w];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const E=n._createAnimationTracks(v,O,R,A,N);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new vE(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bw)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Im:l.length>1?h=new Ui:l.length===1?h=l[0]:h=new pe,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),oi(h,r),r.extensions&&Zi(n,h,r),r.matrix!==void 0){const u=new Dt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new Ui;n.name&&(r.name=s.createUniqueName(n.name)),oi(r,n),n.extensions&&Zi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Ln||d instanceof ve)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];Ai[r.path]===Ai.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ai[r.path]){case Ai.weights:l=nr;break;case Ai.rotation:l=ir;break;case Ai.position:case Ai.scale:l=sr;break;default:switch(n.itemSize){case 1:l=nr;break;case 2:case 3:default:l=sr;break}break}const h=s.interpolation!==void 0?mw[s.interpolation]:Jr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+Ai[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=uh(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof ir?pw:Vm;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ew(i,t,e){const n=t.attributes,s=new xi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=uh(qs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const x=uh(qs[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Yn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function cf(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=hh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Gt.workingColorSpace!==He&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gt.workingColorSpace}" not supported.`),oi(i,t),Ew(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?gw(i,t.targets,e):i})}const ww=50,tu=2500,Sw=1.25,lf=1e3,Tw=1e6,Aw=1e4,Gm=.8,Gc={RUBBER:-1,PADDED:-.5,DEFAULT:-2},eu=1,Wm=1/60,Xm=32,Rw=Wm/Xm,Cw=70,nu=100,qm=2,Lw=50,Iw=10,Pw=5,Nw=3,dh=100,hf=ww,Dw=15,Uw=4,Ow=2,uf=.7,Fw=8,On=0,Tn=80,Te=88,kn=104,Wc=200,kw=239,Ym=221,Bw=230,Km=224;function Hw(i){return i===Tn||Te<=i&&i<=kn}function zw(i){return i===Tn||i>=Te}const Vw=4e3,Gw=500,Ww=-1500,Xw=-2e3,$m=1e3,Zm=5e3,qw=2,ss=99,Yw=.05,iu=.8,Jm=.65,Xa=0,Kw=2,$w=0,Zw=1,Jw=2,jw=3,qa=0,Qw=3,tS=0,df=1,Wo=2,ai=0,su=1,eS=2,nS=3,iS=4,sS=5,rS=6,oS=7,Ya=8;class Lt{constructor(t,e,n,s,r,o,a={}){g(this,"idx");g(this,"name");g(this,"cost");g(this,"bundle");g(this,"arms");g(this,"category");g(this,"blast");g(this,"behavior");g(this,"warheads");g(this,"fan");g(this,"heat");g(this,"params");g(this,"enabled");this.idx=t,this.name=e,this.cost=n,this.bundle=s,this.arms=r,this.category=o,this.blast=a.blast??0,this.behavior=a.behavior??"explosive",this.warheads=a.warheads??1,this.fan=a.fan??0,this.heat=a.heat??0,this.params=a.params??{},this.enabled=a.enabled??!0}get offensive(){return this.category!=="guidance"&&this.category!=="shield"&&this.category!=="utility"}}const de=[new Lt(0,"Baby Missile",400,10,0,"explosive",{blast:10,behavior:"explosive"}),new Lt(1,"Missile",1875,5,0,"explosive",{blast:20,behavior:"explosive"}),new Lt(2,"Baby Nuke",1e4,3,0,"nuclear",{blast:40,behavior:"explosive"}),new Lt(3,"Nuke",12e3,1,1,"nuclear",{blast:75,behavior:"explosive"}),new Lt(4,"LeapFrog",1e4,2,3,"multi",{blast:20,behavior:"leapfrog",warheads:3,params:{radii:[20,25,30]}}),new Lt(5,"Funky Bomb",7e3,2,4,"special",{blast:80,behavior:"funky",params:{scatter:15}}),new Lt(6,"MIRV",1e4,3,2,"multi",{blast:20,behavior:"mirv",warheads:5,fan:50}),new Lt(7,"Death's Head",2e4,1,4,"multi",{blast:35,behavior:"mirv",warheads:9,fan:20}),new Lt(8,"Napalm",1e4,10,2,"fire",{blast:15,behavior:"napalm",heat:25,params:{deep_heat:30}}),new Lt(9,"Hot Napalm",2e4,2,4,"fire",{blast:20,behavior:"napalm",heat:40,params:{deep_heat:50}}),new Lt(10,"Tracer",10,20,0,"tracer",{blast:0,behavior:"tracer"}),new Lt(11,"Smoke Tracer",500,10,0,"tracer",{blast:0,behavior:"tracer",params:{smoke:!0}}),new Lt(12,"Baby Roller",5e3,10,2,"roller",{blast:10,behavior:"roller"}),new Lt(13,"Roller",6e3,5,2,"roller",{blast:20,behavior:"roller"}),new Lt(14,"Heavy Roller",6750,2,3,"roller",{blast:45,behavior:"roller"}),new Lt(15,"Riot Charge",2e3,10,2,"riot",{blast:36,behavior:"riot_wedge"}),new Lt(16,"Riot Blast",5e3,5,3,"riot",{blast:60,behavior:"riot_wedge"}),new Lt(17,"Riot Bomb",5e3,5,3,"riot",{blast:30,behavior:"riot_sphere"}),new Lt(18,"Heavy Riot Bomb",4750,2,3,"riot",{blast:45,behavior:"riot_sphere"}),new Lt(19,"Baby Digger",3e3,10,0,"digger",{blast:-10,behavior:"digger"}),new Lt(20,"Digger",2500,5,0,"digger",{blast:-20,behavior:"digger"}),new Lt(21,"Heavy Digger",6750,2,1,"digger",{blast:-35,behavior:"digger"}),new Lt(22,"Baby Sandhog",1e4,10,0,"sandhog",{blast:10,behavior:"sandhog",warheads:1}),new Lt(23,"Sandhog",16750,5,0,"sandhog",{blast:15,behavior:"sandhog",warheads:2}),new Lt(24,"Heavy Sandhog",25e3,2,1,"sandhog",{blast:20,behavior:"sandhog",warheads:4}),new Lt(25,"Dirt Clod",5e3,10,0,"dirt",{blast:20,behavior:"dirt_sphere"}),new Lt(26,"Dirt Ball",5e3,5,0,"dirt",{blast:35,behavior:"dirt_sphere"}),new Lt(27,"Ton of Dirt",6750,2,1,"dirt",{blast:70,behavior:"dirt_sphere"}),new Lt(28,"Liquid Dirt",5e3,5,2,"dirt",{blast:25,behavior:"dirt_slump"}),new Lt(29,"Dirt Charge",5e3,10,1,"dirt",{blast:30,behavior:"dirt_wedge"}),new Lt(30,"Earth Disrupter",5e3,10,0,"dirt",{blast:0,behavior:"dirt_settle"}),new Lt(31,"Plasma Blast",9e3,5,3,"energy",{blast:40,behavior:"plasma"}),new Lt(32,"Laser",5e3,5,2,"energy",{blast:0,behavior:"laser"}),new Lt(33,"Heat Guidance",1e4,6,2,"guidance",{behavior:"equip"}),new Lt(34,"Bal Guidance",1e4,2,2,"guidance",{behavior:"equip"}),new Lt(35,"Horz Guidance",15e3,5,1,"guidance",{behavior:"equip"}),new Lt(36,"Vert Guidance",2e4,5,1,"guidance",{behavior:"equip"}),new Lt(37,"Lazy Boy",2e4,2,3,"guidance",{behavior:"equip"}),new Lt(38,"Parachute",1e4,8,2,"utility",{behavior:"equip"}),new Lt(39,"Battery",5e3,10,2,"utility",{behavior:"equip"}),new Lt(40,"Mag Deflector",1e4,2,2,"shield",{behavior:"equip",params:{hp:55,push:!0}}),new Lt(41,"Shield",2e4,3,3,"shield",{behavior:"equip",params:{hp:100}}),new Lt(42,"Force Shield",25e3,3,3,"shield",{behavior:"equip",params:{hp:100,deflect:!0}}),new Lt(43,"Heavy Shield",3e4,2,4,"shield",{behavior:"equip",params:{hp:150}}),new Lt(44,"Super Mag",4e4,2,4,"shield",{behavior:"equip",params:{hp:200,push:!0,laserproof:!0}}),new Lt(45,"Auto Defense",1500,1,3,"utility",{behavior:"equip"}),new Lt(46,"Fuel Tank",1e4,10,3,"utility",{behavior:"equip"}),new Lt(47,"Contact Trigger",1e3,25,3,"utility",{behavior:"equip"})],tn=de.length;if(tn!==48)throw new Error(`NUM_ITEMS must be 48, got ${tn}`);const An=0,xa=1,as=38,Bn=39,aS=40,jm=41,Qm=42,t_=43,cS=44,Hr=45,e_=46,lS=47,ya=[aS,jm,Qm,t_,cS],ff={0:3,1:2,2:1,3:2,6:.2,7:.1,8:.2,9:.1,12:.2,13:.2,17:.2,25:.1,31:.2,32:.2};function gi(i){const t=Math.floor(i),e=i-t;return e<.5?t+0:e>.5?t+1:t%2===0?t+0:t+1}class n_{constructor(t,e,n,s,r,o){g(this,"vx");g(this,"vy");g(this,"px");g(this,"py");g(this,"sx");g(this,"sy");g(this,"prev_px");g(this,"prev_py");g(this,"saved_vx");g(this,"saved_vy");g(this,"weapon");g(this,"weapon_type");g(this,"owner");g(this,"owner_index");g(this,"active");g(this,"mode");g(this,"flags");g(this,"bounce_energy");g(this,"bounce_count");g(this,"spring_armed");g(this,"warheads_left");g(this,"guidance");g(this,"target");g(this,"state");g(this,"trail");g(this,"armed");g(this,"split_done");g(this,"contact");this.vx=r,this.vy=o,this.px=n,this.py=s,this.sx=gi(n),this.sy=gi(s),this.prev_px=this.px,this.prev_py=this.py,this.saved_vx=this.vx,this.saved_vy=this.vy,this.weapon=e,this.weapon_type=e.idx,this.owner=t,this.owner_index=t?t.player_index:-1,this.active=!0,this.mode=0,this.flags=0,this.bounce_energy=Gm,this.bounce_count=0,this.spring_armed=!1,this.warheads_left=e.warheads,this.guidance=null,this.target=null,this.state={},this.trail=[],this.armed=!0,this.split_done=!1,this.contact=!1}}class hS{constructor(t,e,n=0,s=0,r=0){g(this,"player_index");g(this,"name");g(this,"ai_class");g(this,"reveal_type");g(this,"team_id");g(this,"color");g(this,"tank_icon");g(this,"mobile");g(this,"x");g(this,"y");g(this,"half_width");g(this,"angle");g(this,"power");g(this,"health");g(this,"alive");g(this,"shield_hp");g(this,"shield_item");g(this,"shield_push");g(this,"shield_deflect");g(this,"shield_laserproof");g(this,"shield_failproof");g(this,"parachute_deployed");g(this,"parachute_threshold");g(this,"chute_up");g(this,"contact_trigger");g(this,"selected_guidance");g(this,"guidance_target");g(this,"guidance_target_pt");g(this,"cash");g(this,"cash_ceiling");g(this,"inventory");g(this,"selected_weapon");g(this,"fuel_remainder");g(this,"score");g(this,"win_counter");g(this,"hits_this_round");g(this,"hits_career");g(this,"fall_accum");g(this,"falling");g(this,"ai_tries");g(this,"ai_saved_tactic");this.player_index=t,this.name=e,this.ai_class=n,this.reveal_type=n?n-1:-1,this.team_id=s,this.color=0,this.tank_icon=r,this.mobile=!0,this.x=0,this.y=0,this.half_width=7,this.angle=45,this.power=500,this.health=dh,this.alive=!0,this.shield_hp=0,this.shield_item=0,this.shield_push=!1,this.shield_deflect=!1,this.shield_laserproof=!1,this.shield_failproof=!1,this.parachute_deployed=!0,this.parachute_threshold=Pw,this.chute_up=0,this.contact_trigger=!1,this.selected_guidance=null,this.guidance_target=null,this.guidance_target_pt=null,this.cash=0,this.cash_ceiling=0,this.inventory=new Array(tn).fill(0),this.inventory[An]=99,this.selected_weapon=0,this.fuel_remainder=0,this.score=0,this.win_counter=0,this.hits_this_round={},this.hits_career={},this.fall_accum=0,this.falling=!1,this.ai_tries=0,this.ai_saved_tactic=null}has_ammo(t){return t===An?!0:this.inventory[t]>0}consume(t){if(t===An){this.inventory[t]=this.inventory[t]>1?this.inventory[t]-1:99;return}this.inventory[t]>0&&(this.inventory[t]-=1)}get fuel(){return this.inventory[e_]*10+this.fuel_remainder}get parachutes(){return this.inventory[as]}get batteries(){return this.inventory[Bn]}}function aa(i,t){return Math.floor(i/t)}function i_(i,t,e,n,s,r){const o=tu*i.GRAVITY;let a=Math.abs(n-t);const c=e-s;a<1&&(a=1);const l=au(r),h=Math.cos(l),u=h*h*(a*Math.tan(l)-c);if(u<=0)return null;const d=o*a*a/(2*u);return d<=0?null:Math.sqrt(d)/eu}const fh=-1,s_=-2;function ph(i,t,e,n,s,r){let o=e<=90?e:180-e;o=Math.max(0,Math.min(90,o));const a=tu*i.GRAVITY,c=Math.max(1,Math.abs(n-t.x)),l=t.y-s,h=au(o),u=Math.cos(h),d=u*u*(c*Math.tan(h)-l);if(d===0)return r?s_:0;let f=a*c*c/(2*d);if(f<0){if(r)return fh;f=-f}const m=Math.sqrt(f)/eu,x=10*Math.max(1,t.health);return r&&m>x?fh:m}function uS(i){const t=i.cfg.live_elastic!==void 0?i.cfg.live_elastic:i.cfg.elastic??0;return t!==0&&t!==1}function dS(i,t,e,n){const s=e<=90?e:180-e,r=gi(n*Math.sin(au(s)));return t.y-r<2}function r_(i,t,e,n){const s=i.cfg;let r=Math.trunc(t.angle),o=0;const a=uS(i);let c=null;for(let l=0;l<200;l++){const h=ph(s,t,r,e,n,!0);if(h===fh)o|=1,r+=r<90?-1:1;else if(h===s_)o|=2,r+=r<90?1:-1;else if(a&&dS(i,t,r,h))o|=1,r+=r<90?-2:2;else{c=h;break}if(o===3||r<0||r>180)break}return c===null&&(c=ph(s,t,Math.max(0,Math.min(180,r)),e,n,!1)||800),[Xn(r),ds(c)]}function ru(i,t){let e=null,n=1e18;for(const s of i.tanks)if(s.alive&&s!==t&&!fs(i,t,s)){const r=Math.abs(s.x-t.x);r<n&&(e=s,n=r)}return e}function fs(i,t,e){return t!==e&&i.cfg.team_mode!==qa&&t.team_id===e.team_id}function fS(i,t){const e=i.tanks.slice().sort((a,c)=>a.score-c.score),n=new Map;e.forEach((a,c)=>n.set(a,c));const s=i.round_index+1;let r=null,o=-1e18;for(const a of i.tanks){if(!a.alive||a===t||fs(i,t,a))continue;const c=t.hits_this_round[a.player_index]??0,h=(t.hits_career[a.player_index]??0)*(t.shield_hp>0?3:5);let u=i.rng.pick(32e3)/2e3+c/s+h;a.shield_hp>0&&(u-=a.shield_hp/10+1);const d=Math.abs(n.get(t)-n.get(a))-1;u-=3*Math.max(0,d),u>o&&(r=a,o=u)}return r||ru(i,t)}function hn(i,t,e=!1){const n=[];for(let s=0;s<tn;s++)de[s].offensive&&t.has_ammo(s)&&n.push(s);return e&&n.length>0?n[i.rng.pick(n.length)]:t.has_ammo(xa)?xa:An}function pS(i,t){t.ai_class===Ya&&t.reveal_type!==-2&&(t.ai_class=i.rng.pick(7)+1,t.reveal_type=-2)}function Xc(i,t){pS(i,t);const e=t.ai_class;return(SS[e]??Ka)(i,t)}function mS(i,t){let e=Math.abs(3*i.cfg.wind/10)+i.cfg.AIR_VISCOSITY/2;return e=Math.min(70,e),t?85-e:95+e}function _S(i,t){const e=(i.rng.pick(Math.max(1,t.health))+1)*10;let n=0,s=0;for(const o of i.tanks)o.alive&&o!==t&&!fs(i,t,o)&&(o.x<t.x&&(n+=1),o.x>=t.x&&(s+=1));let r=i.rng.pick(181);if(n||s)for(let o=0;o<64;o++){const a=r>90;if(a&&n||!a&&s)break;r=i.rng.pick(181)}return[Xn(r),ds(e),hn(i,t,!0)]}function o_(i,t,e){let n=null,s=1<<30;for(const r of i.tanks)if(!(e&&e.has(r))&&r.alive&&r!==t&&!fs(i,t,r)){const o=Math.abs(r.x-t.x);o<s&&(n=r,s=o)}return n}function a_(i,t){const e=i.y-t.y+2,n=t.x-i.x,s=CS(Math.atan2(e,Math.abs(n))),r=Math.max(1,Math.min(89,s));return gi(n>=0?r:180-r)}function c_(i,t,e){const n=i.cfg;let s=Math.trunc(t.angle),r=null;for(let o=0;o<200;o++){const a=ph(n,t,s,e.x,e.y,!0);if(a<0)s+=s<90?1:-1;else if(a>=1){r=a;break}else break;if(s===90)return null}return[Xn(s),ds(r!==null?r:0)]}function Ka(i,t,e){const n=e!==void 0?e:new Set,s=o_(i,t,n);if(!s)return ou(i,t,hn(i,t));t.angle=Xn(a_(t,s));const r=c_(i,t,s);if(r===null){const c=new Set(n);return c.add(s),Ka(i,t,c)}const[o,a]=r;return[o,a,hn(i,t)]}function l_(i,t){const e=new Set;for(let n=0;n<8;n++){const s=o_(i,t,e);if(!s)return ou(i,t,hn(i,t));const r=gS(i,t,s);if(r!==null)return[r[0],r[1],hn(i,t)];t.angle=Xn(a_(t,s));const o=c_(i,t,s);if(o===null){e.add(s);continue}const[a,c]=o;return[a,c,hn(i,t)]}return[t.angle,t.power,hn(i,t)]}function h_(i){const t=i.cfg.live_elastic!==void 0?i.cfg.live_elastic:i.cfg.elastic??0;return t===3||t===4}function gS(i,t,e){const n=i.last_landing;if(n===null||!h_(i))return null;const s=n[0],r=n[1];if(t.ai_tries+=1,t.ai_tries>4)return t.ai_tries=0,null;let o=Math.trunc(t.angle);if(Math.abs(t.x-e.x)<Math.abs(t.x-s)){if(o+=1,o===90)return t.ai_tries=0,null}else r>=e.y&&o!==0&&(o-=1);return[Xn(o),ds(t.power)]}function ou(i,t,e){const n=ru(i,t),s=n?n.x>=t.x:!0;let r=i.rng.pick(70)+10,o;s?o=t.x+aa(i.w-1-t.x,2):(r=180-r,o=aa(t.x,2));const a=aa(i.h-1,2),c=Math.min(89,r<=90?r:180-r);let l=i_(i.cfg,t.x,t.y,o,a,c);return l===null&&(l=600),[Xn(r),ds(l),e]}function xS(i,t){const e=i.last_landing,n=hn(i,t);if(e===null)return ou(i,t,n);const s=e[0],r=e[1],o=i.direct_hit_tank,a=o!==null&&o.alive&&!fs(i,t,o)?o:yS(i,t,s);if(a===null)return[Xn(t.angle),ds(t.power),n];let c=t.angle,l=t.power;return Math.abs(t.x-a.x)<Math.abs(t.x-s)?l-=10:(r<a.y&&vS(i,r)&&(c<85?c+=2:c>95&&(c-=2)),l+=10),[Xn(c),ds(l),n]}function yS(i,t,e){let n=null,s=1<<30;for(const r of i.tanks)if(r.alive&&r!==t&&!fs(i,t,r)){const o=Math.abs(r.x-e);o<s&&(n=r,s=o)}return n}function vS(i,t){return(i.live_sky??"").toUpperCase()!=="CAVERN"?!0:aa(i.h,2)<t}function Xn(i){return Math.trunc(Math.max(0,Math.min(180,i)))}function ds(i){return Math.trunc(Math.max(0,Math.min(1e3,i)))}function bS(i,t){const e=[];for(const n of i.tanks)n.alive&&n!==t&&!fs(i,t,n)&&e.push(n);return e.length===0?null:e[i.rng.pick(e.length)]}function u_(i,t){const e=bS(i,t);if(!e)return[t.angle,t.power,hn(i,t)];t.angle=t.x<e.x?65:115;const[n,s]=r_(i,t,e.x,e.y);return[n,s,hn(i,t)]}function MS(i,t){const e=fS(i,t);if(!e)return[t.angle,t.power,hn(i,t)];t.angle=Xn(mS(i,t.x<e.x));const[n,s]=r_(i,t,e.x,e.y);return[n,s,hn(i,t)]}function ES(i,t){const e=ru(i,t);return e&&wS(i,t,e)?Ka(i,t):h_(i)?l_(i,t):u_(i,t)}function wS(i,t,e){const n=t.x,s=t.y-6,r=e.x,o=e.y-6,a=Math.max(1,Math.trunc(Math.hypot(r-n,o-s)));for(let c=1;c<a;c++){const l=Math.trunc(n+(r-n)*c/a),h=Math.trunc(s+(o-s)*c/a);if(i.terrain.is_dirt(l,h))return!1}return!0}const SS={[su]:_S,[eS]:Ka,[nS]:l_,[iS]:xS,[sS]:ES,[rS]:u_,[oS]:MS};function TS(i,t){i.cfg.is_on("COMPUTERS_BUY")&&(t.ai_class===su?RS(i,t):AS(i,t))}function pf(i,t){return i.inventory[t]>0}function AS(i,t){const e=i.economy;for(const s of[t_,Qm,jm])ya.some(r=>pf(t,r))||e.buy(t,s);pf(t,as)||e.buy(t,as)&&(t.parachute_deployed=!0);for(const s of[xa,An]){let r=0;for(;t.inventory[s]<5&&e.available[s]&&r<20&&e.buy(t,s);)r+=1}let n=0;for(;t.inventory[Bn]<8&&n<20&&e.buy(t,Bn);)n+=1}function RS(i,t){const e=i.economy;for(let n=0;n<10;n++){const s=[],r=[];for(const a of Object.keys(ff)){const c=Number(a),l=ff[c];e.available[c]&&t.cash>=e.price[c]&&l>0&&(s.push(c),r.push(l))}if(s.length===0)break;const o=s[i.rng.roulette(r)];if(!e.buy(t,o))break}}function au(i){return i*Math.PI/180}function CS(i){return i*180/Math.PI}const LS={33:"heat",34:"ballistic",35:"horizontal",36:"vertical",37:"lazyboy"},d_=new Set(["mirv","riot_wedge","riot_sphere","plasma"]),IS=80,mf=.35;function PS(i,t,e,n){const s=i.selected_guidance;if(s==null)return n.guidance=null,null;const r=LS[s];if(r===void 0||d_.has(e.behavior))return n.guidance=null,null;const o={type:r,target:i.guidance_target??null,point:i.guidance_target_pt??null,tanks:null,armed:!1,_last_x:null,_last_y:null};return n.guidance=o,o}function NS(i,t,e=null){const n=i.guidance;if(!n)return!0;e!=null&&(n.tanks=e);const s=n._last_x,r=n._last_y,o=n.type;return o==="heat"?OS(i,n):o==="horizontal"?FS(i,n,s,r):o==="vertical"?kS(i,n,s):o==="lazyboy"&&BS(i,n),n._last_x=i.px,n._last_y=i.py,!0}function $a(i){return Math.hypot(i.vx,i.vy)}function DS(i,t){const e=t.tanks;if(!e||e.length===0)return null;const n=i.owner,s=n?.team_id??null;let r=null,o=IS;for(const a of e){if(!a.alive||a===n||s!==null&&(a.team_id??null)===s&&US(a,n))continue;const c=Math.hypot(a.x-i.px,a.y-4-i.py);c<=o&&(r=a,o=c)}return r}function US(i,t){const e=i?.team_id??0,n=t?.team_id??0;return e!==0&&e===n}function OS(i,t){const e=DS(i,t);if(e===null)return;const n=$a(i);if(n<1e-6)return;const s=e.x-i.px,r=e.y-4-i.py,o=Math.hypot(s,r);if(o<1e-6)return;const a=s/o,c=-r/o,l=i.vx+(a*n-i.vx)*mf,h=i.vy+(c*n-i.vy)*mf,u=Math.hypot(l,h);u<1e-6||(i.vx=l/u*n,i.vy=h/u*n)}function FS(i,t,e,n){const s=t.target,r=t.point,o=s!==null?s.y-4:r?r[1]:null,a=s!==null?s.x:r?r[0]:null;if(o===null||a===null||(t.armed||n!==null&&(n-o)*(i.py-o)<=0&&(t.armed=!0),!t.armed))return;const c=$a(i),l=a>=i.px?1:-1;i.vx=l*c,i.vy=0}function kS(i,t,e,n){const s=t.target,r=t.point,o=s!==null?s.x:r?r[0]:null;if(o===null||(t.armed||e!==null&&(e-o)*(i.px-o)<=0&&(t.armed=!0,i.px=o),!t.armed))return;const a=$a(i);i.vx=0,i.vy=-a,i.px=o}function BS(i,t){let e=t.point;if(e===null){const f=t.target;if(f===null)return;e=[f.x,f.y-4]}const n=$a(i);if(n<1e-6)return;const s=e[0]-i.px,r=e[1]-i.py,o=Math.hypot(s,r);if(o<1e-6)return;const a=s/o,c=-r/o,l=.6,h=i.vx+(a*n-i.vx)*l,u=i.vy+(c*n-i.vy)*l,d=Math.hypot(h,u);d<1e-6||(i.vx=h/d*n,i.vy=u/d*n)}function HS(i,t,e){const n=t.guidance_target??null,s=t.guidance_target_pt??null;let r,o;if(n!==null)r=n.x,o=n.y-4;else if(s!==null)r=s[0],o=s[1];else return null;const a=t.angle,c=a<=90?a:180-a,l=i_(i,t.x,t.y,r,o,c);return l===null?1e3:gi(Math.max(30,Math.min(1e3,l)))}const zS=.017453293,_f=12,gf=0,xf=1,yf=2;function Xo(i,t,e,n=null,s=null){if(s===null&&(s=i.angle),n===null&&i.selected_guidance===34&&!d_.has(e.behavior)){const _=HS(t,i);_!==null&&(n=_)}n===null&&(n=i.power);const r=s*zS,o=Math.cos(r),a=Math.sin(r),c=i.x,l=i.y-4,h=c+o*_f,u=l-a*_f,d=n*eu,f=d*o,m=d*a,x=new n_(i,e,h,u,f,m);return PS(i,t,e,x),x}function VS(i,t,e=Rw,n=null){i.prev_px=i.px,i.prev_py=i.py,i.guidance!==null&&i.guidance!==void 0&&NS(i,t,n);const s=i.vx*i.vx+i.vy*i.vy;if(s>Tw){const o=Math.sqrt(s);i.vx=i.vx/(o/lf),i.vy=i.vy/(o/lf)}i.px+=i.vx*e,i.py-=i.vy*e,i.saved_vx=i.vx,i.saved_vy=i.vy;const r=t.viscosity_mult;if(i.mode!==1&&r!==1&&(i.vx*=r,i.vy*=r),i.mode!==1){const o=tu*t.GRAVITY;if(i.vy-=o*e,t.wind){const a=Sw*t.wind;i.vx+=a*e}}i.sx=gi(i.px),i.sy=gi(i.py)}function GS(i,t,e,n){const s=t.live_elastic!==void 0?t.live_elastic:t.elastic??0,r=t.EDGES_EXTEND,o=i.px,a=i.py,c=0,l=e-1,h=0,u=n-1;let d=gf,f=null;if(o<c||o>l){if(s===0)return!(o<c-r||o>l+r);if(s===5)return!1;d=xf,s===1?f=o<c?l:c:f=o<c?c:l}else if(a<h){if(s===0||s===1)return!0;if(s===5)return!1;d=yf,f=h}else if(a>=u)if(s===3||s===4){if(-50<i.vy&&i.vy<50)return!1;d=yf,f=u}else return!1;if(d===gf)return!0;i.bounce_count+=1;let m;return s===3?m=Gc.RUBBER:s===2?m=Gc.PADDED:m=Gc.DEFAULT,i.bounce_count>6&&(m*=i.bounce_energy,i.bounce_energy*=Gm),d===xf?(i.px=f,i.vx*=m):(i.py=f,i.vy*=m),i.sx=gi(i.px),i.sy=gi(i.py),!0}const WS=30;function vf(i,t){return Math.floor(i/t)}function Bi(i,t){i.score+=t,i.cash=Math.max(0,i.cash+t)}function f_(i,t,e){return t===e||i.cfg.team_mode!==qa&&t.team_id===e.team_id}function XS(i,t,e){if(t!==null)if(f_(i,t,e))Bi(t,t===e?Ww:Xw);else{const n=i.cfg.scoring===Xa?Vw:Gw;Bi(t,n)}}function p_(i,t,e,n,s){t===null||n<=0||i.cfg.scoring!==Xa&&(f_(i,t,e)?Bi(t,-15*Math.trunc(n)):s?Bi(t,qw*Math.trunc(n)):Bi(t,Math.trunc(n*WS)))}function qS(i){const t=i.tanks.filter(n=>n.alive);if(t.length===0)return;let e;if(i.cfg.scoring===Xa?e=i.tanks.length*$m:e=Zm,i.cfg.team_mode===qa)for(const n of t)n.win_counter+=1,Bi(n,e);else{const n=t[0].team_id,s=i.tanks.filter(a=>a.team_id===n),r=s.filter(a=>a.alive).length,o=vf(e,Math.max(1,r));for(const a of s)a.alive?(a.win_counter+=1,Bi(a,o)):Bi(a,vf(o,2))}}function YS(i,t){let e=t.cash;for(let n=0;n<t.inventory.length;n++){const s=t.inventory[n];if(s>0){const r=i.economy.unit_price(n)*iu;e+=Math.trunc(s*r)}}return e}function bf(i){const t=i.cfg.scoring===Kw?n=>YS(i,n):n=>n.score,e=i.tanks.map(n=>({t:n,k:t(n)}));return e.sort((n,s)=>n.k<s.k?1:n.k>s.k?-1:0),e.map(n=>n.t)}const Mf=44100,Ef=2,KS=.28,bn=19,Ri=12e3,$S=200,ZS=64;function Nn(i,t,e){return i<t?t:i>e?e:i}function wf(i,t,e){const n=new Float64Array(e);if(e===1)return n[0]=i,n;const s=(t-i)/(e-1);for(let r=0;r<e;r++)n[r]=i+s*r;return n[e-1]=t,n}function JS(){const i=globalThis;return i.AudioContext??i.webkitAudioContext??null}class jS{constructor(){g(this,"enabled",!0);g(this,"fly_mode","OFF");g(this,"field_height",480);g(this,"_ready",!1);g(this,"_init_failed",!1);g(this,"_ctx",null);g(this,"_mix_rate",Mf);g(this,"_mix_channels",Ef);g(this,"_tone_cache",new Map);g(this,"_sweep_cache",new Map);g(this,"_seq_cache",new Map);g(this,"_fly_source",null);g(this,"_fly_freq",0);g(this,"_fly_launch_y",null)}init(){if(this._ready)return!0;if(this._init_failed)return!1;const t=JS();if(t===null)return this._init_failed=!0,!1;try{const e=new t;return this._ctx=e,this._mix_rate=e.sampleRate||Mf,this._mix_channels=Ef,this._ready=!0,!0}catch{return this._init_failed=!0,!1}}_square_wave(t,e,n,s){const r=new Float64Array(e);if(s==null||s===t)for(let o=0;o<e;o++){const a=o/n,c=2*Math.PI*t*a;r[o]=Math.sign(Math.sin(c))}else{const o=e/n,a=o>0?(s-t)/o:0;for(let c=0;c<e;c++){const l=c/n,h=2*Math.PI*(t*l+.5*a*l*l);r[c]=Math.sign(Math.sin(h))}}return r}_envelope(t,e,n){const s=Math.max(1,Math.trunc(n*.003));if(e>2*s){const r=wf(0,1,s),o=wf(1,0,s);for(let a=0;a<s;a++)t[a]=t[a]*r[a],t[e-s+a]=t[e-s+a]*o[a]}return t}_finish(t,e){const n=new Int16Array(e);for(let s=0;s<e;s++)n[s]=Math.trunc(t[s]*KS*32767);return n}_square_array(t,e,n){const s=this._mix_rate,r=Math.max(1,Math.trunc(s*e/1e3)),o=this._envelope(this._square_wave(t,r,s,n),r,s);return this._finish(o,r)}_seq_array(t){const e=this._mix_rate,n=[];for(const o of t){const a=o[0],c=o[1],l=o.length>2?o[2]:null,h=Math.max(1,Math.trunc(e*c/1e3));if(a<bn&&(l===null||l<bn)){n.push(new Float64Array(h));continue}const u=Nn(a,bn,Ri),d=l===null?null:Nn(l,bn,Ri);n.push(this._envelope(this._square_wave(u,h,e,d),h,e))}let s=0;for(const o of n)s+=o.length;let r;if(s===0)r=new Float64Array(1);else{r=new Float64Array(s);let o=0;for(const a of n)r.set(a,o),o+=a.length}return this._finish(r,r.length)}_buffer(t){const e=this._ctx;if(e===null)return null;const n=t.length;try{const s=e.createBuffer(this._mix_channels,n,this._mix_rate);for(let r=0;r<this._mix_channels;r++){const o=s.getChannelData(r);for(let a=0;a<n;a++)o[a]=t[a]/32768}return s}catch{return null}}_tone_buffer(t,e){if(!this.init())return null;const n=Math.trunc(Nn(t,bn,Ri)),s=Math.trunc(Math.max(1,e)),r=`${n}:${s}`;let o=this._tone_cache.get(r);if(o===void 0){const a=this._buffer(this._square_array(n,s));if(a===null)return null;o=a,this._tone_cache.set(r,o)}return o}_sweep_buffer(t,e,n){if(!this.init())return null;const s=Math.trunc(Nn(t,bn,Ri)),r=Math.trunc(Nn(e,bn,Ri)),o=Math.trunc(Math.max(1,n)),a=`${s}:${r}:${o}`;let c=this._sweep_cache.get(a);if(c===void 0){const l=this._buffer(this._square_array(s,o,r));if(l===null)return null;c=l,this._sweep_cache.set(a,c)}return c}_seq_buffer(t){if(!this.init())return null;const e=JSON.stringify(t);let n=this._seq_cache.get(e);if(n===void 0){const s=this._buffer(this._seq_array(t));if(s===null)return null;n=s,this._seq_cache.set(e,n)}return n}_play_buffer(t){const e=this._ctx;if(t===null||e===null)return null;try{e.state==="suspended"&&typeof e.resume=="function"&&e.resume();const n=e.createBufferSource();return n.buffer=t,n.connect(e.destination),n.start(),n}catch{return null}}beep(t,e,n){!(n===void 0?this.enabled:n)||t<bn||this._play_buffer(this._tone_buffer(t,e))}_play_sweep(t,e,n){this._play_buffer(this._sweep_buffer(t,e,n))}_play_tones(t,e){e&&this._play_buffer(this._seq_buffer(t))}play(t,e,n){const s=e===void 0?this.enabled:e;if(s){if(t==="fire"){const r=[];for(let o=0;o<100;o+=15)r.push([o,14]);return this._play_tones(r,s)}if(t==="explosion"||t==="nuke"){const r=Number(n?.size??20)||20,o=Math.trunc(Nn(4+r/8,4,14)),a=Math.trunc(Nn(22+r*.4,22,60)),c=[];for(let l=0;l<o;l++)c.push([l%2===0?200:100,a]);return this._play_tones(c,s)}if(t==="plasma"){const r=[];for(let o=1;o<10;o++)r.push([o*1e3,16]);for(let o=1;o<10;o++)r.push([(10-o)*1e3,16]);return this._play_tones(r,s)}if(t==="shield_collapse"){const r=this._sweep_steps(6e3,-100,51,6);return r.push([1e3,40]),this._play_tones(r,s)}if(t==="shield_deploy")return this._play_tones(this._sweep_steps(1e3,100,51,6),s);if(t==="shield_hit")return this.beep(900,40,s);if(t==="throe_front"){const r=[];let o=1e3;for(let a=0;a<40;a++)r.push([o,12]),o+=200,o>4e3&&(o=1e3);return this._play_tones(r,s)}if(t==="throe_thud")return this._play_tones([[100,90]],s);if(t==="sink")return this._play_tones(this._sweep_steps(5e3,-200,24,10),s);if(t==="death"){const r=[];for(let o=10;o<20;o++)r.push([20,22]),r.push([0,(o-10)*-2+25]);return this._play_tones(r,s)}if(t==="battery")return this._play_tones([[100,22],[200,28],[100,34]],s);if(t==="parachute")return this.beep(2e3,48,s);if(t==="dirt_settle")return this._play_tones([[30,18],[30,18],[20,30]],s);if(t==="teleport"){const r=[];let o=1000n;for(let a=0;a<12;a++)o=o*1103515245n+12345n&0x7fffffffn,r.push([Number(o%100n)*100+1e3,10]);return this._play_tones(r,s)}if(t==="lightning")return this.beep(2e3,70,s);if(t==="thunder")return this._play_tones([[70,24],[40,30],[90,22],[50,28]],s);if(t==="laser")return this._play_sweep(1e3,6e3,90);if(t==="bounce"||t==="fizzle"||t==="mirv")return t==="bounce"?this.beep(520,36,s):t==="mirv"?this.beep(700,30,s):this.beep(300,40,s);if(t==="victory")return this._play_sweep(5e3,15e3,260);if(t==="ui_beep")return this.beep($S,ZS,s);if(t==="turn"||t==="menu_move"||t==="select")return this.beep(20,70,s);if(t==="dialog_open"||t==="dialog_close")return t==="dialog_open"?this._play_sweep(260,720,150):this._play_sweep(720,260,150)}}_sweep_steps(t,e,n,s){const r=[];let o=t;for(let a=0;a<n;a++)r.push([Math.trunc(Nn(o,bn,Ri)),s]),o+=e;return r}set_launch_y(t){this._fly_launch_y=t}_fly_freq_for(t,e){if(t==="POS"){const s=e.sy??0;let o=((this._fly_launch_y!==null?this._fly_launch_y:0)-s)*8+1e3;return o<50&&(o=50),Math.trunc(Nn(o,bn,Ri))}const n=Math.hypot(e.vx??0,e.vy??0);return Math.trunc(Nn(n,bn,Ri))}start_fly(t,e){const n=e===void 0?this.enabled:e,s=(t!==void 0?t:this.fly_mode)||"OFF";if(this.fly_mode=s,!n||s==="OFF"||!this.init())return;const r=this._tone_buffer(300,60),o=this._ctx;if(!(r===null||o===null))try{const a=o.createBufferSource();a.buffer=r,a.loop=!0,a.connect(o.destination),a.start(),this._fly_source=a,this._fly_freq=300}catch{this._fly_source=null}}fly_tone(t,e,n){const s=n===void 0?this.enabled:n,r=t||"OFF";if(this.fly_mode=r,!s||r==="OFF"){this.stop_fly();return}if(!this.init()||this._fly_source===null&&(this.start_fly(r,s),this._fly_source===null))return;const o=this._fly_freq_for(r,e);if(o!==this._fly_freq){const a=this._tone_buffer(o,60),c=this._ctx;if(a!==null&&c!==null){try{this._fly_source!==null&&this._fly_source.stop()}catch{}try{const l=c.createBufferSource();l.buffer=a,l.loop=!0,l.connect(c.destination),l.start(),this._fly_source=l,this._fly_freq=o}catch{}}}}stop_fly(){if(this._fly_source!==null)try{this._fly_source.stop()}catch{}this._fly_source=null,this._fly_freq=0}}const Vt=new jS;function Za(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}const QS=nu;function tT(i){return[i.x,i.y]}function eT(i,t){if(i.shield_hp!==0&&t!==0){if(t<i.shield_hp)return i.shield_hp-=t,[0,t];const e=t-i.shield_hp,n=i.shield_hp;return i.shield_hp=0,i.shield_item=0,[e,n]}return[t,0]}function ps(i,t,e){if(e=Math.trunc(e),t===null||e<=0||!t.alive)return;const n=i.current_shooter;if(n!==null){const o=n.player_index;t.hits_this_round[o]=(t.hits_this_round[o]??0)+1,t.hits_career[o]=(t.hits_career[o]??0)+1}const[s,r]=eT(t,e);r>0&&t.shield_hp===0&&Vt.play("shield_collapse",i.cfg.is_on("SOUND")),r>0&&(p_(i,n,t,r,!0),t.shield_hp>0),s>0&&cu(i,t,s,!1)}function cu(i,t,e,n=!0){e=Math.trunc(e),!(e<=0||!t.alive)&&(n&&p_(i,i.current_shooter,t,e,!1),t.health-=e,t.health<=0&&(t.health=0,nT(i,t)))}function Sf(i,t,e){cu(i,t,e,!1)}function nT(i,t,e=null){t.alive&&(t.alive=!1,t.health=0,e===null&&(e=i.current_weapon??null),i.on_tank_destroyed(t,e))}function fn(i,t,e,n,s=!0){if(n=Math.trunc(n),!(n<=0)){s&&(i.terrain.carve_circle(t,e,n),i.add_explosion(t,e,n));for(const r of i.tanks.slice()){if(!r.alive)continue;const[o,a]=tT(r),c=o-t,l=a-e,h=Math.sqrt(c*c+l*l);if(h<n){const u=Za((n-h)*nu/n);ps(i,r,u)}}}}function iT(i,t){t.alive&&cu(i,t,t.health,!0)}function Tf(i,t=QS){i.shield_hp>0&&(i.shield_hp=Math.max(0,i.shield_hp-Math.trunc(t)),i.shield_hp===0&&(i.shield_item=0))}function sT(i,t){const e=t.x;let n=t.y;const s=i.h-2;let r=0;for(;n<s&&!i.is_supported(e,n,t.half_width);)n+=1,r+=1;return r*qm}function rT(i,t){return!t.parachute_deployed||t.parachutes<1?!1:t.parachute_threshold===0?!0:t.parachute_threshold<sT(i,t)}function qc(i){return Math.min(255,(Math.trunc(i)&63)<<2)}function Se(i,t,e){return[qc(i),qc(t),qc(e)]}const m_=110,va=[[63,10,10],[35,55,10],[40,20,63],[63,63,10],[10,63,63],[63,10,63],[60,60,60],[63,40,20],[20,63,40],[0,0,63]];va.map(i=>Se(i[0],i[1],i[2]));const ca=[[38,25,17],[54,36,28],[53,53,47],[20,62,20],[9,35,9],[36,54,28]],oT=30;function aT(){const i=[];for(let t=0;t<oT;t++)i.push([29-t,29-t,63]);return i}function cT(){const i=[];for(let l=0;l<256;l++)i.push([0,0,0]);i[On]=[0,0,0];const t=[[0,0,0],[0,0,170],[0,170,0],[0,170,170],[170,0,0],[170,0,170],[170,85,0],[170,170,170],[85,85,85],[85,85,255],[85,255,85],[85,255,255],[255,85,85],[255,85,255],[255,255,85],[255,255,255]];for(let l=0;l<t.length;l++)i[l]=[t[l][0],t[l][1],t[l][2]];i[Tn]=Se(ca[0][0],ca[0][1],ca[0][2]);const e=i[Tn][0],n=i[Tn][1],s=i[Tn][2],r=kn-Te;for(let l=Te;l<=kn;l++){const u=.45+.55*((l-Te)/r);i[l]=[Math.trunc(e*u),Math.trunc(n*u),Math.trunc(s*u)]}for(let l=0;l<va.length;l++){const h=va[l];i[m_+l]=Se(h[0],h[1],h[2])}const o=[[87,[40,40,63]],[120,[9,9,31]],[150,[50,50,50]],[151,[45,45,45]],[152,[0,0,0]],[153,[30,30,30]],[154,[40,40,63]],[155,[63,63,63]],[156,[15,15,15]],[157,[50,50,50]],[158,[5,5,5]],[159,[55,55,55]],[160,[20,60,20]],[161,[10,63,63]],[162,[45,45,45]]];for(const[l,h]of o)i[l]=Se(h[0],h[1],h[2]);const a=aT();for(let l=0;l<a.length;l++){const h=a[l];i[mh+l]=Se(h[0],h[1],h[2])}const c=[252,220,120];for(let l=Wc;l<=kw;l++){let h=(l-Wc)/(Ym-Wc);h=Math.max(0,Math.min(1,h));const u=Math.trunc(c[0]*h),d=Math.trunc(c[1]*Math.pow(h,1.4)),f=Math.trunc(c[2]*Math.pow(h,2.2));i[l]=[u,d,f]}return i[200]=Se(60,60,60),i[203]=Se(40,40,40),i[254]=Se(40,15,15),i[255]=Se(63,63,63),i[Bw]=Se(20,60,60),i[231]=Se(20,60,20),i[232]=Se(20,20,60),i[Km]=[252,240,200],i}function lT(i){const t=va.length;return m_+(i%t+t)%t}const mh=120,Af=149,hT=200,uT=239,dT=120,fT=149,zr=175,Ys=184,_h=8,Rf=11,ba=14,Cf=18,gh=2;function je(i){return Math.fround(i)}class pT{constructor(t){g(this,"table");g(this,"rev");if(t===void 0&&(t=cT()),t.length!==256)throw new Error(`LiveLUT expects a (256,3) table, got length ${t.length}`);this.table=[];for(let e=0;e<256;e++){const n=t[e];if(n.length!==3)throw new Error(`LiveLUT expects a (256,3) table, got row ${e} length ${n.length}`);this.table.push([n[0]&255,n[1]&255,n[2]&255])}this.rev=0}get(t){return this.table[t]}copy_table(){const t=[];for(let e=0;e<256;e++){const n=this.table[e];t.push([n[0],n[1],n[2]])}return t}rotate_band(t,e,n=1){if(t=Math.trunc(t),e=Math.trunc(e),e<=t)return;const s=e-t+1,o=(Math.trunc(n)%s+s)%s;if(o===0)return;const a=[];for(let c=0;c<s;c++){const l=this.table[t+c];a.push([l[0],l[1],l[2]])}for(let c=0;c<s;c++){const l=((c-o)%s+s)%s;this.table[t+c]=a[l]}this.rev+=1}reramp_band(t,e,n,s){if(t=Math.trunc(t),e=Math.trunc(e),e<t)return;const r=e-t+1,o=[je(n[0]),je(n[1]),je(n[2])],a=[je(s[0]),je(s[1]),je(s[2])],c=[];if(r===1)c.push(je(0));else{const h=1/(r-1);for(let u=0;u<r;u++)c.push(je(u*h));c[r-1]=je(1)}for(let l=0;l<r;l++){const h=c[l],u=je(1-h),d=[0,0,0];for(let f=0;f<3;f++){const m=je(o[f]*u),x=je(a[f]*h),_=je(m+x);d[f]=Math.trunc(Math.min(255,Math.max(0,_)))}this.table[t+l]=d}this.rev+=1}set_band(t,e,n){t=Math.trunc(t),e=Math.trunc(e);const s=e-t+1;for(let r=0;r<s;r++){const o=n[r];this.table[t+r]=[o[0]&255,o[1]&255,o[2]&255]}this.rev+=1}set_index(t,e){this.table[Math.trunc(t)]=[e[0]&255,e[1]&255,e[2]&255],this.rev+=1}}function mT(i){i===void 0&&(i=ca[0]);const t=i[0],e=i[1],n=i[2],s=[];for(let r=0;r<5;r++)s.push([Math.floor(((r+1)*63+(4-r)*t)/5),Math.floor(((r+1)*20+(4-r)*e)/5),Math.floor(((r+1)*20+(4-r)*n)/5)]);for(let r=0;r<5;r++){const o=r*-5+63;s.push([o,o,63])}return s}function _T(i){return mT(i).map(t=>Se(t[0],t[1],t[2]))}const gT=[[63,32,10],[63,0,63],[63,12,12],[63,0,30]];function Lf(i,t){const e=(Math.trunc(t)%101+101)%101,n=e<=49?e:100-e;if(i.set_index(gh,Se(Math.floor(n*63/50),Math.floor(n*10/50),0)),!(e&7)){let a=(e>>3&3)+1;for(let c=0;c<4;c++){const l=gT[((a-1)%4+4)%4];i.set_index(_h+c,Se(l[0],l[1],l[2])),a+=1,a>4&&(a=1)}}const s=(e>>1)%5;i.set_index(ba+s,Se(0,0,0));const r=[15,30,45,60];let o=s;for(let a=0;a<4;a++)o+=1,o>4&&(o=0),i.set_index(ba+o,Se(r[a],r[a],r[a]))}function lu(i,t){return Math.sqrt(i*i+t*t)}function xT(i){return i*Math.PI/180}function Ce(i,t){return Math.abs(t.blast)*i.explosion_scale}function ks(i,t,e,n){const s=t.weapon;i.current_weapon=s;const r=s.category??"";if(s.behavior!=="tracer"&&s.behavior!=="plasma"&&r!=="nuclear"&&Vt.play("explosion",i.cfg.is_on("SOUND")),(s.category??"")==="nuclear"){yT(i,t,e,n);return}(UT[s.behavior]??Vr)(i,t,e,n)}function Vr(i,t,e,n){fn(i,e,n,Ce(i,t.weapon))}function yT(i,t,e,n){Vt.play("nuke",i.cfg.is_on("SOUND"));const s=Ce(i,t.weapon);fn(i,e,n,s,!1),i.terrain.carve_circle(Math.trunc(e),Math.trunc(n),Math.trunc(s)),i.add_explosion(Math.trunc(e),Math.trunc(n),Math.trunc(s),{nuke:!0})}function vT(i,t,e,n){const s=Ce(i,t.weapon),r=Math.trunc(Math.abs(t.weapon.blast))*10,o=t.weapon.params.scatter??15,a=[];for(let d=0;d<o;d++)a.push([i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s),i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s)]);const c=Math.max(8,s*.3),l=[[0,0],...a];let h=0,u=Math.floor(r/5);for(;u>0;){const[d,f]=l[(h%l.length+l.length)%l.length],m=Math.trunc(e+d),x=Math.trunc(n+f);fn(i,m,x,c);const _=bT(i,m,x);if(_!==null&&lu(_.x-m,_.y-x)<=c){const p=u<=10?u:10;ps(i,_,p)}u-=50,h+=1}}function bT(i,t,e){let n=null,s=1e9;for(const r of i.tanks)if(r.alive){const o=lu(r.x-t,r.y-e);o<s&&(n=r,s=o)}return n}function MT(i,t,e,n){const s=i.terrain;n=Math.max(1,Math.trunc(n));const r=s.column_top(t),o=h=>{let u=0;for(let d=1;d<=n;d++){const f=s.column_top(t+h*d);u=Math.max(u,r-f)}return u},a=o(-1),c=o(1),l=Math.min(a,c);return Math.max(0,Math.min(1,l/n))}function ET(i,t,e,n){const s=Ce(i,t.weapon),r=t.weapon.heat,o=t.weapon.params.deep_heat??r,a=MT(i,Math.trunc(e),Math.trunc(n),s),c=r+(o-r)*a,l=s*(1+.5*a);fn(i,e,n,s,!1),i.add_explosion(Math.trunc(e),Math.trunc(n),Math.trunc(l));for(const h of i.tanks){if(!h.alive)continue;const u=lu(h.x-e,h.y-n);u<l&&ps(i,h,Za(c*(1-u/l)))}}function oo(i){Vt.play("dirt_settle",i.cfg.is_on("SOUND"))}function wT(i,t,e,n){i.terrain.deposit_circle(e,n,Ce(i,t.weapon)),i.terrain.settle(i.cfg,i.rng,e-60,e+60),oo(i)}function ST(i,t,e,n){i.terrain.deposit_circle(e,n,Ce(i,t.weapon));for(let s=0;s<3;s++)i.terrain.settle(i.cfg,i.rng,e-80,e+80);oo(i)}function TT(i,t,e,n){const s=Math.trunc(Ce(i,t.weapon)),r=xT(35);for(let o=0;o<=s;o++){const a=Math.trunc(o*Math.tan(r))+2,c=n-o;for(let l=-a;l<=a;l++)i.terrain.is_solid(e+l,c)||i.terrain.write(e+l,c,Te+4)}oo(i)}function AT(i,t,e,n){i.terrain.settle(i.cfg,i.rng,0,i.terrain.w),oo(i)}function RT(i,t,e,n){i.terrain.carve_circle(e,n,Ce(i,t.weapon)),i.add_explosion(e,n,Math.trunc(Ce(i,t.weapon)),{dirt_only:!0})}const CT={"Riot Charge":45,"Riot Blast":60};function LT(i,t,e,n){const s=CT[t.weapon.name]??45,r=t.owner?.angle??90;i.terrain.carve_wedge(e,n,Ce(i,t.weapon),s,r)}function IT(i,t,e,n){}function __(i,t,e,n){i.current_weapon=t.weapon,Vt.play("plasma",i.cfg.is_on("SOUND"));const s=Ce(i,t.weapon);fn(i,e,n,s,!1),i.terrain.carve_circle(Math.trunc(e),Math.trunc(n),Math.trunc(s)),i.add_plasma_ring(e,n,s)}function If(i,t,e,n){}function PT(i,t,e,n){const s=Ce(i,t.weapon),r=t.weapon.params.pops??8,o=Math.max(4,s*.35);fn(i,e,n,o);for(let a=0;a<r;a++){const c=i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s),l=i.rng.pick(Math.trunc(s)+1);fn(i,Math.trunc(e+c),Math.trunc(n-l),o)}}function NT(i,t,e,n){const s=Math.trunc(Ce(i,t.weapon)),r=Math.max(2,Math.trunc(s/4)),o=Math.max(s,s*2),a=Math.max(0,n-o);for(let c=e-r;c<=e+r;c++)for(let l=a;l<=n;l++)i.terrain.is_solid(c,l)||i.terrain.write(c,l,Te+8);i.terrain.settle(i.cfg,i.rng,e-r-4,e+r+4),oo(i)}function DT(i,t,e,n){__(i,t,e,n)}const UT={explosive:Vr,funky:vT,napalm:ET,dirt_sphere:wT,dirt_slump:ST,dirt_wedge:TT,dirt_settle:AT,riot_sphere:RT,riot_wedge:LT,tracer:IT,plasma:__,roller:Vr,leapfrog:Vr,mirv:Vr,digger:If,sandhog:If,popcorn:PT,dirt_tower:NT,plasma_laser:DT};function OT(i,t){if(t.weapon.behavior!=="mirv"||t.split_done)return;Vt.play("mirv",i.cfg.is_on("SOUND")),t.split_done=!0,t.active=!1;const e=t.weapon.warheads,n=t.weapon.fan,s=Math.floor((e+1)/2);for(let r=0;r<e;r++){const o=n*(r-s);if(o===0)continue;const a=new n_(t.owner,g_(t.weapon),t.px,t.py,t.vx+o,t.vy);a.warheads_left=1,a.split_done=!0,i.projectiles.push(a)}}function g_(i){const t=Object.assign(Object.create(Object.getPrototypeOf(i)),i);return t.behavior="explosive",t.warheads=1,t}function FT(i,t,e,n){t.state.rolling=!0,t.vx=t.vy=0;const s=i.terrain.column_top(e-3),r=i.terrain.column_top(e+3);t.state.dir=r>s?1:-1,t.px=e,t.py=i.terrain.column_top(e)-1}function kT(i,t){const e=i.terrain,n=t.state.dir,s=Math.trunc(t.px)+n;if(s<=1||s>=e.w-1)return Yc(i,t);const r=e.column_top(s),o=e.column_top(Math.trunc(t.px));for(const a of i.tanks)if(a.alive&&Math.abs(a.x-s)<=a.half_width)return Yc(i,t);if(r>o+6)t.px=s,t.py=r-1;else{if(r<o-1)return Yc(i,t);t.px=s,t.py=r-1}return t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py),!0}function Yc(i,t){return ks(i,t,Math.trunc(t.px),Math.trunc(t.py)),t.active=!1,!1}function BT(i,t,e,n){t.state.tunneling=!0,t.state.depth=0,t.state.max_depth=Math.abs(t.weapon.blast);const s=Math.abs(t.weapon.blast);t.state.bore_half=Math.max(5,Math.trunc(s/2)),t.px=e,t.py=n,t.vx=t.vy=0}function x_(i,t,e,n){const s=i.terrain,r=zr,o=Ys-r;for(let a=-n;a<=n;a++)s.write(t+a,e,On);{let a=0;for(let c=n;c<=n+2;c++,a++){const l=Math.min(Ys,r+a);s.is_solid(t+c,e)&&s.write(t+c,e,l),s.is_solid(t-c,e)&&s.write(t-c,e,l)}}{const a=Math.min(n+1,o+1);let c=0;for(let l=0;l<a;l++,c++){const h=Math.min(Ys,r+c);s.is_solid(t+l,e+1)&&s.write(t+l,e+1,h),s.is_solid(t-l,e+1)&&s.write(t-l,e+1,h)}}i.start_digger_cycle!==void 0&&i.start_digger_cycle()}function HT(i,t){const e=i.terrain,n=Math.trunc(t.px),s=Math.trunc(t.py);return x_(i,n,s,t.state.bore_half??3),t.state.depth=t.state.depth+1,t.py+=1,t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py),t.state.depth>=t.state.max_depth||t.py>=e.h-2?(t.active=!1,!1):!0}function zT(i,t,e,n){t.state.tunneling=!0,t.state.depth=0,t.state.start_y=n,t.state.warheads=t.weapon.warheads;const s=XT(i,t.owner);t.state.target_x=s?s.x:e,t.px=e,t.py=n,t.vx=t.vy=0}function VT(i,t){const e=i.terrain,n=Math.trunc(t.px),s=Math.trunc(t.py);x_(i,n,s,2);const r=t.state.target_x;t.px+=r>n?1:r<n?-1:0,t.py+=1,t.state.depth=t.state.depth+1,t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py);for(const o of i.tanks)if(o.alive&&Math.abs(o.x-Math.trunc(t.px))<=o.half_width&&t.py>=o.y){const a=Math.max(1,t.state.depth),c=Math.max(0,o.y-t.state.start_y);if(c<a){i.current_weapon=t.weapon;const l=Za((a-c)*nu/a);ps(i,o,l)}if(t.state.warheads=t.state.warheads-1,t.state.warheads<=0)return t.active=!1,!1}return t.py>=e.h-2||t.state.depth>200?(t.active=!1,!1):!0}const GT=40;function WT(i,t){i.current_weapon=t.weapon,Vt.play("laser",i.cfg.is_on("SOUND"));let e=t.state.energy??50;const n=Math.atan2(t.vy,t.vx),s=Math.cos(n),r=-Math.sin(n);let o=t.px,a=t.py;const c=[],l=new Set;for(;e>=1&&0<=o&&o<i.terrain.w&&0<=a&&a<i.terrain.h;){const h=Math.trunc(o),u=Math.trunc(a);c.push([h,u]),i.terrain.is_dirt(h,u)&&i.terrain.write(h,u,On);for(const d of i.tanks)if(d.alive&&!l.has(d)&&Math.abs(d.x-h)<=d.half_width&&Math.abs(d.y-4-u)<=6){if(d.shield_laserproof&&d.shield_hp>0){e=0;break}ps(i,d,Math.max(1,Math.floor(e/5))),l.add(d)}o+=s,a+=r,e-=GT}t.trail=c,i.add_beam(c),t.active=!1}function XT(i,t){for(const e of i.tanks)if(e.alive&&e!==t)return e;return null}const qo=new Uint8Array([77,84,190,239]),Cr=24;function Un(i,t){return i[t]|i[t+1]<<8}function qT(i,t){return i[t]<<8|i[t+1]}function YT(i,t="<mtn>"){if(i.length<Cr||!KT(i)){const m=Array.from(i.subarray(0,4));throw new Error(`${t}: bad MTN magic ${JSON.stringify(m)}`)}const e=qT(i,4),n=Un(i,6),s=Un(i,8),r=Un(i,10),o=Un(i,12),a=Un(i,14),c=Un(i,16),l=Un(i,18),h=Un(i,20),u=Un(i,22),d=Cr+o*3;if(i.length<d)throw new Error(`${t}: truncated palette`);const f=[];for(let m=0;m<o;m++){const x=Cr+m*3;f.push([i[x],i[x+1],i[x+2]])}return{version:e,width:n,height:r,xoff:s,ncolors:o,sky_index:c,palette:f,header_extra:[a,l,h,u],palette_offset:Cr,body_offset:Cr+o*3}}function KT(i){return i[0]===qo[0]&&i[1]===qo[1]&&i[2]===qo[2]&&i[3]===qo[3]}function $T(i,t="<mtn>"){const e=YT(i,t),n=e.width,s=e.height;let r=e.body_offset;const o=new Int32Array(n),a=[];for(let l=0;l<n;l++){if(r+2>i.length)throw new Error(`${t}: underrun reading count for column ${l}`);const h=Un(i,r);if(r+=2,h>s)throw new Error(`${t}: column ${l} count ${h} exceeds height ${s}`);const u=h+1>>1;if(r+u>i.length)throw new Error(`${t}: underrun reading pixels for column ${l}`);const d=new Int16Array(h);for(let f=0;f<u;f++){const m=i[r+f],x=f*2;x<h&&(d[x]=m&15);const _=x+1;_<h&&(d[_]=m>>4&15)}r+=u,a.push(d),o[l]=h}const c=i.length-r;if(c!==0)throw new Error(`${t}: ${c} trailing bytes after ${n} columns (over/underrun)`);return{hdr:e,counts:o,columns:a}}function ZT(i,t="<mtn>"){const{hdr:e,counts:n,columns:s}=$T(i,t),r=e.width,o=e.height,a=e.sky_index,c=new Int32Array(r);for(let u=0;u<r;u++)c[u]=o-n[u];const l=new Set;for(const u of s)for(let d=0;d<u.length;d++)l.add(u[d]);l.delete(a);const h=Array.from(l).sort((u,d)=>u-d);return{surface:c,counts:n.slice(),height:o,width:r,xoff:e.xoff,sky_indices:[a],ground_indices:h}}function JT(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}function Ci(i){return Math.trunc(i)}function jT(i,t,e){const n=new Float64Array(e);if(e<=0)return n;if(e===1)return n[0]=i,n;const s=(t-i)/(e-1);for(let r=0;r<e;r++)n[r]=i+r*s;return n[e-1]=t,n}function QT(i,t,e){const n=t.length,s=new Float64Array(i.length),r=t[0],o=t[n-1],a=e[0],c=e[n-1];for(let l=0;l<i.length;l++){const h=i[l];if(h<=r){s[l]=a;continue}if(h>=o){s[l]=c;continue}let u=0,d=n;for(;u<d;){const x=u+d>>>1;t[x]<=h?u=x+1:d=x}let f=u-1;if(f<0&&(f=0),f>=n-1){s[l]=c;continue}const m=(e[f+1]-e[f])/(t[f+1]-t[f]);s[l]=m*(h-t[f])+e[f]}return s}class t1{constructor(t,e){g(this,"w");g(this,"h");g(this,"grid");this.w=t,this.h=e,this.grid=new Uint8Array(t*e)}read(t,e){return 0<=t&&t<this.w&&0<=e&&e<this.h?this.grid[t*this.h+e]:On}write(t,e,n){0<=t&&t<this.w&&0<=e&&e<this.h&&(this.grid[t*this.h+e]=n)}is_dirt(t,e){return Hw(this.read(t,e))}is_solid(t,e){return zw(this.read(t,e))}drop_to_footprint(t,e){return Math.max(2,Math.min(this.h-2,this.column_top(t)-1))}column_top(t){if(!(0<=t&&t<this.w))return this.h;const e=this.h,n=t*e,s=this.grid,r=c=>{const l=s[n+c];return l===Tn||l>=Te&&l<=kn};if(!r(0)){const c=this._argmaxSolid(n,0,e,!1);return r(c)?c:e}const o=this._argmaxSolid(n,0,e,!0);if(r(o))return e;const a=this._argmaxSolid(n,o,e,!1);return r(a)?a:e}_argmaxSolid(t,e,n,s){const r=this.grid;for(let o=e;o<n;o++){const a=r[t+o],c=a===Tn||a>=Te&&a<=kn;if(s?!c:c)return o}return e}generate(t,e,n){this.grid.fill(On);let s=null;if(n&&n.length>0){const r=Math.max(Ci(t.MTN_PERCENT),60);if(e.chance(r,100)){const o=n[e.pick(n.length)];s=this._from_mtn(o,e)}}s===null&&(s=this._midpoint(t,e)),this._rasterize(s,e)}_midpoint(t,e){const n=this.w,s=this.h,r=new Array(n).fill(0);let o,a;t.is_on("RANDOM_LAND")?(o=100,a=!1):(o=t.LAND1,t.LAND2,a=t.is_on("FLATLAND"));const c=s*.55,l=(.45+o/100*.45)*s;r[0]=c,r[n-1]=c;const h=l,u=(x,_,p)=>{if(_-x<2)return;const w=Math.floor((x+_)/2);r[w]=(r[x]+r[_])/2+e.uniform(-1,1)*p,u(x,w,p*.58),u(w,_,p*.58)};u(0,n-1,h);const d=s*.05,f=s-2,m=s*.28;for(let x=0;x<n;x++){let _=r[x];a&&_<m&&(_=m),r[x]=Math.min(f,Math.max(d,_))}return r}_from_mtn(t,e){const n=ZT(t.data,t.name),s=n.surface,r=n.width,o=new Float64Array(r);for(let f=0;f<r;f++)o[f]=s[f];let a;if(r>=this.w){const f=e.pick(r-this.w+1);a=o.subarray(f,f+this.w)}else{const f=jT(0,r-1,this.w),m=new Float64Array(r);for(let x=0;x<r;x++)m[x]=x;a=QT(f,m,o)}const c=this.h*.12,l=this.h-2;let h=1/0,u=-1/0;for(let f=0;f<a.length;f++){const m=a[f];m<h&&(h=m),m>u&&(u=m)}h=h,u=u;const d=new Array(a.length);if(u-h<1e-6){const f=c+.6*(l-c);for(let m=0;m<a.length;m++)d[m]=f}else{const f=u-h,m=l-c;for(let x=0;x<a.length;x++){const _=(a[x]-h)/f;d[x]=c+_*m}}return d}_rasterize(t,e){const n=this.h,s=kn,r=Te+8,o=Te+3,a=this.grid;for(let c=0;c<this.w;c++){const l=Math.max(0,Math.min(n-1,JT(t[c]))),h=n-l;if(h<=0)continue;const u=c*n;for(let m=l;m<n;m++)a[u+m]=r;const d=l+Math.floor(h*2/3);if(d<n)for(let m=d;m<n;m++)a[u+m]=o;const f=Math.min(n,l+2);for(let m=l;m<f;m++)a[u+m]=s}}_circleRect(t,e,n){const s=Math.max(0,t-n),r=Math.min(this.w,t+n+1),o=Math.max(0,e-n),a=Math.min(this.h,e+n+1);return s>=r||o>=a?null:[s,r,o,a]}clear_index_band(t,e,n=null){const s=n===null?On:n,r=this.grid;for(let o=0;o<r.length;o++){const a=r[o];a>=t&&a<=e&&(r[o]=s)}}carve_circle(t,e,n){const s=Ci(n),r=this._circleRect(t,e,s);if(!r)return;const[o,a,c,l]=r,h=s*s,u=this.h,d=this.grid;for(let f=o;f<a;f++){const m=f-t,x=m*m,_=f*u;for(let p=c;p<l;p++){const w=p-e;if(x+w*w<=h){const S=d[_+p];(S===Tn||S>=Te&&S<=kn)&&(d[_+p]=On)}}}}deposit_circle(t,e,n){const s=Ci(n),r=this._circleRect(t,e,s);if(!r)return;const[o,a,c,l]=r,h=s*s,u=Te+8,d=this.h,f=this.grid;for(let m=o;m<a;m++){const x=m-t,_=x*x,p=m*d;for(let w=c;w<l;w++){const S=w-e;_+S*S<=h&&(f[p+w]=u)}}}level_under_tank(t,e,n){const s=Math.max(0,t-n),r=Math.min(this.w,t+n+1);if(s>=r)return;const o=this.h,a=Math.max(0,Math.min(o-1,Ci(e))),c=Te+8,l=Math.max(8,2*n+2),h=this.grid,u=d=>d===Tn||Te<=d&&d<=kn;for(let d=s;d<r;d++){const f=d*o;let m=a;const x=Math.max(0,a-l);for(;m>=x&&u(h[f+m]);)h[f+m]=On,m-=1;m=a+1;const _=Math.min(o,a+1+l);for(;m<_&&!u(h[f+m]);)h[f+m]=c,m+=1}}carve_wedge(t,e,n,s=45,r=90){const o=.017453292519943295,a=57.29577951308232,c=(r-s)*o,l=(r+s)*o,h=Math.max(1,Ci((l-c)*a)),u=Ci(n);for(let d=0;d<=h;d++){const f=c+(l-c)*d/h,m=Math.cos(f),x=-Math.sin(f);for(let _=1;_<=u;_++){const p=Ci(t+m*_),w=Ci(e+x*_);this.is_dirt(p,w)&&this.write(p,w,On)}}}settle(t,e,n=0,s=null){const r=100-t.SUSPEND_DIRT;if(r<=0||r!==100&&!e.chance(r,100))return;let o=s===null?this.w:s,a=Math.max(0,n);o=Math.min(this.w,o);for(let c=a;c<o;c++)this._settle_column(c)}_settle_column(t){const e=this.h,n=t*e,s=this.grid,r=a=>{const c=s[n+a];return c===Tn||c>=Te&&c<=kn};let o=0;for(;o<e;){if(!r(o)){o+=1;continue}const a=o;for(;o<e&&r(o);)o+=1;const c=o;if(c>=e)return;let h=c;for(;h<e&&!r(h);)h+=1;const u=h-c;if(u<=0)return;const d=c-a,f=new Uint8Array(d);for(let m=0;m<d;m++)f[m]=s[n+a+m];for(let m=a;m<c;m++)s[n+m]=On;for(let m=0;m<d;m++)s[n+a+u+m]=f[m];return}}support_count(t,e,n){let s=0;const r=e+1;for(let o=-n;o<=n;o++)this.is_solid(t+o,r)&&(s+=1);return s}is_supported(t,e,n){const s=e+1;let r=0;for(let o=-n;o<=n;o++)this.is_solid(t+o,s)&&(r+=1);if(r>=Nw)return!0;for(const o of[-1,0,1])if(this.is_solid(t+o,s))return!0;return!1}}function Yo(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}class e1{constructor(t){g(this,"cfg");g(this,"n");g(this,"price");g(this,"demand_tally");g(this,"nobuy");g(this,"demand_ema");g(this,"ratio_ema");g(this,"available");this.cfg=t,this.n=tn,this.price=de.map(e=>e.cost),this.demand_tally=new Array(this.n).fill(0),this.nobuy=new Array(this.n).fill(0),this.demand_ema=new Array(this.n).fill(.1),this.ratio_ema=new Array(this.n).fill(.1),this.available=new Array(this.n).fill(!0)}refresh_availability(){const t=this.cfg.ARMS;this.cfg.is_on("USELESS_ITEMS");for(let e=0;e<de.length;e++){const s=de[e].arms<=t;this.available[e]=s}}unit_price(t){const e=de[t].bundle||1;return this.price[t]/e}buy(t,e){if(!this.available[e]||t.inventory[e]>=ss)return!1;const n=this.price[e];return t.cash<n?!1:(t.cash-=n,this.demand_tally[e]+=1,t.inventory[e]+=de[e].bundle,t.inventory[e]>ss&&(t.inventory[e]=ss),!0)}sell(t,e,n){if(n=Math.min(n,t.inventory[e]),n<=0)return 0;const s=this.cfg.is_on("FREE_MARKET")?Jm:iu,r=de[e].bundle||1,o=Yo(this.price[e]*n*s/r);return t.inventory[e]-=n,this.credit(t,o),o}credit(t,e){t.cash=Math.max(0,t.cash+e)}market_update(t){if(!this.cfg.is_on("FREE_MARKET"))return;const e=.7;for(let n=0;n<de.length;n++){const s=de[n];if(!this.available[n])continue;const r=this.demand_tally[n];this.nobuy[n]=r?0:this.nobuy[n]+1,this.demand_ema[n]=(1-e)*r/Math.max(1,t)+this.demand_ema[n]*e;const o=s.cost||1,a=(this.price[n]/o)**2/10;this.ratio_ema[n]=this.ratio_ema[n]*e+(1-e)*a,this.price[n]=Yo(this.price[n]*(1+Yw*(this.demand_ema[n]-this.ratio_ema[n]))),this.price[n]=Math.max(1,this.price[n]),this.demand_tally[n]=0}}annuity_price(t,e){const n=this.cfg.INTEREST_RATE,s=de[t].cost;if(n===0||e<=0)return s;const r=(1+n-(1+n)**-e)/n;return Yo(s*r)}update_repeated_use(t){const e=Hr;this.price[e]=this.annuity_price(e,t)}accrue_interest(t){const e=this.cfg.INTEREST_RATE;if(e!==0)for(const n of t)(n.alive??!0)&&n.cash>0&&this.credit(n,Yo(n.cash*e))}}const Ne=624,Ko=397,Kc=2567483615,$c=2147483648,Zc=2147483647;class y_{constructor(t){g(this,"mt",new Uint32Array(Ne));g(this,"mti",Ne+1);t!==void 0&&this.seed(t)}initGenrand(t){this.mt[0]=t>>>0;for(let e=1;e<Ne;e++){const n=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=Math.imul(1812433253,n)+e>>>0}this.mti=Ne}initByArray(t){this.initGenrand(19650218);let e=1,n=0,s=Math.max(Ne,t.length);for(;s;s--){const r=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=((this.mt[e]^Math.imul(r,1664525))>>>0)+t[n]+n>>>0,e++,n++,e>=Ne&&(this.mt[0]=this.mt[Ne-1],e=1),n>=t.length&&(n=0)}for(s=Ne-1;s;s--){const r=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=((this.mt[e]^Math.imul(r,1566083941))>>>0)-e>>>0,e++,e>=Ne&&(this.mt[0]=this.mt[Ne-1],e=1)}this.mt[0]=2147483648}seed(t){let e=BigInt(Math.abs(Math.trunc(t)));const n=[];if(e===0n)n.push(0);else for(;e>0n;)n.push(Number(e&0xffffffffn)),e>>=32n;this.initByArray(n)}genrandUint32(){if(this.mti>=Ne){const e=this.mt;let n,s=0;for(;s<Ne-Ko;s++)n=(e[s]&$c|e[s+1]&Zc)>>>0,e[s]=(e[s+Ko]^n>>>1^(n&1?Kc:0))>>>0;for(;s<Ne-1;s++)n=(e[s]&$c|e[s+1]&Zc)>>>0,e[s]=(e[s+(Ko-Ne)]^n>>>1^(n&1?Kc:0))>>>0;n=(e[Ne-1]&$c|e[0]&Zc)>>>0,e[Ne-1]=(e[Ko-1]^n>>>1^(n&1?Kc:0))>>>0,this.mti=0}let t=this.mt[this.mti++];return t^=t>>>11,t=(t^t<<7&2636928640)>>>0,t=(t^t<<15&4022730752)>>>0,t^=t>>>18,t>>>0}getrandbits(t){if(t<=0)throw new RangeError("number of bits must be greater than zero");if(t<=32)return this.genrandUint32()>>>32-t;let e=0,n=0,s=t;for(;s>0;){const r=s<32?s:32,o=this.genrandUint32()>>>32-r;e+=o*Math.pow(2,n),n+=32,s-=32}return e}randbelow(t){if(t<=0)return 0;const e=32-Math.clz32(t);let n=this.getrandbits(e);for(;n>=t;)n=this.getrandbits(e);return n}pick(t){return t<=0?0:this.randbelow(t)}chance(t,e){return this.randbelow(e)<t}random(){const t=this.genrandUint32()>>>5,e=this.genrandUint32()>>>6;return(t*67108864+e)/9007199254740992}uniform(t,e){return t+(e-t)*this.random()}roulette(t){let e=0;for(const r of t)e+=r;if(e<=0)return this.randbelow(t.length);const n=this.uniform(0,e);let s=0;for(let r=0;r<t.length;r++)if(s+=t[r],n<=s)return r;return t.length-1}}const ao=new y_;function v_(i,t){return Math.floor(i/t)}const Pf=13,Nf=10,Df=7,n1=[1,4],i1=[1,2],s1=30,r1=30,o1=[255,255,255],a1=2,c1=4,Uf=8,Of=8,l1=6,h1=[230,230,235],u1=10,d1=6,Ff=["PLAIN","STORMY","STARS","SHADED","SUNSET","CAVERN"],f1=["STORMY"];function hu(i,t){const e=(i.SKY||"PLAIN").toUpperCase();return e==="RANDOM"?Ff[t.pick(Ff.length)]:e}function p1(i){return f1.indexOf((i||"").toUpperCase())!==-1}function xh(i,t,e,n,s=null){s===null&&(s=[0]);const r=[],o=[[Math.trunc(i),Math.trunc(t)]];let a=i,c=t,l=0;for(;c!==e&&l<4096;){l+=1;const h=e-c,u=Math.abs(h)<=12?h:h>0?12:-12,d=c+u,f=Math.abs(h),m=n.pick(f+1)-(f>>1),x=a+v_(m*u,Math.max(1,f));if(o.push([Math.trunc(x),Math.trunc(d)]),s[0]<Pf&&n.pick(Nf)>Df){s[0]+=1;for(const _ of xh(x,d,e,n,s))r.push(_);if(s[0]<Pf&&n.pick(Nf)>Df){s[0]+=1;for(const _ of xh(x,d,e,n,s))r.push(_)}}a=x,c=d}return[o,...r]}function m1(i,t,e){const n=Math.max(2,v_(i.w,16));let s=t+i.rng.pick(2*n+1)-n;return s=Math.max(0,Math.min(i.w-1,s)),xh(s,0,Math.trunc(e),i.rng)}function _1(i){let t=i.live_sky??null;if(t==null&&(t=hu(i.cfg,i.rng),i.live_sky=t),!p1(t))return null;const[e,n]=n1;if(!i.rng.chance(e,n)){const[l,h]=i1;return i.rng.chance(l,h)&&g1(i),null}const s=i.tanks.filter(l=>l.alive);if(s.length===0)return null;const r=s[i.rng.pick(s.length)],o=r.x,a=r.y-4,c=m1(i,o,a);return y1(i,c),Vt.play("lightning",i.cfg.is_on("SOUND")),typeof i.add_flash=="function"&&i.add_flash(s1,r1,o1),i.cfg.is_on("HOSTILE_ENVIRONMENT")&&x1(i,o,a),c}function g1(i){if(typeof i.add_flash!="function")return;Vt.play("thunder",i.cfg.is_on("SOUND"));const t=i.rng.pick(c1)+a1,e=Uf+Of+l1;for(let n=0;n<t;n++)i.add_flash(Uf,Of,h1,n*e)}function x1(i,t,e){for(const n of i.tanks.slice())n.alive&&Math.abs(n.x-t)<=n.half_width+d1&&n.y-4>=e-4&&ps(i,n,u1)}function y1(i,t){Array.isArray(i.active_bolts)||(i.active_bolts=[]);for(const e of t)e.length>=2&&i.active_bolts.push({pts:e,frame:0})}function v1(i,t=6){const e=i.active_bolts??null;if(!(!e||e.length===0)){for(const n of e)n.frame+=1;i.active_bolts=e.filter(n=>n.frame<=t)}}const b1=10;function M1(i){if((i.live_sky||hu(i.cfg,i.rng)).toUpperCase()!=="CAVERN")return 0;const e=Math.min(b1,i.terrain.h),n=Te+8,s=kn,r=i.terrain;for(let o=0;o<r.w;o++){for(let a=0;a<e;a++)r.write(o,a,n);e>=1&&r.write(o,e-1,s)}return e}const E1=40,w1=20,b_=20,M_=40,E_=75,S1=8,T1=24,w_=6,A1=2,R1=6,C1=7,L1=18,kf=2,I1=22;function P1(i,t=null){if(t!==null){const n=Ce(i,t);if(n&&n>0)return Math.trunc(n)}const e=i.explosion_scale??1;return Math.trunc(L1*e)}function S_(i,t){return Math.max(1,Math.trunc(t*(i.explosion_scale??1)))}function T_(i,t,e=!1){const n=i.cfg,r=n!==void 0&&n.is_on("ICON_BAR")?I1:kf,o=Math.max(kf,r)+C1;if(i.add_death_fountain===void 0){i.add_explosion(Math.max(0,Math.min(i.w-1,t.x)),t.y,A1,{dirt_only:!0});return}i.add_death_fountain(t.x,t.y,o,{color:t.color??15,stride:R1,scatter:e?3:1})}function A_(i,t,e){fn(i,t.x,t.y,e,!0)}function N1(i,t,e=null){const n=i.death_queue;if(n===void 0){const s=R_(i);return B1(i,t,s),s}return n.push({kind:"throe",tank:t,stage:"start",roll:null,tick:0,sub:0}),null}function D1(i,t,e=null){const n=i.death_queue,s=P1(i,e);if(n===void 0){T_(i,t,!1),A_(i,t,s);return}n.push({kind:"ascension",tank:t,stage:"climb",radius:s,tick:0,spawned:!1})}function R_(i){const t=i.cfg,e=t!==void 0&&!!(t.SUSPEND_DIRT??0);let n=i.rng.pick(11);for(;e&&n===8;)n=i.rng.pick(11);return n}function U1(i){const t=[],e=i.death_queue;if(e===void 0||e.length===0)return t;let n=0;for(;e.length>0&&n<64&&(n+=1,!(i.projectiles!==void 0&&i.projectiles.length>0));){const s=e[0];if(s.kind==="ascension"){if(!O1(i,s,t))break}else if(!F1(i,s,t))break;e.length>0&&e[0]===s&&s.stage==="done"&&e.shift()}return t}function O1(i,t,e){if(t.stage==="climb"){if(t.spawned||(t.spawned=!0,T_(i,t.tank,!1),e.push(["climb",null])),i.death_fountains!==void 0&&i.death_fountains.length>0)return!1;t.stage="blast"}return t.stage==="blast"&&(A_(i,t.tank,t.radius),t.stage="done"),!0}function F1(i,t,e){const n=t.tank;if(t.stage==="start"){if(e.push(["award",n]),t.roll=R_(i),t.roll<=5)return t.stage="front",t.tick=0,e.push(["front",n.color??15]),!1;t.stage="body"}if(t.stage==="front"){if(t.tick+=1,t.tick<E1)return!1;t.stage="body",t.tick=0}return t.stage==="body"?k1(i,t,e):!0}function k1(i,t,e){const n=t.tank,s=t.roll;if(s===0)return e.push(["thud",null]),t.stage="done",!0;if(s===1||s===2||s===3){const r=[b_,M_,E_].slice(0,s);if(t.tick>0)return t.tick-=1,!1;const o=S_(i,r[t.sub]);return fn(i,n.x,n.y,o,!0),e.push(["blast",o]),t.sub=t.sub+1,t.sub>=r.length?(t.stage="done",!0):(t.tick=w1,!1)}if(s===4){if(!t.spawned){t.spawned=!0;const r=i.rng.pick(6)+5;return i.add_throe("ball",n.x,n.y,n.color??15,r*w_),!1}return i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0)}if(s===5)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("spiral",n.x,n.y,n.color??15),!1);if(s===6)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("sparkle",n.x,n.y,n.color??15),!1);if(s===7)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("fireworks",n.x,n.y,n.color??15),!1);if(s===8)return t.spawned?t.tick>0?(t.tick-=1,n.y=Math.min(i.h-1,n.y+1),!1):i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,t.tick=S1+i.rng.pick(T1),i.add_throe("sink",n.x,n.y,n.color??15),e.push(["sink",null]),!1);if(s===9)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("ring",n.x,n.y,n.color??15),!1);if(s===10){if(!t.spawned){if(t.spawned=!0,typeof n.has_ammo=="function"&&n.has_ammo(n.selected_weapon??0))i.add_throe("debris",n.x,n.y,n.color??15),e.push(["cookoff",null]);else return t.stage="done",!0;return!1}return i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0)}return t.stage="done",!0}function B1(i,t,e){if(e===1||e===2||e===3)for(const n of[b_,M_,E_].slice(0,e))fn(i,t.x,t.y,S_(i,n),!0);else e===4?i.add_throe("ball",t.x,t.y,t.color??15,(i.rng.pick(6)+5)*w_):e===5?i.add_throe("spiral",t.x,t.y,t.color??15):e===6?i.add_throe("sparkle",t.x,t.y,t.color??15):e===7?i.add_throe("fireworks",t.x,t.y,t.color??15):e===8?i.add_throe("sink",t.x,t.y,t.color??15):e===9?i.add_throe("ring",t.x,t.y,t.color??15):e===10&&typeof t.has_ammo=="function"&&t.has_ammo(t.selected_weapon??0)&&i.add_throe("debris",t.x,t.y,t.color??15)}class H1{constructor(t,e,n){g(this,"attack");g(this,"die");g(this,"talking");g(this,"probability");g(this,"delay");this.attack=t,this.die=e,this.talking=String(n.TALKING_TANKS).toUpperCase(),this.probability=Ma(n.TALK_PROBABILITY),this.delay=Ma(n.TALK_DELAY)}}function Ma(i){const t=typeof i=="string"?parseInt(i,10):i;return Math.trunc(t)}function Bf(i){const e=i.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`);return e.length>0&&e[e.length-1]===""&&e.pop(),e}function Hf(i,t){const e=t(i);if(e===null)return"";let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}function z1(i,t,e,n){const s=Bf(Hf(i,n)),r=Bf(Hf(t,n));return new H1(s,r,e)}function zf(i,t,e){const n=e.joinPath(i,t);if(e.pathExists(n))return n;const s=e.listDir(i);if(s!==null){const r=t.toLowerCase();for(const o of s)if(o.toLowerCase()===r)return e.joinPath(i,o)}return n}function V1(i,t,e){const n=zf(t,i.ATTACK_COMMENTS,e),s=zf(t,i.DIE_COMMENTS,e);return z1(n,s,i,e.readFile)}function C_(i,t){const e=t.talking;return e==="ALL"?!0:e==="COMPUTERS"?i.ai_class!==ai:!1}function L_(i,t){return i.length===0?null:i[t.pick(i.length)]}function G1(i,t,e=ao){return!C_(i,t)||e.pick(100)>=t.probability?null:L_(t.attack,e)}function W1(i,t,e=ao){return!C_(i,t)||e.pick(100)>=t.probability?null:L_(t.die,e)}function Jc(i,t,e,n=null){if(!e){i.speech=null;return}I_(i,"_speech_frame")||(i._speech_frame=0);let s;if(n!=null&&q1(n,"delay"))s=n.delay;else if(n!=null)s=Ma(la(n,"TALK_DELAY",50));else{const r=la(i,"cfg",null);s=Ma(la(r,"TALK_DELAY",50))}s=Math.max(1,Math.trunc(s)),i.speech={tank:t,text:e,until_frame:i._speech_frame+s}}function X1(i,t){I_(i,"_speech_frame")||(i._speech_frame=0),i._speech_frame=i._speech_frame+t/Wm;const e=la(i,"speech",null);e!==null&&i._speech_frame>=e.until_frame&&(i.speech=null)}function I_(i,t){return Object.prototype.hasOwnProperty.call(i,t)}function q1(i,t){return i!=null&&t in i}function la(i,t,e){return i!=null&&t in i?i[t]:e}function Hn(i){if(typeof i=="string")return Y1(i);const t=i[0]|0,e=i[1]|0,n=i[2]|0,s=i.length>=4?i[3]|0:255;return[t&255,e&255,n&255,s&255]}function hi(i){return i[3]===255?`rgb(${i[0]},${i[1]},${i[2]})`:`rgba(${i[0]},${i[1]},${i[2]},${i[3]/255})`}let jc=null;const Vf=new Map;function Y1(i){const t=Vf.get(i);if(t)return t;if(jc===null){const r=document.createElement("canvas");r.width=1,r.height=1,jc={ctx:r.getContext("2d",{willReadFrequently:!0}),data:new Uint8ClampedArray(4)}}const{ctx:e}=jc;e.clearRect(0,0,1,1),e.fillStyle="#000",e.fillStyle=i,e.fillRect(0,0,1,1);const n=e.getImageData(0,0,1,1).data,s=[n[0],n[1],n[2],n[3]];return Vf.set(i,s),s}class re{constructor(t,e,n,s){g(this,"x");g(this,"y");g(this,"w");g(this,"h");if(t instanceof re)this.x=t.x,this.y=t.y,this.w=t.w,this.h=t.h;else if(Array.isArray(t)&&Array.isArray(e))this.x=t[0],this.y=t[1],this.w=e[0],this.h=e[1];else if(Array.isArray(t)){const r=t;this.x=r[0],this.y=r[1],this.w=r[2],this.h=r[3]}else this.x=t,this.y=e??0,this.w=n??0,this.h=s??0}get width(){return this.w}set width(t){this.w=t}get height(){return this.h}set height(t){this.h=t}get size(){return[this.w,this.h]}set size(t){this.w=t[0],this.h=t[1]}get left(){return this.x}set left(t){this.x=t}get top(){return this.y}set top(t){this.y=t}get right(){return this.x+this.w}set right(t){this.x=t-this.w}get bottom(){return this.y+this.h}set bottom(t){this.y=t-this.h}get centerx(){return this.x+(this.w>>1)}set centerx(t){this.x=t-(this.w>>1)}get centery(){return this.y+(this.h>>1)}set centery(t){this.y=t-(this.h>>1)}get topleft(){return[this.x,this.y]}set topleft(t){this.x=t[0],this.y=t[1]}get topright(){return[this.x+this.w,this.y]}set topright(t){this.x=t[0]-this.w,this.y=t[1]}get bottomleft(){return[this.x,this.y+this.h]}set bottomleft(t){this.x=t[0],this.y=t[1]-this.h}get bottomright(){return[this.x+this.w,this.y+this.h]}set bottomright(t){this.x=t[0]-this.w,this.y=t[1]-this.h}get center(){return[this.x+(this.w>>1),this.y+(this.h>>1)]}set center(t){this.x=t[0]-(this.w>>1),this.y=t[1]-(this.h>>1)}get midtop(){return[this.x+(this.w>>1),this.y]}get midbottom(){return[this.x+(this.w>>1),this.y+this.h]}get midleft(){return[this.x,this.y+(this.h>>1)]}get midright(){return[this.x+this.w,this.y+(this.h>>1)]}copy(){return new re(this.x,this.y,this.w,this.h)}collidepoint(t,e){const n=typeof t=="number"?t:t[0],s=typeof t=="number"?e:t[1];return n>=this.x&&n<this.x+this.w&&s>=this.y&&s<this.y+this.h}inflate(t,e){return new re(this.x-(t>>1),this.y-(e>>1),this.w+t,this.h+e)}inflate_ip(t,e){this.x-=t>>1,this.y-=e>>1,this.w+=t,this.h+=e}move(t,e){return new re(this.x+t,this.y+e,this.w,this.h)}move_ip(t,e){this.x+=t,this.y+=e}clip(t){const e=Math.max(this.x,t.x),n=Math.max(this.y,t.y),s=Math.min(this.x+this.w,t.x+t.w),r=Math.min(this.y+this.h,t.y+t.h),o=s-e,a=r-n;return o<=0||a<=0?new re(this.x,this.y,0,0):new re(e,n,o,a)}}class to{constructor(t,e=0){g(this,"canvas");g(this,"ctx");g(this,"_w");g(this,"_h");g(this,"_colorkey",null);g(this,"_alpha",null);g(this,"_hasAlpha");this._w=Math.max(1,t[0]|0),this._h=Math.max(1,t[1]|0),this._hasAlpha=(e&ha)!==0,this.canvas=document.createElement("canvas"),this.canvas.width=this._w,this.canvas.height=this._h,this.ctx=this.canvas.getContext("2d",e&j1?{willReadFrequently:!0}:void 0),this._hasAlpha||(this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this._w,this._h))}get_size(){return[this._w,this._h]}get_width(){return this._w}get_height(){return this._h}get_rect(t){const e=new re(0,0,this._w,this._h);return t&&(t.topleft&&(e.topleft=t.topleft),t.center&&(e.center=t.center)),e}fill(t,e){const n=Hn(t);let s=0,r=0,o=this._w,a=this._h;e&&(e instanceof re?(s=e.x,r=e.y,o=e.w,a=e.h):(s=e[0],r=e[1],o=e[2],a=e[3])),this._hasAlpha&&this.ctx.clearRect(s,r,o,a),this.ctx.fillStyle=hi(n),this.ctx.fillRect(s,r,o,a)}blit(t,e,n,s=0){const r=e instanceof re?e.x:e[0],o=e instanceof re?e.y:e[1];let a=0,c=0,l=t._w,h=t._h;n&&(a=n.x,c=n.y,l=n.w,h=n.h);const u=this.ctx.globalCompositeOperation,d=this.ctx.globalAlpha;s&J1?this.ctx.globalCompositeOperation="lighter":t._alpha!==null&&(this.ctx.globalAlpha=t._alpha/255);const f=t._colorkey!==null?t._withColorkeyStripped():t.canvas;return this.ctx.drawImage(f,a,c,l,h,r,o,l,h),this.ctx.globalCompositeOperation=u,this.ctx.globalAlpha=d,new re(r,o,l,h)}_withColorkeyStripped(){const t=this._colorkey,e=document.createElement("canvas");e.width=this._w,e.height=this._h;const n=e.getContext("2d",{willReadFrequently:!0}),s=this.ctx.getImageData(0,0,this._w,this._h),r=s.data;for(let o=0;o<r.length;o+=4)r[o]===t[0]&&r[o+1]===t[1]&&r[o+2]===t[2]&&(r[o+3]=0);return n.putImageData(s,0,0),e}copy(){const t=new to([this._w,this._h],this._hasAlpha?ha:0);return this._hasAlpha&&t.ctx.clearRect(0,0,this._w,this._h),t.ctx.drawImage(this.canvas,0,0),t._colorkey=this._colorkey,t._alpha=this._alpha,t}subsurface(t){const e=new to([t.w,t.h],this._hasAlpha?ha:0);return this._hasAlpha&&e.ctx.clearRect(0,0,t.w,t.h),e.ctx.drawImage(this.canvas,t.x,t.y,t.w,t.h,0,0,t.w,t.h),e}set_at(t,e){const n=Hn(e);this.ctx.fillStyle=hi(n),(this._hasAlpha||n[3]!==255)&&this.ctx.clearRect(t[0],t[1],1,1),this.ctx.fillRect(t[0],t[1],1,1)}get_at(t){const e=this.ctx.getImageData(t[0],t[1],1,1).data;return[e[0],e[1],e[2],e[3]]}set_colorkey(t){this._colorkey=t===null?null:Hn(t)}get_colorkey(){return this._colorkey}set_alpha(t){this._alpha=t===null?null:t&255}get_alpha(){return this._alpha}convert_alpha(){const t=this.copy();return t._hasAlpha=!0,t}convert(){const t=this.copy();return t._hasAlpha=!1,t}get hasAlpha(){return this._hasAlpha}}const oe={rect(i,t,e,n=0){const s=e instanceof re?e.x:e[0],r=e instanceof re?e.y:e[1],o=e instanceof re?e.w:e[2],a=e instanceof re?e.h:e[3],c=Hn(t),l=i.ctx;if(l.fillStyle=hi(c),n<=0)l.fillRect(s,r,o,a);else{const h=Math.min(n,Math.ceil(o/2)),u=Math.min(n,Math.ceil(a/2));l.fillRect(s,r,o,u),l.fillRect(s,r+a-u,o,u),l.fillRect(s,r,h,a),l.fillRect(s+o-h,r,h,a)}return new re(s,r,o,a)},circle(i,t,e,n,s=0){const r=e[0]|0,o=e[1]|0,a=Math.max(0,n|0),c=Hn(t),l=i.ctx;return a===0?(i.set_at([r,o],c),new re(r,o,1,1)):(s<=0||s>=a?(l.fillStyle=hi(c),l.beginPath(),l.arc(r+.5,o+.5,a,0,Math.PI*2),l.fill()):(l.strokeStyle=hi(c),l.lineWidth=s,l.beginPath(),l.arc(r+.5,o+.5,a-s/2,0,Math.PI*2),l.stroke()),new re(r-a,o-a,a*2,a*2))},line(i,t,e,n,s=1){Qc(i,Hn(t),[e,n],!1,Math.max(1,s))},lines(i,t,e,n,s=1){Qc(i,Hn(t),n,e,Math.max(1,s))},polygon(i,t,e,n=0){const s=Hn(t),r=i.ctx;if(e.length!==0)if(n<=0){r.fillStyle=hi(s),r.beginPath(),r.moveTo(e[0][0],e[0][1]);for(let o=1;o<e.length;o++)r.lineTo(e[o][0],e[o][1]);r.closePath(),r.fill()}else Qc(i,s,e,!0,Math.max(1,n))}};function Qc(i,t,e,n,s){if(e.length===0)return;const r=i.ctx;r.strokeStyle=hi(t),r.lineWidth=s,r.lineCap="butt",r.lineJoin="miter";const o=s%2===1?.5:0;r.beginPath(),r.moveTo(e[0][0]+o,e[0][1]+o);for(let a=1;a<e.length;a++)r.lineTo(e[a][0]+o,e[a][1]+o);n&&r.closePath(),r.stroke()}const K1='"Consolas","Courier New",monospace';function $1(i){const t=i.toLowerCase();return t.includes("mono")||t.includes("consolas")||t.includes("courier")?K1:`"${i}",monospace`}const ye=class ye{constructor(t,e,n=!1){g(this,"size_px");g(this,"bold");g(this,"family");g(this,"cssFont");g(this,"_ascentDescent",null);this.size_px=e|0,this.bold=n,this.family=$1(t),this.cssFont=`${n?"bold ":""}${this.size_px}px ${this.family}`}measureCtx(){if(ye._measureCtx===null){const e=document.createElement("canvas");ye._measureCtx=e.getContext("2d",{willReadFrequently:!0})}const t=ye._measureCtx;return t.font=this.cssFont,t.textBaseline="alphabetic",t}static _evict(t,e){for(;t.size>e;){const n=t.keys().next().value;t.delete(n)}}size(t){const e=this.cssFont+"\0"+t;let n=ye._sizeCache.get(e);if(n===void 0){const s=this.measureCtx();n=Math.ceil(s.measureText(t).width),ye._sizeCache.set(e,n),ye._evict(ye._sizeCache,ye._SIZE_CACHE_CAP)}return[n,this.get_height()]}get_height(){const t=this.metrics();return Math.ceil(t.ascent+t.descent)}metrics(){if(this._ascentDescent===null){const e=this.measureCtx().measureText("Mg"),n=e.fontBoundingBoxAscent??this.size_px*.8,s=e.fontBoundingBoxDescent??this.size_px*.2;this._ascentDescent={ascent:n,descent:s}}return this._ascentDescent}render(t,e,n,s){const r=Hn(n),o=s==null?null:Hn(s),a=this.cssFont+"\0"+t+"\0"+r.join(",")+"\0"+(o===null?"-":o.join(",")),c=ye._renderCache.get(a);if(c!==void 0)return c;const l=this.measureCtx(),h=Math.max(1,Math.ceil(l.measureText(t).width)),u=this.metrics(),d=Math.max(1,Math.ceil(u.ascent+u.descent)),f=new to([h,d],o?0:ha),m=f.ctx;return o?(m.fillStyle=hi(o),m.fillRect(0,0,h,d)):m.clearRect(0,0,h,d),m.font=this.cssFont,m.textBaseline="alphabetic",m.fillStyle=hi(r),m.fillText(t,0,u.ascent),ye._renderCache.set(a,f),ye._evict(ye._renderCache,ye._RENDER_CACHE_CAP),f}};g(ye,"_measureCtx",null),g(ye,"_sizeCache",new Map),g(ye,"_renderCache",new Map),g(ye,"_SIZE_CACHE_CAP",4096),g(ye,"_RENDER_CACHE_CAP",1024);let Ea=ye;const Z1={SysFont(i,t,e=!1){return new Ea(i,t,e)},init(){},Font:Ea},J1=6,ha=65536,j1=1073741824,tl=768,Q1=1024,P_=1025,tA=1026,eA=9,Gf=13,Wf=27,nA=32,Ja=1<<30,iA=Ja|82,sA=Ja|81,el=Ja|79,Xf=Ja|80;const rA=[200,200,200],co=[170,170,170],di=[210,210,210],Hi=[110,110,110],we=[0,0,0],N_=[255,255,255],wa=[40,252,252],qn=[0,0,160],oA=[255,255,255],qf={};function qe(i=15,t=!1){const e=`${i},${t}`;let n=qf[e];return n===void 0&&(n=Z1.SysFont("consolas,couriernew,monospace",i,t),qf[e]=n),n}function fr(i,t,e,n,s=we,r=null){const o=r||qe();let a=e,c=0;for(;c<t.length;){const l=t[c];if(l==="~"&&c+1<t.length){const h=t[c+1],u=o.render(h,!0,wa);i.blit(u,[a,n]),oe.line(i,wa,[a,n+u.get_height()-2],[a+u.get_width(),n+u.get_height()-2]),a+=u.get_width(),c+=2}else{const h=o.render(l,!0,s);i.blit(h,[a,n]),a+=h.get_width(),c+=1}}return a}function D_(i){const t=i.indexOf("~");return 0<=t&&t<i.length-1?i[t+1].toLowerCase():null}function Sa(i){return i.replace(/~/g,"")}class Vi{constructor(t,e,n,s,r="",o=null){g(this,"rect");g(this,"label");g(this,"action");g(this,"accel");g(this,"enabled");this.rect=new re(t,e,n,s),this.label=r,this.action=o,this.accel=D_(r),this.enabled=!0}hit(t){return this.enabled&&this.rect.collidepoint(t)}on_click(t,e){return this.action}on_accel(){return this.action}draw(t,e=!1){}}class aA extends Vi{constructor(e,n,s,r=we,o=15,a=!1,c=null){const l=qe(o,a);super(e,n,l.size(Sa(s))[0]+4,l.get_height(),s,c);g(this,"color");g(this,"size");g(this,"bold");this.color=r,this.size=o,this.bold=a}get clickable(){return this.action!==null}hit(e){return this.clickable&&this.enabled&&this.rect.collidepoint(e)}on_click(e,n){return this.action}on_accel(){return this.action}draw(e,n=!1){const s=this.clickable&&n?qn:this.color;fr(e,this.label,this.rect.x,this.rect.y,s,qe(this.size,this.bold))}}class U_ extends Vi{constructor(e,n,s,r,o=null,a=!1){const c=qe(15,!0),l=o||c.size(Sa(s))[0]+18;super(e,n,l,22,s,r);g(this,"default");this.default=a}draw(e,n=!1){const s=this.rect,r=n?di:co;oe.rect(e,r,s),oe.line(e,di,s.topleft,s.topright),oe.line(e,di,s.topleft,s.bottomleft),oe.line(e,Hi,s.bottomleft,s.bottomright),oe.line(e,Hi,s.topright,s.bottomright),this.default&&oe.rect(e,[0,0,0],s,1);const o=qe(15,!0).size(Sa(this.label))[0];fr(e,this.label,s.centerx-Math.trunc(o/2),s.y+3,we,qe(15,!0))}}class cA extends Vi{constructor(e,n,s,r,o,a,c,l=1,h=String,u=260){super(e,n,u,20,s);g(this,"get");g(this,"set");g(this,"lo");g(this,"hi");g(this,"step");g(this,"fmt");this.get=r,this.set=o,this.lo=a,this.hi=c,this.step=l,this.fmt=h}_clamp(e){return Math.max(this.lo,Math.min(this.hi,e))}adjust(e){this.set(this._clamp(this.get()+e*this.step))}on_click(e,n){return n===3?this.adjust(-1):e[0]>this.rect.centerx?this.adjust(1):this.adjust(-1),null}on_accel(){return this.adjust(1),null}draw(e,n=!1){const s=this.rect;n&&oe.rect(e,di,s),fr(e,this.label,s.x,s.y,we);const r=`  < ${this.fmt(this.get())} >`;e.blit(qe().render(r,!0,qn),[s.x+150,s.y])}}class lA extends Vi{constructor(e,n,s,r,o,a,c=300){super(e,n,c,20,s);g(this,"options");g(this,"get_idx");g(this,"set_idx");this.options=r,this.get_idx=o,this.set_idx=a}cycle(e){this.set_idx(ns(this.get_idx()+e,this.options.length))}on_click(e,n){return this.cycle(n===3?-1:1),null}on_accel(){return this.cycle(1),null}draw(e,n=!1){const s=this.rect;n&&oe.rect(e,di,s),fr(e,this.label,s.x,s.y,we);const r=this.options[ns(this.get_idx(),this.options.length)];e.blit(qe().render(`< ${r} >`,!0,qn),[s.x+150,s.y])}}class hA extends Vi{constructor(e,n,s,r,o,a=34,c=null){super(e,n,a*s.length,a,"");g(this,"cells");g(this,"get_idx");g(this,"set_idx");g(this,"cell");g(this,"draw_cell");this.cells=s,this.get_idx=r,this.set_idx=o,this.cell=a,this.draw_cell=c}on_click(e,n){const s=Math.floor((e[0]-this.rect.x)/this.cell);return 0<=s&&s<this.cells.length&&this.set_idx(s),null}draw(e,n=!1){for(let s=0;s<this.cells.length;s++){const r=this.cells[s],o=this.rect.x+s*this.cell,a=new re(o,this.rect.y,this.cell-2,this.cell-2);oe.rect(e,co,a),oe.rect(e,s===this.get_idx()?qn:Hi,a,s===this.get_idx()?2:1),this.draw_cell&&this.draw_cell(e,a,s,r)}}}class nl extends Vi{constructor(e,n,s,r,o,a,c=240,l=String){super(e,n,c,30,s);g(this,"values");g(this,"get");g(this,"set");g(this,"fmt");g(this,"track_x");g(this,"track_w");g(this,"dragging");this.values=Array.from(r),this.get=o,this.set=a,this.fmt=l,this.track_x=e+8,this.track_w=c-16,this.dragging=!1}_cur_index(){const e=this.get();let n=0,s=Math.abs(this.values[0]-e);for(let r=1;r<this.values.length;r++){const o=Math.abs(this.values[r]-e);o<s&&(s=o,n=r)}return n}_set_index(e){e=Math.max(0,Math.min(this.values.length-1,e)),this.set(this.values[e])}_x_to_index(e){if(this.track_w<=0||this.values.length<=1)return 0;const n=(e-this.track_x)/this.track_w;return Za(n*(this.values.length-1))}_thumb_x(){return this.values.length<=1?this.track_x:this.track_x+Math.trunc(this.track_w*this._cur_index()/(this.values.length-1))}on_click(e,n){if(n===3)return this._set_index(this._cur_index()-1),null;const s=this._thumb_x();return Math.abs(e[0]-s)<=6?this.dragging=!0:this._set_index(this._x_to_index(e[0])),null}on_drag(e){this.dragging&&this._set_index(this._x_to_index(e[0]))}on_release(){this.dragging=!1}on_accel(){return this._set_index(this._cur_index()+1),null}draw(e,n=!1){const s=this.rect;fr(e,this.label,s.x,s.y,n?N_:we);const r=s.y+20;oe.line(e,Hi,[this.track_x,r],[this.track_x+this.track_w,r],2);const o=this.values.length;if(o>1)for(let h=0;h<o;h++){const u=this.track_x+Math.trunc(this.track_w*h/(o-1));oe.line(e,Hi,[u,r-2],[u,r+2],1)}const a=this._thumb_x(),c=new re(a-4,r-6,8,12);oe.rect(e,n?di:co,c),oe.rect(e,we,c,1);const l=this.fmt(this.get());e.blit(qe().render(String(l),!0,qn),[this.track_x+this.track_w+8,s.y])}}class Yf extends Vi{constructor(e,n,s,r,o,a=1,c=150,l=20){const h=Math.floor((s.length+a-1)/a);super(e,n,c*a,l*h,"");g(this,"labels");g(this,"get_idx");g(this,"set_idx");g(this,"cols");g(this,"cell_w");g(this,"cell_h");g(this,"cell_accels");this.labels=Array.from(s),this.get_idx=r,this.set_idx=o,this.cols=a,this.cell_w=c,this.cell_h=l,this.cell_accels=this.labels.map(u=>D_(u))}_cell_rect(e){const n=e%this.cols,s=Math.floor(e/this.cols);return new re(this.rect.x+n*this.cell_w,this.rect.y+s*this.cell_h,this.cell_w,this.cell_h)}hit(e){return this.enabled&&this.rect.collidepoint(e)}on_click(e,n){for(let s=0;s<this.labels.length;s++)if(this._cell_rect(s).collidepoint(e)){this.set_idx(s);break}return null}accel_hit(e){for(let n=0;n<this.cell_accels.length;n++)if(this.cell_accels[n]===e)return this.set_idx(n),!0;return!1}draw(e,n=!1){for(let s=0;s<this.labels.length;s++){const r=this.labels[s],o=this._cell_rect(s),a=s===this.get_idx(),c=o.y+Math.floor(o.h/2);oe.circle(e,oA,[o.x+7,c],6),oe.circle(e,we,[o.x+7,c],6,1),a&&oe.circle(e,we,[o.x+7,c],3),fr(e,r,o.x+18,o.y+1,we)}}}class uA extends Vi{constructor(e,n,s,r,o="",a=!1,c=null,l=null){super(e,n,s,r,o);g(this,"title");g(this,"capture");g(this,"get_key");g(this,"set_key");g(this,"arming");this.title=o,this.capture=a,this.get_key=c,this.set_key=l,this.arming=!1}hit(e){return this.capture&&this.enabled&&this.rect.collidepoint(e)}on_click(e,n){return this.capture?(this.arming=!0,"capture_key"):null}take_key(e){this.set_key&&this.set_key(e.unicode?e.unicode.toUpperCase():e.key),this.arming=!1}draw(e,n=!1){const s=this.rect;if(oe.rect(e,this.arming?qn:Hi,s,1),this.title){const r=qe(13).render(Sa(this.title),!0,we);e.fill(co,[s.x+6,s.y-7,r.get_width()+4,12]),e.blit(r,[s.x+8,s.y-7])}if(this.capture){let r=this.get_key?String(this.get_key()):"";this.arming&&(r="press a key...");const o=qe(13).render(r,!0,qn);e.blit(o,[s.centerx-Math.floor(o.get_width()/2),s.centery-6])}}}class dA{constructor(t,e,n,s,r="",o=!1,a="back"){g(this,"rect");g(this,"title");g(this,"widgets");g(this,"focus");g(this,"text_widget");g(this,"no_cancel");g(this,"cancel_action");g(this,"default_widget");g(this,"capture_widget");this.rect=new re(t,e,n,s),this.title=r,this.widgets=[],this.focus=0,this.text_widget=null,this.no_cancel=o,this.cancel_action=a,this.default_widget=null,this.capture_widget=null}add(t){return this.widgets.push(t),t instanceof U_&&t.default&&(this.default_widget=t),t}_focusables(){const t=[];for(const e of this.widgets)e instanceof aA&&!e.clickable||e instanceof uA&&!e.capture||t.push(e);return t}_resolve(t,e){return t==="focus_text"?(this.text_widget=e,null):t==="capture_key"?(this.capture_widget=e,null):t}handle(t){if(this.text_widget&&this.text_widget.editing&&t.type===tl)return this.text_widget.on_text_key(t),this.text_widget.editing||(this.text_widget=null),null;if(this.capture_widget&&t.type===tl)return t.key===Wf?this.capture_widget.arming=!1:this.capture_widget.take_key(t),this.capture_widget=null,null;if(t.type===P_){for(const e of this.widgets)if(e.hit(t.pos)){const s=this._focusables().indexOf(e);return s>=0&&(this.focus=s),this._resolve(e.on_click(t.pos,t.button),e)}return!this.rect.collidepoint(t.pos)&&!this.no_cancel?this.cancel_action:null}if(t.type===Q1){for(const e of this.widgets)e instanceof nl&&e.dragging&&e.on_drag(t.pos);return null}if(t.type===tA){for(const e of this.widgets)e instanceof nl&&e.on_release();return null}if(t.type===tl){if(t.key===Wf)return this.no_cancel?null:this.cancel_action;if(t.key===sA||t.key===eA)return this.focus=ns(this.focus+1,Math.max(1,this._focusables().length)),null;if(t.key===iA)return this.focus=ns(this.focus-1,Math.max(1,this._focusables().length)),null;if(t.key===Gf&&this.default_widget!==null)return this._resolve(this.default_widget.on_accel(),this.default_widget);if(t.key===Gf||t.key===nA||t.key===Xf||t.key===el){const n=this._focusables();if(n.length){const s=n[ns(this.focus,n.length)];if(t.key===Xf||t.key===el){const r=t.key===el?1:-1;if(s instanceof cA)return s.adjust(r),null;if(s instanceof lA)return s.cycle(r),null;if(s instanceof nl)return s._set_index(s._cur_index()+r),null;if(s instanceof Yf)return s.set_idx(ns(s.get_idx()+r,s.labels.length)),null}return this._resolve(s.on_accel(),s)}return null}const e=t.unicode?t.unicode.toLowerCase():null;if(e)for(const n of this.widgets){if(n instanceof Yf&&n.enabled&&n.accel_hit(e))return null;if(n.accel===e&&n.enabled)return this._resolve(n.on_accel(),n)}}return null}draw(t,e=!0){if(e){const s=new to(t.get_size());s.set_alpha(140),s.fill([0,0,0]),t.blit(s,[0,0])}if(oe.rect(t,co,this.rect),oe.rect(t,di,this.rect,1),oe.line(t,Hi,this.rect.bottomleft,this.rect.bottomright,2),oe.line(t,Hi,this.rect.topright,this.rect.bottomright,2),this.title){const s=new re(this.rect.x,this.rect.y,this.rect.w,20);oe.rect(t,qn,s);const r=qe(15,!0).render(this.title,!0,N_);t.blit(r,[s.centerx-Math.floor(r.get_width()/2),s.y+2])}const n=this._focusables();for(const s of this.widgets){const r=n.length>0&&s===n[ns(this.focus,n.length)];s.draw(t,r)}}}function fA(i){i.get_size()}function ns(i,t){return(i%t+t)%t}const Kf={BASIC:0,STANDARD:1,GREEDY:2},$f={NONE:0,STANDARD:1,CORPORATE:2,VICIOUS:3},Zf={SEQUENTIAL:0,SYNCHRONOUS:1,SIMULTANEOUS:2},Jf={RANDOM:0,"LOSERS-FIRST":1,"WINNERS-FIRST":2,"ROUND-ROBIN":3},jf={NONE:0,WRAP:1,PADDED:2,RUBBER:3,SPRING:4,CONCRETE:5,RANDOM:6,ERRATIC:7},Qf={NORMAL:0,MEDIUM:1,LARGE:2},uu=[{name:"MAXPLAYERS",type:"int"},{name:"MAXROUNDS",type:"int"},{name:"ARMS",type:"int"},{name:"PLAY_MODE",type:"str"},{name:"PLAY_ORDER",type:"str"},{name:"TEAM_MODE",type:"str"},{name:"HOSTILE_ENVIRONMENT",type:"str"},{name:"TUNNELLING",type:"str"},{name:"USELESS_ITEMS",type:"str"},{name:"EXPLOSION_SCALE",type:"str"},{name:"INITIAL_CASH",type:"int"},{name:"INTEREST_RATE",type:"float"},{name:"COMPUTERS_BUY",type:"str"},{name:"FREE_MARKET",type:"str"},{name:"SCORING",type:"str"},{name:"GRAVITY",type:"float"},{name:"AIR_VISCOSITY",type:"int"},{name:"MAX_WIND",type:"int"},{name:"CHANGING_WIND",type:"str"},{name:"ELASTIC",type:"str"},{name:"FALLING_TANKS",type:"str"},{name:"EDGES_EXTEND",type:"int"},{name:"DAMAGE_TANKS_ON_IMPACT",type:"str"},{name:"LAND1",type:"int"},{name:"LAND2",type:"int"},{name:"FLATLAND",type:"str"},{name:"RANDOM_LAND",type:"str"},{name:"MTN_PERCENT",type:"float"},{name:"SUSPEND_DIRT",type:"int"},{name:"EXTRA_DIRT",type:"str"},{name:"SKY",type:"str"},{name:"GRAPHICS_MODE",type:"str"},{name:"LOWMEM",type:"str"},{name:"FIRE_DELAY",type:"int"},{name:"FALLING_DELAY",type:"int"},{name:"STATUS_BAR",type:"str"},{name:"ICON_BAR",type:"str"},{name:"BOMB_ICON",type:"str"},{name:"TRACE",type:"str"},{name:"FAST_COMPUTERS",type:"str"},{name:"BIOS_KEYBOARD",type:"str"},{name:"POINTER",type:"str"},{name:"MOUSE_RATE",type:"float"},{name:"SOUND",type:"str"},{name:"FLY_SOUND",type:"str"},{name:"TALKING_TANKS",type:"str"},{name:"TALK_PROBABILITY",type:"int"},{name:"TALK_DELAY",type:"int"},{name:"ATTACK_COMMENTS",type:"str"},{name:"DIE_COMMENTS",type:"str"}],yh={};for(const i of uu)yh[i.name]=i.type;function Li(i){return i.toUpperCase()}const tp=new Set(["	",`
`,"\v","\f","\r","","","",""," ",""," "," "," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　"]);function du(i){let t=0,e=i.length;for(;t<e&&tp.has(i[t]);)t++;for(;e>t&&tp.has(i[e-1]);)e--;return i.slice(t,e)}function vh(i){const t=du(i);if(t.length===0)return null;let e=0,n=1;(t[e]==="+"||t[e]==="-")&&(t[e]==="-"&&(n=-1),e++);const s=t.slice(e);if(s.length===0||!/^[0-9]/.test(s)||!/[0-9]$/.test(s))return null;let r=!1,o="";for(const c of s){if(c==="_"){if(r)return null;r=!0;continue}if(c<"0"||c>"9")return null;r=!1,o+=c}const a=Number(o);return a===0?0:n*a}function pA(i){const t=du(i);if(t.length===0)return null;let e=0,n=1;(t[e]==="+"||t[e]==="-")&&(t[e]==="-"&&(n=-1),e++);const s=t.slice(e);if(s.length===0)return null;const r=s.toLowerCase();if(r==="inf"||r==="infinity")return n*(1/0);if(r==="nan")return n*NaN;if(!/^[0-9._eE+\-]+$/.test(s))return null;for(let l=0;l<s.length;l++)if(s[l]==="_"){const h=s[l-1],u=s[l+1];if(h===void 0||u===void 0||h<"0"||h>"9"||u<"0"||u>"9")return null}const o=s.replace(/_/g,"");if(!/^(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:[eE][+\-]?[0-9]+)?$/.test(o))return null;const c=Number(o);return Number.isNaN(c)?null:n*c}function mA(i,t){if(i==="int"){const e=vh(t);return e===null?0:e}if(i==="float"){const e=pA(t);return e===null?0:e}return t}function _A(i,t){const e=i.indexOf(t);return e<0?[i,"",""]:[i.slice(0,e),t,i.slice(e+t.length)]}function il(i){return du(i)}class ja{constructor(){g(this,"MAXPLAYERS",2);g(this,"MAXROUNDS",10);g(this,"ARMS",4);g(this,"PLAY_MODE","SEQUENTIAL");g(this,"PLAY_ORDER","RANDOM");g(this,"TEAM_MODE","NONE");g(this,"HOSTILE_ENVIRONMENT","ON");g(this,"TUNNELLING","OFF");g(this,"USELESS_ITEMS","ON");g(this,"EXPLOSION_SCALE","NORMAL");g(this,"INITIAL_CASH",0);g(this,"INTEREST_RATE",.05);g(this,"COMPUTERS_BUY","ON");g(this,"FREE_MARKET","OFF");g(this,"SCORING","STANDARD");g(this,"GRAVITY",.2);g(this,"AIR_VISCOSITY",0);g(this,"MAX_WIND",200);g(this,"CHANGING_WIND","OFF");g(this,"ELASTIC","NONE");g(this,"FALLING_TANKS","ON");g(this,"EDGES_EXTEND",75);g(this,"DAMAGE_TANKS_ON_IMPACT","ON");g(this,"LAND1",20);g(this,"LAND2",20);g(this,"FLATLAND","ON");g(this,"RANDOM_LAND","ON");g(this,"MTN_PERCENT",20);g(this,"SUSPEND_DIRT",0);g(this,"EXTRA_DIRT","OFF");g(this,"SKY","RANDOM");g(this,"GRAPHICS_MODE","1024x768");g(this,"LOWMEM","OFF");g(this,"FIRE_DELAY",100);g(this,"FALLING_DELAY",10);g(this,"STATUS_BAR","OFF");g(this,"ICON_BAR","ON");g(this,"BOMB_ICON","BIG");g(this,"TRACE","OFF");g(this,"FAST_COMPUTERS","OFF");g(this,"BIOS_KEYBOARD","OFF");g(this,"POINTER","Mouse");g(this,"MOUSE_RATE",.5);g(this,"SOUND","ON");g(this,"FLY_SOUND","OFF");g(this,"TALKING_TANKS","OFF");g(this,"TALK_PROBABILITY",100);g(this,"TALK_DELAY",50);g(this,"ATTACK_COMMENTS","talk1.cfg");g(this,"DIE_COMMENTS","talk2.cfg");g(this,"wind",0);g(this,"live_elastic");this.live_elastic=this.elastic}get(t){return this[t]}set(t,e){this[t]=e}get scoring(){const t=Li(this.SCORING);return t in Kf?Kf[t]:1}get team_mode(){const t=Li(this.TEAM_MODE);return t in $f?$f[t]:0}get play_mode(){const t=Li(this.PLAY_MODE);return t in Zf?Zf[t]:0}get play_order(){const t=Li(this.PLAY_ORDER);return t in Jf?Jf[t]:0}get elastic(){const t=Li(this.ELASTIC);return t in jf?jf[t]:0}get explosion_scale(){const t=Li(this.EXPLOSION_SCALE);return t in Qf?Qf[t]:0}is_on(t){return Li(gA(this.get(t)))==="ON"}get resolution(){const t=this.GRAPHICS_MODE;if(typeof t!="string")return[1024,768];const e=t.toLowerCase().split("x");if(e.length!==2)return[1024,768];const n=vh(e[0]),s=vh(e[1]);return n===null||s===null?[1024,768]:[n,s]}get viscosity_mult(){return 1-this.AIR_VISCOSITY/Aw}static load(t){const e=new ja;if(t==null)return e;const n=t.split(`
`);for(let s of n){if(s=il(s),s.length===0||s.startsWith(";")||!s.includes("="))continue;const[r,,o]=_A(s,"="),a=Li(il(r)),c=il(o);a in yh&&e.set(a,mA(yh[a],c))}return e}save(){let t=`; Configuration File for Scorched Earth Version 1.5-py
`;for(const e of uu){const n=xA(e.type,this.get(e.name));t+=`${e.name}=${n}
`}return t}}function gA(i){return typeof i=="string"?i:typeof i=="number"?O_(i,void 0):String(i)}function O_(i,t){return t===!1?ep(i):t===!0?np(i):Number.isInteger(i)?ep(i):np(i)}function ep(i){const t=Math.trunc(i);return Object.is(t,-0)?"0":String(t)}function np(i){if(Number.isNaN(i))return"nan";if(i===1/0)return"inf";if(i===-1/0)return"-inf";if(i===0)return Object.is(i,-0)?"-0.0":"0.0";const t=i<0||Object.is(i,-0),s=Math.abs(i).toExponential().match(/^(\d)(?:\.(\d+))?e([+\-]\d+)$/),r=s[1],o=s[2]||"",a=r+o,c=parseInt(s[3],10);let l;if(c<-4||c>=16){let h=r;o.length>0&&(h+="."+o);const u=c<0?"-":"+";let d=Math.abs(c).toString();d.length<2&&(d="0"+d),l=`${h}e${u}${d}`}else if(c>=0){const h=c+1;a.length<=h?l=a+"0".repeat(h-a.length)+".0":l=a.slice(0,h)+"."+a.slice(h)}else l="0."+"0".repeat(-c-1)+a;return(t?"-":"")+l}function xA(i,t){return typeof t=="boolean"?t?"on":"off":typeof t=="number"?O_(t,i==="float"):t}const yA={};for(const i of uu)yA[i.name]=i.type;new TextEncoder;new TextDecoder("utf-8",{fatal:!0});class vA{constructor(){g(this,"opaque",!0)}handle(t){return null}update(t){return null}draw(t){}}function sl(i,t,e,n,s=we,r=null){const o=r||qe();let a=e,c=0;for(;c<t.length;){const l=t[c];if(l==="~"&&c+1<t.length){const h=t[c+1],u=o.render(h,!0,wa);i.blit(u,[a,n]),oe.line(i,wa,[a,n+u.get_height()-2],[a+u.get_width(),n+u.get_height()-2]),a+=u.get_width(),c+=2}else{const h=o.render(l,!0,s);i.blit(h,[a,n]),a+=h.get_width(),c+=1}}return a}function bA(i){const t=[];for(let e=0;e<tn;e++)de[e].offensive&&i.has_ammo(e)&&t.push(e);return t}const F_=[[!0,!1],[!0,!1],[!1,!1],[!0,!1],[!0,!1],[!1,!1],[!0,!0]],k_=F_.length,MA=k_-1;function EA(i){return 0<=i&&i<k_?F_[i][0]:!0}const ka=class ka extends vA{constructor(e,n,s,r){super();g(this,"opaque",!0);g(this,"state");g(this,"tank");g(this,"w");g(this,"h");g(this,"weapon_slots");g(this,"guidance_slots");g(this,"panel");g(this,"_wrows",[]);g(this,"_grows",[]);g(this,"_array_slots",[]);g(this,"_array_y");g(this,"weapon_array",null);g(this,"_wcol_x",0);g(this,"_gcol_x",0);g(this,"_list_top",0);g(this,"_guidance_bottom",0);this.state=e,this.tank=n,this.w=s,this.h=r,this.weapon_slots=bA(n),this.guidance_slots=ka._GUIDANCE_SLOTS.filter(o=>n.inventory[o]>0),this.panel=new dA(20,16,s-40,r-32,"Inventory",!1,"pop"),this._wrows=[],this._grows=[],this._build_chrome()}_count_str(e){return e===An?"unlimited":String(this.tank.inventory[e])}_select_weapon(e){this.tank.selected_weapon=e}_select_guidance(e){this.tank.selected_guidance=e}_weapon_array_index(){return this.weapon_slots.indexOf(this.tank.selected_weapon)}_build_chrome(){const e=this.panel;e.add(new U_(e.rect.right-80,e.rect.bottom-30,"~Done","pop",null,!0)),this._array_slots=this.weapon_slots.slice(0,8);const n=e.rect.x+16,s=e.rect.bottom-30-40;this._array_y=s,this._array_slots.length?this.weapon_array=e.add(new hA(n,s,Array.from({length:this._array_slots.length},(r,o)=>o),()=>this._weapon_array_index(),r=>this._array_click(r),36,(r,o,a,c)=>this._draw_array_cell(r,o,a,c))):this.weapon_array=null}_array_click(e){0<=e&&e<this._array_slots.length&&this._select_weapon(this._array_slots[e])}_draw_array_cell(e,n,s,r){this._array_slots[s]}_layout_lists(){const e=this.panel,n=Math.trunc((e.rect.w-48)/2),s=e.rect.x+16,r=e.rect.x+24+n,o=e.rect.y+48;this._wcol_x=s,this._gcol_x=r,this._list_top=o,this._wrows=[];for(let c=0;c<this.weapon_slots.length;c++)this._wrows.push([this.weapon_slots[c],o+c*18]);this._grows=[];let a=o;for(const c of this.guidance_slots)this._grows.push([c,a]),a+=18;this._grows.push([null,a]),this._guidance_bottom=a+18}handle(e){if(e.type===P_&&e.button===1&&e.pos){this._layout_lists();for(const[n,s]of this._wrows)if(new re(this._wcol_x-2,s-1,this._gcol_x-8-this._wcol_x,17).collidepoint(e.pos))return this._select_weapon(n),null;for(const[n,s]of this._grows)if(new re(this._gcol_x-2,s-1,this.panel.rect.right-16-this._gcol_x,17).collidepoint(e.pos))return this._select_guidance(n),null}return this.panel.handle(e)}draw(e){e.fill(rA),this.panel.draw(e,!1),this._layout_lists();const n=this.panel,s=this.tank,r=qe(14);sl(e,"Weapons",this._wcol_x,this._list_top-18,qn),sl(e,"Guidance",this._gcol_x,this._list_top-18,qn);for(const[l,h]of this._wrows){l===s.selected_weapon&&oe.rect(e,di,[this._wcol_x-2,h-1,this._gcol_x-8-this._wcol_x,17]);const d=de[l];e.blit(r.render(d.name,!0,we),[this._wcol_x,h]);const f=this._count_str(l),m=r.size(f)[0];e.blit(r.render(f,!0,we),[this._gcol_x-12-m,h])}for(const[l,h]of this._grows){s.selected_guidance===l&&oe.rect(e,di,[this._gcol_x-2,h-1,n.rect.right-16-this._gcol_x,17]);let d,f;if(l===null?(d="None",f=""):(d=de[l].name,f=String(s.inventory[l])),e.blit(r.render(d,!0,we),[this._gcol_x,h]),f){const m=r.size(f)[0];e.blit(r.render(f,!0,we),[n.rect.right-24-m,h])}}let o=Math.max(this._guidance_bottom,this._array_y-110)+8,a=0;for(const l of ya)a+=s.inventory[l];const c=[["Shields",a],["Parachutes",s.inventory[as]],["Batteries",s.inventory[Bn]],["Triggers",s.inventory[lS]],["Fuel",s.inventory[e_]]];for(const[l,h]of c)e.blit(r.render(`${l}: ${h}`,!0,we),[this._gcol_x,o]),o+=18;this.weapon_array!==null&&sl(e,"Weapon array (click to select):",this._wcol_x,this._array_y-18,we),fA(e)}};g(ka,"_GUIDANCE_SLOTS",(()=>{const e=[];for(let n=0;n<de.length;n++)de[n].category==="guidance"&&e.push(n);return e})());let ip=ka;const wA="place",$o="turn_start",Lr="aim",sp="firing",Zo="settle",bh="round_end",zs="shop",B_="game_over",Ir="sync_aim",rp="sync_volley",Pr="sim_live",SA=.6,rl=Xm,op=.25,TA=.4,AA=.5,RA=.6,ap=50,cp=250,CA=2,lp=5;function ol(i){const t=Math.floor(i),e=i-t;return e<.5?t+0:e>.5?t+1:t%2===0?t+0:t+1}function Ft(i){return Math.trunc(i)}function Nr(i,t){return Math.floor(i/t)}function Jo(i){return(i>0?1:0)-(i<0?1:0)}function hp(i,t,e,n){const s=[],r=Math.abs(e-i),o=-Math.abs(n-t),a=i<e?1:-1,c=t<n?1:-1;let l=r+o,h=i,u=t,d=r-o+2;for(;d>=0&&(s.push([h,u]),!(h===e&&u===n));){const f=2*l;f>=o&&(l+=o,h+=a),f<=r&&(l+=r,u+=c),d-=1}return s}const se=class se{constructor(t,e,n){g(this,"cfg");g(this,"w");g(this,"h");g(this,"rng");g(this,"_pyrandom");g(this,"terrain");g(this,"economy");g(this,"tanks");g(this,"round_index");g(this,"current_shooter");g(this,"current_weapon");g(this,"projectiles");g(this,"explosions");g(this,"beams");g(this,"last_landing");g(this,"direct_hit_tank");g(this,"firing_order");g(this,"fire_index");g(this,"phase");g(this,"timer");g(this,"message");g(this,"ranking");g(this,"winner");g(this,"explosion_scale");g(this,"mtn_ranges");g(this,"awaiting_human");g(this,"active_bolts");g(this,"trace_marks");g(this,"plasma_rings");g(this,"death_fountains");g(this,"throe_fx");g(this,"death_queue");g(this,"flashes");g(this,"shield_fades");g(this,"_prev_shield_hp");g(this,"speech");g(this,"_speech_frame");g(this,"live_sky");g(this,"lut");g(this,"_lut_base");g(this,"_sky_step");g(this,"_pal_accum");g(this,"_digger_cycle");g(this,"_digger_step");g(this,"_explo_band_active");g(this,"_death_pulse");g(this,"firewalls");g(this,"_firewall_counter");g(this,"_firewall_band_active");g(this,"sfx");g(this,"talk");g(this,"_data_dir");g(this,"_settle_done",!1);g(this,"_sync_locks",{});g(this,"_sync_queue",[]);g(this,"_sim",{});g(this,"_sim_human",null);g(this,"_sim_keymap",{});this.cfg=t,this.w=e,this.h=n,this.rng=ao,this._pyrandom=new y_,this.terrain=new t1(e,n),this.economy=new e1(t),this.tanks=[],this.round_index=0,this.current_shooter=null,this.current_weapon=null,this.projectiles=[],this.explosions=[],this.beams=[],this.last_landing=null,this.direct_hit_tank=null,this.firing_order=[],this.fire_index=0,this.phase=wA,this.timer=0,this.message="",this.ranking=[],this.winner=null,this.explosion_scale=this._scale_factor(),this.mtn_ranges=[],this.awaiting_human=!1,this._data_dir="",this.active_bolts=[],this.trace_marks=[],this.plasma_rings=[],this.death_fountains=[],this.throe_fx=[],this.death_queue=[],this.flashes=[],this.shield_fades={},this._prev_shield_hp={},this.speech=null,this._speech_frame=0,this.live_sky=(t.SKY||"PLAIN").toUpperCase(),this.lut=new pT;const s=_T();this.lut.set_band(zr,Ys,s),this._lut_base=this.lut.copy_table();{const r=Ys-zr+1;for(let o=0;o<r;o++){const a=s[o];this._lut_base[zr+o]=[a[0]&255,a[1]&255,a[2]&255]}}this._sky_step=0,this._pal_accum=0,this._digger_cycle=0,this._digger_step=0,this._explo_band_active=!1,this._death_pulse=null,this.firewalls=[],this._firewall_counter=0,this._firewall_band_active=!1,this.sfx=Vt,Vt.enabled=t.is_on("SOUND"),Vt.fly_mode=t.FLY_SOUND,Vt.field_height=n,this.talk=null}_scale_factor(){return{0:1,1:1.5,2:2}[this.cfg.explosion_scale]}_shuffle(t){for(let e=t.length-1;e>=1;e--){const n=this._pyrandom.pick(e+1),s=t[e];t[e]=t[n],t[n]=s}}add_player(t,e=0,n=0,s=0){const r=new hS(this.tanks.length,t,e,n,s);return r.mobile=EA(s),this.tanks.push(r),r}new_game(){this.round_index=0;const t=this.cfg.INITIAL_CASH;for(const e of this.tanks){e.cash=t,e.cash_ceiling=t,e.score=0,e.win_counter=0,e.hits_career={};for(let n=0;n<tn;n++)e.inventory[n]=0;e.inventory[An]=99}if(this.cfg.mayhem)for(const e of this.tanks)for(let n=1;n<tn;n++)de[n].enabled&&(e.inventory[n]=99);this.economy.refresh_availability(),this.talk===null&&(this.talk=V1(this.cfg,this._data_dir,{joinPath:(e,n)=>e?`${e}/${n}`:n,pathExists:()=>!1,listDir:()=>null,readFile:()=>null})),t>0?this.phase=zs:this.start_round()}start_round(){this.cfg.live_elastic=this._roll_elastic(),this._setup_wind(),this.terrain.generate(this.cfg,this.rng,this.mtn_ranges),this.live_sky=hu(this.cfg,this.rng),M1(this),Vt.field_height=this.h,this._place_tanks(),this._reset_round_tanks(),this._build_firing_order(),this.projectiles.length=0,this.explosions.length=0,this.beams.length=0,this.plasma_rings.length=0,this.death_fountains.length=0,this.throe_fx.length=0,this.death_queue.length=0,this._death_pulse=null,this.flashes.length=0,this.trace_marks.length=0,this.shield_fades={},this._prev_shield_hp={},this.last_landing=null,this.direct_hit_tank=null,this.fire_index=0,this.timer=0;const t=this.cfg.play_mode;t===df?this._sync_begin_round():t===Wo?this._sim_begin_round():this.phase=$o}_roll_elastic(){const t=this.cfg.elastic;return t===6?this.rng.pick(6):t===7?this.rng.pick(6):t}_reroll_erratic(){this.cfg.elastic===7&&(this.cfg.live_elastic=this.rng.pick(6))}_setup_wind(){const t=this.cfg.MAX_WIND;if(t<=0){this.cfg.wind=0;return}let e=this.rng.pick(Math.max(1,Nr(t,2)))-Nr(t,4);this.rng.chance(20,100)&&(e*=2,this.rng.chance(40,100)&&(e*=2)),this.cfg.wind=e}_perturb_wind(){const t=this.cfg.MAX_WIND;if(t<=0){this.cfg.wind=0;return}this.cfg.wind=Math.max(-t,Math.min(t,this.cfg.wind+this.rng.pick(11)-5))}_place_tanks(){const t=this.tanks.length,e=30,n=this.w-2*e,s=[];for(let r=0;r<t;r++){const o=e+Ft(n*(r+.5)/t),a=this.rng.pick(20)-10;s.push(Math.max(e,Math.min(this.w-e,o+a)))}s.sort((r,o)=>r-o);for(let r=1;r<t;r++)s[r]-s[r-1]<15&&(s[r]=Math.min(this.w-e,s[r-1]+15));this._shuffle(s);for(let r=0;r<this.tanks.length;r++){const o=this.tanks[r],a=s[r];o.x=a,o.y=this.terrain.drop_to_footprint(a,o.half_width),this.terrain.level_under_tank(a,o.y,o.half_width),o.color=lT(o.player_index)}}_reset_round_tanks(){for(const t of this.tanks)t.alive=!0,t.health=dh,t.shield_hp=0,t.shield_item=0,t.chute_up=0,t.chute_descent=null,t.fall_accum=0,t.hits_this_round={},t.ai_tries=0,t.angle=t.x<this.w/2?45:135,t.power=500,t.selected_guidance=null,t.selected_weapon=0,this._arm_defenses(t)}_announce_defense(t,e){const n=de[e].name;Jc(this,t,`${t.name} activating ${n}`,this.talk)}_arm_defenses(t){if(this.cfg.play_mode===Wo&&t.inventory[Hr]<=0){t.shield_hp=0,t.shield_item=0;return}if(this.cfg.play_mode===Wo&&t.inventory[Hr]>0){const e=this._arm_best_shield(t,!1);e!==null&&(this._announce_defense(t,Hr),this._announce_defense(t,e));return}this._arm_best_shield(t,!1)}_arm_best_shield(t,e=!0){if(t.shield_hp>0)return null;for(let n=ya.length-1;n>=0;n--){const s=ya[n];if(t.inventory[s]>0){const r=de[s].params;return t.shield_hp=r.hp??100,t.shield_item=s,t.shield_push=r.push??!1,t.shield_deflect=r.deflect??!1,t.shield_laserproof=r.laserproof??!1,t.shield_failproof=r.failproof??!1,t.inventory[s]-=1,this._start_shield_fade(t,1),Vt.play("shield_deploy",this.cfg.is_on("SOUND")),e&&this._announce_defense(t,s),s}}return null}_start_shield_fade(t,e){this.shield_fades[t.player_index]={dir:e,frame:0}}_tick_shield_fades(){for(const e of this.tanks)(this._prev_shield_hp[e.player_index]??0)>0&&e.shield_hp<=0&&this._start_shield_fade(e,-1),this._prev_shield_hp[e.player_index]=e.shield_hp;for(const e of Object.keys(this.shield_fades))this.shield_fades[Number(e)].frame+=1;const t={};for(const e of Object.keys(this.shield_fades)){const n=this.shield_fades[Number(e)];n.frame<=se.SHIELD_FADE_FRAMES&&(t[Number(e)]=n)}this.shield_fades=t}_build_firing_order(){let t=[];for(let n=0;n<this.tanks.length;n++)t.push(n);const e=this.cfg.play_order;if(e===$w)this._shuffle(t);else if(e===Zw)t=this._stableSort(t,n=>this.tanks[n].score);else if(e===Jw)t=this._stableSortReverse(t,n=>this.tanks[n].score);else if(e===jw){const n=this.round_index%t.length;t=t.slice(n).concat(t.slice(0,n))}this.firing_order=t}_stableSort(t,e){return t.map((n,s)=>({v:n,idx:s,k:e(n)})).sort((n,s)=>n.k-s.k||n.idx-s.idx).map(n=>n.v)}_stableSortReverse(t,e){return t.map((n,s)=>({v:n,idx:s,k:e(n)})).sort((n,s)=>s.k-n.k||n.idx-s.idx).map(n=>n.v)}_alive_count(){let t=0;for(const e of this.tanks)e.alive&&(t+=1);return t}_win_check(){const t=this.cfg.team_mode;if(t===qa||t===Qw)return this._alive_count()<2;const e=new Set;for(const n of this.tanks)n.alive&&e.add(n.team_id);return e.size<=1}_next_shooter(){const t=this.firing_order.length;for(let e=0;e<t;e++){const n=this.tanks[this.firing_order[this.fire_index]];if(this.fire_index=(this.fire_index+1)%t,n.alive)return n}return null}_resolve_unknown_class(t){t.ai_class===Ya&&t.reveal_type!==-2&&(t.reveal_type=-2,t.ai_class=this.rng.pick(7)+1)}_begin_turn(){if(this._win_check()){this._end_round();return}const t=this._next_shooter();if(t===null){this._end_round();return}if(this.current_shooter=t,Vt.play("turn",this.cfg.is_on("SOUND")),this._resolve_unknown_class(t),this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind(),this._arm_best_shield(t,!0),_1(this),t.ai_class===ai)this.awaiting_human=!0,this.phase=Lr;else{this.awaiting_human=!1;const[e,n,s]=Xc(this,t);t.angle=Ft(Math.max(0,Math.min(180,e))),t.power=Ft(Math.max(0,Math.min(1e3,n))),t.selected_weapon=s,this.phase=$o,this.timer=SA}}retreat(t=null){const e=t!==null?t:this.current_shooter;return e===null||!e.alive?!1:(this.current_shooter=null,e.alive=!1,e.health=0,D1(this,e),this.cfg.play_mode===tS&&(this.awaiting_human=!1,this.phase=Zo),!0)}skip_turn(){const t=this.current_shooter;return t===null||!t.alive?!1:(this.current_shooter=null,this.awaiting_human=!1,this.phase=Zo,!0)}fire(t=null){const e=t!==null?t:this.current_shooter;if(e===null)return[];if(t===null){if(this.phase===Lr&&this.cfg.play_mode===df)return this._sync_human_fire(e),[];if(this.phase===Pr&&this.cfg.play_mode===Wo)return this._sim_human_fire(e),[]}this._reroll_erratic(),this.direct_hit_tank=null,Vt.set_launch_y(e.y-4);let n=e.selected_weapon,s=de[n];e.has_ammo(n)||(n=An,s=de[n]),e.consume(n),e.selected_weapon!==An&&!e.has_ammo(e.selected_weapon)&&(e.selected_weapon=An),this.awaiting_human=!1;const r=G1(e,this.talk,this.rng);r!==null&&Jc(this,e,r,this.talk),Vt.play("fire",this.cfg.is_on("SOUND"));const o=s.behavior;if(o==="laser"){const l=Xo(e,this.cfg,s);return l.state.energy=Math.max(200,e.power)*10,WT(this,l),this._enter_firing(),[l]}if(o==="plasma"){const l=Xo(e,this.cfg,s);return ks(this,l,e.x,e.y-4),this._enter_firing(),[l]}const a=this._triple_fan_angles(e,n),c=[];for(const l of a){const h=Xo(e,this.cfg,s,null,l);e.contact_trigger&&(h.contact=!0),this.projectiles.push(h),c.push(h)}return e.contact_trigger&&(e.contact_trigger=!1),c.length>0&&Vt.start_fly(this.cfg.FLY_SOUND,this.cfg.is_on("SOUND")),this._enter_firing(),c}_triple_fan_angles(t,e){return t.tank_icon===MA&&(e===xa||e===An)?[t.angle-lp,t.angle,t.angle+lp]:[t.angle]}_enter_firing(){(this.phase===Lr||this.phase===$o)&&(this.phase=sp)}_discharge_batteries(t,e=null){e===null&&(e=t.batteries);let n=0;for(let s=0;s<e;s++)t.inventory[Bn]>0&&(t.inventory[Bn]-=1,Vt.play("battery",this.cfg.is_on("SOUND")),n+=1);n>0&&this._announce_defense(t,Bn)}_battery_auto_trigger(t){let e=0;for(;t.alive&&t.health<91&&t.inventory[Bn]>0;)t.inventory[Bn]-=1,t.health=Math.min(dh,t.health+10),e+=1;return e>0&&this._announce_defense(t,Bn),e}update(t){if(X1(this,t),this._tick_palette(t),this._tick_sky(),this.phase===$o)this.timer-=t,this.timer<=0&&(this.current_shooter&&this.current_shooter.ai_class!==ai&&this.projectiles.length===0?this.fire():this._begin_turn());else if(this.phase!==Lr)if(this.phase===sp){for(let e=0;e<rl;e++)this._step_flight();this._animate_effects(),this.projectiles.length===0&&this.explosions.length===0&&this.beams.length===0&&this.plasma_rings.length===0&&this.death_fountains.length===0&&this.throe_fx.length===0&&this.death_queue.length===0&&(Vt.stop_fly(),this.phase=Zo,this._settle_done=!1)}else if(this.phase===Zo){if(this.death_queue.length>0||this.death_fountains.length>0||this.throe_fx.length>0||this.explosions.length>0){this._animate_effects(),this._settle_done=!1;return}if(this._settle_done||(this._do_settle(),this._settle_done=!0),this._step_chute_anims(t),this.tanks.some(e=>e.chute_descent))return;this._settle_done=!1,this._win_check()?this.speech===null&&this._end_round():this._begin_turn()}else this.phase===Ir?this._sync_collect(t):this.phase===rp?this._sync_volley(t):this.phase===Pr&&this._sim_update(t)}_sync_begin_round(){this._sync_locks={},this._sync_queue=this.firing_order.filter(t=>this.tanks[t].alive),this.current_shooter=null,this.awaiting_human=!1,this.phase=Ir,this.timer=0,this._sync_advance()}_sync_start_volley(){this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind(),this._sync_locks={},this._sync_queue=this.firing_order.filter(t=>this.tanks[t].alive),this.current_shooter=null,this.awaiting_human=!1,this.phase=Ir,this.timer=0,this._sync_advance()}_sync_advance(){if(this._win_check()){this._end_round();return}for(;this._sync_queue.length>0&&(!this.tanks[this._sync_queue[0]].alive||this._sync_queue[0]in this._sync_locks);)this._sync_queue.shift();if(this._sync_queue.length===0){this._sync_launch_volley();return}const t=this._sync_queue[0],e=this.tanks[t];if(this.current_shooter=e,e.ai_class===ai)this.awaiting_human=!0,this.phase=Lr;else{this.awaiting_human=!1;const[n,s,r]=Xc(this,e);this._sync_record_lock(e,n,s,r),this.phase=Ir,this.timer=op}}_sync_record_lock(t,e,n,s){t.angle=Ft(Math.max(0,Math.min(180,e))),t.power=Ft(Math.max(0,Math.min(1e3,n))),t.selected_weapon=s,this._sync_locks[t.player_index]=[t.angle,t.power,s],this._sync_queue.length>0&&this._sync_queue[0]===t.player_index&&this._sync_queue.shift()}_sync_human_fire(t){return this._sync_record_lock(t,t.angle,t.power,t.selected_weapon),this.awaiting_human=!1,this.current_shooter=null,this.phase=Ir,this.timer=op,!0}_sync_collect(t){this.current_shooter!==null&&this.current_shooter.ai_class===ai||this.timer>0&&(this.timer-=t,this.timer>0)||this._sync_advance()}_sync_launch_volley(){this.current_shooter=null,this.awaiting_human=!1,this.phase=rp;for(const t of this.firing_order){const e=this.tanks[t];e.alive&&e.player_index in this._sync_locks&&(this.current_shooter=e,this.fire(e))}this.current_shooter=null,this.timer=TA}_sync_volley(t){for(let e=0;e<rl;e++)this._step_flight();if(this._animate_effects(),!(this.projectiles.length>0||this.explosions.length>0||this.beams.length>0||this.plasma_rings.length>0||this.death_fountains.length>0||this.throe_fx.length>0||this.death_queue.length>0)){if(this.timer>0){this.timer-=t;return}this._do_settle(),this._win_check()?this._end_round():this._sync_start_volley()}}_sim_begin_round(){this.current_shooter=null,this.awaiting_human=!1,this._sim={};for(const t of this.tanks){if(!t.alive)continue;t.inventory[Hr]>0?t.parachute_deployed=!1:t.parachute_deployed=!0;const e=this.rng.pick(Math.max(1,Ft(RA*1e3)))/1e3;this._sim[t.player_index]={timer:e,shots:0}}this._sim_human=this.tanks.find(t=>t.alive&&t.ai_class===ai)??null,this._sim_keymap=this._sim_build_keymap(this._sim_human),this.phase=Pr,this.timer=0}_sim_build_keymap(t){return{}}_sim_in_flight(t){return this.projectiles.some(e=>e.owner===t)}_sim_update(t){for(let e=0;e<rl;e++)this._step_flight();this._animate_effects(),this.projectiles.length===0&&this._do_settle();for(const e of this.tanks)this._battery_auto_trigger(e);if(this.death_queue.length===0&&this._win_check()){this._end_round();return}for(const e of this.tanks){if(!e.alive||e.ai_class===ai)continue;const n=this._sim[e.player_index];if(n===void 0||this._sim_in_flight(e))continue;if(n.timer>0){n.timer-=t;continue}this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind();const[s,r,o]=Xc(this,e);e.angle=Ft(Math.max(0,Math.min(180,s))),e.power=Ft(Math.max(0,Math.min(1e3,r))),e.selected_weapon=o,this.current_shooter=e,this.fire(e),n.shots+=1,n.timer=AA}this.current_shooter=this._sim_human}_sim_human_fire(t){return this._sim_in_flight(t)||(this.current_shooter=t,this.fire(t)),!0}_sim_human_input(t,e){const n=this._sim_human;if(n===null||!n.alive||this.phase!==Pr||!t||Object.keys(this._sim_keymap).length===0)return;const s=a=>{const c=this._sim_keymap[a];return c!==void 0&&c>=0&&c<t.length&&!!t[c]};let r=n.angle,o=n.power;s("cw")&&(r-=ap*e),s("ccw")&&(r+=ap*e),s("power_up")&&(o+=cp*e),s("power_down")&&(o-=cp*e),n.angle=Ft(Math.max(0,Math.min(180,r))),n.power=Ft(Math.max(0,Math.min(1e3,o)))}_sim_human_keydown(t){const e=this._sim_human;return e===null||!e.alive||this.phase!==Pr||Object.keys(this._sim_keymap).length===0?!1:t===this._sim_keymap.fire?(this._sim_human_fire(e),!0):t===this._sim_keymap.weapon}_step_flight(){for(const t of this.projectiles.slice()){if(!t.active)continue;const e=t.state;if(e.rolling){kT(this,t);continue}if(e.tunneling){t.weapon.behavior==="sandhog"?VT(this,t):HT(this,t);continue}const n=t.vy;VS(t,this.cfg,void 0,this.tanks),Vt.fly_tone(this.cfg.FLY_SOUND,t,this.cfg.is_on("SOUND"));const s=t.bounce_count??0;if(!GS(t,this.cfg,this.w,this.h)){this._resolve_off_field(t);continue}if((t.bounce_count??0)>s&&Vt.play("bounce",this.cfg.is_on("SOUND")),t.weapon.behavior==="mirv"&&!t.split_done&&n>0&&0>=t.vy){const o=this.projectiles.length;if(OT(this,t),t.contact)for(const a of this.projectiles.slice(o))a.contact=!0;continue}this._mag_deflect(t),this._force_deflect(t),this._collect_trace(t);const r=this._check_collision(t);r&&this._resolve_hit(t,r)}for(const t of this.projectiles)t.active||this._flush_trace(t);this.projectiles=this.projectiles.filter(t=>t.active)}_resolve_off_field(t){const e=this.cfg.live_elastic!==void 0?this.cfg.live_elastic:this.cfg.elastic,n=this.h-2,s=Math.max(0,Math.min(this.w-1,t.sx)),r=t.py>=this.h-1,o=e===5,a=t.px<0||t.px>this.w-1,c=t.py<0;let l,h=s,u=n;if(r?(l=!0,h=s,u=n):o&&(a||c)?(h=t.px<0?0:t.px>this.w-1?this.w-2:s,u=c?2:Math.max(2,Math.min(n,t.sy)),l=!0):l=!1,t.active=!1,!l){this.last_landing=[t.sx,t.sy];return}this.last_landing=[h,u];const d=t.weapon.behavior;if(d!=="tracer"){if(d==="digger"||d==="sandhog"){if(Math.abs(t.weapon.blast)<=0)return;fn(this,h,u,Ce(this,t.weapon));return}ks(this,t,h,u)}}_flush_trace(t){const e=t.state.trace_path;if(!e||e.length===0)return;const n=t.owner,s=Math.max(0,Math.min(255,(n!==null?n.color:Km)+110));for(const[r,o]of e)this.trace_marks.push([r,o,s]);t.state.trace_path=[]}_collect_trace(t){if(!(this.cfg.is_on("TRACE")||t.weapon.behavior==="tracer"))return;let n=t.state.trace_path;n===void 0&&(n=[],t.state.trace_path=n);const s=Ft(t.prev_px),r=Ft(t.prev_py),o=t.sx,a=t.sy;for(const c of hp(s,r,o,a))(n.length===0||n[n.length-1][0]!==c[0]||n[n.length-1][1]!==c[1])&&n.push(c)}_mag_deflect(t){const e=this.cfg.FIRE_DELAY,n=e===0?hf:hf/e,s=Nr(this.h-1,Uw);for(const r of this.tanks){if(!(r.alive&&r.shield_hp>0&&r.shield_push)||r===t.owner||t.vx===0||Math.abs(ol(t.px-r.x))>Dw)continue;const o=ol(r.y-t.py);0<o&&o<=s&&(t.vy+=n)}}_force_deflect(t){const e=t.state.force_reflect_in_ring;let n=!1;for(const s of this.tanks){if(!(s.alive&&s.shield_hp>0&&s.shield_deflect))continue;const r=s.half_width+Fw,o=t.sx-s.x,a=t.sy-(s.y-4);if(o*o+a*a>=r*r||(n=!0,e))continue;const c=t.sx-s.x,l=s.y-t.sy,h=t.vx,u=-t.vy;if(Jo(c)===Jo(h)&&Jo(l)===Jo(u)){t.state.force_reflect_in_ring=!0;continue}const d=Math.atan2(l,c),m=(Math.atan2(u,h)-d)*Ow,x=Math.cos(m),_=Math.sin(m),p=(-x*h-_*u)*uf,w=(_*h-x*u)*uf;t.vx=p,t.vy=-w,Tf(s),t.state.force_reflect_in_ring=!0}!n&&e&&(t.state.force_reflect_in_ring=!1)}_check_collision(t){const e=Ft(t.prev_px),n=Ft(t.prev_py),s=t.sx,r=t.sy;for(const[o,a]of hp(e,n,s,r)){if(a>=this.h-1)return{0:"terrain",1:null,2:o,3:this.h-2};for(const c of this.tanks){if(c.alive&&c!==t.owner&&Math.abs(c.x-o)<=c.half_width&&0<=c.y-a&&c.y-a<=10)return{0:"tank",1:c,2:o,3:a};if(c===t.owner&&t.owner!==null&&Math.abs(c.x-o)<=c.half_width&&0<=c.y-a&&c.y-a<=10&&t.armed&&Math.hypot(o-t.owner.x,a-(t.owner.y-4))>16)return{0:"tank",1:c,2:o,3:a}}if(0<=o&&o<this.w&&0<=a&&a<this.h&&this.terrain.is_dirt(o,a))return{0:"terrain",1:null,2:o,3:a}}return null}_resolve_hit(t,e){const n=e[0],s=e[1],r=e[2],o=e[3],a=t.weapon.behavior;if(this.last_landing=[r,o],n==="tank"&&s!==null){if(s.shield_hp>0&&a!=="laser"){a==="digger"||(Tf(s),Vt.play("shield_hit",this.cfg.is_on("SOUND"))),t.active=!1;return}if(a==="digger"){t.active=!1,Vt.play("fizzle",this.cfg.is_on("SOUND"));return}if(a==="dirt_sphere"||a==="dirt_slump"||a==="dirt_wedge"||a==="dirt_settle"||a==="riot_sphere"||a==="riot_wedge"||a==="tracer"){ks(this,t,r,o),t.active=!1;return}this.direct_hit_tank=s,iT(this,s),ks(this,t,r,o),t.active=!1}else{if(!t.contact){if(a==="roller"){FT(this,t,r);return}if(a==="digger"){BT(this,t,r,o);return}if(a==="sandhog"){zT(this,t,r,o);return}}if(a==="tracer"){t.active=!1;return}if(t.contact&&a==="digger"){const c=Ft(Ce(this,t.weapon));this.terrain.carve_circle(r,o,c),this.add_explosion(r,o,c,{dirt_only:!0}),t.active=!1;return}if(t.contact&&a==="sandhog"){fn(this,r,o,Ce(this,t.weapon)),t.active=!1;return}ks(this,t,r,o),a==="leapfrog"&&t.warheads_left>1&&this._leapfrog_hop(t,r,o),t.active=!1}}_leapfrog_hop(t,e,n){const s=t.owner;if(s===null)return;const r=t.weapon.warheads-t.warheads_left+1,o=t.weapon.params.radii??[20,25,30],a=Xo(s,this.cfg,t.weapon,350,t.vx>=0?60:120);a.warheads_left=t.warheads_left-1,a.weapon=g_(t.weapon),a.weapon.behavior="leapfrog",a.weapon.warheads=t.weapon.warheads,a.weapon.blast=o[Math.min(r,o.length-1)],a.px=e,a.py=n-4,a.contact=t.contact,this.projectiles.push(a)}_do_settle(){this.terrain.settle(this.cfg,this.rng);for(const t of this.tanks)t.alive&&this._settle_tank(t)}_settle_tank(t){if(!this.cfg.is_on("FALLING_TANKS")){t.y=Math.max(2,this.terrain.column_top(t.x)-1);return}const e=this.h-2,n=rT(this.terrain,t);let s=0;const r=[[t.x,t.y]];for(;t.y<e&&!this.terrain.is_supported(t.x,t.y,t.half_width);){if(t.y+=1,s+=1,n&&Math.abs(this.cfg.wind)>10&&this.rng.pick(100)<ol(Math.abs(this.cfg.wind))){const c=this.cfg.wind>0?1:-1,l=t.x+c;9<=l&&l<=this.w-10&&!this.terrain.is_solid(l,t.y)&&(t.x=l)}r.push([t.x,t.y])}if(s<=0)return;const o=s*qm,a=this._tank_under(t);if(a!==null){ps(this,a,o+Lw),Sf(this,t,Nr(o,2)+Iw);return}if(n){Vt.play("parachute",this.cfg.is_on("SOUND")),this._announce_defense(t,as),t.inventory[as]>0&&(t.inventory[as]-=1),t.parachutes<1&&(t.parachute_deployed=!1),this._start_chute_descent(t,r);return}Sf(this,t,o)}_start_chute_descent(t,e){!e||e.length<2||(t.chute_descent={path:e,i:0})}_step_chute_anims(t){for(const e of this.tanks){const n=e.chute_descent;n&&(n.i+=CA,n.i>=n.path.length-1&&(e.chute_descent=null))}}_tank_under(t){for(const e of this.tanks)if(e!==t&&e.alive&&Math.abs(e.x-t.x)<=e.half_width+2&&0<=t.y-e.y&&t.y-e.y<=4)return e;return null}add_explosion(t,e,n,s){const r=s?.dirt_only??!1,o=s?.nuke??!1;n=Math.max(2,Ft(n));const a=o||n<40?1:2;let c;o?c="nuke":r?c="stamp":c="grow";const l=o||!r&&n>=se.EXPLO_FLASH_MIN_R;this.explosions.push({x:Ft(t),y:Ft(e),maxr:n,style:c,dirt:r,step:a,flash:l,phase:0,frame:0})}add_beam(t){this.beams.push({pts:t,frame:0})}add_plasma_ring(t,e,n){n=Math.max(2,Ft(n)),this.plasma_rings.push({x:Ft(t),y:Ft(e),maxr:n,r:1,dir:1})}_step_plasma_rings(){for(const t of this.plasma_rings)t.r+=t.dir,t.r>=t.maxr&&(t.r=t.maxr,t.dir=-1);this.plasma_rings=this.plasma_rings.filter(t=>t.r>=1)}add_flash(t,e,n=[255,255,235],s=0){this.flashes.push({up:Math.max(1,Ft(t)),down:Math.max(1,Ft(e)),frame:-Math.max(0,Ft(s)),rgb:n})}_step_flashes(){for(const t of this.flashes)t.frame+=1;this.flashes=this.flashes.filter(t=>t.frame<=t.up+t.down)}add_death_fountain(t,e,n,s){this.death_fountains.push({col:Ft(t),y:Ft(e),top:Ft(n),color:Ft(s?.color??15),stride:Ft(s?.stride??6),scatter:Ft(s?.scatter??1)})}_step_death_fountains(){for(const t of this.death_fountains){const e=(this.rng.pick(3)-1)*t.scatter;t.col=Math.max(0,Math.min(this.w-1,t.col+e)),t.y-=t.stride}this.death_fountains=this.death_fountains.filter(t=>t.y>=t.top)}add_throe(t,e,n,s,r=null){const o={kind:t,x:Ft(e),y:Ft(n),color:Ft(s),frame:0,life:r?Ft(r):se.THROE_LIFE[t]??40};if(t==="fireworks"||t==="sparkle"){const a=[];for(let c=0;c<36;c++){const l=this.rng.pick(360)*Math.PI/180,h=1+this.rng.pick(40)/10;a.push([e,n,h*Math.cos(l),h*Math.sin(l)-2.4])}o.parts=a}else if(t==="debris"){const a=[];for(let c=0;c<14;c++){const l=this.rng.pick(360)*Math.PI/180,h=.6+this.rng.pick(24)/10;a.push([e,n,h*Math.cos(l),h*Math.sin(l)-3])}o.parts=a}else t==="sink"&&this.terrain.carve_circle(Ft(e),Ft(n),11);this.throe_fx.push(o)}_step_throe_fx(){for(const t of this.throe_fx)if(t.frame+=1,t.kind==="fireworks"||t.kind==="sparkle"||t.kind==="debris")for(const e of t.parts)e[0]+=e[2],e[1]+=e[3],e[3]+=.35;this.throe_fx=this.throe_fx.filter(t=>t.frame<t.life)}_step_explosion(t){if(t.frame+=1,t.style==="stamp"){t.frame>se.EXPLO_STAMP_HOLD&&(t.phase=3);return}const e=t.style==="nuke"?se.NUKE_FLASH_FRAMES:se.EXPLO_FLASH_FRAMES,n=t.phase;n===0?t.frame*t.step>=t.maxr&&(t.phase=t.flash?1:2,t.frame=0):n===1?t.frame>=e&&(t.phase=2,t.frame=0):n===2&&t.frame>=se.EXPLO_SHRINK_FRAMES&&(t.phase=3)}_animate_effects(){this._step_death_fountains();for(const t of this.explosions)this._step_explosion(t);this.explosions=this.explosions.filter(t=>t.phase<3);for(const t of this.beams)t.frame+=1;this.beams=this.beams.filter(t=>t.frame<=8),this._step_plasma_rings(),this._step_throe_fx(),this._step_death_queue()}_step_death_queue(){const t=this.cfg.is_on("SOUND");for(const[e,n]of U1(this))if(e==="award"){XS(this,this.current_shooter,n);const s=W1(n,this.talk,this.rng);s!==null&&Jc(this,n,s,this.talk)}else e==="front"?(this._death_pulse={color:Ft(n),frame:0},Vt.play("throe_front",t)):e==="thud"?Vt.play("throe_thud",t):e==="blast"?Vt.play("explosion",t,{size:n}):e==="sink"?Vt.play("sink",t):e==="cookoff"?Vt.play("explosion",t,{size:18}):e==="climb"&&Vt.play("death",t)}_tick_sky(){this._step_flashes(),this._tick_shield_fades(),v1(this)}_tick_palette(t){const e=this.lut;this._pal_accum+=t*Cw;const n=Ft(this._pal_accum);this._pal_accum-=n;const s=this._sliceTable(this._lut_base,mh,Af);if(e.set_band(mh,Af,s),this._tick_explosion_band(),this._tick_lightning_band(),this._death_pulse!==null){const r=this._death_pulse,o=r.color,a=this._lut_base[o];if(r.frame>=40)e.set_band(o,o,[a]),this._death_pulse=null;else{const c=[255,255,255];e.set_band(o,o,[r.frame%2?c:a]),r.frame+=1}}this._tick_digger_band(n),this._tick_firewall_band(n)}_tick_explosion_band(){const t=hT,e=uT,n=Ym;let s=null,r=null;for(const o of this.explosions){if(o.style==="stamp")continue;const a=o.phase;if(a===0||a===1){s=o;break}if(a===2){const c=Math.min(1,o.frame/se.EXPLO_SHRINK_FRAMES);r=r===null?c:Math.min(r,c)}}if(s!==null||r!==null){if(this.lut.reramp_band(t,n,se._EXPLO_HOT_OUTER,se._EXPLO_HOT_INNER),this.lut.reramp_band(n,e,se._EXPLO_HOT_INNER,se._EXPLO_HOT_INNER),r!==null&&s===null){const o=Math.max(0,1-.9*r),a=[];for(let c=t;c<=e;c++){const l=this.lut.table[c];a.push([Math.trunc(l[0]*o)&255,Math.trunc(l[1]*o)&255,Math.trunc(l[2]*o)&255])}this.lut.set_band(t,e,a)}this._explo_band_active=!0}else this._explo_band_active&&(this.lut.set_band(t,e,this._sliceTable(this._lut_base,t,e)),this._explo_band_active=!1)}_tick_lightning_band(){const t=this.flashes;if(t.length===0)return;let e=0;for(const o of t){const a=o.frame;if(a<0)continue;const c=o.up,l=o.down,h=a<=c?a/c:Math.max(0,1-(a-c)/l);e=Math.max(e,h)}if(e<=0)return;const n=dT,s=fT,r=[];for(let o=n;o<=s;o++){const a=this.lut.table[o],c=Math.max(0,Math.min(255,Math.trunc(a[0]*(1-e)+255*e))),l=Math.max(0,Math.min(255,Math.trunc(a[1]*(1-e)+255*e))),h=Math.max(0,Math.min(255,Math.trunc(a[2]*(1-e)+255*e)));r.push([c,l,h])}this.lut.set_band(n,s,r)}start_digger_cycle(){this._digger_cycle=se.DIGGER_CYCLE_FRAMES}_tick_digger_band(t=1){const e=zr,n=Ys,s=n-e+1;if(this._digger_cycle>0){this._digger_step=(this._digger_step+t)%s;const r=this._sliceTable(this._lut_base,e,n);this.lut.set_band(e,n,this._rollRows(r,this._digger_step)),this._digger_cycle-=1,this._digger_cycle===0&&(this.lut.set_band(e,n,r),this._digger_step=0,this.terrain.clear_index_band(e,n))}}add_firewall(t,e,n){this.firewalls.push({x:Ft(t),y0:Ft(Math.min(e,n)),y1:Ft(Math.max(e,n)),frame:0}),Lf(this.lut,0),this._firewall_band_active=!0}_tick_firewall_band(t=1){if(this.firewalls.length>0){this._firewall_counter+=t,this._firewall_counter>100&&(this._firewall_counter%=101),Lf(this.lut,this._firewall_counter),this._firewall_band_active=!0;for(const e of this.firewalls)e.frame+=1;this.firewalls=this.firewalls.filter(e=>e.frame<=se.FIREWALL_FRAMES)}else this._firewall_band_active&&(this.lut.set_index(gh,this._lut_base[gh]),this.lut.set_band(_h,Rf,this._sliceTable(this._lut_base,_h,Rf)),this.lut.set_band(ba,Cf,this._sliceTable(this._lut_base,ba,Cf)),this._firewall_band_active=!1)}_sliceTable(t,e,n){const s=[];for(let r=e;r<=n;r++){const o=t[r];s.push([o[0],o[1],o[2]])}return s}_rollRows(t,e){const n=t.length;if(n===0)return t;const s=(e%n+n)%n,r=new Array(n);for(let o=0;o<n;o++)r[(o+s)%n]=t[o];return r}on_tank_destroyed(t,e=null){N1(this,t,e)}_end_round(){qS(this),this.tanks.some(t=>t.alive)&&Vt.play("victory",this.cfg.is_on("SOUND")),this.round_index+=1,this.ranking=bf(this),this.phase=bh}mass_kill(){const t=this.tanks.length;if(t===0)return;const e=this.cfg.scoring===Xa?t*$m:Zm,n=Nr(e,t);for(const s of this.tanks)s.alive=!1,s.health=0,s.score+=n,s.cash=Math.max(0,s.cash+n);this.round_index+=1,this.ranking=bf(this),this.phase=bh}proceed_after_round(){if(this.round_index>=this.cfg.MAXROUNDS){this.winner=this.ranking.length>0?this.ranking[0]:null,this.phase=B_;return}this.economy.accrue_interest(this.tanks),this.economy.update_repeated_use(this.cfg.MAXROUNDS-this.round_index-1),this.economy.market_update(this.tanks.length),this.phase=zs}run_ai_buys(){for(const t of this.tanks)t.ai_class!==ai&&TS(this,t)}begin_next_round(){this.start_round()}};g(se,"SHIELD_FADE_FRAMES",51),g(se,"EXPLO_FLASH_FRAMES",49),g(se,"EXPLO_SHRINK_FRAMES",25),g(se,"EXPLO_FLASH_MIN_R",31),g(se,"EXPLO_STAMP_HOLD",3),g(se,"NUKE_FLASH_FRAMES",129),g(se,"THROE_LIFE",{ball:60,spiral:46,sparkle:46,ring:40,fireworks:56,sink:34,debris:50}),g(se,"_EXPLO_HOT_OUTER",[24,0,0]),g(se,"_EXPLO_HOT_INNER",[252,0,0]),g(se,"DIGGER_CYCLE_FRAMES",200),g(se,"FIREWALL_FRAMES",120);let Ta=se,LA=[];function IA(i,t,e,n){ao.seed(n);const s=new Ta(i,t,e);return s.mtn_ranges=LA,s._pyrandom.seed(n),s}function PA(i,t){const e=i.w,n=i.h,s=Math.min(e,256),r=Math.min(n,64),o=new cr(e,n,s,r);o.rotateX(-Math.PI/2);const a=new io({color:8947848,flatShading:!0,side:wn}),c=new Re(o,a);return c.receiveShadow=!0,c.castShadow=!0,H_(c,i),c}function H_(i,t){const e=i.geometry,n=e.attributes.position,s=t.w,r=t.h,o=300,a=0;Math.sqrt(n.count/((e.parameters.heightSegments??64)+1));for(let c=0;c<n.count;c++){const l=n.getX(c),h=Math.round(l+s/2);if(h<0||h>=s){n.setY(c,a);continue}let u=r-1;for(let f=0;f<r;f++)if(t.is_dirt(h,f)){u=f;break}const d=(r-u)/r*o;n.setY(c,d)}n.needsUpdate=!0,e.computeVertexNormals()}const NA=new Map;new Hm;function DA(i,t){for(const e of NA.values()){const n=e.tank;if(!n.alive){e.group.visible=!1;continue}e.group.visible=!0;const s=Math.round(n.x),r=s-t.w/2;let o=0;for(let a=0;a<t.h;a++)if(t.is_dirt(s,a)){o=(t.h-a)/t.h*300;break}if(e.group.position.set(r,o,0),e.turret){const a=(n.angle-90)*(Math.PI/180);e.turret.rotation.z=a}}}const ua=[],Mh=new qh({map:null,blending:bl,depthWrite:!1,transparent:!0,opacity:.8});function z_(){return new Promise(i=>{new Zh().load("./assets/explosion_sheet_v4.png",e=>{Mh.map=e,Mh.needsUpdate=!0,i()},void 0,()=>i())})}function UA(i,t,e,n,s,r){const o=i-s/2,a=(r-t)/r*300+e*.3,c=0,l=new Lm(Mh.clone());l.position.set(o,a,c),l.scale.set(e*.5,e*.5,1),n.add(l),ua.push({sprite:l,maxRadius:e,frame:0,age:0})}function OA(i){for(let e=ua.length-1;e>=0;e--){const n=ua[e];n.age+=i;const s=n.age/.6;if(s>=1){n.sprite.removeFromParent(),n.sprite.material.dispose(),ua.splice(e,1);continue}const r=n.maxRadius*(.3+s*.7);n.sprite.scale.set(r,r,1),n.sprite.material.opacity=1-s}}const jo=new Set;function FA(i,t){const e=new Set;for(const n of i.explosions){const s=n.x*1e4+n.y;e.add(s),jo.has(s)||(UA(n.x,n.y,n.maxr||20,t,i.w,i.h),jo.add(s))}for(const n of jo)e.has(n)||jo.delete(n)}function kA(i){return{x:0,y:0}}const al=[];new ar(2,2,2);const BA=-50;function HA(i){for(let t=al.length-1;t>=0;t--){const e=al[t];if(e.age+=i,e.age>=e.life){e.mesh.removeFromParent(),e.mesh.material.dispose(),al.splice(t,1);continue}e.velocity.y+=BA*i,e.mesh.position.x+=e.velocity.x*i,e.mesh.position.y+=e.velocity.y*i,e.mesh.position.z+=e.velocity.z*i,e.mesh.position.y<0&&(e.mesh.position.y=0,e.velocity.y*=-.3,e.velocity.x*=.5);const n=e.age/e.life,s=e.mesh.material;s.opacity=1-n,s.transparent=!0}}const zA={earth:{bg:4878245,fog:8892112,fogNear:400,fogFar:900},moon:{bg:328976,fog:0,fogNear:300,fogFar:700},mars:{bg:9127187,fog:12883306,fogNear:200,fogFar:600}};function V_(i,t){const e=zA[t];i.background=new Tt(e.bg),i.fog=new Xh(e.fog,e.fogNear,e.fogFar);const n=i.children.find(s=>s instanceof Bm);n&&(t==="moon"?n.intensity=.3:t==="mars"?n.intensity=.5:n.intensity=.6)}let up="earth",VA=new DE,cl=0;function GA(i,t,e,n){const s=Math.min(VA.getDelta(),.1);i.update(s),cl=(cl+1)%3,cl===0&&H_(n,i.terrain),DA(i,i.terrain),FA(i,t),OA(s),HA(s);const r=kA();e.position.x+=r.x,e.position.y+=r.y;const o=Eh(i.round_index);o!==up&&(up=o,V_(t,o))}function Eh(i){return i<=1?"earth":i<=3?"moon":"mars"}const G_={"Elon Musk":{taunt:["./audio/elon_musk_taunt.wav","./audio/elon_musk_taunt_v2.wav","./audio/elon_musk_taunt3.wav","./audio/elon_musk_taunt4.wav","./audio/elon_musk_taunt5.wav","./audio/elon_musk_taunt6.wav"],kill:["./audio/elon_musk_kill.wav"],death:["./audio/elon_musk_death.wav"],shop:["./audio/elon_musk_shop.wav"],revenge:["./audio/elon_musk_revenge.wav"],nearmiss:["./audio/elon_musk_nearmiss.wav"]},"Donald Trump":{taunt:["./audio/trump_taunt.wav","./audio/donald_trump_taunt4.wav","./audio/donald_trump_taunt5.wav"],kill:["./audio/donald_trump_kill.wav"],death:["./audio/donald_trump_death.wav"],shop:["./audio/donald_trump_shop.wav"],revenge:["./audio/donald_trump_revenge.wav"]},"Jeff Bezos":{taunt:["./audio/bezos_taunt.wav","./audio/jeff_bezos_taunt3.wav","./audio/jeff_bezos_taunt4.wav","./audio/jeff_bezos_taunt5.wav"],kill:["./audio/jeff_bezos_kill.wav"],death:["./audio/jeff_bezos_death.wav"],shop:["./audio/jeff_bezos_shop.wav"],revenge:["./audio/jeff_bezos_revenge.wav"]},"Sam Altman":{taunt:["./audio/sam_altman_taunt.wav","./audio/sam_altman_taunt3.wav","./audio/sam_altman_taunt4.wav","./audio/sam_altman_taunt5.wav"],kill:["./audio/sam_altman_kill.wav"],death:["./audio/sam_altman_death.wav"],shop:["./audio/sam_altman_shop.wav"],revenge:["./audio/sam_altman_revenge.wav"]},"Bill Gates":{taunt:["./audio/bill_gates_taunt.wav","./audio/bill_gates_taunt3.wav"],kill:["./audio/bill_gates_kill.wav"],death:["./audio/bill_gates_death.wav"],shop:["./audio/bill_gates_shop.wav"],revenge:["./audio/bill_gates_revenge.wav"]},"Steve Jobs":{taunt:["./audio/steve_jobs_taunt.wav","./audio/steve_jobs_taunt3.wav"],kill:["./audio/steve_jobs_kill.wav"],death:["./audio/steve_jobs_death.wav"],shop:["./audio/steve_jobs_shop.wav"],revenge:["./audio/steve_jobs_revenge.wav"]},"Gordon Ramsay":{taunt:["./audio/gordon_ramsay_taunt.wav","./audio/gordon_ramsay_taunt5.wav"],kill:["./audio/gordon_ramsay_kill.wav"],death:["./audio/gordon_ramsay_death.wav"]},"Werner Herzog":{taunt:["./audio/werner_herzog_taunt.wav","./audio/werner_herzog_taunt3.wav","./audio/werner_herzog_taunt5.wav"],kill:["./audio/werner_herzog_kill.wav"],death:["./audio/werner_herzog_death.wav"],shop:["./audio/werner_herzog_shop.wav"],revenge:["./audio/werner_herzog_revenge.wav"]},"Mark Zuckerberg":{taunt:["./audio/mark_zuckerberg_taunt.wav"],kill:["./audio/mark_zuckerberg_kill.wav"],death:["./audio/mark_zuckerberg_death.wav"],shop:["./audio/mark_zuckerberg_shop.wav"],revenge:["./audio/mark_zuckerberg_revenge.wav"]},"Joe Rogan":{taunt:["./audio/joe_rogan_taunt.wav"],kill:["./audio/joe_rogan_kill.wav"],death:["./audio/joe_rogan_death.wav"]},"Neil deGrasse Tyson":{taunt:["./audio/neil_degrasse_tyson_taunt.wav"],kill:["./audio/neil_degrasse_tyson_kill.wav"],death:["./audio/neil_degrasse_tyson_death.wav"]}},wh=new(window.AudioContext||window.webkitAudioContext),Sh=new Map;async function WA(i){if(!Sh.has(i))try{const e=await(await fetch(i)).arrayBuffer(),n=await wh.decodeAudioData(e);Sh.set(i,n)}catch{}}function fu(i){const t=Sh.get(i);if(!t)return;const e=wh.createBufferSource();e.buffer=t,e.connect(wh.destination),e.start()}function pu(i,t){const e=G_[i];if(!e)return null;const n=e[t];return!n||n.length===0?null:n[Math.floor(Math.random()*n.length)]}function XA(i){const t=pu(i.name,"taunt");t&&fu(t)}function qA(i){const t=pu(i.name,"kill");t&&fu(t)}function YA(i){const t=pu(i.name,"death");t&&fu(t)}async function W_(){const i=[];for(const t of Object.values(G_))for(const e of Object.values(t))for(const n of e)i.push(WA(n));await Promise.allSettled(i)}const KA=["Baby Missile","Series A Round","Bridge Round","Chapter 11 Restructuring","Growth Hack","Pivot","Portfolio Diversification","Hostile Takeover","Thermal Runway Extension","Accelerated Vesting","Due Diligence","Redacted Filing","Regulatory Rollback","Deregulation Wave","Antitrust Repeal","Shareholder Revolt","Proxy Fight","Activist Investor","Hostile Activist Investor","Market Disruption (Seed)","Market Disruption (Series A)","Market Disruption (Unicorn)","Regulatory Sandbag (Minor)","Regulatory Sandbag","Regulatory Capture","Dilution Event","Down Round","Wipeout Round","Liquidity Crisis","Margin Call","Market Correction","Liquidity Event","Quant Hedge","Thermal Runway Detection","Technical Analysis","Market Timing","Valuation Adjustment","Passive Index Fund","Golden Parachute","Top-Up Round","Magnetic Regulatory Shield","Standard Insurance Policy","Force Majeure Clause","Premium Insurance Policy","Super PAC","Automatic Vesting Schedule","Expansion Capital","Breakup Fee"];function Yr(i){const t=KA[i],e=de[i]?de[i].name:"";return t!==void 0&&t!==""?t:e}const $A=`
:root {
  --sm-bg: #0b0b1a;
  --sm-panel: #13132b;
  --sm-panel2: #1a1a38;
  --sm-accent: #e94560;
  --sm-ink: #eaeaf6;
  --sm-muted: #8d91b5;
  --sm-line: rgba(234, 234, 246, 0.1);
  --sm-good: #41d9a0;
  --sm-shield: #5aa7ff;
  --sm-warn: #ffb454;
  --sm-mono: "Consolas", "Courier New", monospace;
}
*:focus-visible { outline: 2px solid var(--sm-accent); outline-offset: 2px; }

.sm-shop {
  position: fixed; inset: 0; z-index: 60;
  display: flex; align-items: center; justify-content: center;
  background: rgba(5, 5, 14, 0.72);
  backdrop-filter: blur(3px);
  font-family: var(--sm-mono);
  color: var(--sm-ink);
}
.sm-shop[hidden] { display: none; }
.sm-shop-panel {
  position: relative;
  width: min(1120px, 94vw); max-height: 88vh;
  display: flex; flex-direction: column;
  background: var(--sm-bg);
  border: 1px solid var(--sm-line);
  border-radius: 14px;
  box-shadow: 0 0 0 1px rgba(233, 69, 96, 0.12), 0 24px 80px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

/* ---- header: term sheet ---- */
.sm-shop-header {
  display: grid; grid-template-columns: 1fr auto auto;
  gap: 18px; align-items: center;
  padding: 16px 20px 14px;
  border-bottom: 1px solid var(--sm-line);
  background: linear-gradient(180deg, var(--sm-panel2), var(--sm-panel));
}
.sm-shop-eyebrow {
  font-size: 10px; letter-spacing: 3px; color: var(--sm-muted);
  text-transform: uppercase; margin-bottom: 4px;
}
.sm-shop-title {
  font-size: 26px; font-weight: 700; letter-spacing: 2px;
  display: flex; align-items: baseline; gap: 12px;
}
.sm-shop-title .sm-shop-series {
  font-size: 12px; letter-spacing: 3px; color: var(--sm-accent);
  border: 1px solid rgba(233, 69, 96, 0.5); border-radius: 6px;
  padding: 2px 8px; font-weight: 700;
}
.sm-shop-runway { text-align: right; }
.sm-shop-label {
  font-size: 10px; letter-spacing: 3px; color: var(--sm-muted);
  text-transform: uppercase;
}
.sm-shop-cash {
  font-size: 30px; font-weight: 700; color: var(--sm-good);
  text-shadow: 0 0 18px rgba(65, 217, 160, 0.35);
  line-height: 1.1;
}
.sm-shop-burn {
  width: 210px; height: 6px; margin-top: 6px; margin-left: auto;
  border-radius: 3px; background: rgba(255, 255, 255, 0.07);
  overflow: hidden;
}
.sm-shop-burn i {
  display: block; height: 100%; border-radius: 3px;
  background: linear-gradient(90deg, var(--sm-accent), var(--sm-warn));
  transition: width 0.35s ease-out;
}
.sm-shop-terms {
  display: flex; flex-direction: column; gap: 4px; text-align: right;
  font-size: 11px; color: var(--sm-muted); letter-spacing: 1px;
}
.sm-shop-terms b { color: var(--sm-ink); font-weight: 700; }
.sm-shop-close {
  position: absolute; top: 12px; right: 12px;
  background: transparent; color: var(--sm-muted);
  border: 1px solid var(--sm-line); border-radius: 8px;
  font-family: var(--sm-mono); font-size: 11px; letter-spacing: 1px;
  padding: 4px 10px; cursor: pointer; z-index: 2;
}
.sm-shop-close:hover { color: var(--sm-accent); border-color: var(--sm-accent); }

/* ---- cart summary strip ---- */
.sm-shop-cart {
  display: flex; gap: 22px; align-items: center;
  padding: 8px 20px;
  font-size: 11px; letter-spacing: 1px; color: var(--sm-muted);
  background: rgba(233, 69, 96, 0.05);
  border-bottom: 1px solid var(--sm-line);
  text-transform: uppercase;
}
.sm-shop-cart b { color: var(--sm-ink); font-weight: 700; }
.sm-shop-cart .sm-shop-cart-mark { color: var(--sm-accent); }
.sm-shop-cart .sm-shop-cart-divest { color: var(--sm-good); }

/* ---- deal-flow status line ---- */
.sm-shop-status {
  min-height: 22px; padding: 5px 20px 0;
  font-size: 11px; letter-spacing: 1px;
  color: var(--sm-muted); text-transform: uppercase;
}
.sm-shop-status.sm-shop-ok { color: var(--sm-good); }
.sm-shop-status.sm-shop-bad { color: var(--sm-accent); }

/* ---- acquisition grid ---- */
.sm-shop-grid {
  flex: 1; overflow-y: auto; padding: 14px 20px 18px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  gap: 10px;
  scrollbar-width: thin;
  scrollbar-color: rgba(233, 69, 96, 0.4) transparent;
}
.sm-shop-card {
  display: flex; flex-direction: column; gap: 8px;
  background: var(--sm-panel);
  border: 1px solid var(--sm-line);
  border-radius: 10px;
  padding: 10px 12px;
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.sm-shop-card:hover { border-color: rgba(233, 69, 96, 0.45); transform: translateY(-1px); }
.sm-shop-card.sm-shop-halted { opacity: 0.55; }
.sm-shop-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; }
.sm-shop-card-name {
  font-size: 13px; font-weight: 700; letter-spacing: 0.5px; line-height: 1.25;
}
.sm-shop-card-alt {
  font-size: 9px; color: var(--sm-muted); letter-spacing: 0.5px;
  margin-top: 2px; text-transform: uppercase;
}
.sm-shop-card-cat {
  flex: none; font-size: 8px; letter-spacing: 1.5px; color: var(--sm-muted);
  border: 1px solid var(--sm-line); border-radius: 4px;
  padding: 2px 5px; text-transform: uppercase; margin-top: 1px;
}
.sm-shop-card-metrics {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 3px 10px;
}
.sm-shop-card-metrics .m { display: flex; justify-content: space-between; font-size: 10px; }
.sm-shop-card-metrics i {
  font-style: normal; color: var(--sm-muted);
  letter-spacing: 1px; text-transform: uppercase;
}
.sm-shop-card-metrics b { font-weight: 700; color: var(--sm-ink); }
.sm-shop-card-actions { display: flex; gap: 6px; margin-top: auto; }
.sm-shop-btn {
  flex: 1; font-family: var(--sm-mono);
  font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 0; border-radius: 7px; cursor: pointer;
  border: 1px solid transparent;
  transition: filter 0.15s ease, background 0.15s ease;
}
.sm-shop-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.sm-shop-btn-buy { background: var(--sm-accent); color: #fff; }
.sm-shop-btn-buy:not(:disabled):hover { filter: brightness(1.15); }
.sm-shop-btn-sell {
  background: transparent; color: var(--sm-good);
  border-color: rgba(65, 217, 160, 0.45);
}
.sm-shop-btn-sell:not(:disabled):hover { background: rgba(65, 217, 160, 0.12); }

.sm-shop-foot {
  padding: 8px 20px 12px;
  font-size: 9px; letter-spacing: 1.5px; color: var(--sm-muted);
  text-transform: uppercase; text-align: center;
  border-top: 1px solid var(--sm-line);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;let dp=!1;function ZA(){if(dp)return;const i=document.createElement("style");i.textContent=$A,document.head.appendChild(i),dp=!0}function JA(){let i=document.getElementById("ui-layer");return i||(i=document.createElement("div"),i.id="ui-layer",document.body.appendChild(i)),i}function rn(i){return"$"+Math.round(i).toLocaleString("en-US")}function fp(i,t,e){return i<t?t:i>e?e:i}class jA{constructor(t,e,n){g(this,"economy");g(this,"tank");g(this,"root");g(this,"cashEl");g(this,"burnEl");g(this,"seriesEl");g(this,"termSeriesEl");g(this,"modelEl");g(this,"armsEl");g(this,"statusEl");g(this,"gridEl");g(this,"visible",!1);g(this,"_statusTimer",0);g(this,"_onKey",t=>{t.key==="Escape"&&this.visible&&this.close()});this.economy=t,this.tank=e,ZA();const s=n??JA();this.root=document.createElement("div"),this.root.className="sm-shop",this.root.hidden=!0,this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-label","Cap Table weapon shop"),this.root.innerHTML=`
      <div class="sm-shop-panel">
        <button type="button" class="sm-shop-close" aria-label="Close the Cap Table">ESC &times;</button>
        <div class="sm-shop-header">
          <div>
            <div class="sm-shop-eyebrow">The Mother of All VC Rounds</div>
            <div class="sm-shop-title">CAP TABLE <span class="sm-shop-series"></span></div>
          </div>
          <div class="sm-shop-runway">
            <div class="sm-shop-label">Runway</div>
            <div class="sm-shop-cash">$0</div>
            <div class="sm-shop-burn"><i></i></div>
          </div>
          <div class="sm-shop-terms">
            <div>PREMIUM <b class="sm-shop-term-series">—</b></div>
            <div>VC MODEL <b class="sm-shop-term-model">—</b></div>
            <div>ARMS <b class="sm-shop-term-arms">—</b></div>
          </div>
        </div>
        <div class="sm-shop-cart">CART — <b class="sm-shop-cart-skus">0</b> SKUs &middot; <b class="sm-shop-cart-units">0</b> UNITS &middot; <b class="sm-shop-cart-mark">$0 MARK</b> &middot; <b class="sm-shop-cart-divest">$0 DIVEST</b></div>
        <div class="sm-shop-status" aria-live="polite"></div>
        <div class="sm-shop-grid"></div>
        <div class="sm-shop-foot">48 acquisition targets &middot; valuations marked at series premium &middot; no due diligence &middot; all sales final</div>
      </div>`,this.cashEl=this.root.querySelector(".sm-shop-cash"),this.burnEl=this.root.querySelector(".sm-shop-burn i"),this.seriesEl=this.root.querySelector(".sm-shop-series"),this.termSeriesEl=this.root.querySelector(".sm-shop-term-series"),this.modelEl=this.root.querySelector(".sm-shop-term-model"),this.armsEl=this.root.querySelector(".sm-shop-term-arms"),this.statusEl=this.root.querySelector(".sm-shop-status"),this.gridEl=this.root.querySelector(".sm-shop-grid"),this.root.querySelector(".sm-shop-close").addEventListener("click",()=>this.close()),window.addEventListener("keydown",this._onKey),s.appendChild(this.root)}toggle(){this.visible?this.close():this.open()}open(){this.visible||(this.visible=!0,this.root.hidden=!1,this.render())}close(){this.visible&&(this.visible=!1,this.root.hidden=!0)}get isOpen(){return this.visible}destroy(){window.removeEventListener("keydown",this._onKey),this.root.remove()}render(){const t=this.economy,e=this.tank,n=e.cash||0;this.cashEl.textContent=rn(n);const s=e.cash_ceiling??0,r=s>0?s:Math.max(n*2,1e4);this.burnEl.style.width=fp(n/r*100,0,100)+"%";const o=t.cfg.INTEREST_RATE||0;this.seriesEl.textContent=this._seriesName(o),this.termSeriesEl.textContent=o>0?(o*100).toFixed(1)+"%/MO":"NONE",this.modelEl.textContent=t.cfg.is_on("FREE_MARKET")?"ACCELERATOR":"TRADITIONAL",this.armsEl.textContent="TIER "+t.cfg.ARMS,this._renderCart(),this._renderGrid()}_seriesName(t){if(t<=0)return"UNSERIESED";const e=fp(Math.round(t/.05)-1,0,25);return"SERIES "+String.fromCharCode(65+e)}_renderCart(){const t=this.tank;let e=0,n=0,s=0;for(let l=0;l<tn;l++){const h=t.inventory[l]??0;h<=0||(e+=1,n+=h,s+=this.economy.unit_price(l)*h)}const r=this.root.querySelector(".sm-shop-cart-skus"),o=this.root.querySelector(".sm-shop-cart-units"),a=this.root.querySelector(".sm-shop-cart-mark"),c=this.root.querySelector(".sm-shop-cart-divest");r.textContent=String(e),o.textContent=String(n),a.textContent=rn(s)+" MARK",c.textContent=rn(this._divestValue(s))+" DIVEST"}_sellbackMult(){return this.economy.cfg.is_on("FREE_MARKET")?Jm:iu}_divestValue(t){return Math.round(t*this._sellbackMult())}_renderGrid(){const t=document.createDocumentFragment();for(let e=0;e<tn;e++)t.appendChild(this._renderCard(e));this.gridEl.textContent="",this.gridEl.appendChild(t)}_renderCard(t){const e=de[t],n=this.economy,s=this.tank,r=s.inventory[t]??0,o=n.price[t]??e.cost,a=n.unit_price(t),c=e.bundle||1,l=n.available[t]??!0,h=r>=ss,u=s.cash<o,d=document.createElement("div");d.className="sm-shop-card"+(l?"":" sm-shop-halted"),d.dataset.slot=String(t);const f=document.createElement("div");f.className="sm-shop-card-top";const m=document.createElement("div"),x=document.createElement("div");x.className="sm-shop-card-name",x.textContent=Yr(t),x.title=e.name+" — "+e.category;const _=document.createElement("div");_.className="sm-shop-card-alt",_.textContent="alt: "+e.name,m.appendChild(x),m.appendChild(_);const p=document.createElement("div");p.className="sm-shop-card-cat",p.textContent=e.category,f.appendChild(m),f.appendChild(p);const w=document.createElement("div");w.className="sm-shop-card-metrics",w.appendChild(this._metric("Valuation",rn(o),"b")),w.appendChild(this._metric("Per unit",rn(a),"b")),w.appendChild(this._metric("Bundle","x"+c,"b")),w.appendChild(this._metric("Position",String(r),"b"));const S=document.createElement("div");S.className="sm-shop-card-actions";const v=document.createElement("button");v.type="button",v.className="sm-shop-btn sm-shop-btn-buy",v.textContent=l?"BUY":"HALTED",l?(v.title="Acquire bundle for "+rn(o),v.addEventListener("click",()=>this._buy(t)),h?(v.disabled=!0,v.title="Vault at capacity ("+ss+" units)"):u&&(v.disabled=!0,v.title="Runway short — need "+rn(o))):(v.disabled=!0,v.title="Regulatory Halt — requires ARMS "+e.arms+" (you hold "+n.cfg.ARMS+")");const O=document.createElement("button");O.type="button",O.className="sm-shop-btn sm-shop-btn-sell",O.textContent="SELL";const R=Math.round(a*this._sellbackMult());return O.title="Divest 1 unit at fire sale approx. "+rn(R),r<=0?(O.disabled=!0,O.title="No position to divest"):O.addEventListener("click",()=>this._sell(t)),S.appendChild(v),S.appendChild(O),d.appendChild(f),d.appendChild(w),d.appendChild(S),d}_metric(t,e,n){const s=document.createElement("span");s.className="m";const r=document.createElement("i");r.textContent=t;const o=document.createElement("b");return o.className=n,o.textContent=e,s.appendChild(r),s.appendChild(o),s}_buy(t){const e=de[t];if(this.economy.buy(this.tank,t))this._status("ACQUIRED x"+e.bundle+" "+Yr(t)+" — runway "+rn(this.economy.price[t])+" deployed","ok");else{const s=this.tank.inventory[t]??0;let r="DEAL BLOCKED";this.economy.available[t]??!0?s>=ss?r="VAULT AT CAPACITY ("+ss+" UNITS)":this.tank.cash<this.economy.price[t]&&(r="RUNWAY SHORT — NEED "+rn(this.economy.price[t])+", HOLD "+rn(this.tank.cash)):r="REGULATORY HALT — ARMS "+e.arms+" REQUIRED",this._status(r,"bad")}this.render()}_sell(t){const e=this.economy.sell(this.tank,t,1);e>0?this._status("DIVESTED 1x "+Yr(t)+" — +"+rn(e)+" runway","ok"):this._status("NOTHING TO DIVEST","bad"),this.render()}_status(t,e){window.clearTimeout(this._statusTimer),this.statusEl.textContent="> "+t,this.statusEl.className="sm-shop-status"+(e?" sm-shop-"+e:""),this._statusTimer=window.setTimeout(()=>{this.statusEl.textContent="",this.statusEl.className="sm-shop-status"},4e3)}}const QA=`
.sm-hud {
  position: fixed; inset: 0; z-index: 30;
  pointer-events: none;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  color: var(--sm-ink, #eaeaf6);
  user-select: none;
}
.sm-hud[hidden] { display: none; }

/* ---- tank card (top-left) ---- */
.sm-hud-tank {
  position: absolute; top: 14px; left: 14px;
  min-width: 200px;
  background: rgba(11, 11, 26, 0.82);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  border-radius: 10px;
  padding: 8px 12px 10px;
  backdrop-filter: blur(2px);
}
.sm-hud-tank-name {
  font-size: 14px; font-weight: 700; letter-spacing: 1px;
  color: var(--sm-accent, #e94560);
  text-transform: uppercase;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.sm-hud-hpbar {
  display: flex; gap: 2px; margin-top: 6px; height: 8px;
}
.sm-hud-hpseg {
  flex: 1; border-radius: 1px;
  background: rgba(255, 255, 255, 0.12);
}
.sm-hud-hpseg.sm-hud-hp-on { background: var(--sm-good, #41d9a0); }
.sm-hud-hpseg.sm-hud-hp-mid { background: var(--sm-warn, #ffb454); }
.sm-hud-hpseg.sm-hud-hp-low { background: var(--sm-accent, #e94560); }
.sm-hud-hprow { display: flex; justify-content: space-between; margin-top: 4px; font-size: 10px; color: var(--sm-muted, #8d91b5); letter-spacing: 1px; }
.sm-hud-shield {
  display: none; margin-top: 6px;
  font-size: 10px; letter-spacing: 1px; color: var(--sm-shield, #5aa7ff);
  border: 1px solid rgba(90, 167, 255, 0.4); border-radius: 6px;
  padding: 2px 8px; text-transform: uppercase; width: fit-content;
}
.sm-hud-shield.sm-hud-shield-on { display: inline-block; }
.sm-hud-destroyed {
  display: none; margin-top: 6px;
  font-size: 10px; font-weight: 700; letter-spacing: 2px;
  color: var(--sm-accent, #e94560);
}

/* ---- turn / weapon (top-right) ---- */
.sm-hud-turn {
  position: absolute; top: 14px; right: 14px;
  text-align: right;
  background: rgba(11, 11, 26, 0.82);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  border-radius: 10px;
  padding: 8px 12px 10px;
  backdrop-filter: blur(2px);
}
.sm-hud-timer {
  font-size: 26px; font-weight: 700; letter-spacing: 1px;
  color: var(--sm-ink, #eaeaf6); line-height: 1.1;
}
.sm-hud-timer.sm-hud-urgent { color: var(--sm-accent, #e94560); animation: sm-hud-blink 0.6s step-end infinite; }
@keyframes sm-hud-blink { 50% { opacity: 0.25; } }
.sm-hud-turnlabel { font-size: 10px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5); text-transform: uppercase; margin-top: 2px; }
.sm-hud-weapon {
  margin-top: 8px; font-size: 11px; letter-spacing: 1px;
  color: var(--sm-warn, #ffb454); text-transform: uppercase;
  border-top: 1px dashed var(--sm-line, rgba(234,234,246,0.14));
  padding-top: 6px; max-width: 260px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* ---- instruments (bottom-left) ---- */
.sm-hud-meters {
  position: absolute; left: 14px; bottom: 14px;
  display: flex; align-items: flex-end; gap: 14px;
  background: rgba(11, 11, 26, 0.82);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  border-radius: 10px;
  padding: 10px 12px;
  backdrop-filter: blur(2px);
}
.sm-hud-meter { display: flex; flex-direction: column; gap: 4px; }
.sm-hud-meter-label {
  font-size: 9px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5);
  text-transform: uppercase;
}
.sm-hud-meter-track {
  position: relative; height: 10px; width: 190px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.14));
  border-radius: 5px; overflow: hidden;
}
.sm-hud-meter-fill {
  position: absolute; inset: 0 auto 0 0; width: 0%;
  background: linear-gradient(90deg, var(--sm-accent, #e94560), var(--sm-warn, #ffb454));
  border-radius: 4px;
  transition: width 0.08s linear;
}
.sm-hud-meter-notch {
  position: absolute; top: 0; bottom: 0; width: 1px;
  background: rgba(255, 255, 255, 0.35);
}
.sm-hud-meter-marker {
  position: absolute; top: -2px; bottom: -2px; width: 2px;
  background: #fff; box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  transition: left 0.08s linear;
}
.sm-hud-meter-ticks {
  display: flex; justify-content: space-between;
  font-size: 8px; color: var(--sm-muted, #8d91b5); letter-spacing: 0.5px;
}
.sm-hud-meter-read {
  font-size: 16px; font-weight: 700; text-align: right;
  color: var(--sm-ink, #eaeaf6); line-height: 1;
}

/* ---- power gauge (vertical) ---- */
.sm-hud-gauge { display: flex; flex-direction: column; gap: 4px; align-items: center; }
.sm-hud-gauge-track {
  position: relative; width: 12px; height: 118px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.14));
  border-radius: 6px; overflow: hidden;
  background-image: repeating-linear-gradient(
    to top, transparent 0, transparent 27px, rgba(255,255,255,0.16) 27px, rgba(255,255,255,0.16) 28px
  );
}
.sm-hud-gauge-fill {
  position: absolute; left: 0; right: 0; bottom: 0; height: 0%;
  background: linear-gradient(to top, var(--sm-accent, #e94560), var(--sm-warn, #ffb454));
  border-radius: 5px;
  transition: height 0.08s linear;
}
.sm-hud-gauge-read {
  font-size: 13px; font-weight: 700;
  color: var(--sm-ink, #eaeaf6); line-height: 1;
}

/* ---- wind ---- */
.sm-hud-wind { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.sm-hud-wind-arrow { width: 34px; height: 20px; transition: transform 0.25s ease; }
.sm-hud-wind-arrow svg { width: 100%; height: 100%; }
.sm-hud-wind-val { font-size: 16px; font-weight: 700; line-height: 1; }
.sm-hud-wind-unit { font-size: 8px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5); text-transform: uppercase; }
.sm-hud-wind.sm-hud-calm .sm-hud-wind-arrow { opacity: 0.25; }
.sm-hud-wind.sm-hud-calm .sm-hud-wind-val { color: var(--sm-muted, #8d91b5); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;let pp=!1;function tR(){if(pp)return;const i=document.createElement("style");i.textContent=QA,document.head.appendChild(i),pp=!0}function eR(){let i=document.getElementById("ui-layer");return i||(i=document.createElement("div"),i.id="ui-layer",document.body.appendChild(i)),i}function mp(i,t,e){return i<t?t:i>e?e:i}const nR='<svg viewBox="0 0 34 20" aria-hidden="true"><path d="M3 10h24M19 3l8 7-8 7" fill="none" stroke="#e94560" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';class X_{constructor(t){g(this,"root");g(this,"tankNameEl");g(this,"tankHpRowEl");g(this,"tankHpEl");g(this,"tankShieldEl");g(this,"tankDeadEl");g(this,"hpSegs",[]);g(this,"timerEl");g(this,"turnLabelEl");g(this,"weaponEl");g(this,"angleFillEl");g(this,"angleMarkerEl");g(this,"angleReadEl");g(this,"powerFillEl");g(this,"powerReadEl");g(this,"windEl");g(this,"windArrowEl");g(this,"windValEl");g(this,"visible",!0);tR();const e=t??eR();this.root=document.createElement("div"),this.root.className="sm-hud",this.root.innerHTML=`
      <div class="sm-hud-tank">
        <div class="sm-hud-tank-name">—</div>
        <div class="sm-hud-hpbar"></div>
        <div class="sm-hud-hprow"><span>INTEGRITY</span><span class="sm-hud-hp-read">—</span></div>
        <div class="sm-hud-shield"></div>
        <div class="sm-hud-destroyed">DESTROYED — SHARES HALTED</div>
      </div>
      <div class="sm-hud-turn">
        <div class="sm-hud-timer">—</div>
        <div class="sm-hud-turnlabel">TURN</div>
        <div class="sm-hud-weapon">SEL —</div>
      </div>
      <div class="sm-hud-meters">
        <div class="sm-hud-meter sm-hud-angle">
          <div class="sm-hud-meter-label">ANGLE</div>
          <div class="sm-hud-meter-track">
            <div class="sm-hud-meter-fill"></div>
            <div class="sm-hud-meter-notch" style="left:50%"></div>
            <div class="sm-hud-meter-marker"></div>
          </div>
          <div class="sm-hud-meter-ticks"><span>0</span><span>45</span><span>90</span><span>135</span><span>180</span></div>
          <div class="sm-hud-meter-read">—</div>
        </div>
        <div class="sm-hud-gauge sm-hud-power">
          <div class="sm-hud-gauge-track"><div class="sm-hud-gauge-fill"></div></div>
          <div class="sm-hud-gauge-read">—</div>
          <div class="sm-hud-meter-label">POWER</div>
        </div>
        <div class="sm-hud-wind">
          <div class="sm-hud-meter-label">WIND</div>
          <div class="sm-hud-wind-arrow">${nR}</div>
          <div class="sm-hud-wind-val">—</div>
          <div class="sm-hud-wind-unit">KNOTS</div>
        </div>
      </div>`,this.tankNameEl=this.root.querySelector(".sm-hud-tank-name"),this.tankHpRowEl=this.root.querySelector(".sm-hud-hprow"),this.tankHpEl=this.root.querySelector(".sm-hud-hp-read"),this.tankShieldEl=this.root.querySelector(".sm-hud-shield"),this.tankDeadEl=this.root.querySelector(".sm-hud-destroyed"),this.timerEl=this.root.querySelector(".sm-hud-timer"),this.turnLabelEl=this.root.querySelector(".sm-hud-turnlabel"),this.weaponEl=this.root.querySelector(".sm-hud-weapon"),this.angleFillEl=this.root.querySelector(".sm-hud-angle .sm-hud-meter-fill"),this.angleMarkerEl=this.root.querySelector(".sm-hud-angle .sm-hud-meter-marker"),this.angleReadEl=this.root.querySelector(".sm-hud-angle .sm-hud-meter-read"),this.powerFillEl=this.root.querySelector(".sm-hud-power .sm-hud-gauge-fill"),this.powerReadEl=this.root.querySelector(".sm-hud-power .sm-hud-gauge-read"),this.windEl=this.root.querySelector(".sm-hud-wind"),this.windArrowEl=this.root.querySelector(".sm-hud-wind-arrow"),this.windValEl=this.root.querySelector(".sm-hud-wind-val");const n=this.root.querySelector(".sm-hud-hpbar");for(let s=0;s<10;s++){const r=document.createElement("div");r.className="sm-hud-hpseg",n.appendChild(r),this.hpSegs.push(r)}e.appendChild(this.root)}setVisible(t){this.visible=t,this.root.hidden=!t}destroy(){this.root.remove()}update(t){this._updateTank(t.tank??null);const e=mp(t.angle??0,0,180),n=e/180*100;this.angleFillEl.style.width=n+"%",this.angleMarkerEl.style.left=Math.min(99,n)+"%",this.angleReadEl.textContent=t.angle===void 0?"—":this._pad3(Math.round(e))+" DEG";const s=mp(t.power??0,0,1e3);this.powerFillEl.style.height=s/1e3*100+"%",this.powerReadEl.textContent=t.power===void 0?"—":String(Math.round(s));const r=t.wind??0;this.windArrowEl.style.transform=r<0?"rotate(180deg)":r>0?"rotate(0deg)":"",this.windValEl.textContent=t.wind===void 0||r===0?"CALM":String(Math.round(Math.abs(r))),this.windEl.classList.toggle("sm-hud-calm",r===0);const o=t.timeLeft;if(o==null)this.timerEl.textContent="—",this.timerEl.classList.remove("sm-hud-urgent");else{const c=Math.max(0,o);this.timerEl.textContent="T-"+(c<10?"0":"")+c.toFixed(1)+"s",this.timerEl.classList.toggle("sm-hud-urgent",c<5)}this.turnLabelEl.textContent=t.turnLabel??"TURN";let a="—";t.weaponName?a=t.weaponName:t.weaponSlot!==void 0&&t.weaponSlot!==null&&(a="#"+this._pad2(t.weaponSlot)+" "+Yr(t.weaponSlot)),this.weaponEl.textContent="SEL "+a}_updateTank(t){if(!t){this.tankNameEl.textContent="—",this.tankHpEl.textContent="—",this.tankShieldEl.classList.remove("sm-hud-shield-on"),this.tankDeadEl.style.display="none";for(const o of this.hpSegs)o.className="sm-hud-hpseg";return}this.tankNameEl.textContent=t.name||"UNKNOWN PARTY";const e=t.maxHealth&&t.maxHealth>0?t.maxHealth:100,n=Math.max(0,Math.min(e,t.health||0)),s=n/e;this.tankHpEl.textContent=Math.round(n)+" / "+Math.round(e);for(let o=0;o<this.hpSegs.length;o++){const a=(o+1)/this.hpSegs.length;let c="sm-hud-hpseg";a<=s&&(c+=s>.5?" sm-hud-hp-on":s>.25?" sm-hud-hp-mid":" sm-hud-hp-low"),this.hpSegs[o].className=c}const r=t.shieldHp??0;if(r>0){const o=t.shieldItem!==void 0&&t.shieldItem!==null?Yr(t.shieldItem):"SHIELD";this.tankShieldEl.textContent="SHLD "+Math.round(r)+" — "+o,this.tankShieldEl.classList.add("sm-hud-shield-on")}else this.tankShieldEl.classList.remove("sm-hud-shield-on");this.tankDeadEl.style.display=t.alive===!1?"block":"none"}_pad3(t){const e=String(t);return e.length>=3?e:("00"+e).slice(-3)}_pad2(t){const e=String(t);return e.length>=2?e:("0"+e).slice(-2)}}const iR=`
.sm-chat-root {
  position: fixed; right: 14px; bottom: 14px; z-index: 40;
  width: 340px; max-height: 300px;
  display: flex; flex-direction: column;
  background: rgba(11, 11, 26, 0.9);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.12));
  border-radius: 10px;
  overflow: hidden;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  color: var(--sm-ink, #eaeaf6);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
.sm-chat-root[hidden] { display: none; }

.sm-chat-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px;
  font-size: 10px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5);
  text-transform: uppercase;
  border-bottom: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  background: rgba(233, 69, 96, 0.06);
}
.sm-chat-head b { color: var(--sm-accent, #e94560); font-weight: 700; letter-spacing: 1px; }

.sm-chat-list {
  flex: 1; overflow-y: auto; padding: 8px 10px;
  font-size: 12px; line-height: 1.45;
  scrollbar-width: thin;
  scrollbar-color: rgba(233, 69, 96, 0.4) transparent;
}
.sm-chat-msg {
  display: flex; gap: 8px; padding: 2px 0;
  opacity: 1;
  animation: sm-chat-out 0.45s ease 4s forwards;
  word-break: break-word;
}
.sm-chat-who {
  flex: none; font-weight: 700; letter-spacing: 0.5px;
  text-transform: uppercase;
}
.sm-chat-tone-system .sm-chat-who { color: var(--sm-accent, #e94560); }
.sm-chat-tone-you .sm-chat-who { color: var(--sm-good, #41d9a0); }
.sm-chat-tone-them .sm-chat-who { color: var(--sm-shield, #5aa7ff); }
.sm-chat-tone-warn .sm-chat-who { color: var(--sm-warn, #ffb454); }
.sm-chat-tone-system .sm-chat-txt { color: var(--sm-muted, #8d91b5); font-style: italic; }
.sm-chat-txt { color: var(--sm-ink, #eaeaf6); }
@keyframes sm-chat-out { to { opacity: 0; } }

.sm-chat-inputrow {
  display: flex; gap: 6px; padding: 6px 8px;
  border-top: 1px solid var(--sm-line, rgba(234,234,246,0.1));
}
.sm-chat-input {
  flex: 1; min-width: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.16));
  border-radius: 6px;
  padding: 5px 8px;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  font-size: 12px; color: var(--sm-ink, #eaeaf6);
}
.sm-chat-input:focus { outline: 1px solid var(--sm-accent, #e94560); }
.sm-chat-send {
  background: var(--sm-accent, #e94560); color: #fff;
  border: none; border-radius: 6px; cursor: pointer;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  font-size: 10px; font-weight: 700; letter-spacing: 1px; padding: 0 10px;
}
.sm-chat-send:hover { filter: brightness(1.15); }

/* collapsed tab while hidden */
.sm-chat-tab {
  position: fixed; right: 14px; bottom: 14px; z-index: 40;
  background: rgba(11, 11, 26, 0.85);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.14));
  border-radius: 8px;
  padding: 6px 12px;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  font-size: 10px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5);
  cursor: pointer; text-transform: uppercase;
}
.sm-chat-tab:hover { color: var(--sm-accent, #e94560); border-color: var(--sm-accent, #e94560); }
.sm-chat-tab[hidden] { display: none; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;let _p=!1;function sR(){if(_p)return;const i=document.createElement("style");i.textContent=iR,document.head.appendChild(i),_p=!0}function rR(){let i=document.getElementById("ui-layer");return i||(i=document.createElement("div"),i.id="ui-layer",document.body.appendChild(i)),i}class q_{constructor(t={},e){g(this,"root");g(this,"tab");g(this,"list");g(this,"input");g(this,"sendBtn");g(this,"onSend");g(this,"historyLimit");g(this,"fadeDelay");g(this,"visible",!1);g(this,"rows",0);g(this,"_onKey",t=>{const e=t.key;if(e==="`"||t.code==="Backquote"){t.preventDefault(),this.toggle();return}e==="Escape"&&this.visible&&this.close()});this.onSend=t.onSend,this.historyLimit=t.historyLimit??200,this.fadeDelay=t.fadeDelay??4e3,sR();const n=e??rR();this.root=document.createElement("div"),this.root.className="sm-chat-root",this.root.hidden=!0,this.root.setAttribute("role","log"),this.root.setAttribute("aria-label","Dealroom chat"),this.root.innerHTML=`
      <div class="sm-chat-head"><b>DEALROOM FEED</b><span>press \` to toggle</span></div>
      <div class="sm-chat-list"></div>
      <div class="sm-chat-inputrow">
        <input class="sm-chat-input" type="text" maxlength="200"
               placeholder="${t.placeholder??"Type a term sheet... (Enter to send)"}" />
        <button type="button" class="sm-chat-send">SEND</button>
      </div>`,this.list=this.root.querySelector(".sm-chat-list"),this.input=this.root.querySelector(".sm-chat-input"),this.sendBtn=this.root.querySelector(".sm-chat-send"),this.tab=document.createElement("button"),this.tab.type="button",this.tab.className="sm-chat-tab",this.tab.textContent="COMMS — press `",this.tab.addEventListener("click",()=>this.open());const s=()=>{const r=this.input.value.trim();r&&(this.input.value="",this.push("You",r,"you"),this.onSend?this.onSend(r):this.push("Feed","no uplink — message dropped","warn"))};this.input.addEventListener("keydown",r=>{if(r.key==="Enter")r.preventDefault(),s();else{if(r.key==="Escape")return;r.stopPropagation()}}),this.sendBtn.addEventListener("click",s),window.addEventListener("keydown",this._onKey),n.appendChild(this.tab),n.appendChild(this.root)}toggle(){this.visible?this.close():this.open()}open(){this.visible||(this.visible=!0,this.root.hidden=!1,this.tab.hidden=!0,this.input.focus())}close(){this.visible&&(this.visible=!1,this.root.hidden=!0,this.tab.hidden=!1,this.input.blur())}get isOpen(){return this.visible}system(t){this.push("Feed",t,"system")}push(t,e,n="them"){const s=document.createElement("div");s.className="sm-chat-msg sm-chat-tone-"+n;const r=document.createElement("span");r.className="sm-chat-who",r.textContent=t+":";const o=document.createElement("span");o.className="sm-chat-txt",o.textContent=e,s.appendChild(r),s.appendChild(o),this.list.appendChild(s),this.rows+=1,this.list.scrollHeight-this.list.scrollTop-this.list.clientHeight<40&&(this.list.scrollTop=this.list.scrollHeight);const c=this.fadeDelay;for(window.setTimeout(()=>{s.style.opacity="0",s.style.transition="opacity 0.45s ease"},c),window.setTimeout(()=>{s.remove(),this.rows-=1},c+500);this.rows>this.historyLimit&&this.list.firstChild;)this.list.firstChild.remove(),this.rows-=1}history(){const t=[],e=this.list.children;for(let n=0;n<e.length;n++){const s=e[n],r=s.querySelector(".sm-chat-who"),o=s.querySelector(".sm-chat-txt");t.push({sender:r?r.textContent??"":"",text:o?o.textContent??"":"",tone:s.classList.contains("sm-chat-tone-system")?"system":s.classList.contains("sm-chat-tone-you")?"you":s.classList.contains("sm-chat-tone-warn")?"warn":"them",ts:0})}return t}clear(){this.list.textContent="",this.rows=0}destroy(){window.removeEventListener("keydown",this._onKey),this.tab.remove(),this.root.remove()}}const ll="./portraits/",oR=[["darioamodei","dario_amodei.png"],["dariomodei","dario_amodei.png"],["donaldtrump","donald_trump_tosser.png"],["donaldtrumptosser","donald_trump_tosser.png"],["trump","donald_trump_tosser.png"],["ericschmidt","eric_schmidt.png"],["grimes","grimes.png"],["jeffbezos","jeff_bezos.png"],["mackenziescott","mackenzie_scott.png"],["melaniatrump","melania_trump.png"],["richardbranson","richard_branson.png"],["samaltman","sam_altman.png"],["scamaltman","sam_altman.png"],["altman","sam_altman.png"],["talulahriley","talulah_riley.png"]],hl=["dario_amodei.png","donald_trump_tosser.png","eric_schmidt.png","grimes.png","jeff_bezos.png","mackenzie_scott.png","melania_trump.png","richard_branson.png","sam_altman.png","talulah_riley.png"];function aR(i){return i.toLowerCase().replace(/[^a-z0-9]/g,"")}function cR(i){const t=aR(i??"");if(t){for(const n of oR)if(n[0]===t)return ll+n[1];let e=0;for(let n=0;n<t.length;n++)e=e*31+t.charCodeAt(n)>>>0;return ll+hl[e%hl.length]}return ll+hl[0]}const lR=`
.sm-taunt {
  position: fixed; inset: 0; z-index: 50;
  pointer-events: none;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
}
.sm-taunt[hidden] { display: none; }
.sm-taunt-anchor {
  position: absolute; left: 0; top: 0;
  transform: translate(-50%, -100%);
  will-change: transform;
}
.sm-taunt-bubble {
  position: relative;
  display: flex; gap: 8px; align-items: center;
  max-width: 320px;
  background: rgba(11, 11, 26, 0.94);
  border: 1px solid rgba(233, 69, 96, 0.55);
  border-left: 3px solid var(--sm-accent, #e94560);
  border-radius: 10px;
  padding: 8px 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.55);
  animation: sm-taunt-in 0.18s ease-out;
}
@keyframes sm-taunt-in { from { opacity: 0; transform: translateY(6px); } }
.sm-taunt-tail {
  position: absolute; left: 50%; bottom: -6px;
  width: 10px; height: 10px;
  transform: translateX(-50%) rotate(45deg);
  background: rgba(11, 11, 26, 0.94);
  border-right: 1px solid rgba(233, 69, 96, 0.55);
  border-bottom: 1px solid rgba(233, 69, 96, 0.55);
  border-radius: 0 0 2px 0;
}
.sm-taunt-portrait {
  width: 40px; height: 40px; flex: none;
  border-radius: 7px;
  border: 1px solid var(--sm-line, rgba(234,234,246,0.2));
  object-fit: cover;
  background: var(--sm-panel, #13132b);
}
.sm-taunt-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.sm-taunt-nameplate {
  display: flex; align-items: center; gap: 6px;
  font-size: 9px; letter-spacing: 1.5px; color: var(--sm-muted, #8d91b5);
  text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.sm-taunt-live {
  display: inline-flex; align-items: center; gap: 4px;
  color: var(--sm-accent, #e94560); font-weight: 700; letter-spacing: 1px;
  flex: none;
}
.sm-taunt-live i {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--sm-accent, #e94560);
  animation: sm-taunt-pulse 1s ease-in-out infinite;
}
@keyframes sm-taunt-pulse { 50% { opacity: 0.2; } }
.sm-taunt-text {
  font-size: 12px; line-height: 1.35; color: var(--sm-ink, #eaeaf6);
  word-break: break-word;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;let gp=!1;function hR(){if(gp)return;const i=document.createElement("style");i.textContent=lR,document.head.appendChild(i),gp=!0}function uR(){let i=document.getElementById("ui-layer");return i||(i=document.createElement("div"),i.id="ui-layer",document.body.appendChild(i)),i}const xp=3e3;class Y_{constructor(t,e={}){g(this,"root");g(this,"anchor");g(this,"portraitImg");g(this,"speakerEl");g(this,"textEl");g(this,"projector");g(this,"defaultDuration");g(this,"visible",!1);g(this,"_shownAt",0);g(this,"_durationMs",xp);g(this,"_world",null);g(this,"_raf",0);g(this,"_lastTank");g(this,"_lastText","");g(this,"_lastUntil",-1);g(this,"_tick",t=>{if(!this.visible){this._raf=0;return}if(t-this._shownAt>=this._durationMs){this.hide(),this._raf=0;return}this._position(t),this._raf=requestAnimationFrame(this._tick)});this.projector=t??null,this.defaultDuration=e.durationMs??xp,hR();const n=e.container??uR();this.root=document.createElement("div"),this.root.className="sm-taunt",this.root.hidden=!0,this.root.innerHTML=`
      <div class="sm-taunt-anchor">
        <div class="sm-taunt-bubble">
          <img class="sm-taunt-portrait" alt="speaker portrait" />
          <div class="sm-taunt-body">
            <div class="sm-taunt-nameplate">
              <span class="sm-taunt-live"><i></i>LIVE</span>
              <span class="sm-taunt-speaker">—</span>
            </div>
            <div class="sm-taunt-text"></div>
          </div>
          <div class="sm-taunt-tail"></div>
        </div>
      </div>`,this.anchor=this.root.querySelector(".sm-taunt-anchor"),this.portraitImg=this.root.querySelector(".sm-taunt-portrait"),this.speakerEl=this.root.querySelector(".sm-taunt-speaker"),this.textEl=this.root.querySelector(".sm-taunt-text"),this.portraitImg.addEventListener("error",()=>{this.portraitImg.style.display="none"}),n.appendChild(this.root)}setProjector(t){this.projector=t}show(t,e={}){const n=(t??"").trim();if(!n){this.hide();return}this.textEl.textContent=n,this.speakerEl.textContent=e.speaker??"MARKET PARTICIPANT",this.portraitImg.style.display="",this.portraitImg.src=e.portraitUrl??cR(e.speaker),this._world=e.world??null,this._durationMs=e.durationMs??this.defaultDuration,this._shownAt=performance.now(),this.visible?this._position(performance.now()):(this.visible=!0,this.root.hidden=!1,this._startLoop())}sync(t,e){const n=t&&t.speech?t.speech:null;if(!n||!n.text){this._lastTank=void 0,this._lastText="",this._lastUntil=-1,this.hide();return}n.tank===this._lastTank&&n.text===this._lastText&&n.until_frame===this._lastUntil||(this._lastTank=n.tank,this._lastText=n.text,this._lastUntil=n.until_frame,this.show(n.text,{world:e?e(n.tank)??void 0:void 0,speaker:dR(n.tank)}))}hide(){this.visible&&(this.visible=!1,this.root.hidden=!0,this._world=null,this._stopLoop())}setVisible(t){t?!this.visible&&this.textEl.textContent&&(this._shownAt=performance.now(),this.visible=!0,this.root.hidden=!1,this._startLoop()):this.hide()}get isVisible(){return this.visible}destroy(){this._stopLoop(),this.root.remove()}_startLoop(){this._raf||(this._raf=requestAnimationFrame(this._tick))}_stopLoop(){this._raf&&(cancelAnimationFrame(this._raf),this._raf=0)}_position(t){if(!this._world||!this.projector)return;const e=this.projector(this._world);if(!e){this.hide();return}const n=14,s=yp(e.x,n,window.innerWidth-n),r=yp(e.y,n,window.innerHeight-n);this.anchor.style.transform="translate("+s+"px,"+r+"px) translate(-50%, -100%)"}}function yp(i,t,e){return i<t?t:i>e?e:i}function dR(i){if(i&&typeof i=="object"){const t=i.name;if(typeof t=="string"&&t)return t}}const K_=document.getElementById("ui-layer");function fR(i,t,e){const n=document.createElement("div");n.id="menu-standings";const s=i.map((r,o)=>`<tr style="${o===0?"color:#ffd700;font-weight:700;":""}">
      <td style="padding:8px 16px;">#${r.rank}</td>
      <td style="padding:8px 16px;">${r.name}</td>
      <td style="padding:8px 16px;">${r.score}</td>
      <td style="padding:8px 16px;">${r.alive?"✓":"☠"}</td>
    </tr>`).join("");return n.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;background:#0b0b1aee;color:#eee;font-family:system-ui,sans-serif;">
      <h2 style="color:#e94560;font-size:28px;margin-bottom:8px;">Round ${t+1} Rankings</h2>
      <table style="border-collapse:collapse;font-size:18px;margin:20px 0;">${s}</table>
      <button id="btn-continue" style="margin-top:20px;padding:14px 48px;font-size:20px;background:#e94560;color:#fff;
        border:none;border-radius:8px;cursor:pointer;font-weight:700;">CONTINUE</button>
    </div>`,K_.appendChild(n),n.querySelector("#btn-continue").addEventListener("click",()=>{n.remove(),e()}),n}function pR(i,t,e,n){const s=document.createElement("div");return s.id="menu-gameover",s.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;background:radial-gradient(ellipse at center,#1a0a0a 0%,#000 80%);
      font-family:system-ui,sans-serif;color:#fff;">
      <h1 style="font-size:56px;color:#ffd700;letter-spacing:6px;margin:0;">
        ${e==="Mars"?"TOTAL MARTIAN DOMINATION":"GAME OVER"}
      </h1>
      <h2 style="font-size:32px;color:#e94560;margin:16px 0;">${i} Wins!</h2>
      <p style="color:#aaa;font-size:18px;">Final Score: ${t}</p>
      <p style="color:#888;">Conquered: ${e}</p>
      <button id="btn-restart" style="margin-top:40px;padding:16px 64px;font-size:22px;background:#e94560;color:#fff;
        border:none;border-radius:8px;cursor:pointer;font-weight:700;">PLAY AGAIN</button>
    </div>`,K_.appendChild(s),s.querySelector("#btn-restart").addEventListener("click",()=>{s.remove(),n()}),s}const vp=1,mR=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social","wss://relay.primal.net","wss://nostr.mom","wss://nostr.einundzwanzig.space","wss://yabu.me","wss://nostr.oxtr.dev","wss://relay.mostr.pub","wss://soloco.nl","wss://nostr.data.haus","wss://relay.nostr.net","wss://relay.noswhere.com"],_R=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302","stun:stun.cloudflare.com:3478"]}],gR=[];function xR(){try{const t=new URLSearchParams(typeof location<"u"?location.search:"").get("turn");if(!t)return[];const e=JSON.parse(atob(t));return Array.isArray(e)?e:[e]}catch{return[]}}function yR(){return{iceServers:[..._R,...gR,...xR()]}}const lo=20078,vR=30078,bR=30078,MR="scorch",ER={ordered:!0},ul=5e3,wR=15e3,bp=2e3,$_="tslTtEErFjpf4JWCsMu9VbLymvaYsy4d4Dr0xHNSp1A=";let Z_=null;function SR(i){Z_=i&&i.length>0?i:null}function cs(){return Z_??mR}const Mp="se-multi-did";function Aa(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function TR(){let i=null;try{i=localStorage.getItem(Mp)}catch{i=null}if(!i){i=Aa()+"-"+Aa();try{localStorage.setItem(Mp,i)}catch{}}return i}const fe=typeof window<"u"?TR():"node";async function AR(i){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(i));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function RR(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"}function mu(i,t=""){if(!Number.isSafeInteger(i)||i<0){const e=t&&`"${t}" `;throw new Error(`${e}expected integer >= 0, got ${i}`)}}function Ye(i,t,e=""){const n=RR(i),s=i?.length,r=t!==void 0;if(!n||r&&s!==t){const o=e&&`"${e}" `,a=r?` of length ${t}`:"",c=n?`length=${s}`:`type=${typeof i}`;throw new Error(o+"expected Uint8Array"+a+", got "+c)}return i}function Ep(i,t=!0){if(i.destroyed)throw new Error("Hash instance has been destroyed");if(t&&i.finished)throw new Error("Hash#digest() has already been called")}function CR(i,t){Ye(i,void 0,"digestInto() output");const e=t.outputLen;if(i.length<e)throw new Error('"digestInto() output" expected to be of length >='+e)}function Th(...i){for(let t=0;t<i.length;t++)i[t].fill(0)}function dl(i){return new DataView(i.buffer,i.byteOffset,i.byteLength)}function Dn(i,t){return i<<32-t|i>>>t}const J_=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",LR=Array.from({length:256},(i,t)=>t.toString(16).padStart(2,"0"));function In(i){if(Ye(i),J_)return i.toHex();let t="";for(let e=0;e<i.length;e++)t+=LR[i[e]];return t}const si={_0:48,_9:57,A:65,F:70,a:97,f:102};function wp(i){if(i>=si._0&&i<=si._9)return i-si._0;if(i>=si.A&&i<=si.F)return i-(si.A-10);if(i>=si.a&&i<=si.f)return i-(si.a-10)}function Gn(i){if(typeof i!="string")throw new Error("hex string expected, got "+typeof i);if(J_)return Uint8Array.fromHex(i);const t=i.length,e=t/2;if(t%2)throw new Error("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(e);for(let s=0,r=0;s<e;s++,r+=2){const o=wp(i.charCodeAt(r)),a=wp(i.charCodeAt(r+1));if(o===void 0||a===void 0){const c=i[r]+i[r+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+r)}n[s]=o*16+a}return n}function Ra(...i){let t=0;for(let n=0;n<i.length;n++){const s=i[n];Ye(s),t+=s.length}const e=new Uint8Array(t);for(let n=0,s=0;n<i.length;n++){const r=i[n];e.set(r,s),s+=r.length}return e}function IR(i,t={}){const e=(s,r)=>i(r).update(s).digest(),n=i(void 0);return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=s=>i(s),Object.assign(e,t),Object.freeze(e)}function j_(i=32){const t=typeof globalThis=="object"?globalThis.crypto:null;if(typeof t?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");return t.getRandomValues(new Uint8Array(i))}const PR=i=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,i])});function NR(i,t,e){return i&t^~i&e}function DR(i,t,e){return i&t^i&e^t&e}class UR{constructor(t,e,n,s){g(this,"blockLen");g(this,"outputLen");g(this,"padOffset");g(this,"isLE");g(this,"buffer");g(this,"view");g(this,"finished",!1);g(this,"length",0);g(this,"pos",0);g(this,"destroyed",!1);this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=s,this.buffer=new Uint8Array(t),this.view=dl(this.buffer)}update(t){Ep(this),Ye(t);const{view:e,buffer:n,blockLen:s}=this,r=t.length;for(let o=0;o<r;){const a=Math.min(s-this.pos,r-o);if(a===s){const c=dl(t);for(;s<=r-o;o+=s)this.process(c,o);continue}n.set(t.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Ep(this),CR(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:s,isLE:r}=this;let{pos:o}=this;e[o++]=128,Th(this.buffer.subarray(o)),this.padOffset>s-o&&(this.process(n,0),o=0);for(let u=o;u<s;u++)e[u]=0;n.setBigUint64(s-8,BigInt(this.length*8),r),this.process(n,0);const a=dl(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen must be aligned to 32bit");const l=c/4,h=this.get();if(l>h.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<l;u++)a.setUint32(4*u,h[u],r)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:s,finished:r,destroyed:o,pos:a}=this;return t.destroyed=o,t.finished=r,t.length=s,t.pos=a,s%e&&t.buffer.set(n),t}clone(){return this._cloneInto()}}const Ii=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),OR=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Pi=new Uint32Array(64);class FR extends UR{constructor(t){super(64,t,8,!1)}get(){const{A:t,B:e,C:n,D:s,E:r,F:o,G:a,H:c}=this;return[t,e,n,s,r,o,a,c]}set(t,e,n,s,r,o,a,c){this.A=t|0,this.B=e|0,this.C=n|0,this.D=s|0,this.E=r|0,this.F=o|0,this.G=a|0,this.H=c|0}process(t,e){for(let u=0;u<16;u++,e+=4)Pi[u]=t.getUint32(e,!1);for(let u=16;u<64;u++){const d=Pi[u-15],f=Pi[u-2],m=Dn(d,7)^Dn(d,18)^d>>>3,x=Dn(f,17)^Dn(f,19)^f>>>10;Pi[u]=x+Pi[u-7]+m+Pi[u-16]|0}let{A:n,B:s,C:r,D:o,E:a,F:c,G:l,H:h}=this;for(let u=0;u<64;u++){const d=Dn(a,6)^Dn(a,11)^Dn(a,25),f=h+d+NR(a,c,l)+OR[u]+Pi[u]|0,x=(Dn(n,2)^Dn(n,13)^Dn(n,22))+DR(n,s,r)|0;h=l,l=c,c=a,a=o+f|0,o=r,r=s,s=n,n=f+x|0}n=n+this.A|0,s=s+this.B|0,r=r+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,h=h+this.H|0,this.set(n,s,r,o,a,c,l,h)}roundClean(){Th(Pi)}destroy(){this.set(0,0,0,0,0,0,0,0),Th(this.buffer)}}class kR extends FR{constructor(){super(32);g(this,"A",Ii[0]|0);g(this,"B",Ii[1]|0);g(this,"C",Ii[2]|0);g(this,"D",Ii[3]|0);g(this,"E",Ii[4]|0);g(this,"F",Ii[5]|0);g(this,"G",Ii[6]|0);g(this,"H",Ii[7]|0)}}const Ca=IR(()=>new kR,PR(1));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _u=BigInt(0),Ah=BigInt(1);function Sp(i,t=""){if(typeof i!="boolean"){const e=t&&`"${t}" `;throw new Error(e+"expected boolean, got type="+typeof i)}return i}function BR(i){if(typeof i=="bigint"){if(!VR(i))throw new Error("positive bigint expected, got "+i)}else mu(i);return i}function Q_(i){if(typeof i!="string")throw new Error("hex string expected, got "+typeof i);return i===""?_u:BigInt("0x"+i)}function gu(i){return Q_(In(i))}function tg(i){return Q_(In(HR(Ye(i)).reverse()))}function xu(i,t){mu(t),i=BR(i);const e=Gn(i.toString(16).padStart(t*2,"0"));if(e.length!==t)throw new Error("number too large");return e}function eg(i,t){return xu(i,t).reverse()}function HR(i){return Uint8Array.from(i)}function zR(i){return Uint8Array.from(i,(t,e)=>{const n=t.charCodeAt(0);if(t.length!==1||n>127)throw new Error(`string contains non-ASCII character "${i[e]}" with code ${n} at position ${e}`);return n})}const VR=i=>typeof i=="bigint"&&_u<=i;function GR(i){let t;for(t=0;i>_u;i>>=Ah,t+=1);return t}const ng=i=>(Ah<<BigInt(i))-Ah;function ig(i,t={},e={}){if(!i||typeof i!="object")throw new Error("expected valid options object");function n(r,o,a){const c=i[r];if(a&&c===void 0)return;const l=typeof c;if(l!==o||c===null)throw new Error(`param "${r}" is invalid: expected ${o}, got ${l}`)}const s=(r,o)=>Object.entries(r).forEach(([a,c])=>n(a,c,o));s(t,!1),s(e,!0)}function Tp(i){const t=new WeakMap;return(e,...n)=>{const s=t.get(e);if(s!==void 0)return s;const r=i(e,...n);return t.set(e,r),r}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const We=BigInt(0),Be=BigInt(1),rs=BigInt(2),sg=BigInt(3),rg=BigInt(4),og=BigInt(5),WR=BigInt(7),ag=BigInt(8),XR=BigInt(9),cg=BigInt(16);function En(i,t){const e=i%t;return e>=We?e:t+e}function on(i,t,e){let n=i;for(;t-- >We;)n*=n,n%=e;return n}function Ap(i,t){if(i===We)throw new Error("invert: expected non-zero number");if(t<=We)throw new Error("invert: expected positive modulus, got "+t);let e=En(i,t),n=t,s=We,r=Be;for(;e!==We;){const a=n/e,c=n%e,l=s-r*a;n=e,e=c,s=r,r=l}if(n!==Be)throw new Error("invert: does not exist");return En(s,t)}function yu(i,t,e){if(!i.eql(i.sqr(t),e))throw new Error("Cannot find square root")}function lg(i,t){const e=(i.ORDER+Be)/rg,n=i.pow(t,e);return yu(i,n,t),n}function qR(i,t){const e=(i.ORDER-og)/ag,n=i.mul(t,rs),s=i.pow(n,e),r=i.mul(t,s),o=i.mul(i.mul(r,rs),s),a=i.mul(r,i.sub(o,i.ONE));return yu(i,a,t),a}function YR(i){const t=Qa(i),e=hg(i),n=e(t,t.neg(t.ONE)),s=e(t,n),r=e(t,t.neg(n)),o=(i+WR)/cg;return(a,c)=>{let l=a.pow(c,o),h=a.mul(l,n);const u=a.mul(l,s),d=a.mul(l,r),f=a.eql(a.sqr(h),c),m=a.eql(a.sqr(u),c);l=a.cmov(l,h,f),h=a.cmov(d,u,m);const x=a.eql(a.sqr(h),c),_=a.cmov(l,h,x);return yu(a,_,c),_}}function hg(i){if(i<sg)throw new Error("sqrt is not defined for small field");let t=i-Be,e=0;for(;t%rs===We;)t/=rs,e++;let n=rs;const s=Qa(i);for(;Rp(s,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(e===1)return lg;let r=s.pow(n,t);const o=(t+Be)/rs;return function(c,l){if(c.is0(l))return l;if(Rp(c,l)!==1)throw new Error("Cannot find square root");let h=e,u=c.mul(c.ONE,r),d=c.pow(l,t),f=c.pow(l,o);for(;!c.eql(d,c.ONE);){if(c.is0(d))return c.ZERO;let m=1,x=c.sqr(d);for(;!c.eql(x,c.ONE);)if(m++,x=c.sqr(x),m===h)throw new Error("Cannot find square root");const _=Be<<BigInt(h-m-1),p=c.pow(u,_);h=m,u=c.sqr(p),d=c.mul(d,u),f=c.mul(f,p)}return f}}function KR(i){return i%rg===sg?lg:i%ag===og?qR:i%cg===XR?YR(i):hg(i)}const $R=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ZR(i){const t={ORDER:"bigint",BYTES:"number",BITS:"number"},e=$R.reduce((n,s)=>(n[s]="function",n),t);return ig(i,e),i}function JR(i,t,e){if(e<We)throw new Error("invalid exponent, negatives unsupported");if(e===We)return i.ONE;if(e===Be)return t;let n=i.ONE,s=t;for(;e>We;)e&Be&&(n=i.mul(n,s)),s=i.sqr(s),e>>=Be;return n}function ug(i,t,e=!1){const n=new Array(t.length).fill(e?i.ZERO:void 0),s=t.reduce((o,a,c)=>i.is0(a)?o:(n[c]=o,i.mul(o,a)),i.ONE),r=i.inv(s);return t.reduceRight((o,a,c)=>i.is0(a)?o:(n[c]=i.mul(o,n[c]),i.mul(o,a)),r),n}function Rp(i,t){const e=(i.ORDER-Be)/rs,n=i.pow(t,e),s=i.eql(n,i.ONE),r=i.eql(n,i.ZERO),o=i.eql(n,i.neg(i.ONE));if(!s&&!r&&!o)throw new Error("invalid Legendre symbol result");return s?1:r?0:-1}function jR(i,t){t!==void 0&&mu(t);const e=t!==void 0?t:i.toString(2).length,n=Math.ceil(e/8);return{nBitLength:e,nByteLength:n}}class QR{constructor(t,e={}){g(this,"ORDER");g(this,"BITS");g(this,"BYTES");g(this,"isLE");g(this,"ZERO",We);g(this,"ONE",Be);g(this,"_lengths");g(this,"_sqrt");g(this,"_mod");if(t<=We)throw new Error("invalid field: expected ORDER > 0, got "+t);let n;this.isLE=!1,e!=null&&typeof e=="object"&&(typeof e.BITS=="number"&&(n=e.BITS),typeof e.sqrt=="function"&&(this.sqrt=e.sqrt),typeof e.isLE=="boolean"&&(this.isLE=e.isLE),e.allowedLengths&&(this._lengths=e.allowedLengths?.slice()),typeof e.modFromBytes=="boolean"&&(this._mod=e.modFromBytes));const{nBitLength:s,nByteLength:r}=jR(t,n);if(r>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=t,this.BITS=s,this.BYTES=r,this._sqrt=void 0,Object.preventExtensions(this)}create(t){return En(t,this.ORDER)}isValid(t){if(typeof t!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof t);return We<=t&&t<this.ORDER}is0(t){return t===We}isValidNot0(t){return!this.is0(t)&&this.isValid(t)}isOdd(t){return(t&Be)===Be}neg(t){return En(-t,this.ORDER)}eql(t,e){return t===e}sqr(t){return En(t*t,this.ORDER)}add(t,e){return En(t+e,this.ORDER)}sub(t,e){return En(t-e,this.ORDER)}mul(t,e){return En(t*e,this.ORDER)}pow(t,e){return JR(this,t,e)}div(t,e){return En(t*Ap(e,this.ORDER),this.ORDER)}sqrN(t){return t*t}addN(t,e){return t+e}subN(t,e){return t-e}mulN(t,e){return t*e}inv(t){return Ap(t,this.ORDER)}sqrt(t){return this._sqrt||(this._sqrt=KR(this.ORDER)),this._sqrt(this,t)}toBytes(t){return this.isLE?eg(t,this.BYTES):xu(t,this.BYTES)}fromBytes(t,e=!1){Ye(t);const{_lengths:n,BYTES:s,isLE:r,ORDER:o,_mod:a}=this;if(n){if(!n.includes(t.length)||t.length>s)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+t.length);const l=new Uint8Array(s);l.set(t,r?0:l.length-t.length),t=l}if(t.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+t.length);let c=r?tg(t):gu(t);if(a&&(c=En(c,o)),!e&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(t){return ug(this,t)}cmov(t,e,n){return n?e:t}}function Qa(i,t={}){return new QR(i,t)}function dg(i){if(typeof i!="bigint")throw new Error("field order must be bigint");const t=i.toString(2).length;return Math.ceil(t/8)}function tC(i){const t=dg(i);return t+Math.ceil(t/2)}function eC(i,t,e=!1){Ye(i);const n=i.length,s=dg(t),r=tC(t);if(n<16||n<r||n>1024)throw new Error("expected "+r+"-1024 bytes of input, got "+n);const o=e?tg(i):gu(i),a=En(o,t-Be)+Be;return e?eg(a,s):xu(a,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const rr=BigInt(0),os=BigInt(1);function La(i,t){const e=t.negate();return i?e:t}function Cp(i,t){const e=ug(i.Fp,t.map(n=>n.Z));return t.map((n,s)=>i.fromAffine(n.toAffine(e[s])))}function fg(i,t){if(!Number.isSafeInteger(i)||i<=0||i>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+i)}function fl(i,t){fg(i,t);const e=Math.ceil(t/i)+1,n=2**(i-1),s=2**i,r=ng(i),o=BigInt(i);return{windows:e,windowSize:n,mask:r,maxNumber:s,shiftBy:o}}function Lp(i,t,e){const{windowSize:n,mask:s,maxNumber:r,shiftBy:o}=e;let a=Number(i&s),c=i>>o;a>n&&(a-=r,c+=os);const l=t*n,h=l+Math.abs(a)-1,u=a===0,d=a<0,f=t%2!==0;return{nextN:c,offset:h,isZero:u,isNeg:d,isNegF:f,offsetF:l}}const pl=new WeakMap,pg=new WeakMap;function ml(i){return pg.get(i)||1}function Ip(i){if(i!==rr)throw new Error("invalid wNAF")}class nC{constructor(t,e){g(this,"BASE");g(this,"ZERO");g(this,"Fn");g(this,"bits");this.BASE=t.BASE,this.ZERO=t.ZERO,this.Fn=t.Fn,this.bits=e}_unsafeLadder(t,e,n=this.ZERO){let s=t;for(;e>rr;)e&os&&(n=n.add(s)),s=s.double(),e>>=os;return n}precomputeWindow(t,e){const{windows:n,windowSize:s}=fl(e,this.bits),r=[];let o=t,a=o;for(let c=0;c<n;c++){a=o,r.push(a);for(let l=1;l<s;l++)a=a.add(o),r.push(a);o=a.double()}return r}wNAF(t,e,n){if(!this.Fn.isValid(n))throw new Error("invalid scalar");let s=this.ZERO,r=this.BASE;const o=fl(t,this.bits);for(let a=0;a<o.windows;a++){const{nextN:c,offset:l,isZero:h,isNeg:u,isNegF:d,offsetF:f}=Lp(n,a,o);n=c,h?r=r.add(La(d,e[f])):s=s.add(La(u,e[l]))}return Ip(n),{p:s,f:r}}wNAFUnsafe(t,e,n,s=this.ZERO){const r=fl(t,this.bits);for(let o=0;o<r.windows&&n!==rr;o++){const{nextN:a,offset:c,isZero:l,isNeg:h}=Lp(n,o,r);if(n=a,!l){const u=e[c];s=s.add(h?u.negate():u)}}return Ip(n),s}getPrecomputes(t,e,n){let s=pl.get(e);return s||(s=this.precomputeWindow(e,t),t!==1&&(typeof n=="function"&&(s=n(s)),pl.set(e,s))),s}cached(t,e,n){const s=ml(t);return this.wNAF(s,this.getPrecomputes(s,t,n),e)}unsafe(t,e,n,s){const r=ml(t);return r===1?this._unsafeLadder(t,e,s):this.wNAFUnsafe(r,this.getPrecomputes(r,t,n),e,s)}createCache(t,e){fg(e,this.bits),pg.set(t,e),pl.delete(t)}hasCache(t){return ml(t)!==1}}function iC(i,t,e,n){let s=t,r=i.ZERO,o=i.ZERO;for(;e>rr||n>rr;)e&os&&(r=r.add(s)),n&os&&(o=o.add(s)),s=s.double(),e>>=os,n>>=os;return{p1:r,p2:o}}function Pp(i,t,e){if(t){if(t.ORDER!==i)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return ZR(t),t}else return Qa(i,{isLE:e})}function sC(i,t,e={},n){if(n===void 0&&(n=i==="edwards"),!t||typeof t!="object")throw new Error(`expected valid ${i} CURVE object`);for(const c of["p","n","h"]){const l=t[c];if(!(typeof l=="bigint"&&l>rr))throw new Error(`CURVE.${c} must be positive bigint`)}const s=Pp(t.p,e.Fp,n),r=Pp(t.n,e.Fn,n),a=["Gx","Gy","a","b"];for(const c of a)if(!s.isValid(t[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:s,Fn:r}}function rC(i,t){return function(n){const s=i(n);return{secretKey:s,publicKey:t(s)}}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Np=(i,t)=>(i+(i>=0?t:-t)/aC)/t;function oC(i,t,e){const[[n,s],[r,o]]=t,a=Np(o*i,e),c=Np(-s*i,e);let l=i-a*n-c*r,h=-a*s-c*o;const u=l<Gr,d=h<Gr;u&&(l=-l),d&&(h=-h);const f=ng(Math.ceil(GR(e)/2))+da;if(l<Gr||l>=f||h<Gr||h>=f)throw new Error("splitScalar (endomorphism): failed, k="+i);return{k1neg:u,k1:l,k2neg:d,k2:h}}const Gr=BigInt(0),da=BigInt(1),aC=BigInt(2),Qo=BigInt(3),cC=BigInt(4);function lC(i,t={}){const e=sC("weierstrass",i,t),{Fp:n,Fn:s}=e;let r=e.CURVE;const{h:o,n:a}=r;ig(t,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object"});const{endo:c}=t;if(c&&(!n.is0(r.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const l=uC(n,s);function h(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function u(k,L,B){const{x:z,y:q}=L.toAffine(),V=n.toBytes(z);if(Sp(B,"isCompressed"),B){h();const j=!n.isOdd(q);return Ra(hC(j),V)}else return Ra(Uint8Array.of(4),V,n.toBytes(q))}function d(k){Ye(k,void 0,"Point");const{publicKey:L,publicKeyUncompressed:B}=l,z=k.length,q=k[0],V=k.subarray(1);if(z===L&&(q===2||q===3)){const j=n.fromBytes(V);if(!n.isValid(j))throw new Error("bad point: is not on curve, wrong x");const et=x(j);let nt;try{nt=n.sqrt(et)}catch(K){const Q=K instanceof Error?": "+K.message:"";throw new Error("bad point: is not on curve, sqrt error"+Q)}h();const dt=n.isOdd(nt);return(q&1)===1!==dt&&(nt=n.neg(nt)),{x:j,y:nt}}else if(z===B&&q===4){const j=n.BYTES,et=n.fromBytes(V.subarray(0,j)),nt=n.fromBytes(V.subarray(j,j*2));if(!_(et,nt))throw new Error("bad point: is not on curve");return{x:et,y:nt}}else throw new Error(`bad point: got length ${z}, expected compressed=${L} or uncompressed=${B}`)}const f=t.toBytes||u,m=t.fromBytes||d;function x(k){const L=n.sqr(k),B=n.mul(L,k);return n.add(n.add(B,n.mul(k,r.a)),r.b)}function _(k,L){const B=n.sqr(L),z=x(k);return n.eql(B,z)}if(!_(r.Gx,r.Gy))throw new Error("bad curve params: generator point");const p=n.mul(n.pow(r.a,Qo),cC),w=n.mul(n.sqr(r.b),BigInt(27));if(n.is0(n.add(p,w)))throw new Error("bad curve params: a or b");function S(k,L,B=!1){if(!n.isValid(L)||B&&n.is0(L))throw new Error(`bad point coordinate ${k}`);return L}function v(k){if(!(k instanceof E))throw new Error("Weierstrass Point expected")}function O(k){if(!c||!c.basises)throw new Error("no endo");return oC(k,c.basises,s.ORDER)}const R=Tp((k,L)=>{const{X:B,Y:z,Z:q}=k;if(n.eql(q,n.ONE))return{x:B,y:z};const V=k.is0();L==null&&(L=V?n.ONE:n.inv(q));const j=n.mul(B,L),et=n.mul(z,L),nt=n.mul(q,L);if(V)return{x:n.ZERO,y:n.ZERO};if(!n.eql(nt,n.ONE))throw new Error("invZ was invalid");return{x:j,y:et}}),A=Tp(k=>{if(k.is0()){if(t.allowInfinityPoint&&!n.is0(k.Y))return;throw new Error("bad point: ZERO")}const{x:L,y:B}=k.toAffine();if(!n.isValid(L)||!n.isValid(B))throw new Error("bad point: x or y not field elements");if(!_(L,B))throw new Error("bad point: equation left != right");if(!k.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function N(k,L,B,z,q){return B=new E(n.mul(B.X,k),B.Y,B.Z),L=La(z,L),B=La(q,B),L.add(B)}const H=class H{constructor(L,B,z){g(this,"X");g(this,"Y");g(this,"Z");this.X=S("x",L),this.Y=S("y",B,!0),this.Z=S("z",z),Object.freeze(this)}static CURVE(){return r}static fromAffine(L){const{x:B,y:z}=L||{};if(!L||!n.isValid(B)||!n.isValid(z))throw new Error("invalid affine point");if(L instanceof H)throw new Error("projective point not allowed");return n.is0(B)&&n.is0(z)?H.ZERO:new H(B,z,n.ONE)}static fromBytes(L){const B=H.fromAffine(m(Ye(L,void 0,"point")));return B.assertValidity(),B}static fromHex(L){return H.fromBytes(Gn(L))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(L=8,B=!0){return C.createCache(this,L),B||this.multiply(Qo),this}assertValidity(){A(this)}hasEvenY(){const{y:L}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(L)}equals(L){v(L);const{X:B,Y:z,Z:q}=this,{X:V,Y:j,Z:et}=L,nt=n.eql(n.mul(B,et),n.mul(V,q)),dt=n.eql(n.mul(z,et),n.mul(j,q));return nt&&dt}negate(){return new H(this.X,n.neg(this.Y),this.Z)}double(){const{a:L,b:B}=r,z=n.mul(B,Qo),{X:q,Y:V,Z:j}=this;let et=n.ZERO,nt=n.ZERO,dt=n.ZERO,bt=n.mul(q,q),K=n.mul(V,V),Q=n.mul(j,j),rt=n.mul(q,V);return rt=n.add(rt,rt),dt=n.mul(q,j),dt=n.add(dt,dt),et=n.mul(L,dt),nt=n.mul(z,Q),nt=n.add(et,nt),et=n.sub(K,nt),nt=n.add(K,nt),nt=n.mul(et,nt),et=n.mul(rt,et),dt=n.mul(z,dt),Q=n.mul(L,Q),rt=n.sub(bt,Q),rt=n.mul(L,rt),rt=n.add(rt,dt),dt=n.add(bt,bt),bt=n.add(dt,bt),bt=n.add(bt,Q),bt=n.mul(bt,rt),nt=n.add(nt,bt),Q=n.mul(V,j),Q=n.add(Q,Q),bt=n.mul(Q,rt),et=n.sub(et,bt),dt=n.mul(Q,K),dt=n.add(dt,dt),dt=n.add(dt,dt),new H(et,nt,dt)}add(L){v(L);const{X:B,Y:z,Z:q}=this,{X:V,Y:j,Z:et}=L;let nt=n.ZERO,dt=n.ZERO,bt=n.ZERO;const K=r.a,Q=n.mul(r.b,Qo);let rt=n.mul(B,V),ot=n.mul(z,j),gt=n.mul(q,et),At=n.add(B,z),wt=n.add(V,j);At=n.mul(At,wt),wt=n.add(rt,ot),At=n.sub(At,wt),wt=n.add(B,q);let Wt=n.add(V,et);return wt=n.mul(wt,Wt),Wt=n.add(rt,gt),wt=n.sub(wt,Wt),Wt=n.add(z,q),nt=n.add(j,et),Wt=n.mul(Wt,nt),nt=n.add(ot,gt),Wt=n.sub(Wt,nt),bt=n.mul(K,wt),nt=n.mul(Q,gt),bt=n.add(nt,bt),nt=n.sub(ot,bt),bt=n.add(ot,bt),dt=n.mul(nt,bt),ot=n.add(rt,rt),ot=n.add(ot,rt),gt=n.mul(K,gt),wt=n.mul(Q,wt),ot=n.add(ot,gt),gt=n.sub(rt,gt),gt=n.mul(K,gt),wt=n.add(wt,gt),rt=n.mul(ot,wt),dt=n.add(dt,rt),rt=n.mul(Wt,wt),nt=n.mul(At,nt),nt=n.sub(nt,rt),rt=n.mul(At,ot),bt=n.mul(Wt,bt),bt=n.add(bt,rt),new H(nt,dt,bt)}subtract(L){return this.add(L.negate())}is0(){return this.equals(H.ZERO)}multiply(L){const{endo:B}=t;if(!s.isValidNot0(L))throw new Error("invalid scalar: out of range");let z,q;const V=j=>C.cached(this,j,et=>Cp(H,et));if(B){const{k1neg:j,k1:et,k2neg:nt,k2:dt}=O(L),{p:bt,f:K}=V(et),{p:Q,f:rt}=V(dt);q=K.add(rt),z=N(B.beta,bt,Q,j,nt)}else{const{p:j,f:et}=V(L);z=j,q=et}return Cp(H,[z,q])[0]}multiplyUnsafe(L){const{endo:B}=t,z=this;if(!s.isValid(L))throw new Error("invalid scalar: out of range");if(L===Gr||z.is0())return H.ZERO;if(L===da)return z;if(C.hasCache(this))return this.multiply(L);if(B){const{k1neg:q,k1:V,k2neg:j,k2:et}=O(L),{p1:nt,p2:dt}=iC(H,z,V,et);return N(B.beta,nt,dt,q,j)}else return C.unsafe(z,L)}toAffine(L){return R(this,L)}isTorsionFree(){const{isTorsionFree:L}=t;return o===da?!0:L?L(H,this):C.unsafe(this,a).is0()}clearCofactor(){const{clearCofactor:L}=t;return o===da?this:L?L(H,this):this.multiplyUnsafe(o)}isSmallOrder(){return this.multiplyUnsafe(o).is0()}toBytes(L=!0){return Sp(L,"isCompressed"),this.assertValidity(),f(H,this,L)}toHex(L=!0){return In(this.toBytes(L))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}};g(H,"BASE",new H(r.Gx,r.Gy,n.ONE)),g(H,"ZERO",new H(n.ZERO,n.ONE,n.ZERO)),g(H,"Fp",n),g(H,"Fn",s);let E=H;const M=s.BITS,C=new nC(E,t.endo?Math.ceil(M/2):M);return E.BASE.precompute(8),E}function hC(i){return Uint8Array.of(i?2:3)}function uC(i,t){return{secretKey:t.BYTES,publicKey:1+i.BYTES,publicKeyUncompressed:1+2*i.BYTES,publicKeyHasPrefix:!0,signature:2*t.BYTES}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const tc={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},dC={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},fC=BigInt(0),Rh=BigInt(2);function pC(i){const t=tc.p,e=BigInt(3),n=BigInt(6),s=BigInt(11),r=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=i*i*i%t,h=l*l*i%t,u=on(h,e,t)*h%t,d=on(u,e,t)*h%t,f=on(d,Rh,t)*l%t,m=on(f,s,t)*f%t,x=on(m,r,t)*m%t,_=on(x,a,t)*x%t,p=on(_,c,t)*_%t,w=on(p,a,t)*x%t,S=on(w,e,t)*h%t,v=on(S,o,t)*m%t,O=on(v,n,t)*l%t,R=on(O,Rh,t);if(!Ia.eql(Ia.sqr(R),i))throw new Error("Cannot find square root");return R}const Ia=Qa(tc.p,{sqrt:pC}),pr=lC(tc,{Fp:Ia,endo:dC}),Dp={};function Pa(i,...t){let e=Dp[i];if(e===void 0){const n=Ca(zR(i));e=Ra(n,n),Dp[i]=e}return Ca(Ra(e,...t))}const vu=i=>i.toBytes(!0).slice(1),bu=i=>i%Rh===fC;function Ch(i){const{Fn:t,BASE:e}=pr,n=t.fromBytes(i),s=e.multiply(n);return{scalar:bu(s.y)?n:t.neg(n),bytes:vu(s)}}function mg(i){const t=Ia;if(!t.isValidNot0(i))throw new Error("invalid x: Fail if x ≥ p");const e=t.create(i*i),n=t.create(e*i+BigInt(7));let s=t.sqrt(n);bu(s)||(s=t.neg(s));const r=pr.fromAffine({x:i,y:s});return r.assertValidity(),r}const Kr=gu;function _g(...i){return pr.Fn.create(Kr(Pa("BIP0340/challenge",...i)))}function Up(i){return Ch(i).bytes}function mC(i,t,e=j_(32)){const{Fn:n}=pr,s=Ye(i,void 0,"message"),{bytes:r,scalar:o}=Ch(t),a=Ye(e,32,"auxRand"),c=n.toBytes(o^Kr(Pa("BIP0340/aux",a))),l=Pa("BIP0340/nonce",c,r,s),{bytes:h,scalar:u}=Ch(l),d=_g(h,r,s),f=new Uint8Array(64);if(f.set(h,0),f.set(n.toBytes(n.create(u+d*o)),32),!gg(f,s,r))throw new Error("sign: Invalid signature produced");return f}function gg(i,t,e){const{Fp:n,Fn:s,BASE:r}=pr,o=Ye(i,64,"signature"),a=Ye(t,void 0,"message"),c=Ye(e,32,"publicKey");try{const l=mg(Kr(c)),h=Kr(o.subarray(0,32));if(!n.isValidNot0(h))return!1;const u=Kr(o.subarray(32,64));if(!s.isValidNot0(u))return!1;const d=_g(s.toBytes(h),vu(l),a),f=r.multiplyUnsafe(u).add(l.multiplyUnsafe(s.neg(d))),{x:m,y:x}=f.toAffine();return!(f.is0()||!bu(x)||m!==h)}catch{return!1}}const zn=(()=>{const e=(n=j_(48))=>eC(n,tc.n);return{keygen:rC(e,Up),getPublicKey:Up,sign:mC,verify:gg,Point:pr,utils:{randomSecretKey:e,taggedHash:Pa,lift_x:mg,pointToBytes:vu},lengths:{secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:32*2,seed:48}}})();new TextDecoder("utf-8");var _C=new TextEncoder;function Bs(i){try{i.indexOf("://")===-1&&(i="wss://"+i);let t=new URL(i);return t.protocol==="http:"?t.protocol="ws:":t.protocol==="https:"&&(t.protocol="wss:"),t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}catch{throw new Error(`Invalid URL: ${i}`)}}function gC(i){for(let t=0;t<64;t++){let e=i.charCodeAt(t);if(isNaN(e)||e<48||e>102||e>57&&e<97)return!1}return!0}var Os=Symbol("verified"),xC=i=>i instanceof Object;function yC(i){if(!xC(i)||typeof i.kind!="number"||typeof i.content!="string"||typeof i.created_at!="number"||typeof i.pubkey!="string"||!gC(i.pubkey)||!Array.isArray(i.tags))return!1;for(let t=0;t<i.tags.length;t++){let e=i.tags[t];if(!Array.isArray(e))return!1;for(let n=0;n<e.length;n++)if(typeof e[n]!="string")return!1}return!0}var vC=class{generateSecretKey(){return zn.utils.randomSecretKey()}getPublicKey(t){return In(zn.getPublicKey(t))}finalizeEvent(t,e){const n=t;return n.pubkey=In(zn.getPublicKey(e)),n.id=_l(n),n.sig=In(zn.sign(Gn(_l(n)),e)),n[Os]=!0,n}verifyEvent(t){if(typeof t[Os]=="boolean")return t[Os];try{const e=_l(t);if(e!==t.id)return t[Os]=!1,!1;const n=zn.verify(Gn(t.sig),Gn(e),Gn(t.pubkey));return t[Os]=n,n}catch{return t[Os]=!1,!1}}};function bC(i){if(!yC(i))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,i.pubkey,i.created_at,i.kind,i.tags,i.content])}function _l(i){let t=Ca(_C.encode(bC(i)));return In(t)}var ec=new vC;ec.generateSecretKey;ec.getPublicKey;ec.finalizeEvent;var MC=ec.verifyEvent,EC=22242;function wC(i,t){if(i.ids&&i.ids.indexOf(t.id)===-1||i.kinds&&i.kinds.indexOf(t.kind)===-1||i.authors&&i.authors.indexOf(t.pubkey)===-1)return!1;for(let e in i)if(e[0]==="#"){let n=e.slice(1),s=i[`#${n}`];if(s&&!t.tags.find(([r,o])=>r===e.slice(1)&&s.indexOf(o)!==-1))return!1}return!(i.since&&t.created_at<i.since||i.until&&t.created_at>i.until)}function SC(i,t){for(let e=0;e<i.length;e++)if(wC(i[e],t))return!0;return!1}function TC(i,t){let e=t.length+3,n=i.indexOf(`"${t}":`)+e,s=i.slice(n).indexOf('"')+n+1;return i.slice(s,s+64)}function AC(i){let t=i.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let e=i.slice(t+7+1).indexOf('"');if(e===-1)return null;let n=t+7+1+e,s=i.slice(n+1,80).indexOf('"');if(s===-1)return null;let r=n+1+s;return i.slice(n+1,r)}function RC(i,t){return{kind:EC,created_at:Math.floor(Date.now()/1e3),tags:[["relay",i],["challenge",t]],content:""}}var Lh=class extends Error{constructor(i,t){super(`Tried to send message '${i} on a closed connection to ${t}.`),this.name="SendingOnClosedConnection"}},xg=class{constructor(i,t){g(this,"url");g(this,"_connected",!1);g(this,"onclose",null);g(this,"onnotice",i=>console.debug(`NOTICE from ${this.url}: ${i}`));g(this,"onauth");g(this,"baseEoseTimeout",4400);g(this,"publishTimeout",4400);g(this,"pingFrequency",29e3);g(this,"pingTimeout",2e4);g(this,"resubscribeBackoff",[1e4,1e4,1e4,2e4,2e4,3e4,6e4]);g(this,"openSubs",new Map);g(this,"enablePing");g(this,"enableReconnect");g(this,"idleTimeout",0);g(this,"idleSince",Date.now());g(this,"ongoingOperations",0);g(this,"reconnectTimeoutHandle");g(this,"pingIntervalHandle");g(this,"reconnectAttempts",0);g(this,"skipReconnection",!1);g(this,"idleTimeoutHandle");g(this,"connectionPromise");g(this,"openCountRequests",new Map);g(this,"openEventPublishes",new Map);g(this,"ws");g(this,"challenge");g(this,"authPromise");g(this,"serial",0);g(this,"verifyEvent");g(this,"_WebSocket");this.url=Bs(i),this.verifyEvent=t.verifyEvent,this._WebSocket=t.websocketImplementation||WebSocket,this.enablePing=t.enablePing,this.enableReconnect=t.enableReconnect||!1,t.idleTimeout&&(this.idleTimeout=t.idleTimeout)}static async connect(i,t){const e=new xg(i,t);return await e.connect(t),e}closeAllSubscriptions(i){for(let[t,e]of this.openSubs)e.close(i);this.openSubs.clear();for(let[t,e]of this.openEventPublishes)e.reject(new Error(i));this.openEventPublishes.clear();for(let[t,e]of this.openCountRequests)e.reject(new Error(i));this.openCountRequests.clear()}get connected(){return this._connected}clearIdleTimeout(){this.idleTimeoutHandle&&(clearTimeout(this.idleTimeoutHandle),this.idleTimeoutHandle=void 0)}scheduleIdleClose(){this.clearIdleTimeout(),this.idleTimeout>0&&(this.idleTimeoutHandle=setTimeout(()=>{this.ongoingOperations===0&&this.idleSince&&this.close()},this.idleTimeout))}async reconnect(){const i=this.resubscribeBackoff[Math.min(this.reconnectAttempts,this.resubscribeBackoff.length-1)];this.reconnectAttempts++,this.reconnectTimeoutHandle=setTimeout(async()=>{try{await this.connect()}catch{}},i)}handleHardClose(i){this.ws&&(this.ws.onopen=null,this.ws.onerror=null,this.ws.onclose=null),this.pingIntervalHandle&&(clearInterval(this.pingIntervalHandle),this.pingIntervalHandle=void 0),this._connected=!1,this.connectionPromise=void 0,this.idleSince=void 0,this.clearIdleTimeout(),this.enableReconnect&&!this.skipReconnection?this.reconnect():(this.onclose?.(),this.closeAllSubscriptions(i))}async connect(i){let t;return this.connectionPromise?this.connectionPromise:(this.challenge=void 0,this.authPromise=void 0,this.skipReconnection=!1,this.connectionPromise=new Promise((e,n)=>{i?.timeout&&(t=setTimeout(()=>{n("connection timed out"),this.connectionPromise=void 0,this.reconnectAttempts===0&&(this.skipReconnection=!0),this.handleHardClose("relay connection timed out")},i.timeout)),i?.abort&&(i.abort.onabort=n);try{this.ws=new this._WebSocket(this.url)}catch(s){clearTimeout(t),n(s);return}this.ws.onopen=()=>{this.reconnectTimeoutHandle&&(clearTimeout(this.reconnectTimeoutHandle),this.reconnectTimeoutHandle=void 0),clearTimeout(t),this._connected=!0;const s=this.reconnectAttempts>0;this.reconnectAttempts=0;for(const r of this.openSubs.values()){if(r.eosed=!1,s)for(let o=0;o<r.filters.length;o++)r.lastEmitted&&(r.filters[o].since=r.lastEmitted+1);r.fire()}this.enablePing&&(this.pingIntervalHandle=setInterval(()=>this.pingpong(),this.pingFrequency)),e()},this.ws.onerror=()=>{clearTimeout(t),n("connection failed"),this.connectionPromise=void 0,this.reconnectAttempts===0&&(this.skipReconnection=!0),this.handleHardClose("relay connection failed")},this.ws.onclose=s=>{clearTimeout(t),n(s.message||"websocket closed"),this.handleHardClose("relay connection closed")},this.ws.onmessage=this._onmessage.bind(this)}),this.connectionPromise)}waitForPingPong(){return new Promise(i=>{this.ws.once("pong",()=>i(!0)),this.ws.ping()})}waitForDummyReq(){return new Promise((i,t)=>{if(!this.connectionPromise)return t(new Error(`no connection to ${this.url}, can't ping`));try{const e=this.subscribe([{ids:["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],limit:0}],{label:"<forced-ping>",oneose:()=>{i(!0),e.close()},onclose(){i(!0)},eoseTimeout:this.pingTimeout+1e3})}catch(e){t(e)}})}async pingpong(){this.ws?.readyState===1&&(await Promise.any([this.ws&&this.ws.ping&&this.ws.once?this.waitForPingPong():this.waitForDummyReq(),new Promise(t=>setTimeout(()=>t(!1),this.pingTimeout))])||this.ws?.readyState===this._WebSocket.OPEN&&this.ws?.close())}async send(i){if(!this.connectionPromise)throw new Lh(i,this.url);this.connectionPromise.then(()=>{this.ws?.send(i)})}async auth(i){const t=this.challenge;if(!t)throw new Error("can't perform auth, no challenge was received");return this.authPromise?this.authPromise:(this.authPromise=new Promise(async(e,n)=>{try{let s=await i(RC(this.url,t)),r=setTimeout(()=>{let o=this.openEventPublishes.get(s.id);o&&(o.reject(new Error("auth timed out")),this.openEventPublishes.delete(s.id))},this.publishTimeout);this.openEventPublishes.set(s.id,{resolve:e,reject:n,timeout:r}),this.send('["AUTH",'+JSON.stringify(s)+"]")}catch(s){console.warn("subscribe auth function failed:",s)}}),this.authPromise)}async publish(i){this.idleSince=void 0,this.clearIdleTimeout(),this.ongoingOperations++;const t=new Promise((e,n)=>{const s=setTimeout(()=>{const r=this.openEventPublishes.get(i.id);r&&(r.reject(new Error("publish timed out")),this.openEventPublishes.delete(i.id))},this.publishTimeout);this.openEventPublishes.set(i.id,{resolve:e,reject:n,timeout:s})});try{await this.send('["EVENT",'+JSON.stringify(i)+"]")}catch(e){const n=this.openEventPublishes.get(i.id);n&&(n.reject(e),this.openEventPublishes.delete(i.id))}return this.ongoingOperations--,this.ongoingOperations===0&&(this.idleSince=Date.now(),this.scheduleIdleClose()),t}async count(i,t){return(await this.countWithHLL(i,t)).count}async countWithHLL(i,t){this.serial++;const e=t?.id||"count:"+this.serial,n=new Promise((s,r)=>{this.openCountRequests.set(e,{resolve:s,reject:r})});try{await this.send('["COUNT","'+e+'",'+JSON.stringify(i).substring(1))}catch(s){const r=this.openCountRequests.get(e);r&&(r.reject(s),this.openCountRequests.delete(e))}return n}subscribe(i,t){t.label!=="<forced-ping>"&&(this.idleSince=void 0,this.clearIdleTimeout(),this.ongoingOperations++);const e=this.prepareSubscription(i,t);return e.fire(),t.abort&&(t.abort.onabort=()=>e.close(String(t.abort.reason||"<aborted>"))),e}prepareSubscription(i,t){this.serial++;const e=t.id||(t.label?t.label+":":"sub:")+this.serial,n=new CC(this,e,i,t);return this.openSubs.set(e,n),n}close(){this.skipReconnection=!0,this.reconnectTimeoutHandle&&(clearTimeout(this.reconnectTimeoutHandle),this.reconnectTimeoutHandle=void 0),this.pingIntervalHandle&&(clearInterval(this.pingIntervalHandle),this.pingIntervalHandle=void 0),this.closeAllSubscriptions("relay connection closed by us"),this._connected=!1,this.connectionPromise=void 0,this.idleSince=void 0,this.clearIdleTimeout(),this.onclose?.(),this.ws&&(this.ws.onopen=null,this.ws.onerror=null,this.ws.onclose=null,this.ws.readyState!==this._WebSocket.CLOSING&&this.ws.readyState!==this._WebSocket.CLOSED&&this.ws.close())}_onmessage(i){const t=i.data;if(!t)return;const e=AC(t);if(e){const n=this.openSubs.get(e);if(!n)return;const s=TC(t,"id"),r=n.alreadyHaveEvent?.(s);if(n.receivedEvent?.(this,s),r)return}try{let n=JSON.parse(t);switch(n[0]){case"EVENT":{const s=this.openSubs.get(n[1]),r=n[2];SC(s.filters,r)&&this.verifyEvent(r,this.url)?s.onevent(r):s.oninvalidevent?.(r),(!s.lastEmitted||s.lastEmitted<r.created_at)&&(s.lastEmitted=r.created_at);return}case"COUNT":{const s=n[1],r=n[2],o=this.openCountRequests.get(s);o&&(o.resolve(r),this.openCountRequests.delete(s));return}case"EOSE":{const s=this.openSubs.get(n[1]);if(!s)return;s.receivedEose();return}case"OK":{const s=n[1],r=n[2],o=n[3],a=this.openEventPublishes.get(s);a&&(clearTimeout(a.timeout),r?a.resolve(o):a.reject(new Error(o)),this.openEventPublishes.delete(s));return}case"CLOSED":{const s=n[1],r=this.openSubs.get(s);if(!r){const o=this.openCountRequests.get(s);o&&(o.reject(new Error(n[2])),this.openCountRequests.delete(s));return}r.closed=!0,r.close(n[2]);return}case"NOTICE":{this.onnotice(n[1]);return}case"AUTH":{this.challenge=n[1],this.onauth&&this.auth(this.onauth).catch(s=>{if(!(s instanceof Lh))throw s});return}default:{this.openSubs.get(n[1])?.oncustom?.(n);return}}}catch(n){try{const[s,r,o]=JSON.parse(t);console.warn(`[nostr] relay ${this.url} error processing message:`,n,o)}catch{console.warn(`[nostr] relay ${this.url} error processing message:`,n)}return}}},CC=class{constructor(i,t,e,n){g(this,"relay");g(this,"id");g(this,"lastEmitted");g(this,"closed",!1);g(this,"eosed",!1);g(this,"filters");g(this,"alreadyHaveEvent");g(this,"receivedEvent");g(this,"onevent");g(this,"oninvalidevent");g(this,"oneose");g(this,"onclose");g(this,"oncustom");g(this,"eoseTimeout");g(this,"eoseTimeoutHandle");if(e.length===0)throw new Error("subscription can't be created with zero filters");this.relay=i,this.filters=e,this.id=t,this.alreadyHaveEvent=n.alreadyHaveEvent,this.receivedEvent=n.receivedEvent,this.eoseTimeout=n.eoseTimeout||i.baseEoseTimeout,this.oneose=n.oneose,this.onclose=n.onclose,this.oninvalidevent=n.oninvalidevent,this.onevent=n.onevent||(s=>{console.warn(`onevent() callback not defined for subscription '${this.id}' in relay ${this.relay.url}. event received:`,s)})}fire(){this.relay.send('["REQ","'+this.id+'",'+JSON.stringify(this.filters).substring(1)),this.eoseTimeoutHandle=setTimeout(this.receivedEose.bind(this),this.eoseTimeout)}receivedEose(){this.eosed||(clearTimeout(this.eoseTimeoutHandle),this.eosed=!0,this.oneose?.())}close(i="closed by caller"){if(!this.closed&&this.relay.connected){try{this.relay.send('["CLOSE",'+JSON.stringify(this.id)+"]")}catch(t){if(!(t instanceof Lh))throw t}this.closed=!0}this.relay.openSubs.delete(this.id),this.relay.ongoingOperations--,this.relay.ongoingOperations===0&&(this.relay.idleSince=Date.now(),this.relay.scheduleIdleClose()),this.onclose?.(i)}},fi=256,LC=fi*2;new TextEncoder;function IC(i,t){switch(t){case"reactions":return{"#e":[i],kinds:[7]};case"reposts":return{"#e":[i],kinds:[6]};case"quotes":return{"#q":[i],kinds:[1,1111]};case"replies":return{"#e":[i],kinds:[1]};case"comments":return{"#E":[i],kinds:[1111]};case"followers":return{"#p":[i],kinds:[3]}}}function PC(){return new Uint8Array(fi)}function NC(i){if(i.length!==LC||!/^[0-9a-f]+$/.test(i))return;const t=new Uint8Array(fi);for(let e=0;e<fi;e++)t[e]=parseInt(i.slice(e*2,e*2+2),16);return t}function DC(i){if(i.length!==fi)throw new Error(`invalid number of registers ${i.length}`);let t="";for(let e=0;e<fi;e++)t+=i[e].toString(16).padStart(2,"0");return t}function UC(i,t){if(i.length===0&&(i=PC()),i.length!==fi)throw new Error(`invalid number of registers ${i.length}`);if(t.length!==fi)throw new Error(`invalid number of registers ${t.length}`);for(let e=0;e<fi;e++)t[e]>i[e]&&(i[e]=t[e]);return i}var OC=class{constructor(i){g(this,"relays",new Map);g(this,"seenOn",new Map);g(this,"trackRelays",!1);g(this,"verifyEvent");g(this,"enablePing");g(this,"enableReconnect");g(this,"idleTimeout",2e4);g(this,"automaticallyAuth");g(this,"onRelayConnectionFailure");g(this,"onRelayConnectionSuccess");g(this,"allowConnectingToRelay");g(this,"maxWaitForConnection");g(this,"_WebSocket");this.verifyEvent=i.verifyEvent,this._WebSocket=i.websocketImplementation,this.enablePing=i.enablePing,this.enableReconnect=i.enableReconnect||!1,i.idleTimeout&&(this.idleTimeout=i.idleTimeout),this.automaticallyAuth=i.automaticallyAuth,this.onRelayConnectionFailure=i.onRelayConnectionFailure,this.onRelayConnectionSuccess=i.onRelayConnectionSuccess,this.allowConnectingToRelay=i.allowConnectingToRelay,this.maxWaitForConnection=i.maxWaitForConnection||3e3}async ensureRelay(i,t){i=Bs(i);let e=this.relays.get(i);if(e||(e=new xg(i,{verifyEvent:this.verifyEvent,websocketImplementation:this._WebSocket,enablePing:this.enablePing,enableReconnect:this.enableReconnect,idleTimeout:this.idleTimeout}),e.onclose=()=>{this.relays.delete(i)},this.relays.set(i,e)),this.automaticallyAuth){const n=this.automaticallyAuth(i);n&&(e.onauth=n)}try{await e.connect({timeout:t?.connectionTimeout,abort:t?.abort})}catch(n){throw this.relays.delete(i),n}return e}close(i){i.map(Bs).forEach(t=>{this.relays.get(t)?.close(),this.relays.delete(t)})}subscribe(i,t,e){const n=[],s=[];for(let r=0;r<i.length;r++){const o=Bs(i[r]);n.find(a=>a.url===o)||s.indexOf(o)===-1&&(s.push(o),n.push({url:o,filter:t}))}return this.subscribeMap(n,e)}subscribeMany(i,t,e){return this.subscribe(i,t,e)}subscribeMap(i,t){const e=new Map;for(const d of i){const{url:f,filter:m}=d;e.has(f)||e.set(f,[]),e.get(f).push(m)}const n=Array.from(e.entries()).map(([d,f])=>({url:d,filters:f}));this.trackRelays&&(t.receivedEvent=(d,f)=>{let m=this.seenOn.get(f);m||(m=new Set,this.seenOn.set(f,m)),m.add(d)});const s=new Set,r=[],o=[];let a=d=>{o[d]||(o[d]=!0,o.filter(f=>f).length===n.length&&(t.oneose?.(),a=()=>{}))};const c=[];let l=(d,f,m)=>{c[d]||(a(d),c[d]={url:f,reason:m},c.filter(x=>x).length===n.length&&(t.onclose?.(c),l=()=>{}))};const h=d=>{if(t.alreadyHaveEvent?.(d))return!0;const f=s.has(d);return s.add(d),f},u=Promise.all(n.map(async({url:d,filters:f},m)=>{if(this.allowConnectingToRelay?.(d,["read",f])===!1){l(m,d,"connection skipped by allowConnectingToRelay");return}let x;try{x=await this.ensureRelay(d,{connectionTimeout:this.maxWaitForConnection<(t.maxWait||0)?Math.max(t.maxWait*.8,t.maxWait-1e3):this.maxWaitForConnection,abort:t.abort})}catch(p){this.onRelayConnectionFailure?.(d),l(m,d,p?.message||String(p));return}this.onRelayConnectionSuccess?.(d);let _=x.subscribe(f,{...t,oneose:()=>a(m),onclose:p=>{p.startsWith("auth-required: ")&&t.onauth?x.auth(t.onauth).then(()=>{x.subscribe(f,{...t,oneose:()=>a(m),onclose:w=>{l(m,d,w)},alreadyHaveEvent:h,eoseTimeout:t.maxWait,abort:t.abort})}).catch(w=>{l(m,d,`auth was required and attempted, but failed with: ${w}`)}):l(m,d,p)},alreadyHaveEvent:h,eoseTimeout:t.maxWait,abort:t.abort});r.push(_)}));return{async close(d){await u,r.forEach(f=>{f.close(d)})}}}subscribeEose(i,t,e){let n;return n=this.subscribe(i,t,{...e,oneose(){const s="closed automatically on eose";n?n.close(s):e.onclose?.(i.map(r=>({url:r,reason:s})))}}),n}subscribeManyEose(i,t,e){return this.subscribeEose(i,t,e)}async querySync(i,t,e){return new Promise(async n=>{const s=[];this.subscribeEose(i,t,{...e,onevent(r){s.push(r)},onclose(r){n(s)}})})}async get(i,t,e){t.limit=1;const n=await this.querySync(i,t,e);return n.sort((s,r)=>r.created_at-s.created_at),n[0]||null}async countMany(i,t,e,n){const s=IC(t,e),r=[];for(let l=0;l<i.length;l++){const h=Bs(i[l]);r.indexOf(h)===-1&&r.push(h)}const o=await Promise.all(r.map(async l=>{if(this.allowConnectingToRelay?.(l,["read",[s]])===!1)return null;let h;try{h=await this.ensureRelay(l,{connectionTimeout:this.maxWaitForConnection<(n?.maxWait||0)?Math.max(n.maxWait*.8,n.maxWait-1e3):this.maxWaitForConnection,abort:n?.abort})}catch{return this.onRelayConnectionFailure?.(l),null}return this.onRelayConnectionSuccess?.(l),h.countWithHLL([s],{id:n?.id}).catch(()=>null)}));let a=0,c;for(const l of o){if(!l||(l.count>a&&(a=l.count),!l.hll||l.hll.length!==512))continue;const h=NC(l.hll);h&&(c=UC(c||new Uint8Array(0),h))}return c?{count:a,hll:DC(c)}:{count:a}}publish(i,t,e){return i.map(Bs).map(async(n,s,r)=>{if(r.indexOf(n)!==s)return Promise.reject("duplicate url");if(this.allowConnectingToRelay?.(n,["write",t])===!1)return Promise.reject("connection skipped by allowConnectingToRelay");let o;try{o=await this.ensureRelay(n,{connectionTimeout:this.maxWaitForConnection<(e?.maxWait||0)?Math.max(e.maxWait*.8,e.maxWait-1e3):this.maxWaitForConnection,abort:e?.abort})}catch(a){return this.onRelayConnectionFailure?.(n),"connection failure: "+String(a)}return o.publish(t).catch(async a=>{if(a instanceof Error&&a.message.startsWith("auth-required: ")&&e?.onauth)return await o.auth(e.onauth),o.publish(t);throw a}).then(a=>{if(this.trackRelays){let c=this.seenOn.get(t.id);c||(c=new Set,this.seenOn.set(t.id,c)),c.add(o)}return a})})}listConnectionStatus(){const i=new Map;return this.relays.forEach((t,e)=>i.set(e,t.connected)),i}destroy(){this.relays.forEach(i=>i.close()),this.relays=new Map}pruneIdleRelays(i=1e4){const t=[];for(const[e,n]of this.relays)n.idleSince&&Date.now()-n.idleSince>=i&&(this.relays.delete(e),t.push(e),n.close());return t}},yg;try{yg=WebSocket}catch{}var vg=class extends OC{constructor(i){super({verifyEvent:MC,websocketImplementation:yg,maxWaitForConnection:3e3,...i})}};new TextDecoder("utf-8");var FC=new TextEncoder;function kC(i){for(let t=0;t<64;t++){let e=i.charCodeAt(t);if(isNaN(e)||e<48||e>102||e>57&&e<97)return!1}return!0}var Fs=Symbol("verified"),BC=i=>i instanceof Object;function HC(i){if(!BC(i)||typeof i.kind!="number"||typeof i.content!="string"||typeof i.created_at!="number"||typeof i.pubkey!="string"||!kC(i.pubkey)||!Array.isArray(i.tags))return!1;for(let t=0;t<i.tags.length;t++){let e=i.tags[t];if(!Array.isArray(e))return!1;for(let n=0;n<e.length;n++)if(typeof e[n]!="string")return!1}return!0}var zC=class{generateSecretKey(){return zn.utils.randomSecretKey()}getPublicKey(i){return In(zn.getPublicKey(i))}finalizeEvent(i,t){const e=i;return e.pubkey=In(zn.getPublicKey(t)),e.id=gl(e),e.sig=In(zn.sign(Gn(gl(e)),t)),e[Fs]=!0,e}verifyEvent(i){if(typeof i[Fs]=="boolean")return i[Fs];try{const t=gl(i);if(t!==i.id)return i[Fs]=!1,!1;const e=zn.verify(Gn(i.sig),Gn(t),Gn(i.pubkey));return i[Fs]=e,e}catch{return i[Fs]=!1,!1}}};function VC(i){if(!HC(i))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,i.pubkey,i.created_at,i.kind,i.tags,i.content])}function gl(i){let t=Ca(FC.encode(VC(i)));return In(t)}var nc=new zC;nc.generateSecretKey;var GC=nc.getPublicKey,bg=nc.finalizeEvent;nc.verifyEvent;let Vs=null;const xl=new Set;function Mu(i=cs()){return Vs||(Vs=new vg,WC(i),Vs)}function WC(i){const t=Vs??(Vs=new vg);for(const e of i)xl.has(e)||t.ensureRelay(e).then(n=>{xl.add(e),n.onclose=()=>xl.delete(e)}).catch(()=>{})}async function Op(){const i=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),t=await crypto.subtle.exportKey("raw",i);return btoa(String.fromCharCode(...new Uint8Array(t)))}async function Mg(i){const t=Uint8Array.from(atob(i),e=>e.charCodeAt(0));return crypto.subtle.importKey("raw",t,"AES-GCM",!1,["encrypt","decrypt"])}async function Eg(i,t){const e=await Mg(t),n=crypto.getRandomValues(new Uint8Array(12)),s=new TextEncoder().encode(JSON.stringify(i)),r=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},e,s),o=new Uint8Array(12+r.byteLength);return o.set(n),o.set(new Uint8Array(r),12),btoa(String.fromCharCode(...o))}async function XC(i,t){try{const e=await Mg(t),n=Uint8Array.from(atob(i),r=>r.charCodeAt(0)),s=await crypto.subtle.decrypt({name:"AES-GCM",iv:n.slice(0,12)},e,n.slice(12));return JSON.parse(new TextDecoder().decode(s))}catch{return null}}async function Eu(i){const t=Uint8Array.from(atob(i),n=>n.charCodeAt(0)),e=new Uint8Array(await crypto.subtle.digest("SHA-256",t));return{skBytes:e,pubkey:GC(e)}}async function ic(i,t,e,n=cs()){const{skBytes:s}=await Eu(t),r=bg({kind:i,created_at:Math.floor(Date.now()/1e3),tags:[],content:await Eg(e,t)},s);await Promise.allSettled(Mu(n).publish([...n],r))}async function qC(i,t,e,n=cs()){const{pubkey:s}=await Eu(t),r={kinds:[i],authors:[s],since:Math.floor(Date.now()/1e3)},o=Mu(n).subscribeMany([...n],r,{async onevent(a){const c=await XC(a.content,t);c!==null&&e(c)}});return()=>o.close()}async function wg(i,t,e,n,s=cs()){const{skBytes:r}=await Eu(t),o=bg({kind:i,created_at:Math.floor(Date.now()/1e3),tags:[["d",e]],content:await Eg(n,t)},r);await Promise.allSettled(Mu(s).publish([...s],o))}async function YC(i,t,e,n){await ic(lo,i,{type:"offer",from:fe,to:t,sdp:e.sdp,ts:Date.now()},n)}async function KC(i,t,e,n){await ic(lo,i,{type:"answer",from:fe,to:t,sdp:e.sdp,ts:Date.now()},n)}async function $C(i,t,e,n){await ic(lo,i,{type:"ice",from:fe,to:t,candidate:e.candidate,sdpMid:e.sdpMid,sdpMLineIndex:e.sdpMLineIndex,ts:Date.now()},n)}async function Fp(i,t,e,n){await ic(lo,i,{type:"presence",from:fe,name:t,tankIcon:e,ts:Date.now()},n)}async function ZC(i,t,e){return qC(lo,i,n=>{if(n.from!==fe)switch(n.type){case"offer":n.to===fe&&t.onOffer?.(n.from,{type:"offer",sdp:n.sdp});break;case"answer":n.to===fe&&t.onAnswer?.(n.from,{type:"answer",sdp:n.sdp});break;case"ice":n.to===fe&&t.onIce?.(n.from,{candidate:n.candidate,sdpMid:n.sdpMid,sdpMLineIndex:n.sdpMLineIndex});break;case"presence":t.onPresence?.(n.from,n.name,n.tankIcon??0,n.ts);break}},e)}const JC=6e4,jC={__hb:1};class QC{constructor(){g(this,"_conns",new Map);g(this,"onMessage",null);g(this,"onConnectionChange",null)}_ensure(t,e,n){const s=this._conns.get(t);if(s){const a=s.pc.connectionState;if(a==="connected"||a==="connecting"||a==="new")return s;this._cleanup(t,!1)}const r=new RTCPeerConnection(yR()),o={pc:r,dc:null,encKey:e,relays:n,iceQueue:[],backoff:2e3,reconnectTimer:null,remoteDescSet:!1,lastHeard:Date.now()};return this._conns.set(t,o),r.onicecandidate=a=>{a.candidate&&$C(e,t,a.candidate,n).catch(()=>{})},r.onconnectionstatechange=()=>{const a=r.connectionState;this.onConnectionChange?.(t,a),a==="connected"?o.backoff=2e3:(a==="failed"||a==="disconnected")&&this._scheduleReconnect(t)},r.ondatachannel=a=>this._setupDc(t,a.channel),o}_setupDc(t,e){const n=this._conns.get(t);n&&(n.dc=e,e.onopen=()=>{n.lastHeard=Date.now(),this.onConnectionChange?.(t,n.pc.connectionState)},e.onmessage=s=>{n.lastHeard=Date.now();try{const r=JSON.parse(s.data);if(r&&r.__hb!==void 0)return;this.onMessage?.(t,r)}catch{}},e.onclose=()=>{n.dc===e&&(n.dc=null)})}connect(t,e,n){const s=this._ensure(t,e,n);fe<t&&(!s.dc||s.dc.readyState!=="open")&&this._createOffer(t).catch(()=>{})}async _createOffer(t){const e=this._conns.get(t);if(!e)return;this._setupDc(t,e.pc.createDataChannel(MR,ER));const n=await e.pc.createOffer();await e.pc.setLocalDescription(n),await YC(e.encKey,t,n,e.relays)}async handleOffer(t,e,n,s){const r=this._ensure(t,n,s);await r.pc.setRemoteDescription(new RTCSessionDescription(e)),r.remoteDescSet=!0,await this._flushIce(t);const o=await r.pc.createAnswer();await r.pc.setLocalDescription(o),await KC(n,t,o,s)}async handleAnswer(t,e){const n=this._conns.get(t);n&&(await n.pc.setRemoteDescription(new RTCSessionDescription(e)),n.remoteDescSet=!0,await this._flushIce(t))}async addIceCandidate(t,e){const n=this._conns.get(t);n&&(n.remoteDescSet?await n.pc.addIceCandidate(new RTCIceCandidate(e)).catch(()=>{}):n.iceQueue.push(e))}async _flushIce(t){const e=this._conns.get(t);if(e){for(const n of e.iceQueue)await e.pc.addIceCandidate(new RTCIceCandidate(n)).catch(()=>{});e.iceQueue=[]}}send(t,e){const n=this._conns.get(t);if(!n?.dc||n.dc.readyState!=="open")return!1;try{return n.dc.send(JSON.stringify(e)),!0}catch{return!1}}broadcast(t){const e=JSON.stringify(t);let n=0;for(const s of this._conns.values())if(s.dc?.readyState==="open")try{s.dc.send(e),n++}catch{}return n}isConnected(t){const e=this._conns.get(t);return e?.dc?.readyState==="open"&&e.pc.connectionState==="connected"}connectedPeers(){const t=[];for(const[e,n]of this._conns)n.dc?.readyState==="open"&&t.push(e);return t}pingAll(){const t=JSON.stringify(jC);for(const e of this._conns.values())if(e.dc?.readyState==="open")try{e.dc.send(t)}catch{}}msSinceHeard(t){const e=this._conns.get(t);return!e||e.dc?.readyState!=="open"?1/0:Date.now()-e.lastHeard}_scheduleReconnect(t){const e=this._conns.get(t);if(!e||e.reconnectTimer||fe>t)return;const n=e.backoff;e.backoff=Math.min(e.backoff*2,JC),e.reconnectTimer=setTimeout(()=>{e.reconnectTimer=null,this._ensure(t,e.encKey,e.relays),this._createOffer(t).catch(()=>{})},n)}_cleanup(t,e=!0){const n=this._conns.get(t);if(n){n.reconnectTimer&&clearTimeout(n.reconnectTimer);try{n.dc?.close()}catch{}try{n.pc.close()}catch{}e&&this._conns.delete(t)}}close(t){this._cleanup(t,!0),this.onConnectionChange?.(t,"closed")}closeAll(){for(const t of[...this._conns.keys()])this._cleanup(t,!0)}}const kp=new Set;class ls{constructor(t){g(this,"role");g(this,"roomKey");g(this,"matchId");g(this,"name");g(this,"hostId");g(this,"maxPlayers");g(this,"isPublic");g(this,"relays");g(this,"myName");g(this,"myTankIcon");g(this,"peers",new QC);g(this,"roster",new Map);g(this,"handlers",{});g(this,"_presenceTimer",null);g(this,"_announceTimer",null);g(this,"_pruneTimer",null);g(this,"_heartbeatTimer",null);g(this,"_unsubSignaling",null);g(this,"_status","open");g(this,"_lastPingMs",0);this.role=t.role,this.roomKey=t.roomKey,this.matchId=t.matchId,this.name=t.name,this.hostId=t.hostId,this.maxPlayers=t.maxPlayers,this.isPublic=t.isPublic,this.relays=t.relays,this.myName=t.myName,this.myTankIcon=t.myTankIcon,this.roster.set(fe,{deviceId:fe,name:this.myName,tankIcon:this.myTankIcon,connected:!0,lastSeen:Date.now()})}static async createPrivate(t,e,n,s,r=cs()){const o=new ls({role:"host",roomKey:await Op(),matchId:Aa(),name:t,hostId:fe,maxPlayers:e,isPublic:!1,myName:n,myTankIcon:s,relays:r});return await o._open(),o}static async createPublic(t,e,n,s,r=cs()){const o=new ls({role:"host",roomKey:await Op(),matchId:Aa(),name:t,hostId:fe,maxPlayers:e,isPublic:!0,myName:n,myTankIcon:s,relays:r});return await o._open(),await o._announce(),o._announceTimer=setInterval(()=>void o._announce(),wR),o}static async join(t,e,n,s=cs()){const r=new ls({role:"guest",roomKey:t.roomKey,matchId:t.matchId,name:t.name,hostId:t.hostId,maxPlayers:t.maxPlayers,isPublic:!1,myName:e,myTankIcon:n,relays:s});return await r._open(),r}inviteCode(){const t={v:vp,matchId:this.matchId,name:this.name,hostId:this.hostId,roomKey:this.roomKey,maxPlayers:this.maxPlayers,players:this.roster.size,status:this._status,ts:Date.now()};return btoa(JSON.stringify(t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}static parseInvite(t){try{const e=atob(t.trim().replace(/-/g,"+").replace(/_/g,"/")),n=JSON.parse(e);return!n.roomKey||!n.matchId||!n.hostId?null:n}catch{return null}}async _open(){this.peers.onMessage=(t,e)=>this.handlers.onMessage?.(t,e),this.peers.onConnectionChange=(t,e)=>{const n=this.roster.get(t);n&&(n.connected=this.peers.isConnected(t)),this.handlers.onConnection?.(t,e),this._emitRoster()},this._unsubSignaling=await ZC(this.roomKey,{onOffer:(t,e)=>void this.peers.handleOffer(t,e,this.roomKey,this.relays),onAnswer:(t,e)=>void this.peers.handleAnswer(t,e),onIce:(t,e)=>void this.peers.addIceCandidate(t,e),onPresence:(t,e,n)=>this._onPresence(t,e,n)},this.relays),Fp(this.roomKey,this.myName,this.myTankIcon,this.relays),this._presenceTimer=setInterval(()=>void Fp(this.roomKey,this.myName,this.myTankIcon,this.relays),ul),this._pruneTimer=setInterval(()=>this._prune(),ul),this._heartbeatTimer=setInterval(()=>this.bgPing(),bp),kp.add(this),this._emitRoster()}bgPing(){const t=Date.now();t-this._lastPingMs<bp||(this._lastPingMs=t,this.peers.pingAll())}_onPresence(t,e,n){const s=this.roster.get(t);s?(s.name=e,s.tankIcon=n,s.lastSeen=Date.now(),s.connected=this.peers.isConnected(t)):this.roster.set(t,{deviceId:t,name:e,tankIcon:n,connected:this.peers.isConnected(t),lastSeen:Date.now()}),this.peers.connect(t,this.roomKey,this.relays),this._emitRoster()}_prune(){const t=Date.now()-ul*3;let e=!1;for(const[n,s]of this.roster)n!==fe&&s.lastSeen<t&&!this.peers.isConnected(n)&&(this.roster.delete(n),e=!0);e&&this._emitRoster()}async _announce(){if(!this.isPublic)return;const t={v:vp,matchId:this.matchId,name:this.name,hostId:this.hostId,roomKey:this.roomKey,maxPlayers:this.maxPlayers,players:this.roster.size,status:this._status,ts:Date.now()};await wg(vR,$_,this.matchId,t,this.relays)}_emitRoster(){this.handlers.onRoster?.([...this.roster.values()].sort((t,e)=>t.deviceId.localeCompare(e.deviceId)))}players(){return[...this.roster.values()].sort((t,e)=>t.deviceId.localeCompare(e.deviceId))}setStatus(t){this._status=t,this.isPublic&&this._announce()}broadcast(t){return this.peers.broadcast(t)}send(t,e){return this.peers.send(t,e)}msSinceHeard(t){return this.peers.msSinceHeard(t)}leave(){kp.delete(this),this._presenceTimer&&clearInterval(this._presenceTimer),this._announceTimer&&clearInterval(this._announceTimer),this._pruneTimer&&clearInterval(this._pruneTimer),this._heartbeatTimer&&clearInterval(this._heartbeatTimer),this._unsubSignaling?.(),this.peers.closeAll(),this.isPublic&&(this._status="playing")}}const t2=8,e2=32,n2=256,Bp=120,i2=400,s2=500;function Hp(i){if(typeof i!="string")return"";let t="";for(const e of i.slice(0,Bp*4)){const n=e.codePointAt(0)??0;if(n>=32&&n!==127&&(t+=e),t.length>=Bp)break}return t.trim()}class Sg{constructor(t,e,n){g(this,"turnNo",0);g(this,"started",!1);g(this,"pending",new Map);g(this,"myHashes",new Map);g(this,"peerHashes",new Map);g(this,"detached",!1);g(this,"onDesync",null);g(this,"onTurnApplied",null);g(this,"onControl",null);g(this,"onShopResult",null);g(this,"onShopActivity",null);g(this,"onShopFinal",null);g(this,"onChat",null);g(this,"_lastChatMs",new Map);g(this,"_lastActMs",new Map);this.match=t,this.adapter=e,this.role=n;const s=t.handlers.onMessage;t.handlers.onMessage=(r,o)=>{s?.(r,o),this._onWire(r,o)}}startMatch(t){this.started=!0,this.adapter.startMatch(t),this.match.setStatus("playing"),this.match.broadcast({t:"start",start:t})}commitTurn(t){if(this.detached){this.adapter.applyTurnInput(t);return}const e=++this.turnNo;this.match.broadcast({t:"turn",n:e,from:fe,input:t}),this._applyTurn(e,t)}detach(){this.detached=!0,this.pending.clear()}activeDeviceId(){return this.adapter.activeDeviceId()}hasBuffered(){return this.pending.size>0}sendControl(t,e){this.detached||this.match.broadcast({t:"ctrl",kind:t,data:e})}sendShop(t,e,n){this.detached||this.match.broadcast({t:"shop",from:fe,round:t,inv:e,cash:n})}sendShopActivity(t){this.detached||this.match.broadcast({t:"shopact",from:fe,round:t})}sendShopFinal(t,e){this.detached||this.match.broadcast({t:"shopfin",round:t,results:e})}sendChat(t){const e=Hp(t);e&&this.match.broadcast({t:"chat",from:fe,text:e})}tryPump(){if(this.detached)return!1;const t=this.turnNo+1,e=this.pending.get(t);if(!e)return!1;const n=this.adapter.activeDeviceId();if(!n)return!1;let s=e.get(n);if(s===void 0){const r=e.get(this.match.hostId);(r?.retreat===!0||r?.skip===!0)&&(s=r)}return s===void 0?!1:(this.pending.delete(t),this.turnNo=t,this._applyTurn(t,s),!0)}_onWire(t,e){const n=e;if(!(!n||typeof n.t!="string")&&!(this.detached&&n.t!=="chat"))switch(n.t){case"start":this.role==="guest"&&t===this.match.hostId&&!this.started&&(this.started=!0,this.adapter.startMatch(n.start));break;case"turn":this._bufferTurn(t,n);break;case"hash":n.from===t&&this._recordHash(n.n,n.from,n.hash);break;case"snap":this.role==="guest"&&t===this.match.hostId&&this.adapter.restore(n.snap);break;case"ctrl":t===this.match.hostId&&this.onControl?.(n.kind,n.data);break;case"shop":typeof n.from=="string"&&n.from===t&&Number.isInteger(n.round)&&n.round>=0&&Array.isArray(n.inv)&&this.onShopResult?.(n.from,n.round,n.inv.slice(0,64),Number(n.cash)||0);break;case"shopact":if(typeof n.from=="string"&&n.from===t&&Number.isInteger(n.round)&&n.round>=0){const s=Date.now();s-(this._lastActMs.get(t)??0)>=s2&&(this._lastActMs.set(t,s),this.onShopActivity?.(n.from,n.round))}break;case"shopfin":t===this.match.hostId&&Number.isInteger(n.round)&&n.round>=0&&n.results&&typeof n.results=="object"&&this.onShopFinal?.(n.round,n.results);break;case"chat":if(typeof n.from=="string"&&n.from===t){const s=Hp(n.text),r=Date.now();s&&r-(this._lastChatMs.get(t)??0)>=i2&&(this._lastChatMs.set(t,r),this.onChat?.(n.from,s))}break}}_bufferTurn(t,e){const n=e.n;if(!Number.isInteger(n)||n<=this.turnNo||n>this.turnNo+t2||typeof e.from!="string"||e.from!==t||!e.input||typeof e.input!="object"||this.pending.size>=e2&&!this.pending.has(n))return;const s=e.input,r={angle:Number(s.angle)||0,power:Number(s.power)||0,weapon:Number(s.weapon)||0,moves:Array.isArray(s.moves)?s.moves.slice(0,n2):[],skip:s.skip===!0,retreat:s.retreat===!0,convert:s.convert&&typeof s.convert=="object"?{tank:Number(s.convert.tank),aiClass:Number(s.convert.aiClass)}:void 0};let o=this.pending.get(n);o||(o=new Map,this.pending.set(n,o)),o.set(e.from,r)}_applyTurn(t,e){this.adapter.applyTurnInput(e);const n=this.adapter.worldHash();this.myHashes.set(t,n),this.onTurnApplied?.(t),this.match.broadcast({t:"hash",n:t,from:fe,hash:n});const s=this.peerHashes.get(t);if(s)for(const[r,o]of s)r!==fe&&o!==n&&this._flagDesync(t,r)}_recordHash(t,e,n){let s=this.peerHashes.get(t);s||(s=new Map,this.peerHashes.set(t,s)),s.set(e,n);const r=this.myHashes.get(t);r!==void 0&&e!==fe&&n!==r&&this._flagDesync(t,e)}_flagDesync(t,e){if(this.onDesync?.(t,e),this.role==="host"){const n=this.adapter.snapshot();n!==null&&this.match.broadcast({t:"snap",n:t,snap:n})}}}class r2{constructor(){g(this,"level",20)}setLevel(t){this.level=t}info(t,...e){this.level<=20&&console.info("scorch: "+yl(t,e))}warning(t,...e){this.level<=30&&console.warn("scorch: "+yl(t,e))}error(t,...e){this.level<=40&&console.error("scorch: "+yl(t,e))}}function yl(i,t){let e=0;const n=i.replace(/%[sdifr%]/g,s=>{if(s==="%%")return"%";if(e>=t.length)return s;const r=t[e++];return s==="%d"||s==="%i"?String(Math.trunc(Number(r))):s==="%f"?String(Number(r)):zp(r)});return e<t.length?n+" "+t.slice(e).map(zp).join(" "):n}function zp(i){return i===null?"None":i===void 0?"?":String(i)}const Vp=new r2;async function o2(){try{const i=(await AR(fe)).slice(0,16);await wg(bR,$_,`start:${i}`,{ts:Date.now(),v:1})}catch{}}function a2(i){const t=(n,s,r)=>{const o=typeof n=="number"&&Number.isFinite(n)?Math.trunc(n):s;return Math.max(s,Math.min(r,o))},e=i.convert&&typeof i.convert=="object"&&i.retreat===!0?{tank:t(i.convert.tank,0,9),aiClass:t(i.convert.aiClass,su,Ya)}:null;return{angle:t(i.angle,0,180),power:t(i.power,0,1e3),weapon:t(i.weapon,0,tn-1),skip:i.skip===!0,retreat:i.retreat===!0,convert:e}}function c2(i){let t=2166136261;const e=r=>{t^=r&255,t=Math.imul(t,16777619)},n=r=>{r=r|0,e(r),e(r>>8),e(r>>16),e(r>>24)},s=i.terrain.grid;for(let r=0;r<s.length;r++)e(s[r]);for(const r of i.tanks)n(Math.trunc(r.x)),n(Math.trunc(r.y)),n(r.angle|0),n(r.power|0),n(r.selected_weapon|0),n(Math.trunc(r.health)),e(r.alive?1:0);return n(i.round_index|0),n(i.fire_index|0),(t>>>0).toString(16).padStart(8,"0")}function Tg(){let i=null,t=[];const e=r=>{if(!i)return null;const o=t.indexOf(r);return o>=0?i.tanks[o]:null},n=r=>{const o=new Array(tn).fill(0);if(Array.isArray(r))for(let a=0;a<tn;a++){const c=r[a];o[a]=typeof c=="number"&&Number.isFinite(c)?Math.max(0,Math.min(99,Math.trunc(c))):0}return o},s=r=>typeof r=="number"&&Number.isFinite(r)?Math.max(0,Math.min(1e9,Math.trunc(r))):0;return{startMatch(r){const o=Object.assign(new ja,r.cfg);i=IA(o,r.w,r.h,r.seed),t=[];let a=0;for(const c of r.order){const l=Number.isInteger(c.aiClass)&&c.aiClass>=0&&c.aiClass<=Ya?c.aiClass:0;i.add_player(c.name,l,a++,c.tankIcon),t.push(c.deviceId)}i.new_game(),o2()},activeDeviceId(){if(!i||!i.current_shooter)return null;const r=i.tanks.indexOf(i.current_shooter);return r>=0?t[r]??null:null},applyTurnInput(r){if(!i)return;const o=i.current_shooter;if(!o)return;const a=a2(r);if(a.convert&&a.convert.tank<i.tanks.length&&(i.tanks[a.convert.tank].ai_class=a.convert.aiClass),a.retreat){i.retreat();return}if(a.skip){i.skip_turn();return}o.angle=a.angle,o.power=a.power,o.selected_weapon=a.weapon,i.fire(o)},worldHash(){return i?c2(i):"0"},snapshot(){return Vp.warning("lockstep: snapshot not yet implemented; desync is detected, not auto-healed"),null},restore(r){Vp.warning("lockstep: restore not yet implemented (see snapshot TODO)")},state(){return i},deviceIds(){return t.slice()},humanDeviceIds(){if(!i)return[];const r=[];for(let o=0;o<i.tanks.length;o++)i.tanks[o].ai_class===ai&&t[o]&&r.push(t[o]);return r},tankOf(r){return e(r)},shopSnapshot(r){const o=e(r);return o?{inv:o.inventory.slice(),cash:o.cash}:null},applyShopSnapshot(r,o){const a=e(r);a&&(a.inventory=n(o.inv),a.cash=s(o.cash))},finishShop(){i&&(i.run_ai_buys(),i.begin_next_round())}}}let dn=null;function Na(){return dn!==null}function l2(){return dn?.adapter.state()??null}async function h2(i,t,e){const n=await ls.createPrivate(i,e,t,0),s=Tg(),r=new Sg(n,s,"host");return dn={match:n,session:r,adapter:s,role:"host"},dn}async function u2(i,t){const e=ls.parseInvite(i);if(!e)throw new Error("Invalid invite code");const n=await ls.join(e,t,0),s=Tg(),r=new Sg(n,s,"guest");return dn={match:n,session:r,adapter:s,role:"guest"},dn}function d2(i,t,e,n,s){const r=t.map((c,l)=>({deviceId:c.deviceId,name:c.name,aiClass:0,tankIcon:c.tankIcon??l%7}));for(;r.length<4;)r.push({deviceId:`cpu-${r.length}`,name:`VentureBot ${r.length}`,aiClass:8,tankIcon:r.length%7});const a={seed:crypto.getRandomValues(new Uint32Array(1))[0],w:e,h:n,cfg:{...s,TEAM_MODE:"NONE",PLAY_MODE:"SEQUENTIAL",TALKING_TANKS:"ALL"},order:r};i.session.startMatch(a)}function f2(i){return(dn?.adapter.deviceIds()??[]).indexOf(fe)}function p2(i){dn?.session.commitTurn(i)}function m2(){if(!dn)return;const i=dn.adapter.state();i&&i.phase==="aim"&&i.awaiting_human,dn.session.tryPump()}function _2(i){dn?.session.sendChat(i)}{const t=new URLSearchParams(typeof location<"u"?location.search:"").get("relays");t&&SR(t.split(",").map(e=>e.trim()).filter(Boolean))}const g2=document.getElementById("game"),ho=new iE({canvas:g2,antialias:!0,preserveDrawingBuffer:!0});ho.setPixelRatio(Math.min(window.devicePixelRatio,2));ho.setSize(window.innerWidth,window.innerHeight);ho.shadowMap.enabled=!0;const pn=new sE;pn.background=new Tt(1710638);const x2=window.innerWidth/window.innerHeight,Ih=800,Ph=Ih*x2,Vn=new Va(-Ph/2,Ph/2,Ih/2,-Ih/2,.1,2e3);Vn.position.set(0,-100,600);Vn.lookAt(0,200,0);pn.add(new Bm(16777215,.8));const Ag=new km(16777164,1.5);Ag.position.set(200,400,300);pn.add(Ag);pn.add(new AE(4491468,2245666,.4));const y2=new cr(Ph*3,600),v2=new _i({uniforms:{topColor:{value:new Tt(30719)},bottomColor:{value:new Tt(13421789)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec2 vUv; uniform vec3 topColor; uniform vec3 bottomColor; void main() { gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 1.0); }",depthWrite:!1}),Rg=new Re(y2,v2);Rg.position.set(0,450,-50);pn.add(Rg);ao.seed(42);const Qe=new ja;Qe.GRAVITY=.2;Qe.wind=0;Qe.MAX_WIND=200;Qe.INITIAL_CASH=5e3;Qe.SOUND="OFF";Qe.TALKING_TANKS="ALL";const Ke=new Ta(Qe,1024,768);Ke.add_player("Elon Musk",0,0,0);Ke.add_player("Jeff Bezos",1,1,1);Ke.add_player("Donald Trump",4,2,7);Ke.add_player("Scam Altman",5,3,7);Ke.new_game();const sc=PA(Ke.terrain);sc.position.set(0,0,0);pn.add(sc);const b2={earth:{gravity:.2,wind:0,visc:1},moon:{gravity:.033,wind:0,visc:1},mars:{gravity:.075,wind:0,visc:.7}};let Gp=null;function Cg(i){if(i===Gp)return;Gp=i;const t=b2[i];Qe.GRAVITY=t.gravity,Qe.wind=t.wind,Qe.AIR_VISCOSITY=Math.round((1-t.visc)*1e4),V_(pn,i);const e=i==="earth"?"earth_surface_v4":i==="moon"?"moon_surface_v2":"mars_surface_v2";new Zh().load(`./assets/${e}.png`,n=>{const s=sc.material;s.map=n,s.color.set(16777215),s.needsUpdate=!0},void 0,()=>{})}const wu=[],Wp=[4491519,16746564,16720418,4513092],M2=["Elon","Bezos","Trump","Altman"];for(let i=0;i<Ke.tanks.length;i++){const t=new Ui,e=new io({color:Wp[i],flatShading:!0}),n=new Re(new Wa(3,4,18,8),e);n.position.y=9,t.add(n);const s=new Re(new $h(3,6,8),e);s.position.y=21,t.add(s);const r=new Lm(new qh({map:E2(M2[i],Wp[i]),transparent:!0,depthTest:!1}));r.position.y=30,r.scale.set(30,10,1),t.add(r),t.visible=!1,pn.add(t),wu.push(t)}function E2(i,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="#"+t.toString(16).padStart(6,"0"),n.font="bold 28px system-ui",n.textAlign="center",n.fillText(i,128,40);const s=new fE(e);return s.minFilter=Ge,s}const ms=document.createElement("div");ms.id="title-screen";ms.innerHTML=`
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;
    background:#000 url('./assets/title_screen_v5.png') center/cover no-repeat;font-family:system-ui;">
    <div style="background:rgba(0,0,0,0.55);border-radius:14px;padding:28px 44px;text-align:center;">
      <h1 style="font-size:52px;color:#e94560;letter-spacing:6px;text-shadow:3px 3px 0 #000;margin:0;">SCORCHED BILLIONAIRE</h1>
      <p style="color:#e08bb0;font-size:19px;margin:8px 0 28px;">The Mother of All VC Rounds</p>
      <button id="btn-play" style="padding:14px 56px;font-size:22px;background:#e94560;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700;letter-spacing:2px;">PLAY</button>
      <button id="btn-online" style="margin-left:12px;padding:14px 40px;font-size:16px;background:#1b5e20;color:#a5d6a7;border:1px solid #2e7d32;border-radius:8px;cursor:pointer;font-weight:700;letter-spacing:2px;">ONLINE</button>
      <p style="color:#ccc;margin-top:26px;font-size:12px;max-width:480px;text-align:center;">4 billionaires. 3 planets. 48 weapons. <br>Arrow keys to aim. Space to fire. Tab for weapons.</p>
    </div>
  </div>`;ms.style.cssText="position:fixed;inset:0;z-index:200;";document.body.appendChild(ms);let Da=null,Su=!1,eo=null,Ua=null;function Lg(i){const t=new P(i.x,i.y,i.z).project(Vn);return t.z>1?null:{x:(t.x+1)/2*window.innerWidth,y:(-t.y+1)/2*window.innerHeight}}function w2(i){Ua&&Ua.sync({speech:i.speech?{tank:i.speech.tank,text:i.speech.text,until_frame:i.speech.frame??0}:null},t=>{const e=t;if(e?.x===void 0)return null;const n=Math.round(e.x);for(let s=0;s<i.terrain.h;s++)if(i.terrain.is_dirt(n,s))return{x:n-i.w/2,y:(i.h-s)/i.h*300+40,z:0};return{x:n-i.w/2,y:150,z:0}})}let _e=null,Ji=[],Dr=null,Tu=!1,fa=!1,Xp=-1,Oa=new Map,vl=!1;function Ig(){return l2()??Ke}function S2(){_e=document.createElement("div"),_e.id="lobby",_e.innerHTML=`
    <div style="position:fixed;inset:0;z-index:150;background:#0b0b1aee;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:system-ui;color:#eee;">
      <h2 style="color:#e94560;font-size:28px;margin-bottom:8px;">ONLINE DEALROOM</h2>
      <p style="color:#888;font-size:13px;margin-bottom:20px;">Peer-to-peer over Nostr relays. No server.</p>
      <div id="lobby-actions" style="display:flex;gap:12px;margin-bottom:16px;">
        <input id="lobby-name" placeholder="Your name" value="Billionaire"
          style="padding:8px 12px;border-radius:6px;border:1px solid #444;background:#12122a;color:#eee;font-size:14px;">
        <button id="btn-host" style="padding:10px 24px;background:#1b5e20;color:#a5d6a7;border:1px solid #2e7d32;border-radius:6px;cursor:pointer;font-weight:700;">HOST</button>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:20px;">
        <input id="lobby-code" placeholder="Invite code" style="padding:8px 12px;border-radius:6px;border:1px solid #444;background:#12122a;color:#eee;font-size:14px;width:200px;">
        <button id="btn-join" style="padding:10px 24px;background:#1565c0;color:#90caf9;border:1px solid #1e88e5;border-radius:6px;cursor:pointer;font-weight:700;">JOIN</button>
      </div>
      <div id="lobby-status" style="color:#ffb454;font-size:13px;margin-bottom:12px;">Create a room or paste an invite code.</div>
      <div id="lobby-roster" style="min-width:300px;max-width:420px;background:#12122a;border:1px solid #222;border-radius:8px;padding:12px;font-size:14px;"></div>
      <div id="lobby-invite" style="color:#888;font-size:13px;margin-top:10px;"></div>
      <div style="display:flex;gap:12px;margin-top:16px;">
        <button id="btn-start" style="display:none;padding:10px 36px;background:#e94560;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;">START</button>
        <button id="btn-leave" style="padding:10px 24px;background:#333;color:#ccc;border:1px solid #555;border-radius:6px;cursor:pointer;">BACK</button>
      </div>
    </div>`,document.body.appendChild(_e);const i=()=>{const t=_e.querySelector("#lobby-roster");t.innerHTML=Ji.length===0?'<div style="color:#666;">Waiting for players...</div>':Ji.map(n=>`<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #1a1a3a;">
             <span>${n.name}</span><span style="color:${n.connected?"#41d9a0":"#e94560"};">${n.connected?"CONNECTED":"GONE"}</span>
           </div>`).join("");const e=_e.querySelector("#btn-start");e.style.display=Dr?"block":"none"};_e.querySelector("#btn-host").addEventListener("click",async()=>{const t=_e.querySelector("#lobby-name").value||"Billionaire";_e.querySelector("#lobby-status").textContent="Opening room on relays...";try{const e=await h2("Scorched Billionaire",t,4);Dr=e,window.__mpSession=e,e.match.handlers.onRoster=n=>{Ji=n,i()},Ji=e.match.players(),i(),qp(),_e.querySelector("#lobby-invite").textContent=`Invite code: ${e.match.inviteCode()}`,_e.querySelector("#lobby-status").textContent="Room open. Share the invite code, then press START."}catch(e){_e.querySelector("#lobby-status").textContent="Failed: "+String(e)}}),_e.querySelector("#btn-join").addEventListener("click",async()=>{const t=_e.querySelector("#lobby-code").value.trim();if(!t)return;const e=_e.querySelector("#lobby-name").value||"Billionaire";_e.querySelector("#lobby-status").textContent="Joining...";try{const n=await u2(t,e);Dr=n,window.__mpSession=n,n.match.handlers.onRoster=s=>{Ji=s,i()},Ji=n.match.players(),i(),qp(),_e.querySelector("#lobby-status").textContent="Joined. Waiting for host to start..."}catch(n){_e.querySelector("#lobby-status").textContent="Failed: "+String(n)}}),_e.querySelector("#btn-start").addEventListener("click",()=>{if(!Dr)return;const t=Dr;t.role==="host"&&(d2(t,Ji,Ke.w,Ke.h,Qe),Tu=!0,Nh(),Pg())}),_e.querySelector("#btn-leave").addEventListener("click",()=>{Nh()}),i()}document.getElementById("btn-online").addEventListener("click",()=>{ms.style.display="none",S2()});function Nh(){_e?.remove(),_e=null}function qp(){const i=window.__mpSession;if(!i)return;i.session.onChat=(e,n)=>{eo?.push("Peer",n,"them")},i.session.onShopResult=(e,n,s,r)=>{Oa.set(e,{round:n,inv:s,cash:r})},i.session.onShopFinal=(e,n)=>{window.__mpShopFinal={round:e,results:n}};const t=i.match.handlers.onMessage;i.match.handlers.onMessage=(e,n)=>{t?.(e,n),n?.t==="start"&&!Tu&&(Nh(),Pg())}}function Pg(){Tu=!0,ms.remove(),document.getElementById("loading")?.classList.add("done"),Qe.SOUND="ON",Vt.enabled=!0,Da=new X_,Su=!0,eo=new q_({onSend:i=>{Na()?_2(i):eo?.system(`relayed to 0 peers: "${i}"`)}}),Ua=new Y_(Lg),Ng().catch(()=>{}),W_().catch(()=>{}),z_().catch(()=>{}),requestAnimationFrame(Fa)}window.addEventListener("keydown",i=>{const t=Ig();if(t.phase==="aim"&&t.awaiting_human){const e=t.current_shooter;i.key==="ArrowLeft"&&(e.angle=Math.min(180,e.angle+3)),i.key==="ArrowRight"&&(e.angle=Math.max(0,e.angle-3)),i.key==="ArrowUp"&&(e.power=Math.min(1e3,e.power+30)),i.key==="ArrowDown"&&(e.power=Math.max(0,e.power-30)),i.key==="Tab"&&(i.preventDefault(),e.selected_weapon=(e.selected_weapon+1)%32),(i.key===" "||i.key==="Enter")&&(i.preventDefault(),Na()?p2({angle:e.angle,power:e.power,weapon:e.selected_weapon,moves:[]}):t.fire(),XA(e))}});window.addEventListener("resize",()=>{const i=window.innerWidth/window.innerHeight,t=800,e=t*i;Vn.left=-e/2,Vn.right=e/2,Vn.top=t/2,Vn.bottom=-t/2,Vn.updateProjectionMatrix(),ho.setSize(window.innerWidth,window.innerHeight)});let Yp=Ke.tanks.map(i=>i.alive),Ur=null,Mn=null,Or=!1;function Fa(){requestAnimationFrame(Fa);const i=Ig();GA(i,pn,Vn,sc);const t=Eh(i.round_index);Cg(t),Na()&&(m2(),i.phase===zs&&T2(i)),w2(i),i.phase==="firing"&&i.current_shooter&&(Ur=i.current_shooter);for(let e=0;e<i.tanks.length;e++)if(Yp[e]&&!i.tanks[e].alive){const n=i.tanks[e];Ur&&Ur!==n&&Ur.alive&&qA(Ur),YA(n)}Yp=i.tanks.map(e=>e.alive);for(let e=0;e<i.tanks.length;e++){const n=i.tanks[e],s=wu[e];if(!s)continue;if(!n.alive){s.visible=!1;continue}const r=Math.round(n.x);for(let o=0;o<i.terrain.h;o++)if(i.terrain.is_dirt(r,o)){const a=r-i.w/2,c=(i.h-o)/i.h*300+4;s.position.set(a,c,0),s.visible=!0;const l=s.userData.model3d;l&&(l.position.set(a,c,0),l.visible=!0);break}}if(Su&&Da){const e=i.current_shooter;Da.update({angle:e?.angle??90,power:e?.power??0,wind:i.cfg.wind,tank:e?{name:e.name,health:e.health,maxHealth:100,alive:e.alive,shieldHp:e.shield_hp,shieldItem:e.shield_item}:null,weaponSlot:e?.selected_weapon??0,timeLeft:void 0,turnLabel:i.phase==="aim"&&i.awaiting_human?"YOUR TURN":i.phase==="firing"?"FLIGHT":""})}if(i.phase===zs&&!Mn){const e=i.tanks.find(n=>n.ai_class===0);e&&(Mn=new jA(i.economy,e),Mn.open())}if(i.phase!==zs&&Mn&&(Mn.destroy(),Mn=null,fa=!1),i.phase===zs&&Mn&&!Mn.visible&&!fa&&(Na()?A2(i):(fa=!0,i.run_ai_buys(),i.begin_next_round(),Mn=null)),i.phase===bh){if(!Or){Or=!0,i.round_index;const e=[...i.tanks].sort((n,s)=>s.score-n.score).map((n,s)=>({name:n.name,score:n.score,alive:n.alive,rank:s+1}));fR(e,i.round_index,()=>{i.proceed_after_round(),document.getElementById("menu-standings")?.remove()})}}else Or=!1;if(i.phase===B_&&!Or){Or=!0;const e=i.winner??i.ranking[0],n=Eh(i.round_index).toUpperCase();e?pR(e.name,e.score,n,()=>{location.reload()}):location.reload()}ho.render(pn,Vn)}function T2(i){if(Xp!==i.round_index&&(Xp=i.round_index,i.run_ai_buys()),vl)return;const t=window.__mpSession;if(t)if(t.role==="host"){const e=t.adapter.humanDeviceIds();if(e.every(s=>Oa.has(s))){const s={};for(const r of e){const o=Oa.get(r);s[r]={inv:o.inv,cash:o.cash}}t.session.sendShopFinal(i.round_index,s),Kp(i,s),vl=!0}}else{const e=window.__mpShopFinal;e&&e.round===i.round_index&&(Kp(i,e.results),vl=!0)}}function A2(i){const t=window.__mpSession;if(!t)return;const e=f2(),n=i.tanks[e];n&&(Oa.set(fe,{round:i.round_index,inv:n.inventory.slice(),cash:n.cash}),t.session.sendShop(i.round_index,n.inventory.slice(),n.cash),fa=!0,Mn?.destroy(),Mn=null)}function Kp(i,t){const e=window.__mpSession;if(!e)return;const n=e.adapter.deviceIds();for(let s=0;s<n.length;s++){const r=t[n[s]];if(!r)continue;const o=i.tanks[s];if(o){for(let a=0;a<o.inventory.length;a++)o.inventory[a]=r.inv[a]??0;o.cash=r.cash}}i.begin_next_round()}const R2=new Hm,$p=["./models/falcon9.glb","./models/new_shepard.glb","./models/starship.glb","./models/delta_spaceplane.glb","./models/terran_r.glb"];async function Ng(){for(let i=0;i<$p.length;i++)try{const e=(await R2.loadAsync($p[i])).scene.clone(!0);e.scale.set(.15,.15,.15),e.visible=!1,pn.add(e),i<Ke.tanks.length&&(wu[i].userData.model3d=e)}catch{}}async function C2(){const i=document.getElementById("loading-bar"),t=document.getElementById("loading-pct"),e=document.getElementById("loading");try{t.textContent="Generating terrain...",i.style.width="20%",Ke.start_round(),t.textContent="Ready",i.style.width="100%",t.textContent="",document.getElementById("btn-play").addEventListener("click",()=>{ms.remove(),e.classList.add("done"),Qe.SOUND="ON",Vt.enabled=!0,Da=new X_,Su=!0,eo=new q_({onSend:n=>eo?.system(`relayed to 0 peers: "${n}"`)}),Ua=new Y_(Lg),Ng().catch(()=>{}),W_().catch(()=>{}),z_().catch(()=>{}),requestAnimationFrame(Fa)})}catch(n){console.error(n),t.textContent="Error loading",setTimeout(()=>e.classList.add("done"),1e3),requestAnimationFrame(Fa)}}Cg("earth");C2();window.__game=Ke;window.__scene=pn;
