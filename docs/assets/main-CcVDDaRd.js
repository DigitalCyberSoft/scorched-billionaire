var Up=Object.defineProperty;var Op=(i,t,e)=>t in i?Up(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var v=(i,t,e)=>Op(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="170",Fp=0,jl=1,Bp=2,Nf=1,kp=2,zn=3,$n=0,Ge=1,un=2,gi=0,ds=1,oc=2,th=3,eh=4,Hp=5,Ni=100,zp=101,Gp=102,Vp=103,Wp=104,Xp=200,qp=201,Yp=202,Kp=203,ac=204,cc=205,$p=206,Zp=207,Jp=208,Qp=209,jp=210,tm=211,em=212,nm=213,im=214,lc=0,hc=1,uc=2,xs=3,fc=4,dc=5,pc=6,mc=7,Uf=0,sm=1,rm=2,xi=0,om=1,am=2,cm=3,lm=4,hm=5,um=6,fm=7,nh="attached",dm="detached",Of=300,vs=301,ys=302,_c=303,gc=304,ko=306,Ms=1e3,pi=1001,wo=1002,Oe=1003,Ff=1004,ir=1005,ze=1006,po=1007,Wn=1008,Zn=1009,Bf=1010,kf=1011,fr=1012,pl=1013,Hi=1014,mn=1015,xr=1016,ml=1017,_l=1018,Ss=1020,Hf=35902,zf=1021,Gf=1022,je=1023,Vf=1024,Wf=1025,ps=1026,Es=1027,gl=1028,xl=1029,Xf=1030,vl=1031,yl=1033,mo=33776,_o=33777,go=33778,xo=33779,xc=35840,vc=35841,yc=35842,Mc=35843,Sc=36196,Ec=37492,bc=37496,Tc=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Lc=37813,Ic=37814,Pc=37815,Dc=37816,Nc=37817,Uc=37818,Oc=37819,Fc=37820,Bc=37821,vo=36492,kc=36494,Hc=36495,qf=36283,zc=36284,Gc=36285,Vc=36286,dr=2300,pr=2301,ea=2302,ih=2400,sh=2401,rh=2402,pm=2500,mm=0,Yf=1,Wc=2,_m=3200,gm=3201,Kf=0,xm=1,di="",we="srgb",Be="srgb-linear",Ho="linear",ne="srgb",qi=7680,oh=519,vm=512,ym=513,Mm=514,$f=515,Sm=516,Em=517,bm=518,Tm=519,Xc=35044,ah="300 es",Xn=2e3,Ao=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ch=1234567;const lr=Math.PI/180,bs=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Ml(i,t){return(i%t+t)%t}function wm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Am(i,t,e){return i!==t?(e-i)/(t-i):0}function hr(i,t,e){return(1-e)*i+e*t}function Rm(i,t,e,n){return hr(i,t,1-Math.exp(-e*n))}function Cm(i,t=1){return t-Math.abs(Ml(i,t*2)-t)}function Lm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Im(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dm(i,t){return i+Math.random()*(t-i)}function Nm(i){return i*(.5-Math.random())}function Um(i){i!==void 0&&(ch=i);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Om(i){return i*lr}function Fm(i){return i*bs}function Bm(i){return(i&i-1)===0&&i!==0}function km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gm={DEG2RAD:lr,RAD2DEG:bs,generateUUID:_n,clamp:De,euclideanModulo:Ml,mapLinear:wm,inverseLerp:Am,lerp:hr,damp:Rm,pingpong:Cm,smoothstep:Lm,smootherstep:Im,randInt:Pm,randFloat:Dm,randFloatSpread:Nm,seededRandom:Um,degToRad:Om,radToDeg:Fm,isPowerOfTwo:Bm,ceilPowerOfTwo:km,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:zm,normalize:te,denormalize:fn};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,o,a,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=s[0],m=s[3],p=s[6],b=s[1],w=s[4],S=s[7],O=s[2],R=s[5],A=s[8];return r[0]=o*g+a*b+c*O,r[3]=o*m+a*w+c*R,r[6]=o*p+a*S+c*A,r[1]=l*g+h*b+u*O,r[4]=l*m+h*w+u*R,r[7]=l*p+h*S+u*A,r[2]=f*g+d*b+_*O,r[5]=f*m+d*w+_*R,r[8]=f*p+d*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=e*u+n*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Ut;function Zf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vm(){const i=mr("canvas");return i.style.display="block",i}const lh={};function sr(i){i in lh||(lh[i]=!0,console.warn(i))}function Wm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zt={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hh=[.64,.33,.3,.6,.15,.06],uh=[.2126,.7152,.0722],fh=[.3127,.329],dh=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[Be]:{primaries:hh,whitePoint:fh,transfer:Ho,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:uh,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:hh,whitePoint:fh,transfer:ne,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:uh,outputColorSpaceConfig:{drawingBufferColorSpace:we}}});let Yi;class Ym{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=mr("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Km=0;class Jf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ym.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $m=0;class ve extends Cs{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=pi,s=pi,r=ze,o=Wn,a=je,c=Zn,l=ve.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=_n(),this.name="",this.source=new Jf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=Of;ve.DEFAULT_ANISOTROPY=1;class $t{constructor(t=0,e=0,n=0,s=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,S=(d+1)/2,O=(p+1)/2,R=(h+f)/4,A=(u+g)/4,P=(_+m)/4;return w>S&&w>O?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=A/n):S>O?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=P/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=A/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-g)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zm extends Cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Zm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qf extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==d||h!==_){let m=1-a;const p=c*f+l*d+h*_+u*g,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const O=Math.sqrt(w),R=Math.atan2(O,p*b);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}const S=a*b;if(c=c*m+f*S,l=l*m+d*S,h=h*m+_*S,u=u*m+g*S,m===1-a){const O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-a*d,t[e+2]=l*_+h*d+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new I,mh=new Si;class jn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Cr.subVectors(this.max,Hs),Ki.subVectors(t.a,Hs),$i.subVectors(t.b,Hs),Zi.subVectors(t.c,Hs),ni.subVectors($i,Ki),ii.subVectors(Zi,$i),Ti.subVectors(Ki,Zi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ti.z,Ti.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ti.z,0,-Ti.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ti.y,Ti.x,0];return!ra(e,Ki,$i,Zi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Ki,$i,Zi,Cr))?!1:(Lr.crossVectors(ni,ii),e=[Lr.x,Lr.y,Lr.z],ra(e,Ki,$i,Zi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new I,new I,new I,new I,new I,new I,new I,new I],an=new I,Rr=new jn,Ki=new I,$i=new I,Zi=new I,ni=new I,ii=new I,Ti=new I,Hs=new I,Cr=new I,Lr=new I,wi=new I;function ra(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Qm=new jn,zs=new I,oa=new I;class Ln{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(oa)),this.expandByPoint(zs.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new I,aa=new I,Ir=new I,si=new I,ca=new I,Pr=new I,la=new I;class zo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){aa.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),si.copy(this.origin).sub(aa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=si.dot(this.direction),c=-si.dot(Ir),l=si.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(Ir,f),d}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){ca.subVectors(e,t),Pr.subVectors(n,t),la.crossVectors(ca,Pr);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);const c=a*this.direction.dot(Pr.crossVectors(si,Pr));if(c<0)return null;const l=a*this.direction.dot(ca.cross(si));if(l<0||c+l>o)return null;const h=-a*si.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,_,g,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,_,g,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jm,t,t_)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),ri.crossVectors(n,Xe),ri.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),ri.crossVectors(n,Xe)),ri.normalize(),Dr.crossVectors(Xe,ri),s[0]=ri.x,s[4]=Dr.x,s[8]=Xe.x,s[1]=ri.y,s[5]=Dr.y,s[9]=Xe.y,s[2]=ri.z,s[6]=Dr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],w=n[7],S=n[11],O=n[15],R=s[0],A=s[4],P=s[8],E=s[12],M=s[1],C=s[5],z=s[9],H=s[13],X=s[2],Z=s[6],W=s[10],Q=s[14],V=s[3],st=s[7],ht=s[11],yt=s[15];return r[0]=o*R+a*M+c*X+l*V,r[4]=o*A+a*C+c*Z+l*st,r[8]=o*P+a*z+c*W+l*ht,r[12]=o*E+a*H+c*Q+l*yt,r[1]=h*R+u*M+f*X+d*V,r[5]=h*A+u*C+f*Z+d*st,r[9]=h*P+u*z+f*W+d*ht,r[13]=h*E+u*H+f*Q+d*yt,r[2]=_*R+g*M+m*X+p*V,r[6]=_*A+g*C+m*Z+p*st,r[10]=_*P+g*z+m*W+p*ht,r[14]=_*E+g*H+m*Q+p*yt,r[3]=b*R+w*M+S*X+O*V,r[7]=b*A+w*C+S*Z+O*st,r[11]=b*P+w*z+S*W+O*ht,r[15]=b*E+w*H+S*Q+O*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+g*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],b=u*m*l-g*f*l+g*c*d-a*m*d-u*c*p+a*f*p,w=_*f*l-h*m*l-_*c*d+o*m*d+h*c*p-o*f*p,S=h*g*l-_*u*l+_*a*d-o*g*d-h*a*p+o*u*p,O=_*u*c-h*g*c-_*a*f+o*g*f+h*a*m-o*u*m,R=e*b+n*w+s*S+r*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=b*A,t[1]=(g*f*r-u*m*r-g*s*d+n*m*d+u*s*p-n*f*p)*A,t[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*p+n*c*p)*A,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*A,t[4]=w*A,t[5]=(h*m*r-_*f*r+_*s*d-e*m*d-h*s*p+e*f*p)*A,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*A,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*A,t[8]=S*A,t[9]=(_*u*r-h*g*r-_*n*d+e*g*d+h*n*p-e*u*p)*A,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*A,t[12]=O*A,t[13]=(h*g*s-_*u*s+_*n*f-e*g*f-h*n*m+e*u*m)*A,t[14]=(_*a*s-o*g*s-_*n*c+e*g*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,g=o*h,m=o*u,p=a*u,b=c*l,w=c*h,S=c*u,O=n.x,R=n.y,A=n.z;return s[0]=(1-(g+p))*O,s[1]=(d+S)*O,s[2]=(_-w)*O,s[3]=0,s[4]=(d-S)*R,s[5]=(1-(f+p))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(_+w)*A,s[9]=(m-b)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const l=1/r,h=1/o,u=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Xn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,_;if(a===Xn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h;let _,g;if(a===Xn)_=(o+r)*u,g=-2*u;else if(a===Ao)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new I,cn=new It,jm=new I(0,0,0),t_=new I(1,1,1),ri=new I,Dr=new I,Xe=new I,_h=new It,gh=new Si;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let e_=0;const xh=new I,Qi=new Si,Fn=new It,Nr=new I,Gs=new I,n_=new I,i_=new Si,vh=new I(1,0,0),yh=new I(0,1,0),Mh=new I(0,0,1),Sh={type:"added"},s_={type:"removed"},ji={type:"childadded",child:null},ha={type:"childremoved",child:null};class fe extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new I,e=new An,n=new Si,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new Ut}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(vh,t)}rotateY(t){return this.rotateOnAxis(yh,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vh,t)}translateY(t){return this.translateOnAxis(yh,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Gs,Nr,this.up):Fn.lookAt(Nr,Gs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(s_),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,n_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,i_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new I(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new I,Bn=new I,ua=new I,kn=new I,ts=new I,es=new I,Eh=new I,fa=new I,da=new I,pa=new I,ma=new $t,_a=new $t,ga=new $t;class Qe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Bn.subVectors(n,e),ua.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Bn),c=ln.dot(ua),l=Bn.dot(Bn),h=Bn.dot(ua),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ma.setScalar(0),_a.setScalar(0),ga.setScalar(0),ma.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(_a,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Bn.subVectors(t,e),ln.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),ln.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,n),es.subVectors(r,n),fa.subVectors(t,n);const c=ts.dot(fa),l=es.dot(fa);if(c<=0&&l<=0)return e.copy(n);da.subVectors(t,s);const h=ts.dot(da),u=es.dot(da);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ts,o);pa.subVectors(t,r);const d=ts.dot(pa),_=es.dot(pa);if(_>=0&&d<=_)return e.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(es,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Eh.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(Eh,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=Ml(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xa(o,r,t+1/3),this.g=xa(o,r,t),this.b=xa(o,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return zt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(De(Ie.r*255,0,255))*65536+Math.round(De(Ie.g*255,0,255))*256+Math.round(De(Ie.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=we){zt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Ur);const n=hr(oi.h,Ur.h,e),s=hr(oi.s,Ur.s,e),r=hr(oi.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new St;St.NAMES=td;let r_=0;class gn extends Cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=_n(),this.name="",this.blending=ds,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fi extends gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new I,Or=new Lt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xc&&(t.usage=this.usage),t}}class ed extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nd extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class en extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let o_=0;const Ze=new It,va=new fe,ns=new I,qe=new jn,Vs=new jn,Se=new I;class sn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?nd:ed)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(qe.min,Vs.min),qe.expandByPoint(Se),Se.addVectors(qe.max,Vs.max),qe.expandByPoint(Se)):(qe.expandByPoint(Vs.min),qe.expandByPoint(Vs.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(t,l),Se.add(ns)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,f=new Lt,d=new Lt,_=new Lt,g=new I,m=new I;function p(P,E,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(C),a[P].add(g),a[E].add(g),a[M].add(g),c[P].add(m),c[E].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,E=b.length;P<E;++P){const M=b[P],C=M.start,z=M.count;for(let H=C,X=C+z;H<X;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const w=new I,S=new I,O=new I,R=new I;function A(P){O.fromBufferAttribute(s,P),R.copy(O);const E=a[P];w.copy(E),w.sub(O.multiplyScalar(O.dot(E))).normalize(),S.crossVectors(R,E);const C=S.dot(c[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,C)}for(let P=0,E=b.length;P<E;++P){const M=b[P],C=M.start,z=M.count;for(let H=C,X=C+z;H<X;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*h;for(let p=0;p<h;p++)f[_++]=l[d++]}return new Fe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bh=new It,Ai=new zo,Fr=new Ln,Th=new I,Br=new I,kr=new I,Hr=new I,ya=new I,zr=new I,wh=new I,Gr=new I;class Ae extends fe{constructor(t=new sn,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ya.fromBufferAttribute(u,t),o?zr.addScaledVector(ya,h):zr.addScaledVector(ya.sub(e),h))}e.add(zr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Fr,Th)===null||Ai.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(bh.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,O=w;S<O;S+=3){const R=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);s=Vr(this,p,t,n,l,h,u,R,A,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);s=Vr(this,o,t,n,l,h,u,b,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,O=w;S<O;S+=3){const R=S,A=S+1,P=S+2;s=Vr(this,p,t,n,l,h,u,R,A,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=m,w=m+1,S=m+2;s=Vr(this,o,t,n,l,h,u,b,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function a_(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===$n,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:i}}function Vr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Br),i.getVertexPosition(c,kr),i.getVertexPosition(l,Hr);const h=a_(i,t,e,n,Br,kr,Hr,wh);if(h){const u=new I;Qe.getBarycoord(wh,Br,kr,Hr,u),s&&(h.uv=Qe.getInterpolatedAttribute(s,a,c,l,u,new Lt)),r&&(h.uv1=Qe.getInterpolatedAttribute(r,a,c,l,u,new Lt)),o&&(h.normal=Qe.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};Qe.getNormal(Br,kr,Hr,f.normal),h.face=f,h.barycoord=u}return h}class Ls extends sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function _(g,m,p,b,w,S,O,R,A,P,E){const M=S/A,C=O/P,z=S/2,H=O/2,X=R/2,Z=A+1,W=P+1;let Q=0,V=0;const st=new I;for(let ht=0;ht<W;ht++){const yt=ht*C-H;for(let Bt=0;Bt<Z;Bt++){const ie=Bt*M-z;st[g]=ie*b,st[m]=yt*w,st[p]=X,l.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[p]=R>0?1:-1,h.push(st.x,st.y,st.z),u.push(Bt/A),u.push(1-ht/P),Q+=1}}for(let ht=0;ht<P;ht++)for(let yt=0;yt<A;yt++){const Bt=f+yt+Z*ht,ie=f+yt+Z*(ht+1),Y=f+(yt+1)+Z*(ht+1),et=f+(yt+1)+Z*ht;c.push(Bt,ie,et),c.push(ie,Y,et),V+=6}a.addGroup(d,V,E),d+=V,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function c_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function id(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const l_={clone:Ts,merge:Ue};var h_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=c_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sd extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new I,Ah=new Lt,Rh=new Lt;class He extends sd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Ah,Rh),e.subVectors(Rh,Ah)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class f_ extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new He(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new He(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new He(is,ss,t,e);a.layers=this.layers,this.add(a);const c=new He(is,ss,t,e);c.layers=this.layers,this.add(c);const l=new He(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class rd extends ve{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class d_ extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ls(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:gi});r.uniforms.tEquirect.value=e;const o=new Ae(s,r),a=e.minFilter;return e.minFilter===Wn&&(e.minFilter=ze),new f_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ma=new I,p_=new I,m_=new Ut;class Pi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ma.subVectors(n,e).cross(p_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||m_.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ln,Wr=new I;class Sl{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],g=s[10],m=s[11],p=s[12],b=s[13],w=s[14],S=s[15];if(n[0].setComponents(c-r,f-l,m-d,S-p).normalize(),n[1].setComponents(c+r,f+l,m+d,S+p).normalize(),n[2].setComponents(c+o,f+h,m+_,S+b).normalize(),n[3].setComponents(c-o,f-h,m-_,S-b).normalize(),n[4].setComponents(c-a,f-u,m-g,S-w).normalize(),e===Xn)n[5].setComponents(c+a,f+u,m+g,S+w).normalize();else if(e===Ao)n[5].setComponents(a,u,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function od(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function __(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Is extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const b=p*f-o;for(let w=0;w<l;w++){const S=w*u-r;_.push(S,-b,0),g.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const w=b+l*p,S=b+l*(p+1),O=b+1+l*(p+1),R=b+1+l*p;d.push(w,S,R),d.push(S,O,R)}this.setIndex(d),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}var g_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
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
#endif`,v_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E_=`#ifdef USE_AOMAP
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
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T_=`#ifdef USE_BATCHING
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
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L_=`#ifdef USE_IRIDESCENCE
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
#endif`,I_=`#ifdef USE_BUMPMAP
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
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H_=`#define PI 3.141592653589793
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
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G_=`vec3 transformedNormal = objectNormal;
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
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",K_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
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
#endif`,mg=`struct PhysicalMaterial {
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
}`,_g=`
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,F0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,H0=`#define STANDARD
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
}`,z0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,V0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,K0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:g_,alphahash_pars_fragment:x_,alphamap_fragment:v_,alphamap_pars_fragment:y_,alphatest_fragment:M_,alphatest_pars_fragment:S_,aomap_fragment:E_,aomap_pars_fragment:b_,batching_pars_vertex:T_,batching_vertex:w_,begin_vertex:A_,beginnormal_vertex:R_,bsdfs:C_,iridescence_fragment:L_,bumpmap_pars_fragment:I_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:D_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:U_,color_fragment:O_,color_pars_fragment:F_,color_pars_vertex:B_,color_vertex:k_,common:H_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:G_,displacementmap_pars_vertex:V_,displacementmap_vertex:W_,emissivemap_fragment:X_,emissivemap_pars_fragment:q_,colorspace_fragment:Y_,colorspace_pars_fragment:K_,envmap_fragment:$_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:J_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:lg,envmap_vertex:j_,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:cg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:fg,lights_phong_pars_fragment:dg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:_g,lights_fragment_maps:gg,lights_fragment_end:xg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:Eg,map_pars_fragment:bg,map_particle_fragment:Tg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Cg,morphcolor_vertex:Lg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Pg,morphtarget_vertex:Dg,normal_fragment_begin:Ng,normal_fragment_maps:Ug,normal_pars_fragment:Og,normal_pars_vertex:Fg,normal_vertex:Bg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Kg,dithering_pars_fragment:$g,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:jg,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:c0,tonemapping_pars_fragment:l0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:f0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:_0,background_frag:g0,backgroundCube_vert:x0,backgroundCube_frag:v0,cube_vert:y0,cube_frag:M0,depth_vert:S0,depth_frag:E0,distanceRGBA_vert:b0,distanceRGBA_frag:T0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:L0,meshbasic_frag:I0,meshlambert_vert:P0,meshlambert_frag:D0,meshmatcap_vert:N0,meshmatcap_frag:U0,meshnormal_vert:O0,meshnormal_frag:F0,meshphong_vert:B0,meshphong_frag:k0,meshphysical_vert:H0,meshphysical_frag:z0,meshtoon_vert:G0,meshtoon_frag:V0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:K0,sprite_frag:$0},nt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},En={basic:{uniforms:Ue([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ue([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new St(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ue([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ue([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ue([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new St(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ue([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ue([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ue([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ue([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ue([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ue([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ue([nt.common,nt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ue([nt.lights,nt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};En.physical={uniforms:Ue([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Xr={r:0,b:0,g:0},Ci=new An,Z0=new It;function J0(i,t,e,n,s,r,o){const a=new St(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function g(b){let w=!1;const S=_(b);S===null?p(a,c):S&&S.isColor&&(p(S,1),w=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,w){const S=_(w);S&&(S.isCubeTexture||S.mapping===ko)?(h===void 0&&(h=new Ae(new Ls(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ts(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(w.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Ci)),h.material.toneMapped=zt.getTransfer(S.colorSpace)!==ne,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ae(new Is(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ts(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=zt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,w){b.getRGB(Xr,id(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),c=w,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:g,addToRenderList:m}}function Q0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,C,z,H,X){let Z=!1;const W=u(H,z,C);r!==W&&(r=W,l(r.object)),Z=d(M,H,z,X),Z&&_(M,H,z,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(M,C,z,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,z){const H=z.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let Z=X[C.id];Z===void 0&&(Z={},X[C.id]=Z);let W=Z[H];return W===void 0&&(W=f(c()),Z[H]=W),W}function f(M){const C=[],z=[],H=[];for(let X=0;X<e;X++)C[X]=0,z[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,C,z,H){const X=r.attributes,Z=C.attributes;let W=0;const Q=z.getAttributes();for(const V in Q)if(Q[V].location>=0){const ht=X[V];let yt=Z[V];if(yt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function _(M,C,z,H){const X={},Z=C.attributes;let W=0;const Q=z.getAttributes();for(const V in Q)if(Q[V].location>=0){let ht=Z[V];ht===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),X[V]=yt,W++}r.attributes=X,r.attributesNum=W,r.index=H}function g(){const M=r.newAttributes;for(let C=0,z=M.length;C<z;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const z=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;z[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),X[M]!==C&&(i.vertexAttribDivisor(M,C),X[M]=C)}function b(){const M=r.newAttributes,C=r.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==M[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function w(M,C,z,H,X,Z,W){W===!0?i.vertexAttribIPointer(M,C,z,X,Z):i.vertexAttribPointer(M,C,z,H,X,Z)}function S(M,C,z,H){g();const X=H.attributes,Z=z.getAttributes(),W=C.defaultAttributeValues;for(const Q in Z){const V=Z[Q];if(V.location>=0){let st=X[Q];if(st===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ht=st.normalized,yt=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const ie=Bt.buffer,Y=Bt.type,et=Bt.bytesPerElement,gt=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===pl;if(st.isInterleavedBufferAttribute){const rt=st.data,wt=rt.stride,Ct=st.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<V.locationSize;kt++)p(V.location+kt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<V.locationSize;kt++)m(V.location+kt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let kt=0;kt<V.locationSize;kt++)w(V.location+kt,yt/V.locationSize,Y,ht,wt*et,(Ct+yt/V.locationSize*kt)*et,gt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let rt=0;rt<V.locationSize;rt++)w(V.location+rt,yt/V.locationSize,Y,ht,yt*et,yt/V.locationSize*rt*et,gt)}}else if(W!==void 0){const ht=W[Q];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(V.location,ht);break;case 3:i.vertexAttrib3fv(V.location,ht);break;case 4:i.vertexAttrib4fv(V.location,ht);break;default:i.vertexAttrib1fv(V.location,ht)}}}}b()}function O(){P();for(const M in n){const C=n[M];for(const z in C){const H=C[z];for(const X in H)h(H[X].object),delete H[X];delete C[z]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const z in C){const H=C[z];for(const X in H)h(H[X].object),delete H[X];delete C[z]}delete n[M.id]}function A(M){for(const C in n){const z=n[C];if(z[M.id]===void 0)continue;const H=z[M.id];for(const X in H)h(H[X].object),delete H[X];delete z[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function j0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==je&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:O,maxSamples:R}}function ex(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Pi,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,w=b*4;let S=p.clippingState||null;c.value=S,S=h(_,f,w,d);for(let O=0;O!==w;++O)S[O]=e[O];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=d;w!==g;++w,S+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function nx(i){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=vs:a===gc&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_c||a===gc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new d_(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Go extends sd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fs=4,Ch=[.125,.215,.35,.446,.526,.582],Ui=20,Sa=new Go,Lh=new St;let Ea=null,ba=0,Ta=0,wa=!1;const Di=(1+Math.sqrt(5))/2,rs=1/Di,Ih=[new I(-Di,rs,0),new I(Di,rs,0),new I(-rs,0,Di),new I(rs,0,Di),new I(0,Di,-rs),new I(0,Di,rs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,ba,Ta),this._renderer.xr.enabled=wa,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:xr,format:je,colorSpace:Be,depthBuffer:!1},s=Dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lh),h.toneMapping=xi,h.autoClear=!1;const d=new Fi({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),_=new Ae(new Ls,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Lh),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const w=this._cubeSize;qr(s,b*w,p>2?w:0,w,w),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ih[(s-r-1)%Ih.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let b=0;for(let A=0;A<Ui;++A){const P=A/g,E=Math.exp(-P*P/2);p.push(E),A===0?b+=E:A<m&&(b+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-n;const S=this._sizeLods[s],O=3*S*(s>w-fs?s-w+fs:0),R=4*(this._cubeSize-S);qr(e,O,R,3*S,2*S),c.setRenderTarget(e),c.render(u,Sa)}}function ix(i){const t=[],e=[],n=[];let s=i;const r=i-fs+1+Ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-fs?c=Ch[o-i+fs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*d),w=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,P=R>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(E,g*_*R),w.set(f,m*_*R);const M=[R,R,R,R,R,R];S.set(M,p*_*R)}const O=new sn;O.setAttribute("position",new Fe(b,g)),O.setAttribute("uv",new Fe(w,m)),O.setAttribute("faceIndex",new Fe(S,p)),t.push(O),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dh(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sx(i,t,e){const n=new Float32Array(Ui),s=new I(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Nh(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Uh(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function rx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_c||c===gc,h=c===vs||c===ys;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ph(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ph(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ox(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ax(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let w=0,S=b.length;w<S;w+=3){const O=b[w+0],R=b[w+1],A=b[w+2];f.push(O,R,R,A,A,O)}}else if(_!==void 0){const b=_.array;g=_.version;for(let w=0,S=b.length/3-1;w<S;w+=3){const O=w+0,R=w+1,A=w+2;f.push(O,R,R,A,A,O)}}else return;const m=new(Zf(f)?nd:ed)(f,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function cx(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function u(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b]*g[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hx(i,t,e){const n=new WeakMap,s=new $t;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let O=a.attributes.position.count*S,R=1;O>t.maxTextureSize&&(R=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const A=new Float32Array(O*R*4*u),P=new Qf(A,O,R,u);P.type=mn,P.needsUpdate=!0;const E=S*4;for(let C=0;C<u;C++){const z=p[C],H=b[C],X=w[C],Z=O*R*4*C;for(let W=0;W<z.count;W++){const Q=W*E;_===!0&&(s.fromBufferAttribute(z,W),A[Z+Q+0]=s.x,A[Z+Q+1]=s.y,A[Z+Q+2]=s.z,A[Z+Q+3]=0),g===!0&&(s.fromBufferAttribute(H,W),A[Z+Q+4]=s.x,A[Z+Q+5]=s.y,A[Z+Q+6]=s.z,A[Z+Q+7]=0),m===!0&&(s.fromBufferAttribute(X,W),A[Z+Q+8]=s.x,A[Z+Q+9]=s.y,A[Z+Q+10]=s.z,A[Z+Q+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new Lt(O,R)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ux(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class ad extends ve{constructor(t,e,n,s,r,o,a,c,l,h=ps){if(h!==ps&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Hi),n===void 0&&h===Es&&(n=Ss),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cd=new ve,Oh=new ad(1,1),ld=new Qf,hd=new Jm,ud=new rd,Fh=[],Bh=[],kh=new Float32Array(16),Hh=new Float32Array(9),zh=new Float32Array(4);function Ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vo(i,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function _x(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),Me(e,n)}}function gx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),Me(e,n)}}function xx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;kh.set(n),i.uniformMatrix4fv(this.addr,!1,kh),Me(e,n)}}function vx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Ex(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Ax(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oh.compareFunction=$f,r=Oh):r=cd,e.setTexture2D(t||r,s)}function Rx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hd,s)}function Cx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ud,s)}function Lx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ld,s)}function Ix(i){switch(i){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return _x;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return bx;case 36295:return Tx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Lx}}function Px(i,t){i.uniform1fv(this.addr,t)}function Dx(i,t){const e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Nx(i,t){const e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function Ux(i,t){const e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function Ox(i,t){const e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fx(i,t){const e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bx(i,t){const e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kx(i,t){i.uniform1iv(this.addr,t)}function Hx(i,t){i.uniform2iv(this.addr,t)}function zx(i,t){i.uniform3iv(this.addr,t)}function Gx(i,t){i.uniform4iv(this.addr,t)}function Vx(i,t){i.uniform1uiv(this.addr,t)}function Wx(i,t){i.uniform2uiv(this.addr,t)}function Xx(i,t){i.uniform3uiv(this.addr,t)}function qx(i,t){i.uniform4uiv(this.addr,t)}function Yx(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cd,r[o])}function Kx(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hd,r[o])}function $x(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ud,r[o])}function Zx(i,t,e){const n=this.cache,s=t.length,r=Vo(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ld,r[o])}function Jx(i){switch(i){case 5126:return Px;case 35664:return Dx;case 35665:return Nx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return Bx;case 5124:case 35670:return kx;case 35667:case 35671:return Hx;case 35668:case 35672:return zx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Zx}}class Qx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}}class jx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jx(e.type)}}class tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Gh(i,t){i.seq.push(t),i.map[t.id]=t}function ev(i,t,e){const n=i.name,s=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gh(e,l===void 0?new Qx(a,i,t):new jx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new tv(a),Gh(e,u)),e=u}}}class yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ev(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Vh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nv=37297;let iv=0;function sv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wh=new Ut;function rv(i){zt._getMatrix(Wh,zt.workingColorSpace,i);const t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sv(i.getShaderSource(t),o)}else return s}function ov(i,t){const e=rv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function av(i,t){let e;switch(t){case om:e="Linear";break;case am:e="Reinhard";break;case cm:e="Cineon";break;case lm:e="ACESFilmic";break;case um:e="AgX";break;case fm:e="Neutral";break;case hm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new I;function cv(){zt.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function hv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rr(i){return i!==""}function qh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(fv,pv)}const dv=new Map;function pv(i,t){let e=Ft[t];if(e===void 0){const n=dv.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qc(e)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(mv,_v)}function _v(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function gv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function xv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case ys:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function yv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uf:t="ENVMAP_BLENDING_MULTIPLY";break;case sm:t="ENVMAP_BLENDING_MIX";break;case rm:t="ENVMAP_BLENDING_ADD";break}return t}function Mv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=gv(e),l=xv(e),h=vv(e),u=yv(e),f=Mv(e),d=lv(e),_=hv(r),g=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Ft.tonemapping_pars_fragment:"",e.toneMapping!==xi?av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=qc(o),o=qh(o,e),o=Yh(o,e),a=qc(a),a=qh(a,e),a=Yh(a,e),o=Kh(o),a=Kh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+o,S=b+p+a,O=Vh(s,s.VERTEX_SHADER,w),R=Vh(s,s.FRAGMENT_SHADER,S);s.attachShader(g,O),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(g).trim(),H=s.getShaderInfoLog(O).trim(),X=s.getShaderInfoLog(R).trim();let Z=!0,W=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,O,R);else{const Q=Xh(s,O,"vertex"),V=Xh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+Q+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||X==="")&&(W=!1);W&&(C.diagnostics={runnable:Z,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(O),s.deleteShader(R),P=new yo(s,g),E=uv(s,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,nv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=R,this}let Ev=0;class bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tv(t),e.set(t,n)),n}}class Tv{constructor(t){this.id=Ev++,this.code=t,this.usedTimes=0}}function wv(i,t,e,n,s,r,o){const a=new jf,c=new bv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,z,H){const X=z.fog,Z=H.geometry,W=E.isMeshStandardMaterial?z.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),V=Q&&Q.mapping===ko?Q.image.height:null,st=_[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=ht!==void 0?ht.length:0;let Bt=0;Z.morphAttributes.position!==void 0&&(Bt=1),Z.morphAttributes.normal!==void 0&&(Bt=2),Z.morphAttributes.color!==void 0&&(Bt=3);let ie,Y,et,gt;if(st){const jt=En[st];ie=jt.vertexShader,Y=jt.fragmentShader}else ie=E.vertexShader,Y=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);const rt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Ct=H.isInstancedMesh===!0,kt=H.isBatchedMesh===!0,de=!!E.map,Xt=!!E.matcap,me=!!Q,U=!!E.aoMap,Ke=!!E.lightMap,Gt=!!E.bumpMap,Vt=!!E.normalMap,Et=!!E.displacementMap,le=!!E.emissiveMap,Mt=!!E.metalnessMap,T=!!E.roughnessMap,x=E.anisotropy>0,F=E.clearcoat>0,K=E.dispersion>0,J=E.iridescence>0,q=E.sheen>0,xt=E.transmission>0,ot=x&&!!E.anisotropyMap,ut=F&&!!E.clearcoatMap,qt=F&&!!E.clearcoatNormalMap,j=F&&!!E.clearcoatRoughnessMap,ft=J&&!!E.iridescenceMap,bt=J&&!!E.iridescenceThicknessMap,At=q&&!!E.sheenColorMap,dt=q&&!!E.sheenRoughnessMap,Wt=!!E.specularMap,Ot=!!E.specularColorMap,ae=!!E.specularIntensityMap,L=xt&&!!E.transmissionMap,it=xt&&!!E.thicknessMap,G=!!E.gradientMap,$=!!E.alphaMap,lt=E.alphaTest>0,at=!!E.alphaHash,Pt=!!E.extensions;let pe=xi;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Ce={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:Y,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:kt,batchingColor:kt&&H._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&H.instanceColor!==null,instancingMorph:Ct&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Be,alphaToCoverage:!!E.alphaToCoverage,map:de,matcap:Xt,envMap:me,envMapMode:me&&Q.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Ke,bumpMap:Gt,normalMap:Vt,displacementMap:f&&Et,emissiveMap:le,normalMapObjectSpace:Vt&&E.normalMapType===xm,normalMapTangentSpace:Vt&&E.normalMapType===Kf,metalnessMap:Mt,roughnessMap:T,anisotropy:x,anisotropyMap:ot,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:qt,clearcoatRoughnessMap:j,dispersion:K,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:q,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:ae,transmission:xt,transmissionMap:L,thicknessMap:it,gradientMap:G,opaque:E.transparent===!1&&E.blending===ds&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:at,combine:E.combine,mapUv:de&&g(E.map.channel),aoMapUv:U&&g(E.aoMap.channel),lightMapUv:Ke&&g(E.lightMap.channel),bumpMapUv:Gt&&g(E.bumpMap.channel),normalMapUv:Vt&&g(E.normalMap.channel),displacementMapUv:Et&&g(E.displacementMap.channel),emissiveMapUv:le&&g(E.emissiveMap.channel),metalnessMapUv:Mt&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:ot&&g(E.anisotropyMap.channel),clearcoatMapUv:ut&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(E.sheenRoughnessMap.channel),specularMapUv:Wt&&g(E.specularMap.channel),specularColorMapUv:Ot&&g(E.specularColorMap.channel),specularIntensityMapUv:ae&&g(E.specularIntensityMap.channel),transmissionMapUv:L&&g(E.transmissionMap.channel),thicknessMapUv:it&&g(E.thicknessMap.channel),alphaMapUv:$&&g(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Vt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(de||$),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:de&&E.map.isVideoTexture===!0&&zt.getTransfer(E.map.colorSpace)===ne,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&zt.getTransfer(E.emissiveMap.colorSpace)===ne,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===un,flipSided:E.side===Ge,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(M,E),w(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function w(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=_[E.type];let C;if(M){const z=En[M];C=l_.clone(z.uniforms)}else C=E.uniforms;return C}function O(E,M){let C;for(let z=0,H=h.length;z<H;z++){const X=h[z];if(X.cacheKey===M){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Sv(i,M,E,r),h.push(C)),C}function R(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:O,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:P}}function Av(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,_,g,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Rv),n.length>1&&n.sort(f||Zh),s.length>1&&s.sort(f||Zh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Cv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Jh,i.set(n,[o])):s>=r.length?(o=new Jh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new St};break;case"SpotLight":e={position:new I,direction:new I,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Iv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Pv=0;function Dv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Nv(i){const t=new Lv,e=Iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new It,o=new It;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,b=0,w=0,S=0,O=0,R=0,A=0;l.sort(Dv);for(let E=0,M=l.length;E<M;E++){const C=l[E],z=C.color,H=C.intensity,X=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*H,u+=z.g*H,f+=z.b*H;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],H);A++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=C.shadow.matrix,b++}n.directional[d]=W,d++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=X,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[g]=W;const Q=C.shadow;if(C.map&&(n.spotLightMap[O]=C.map,O++,Q.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[g]=Q.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Z,S++}g++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=C.shadow.matrix,w++}n.point[_]=W,_++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(H),W.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==S||P.numSpotMaps!==O||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=S,P.numSpotMaps=O,P.numLightProbes=A,n.version=Pv++)}function c(l,h){let u=0,f=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const w=l[p];if(w.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(w.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Qh(i){const t=new Nv(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Uv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qh(i),t.set(s,[a])):r>=o.length?(a=new Qh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ov extends gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fv extends gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
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
}`;function Hv(i,t,e){let n=new Sl;const s=new Lt,r=new Lt,o=new $t,a=new Ov({depthPacking:gm}),c=new Fv,l={},h=e.maxTextureSize,u={[$n]:Ge,[Ge]:$n,[un]:un},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Bv,fragmentShader:kv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ae(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf;let p=this.type;this.render=function(R,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(gi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==zn&&this.type===zn,X=p===zn&&this.type!==zn;for(let Z=0,W=R.length;Z<W;Z++){const Q=R[Z],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const st=V.getFrameExtents();if(s.multiply(st),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,V.mapSize.y=r.y)),V.map===null||H===!0||X===!0){const yt=this.type!==zn?{minFilter:Oe,magFilter:Oe}:{};V.map!==null&&V.map.dispose(),V.map=new zi(s.x,s.y,yt),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ht=V.getViewportCount();for(let yt=0;yt<ht;yt++){const Bt=V.getViewport(yt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(o),V.updateMatrices(Q,yt),n=V.getFrustum(),S(A,P,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&b(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,C)};function b(R,A){const P=t.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zi(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,P,d,g,null)}function w(R,A,P,E){let M=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,H=A.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let Z=X[H];Z===void 0&&(Z=M.clone(),X[H]=Z,A.addEventListener("dispose",O)),M=Z}if(M.visible=A.visible,M.wireframe=A.wireframe,E===zn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=P}return M}function S(R,A,P,E,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===zn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const H=t.update(R),X=R.material;if(Array.isArray(X)){const Z=H.groups;for(let W=0,Q=Z.length;W<Q;W++){const V=Z[W],st=X[V.materialIndex];if(st&&st.visible){const ht=w(R,st,E,M);R.onBeforeShadow(i,R,A,P,H,ht,V),i.renderBufferDirect(P,null,H,ht,R,V),R.onAfterShadow(i,R,A,P,H,ht,V)}}}else if(X.visible){const Z=w(R,X,E,M);R.onBeforeShadow(i,R,A,P,H,Z,null),i.renderBufferDirect(P,null,H,Z,R,null),R.onAfterShadow(i,R,A,P,H,Z,null)}}const z=R.children;for(let H=0,X=z.length;H<X;H++)S(z[H],A,P,E,M)}function O(R){R.target.removeEventListener("dispose",O);for(const P in l){const E=l[P],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const zv={[lc]:hc,[uc]:pc,[fc]:mc,[xs]:dc,[hc]:lc,[pc]:uc,[mc]:fc,[dc]:xs};function Gv(i,t){function e(){let L=!1;const it=new $t;let G=null;const $=new $t(0,0,0,0);return{setMask:function(lt){G!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){L=lt},setClear:function(lt,at,Pt,pe,Ce){Ce===!0&&(lt*=pe,at*=pe,Pt*=pe),it.set(lt,at,Pt,pe),$.equals(it)===!1&&(i.clearColor(lt,at,Pt,pe),$.copy(it))},reset:function(){L=!1,G=null,$.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,G=null,$=null,lt=null;return{setReversed:function(at){if(it!==at){const Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const pe=lt;lt=null,this.setClear(pe)}it=at},getReversed:function(){return it},setTest:function(at){at?rt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(at){G!==at&&!L&&(i.depthMask(at),G=at)},setFunc:function(at){if(it&&(at=zv[at]),$!==at){switch(at){case lc:i.depthFunc(i.NEVER);break;case hc:i.depthFunc(i.ALWAYS);break;case uc:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case fc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case pc:i.depthFunc(i.GREATER);break;case mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){L=at},setClear:function(at){lt!==at&&(it&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){L=!1,G=null,$=null,lt=null,it=!1}}}function s(){let L=!1,it=null,G=null,$=null,lt=null,at=null,Pt=null,pe=null,Ce=null;return{setTest:function(jt){L||(jt?rt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(jt){it!==jt&&!L&&(i.stencilMask(jt),it=jt)},setFunc:function(jt,rn,Dn){(G!==jt||$!==rn||lt!==Dn)&&(i.stencilFunc(jt,rn,Dn),G=jt,$=rn,lt=Dn)},setOp:function(jt,rn,Dn){(at!==jt||Pt!==rn||pe!==Dn)&&(i.stencilOp(jt,rn,Dn),at=jt,Pt=rn,pe=Dn)},setLocked:function(jt){L=jt},setClear:function(jt){Ce!==jt&&(i.clearStencil(jt),Ce=jt)},reset:function(){L=!1,it=null,G=null,$=null,lt=null,at=null,Pt=null,pe=null,Ce=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,w=null,S=null,O=null,R=null,A=new St(0,0,0),P=0,E=!1,M=null,C=null,z=null,H=null,X=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let st=null,ht={};const yt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ie=new $t().fromArray(yt),Y=new $t().fromArray(Bt);function et(L,it,G,$){const lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(L,at),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<G;Pt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}const gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(xs),Gt(!1),Vt(jl),rt(i.CULL_FACE),U(gi);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function wt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ct(L,it){return u[L]!==it?(i.bindFramebuffer(L,it),u[L]=it,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function kt(L,it){let G=d,$=!1;if(L){G=f.get(it),G===void 0&&(G=[],f.set(it,G));const lt=L.textures;if(G.length!==lt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Pt=lt.length;at<Pt;at++)G[at]=i.COLOR_ATTACHMENT0+at;G.length=lt.length,$=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,$=!0);$&&i.drawBuffers(G)}function de(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Xt={[Ni]:i.FUNC_ADD,[zp]:i.FUNC_SUBTRACT,[Gp]:i.FUNC_REVERSE_SUBTRACT};Xt[Vp]=i.MIN,Xt[Wp]=i.MAX;const me={[Xp]:i.ZERO,[qp]:i.ONE,[Yp]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[jp]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[$p]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Zp]:i.ONE_MINUS_DST_ALPHA,[tm]:i.CONSTANT_COLOR,[em]:i.ONE_MINUS_CONSTANT_COLOR,[nm]:i.CONSTANT_ALPHA,[im]:i.ONE_MINUS_CONSTANT_ALPHA};function U(L,it,G,$,lt,at,Pt,pe,Ce,jt){if(L===gi){g===!0&&(wt(i.BLEND),g=!1);return}if(g===!1&&(rt(i.BLEND),g=!0),L!==Hp){if(L!==m||jt!==E){if((p!==Ni||S!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,S=Ni),jt)switch(L){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,w=null,O=null,R=null,A.set(0,0,0),P=0,m=L,E=jt}return}lt=lt||it,at=at||G,Pt=Pt||$,(it!==p||lt!==S)&&(i.blendEquationSeparate(Xt[it],Xt[lt]),p=it,S=lt),(G!==b||$!==w||at!==O||Pt!==R)&&(i.blendFuncSeparate(me[G],me[$],me[at],me[Pt]),b=G,w=$,O=at,R=Pt),(pe.equals(A)===!1||Ce!==P)&&(i.blendColor(pe.r,pe.g,pe.b,Ce),A.copy(pe),P=Ce),m=L,E=!1}function Ke(L,it){L.side===un?wt(i.CULL_FACE):rt(i.CULL_FACE);let G=L.side===Ge;it&&(G=!G),Gt(G),L.blending===ds&&L.transparent===!1?U(gi):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const $=L.stencilWrite;a.setTest($),$&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Vt(L){L!==Fp?(rt(i.CULL_FACE),L!==C&&(L===jl?i.cullFace(i.BACK):L===Bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),C=L}function Et(L){L!==z&&(W&&i.lineWidth(L),z=L)}function le(L,it,G){L?(rt(i.POLYGON_OFFSET_FILL),(H!==it||X!==G)&&(i.polygonOffset(it,G),H=it,X=G)):wt(i.POLYGON_OFFSET_FILL)}function Mt(L){L?rt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+Z-1),st!==L&&(i.activeTexture(L),st=L)}function x(L,it,G){G===void 0&&(st===null?G=i.TEXTURE0+Z-1:G=st);let $=ht[G];$===void 0&&($={type:void 0,texture:void 0},ht[G]=$),($.type!==L||$.texture!==it)&&(st!==G&&(i.activeTexture(G),st=G),i.bindTexture(L,it||gt[L]),$.type=L,$.texture=it)}function F(){const L=ht[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){ie.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function dt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Wt(L,it){let G=l.get(it);G===void 0&&(G=new WeakMap,l.set(it,G));let $=G.get(L);$===void 0&&($=i.getUniformBlockIndex(it,L.name),G.set(L,$))}function Ot(L,it){const $=l.get(it).get(L);c.get(it)!==$&&(i.uniformBlockBinding(it,$,L.__bindingPointIndex),c.set(it,$))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,w=null,S=null,O=null,R=null,A=new St(0,0,0),P=0,E=!1,M=null,C=null,z=null,H=null,X=null,ie.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:wt,bindFramebuffer:Ct,drawBuffers:kt,useProgram:de,setBlending:U,setMaterial:Ke,setFlipSided:Gt,setCullFace:Vt,setLineWidth:Et,setPolygonOffset:le,setScissorTest:Mt,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ft,texImage3D:bt,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:qt,texStorage3D:j,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:At,viewport:dt,reset:ae}}function jh(i,t,e,n){const s=Vv(n);switch(e){case zf:return i*t;case Vf:return i*t;case Wf:return i*t*2;case gl:return i*t/s.components*s.byteLength;case xl:return i*t/s.components*s.byteLength;case Xf:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case Gf:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case mo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case Mc:return Math.max(i,16)*Math.max(t,8)/4;case xc:case yc:return Math.max(i,8)*Math.max(t,8)/2;case Sc:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case kc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qf:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vv(i){switch(i){case Zn:case Bf:return{byteLength:1,components:1};case fr:case kf:case xr:return{byteLength:2,components:1};case ml:case _l:return{byteLength:2,components:4};case Hi:case pl:case mn:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return d?new OffscreenCanvas(T,x):mr("canvas")}function g(T,x,F){let K=1;const J=Mt(T);if((J.width>F||J.height>F)&&(K=F/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(K*J.width),xt=Math.floor(K*J.height);u===void 0&&(u=_(q,xt));const ot=x?_(q,xt):u;return ot.width=q,ot.height=xt,ot.getContext("2d").drawImage(T,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+xt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,x,F,K,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),x===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const xt=J?Ho:zt.getTransfer(K);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=xt===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(T,x){let F;return T?x===null||x===Hi||x===Ss?F=i.DEPTH24_STENCIL8:x===mn?F=i.DEPTH32F_STENCIL8:x===fr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Hi||x===Ss?F=i.DEPTH_COMPONENT24:x===mn?F=i.DEPTH_COMPONENT32F:x===fr&&(F=i.DEPTH_COMPONENT16),F}function O(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Oe&&T.minFilter!==ze?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),P(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x)}function P(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,K=f.get(F);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(K).length===0&&f.delete(F)}n.remove(T)}function E(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const F=T.source,K=f.get(F);delete K[x.__cacheKey],o.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[K][J]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let K=0,J=F.length;K<J;K++){const q=n.get(F[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(T)}let C=0;function z(){C=0}function H(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Z(T,x){const F=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,T,x);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function W(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Y(F,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Q(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Y(F,T,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function V(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){et(F,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const st={[Ms]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},ht={[Oe]:i.NEAREST,[Ff]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},yt={[vm]:i.NEVER,[Tm]:i.ALWAYS,[ym]:i.LESS,[$f]:i.LEQUAL,[Mm]:i.EQUAL,[bm]:i.GEQUAL,[Sm]:i.GREATER,[Em]:i.NOTEQUAL};function Bt(T,x){if(x.type===mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ze||x.magFilter===po||x.magFilter===ir||x.magFilter===Wn||x.minFilter===ze||x.minFilter===po||x.minFilter===ir||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Oe||x.minFilter!==ir&&x.minFilter!==Wn||x.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const K=x.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const q=X(x);if(q!==T.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[q].usedTimes++;const xt=J[T.__cacheKey];xt!==void 0&&(J[T.__cacheKey].usedTimes--,xt.usedTimes===0&&E(x)),T.__cacheKey=q,T.__webglTexture=J[q].texture}return F}function Y(T,x,F){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const J=ie(T,x),q=x.source;e.bindTexture(K,T.__webglTexture,i.TEXTURE0+F);const xt=n.get(q);if(q.version!==xt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const ot=zt.getPrimaries(zt.workingColorSpace),ut=x.colorSpace===di?null:zt.getPrimaries(x.colorSpace),qt=x.colorSpace===di||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let j=g(x.image,!1,s.maxTextureSize);j=le(x,j);const ft=r.convert(x.format,x.colorSpace),bt=r.convert(x.type);let At=w(x.internalFormat,ft,bt,x.colorSpace,x.isVideoTexture);Bt(K,x);let dt;const Wt=x.mipmaps,Ot=x.isVideoTexture!==!0,ae=xt.__version===void 0||J===!0,L=q.dataReady,it=O(x,j);if(x.isDepthTexture)At=S(x.format===Es,x.type),ae&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,At,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,ft,bt,null));else if(x.isDataTexture)if(Wt.length>0){Ot&&ae&&e.texStorage2D(i.TEXTURE_2D,it,At,Wt[0].width,Wt[0].height);for(let G=0,$=Wt.length;G<$;G++)dt=Wt[G],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ft,bt,dt.data):e.texImage2D(i.TEXTURE_2D,G,At,dt.width,dt.height,0,ft,bt,dt.data);x.generateMipmaps=!1}else Ot?(ae&&e.texStorage2D(i.TEXTURE_2D,it,At,j.width,j.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ft,bt,j.data)):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,ft,bt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,Wt[0].width,Wt[0].height,j.depth);for(let G=0,$=Wt.length;G<$;G++)if(dt=Wt[G],x.format!==je)if(ft!==null)if(Ot){if(L)if(x.layerUpdates.size>0){const lt=jh(dt.width,dt.height,x.format,x.type);for(const at of x.layerUpdates){const Pt=dt.data.subarray(at*lt/dt.data.BYTES_PER_ELEMENT,(at+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,at,dt.width,dt.height,1,ft,Pt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,j.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,At,dt.width,dt.height,j.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,j.depth,ft,bt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,At,dt.width,dt.height,j.depth,0,ft,bt,dt.data)}else{Ot&&ae&&e.texStorage2D(i.TEXTURE_2D,it,At,Wt[0].width,Wt[0].height);for(let G=0,$=Wt.length;G<$;G++)dt=Wt[G],x.format!==je?ft!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ft,bt,dt.data):e.texImage2D(i.TEXTURE_2D,G,At,dt.width,dt.height,0,ft,bt,dt.data)}else if(x.isDataArrayTexture)if(Ot){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,j.width,j.height,j.depth),L)if(x.layerUpdates.size>0){const G=jh(j.width,j.height,x.format,x.type);for(const $ of x.layerUpdates){const lt=j.data.subarray($*G/j.data.BYTES_PER_ELEMENT,($+1)*G/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,j.width,j.height,1,ft,bt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,bt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,j.width,j.height,j.depth,0,ft,bt,j.data);else if(x.isData3DTexture)Ot?(ae&&e.texStorage3D(i.TEXTURE_3D,it,At,j.width,j.height,j.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,bt,j.data)):e.texImage3D(i.TEXTURE_3D,0,At,j.width,j.height,j.depth,0,ft,bt,j.data);else if(x.isFramebufferTexture){if(ae)if(Ot)e.texStorage2D(i.TEXTURE_2D,it,At,j.width,j.height);else{let G=j.width,$=j.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,At,G,$,0,ft,bt,null),G>>=1,$>>=1}}else if(Wt.length>0){if(Ot&&ae){const G=Mt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,it,At,G.width,G.height)}for(let G=0,$=Wt.length;G<$;G++)dt=Wt[G],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft,bt,dt):e.texImage2D(i.TEXTURE_2D,G,At,ft,bt,dt);x.generateMipmaps=!1}else if(Ot){if(ae){const G=Mt(j);e.texStorage2D(i.TEXTURE_2D,it,At,G.width,G.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,bt,j)}else e.texImage2D(i.TEXTURE_2D,0,At,ft,bt,j);m(x)&&p(K),xt.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function et(T,x,F){if(x.image.length!==6)return;const K=ie(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const q=n.get(J);if(J.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+F);const xt=zt.getPrimaries(zt.workingColorSpace),ot=x.colorSpace===di?null:zt.getPrimaries(x.colorSpace),ut=x.colorSpace===di||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const qt=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!qt&&!j?ft[$]=g(x.image[$],!0,s.maxCubemapSize):ft[$]=j?x.image[$].image:x.image[$],ft[$]=le(x,ft[$]);const bt=ft[0],At=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),Wt=w(x.internalFormat,At,dt,x.colorSpace),Ot=x.isVideoTexture!==!0,ae=q.__version===void 0||K===!0,L=J.dataReady;let it=O(x,bt);Bt(i.TEXTURE_CUBE_MAP,x);let G;if(qt){Ot&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,bt.width,bt.height);for(let $=0;$<6;$++){G=ft[$].mipmaps;for(let lt=0;lt<G.length;lt++){const at=G[lt];x.format!==je?At!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Wt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,at.width,at.height,At,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Wt,at.width,at.height,0,At,dt,at.data)}}}else{if(G=x.mipmaps,Ot&&ae){G.length>0&&it++;const $=Mt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,$.width,$.height)}for(let $=0;$<6;$++)if(j){Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,At,dt,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,ft[$].width,ft[$].height,0,At,dt,ft[$].data);for(let lt=0;lt<G.length;lt++){const Pt=G[lt].image[$].image;Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Pt.width,Pt.height,At,dt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Wt,Pt.width,Pt.height,0,At,dt,Pt.data)}}else{Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,dt,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,At,dt,ft[$]);for(let lt=0;lt<G.length;lt++){const at=G[lt];Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,At,dt,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Wt,At,dt,at.image[$])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function gt(T,x,F,K,J,q){const xt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ut=w(F.internalFormat,xt,ot,F.colorSpace),qt=n.get(x),j=n.get(F);if(j.__renderTarget=x,!qt.__hasExternalTextures){const ft=Math.max(1,x.width>>q),bt=Math.max(1,x.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,ut,ft,bt,x.depth,0,xt,ot,null):e.texImage2D(J,q,ut,ft,bt,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,j.__webglTexture,0,Gt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,j.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,q=S(x.stencilBuffer,J),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Gt(x);Vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,q,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,T)}else{const K=x.textures;for(let J=0;J<K.length;J++){const q=K[J],xt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),ut=w(q.internalFormat,xt,ot,q.colorSpace),qt=Gt(x);F&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ut,x.width,x.height):Vt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const J=K.__webglTexture,q=Gt(x);if(x.depthTexture.format===ps)Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===Es)Vt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ct(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");wt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[K],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,x,F){const K=n.get(T);x!==void 0&&gt(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ct(T)}function de(T){const x=T.texture,F=n.get(T),K=n.get(x);T.addEventListener("dispose",A);const J=T.textures,q=T.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ot=0,ut=J.length;ot<ut;ot++){const qt=n.get(J[ot]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Vt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ut=J[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const qt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),ft=w(ut.internalFormat,qt,j,ut.colorSpace,T.isXRRenderTarget===!0),bt=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)gt(F.__webglFramebuffer[ot][ut],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else gt(F.__webglFramebuffer[ot],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=J.length;ot<ut;ot++){const qt=J[ot],j=n.get(qt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Bt(i.TEXTURE_2D,qt),gt(F.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Bt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)gt(F.__webglFramebuffer[ut],T,x,i.COLOR_ATTACHMENT0,ot,ut);else gt(F.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&p(ot),e.unbindTexture()}T.depthBuffer&&Ct(T)}function Xt(T){const x=T.textures;for(let F=0,K=x.length;F<K;F++){const J=x[F];if(m(J)){const q=b(T),xt=n.get(J).__webglTexture;e.bindTexture(q,xt),p(q),e.unbindTexture()}}}const me=[],U=[];function Ke(T){if(T.samples>0){if(Vt(T)===!1){const x=T.textures,F=T.width,K=T.height;let J=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(T),ot=x.length>1;if(ot)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const qt=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,J,i.NEAREST),c===!0&&(me.length=0,U.length=0,me.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(me.push(q),U.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const qt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Vt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function le(T,x){const F=T.colorSpace,K=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Be&&F!==di&&(zt.getTransfer(F)===ne?(K!==je||J!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Vt}function Xv(i,t){function e(n,s=di){let r;const o=zt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bf)return i.BYTE;if(n===kf)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===zf)return i.ALPHA;if(n===Gf)return i.RGB;if(n===je)return i.RGBA;if(n===Vf)return i.LUMINANCE;if(n===Wf)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===Xf)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===mo||n===_o||n===go||n===xo)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===yc||n===Mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sc||n===Ec||n===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sc||n===Ec)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Lc||n===Ic||n===Pc||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===kc||n===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qf||n===zc||n===Gc||n===Vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qv extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mi extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yv={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
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

}`;class Zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:Kv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jv extends Cs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const g=new Zv,m=e.getContextAttributes();let p=null,b=null;const w=[],S=[],O=new Lt;let R=null;const A=new He;A.viewport=new $t;const P=new He;P.viewport=new $t;const E=[A,P],M=new qv;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=w[Y];return et===void 0&&(et=new Ra,w[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=w[Y];return et===void 0&&(et=new Ra,w[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=w[Y];return et===void 0&&(et=new Ra,w[Y]=et),et.getHandSpace()};function H(Y){const et=S.indexOf(Y.inputSource);if(et===-1)return;const gt=w[et];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,l||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<w.length;Y++){const et=S[Y];et!==null&&(S[Y]=null,w[Y].disconnect(et))}C=null,z=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,b=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new zi(d.framebufferWidth,d.framebufferHeight,{format:je,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Es:ps,gt=m.stencil?Ss:Hi);const wt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new zi(f.textureWidth,f.textureHeight,{format:je,type:Zn,depthTexture:new ad(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Y){for(let et=0;et<Y.removed.length;et++){const gt=Y.removed[et],rt=S.indexOf(gt);rt>=0&&(S[rt]=null,w[rt].disconnect(gt))}for(let et=0;et<Y.added.length;et++){const gt=Y.added[et];let rt=S.indexOf(gt);if(rt===-1){for(let Ct=0;Ct<w.length;Ct++)if(Ct>=S.length){S.push(gt),rt=Ct;break}else if(S[Ct]===null){S[Ct]=gt,rt=Ct;break}if(rt===-1)break}const wt=w[rt];wt&&wt.connect(gt)}}const W=new I,Q=new I;function V(Y,et,gt){W.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(gt.matrixWorld);const rt=W.distanceTo(Q),wt=et.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,kt=wt[14]/(wt[10]-1),de=wt[14]/(wt[10]+1),Xt=(wt[9]+1)/wt[5],me=(wt[9]-1)/wt[5],U=(wt[8]-1)/wt[0],Ke=(Ct[8]+1)/Ct[0],Gt=kt*U,Vt=kt*Ke,Et=rt/(-U+Ke),le=Et*-U;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(le),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Mt=kt+Et,T=de+Et,x=Gt-le,F=Vt+(rt-le),K=Xt*de/T*Mt,J=me*de/T*Mt;Y.projectionMatrix.makePerspective(x,F,K,J,Mt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,gt=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),M.near=P.near=A.near=et,M.far=P.far=A.far=gt,(C!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,z=M.far),A.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const rt=Y.parent,wt=M.cameras;st(M,rt);for(let Ct=0;Ct<wt.length;Ct++)st(wt[Ct],rt);wt.length===2?V(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ht(Y,M,rt)};function ht(Y,et,gt){gt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let yt=null;function Bt(Y,et){if(h=et.getViewerPose(l||o),_=et,h!==null){const gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Ct=0;Ct<gt.length;Ct++){const kt=gt[Ct];let de=null;if(d!==null)de=d.getViewport(kt);else{const me=u.getViewSubImage(f,kt);de=me.viewport,Ct===0&&(t.setRenderTargetTextures(b,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let Xt=E[Ct];Xt===void 0&&(Xt=new He,Xt.layers.enable(Ct),Xt.viewport=new $t,E[Ct]=Xt),Xt.matrix.fromArray(kt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(kt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),Ct===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Xt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Ct=u.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,s.renderState)}}for(let gt=0;gt<w.length;gt++){const rt=S[gt],wt=w[gt];rt!==null&&wt!==void 0&&wt.update(rt,et,l||o)}yt&&yt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const ie=new od;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}}const Li=new An,Qv=new It;function jv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,id(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),w=b.envMap,S=b.envMapRotation;w&&(m.envMap.value=w,Li.copy(S),Li.x*=-1,Li.y*=-1,Li.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(Li)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ty(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){const S=w.program;n.uniformBlockBinding(b,S)}function l(b,w){let S=s[b.id];S===void 0&&(_(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",m));const O=w.program;n.updateUBOMapping(b,O);const R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){const w=u();b.__bindingPointIndex=w;const S=i.createBuffer(),O=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const w=s[b.id],S=b.uniforms,O=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,A=S.length;R<A;R++){const P=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,M=P.length;E<M;E++){const C=P[E];if(d(C,R,E,O)===!0){const z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let Z=0;Z<H.length;Z++){const W=H[Z],Q=g(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+X,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,w,S,O){const R=b.value,A=w+"_"+S;if(O[A]===void 0)return typeof R=="number"||typeof R=="boolean"?O[A]=R:O[A]=R.clone(),!0;{const P=O[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return O[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(b){const w=b.uniforms;let S=0;const O=16;for(let A=0,P=w.length;A<P;A++){const E=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,C=E.length;M<C;M++){const z=E[M],H=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Z=H.length;X<Z;X++){const W=H[X],Q=g(W),V=S%O,st=V%Q.boundary,ht=V+st;S+=st,ht!==0&&O-ht<Q.storage&&(S+=O-ht),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Q.storage}}}const R=S%O;return R>0&&(S+=O-R),b.__size=S,b.__cache={},this}function g(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ey{constructor(t={}){const{canvas:e=Vm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this.toneMapping=xi,this.toneMappingExposure=1;const S=this;let O=!1,R=0,A=0,P=null,E=-1,M=null;const C=new $t,z=new $t;let H=null;const X=new St(0);let Z=0,W=e.width,Q=e.height,V=1,st=null,ht=null;const yt=new $t(0,0,W,Q),Bt=new $t(0,0,W,Q);let ie=!1;const Y=new Sl;let et=!1,gt=!1;const rt=new It,wt=new It,Ct=new I,kt=new $t,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function me(){return P===null?V:1}let U=n;function Ke(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){const D="webgl2";if(U=Ke(D,y),U===null)throw Ke(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Gt,Vt,Et,le,Mt,T,x,F,K,J,q,xt,ot,ut,qt,j,ft,bt,At,dt,Wt,Ot,ae,L;function it(){Gt=new ox(U),Gt.init(),Ot=new Xv(U,Gt),Vt=new tx(U,Gt,t,Ot),Et=new Gv(U,Gt),Vt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),le=new lx(U),Mt=new Av,T=new Wv(U,Gt,Et,Mt,Vt,Ot,le),x=new nx(S),F=new rx(S),K=new __(U),ae=new Q0(U,K),J=new ax(U,K,le,ae),q=new ux(U,J,K,le),At=new hx(U,Vt,T),j=new ex(Mt),xt=new wv(S,x,F,Gt,Vt,ae,j),ot=new jv(S,Mt),ut=new Cv,qt=new Uv(Gt),bt=new J0(S,x,F,Et,q,d,c),ft=new Hv(S,q,Vt),L=new ty(U,le,Vt,Et),dt=new j0(U,Gt,le),Wt=new cx(U,Gt,le),le.programs=xt.programs,S.capabilities=Vt,S.extensions=Gt,S.properties=Mt,S.renderLists=ut,S.shadowMap=ft,S.state=Et,S.info=le}it();const G=new Jv(S,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=Gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,Q,!1))},this.getSize=function(y){return y.set(W,Q)},this.setSize=function(y,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,Q=D,e.width=Math.floor(y*V),e.height=Math.floor(D*V),B===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(W*V,Q*V).floor()},this.setDrawingBufferSize=function(y,D,B){W=y,Q=D,V=B,e.width=Math.floor(y*B),e.height=Math.floor(D*B),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,D,B,k){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,D,B,k),Et.viewport(C.copy(yt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,D,B,k){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,D,B,k),Et.scissor(z.copy(Bt).multiplyScalar(V).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){Et.setScissorTest(ie=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(y=!0,D=!0,B=!0){let k=0;if(y){let N=!1;if(P!==null){const tt=P.texture.format;N=tt===yl||tt===vl||tt===xl}if(N){const tt=P.texture.type,ct=tt===Zn||tt===Hi||tt===fr||tt===Ss||tt===ml||tt===_l,pt=bt.getClearColor(),mt=bt.getClearAlpha(),Rt=pt.r,Dt=pt.g,_t=pt.b;ct?(_[0]=Rt,_[1]=Dt,_[2]=_t,_[3]=mt,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=Rt,g[1]=Dt,g[2]=_t,g[3]=mt,U.clearBufferiv(U.COLOR,0,g))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT),B&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),qt.dispose(),Mt.dispose(),x.dispose(),F.dispose(),q.dispose(),ae.dispose(),L.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Xl),G.removeEventListener("sessionend",ql),bi.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const y=le.autoReset,D=ft.enabled,B=ft.autoUpdate,k=ft.needsUpdate,N=ft.type;it(),le.autoReset=y,ft.enabled=D,ft.autoUpdate=B,ft.needsUpdate=k,ft.type=N}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pt(y){const D=y.target;D.removeEventListener("dispose",Pt),pe(D)}function pe(y){Ce(y),Mt.remove(y)}function Ce(y){const D=Mt.get(y).programs;D!==void 0&&(D.forEach(function(B){xt.releaseProgram(B)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,B,k,N,tt){D===null&&(D=de);const ct=N.isMesh&&N.matrixWorld.determinant()<0,pt=Pp(y,D,B,k,N);Et.setMaterial(k,ct);let mt=B.index,Rt=1;if(k.wireframe===!0){if(mt=J.getWireframeAttribute(B),mt===void 0)return;Rt=2}const Dt=B.drawRange,_t=B.attributes.position;let Kt=Dt.start*Rt,ce=(Dt.start+Dt.count)*Rt;tt!==null&&(Kt=Math.max(Kt,tt.start*Rt),ce=Math.min(ce,(tt.start+tt.count)*Rt)),mt!==null?(Kt=Math.max(Kt,0),ce=Math.min(ce,mt.count)):_t!=null&&(Kt=Math.max(Kt,0),ce=Math.min(ce,_t.count));const he=ce-Kt;if(he<0||he===1/0)return;ae.setup(N,k,pt,B,mt);let ke,Zt=dt;if(mt!==null&&(ke=K.get(mt),Zt=Wt,Zt.setIndex(ke)),N.isMesh)k.wireframe===!0?(Et.setLineWidth(k.wireframeLinewidth*me()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(N.isLine){let vt=k.linewidth;vt===void 0&&(vt=1),Et.setLineWidth(vt*me()),N.isLineSegments?Zt.setMode(U.LINES):N.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else N.isPoints?Zt.setMode(U.POINTS):N.isSprite&&Zt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const vt=N._multiDrawStarts,Nn=N._multiDrawCounts,Jt=N._multiDrawCount,on=mt?K.get(mt).bytesPerElement:1,Xi=Mt.get(k).currentProgram.getUniforms();for(let We=0;We<Jt;We++)Xi.setValue(U,"_gl_DrawID",We),Zt.render(vt[We]/on,Nn[We])}else if(N.isInstancedMesh)Zt.renderInstances(Kt,he,N.count);else if(B.isInstancedBufferGeometry){const vt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Nn=Math.min(B.instanceCount,vt);Zt.renderInstances(Kt,he,Nn)}else Zt.render(Kt,he)};function jt(y,D,B){y.transparent===!0&&y.side===un&&y.forceSinglePass===!1?(y.side=Ge,y.needsUpdate=!0,Ar(y,D,B),y.side=$n,y.needsUpdate=!0,Ar(y,D,B),y.side=un):Ar(y,D,B)}this.compile=function(y,D,B=null){B===null&&(B=y),p=qt.get(B),p.init(D),w.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==B&&y.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const pt=tt[ct];jt(pt,B,N),k.add(pt)}else jt(tt,B,N),k.add(tt)}),w.pop(),p=null,k},this.compileAsync=function(y,D,B=null){const k=this.compile(y,D,B);return new Promise(N=>{function tt(){if(k.forEach(function(ct){Mt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){N(y);return}setTimeout(tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let rn=null;function Dn(y){rn&&rn(y)}function Xl(){bi.stop()}function ql(){bi.start()}const bi=new od;bi.setAnimationLoop(Dn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(y){rn=y,G.setAnimationLoop(y),y===null?bi.stop():bi.start()},G.addEventListener("sessionstart",Xl),G.addEventListener("sessionend",ql),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,D,P),p=qt.get(y,w.length),p.init(D),w.push(p),wt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(wt),gt=this.localClippingEnabled,et=j.init(this.clippingPlanes,gt),m=ut.get(y,b.length),m.init(),b.push(m),G.enabled===!0&&G.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&ta(tt,D,-1/0,S.sortObjects)}ta(y,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ht),Xt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Xt&&bt.addToRenderList(m,y),this.info.render.frame++,et===!0&&j.beginShadows();const B=p.state.shadowsArray;ft.render(B,y,D),et===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const tt=D.cameras;if(N.length>0)for(let ct=0,pt=tt.length;ct<pt;ct++){const mt=tt[ct];Kl(k,N,y,mt)}Xt&&bt.render(y);for(let ct=0,pt=tt.length;ct<pt;ct++){const mt=tt[ct];Yl(m,y,mt,mt.viewport)}}else N.length>0&&Kl(k,N,y,D),Xt&&bt.render(y),Yl(m,y,D);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(S,y,D),ae.resetDefaultState(),E=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],et===!0&&j.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ta(y,D,B,k){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){k&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(wt);const ct=q.update(y),pt=y.material;pt.visible&&m.push(y,ct,pt,B,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const ct=q.update(y),pt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),kt.copy(ct.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(wt)),Array.isArray(pt)){const mt=ct.groups;for(let Rt=0,Dt=mt.length;Rt<Dt;Rt++){const _t=mt[Rt],Kt=pt[_t.materialIndex];Kt&&Kt.visible&&m.push(y,ct,Kt,B,kt.z,_t)}}else pt.visible&&m.push(y,ct,pt,B,kt.z,null)}}const tt=y.children;for(let ct=0,pt=tt.length;ct<pt;ct++)ta(tt[ct],D,B,k)}function Yl(y,D,B,k){const N=y.opaque,tt=y.transmissive,ct=y.transparent;p.setupLightsView(B),et===!0&&j.setGlobalState(S.clippingPlanes,B),k&&Et.viewport(C.copy(k)),N.length>0&&wr(N,D,B),tt.length>0&&wr(tt,D,B),ct.length>0&&wr(ct,D,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Kl(y,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new zi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?xr:Zn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[k.id],ct=k.viewport||C;tt.setSize(ct.z,ct.w);const pt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(X),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),Xt&&bt.render(B);const mt=S.toneMapping;S.toneMapping=xi;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),et===!0&&j.setGlobalState(S.clippingPlanes,k),wr(y,B,k),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let _t=0,Kt=D.length;_t<Kt;_t++){const ce=D[_t],he=ce.object,ke=ce.geometry,Zt=ce.material,vt=ce.group;if(Zt.side===un&&he.layers.test(k.layers)){const Nn=Zt.side;Zt.side=Ge,Zt.needsUpdate=!0,$l(he,B,k,ke,Zt,vt),Zt.side=Nn,Zt.needsUpdate=!0,Dt=!0}}Dt===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}S.setRenderTarget(pt),S.setClearColor(X,Z),Rt!==void 0&&(k.viewport=Rt),S.toneMapping=mt}function wr(y,D,B){const k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,tt=y.length;N<tt;N++){const ct=y[N],pt=ct.object,mt=ct.geometry,Rt=k===null?ct.material:k,Dt=ct.group;pt.layers.test(B.layers)&&$l(pt,D,B,mt,Rt,Dt)}}function $l(y,D,B,k,N,tt){y.onBeforeRender(S,D,B,k,N,tt),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(S,D,B,k,y,tt),N.transparent===!0&&N.side===un&&N.forceSinglePass===!1?(N.side=Ge,N.needsUpdate=!0,S.renderBufferDirect(B,D,k,N,y,tt),N.side=$n,N.needsUpdate=!0,S.renderBufferDirect(B,D,k,N,y,tt),N.side=un):S.renderBufferDirect(B,D,k,N,y,tt),y.onAfterRender(S,D,B,k,N,tt)}function Ar(y,D,B){D.isScene!==!0&&(D=de);const k=Mt.get(y),N=p.state.lights,tt=p.state.shadowsArray,ct=N.state.version,pt=xt.getParameters(y,N.state,tt,D,B),mt=xt.getProgramCacheKey(pt);let Rt=k.programs;k.environment=y.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Pt),Rt=new Map,k.programs=Rt);let Dt=Rt.get(mt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===ct)return Jl(y,pt),Dt}else pt.uniforms=xt.getUniforms(y),y.onBeforeCompile(pt,S),Dt=xt.acquireProgram(pt,mt),Rt.set(mt,Dt),k.uniforms=pt.uniforms;const _t=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(_t.clippingPlanes=j.uniform),Jl(y,pt),k.needsLights=Np(y),k.lightsStateVersion=ct,k.needsLights&&(_t.ambientLightColor.value=N.state.ambient,_t.lightProbe.value=N.state.probe,_t.directionalLights.value=N.state.directional,_t.directionalLightShadows.value=N.state.directionalShadow,_t.spotLights.value=N.state.spot,_t.spotLightShadows.value=N.state.spotShadow,_t.rectAreaLights.value=N.state.rectArea,_t.ltc_1.value=N.state.rectAreaLTC1,_t.ltc_2.value=N.state.rectAreaLTC2,_t.pointLights.value=N.state.point,_t.pointLightShadows.value=N.state.pointShadow,_t.hemisphereLights.value=N.state.hemi,_t.directionalShadowMap.value=N.state.directionalShadowMap,_t.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_t.spotShadowMap.value=N.state.spotShadowMap,_t.spotLightMatrix.value=N.state.spotLightMatrix,_t.spotLightMap.value=N.state.spotLightMap,_t.pointShadowMap.value=N.state.pointShadowMap,_t.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Zl(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=yo.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Jl(y,D){const B=Mt.get(y);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Pp(y,D,B,k,N){D.isScene!==!0&&(D=de),T.resetTextureUnits();const tt=D.fog,ct=k.isMeshStandardMaterial?D.environment:null,pt=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Be,mt=(k.isMeshStandardMaterial?F:x).get(k.envMap||ct),Rt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Dt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!B.morphAttributes.position,Kt=!!B.morphAttributes.normal,ce=!!B.morphAttributes.color;let he=xi;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(he=S.toneMapping);const ke=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=ke!==void 0?ke.length:0,vt=Mt.get(k),Nn=p.state.lights;if(et===!0&&(gt===!0||y!==M)){const $e=y===M&&k.id===E;j.setState(k,y,$e)}let Jt=!1;k.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Nn.state.version||vt.outputColorSpace!==pt||N.isBatchedMesh&&vt.batching===!1||!N.isBatchedMesh&&vt.batching===!0||N.isBatchedMesh&&vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&vt.instancing===!1||!N.isInstancedMesh&&vt.instancing===!0||N.isSkinnedMesh&&vt.skinning===!1||!N.isSkinnedMesh&&vt.skinning===!0||N.isInstancedMesh&&vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&vt.instancingMorph===!1&&N.morphTexture!==null||vt.envMap!==mt||k.fog===!0&&vt.fog!==tt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==j.numPlanes||vt.numIntersection!==j.numIntersection)||vt.vertexAlphas!==Rt||vt.vertexTangents!==Dt||vt.morphTargets!==_t||vt.morphNormals!==Kt||vt.morphColors!==ce||vt.toneMapping!==he||vt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,vt.__version=k.version);let on=vt.currentProgram;Jt===!0&&(on=Ar(k,D,N));let Xi=!1,We=!1,Bs=!1;const ue=on.getUniforms(),vn=vt.uniforms;if(Et.useProgram(on.program)&&(Xi=!0,We=!0,Bs=!0),k.id!==E&&(E=k.id,We=!0),Xi||M!==y){Et.buffers.depth.getReversed()?(rt.copy(y.projectionMatrix),Xm(rt),qm(rt),ue.setValue(U,"projectionMatrix",rt)):ue.setValue(U,"projectionMatrix",y.projectionMatrix),ue.setValue(U,"viewMatrix",y.matrixWorldInverse);const ti=ue.map.cameraPosition;ti!==void 0&&ti.setValue(U,Ct.setFromMatrixPosition(y.matrixWorld)),Vt.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ue.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,We=!0,Bs=!0)}if(N.isSkinnedMesh){ue.setOptional(U,N,"bindMatrix"),ue.setOptional(U,N,"bindMatrixInverse");const $e=N.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ue.setValue(U,"boneTexture",$e.boneTexture,T))}N.isBatchedMesh&&(ue.setOptional(U,N,"batchingTexture"),ue.setValue(U,"batchingTexture",N._matricesTexture,T),ue.setOptional(U,N,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",N._indirectTexture,T),ue.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",N._colorsTexture,T));const ks=B.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&At.update(N,B,on),(We||vt.receiveShadow!==N.receiveShadow)&&(vt.receiveShadow=N.receiveShadow,ue.setValue(U,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(vn.envMap.value=mt,vn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(vn.envMapIntensity.value=D.environmentIntensity),We&&(ue.setValue(U,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&Dp(vn,Bs),tt&&k.fog===!0&&ot.refreshFogUniforms(vn,tt),ot.refreshMaterialUniforms(vn,k,V,Q,p.state.transmissionRenderTarget[y.id]),yo.upload(U,Zl(vt),vn,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(yo.upload(U,Zl(vt),vn,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ue.setValue(U,"center",N.center),ue.setValue(U,"modelViewMatrix",N.modelViewMatrix),ue.setValue(U,"normalMatrix",N.normalMatrix),ue.setValue(U,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $e=k.uniformsGroups;for(let ti=0,ei=$e.length;ti<ei;ti++){const Ql=$e[ti];L.update(Ql,on),L.bind(Ql,on)}}return on}function Dp(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Np(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,D,B){Mt.get(y.texture).__webglTexture=D,Mt.get(y.depthTexture).__webglTexture=B;const k=Mt.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const B=Mt.get(y);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,B=0){P=y,R=D,A=B;let k=!0,N=null,tt=!1,ct=!1;if(y){const mt=Mt.get(y);if(mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(mt.__hasExternalTextures)T.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const _t=y.depthTexture;if(mt.__boundDepthTexture!==_t){if(_t!==null&&Mt.has(_t)&&(y.width!==_t.image.width||y.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);const Dt=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?N=Dt[D][B]:N=Dt[D],tt=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?N=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?N=Dt[B]:N=Dt,C.copy(y.viewport),z.copy(y.scissor),H=y.scissorTest}else C.copy(yt).multiplyScalar(V).floor(),z.copy(Bt).multiplyScalar(V).floor(),H=ie;if(Et.bindFramebuffer(U.FRAMEBUFFER,N)&&k&&Et.drawBuffers(y,N),Et.viewport(C),Et.scissor(z),Et.setScissorTest(H),tt){const mt=Mt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,mt.__webglTexture,B)}else if(ct){const mt=Mt.get(y.texture),Rt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,Rt)}E=-1},this.readRenderTargetPixels=function(y,D,B,k,N,tt,ct){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){Et.bindFramebuffer(U.FRAMEBUFFER,pt);try{const mt=y.texture,Rt=mt.format,Dt=mt.type;if(!Vt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-k&&B>=0&&B<=y.height-N&&U.readPixels(D,B,k,N,Ot.convert(Rt),Ot.convert(Dt),tt)}finally{const mt=P!==null?Mt.get(P).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(y,D,B,k,N,tt,ct){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ct!==void 0&&(pt=pt[ct]),pt){const mt=y.texture,Rt=mt.format,Dt=mt.type;if(!Vt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-k&&B>=0&&B<=y.height-N){Et.bindFramebuffer(U.FRAMEBUFFER,pt);const _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(D,B,k,N,Ot.convert(Rt),Ot.convert(Dt),0);const Kt=P!==null?Mt.get(P).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,Kt);const ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Wm(U,ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt),U.deleteBuffer(_t),U.deleteSync(ce),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,B=0){y.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(y.image.width*k),tt=Math.floor(y.image.height*k),ct=D!==null?D.x:0,pt=D!==null?D.y:0;T.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ct,pt,N,tt),Et.unbindTexture()},this.copyTextureToTexture=function(y,D,B=null,k=null,N=0){y.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let tt,ct,pt,mt,Rt,Dt,_t,Kt,ce;const he=y.isCompressedTexture?y.mipmaps[N]:y.image;B!==null?(tt=B.max.x-B.min.x,ct=B.max.y-B.min.y,pt=B.isBox3?B.max.z-B.min.z:1,mt=B.min.x,Rt=B.min.y,Dt=B.isBox3?B.min.z:0):(tt=he.width,ct=he.height,pt=he.depth||1,mt=0,Rt=0,Dt=0),k!==null?(_t=k.x,Kt=k.y,ce=k.z):(_t=0,Kt=0,ce=0);const ke=Ot.convert(D.format),Zt=Ot.convert(D.type);let vt;D.isData3DTexture?(T.setTexture3D(D,0),vt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),vt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),vt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Nn=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),on=U.getParameter(U.UNPACK_SKIP_PIXELS),Xi=U.getParameter(U.UNPACK_SKIP_ROWS),We=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dt);const Bs=y.isDataArrayTexture||y.isData3DTexture,ue=D.isDataArrayTexture||D.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const vn=Mt.get(y),ks=Mt.get(D),$e=Mt.get(vn.__renderTarget),ti=Mt.get(ks.__renderTarget);Et.bindFramebuffer(U.READ_FRAMEBUFFER,$e.__webglFramebuffer),Et.bindFramebuffer(U.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<pt;ei++)Bs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,N,Dt+ei),y.isDepthTexture?(ue&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(D).__webglTexture,N,ce+ei),U.blitFramebuffer(mt,Rt,tt,ct,_t,Kt,tt,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):ue?U.copyTexSubImage3D(vt,N,_t,Kt,ce+ei,mt,Rt,tt,ct):U.copyTexSubImage2D(vt,N,_t,Kt,ce+ei,mt,Rt,tt,ct);Et.bindFramebuffer(U.READ_FRAMEBUFFER,null),Et.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(vt,N,_t,Kt,ce,tt,ct,pt,ke,Zt,he.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,N,_t,Kt,ce,tt,ct,pt,ke,he.data):U.texSubImage3D(vt,N,_t,Kt,ce,tt,ct,pt,ke,Zt,he):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,_t,Kt,tt,ct,ke,Zt,he.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,_t,Kt,he.width,he.height,ke,he.data):U.texSubImage2D(U.TEXTURE_2D,N,_t,Kt,tt,ct,ke,Zt,he);U.pixelStorei(U.UNPACK_ROW_LENGTH,Nn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,on),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We),N===0&&D.generateMipmaps&&U.generateMipmap(vt),Et.unbindTexture()},this.copyTextureToTexture3D=function(y,D,B=null,k=null,N=0){return y.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,y=arguments[2],D=arguments[3],N=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,B,k,N)},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Et.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,Et.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}class bl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ny extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xc,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new I;class _r{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tl extends gn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let os;const Ws=new I,as=new I,cs=new I,ls=new Lt,Xs=new Lt,dd=new It,Kr=new I,qs=new I,$r=new I,tu=new Lt,Ca=new Lt,eu=new Lt;class pd extends fe{constructor(t=new Tl){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new sn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fd(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new _r(n,3,0,!1)),os.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Zr(Kr.set(-.5,-.5,0),cs,o,as,s,r),Zr(qs.set(.5,-.5,0),cs,o,as,s,r),Zr($r.set(.5,.5,0),cs,o,as,s,r),tu.set(0,0),Ca.set(1,0),eu.set(1,1);let a=t.ray.intersectTriangle(Kr,qs,$r,!1,Ws);if(a===null&&(Zr(qs.set(-.5,.5,0),cs,o,as,s,r),Ca.set(0,1),a=t.ray.intersectTriangle(Kr,$r,qs,!1,Ws),a===null))return;const c=t.ray.origin.distanceTo(Ws);c<t.near||c>t.far||e.push({distance:c,point:Ws.clone(),uv:Qe.getInterpolation(Ws,Kr,qs,$r,tu,Ca,eu,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zr(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Xs.x=r*ls.x-s*ls.y,Xs.y=s*ls.x+r*ls.y):Xs.copy(ls),i.copy(t),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(dd)}const nu=new I,iu=new $t,su=new $t,iy=new I,ru=new It,Jr=new I,La=new Ln,ou=new It,Ia=new zo;class sy extends Ae{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nh,this.bindMatrix=new It,this.bindMatrixInverse=new It,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Jr),this.boundingBox.expandByPoint(Jr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Jr),this.boundingSphere.expandByPoint(Jr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(s),t.ray.intersectsSphere(La)!==!1&&(ou.copy(s).invert(),Ia.copy(t.ray).applyMatrix4(ou),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ia)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new $t,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;iu.fromBufferAttribute(s.attributes.skinIndex,t),su.fromBufferAttribute(s.attributes.skinWeight,t),nu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=su.getComponent(r);if(o!==0){const a=iu.getComponent(r);ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(iy.copy(nu).applyMatrix4(ru),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class md extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _d extends ve{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Oe,h=Oe,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new It,ry=new It;class wl{constructor(t=[],e=[]){this.uuid=_n(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new It)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new It;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:ry;au.multiplyMatrices(a,e[r]),au.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _d(e,t,t,je,mn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new md),this.bones.push(o),this.boneInverses.push(new It().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Yc extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new It,cu=new It,Qr=[],lu=new jn,oy=new It,Ys=new Ae,Ks=new Ln;class ay extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,oy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),lu.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(lu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Ks.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),cu.multiplyMatrices(n,hs),Ys.matrixWorld=cu,Ys.raycast(t,Qr);for(let o=0,a=Qr.length;o<a;o++){const c=Qr[o];c.instanceId=r,c.object=this,e.push(c)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _d(new Float32Array(s*this.count),s,this.count,gl,mn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class gd extends gn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ro=new I,Co=new I,hu=new It,$s=new zo,jr=new Ln,Pa=new I,uu=new I;class Al extends fe{constructor(t=new sn,e=new gd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ro.fromBufferAttribute(e,s-1),Co.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Co);t.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;hu.copy(s).invert(),$s.copy(t.ray).applyMatrix4(hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=h.getX(g),b=h.getX(g+1),w=to(this,t,$s,c,p,b);w&&e.push(w)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(d),p=to(this,t,$s,c,g,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=to(this,t,$s,c,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=to(this,t,$s,c,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function to(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ro.fromBufferAttribute(o,s),Co.fromBufferAttribute(o,r),e.distanceSqToSegment(Ro,Co,Pa,uu)>n)return;Pa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pa);if(!(c<t.near||c>t.far))return{distance:c,point:uu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const fu=new I,du=new I;class cy extends Al{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fu.fromBufferAttribute(e,s),du.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fu.distanceTo(du);t.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ly extends Al{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class xd extends gn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pu=new It,Kc=new zo,eo=new Ln,no=new I;class hy extends fe{constructor(t=new sn,e=new xd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;pu.copy(s).invert(),Kc.copy(t.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);no.fromBufferAttribute(u,m),mu(no,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)no.fromBufferAttribute(u,_),mu(no,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mu(i,t,e,n,s,r,o){const a=Kc.distanceSqToPoint(i);if(a<e){const c=new I;Kc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class uy extends ve{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wo extends sn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const g=[],m=n/2;let p=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(d,2));function b(){const S=new I,O=new I;let R=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const E=[],M=P/r,C=M*(e-t)+t;for(let z=0;z<=s;z++){const H=z/s,X=H*c+a,Z=Math.sin(X),W=Math.cos(X);O.x=C*Z,O.y=-M*n+m,O.z=C*W,u.push(O.x,O.y,O.z),S.set(Z,A,W).normalize(),f.push(S.x,S.y,S.z),d.push(H,1-M),E.push(_++)}g.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const M=g[E][P],C=g[E+1][P],z=g[E+1][P+1],H=g[E][P+1];(t>0||E!==0)&&(h.push(M,C,H),R+=3),(e>0||E!==r-1)&&(h.push(C,z,H),R+=3)}l.addGroup(p,R,0),p+=R}function w(S){const O=_,R=new Lt,A=new I;let P=0;const E=S===!0?t:e,M=S===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),_++;const C=_;for(let z=0;z<=s;z++){const X=z/s*c+a,Z=Math.cos(X),W=Math.sin(X);A.x=E*W,A.y=m*M,A.z=E*Z,u.push(A.x,A.y,A.z),f.push(0,M,0),R.x=Z*.5+.5,R.y=W*.5*M+.5,d.push(R.x,R.y),_++}for(let z=0;z<s;z++){const H=O+z,X=C+z;S===!0?h.push(X,X+1,H):h.push(X+1,X,H),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rl extends Wo{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Rl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vr extends gn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class In extends vr{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dy(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function _u(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function vd(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class yr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class py extends yr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sh:r=t,a=2*e-n;break;case rh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sh:o=t,c=2*n-e;break;case rh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-e)/(s-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,b=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,w=(-1-d)*m+(1.5+d)*g+.5*_,S=d*m-d*g;for(let O=0;O!==a;++O)r[O]=p*o[h+O]+b*o[l+O]+w*o[c+O]+S*o[u+O];return r}}class my extends yr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class _y extends yr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Pn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _y(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new my(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new py(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case pr:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&fy(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){const g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=pr;class Ds extends Pn{constructor(t,e,n){super(t,e,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=dr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class yd extends Pn{}yd.prototype.ValueTypeName="color";class ws extends Pn{}ws.prototype.ValueTypeName="number";class gy extends yr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Si.slerpFlat(r,0,o,l-a,o,l,c);return r}}class As extends Pn{InterpolantFactoryMethodLinear(t){return new gy(this.times,this.values,this.getValueSize(),t)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Pn{constructor(t,e,n){super(t,e,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=dr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Pn{}Rs.prototype.ValueTypeName="vector";class xy{constructor(t="",e=-1,n=[],s=pm){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(yy(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=dy(c);c=_u(c,1,h),l=_u(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ws(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,_,g){if(d.length!==0){const m=[],p=[];vd(d,m,p,_),m.length!==0&&g.push(new u(f,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let b=0;b!==f[_].morphTargets.length;++b){const w=f[_];m.push(w.time),p.push(w.morphTarget===g?1:0)}s.push(new ws(".morphTargetInfluence["+g+"]",m,p))}c=d.length*o}else{const d=".bones["+e[u].name+"]";n(Rs,d+".position",f,"pos",s),n(As,d+".quaternion",f,"rot",s),n(Rs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return yd;case"quaternion":return As;case"bool":case"boolean":return Ds;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=vy(i.type);if(i.times===void 0){const e=[],n=[];vd(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const _i={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class My{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const Sy=new My;class Us{constructor(t){this.manager=t!==void 0?t:Sy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Ey extends Error{constructor(t,e){super(t),this.response=e}}class Md extends Us{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=_i.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Hn[t]!==void 0){Hn[t].push({onLoad:e,onProgress:n,onError:s});return}Hn[t]=[],Hn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Hn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:w,value:S})=>{if(w)p.close();else{g+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let R=0,A=h.length;R<A;R++){const P=h[R];P.onProgress&&P.onProgress(O)}p.enqueue(S),b()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Ey(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{_i.add(t,l);const h=Hn[t];delete Hn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Hn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Hn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class by extends Us{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=_i.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=mr("img");function c(){h(),_i.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Cl extends Us{constructor(t){super(t)}load(t,e,n,s){const r=new ve,o=new by(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Mr extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ty extends Mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Da=new It,gu=new I,xu=new I;class Ll{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wy extends Ll{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=bs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ay extends Mr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const vu=new It,Zs=new I,Na=new I;class Ry extends Ll{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zs),Na.copy(n.position),Na.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Na),n.updateMatrixWorld(),s.makeTranslation(-Zs.x,-Zs.y,-Zs.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}}class Cy extends Mr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ry}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ly extends Ll{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sd extends Mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Ly}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ed extends Mr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ur{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Iy extends Us{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=_i.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return _i.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),_i.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});_i.add(t,c),r.manager.itemStart(t)}}class Py{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yu(){return performance.now()}const Il="\\[\\]\\.:\\/",Dy=new RegExp("["+Il+"]","g"),Pl="[^"+Il+"]",Ny="[^"+Il.replace("\\.","")+"]",Uy=/((?:WC+[\/:])*)/.source.replace("WC",Pl),Oy=/(WCOD+)?/.source.replace("WCOD",Ny),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),ky=new RegExp("^"+Uy+Oy+Fy+By+"$"),Hy=["material","materials","bones","map"];class zy{constructor(t,e,n){const s=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ee{constructor(t,e,n){this.path=e,this.parsedPath=n||ee.parseTrackName(e),this.node=ee.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ee.Composite(t,e,n):new ee(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dy,"")}static parseTrackName(t){const e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ee.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ee.Composite=zy;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);function Mu(i,t){if(t===mm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Wc||t===Yf){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Wc)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class bd extends Us{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new qy(e)}),this.register(function(e){return new Yy(e)}),this.register(function(e){return new nM(e)}),this.register(function(e){return new iM(e)}),this.register(function(e){return new sM(e)}),this.register(function(e){return new $y(e)}),this.register(function(e){return new Zy(e)}),this.register(function(e){return new Jy(e)}),this.register(function(e){return new Qy(e)}),this.register(function(e){return new Xy(e)}),this.register(function(e){return new jy(e)}),this.register(function(e){return new Ky(e)}),this.register(function(e){return new eM(e)}),this.register(function(e){return new tM(e)}),this.register(function(e){return new Vy(e)}),this.register(function(e){return new rM(e)}),this.register(function(e){return new oM(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ur.extractUrlBase(t);o=ur.resolveURL(l,this.path)}else o=ur.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Md(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Td){try{o[Ht.KHR_BINARY_GLTF]=new aM(t)}catch(u){s&&s(u);return}r=JSON.parse(o[Ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new yM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ht.KHR_MATERIALS_UNLIT:o[u]=new Wy;break;case Ht.KHR_DRACO_MESH_COMPRESSION:o[u]=new cM(r,this.dracoLoader);break;case Ht.KHR_TEXTURE_TRANSFORM:o[u]=new lM;break;case Ht.KHR_MESH_QUANTIZATION:o[u]=new hM;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function Gy(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Vy{constructor(t){this.parser=t,this.name=Ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new St(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Be);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Cy(h),l.distance=u;break;case"spot":l=new Ay(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class Wy{constructor(){this.name=Ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Fi}extendParams(t,e,n){const s=[];t.color=new St(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Be),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,we))}return Promise.all(s)}}class Xy{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class qy{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Lt(a,a)}return Promise.all(r)}}class Yy{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ky{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class $y{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new St(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Be)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,we)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Zy{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Jy{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new St().setRGB(a[0],a[1],a[2],Be),Promise.all(r)}}class Qy{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class jy{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new St().setRGB(a[0],a[1],a[2],Be),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,we)),Promise.all(r)}}class tM{constructor(t){this.parser=t,this.name=Ht.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class eM{constructor(t){this.parser=t,this.name=Ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class nM{constructor(t){this.parser=t,this.name=Ht.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class iM{constructor(t){this.parser=t,this.name=Ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class sM{constructor(t){this.parser=t,this.name=Ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class rM{constructor(t){this.name=Ht.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class oM{constructor(t){this.name=Ht.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Je.TRIANGLES&&l.mode!==Je.TRIANGLE_STRIP&&l.mode!==Je.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const _ of u){const g=new It,m=new I,p=new Si,b=new I(1,1,1),w=new ay(_.geometry,_.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&b.fromBufferAttribute(c.SCALE,S),w.setMatrixAt(S,g.compose(m,p,b));for(const S in c)if(S==="_COLOR_0"){const O=c[S];w.instanceColor=new Yc(O.array,O.itemSize,O.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);fe.prototype.copy.call(w,_),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Td="glTF",Js=12,Su={JSON:1313821514,BIN:5130562};class aM{constructor(t){this.name=Ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Js,r=new DataView(t,Js);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Su.JSON){const l=new Uint8Array(t,Js+o,a);this.content=n.decode(l)}else if(c===Su.BIN){const l=Js+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ht.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=$c[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=$c[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=_s[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}u(d)},a,l,Be,f)})})}}class lM{constructor(){this.name=Ht.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class hM{constructor(){this.name=Ht.KHR_MESH_QUANTIZATION}}class wd extends yr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,f=u*u,d=f*u,_=t*l,g=_-l,m=-2*d+3*f,p=d-f,b=1-m,w=p-f+u;for(let S=0;S!==a;S++){const O=o[g+S+a],R=o[g+S+c]*h,A=o[_+S+a],P=o[_+S]*h;r[S]=b*O+w*R+m*A+p*P}return r}}const uM=new Si;class fM extends wd{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return uM.fromArray(r).normalize().toArray(r),r}}const Je={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eu={9728:Oe,9729:ze,9984:Ff,9985:po,9986:ir,9987:Wn},bu={33071:pi,33648:wo,10497:Ms},Ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:pr,STEP:dr},Oa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new vr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function Ii(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Gn(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function mM(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function _M(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gM(i){let t;const e=i.extensions&&i.extensions[Ht.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Fa(e.attributes):t=i.indices+":"+Fa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Fa(i.targets[n]);return t}function Fa(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Zc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vM=new It;class yM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Gy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Cl(this.options.manager):this.textureLoader=new Iy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ii(r,a,s),Gn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ht.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ur.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ua[s.type],a=_s[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Fe(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ua[s.type],l=_s[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,m;if(d&&d!==u){const p=Math.floor(f/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let w=e.cache.get(b);w||(g=new l(a,p*d,s.count*d/h),w=new fd(g,d/h),e.cache.add(b,w)),m=new _r(w,c,f%d/h,_)}else a===null?g=new l(s.count*c):g=new l(a,f,s.count*c),m=new Fe(g,c,_);if(s.sparse!==void 0){const p=Ua.SCALAR,b=_s[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,O=new b(o[1],w,s.sparse.count*p),R=new l(o[2],S,s.sparse.count*c);a!==null&&(m=new Fe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=O.length;A<P;A++){const E=O[A];if(m.setX(E,R[A*c]),c>=2&&m.setY(E,R[A*c+1]),c>=3&&m.setZ(E,R[A*c+2]),c>=4&&m.setW(E,R[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Eu[f.magFilter]||ze,h.minFilter=Eu[f.minFilter]||Wn,h.wrapS=bu[f.wrapS]||Ms,h.wrapT=bu[f.wrapT]||Ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Oe&&h.minFilter!==ze,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let _=f;e.isImageBitmapLoader===!0&&(_=function(g){const m=new ve(g);m.needsUpdate=!0,f(m)}),e.load(ur.resolveURL(u,r.path),_,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Gn(u,o),u.userData.mimeType=o.mimeType||xM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xd,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new gd,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return vr}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[Ht.KHR_MATERIALS_UNLIT]){const u=s[Ht.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new St(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Be),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,we)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=un);const h=r.alphaMode||Oa.OPAQUE;if(h===Oa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Oa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Fi&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Lt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Fi&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Fi){const u=r.emissiveFactor;a.emissive=new St().setRGB(u[0],u[1],u[2],Be)}return r.emissiveTexture!==void 0&&o!==Fi&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,we)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Gn(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ii(s,u,r),u})}createUniqueName(t){const e=ee.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Tu(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=gM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Ht.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Tu(new sn,l,e),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?pM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,_=h.length;d<_;d++){const g=h[d],m=o[d];let p;const b=l[d];if(m.mode===Je.TRIANGLES||m.mode===Je.TRIANGLE_STRIP||m.mode===Je.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new sy(g,b):new Ae(g,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Je.TRIANGLE_STRIP?p.geometry=Mu(p.geometry,Yf):m.mode===Je.TRIANGLE_FAN&&(p.geometry=Mu(p.geometry,Wc));else if(m.mode===Je.LINES)p=new cy(g,b);else if(m.mode===Je.LINE_STRIP)p=new Al(g,b);else if(m.mode===Je.LINE_LOOP)p=new ly(g,b);else if(m.mode===Je.POINTS)p=new hy(g,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_M(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Gn(p,r),m.extensions&&Ii(s,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,_=u.length;d<_;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ii(s,u[0],r),u[0];const f=new mi;r.extensions&&Ii(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new He(Gm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Go(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Gn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new It;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new wl(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],_=s.samplers[d.sampler],g=d.target,m=g.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,b=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],_=u[2],g=u[3],m=u[4],p=[];for(let b=0,w=f.length;b<w;b++){const S=f[b],O=d[b],R=_[b],A=g[b],P=m[b];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=n._createAnimationTracks(S,O,R,A,P);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new xy(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,vM)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new md:l.length>1?h=new mi:l.length===1?h=l[0]:h=new fe,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Gn(h,r),r.extensions&&Ii(n,h,r),r.matrix!==void 0){const u=new It;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new mi;n.name&&(r.name=s.createUniqueName(n.name)),Gn(r,n),n.extensions&&Ii(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof gn||f instanceof ve)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];ci[r.path]===ci.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ci[r.path]){case ci.weights:l=ws;break;case ci.rotation:l=As;break;case ci.position:case ci.scale:l=Rs;break;default:switch(n.itemSize){case 1:l=ws;break;case 2:case 3:default:l=Rs;break}break}const h=s.interpolation!==void 0?dM[s.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+ci[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Zc(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof As?fM:wd;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MM(i,t,e){const n=t.attributes,s=new jn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const h=Zc(_s[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Zc(_s[f.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Tu(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=$c[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return zt.workingColorSpace!==Be&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zt.workingColorSpace}" not supported.`),Gn(i,t),MM(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?mM(i,t.targets,e):i})}const SM=50,Dl=2500,EM=1.25,wu=1e3,bM=1e6,TM=1e4,Ad=.8,Ba={RUBBER:-1,PADDED:-.5,DEFAULT:-2},Nl=1,Rd=1/60,Cd=32,wM=Rd/Cd,AM=70,Ul=100,Ld=2,RM=50,CM=10,LM=5,IM=3,Jc=100,Au=SM,PM=15,DM=4,NM=2,Ru=.7,UM=8,Sn=0,dn=80,Te=88,bn=104,ka=200,OM=239,Id=221,FM=230,Pd=224;function BM(i){return i===dn||Te<=i&&i<=bn}function kM(i){return i===dn||i>=Te}const HM=4e3,zM=500,GM=-1500,VM=-2e3,Dd=1e3,Nd=5e3,WM=2,Ha=99,XM=.05,Ud=.8,qM=.65,Xo=0,YM=2,KM=0,$M=1,ZM=2,JM=3,qo=0,QM=3,jM=0,Cu=1,so=2,fi=0,Od=1,tS=2,eS=3,nS=4,iS=5,sS=6,rS=7,Fd=8;class Tt{constructor(t,e,n,s,r,o,a={}){v(this,"idx");v(this,"name");v(this,"cost");v(this,"bundle");v(this,"arms");v(this,"category");v(this,"blast");v(this,"behavior");v(this,"warheads");v(this,"fan");v(this,"heat");v(this,"params");v(this,"enabled");this.idx=t,this.name=e,this.cost=n,this.bundle=s,this.arms=r,this.category=o,this.blast=a.blast??0,this.behavior=a.behavior??"explosive",this.warheads=a.warheads??1,this.fan=a.fan??0,this.heat=a.heat??0,this.params=a.params??{},this.enabled=a.enabled??!0}get offensive(){return this.category!=="guidance"&&this.category!=="shield"&&this.category!=="utility"}}const _e=[new Tt(0,"Baby Missile",400,10,0,"explosive",{blast:10,behavior:"explosive"}),new Tt(1,"Missile",1875,5,0,"explosive",{blast:20,behavior:"explosive"}),new Tt(2,"Baby Nuke",1e4,3,0,"nuclear",{blast:40,behavior:"explosive"}),new Tt(3,"Nuke",12e3,1,1,"nuclear",{blast:75,behavior:"explosive"}),new Tt(4,"LeapFrog",1e4,2,3,"multi",{blast:20,behavior:"leapfrog",warheads:3,params:{radii:[20,25,30]}}),new Tt(5,"Funky Bomb",7e3,2,4,"special",{blast:80,behavior:"funky",params:{scatter:15}}),new Tt(6,"MIRV",1e4,3,2,"multi",{blast:20,behavior:"mirv",warheads:5,fan:50}),new Tt(7,"Death's Head",2e4,1,4,"multi",{blast:35,behavior:"mirv",warheads:9,fan:20}),new Tt(8,"Napalm",1e4,10,2,"fire",{blast:15,behavior:"napalm",heat:25,params:{deep_heat:30}}),new Tt(9,"Hot Napalm",2e4,2,4,"fire",{blast:20,behavior:"napalm",heat:40,params:{deep_heat:50}}),new Tt(10,"Tracer",10,20,0,"tracer",{blast:0,behavior:"tracer"}),new Tt(11,"Smoke Tracer",500,10,0,"tracer",{blast:0,behavior:"tracer",params:{smoke:!0}}),new Tt(12,"Baby Roller",5e3,10,2,"roller",{blast:10,behavior:"roller"}),new Tt(13,"Roller",6e3,5,2,"roller",{blast:20,behavior:"roller"}),new Tt(14,"Heavy Roller",6750,2,3,"roller",{blast:45,behavior:"roller"}),new Tt(15,"Riot Charge",2e3,10,2,"riot",{blast:36,behavior:"riot_wedge"}),new Tt(16,"Riot Blast",5e3,5,3,"riot",{blast:60,behavior:"riot_wedge"}),new Tt(17,"Riot Bomb",5e3,5,3,"riot",{blast:30,behavior:"riot_sphere"}),new Tt(18,"Heavy Riot Bomb",4750,2,3,"riot",{blast:45,behavior:"riot_sphere"}),new Tt(19,"Baby Digger",3e3,10,0,"digger",{blast:-10,behavior:"digger"}),new Tt(20,"Digger",2500,5,0,"digger",{blast:-20,behavior:"digger"}),new Tt(21,"Heavy Digger",6750,2,1,"digger",{blast:-35,behavior:"digger"}),new Tt(22,"Baby Sandhog",1e4,10,0,"sandhog",{blast:10,behavior:"sandhog",warheads:1}),new Tt(23,"Sandhog",16750,5,0,"sandhog",{blast:15,behavior:"sandhog",warheads:2}),new Tt(24,"Heavy Sandhog",25e3,2,1,"sandhog",{blast:20,behavior:"sandhog",warheads:4}),new Tt(25,"Dirt Clod",5e3,10,0,"dirt",{blast:20,behavior:"dirt_sphere"}),new Tt(26,"Dirt Ball",5e3,5,0,"dirt",{blast:35,behavior:"dirt_sphere"}),new Tt(27,"Ton of Dirt",6750,2,1,"dirt",{blast:70,behavior:"dirt_sphere"}),new Tt(28,"Liquid Dirt",5e3,5,2,"dirt",{blast:25,behavior:"dirt_slump"}),new Tt(29,"Dirt Charge",5e3,10,1,"dirt",{blast:30,behavior:"dirt_wedge"}),new Tt(30,"Earth Disrupter",5e3,10,0,"dirt",{blast:0,behavior:"dirt_settle"}),new Tt(31,"Plasma Blast",9e3,5,3,"energy",{blast:40,behavior:"plasma"}),new Tt(32,"Laser",5e3,5,2,"energy",{blast:0,behavior:"laser"}),new Tt(33,"Heat Guidance",1e4,6,2,"guidance",{behavior:"equip"}),new Tt(34,"Bal Guidance",1e4,2,2,"guidance",{behavior:"equip"}),new Tt(35,"Horz Guidance",15e3,5,1,"guidance",{behavior:"equip"}),new Tt(36,"Vert Guidance",2e4,5,1,"guidance",{behavior:"equip"}),new Tt(37,"Lazy Boy",2e4,2,3,"guidance",{behavior:"equip"}),new Tt(38,"Parachute",1e4,8,2,"utility",{behavior:"equip"}),new Tt(39,"Battery",5e3,10,2,"utility",{behavior:"equip"}),new Tt(40,"Mag Deflector",1e4,2,2,"shield",{behavior:"equip",params:{hp:55,push:!0}}),new Tt(41,"Shield",2e4,3,3,"shield",{behavior:"equip",params:{hp:100}}),new Tt(42,"Force Shield",25e3,3,3,"shield",{behavior:"equip",params:{hp:100,deflect:!0}}),new Tt(43,"Heavy Shield",3e4,2,4,"shield",{behavior:"equip",params:{hp:150}}),new Tt(44,"Super Mag",4e4,2,4,"shield",{behavior:"equip",params:{hp:200,push:!0,laserproof:!0}}),new Tt(45,"Auto Defense",1500,1,3,"utility",{behavior:"equip"}),new Tt(46,"Fuel Tank",1e4,10,3,"utility",{behavior:"equip"}),new Tt(47,"Contact Trigger",1e3,25,3,"utility",{behavior:"equip"})],yi=_e.length;if(yi!==48)throw new Error(`NUM_ITEMS must be 48, got ${yi}`);const pn=0,Lo=1,Bi=38,Tn=39,oS=40,Bd=41,kd=42,Hd=43,aS=44,or=45,zd=46,cS=47,Io=[oS,Bd,kd,Hd,aS],Lu={0:3,1:2,2:1,3:2,6:.2,7:.1,8:.2,9:.1,12:.2,13:.2,17:.2,25:.1,31:.2,32:.2};function Qn(i){const t=Math.floor(i),e=i-t;return e<.5?t+0:e>.5?t+1:t%2===0?t+0:t+1}class Gd{constructor(t,e,n,s,r,o){v(this,"vx");v(this,"vy");v(this,"px");v(this,"py");v(this,"sx");v(this,"sy");v(this,"prev_px");v(this,"prev_py");v(this,"saved_vx");v(this,"saved_vy");v(this,"weapon");v(this,"weapon_type");v(this,"owner");v(this,"owner_index");v(this,"active");v(this,"mode");v(this,"flags");v(this,"bounce_energy");v(this,"bounce_count");v(this,"spring_armed");v(this,"warheads_left");v(this,"guidance");v(this,"target");v(this,"state");v(this,"trail");v(this,"armed");v(this,"split_done");v(this,"contact");this.vx=r,this.vy=o,this.px=n,this.py=s,this.sx=Qn(n),this.sy=Qn(s),this.prev_px=this.px,this.prev_py=this.py,this.saved_vx=this.vx,this.saved_vy=this.vy,this.weapon=e,this.weapon_type=e.idx,this.owner=t,this.owner_index=t?t.player_index:-1,this.active=!0,this.mode=0,this.flags=0,this.bounce_energy=Ad,this.bounce_count=0,this.spring_armed=!1,this.warheads_left=e.warheads,this.guidance=null,this.target=null,this.state={},this.trail=[],this.armed=!0,this.split_done=!1,this.contact=!1}}class lS{constructor(t,e,n=0,s=0,r=0){v(this,"player_index");v(this,"name");v(this,"ai_class");v(this,"reveal_type");v(this,"team_id");v(this,"color");v(this,"tank_icon");v(this,"mobile");v(this,"x");v(this,"y");v(this,"half_width");v(this,"angle");v(this,"power");v(this,"health");v(this,"alive");v(this,"shield_hp");v(this,"shield_item");v(this,"shield_push");v(this,"shield_deflect");v(this,"shield_laserproof");v(this,"shield_failproof");v(this,"parachute_deployed");v(this,"parachute_threshold");v(this,"chute_up");v(this,"contact_trigger");v(this,"selected_guidance");v(this,"guidance_target");v(this,"guidance_target_pt");v(this,"cash");v(this,"cash_ceiling");v(this,"inventory");v(this,"selected_weapon");v(this,"fuel_remainder");v(this,"score");v(this,"win_counter");v(this,"hits_this_round");v(this,"hits_career");v(this,"fall_accum");v(this,"falling");v(this,"ai_tries");v(this,"ai_saved_tactic");this.player_index=t,this.name=e,this.ai_class=n,this.reveal_type=n?n-1:-1,this.team_id=s,this.color=0,this.tank_icon=r,this.mobile=!0,this.x=0,this.y=0,this.half_width=7,this.angle=45,this.power=500,this.health=Jc,this.alive=!0,this.shield_hp=0,this.shield_item=0,this.shield_push=!1,this.shield_deflect=!1,this.shield_laserproof=!1,this.shield_failproof=!1,this.parachute_deployed=!0,this.parachute_threshold=LM,this.chute_up=0,this.contact_trigger=!1,this.selected_guidance=null,this.guidance_target=null,this.guidance_target_pt=null,this.cash=0,this.cash_ceiling=0,this.inventory=new Array(yi).fill(0),this.inventory[pn]=99,this.selected_weapon=0,this.fuel_remainder=0,this.score=0,this.win_counter=0,this.hits_this_round={},this.hits_career={},this.fall_accum=0,this.falling=!1,this.ai_tries=0,this.ai_saved_tactic=null}has_ammo(t){return t===pn?!0:this.inventory[t]>0}consume(t){if(t===pn){this.inventory[t]=this.inventory[t]>1?this.inventory[t]-1:99;return}this.inventory[t]>0&&(this.inventory[t]-=1)}get fuel(){return this.inventory[zd]*10+this.fuel_remainder}get parachutes(){return this.inventory[Bi]}get batteries(){return this.inventory[Tn]}}function Mo(i,t){return Math.floor(i/t)}function Vd(i,t,e,n,s,r){const o=Dl*i.GRAVITY;let a=Math.abs(n-t);const c=e-s;a<1&&(a=1);const l=Bl(r),h=Math.cos(l),u=h*h*(a*Math.tan(l)-c);if(u<=0)return null;const f=o*a*a/(2*u);return f<=0?null:Math.sqrt(f)/Nl}const Qc=-1,Wd=-2;function jc(i,t,e,n,s,r){let o=e<=90?e:180-e;o=Math.max(0,Math.min(90,o));const a=Dl*i.GRAVITY,c=Math.max(1,Math.abs(n-t.x)),l=t.y-s,h=Bl(o),u=Math.cos(h),f=u*u*(c*Math.tan(h)-l);if(f===0)return r?Wd:0;let d=a*c*c/(2*f);if(d<0){if(r)return Qc;d=-d}const _=Math.sqrt(d)/Nl,g=10*Math.max(1,t.health);return r&&_>g?Qc:_}function hS(i){const t=i.cfg.live_elastic!==void 0?i.cfg.live_elastic:i.cfg.elastic??0;return t!==0&&t!==1}function uS(i,t,e,n){const s=e<=90?e:180-e,r=Qn(n*Math.sin(Bl(s)));return t.y-r<2}function Xd(i,t,e,n){const s=i.cfg;let r=Math.trunc(t.angle),o=0;const a=hS(i);let c=null;for(let l=0;l<200;l++){const h=jc(s,t,r,e,n,!0);if(h===Qc)o|=1,r+=r<90?-1:1;else if(h===Wd)o|=2,r+=r<90?1:-1;else if(a&&uS(i,t,r,h))o|=1,r+=r<90?-2:2;else{c=h;break}if(o===3||r<0||r>180)break}return c===null&&(c=jc(s,t,Math.max(0,Math.min(180,r)),e,n,!1)||800),[Rn(r),Gi(c)]}function Ol(i,t){let e=null,n=1e18;for(const s of i.tanks)if(s.alive&&s!==t&&!Vi(i,t,s)){const r=Math.abs(s.x-t.x);r<n&&(e=s,n=r)}return e}function Vi(i,t,e){return t!==e&&i.cfg.team_mode!==qo&&t.team_id===e.team_id}function fS(i,t){const e=i.tanks.slice().sort((a,c)=>a.score-c.score),n=new Map;e.forEach((a,c)=>n.set(a,c));const s=i.round_index+1;let r=null,o=-1e18;for(const a of i.tanks){if(!a.alive||a===t||Vi(i,t,a))continue;const c=t.hits_this_round[a.player_index]??0,h=(t.hits_career[a.player_index]??0)*(t.shield_hp>0?3:5);let u=i.rng.pick(32e3)/2e3+c/s+h;a.shield_hp>0&&(u-=a.shield_hp/10+1);const f=Math.abs(n.get(t)-n.get(a))-1;u-=3*Math.max(0,f),u>o&&(r=a,o=u)}return r||Ol(i,t)}function tn(i,t,e=!1){const n=[];for(let s=0;s<yi;s++)_e[s].offensive&&t.has_ammo(s)&&n.push(s);return e&&n.length>0?n[i.rng.pick(n.length)]:t.has_ammo(Lo)?Lo:pn}function dS(i,t){t.ai_class===Fd&&t.reveal_type!==-2&&(t.ai_class=i.rng.pick(7)+1,t.reveal_type=-2)}function za(i,t){dS(i,t);const e=t.ai_class;return(bS[e]??Yo)(i,t)}function pS(i,t){let e=Math.abs(3*i.cfg.wind/10)+i.cfg.AIR_VISCOSITY/2;return e=Math.min(70,e),t?85-e:95+e}function mS(i,t){const e=(i.rng.pick(Math.max(1,t.health))+1)*10;let n=0,s=0;for(const o of i.tanks)o.alive&&o!==t&&!Vi(i,t,o)&&(o.x<t.x&&(n+=1),o.x>=t.x&&(s+=1));let r=i.rng.pick(181);if(n||s)for(let o=0;o<64;o++){const a=r>90;if(a&&n||!a&&s)break;r=i.rng.pick(181)}return[Rn(r),Gi(e),tn(i,t,!0)]}function qd(i,t,e){let n=null,s=1<<30;for(const r of i.tanks)if(!(e&&e.has(r))&&r.alive&&r!==t&&!Vi(i,t,r)){const o=Math.abs(r.x-t.x);o<s&&(n=r,s=o)}return n}function Yd(i,t){const e=i.y-t.y+2,n=t.x-i.x,s=RS(Math.atan2(e,Math.abs(n))),r=Math.max(1,Math.min(89,s));return Qn(n>=0?r:180-r)}function Kd(i,t,e){const n=i.cfg;let s=Math.trunc(t.angle),r=null;for(let o=0;o<200;o++){const a=jc(n,t,s,e.x,e.y,!0);if(a<0)s+=s<90?1:-1;else if(a>=1){r=a;break}else break;if(s===90)return null}return[Rn(s),Gi(r!==null?r:0)]}function Yo(i,t,e){const n=e!==void 0?e:new Set,s=qd(i,t,n);if(!s)return Fl(i,t,tn(i,t));t.angle=Rn(Yd(t,s));const r=Kd(i,t,s);if(r===null){const c=new Set(n);return c.add(s),Yo(i,t,c)}const[o,a]=r;return[o,a,tn(i,t)]}function $d(i,t){const e=new Set;for(let n=0;n<8;n++){const s=qd(i,t,e);if(!s)return Fl(i,t,tn(i,t));const r=_S(i,t,s);if(r!==null)return[r[0],r[1],tn(i,t)];t.angle=Rn(Yd(t,s));const o=Kd(i,t,s);if(o===null){e.add(s);continue}const[a,c]=o;return[a,c,tn(i,t)]}return[t.angle,t.power,tn(i,t)]}function Zd(i){const t=i.cfg.live_elastic!==void 0?i.cfg.live_elastic:i.cfg.elastic??0;return t===3||t===4}function _S(i,t,e){const n=i.last_landing;if(n===null||!Zd(i))return null;const s=n[0],r=n[1];if(t.ai_tries+=1,t.ai_tries>4)return t.ai_tries=0,null;let o=Math.trunc(t.angle);if(Math.abs(t.x-e.x)<Math.abs(t.x-s)){if(o+=1,o===90)return t.ai_tries=0,null}else r>=e.y&&o!==0&&(o-=1);return[Rn(o),Gi(t.power)]}function Fl(i,t,e){const n=Ol(i,t),s=n?n.x>=t.x:!0;let r=i.rng.pick(70)+10,o;s?o=t.x+Mo(i.w-1-t.x,2):(r=180-r,o=Mo(t.x,2));const a=Mo(i.h-1,2),c=Math.min(89,r<=90?r:180-r);let l=Vd(i.cfg,t.x,t.y,o,a,c);return l===null&&(l=600),[Rn(r),Gi(l),e]}function gS(i,t){const e=i.last_landing,n=tn(i,t);if(e===null)return Fl(i,t,n);const s=e[0],r=e[1],o=i.direct_hit_tank,a=o!==null&&o.alive&&!Vi(i,t,o)?o:xS(i,t,s);if(a===null)return[Rn(t.angle),Gi(t.power),n];let c=t.angle,l=t.power;return Math.abs(t.x-a.x)<Math.abs(t.x-s)?l-=10:(r<a.y&&vS(i,r)&&(c<85?c+=2:c>95&&(c-=2)),l+=10),[Rn(c),Gi(l),n]}function xS(i,t,e){let n=null,s=1<<30;for(const r of i.tanks)if(r.alive&&r!==t&&!Vi(i,t,r)){const o=Math.abs(r.x-e);o<s&&(n=r,s=o)}return n}function vS(i,t){return(i.live_sky??"").toUpperCase()!=="CAVERN"?!0:Mo(i.h,2)<t}function Rn(i){return Math.trunc(Math.max(0,Math.min(180,i)))}function Gi(i){return Math.trunc(Math.max(0,Math.min(1e3,i)))}function yS(i,t){const e=[];for(const n of i.tanks)n.alive&&n!==t&&!Vi(i,t,n)&&e.push(n);return e.length===0?null:e[i.rng.pick(e.length)]}function Jd(i,t){const e=yS(i,t);if(!e)return[t.angle,t.power,tn(i,t)];t.angle=t.x<e.x?65:115;const[n,s]=Xd(i,t,e.x,e.y);return[n,s,tn(i,t)]}function MS(i,t){const e=fS(i,t);if(!e)return[t.angle,t.power,tn(i,t)];t.angle=Rn(pS(i,t.x<e.x));const[n,s]=Xd(i,t,e.x,e.y);return[n,s,tn(i,t)]}function SS(i,t){const e=Ol(i,t);return e&&ES(i,t,e)?Yo(i,t):Zd(i)?$d(i,t):Jd(i,t)}function ES(i,t,e){const n=t.x,s=t.y-6,r=e.x,o=e.y-6,a=Math.max(1,Math.trunc(Math.hypot(r-n,o-s)));for(let c=1;c<a;c++){const l=Math.trunc(n+(r-n)*c/a),h=Math.trunc(s+(o-s)*c/a);if(i.terrain.is_dirt(l,h))return!1}return!0}const bS={[Od]:mS,[tS]:Yo,[eS]:$d,[nS]:gS,[iS]:SS,[sS]:Jd,[rS]:MS};function TS(i,t){i.cfg.is_on("COMPUTERS_BUY")&&(t.ai_class===Od?AS(i,t):wS(i,t))}function Iu(i,t){return i.inventory[t]>0}function wS(i,t){const e=i.economy;for(const s of[Hd,kd,Bd])Io.some(r=>Iu(t,r))||e.buy(t,s);Iu(t,Bi)||e.buy(t,Bi)&&(t.parachute_deployed=!0);for(const s of[Lo,pn]){let r=0;for(;t.inventory[s]<5&&e.available[s]&&r<20&&e.buy(t,s);)r+=1}let n=0;for(;t.inventory[Tn]<8&&n<20&&e.buy(t,Tn);)n+=1}function AS(i,t){const e=i.economy;for(let n=0;n<10;n++){const s=[],r=[];for(const a of Object.keys(Lu)){const c=Number(a),l=Lu[c];e.available[c]&&t.cash>=e.price[c]&&l>0&&(s.push(c),r.push(l))}if(s.length===0)break;const o=s[i.rng.roulette(r)];if(!e.buy(t,o))break}}function Bl(i){return i*Math.PI/180}function RS(i){return i*180/Math.PI}const CS={33:"heat",34:"ballistic",35:"horizontal",36:"vertical",37:"lazyboy"},Qd=new Set(["mirv","riot_wedge","riot_sphere","plasma"]),LS=80,Pu=.35;function IS(i,t,e,n){const s=i.selected_guidance;if(s==null)return n.guidance=null,null;const r=CS[s];if(r===void 0||Qd.has(e.behavior))return n.guidance=null,null;const o={type:r,target:i.guidance_target??null,point:i.guidance_target_pt??null,tanks:null,armed:!1,_last_x:null,_last_y:null};return n.guidance=o,o}function PS(i,t,e=null){const n=i.guidance;if(!n)return!0;e!=null&&(n.tanks=e);const s=n._last_x,r=n._last_y,o=n.type;return o==="heat"?US(i,n):o==="horizontal"?OS(i,n,s,r):o==="vertical"?FS(i,n,s):o==="lazyboy"&&BS(i,n),n._last_x=i.px,n._last_y=i.py,!0}function Ko(i){return Math.hypot(i.vx,i.vy)}function DS(i,t){const e=t.tanks;if(!e||e.length===0)return null;const n=i.owner,s=n?.team_id??null;let r=null,o=LS;for(const a of e){if(!a.alive||a===n||s!==null&&(a.team_id??null)===s&&NS(a,n))continue;const c=Math.hypot(a.x-i.px,a.y-4-i.py);c<=o&&(r=a,o=c)}return r}function NS(i,t){const e=i?.team_id??0,n=t?.team_id??0;return e!==0&&e===n}function US(i,t){const e=DS(i,t);if(e===null)return;const n=Ko(i);if(n<1e-6)return;const s=e.x-i.px,r=e.y-4-i.py,o=Math.hypot(s,r);if(o<1e-6)return;const a=s/o,c=-r/o,l=i.vx+(a*n-i.vx)*Pu,h=i.vy+(c*n-i.vy)*Pu,u=Math.hypot(l,h);u<1e-6||(i.vx=l/u*n,i.vy=h/u*n)}function OS(i,t,e,n){const s=t.target,r=t.point,o=s!==null?s.y-4:r?r[1]:null,a=s!==null?s.x:r?r[0]:null;if(o===null||a===null||(t.armed||n!==null&&(n-o)*(i.py-o)<=0&&(t.armed=!0),!t.armed))return;const c=Ko(i),l=a>=i.px?1:-1;i.vx=l*c,i.vy=0}function FS(i,t,e,n){const s=t.target,r=t.point,o=s!==null?s.x:r?r[0]:null;if(o===null||(t.armed||e!==null&&(e-o)*(i.px-o)<=0&&(t.armed=!0,i.px=o),!t.armed))return;const a=Ko(i);i.vx=0,i.vy=-a,i.px=o}function BS(i,t){let e=t.point;if(e===null){const d=t.target;if(d===null)return;e=[d.x,d.y-4]}const n=Ko(i);if(n<1e-6)return;const s=e[0]-i.px,r=e[1]-i.py,o=Math.hypot(s,r);if(o<1e-6)return;const a=s/o,c=-r/o,l=.6,h=i.vx+(a*n-i.vx)*l,u=i.vy+(c*n-i.vy)*l,f=Math.hypot(h,u);f<1e-6||(i.vx=h/f*n,i.vy=u/f*n)}function kS(i,t,e){const n=t.guidance_target??null,s=t.guidance_target_pt??null;let r,o;if(n!==null)r=n.x,o=n.y-4;else if(s!==null)r=s[0],o=s[1];else return null;const a=t.angle,c=a<=90?a:180-a,l=Vd(i,t.x,t.y,r,o,c);return l===null?1e3:Qn(Math.max(30,Math.min(1e3,l)))}const HS=.017453293,Du=12,Nu=0,Uu=1,Ou=2;function ro(i,t,e,n=null,s=null){if(s===null&&(s=i.angle),n===null&&i.selected_guidance===34&&!Qd.has(e.behavior)){const m=kS(t,i);m!==null&&(n=m)}n===null&&(n=i.power);const r=s*HS,o=Math.cos(r),a=Math.sin(r),c=i.x,l=i.y-4,h=c+o*Du,u=l-a*Du,f=n*Nl,d=f*o,_=f*a,g=new Gd(i,e,h,u,d,_);return IS(i,t,e,g),g}function zS(i,t,e=wM,n=null){i.prev_px=i.px,i.prev_py=i.py,i.guidance!==null&&i.guidance!==void 0&&PS(i,t,n);const s=i.vx*i.vx+i.vy*i.vy;if(s>bM){const o=Math.sqrt(s);i.vx=i.vx/(o/wu),i.vy=i.vy/(o/wu)}i.px+=i.vx*e,i.py-=i.vy*e,i.saved_vx=i.vx,i.saved_vy=i.vy;const r=t.viscosity_mult;if(i.mode!==1&&r!==1&&(i.vx*=r,i.vy*=r),i.mode!==1){const o=Dl*t.GRAVITY;if(i.vy-=o*e,t.wind){const a=EM*t.wind;i.vx+=a*e}}i.sx=Qn(i.px),i.sy=Qn(i.py)}function GS(i,t,e,n){const s=t.live_elastic!==void 0?t.live_elastic:t.elastic??0,r=t.EDGES_EXTEND,o=i.px,a=i.py,c=0,l=e-1,h=0,u=n-1;let f=Nu,d=null;if(o<c||o>l){if(s===0)return!(o<c-r||o>l+r);if(s===5)return!1;f=Uu,s===1?d=o<c?l:c:d=o<c?c:l}else if(a<h){if(s===0||s===1)return!0;if(s===5)return!1;f=Ou,d=h}else if(a>=u)if(s===3||s===4){if(-50<i.vy&&i.vy<50)return!1;f=Ou,d=u}else return!1;if(f===Nu)return!0;i.bounce_count+=1;let _;return s===3?_=Ba.RUBBER:s===2?_=Ba.PADDED:_=Ba.DEFAULT,i.bounce_count>6&&(_*=i.bounce_energy,i.bounce_energy*=Ad),f===Uu?(i.px=d,i.vx*=_):(i.py=d,i.vy*=_),i.sx=Qn(i.px),i.sy=Qn(i.py),!0}const VS=30;function Fu(i,t){return Math.floor(i/t)}function vi(i,t){i.score+=t,i.cash=Math.max(0,i.cash+t)}function jd(i,t,e){return t===e||i.cfg.team_mode!==qo&&t.team_id===e.team_id}function WS(i,t,e){if(t!==null)if(jd(i,t,e))vi(t,t===e?GM:VM);else{const n=i.cfg.scoring===Xo?HM:zM;vi(t,n)}}function tp(i,t,e,n,s){t===null||n<=0||i.cfg.scoring!==Xo&&(jd(i,t,e)?vi(t,-15*Math.trunc(n)):s?vi(t,WM*Math.trunc(n)):vi(t,Math.trunc(n*VS)))}function XS(i){const t=i.tanks.filter(n=>n.alive);if(t.length===0)return;let e;if(i.cfg.scoring===Xo?e=i.tanks.length*Dd:e=Nd,i.cfg.team_mode===qo)for(const n of t)n.win_counter+=1,vi(n,e);else{const n=t[0].team_id,s=i.tanks.filter(a=>a.team_id===n),r=s.filter(a=>a.alive).length,o=Fu(e,Math.max(1,r));for(const a of s)a.alive?(a.win_counter+=1,vi(a,o)):vi(a,Fu(o,2))}}function qS(i,t){let e=t.cash;for(let n=0;n<t.inventory.length;n++){const s=t.inventory[n];if(s>0){const r=i.economy.unit_price(n)*Ud;e+=Math.trunc(s*r)}}return e}function Bu(i){const t=i.cfg.scoring===YM?n=>qS(i,n):n=>n.score,e=i.tanks.map(n=>({t:n,k:t(n)}));return e.sort((n,s)=>n.k<s.k?1:n.k>s.k?-1:0),e.map(n=>n.t)}const ku=44100,Hu=2,YS=.28,hn=19,li=12e3,KS=200,$S=64;function yn(i,t,e){return i<t?t:i>e?e:i}function zu(i,t,e){const n=new Float64Array(e);if(e===1)return n[0]=i,n;const s=(t-i)/(e-1);for(let r=0;r<e;r++)n[r]=i+s*r;return n[e-1]=t,n}function ZS(){const i=globalThis;return i.AudioContext??i.webkitAudioContext??null}class JS{constructor(){v(this,"enabled",!0);v(this,"fly_mode","OFF");v(this,"field_height",480);v(this,"_ready",!1);v(this,"_init_failed",!1);v(this,"_ctx",null);v(this,"_mix_rate",ku);v(this,"_mix_channels",Hu);v(this,"_tone_cache",new Map);v(this,"_sweep_cache",new Map);v(this,"_seq_cache",new Map);v(this,"_fly_source",null);v(this,"_fly_freq",0);v(this,"_fly_launch_y",null)}init(){if(this._ready)return!0;if(this._init_failed)return!1;const t=ZS();if(t===null)return this._init_failed=!0,!1;try{const e=new t;return this._ctx=e,this._mix_rate=e.sampleRate||ku,this._mix_channels=Hu,this._ready=!0,!0}catch{return this._init_failed=!0,!1}}_square_wave(t,e,n,s){const r=new Float64Array(e);if(s==null||s===t)for(let o=0;o<e;o++){const a=o/n,c=2*Math.PI*t*a;r[o]=Math.sign(Math.sin(c))}else{const o=e/n,a=o>0?(s-t)/o:0;for(let c=0;c<e;c++){const l=c/n,h=2*Math.PI*(t*l+.5*a*l*l);r[c]=Math.sign(Math.sin(h))}}return r}_envelope(t,e,n){const s=Math.max(1,Math.trunc(n*.003));if(e>2*s){const r=zu(0,1,s),o=zu(1,0,s);for(let a=0;a<s;a++)t[a]=t[a]*r[a],t[e-s+a]=t[e-s+a]*o[a]}return t}_finish(t,e){const n=new Int16Array(e);for(let s=0;s<e;s++)n[s]=Math.trunc(t[s]*YS*32767);return n}_square_array(t,e,n){const s=this._mix_rate,r=Math.max(1,Math.trunc(s*e/1e3)),o=this._envelope(this._square_wave(t,r,s,n),r,s);return this._finish(o,r)}_seq_array(t){const e=this._mix_rate,n=[];for(const o of t){const a=o[0],c=o[1],l=o.length>2?o[2]:null,h=Math.max(1,Math.trunc(e*c/1e3));if(a<hn&&(l===null||l<hn)){n.push(new Float64Array(h));continue}const u=yn(a,hn,li),f=l===null?null:yn(l,hn,li);n.push(this._envelope(this._square_wave(u,h,e,f),h,e))}let s=0;for(const o of n)s+=o.length;let r;if(s===0)r=new Float64Array(1);else{r=new Float64Array(s);let o=0;for(const a of n)r.set(a,o),o+=a.length}return this._finish(r,r.length)}_buffer(t){const e=this._ctx;if(e===null)return null;const n=t.length;try{const s=e.createBuffer(this._mix_channels,n,this._mix_rate);for(let r=0;r<this._mix_channels;r++){const o=s.getChannelData(r);for(let a=0;a<n;a++)o[a]=t[a]/32768}return s}catch{return null}}_tone_buffer(t,e){if(!this.init())return null;const n=Math.trunc(yn(t,hn,li)),s=Math.trunc(Math.max(1,e)),r=`${n}:${s}`;let o=this._tone_cache.get(r);if(o===void 0){const a=this._buffer(this._square_array(n,s));if(a===null)return null;o=a,this._tone_cache.set(r,o)}return o}_sweep_buffer(t,e,n){if(!this.init())return null;const s=Math.trunc(yn(t,hn,li)),r=Math.trunc(yn(e,hn,li)),o=Math.trunc(Math.max(1,n)),a=`${s}:${r}:${o}`;let c=this._sweep_cache.get(a);if(c===void 0){const l=this._buffer(this._square_array(s,o,r));if(l===null)return null;c=l,this._sweep_cache.set(a,c)}return c}_seq_buffer(t){if(!this.init())return null;const e=JSON.stringify(t);let n=this._seq_cache.get(e);if(n===void 0){const s=this._buffer(this._seq_array(t));if(s===null)return null;n=s,this._seq_cache.set(e,n)}return n}_play_buffer(t){const e=this._ctx;if(t===null||e===null)return null;try{e.state==="suspended"&&typeof e.resume=="function"&&e.resume();const n=e.createBufferSource();return n.buffer=t,n.connect(e.destination),n.start(),n}catch{return null}}beep(t,e,n){!(n===void 0?this.enabled:n)||t<hn||this._play_buffer(this._tone_buffer(t,e))}_play_sweep(t,e,n){this._play_buffer(this._sweep_buffer(t,e,n))}_play_tones(t,e){e&&this._play_buffer(this._seq_buffer(t))}play(t,e,n){const s=e===void 0?this.enabled:e;if(s){if(t==="fire"){const r=[];for(let o=0;o<100;o+=15)r.push([o,14]);return this._play_tones(r,s)}if(t==="explosion"||t==="nuke"){const r=Number(n?.size??20)||20,o=Math.trunc(yn(4+r/8,4,14)),a=Math.trunc(yn(22+r*.4,22,60)),c=[];for(let l=0;l<o;l++)c.push([l%2===0?200:100,a]);return this._play_tones(c,s)}if(t==="plasma"){const r=[];for(let o=1;o<10;o++)r.push([o*1e3,16]);for(let o=1;o<10;o++)r.push([(10-o)*1e3,16]);return this._play_tones(r,s)}if(t==="shield_collapse"){const r=this._sweep_steps(6e3,-100,51,6);return r.push([1e3,40]),this._play_tones(r,s)}if(t==="shield_deploy")return this._play_tones(this._sweep_steps(1e3,100,51,6),s);if(t==="shield_hit")return this.beep(900,40,s);if(t==="throe_front"){const r=[];let o=1e3;for(let a=0;a<40;a++)r.push([o,12]),o+=200,o>4e3&&(o=1e3);return this._play_tones(r,s)}if(t==="throe_thud")return this._play_tones([[100,90]],s);if(t==="sink")return this._play_tones(this._sweep_steps(5e3,-200,24,10),s);if(t==="death"){const r=[];for(let o=10;o<20;o++)r.push([20,22]),r.push([0,(o-10)*-2+25]);return this._play_tones(r,s)}if(t==="battery")return this._play_tones([[100,22],[200,28],[100,34]],s);if(t==="parachute")return this.beep(2e3,48,s);if(t==="dirt_settle")return this._play_tones([[30,18],[30,18],[20,30]],s);if(t==="teleport"){const r=[];let o=1000n;for(let a=0;a<12;a++)o=o*1103515245n+12345n&0x7fffffffn,r.push([Number(o%100n)*100+1e3,10]);return this._play_tones(r,s)}if(t==="lightning")return this.beep(2e3,70,s);if(t==="thunder")return this._play_tones([[70,24],[40,30],[90,22],[50,28]],s);if(t==="laser")return this._play_sweep(1e3,6e3,90);if(t==="bounce"||t==="fizzle"||t==="mirv")return t==="bounce"?this.beep(520,36,s):t==="mirv"?this.beep(700,30,s):this.beep(300,40,s);if(t==="victory")return this._play_sweep(5e3,15e3,260);if(t==="ui_beep")return this.beep(KS,$S,s);if(t==="turn"||t==="menu_move"||t==="select")return this.beep(20,70,s);if(t==="dialog_open"||t==="dialog_close")return t==="dialog_open"?this._play_sweep(260,720,150):this._play_sweep(720,260,150)}}_sweep_steps(t,e,n,s){const r=[];let o=t;for(let a=0;a<n;a++)r.push([Math.trunc(yn(o,hn,li)),s]),o+=e;return r}set_launch_y(t){this._fly_launch_y=t}_fly_freq_for(t,e){if(t==="POS"){const s=e.sy??0;let o=((this._fly_launch_y!==null?this._fly_launch_y:0)-s)*8+1e3;return o<50&&(o=50),Math.trunc(yn(o,hn,li))}const n=Math.hypot(e.vx??0,e.vy??0);return Math.trunc(yn(n,hn,li))}start_fly(t,e){const n=e===void 0?this.enabled:e,s=(t!==void 0?t:this.fly_mode)||"OFF";if(this.fly_mode=s,!n||s==="OFF"||!this.init())return;const r=this._tone_buffer(300,60),o=this._ctx;if(!(r===null||o===null))try{const a=o.createBufferSource();a.buffer=r,a.loop=!0,a.connect(o.destination),a.start(),this._fly_source=a,this._fly_freq=300}catch{this._fly_source=null}}fly_tone(t,e,n){const s=n===void 0?this.enabled:n,r=t||"OFF";if(this.fly_mode=r,!s||r==="OFF"){this.stop_fly();return}if(!this.init()||this._fly_source===null&&(this.start_fly(r,s),this._fly_source===null))return;const o=this._fly_freq_for(r,e);if(o!==this._fly_freq){const a=this._tone_buffer(o,60),c=this._ctx;if(a!==null&&c!==null){try{this._fly_source!==null&&this._fly_source.stop()}catch{}try{const l=c.createBufferSource();l.buffer=a,l.loop=!0,l.connect(c.destination),l.start(),this._fly_source=l,this._fly_freq=o}catch{}}}}stop_fly(){if(this._fly_source!==null)try{this._fly_source.stop()}catch{}this._fly_source=null,this._fly_freq=0}}const Yt=new JS;function $o(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}const QS=Ul;function jS(i){return[i.x,i.y]}function tE(i,t){if(i.shield_hp!==0&&t!==0){if(t<i.shield_hp)return i.shield_hp-=t,[0,t];const e=t-i.shield_hp,n=i.shield_hp;return i.shield_hp=0,i.shield_item=0,[e,n]}return[t,0]}function Wi(i,t,e){if(e=Math.trunc(e),t===null||e<=0||!t.alive)return;const n=i.current_shooter;if(n!==null){const o=n.player_index;t.hits_this_round[o]=(t.hits_this_round[o]??0)+1,t.hits_career[o]=(t.hits_career[o]??0)+1}const[s,r]=tE(t,e);r>0&&t.shield_hp===0&&Yt.play("shield_collapse",i.cfg.is_on("SOUND")),r>0&&(tp(i,n,t,r,!0),t.shield_hp>0),s>0&&kl(i,t,s,!1)}function kl(i,t,e,n=!0){e=Math.trunc(e),!(e<=0||!t.alive)&&(n&&tp(i,i.current_shooter,t,e,!1),t.health-=e,t.health<=0&&(t.health=0,eE(i,t)))}function Gu(i,t,e){kl(i,t,e,!1)}function eE(i,t,e=null){t.alive&&(t.alive=!1,t.health=0,e===null&&(e=i.current_weapon??null),i.on_tank_destroyed(t,e))}function nn(i,t,e,n,s=!0){if(n=Math.trunc(n),!(n<=0)){s&&(i.terrain.carve_circle(t,e,n),i.add_explosion(t,e,n));for(const r of i.tanks.slice()){if(!r.alive)continue;const[o,a]=jS(r),c=o-t,l=a-e,h=Math.sqrt(c*c+l*l);if(h<n){const u=$o((n-h)*Ul/n);Wi(i,r,u)}}}}function nE(i,t){t.alive&&kl(i,t,t.health,!0)}function Vu(i,t=QS){i.shield_hp>0&&(i.shield_hp=Math.max(0,i.shield_hp-Math.trunc(t)),i.shield_hp===0&&(i.shield_item=0))}function iE(i,t){const e=t.x;let n=t.y;const s=i.h-2;let r=0;for(;n<s&&!i.is_supported(e,n,t.half_width);)n+=1,r+=1;return r*Ld}function sE(i,t){return!t.parachute_deployed||t.parachutes<1?!1:t.parachute_threshold===0?!0:t.parachute_threshold<iE(i,t)}function Ga(i){return Math.min(255,(Math.trunc(i)&63)<<2)}function be(i,t,e){return[Ga(i),Ga(t),Ga(e)]}const ep=110,Po=[[63,10,10],[35,55,10],[40,20,63],[63,63,10],[10,63,63],[63,10,63],[60,60,60],[63,40,20],[20,63,40],[0,0,63]];Po.map(i=>be(i[0],i[1],i[2]));const So=[[38,25,17],[54,36,28],[53,53,47],[20,62,20],[9,35,9],[36,54,28]],rE=30;function oE(){const i=[];for(let t=0;t<rE;t++)i.push([29-t,29-t,63]);return i}function aE(){const i=[];for(let l=0;l<256;l++)i.push([0,0,0]);i[Sn]=[0,0,0];const t=[[0,0,0],[0,0,170],[0,170,0],[0,170,170],[170,0,0],[170,0,170],[170,85,0],[170,170,170],[85,85,85],[85,85,255],[85,255,85],[85,255,255],[255,85,85],[255,85,255],[255,255,85],[255,255,255]];for(let l=0;l<t.length;l++)i[l]=[t[l][0],t[l][1],t[l][2]];i[dn]=be(So[0][0],So[0][1],So[0][2]);const e=i[dn][0],n=i[dn][1],s=i[dn][2],r=bn-Te;for(let l=Te;l<=bn;l++){const u=.45+.55*((l-Te)/r);i[l]=[Math.trunc(e*u),Math.trunc(n*u),Math.trunc(s*u)]}for(let l=0;l<Po.length;l++){const h=Po[l];i[ep+l]=be(h[0],h[1],h[2])}const o=[[87,[40,40,63]],[120,[9,9,31]],[150,[50,50,50]],[151,[45,45,45]],[152,[0,0,0]],[153,[30,30,30]],[154,[40,40,63]],[155,[63,63,63]],[156,[15,15,15]],[157,[50,50,50]],[158,[5,5,5]],[159,[55,55,55]],[160,[20,60,20]],[161,[10,63,63]],[162,[45,45,45]]];for(const[l,h]of o)i[l]=be(h[0],h[1],h[2]);const a=oE();for(let l=0;l<a.length;l++){const h=a[l];i[tl+l]=be(h[0],h[1],h[2])}const c=[252,220,120];for(let l=ka;l<=OM;l++){let h=(l-ka)/(Id-ka);h=Math.max(0,Math.min(1,h));const u=Math.trunc(c[0]*h),f=Math.trunc(c[1]*Math.pow(h,1.4)),d=Math.trunc(c[2]*Math.pow(h,2.2));i[l]=[u,f,d]}return i[200]=be(60,60,60),i[203]=be(40,40,40),i[254]=be(40,15,15),i[255]=be(63,63,63),i[FM]=be(20,60,60),i[231]=be(20,60,20),i[232]=be(20,20,60),i[Pd]=[252,240,200],i}function cE(i){const t=Po.length;return ep+(i%t+t)%t}const tl=120,Wu=149,lE=200,hE=239,uE=120,fE=149,ar=175,gs=184,el=8,Xu=11,Do=14,qu=18,nl=2;function Ye(i){return Math.fround(i)}class dE{constructor(t){v(this,"table");v(this,"rev");if(t===void 0&&(t=aE()),t.length!==256)throw new Error(`LiveLUT expects a (256,3) table, got length ${t.length}`);this.table=[];for(let e=0;e<256;e++){const n=t[e];if(n.length!==3)throw new Error(`LiveLUT expects a (256,3) table, got row ${e} length ${n.length}`);this.table.push([n[0]&255,n[1]&255,n[2]&255])}this.rev=0}get(t){return this.table[t]}copy_table(){const t=[];for(let e=0;e<256;e++){const n=this.table[e];t.push([n[0],n[1],n[2]])}return t}rotate_band(t,e,n=1){if(t=Math.trunc(t),e=Math.trunc(e),e<=t)return;const s=e-t+1,o=(Math.trunc(n)%s+s)%s;if(o===0)return;const a=[];for(let c=0;c<s;c++){const l=this.table[t+c];a.push([l[0],l[1],l[2]])}for(let c=0;c<s;c++){const l=((c-o)%s+s)%s;this.table[t+c]=a[l]}this.rev+=1}reramp_band(t,e,n,s){if(t=Math.trunc(t),e=Math.trunc(e),e<t)return;const r=e-t+1,o=[Ye(n[0]),Ye(n[1]),Ye(n[2])],a=[Ye(s[0]),Ye(s[1]),Ye(s[2])],c=[];if(r===1)c.push(Ye(0));else{const h=1/(r-1);for(let u=0;u<r;u++)c.push(Ye(u*h));c[r-1]=Ye(1)}for(let l=0;l<r;l++){const h=c[l],u=Ye(1-h),f=[0,0,0];for(let d=0;d<3;d++){const _=Ye(o[d]*u),g=Ye(a[d]*h),m=Ye(_+g);f[d]=Math.trunc(Math.min(255,Math.max(0,m)))}this.table[t+l]=f}this.rev+=1}set_band(t,e,n){t=Math.trunc(t),e=Math.trunc(e);const s=e-t+1;for(let r=0;r<s;r++){const o=n[r];this.table[t+r]=[o[0]&255,o[1]&255,o[2]&255]}this.rev+=1}set_index(t,e){this.table[Math.trunc(t)]=[e[0]&255,e[1]&255,e[2]&255],this.rev+=1}}function pE(i){i===void 0&&(i=So[0]);const t=i[0],e=i[1],n=i[2],s=[];for(let r=0;r<5;r++)s.push([Math.floor(((r+1)*63+(4-r)*t)/5),Math.floor(((r+1)*20+(4-r)*e)/5),Math.floor(((r+1)*20+(4-r)*n)/5)]);for(let r=0;r<5;r++){const o=r*-5+63;s.push([o,o,63])}return s}function mE(i){return pE(i).map(t=>be(t[0],t[1],t[2]))}const _E=[[63,32,10],[63,0,63],[63,12,12],[63,0,30]];function Yu(i,t){const e=(Math.trunc(t)%101+101)%101,n=e<=49?e:100-e;if(i.set_index(nl,be(Math.floor(n*63/50),Math.floor(n*10/50),0)),!(e&7)){let a=(e>>3&3)+1;for(let c=0;c<4;c++){const l=_E[((a-1)%4+4)%4];i.set_index(el+c,be(l[0],l[1],l[2])),a+=1,a>4&&(a=1)}}const s=(e>>1)%5;i.set_index(Do+s,be(0,0,0));const r=[15,30,45,60];let o=s;for(let a=0;a<4;a++)o+=1,o>4&&(o=0),i.set_index(Do+o,be(r[a],r[a],r[a]))}function Hl(i,t){return Math.sqrt(i*i+t*t)}function gE(i){return i*Math.PI/180}function Re(i,t){return Math.abs(t.blast)*i.explosion_scale}function us(i,t,e,n){const s=t.weapon;i.current_weapon=s;const r=s.category??"";if(s.behavior!=="tracer"&&s.behavior!=="plasma"&&r!=="nuclear"&&Yt.play("explosion",i.cfg.is_on("SOUND")),(s.category??"")==="nuclear"){xE(i,t,e,n);return}(NE[s.behavior]??cr)(i,t,e,n)}function cr(i,t,e,n){nn(i,e,n,Re(i,t.weapon))}function xE(i,t,e,n){Yt.play("nuke",i.cfg.is_on("SOUND"));const s=Re(i,t.weapon);nn(i,e,n,s,!1),i.terrain.carve_circle(Math.trunc(e),Math.trunc(n),Math.trunc(s)),i.add_explosion(Math.trunc(e),Math.trunc(n),Math.trunc(s),{nuke:!0})}function vE(i,t,e,n){const s=Re(i,t.weapon),r=Math.trunc(Math.abs(t.weapon.blast))*10,o=t.weapon.params.scatter??15,a=[];for(let f=0;f<o;f++)a.push([i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s),i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s)]);const c=Math.max(8,s*.3),l=[[0,0],...a];let h=0,u=Math.floor(r/5);for(;u>0;){const[f,d]=l[(h%l.length+l.length)%l.length],_=Math.trunc(e+f),g=Math.trunc(n+d);nn(i,_,g,c);const m=yE(i,_,g);if(m!==null&&Hl(m.x-_,m.y-g)<=c){const p=u<=10?u:10;Wi(i,m,p)}u-=50,h+=1}}function yE(i,t,e){let n=null,s=1e9;for(const r of i.tanks)if(r.alive){const o=Hl(r.x-t,r.y-e);o<s&&(n=r,s=o)}return n}function ME(i,t,e,n){const s=i.terrain;n=Math.max(1,Math.trunc(n));const r=s.column_top(t),o=h=>{let u=0;for(let f=1;f<=n;f++){const d=s.column_top(t+h*f);u=Math.max(u,r-d)}return u},a=o(-1),c=o(1),l=Math.min(a,c);return Math.max(0,Math.min(1,l/n))}function SE(i,t,e,n){const s=Re(i,t.weapon),r=t.weapon.heat,o=t.weapon.params.deep_heat??r,a=ME(i,Math.trunc(e),Math.trunc(n),s),c=r+(o-r)*a,l=s*(1+.5*a);nn(i,e,n,s,!1),i.add_explosion(Math.trunc(e),Math.trunc(n),Math.trunc(l));for(const h of i.tanks){if(!h.alive)continue;const u=Hl(h.x-e,h.y-n);u<l&&Wi(i,h,$o(c*(1-u/l)))}}function Sr(i){Yt.play("dirt_settle",i.cfg.is_on("SOUND"))}function EE(i,t,e,n){i.terrain.deposit_circle(e,n,Re(i,t.weapon)),i.terrain.settle(i.cfg,i.rng,e-60,e+60),Sr(i)}function bE(i,t,e,n){i.terrain.deposit_circle(e,n,Re(i,t.weapon));for(let s=0;s<3;s++)i.terrain.settle(i.cfg,i.rng,e-80,e+80);Sr(i)}function TE(i,t,e,n){const s=Math.trunc(Re(i,t.weapon)),r=gE(35);for(let o=0;o<=s;o++){const a=Math.trunc(o*Math.tan(r))+2,c=n-o;for(let l=-a;l<=a;l++)i.terrain.is_solid(e+l,c)||i.terrain.write(e+l,c,Te+4)}Sr(i)}function wE(i,t,e,n){i.terrain.settle(i.cfg,i.rng,0,i.terrain.w),Sr(i)}function AE(i,t,e,n){i.terrain.carve_circle(e,n,Re(i,t.weapon)),i.add_explosion(e,n,Math.trunc(Re(i,t.weapon)),{dirt_only:!0})}const RE={"Riot Charge":45,"Riot Blast":60};function CE(i,t,e,n){const s=RE[t.weapon.name]??45,r=t.owner?.angle??90;i.terrain.carve_wedge(e,n,Re(i,t.weapon),s,r)}function LE(i,t,e,n){}function np(i,t,e,n){i.current_weapon=t.weapon,Yt.play("plasma",i.cfg.is_on("SOUND"));const s=Re(i,t.weapon);nn(i,e,n,s,!1),i.terrain.carve_circle(Math.trunc(e),Math.trunc(n),Math.trunc(s)),i.add_plasma_ring(e,n,s)}function Ku(i,t,e,n){}function IE(i,t,e,n){const s=Re(i,t.weapon),r=t.weapon.params.pops??8,o=Math.max(4,s*.35);nn(i,e,n,o);for(let a=0;a<r;a++){const c=i.rng.pick(Math.trunc(2*s)+1)-Math.trunc(s),l=i.rng.pick(Math.trunc(s)+1);nn(i,Math.trunc(e+c),Math.trunc(n-l),o)}}function PE(i,t,e,n){const s=Math.trunc(Re(i,t.weapon)),r=Math.max(2,Math.trunc(s/4)),o=Math.max(s,s*2),a=Math.max(0,n-o);for(let c=e-r;c<=e+r;c++)for(let l=a;l<=n;l++)i.terrain.is_solid(c,l)||i.terrain.write(c,l,Te+8);i.terrain.settle(i.cfg,i.rng,e-r-4,e+r+4),Sr(i)}function DE(i,t,e,n){np(i,t,e,n)}const NE={explosive:cr,funky:vE,napalm:SE,dirt_sphere:EE,dirt_slump:bE,dirt_wedge:TE,dirt_settle:wE,riot_sphere:AE,riot_wedge:CE,tracer:LE,plasma:np,roller:cr,leapfrog:cr,mirv:cr,digger:Ku,sandhog:Ku,popcorn:IE,dirt_tower:PE,plasma_laser:DE};function UE(i,t){if(t.weapon.behavior!=="mirv"||t.split_done)return;Yt.play("mirv",i.cfg.is_on("SOUND")),t.split_done=!0,t.active=!1;const e=t.weapon.warheads,n=t.weapon.fan,s=Math.floor((e+1)/2);for(let r=0;r<e;r++){const o=n*(r-s);if(o===0)continue;const a=new Gd(t.owner,ip(t.weapon),t.px,t.py,t.vx+o,t.vy);a.warheads_left=1,a.split_done=!0,i.projectiles.push(a)}}function ip(i){const t=Object.assign(Object.create(Object.getPrototypeOf(i)),i);return t.behavior="explosive",t.warheads=1,t}function OE(i,t,e,n){t.state.rolling=!0,t.vx=t.vy=0;const s=i.terrain.column_top(e-3),r=i.terrain.column_top(e+3);t.state.dir=r>s?1:-1,t.px=e,t.py=i.terrain.column_top(e)-1}function FE(i,t){const e=i.terrain,n=t.state.dir,s=Math.trunc(t.px)+n;if(s<=1||s>=e.w-1)return Va(i,t);const r=e.column_top(s),o=e.column_top(Math.trunc(t.px));for(const a of i.tanks)if(a.alive&&Math.abs(a.x-s)<=a.half_width)return Va(i,t);if(r>o+6)t.px=s,t.py=r-1;else{if(r<o-1)return Va(i,t);t.px=s,t.py=r-1}return t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py),!0}function Va(i,t){return us(i,t,Math.trunc(t.px),Math.trunc(t.py)),t.active=!1,!1}function BE(i,t,e,n){t.state.tunneling=!0,t.state.depth=0,t.state.max_depth=Math.abs(t.weapon.blast);const s=Math.abs(t.weapon.blast);t.state.bore_half=Math.max(5,Math.trunc(s/2)),t.px=e,t.py=n,t.vx=t.vy=0}function sp(i,t,e,n){const s=i.terrain,r=ar,o=gs-r;for(let a=-n;a<=n;a++)s.write(t+a,e,Sn);{let a=0;for(let c=n;c<=n+2;c++,a++){const l=Math.min(gs,r+a);s.is_solid(t+c,e)&&s.write(t+c,e,l),s.is_solid(t-c,e)&&s.write(t-c,e,l)}}{const a=Math.min(n+1,o+1);let c=0;for(let l=0;l<a;l++,c++){const h=Math.min(gs,r+c);s.is_solid(t+l,e+1)&&s.write(t+l,e+1,h),s.is_solid(t-l,e+1)&&s.write(t-l,e+1,h)}}i.start_digger_cycle!==void 0&&i.start_digger_cycle()}function kE(i,t){const e=i.terrain,n=Math.trunc(t.px),s=Math.trunc(t.py);return sp(i,n,s,t.state.bore_half??3),t.state.depth=t.state.depth+1,t.py+=1,t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py),t.state.depth>=t.state.max_depth||t.py>=e.h-2?(t.active=!1,!1):!0}function HE(i,t,e,n){t.state.tunneling=!0,t.state.depth=0,t.state.start_y=n,t.state.warheads=t.weapon.warheads;const s=WE(i,t.owner);t.state.target_x=s?s.x:e,t.px=e,t.py=n,t.vx=t.vy=0}function zE(i,t){const e=i.terrain,n=Math.trunc(t.px),s=Math.trunc(t.py);sp(i,n,s,2);const r=t.state.target_x;t.px+=r>n?1:r<n?-1:0,t.py+=1,t.state.depth=t.state.depth+1,t.sx=Math.trunc(t.px),t.sy=Math.trunc(t.py);for(const o of i.tanks)if(o.alive&&Math.abs(o.x-Math.trunc(t.px))<=o.half_width&&t.py>=o.y){const a=Math.max(1,t.state.depth),c=Math.max(0,o.y-t.state.start_y);if(c<a){i.current_weapon=t.weapon;const l=$o((a-c)*Ul/a);Wi(i,o,l)}if(t.state.warheads=t.state.warheads-1,t.state.warheads<=0)return t.active=!1,!1}return t.py>=e.h-2||t.state.depth>200?(t.active=!1,!1):!0}const GE=40;function VE(i,t){i.current_weapon=t.weapon,Yt.play("laser",i.cfg.is_on("SOUND"));let e=t.state.energy??50;const n=Math.atan2(t.vy,t.vx),s=Math.cos(n),r=-Math.sin(n);let o=t.px,a=t.py;const c=[],l=new Set;for(;e>=1&&0<=o&&o<i.terrain.w&&0<=a&&a<i.terrain.h;){const h=Math.trunc(o),u=Math.trunc(a);c.push([h,u]),i.terrain.is_dirt(h,u)&&i.terrain.write(h,u,Sn);for(const f of i.tanks)if(f.alive&&!l.has(f)&&Math.abs(f.x-h)<=f.half_width&&Math.abs(f.y-4-u)<=6){if(f.shield_laserproof&&f.shield_hp>0){e=0;break}Wi(i,f,Math.max(1,Math.floor(e/5))),l.add(f)}o+=s,a+=r,e-=GE}t.trail=c,i.add_beam(c),t.active=!1}function WE(i,t){for(const e of i.tanks)if(e.alive&&e!==t)return e;return null}const oo=new Uint8Array([77,84,190,239]),Qs=24;function Mn(i,t){return i[t]|i[t+1]<<8}function XE(i,t){return i[t]<<8|i[t+1]}function qE(i,t="<mtn>"){if(i.length<Qs||!YE(i)){const _=Array.from(i.subarray(0,4));throw new Error(`${t}: bad MTN magic ${JSON.stringify(_)}`)}const e=XE(i,4),n=Mn(i,6),s=Mn(i,8),r=Mn(i,10),o=Mn(i,12),a=Mn(i,14),c=Mn(i,16),l=Mn(i,18),h=Mn(i,20),u=Mn(i,22),f=Qs+o*3;if(i.length<f)throw new Error(`${t}: truncated palette`);const d=[];for(let _=0;_<o;_++){const g=Qs+_*3;d.push([i[g],i[g+1],i[g+2]])}return{version:e,width:n,height:r,xoff:s,ncolors:o,sky_index:c,palette:d,header_extra:[a,l,h,u],palette_offset:Qs,body_offset:Qs+o*3}}function YE(i){return i[0]===oo[0]&&i[1]===oo[1]&&i[2]===oo[2]&&i[3]===oo[3]}function KE(i,t="<mtn>"){const e=qE(i,t),n=e.width,s=e.height;let r=e.body_offset;const o=new Int32Array(n),a=[];for(let l=0;l<n;l++){if(r+2>i.length)throw new Error(`${t}: underrun reading count for column ${l}`);const h=Mn(i,r);if(r+=2,h>s)throw new Error(`${t}: column ${l} count ${h} exceeds height ${s}`);const u=h+1>>1;if(r+u>i.length)throw new Error(`${t}: underrun reading pixels for column ${l}`);const f=new Int16Array(h);for(let d=0;d<u;d++){const _=i[r+d],g=d*2;g<h&&(f[g]=_&15);const m=g+1;m<h&&(f[m]=_>>4&15)}r+=u,a.push(f),o[l]=h}const c=i.length-r;if(c!==0)throw new Error(`${t}: ${c} trailing bytes after ${n} columns (over/underrun)`);return{hdr:e,counts:o,columns:a}}function $E(i,t="<mtn>"){const{hdr:e,counts:n,columns:s}=KE(i,t),r=e.width,o=e.height,a=e.sky_index,c=new Int32Array(r);for(let u=0;u<r;u++)c[u]=o-n[u];const l=new Set;for(const u of s)for(let f=0;f<u.length;f++)l.add(u[f]);l.delete(a);const h=Array.from(l).sort((u,f)=>u-f);return{surface:c,counts:n.slice(),height:o,width:r,xoff:e.xoff,sky_indices:[a],ground_indices:h}}function ZE(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}function hi(i){return Math.trunc(i)}function JE(i,t,e){const n=new Float64Array(e);if(e<=0)return n;if(e===1)return n[0]=i,n;const s=(t-i)/(e-1);for(let r=0;r<e;r++)n[r]=i+r*s;return n[e-1]=t,n}function QE(i,t,e){const n=t.length,s=new Float64Array(i.length),r=t[0],o=t[n-1],a=e[0],c=e[n-1];for(let l=0;l<i.length;l++){const h=i[l];if(h<=r){s[l]=a;continue}if(h>=o){s[l]=c;continue}let u=0,f=n;for(;u<f;){const g=u+f>>>1;t[g]<=h?u=g+1:f=g}let d=u-1;if(d<0&&(d=0),d>=n-1){s[l]=c;continue}const _=(e[d+1]-e[d])/(t[d+1]-t[d]);s[l]=_*(h-t[d])+e[d]}return s}class jE{constructor(t,e){v(this,"w");v(this,"h");v(this,"grid");this.w=t,this.h=e,this.grid=new Uint8Array(t*e)}read(t,e){return 0<=t&&t<this.w&&0<=e&&e<this.h?this.grid[t*this.h+e]:Sn}write(t,e,n){0<=t&&t<this.w&&0<=e&&e<this.h&&(this.grid[t*this.h+e]=n)}is_dirt(t,e){return BM(this.read(t,e))}is_solid(t,e){return kM(this.read(t,e))}drop_to_footprint(t,e){return Math.max(2,Math.min(this.h-2,this.column_top(t)-1))}column_top(t){if(!(0<=t&&t<this.w))return this.h;const e=this.h,n=t*e,s=this.grid,r=c=>{const l=s[n+c];return l===dn||l>=Te&&l<=bn};if(!r(0)){const c=this._argmaxSolid(n,0,e,!1);return r(c)?c:e}const o=this._argmaxSolid(n,0,e,!0);if(r(o))return e;const a=this._argmaxSolid(n,o,e,!1);return r(a)?a:e}_argmaxSolid(t,e,n,s){const r=this.grid;for(let o=e;o<n;o++){const a=r[t+o],c=a===dn||a>=Te&&a<=bn;if(s?!c:c)return o}return e}generate(t,e,n){this.grid.fill(Sn);let s=null;if(n&&n.length>0){const r=Math.max(hi(t.MTN_PERCENT),60);if(e.chance(r,100)){const o=n[e.pick(n.length)];s=this._from_mtn(o,e)}}s===null&&(s=this._midpoint(t,e)),this._rasterize(s,e)}_midpoint(t,e){const n=this.w,s=this.h,r=new Array(n).fill(0);let o,a;t.is_on("RANDOM_LAND")?(o=100,a=!1):(o=t.LAND1,t.LAND2,a=t.is_on("FLATLAND"));const c=s*.55,l=(.45+o/100*.45)*s;r[0]=c,r[n-1]=c;const h=l,u=(g,m,p)=>{if(m-g<2)return;const b=Math.floor((g+m)/2);r[b]=(r[g]+r[m])/2+e.uniform(-1,1)*p,u(g,b,p*.58),u(b,m,p*.58)};u(0,n-1,h);const f=s*.05,d=s-2,_=s*.28;for(let g=0;g<n;g++){let m=r[g];a&&m<_&&(m=_),r[g]=Math.min(d,Math.max(f,m))}return r}_from_mtn(t,e){const n=$E(t.data,t.name),s=n.surface,r=n.width,o=new Float64Array(r);for(let d=0;d<r;d++)o[d]=s[d];let a;if(r>=this.w){const d=e.pick(r-this.w+1);a=o.subarray(d,d+this.w)}else{const d=JE(0,r-1,this.w),_=new Float64Array(r);for(let g=0;g<r;g++)_[g]=g;a=QE(d,_,o)}const c=this.h*.12,l=this.h-2;let h=1/0,u=-1/0;for(let d=0;d<a.length;d++){const _=a[d];_<h&&(h=_),_>u&&(u=_)}h=h,u=u;const f=new Array(a.length);if(u-h<1e-6){const d=c+.6*(l-c);for(let _=0;_<a.length;_++)f[_]=d}else{const d=u-h,_=l-c;for(let g=0;g<a.length;g++){const m=(a[g]-h)/d;f[g]=c+m*_}}return f}_rasterize(t,e){const n=this.h,s=bn,r=Te+8,o=Te+3,a=this.grid;for(let c=0;c<this.w;c++){const l=Math.max(0,Math.min(n-1,ZE(t[c]))),h=n-l;if(h<=0)continue;const u=c*n;for(let _=l;_<n;_++)a[u+_]=r;const f=l+Math.floor(h*2/3);if(f<n)for(let _=f;_<n;_++)a[u+_]=o;const d=Math.min(n,l+2);for(let _=l;_<d;_++)a[u+_]=s}}_circleRect(t,e,n){const s=Math.max(0,t-n),r=Math.min(this.w,t+n+1),o=Math.max(0,e-n),a=Math.min(this.h,e+n+1);return s>=r||o>=a?null:[s,r,o,a]}clear_index_band(t,e,n=null){const s=n===null?Sn:n,r=this.grid;for(let o=0;o<r.length;o++){const a=r[o];a>=t&&a<=e&&(r[o]=s)}}carve_circle(t,e,n){const s=hi(n),r=this._circleRect(t,e,s);if(!r)return;const[o,a,c,l]=r,h=s*s,u=this.h,f=this.grid;for(let d=o;d<a;d++){const _=d-t,g=_*_,m=d*u;for(let p=c;p<l;p++){const b=p-e;if(g+b*b<=h){const w=f[m+p];(w===dn||w>=Te&&w<=bn)&&(f[m+p]=Sn)}}}}deposit_circle(t,e,n){const s=hi(n),r=this._circleRect(t,e,s);if(!r)return;const[o,a,c,l]=r,h=s*s,u=Te+8,f=this.h,d=this.grid;for(let _=o;_<a;_++){const g=_-t,m=g*g,p=_*f;for(let b=c;b<l;b++){const w=b-e;m+w*w<=h&&(d[p+b]=u)}}}level_under_tank(t,e,n){const s=Math.max(0,t-n),r=Math.min(this.w,t+n+1);if(s>=r)return;const o=this.h,a=Math.max(0,Math.min(o-1,hi(e))),c=Te+8,l=Math.max(8,2*n+2),h=this.grid,u=f=>f===dn||Te<=f&&f<=bn;for(let f=s;f<r;f++){const d=f*o;let _=a;const g=Math.max(0,a-l);for(;_>=g&&u(h[d+_]);)h[d+_]=Sn,_-=1;_=a+1;const m=Math.min(o,a+1+l);for(;_<m&&!u(h[d+_]);)h[d+_]=c,_+=1}}carve_wedge(t,e,n,s=45,r=90){const o=.017453292519943295,a=57.29577951308232,c=(r-s)*o,l=(r+s)*o,h=Math.max(1,hi((l-c)*a)),u=hi(n);for(let f=0;f<=h;f++){const d=c+(l-c)*f/h,_=Math.cos(d),g=-Math.sin(d);for(let m=1;m<=u;m++){const p=hi(t+_*m),b=hi(e+g*m);this.is_dirt(p,b)&&this.write(p,b,Sn)}}}settle(t,e,n=0,s=null){const r=100-t.SUSPEND_DIRT;if(r<=0||r!==100&&!e.chance(r,100))return;let o=s===null?this.w:s,a=Math.max(0,n);o=Math.min(this.w,o);for(let c=a;c<o;c++)this._settle_column(c)}_settle_column(t){const e=this.h,n=t*e,s=this.grid,r=a=>{const c=s[n+a];return c===dn||c>=Te&&c<=bn};let o=0;for(;o<e;){if(!r(o)){o+=1;continue}const a=o;for(;o<e&&r(o);)o+=1;const c=o;if(c>=e)return;let h=c;for(;h<e&&!r(h);)h+=1;const u=h-c;if(u<=0)return;const f=c-a,d=new Uint8Array(f);for(let _=0;_<f;_++)d[_]=s[n+a+_];for(let _=a;_<c;_++)s[n+_]=Sn;for(let _=0;_<f;_++)s[n+a+u+_]=d[_];return}}support_count(t,e,n){let s=0;const r=e+1;for(let o=-n;o<=n;o++)this.is_solid(t+o,r)&&(s+=1);return s}is_supported(t,e,n){const s=e+1;let r=0;for(let o=-n;o<=n;o++)this.is_solid(t+o,s)&&(r+=1);if(r>=IM)return!0;for(const o of[-1,0,1])if(this.is_solid(t+o,s))return!0;return!1}}function ao(i){const t=Math.floor(i),e=i-t;return e<.5?t:e>.5?t+1:t%2===0?t:t+1}class tb{constructor(t){v(this,"cfg");v(this,"n");v(this,"price");v(this,"demand_tally");v(this,"nobuy");v(this,"demand_ema");v(this,"ratio_ema");v(this,"available");this.cfg=t,this.n=yi,this.price=_e.map(e=>e.cost),this.demand_tally=new Array(this.n).fill(0),this.nobuy=new Array(this.n).fill(0),this.demand_ema=new Array(this.n).fill(.1),this.ratio_ema=new Array(this.n).fill(.1),this.available=new Array(this.n).fill(!0)}refresh_availability(){const t=this.cfg.ARMS;this.cfg.is_on("USELESS_ITEMS");for(let e=0;e<_e.length;e++){const s=_e[e].arms<=t;this.available[e]=s}}unit_price(t){const e=_e[t].bundle||1;return this.price[t]/e}buy(t,e){if(!this.available[e]||t.inventory[e]>=Ha)return!1;const n=this.price[e];return t.cash<n?!1:(t.cash-=n,this.demand_tally[e]+=1,t.inventory[e]+=_e[e].bundle,t.inventory[e]>Ha&&(t.inventory[e]=Ha),!0)}sell(t,e,n){if(n=Math.min(n,t.inventory[e]),n<=0)return 0;const s=this.cfg.is_on("FREE_MARKET")?qM:Ud,r=_e[e].bundle||1,o=ao(this.price[e]*n*s/r);return t.inventory[e]-=n,this.credit(t,o),o}credit(t,e){t.cash=Math.max(0,t.cash+e)}market_update(t){if(!this.cfg.is_on("FREE_MARKET"))return;const e=.7;for(let n=0;n<_e.length;n++){const s=_e[n];if(!this.available[n])continue;const r=this.demand_tally[n];this.nobuy[n]=r?0:this.nobuy[n]+1,this.demand_ema[n]=(1-e)*r/Math.max(1,t)+this.demand_ema[n]*e;const o=s.cost||1,a=(this.price[n]/o)**2/10;this.ratio_ema[n]=this.ratio_ema[n]*e+(1-e)*a,this.price[n]=ao(this.price[n]*(1+XM*(this.demand_ema[n]-this.ratio_ema[n]))),this.price[n]=Math.max(1,this.price[n]),this.demand_tally[n]=0}}annuity_price(t,e){const n=this.cfg.INTEREST_RATE,s=_e[t].cost;if(n===0||e<=0)return s;const r=(1+n-(1+n)**-e)/n;return ao(s*r)}update_repeated_use(t){const e=or;this.price[e]=this.annuity_price(e,t)}accrue_interest(t){const e=this.cfg.INTEREST_RATE;if(e!==0)for(const n of t)(n.alive??!0)&&n.cash>0&&this.credit(n,ao(n.cash*e))}}const Pe=624,co=397,Wa=2567483615,Xa=2147483648,qa=2147483647;class rp{constructor(t){v(this,"mt",new Uint32Array(Pe));v(this,"mti",Pe+1);t!==void 0&&this.seed(t)}initGenrand(t){this.mt[0]=t>>>0;for(let e=1;e<Pe;e++){const n=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=Math.imul(1812433253,n)+e>>>0}this.mti=Pe}initByArray(t){this.initGenrand(19650218);let e=1,n=0,s=Math.max(Pe,t.length);for(;s;s--){const r=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=((this.mt[e]^Math.imul(r,1664525))>>>0)+t[n]+n>>>0,e++,n++,e>=Pe&&(this.mt[0]=this.mt[Pe-1],e=1),n>=t.length&&(n=0)}for(s=Pe-1;s;s--){const r=(this.mt[e-1]^this.mt[e-1]>>>30)>>>0;this.mt[e]=((this.mt[e]^Math.imul(r,1566083941))>>>0)-e>>>0,e++,e>=Pe&&(this.mt[0]=this.mt[Pe-1],e=1)}this.mt[0]=2147483648}seed(t){let e=BigInt(Math.abs(Math.trunc(t)));const n=[];if(e===0n)n.push(0);else for(;e>0n;)n.push(Number(e&0xffffffffn)),e>>=32n;this.initByArray(n)}genrandUint32(){if(this.mti>=Pe){const e=this.mt;let n,s=0;for(;s<Pe-co;s++)n=(e[s]&Xa|e[s+1]&qa)>>>0,e[s]=(e[s+co]^n>>>1^(n&1?Wa:0))>>>0;for(;s<Pe-1;s++)n=(e[s]&Xa|e[s+1]&qa)>>>0,e[s]=(e[s+(co-Pe)]^n>>>1^(n&1?Wa:0))>>>0;n=(e[Pe-1]&Xa|e[0]&qa)>>>0,e[Pe-1]=(e[co-1]^n>>>1^(n&1?Wa:0))>>>0,this.mti=0}let t=this.mt[this.mti++];return t^=t>>>11,t=(t^t<<7&2636928640)>>>0,t=(t^t<<15&4022730752)>>>0,t^=t>>>18,t>>>0}getrandbits(t){if(t<=0)throw new RangeError("number of bits must be greater than zero");if(t<=32)return this.genrandUint32()>>>32-t;let e=0,n=0,s=t;for(;s>0;){const r=s<32?s:32,o=this.genrandUint32()>>>32-r;e+=o*Math.pow(2,n),n+=32,s-=32}return e}randbelow(t){if(t<=0)return 0;const e=32-Math.clz32(t);let n=this.getrandbits(e);for(;n>=t;)n=this.getrandbits(e);return n}pick(t){return t<=0?0:this.randbelow(t)}chance(t,e){return this.randbelow(e)<t}random(){const t=this.genrandUint32()>>>5,e=this.genrandUint32()>>>6;return(t*67108864+e)/9007199254740992}uniform(t,e){return t+(e-t)*this.random()}roulette(t){let e=0;for(const r of t)e+=r;if(e<=0)return this.randbelow(t.length);const n=this.uniform(0,e);let s=0;for(let r=0;r<t.length;r++)if(s+=t[r],n<=s)return r;return t.length-1}}const Zo=new rp;function op(i,t){return Math.floor(i/t)}const $u=13,Zu=10,Ju=7,eb=[1,4],nb=[1,2],ib=30,sb=30,rb=[255,255,255],ob=2,ab=4,Qu=8,ju=8,cb=6,lb=[230,230,235],hb=10,ub=6,tf=["PLAIN","STORMY","STARS","SHADED","SUNSET","CAVERN"],fb=["STORMY"];function zl(i,t){const e=(i.SKY||"PLAIN").toUpperCase();return e==="RANDOM"?tf[t.pick(tf.length)]:e}function db(i){return fb.indexOf((i||"").toUpperCase())!==-1}function il(i,t,e,n,s=null){s===null&&(s=[0]);const r=[],o=[[Math.trunc(i),Math.trunc(t)]];let a=i,c=t,l=0;for(;c!==e&&l<4096;){l+=1;const h=e-c,u=Math.abs(h)<=12?h:h>0?12:-12,f=c+u,d=Math.abs(h),_=n.pick(d+1)-(d>>1),g=a+op(_*u,Math.max(1,d));if(o.push([Math.trunc(g),Math.trunc(f)]),s[0]<$u&&n.pick(Zu)>Ju){s[0]+=1;for(const m of il(g,f,e,n,s))r.push(m);if(s[0]<$u&&n.pick(Zu)>Ju){s[0]+=1;for(const m of il(g,f,e,n,s))r.push(m)}}a=g,c=f}return[o,...r]}function pb(i,t,e){const n=Math.max(2,op(i.w,16));let s=t+i.rng.pick(2*n+1)-n;return s=Math.max(0,Math.min(i.w-1,s)),il(s,0,Math.trunc(e),i.rng)}function mb(i){let t=i.live_sky??null;if(t==null&&(t=zl(i.cfg,i.rng),i.live_sky=t),!db(t))return null;const[e,n]=eb;if(!i.rng.chance(e,n)){const[l,h]=nb;return i.rng.chance(l,h)&&_b(i),null}const s=i.tanks.filter(l=>l.alive);if(s.length===0)return null;const r=s[i.rng.pick(s.length)],o=r.x,a=r.y-4,c=pb(i,o,a);return xb(i,c),Yt.play("lightning",i.cfg.is_on("SOUND")),typeof i.add_flash=="function"&&i.add_flash(ib,sb,rb),i.cfg.is_on("HOSTILE_ENVIRONMENT")&&gb(i,o,a),c}function _b(i){if(typeof i.add_flash!="function")return;Yt.play("thunder",i.cfg.is_on("SOUND"));const t=i.rng.pick(ab)+ob,e=Qu+ju+cb;for(let n=0;n<t;n++)i.add_flash(Qu,ju,lb,n*e)}function gb(i,t,e){for(const n of i.tanks.slice())n.alive&&Math.abs(n.x-t)<=n.half_width+ub&&n.y-4>=e-4&&Wi(i,n,hb)}function xb(i,t){Array.isArray(i.active_bolts)||(i.active_bolts=[]);for(const e of t)e.length>=2&&i.active_bolts.push({pts:e,frame:0})}function vb(i,t=6){const e=i.active_bolts??null;if(!(!e||e.length===0)){for(const n of e)n.frame+=1;i.active_bolts=e.filter(n=>n.frame<=t)}}const yb=10;function Mb(i){if((i.live_sky||zl(i.cfg,i.rng)).toUpperCase()!=="CAVERN")return 0;const e=Math.min(yb,i.terrain.h),n=Te+8,s=bn,r=i.terrain;for(let o=0;o<r.w;o++){for(let a=0;a<e;a++)r.write(o,a,n);e>=1&&r.write(o,e-1,s)}return e}const Sb=40,Eb=20,ap=20,cp=40,lp=75,bb=8,Tb=24,hp=6,wb=2,Ab=6,Rb=7,Cb=18,ef=2,Lb=22;function Ib(i,t=null){if(t!==null){const n=Re(i,t);if(n&&n>0)return Math.trunc(n)}const e=i.explosion_scale??1;return Math.trunc(Cb*e)}function up(i,t){return Math.max(1,Math.trunc(t*(i.explosion_scale??1)))}function fp(i,t,e=!1){const n=i.cfg,r=n!==void 0&&n.is_on("ICON_BAR")?Lb:ef,o=Math.max(ef,r)+Rb;if(i.add_death_fountain===void 0){i.add_explosion(Math.max(0,Math.min(i.w-1,t.x)),t.y,wb,{dirt_only:!0});return}i.add_death_fountain(t.x,t.y,o,{color:t.color??15,stride:Ab,scatter:e?3:1})}function dp(i,t,e){nn(i,t.x,t.y,e,!0)}function Pb(i,t,e=null){const n=i.death_queue;if(n===void 0){const s=pp(i);return Bb(i,t,s),s}return n.push({kind:"throe",tank:t,stage:"start",roll:null,tick:0,sub:0}),null}function Db(i,t,e=null){const n=i.death_queue,s=Ib(i,e);if(n===void 0){fp(i,t,!1),dp(i,t,s);return}n.push({kind:"ascension",tank:t,stage:"climb",radius:s,tick:0,spawned:!1})}function pp(i){const t=i.cfg,e=t!==void 0&&!!(t.SUSPEND_DIRT??0);let n=i.rng.pick(11);for(;e&&n===8;)n=i.rng.pick(11);return n}function Nb(i){const t=[],e=i.death_queue;if(e===void 0||e.length===0)return t;let n=0;for(;e.length>0&&n<64&&(n+=1,!(i.projectiles!==void 0&&i.projectiles.length>0));){const s=e[0];if(s.kind==="ascension"){if(!Ub(i,s,t))break}else if(!Ob(i,s,t))break;e.length>0&&e[0]===s&&s.stage==="done"&&e.shift()}return t}function Ub(i,t,e){if(t.stage==="climb"){if(t.spawned||(t.spawned=!0,fp(i,t.tank,!1),e.push(["climb",null])),i.death_fountains!==void 0&&i.death_fountains.length>0)return!1;t.stage="blast"}return t.stage==="blast"&&(dp(i,t.tank,t.radius),t.stage="done"),!0}function Ob(i,t,e){const n=t.tank;if(t.stage==="start"){if(e.push(["award",n]),t.roll=pp(i),t.roll<=5)return t.stage="front",t.tick=0,e.push(["front",n.color??15]),!1;t.stage="body"}if(t.stage==="front"){if(t.tick+=1,t.tick<Sb)return!1;t.stage="body",t.tick=0}return t.stage==="body"?Fb(i,t,e):!0}function Fb(i,t,e){const n=t.tank,s=t.roll;if(s===0)return e.push(["thud",null]),t.stage="done",!0;if(s===1||s===2||s===3){const r=[ap,cp,lp].slice(0,s);if(t.tick>0)return t.tick-=1,!1;const o=up(i,r[t.sub]);return nn(i,n.x,n.y,o,!0),e.push(["blast",o]),t.sub=t.sub+1,t.sub>=r.length?(t.stage="done",!0):(t.tick=Eb,!1)}if(s===4){if(!t.spawned){t.spawned=!0;const r=i.rng.pick(6)+5;return i.add_throe("ball",n.x,n.y,n.color??15,r*hp),!1}return i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0)}if(s===5)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("spiral",n.x,n.y,n.color??15),!1);if(s===6)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("sparkle",n.x,n.y,n.color??15),!1);if(s===7)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("fireworks",n.x,n.y,n.color??15),!1);if(s===8)return t.spawned?t.tick>0?(t.tick-=1,n.y=Math.min(i.h-1,n.y+1),!1):i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,t.tick=bb+i.rng.pick(Tb),i.add_throe("sink",n.x,n.y,n.color??15),e.push(["sink",null]),!1);if(s===9)return t.spawned?i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0):(t.spawned=!0,i.add_throe("ring",n.x,n.y,n.color??15),!1);if(s===10){if(!t.spawned){if(t.spawned=!0,typeof n.has_ammo=="function"&&n.has_ammo(n.selected_weapon??0))i.add_throe("debris",n.x,n.y,n.color??15),e.push(["cookoff",null]);else return t.stage="done",!0;return!1}return i.throe_fx!==void 0&&i.throe_fx.length>0?!1:(t.stage="done",!0)}return t.stage="done",!0}function Bb(i,t,e){if(e===1||e===2||e===3)for(const n of[ap,cp,lp].slice(0,e))nn(i,t.x,t.y,up(i,n),!0);else e===4?i.add_throe("ball",t.x,t.y,t.color??15,(i.rng.pick(6)+5)*hp):e===5?i.add_throe("spiral",t.x,t.y,t.color??15):e===6?i.add_throe("sparkle",t.x,t.y,t.color??15):e===7?i.add_throe("fireworks",t.x,t.y,t.color??15):e===8?i.add_throe("sink",t.x,t.y,t.color??15):e===9?i.add_throe("ring",t.x,t.y,t.color??15):e===10&&typeof t.has_ammo=="function"&&t.has_ammo(t.selected_weapon??0)&&i.add_throe("debris",t.x,t.y,t.color??15)}class kb{constructor(t,e,n){v(this,"attack");v(this,"die");v(this,"talking");v(this,"probability");v(this,"delay");this.attack=t,this.die=e,this.talking=String(n.TALKING_TANKS).toUpperCase(),this.probability=No(n.TALK_PROBABILITY),this.delay=No(n.TALK_DELAY)}}function No(i){const t=typeof i=="string"?parseInt(i,10):i;return Math.trunc(t)}function nf(i){const e=i.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`);return e.length>0&&e[e.length-1]===""&&e.pop(),e}function sf(i,t){const e=t(i);if(e===null)return"";let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}function Hb(i,t,e,n){const s=nf(sf(i,n)),r=nf(sf(t,n));return new kb(s,r,e)}function rf(i,t,e){const n=e.joinPath(i,t);if(e.pathExists(n))return n;const s=e.listDir(i);if(s!==null){const r=t.toLowerCase();for(const o of s)if(o.toLowerCase()===r)return e.joinPath(i,o)}return n}function zb(i,t,e){const n=rf(t,i.ATTACK_COMMENTS,e),s=rf(t,i.DIE_COMMENTS,e);return Hb(n,s,i,e.readFile)}function mp(i,t){const e=t.talking;return e==="ALL"?!0:e==="COMPUTERS"?i.ai_class!==fi:!1}function _p(i,t){return i.length===0?null:i[t.pick(i.length)]}function Gb(i,t,e=Zo){return!mp(i,t)||e.pick(100)>=t.probability?null:_p(t.attack,e)}function Vb(i,t,e=Zo){return!mp(i,t)||e.pick(100)>=t.probability?null:_p(t.die,e)}function Ya(i,t,e,n=null){if(!e){i.speech=null;return}gp(i,"_speech_frame")||(i._speech_frame=0);let s;if(n!=null&&Xb(n,"delay"))s=n.delay;else if(n!=null)s=No(Eo(n,"TALK_DELAY",50));else{const r=Eo(i,"cfg",null);s=No(Eo(r,"TALK_DELAY",50))}s=Math.max(1,Math.trunc(s)),i.speech={tank:t,text:e,until_frame:i._speech_frame+s}}function Wb(i,t){gp(i,"_speech_frame")||(i._speech_frame=0),i._speech_frame=i._speech_frame+t/Rd;const e=Eo(i,"speech",null);e!==null&&i._speech_frame>=e.until_frame&&(i.speech=null)}function gp(i,t){return Object.prototype.hasOwnProperty.call(i,t)}function Xb(i,t){return i!=null&&t in i}function Eo(i,t,e){return i!=null&&t in i?i[t]:e}function wn(i){if(typeof i=="string")return qb(i);const t=i[0]|0,e=i[1]|0,n=i[2]|0,s=i.length>=4?i[3]|0:255;return[t&255,e&255,n&255,s&255]}function qn(i){return i[3]===255?`rgb(${i[0]},${i[1]},${i[2]})`:`rgba(${i[0]},${i[1]},${i[2]},${i[3]/255})`}let Ka=null;const of=new Map;function qb(i){const t=of.get(i);if(t)return t;if(Ka===null){const r=document.createElement("canvas");r.width=1,r.height=1,Ka={ctx:r.getContext("2d",{willReadFrequently:!0}),data:new Uint8ClampedArray(4)}}const{ctx:e}=Ka;e.clearRect(0,0,1,1),e.fillStyle="#000",e.fillStyle=i,e.fillRect(0,0,1,1);const n=e.getImageData(0,0,1,1).data,s=[n[0],n[1],n[2],n[3]];return of.set(i,s),s}class re{constructor(t,e,n,s){v(this,"x");v(this,"y");v(this,"w");v(this,"h");if(t instanceof re)this.x=t.x,this.y=t.y,this.w=t.w,this.h=t.h;else if(Array.isArray(t)&&Array.isArray(e))this.x=t[0],this.y=t[1],this.w=e[0],this.h=e[1];else if(Array.isArray(t)){const r=t;this.x=r[0],this.y=r[1],this.w=r[2],this.h=r[3]}else this.x=t,this.y=e??0,this.w=n??0,this.h=s??0}get width(){return this.w}set width(t){this.w=t}get height(){return this.h}set height(t){this.h=t}get size(){return[this.w,this.h]}set size(t){this.w=t[0],this.h=t[1]}get left(){return this.x}set left(t){this.x=t}get top(){return this.y}set top(t){this.y=t}get right(){return this.x+this.w}set right(t){this.x=t-this.w}get bottom(){return this.y+this.h}set bottom(t){this.y=t-this.h}get centerx(){return this.x+(this.w>>1)}set centerx(t){this.x=t-(this.w>>1)}get centery(){return this.y+(this.h>>1)}set centery(t){this.y=t-(this.h>>1)}get topleft(){return[this.x,this.y]}set topleft(t){this.x=t[0],this.y=t[1]}get topright(){return[this.x+this.w,this.y]}set topright(t){this.x=t[0]-this.w,this.y=t[1]}get bottomleft(){return[this.x,this.y+this.h]}set bottomleft(t){this.x=t[0],this.y=t[1]-this.h}get bottomright(){return[this.x+this.w,this.y+this.h]}set bottomright(t){this.x=t[0]-this.w,this.y=t[1]-this.h}get center(){return[this.x+(this.w>>1),this.y+(this.h>>1)]}set center(t){this.x=t[0]-(this.w>>1),this.y=t[1]-(this.h>>1)}get midtop(){return[this.x+(this.w>>1),this.y]}get midbottom(){return[this.x+(this.w>>1),this.y+this.h]}get midleft(){return[this.x,this.y+(this.h>>1)]}get midright(){return[this.x+this.w,this.y+(this.h>>1)]}copy(){return new re(this.x,this.y,this.w,this.h)}collidepoint(t,e){const n=typeof t=="number"?t:t[0],s=typeof t=="number"?e:t[1];return n>=this.x&&n<this.x+this.w&&s>=this.y&&s<this.y+this.h}inflate(t,e){return new re(this.x-(t>>1),this.y-(e>>1),this.w+t,this.h+e)}inflate_ip(t,e){this.x-=t>>1,this.y-=e>>1,this.w+=t,this.h+=e}move(t,e){return new re(this.x+t,this.y+e,this.w,this.h)}move_ip(t,e){this.x+=t,this.y+=e}clip(t){const e=Math.max(this.x,t.x),n=Math.max(this.y,t.y),s=Math.min(this.x+this.w,t.x+t.w),r=Math.min(this.y+this.h,t.y+t.h),o=s-e,a=r-n;return o<=0||a<=0?new re(this.x,this.y,0,0):new re(e,n,o,a)}}class gr{constructor(t,e=0){v(this,"canvas");v(this,"ctx");v(this,"_w");v(this,"_h");v(this,"_colorkey",null);v(this,"_alpha",null);v(this,"_hasAlpha");this._w=Math.max(1,t[0]|0),this._h=Math.max(1,t[1]|0),this._hasAlpha=(e&bo)!==0,this.canvas=document.createElement("canvas"),this.canvas.width=this._w,this.canvas.height=this._h,this.ctx=this.canvas.getContext("2d",e&Jb?{willReadFrequently:!0}:void 0),this._hasAlpha||(this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this._w,this._h))}get_size(){return[this._w,this._h]}get_width(){return this._w}get_height(){return this._h}get_rect(t){const e=new re(0,0,this._w,this._h);return t&&(t.topleft&&(e.topleft=t.topleft),t.center&&(e.center=t.center)),e}fill(t,e){const n=wn(t);let s=0,r=0,o=this._w,a=this._h;e&&(e instanceof re?(s=e.x,r=e.y,o=e.w,a=e.h):(s=e[0],r=e[1],o=e[2],a=e[3])),this._hasAlpha&&this.ctx.clearRect(s,r,o,a),this.ctx.fillStyle=qn(n),this.ctx.fillRect(s,r,o,a)}blit(t,e,n,s=0){const r=e instanceof re?e.x:e[0],o=e instanceof re?e.y:e[1];let a=0,c=0,l=t._w,h=t._h;n&&(a=n.x,c=n.y,l=n.w,h=n.h);const u=this.ctx.globalCompositeOperation,f=this.ctx.globalAlpha;s&Zb?this.ctx.globalCompositeOperation="lighter":t._alpha!==null&&(this.ctx.globalAlpha=t._alpha/255);const d=t._colorkey!==null?t._withColorkeyStripped():t.canvas;return this.ctx.drawImage(d,a,c,l,h,r,o,l,h),this.ctx.globalCompositeOperation=u,this.ctx.globalAlpha=f,new re(r,o,l,h)}_withColorkeyStripped(){const t=this._colorkey,e=document.createElement("canvas");e.width=this._w,e.height=this._h;const n=e.getContext("2d",{willReadFrequently:!0}),s=this.ctx.getImageData(0,0,this._w,this._h),r=s.data;for(let o=0;o<r.length;o+=4)r[o]===t[0]&&r[o+1]===t[1]&&r[o+2]===t[2]&&(r[o+3]=0);return n.putImageData(s,0,0),e}copy(){const t=new gr([this._w,this._h],this._hasAlpha?bo:0);return this._hasAlpha&&t.ctx.clearRect(0,0,this._w,this._h),t.ctx.drawImage(this.canvas,0,0),t._colorkey=this._colorkey,t._alpha=this._alpha,t}subsurface(t){const e=new gr([t.w,t.h],this._hasAlpha?bo:0);return this._hasAlpha&&e.ctx.clearRect(0,0,t.w,t.h),e.ctx.drawImage(this.canvas,t.x,t.y,t.w,t.h,0,0,t.w,t.h),e}set_at(t,e){const n=wn(e);this.ctx.fillStyle=qn(n),(this._hasAlpha||n[3]!==255)&&this.ctx.clearRect(t[0],t[1],1,1),this.ctx.fillRect(t[0],t[1],1,1)}get_at(t){const e=this.ctx.getImageData(t[0],t[1],1,1).data;return[e[0],e[1],e[2],e[3]]}set_colorkey(t){this._colorkey=t===null?null:wn(t)}get_colorkey(){return this._colorkey}set_alpha(t){this._alpha=t===null?null:t&255}get_alpha(){return this._alpha}convert_alpha(){const t=this.copy();return t._hasAlpha=!0,t}convert(){const t=this.copy();return t._hasAlpha=!1,t}get hasAlpha(){return this._hasAlpha}}const oe={rect(i,t,e,n=0){const s=e instanceof re?e.x:e[0],r=e instanceof re?e.y:e[1],o=e instanceof re?e.w:e[2],a=e instanceof re?e.h:e[3],c=wn(t),l=i.ctx;if(l.fillStyle=qn(c),n<=0)l.fillRect(s,r,o,a);else{const h=Math.min(n,Math.ceil(o/2)),u=Math.min(n,Math.ceil(a/2));l.fillRect(s,r,o,u),l.fillRect(s,r+a-u,o,u),l.fillRect(s,r,h,a),l.fillRect(s+o-h,r,h,a)}return new re(s,r,o,a)},circle(i,t,e,n,s=0){const r=e[0]|0,o=e[1]|0,a=Math.max(0,n|0),c=wn(t),l=i.ctx;return a===0?(i.set_at([r,o],c),new re(r,o,1,1)):(s<=0||s>=a?(l.fillStyle=qn(c),l.beginPath(),l.arc(r+.5,o+.5,a,0,Math.PI*2),l.fill()):(l.strokeStyle=qn(c),l.lineWidth=s,l.beginPath(),l.arc(r+.5,o+.5,a-s/2,0,Math.PI*2),l.stroke()),new re(r-a,o-a,a*2,a*2))},line(i,t,e,n,s=1){$a(i,wn(t),[e,n],!1,Math.max(1,s))},lines(i,t,e,n,s=1){$a(i,wn(t),n,e,Math.max(1,s))},polygon(i,t,e,n=0){const s=wn(t),r=i.ctx;if(e.length!==0)if(n<=0){r.fillStyle=qn(s),r.beginPath(),r.moveTo(e[0][0],e[0][1]);for(let o=1;o<e.length;o++)r.lineTo(e[o][0],e[o][1]);r.closePath(),r.fill()}else $a(i,s,e,!0,Math.max(1,n))}};function $a(i,t,e,n,s){if(e.length===0)return;const r=i.ctx;r.strokeStyle=qn(t),r.lineWidth=s,r.lineCap="butt",r.lineJoin="miter";const o=s%2===1?.5:0;r.beginPath(),r.moveTo(e[0][0]+o,e[0][1]+o);for(let a=1;a<e.length;a++)r.lineTo(e[a][0]+o,e[a][1]+o);n&&r.closePath(),r.stroke()}const Yb='"Consolas","Courier New",monospace';function Kb(i){const t=i.toLowerCase();return t.includes("mono")||t.includes("consolas")||t.includes("courier")?Yb:`"${i}",monospace`}const xe=class xe{constructor(t,e,n=!1){v(this,"size_px");v(this,"bold");v(this,"family");v(this,"cssFont");v(this,"_ascentDescent",null);this.size_px=e|0,this.bold=n,this.family=Kb(t),this.cssFont=`${n?"bold ":""}${this.size_px}px ${this.family}`}measureCtx(){if(xe._measureCtx===null){const e=document.createElement("canvas");xe._measureCtx=e.getContext("2d",{willReadFrequently:!0})}const t=xe._measureCtx;return t.font=this.cssFont,t.textBaseline="alphabetic",t}static _evict(t,e){for(;t.size>e;){const n=t.keys().next().value;t.delete(n)}}size(t){const e=this.cssFont+"\0"+t;let n=xe._sizeCache.get(e);if(n===void 0){const s=this.measureCtx();n=Math.ceil(s.measureText(t).width),xe._sizeCache.set(e,n),xe._evict(xe._sizeCache,xe._SIZE_CACHE_CAP)}return[n,this.get_height()]}get_height(){const t=this.metrics();return Math.ceil(t.ascent+t.descent)}metrics(){if(this._ascentDescent===null){const e=this.measureCtx().measureText("Mg"),n=e.fontBoundingBoxAscent??this.size_px*.8,s=e.fontBoundingBoxDescent??this.size_px*.2;this._ascentDescent={ascent:n,descent:s}}return this._ascentDescent}render(t,e,n,s){const r=wn(n),o=s==null?null:wn(s),a=this.cssFont+"\0"+t+"\0"+r.join(",")+"\0"+(o===null?"-":o.join(",")),c=xe._renderCache.get(a);if(c!==void 0)return c;const l=this.measureCtx(),h=Math.max(1,Math.ceil(l.measureText(t).width)),u=this.metrics(),f=Math.max(1,Math.ceil(u.ascent+u.descent)),d=new gr([h,f],o?0:bo),_=d.ctx;return o?(_.fillStyle=qn(o),_.fillRect(0,0,h,f)):_.clearRect(0,0,h,f),_.font=this.cssFont,_.textBaseline="alphabetic",_.fillStyle=qn(r),_.fillText(t,0,u.ascent),xe._renderCache.set(a,d),xe._evict(xe._renderCache,xe._RENDER_CACHE_CAP),d}};v(xe,"_measureCtx",null),v(xe,"_sizeCache",new Map),v(xe,"_renderCache",new Map),v(xe,"_SIZE_CACHE_CAP",4096),v(xe,"_RENDER_CACHE_CAP",1024);let Uo=xe;const $b={SysFont(i,t,e=!1){return new Uo(i,t,e)},init(){},Font:Uo},Zb=6,bo=65536,Jb=1073741824,Za=768,Qb=1024,xp=1025,jb=1026,tT=9,af=13,cf=27,eT=32,Jo=1<<30,nT=Jo|82,iT=Jo|81,Ja=Jo|79,lf=Jo|80;const sT=[200,200,200],Er=[170,170,170],Kn=[210,210,210],Mi=[110,110,110],Ee=[0,0,0],vp=[255,255,255],Oo=[40,252,252],Cn=[0,0,160],rT=[255,255,255],hf={};function Ve(i=15,t=!1){const e=`${i},${t}`;let n=hf[e];return n===void 0&&(n=$b.SysFont("consolas,couriernew,monospace",i,t),hf[e]=n),n}function Os(i,t,e,n,s=Ee,r=null){const o=r||Ve();let a=e,c=0;for(;c<t.length;){const l=t[c];if(l==="~"&&c+1<t.length){const h=t[c+1],u=o.render(h,!0,Oo);i.blit(u,[a,n]),oe.line(i,Oo,[a,n+u.get_height()-2],[a+u.get_width(),n+u.get_height()-2]),a+=u.get_width(),c+=2}else{const h=o.render(l,!0,s);i.blit(h,[a,n]),a+=h.get_width(),c+=1}}return a}function yp(i){const t=i.indexOf("~");return 0<=t&&t<i.length-1?i[t+1].toLowerCase():null}function Fo(i){return i.replace(/~/g,"")}class Ei{constructor(t,e,n,s,r="",o=null){v(this,"rect");v(this,"label");v(this,"action");v(this,"accel");v(this,"enabled");this.rect=new re(t,e,n,s),this.label=r,this.action=o,this.accel=yp(r),this.enabled=!0}hit(t){return this.enabled&&this.rect.collidepoint(t)}on_click(t,e){return this.action}on_accel(){return this.action}draw(t,e=!1){}}class oT extends Ei{constructor(e,n,s,r=Ee,o=15,a=!1,c=null){const l=Ve(o,a);super(e,n,l.size(Fo(s))[0]+4,l.get_height(),s,c);v(this,"color");v(this,"size");v(this,"bold");this.color=r,this.size=o,this.bold=a}get clickable(){return this.action!==null}hit(e){return this.clickable&&this.enabled&&this.rect.collidepoint(e)}on_click(e,n){return this.action}on_accel(){return this.action}draw(e,n=!1){const s=this.clickable&&n?Cn:this.color;Os(e,this.label,this.rect.x,this.rect.y,s,Ve(this.size,this.bold))}}class Mp extends Ei{constructor(e,n,s,r,o=null,a=!1){const c=Ve(15,!0),l=o||c.size(Fo(s))[0]+18;super(e,n,l,22,s,r);v(this,"default");this.default=a}draw(e,n=!1){const s=this.rect,r=n?Kn:Er;oe.rect(e,r,s),oe.line(e,Kn,s.topleft,s.topright),oe.line(e,Kn,s.topleft,s.bottomleft),oe.line(e,Mi,s.bottomleft,s.bottomright),oe.line(e,Mi,s.topright,s.bottomright),this.default&&oe.rect(e,[0,0,0],s,1);const o=Ve(15,!0).size(Fo(this.label))[0];Os(e,this.label,s.centerx-Math.trunc(o/2),s.y+3,Ee,Ve(15,!0))}}class aT extends Ei{constructor(e,n,s,r,o,a,c,l=1,h=String,u=260){super(e,n,u,20,s);v(this,"get");v(this,"set");v(this,"lo");v(this,"hi");v(this,"step");v(this,"fmt");this.get=r,this.set=o,this.lo=a,this.hi=c,this.step=l,this.fmt=h}_clamp(e){return Math.max(this.lo,Math.min(this.hi,e))}adjust(e){this.set(this._clamp(this.get()+e*this.step))}on_click(e,n){return n===3?this.adjust(-1):e[0]>this.rect.centerx?this.adjust(1):this.adjust(-1),null}on_accel(){return this.adjust(1),null}draw(e,n=!1){const s=this.rect;n&&oe.rect(e,Kn,s),Os(e,this.label,s.x,s.y,Ee);const r=`  < ${this.fmt(this.get())} >`;e.blit(Ve().render(r,!0,Cn),[s.x+150,s.y])}}class cT extends Ei{constructor(e,n,s,r,o,a,c=300){super(e,n,c,20,s);v(this,"options");v(this,"get_idx");v(this,"set_idx");this.options=r,this.get_idx=o,this.set_idx=a}cycle(e){this.set_idx(Oi(this.get_idx()+e,this.options.length))}on_click(e,n){return this.cycle(n===3?-1:1),null}on_accel(){return this.cycle(1),null}draw(e,n=!1){const s=this.rect;n&&oe.rect(e,Kn,s),Os(e,this.label,s.x,s.y,Ee);const r=this.options[Oi(this.get_idx(),this.options.length)];e.blit(Ve().render(`< ${r} >`,!0,Cn),[s.x+150,s.y])}}class lT extends Ei{constructor(e,n,s,r,o,a=34,c=null){super(e,n,a*s.length,a,"");v(this,"cells");v(this,"get_idx");v(this,"set_idx");v(this,"cell");v(this,"draw_cell");this.cells=s,this.get_idx=r,this.set_idx=o,this.cell=a,this.draw_cell=c}on_click(e,n){const s=Math.floor((e[0]-this.rect.x)/this.cell);return 0<=s&&s<this.cells.length&&this.set_idx(s),null}draw(e,n=!1){for(let s=0;s<this.cells.length;s++){const r=this.cells[s],o=this.rect.x+s*this.cell,a=new re(o,this.rect.y,this.cell-2,this.cell-2);oe.rect(e,Er,a),oe.rect(e,s===this.get_idx()?Cn:Mi,a,s===this.get_idx()?2:1),this.draw_cell&&this.draw_cell(e,a,s,r)}}}class Qa extends Ei{constructor(e,n,s,r,o,a,c=240,l=String){super(e,n,c,30,s);v(this,"values");v(this,"get");v(this,"set");v(this,"fmt");v(this,"track_x");v(this,"track_w");v(this,"dragging");this.values=Array.from(r),this.get=o,this.set=a,this.fmt=l,this.track_x=e+8,this.track_w=c-16,this.dragging=!1}_cur_index(){const e=this.get();let n=0,s=Math.abs(this.values[0]-e);for(let r=1;r<this.values.length;r++){const o=Math.abs(this.values[r]-e);o<s&&(s=o,n=r)}return n}_set_index(e){e=Math.max(0,Math.min(this.values.length-1,e)),this.set(this.values[e])}_x_to_index(e){if(this.track_w<=0||this.values.length<=1)return 0;const n=(e-this.track_x)/this.track_w;return $o(n*(this.values.length-1))}_thumb_x(){return this.values.length<=1?this.track_x:this.track_x+Math.trunc(this.track_w*this._cur_index()/(this.values.length-1))}on_click(e,n){if(n===3)return this._set_index(this._cur_index()-1),null;const s=this._thumb_x();return Math.abs(e[0]-s)<=6?this.dragging=!0:this._set_index(this._x_to_index(e[0])),null}on_drag(e){this.dragging&&this._set_index(this._x_to_index(e[0]))}on_release(){this.dragging=!1}on_accel(){return this._set_index(this._cur_index()+1),null}draw(e,n=!1){const s=this.rect;Os(e,this.label,s.x,s.y,n?vp:Ee);const r=s.y+20;oe.line(e,Mi,[this.track_x,r],[this.track_x+this.track_w,r],2);const o=this.values.length;if(o>1)for(let h=0;h<o;h++){const u=this.track_x+Math.trunc(this.track_w*h/(o-1));oe.line(e,Mi,[u,r-2],[u,r+2],1)}const a=this._thumb_x(),c=new re(a-4,r-6,8,12);oe.rect(e,n?Kn:Er,c),oe.rect(e,Ee,c,1);const l=this.fmt(this.get());e.blit(Ve().render(String(l),!0,Cn),[this.track_x+this.track_w+8,s.y])}}class uf extends Ei{constructor(e,n,s,r,o,a=1,c=150,l=20){const h=Math.floor((s.length+a-1)/a);super(e,n,c*a,l*h,"");v(this,"labels");v(this,"get_idx");v(this,"set_idx");v(this,"cols");v(this,"cell_w");v(this,"cell_h");v(this,"cell_accels");this.labels=Array.from(s),this.get_idx=r,this.set_idx=o,this.cols=a,this.cell_w=c,this.cell_h=l,this.cell_accels=this.labels.map(u=>yp(u))}_cell_rect(e){const n=e%this.cols,s=Math.floor(e/this.cols);return new re(this.rect.x+n*this.cell_w,this.rect.y+s*this.cell_h,this.cell_w,this.cell_h)}hit(e){return this.enabled&&this.rect.collidepoint(e)}on_click(e,n){for(let s=0;s<this.labels.length;s++)if(this._cell_rect(s).collidepoint(e)){this.set_idx(s);break}return null}accel_hit(e){for(let n=0;n<this.cell_accels.length;n++)if(this.cell_accels[n]===e)return this.set_idx(n),!0;return!1}draw(e,n=!1){for(let s=0;s<this.labels.length;s++){const r=this.labels[s],o=this._cell_rect(s),a=s===this.get_idx(),c=o.y+Math.floor(o.h/2);oe.circle(e,rT,[o.x+7,c],6),oe.circle(e,Ee,[o.x+7,c],6,1),a&&oe.circle(e,Ee,[o.x+7,c],3),Os(e,r,o.x+18,o.y+1,Ee)}}}class hT extends Ei{constructor(e,n,s,r,o="",a=!1,c=null,l=null){super(e,n,s,r,o);v(this,"title");v(this,"capture");v(this,"get_key");v(this,"set_key");v(this,"arming");this.title=o,this.capture=a,this.get_key=c,this.set_key=l,this.arming=!1}hit(e){return this.capture&&this.enabled&&this.rect.collidepoint(e)}on_click(e,n){return this.capture?(this.arming=!0,"capture_key"):null}take_key(e){this.set_key&&this.set_key(e.unicode?e.unicode.toUpperCase():e.key),this.arming=!1}draw(e,n=!1){const s=this.rect;if(oe.rect(e,this.arming?Cn:Mi,s,1),this.title){const r=Ve(13).render(Fo(this.title),!0,Ee);e.fill(Er,[s.x+6,s.y-7,r.get_width()+4,12]),e.blit(r,[s.x+8,s.y-7])}if(this.capture){let r=this.get_key?String(this.get_key()):"";this.arming&&(r="press a key...");const o=Ve(13).render(r,!0,Cn);e.blit(o,[s.centerx-Math.floor(o.get_width()/2),s.centery-6])}}}class uT{constructor(t,e,n,s,r="",o=!1,a="back"){v(this,"rect");v(this,"title");v(this,"widgets");v(this,"focus");v(this,"text_widget");v(this,"no_cancel");v(this,"cancel_action");v(this,"default_widget");v(this,"capture_widget");this.rect=new re(t,e,n,s),this.title=r,this.widgets=[],this.focus=0,this.text_widget=null,this.no_cancel=o,this.cancel_action=a,this.default_widget=null,this.capture_widget=null}add(t){return this.widgets.push(t),t instanceof Mp&&t.default&&(this.default_widget=t),t}_focusables(){const t=[];for(const e of this.widgets)e instanceof oT&&!e.clickable||e instanceof hT&&!e.capture||t.push(e);return t}_resolve(t,e){return t==="focus_text"?(this.text_widget=e,null):t==="capture_key"?(this.capture_widget=e,null):t}handle(t){if(this.text_widget&&this.text_widget.editing&&t.type===Za)return this.text_widget.on_text_key(t),this.text_widget.editing||(this.text_widget=null),null;if(this.capture_widget&&t.type===Za)return t.key===cf?this.capture_widget.arming=!1:this.capture_widget.take_key(t),this.capture_widget=null,null;if(t.type===xp){for(const e of this.widgets)if(e.hit(t.pos)){const s=this._focusables().indexOf(e);return s>=0&&(this.focus=s),this._resolve(e.on_click(t.pos,t.button),e)}return!this.rect.collidepoint(t.pos)&&!this.no_cancel?this.cancel_action:null}if(t.type===Qb){for(const e of this.widgets)e instanceof Qa&&e.dragging&&e.on_drag(t.pos);return null}if(t.type===jb){for(const e of this.widgets)e instanceof Qa&&e.on_release();return null}if(t.type===Za){if(t.key===cf)return this.no_cancel?null:this.cancel_action;if(t.key===iT||t.key===tT)return this.focus=Oi(this.focus+1,Math.max(1,this._focusables().length)),null;if(t.key===nT)return this.focus=Oi(this.focus-1,Math.max(1,this._focusables().length)),null;if(t.key===af&&this.default_widget!==null)return this._resolve(this.default_widget.on_accel(),this.default_widget);if(t.key===af||t.key===eT||t.key===lf||t.key===Ja){const n=this._focusables();if(n.length){const s=n[Oi(this.focus,n.length)];if(t.key===lf||t.key===Ja){const r=t.key===Ja?1:-1;if(s instanceof aT)return s.adjust(r),null;if(s instanceof cT)return s.cycle(r),null;if(s instanceof Qa)return s._set_index(s._cur_index()+r),null;if(s instanceof uf)return s.set_idx(Oi(s.get_idx()+r,s.labels.length)),null}return this._resolve(s.on_accel(),s)}return null}const e=t.unicode?t.unicode.toLowerCase():null;if(e)for(const n of this.widgets){if(n instanceof uf&&n.enabled&&n.accel_hit(e))return null;if(n.accel===e&&n.enabled)return this._resolve(n.on_accel(),n)}}return null}draw(t,e=!0){if(e){const s=new gr(t.get_size());s.set_alpha(140),s.fill([0,0,0]),t.blit(s,[0,0])}if(oe.rect(t,Er,this.rect),oe.rect(t,Kn,this.rect,1),oe.line(t,Mi,this.rect.bottomleft,this.rect.bottomright,2),oe.line(t,Mi,this.rect.topright,this.rect.bottomright,2),this.title){const s=new re(this.rect.x,this.rect.y,this.rect.w,20);oe.rect(t,Cn,s);const r=Ve(15,!0).render(this.title,!0,vp);t.blit(r,[s.centerx-Math.floor(r.get_width()/2),s.y+2])}const n=this._focusables();for(const s of this.widgets){const r=n.length>0&&s===n[Oi(this.focus,n.length)];s.draw(t,r)}}}function fT(i){i.get_size()}function Oi(i,t){return(i%t+t)%t}const ff={BASIC:0,STANDARD:1,GREEDY:2},df={NONE:0,STANDARD:1,CORPORATE:2,VICIOUS:3},pf={SEQUENTIAL:0,SYNCHRONOUS:1,SIMULTANEOUS:2},mf={RANDOM:0,"LOSERS-FIRST":1,"WINNERS-FIRST":2,"ROUND-ROBIN":3},_f={NONE:0,WRAP:1,PADDED:2,RUBBER:3,SPRING:4,CONCRETE:5,RANDOM:6,ERRATIC:7},gf={NORMAL:0,MEDIUM:1,LARGE:2},Gl=[{name:"MAXPLAYERS",type:"int"},{name:"MAXROUNDS",type:"int"},{name:"ARMS",type:"int"},{name:"PLAY_MODE",type:"str"},{name:"PLAY_ORDER",type:"str"},{name:"TEAM_MODE",type:"str"},{name:"HOSTILE_ENVIRONMENT",type:"str"},{name:"TUNNELLING",type:"str"},{name:"USELESS_ITEMS",type:"str"},{name:"EXPLOSION_SCALE",type:"str"},{name:"INITIAL_CASH",type:"int"},{name:"INTEREST_RATE",type:"float"},{name:"COMPUTERS_BUY",type:"str"},{name:"FREE_MARKET",type:"str"},{name:"SCORING",type:"str"},{name:"GRAVITY",type:"float"},{name:"AIR_VISCOSITY",type:"int"},{name:"MAX_WIND",type:"int"},{name:"CHANGING_WIND",type:"str"},{name:"ELASTIC",type:"str"},{name:"FALLING_TANKS",type:"str"},{name:"EDGES_EXTEND",type:"int"},{name:"DAMAGE_TANKS_ON_IMPACT",type:"str"},{name:"LAND1",type:"int"},{name:"LAND2",type:"int"},{name:"FLATLAND",type:"str"},{name:"RANDOM_LAND",type:"str"},{name:"MTN_PERCENT",type:"float"},{name:"SUSPEND_DIRT",type:"int"},{name:"EXTRA_DIRT",type:"str"},{name:"SKY",type:"str"},{name:"GRAPHICS_MODE",type:"str"},{name:"LOWMEM",type:"str"},{name:"FIRE_DELAY",type:"int"},{name:"FALLING_DELAY",type:"int"},{name:"STATUS_BAR",type:"str"},{name:"ICON_BAR",type:"str"},{name:"BOMB_ICON",type:"str"},{name:"TRACE",type:"str"},{name:"FAST_COMPUTERS",type:"str"},{name:"BIOS_KEYBOARD",type:"str"},{name:"POINTER",type:"str"},{name:"MOUSE_RATE",type:"float"},{name:"SOUND",type:"str"},{name:"FLY_SOUND",type:"str"},{name:"TALKING_TANKS",type:"str"},{name:"TALK_PROBABILITY",type:"int"},{name:"TALK_DELAY",type:"int"},{name:"ATTACK_COMMENTS",type:"str"},{name:"DIE_COMMENTS",type:"str"}],sl={};for(const i of Gl)sl[i.name]=i.type;function ui(i){return i.toUpperCase()}const xf=new Set(["	",`
`,"\v","\f","\r","","","",""," ",""," "," "," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　"]);function Vl(i){let t=0,e=i.length;for(;t<e&&xf.has(i[t]);)t++;for(;e>t&&xf.has(i[e-1]);)e--;return i.slice(t,e)}function rl(i){const t=Vl(i);if(t.length===0)return null;let e=0,n=1;(t[e]==="+"||t[e]==="-")&&(t[e]==="-"&&(n=-1),e++);const s=t.slice(e);if(s.length===0||!/^[0-9]/.test(s)||!/[0-9]$/.test(s))return null;let r=!1,o="";for(const c of s){if(c==="_"){if(r)return null;r=!0;continue}if(c<"0"||c>"9")return null;r=!1,o+=c}const a=Number(o);return a===0?0:n*a}function dT(i){const t=Vl(i);if(t.length===0)return null;let e=0,n=1;(t[e]==="+"||t[e]==="-")&&(t[e]==="-"&&(n=-1),e++);const s=t.slice(e);if(s.length===0)return null;const r=s.toLowerCase();if(r==="inf"||r==="infinity")return n*(1/0);if(r==="nan")return n*NaN;if(!/^[0-9._eE+\-]+$/.test(s))return null;for(let l=0;l<s.length;l++)if(s[l]==="_"){const h=s[l-1],u=s[l+1];if(h===void 0||u===void 0||h<"0"||h>"9"||u<"0"||u>"9")return null}const o=s.replace(/_/g,"");if(!/^(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:[eE][+\-]?[0-9]+)?$/.test(o))return null;const c=Number(o);return Number.isNaN(c)?null:n*c}function pT(i,t){if(i==="int"){const e=rl(t);return e===null?0:e}if(i==="float"){const e=dT(t);return e===null?0:e}return t}function mT(i,t){const e=i.indexOf(t);return e<0?[i,"",""]:[i.slice(0,e),t,i.slice(e+t.length)]}function ja(i){return Vl(i)}class Wl{constructor(){v(this,"MAXPLAYERS",2);v(this,"MAXROUNDS",10);v(this,"ARMS",4);v(this,"PLAY_MODE","SEQUENTIAL");v(this,"PLAY_ORDER","RANDOM");v(this,"TEAM_MODE","NONE");v(this,"HOSTILE_ENVIRONMENT","ON");v(this,"TUNNELLING","OFF");v(this,"USELESS_ITEMS","ON");v(this,"EXPLOSION_SCALE","NORMAL");v(this,"INITIAL_CASH",0);v(this,"INTEREST_RATE",.05);v(this,"COMPUTERS_BUY","ON");v(this,"FREE_MARKET","OFF");v(this,"SCORING","STANDARD");v(this,"GRAVITY",.2);v(this,"AIR_VISCOSITY",0);v(this,"MAX_WIND",200);v(this,"CHANGING_WIND","OFF");v(this,"ELASTIC","NONE");v(this,"FALLING_TANKS","ON");v(this,"EDGES_EXTEND",75);v(this,"DAMAGE_TANKS_ON_IMPACT","ON");v(this,"LAND1",20);v(this,"LAND2",20);v(this,"FLATLAND","ON");v(this,"RANDOM_LAND","ON");v(this,"MTN_PERCENT",20);v(this,"SUSPEND_DIRT",0);v(this,"EXTRA_DIRT","OFF");v(this,"SKY","RANDOM");v(this,"GRAPHICS_MODE","1024x768");v(this,"LOWMEM","OFF");v(this,"FIRE_DELAY",100);v(this,"FALLING_DELAY",10);v(this,"STATUS_BAR","OFF");v(this,"ICON_BAR","ON");v(this,"BOMB_ICON","BIG");v(this,"TRACE","OFF");v(this,"FAST_COMPUTERS","OFF");v(this,"BIOS_KEYBOARD","OFF");v(this,"POINTER","Mouse");v(this,"MOUSE_RATE",.5);v(this,"SOUND","ON");v(this,"FLY_SOUND","OFF");v(this,"TALKING_TANKS","OFF");v(this,"TALK_PROBABILITY",100);v(this,"TALK_DELAY",50);v(this,"ATTACK_COMMENTS","talk1.cfg");v(this,"DIE_COMMENTS","talk2.cfg");v(this,"wind",0);v(this,"live_elastic");this.live_elastic=this.elastic}get(t){return this[t]}set(t,e){this[t]=e}get scoring(){const t=ui(this.SCORING);return t in ff?ff[t]:1}get team_mode(){const t=ui(this.TEAM_MODE);return t in df?df[t]:0}get play_mode(){const t=ui(this.PLAY_MODE);return t in pf?pf[t]:0}get play_order(){const t=ui(this.PLAY_ORDER);return t in mf?mf[t]:0}get elastic(){const t=ui(this.ELASTIC);return t in _f?_f[t]:0}get explosion_scale(){const t=ui(this.EXPLOSION_SCALE);return t in gf?gf[t]:0}is_on(t){return ui(_T(this.get(t)))==="ON"}get resolution(){const t=this.GRAPHICS_MODE;if(typeof t!="string")return[1024,768];const e=t.toLowerCase().split("x");if(e.length!==2)return[1024,768];const n=rl(e[0]),s=rl(e[1]);return n===null||s===null?[1024,768]:[n,s]}get viscosity_mult(){return 1-this.AIR_VISCOSITY/TM}static load(t){const e=new Wl;if(t==null)return e;const n=t.split(`
`);for(let s of n){if(s=ja(s),s.length===0||s.startsWith(";")||!s.includes("="))continue;const[r,,o]=mT(s,"="),a=ui(ja(r)),c=ja(o);a in sl&&e.set(a,pT(sl[a],c))}return e}save(){let t=`; Configuration File for Scorched Earth Version 1.5-py
`;for(const e of Gl){const n=gT(e.type,this.get(e.name));t+=`${e.name}=${n}
`}return t}}function _T(i){return typeof i=="string"?i:typeof i=="number"?Sp(i,void 0):String(i)}function Sp(i,t){return t===!1?vf(i):t===!0?yf(i):Number.isInteger(i)?vf(i):yf(i)}function vf(i){const t=Math.trunc(i);return Object.is(t,-0)?"0":String(t)}function yf(i){if(Number.isNaN(i))return"nan";if(i===1/0)return"inf";if(i===-1/0)return"-inf";if(i===0)return Object.is(i,-0)?"-0.0":"0.0";const t=i<0||Object.is(i,-0),s=Math.abs(i).toExponential().match(/^(\d)(?:\.(\d+))?e([+\-]\d+)$/),r=s[1],o=s[2]||"",a=r+o,c=parseInt(s[3],10);let l;if(c<-4||c>=16){let h=r;o.length>0&&(h+="."+o);const u=c<0?"-":"+";let f=Math.abs(c).toString();f.length<2&&(f="0"+f),l=`${h}e${u}${f}`}else if(c>=0){const h=c+1;a.length<=h?l=a+"0".repeat(h-a.length)+".0":l=a.slice(0,h)+"."+a.slice(h)}else l="0."+"0".repeat(-c-1)+a;return(t?"-":"")+l}function gT(i,t){return typeof t=="boolean"?t?"on":"off":typeof t=="number"?Sp(t,i==="float"):t}const xT={};for(const i of Gl)xT[i.name]=i.type;new TextEncoder;new TextDecoder("utf-8",{fatal:!0});class vT{constructor(){v(this,"opaque",!0)}handle(t){return null}update(t){return null}draw(t){}}function tc(i,t,e,n,s=Ee,r=null){const o=r||Ve();let a=e,c=0;for(;c<t.length;){const l=t[c];if(l==="~"&&c+1<t.length){const h=t[c+1],u=o.render(h,!0,Oo);i.blit(u,[a,n]),oe.line(i,Oo,[a,n+u.get_height()-2],[a+u.get_width(),n+u.get_height()-2]),a+=u.get_width(),c+=2}else{const h=o.render(l,!0,s);i.blit(h,[a,n]),a+=h.get_width(),c+=1}}return a}function yT(i){const t=[];for(let e=0;e<yi;e++)_e[e].offensive&&i.has_ammo(e)&&t.push(e);return t}const Ep=[[!0,!1],[!0,!1],[!1,!1],[!0,!1],[!0,!1],[!1,!1],[!0,!0]],bp=Ep.length,MT=bp-1;function ST(i){return 0<=i&&i<bp?Ep[i][0]:!0}const Bo=class Bo extends vT{constructor(e,n,s,r){super();v(this,"opaque",!0);v(this,"state");v(this,"tank");v(this,"w");v(this,"h");v(this,"weapon_slots");v(this,"guidance_slots");v(this,"panel");v(this,"_wrows",[]);v(this,"_grows",[]);v(this,"_array_slots",[]);v(this,"_array_y");v(this,"weapon_array",null);v(this,"_wcol_x",0);v(this,"_gcol_x",0);v(this,"_list_top",0);v(this,"_guidance_bottom",0);this.state=e,this.tank=n,this.w=s,this.h=r,this.weapon_slots=yT(n),this.guidance_slots=Bo._GUIDANCE_SLOTS.filter(o=>n.inventory[o]>0),this.panel=new uT(20,16,s-40,r-32,"Inventory",!1,"pop"),this._wrows=[],this._grows=[],this._build_chrome()}_count_str(e){return e===pn?"unlimited":String(this.tank.inventory[e])}_select_weapon(e){this.tank.selected_weapon=e}_select_guidance(e){this.tank.selected_guidance=e}_weapon_array_index(){return this.weapon_slots.indexOf(this.tank.selected_weapon)}_build_chrome(){const e=this.panel;e.add(new Mp(e.rect.right-80,e.rect.bottom-30,"~Done","pop",null,!0)),this._array_slots=this.weapon_slots.slice(0,8);const n=e.rect.x+16,s=e.rect.bottom-30-40;this._array_y=s,this._array_slots.length?this.weapon_array=e.add(new lT(n,s,Array.from({length:this._array_slots.length},(r,o)=>o),()=>this._weapon_array_index(),r=>this._array_click(r),36,(r,o,a,c)=>this._draw_array_cell(r,o,a,c))):this.weapon_array=null}_array_click(e){0<=e&&e<this._array_slots.length&&this._select_weapon(this._array_slots[e])}_draw_array_cell(e,n,s,r){this._array_slots[s]}_layout_lists(){const e=this.panel,n=Math.trunc((e.rect.w-48)/2),s=e.rect.x+16,r=e.rect.x+24+n,o=e.rect.y+48;this._wcol_x=s,this._gcol_x=r,this._list_top=o,this._wrows=[];for(let c=0;c<this.weapon_slots.length;c++)this._wrows.push([this.weapon_slots[c],o+c*18]);this._grows=[];let a=o;for(const c of this.guidance_slots)this._grows.push([c,a]),a+=18;this._grows.push([null,a]),this._guidance_bottom=a+18}handle(e){if(e.type===xp&&e.button===1&&e.pos){this._layout_lists();for(const[n,s]of this._wrows)if(new re(this._wcol_x-2,s-1,this._gcol_x-8-this._wcol_x,17).collidepoint(e.pos))return this._select_weapon(n),null;for(const[n,s]of this._grows)if(new re(this._gcol_x-2,s-1,this.panel.rect.right-16-this._gcol_x,17).collidepoint(e.pos))return this._select_guidance(n),null}return this.panel.handle(e)}draw(e){e.fill(sT),this.panel.draw(e,!1),this._layout_lists();const n=this.panel,s=this.tank,r=Ve(14);tc(e,"Weapons",this._wcol_x,this._list_top-18,Cn),tc(e,"Guidance",this._gcol_x,this._list_top-18,Cn);for(const[l,h]of this._wrows){l===s.selected_weapon&&oe.rect(e,Kn,[this._wcol_x-2,h-1,this._gcol_x-8-this._wcol_x,17]);const f=_e[l];e.blit(r.render(f.name,!0,Ee),[this._wcol_x,h]);const d=this._count_str(l),_=r.size(d)[0];e.blit(r.render(d,!0,Ee),[this._gcol_x-12-_,h])}for(const[l,h]of this._grows){s.selected_guidance===l&&oe.rect(e,Kn,[this._gcol_x-2,h-1,n.rect.right-16-this._gcol_x,17]);let f,d;if(l===null?(f="None",d=""):(f=_e[l].name,d=String(s.inventory[l])),e.blit(r.render(f,!0,Ee),[this._gcol_x,h]),d){const _=r.size(d)[0];e.blit(r.render(d,!0,Ee),[n.rect.right-24-_,h])}}let o=Math.max(this._guidance_bottom,this._array_y-110)+8,a=0;for(const l of Io)a+=s.inventory[l];const c=[["Shields",a],["Parachutes",s.inventory[Bi]],["Batteries",s.inventory[Tn]],["Triggers",s.inventory[cS]],["Fuel",s.inventory[zd]]];for(const[l,h]of c)e.blit(r.render(`${l}: ${h}`,!0,Ee),[this._gcol_x,o]),o+=18;this.weapon_array!==null&&tc(e,"Weapon array (click to select):",this._wcol_x,this._array_y-18,Ee),fT(e)}};v(Bo,"_GUIDANCE_SLOTS",(()=>{const e=[];for(let n=0;n<_e.length;n++)_e[n].category==="guidance"&&e.push(n);return e})());let Mf=Bo;const ET="place",lo="turn_start",js="aim",Sf="firing",ho="settle",Ef="round_end",bf="shop",bT="game_over",tr="sync_aim",Tf="sync_volley",er="sim_live",TT=.6,ec=Cd,wf=.25,wT=.4,AT=.5,RT=.6,Af=50,Rf=250,CT=2,Cf=5;function nc(i){const t=Math.floor(i),e=i-t;return e<.5?t+0:e>.5?t+1:t%2===0?t+0:t+1}function Nt(i){return Math.trunc(i)}function nr(i,t){return Math.floor(i/t)}function uo(i){return(i>0?1:0)-(i<0?1:0)}function Lf(i,t,e,n){const s=[],r=Math.abs(e-i),o=-Math.abs(n-t),a=i<e?1:-1,c=t<n?1:-1;let l=r+o,h=i,u=t,f=r-o+2;for(;f>=0&&(s.push([h,u]),!(h===e&&u===n));){const d=2*l;d>=o&&(l+=o,h+=a),d<=r&&(l+=r,u+=c),f-=1}return s}const se=class se{constructor(t,e,n){v(this,"cfg");v(this,"w");v(this,"h");v(this,"rng");v(this,"_pyrandom");v(this,"terrain");v(this,"economy");v(this,"tanks");v(this,"round_index");v(this,"current_shooter");v(this,"current_weapon");v(this,"projectiles");v(this,"explosions");v(this,"beams");v(this,"last_landing");v(this,"direct_hit_tank");v(this,"firing_order");v(this,"fire_index");v(this,"phase");v(this,"timer");v(this,"message");v(this,"ranking");v(this,"winner");v(this,"explosion_scale");v(this,"mtn_ranges");v(this,"awaiting_human");v(this,"active_bolts");v(this,"trace_marks");v(this,"plasma_rings");v(this,"death_fountains");v(this,"throe_fx");v(this,"death_queue");v(this,"flashes");v(this,"shield_fades");v(this,"_prev_shield_hp");v(this,"speech");v(this,"_speech_frame");v(this,"live_sky");v(this,"lut");v(this,"_lut_base");v(this,"_sky_step");v(this,"_pal_accum");v(this,"_digger_cycle");v(this,"_digger_step");v(this,"_explo_band_active");v(this,"_death_pulse");v(this,"firewalls");v(this,"_firewall_counter");v(this,"_firewall_band_active");v(this,"sfx");v(this,"talk");v(this,"_data_dir");v(this,"_settle_done",!1);v(this,"_sync_locks",{});v(this,"_sync_queue",[]);v(this,"_sim",{});v(this,"_sim_human",null);v(this,"_sim_keymap",{});this.cfg=t,this.w=e,this.h=n,this.rng=Zo,this._pyrandom=new rp,this.terrain=new jE(e,n),this.economy=new tb(t),this.tanks=[],this.round_index=0,this.current_shooter=null,this.current_weapon=null,this.projectiles=[],this.explosions=[],this.beams=[],this.last_landing=null,this.direct_hit_tank=null,this.firing_order=[],this.fire_index=0,this.phase=ET,this.timer=0,this.message="",this.ranking=[],this.winner=null,this.explosion_scale=this._scale_factor(),this.mtn_ranges=[],this.awaiting_human=!1,this._data_dir="",this.active_bolts=[],this.trace_marks=[],this.plasma_rings=[],this.death_fountains=[],this.throe_fx=[],this.death_queue=[],this.flashes=[],this.shield_fades={},this._prev_shield_hp={},this.speech=null,this._speech_frame=0,this.live_sky=(t.SKY||"PLAIN").toUpperCase(),this.lut=new dE;const s=mE();this.lut.set_band(ar,gs,s),this._lut_base=this.lut.copy_table();{const r=gs-ar+1;for(let o=0;o<r;o++){const a=s[o];this._lut_base[ar+o]=[a[0]&255,a[1]&255,a[2]&255]}}this._sky_step=0,this._pal_accum=0,this._digger_cycle=0,this._digger_step=0,this._explo_band_active=!1,this._death_pulse=null,this.firewalls=[],this._firewall_counter=0,this._firewall_band_active=!1,this.sfx=Yt,Yt.enabled=t.is_on("SOUND"),Yt.fly_mode=t.FLY_SOUND,Yt.field_height=n,this.talk=null}_scale_factor(){return{0:1,1:1.5,2:2}[this.cfg.explosion_scale]}_shuffle(t){for(let e=t.length-1;e>=1;e--){const n=this._pyrandom.pick(e+1),s=t[e];t[e]=t[n],t[n]=s}}add_player(t,e=0,n=0,s=0){const r=new lS(this.tanks.length,t,e,n,s);return r.mobile=ST(s),this.tanks.push(r),r}new_game(){this.round_index=0;const t=this.cfg.INITIAL_CASH;for(const e of this.tanks){e.cash=t,e.cash_ceiling=t,e.score=0,e.win_counter=0,e.hits_career={};for(let n=0;n<yi;n++)e.inventory[n]=0;e.inventory[pn]=99}if(this.cfg.mayhem)for(const e of this.tanks)for(let n=1;n<yi;n++)_e[n].enabled&&(e.inventory[n]=99);this.economy.refresh_availability(),this.talk===null&&(this.talk=zb(this.cfg,this._data_dir,{joinPath:(e,n)=>e?`${e}/${n}`:n,pathExists:()=>!1,listDir:()=>null,readFile:()=>null})),t>0?this.phase=bf:this.start_round()}start_round(){this.cfg.live_elastic=this._roll_elastic(),this._setup_wind(),this.terrain.generate(this.cfg,this.rng,this.mtn_ranges),this.live_sky=zl(this.cfg,this.rng),Mb(this),Yt.field_height=this.h,this._place_tanks(),this._reset_round_tanks(),this._build_firing_order(),this.projectiles.length=0,this.explosions.length=0,this.beams.length=0,this.plasma_rings.length=0,this.death_fountains.length=0,this.throe_fx.length=0,this.death_queue.length=0,this._death_pulse=null,this.flashes.length=0,this.trace_marks.length=0,this.shield_fades={},this._prev_shield_hp={},this.last_landing=null,this.direct_hit_tank=null,this.fire_index=0,this.timer=0;const t=this.cfg.play_mode;t===Cu?this._sync_begin_round():t===so?this._sim_begin_round():this.phase=lo}_roll_elastic(){const t=this.cfg.elastic;return t===6?this.rng.pick(6):t===7?this.rng.pick(6):t}_reroll_erratic(){this.cfg.elastic===7&&(this.cfg.live_elastic=this.rng.pick(6))}_setup_wind(){const t=this.cfg.MAX_WIND;if(t<=0){this.cfg.wind=0;return}let e=this.rng.pick(Math.max(1,nr(t,2)))-nr(t,4);this.rng.chance(20,100)&&(e*=2,this.rng.chance(40,100)&&(e*=2)),this.cfg.wind=e}_perturb_wind(){const t=this.cfg.MAX_WIND;if(t<=0){this.cfg.wind=0;return}this.cfg.wind=Math.max(-t,Math.min(t,this.cfg.wind+this.rng.pick(11)-5))}_place_tanks(){const t=this.tanks.length,e=30,n=this.w-2*e,s=[];for(let r=0;r<t;r++){const o=e+Nt(n*(r+.5)/t),a=this.rng.pick(20)-10;s.push(Math.max(e,Math.min(this.w-e,o+a)))}s.sort((r,o)=>r-o);for(let r=1;r<t;r++)s[r]-s[r-1]<15&&(s[r]=Math.min(this.w-e,s[r-1]+15));this._shuffle(s);for(let r=0;r<this.tanks.length;r++){const o=this.tanks[r],a=s[r];o.x=a,o.y=this.terrain.drop_to_footprint(a,o.half_width),this.terrain.level_under_tank(a,o.y,o.half_width),o.color=cE(o.player_index)}}_reset_round_tanks(){for(const t of this.tanks)t.alive=!0,t.health=Jc,t.shield_hp=0,t.shield_item=0,t.chute_up=0,t.chute_descent=null,t.fall_accum=0,t.hits_this_round={},t.ai_tries=0,t.angle=t.x<this.w/2?45:135,t.power=500,t.selected_guidance=null,t.selected_weapon=0,this._arm_defenses(t)}_announce_defense(t,e){const n=_e[e].name;Ya(this,t,`${t.name} activating ${n}`,this.talk)}_arm_defenses(t){if(this.cfg.play_mode===so&&t.inventory[or]<=0){t.shield_hp=0,t.shield_item=0;return}if(this.cfg.play_mode===so&&t.inventory[or]>0){const e=this._arm_best_shield(t,!1);e!==null&&(this._announce_defense(t,or),this._announce_defense(t,e));return}this._arm_best_shield(t,!1)}_arm_best_shield(t,e=!0){if(t.shield_hp>0)return null;for(let n=Io.length-1;n>=0;n--){const s=Io[n];if(t.inventory[s]>0){const r=_e[s].params;return t.shield_hp=r.hp??100,t.shield_item=s,t.shield_push=r.push??!1,t.shield_deflect=r.deflect??!1,t.shield_laserproof=r.laserproof??!1,t.shield_failproof=r.failproof??!1,t.inventory[s]-=1,this._start_shield_fade(t,1),Yt.play("shield_deploy",this.cfg.is_on("SOUND")),e&&this._announce_defense(t,s),s}}return null}_start_shield_fade(t,e){this.shield_fades[t.player_index]={dir:e,frame:0}}_tick_shield_fades(){for(const e of this.tanks)(this._prev_shield_hp[e.player_index]??0)>0&&e.shield_hp<=0&&this._start_shield_fade(e,-1),this._prev_shield_hp[e.player_index]=e.shield_hp;for(const e of Object.keys(this.shield_fades))this.shield_fades[Number(e)].frame+=1;const t={};for(const e of Object.keys(this.shield_fades)){const n=this.shield_fades[Number(e)];n.frame<=se.SHIELD_FADE_FRAMES&&(t[Number(e)]=n)}this.shield_fades=t}_build_firing_order(){let t=[];for(let n=0;n<this.tanks.length;n++)t.push(n);const e=this.cfg.play_order;if(e===KM)this._shuffle(t);else if(e===$M)t=this._stableSort(t,n=>this.tanks[n].score);else if(e===ZM)t=this._stableSortReverse(t,n=>this.tanks[n].score);else if(e===JM){const n=this.round_index%t.length;t=t.slice(n).concat(t.slice(0,n))}this.firing_order=t}_stableSort(t,e){return t.map((n,s)=>({v:n,idx:s,k:e(n)})).sort((n,s)=>n.k-s.k||n.idx-s.idx).map(n=>n.v)}_stableSortReverse(t,e){return t.map((n,s)=>({v:n,idx:s,k:e(n)})).sort((n,s)=>s.k-n.k||n.idx-s.idx).map(n=>n.v)}_alive_count(){let t=0;for(const e of this.tanks)e.alive&&(t+=1);return t}_win_check(){const t=this.cfg.team_mode;if(t===qo||t===QM)return this._alive_count()<2;const e=new Set;for(const n of this.tanks)n.alive&&e.add(n.team_id);return e.size<=1}_next_shooter(){const t=this.firing_order.length;for(let e=0;e<t;e++){const n=this.tanks[this.firing_order[this.fire_index]];if(this.fire_index=(this.fire_index+1)%t,n.alive)return n}return null}_resolve_unknown_class(t){t.ai_class===Fd&&t.reveal_type!==-2&&(t.reveal_type=-2,t.ai_class=this.rng.pick(7)+1)}_begin_turn(){if(this._win_check()){this._end_round();return}const t=this._next_shooter();if(t===null){this._end_round();return}if(this.current_shooter=t,Yt.play("turn",this.cfg.is_on("SOUND")),this._resolve_unknown_class(t),this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind(),this._arm_best_shield(t,!0),mb(this),t.ai_class===fi)this.awaiting_human=!0,this.phase=js;else{this.awaiting_human=!1;const[e,n,s]=za(this,t);t.angle=Nt(Math.max(0,Math.min(180,e))),t.power=Nt(Math.max(0,Math.min(1e3,n))),t.selected_weapon=s,this.phase=lo,this.timer=TT}}retreat(t=null){const e=t!==null?t:this.current_shooter;return e===null||!e.alive?!1:(this.current_shooter=null,e.alive=!1,e.health=0,Db(this,e),this.cfg.play_mode===jM&&(this.awaiting_human=!1,this.phase=ho),!0)}skip_turn(){const t=this.current_shooter;return t===null||!t.alive?!1:(this.current_shooter=null,this.awaiting_human=!1,this.phase=ho,!0)}fire(t=null){const e=t!==null?t:this.current_shooter;if(e===null)return[];if(t===null){if(this.phase===js&&this.cfg.play_mode===Cu)return this._sync_human_fire(e),[];if(this.phase===er&&this.cfg.play_mode===so)return this._sim_human_fire(e),[]}this._reroll_erratic(),this.direct_hit_tank=null,Yt.set_launch_y(e.y-4);let n=e.selected_weapon,s=_e[n];e.has_ammo(n)||(n=pn,s=_e[n]),e.consume(n),e.selected_weapon!==pn&&!e.has_ammo(e.selected_weapon)&&(e.selected_weapon=pn),this.awaiting_human=!1;const r=Gb(e,this.talk,this.rng);r!==null&&Ya(this,e,r,this.talk),Yt.play("fire",this.cfg.is_on("SOUND"));const o=s.behavior;if(o==="laser"){const l=ro(e,this.cfg,s);return l.state.energy=Math.max(200,e.power)*10,VE(this,l),this._enter_firing(),[l]}if(o==="plasma"){const l=ro(e,this.cfg,s);return us(this,l,e.x,e.y-4),this._enter_firing(),[l]}const a=this._triple_fan_angles(e,n),c=[];for(const l of a){const h=ro(e,this.cfg,s,null,l);e.contact_trigger&&(h.contact=!0),this.projectiles.push(h),c.push(h)}return e.contact_trigger&&(e.contact_trigger=!1),c.length>0&&Yt.start_fly(this.cfg.FLY_SOUND,this.cfg.is_on("SOUND")),this._enter_firing(),c}_triple_fan_angles(t,e){return t.tank_icon===MT&&(e===Lo||e===pn)?[t.angle-Cf,t.angle,t.angle+Cf]:[t.angle]}_enter_firing(){(this.phase===js||this.phase===lo)&&(this.phase=Sf)}_discharge_batteries(t,e=null){e===null&&(e=t.batteries);let n=0;for(let s=0;s<e;s++)t.inventory[Tn]>0&&(t.inventory[Tn]-=1,Yt.play("battery",this.cfg.is_on("SOUND")),n+=1);n>0&&this._announce_defense(t,Tn)}_battery_auto_trigger(t){let e=0;for(;t.alive&&t.health<91&&t.inventory[Tn]>0;)t.inventory[Tn]-=1,t.health=Math.min(Jc,t.health+10),e+=1;return e>0&&this._announce_defense(t,Tn),e}update(t){if(Wb(this,t),this._tick_palette(t),this._tick_sky(),this.phase===lo)this.timer-=t,this.timer<=0&&(this.current_shooter&&this.current_shooter.ai_class!==fi&&this.projectiles.length===0?this.fire():this._begin_turn());else if(this.phase!==js)if(this.phase===Sf){for(let e=0;e<ec;e++)this._step_flight();this._animate_effects(),this.projectiles.length===0&&this.explosions.length===0&&this.beams.length===0&&this.plasma_rings.length===0&&this.death_fountains.length===0&&this.throe_fx.length===0&&this.death_queue.length===0&&(Yt.stop_fly(),this.phase=ho,this._settle_done=!1)}else if(this.phase===ho){if(this.death_queue.length>0||this.death_fountains.length>0||this.throe_fx.length>0||this.explosions.length>0){this._animate_effects(),this._settle_done=!1;return}if(this._settle_done||(this._do_settle(),this._settle_done=!0),this._step_chute_anims(t),this.tanks.some(e=>e.chute_descent))return;this._settle_done=!1,this._win_check()?this.speech===null&&this._end_round():this._begin_turn()}else this.phase===tr?this._sync_collect(t):this.phase===Tf?this._sync_volley(t):this.phase===er&&this._sim_update(t)}_sync_begin_round(){this._sync_locks={},this._sync_queue=this.firing_order.filter(t=>this.tanks[t].alive),this.current_shooter=null,this.awaiting_human=!1,this.phase=tr,this.timer=0,this._sync_advance()}_sync_start_volley(){this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind(),this._sync_locks={},this._sync_queue=this.firing_order.filter(t=>this.tanks[t].alive),this.current_shooter=null,this.awaiting_human=!1,this.phase=tr,this.timer=0,this._sync_advance()}_sync_advance(){if(this._win_check()){this._end_round();return}for(;this._sync_queue.length>0&&(!this.tanks[this._sync_queue[0]].alive||this._sync_queue[0]in this._sync_locks);)this._sync_queue.shift();if(this._sync_queue.length===0){this._sync_launch_volley();return}const t=this._sync_queue[0],e=this.tanks[t];if(this.current_shooter=e,e.ai_class===fi)this.awaiting_human=!0,this.phase=js;else{this.awaiting_human=!1;const[n,s,r]=za(this,e);this._sync_record_lock(e,n,s,r),this.phase=tr,this.timer=wf}}_sync_record_lock(t,e,n,s){t.angle=Nt(Math.max(0,Math.min(180,e))),t.power=Nt(Math.max(0,Math.min(1e3,n))),t.selected_weapon=s,this._sync_locks[t.player_index]=[t.angle,t.power,s],this._sync_queue.length>0&&this._sync_queue[0]===t.player_index&&this._sync_queue.shift()}_sync_human_fire(t){return this._sync_record_lock(t,t.angle,t.power,t.selected_weapon),this.awaiting_human=!1,this.current_shooter=null,this.phase=tr,this.timer=wf,!0}_sync_collect(t){this.current_shooter!==null&&this.current_shooter.ai_class===fi||this.timer>0&&(this.timer-=t,this.timer>0)||this._sync_advance()}_sync_launch_volley(){this.current_shooter=null,this.awaiting_human=!1,this.phase=Tf;for(const t of this.firing_order){const e=this.tanks[t];e.alive&&e.player_index in this._sync_locks&&(this.current_shooter=e,this.fire(e))}this.current_shooter=null,this.timer=wT}_sync_volley(t){for(let e=0;e<ec;e++)this._step_flight();if(this._animate_effects(),!(this.projectiles.length>0||this.explosions.length>0||this.beams.length>0||this.plasma_rings.length>0||this.death_fountains.length>0||this.throe_fx.length>0||this.death_queue.length>0)){if(this.timer>0){this.timer-=t;return}this._do_settle(),this._win_check()?this._end_round():this._sync_start_volley()}}_sim_begin_round(){this.current_shooter=null,this.awaiting_human=!1,this._sim={};for(const t of this.tanks){if(!t.alive)continue;t.inventory[or]>0?t.parachute_deployed=!1:t.parachute_deployed=!0;const e=this.rng.pick(Math.max(1,Nt(RT*1e3)))/1e3;this._sim[t.player_index]={timer:e,shots:0}}this._sim_human=this.tanks.find(t=>t.alive&&t.ai_class===fi)??null,this._sim_keymap=this._sim_build_keymap(this._sim_human),this.phase=er,this.timer=0}_sim_build_keymap(t){return{}}_sim_in_flight(t){return this.projectiles.some(e=>e.owner===t)}_sim_update(t){for(let e=0;e<ec;e++)this._step_flight();this._animate_effects(),this.projectiles.length===0&&this._do_settle();for(const e of this.tanks)this._battery_auto_trigger(e);if(this.death_queue.length===0&&this._win_check()){this._end_round();return}for(const e of this.tanks){if(!e.alive||e.ai_class===fi)continue;const n=this._sim[e.player_index];if(n===void 0||this._sim_in_flight(e))continue;if(n.timer>0){n.timer-=t;continue}this.cfg.is_on("CHANGING_WIND")&&this._perturb_wind();const[s,r,o]=za(this,e);e.angle=Nt(Math.max(0,Math.min(180,s))),e.power=Nt(Math.max(0,Math.min(1e3,r))),e.selected_weapon=o,this.current_shooter=e,this.fire(e),n.shots+=1,n.timer=AT}this.current_shooter=this._sim_human}_sim_human_fire(t){return this._sim_in_flight(t)||(this.current_shooter=t,this.fire(t)),!0}_sim_human_input(t,e){const n=this._sim_human;if(n===null||!n.alive||this.phase!==er||!t||Object.keys(this._sim_keymap).length===0)return;const s=a=>{const c=this._sim_keymap[a];return c!==void 0&&c>=0&&c<t.length&&!!t[c]};let r=n.angle,o=n.power;s("cw")&&(r-=Af*e),s("ccw")&&(r+=Af*e),s("power_up")&&(o+=Rf*e),s("power_down")&&(o-=Rf*e),n.angle=Nt(Math.max(0,Math.min(180,r))),n.power=Nt(Math.max(0,Math.min(1e3,o)))}_sim_human_keydown(t){const e=this._sim_human;return e===null||!e.alive||this.phase!==er||Object.keys(this._sim_keymap).length===0?!1:t===this._sim_keymap.fire?(this._sim_human_fire(e),!0):t===this._sim_keymap.weapon}_step_flight(){for(const t of this.projectiles.slice()){if(!t.active)continue;const e=t.state;if(e.rolling){FE(this,t);continue}if(e.tunneling){t.weapon.behavior==="sandhog"?zE(this,t):kE(this,t);continue}const n=t.vy;zS(t,this.cfg,void 0,this.tanks),Yt.fly_tone(this.cfg.FLY_SOUND,t,this.cfg.is_on("SOUND"));const s=t.bounce_count??0;if(!GS(t,this.cfg,this.w,this.h)){this._resolve_off_field(t);continue}if((t.bounce_count??0)>s&&Yt.play("bounce",this.cfg.is_on("SOUND")),t.weapon.behavior==="mirv"&&!t.split_done&&n>0&&0>=t.vy){const o=this.projectiles.length;if(UE(this,t),t.contact)for(const a of this.projectiles.slice(o))a.contact=!0;continue}this._mag_deflect(t),this._force_deflect(t),this._collect_trace(t);const r=this._check_collision(t);r&&this._resolve_hit(t,r)}for(const t of this.projectiles)t.active||this._flush_trace(t);this.projectiles=this.projectiles.filter(t=>t.active)}_resolve_off_field(t){const e=this.cfg.live_elastic!==void 0?this.cfg.live_elastic:this.cfg.elastic,n=this.h-2,s=Math.max(0,Math.min(this.w-1,t.sx)),r=t.py>=this.h-1,o=e===5,a=t.px<0||t.px>this.w-1,c=t.py<0;let l,h=s,u=n;if(r?(l=!0,h=s,u=n):o&&(a||c)?(h=t.px<0?0:t.px>this.w-1?this.w-2:s,u=c?2:Math.max(2,Math.min(n,t.sy)),l=!0):l=!1,t.active=!1,!l){this.last_landing=[t.sx,t.sy];return}this.last_landing=[h,u];const f=t.weapon.behavior;if(f!=="tracer"){if(f==="digger"||f==="sandhog"){if(Math.abs(t.weapon.blast)<=0)return;nn(this,h,u,Re(this,t.weapon));return}us(this,t,h,u)}}_flush_trace(t){const e=t.state.trace_path;if(!e||e.length===0)return;const n=t.owner,s=Math.max(0,Math.min(255,(n!==null?n.color:Pd)+110));for(const[r,o]of e)this.trace_marks.push([r,o,s]);t.state.trace_path=[]}_collect_trace(t){if(!(this.cfg.is_on("TRACE")||t.weapon.behavior==="tracer"))return;let n=t.state.trace_path;n===void 0&&(n=[],t.state.trace_path=n);const s=Nt(t.prev_px),r=Nt(t.prev_py),o=t.sx,a=t.sy;for(const c of Lf(s,r,o,a))(n.length===0||n[n.length-1][0]!==c[0]||n[n.length-1][1]!==c[1])&&n.push(c)}_mag_deflect(t){const e=this.cfg.FIRE_DELAY,n=e===0?Au:Au/e,s=nr(this.h-1,DM);for(const r of this.tanks){if(!(r.alive&&r.shield_hp>0&&r.shield_push)||r===t.owner||t.vx===0||Math.abs(nc(t.px-r.x))>PM)continue;const o=nc(r.y-t.py);0<o&&o<=s&&(t.vy+=n)}}_force_deflect(t){const e=t.state.force_reflect_in_ring;let n=!1;for(const s of this.tanks){if(!(s.alive&&s.shield_hp>0&&s.shield_deflect))continue;const r=s.half_width+UM,o=t.sx-s.x,a=t.sy-(s.y-4);if(o*o+a*a>=r*r||(n=!0,e))continue;const c=t.sx-s.x,l=s.y-t.sy,h=t.vx,u=-t.vy;if(uo(c)===uo(h)&&uo(l)===uo(u)){t.state.force_reflect_in_ring=!0;continue}const f=Math.atan2(l,c),_=(Math.atan2(u,h)-f)*NM,g=Math.cos(_),m=Math.sin(_),p=(-g*h-m*u)*Ru,b=(m*h-g*u)*Ru;t.vx=p,t.vy=-b,Vu(s),t.state.force_reflect_in_ring=!0}!n&&e&&(t.state.force_reflect_in_ring=!1)}_check_collision(t){const e=Nt(t.prev_px),n=Nt(t.prev_py),s=t.sx,r=t.sy;for(const[o,a]of Lf(e,n,s,r)){if(a>=this.h-1)return{0:"terrain",1:null,2:o,3:this.h-2};for(const c of this.tanks){if(c.alive&&c!==t.owner&&Math.abs(c.x-o)<=c.half_width&&0<=c.y-a&&c.y-a<=10)return{0:"tank",1:c,2:o,3:a};if(c===t.owner&&t.owner!==null&&Math.abs(c.x-o)<=c.half_width&&0<=c.y-a&&c.y-a<=10&&t.armed&&Math.hypot(o-t.owner.x,a-(t.owner.y-4))>16)return{0:"tank",1:c,2:o,3:a}}if(0<=o&&o<this.w&&0<=a&&a<this.h&&this.terrain.is_dirt(o,a))return{0:"terrain",1:null,2:o,3:a}}return null}_resolve_hit(t,e){const n=e[0],s=e[1],r=e[2],o=e[3],a=t.weapon.behavior;if(this.last_landing=[r,o],n==="tank"&&s!==null){if(s.shield_hp>0&&a!=="laser"){a==="digger"||(Vu(s),Yt.play("shield_hit",this.cfg.is_on("SOUND"))),t.active=!1;return}if(a==="digger"){t.active=!1,Yt.play("fizzle",this.cfg.is_on("SOUND"));return}if(a==="dirt_sphere"||a==="dirt_slump"||a==="dirt_wedge"||a==="dirt_settle"||a==="riot_sphere"||a==="riot_wedge"||a==="tracer"){us(this,t,r,o),t.active=!1;return}this.direct_hit_tank=s,nE(this,s),us(this,t,r,o),t.active=!1}else{if(!t.contact){if(a==="roller"){OE(this,t,r);return}if(a==="digger"){BE(this,t,r,o);return}if(a==="sandhog"){HE(this,t,r,o);return}}if(a==="tracer"){t.active=!1;return}if(t.contact&&a==="digger"){const c=Nt(Re(this,t.weapon));this.terrain.carve_circle(r,o,c),this.add_explosion(r,o,c,{dirt_only:!0}),t.active=!1;return}if(t.contact&&a==="sandhog"){nn(this,r,o,Re(this,t.weapon)),t.active=!1;return}us(this,t,r,o),a==="leapfrog"&&t.warheads_left>1&&this._leapfrog_hop(t,r,o),t.active=!1}}_leapfrog_hop(t,e,n){const s=t.owner;if(s===null)return;const r=t.weapon.warheads-t.warheads_left+1,o=t.weapon.params.radii??[20,25,30],a=ro(s,this.cfg,t.weapon,350,t.vx>=0?60:120);a.warheads_left=t.warheads_left-1,a.weapon=ip(t.weapon),a.weapon.behavior="leapfrog",a.weapon.warheads=t.weapon.warheads,a.weapon.blast=o[Math.min(r,o.length-1)],a.px=e,a.py=n-4,a.contact=t.contact,this.projectiles.push(a)}_do_settle(){this.terrain.settle(this.cfg,this.rng);for(const t of this.tanks)t.alive&&this._settle_tank(t)}_settle_tank(t){if(!this.cfg.is_on("FALLING_TANKS")){t.y=Math.max(2,this.terrain.column_top(t.x)-1);return}const e=this.h-2,n=sE(this.terrain,t);let s=0;const r=[[t.x,t.y]];for(;t.y<e&&!this.terrain.is_supported(t.x,t.y,t.half_width);){if(t.y+=1,s+=1,n&&Math.abs(this.cfg.wind)>10&&this.rng.pick(100)<nc(Math.abs(this.cfg.wind))){const c=this.cfg.wind>0?1:-1,l=t.x+c;9<=l&&l<=this.w-10&&!this.terrain.is_solid(l,t.y)&&(t.x=l)}r.push([t.x,t.y])}if(s<=0)return;const o=s*Ld,a=this._tank_under(t);if(a!==null){Wi(this,a,o+RM),Gu(this,t,nr(o,2)+CM);return}if(n){Yt.play("parachute",this.cfg.is_on("SOUND")),this._announce_defense(t,Bi),t.inventory[Bi]>0&&(t.inventory[Bi]-=1),t.parachutes<1&&(t.parachute_deployed=!1),this._start_chute_descent(t,r);return}Gu(this,t,o)}_start_chute_descent(t,e){!e||e.length<2||(t.chute_descent={path:e,i:0})}_step_chute_anims(t){for(const e of this.tanks){const n=e.chute_descent;n&&(n.i+=CT,n.i>=n.path.length-1&&(e.chute_descent=null))}}_tank_under(t){for(const e of this.tanks)if(e!==t&&e.alive&&Math.abs(e.x-t.x)<=e.half_width+2&&0<=t.y-e.y&&t.y-e.y<=4)return e;return null}add_explosion(t,e,n,s){const r=s?.dirt_only??!1,o=s?.nuke??!1;n=Math.max(2,Nt(n));const a=o||n<40?1:2;let c;o?c="nuke":r?c="stamp":c="grow";const l=o||!r&&n>=se.EXPLO_FLASH_MIN_R;this.explosions.push({x:Nt(t),y:Nt(e),maxr:n,style:c,dirt:r,step:a,flash:l,phase:0,frame:0})}add_beam(t){this.beams.push({pts:t,frame:0})}add_plasma_ring(t,e,n){n=Math.max(2,Nt(n)),this.plasma_rings.push({x:Nt(t),y:Nt(e),maxr:n,r:1,dir:1})}_step_plasma_rings(){for(const t of this.plasma_rings)t.r+=t.dir,t.r>=t.maxr&&(t.r=t.maxr,t.dir=-1);this.plasma_rings=this.plasma_rings.filter(t=>t.r>=1)}add_flash(t,e,n=[255,255,235],s=0){this.flashes.push({up:Math.max(1,Nt(t)),down:Math.max(1,Nt(e)),frame:-Math.max(0,Nt(s)),rgb:n})}_step_flashes(){for(const t of this.flashes)t.frame+=1;this.flashes=this.flashes.filter(t=>t.frame<=t.up+t.down)}add_death_fountain(t,e,n,s){this.death_fountains.push({col:Nt(t),y:Nt(e),top:Nt(n),color:Nt(s?.color??15),stride:Nt(s?.stride??6),scatter:Nt(s?.scatter??1)})}_step_death_fountains(){for(const t of this.death_fountains){const e=(this.rng.pick(3)-1)*t.scatter;t.col=Math.max(0,Math.min(this.w-1,t.col+e)),t.y-=t.stride}this.death_fountains=this.death_fountains.filter(t=>t.y>=t.top)}add_throe(t,e,n,s,r=null){const o={kind:t,x:Nt(e),y:Nt(n),color:Nt(s),frame:0,life:r?Nt(r):se.THROE_LIFE[t]??40};if(t==="fireworks"||t==="sparkle"){const a=[];for(let c=0;c<36;c++){const l=this.rng.pick(360)*Math.PI/180,h=1+this.rng.pick(40)/10;a.push([e,n,h*Math.cos(l),h*Math.sin(l)-2.4])}o.parts=a}else if(t==="debris"){const a=[];for(let c=0;c<14;c++){const l=this.rng.pick(360)*Math.PI/180,h=.6+this.rng.pick(24)/10;a.push([e,n,h*Math.cos(l),h*Math.sin(l)-3])}o.parts=a}else t==="sink"&&this.terrain.carve_circle(Nt(e),Nt(n),11);this.throe_fx.push(o)}_step_throe_fx(){for(const t of this.throe_fx)if(t.frame+=1,t.kind==="fireworks"||t.kind==="sparkle"||t.kind==="debris")for(const e of t.parts)e[0]+=e[2],e[1]+=e[3],e[3]+=.35;this.throe_fx=this.throe_fx.filter(t=>t.frame<t.life)}_step_explosion(t){if(t.frame+=1,t.style==="stamp"){t.frame>se.EXPLO_STAMP_HOLD&&(t.phase=3);return}const e=t.style==="nuke"?se.NUKE_FLASH_FRAMES:se.EXPLO_FLASH_FRAMES,n=t.phase;n===0?t.frame*t.step>=t.maxr&&(t.phase=t.flash?1:2,t.frame=0):n===1?t.frame>=e&&(t.phase=2,t.frame=0):n===2&&t.frame>=se.EXPLO_SHRINK_FRAMES&&(t.phase=3)}_animate_effects(){this._step_death_fountains();for(const t of this.explosions)this._step_explosion(t);this.explosions=this.explosions.filter(t=>t.phase<3);for(const t of this.beams)t.frame+=1;this.beams=this.beams.filter(t=>t.frame<=8),this._step_plasma_rings(),this._step_throe_fx(),this._step_death_queue()}_step_death_queue(){const t=this.cfg.is_on("SOUND");for(const[e,n]of Nb(this))if(e==="award"){WS(this,this.current_shooter,n);const s=Vb(n,this.talk,this.rng);s!==null&&Ya(this,n,s,this.talk)}else e==="front"?(this._death_pulse={color:Nt(n),frame:0},Yt.play("throe_front",t)):e==="thud"?Yt.play("throe_thud",t):e==="blast"?Yt.play("explosion",t,{size:n}):e==="sink"?Yt.play("sink",t):e==="cookoff"?Yt.play("explosion",t,{size:18}):e==="climb"&&Yt.play("death",t)}_tick_sky(){this._step_flashes(),this._tick_shield_fades(),vb(this)}_tick_palette(t){const e=this.lut;this._pal_accum+=t*AM;const n=Nt(this._pal_accum);this._pal_accum-=n;const s=this._sliceTable(this._lut_base,tl,Wu);if(e.set_band(tl,Wu,s),this._tick_explosion_band(),this._tick_lightning_band(),this._death_pulse!==null){const r=this._death_pulse,o=r.color,a=this._lut_base[o];if(r.frame>=40)e.set_band(o,o,[a]),this._death_pulse=null;else{const c=[255,255,255];e.set_band(o,o,[r.frame%2?c:a]),r.frame+=1}}this._tick_digger_band(n),this._tick_firewall_band(n)}_tick_explosion_band(){const t=lE,e=hE,n=Id;let s=null,r=null;for(const o of this.explosions){if(o.style==="stamp")continue;const a=o.phase;if(a===0||a===1){s=o;break}if(a===2){const c=Math.min(1,o.frame/se.EXPLO_SHRINK_FRAMES);r=r===null?c:Math.min(r,c)}}if(s!==null||r!==null){if(this.lut.reramp_band(t,n,se._EXPLO_HOT_OUTER,se._EXPLO_HOT_INNER),this.lut.reramp_band(n,e,se._EXPLO_HOT_INNER,se._EXPLO_HOT_INNER),r!==null&&s===null){const o=Math.max(0,1-.9*r),a=[];for(let c=t;c<=e;c++){const l=this.lut.table[c];a.push([Math.trunc(l[0]*o)&255,Math.trunc(l[1]*o)&255,Math.trunc(l[2]*o)&255])}this.lut.set_band(t,e,a)}this._explo_band_active=!0}else this._explo_band_active&&(this.lut.set_band(t,e,this._sliceTable(this._lut_base,t,e)),this._explo_band_active=!1)}_tick_lightning_band(){const t=this.flashes;if(t.length===0)return;let e=0;for(const o of t){const a=o.frame;if(a<0)continue;const c=o.up,l=o.down,h=a<=c?a/c:Math.max(0,1-(a-c)/l);e=Math.max(e,h)}if(e<=0)return;const n=uE,s=fE,r=[];for(let o=n;o<=s;o++){const a=this.lut.table[o],c=Math.max(0,Math.min(255,Math.trunc(a[0]*(1-e)+255*e))),l=Math.max(0,Math.min(255,Math.trunc(a[1]*(1-e)+255*e))),h=Math.max(0,Math.min(255,Math.trunc(a[2]*(1-e)+255*e)));r.push([c,l,h])}this.lut.set_band(n,s,r)}start_digger_cycle(){this._digger_cycle=se.DIGGER_CYCLE_FRAMES}_tick_digger_band(t=1){const e=ar,n=gs,s=n-e+1;if(this._digger_cycle>0){this._digger_step=(this._digger_step+t)%s;const r=this._sliceTable(this._lut_base,e,n);this.lut.set_band(e,n,this._rollRows(r,this._digger_step)),this._digger_cycle-=1,this._digger_cycle===0&&(this.lut.set_band(e,n,r),this._digger_step=0,this.terrain.clear_index_band(e,n))}}add_firewall(t,e,n){this.firewalls.push({x:Nt(t),y0:Nt(Math.min(e,n)),y1:Nt(Math.max(e,n)),frame:0}),Yu(this.lut,0),this._firewall_band_active=!0}_tick_firewall_band(t=1){if(this.firewalls.length>0){this._firewall_counter+=t,this._firewall_counter>100&&(this._firewall_counter%=101),Yu(this.lut,this._firewall_counter),this._firewall_band_active=!0;for(const e of this.firewalls)e.frame+=1;this.firewalls=this.firewalls.filter(e=>e.frame<=se.FIREWALL_FRAMES)}else this._firewall_band_active&&(this.lut.set_index(nl,this._lut_base[nl]),this.lut.set_band(el,Xu,this._sliceTable(this._lut_base,el,Xu)),this.lut.set_band(Do,qu,this._sliceTable(this._lut_base,Do,qu)),this._firewall_band_active=!1)}_sliceTable(t,e,n){const s=[];for(let r=e;r<=n;r++){const o=t[r];s.push([o[0],o[1],o[2]])}return s}_rollRows(t,e){const n=t.length;if(n===0)return t;const s=(e%n+n)%n,r=new Array(n);for(let o=0;o<n;o++)r[(o+s)%n]=t[o];return r}on_tank_destroyed(t,e=null){Pb(this,t,e)}_end_round(){XS(this),this.tanks.some(t=>t.alive)&&Yt.play("victory",this.cfg.is_on("SOUND")),this.round_index+=1,this.ranking=Bu(this),this.phase=Ef}mass_kill(){const t=this.tanks.length;if(t===0)return;const e=this.cfg.scoring===Xo?t*Dd:Nd,n=nr(e,t);for(const s of this.tanks)s.alive=!1,s.health=0,s.score+=n,s.cash=Math.max(0,s.cash+n);this.round_index+=1,this.ranking=Bu(this),this.phase=Ef}proceed_after_round(){if(this.round_index>=this.cfg.MAXROUNDS){this.winner=this.ranking.length>0?this.ranking[0]:null,this.phase=bT;return}this.economy.accrue_interest(this.tanks),this.economy.update_repeated_use(this.cfg.MAXROUNDS-this.round_index-1),this.economy.market_update(this.tanks.length),this.phase=bf}run_ai_buys(){for(const t of this.tanks)t.ai_class!==fi&&TS(this,t)}begin_next_round(){this.start_round()}};v(se,"SHIELD_FADE_FRAMES",51),v(se,"EXPLO_FLASH_FRAMES",49),v(se,"EXPLO_SHRINK_FRAMES",25),v(se,"EXPLO_FLASH_MIN_R",31),v(se,"EXPLO_STAMP_HOLD",3),v(se,"NUKE_FLASH_FRAMES",129),v(se,"THROE_LIFE",{ball:60,spiral:46,sparkle:46,ring:40,fireworks:56,sink:34,debris:50}),v(se,"_EXPLO_HOT_OUTER",[24,0,0]),v(se,"_EXPLO_HOT_INNER",[252,0,0]),v(se,"DIGGER_CYCLE_FRAMES",200),v(se,"FIREWALL_FRAMES",120);let ol=se;function LT(i,t){const e=i.w,n=i.h,s=Math.min(e,256),r=Math.min(n,64),o=new Is(e,n,s,r);o.rotateX(-Math.PI/2);const a=new vr({color:8947848,flatShading:!0,side:un}),c=new Ae(o,a);return c.receiveShadow=!0,c.castShadow=!0,Tp(c,i),c}function Tp(i,t){const e=i.geometry,n=e.attributes.position,s=t.w,r=t.h,o=300,a=0;Math.sqrt(n.count/((e.parameters.heightSegments??64)+1));for(let c=0;c<n.count;c++){const l=n.getX(c),h=Math.round(l+s/2);if(h<0||h>=s){n.setY(c,a);continue}let u=r-1;for(let d=0;d<r;d++)if(t.is_dirt(h,d)){u=d;break}const f=(r-u)/r*o;n.setY(c,f)}n.needsUpdate=!0,e.computeVertexNormals()}const IT=new Map;new bd;function PT(i,t){for(const e of IT.values()){const n=e.tank;if(!n.alive){e.group.visible=!1;continue}e.group.visible=!0;const s=Math.round(n.x),r=s-t.w/2;let o=0;for(let a=0;a<t.h;a++)if(t.is_dirt(s,a)){o=(t.h-a)/t.h*300;break}if(e.group.position.set(r,o,0),e.turret){const a=(n.angle-90)*(Math.PI/180);e.turret.rotation.z=a}}}const To=[],al=new Tl({map:null,blending:oc,depthWrite:!1,transparent:!0,opacity:.8});function DT(){return new Promise(i=>{new Cl().load("./assets/explosion_sheet_v4.png",e=>{al.map=e,al.needsUpdate=!0,i()},void 0,()=>i())})}function NT(i,t,e,n,s,r){const o=i-s/2,a=(r-t)/r*300+e*.3,c=0,l=new pd(al.clone());l.position.set(o,a,c),l.scale.set(e*.5,e*.5,1),n.add(l),To.push({sprite:l,maxRadius:e,frame:0,age:0})}function UT(i){for(let e=To.length-1;e>=0;e--){const n=To[e];n.age+=i;const s=n.age/.6;if(s>=1){n.sprite.removeFromParent(),n.sprite.material.dispose(),To.splice(e,1);continue}const r=n.maxRadius*(.3+s*.7);n.sprite.scale.set(r,r,1),n.sprite.material.opacity=1-s}}const fo=new Set;function OT(i,t){const e=new Set;for(const n of i.explosions){const s=n.x*1e4+n.y;e.add(s),fo.has(s)||(NT(n.x,n.y,n.maxr||20,t,i.w,i.h),fo.add(s))}for(const n of fo)e.has(n)||fo.delete(n)}function FT(i){return{x:0,y:0}}const ic=[];new Ls(2,2,2);const BT=-50;function kT(i){for(let t=ic.length-1;t>=0;t--){const e=ic[t];if(e.age+=i,e.age>=e.life){e.mesh.removeFromParent(),e.mesh.material.dispose(),ic.splice(t,1);continue}e.velocity.y+=BT*i,e.mesh.position.x+=e.velocity.x*i,e.mesh.position.y+=e.velocity.y*i,e.mesh.position.z+=e.velocity.z*i,e.mesh.position.y<0&&(e.mesh.position.y=0,e.velocity.y*=-.3,e.velocity.x*=.5);const n=e.age/e.life,s=e.mesh.material;s.opacity=1-n,s.transparent=!0}}const HT={earth:{bg:4878245,fog:8892112,fogNear:400,fogFar:900},moon:{bg:328976,fog:0,fogNear:300,fogFar:700},mars:{bg:9127187,fog:12883306,fogNear:200,fogFar:600}};function wp(i,t){const e=HT[t];i.background=new St(e.bg),i.fog=new bl(e.fog,e.fogNear,e.fogFar);const n=i.children.find(s=>s instanceof Ed);n&&(t==="moon"?n.intensity=.3:t==="mars"?n.intensity=.5:n.intensity=.6)}let If="earth",zT=new Py;function GT(i,t,e,n){const s=Math.min(zT.getDelta(),.1);i.update(s),Tp(n,i.terrain),PT(i,i.terrain),OT(i,t),UT(s),kT(s);const r=FT();e.position.x+=r.x,e.position.y+=r.y;const o=VT(i.round_index);o!==If&&(If=o,wp(t,o))}function VT(i){return i<=1?"earth":i<=3?"moon":"mars"}const Ap={"Elon Musk":{taunt:["./audio/elon_musk_taunt.wav","./audio/elon_musk_taunt_v2.wav","./audio/elon_musk_taunt3.wav","./audio/elon_musk_taunt4.wav","./audio/elon_musk_taunt5.wav","./audio/elon_musk_taunt6.wav"],kill:["./audio/elon_musk_kill.wav"],death:["./audio/elon_musk_death.wav"],shop:["./audio/elon_musk_shop.wav"],revenge:["./audio/elon_musk_revenge.wav"],nearmiss:["./audio/elon_musk_nearmiss.wav"]},"Donald Trump":{taunt:["./audio/trump_taunt.wav","./audio/donald_trump_taunt4.wav","./audio/donald_trump_taunt5.wav"],kill:["./audio/donald_trump_kill.wav"],death:["./audio/donald_trump_death.wav"],shop:["./audio/donald_trump_shop.wav"],revenge:["./audio/donald_trump_revenge.wav"]},"Jeff Bezos":{taunt:["./audio/bezos_taunt.wav","./audio/jeff_bezos_taunt3.wav","./audio/jeff_bezos_taunt4.wav","./audio/jeff_bezos_taunt5.wav"],kill:["./audio/jeff_bezos_kill.wav"],death:["./audio/jeff_bezos_death.wav"],shop:["./audio/jeff_bezos_shop.wav"],revenge:["./audio/jeff_bezos_revenge.wav"]},"Sam Altman":{taunt:["./audio/sam_altman_taunt.wav","./audio/sam_altman_taunt3.wav","./audio/sam_altman_taunt4.wav","./audio/sam_altman_taunt5.wav"],kill:["./audio/sam_altman_kill.wav"],death:["./audio/sam_altman_death.wav"],shop:["./audio/sam_altman_shop.wav"],revenge:["./audio/sam_altman_revenge.wav"]},"Bill Gates":{taunt:["./audio/bill_gates_taunt.wav","./audio/bill_gates_taunt3.wav"],kill:["./audio/bill_gates_kill.wav"],death:["./audio/bill_gates_death.wav"],shop:["./audio/bill_gates_shop.wav"],revenge:["./audio/bill_gates_revenge.wav"]},"Steve Jobs":{taunt:["./audio/steve_jobs_taunt.wav","./audio/steve_jobs_taunt3.wav"],kill:["./audio/steve_jobs_kill.wav"],death:["./audio/steve_jobs_death.wav"],shop:["./audio/steve_jobs_shop.wav"],revenge:["./audio/steve_jobs_revenge.wav"]},"Gordon Ramsay":{taunt:["./audio/gordon_ramsay_taunt.wav","./audio/gordon_ramsay_taunt5.wav"],kill:["./audio/gordon_ramsay_kill.wav"],death:["./audio/gordon_ramsay_death.wav"]},"Werner Herzog":{taunt:["./audio/werner_herzog_taunt.wav","./audio/werner_herzog_taunt3.wav","./audio/werner_herzog_taunt5.wav"],kill:["./audio/werner_herzog_kill.wav"],death:["./audio/werner_herzog_death.wav"],shop:["./audio/werner_herzog_shop.wav"],revenge:["./audio/werner_herzog_revenge.wav"]},"Mark Zuckerberg":{taunt:["./audio/mark_zuckerberg_taunt.wav"],kill:["./audio/mark_zuckerberg_kill.wav"],death:["./audio/mark_zuckerberg_death.wav"],shop:["./audio/mark_zuckerberg_shop.wav"],revenge:["./audio/mark_zuckerberg_revenge.wav"]},"Joe Rogan":{taunt:["./audio/joe_rogan_taunt.wav"],kill:["./audio/joe_rogan_kill.wav"],death:["./audio/joe_rogan_death.wav"]},"Neil deGrasse Tyson":{taunt:["./audio/neil_degrasse_tyson_taunt.wav"],kill:["./audio/neil_degrasse_tyson_kill.wav"],death:["./audio/neil_degrasse_tyson_death.wav"]}},cl=new(window.AudioContext||window.webkitAudioContext),ll=new Map;async function WT(i){if(!ll.has(i))try{const e=await(await fetch(i)).arrayBuffer(),n=await cl.decodeAudioData(e);ll.set(i,n)}catch{}}function Rp(i){const t=ll.get(i);if(!t)return;const e=cl.createBufferSource();e.buffer=t,e.connect(cl.destination),e.start()}function Cp(i,t){const e=Ap[i];if(!e)return null;const n=e[t];return!n||n.length===0?null:n[Math.floor(Math.random()*n.length)]}function XT(i){const t=Cp(i.name,"taunt");t&&Rp(t)}function qT(i){const t=Cp(i.name,"death");t&&Rp(t)}async function YT(){const i=[];for(const t of Object.values(Ap))for(const e of Object.values(t))for(const n of e)i.push(WT(n));await Promise.allSettled(i)}const KT=document.getElementById("game"),br=new ey({canvas:KT,antialias:!0});br.setPixelRatio(Math.min(window.devicePixelRatio,2));br.setSize(window.innerWidth,window.innerHeight);br.shadowMap.enabled=!0;const xn=new ny;xn.background=new St(1710638);const $T=window.innerWidth/window.innerHeight,hl=800,ul=hl*$T,Vn=new Go(-ul/2,ul/2,hl/2,-hl/2,.1,2e3);Vn.position.set(0,-100,600);Vn.lookAt(0,200,0);xn.add(new Ed(16777215,.8));const Lp=new Sd(16777164,1.5);Lp.position.set(200,400,300);xn.add(Lp);xn.add(new Ty(4491468,2245666,.4));const ZT=new Is(ul*3,600),JT=new Jn({uniforms:{topColor:{value:new St(30719)},bottomColor:{value:new St(13421789)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec2 vUv; uniform vec3 topColor; uniform vec3 bottomColor; void main() { gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 1.0); }",depthWrite:!1}),Ip=new Ae(ZT,JT);Ip.position.set(0,450,-50);xn.add(Ip);Zo.seed(42);const Fs=new Wl;Fs.GRAVITY=.2;Fs.wind=0;Fs.MAX_WIND=200;Fs.INITIAL_CASH=5e3;Fs.SOUND="OFF";const Qt=new ol(Fs,1024,768);Qt.add_player("Elon Musk",0,0,0);Qt.add_player("Jeff Bezos",1,1,1);Qt.add_player("Donald Trump",4,2,7);Qt.add_player("Scam Altman",5,3,7);Qt.new_game();const Qo=LT(Qt.terrain);Qo.position.set(0,0,0);xn.add(Qo);const ki=[],Pf=[4491519,16746564,16720418,4513092],QT=["Elon","Bezos","Trump","Altman"];for(let i=0;i<Qt.tanks.length;i++){const t=new mi,e=new Wo(3,4,18,8),n=new vr({color:Pf[i],flatShading:!0}),s=new Ae(e,n);s.position.y=9,t.add(s);const r=new Rl(3,6,8),o=new Ae(r,n);o.position.y=21,t.add(o);const a=new pd(new Tl({map:jT(QT[i],Pf[i]),transparent:!0,depthTest:!1}));a.position.y=28,a.scale.set(30,10,1),t.add(a),t.visible=!1,xn.add(t),ki.push(t),ki[i].userData={body:s}}function jT(i,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="#"+t.toString(16).padStart(6,"0"),n.font="bold 28px system-ui",n.textAlign="center",n.fillText(i,128,40);const s=new uy(e);return s.minFilter=ze,s}const Tr=document.createElement("div");Tr.id="title-screen";Tr.innerHTML=`
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;
    background:radial-gradient(ellipse at center,#0a0a2e 0%,#000 70%);font-family:system-ui;">
    <h1 style="font-size:56px;color:#e94560;letter-spacing:6px;text-shadow:3px 3px 0 #000;margin:0;">SCORCHED BILLIONAIRE</h1>
    <p style="color:#e08bb0;font-size:20px;margin:8px 0 36px;">The Mother of All VC Rounds</p>
    <button id="btn-play" style="padding:14px 56px;font-size:22px;background:#e94560;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700;letter-spacing:2px;">PLAY</button>
    <p style="color:#555;margin-top:32px;font-size:12px;max-width:500px;text-align:center;">4 billionaires. 3 planets. 48 weapons. <br>Arrow keys to aim. Space to fire. Tab for weapons.</p>
  </div>`;Tr.style.cssText="position:fixed;inset:0;z-index:200;";document.body.appendChild(Tr);const jo=document.createElement("div");jo.style.cssText="position:fixed;top:10px;left:10px;z-index:20;color:#fff;font-family:system-ui;font-size:14px;background:rgba(0,0,0,0.7);padding:8px 14px;border-radius:6px;pointer-events:none;display:none;";document.body.appendChild(jo);let Df=Qt.tanks.map(i=>i.alive);window.addEventListener("keydown",i=>{if(Qt.phase==="aim"&&Qt.awaiting_human){const t=Qt.current_shooter;i.key==="ArrowLeft"&&(t.angle=Math.min(180,t.angle+3)),i.key==="ArrowRight"&&(t.angle=Math.max(0,t.angle-3)),i.key==="ArrowUp"&&(t.power=Math.min(1e3,t.power+30)),i.key==="ArrowDown"&&(t.power=Math.max(0,t.power-30)),i.key==="Tab"&&(i.preventDefault(),t.selected_weapon=(t.selected_weapon+1)%32),(i.key===" "||i.key==="Enter")&&(i.preventDefault(),Qt.fire(),XT(t))}});window.addEventListener("resize",()=>{const i=window.innerWidth/window.innerHeight,t=800,e=t*i;Vn.left=-e/2,Vn.right=e/2,Vn.top=t/2,Vn.bottom=-t/2,Vn.updateProjectionMatrix(),br.setSize(window.innerWidth,window.innerHeight)});function fl(){requestAnimationFrame(fl),GT(Qt,xn,Vn,Qo);for(let t=0;t<Qt.tanks.length;t++)Df[t]&&!Qt.tanks[t].alive&&qT(Qt.tanks[t]);Df=Qt.tanks.map(t=>t.alive);for(let t=0;t<Qt.tanks.length;t++){const e=Qt.tanks[t];if(!e.alive){ki[t].visible=!1;continue}const n=Math.round(e.x);for(let s=0;s<Qt.terrain.h;s++)if(Qt.terrain.is_dirt(n,s)){ki[t].position.set(n-Qt.w/2,(Qt.h-s)/Qt.h*300+4,0),ki[t].visible=!0;break}}const i=Qt.current_shooter;if(i){const t={aim:"🎯 YOUR TURN",turn_start:"⏳",firing:"🔥",settle:"💨"};jo.innerHTML=`<b>${i.name}</b> &nbsp; ${t[Qt.phase]||Qt.phase} &nbsp; | &nbsp; ${i.angle}° &nbsp; ${i.power} &nbsp; | Wind: ${Qt.cfg.wind}`}br.render(xn,Vn)}const tw=new bd,sc=["./models/falcon9.glb","./models/new_shepard.glb","./models/starship.glb","./models/delta_spaceplane.glb","./models/terran_r.glb"],rc=[];async function ew(){new Cl().load("./assets/moon_surface_v2.png",t=>{const e=Qo.material;e.map=t,e.color.set(16777215),e.needsUpdate=!0},void 0,()=>{});for(let t=0;t<sc.length;t++)try{const e=await tw.loadAsync(sc[t]);rc[t]=e.scene}catch{rc[t]=null}for(let t=0;t<Qt.tanks.length;t++){const e=t<sc.length?t:0,n=rc[e];if(n){const s=n.clone();s.scale.set(.15,.15,.15),s.position.copy(ki[t].position),xn.add(s),ki[t].userData.model3d=s}}}async function nw(){const i=document.getElementById("loading-bar"),t=document.getElementById("loading-pct"),e=document.getElementById("loading");try{t.textContent="Generating terrain...",i.style.width="20%",Qt.start_round(),t.textContent="Loading assets...",i.style.width="60%",ew().catch(()=>{}),YT().catch(()=>{}),DT().catch(()=>{}),i.style.width="100%",t.textContent="",document.getElementById("btn-play").addEventListener("click",()=>{Tr.remove(),jo.style.display="block",e.classList.add("done"),requestAnimationFrame(fl)})}catch(n){console.error(n),t.textContent="Error loading",setTimeout(()=>e.classList.add("done"),1e3),requestAnimationFrame(fl)}}wp(xn,"earth");nw();
