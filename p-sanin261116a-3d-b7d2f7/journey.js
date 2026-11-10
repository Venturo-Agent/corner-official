(()=>{var _f=2;var Fu=0,Bu=1,st=2,ci=0;var ku=2;var Mf=5,Gn=100,p1=101,f1=102;var Os=200,m1=201,g1=202,v1=203,yh=204,xh=205,Pl=206,y1=207,Il=208,x1=209,_1=210,M1=211,E1=212,T1=213,b1=214,S1=0,w1=1,A1=2,R1=3,C1=4,P1=5,I1=6,L1=7;var Ef=1,Tf=2,bf=3,Sf=4;var wf=6,Ll=7,Z0="attached",D1="detached",Af=300,bs=301,Ss=302,_h=303,Mh=304,Dl=306,mn=1e3,Dr=1001,xa=1002,$t=1003,zu=1004;var xs=1005;var Dn=1006,fa=1007;var Ci=1008;var vi=1009,Rf=1010,Cf=1011,_a=1012,Vu=1013,Nr=1014,oi=1015,Zn=1016,Gu=1017,Wu=1018,rr=1020,Pf=35902,If=1021,Lf=1022,Nn=1023,Df=1024,Nf=1025,Ma=1026,sr=1027,Xu=1028,ju=1029,Uf=1030,qu=1031;var Yu=1033,qo=33776,Yo=33777,Zo=33778,Ko=33779,Eh=35840,Th=35841,bh=35842,Sh=35843,wh=36196,Ah=37492,Rh=37496,Ch=37808,Ph=37809,Ih=37810,Lh=37811,Dh=37812,Nh=37813,Uh=37814,Oh=37815,Hh=37816,Fh=37817,Bh=37818,kh=37819,zh=37820,Vh=37821,Jo=36492,Gh=36494,Wh=36495,Of=36283,Xh=36284,jh=36285,qh=36286;var ws=2300,As=2301,Uc=2302,K0=2400,J0=2401,$0=2402;var Hf=0,Nl=1,Oa=2;var ys="",wt="srgb",ln="srgb-linear",Ul="linear",ct="srgb";var rs=7680;var N1=512,U1=513,O1=514,H1=515,F1=516,B1=517,k1=518,z1=519,Yh=35044;var Q0="300 es",Rs=2e3,$o=2001,ar=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ep=1234567,Ms=Math.PI/180,Cs=180/Math.PI;function Wn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(tn[255&i]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[255&e]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[63&t|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[255&n]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var Ol={DEG2RAD:Ms,RAD2DEG:Cs,generateUUID:Wn,clamp:It,euclideanModulo:Zh,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:ma,damp:function(i,e,t,n){return ma(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(Zh(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(ep=i);let e=ep+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Ms},radToDeg:function(i){return i*Cs},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*f,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*f,o*c);break;case"ZYZ":i.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:ft,denormalize:ai},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=r[0],m=r[3],y=r[6],v=r[1],x=r[4],_=r[7],M=r[2],E=r[5],b=r[8];return s[0]=a*g+o*v+l*M,s[3]=a*m+o*x+l*E,s[6]=a*y+o*_+l*b,s[1]=c*g+h*v+u*M,s[4]=c*m+h*x+u*E,s[7]=c*y+h*_+u*b,s[2]=d*g+p*v+f*M,s[5]=d*m+p*x+f*E,s[8]=d*y+p*_+f*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oc=new Ge;function Ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function V1(){let i=Ea("canvas");return i.style.display="block",i}var tp={};function pa(i){i in tp||(tp[i]=!0,console.warn(i))}var Je={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===ct&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ys?Ul:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Es(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var np=[.64,.33,.3,.6,.15,.06],ip=[.2126,.7152,.0722],rp=[.3127,.329],sp=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),ss;Je.define({[ln]:{primaries:np,whitePoint:rp,transfer:Ul,toXYZ:sp,fromXYZ:ap,luminanceCoefficients:ip,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:np,whitePoint:rp,transfer:ct,toXYZ:sp,fromXYZ:ap,luminanceCoefficients:ip,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});var Kh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=Ea("canvas")),ss.width=e.width,ss.height=e.height;let n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ea("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Pi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Pi(t[n]/255)):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},G1=0,Qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hc(r[a].image)):s.push(Hc(r[a]))}else s=Hc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var W1=0,Xt=class i extends ar{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Wn(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=Af,Xt.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],m=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(p+1)/2,M=(y+1)/2,E=(h+d)/4,b=(u+g)/4,S=(f+m)/4;return x>_&&x>M?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=b/n):_>M?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=E/r,s=S/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=b/s,r=S/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jh=class extends ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Xt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},el=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $h=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==p||h!==f){let m=1-o,y=l*d+c*p+h*f+u*g,v=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){let M=Math.sqrt(x),E=Math.atan2(M,y*v);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}let _=o*v;if(l=l*m+d*_,c=c*m+p*_,h=h*m+f*_,u=u*m+g*_,m===1-o){let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new T,op=new sn,an=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(s,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),fo.subVectors(this.max,ia),as.subVectors(e.a,ia),os.subVectors(e.b,ia),ls.subVectors(e.c,ia),Yi.subVectors(os,as),Zi.subVectors(ls,os),wr.subVectors(as,ls);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-wr.z,wr.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,wr.z,0,-wr.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-wr.y,wr.x,0];return!!Bc(t,as,os,ls,fo)&&(t=[1,0,0,0,1,0,0,0,1],!!Bc(t,as,os,ls,fo)&&(mo.crossVectors(Yi,Zi),t=[mo.x,mo.y,mo.z],Bc(t,as,os,ls,fo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ii).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ei=[new T,new T,new T,new T,new T,new T,new T,new T],ii=new T,po=new an,as=new T,os=new T,ls=new T,Yi=new T,Zi=new T,wr=new T,ia=new T,fo=new T,mo=new T,Ar=new T;function Bc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ar.fromArray(i,s);let o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),h=n.dot(Ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var X1=new an,ra=new T,kc=new T,En=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):X1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(ra,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(kc)),this.expandByPoint(ra.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new T,zc=new T,go=new T,Ki=new T,Vc=new T,vo=new T,Gc=new T,Ur=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zc.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(zc);let s=.5*e.distanceTo(t),a=-this.direction.dot(go),o=Ki.dot(this.direction),l=-Ki.dot(go),c=Ki.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zc).addScaledVector(go,d),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,r,s){Vc.subVectors(t,e),vo.subVectors(n,e),Gc.crossVectors(Vc,vo);let a,o=this.direction.dot(Gc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ki.subVectors(this.origin,e);let l=a*this.direction.dot(vo.crossVectors(Ki,vo));if(l<0)return null;let c=a*this.direction.dot(Vc.cross(Ki));if(c<0||l+c>o)return null;let h=-a*Ki.dot(Gc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,f,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,g,m)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,g,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j1,e,q1)}lookAt(e,t,n){let r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ji.crossVectors(n,In),Ji.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ji.crossVectors(n,In)),Ji.normalize(),yo.crossVectors(In,Ji),r[0]=Ji.x,r[4]=yo.x,r[8]=In.x,r[1]=Ji.y,r[5]=yo.y,r[9]=In.y,r[2]=Ji.z,r[6]=yo.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],y=n[14],v=n[3],x=n[7],_=n[11],M=n[15],E=r[0],b=r[4],S=r[8],w=r[12],P=r[1],D=r[5],N=r[9],z=r[13],G=r[2],K=r[6],J=r[10],W=r[14],Y=r[3],ee=r[7],ie=r[11],j=r[15];return s[0]=a*E+o*P+l*G+c*Y,s[4]=a*b+o*D+l*K+c*ee,s[8]=a*S+o*N+l*J+c*ie,s[12]=a*w+o*z+l*W+c*j,s[1]=h*E+u*P+d*G+p*Y,s[5]=h*b+u*D+d*K+p*ee,s[9]=h*S+u*N+d*J+p*ie,s[13]=h*w+u*z+d*W+p*j,s[2]=f*E+g*P+m*G+y*Y,s[6]=f*b+g*D+m*K+y*ee,s[10]=f*S+g*N+m*J+y*ie,s[14]=f*w+g*z+m*W+y*j,s[3]=v*E+x*P+_*G+M*Y,s[7]=v*b+x*D+_*K+M*ee,s[11]=v*S+x*N+_*J+M*ie,s[15]=v*w+x*z+_*W+M*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],y=e[15],v=u*m*c-g*d*c+g*l*p-o*m*p-u*l*y+o*d*y,x=f*d*c-h*m*c-f*l*p+a*m*p+h*l*y-a*d*y,_=h*g*c-f*u*c+f*o*p-a*g*p-h*o*y+a*u*y,M=f*u*l-h*g*l-f*o*d+a*g*d+h*o*m-a*u*m,E=t*v+n*x+r*_+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/E;return e[0]=v*b,e[1]=(g*d*s-u*m*s-g*r*p+n*m*p+u*r*y-n*d*y)*b,e[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*y+n*l*y)*b,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*b,e[4]=x*b,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*y+t*d*y)*b,e[6]=(f*l*s-a*m*s-f*r*c+t*m*c+a*r*y-t*l*y)*b,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*b,e[8]=_*b,e[9]=(f*u*s-h*g*s-f*n*p+t*g*p+h*n*y-t*u*y)*b,e[10]=(a*g*s-f*o*s+f*n*c-t*g*c-a*n*y+t*o*y)*b,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*b,e[12]=M*b,e[13]=(h*g*r-f*u*r+f*n*d-t*g*d-h*n*m+t*u*m)*b,e[14]=(f*o*r-a*g*r-f*n*l+t*g*l+a*n*m-t*o*m)*b,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*b,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,g=a*h,m=a*u,y=o*u,v=l*c,x=l*h,_=l*u,M=n.x,E=n.y,b=n.z;return r[0]=(1-(g+y))*M,r[1]=(p+_)*M,r[2]=(f-x)*M,r[3]=0,r[4]=(p-_)*E,r[5]=(1-(d+y))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(f+x)*b,r[9]=(m-v)*b,r[10]=(1-(d+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=cs.set(r[0],r[1],r[2]).length(),a=cs.set(r[4],r[5],r[6]).length(),o=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);let l=1/s,c=1/a,h=1/o;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,f;if(o===Rs)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==$o)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,f,g;if(o===Rs)f=(a+s)*u,g=-2*u;else{if(o!==$o)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new T,ri=new Se,j1=new T(0,0,0),q1=new T(1,1,1),Ji=new T,yo=new T,In=new T,lp=new Se,cp=new sn,jn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Y1=0,hp=new T,hs=new sn,bi=new Se,xo=new T,sa=new T,Z1=new T,K1=new sn,up=new T(1,0,0),dp=new T(0,1,0),pp=new T(0,0,1),fp={type:"added"},J1={type:"removed"},us={type:"childadded",child:null},Wc={type:"childremoved",child:null},ht=class i extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new jn,n=new sn,r=new T(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new Ge}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(pp,e)}translateOnAxis(e,t){return hp.copy(e).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(sa,xo,this.up):bi.lookAt(xo,sa,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(bi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fp),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J1),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fp),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,Z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,K1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};ht.DEFAULT_UP=new T(0,1,0),ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new T,Si=new T,Xc=new T,wi=new T,ds=new T,ps=new T,mp=new T,jc=new T,qc=new T,Yc=new T,Zc=new lt,Kc=new lt,Jc=new lt,er=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),si.subVectors(e,t),r.cross(si);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){si.subVectors(r,t),Si.subVectors(n,t),Xc.subVectors(e,t);let a=si.dot(si),o=si.dot(Si),l=si.dot(Xc),c=Si.dot(Si),h=Si.dot(Xc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wi)!==null&&wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Zc.setScalar(0),Kc.setScalar(0),Jc.setScalar(0),Zc.fromBufferAttribute(e,t),Kc.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zc,s.x),a.addScaledVector(Kc,s.y),a.addScaledVector(Jc,s.z),a}static isFrontFacing(e,t,n,r){return si.subVectors(n,t),Si.subVectors(e,t),si.cross(Si).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),.5*si.cross(Si).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;ds.subVectors(r,n),ps.subVectors(s,n),jc.subVectors(e,n);let l=ds.dot(jc),c=ps.dot(jc);if(l<=0&&c<=0)return t.copy(n);qc.subVectors(e,r);let h=ds.dot(qc),u=ps.dot(qc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ds,a);Yc.subVectors(e,s);let p=ds.dot(Yc),f=ps.dot(Yc);if(f>=0&&p<=f)return t.copy(s);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(ps,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return mp.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(mp,o);let y=1/(m+g+d);return a=g*y,o=d*y,t.copy(n).addScaledVector(ds,a).addScaledVector(ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},_o={h:0,s:0,l:0};function $c(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Zh(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$c(a,s,e+1/3),this.g=$c(a,s,e),this.b=$c(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=Bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Je.fromWorkingColorSpace(nn.copy(this),e),65536*Math.round(It(255*nn.r,0,255))+256*Math.round(It(255*nn.g,0,255))+Math.round(It(255*nn.b,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=wt){Je.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(_o);let n=ma($i.h,_o.h,t),r=ma($i.s,_o.s,t),s=ma($i.l,_o.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new me;me.NAMES=Bf;var $1=0,Tn=class extends ar{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=Wn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=xh,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yh&&(n.blendSrc=this.blendSrc),this.blendDst!==xh&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qt=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},C_=Q1();function Q1(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Dt=new T,Mo=new le,mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yh,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}};var tl=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nl=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ev=0,Vn=new Se,Qc=new ht,fs=new T,Ln=new an,aa=new an,Wt=new T,Be=class i extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?nl:tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Ln.min,aa.min),Ln.expandByPoint(Wt),Wt.addVectors(Ln.max,aa.max),Ln.expandByPoint(Wt)):(Ln.expandByPoint(aa.min),Ln.expandByPoint(aa.max))}Ln.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Wt.add(fs)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new T,l[S]=new T;let c=new T,h=new T,u=new T,d=new le,p=new le,f=new le,g=new T,m=new T;function y(S,w,P){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,P),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),f.fromBufferAttribute(s,P),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let D=1/(p.x*f.y-f.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(D),o[S].add(g),o[w].add(g),o[P].add(g),l[S].add(m),l[w].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,w=v.length;S<w;++S){let P=v[S],D=P.start;for(let N=D,z=D+P.count;N<z;N+=3)y(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let x=new T,_=new T,M=new T,E=new T;function b(S){M.fromBufferAttribute(r,S),E.copy(M);let w=o[S];x.copy(w),x.sub(M.multiplyScalar(M.dot(w))).normalize(),_.crossVectors(E,w);let P=_.dot(l[S])<0?-1:1;a.setXYZW(S,x.x,x.y,x.z,P)}for(let S=0,w=v.length;S<w;++S){let P=v[S],D=P.start;for(let N=D,z=D+P.count;N<z;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)d[f++]=c[p++]}return new mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gp=new Se,Rr=new Ur,Eo=new En,vp=new T,To=new T,bo=new T,So=new T,eh=new T,wo=new T,yp=new T,Ao=new T,te=class extends ht{constructor(e=new Be,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(eh.fromBufferAttribute(u,e),a?wo.addScaledVector(eh,h):wo.addScaledVector(eh.sub(t),h))}t.add(wo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),Eo.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Eo,vp)===null||Rr.origin.distanceToSquared(vp)>(e.far-e.near)**2))return;gp.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(gp),n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Rr)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)r=Ro(this,y,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)r=Ro(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)r=Ro(this,y,e,n,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)r=Ro(this,a,e,n,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Ro(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,To),i.getVertexPosition(l,bo),i.getVertexPosition(c,So);let h=(function(u,d,p,f,g,m,y,v){let x;if(x=d.side===1?f.intersectTriangle(y,m,g,!0,v):f.intersectTriangle(g,m,y,d.side===0,v),x===null)return null;Ao.copy(v),Ao.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(Ao);return _<p.near||_>p.far?null:{distance:_,point:Ao.clone(),object:u}})(i,e,t,n,To,bo,So,yp);if(h){let u=new T;er.getBarycoord(yp,To,bo,So,u),r&&(h.uv=er.getInterpolatedAttribute(r,o,l,c,u,new le)),s&&(h.uv1=er.getInterpolatedAttribute(s,o,l,c,u,new le)),a&&(h.normal=er.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};er.getNormal(To,bo,So,d.normal),h.face=d,h.barycoord=u}return h}var Et=class i extends Be{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(g,m,y,v,x,_,M,E,b,S,w){let P=_/b,D=M/S,N=_/2,z=M/2,G=E/2,K=b+1,J=S+1,W=0,Y=0,ee=new T;for(let ie=0;ie<J;ie++){let j=ie*D-z;for(let B=0;B<K;B++){let Z=B*P-N;ee[g]=Z*v,ee[m]=j*x,ee[y]=G,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[y]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(B/b),u.push(1-ie/S),W+=1}}for(let ie=0;ie<S;ie++)for(let j=0;j<b;j++){let B=d+j+K*ie,Z=d+j+K*(ie+1),oe=d+(j+1)+K*(ie+1),$=d+(j+1)+K*ie;l.push(B,Z,$),l.push(Z,oe,$),Y+=6}o.addGroup(p,Y,w),p+=Y,d+=W}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Ps(i[t]);for(let r in n)e[r]=n[r]}return e}function kf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var hi={clone:Ps,merge:fn},Nt=class extends Tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ba=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Rs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new T,xp=new le,_p=new le,Bt=class extends ba{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Cs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ms*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Cs*Math.atan(Math.tan(.5*Ms*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,xp,_p),t.subVectors(_p,xp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ms*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=-90,Qh=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(ms,1,e,t);r.layers=this.layers,this.add(r);let s=new Bt(ms,1,e,t);s.layers=this.layers,this.add(s);let a=new Bt(ms,1,e,t);a.layers=this.layers,this.add(a);let o=new Bt(ms,1,e,t);o.layers=this.layers,this.add(o);let l=new Bt(ms,1,e,t);l.layers=this.layers,this.add(l);let c=new Bt(ms,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Rs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==$o)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},il=class extends Xt{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:bs,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eu=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new il(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Et(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new te(r,s),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Dn),new Qh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},th=new T,tv=new T,nv=new Ge,Ri=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=th.subVectors(n,t).cross(tv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(th),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nv.getNormalMatrix(e),r=this.coplanarPoint(th).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cr=new En,Co=new T,or=class{constructor(e=new Ri,t=new Ri,n=new Ri,r=new Ri,s=new Ri,a=new Ri){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],g=r[10],m=r[11],y=r[12],v=r[13],x=r[14],_=r[15];if(n[0].setComponents(l-s,d-c,m-p,_-y).normalize(),n[1].setComponents(l+s,d+c,m+p,_+y).normalize(),n[2].setComponents(l+a,d+h,m+f,_+v).normalize(),n[3].setComponents(l-a,d-h,m-f,_-v).normalize(),n[4].setComponents(l-o,d-u,m-g,_-x).normalize(),t===Rs)n[5].setComponents(l+o,d+u,m+g,_+x).normalize();else{if(t!==$o)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function iv(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var gn=class i extends Be{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],g=[],m=[];for(let y=0;y<h;y++){let v=y*d-a;for(let x=0;x<c;x++){let _=x*u-s;f.push(_,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){let x=v+c*y,_=v+c*(y+1),M=v+1+c*(y+1),E=v+1+c*y;p.push(x,_,E),p.push(_,M,E)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},xe={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mi={basic:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new me(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:fn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:fn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new me(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:fn([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:fn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:fn([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:fn([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:fn([xe.common,xe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:fn([xe.lights,xe.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};mi.physical={uniforms:fn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Po={r:0,b:0,g:0},Pr=new jn,rv=new Se;function sv(i,e,t,n,r,s,a){let o=new me(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let y=m.isScene===!0?m.background:null;return y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y}function g(m,y){m.getRGB(Po,kf(i)),n.buffers.color.setClear(Po.r,Po.g,Po.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(m,y=1){o.set(m),h=y,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:function(m){let y=!1,v=f(m);v===null?g(o,h):v&&v.isColor&&(g(v,1),y=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,y){let v=f(y);v&&(v.isCubeTexture||v.mapping===Dl)?(c===void 0&&(c=new te(new Et(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Ps(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,_,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Pr.copy(y.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Pr)),c.material.toneMapped=Je.getTransfer(v.colorSpace)!==ct,u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new te(new gn(2,2),new Nt({name:"BackgroundMaterial",uniforms:Ps(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function av(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(y){return i.bindVertexArray(y)}function l(y){return i.deleteVertexArray(y)}function c(y){let v=[],x=[],_=[];for(let M=0;M<t;M++)v[M]=0,x[M]=0,_[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:_,object:y,attributes:{},index:null}}function h(){let y=s.newAttributes;for(let v=0,x=y.length;v<x;v++)y[v]=0}function u(y){d(y,0)}function d(y,v){let x=s.newAttributes,_=s.enabledAttributes,M=s.attributeDivisors;x[y]=1,_[y]===0&&(i.enableVertexAttribArray(y),_[y]=1),M[y]!==v&&(i.vertexAttribDivisor(y,v),M[y]=v)}function p(){let y=s.newAttributes,v=s.enabledAttributes;for(let x=0,_=v.length;x<_;x++)v[x]!==y[x]&&(i.disableVertexAttribArray(x),v[x]=0)}function f(y,v,x,_,M,E,b){b===!0?i.vertexAttribIPointer(y,v,x,M,E):i.vertexAttribPointer(y,v,x,_,M,E)}function g(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(y,v,x,_,M){let E=!1,b=(function(S,w,P){let D=P.wireframe===!0,N=n[S.id];N===void 0&&(N={},n[S.id]=N);let z=N[w.id];z===void 0&&(z={},N[w.id]=z);let G=z[D];return G===void 0&&(G=c(i.createVertexArray()),z[D]=G),G})(_,x,v);s!==b&&(s=b,o(s.object)),E=(function(S,w,P,D){let N=s.attributes,z=w.attributes,G=0,K=P.getAttributes();for(let J in K)if(K[J].location>=0){let W=N[J],Y=z[J];if(Y===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),W===void 0||W.attribute!==Y||Y&&W.data!==Y.data)return!0;G++}return s.attributesNum!==G||s.index!==D})(y,_,x,M),E&&(function(S,w,P,D){let N={},z=w.attributes,G=0,K=P.getAttributes();for(let J in K)if(K[J].location>=0){let W=z[J];W===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));let Y={};Y.attribute=W,W&&W.data&&(Y.data=W.data),N[J]=Y,G++}s.attributes=N,s.attributesNum=G,s.index=D})(y,_,x,M),M!==null&&e.update(M,i.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(S,w,P,D){h();let N=D.attributes,z=P.getAttributes(),G=w.defaultAttributeValues;for(let K in z){let J=z[K];if(J.location>=0){let W=N[K];if(W===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){let Y=W.normalized,ee=W.itemSize,ie=e.get(W);if(ie===void 0)continue;let j=ie.buffer,B=ie.type,Z=ie.bytesPerElement,oe=B===i.INT||B===i.UNSIGNED_INT||W.gpuType===Vu;if(W.isInterleavedBufferAttribute){let $=W.data,C=$.stride,R=W.offset;if($.isInstancedInterleavedBuffer){for(let F=0;F<J.locationSize;F++)d(J.location+F,$.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let F=0;F<J.locationSize;F++)u(J.location+F);i.bindBuffer(i.ARRAY_BUFFER,j);for(let F=0;F<J.locationSize;F++)f(J.location+F,ee/J.locationSize,B,Y,C*Z,(R+ee/J.locationSize*F)*Z,oe)}else{if(W.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)d(J.location+$,W.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let $=0;$<J.locationSize;$++)u(J.location+$);i.bindBuffer(i.ARRAY_BUFFER,j);for(let $=0;$<J.locationSize;$++)f(J.location+$,ee/J.locationSize,B,Y,ee*Z,ee/J.locationSize*$*Z,oe)}}else if(G!==void 0){let Y=G[K];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(J.location,Y);break;case 3:i.vertexAttrib3fv(J.location,Y);break;case 4:i.vertexAttrib4fv(J.location,Y);break;default:i.vertexAttrib1fv(J.location,Y)}}}}p()})(y,v,x,_),M!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:g,resetDefaultState:m,dispose:function(){g();for(let y in n){let v=n[y];for(let x in v){let _=v[x];for(let M in _)l(_[M].object),delete _[M];delete v[x]}delete n[y]}},releaseStatesOfGeometry:function(y){if(n[y.id]===void 0)return;let v=n[y.id];for(let x in v){let _=v[x];for(let M in _)l(_[M].object),delete _[M];delete v[x]}delete n[y.id]},releaseStatesOfProgram:function(y){for(let v in n){let x=n[v];if(x[y.id]===void 0)continue;let _=x[y.id];for(let M in _)l(_[M].object),delete _[M];delete x[y.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function ov(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function lv(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===Nn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==vi&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==oi&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function cv(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Ri,o=new Ge,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=d+4*f,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==f;++v,x+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=s?0:n,v=4*y,x=m.clippingState||null;l.value=x,x=c(p,u,v,d);for(let _=0;_!==v;++_)x[_]=t[_];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function hv(i){let e=new WeakMap;function t(r,s){return s===_h?r.mapping=bs:s===Mh&&(r.mapping=Ss),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===_h||s===Mh){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new eu(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var lr=class extends ba{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mp=[.125,.215,.35,.446,.526,.582],oa=20,nh=new lr,Ep=new me,ih=null,rh=0,sh=0,ah=!1,Lr=(1+Math.sqrt(5))/2,gs=1/Lr,Tp=[new T(-Lr,gs,0),new T(Lr,gs,0),new T(-gs,0,Lr),new T(gs,0,Lr),new T(0,Lr,-gs),new T(0,Lr,gs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],rl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,rh,sh),this._renderer.xr.enabled=ah,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Zn,format:Nn,colorSpace:ln,depthBuffer:!1},r=bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Mp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Mp[d-a+4-1]:d===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,y=1+g,v=[m,m,y,m,y,y,m,m,y,y,m,y],x=6,_=6,M=3,E=2,b=1,S=new Float32Array(M*_*x),w=new Float32Array(E*_*x),P=new Float32Array(b*_*x);for(let N=0;N<x;N++){let z=N%3*2/3-1,G=N>2?0:-1,K=[z,G,0,z+2/3,G,0,z+2/3,G+1,0,z,G,0,z+2/3,G+1,0,z,G+1,0];S.set(K,M*_*N),w.set(v,E*_*N);let J=[N,N,N,N,N,N];P.set(J,b*_*N)}let D=new Be;D.setAttribute("position",new mt(S,M)),D.setAttribute("uv",new mt(w,E)),D.setAttribute("faceIndex",new mt(P,b)),o.push(D),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(oa),h=new T(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:oa,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,nh)}_sceneToCubeUV(e,t,n,r){let s=new Bt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ep),l.toneMapping=0,l.autoClear=!1;let u=new Qt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new te(new Et,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Ep),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let y=this._cubeSize;Io(r,m*y,g>2?y:0,y,y),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===bs||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Io(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,nh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tp[(r-s-1)%Tp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new te(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):oa;g>oa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],y=0;for(let _=0;_<oa;++_){let M=_/f,E=Math.exp(-M*M/2);m.push(E),_===0?y+=E:_<g&&(y+=2*E)}for(let _=0;_<m.length;_++)m[_]=m[_]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let x=this._sizeLods[r];Io(t,3*x*(r>v-4?r-v+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,nh)}};function bp(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=Dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sp(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function wp(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
	`}function uv(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===_h||s===Mh,o=s===bs||s===Ss;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new rl(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new rl(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function dv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&pa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pv(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,y=g.length;m<y;m+=3){let v=g[m+0],x=g[m+1],_=g[m+2];c.push(v,x,x,_,_,v)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,y=g.length/3-1;m<y;m+=3){let v=m+0,x=m+1,_=m+2;c.push(v,x,x,_,_,v)}}}let p=new(Ff(c)?nl:tl)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function fv(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function mv(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function gv(i,e,t){let n=new WeakMap,r=new lt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let x=a.attributes.position.count*v,_=1;x>e.maxTextureSize&&(_=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*_*4*h),E=new el(M,x,_,h);E.type=oi,E.needsUpdate=!0;let b=4*v;for(let w=0;w<h;w++){let P=g[w],D=m[w],N=y[w],z=x*_*4*w;for(let G=0;G<P.count;G++){let K=G*b;d===!0&&(r.fromBufferAttribute(P,G),M[z+K+0]=r.x,M[z+K+1]=r.y,M[z+K+2]=r.z,M[z+K+3]=0),p===!0&&(r.fromBufferAttribute(D,G),M[z+K+4]=r.x,M[z+K+5]=r.y,M[z+K+6]=r.z,M[z+K+7]=0),f===!0&&(r.fromBufferAttribute(N,G),M[z+K+8]=r.x,M[z+K+9]=r.y,M[z+K+10]=r.z,M[z+K+11]=N.itemSize===4?r.w:1)}}u={count:h,texture:E,size:new le(x,_)},n.set(a,u),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function vv(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Is=class extends Xt{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==Ma&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ma&&(n=Nr),n===void 0&&h===sr&&(n=rr),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vf=new Xt,Ap=new Is(1,1),Gf=new el,Wf=new $h,Xf=new il,Rp=[],Cp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Lp=new Float32Array(4);function Hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Rp[r];if(s===void 0&&(s=new Float32Array(r),Rp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hl(i,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xv(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Lp.set(n),i.uniformMatrix2fv(this.addr,!1,Lp),zt(t,n)}}function Tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),zt(t,n)}}function bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Pp.set(n),i.uniformMatrix4fv(this.addr,!1,Pp),zt(t,n)}}function Sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wv(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pv(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Lv(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Dv(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Ap.compareFunction=515,s=Ap):s=Vf,t.setTexture2D(e||s,r)}function Nv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wf,r)}function Uv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xf,r)}function Ov(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gf,r)}function Hv(i,e){i.uniform1fv(this.addr,e)}function Fv(i,e){let t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function Bv(i,e){let t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function kv(i,e){let t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function zv(i,e){let t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vv(i,e){let t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gv(i,e){let t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wv(i,e){i.uniform1iv(this.addr,e)}function Xv(i,e){i.uniform2iv(this.addr,e)}function jv(i,e){i.uniform3iv(this.addr,e)}function qv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function Zv(i,e){i.uniform2uiv(this.addr,e)}function Kv(i,e){i.uniform3uiv(this.addr,e)}function Jv(i,e){i.uniform4uiv(this.addr,e)}function $v(i,e,t){let n=this.cache,r=e.length,s=Hl(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vf,s[a])}function Qv(i,e,t){let n=this.cache,r=e.length,s=Hl(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wf,s[a])}function ey(i,e,t){let n=this.cache,r=e.length,s=Hl(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xf,s[a])}function ty(i,e,t){let n=this.cache,r=e.length,s=Hl(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gf,s[a])}var tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return yv;case 35664:return xv;case 35665:return _v;case 35666:return Mv;case 35674:return Ev;case 35675:return Tv;case 35676:return bv;case 5124:case 35670:return Sv;case 35667:case 35671:return wv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Iv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Ov}})(t.type)}},nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Hv;case 35664:return Fv;case 35665:return Bv;case 35666:return kv;case 35674:return zv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return jv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return Zv;case 36295:return Kv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}})(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Dp(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){let n=i.name,r=n.length;for(oh.lastIndex=0;;){let s=oh.exec(n),a=oh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Dp(t,c===void 0?new tu(o,i,e):new nu(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new iu(o),Dp(t,h)),t=h}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);ny(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Np(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iy=0,Up=new Ge;function Op(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function ry(i,e){let t=(function(n){Je._getMatrix(Up,Je.workingColorSpace,n);let r=`mat3( ${Up.elements.map((s=>s.toFixed(4)))} )`;switch(Je.getTransfer(n)){case Ul:return[r,"LinearTransferOETF"];case ct:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sy(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lo=new T;function ay(){return Je.getLuminanceCoefficients(Lo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Lo.x.toFixed(4)}, ${Lo.y.toFixed(4)}, ${Lo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function la(i){return i!==""}function Hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(i){return i.replace(oy,cy)}var ly=new Map;function cy(i,e){let t=qe[e];if(t===void 0){let n=ly.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return ru(t)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(hy,uy)}function uy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kp(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dy(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(D){let N="SHADOWMAP_TYPE_BASIC";return D.shadowMapType===1?N="SHADOWMAP_TYPE_PCF":D.shadowMapType===2?N="SHADOWMAP_TYPE_PCF_SOFT":D.shadowMapType===3&&(N="SHADOWMAP_TYPE_VSM"),N})(t),c=(function(D){let N="ENVMAP_TYPE_CUBE";if(D.envMap)switch(D.envMapMode){case bs:case Ss:N="ENVMAP_TYPE_CUBE";break;case Dl:N="ENVMAP_TYPE_CUBE_UV"}return N})(t),h=(function(D){let N="ENVMAP_MODE_REFLECTION";return D.envMap&&D.envMapMode===Ss&&(N="ENVMAP_MODE_REFRACTION"),N})(t),u=(function(D){let N="ENVMAP_BLENDING_NONE";if(D.envMap)switch(D.combine){case 0:N="ENVMAP_BLENDING_MULTIPLY";break;case 1:N="ENVMAP_BLENDING_MIX";break;case 2:N="ENVMAP_BLENDING_ADD"}return N})(t),d=(function(D){let N=D.envMapCubeUVHeight;if(N===null)return null;let z=Math.log2(N)-2,G=1/N;return{texelWidth:1/(3*Math.max(Math.pow(2,z),112)),texelHeight:G,maxMip:z}})(t),p=(function(D){return[D.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",D.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)})(t),f=(function(D){let N=[];for(let z in D){let G=D[z];G!==!1&&N.push("#define "+z+" "+G)}return N.join(`
`)})(s),g=r.createProgram(),m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(la).join(`
`),m.length>0&&(m+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(la).join(`
`),y.length>0&&(y+=`
`)):(m=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),y=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?qe.tonemapping_pars_fragment:"",t.toneMapping!==0?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),a=ru(a),a=Hp(a,t),a=Fp(a,t),o=ru(o),o=Hp(o,t),o=Fp(o,t),a=Bp(a),o=Bp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",t.glslVersion===Q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let x=v+m+a,_=v+y+o,M=Np(r,r.VERTEX_SHADER,x),E=Np(r,r.FRAGMENT_SHADER,_);function b(D){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(M).trim(),G=r.getShaderInfoLog(E).trim(),K=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,M,E);else{let W=Op(r,M,"vertex"),Y=Op(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+W+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):z!==""&&G!==""||(J=!1);J&&(D.diagnostics={runnable:K,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:y}})}r.deleteShader(M),r.deleteShader(E),S=new Ts(r,g),w=(function(N,z){let G={},K=N.getProgramParameter(z,N.ACTIVE_ATTRIBUTES);for(let J=0;J<K;J++){let W=N.getActiveAttrib(z,J),Y=W.name,ee=1;W.type===N.FLOAT_MAT2&&(ee=2),W.type===N.FLOAT_MAT3&&(ee=3),W.type===N.FLOAT_MAT4&&(ee=4),G[Y]={type:W.type,location:N.getAttribLocation(z,Y),locationSize:ee}}return G})(r,g)}let S,w;r.attachShader(g,M),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),this.getUniforms=function(){return S===void 0&&b(this),S},this.getAttributes=function(){return w===void 0&&b(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(g,37297)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}var py=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new au(e),t.set(e,n)),n}},au=class{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}};function fy(i,e,t,n,r,s,a){let o=new Ta,l=new su,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,y,v,x,_){let M=x.fog,E=_.geometry,b=m.isMeshStandardMaterial?x.environment:null,S=(m.isMeshStandardMaterial?t:e).get(m.envMap||b),w=S&&S.mapping===Dl?S.image.height:null,P=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let D=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,N=D!==void 0?D.length:0,z,G,K,J,W=0;if(E.morphAttributes.position!==void 0&&(W=1),E.morphAttributes.normal!==void 0&&(W=2),E.morphAttributes.color!==void 0&&(W=3),P){let Qn=mi[P];z=Qn.vertexShader,G=Qn.fragmentShader}else z=m.vertexShader,G=m.fragmentShader,l.update(m),K=l.getVertexShaderID(m),J=l.getFragmentShaderID(m);let Y=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),ie=_.isInstancedMesh===!0,j=_.isBatchedMesh===!0,B=!!m.map,Z=!!m.matcap,oe=!!S,$=!!m.aoMap,C=!!m.lightMap,R=!!m.bumpMap,F=!!m.normalMap,U=!!m.displacementMap,I=!!m.emissiveMap,O=!!m.metalnessMap,A=!!m.roughnessMap,H=m.anisotropy>0,k=m.clearcoat>0,ne=m.dispersion>0,V=m.iridescence>0,se=m.sheen>0,ae=m.transmission>0,ce=H&&!!m.anisotropyMap,ye=k&&!!m.clearcoatMap,ge=k&&!!m.clearcoatNormalMap,Ee=k&&!!m.clearcoatRoughnessMap,Pe=V&&!!m.iridescenceMap,Ke=V&&!!m.iridescenceThicknessMap,ze=se&&!!m.sheenColorMap,Re=se&&!!m.sheenRoughnessMap,nt=!!m.specularMap,at=!!m.specularColorMap,dt=!!m.specularIntensityMap,Te=ae&&!!m.transmissionMap,Fe=ae&&!!m.thicknessMap,pt=!!m.gradientMap,Wi=!!m.alphaMap,ns=m.alphaTest>0,Cn=!!m.alphaHash,kn=!!m.extensions,Pn=0;m.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(Pn=i.toneMapping));let X={shaderID:P,shaderType:m.type,shaderName:m.name,vertexShader:z,fragmentShader:G,defines:m.defines,customVertexShaderID:K,customFragmentShaderID:J,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:j,batchingColor:j&&_._colorsTexture!==null,instancing:ie,instancingColor:ie&&_.instanceColor!==null,instancingMorph:ie&&_.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ln,alphaToCoverage:!!m.alphaToCoverage,map:B,matcap:Z,envMap:oe,envMapMode:oe&&S.mapping,envMapCubeUVHeight:w,aoMap:$,lightMap:C,bumpMap:R,normalMap:F,displacementMap:d&&U,emissiveMap:I,normalMapObjectSpace:F&&m.normalMapType===1,normalMapTangentSpace:F&&m.normalMapType===0,metalnessMap:O,roughnessMap:A,anisotropy:H,anisotropyMap:ce,clearcoat:k,clearcoatMap:ye,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ee,dispersion:ne,iridescence:V,iridescenceMap:Pe,iridescenceThicknessMap:Ke,sheen:se,sheenColorMap:ze,sheenRoughnessMap:Re,specularMap:nt,specularColorMap:at,specularIntensityMap:dt,transmission:ae,transmissionMap:Te,thicknessMap:Fe,gradientMap:pt,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Wi,alphaTest:ns,alphaHash:Cn,combine:m.combine,mapUv:B&&g(m.map.channel),aoMapUv:$&&g(m.aoMap.channel),lightMapUv:C&&g(m.lightMap.channel),bumpMapUv:R&&g(m.bumpMap.channel),normalMapUv:F&&g(m.normalMap.channel),displacementMapUv:U&&g(m.displacementMap.channel),emissiveMapUv:I&&g(m.emissiveMap.channel),metalnessMapUv:O&&g(m.metalnessMap.channel),roughnessMapUv:A&&g(m.roughnessMap.channel),anisotropyMapUv:ce&&g(m.anisotropyMap.channel),clearcoatMapUv:ye&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(m.sheenRoughnessMap.channel),specularMapUv:nt&&g(m.specularMap.channel),specularColorMapUv:at&&g(m.specularColorMap.channel),specularIntensityMapUv:dt&&g(m.specularIntensityMap.channel),transmissionMapUv:Te&&g(m.transmissionMap.channel),thicknessMapUv:Fe&&g(m.thicknessMap.channel),alphaMapUv:Wi&&g(m.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(F||H),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!E.attributes.uv&&(B||Wi),fog:!!M,useFog:m.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pn,decodeVideoTexture:B&&m.map.isVideoTexture===!0&&Je.getTransfer(m.map.colorSpace)===ct,decodeVideoTextureEmissive:I&&m.emissiveMap.isVideoTexture===!0&&Je.getTransfer(m.emissiveMap.colorSpace)===ct,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:kn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kn&&m.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return X.vertexUv1s=c.has(1),X.vertexUv2s=c.has(2),X.vertexUv3s=c.has(3),c.clear(),X},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)y.push(v),y.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(y,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(y,m),y.push(i.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],v;if(y){let x=mi[y];v=hi.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,y){let v;for(let x=0,_=h.length;x<_;x++){let M=h[x];if(M.cacheKey===y){v=M,++v.usedTimes;break}}return v===void 0&&(v=new dy(i,y,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let y=h.indexOf(m);h[y]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function my(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vp(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||gy),n.length>1&&n.sort(o||zp),r.length>1&&r.sort(o||zp)}}}function vy(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Vp,i.set(e,[r])):t>=n.length?(r=new Vp,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function yy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new me};break;case"SpotLight":t={position:new T,direction:new T,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new T,halfWidth:new T,halfHeight:new T}}return i[e.id]=t,t}}}var xy=0;function _y(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function My(i){let e=new yy,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new T);let r=new T,s=new Se,a=new Se;return{setup:function(o){let l=0,c=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,d=0,p=0,f=0,g=0,m=0,y=0,v=0,x=0,_=0,M=0;o.sort(_y);for(let b=0,S=o.length;b<S;b++){let w=o[b],P=w.color,D=w.intensity,N=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)l+=P.r*D,c+=P.g*D,h+=P.b*D;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],D);M++}else if(w.isDirectionalLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let K=w.shadow,J=t.get(w);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.directionalShadow[u]=J,n.directionalShadowMap[u]=z,n.directionalShadowMatrix[u]=w.shadow.matrix,m++}n.directional[u]=G,u++}else if(w.isSpotLight){let G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(P).multiplyScalar(D),G.distance=N,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[p]=G;let K=w.shadow;if(w.map&&(n.spotLightMap[x]=w.map,x++,K.updateMatrices(w),w.castShadow&&_++),n.spotLightMatrix[p]=K.matrix,w.castShadow){let J=t.get(w);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.spotShadow[p]=J,n.spotShadowMap[p]=z,v++}p++}else if(w.isRectAreaLight){let G=e.get(w);G.color.copy(P).multiplyScalar(D),G.halfWidth.set(.5*w.width,0,0),G.halfHeight.set(0,.5*w.height,0),n.rectArea[f]=G,f++}else if(w.isPointLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let K=w.shadow,J=t.get(w);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,n.pointShadow[d]=J,n.pointShadowMap[d]=z,n.pointShadowMatrix[d]=w.shadow.matrix,y++}n.point[d]=G,d++}else if(w.isHemisphereLight){let G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(D),G.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[g]=G,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let E=n.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===f&&E.hemiLength===g&&E.numDirectionalShadows===m&&E.numPointShadows===y&&E.numSpotShadows===v&&E.numSpotMaps===x&&E.numLightProbes===M||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+x-_,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=M,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=f,E.hemiLength=g,E.numDirectionalShadows=m,E.numPointShadows=y,E.numSpotShadows=v,E.numSpotMaps=x,E.numLightProbes=M,n.version=xy++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let g=0,m=o.length;g<m;g++){let y=o[g];if(y.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),c++}else if(y.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(y.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*y.width,0,0),v.halfHeight.set(0,.5*y.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function Gp(i){let e=new My(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Ey(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Gp(i),e.set(t,[s])):n>=r.length?(s=new Gp(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var ou=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lu=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ty(i,e,t){let n=new or,r=new le,s=new le,a=new lt,o=new ou({depthPacking:3201}),l=new lu,c={},h=t.maxTextureSize,u={[Fu]:1,[Bu]:0,[st]:2},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Be;f.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new te(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;function v(E,b){let S=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new rn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,S,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,S,p,g,null)}function x(E,b,S,w){let P=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=P.uuid,z=b.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let K=G[z];K===void 0&&(K=P.clone(),G[z]=K,b.addEventListener("dispose",M)),P=K}return P.visible=b.visible,P.wireframe=b.wireframe,P.side=w===3?b.shadowSide!==null?b.shadowSide:b.side:b.shadowSide!==null?b.shadowSide:u[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(i.properties.get(P).light=S),P}function _(E,b,S,w,P){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let N=e.update(E),z=E.material;if(Array.isArray(z)){let G=N.groups;for(let K=0,J=G.length;K<J;K++){let W=G[K],Y=z[W.materialIndex];if(Y&&Y.visible){let ee=x(E,Y,w,P);E.onBeforeShadow(i,E,b,S,N,ee,W),i.renderBufferDirect(S,null,N,ee,E,W),E.onAfterShadow(i,E,b,S,N,ee,W)}}}else if(z.visible){let G=x(E,z,w,P);E.onBeforeShadow(i,E,b,S,N,G,null),i.renderBufferDirect(S,null,N,G,E,null),E.onAfterShadow(i,E,b,S,N,G,null)}}let D=E.children;for(let N=0,z=D.length;N<z;N++)_(D[N],b,S,w,P)}function M(E){E.target.removeEventListener("dispose",M);for(let b in c){let S=c[b],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}this.render=function(E,b,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(0),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=y!==3&&this.type===3,G=y===3&&this.type!==3;for(let K=0,J=E.length;K<J;K++){let W=E[K],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);let ee=Y.getFrameExtents();if(r.multiply(ee),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,Y.mapSize.y=s.y)),Y.map===null||z===!0||G===!0){let j=this.type!==3?{minFilter:$t,magFilter:$t}:{};Y.map!==null&&Y.map.dispose(),Y.map=new rn(r.x,r.y,j),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ie=Y.getViewportCount();for(let j=0;j<ie;j++){let B=Y.getViewport(j);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),N.viewport(a),Y.updateMatrices(W,j),n=Y.getFrustum(),_(b,S,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===3&&v(Y,S),Y.needsUpdate=!1}y=this.type,m.needsUpdate=!1,i.setRenderTarget(w,P,D)}}var by={[S1]:1,[A1]:6,[C1]:7,[R1]:5,[w1]:0,[I1]:2,[L1]:4,[P1]:3};function Sy(i,e){let t=new function(){let A=!1,H=new lt,k=null,ne=new lt(0,0,0,0);return{setMask:function(V){k===V||A||(i.colorMask(V,V,V,V),k=V)},setLocked:function(V){A=V},setClear:function(V,se,ae,ce,ye){ye===!0&&(V*=ce,se*=ce,ae*=ce),H.set(V,se,ae,ce),ne.equals(H)===!1&&(i.clearColor(V,se,ae,ce),ne.copy(H))},reset:function(){A=!1,k=null,ne.set(-1,0,0,0)}}},n=new function(){let A=!1,H=!1,k=null,ne=null,V=null;return{setReversed:function(se){if(H!==se){let ae=e.get("EXT_clip_control");H?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let ce=V;V=null,this.setClear(ce)}H=se},getReversed:function(){return H},setTest:function(se){se?oe(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(se){k===se||A||(i.depthMask(se),k=se)},setFunc:function(se){if(H&&(se=by[se]),ne!==se){switch(se){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}ne=se}},setLocked:function(se){A=se},setClear:function(se){V!==se&&(H&&(se=1-se),i.clearDepth(se),V=se)},reset:function(){A=!1,k=null,ne=null,V=null,H=!1}}},r=new function(){let A=!1,H=null,k=null,ne=null,V=null,se=null,ae=null,ce=null,ye=null;return{setTest:function(ge){A||(ge?oe(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ge){H===ge||A||(i.stencilMask(ge),H=ge)},setFunc:function(ge,Ee,Pe){k===ge&&ne===Ee&&V===Pe||(i.stencilFunc(ge,Ee,Pe),k=ge,ne=Ee,V=Pe)},setOp:function(ge,Ee,Pe){se===ge&&ae===Ee&&ce===Pe||(i.stencilOp(ge,Ee,Pe),se=ge,ae=Ee,ce=Pe)},setLocked:function(ge){A=ge},setClear:function(ge){ye!==ge&&(i.clearStencil(ge),ye=ge)},reset:function(){A=!1,H=null,k=null,ne=null,V=null,se=null,ae=null,ce=null,ye=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,y=null,v=null,x=null,_=new me(0,0,0),M=0,E=!1,b=null,S=null,w=null,P=null,D=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,G=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=G>=2);let J=null,W={},Y=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),ie=new lt().fromArray(Y),j=new lt().fromArray(ee);function B(A,H,k,ne){let V=new Uint8Array(4),se=i.createTexture();i.bindTexture(A,se),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<k;ae++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,V):i.texImage2D(H+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,V);return se}let Z={};function oe(A){o[A]!==!0&&(i.enable(A),o[A]=!0)}function $(A){o[A]!==!1&&(i.disable(A),o[A]=!1)}Z[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),oe(i.DEPTH_TEST),n.setFunc(3),U(!1),I(1),oe(i.CULL_FACE),F(0);let C={[Gn]:i.FUNC_ADD,[p1]:i.FUNC_SUBTRACT,[f1]:i.FUNC_REVERSE_SUBTRACT};C[103]=i.MIN,C[104]=i.MAX;let R={[Os]:i.ZERO,[m1]:i.ONE,[g1]:i.SRC_COLOR,[yh]:i.SRC_ALPHA,[_1]:i.SRC_ALPHA_SATURATE,[Il]:i.DST_COLOR,[Pl]:i.DST_ALPHA,[v1]:i.ONE_MINUS_SRC_COLOR,[xh]:i.ONE_MINUS_SRC_ALPHA,[x1]:i.ONE_MINUS_DST_COLOR,[y1]:i.ONE_MINUS_DST_ALPHA,[M1]:i.CONSTANT_COLOR,[E1]:i.ONE_MINUS_CONSTANT_COLOR,[T1]:i.CONSTANT_ALPHA,[b1]:i.ONE_MINUS_CONSTANT_ALPHA};function F(A,H,k,ne,V,se,ae,ce,ye,ge){if(A!==0){if(d===!1&&(oe(i.BLEND),d=!0),A===5)V=V||H,se=se||k,ae=ae||ne,H===f&&V===y||(i.blendEquationSeparate(C[H],C[V]),f=H,y=V),k===g&&ne===m&&se===v&&ae===x||(i.blendFuncSeparate(R[k],R[ne],R[se],R[ae]),g=k,m=ne,v=se,x=ae),ce.equals(_)!==!1&&ye===M||(i.blendColor(ce.r,ce.g,ce.b,ye),_.copy(ce),M=ye),p=A,E=!1;else if(A!==p||ge!==E){if(f===Gn&&y===Gn||(i.blendEquation(i.FUNC_ADD),f=Gn,y=Gn),ge)switch(A){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}else switch(A){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}g=null,m=null,v=null,x=null,_.set(0,0,0),M=0,p=A,E=ge}}else d===!0&&($(i.BLEND),d=!1)}function U(A){b!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),b=A)}function I(A){A!==0?(oe(i.CULL_FACE),A!==S&&(A===1?i.cullFace(i.BACK):A===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),S=A}function O(A,H,k){A?(oe(i.POLYGON_OFFSET_FILL),P===H&&D===k||(i.polygonOffset(H,k),P=H,D=k)):$(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:oe,disable:$,bindFramebuffer:function(A,H){return l[A]!==H&&(i.bindFramebuffer(A,H),l[A]=H,A===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=H),A===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=H),!0)},drawBuffers:function(A,H){let k=h,ne=!1;if(A){k=c.get(H),k===void 0&&(k=[],c.set(H,k));let V=A.textures;if(k.length!==V.length||k[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ae=V.length;se<ae;se++)k[se]=i.COLOR_ATTACHMENT0+se;k.length=V.length,ne=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,ne=!0);ne&&i.drawBuffers(k)},useProgram:function(A){return u!==A&&(i.useProgram(A),u=A,!0)},setBlending:F,setMaterial:function(A,H){A.side===2?$(i.CULL_FACE):oe(i.CULL_FACE);let k=A.side===1;H&&(k=!k),U(k),A.blending===1&&A.transparent===!1?F(0):F(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),n.setFunc(A.depthFunc),n.setTest(A.depthTest),n.setMask(A.depthWrite),t.setMask(A.colorWrite);let ne=A.stencilWrite;r.setTest(ne),ne&&(r.setMask(A.stencilWriteMask),r.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),r.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),O(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:U,setCullFace:I,setLineWidth:function(A){A!==w&&(z&&i.lineWidth(A),w=A)},setPolygonOffset:O,setScissorTest:function(A){A?oe(i.SCISSOR_TEST):$(i.SCISSOR_TEST)},activeTexture:function(A){A===void 0&&(A=i.TEXTURE0+N-1),J!==A&&(i.activeTexture(A),J=A)},bindTexture:function(A,H,k){k===void 0&&(k=J===null?i.TEXTURE0+N-1:J);let ne=W[k];ne===void 0&&(ne={type:void 0,texture:void 0},W[k]=ne),ne.type===A&&ne.texture===H||(J!==k&&(i.activeTexture(k),J=k),i.bindTexture(A,H||Z[A]),ne.type=A,ne.texture=H)},unbindTexture:function(){let A=W[J];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},updateUBOMapping:function(A,H){let k=a.get(H);k===void 0&&(k=new WeakMap,a.set(H,k));let ne=k.get(A);ne===void 0&&(ne=i.getUniformBlockIndex(H,A.name),k.set(A,ne))},uniformBlockBinding:function(A,H){let k=a.get(H).get(A);s.get(H)!==k&&(i.uniformBlockBinding(H,k,A.__bindingPointIndex),s.set(H,k))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},scissor:function(A){ie.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),ie.copy(A))},viewport:function(A){j.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),j.copy(A))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},J=null,W={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,y=null,v=null,x=null,_=new me(0,0,0),M=0,E=!1,b=null,S=null,w=null,P=null,D=null,ie.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function Wp(i,e,t,n){let r=(function(s){switch(s){case vi:case Rf:return{byteLength:1,components:1};case _a:case Cf:case Zn:return{byteLength:2,components:1};case Gu:case Wu:return{byteLength:2,components:4};case Nr:case Vu:case oi:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case If:case Df:return i*e;case Nf:return i*e*2;case Xu:case ju:return i*e/r.components*r.byteLength;case Uf:case qu:return i*e*2/r.components*r.byteLength;case Lf:return i*e*3/r.components*r.byteLength;case Nn:case Yu:return i*e*4/r.components*r.byteLength;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Th:case Sh:return Math.max(i,16)*Math.max(e,8)/4;case Eh:case bh:return Math.max(i,8)*Math.max(e,8)/2;case wh:case Ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rh:case Ch:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jo:case Gh:case Wh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Of:case Xh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jh:case qh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wy(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,R){return p?new OffscreenCanvas(C,R):Ea("canvas")}function g(C,R,F){let U=1,I=$(C);if((I.width>F||I.height>F)&&(U=F/Math.max(I.width,I.height)),U<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let O=Math.floor(U*I.width),A=Math.floor(U*I.height);u===void 0&&(u=f(O,A));let H=R?f(O,A):u;return H.width=O,H.height=A,H.getContext("2d").drawImage(C,0,0,O,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+O+"x"+A+")."),H}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),C}return C}function m(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,R,F,U,I=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let O=R;if(R===i.RED&&(F===i.FLOAT&&(O=i.R32F),F===i.HALF_FLOAT&&(O=i.R16F),F===i.UNSIGNED_BYTE&&(O=i.R8)),R===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(O=i.R8UI),F===i.UNSIGNED_SHORT&&(O=i.R16UI),F===i.UNSIGNED_INT&&(O=i.R32UI),F===i.BYTE&&(O=i.R8I),F===i.SHORT&&(O=i.R16I),F===i.INT&&(O=i.R32I)),R===i.RG&&(F===i.FLOAT&&(O=i.RG32F),F===i.HALF_FLOAT&&(O=i.RG16F),F===i.UNSIGNED_BYTE&&(O=i.RG8)),R===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(O=i.RG8UI),F===i.UNSIGNED_SHORT&&(O=i.RG16UI),F===i.UNSIGNED_INT&&(O=i.RG32UI),F===i.BYTE&&(O=i.RG8I),F===i.SHORT&&(O=i.RG16I),F===i.INT&&(O=i.RG32I)),R===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(O=i.RGB8UI),F===i.UNSIGNED_SHORT&&(O=i.RGB16UI),F===i.UNSIGNED_INT&&(O=i.RGB32UI),F===i.BYTE&&(O=i.RGB8I),F===i.SHORT&&(O=i.RGB16I),F===i.INT&&(O=i.RGB32I)),R===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),F===i.UNSIGNED_INT&&(O=i.RGBA32UI),F===i.BYTE&&(O=i.RGBA8I),F===i.SHORT&&(O=i.RGBA16I),F===i.INT&&(O=i.RGBA32I)),R===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),R===i.RGBA){let A=I?Ul:Je.getTransfer(U);F===i.FLOAT&&(O=i.RGBA32F),F===i.HALF_FLOAT&&(O=i.RGBA16F),F===i.UNSIGNED_BYTE&&(O=A===ct?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return O!==i.R16F&&O!==i.R32F&&O!==i.RG16F&&O!==i.RG32F&&O!==i.RGBA16F&&O!==i.RGBA32F||e.get("EXT_color_buffer_float"),O}function _(C,R){let F;return C?R===null||R===Nr||R===rr?F=i.DEPTH24_STENCIL8:R===oi?F=i.DEPTH32F_STENCIL8:R===_a&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Nr||R===rr?F=i.DEPTH_COMPONENT24:R===oi?F=i.DEPTH_COMPONENT32F:R===_a&&(F=i.DEPTH_COMPONENT16),F}function M(C,R){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==Dn?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function E(C){let R=C.target;R.removeEventListener("dispose",E),(function(F){let U=n.get(F);if(U.__webglInit===void 0)return;let I=F.source,O=d.get(I);if(O){let A=O[U.__cacheKey];A.usedTimes--,A.usedTimes===0&&S(F),Object.keys(O).length===0&&d.delete(I)}n.remove(F)})(R),R.isVideoTexture&&h.delete(R)}function b(C){let R=C.target;R.removeEventListener("dispose",b),(function(F){let U=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(U.__webglFramebuffer[O]))for(let A=0;A<U.__webglFramebuffer[O].length;A++)i.deleteFramebuffer(U.__webglFramebuffer[O][A]);else i.deleteFramebuffer(U.__webglFramebuffer[O]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[O])}else{if(Array.isArray(U.__webglFramebuffer))for(let O=0;O<U.__webglFramebuffer.length;O++)i.deleteFramebuffer(U.__webglFramebuffer[O]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let O=0;O<U.__webglColorRenderbuffer.length;O++)U.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[O]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let I=F.textures;for(let O=0,A=I.length;O<A;O++){let H=n.get(I[O]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(I[O])}n.remove(F)})(R)}function S(C){let R=n.get(C);i.deleteTexture(R.__webglTexture);let F=C.source;delete d.get(F)[R.__cacheKey],a.memory.textures--}let w=0;function P(C,R){let F=n.get(C);if(C.isVideoTexture&&(function(U){let I=a.render.frame;h.get(U)!==I&&(h.set(U,I),U.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){let U=C.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void J(F,C,R);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+R)}let D={[mn]:i.REPEAT,[Dr]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},N={[$t]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},z={[N1]:i.NEVER,[z1]:i.ALWAYS,[U1]:i.LESS,[H1]:i.LEQUAL,[O1]:i.EQUAL,[k1]:i.GEQUAL,[F1]:i.GREATER,[B1]:i.NOTEQUAL};function G(C,R){if(R.type!==oi||e.has("OES_texture_float_linear")!==!1||R.magFilter!==Dn&&R.magFilter!==fa&&R.magFilter!==xs&&R.magFilter!==Ci&&R.minFilter!==Dn&&R.minFilter!==fa&&R.minFilter!==xs&&R.minFilter!==Ci||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,D[R.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,D[R.wrapT]),C!==i.TEXTURE_3D&&C!==i.TEXTURE_2D_ARRAY||i.texParameteri(C,i.TEXTURE_WRAP_R,D[R.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,N[R.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,N[R.minFilter]),R.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===$t||R.minFilter!==xs&&R.minFilter!==Ci||R.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function K(C,R){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",E));let U=R.source,I=d.get(U);I===void 0&&(I={},d.set(U,I));let O=(function(A){let H=[];return H.push(A.wrapS),H.push(A.wrapT),H.push(A.wrapR||0),H.push(A.magFilter),H.push(A.minFilter),H.push(A.anisotropy),H.push(A.internalFormat),H.push(A.format),H.push(A.type),H.push(A.generateMipmaps),H.push(A.premultiplyAlpha),H.push(A.flipY),H.push(A.unpackAlignment),H.push(A.colorSpace),H.join()})(R);if(O!==C.__cacheKey){I[O]===void 0&&(I[O]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),I[O].usedTimes++;let A=I[C.__cacheKey];A!==void 0&&(I[C.__cacheKey].usedTimes--,A.usedTimes===0&&S(R)),C.__cacheKey=O,C.__webglTexture=I[O].texture}return F}function J(C,R,F){let U=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(U=i.TEXTURE_3D);let I=K(C,R),O=R.source;t.bindTexture(U,C.__webglTexture,i.TEXTURE0+F);let A=n.get(O);if(O.version!==A.__version||I===!0){t.activeTexture(i.TEXTURE0+F);let H=Je.getPrimaries(Je.workingColorSpace),k=R.colorSpace===ys?null:Je.getPrimaries(R.colorSpace),ne=R.colorSpace===ys||H===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let V=g(R.image,!1,r.maxTextureSize);V=oe(R,V);let se=s.convert(R.format,R.colorSpace),ae=s.convert(R.type),ce,ye=x(R.internalFormat,se,ae,R.colorSpace,R.isVideoTexture);G(U,R);let ge=R.mipmaps,Ee=R.isVideoTexture!==!0,Pe=A.__version===void 0||I===!0,Ke=O.dataReady,ze=M(R,V);if(R.isDepthTexture)ye=_(R.format===sr,R.type),Pe&&(Ee?t.texStorage2D(i.TEXTURE_2D,1,ye,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,ye,V.width,V.height,0,se,ae,null));else if(R.isDataTexture)if(ge.length>0){Ee&&Pe&&t.texStorage2D(i.TEXTURE_2D,ze,ye,ge[0].width,ge[0].height);for(let Re=0,nt=ge.length;Re<nt;Re++)ce=ge[Re],Ee?Ke&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ce.width,ce.height,se,ae,ce.data):t.texImage2D(i.TEXTURE_2D,Re,ye,ce.width,ce.height,0,se,ae,ce.data);R.generateMipmaps=!1}else Ee?(Pe&&t.texStorage2D(i.TEXTURE_2D,ze,ye,V.width,V.height),Ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,V.width,V.height,se,ae,V.data)):t.texImage2D(i.TEXTURE_2D,0,ye,V.width,V.height,0,se,ae,V.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ee&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,ye,ge[0].width,ge[0].height,V.depth);for(let Re=0,nt=ge.length;Re<nt;Re++)if(ce=ge[Re],R.format!==Nn)if(se!==null)if(Ee){if(Ke)if(R.layerUpdates.size>0){let at=Wp(ce.width,ce.height,R.format,R.type);for(let dt of R.layerUpdates){let Te=ce.data.subarray(dt*at/ce.data.BYTES_PER_ELEMENT,(dt+1)*at/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,dt,ce.width,ce.height,1,se,Te)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ce.width,ce.height,V.depth,se,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,ye,ce.width,ce.height,V.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?Ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ce.width,ce.height,V.depth,se,ae,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,ye,ce.width,ce.height,V.depth,0,se,ae,ce.data)}else{Ee&&Pe&&t.texStorage2D(i.TEXTURE_2D,ze,ye,ge[0].width,ge[0].height);for(let Re=0,nt=ge.length;Re<nt;Re++)ce=ge[Re],R.format!==Nn?se!==null?Ee?Ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,ce.width,ce.height,se,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?Ke&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ce.width,ce.height,se,ae,ce.data):t.texImage2D(i.TEXTURE_2D,Re,ye,ce.width,ce.height,0,se,ae,ce.data)}else if(R.isDataArrayTexture)if(Ee){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,ye,V.width,V.height,V.depth),Ke)if(R.layerUpdates.size>0){let Re=Wp(V.width,V.height,R.format,R.type);for(let nt of R.layerUpdates){let at=V.data.subarray(nt*Re/V.data.BYTES_PER_ELEMENT,(nt+1)*Re/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,V.width,V.height,1,se,ae,at)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,se,ae,V.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,V.width,V.height,V.depth,0,se,ae,V.data);else if(R.isData3DTexture)Ee?(Pe&&t.texStorage3D(i.TEXTURE_3D,ze,ye,V.width,V.height,V.depth),Ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,se,ae,V.data)):t.texImage3D(i.TEXTURE_3D,0,ye,V.width,V.height,V.depth,0,se,ae,V.data);else if(R.isFramebufferTexture){if(Pe)if(Ee)t.texStorage2D(i.TEXTURE_2D,ze,ye,V.width,V.height);else{let Re=V.width,nt=V.height;for(let at=0;at<ze;at++)t.texImage2D(i.TEXTURE_2D,at,ye,Re,nt,0,se,ae,null),Re>>=1,nt>>=1}}else if(ge.length>0){if(Ee&&Pe){let Re=$(ge[0]);t.texStorage2D(i.TEXTURE_2D,ze,ye,Re.width,Re.height)}for(let Re=0,nt=ge.length;Re<nt;Re++)ce=ge[Re],Ee?Ke&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,se,ae,ce):t.texImage2D(i.TEXTURE_2D,Re,ye,se,ae,ce);R.generateMipmaps=!1}else if(Ee){if(Pe){let Re=$(V);t.texStorage2D(i.TEXTURE_2D,ze,ye,Re.width,Re.height)}Ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,ae,V)}else t.texImage2D(i.TEXTURE_2D,0,ye,se,ae,V);m(R)&&y(U),A.__version=O.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function W(C,R,F,U,I,O){let A=s.convert(F.format,F.colorSpace),H=s.convert(F.type),k=x(F.internalFormat,A,H,F.colorSpace),ne=n.get(R),V=n.get(F);if(V.__renderTarget=R,!ne.__hasExternalTextures){let se=Math.max(1,R.width>>O),ae=Math.max(1,R.height>>O);I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?t.texImage3D(I,O,k,se,ae,R.depth,0,A,H,null):t.texImage2D(I,O,k,se,ae,0,A,H,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Z(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,I,V.__webglTexture,0,B(R)):(I===i.TEXTURE_2D||I>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,I,V.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(C,R,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),R.depthBuffer){let U=R.depthTexture,I=U&&U.isDepthTexture?U.type:null,O=_(R.stencilBuffer,I),A=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=B(R);Z(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,O,R.width,R.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,O,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,O,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,C)}else{let U=R.textures;for(let I=0;I<U.length;I++){let O=U[I],A=s.convert(O.format,O.colorSpace),H=s.convert(O.type),k=x(O.internalFormat,A,H,O.colorSpace),ne=B(R);F&&Z(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,k,R.width,R.height):Z(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,k,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,k,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(C){let R=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==C.depthTexture){let U=C.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),U){let I=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,U.removeEventListener("dispose",I)};U.addEventListener("dispose",I),R.__depthDisposeCallback=I}R.__boundDepthTexture=U}if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(U,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(I.depthTexture);O.__renderTarget=I,O.__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),P(I.depthTexture,0);let A=O.__webglTexture,H=B(I);if(I.depthTexture.format===Ma)Z(I)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,A,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,A,0);else{if(I.depthTexture.format!==sr)throw new Error("Unknown depthTexture format");Z(I)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,A,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,A,0)}})(R.__webglFramebuffer,C)}else if(F){R.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[U]),R.__webglDepthbuffer[U]===void 0)R.__webglDepthbuffer[U]=i.createRenderbuffer(),Y(R.__webglDepthbuffer[U],C,!1);else{let I=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=R.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,O)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Y(R.__webglDepthbuffer,C,!1);else{let U=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,I)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let ie=[],j=[];function B(C){return Math.min(r.maxSamples,C.samples)}function Z(C){let R=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function oe(C,R){let F=C.colorSpace,U=C.format,I=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==ln&&F!==ys&&(Je.getTransfer(F)===ct?U===Nn&&I===vi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),R}function $(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=function(){let C=w;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),w+=1,C},this.resetTextureUnits=function(){w=0},this.setTexture2D=P,this.setTexture2DArray=function(C,R){let F=n.get(C);C.version>0&&F.__version!==C.version?J(F,C,R):t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+R)},this.setTexture3D=function(C,R){let F=n.get(C);C.version>0&&F.__version!==C.version?J(F,C,R):t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+R)},this.setTextureCube=function(C,R){let F=n.get(C);C.version>0&&F.__version!==C.version?(function(U,I,O){if(I.image.length!==6)return;let A=K(U,I),H=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+O);let k=n.get(H);if(H.version!==k.__version||A===!0){t.activeTexture(i.TEXTURE0+O);let ne=Je.getPrimaries(Je.workingColorSpace),V=I.colorSpace===ys?null:Je.getPrimaries(I.colorSpace),se=I.colorSpace===ys||ne===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ae=I.isCompressedTexture||I.image[0].isCompressedTexture,ce=I.image[0]&&I.image[0].isDataTexture,ye=[];for(let Te=0;Te<6;Te++)ye[Te]=ae||ce?ce?I.image[Te].image:I.image[Te]:g(I.image[Te],!0,r.maxCubemapSize),ye[Te]=oe(I,ye[Te]);let ge=ye[0],Ee=s.convert(I.format,I.colorSpace),Pe=s.convert(I.type),Ke=x(I.internalFormat,Ee,Pe,I.colorSpace),ze=I.isVideoTexture!==!0,Re=k.__version===void 0||A===!0,nt=H.dataReady,at,dt=M(I,ge);if(G(i.TEXTURE_CUBE_MAP,I),ae){ze&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ke,ge.width,ge.height);for(let Te=0;Te<6;Te++){at=ye[Te].mipmaps;for(let Fe=0;Fe<at.length;Fe++){let pt=at[Fe];I.format!==Nn?Ee!==null?ze?nt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe,0,0,pt.width,pt.height,Ee,pt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe,Ke,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe,0,0,pt.width,pt.height,Ee,Pe,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe,Ke,pt.width,pt.height,0,Ee,Pe,pt.data)}}}else{if(at=I.mipmaps,ze&&Re){at.length>0&&dt++;let Te=$(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ke,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ce){ze?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye[Te].width,ye[Te].height,Ee,Pe,ye[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ke,ye[Te].width,ye[Te].height,0,Ee,Pe,ye[Te].data);for(let Fe=0;Fe<at.length;Fe++){let pt=at[Fe].image[Te].image;ze?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe+1,0,0,pt.width,pt.height,Ee,Pe,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe+1,Ke,pt.width,pt.height,0,Ee,Pe,pt.data)}}else{ze?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ee,Pe,ye[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ke,Ee,Pe,ye[Te]);for(let Fe=0;Fe<at.length;Fe++){let pt=at[Fe];ze?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe+1,0,0,Ee,Pe,pt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Fe+1,Ke,Ee,Pe,pt.image[Te])}}}m(I)&&y(i.TEXTURE_CUBE_MAP),k.__version=H.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version})(F,C,R):t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+R)},this.rebindTextures=function(C,R,F){let U=n.get(C);R!==void 0&&W(U.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ee(C)},this.setupRenderTarget=function(C){let R=C.texture,F=n.get(C),U=n.get(R);C.addEventListener("dispose",b);let I=C.textures,O=C.isWebGLCubeRenderTarget===!0,A=I.length>1;if(A||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=R.version,a.memory.textures++),O){F.__webglFramebuffer=[];for(let H=0;H<6;H++)if(R.mipmaps&&R.mipmaps.length>0){F.__webglFramebuffer[H]=[];for(let k=0;k<R.mipmaps.length;k++)F.__webglFramebuffer[H][k]=i.createFramebuffer()}else F.__webglFramebuffer[H]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){F.__webglFramebuffer=[];for(let H=0;H<R.mipmaps.length;H++)F.__webglFramebuffer[H]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(A)for(let H=0,k=I.length;H<k;H++){let ne=n.get(I[H]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Z(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let H=0;H<I.length;H++){let k=I[H];F.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[H]);let ne=s.convert(k.format,k.colorSpace),V=s.convert(k.type),se=x(k.internalFormat,ne,V,k.colorSpace,C.isXRRenderTarget===!0),ae=B(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,F.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),G(i.TEXTURE_CUBE_MAP,R);for(let H=0;H<6;H++)if(R.mipmaps&&R.mipmaps.length>0)for(let k=0;k<R.mipmaps.length;k++)W(F.__webglFramebuffer[H][k],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,k);else W(F.__webglFramebuffer[H],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);m(R)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(A){for(let H=0,k=I.length;H<k;H++){let ne=I[H],V=n.get(ne);t.bindTexture(i.TEXTURE_2D,V.__webglTexture),G(i.TEXTURE_2D,ne),W(F.__webglFramebuffer,C,ne,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,0),m(ne)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let H=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(H=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,U.__webglTexture),G(H,R),R.mipmaps&&R.mipmaps.length>0)for(let k=0;k<R.mipmaps.length;k++)W(F.__webglFramebuffer[k],C,R,i.COLOR_ATTACHMENT0,H,k);else W(F.__webglFramebuffer,C,R,i.COLOR_ATTACHMENT0,H,0);m(R)&&y(H),t.unbindTexture()}C.depthBuffer&&ee(C)},this.updateRenderTargetMipmap=function(C){let R=C.textures;for(let F=0,U=R.length;F<U;F++){let I=R[F];if(m(I)){let O=v(C),A=n.get(I).__webglTexture;t.bindTexture(O,A),y(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(C.samples>0){if(Z(C)===!1){let R=C.textures,F=C.width,U=C.height,I=i.COLOR_BUFFER_BIT,O=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,A=n.get(C),H=R.length>1;if(H)for(let k=0;k<R.length;k++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,A.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,A.__webglFramebuffer);for(let k=0;k<R.length;k++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(I|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(I|=i.STENCIL_BUFFER_BIT)),H){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,A.__webglColorRenderbuffer[k]);let ne=n.get(R[k]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,F,U,0,0,F,U,I,i.NEAREST),l===!0&&(ie.length=0,j.length=0,ie.push(i.COLOR_ATTACHMENT0+k),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(O),j.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let k=0;k<R.length;k++){t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,A.__webglColorRenderbuffer[k]);let ne=n.get(R[k]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,A.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let R=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Z}function Ay(i,e){return{convert:function(t,n=""){let r,s=Je.getTransfer(n);if(t===vi)return i.UNSIGNED_BYTE;if(t===Gu)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Wu)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Rf)return i.BYTE;if(t===Cf)return i.SHORT;if(t===_a)return i.UNSIGNED_SHORT;if(t===Vu)return i.INT;if(t===Nr)return i.UNSIGNED_INT;if(t===oi)return i.FLOAT;if(t===Zn)return i.HALF_FLOAT;if(t===If)return i.ALPHA;if(t===Lf)return i.RGB;if(t===Nn)return i.RGBA;if(t===Df)return i.LUMINANCE;if(t===Nf)return i.LUMINANCE_ALPHA;if(t===Ma)return i.DEPTH_COMPONENT;if(t===sr)return i.DEPTH_STENCIL;if(t===Xu)return i.RED;if(t===ju)return i.RED_INTEGER;if(t===Uf)return i.RG;if(t===qu)return i.RG_INTEGER;if(t===Yu)return i.RGBA_INTEGER;if(t===qo||t===Yo||t===Zo||t===Ko)if(s===ct){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Eh||t===Th||t===bh||t===Sh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===wh||t===Ah||t===Rh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===wh||t===Ah)return s===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Rh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Ch||t===Ph||t===Ih||t===Lh||t===Dh||t===Nh||t===Uh||t===Oh||t===Hh||t===Fh||t===Bh||t===kh||t===zh||t===Vh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Ch)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Ph)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Ih)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Lh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Dh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Nh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Uh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Oh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Hh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Fh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Bh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===kh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===zh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Vh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Jo||t===Gh||t===Wh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Jo)return s===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Of||t===Xh||t===jh||t===qh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===jh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===rr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var cu=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},de=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ry={type:"move"},ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),y=this._getHandJoint(c,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new de;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Xt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends ar{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,g=new hu,m=t.getContextAttributes(),y=null,v=null,x=[],_=[],M=new le,E=null,b=new Bt;b.viewport=new lt;let S=new Bt;S.viewport=new lt;let w=[b,S],P=new cu,D=null,N=null;function z(j){let B=_.indexOf(j.inputSource);if(B===-1)return;let Z=x[B];Z!==void 0&&(Z.update(j.inputSource,j.frame,c||a),Z.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let j=0;j<x.length;j++){let B=_[j];B!==null&&(_[j]=null,x[j].disconnect(B))}D=null,N=null,g.reset(),e.setRenderTarget(y),p=null,d=null,u=null,r=null,v=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function K(j){for(let B=0;B<j.removed.length;B++){let Z=j.removed[B],oe=_.indexOf(Z);oe>=0&&(_[oe]=null,x[oe].disconnect(Z))}for(let B=0;B<j.added.length;B++){let Z=j.added[B],oe=_.indexOf(Z);if(oe===-1){for(let C=0;C<x.length;C++){if(C>=_.length){_.push(Z),oe=C;break}if(_[C]===null){_[C]=Z,oe=C;break}}if(oe===-1)break}let $=x[oe];$&&$.connect(Z)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let B=x[j];return B===void 0&&(B=new ga,x[j]=B),B.getTargetRaySpace()},this.getControllerGrip=function(j){let B=x[j];return B===void 0&&(B=new ga,x[j]=B),B.getGripSpace()},this.getHand=function(j){let B=x[j];return B===void 0&&(B=new ga,x[j]=B),B.getHandSpace()},this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0){let B={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new rn(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let B=null,Z=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=m.stencil?sr:Ma,Z=m.stencil?rr:Nr);let $={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer($),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new rn(d.textureWidth,d.textureHeight,{format:Nn,type:vi,depthTexture:new Is(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let J=new T,W=new T;function Y(j,B){B===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(B.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let B=j.near,Z=j.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(Z=g.depthFar)),P.near=S.near=b.near=B,P.far=S.far=b.far=Z,D===P.near&&N===P.far||(r.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,N=P.far),b.layers.mask=2|j.layers.mask,S.layers.mask=4|j.layers.mask,P.layers.mask=b.layers.mask|S.layers.mask;let oe=j.parent,$=P.cameras;Y(P,oe);for(let C=0;C<$.length;C++)Y($[C],oe);$.length===2?(function(C,R,F){J.setFromMatrixPosition(R.matrixWorld),W.setFromMatrixPosition(F.matrixWorld);let U=J.distanceTo(W),I=R.projectionMatrix.elements,O=F.projectionMatrix.elements,A=I[14]/(I[10]-1),H=I[14]/(I[10]+1),k=(I[9]+1)/I[5],ne=(I[9]-1)/I[5],V=(I[8]-1)/I[0],se=(O[8]+1)/O[0],ae=A*V,ce=A*se,ye=U/(-V+se),ge=ye*-V;if(R.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(ge),C.translateZ(ye),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),I[10]===-1)C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Ee=A+ye,Pe=H+ye,Ke=ae-ge,ze=ce+(U-ge),Re=k*H/Pe*Ee,nt=ne*H/Pe*Ee;C.projectionMatrix.makePerspective(Ke,ze,Re,nt,Ee,Pe),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}})(P,b,S):P.projectionMatrix.copy(b.projectionMatrix),(function(C,R,F){F===null?C.matrix.copy(R.matrixWorld):(C.matrix.copy(F.matrixWorld),C.matrix.invert(),C.matrix.multiply(R.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=2*Cs*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)})(j,P,oe)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)};let ee=null,ie=new zf;ie.setAnimationLoop((function(j,B){if(h=B.getViewerPose(c||a),f=B,h!==null){let Z=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;Z.length!==P.cameras.length&&(P.cameras.length=0,oe=!0);for(let C=0;C<Z.length;C++){let R=Z[C],F=null;if(p!==null)F=p.getViewport(R);else{let I=u.getViewSubImage(d,R);F=I.viewport,C===0&&(e.setRenderTargetTextures(v,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let U=w[C];U===void 0&&(U=new Bt,U.layers.enable(C),U.viewport=new lt,w[C]=U),U.matrix.fromArray(R.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(R.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(F.x,F.y,F.width,F.height),C===0&&(P.matrix.copy(U.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),oe===!0&&P.cameras.push(U)}let $=r.enabledFeatures;if($&&$.includes("depth-sensing")){let C=u.getDepthInformation(Z[0]);C&&C.isValid&&C.texture&&g.init(e,C,r.renderState)}}for(let Z=0;Z<x.length;Z++){let oe=_[Z],$=x[Z];oe!==null&&$!==void 0&&$.update(oe,B,c||a)}ee&&ee(j,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),f=null})),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}},Ir=new jn,Cy=new Se;function Py(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===1&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===1&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Ir.copy(l),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),r.envMapRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(Ir)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,kf(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Iy(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let y=m.uniforms,v=0,x=16;for(let M=0,E=y.length;M<E;M++){let b=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,w=b.length;S<w;S++){let P=b[S],D=Array.isArray(P.value)?P.value:[P.value];for(let N=0,z=D.length;N<z;N++){let G=c(D[N]),K=v%x,J=K%G.boundary,W=K+J;v+=J,W!==0&&x-W<G.storage&&(v+=x-W),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=G.storage}}}let _=v%x;_>0&&(v+=x-_),m.__size=v,m.__cache={}})(u),p=(function(m){let y=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=y;let v=i.createBuffer(),x=m.__size,_=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,x,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(m){let y=r[m.id],v=m.uniforms,x=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,M=v.length;_<M;_++){let E=Array.isArray(v[_])?v[_]:[v[_]];for(let b=0,S=E.length;b<S;b++){let w=E[b];if(l(w,_,b,x)===!0){let P=w.__offset,D=Array.isArray(w.value)?w.value:[w.value],N=0;for(let z=0;z<D.length;z++){let G=D[z],K=c(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,P+N,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,N),N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var sl=class{constructor(e={}){let{canvas:t=V1(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),g=new Int32Array(4),m=null,y=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=0,this.toneMappingExposure=1;let _=this,M=!1,E=0,b=0,S=null,w=-1,P=null,D=new lt,N=new lt,z=null,G=new me(0),K=0,J=t.width,W=t.height,Y=1,ee=null,ie=null,j=new lt(0,0,J,W),B=new lt(0,0,J,W),Z=!1,oe=new or,$=!1,C=!1,R=new Se,F=new Se,U=new T,I=new lt,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},A=!1;function H(){return S===null?Y:1}let k,ne,V,se,ae,ce,ye,ge,Ee,Pe,Ke,ze,Re,nt,at,dt,Te,Fe,pt,Wi,ns,Cn,kn,Pn,X=n;function Qn(L,q){return t.getContext(L,q)}try{let L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",D0,!1),t.addEventListener("webglcontextrestored",N0,!1),t.addEventListener("webglcontextcreationerror",U0,!1),X===null){let q="webgl2";if(X=Qn(q,L),X===null)throw Qn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function Xi(){k=new dv(X),k.init(),Cn=new Ay(X,k),ne=new lv(X,k,e,Cn),V=new Sy(X,k),ne.reverseDepthBuffer&&d&&V.buffers.depth.setReversed(!0),se=new mv(X),ae=new my,ce=new wy(X,k,V,ae,ne,Cn,se),ye=new hv(_),ge=new uv(_),Ee=new iv(X),kn=new av(X,Ee),Pe=new pv(X,Ee,se,kn),Ke=new vv(X,Pe,Ee,se),pt=new gv(X,ne,ce),dt=new cv(ae),ze=new fy(_,ye,ge,k,ne,kn,dt),Re=new Py(_,ae),nt=new vy,at=new Ey(k),Fe=new sv(_,ye,ge,V,Ke,p,l),Te=new Ty(_,Ke,ne),Pn=new Iy(X,se,ne,V),Wi=new ov(X,k,se),ns=new fv(X,k,se),se.programs=ze.programs,_.capabilities=ne,_.extensions=k,_.properties=ae,_.renderLists=nt,_.shadowMap=Te,_.state=V,_.info=se}Xi();let bt=new uu(_,X);function D0(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N0(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=se.autoReset,q=Te.enabled,re=Te.autoUpdate,he=Te.needsUpdate,Q=Te.type;Xi(),se.autoReset=L,Te.enabled=q,Te.autoUpdate=re,Te.needsUpdate=he,Te.type=Q}function U0(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function O0(L){let q=L.target;q.removeEventListener("dispose",O0),(function(re){(function(he){let Q=ae.get(he).programs;Q!==void 0&&(Q.forEach((function(pe){ze.releaseProgram(pe)})),he.isShaderMaterial&&ze.releaseShaderCache(he))})(re),ae.remove(re)})(q)}function H0(L,q,re){L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=1,L.needsUpdate=!0,uo(L,q,re),L.side=0,L.needsUpdate=!0,uo(L,q,re),L.side=2):uo(L,q,re)}this.xr=bt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let L=k.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=k.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(J,W,!1))},this.getSize=function(L){return L.set(J,W)},this.setSize=function(L,q,re=!0){bt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(J=L,W=q,t.width=Math.floor(L*Y),t.height=Math.floor(q*Y),re===!0&&(t.style.width=L+"px",t.style.height=q+"px"),this.setViewport(0,0,L,q))},this.getDrawingBufferSize=function(L){return L.set(J*Y,W*Y).floor()},this.setDrawingBufferSize=function(L,q,re){J=L,W=q,Y=re,t.width=Math.floor(L*re),t.height=Math.floor(q*re),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(j)},this.setViewport=function(L,q,re,he){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,q,re,he),V.viewport(D.copy(j).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(B)},this.setScissor=function(L,q,re,he){L.isVector4?B.set(L.x,L.y,L.z,L.w):B.set(L,q,re,he),V.scissor(N.copy(B).multiplyScalar(Y).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(L){V.setScissorTest(Z=L)},this.setOpaqueSort=function(L){ee=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(L=!0,q=!0,re=!0){let he=0;if(L){let Q=!1;if(S!==null){let pe=S.texture.format;Q=pe===Yu||pe===qu||pe===ju}if(Q){let pe=S.texture.type,be=pe===vi||pe===Nr||pe===_a||pe===rr||pe===Gu||pe===Wu,Ie=Fe.getClearColor(),Ue=Fe.getClearAlpha(),Ve=Ie.r,je=Ie.g,Oe=Ie.b;be?(f[0]=Ve,f[1]=je,f[2]=Oe,f[3]=Ue,X.clearBufferuiv(X.COLOR,0,f)):(g[0]=Ve,g[1]=je,g[2]=Oe,g[3]=Ue,X.clearBufferiv(X.COLOR,0,g))}else he|=X.COLOR_BUFFER_BIT}q&&(he|=X.DEPTH_BUFFER_BIT),re&&(he|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D0,!1),t.removeEventListener("webglcontextrestored",N0,!1),t.removeEventListener("webglcontextcreationerror",U0,!1),nt.dispose(),at.dispose(),ae.dispose(),ye.dispose(),ge.dispose(),Ke.dispose(),kn.dispose(),Pn.dispose(),ze.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",F0),bt.removeEventListener("sessionend",B0),Tr.stop()},this.renderBufferDirect=function(L,q,re,he,Q,pe){q===null&&(q=O);let be=Q.isMesh&&Q.matrixWorld.determinant()<0,Ie=(function(it,dn,Jt,Ze,He){dn.isScene!==!0&&(dn=O),ce.resetTextureUnits();let ei=dn.fog,Cc=Ze.isMeshStandardMaterial?dn.environment:null,ta=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ln,is=(Ze.isMeshStandardMaterial?ge:ye).get(Ze.envMap||Cc),Pc=Ze.vertexColors===!0&&!!Jt.attributes.color&&Jt.attributes.color.itemSize===4,Ic=!!Jt.attributes.tangent&&(!!Ze.normalMap||Ze.anisotropy>0),Lc=!!Jt.morphAttributes.position,ji=!!Jt.morphAttributes.normal,h1=!!Jt.morphAttributes.color,X0=0;Ze.toneMapped&&(S!==null&&S.isXRRenderTarget!==!0||(X0=_.toneMapping));let j0=Jt.morphAttributes.position||Jt.morphAttributes.normal||Jt.morphAttributes.color,u1=j0!==void 0?j0.length:0,tt=ae.get(Ze),d1=y.state.lights;if($===!0&&(C===!0||it!==P)){let zn=it===P&&Ze.id===w;dt.setState(Ze,it,zn)}let ti=!1;Ze.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==d1.state.version||tt.outputColorSpace!==ta||He.isBatchedMesh&&tt.batching===!1?ti=!0:He.isBatchedMesh||tt.batching!==!0?He.isBatchedMesh&&tt.batchingColor===!0&&He.colorTexture===null||He.isBatchedMesh&&tt.batchingColor===!1&&He.colorTexture!==null||He.isInstancedMesh&&tt.instancing===!1?ti=!0:He.isInstancedMesh||tt.instancing!==!0?He.isSkinnedMesh&&tt.skinning===!1?ti=!0:He.isSkinnedMesh||tt.skinning!==!0?He.isInstancedMesh&&tt.instancingColor===!0&&He.instanceColor===null||He.isInstancedMesh&&tt.instancingColor===!1&&He.instanceColor!==null||He.isInstancedMesh&&tt.instancingMorph===!0&&He.morphTexture===null||He.isInstancedMesh&&tt.instancingMorph===!1&&He.morphTexture!==null||tt.envMap!==is||Ze.fog===!0&&tt.fog!==ei?ti=!0:tt.numClippingPlanes===void 0||tt.numClippingPlanes===dt.numPlanes&&tt.numIntersection===dt.numIntersection?(tt.vertexAlphas!==Pc||tt.vertexTangents!==Ic||tt.morphTargets!==Lc||tt.morphNormals!==ji||tt.morphColors!==h1||tt.toneMapping!==X0||tt.morphTargetsCount!==u1)&&(ti=!0):ti=!0:ti=!0:ti=!0:ti=!0:(ti=!0,tt.__version=Ze.version);let br=tt.currentProgram;ti===!0&&(br=uo(Ze,dn,He));let q0=!1,na=!1,Dc=!1,Pt=br.getUniforms(),qi=tt.uniforms;if(V.useProgram(br.program)&&(q0=!0,na=!0,Dc=!0),Ze.id!==w&&(w=Ze.id,na=!0),q0||P!==it){V.buffers.depth.getReversed()?(R.copy(it.projectionMatrix),(function(Sr){let St=Sr.elements;St[2]=.5*St[2]+.5*St[3],St[6]=.5*St[6]+.5*St[7],St[10]=.5*St[10]+.5*St[11],St[14]=.5*St[14]+.5*St[15]})(R),(function(Sr){let St=Sr.elements;St[11]===-1?(St[10]=-St[10]-1,St[14]=-St[14]):(St[10]=-St[10],St[14]=1-St[14])})(R),Pt.setValue(X,"projectionMatrix",R)):Pt.setValue(X,"projectionMatrix",it.projectionMatrix),Pt.setValue(X,"viewMatrix",it.matrixWorldInverse);let zn=Pt.map.cameraPosition;zn!==void 0&&zn.setValue(X,U.setFromMatrixPosition(it.matrixWorld)),ne.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(it.far+1)/Math.LN2)),(Ze.isMeshPhongMaterial||Ze.isMeshToonMaterial||Ze.isMeshLambertMaterial||Ze.isMeshBasicMaterial||Ze.isMeshStandardMaterial||Ze.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",it.isOrthographicCamera===!0),P!==it&&(P=it,na=!0,Dc=!0)}if(He.isSkinnedMesh){Pt.setOptional(X,He,"bindMatrix"),Pt.setOptional(X,He,"bindMatrixInverse");let zn=He.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Pt.setValue(X,"boneTexture",zn.boneTexture,ce))}He.isBatchedMesh&&(Pt.setOptional(X,He,"batchingTexture"),Pt.setValue(X,"batchingTexture",He._matricesTexture,ce),Pt.setOptional(X,He,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",He._indirectTexture,ce),Pt.setOptional(X,He,"batchingColorTexture"),He._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",He._colorsTexture,ce));let Nc=Jt.morphAttributes;Nc.position===void 0&&Nc.normal===void 0&&Nc.color===void 0||pt.update(He,Jt,br),(na||tt.receiveShadow!==He.receiveShadow)&&(tt.receiveShadow=He.receiveShadow,Pt.setValue(X,"receiveShadow",He.receiveShadow)),Ze.isMeshGouraudMaterial&&Ze.envMap!==null&&(qi.envMap.value=is,qi.flipEnvMap.value=is.isCubeTexture&&is.isRenderTargetTexture===!1?-1:1),Ze.isMeshStandardMaterial&&Ze.envMap===null&&dn.environment!==null&&(qi.envMapIntensity.value=dn.environmentIntensity),na&&(Pt.setValue(X,"toneMappingExposure",_.toneMappingExposure),tt.needsLights&&(ni=Dc,(fi=qi).ambientLightColor.needsUpdate=ni,fi.lightProbe.needsUpdate=ni,fi.directionalLights.needsUpdate=ni,fi.directionalLightShadows.needsUpdate=ni,fi.pointLights.needsUpdate=ni,fi.pointLightShadows.needsUpdate=ni,fi.spotLights.needsUpdate=ni,fi.spotLightShadows.needsUpdate=ni,fi.rectAreaLights.needsUpdate=ni,fi.hemisphereLights.needsUpdate=ni),ei&&Ze.fog===!0&&Re.refreshFogUniforms(qi,ei),Re.refreshMaterialUniforms(qi,Ze,Y,W,y.state.transmissionRenderTarget[it.id]),Ts.upload(X,G0(tt),qi,ce));var fi,ni;if(Ze.isShaderMaterial&&Ze.uniformsNeedUpdate===!0&&(Ts.upload(X,G0(tt),qi,ce),Ze.uniformsNeedUpdate=!1),Ze.isSpriteMaterial&&Pt.setValue(X,"center",He.center),Pt.setValue(X,"modelViewMatrix",He.modelViewMatrix),Pt.setValue(X,"normalMatrix",He.normalMatrix),Pt.setValue(X,"modelMatrix",He.matrixWorld),Ze.isShaderMaterial||Ze.isRawShaderMaterial){let zn=Ze.uniformsGroups;for(let Sr=0,St=zn.length;Sr<St;Sr++){let Y0=zn[Sr];Pn.update(Y0,br),Pn.bind(Y0,br)}}return br})(L,q,re,he,Q);V.setMaterial(he,be);let Ue=re.index,Ve=1;if(he.wireframe===!0){if(Ue=Pe.getWireframeAttribute(re),Ue===void 0)return;Ve=2}let je=re.drawRange,Oe=re.attributes.position,$e=je.start*Ve,Rt=(je.start+je.count)*Ve;pe!==null&&($e=Math.max($e,pe.start*Ve),Rt=Math.min(Rt,(pe.start+pe.count)*Ve)),Ue!==null?($e=Math.max($e,0),Rt=Math.min(Rt,Ue.count)):Oe!=null&&($e=Math.max($e,0),Rt=Math.min(Rt,Oe.count));let yt=Rt-$e;if(yt<0||yt===1/0)return;let Ft;kn.setup(Q,he,Ie,re,Ue);let Mt=Wi;if(Ue!==null&&(Ft=Ee.get(Ue),Mt=ns,Mt.setIndex(Ft)),Q.isMesh)he.wireframe===!0?(V.setLineWidth(he.wireframeLinewidth*H()),Mt.setMode(X.LINES)):Mt.setMode(X.TRIANGLES);else if(Q.isLine){let it=he.linewidth;it===void 0&&(it=1),V.setLineWidth(it*H()),Q.isLineSegments?Mt.setMode(X.LINES):Q.isLineLoop?Mt.setMode(X.LINE_LOOP):Mt.setMode(X.LINE_STRIP)}else Q.isPoints?Mt.setMode(X.POINTS):Q.isSprite&&Mt.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Mt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let it=Q._multiDrawStarts,dn=Q._multiDrawCounts,Jt=Q._multiDrawCount,Ze=Ue?Ee.get(Ue).bytesPerElement:1,He=ae.get(he).currentProgram.getUniforms();for(let ei=0;ei<Jt;ei++)He.setValue(X,"_gl_DrawID",ei),Mt.render(it[ei]/Ze,dn[ei])}else if(Q.isInstancedMesh)Mt.renderInstances($e,yt,Q.count);else if(re.isInstancedBufferGeometry){let it=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,dn=Math.min(re.instanceCount,it);Mt.renderInstances($e,yt,dn)}else Mt.render($e,yt)},this.compile=function(L,q,re=null){re===null&&(re=L),y=at.get(re),y.init(q),x.push(y),re.traverseVisible((function(Q){Q.isLight&&Q.layers.test(q.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))})),L!==re&&L.traverseVisible((function(Q){Q.isLight&&Q.layers.test(q.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))})),y.setupLights();let he=new Set;return L.traverse((function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let pe=Q.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){let Ie=pe[be];H0(Ie,re,Q),he.add(Ie)}else H0(pe,re,Q),he.add(pe)})),x.pop(),y=null,he},this.compileAsync=function(L,q,re=null){let he=this.compile(L,q,re);return new Promise((Q=>{function pe(){he.forEach((function(be){ae.get(be).currentProgram.isReady()&&he.delete(be)})),he.size!==0?setTimeout(pe,10):Q(L)}k.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)}))};let Ac=null;function F0(){Tr.stop()}function B0(){Tr.start()}let Tr=new zf;function Rc(L,q,re,he){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||oe.intersectsSprite(L)){he&&I.setFromMatrixPosition(L.matrixWorld).applyMatrix4(F);let pe=Ke.update(L),be=L.material;be.visible&&m.push(L,pe,be,re,I.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||oe.intersectsObject(L))){let pe=Ke.update(L),be=L.material;if(he&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),I.copy(L.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),I.copy(pe.boundingSphere.center)),I.applyMatrix4(L.matrixWorld).applyMatrix4(F)),Array.isArray(be)){let Ie=pe.groups;for(let Ue=0,Ve=Ie.length;Ue<Ve;Ue++){let je=Ie[Ue],Oe=be[je.materialIndex];Oe&&Oe.visible&&m.push(L,pe,Oe,re,I.z,je)}}else be.visible&&m.push(L,pe,be,re,I.z,null)}}let Q=L.children;for(let pe=0,be=Q.length;pe<be;pe++)Rc(Q[pe],q,re,he)}function k0(L,q,re,he){let Q=L.opaque,pe=L.transmissive,be=L.transparent;y.setupLightsView(re),$===!0&&dt.setGlobalState(_.clippingPlanes,re),he&&V.viewport(D.copy(he)),Q.length>0&&ho(Q,q,re),pe.length>0&&ho(pe,q,re),be.length>0&&ho(be,q,re),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function z0(L,q,re,he){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[he.id]===void 0&&(y.state.transmissionRenderTarget[he.id]=new rn(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Zn:vi,minFilter:Ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let Q=y.state.transmissionRenderTarget[he.id],pe=he.viewport||D;Q.setSize(pe.z,pe.w);let be=_.getRenderTarget();_.setRenderTarget(Q),_.getClearColor(G),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),A&&Fe.render(re);let Ie=_.toneMapping;_.toneMapping=0;let Ue=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),y.setupLightsView(he),$===!0&&dt.setGlobalState(_.clippingPlanes,he),ho(L,re,he),ce.updateMultisampleRenderTarget(Q),ce.updateRenderTargetMipmap(Q),k.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let je=0,Oe=q.length;je<Oe;je++){let $e=q[je],Rt=$e.object,yt=$e.geometry,Ft=$e.material,Mt=$e.group;if(Ft.side===2&&Rt.layers.test(he.layers)){let it=Ft.side;Ft.side=1,Ft.needsUpdate=!0,V0(Rt,re,he,yt,Ft,Mt),Ft.side=it,Ft.needsUpdate=!0,Ve=!0}}Ve===!0&&(ce.updateMultisampleRenderTarget(Q),ce.updateRenderTargetMipmap(Q))}_.setRenderTarget(be),_.setClearColor(G,K),Ue!==void 0&&(he.viewport=Ue),_.toneMapping=Ie}function ho(L,q,re){let he=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,pe=L.length;Q<pe;Q++){let be=L[Q],Ie=be.object,Ue=be.geometry,Ve=he===null?be.material:he,je=be.group;Ie.layers.test(re.layers)&&V0(Ie,q,re,Ue,Ve,je)}}function V0(L,q,re,he,Q,pe){L.onBeforeRender(_,q,re,he,Q,pe),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(_,q,re,he,L,pe),Q.transparent===!0&&Q.side===2&&Q.forceSinglePass===!1?(Q.side=1,Q.needsUpdate=!0,_.renderBufferDirect(re,q,he,Q,L,pe),Q.side=0,Q.needsUpdate=!0,_.renderBufferDirect(re,q,he,Q,L,pe),Q.side=2):_.renderBufferDirect(re,q,he,Q,L,pe),L.onAfterRender(_,q,re,he,Q,pe)}function uo(L,q,re){q.isScene!==!0&&(q=O);let he=ae.get(L),Q=y.state.lights,pe=y.state.shadowsArray,be=Q.state.version,Ie=ze.getParameters(L,Q.state,pe,q,re),Ue=ze.getProgramCacheKey(Ie),Ve=he.programs;he.environment=L.isMeshStandardMaterial?q.environment:null,he.fog=q.fog,he.envMap=(L.isMeshStandardMaterial?ge:ye).get(L.envMap||he.environment),he.envMapRotation=he.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,Ve===void 0&&(L.addEventListener("dispose",O0),Ve=new Map,he.programs=Ve);let je=Ve.get(Ue);if(je!==void 0){if(he.currentProgram===je&&he.lightsStateVersion===be)return W0(L,Ie),je}else Ie.uniforms=ze.getUniforms(L),L.onBeforeCompile(Ie,_),je=ze.acquireProgram(Ie,Ue),Ve.set(Ue,je),he.uniforms=Ie.uniforms;let Oe=he.uniforms;return(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Oe.clippingPlanes=dt.uniform),W0(L,Ie),he.needsLights=(function($e){return $e.isMeshLambertMaterial||$e.isMeshToonMaterial||$e.isMeshPhongMaterial||$e.isMeshStandardMaterial||$e.isShadowMaterial||$e.isShaderMaterial&&$e.lights===!0})(L),he.lightsStateVersion=be,he.needsLights&&(Oe.ambientLightColor.value=Q.state.ambient,Oe.lightProbe.value=Q.state.probe,Oe.directionalLights.value=Q.state.directional,Oe.directionalLightShadows.value=Q.state.directionalShadow,Oe.spotLights.value=Q.state.spot,Oe.spotLightShadows.value=Q.state.spotShadow,Oe.rectAreaLights.value=Q.state.rectArea,Oe.ltc_1.value=Q.state.rectAreaLTC1,Oe.ltc_2.value=Q.state.rectAreaLTC2,Oe.pointLights.value=Q.state.point,Oe.pointLightShadows.value=Q.state.pointShadow,Oe.hemisphereLights.value=Q.state.hemi,Oe.directionalShadowMap.value=Q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Oe.spotShadowMap.value=Q.state.spotShadowMap,Oe.spotLightMatrix.value=Q.state.spotLightMatrix,Oe.spotLightMap.value=Q.state.spotLightMap,Oe.pointShadowMap.value=Q.state.pointShadowMap,Oe.pointShadowMatrix.value=Q.state.pointShadowMatrix),he.currentProgram=je,he.uniformsList=null,je}function G0(L){if(L.uniformsList===null){let q=L.currentProgram.getUniforms();L.uniformsList=Ts.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function W0(L,q){let re=ae.get(L);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}Tr.setAnimationLoop((function(L){Ac&&Ac(L)})),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(L){Ac=L,bt.setAnimationLoop(L),L===null?Tr.stop():Tr.start()},bt.addEventListener("sessionstart",F0),bt.addEventListener("sessionend",B0),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,q,S),y=at.get(L,x.length),y.init(q),x.push(y),F.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),oe.setFromProjectionMatrix(F),C=this.localClippingEnabled,$=dt.init(this.clippingPlanes,C),m=nt.get(L,v.length),m.init(),v.push(m),bt.enabled===!0&&bt.isPresenting===!0){let pe=_.xr.getDepthSensingMesh();pe!==null&&Rc(pe,q,-1/0,_.sortObjects)}Rc(L,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ee,ie),A=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,A&&Fe.addToRenderList(m,L),this.info.render.frame++,$===!0&&dt.beginShadows();let re=y.state.shadowsArray;Te.render(re,L,q),$===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let he=m.opaque,Q=m.transmissive;if(y.setupLights(),q.isArrayCamera){let pe=q.cameras;if(Q.length>0)for(let be=0,Ie=pe.length;be<Ie;be++)z0(he,Q,L,pe[be]);A&&Fe.render(L);for(let be=0,Ie=pe.length;be<Ie;be++){let Ue=pe[be];k0(m,L,Ue,Ue.viewport)}}else Q.length>0&&z0(he,Q,L,q),A&&Fe.render(L),k0(m,L,q);S!==null&&(ce.updateMultisampleRenderTarget(S),ce.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(_,L,q),kn.resetDefaultState(),w=-1,P=null,x.pop(),x.length>0?(y=x[x.length-1],$===!0&&dt.setGlobalState(_.clippingPlanes,y.state.camera)):y=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,q,re){ae.get(L.texture).__webglTexture=q,ae.get(L.depthTexture).__webglTexture=re;let he=ae.get(L);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=re===void 0,he.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){let re=ae.get(L);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,re=0){S=L,E=q,b=re;let he=!0,Q=null,pe=!1,be=!1;if(L){let Ie=ae.get(L);if(Ie.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(X.FRAMEBUFFER,null),he=!1;else if(Ie.__webglFramebuffer===void 0)ce.setupRenderTarget(L);else if(Ie.__hasExternalTextures)ce.rebindTextures(L,ae.get(L.texture).__webglTexture,ae.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let je=L.depthTexture;if(Ie.__boundDepthTexture!==je){if(je!==null&&ae.has(je)&&(L.width!==je.image.width||L.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(L)}}let Ue=L.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(be=!0);let Ve=ae.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Q=Array.isArray(Ve[q])?Ve[q][re]:Ve[q],pe=!0):Q=L.samples>0&&ce.useMultisampledRTT(L)===!1?ae.get(L).__webglMultisampledFramebuffer:Array.isArray(Ve)?Ve[re]:Ve,D.copy(L.viewport),N.copy(L.scissor),z=L.scissorTest}else D.copy(j).multiplyScalar(Y).floor(),N.copy(B).multiplyScalar(Y).floor(),z=Z;if(V.bindFramebuffer(X.FRAMEBUFFER,Q)&&he&&V.drawBuffers(L,Q),V.viewport(D),V.scissor(N),V.setScissorTest(z),pe){let Ie=ae.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,re)}else if(be){let Ie=ae.get(L.texture),Ue=q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ie.__webglTexture,re||0,Ue)}w=-1},this.readRenderTargetPixels=function(L,q,re,he,Q,pe,be){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){V.bindFramebuffer(X.FRAMEBUFFER,Ie);try{let Ue=L.texture,Ve=Ue.format,je=Ue.type;if(!ne.textureFormatReadable(Ve))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=L.width-he&&re>=0&&re<=L.height-Q&&X.readPixels(q,re,he,Q,Cn.convert(Ve),Cn.convert(je),pe)}finally{let Ue=S!==null?ae.get(S).__webglFramebuffer:null;V.bindFramebuffer(X.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(L,q,re,he,Q,pe,be){if(!L||!L.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){let Ue=L.texture,Ve=Ue.format,je=Ue.type;if(!ne.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=L.width-he&&re>=0&&re<=L.height-Q){V.bindFramebuffer(X.FRAMEBUFFER,Ie);let Oe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Oe),X.bufferData(X.PIXEL_PACK_BUFFER,pe.byteLength,X.STREAM_READ),X.readPixels(q,re,he,Q,Cn.convert(Ve),Cn.convert(je),0);let $e=S!==null?ae.get(S).__webglFramebuffer:null;V.bindFramebuffer(X.FRAMEBUFFER,$e);let Rt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await(function(yt,Ft,Mt){return new Promise((function(it,dn){setTimeout((function Jt(){switch(yt.clientWaitSync(Ft,yt.SYNC_FLUSH_COMMANDS_BIT,0)){case yt.WAIT_FAILED:dn();break;case yt.TIMEOUT_EXPIRED:setTimeout(Jt,Mt);break;default:it()}}),Mt)}))})(X,Rt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Oe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,pe),X.deleteBuffer(Oe),X.deleteSync(Rt),pe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,q=null,re=0){L.isTexture!==!0&&(pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,L=arguments[1]);let he=Math.pow(2,-re),Q=Math.floor(L.image.width*he),pe=Math.floor(L.image.height*he),be=q!==null?q.x:0,Ie=q!==null?q.y:0;ce.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,be,Ie,Q,pe),V.unbindTexture()},this.copyTextureToTexture=function(L,q,re=null,he=null,Q=0){let pe,be,Ie,Ue,Ve,je,Oe,$e,Rt;L.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,L=arguments[1],q=arguments[2],Q=arguments[3]||0,re=null);let yt=L.isCompressedTexture?L.mipmaps[Q]:L.image;re!==null?(pe=re.max.x-re.min.x,be=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,Ue=re.min.x,Ve=re.min.y,je=re.isBox3?re.min.z:0):(pe=yt.width,be=yt.height,Ie=yt.depth||1,Ue=0,Ve=0,je=0),he!==null?(Oe=he.x,$e=he.y,Rt=he.z):(Oe=0,$e=0,Rt=0);let Ft=Cn.convert(q.format),Mt=Cn.convert(q.type),it;q.isData3DTexture?(ce.setTexture3D(q,0),it=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),it=X.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),it=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);let dn=X.getParameter(X.UNPACK_ROW_LENGTH),Jt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ze=X.getParameter(X.UNPACK_SKIP_PIXELS),He=X.getParameter(X.UNPACK_SKIP_ROWS),ei=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,yt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ue),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ve),X.pixelStorei(X.UNPACK_SKIP_IMAGES,je);let Cc=L.isDataArrayTexture||L.isData3DTexture,ta=q.isDataArrayTexture||q.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let is=ae.get(L),Pc=ae.get(q),Ic=ae.get(is.__renderTarget),Lc=ae.get(Pc.__renderTarget);V.bindFramebuffer(X.READ_FRAMEBUFFER,Ic.__webglFramebuffer),V.bindFramebuffer(X.DRAW_FRAMEBUFFER,Lc.__webglFramebuffer);for(let ji=0;ji<Ie;ji++)Cc&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ae.get(L).__webglTexture,Q,je+ji),L.isDepthTexture?(ta&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ae.get(q).__webglTexture,Q,Rt+ji),X.blitFramebuffer(Ue,Ve,pe,be,Oe,$e,pe,be,X.DEPTH_BUFFER_BIT,X.NEAREST)):ta?X.copyTexSubImage3D(it,Q,Oe,$e,Rt+ji,Ue,Ve,pe,be):X.copyTexSubImage2D(it,Q,Oe,$e,Rt+ji,Ue,Ve,pe,be);V.bindFramebuffer(X.READ_FRAMEBUFFER,null),V.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ta?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(it,Q,Oe,$e,Rt,pe,be,Ie,Ft,Mt,yt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(it,Q,Oe,$e,Rt,pe,be,Ie,Ft,yt.data):X.texSubImage3D(it,Q,Oe,$e,Rt,pe,be,Ie,Ft,Mt,yt):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Q,Oe,$e,pe,be,Ft,Mt,yt.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Q,Oe,$e,yt.width,yt.height,Ft,yt.data):X.texSubImage2D(X.TEXTURE_2D,Q,Oe,$e,pe,be,Ft,Mt,yt);X.pixelStorei(X.UNPACK_ROW_LENGTH,dn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Jt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,He),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ei),Q===0&&q.generateMipmaps&&X.generateMipmap(it),V.unbindTexture()},this.copyTextureToTexture3D=function(L,q,re=null,he=null,Q=0){return L.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,he=arguments[1]||null,L=arguments[2],q=arguments[3],Q=arguments[4]||0),pa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,q,re,he,Q)},this.initRenderTarget=function(L){ae.get(L).__webglFramebuffer===void 0&&ce.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ce.setTextureCube(L,0):L.isData3DTexture?ce.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ce.setTexture2DArray(L,0):ce.setTexture2D(L,0),V.unbindTexture()},this.resetState=function(){E=0,b=0,S=null,V.reset(),kn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var al=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ol=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yh,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new T,wa=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var P_=new T,I_=new T,L_=new T,D_=new le,N_=new le,U_=new Se,O_=new T,H_=new T,F_=new T,B_=new le,k_=new le,z_=new le;var V_=new T,G_=new T;var Xp=new T,jp=new lt,qp=new lt,Ly=new T,Yp=new Se,Do=new T,lh=new En,Zp=new Se,ch=new Ur,ll=class extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Z0,this.bindMatrix=new Se,this.bindMatrixInverse=new Se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Do),this.boundingBox.expandByPoint(Do)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Do),this.boundingSphere.expandByPoint(Do)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lh.copy(this.boundingSphere),lh.applyMatrix4(r),e.ray.intersectsSphere(lh)!==!1&&(Zp.copy(r).invert(),ch.copy(e.ray).applyMatrix4(Zp),this.boundingBox!==null&&ch.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,ch)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Z0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===D1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;jp.fromBufferAttribute(r.attributes.skinIndex,e),qp.fromBufferAttribute(r.attributes.skinWeight,e),Xp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=qp.getComponent(s);if(a!==0){let o=jp.getComponent(s);Yp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ly.copy(Xp).applyMatrix4(Yp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Aa=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},cr=class extends Xt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kp=new Se,Dy=new Se,cl=class i{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Se;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Dy;Kp.multiplyMatrices(o,t[s]),Kp.toArray(n,16*s)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new cr(t,e,e,Nn,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Aa),this.bones.push(a),this.boneInverses.push(new Se().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Or=class extends mt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new Se,Jp=new Se,No=[],$p=new an,Ny=new Se,ca=new te,ha=new En,bn=class extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Or(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Ny)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),$p.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union($p)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),ha.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vs),Jp.multiplyMatrices(n,vs),ca.matrixWorld=Jp,ca.raycast(e,No);for(let a=0,o=No.length;a<o;a++){let l=No[a];l.instanceId=s,l.object=this,t.push(l)}No.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Or(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(r*this.count),r,this.count,Xu,oi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var du=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},W_=new Se,X_=new me(1,1,1),j_=new or,q_=new an,Y_=new En,Z_=new T,K_=new T,J_=new T,$_=new du,Q_=new te;var li=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hl=new T,ul=new T,Qp=new Se,ua=new Ur,Uo=new En,hh=new T,ef=new T,hr=class extends ht{constructor(e=new Be,t=new li){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)hl.fromBufferAttribute(t,r-1),ul.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=hl.distanceTo(ul);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;Qp.copy(r).invert(),ua.copy(e.ray).applyMatrix4(Qp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,g=p-1;f<g;f+=c){let m=h.getX(f),y=h.getX(f+1),v=Oo(this,e,ua,l,m,y);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),g=h.getX(d),m=Oo(this,e,ua,l,f,g);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,g=p-1;f<g;f+=c){let m=Oo(this,e,ua,l,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=Oo(this,e,ua,l,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oo(i,e,t,n,r,s){let a=i.geometry.attributes.position;if(hl.fromBufferAttribute(a,r),ul.fromBufferAttribute(a,s),t.distanceSqToSegment(hl,ul,hh,ef)>n)return;hh.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(hh);return o<e.near||o>e.far?void 0:{distance:o,point:ef.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var tf=new T,nf=new T,ur=class extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)tf.fromBufferAttribute(t,r),nf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+tf.distanceTo(nf);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},dl=class extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hr=class extends Tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rf=new Se,pu=new Ur,Ho=new En,Fo=new T,Ls=class extends ht{constructor(e=new Be,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;rf.copy(r).invert(),pu.copy(e.ray).applyMatrix4(rf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Fo.fromBufferAttribute(h,p),sf(Fo,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Fo.fromBufferAttribute(h,u),sf(Fo,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sf(i,e,t,n,r,s,a){let o=pu.distanceSqToPoint(i);if(o<t){let l=new T;pu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var dr=class extends Xt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,r=[],s=[],a=[],o=new T,l=new Se;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(It(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(It(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ra=class extends qn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fu=class extends Ra{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ku(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Bo=new T,uh=new Ku,dh=new Ku,ph=new Ku,Yn=class extends qn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new T){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Bo.subVectors(r[0],r[1]).add(r[0]),o=Bo);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Bo.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),uh.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,m),dh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,m),ph.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(uh.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),dh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),ph.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(uh.calc(h),dh.calc(h),ph.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function af(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function va(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function ya(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var pl=class extends qn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,r.x,s.x,a.x,o.x),ya(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mu=class extends qn{constructor(e=new T,t=new T,n=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new T){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,r.x,s.x,a.x,o.x),ya(e,r.y,s.y,a.y,o.y),ya(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends qn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gu=class extends qn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends qn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(va(e,r.x,s.x,a.x),va(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends qn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(va(e,r.x,s.x,a.x),va(e,r.y,s.y,a.y),va(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(af(o,l.x,c.x,h.x,u.x),af(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},yl=Object.freeze({__proto__:null,ArcCurve:fu,CatmullRomCurve3:Yn,CubicBezierCurve:pl,CubicBezierCurve3:mu,EllipseCurve:Ra,LineCurve:fl,LineCurve3:gu,QuadraticBezierCurve:ml,QuadraticBezierCurve3:gl,SplineCurve:vl}),vu=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new yl[r.type]().fromJSON(r))}return this}},Fr=class extends vu{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fl(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ml(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new pl(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new vl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new Ra(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yi=class i extends Be{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=It(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new le,p=new T,f=new T,g=new T,m=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let x=n+v*h*r,_=Math.sin(x),M=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*M,a.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),o.push(d.x,d.y);let b=l[3*E+0]*_,S=l[3*E+1],w=l[3*E+0]*M;c.push(b,S,w)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let _=x+v*e.length,M=_,E=_+e.length,b=_+e.length+1,S=_+1;s.push(M,E,S),s.push(b,S,E)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ds=class i extends yi{constructor(e=1,t=1,n=4,r=8){let s=new Fr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},yu=class i extends Be{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new T,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Me=class i extends Be{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,g=[],m=n/2,y=0;function v(x){let _=f,M=new le,E=new T,b=0,S=x===!0?e:t,w=x===!0?1:-1;for(let D=1;D<=r;D++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),f++;let P=f;for(let D=0;D<=r;D++){let N=D/r*l+o,z=Math.cos(N),G=Math.sin(N);E.x=S*G,E.y=m*w,E.z=S*z,u.push(E.x,E.y,E.z),d.push(0,w,0),M.x=.5*z+.5,M.y=.5*G*w+.5,p.push(M.x,M.y),f++}for(let D=0;D<r;D++){let N=_+D,z=P+D;x===!0?h.push(z,z+1,N):h.push(z+1,z,N),b+=3}c.addGroup(y,b,x===!0?1:2),y+=b}(function(){let x=new T,_=new T,M=0,E=(t-e)/n;for(let b=0;b<=s;b++){let S=[],w=b/s,P=w*(t-e)+e;for(let D=0;D<=r;D++){let N=D/r,z=N*l+o,G=Math.sin(z),K=Math.cos(z);_.x=P*G,_.y=-w*n+m,_.z=P*K,u.push(_.x,_.y,_.z),x.set(G,E,K).normalize(),d.push(x.x,x.y,x.z),p.push(N,1-w),S.push(f++)}g.push(S)}for(let b=0;b<r;b++)for(let S=0;S<s;S++){let w=g[S][b],P=g[S+1][b],D=g[S+1][b+1],N=g[S][b+1];(e>0||S!==0)&&(h.push(w,P,N),M+=3),(t>0||S!==s-1)&&(h.push(P,D,N),M+=3)}c.addGroup(y,M,0),y+=M})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sn=class i extends Me{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Br=class i extends Be{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,f,g){let m=g+1,y=[];for(let v=0;v<=m;v++){y[v]=[];let x=d.clone().lerp(f,v/m),_=p.clone().lerp(f,v/m),M=m-v;for(let E=0;E<=M;E++)y[v][E]=E===0&&v===m?x:x.clone().lerp(_,E/M)}for(let v=0;v<m;v++)for(let x=0;x<2*(m-v)-1;x++){let _=Math.floor(x/2);x%2==0?(l(y[v][_+1]),l(y[v+1][_]),l(y[v][_])):(l(y[v][_+1]),l(y[v+1][_+1]),l(y[v+1][_]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new T,f=new T,g=new T;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,d)})(r),(function(d){let p=new T;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new T;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let g=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new T,g=new T,m=new T,y=new T,v=new le,x=new le,_=new le;for(let M=0,E=0;M<s.length;M+=9,E+=6){f.set(s[M+0],s[M+1],s[M+2]),g.set(s[M+3],s[M+4],s[M+5]),m.set(s[M+6],s[M+7],s[M+8]),v.set(a[E+0],a[E+1]),x.set(a[E+2],a[E+3]),_.set(a[E+4],a[E+5]),y.copy(f).add(g).add(m).divideScalar(3);let b=u(y);h(v,E+0,f,b),h(x,E+2,g,b),h(_,E+4,m,b)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],y=a[f+4],v=Math.max(g,m,y),x=Math.min(g,m,y);v>.9&&x<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},xu=class i extends Br{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ko=new T,zo=new T,fh=new T,Vo=new er,Ca=class extends Be{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ms*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:y}=Vo;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),Vo.getNormal(fh),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let x=(v+1)%3,_=u[v],M=u[x],E=Vo[h[v]],b=Vo[h[x]],S=`${_}_${M}`,w=`${M}_${_}`;w in d&&d[w]?(fh.dot(d[w].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(b.x,b.y,b.z)),d[w]=null):S in d||(d[S]={index0:c[v],index1:c[x],normal:fh.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];ko.fromBufferAttribute(o,g),zo.fromBufferAttribute(o,m),p.push(ko.x,ko.y,ko.z),p.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ke=class extends Fr{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Fr().fromJSON(r))}return this}},Uy=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=of(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(f,g,m,y){let v=[],x,_,M,E,b;for(x=0,_=g.length;x<_;x++)M=g[x]*y,E=x<_-1?g[x+1]*y:f.length,b=of(f,M,E,y,!1),b===b.next&&(b.steiner=!0),v.push(Gy(b));for(v.sort(ky),x=0;x<v.length;x++)m=zy(v[x],m);return m})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)u=i[f],d=i[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Pa(s,a,t,o,l,p,0),a};function of(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=lf(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=lf(s,i[s],i[s+1],a);return a&&Fl(a,a.next)&&(La(a),a=a.next),a}function kr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Fl(n,n.next)&&At(n.prev,n,n.next)!==0)n=n.next;else{if(La(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Pa(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=_u(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,y,v,x,_,M,E,b,S=1;do{for(y=g,g=null,_=null,M=0;y;){for(M++,v=y,E=0,m=0;m<S&&(E++,v=v.nextZ,v);m++);for(b=S;E>0||b>0&&v;)E!==0&&(b===0||!v||y.z<=v.z)?(x=y,y=y.nextZ,E--):(x=v,v=v.nextZ,b--),_?_.nextZ=x:g=x,x.prevZ=_,_=x;y=v}_.nextZ=null,S*=2}while(M>1)})(f)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?Hy(i,n,r,s):Oy(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),La(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?Pa(i=Fy(kr(i),e,t),e,t,n,r,s,2):a===2&&By(i,e,t,n,r,s):Pa(kr(i),e,t,n,r,s,1);break}}function Oy(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&_s(r,o,s,l,a,c,f.x,f.y)&&At(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Hy(i,e,t,n){let r=i.prev,s=i,a=i.next;if(At(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,y=_u(p,f,e,t,n),v=_u(g,m,e,t,n),x=i.prevZ,_=i.nextZ;for(;x&&x.z>=y&&_&&_.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&_s(o,h,l,u,c,d,x.x,x.y)&&At(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==r&&_!==a&&_s(o,h,l,u,c,d,_.x,_.y)&&At(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=y;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&_s(o,h,l,u,c,d,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==r&&_!==a&&_s(o,h,l,u,c,d,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Fy(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!Fl(r,s)&&jf(r,n,n.next,s)&&Ia(r,s)&&Ia(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),La(n),La(n.next),n=i=s),n=n.next}while(n!==i);return kr(n)}function By(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wy(a,o)){let l=qf(a,o);return a=kr(a,a.next),l=kr(l,l.next),Pa(a,e,t,n,r,s,0),void Pa(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function ky(i,e){return i.x-e.x}function zy(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&_s(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Ia(o,r)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&Vy(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=qf(t,i);return kr(n,n.next),kr(t,t.next)}function Vy(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function _u(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Gy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _s(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Wy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&jf(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(Ia(i,e)&&Ia(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||Fl(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fl(i,e){return i.x===e.x&&i.y===e.y}function jf(i,e,t,n){let r=Wo(At(i,e,t)),s=Wo(At(i,e,n)),a=Wo(At(t,n,i)),o=Wo(At(t,n,e));return r!==s&&a!==o||!(r!==0||!Go(i,t,e))||!(s!==0||!Go(i,n,e))||!(a!==0||!Go(t,i,n))||!(o!==0||!Go(t,e,n))}function Go(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Wo(i){return i>0?1:i<0?-1:0}function Ia(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function qf(i,e){let t=new Mu(i.i,i.x,i.y),n=new Mu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function lf(i,e,t,n){let r=new Mu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function La(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var gi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];cf(e),hf(n,e);let a=e.length;t.forEach(cf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,hf(n,t[l]);let o=Uy(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function cf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Lt=class i extends Be{constructor(e=new ke([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Xy,x,_,M,E,b,S=!1;y&&(x=y.getSpacedPoints(h),S=!0,d=!1,_=y.computeFrenetFrames(h,!1),M=new T,E=new T,b=new T),d||(m=0,p=0,f=0,g=0);let w=o.extractPoints(c),P=w.shape,D=w.holes;if(!gi.isClockWise(P)){P=P.reverse();for(let U=0,I=D.length;U<I;U++){let O=D[U];gi.isClockWise(O)&&(D[U]=O.reverse())}}let N=gi.triangulateShape(P,D),z=P;for(let U=0,I=D.length;U<I;U++){let O=D[U];P=P.concat(O)}function G(U,I,O){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(I,O)}let K=P.length,J=N.length;function W(U,I,O){let A,H,k,ne=U.x-I.x,V=U.y-I.y,se=O.x-U.x,ae=O.y-U.y,ce=ne*ne+V*V,ye=ne*ae-V*se;if(Math.abs(ye)>Number.EPSILON){let ge=Math.sqrt(ce),Ee=Math.sqrt(se*se+ae*ae),Pe=I.x-V/ge,Ke=I.y+ne/ge,ze=((O.x-ae/Ee-Pe)*ae-(O.y+se/Ee-Ke)*se)/(ne*ae-V*se);A=Pe+ne*ze-U.x,H=Ke+V*ze-U.y;let Re=A*A+H*H;if(Re<=2)return new le(A,H);k=Math.sqrt(Re/2)}else{let ge=!1;ne>Number.EPSILON?se>Number.EPSILON&&(ge=!0):ne<-Number.EPSILON?se<-Number.EPSILON&&(ge=!0):Math.sign(V)===Math.sign(ae)&&(ge=!0),ge?(A=-V,H=ne,k=Math.sqrt(ce)):(A=ne,H=V,k=Math.sqrt(ce/2))}return new le(A/k,H/k)}let Y=[];for(let U=0,I=z.length,O=I-1,A=U+1;U<I;U++,O++,A++)O===I&&(O=0),A===I&&(A=0),Y[U]=W(z[U],z[O],z[A]);let ee=[],ie,j=Y.concat();for(let U=0,I=D.length;U<I;U++){let O=D[U];ie=[];for(let A=0,H=O.length,k=H-1,ne=A+1;A<H;A++,k++,ne++)k===H&&(k=0),ne===H&&(ne=0),ie[A]=W(O[A],O[k],O[ne]);ee.push(ie),j=j.concat(ie)}for(let U=0;U<m;U++){let I=U/m,O=p*Math.cos(I*Math.PI/2),A=f*Math.sin(I*Math.PI/2)+g;for(let H=0,k=z.length;H<k;H++){let ne=G(z[H],Y[H],A);oe(ne.x,ne.y,-O)}for(let H=0,k=D.length;H<k;H++){let ne=D[H];ie=ee[H];for(let V=0,se=ne.length;V<se;V++){let ae=G(ne[V],ie[V],A);oe(ae.x,ae.y,-O)}}}let B=f+g;for(let U=0;U<K;U++){let I=d?G(P[U],j[U],B):P[U];S?(E.copy(_.normals[0]).multiplyScalar(I.x),M.copy(_.binormals[0]).multiplyScalar(I.y),b.copy(x[0]).add(E).add(M),oe(b.x,b.y,b.z)):oe(I.x,I.y,0)}for(let U=1;U<=h;U++)for(let I=0;I<K;I++){let O=d?G(P[I],j[I],B):P[I];S?(E.copy(_.normals[U]).multiplyScalar(O.x),M.copy(_.binormals[U]).multiplyScalar(O.y),b.copy(x[U]).add(E).add(M),oe(b.x,b.y,b.z)):oe(O.x,O.y,u/h*U)}for(let U=m-1;U>=0;U--){let I=U/m,O=p*Math.cos(I*Math.PI/2),A=f*Math.sin(I*Math.PI/2)+g;for(let H=0,k=z.length;H<k;H++){let ne=G(z[H],Y[H],A);oe(ne.x,ne.y,u+O)}for(let H=0,k=D.length;H<k;H++){let ne=D[H];ie=ee[H];for(let V=0,se=ne.length;V<se;V++){let ae=G(ne[V],ie[V],A);S?oe(ae.x,ae.y+x[h-1].y,x[h-1].x+O):oe(ae.x,ae.y,u+O)}}}function Z(U,I){let O=U.length;for(;--O>=0;){let A=O,H=O-1;H<0&&(H=U.length-1);for(let k=0,ne=h+2*m;k<ne;k++){let V=K*k,se=K*(k+1);C(I+A+V,I+H+V,I+H+se,I+A+se)}}}function oe(U,I,O){l.push(U),l.push(I),l.push(O)}function $(U,I,O){R(U),R(I),R(O);let A=r.length/3,H=v.generateTopUV(n,r,A-3,A-2,A-1);F(H[0]),F(H[1]),F(H[2])}function C(U,I,O,A){R(U),R(I),R(A),R(I),R(O),R(A);let H=r.length/3,k=v.generateSideWallUV(n,r,H-6,H-3,H-2,H-1);F(k[0]),F(k[1]),F(k[3]),F(k[1]),F(k[2]),F(k[3])}function R(U){r.push(l[3*U+0]),r.push(l[3*U+1]),r.push(l[3*U+2])}function F(U){s.push(U.x),s.push(U.y)}(function(){let U=r.length/3;if(d){let I=0,O=K*I;for(let A=0;A<J;A++){let H=N[A];$(H[2]+O,H[1]+O,H[0]+O)}I=h+2*m,O=K*I;for(let A=0;A<J;A++){let H=N[A];$(H[0]+O,H[1]+O,H[2]+O)}}else{for(let I=0;I<J;I++){let O=N[I];$(O[2],O[1],O[0])}for(let I=0;I<J;I++){let O=N[I];$(O[0]+K*h,O[1]+K*h,O[2]+K*h)}}n.addGroup(U,r.length/3-U,0)})(),(function(){let U=r.length/3,I=0;Z(z,I),I+=z.length;for(let O=0,A=D.length;O<A;O++){let H=D[O];Z(H,I),I+=H.length}n.addGroup(U,r.length/3-U,1)})()}this.setAttribute("position",new Ae(r,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new yl[r.type]().fromJSON(r)),new i(n,e.options)}},Xy={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new le(s,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],g=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-f),new le(g,1-y)]:[new le(o,1-l),new le(h,1-u),new le(p,1-f),new le(m,1-y)]}},Eu=class i extends Br{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Tu=class i extends Br{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ii=class i extends Be{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new T,f=new le;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){let y=s+m/n*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<r;g++){let m=g*(n+1);for(let y=0;y<n;y++){let v=y+m,x=v,_=v+n+1,M=v+n+2,E=v+1;o.push(x,_,E),o.push(_,M,E)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},zr=class i extends Be{constructor(e=new ke([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;gi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let v=f[m];gi.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=gi.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let v=f[m];p=p.concat(v)}for(let m=0,y=p.length;m<y;m++){let v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,y=g.length;m<y;m++){let v=g[m],x=v[0]+u,_=v[1]+u,M=v[2]+u;n.push(x,_,M),l+=3}}this.setIndex(n),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},en=class i extends Be{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,p=[],f=[],g=[],m=[];for(let y=0;y<=n;y++){let v=[],x=y/n,_=0;y===0&&a===0?_=.5/t:y===n&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let E=M/t;u.x=-e*Math.cos(r+E*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(r+E*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+_,1-x),v.push(c++)}h.push(v)}for(let y=0;y<n;y++)for(let v=0;v<t;v++){let x=h[y][v+1],_=h[y][v],M=h[y+1][v],E=h[y+1][v+1];(y!==0||a>0)&&p.push(x,_,E),(y!==n-1||l<Math.PI)&&p.push(_,M,E)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},bu=class i extends Br{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},on=class i extends Be{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let g=f/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let g=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,y=(r+1)*(p-1)+f,v=(r+1)*p+f;a.push(g,m,v),a.push(m,y,v)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Su=class i extends Be{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new T,d=new T,p=new T,f=new T,g=new T,m=new T,y=new T;for(let x=0;x<=n;++x){let _=x/n*s*Math.PI*2;v(_,s,a,e,p),v(_+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),g.crossVectors(m,y),y.crossVectors(g,m),g.normalize(),y.normalize();for(let M=0;M<=r;++M){let E=M/r*Math.PI*2,b=-t*Math.cos(E),S=t*Math.sin(E);u.x=p.x+(b*y.x+S*g.x),u.y=p.y+(b*y.y+S*g.y),u.z=p.z+(b*y.z+S*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(M/r)}}for(let x=1;x<=n;x++)for(let _=1;_<=r;_++){let M=(r+1)*(x-1)+(_-1),E=(r+1)*x+(_-1),b=(r+1)*x+_,S=(r+1)*(x-1)+_;o.push(M,E,S),o.push(E,b,S)}function v(x,_,M,E,b){let S=Math.cos(x),w=Math.sin(x),P=M/_*x,D=Math.cos(P);b.x=E*(2+D)*.5*S,b.y=E*(2+D)*w*.5,b.z=E*Math.sin(P)*.5}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Vr=class i extends Be{constructor(e=new gl(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new le,h=new T,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let y=a.normals[m],v=a.binormals[m];for(let x=0;x<=r;x++){let _=x/r*Math.PI*2,M=Math.sin(_),E=-Math.cos(_);l.x=E*y.x+M*v.x,l.y=E*y.y+M*v.y,l.z=E*y.z+M*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let y=0;y<=r;y++)c.x=m/t,c.y=y/r,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let y=1;y<=r;y++){let v=(r+1)*(m-1)+(y-1),x=(r+1)*m+(y-1),_=(r+1)*m+y,M=(r+1)*(m-1)+y;f.push(v,x,M),f.push(x,_,M)}})()})(),this.setIndex(f),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new yl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},wu=class extends Be{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),y=o.getX(p+(g+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),uf(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),uf(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function uf(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var eM=Object.freeze({__proto__:null,BoxGeometry:Et,CapsuleGeometry:Ds,CircleGeometry:yu,ConeGeometry:Sn,CylinderGeometry:Me,DodecahedronGeometry:xu,EdgesGeometry:Ca,ExtrudeGeometry:Lt,IcosahedronGeometry:Eu,LatheGeometry:yi,OctahedronGeometry:Tu,PlaneGeometry:gn,PolyhedronGeometry:Br,RingGeometry:Ii,ShapeGeometry:zr,SphereGeometry:en,TetrahedronGeometry:bu,TorusGeometry:on,TorusKnotGeometry:Su,TubeGeometry:Vr,WireframeGeometry:wu});var xl=class extends Nt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},vn=class extends Tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Un=class extends vn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _l=class extends Tn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Xo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qy(i){let e=i.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,r){return i[n]-i[r]})),t}function df(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Yf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var pr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Au=class extends pr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:K0,endingEnd:K0}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case J0:s=e,o=2*t-n;break;case $0:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case J0:a=e,l=2*n-t;break;case $0:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),g=f*f,m=g*f,y=-d*m+2*d*g-d*f,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*g+.5*f,_=p*m-p*g;for(let M=0;M!==o;++M)s[M]=y*a[h+M]+v*a[c+M]+x*a[l+M]+_*a[u+M];return s}},Ru=class extends pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Cu=class extends pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Au(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&jy(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Uc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Xn.prototype.TimeBufferType=Float32Array,Xn.prototype.ValueBufferType=Float32Array,Xn.prototype.DefaultInterpolation=As;var tr=class extends Xn{constructor(e,t,n){super(e,t,n)}};tr.prototype.ValueTypeName="bool",tr.prototype.ValueBufferType=Array,tr.prototype.DefaultInterpolation=ws,tr.prototype.InterpolantFactoryMethodLinear=void 0,tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Xn{};Ml.prototype.ValueTypeName="color";var Li=class extends Xn{};Li.prototype.ValueTypeName="number";var Pu=class extends pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)sn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Di=class extends Xn{InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion",Di.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends Xn{constructor(e,t,n){super(e,t,n)}};nr.prototype.ValueTypeName="string",nr.prototype.ValueBufferType=Array,nr.prototype.DefaultInterpolation=ws,nr.prototype.InterpolantFactoryMethodLinear=void 0,nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Xn{};Ni.prototype.ValueTypeName="vector";var El=class{constructor(e="",t=-1,n=[],r=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Yy(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Xn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=qy(l);l=df(l,1,h),c=df(c,1,h),r||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new Li(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let g=[],m=[];Yf(d,g,m,p),g.length!==0&&f.push(new h(u,g,m))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let g=[],m=[];for(let y=0;y!==u[p].morphTargets.length;++y){let v=u[p];g.push(v.time),m.push(v.morphTarget===f?1:0)}r.push(new Li(".morphTargetInfluence["+f+"]",g,m))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(Ni,d+".position",u,"pos",r),n(Di,d+".quaternion",u,"rot",r),n(Ni,d+".scale",u,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let r=this.tracks[t];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Yy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return Ml;case"quaternion":return Di;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(i.type);if(i.times===void 0){let t=[],n=[];Yf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ir={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Iu=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Zy=new Iu,Ui=class{constructor(e){this.manager=e!==void 0?e:Zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},Lu=class extends Error{constructor(e,t){super(e),this.response=t}},Da=class extends Ui{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(Ai[e]!==void 0)return void Ai[e].push({onLoad:t,onProgress:n,onError:r});Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ai[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,g=0,m=new ReadableStream({start(y){(function v(){u.read().then((({done:x,value:_})=>{if(x)y.close();else{g+=_.byteLength;let M=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:p});for(let E=0,b=h.length;E<b;E++){let S=h[E];S.onProgress&&S.onProgress(M)}y.enqueue(_),v()}}),(x=>{y.error(x)}))})()}});return new Response(m)}throw new Lu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{ir.add(e,c);let h=Ai[e];delete Ai[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{let h=Ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Du=class extends Ui{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ir.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=Ea("img");function l(){h(),ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Tl=class extends Ui{constructor(e){super(e)}load(e,t,n,r){let s=new Xt,a=new Du(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,r),s}},Ns=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},bl=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mh=new Se,pf=new T,ff=new T,Na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ff),t.updateMatrixWorld(),mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nu=class extends Na{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Cs*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&r===t.aspect&&s===t.far||(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Sl=class extends Ns{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Nu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},mf=new Se,da=new T,gh=new T,Uu=class extends Na{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),n.position.copy(da),gh.copy(n.position),gh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gh),n.updateMatrixWorld(),r.makeTranslation(-da.x,-da.y,-da.z),mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf)}},Us=class extends Ns{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Uu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ou=class extends Na{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ou}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fr=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wl=class extends Ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ir.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then((c=>{t&&t(c),s.manager.itemEnd(e)})).catch((c=>{r&&r(c)})):(setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))})).then((function(c){return ir.add(e,c),t&&t(c),s.manager.itemEnd(e),c})).catch((function(c){r&&r(c),ir.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)}));ir.add(e,l),s.manager.itemStart(e)}};var tM=new Se,nM=new Se,iM=new Se;var Al=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=gf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function gf(){return performance.now()}var rM=new T,sM=new sn,aM=new T,oM=new T;var lM=new T,cM=new sn,hM=new T,uM=new T;var Ju="\\[\\]\\.:\\/",Ky=new RegExp("["+Ju+"]","g"),vh="[^"+Ju+"]",Jy="[^"+Ju.replace("\\.","")+"]",$y=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",vh)+/(WCOD+)?/.source.replace("WCOD",Jy)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh)+"$"),Qy=["material","materials","bones","map"],xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ky,"")}static parseTrackName(e){let t=$y.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Qy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=class{constructor(i,e,t){let n=t||xt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray],xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dM=new Float32Array(1);var vf=new Se,Rl=class{constructor(e,t,n=0,r=1/0){this.ray=new Ur(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(e,t=!0,n=[]){return Hu(e,this,n,t),n.sort(yf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Hu(e[r],this,n,t);return n.sort(yf),n}};function yf(i,e){return i.distance-e.distance}function Hu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Hu(s[a],e,t,!0)}}var Ua=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var pM=new le;var xf=new T,jo=new T,Cl=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xf.subVectors(e,this.start),jo.subVectors(this.end,this.start);let n=jo.dot(jo),r=jo.dot(xf)/n;return t&&(r=It(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},fM=new T;var mM=new T,gM=new Se,vM=new Se;var yM=new T,xM=new me,_M=new me;var MM=new T,EM=new T,TM=new T;var bM=new T,SM=new ba;var wM=new an;var AM=new T;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ex=new lr(-1,1,1,-1,0,1),$u=class extends Be{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}},tx=new $u,mr=class{constructor(e){this._mesh=new te(tx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gr=class extends On{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hi.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new mr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ha=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Bl=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gr(Fs),this.copyPass.material.blending=ci,this.clock=new Al}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ha!==void 0&&(a instanceof Ha?n=!0:a instanceof Bl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zl=class extends On{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}};var Zf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Vl=class extends On{constructor(){super();let e=Zf;this.uniforms=hi.clone(e.uniforms),this.material=new xl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new mr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ef?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ll&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Kf={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`};var Jf={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`};var $f={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`};function xi(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Be,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Qf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);let f=Qf(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function Qf(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new mt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<t;f++){let g=h.getComponent(d,f);o.setComponent(d+u,f,g)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function Qu(i,e){if(e===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Oa||e===Nl){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Oa)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var em={name:"japan-washi",concept:"\u548C\u7D19\u7D19\u96D5",countries:["\u65E5\u672C"],css:{"--ink":"#2a2420","--paper":"#f3ebdc","--wash":"232,220,198","--red":"#ae2a20","--gold":"#b8913a","--air":"#3c6a8c","--mute":"#7d7062","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f3ebdc","#ddcbad"],sea:"#2b4560",rings:["#36536e","#4f6e86"],land:"#efe4cf",side:"#a5825a",route:"#ae2a20",stitch:"#f5ecdc",bead:"#b8913a",air:"#3c6a8c",flagPaper:"#fbf6ec",sun:"#ffe1b6",hemi:["#fff4e2","#76664f"],hills:{count:60,sets:[[.55,["#c6b08a","#d4c19d","#e1d2b4","#ece2cc"]],[.3,["#b99063","#c8a171","#d6b483","#e3c99c"]],[.15,["#a9603e","#bd7448","#cf8c56","#dca66a"]]]},terrain:["#e8dcc0","#dccca7","#cfb98c","#c3a574","#b8915f","#ad7d4f","#9f6a43","#8f5a3a","#7d4c32","#6b3f2b","#5a3425","#f1ece2"],houses:["machiya"],trees:{perStop:10,along:110,coast:["pine"],inland:["maple","maple","cedar"],pine:["#3d5a3b","#4b6a45","#33503a"],colors:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b","#8a8c4a"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(40,60,80,.10)",i.lineWidth=e/160;let t=e/4;for(let n=-1;n<5;n++)for(let r=-1;r<3;r++){let s=r*t*2+(n%2?t:0),a=n*t/2;for(let o=4;o>=1;o--)i.beginPath(),i.arc(s,a+t,t*o/4,Math.PI,2*Math.PI),i.stroke()}}};var tm={name:"china-ink",concept:"\u6C34\u58A8\u9577\u5377",countries:["\u4E2D\u570B","\u9999\u6E2F","\u6FB3\u9580"],css:{"--ink":"#1f2220","--paper":"#f2efe6","--wash":"242,239,230","--red":"#b5281c","--gold":"#9a7b3c","--air":"#4a5d6a","--mute":"#6f706a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f2efe6","#d9d5c8"],sea:"#c9cec9",rings:["#d6dad3","#e2e4dc"],land:"#f4f1e8",side:"#6b6b66",route:"#b5281c",stitch:"#f4f1e8",bead:"#b5281c",air:"#4a5d6a",flagPaper:"#f7f4ec",sun:"#fff3df",hemi:["#fbf8f0","#6f706a"],terrain:["#e3e1d9","#cfcdc4","#b9b8b0","#a2a29b","#8a8b85","#72746f","#5c5e5a","#474a47","#343735","#262927","#1c1e1d","#f2f0ea"],hills:{count:60,sets:[[.55,["#c9c8c0","#a9a9a2","#878883","#666865"]],[.3,["#a9b8ad","#93a598","#7c9182","#667d6e"]],[.15,["#cdb48e","#bba077","#a68b63","#8f7653"]]]},trees:{perStop:10,along:110,coast:["pine","willow"],inland:["pine","bamboo","willow"],pine:["#2f3a33","#3f4a3c","#25302a"],colors:["#8a3a2c","#b5281c","#c9a34a","#7d8a5a","#a8452e","#6a7a4a","#b88a3a"],colorsBy:{pine:["#2f3a33","#3f4a3c","#25302a"],willow:["#6d7f5a","#7d8f68","#5d6f4c"],bamboo:["#4f6b45","#5d7a50","#43603b"]}},houses:["china"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(40,45,42,.13)",i.lineWidth=e/200;for(let t=0;t<10;t++){i.beginPath();let n=(t+.5)*e/10;for(let r=0;r<=e;r+=e/64)i.lineTo(r,n+Math.sin(r/e*Math.PI*4+t)*e/60);i.stroke()}}};var nm={name:"vietnam-lantern",concept:"\u71C8\u7C60\u5287\u5834",countries:["\u8D8A\u5357"],css:{"--ink":"#2b1d14","--paper":"#f6e7bf","--wash":"246,231,191","--red":"#c0392b","--gold":"#d9a032","--air":"#1f5d5a","--mute":"#7a6448","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6e3b4","#e7b27a"],sea:"#1f4b4a",rings:["#2a6260","#3f7a73"],land:"#f3e2b3",side:"#8a5a2b",route:"#c0392b",stitch:"#f2c14e",bead:"#e67e22",air:"#1f5d5a",flagPaper:"#fff3d6",sun:"#ffd28a",hemi:["#fff1d0","#6b4a2a"],terrain:["#d9d79a","#c3c97f","#a9b768","#8fa457","#76904a","#5f7b3f","#4b6636","#3b532d","#2e4226","#4a4f3a","#6a6a58","#ece6d2"],hills:{count:60,sets:[[.55,["#b9c27a","#9fb062","#869c50","#6d8643"]],[.3,["#d6cf7a","#c7c066","#b5ae55","#a29b47"]],[.15,["#9aa595","#86917f","#727d6b","#5f6959"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["palm","bamboo","banyan"],pine:["#2e4a32","#3a5a3c","#26402b"],colors:["#c0392b","#e67e22","#f2c14e","#6a8a3a","#d9a032","#8fa457","#b5502b"]},houses:["shophouse","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,230,170,.12)",i.lineWidth=e/220,[[.25,.3],[.72,.18],[.55,.7],[.12,.82],[.9,.62]].forEach(([t,n])=>{for(let r=1;r<=4;r++)i.beginPath(),i.arc(t*e,n*e,r*e/22,0,Math.PI*2),i.stroke()})}};var im={name:"thailand-gold",concept:"\u6696\u91D1\u6D6E\u96D5",countries:["\u6CF0\u570B","\u67EC\u57D4\u5BE8","\u5BEE\u570B","\u7DEC\u7538"],css:{"--ink":"#2a1f12","--paper":"#f6ead0","--wash":"246,234,208","--red":"#9b1d20","--gold":"#c8941c","--air":"#16404d","--mute":"#7d6a4a","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6ead0","#e8cf9b"],sea:"#1b2c4a",rings:["#263c5e","#365078"],land:"#f0e2c2",side:"#a07a2c",route:"#9b1d20",stitch:"#e7c66b",bead:"#d4a017",air:"#1b2c4a",flagPaper:"#fbf3df",sun:"#ffe0a0",hemi:["#fff2d6","#6a5330"],terrain:["#efdcae","#e5cd8f","#d9bc72","#cca95a","#bd9547","#ab823b","#967032","#7f5e2b","#6a4e25","#5a4220","#4a361b","#f3e6c8"],hills:{count:60,sets:[[.55,["#e0c77f","#cfae5e","#b99347","#a07a36"]],[.3,["#9fb06a","#87995a","#70824b","#5b6c3e"]],[.15,["#d08a5a","#bd7548","#a5623b","#8c5231"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["banyan","palm","bamboo"],pine:["#2f4a2e","#3b5a38","#283f27"],colors:["#e0a526","#d4a017","#9b1d20","#f0c94a","#c8941c","#b87a1a","#7a8a3a"]},houses:["thai","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(231,198,107,.16)",i.lineWidth=e/180;let t=6,n=e/t;for(let r=0;r<=t;r++)for(let s=0;s<=t;s++){let a=r*n,o=s*n;i.beginPath(),i.moveTo(a,o-n/2),i.lineTo(a+n/2,o),i.lineTo(a,o+n/2),i.lineTo(a-n/2,o),i.closePath(),i.stroke()}}};var rm={name:"indonesia-rainforest",concept:"\u96E8\u6797\u5149\u7A97",countries:["\u5370\u5C3C","\u83F2\u5F8B\u8CD3"],css:{"--ink":"#1f2a1e","--paper":"#f1ecd8","--wash":"241,236,216","--red":"#c2502d","--gold":"#c99a2e","--air":"#0f5a63","--mute":"#6a6a52","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#eef0dc","#c9dcc0"],sea:"#0f5a63",rings:["#1a7378","#3a9590"],land:"#e8e2c8",side:"#6e5a3a",route:"#c2502d",stitch:"#fdf3d0",bead:"#e0a526",air:"#0f5a63",flagPaper:"#fbf8ea",sun:"#fff0c8",hemi:["#f3f7e6","#3e5a3a"],terrain:["#cfe0a4","#b5d08a","#9cc074","#82ad60","#6b994f","#558443","#436f39","#345a30","#284628","#1f3a22","#5e5a4c","#efeee8"],hills:{count:60,sets:[[.55,["#a8c97a","#8cb560","#6f9c4c","#55843f"]],[.3,["#8a8576","#76715f","#625e4e","#504c3f"]],[.15,["#d3e07a","#bed06a","#a7be5a","#90aa4c"]]]},trees:{perStop:14,along:130,coast:["palm"],inland:["palm","banyan","bamboo"],pine:["#24442a","#2f5434","#1f3a24"],colors:["#e0a526","#c2502d","#f3e3a0","#6b994f","#d98a3a","#8cb560","#a8402b"]},houses:["bali","stilt"],seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,245,210,.14)";for(let t=0;t<8;t++)for(let n=0;n<24;n++){let r=n/24*e,s=(t+.5)*e/8+Math.sin(n/24*Math.PI*4)*e/40;i.beginPath(),i.arc(r,s,e/160,0,Math.PI*2),i.fill()}}};var sm={name:"malaysia-peranakan",concept:"\u5357\u6D0B\u82B1\u78DA",countries:["\u99AC\u4F86\u897F\u4E9E","\u65B0\u52A0\u5761","\u6C76\u840A"],css:{"--ink":"#2a2430","--paper":"#f6eedd","--wash":"246,238,221","--red":"#c8505d","--gold":"#c9a04a","--air":"#2f6db3","--mute":"#7a6c74","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f6eedd","#e6d6cf"],sea:"#2a5c8a",rings:["#3a74a0","#6aa3bf"],land:"#f6eedd",side:"#b9806a",route:"#c8505d",stitch:"#ffffff",bead:"#2f6db3",air:"#2f6db3",flagPaper:"#fffaf0",sun:"#ffe9cf",hemi:["#fff6ea","#5a5060"],terrain:["#e6efdc","#d3e8d2","#bfdfcb","#a8d3c0","#90c4b2","#79b3a3","#649f92","#528a80","#43756d","#3a625c","#7d8a86","#e2e6e3"],hills:{count:60,sets:[[.55,["#bfe0cc","#a6d3bd","#8dc4ad","#74b39c"]],[.3,["#a6d08f","#8cc07a","#73ab66","#5d9554"]],[.15,["#d9a28a","#c88d74","#b47960","#9d664f"]]]},trees:{perStop:12,along:110,coast:["palm"],inland:["banyan","palm"],pine:["#2a4a2e","#36583a","#223e26"],colors:["#c8505d","#e08a8f","#f2c6a0","#7fa96a","#d9a04a","#95ba7d","#b5404d"]},houses:["shophouse"],village:6,seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(255,255,255,.16)",i.lineWidth=e/200;let t=4,n=e/t;for(let r=0;r<t;r++)for(let s=0;s<t;s++){let a=(r+.5)*n,o=(s+.5)*n;for(let l=0;l<4;l++){let c=l*Math.PI/2;i.beginPath(),i.ellipse(a+Math.cos(c)*n*.2,o+Math.sin(c)*n*.2,n*.2,n*.1,c,0,Math.PI*2),i.stroke()}i.strokeRect(r*n,s*n,n,n)}}};var am={name:"korea-hanji",concept:"\u97D3\u7D19\u4E39\u9752",countries:["\u97D3\u570B"],css:{"--ink":"#22252a","--paper":"#f2ece0","--wash":"236,230,216","--red":"#b23a2e","--gold":"#c9a24a","--air":"#2e6b7a","--mute":"#6f6a62","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f2ece0","#d6d4c8"],sea:"#2a4a5e",rings:["#35596f","#4f7385"],land:"#ece6d6",side:"#7d6a55",route:"#b23a2e",stitch:"#f2ece0",bead:"#2e8b7a",air:"#2e6b7a",flagPaper:"#faf6ee",sun:"#fff0d6",hemi:["#f8f6ef","#5c5e5a"],hills:{count:60,sets:[[.5,["#bdb7a8","#cbc6b8","#d9d5c9","#e6e3d9"]],[.35,["#6f7f62","#829172","#97a486","#adb89c"]],[.15,["#9c6a4a","#b07d58","#c3946b","#d4ac84"]]]},terrain:["#e6e2d3","#d9d6c2","#c8c8ad","#b5b897","#a0a682","#8b946f","#77835e","#647250","#566244","#4a5340","#5f5f5c","#eeede8"],houses:["hanok"],trees:{perStop:10,along:110,coast:["pine"],inland:["pine","pine","ginkgo","maple"],pine:["#3f5a46","#4c6a52","#34503f"],colors:["#a8432f","#b85a32","#c98f3a","#d6ae4c","#8e4a34","#b0703a","#7f8456"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(30,55,75,.11)",i.lineWidth=e/170,i.lineCap="round";let t=e/14,n=(r,s,a)=>{for(let o=0;o<2;o++){let l=t*(1-o*.42);i.beginPath(),i.arc(r-a*t*.9,s,l,a>0?0:Math.PI,a>0?Math.PI*1.75:Math.PI*2.75),i.stroke(),i.beginPath(),i.arc(r+a*t*.9,s,l,a>0?Math.PI:0,a>0?Math.PI*2.75:Math.PI*1.75,a<0),i.stroke()}i.beginPath(),i.moveTo(r-t*2.2,s+t*.9),i.quadraticCurveTo(r,s+t*1.5,r+t*2.2,s+t*.9),i.stroke()};for(let r=0;r<4;r++)for(let s=-1;s<3;s++)n((s+r%2*.5)*e/2+e/4,r*e/4+e/8,r%2?-1:1)}};var om={name:"europe-atlas",concept:"\u53E4\u5730\u5716\u7D19\u96D5",countries:["\u6CD5\u570B","\u7FA9\u5927\u5229","\u6377\u514B","\u5967\u5730\u5229","\u745E\u58EB","\u5FB7\u570B","\u897F\u73ED\u7259","\u8377\u862D","\u6BD4\u5229\u6642","\u8461\u8404\u7259","\u82F1\u570B"],css:{"--ink":"#2b2622","--paper":"#f1e4c8","--wash":"241,228,200","--red":"#a8452e","--gold":"#b08a3e","--air":"#3f5f78","--mute":"#776a5c","--serif":'"Noto Serif CJK TC","Noto Serif TC",serif',"--sans":'"Noto Sans CJK TC","Noto Sans TC",sans-serif'},sky:["#f1e6cf","#c9d3d6"],sea:"#2f4c63",rings:["#3d5c73","#58768a"],land:"#eedcb4",side:"#94704a",route:"#a8452e",stitch:"#f4ead6",bead:"#b08a3e",air:"#3f5f78",flagPaper:"#faf5ea",sun:"#ffe9c8",hemi:["#f8f3e8","#646056"],hills:{count:60,sets:[[.45,["#9fb85a","#b2c66c","#c5d382","#d8e09c"]],[.35,["#d4a94a","#ddb85e","#e5c776","#edd694"]],[.2,["#3f6248","#4d7254","#5e8463","#729676"]]]},terrain:["#ece0b8","#dfdc9e","#cbd286","#b2c46f","#94b05e","#6f9455","#4f7650","#41604a","#7e8186","#9a9ca0","#bfc1c3","#f6f7f8"],houses:["timber","terracotta","chalet"],trees:{perStop:10,along:110,coast:["pine"],inland:["cedar","maple","maple","willow"],pine:["#3f5c43","#4a6a4c","#36503b"],colors:["#7a9a3e","#8fae4a","#b8b040","#c98f34","#6b8a3a","#a86a32","#5c7c3c"]},seaPattern(i,e){i.fillStyle="#fff",i.fillRect(0,0,e,e),i.strokeStyle="rgba(30,45,60,.10)",i.lineWidth=e/300;let t=24,n=6;for(let r=0;r<t;r++){let s=(r+.5)*e/t,a=r%3*.7,o=e/t*.18;i.beginPath();for(let l=0;l<=e;l+=2){let c=s+Math.sin(l/e*Math.PI*2*n+a)*o;l?i.lineTo(l,c):i.moveTo(l,c)}i.stroke()}}};var ed={"japan-washi":em,"china-ink":tm,"vietnam-lantern":nm,"thailand-gold":im,"indonesia-rainforest":rm,"malaysia-peranakan":sm,"korea-hanji":am,"europe-atlas":om};function Fa(i,e,t=0,n=0,r=0){let s=new te(i,e);return s.position.set(t,n,r),s.castShadow=s.receiveShadow=!0,s}var td=(i,e=14)=>new yi(i.map(([t,n])=>new le(t,n)),e),lm=i=>()=>(i=i*16807%2147483647)/2147483647,cm={karst(i,e=7){let t=new de,n=lm(e),r=["#8fa58a","#7d9879","#a3b59a","#6f8a6c"];for(let s=0;s<9;s++){let a=.5+n()*.7,o=.16+n()*.12,l=n()*6.28,c=n()*.9;t.add(Fa(td([[o,0],[o*.92,a*.55],[o*.75,a*.85],[o*.4,a*.98],[0,a]]),i(r[s%r.length]),Math.cos(l)*c*1.3,0,Math.sin(l)*c))}return t},terraces(i){let e=new de,t=["#9cbf6a","#b4d07e","#8bb35c","#c6dc93"];for(let n=0;n<7;n++){let r=1.3-n*.16,s=new ke;s.absarc(0,0,r,.15*Math.PI,.85*Math.PI,!1),s.absarc(0,0,r-.14,.85*Math.PI,.15*Math.PI,!0);let a=new Lt(s,{depth:.06,bevelEnabled:!1,curveSegments:18});a.rotateX(-Math.PI/2),e.add(Fa(a,i(t[n%t.length]),0,n*.06,.5))}return e},volcano(i){let e=new de;return e.add(Fa(td([[1.2,0],[.9,.18],[.5,.55],[.22,.85],[.16,.86],[.12,.8]],24),i("#8a7a6a"))),e.add(Fa(td([[.32,.72],[.22,.85],[.16,.86],[.12,.8]],24),i("#f4f1ea"))),e},dunes(i,e=3){let t=new de,n=lm(e),r=["#e8cf96","#e0c283","#edd8a8"];for(let s=0;s<6;s++){let a=new en(1,20,10,0,Math.PI*2,0,Math.PI/2);a.scale(.55+n()*.45,.1+n()*.12,.18+n()*.12),a.rotateY((n()-.5)*.5),t.add(Fa(a,i(r[s%r.length]),(n()-.5)*1.4,0,(s-2.5)*.24))}return t}};var vt=(i,e,t)=>new Et(i,e,t);function _e(i,e,t=0,n=0,r=0,s=0){let a=new te(i,e);return a.position.set(t,n,r),a.rotation.y=s,a.castShadow=a.receiveShadow=!0,a}function nx(i){let e=new de,t=i("#8c4b2f"),n=i("#efe6d4"),r=i("#5a4c43"),s=i("#c9a14a",null,{metalness:.4,roughness:.5}),a=0;e.add(_e(vt(.46,.06,.46),i("#bfb3a0"),0,.03)),a=.06;for(let o=0;o<5;o++){let l=.3-o*.03,c=.15;e.add(_e(vt(l,c,l),n,0,a+c/2)),e.add(_e(vt(l+.02,.025,l+.02),t,0,a+c-.01));let h=new Sn((l+.24)*.82,.1,4,1);h.rotateY(Math.PI/4),e.add(_e(h,r,0,a+c+.035)),a+=c+.06}e.add(_e(new Me(.012,.012,.32,6),s,0,a+.16));for(let o=0;o<6;o++)e.add(_e(new Me(.03,.03,.012,10),s,0,a+.04+o*.04));return e}function ix(i,e=1){let t=new de,n=i("#c8321e"),r=i("#2a2522"),s=new Me(.018*e,.022*e,.32*e,8);return t.add(_e(s,n,-.11*e,.16*e),_e(s,n,.11*e,.16*e)),t.add(_e(vt(.3*e,.03*e,.035*e),n,0,.26*e)),t.add(_e(vt(.38*e,.03*e,.045*e),r,0,.33*e)),t.add(_e(vt(.34*e,.025*e,.04*e),n,0,.305*e)),t}function rx(i){let e=new de,t=11;for(let n=0;n<t;n++){let r=n/(t-1),s=Math.sin(r*Math.PI*1.6)*.32,a=r*1.5,o=ix(i,1.25);o.position.set(s,0,a),o.rotation.y=Math.cos(r*Math.PI*1.6)*.6,e.add(o)}return e}function sx(i,e=2.4){let t=new de,n=i("#f2efe8"),r=i("#d9d4ca"),s=i("#bcb6aa"),a=24,o=l=>[(l-.5)*e,.22+Math.exp(-((l-.62)**2)/.006)*.16,Math.sin(l*Math.PI)*.18];for(let l=0;l<a;l++){let c=l/(a-1),[h,u,d]=o(c),[p,f]=o((l+1)/(a-1)),g=_e(vt(e/a+.01,.035,.11),n,h,u,d);g.rotation.z=Math.atan2(f-u,p-h),t.add(g),l%2===0&&t.add(_e(new Me(.018,.024,u,6),r,h,u/2,d)),t.add(_e(vt(e/a,.02,.012),s,h,u+.03,d+.05))}return t}function ax(i){let e=new de,t=i("#f4f1ea"),n=i("#e6e2da"),r=i("#a8825a"),s=1.6,a=20,o=u=>[(u-.5)*s,.14+Math.sin(u*Math.PI)*.06];for(let u=0;u<a;u++){let d=u/(a-1),[p,f]=o(d),[g,m]=o((u+1)/(a-1)),y=_e(vt(s/a+.01,.025,.1),t,p,f,0);y.rotation.z=Math.atan2(m-f,g-p),e.add(y)}let l=.42,c=[l-.16,.95],h=new te(new Me(.018,.05,.9,6),t);h.position.set(l-.08,.5,.06),h.rotation.z=.17,h.castShadow=!0,e.add(h),e.add(_e(vt(.16,.08,.16),t,l,.04,.06));for(let u=0;u<9;u++){let[d,p]=o(.08+u*.06),f=new T(c[0],c[1]-u*.025,.06),g=new T(d,p+.012,0),m=new te(new Me(.003,.003,f.distanceTo(g),4),n);m.position.copy(f).add(g).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new T(0,1,0),g.clone().sub(f).normalize()),e.add(m)}return[-1,1].forEach(u=>{for(let d=0;d<4;d++)e.add(_e(new Me(.012,.012,.16,5),r,u*(s/2+.05+d*.1),.06,0));e.add(_e(vt(.42,.02,.12),r,u*(s/2+.2),.14,0))}),e}function hm(i,e=["#7a5a43"]){let t=new de,n=1.6,r=[0,.36,.78,1.25],s=a=>.42*Math.pow(1-a/n,1.6)+.02;for(let a=0;a<16;a++){let o=a/16*n,l=(a+1)/16*n,c=i(e[a%e.length]);if([[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,u])=>{let d=new T(h*s(o),o,u*s(o)),p=new T(h*s(l),l,u*s(l)),f=new te(new Me(.012,.016,d.distanceTo(p),5),c);f.position.copy(d).add(p).multiplyScalar(.5),f.quaternion.setFromUnitVectors(new T(0,1,0),p.clone().sub(d).normalize()),f.castShadow=!0,t.add(f)}),a%2===0){let h=s(o)*2;[[0,1],[0,-1],[1,0],[-1,0]].forEach(([u,d])=>t.add(_e(vt(u?.008:h,.008,d?.008:h),c,u*s(o),o+.02,d*s(o))))}}return r.slice(1).forEach((a,o)=>t.add(_e(vt(s(a)*2.4,.025,s(a)*2.4),i(e[o%e.length]),0,a))),t.add(_e(new Me(.004,.01,.3,5),i("#d8dcd8"),0,n+.15)),t}function um(i,e="#c0392b"){let t=new de,n=i(e),r=i("#8a8f8c"),s=2.4,a=.62,o=.62,l=.16;t.add(_e(vt(s,.03,.1),r,0,l,0)),[-a,a].forEach(h=>{[-.06,.06].forEach(u=>t.add(_e(vt(.035,o,.03),n,h,o/2,u))),[.32,.5,o-.02].forEach(u=>t.add(_e(vt(.03,.03,.15),n,h,u,0)))});let c=h=>{let u=Math.abs(h);return u<=a?l+.06+(o-l-.06)*(u/a)**2:o-(u-a)/(s/2-a)*(o-l-.02)};return[-.06,.06].forEach(h=>{for(let u=0;u<40;u++){let d=-s/2+u/40*s,p=-s/2+(u+1)/40*s,f=new T(d,c(d),h),g=new T(p,c(p),h),m=new te(new Me(.006,.006,f.distanceTo(g),4),n);m.position.copy(f).add(g).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new T(0,1,0),g.clone().sub(f).normalize()),t.add(m),u%2===0&&c(d)>l+.03&&t.add(_e(new Me(.002,.002,c(d)-l,3),n,d,(c(d)+l)/2,h))}}),t}function ox(i){let e=new de,t=i("#7f9c95"),n=i("#5d7a74"),r=i("#9fb3ad");e.add(_e(vt(.34,.36,.34),r,0,.18)),e.add(_e(new Me(.15,.2,.14,4,1).rotateY(Math.PI/4),n,0,.43));let s=.5;for(let a=0;a<8;a++){let o=new Me(.17,.12,.16,4,1);o.rotateY(Math.PI/4),e.add(_e(o,a%2?t:n,0,s+.08)),s+=.165}return e.add(_e(new Me(.06,.1,.12,4).rotateY(Math.PI/4),n,0,s+.06)),e.add(_e(new Me(.008,.02,.4,6),i("#d8dcd8"),0,s+.32)),e}var gt=(i,e,t)=>new T(i,e,t),wn=(i,e,t)=>gt(Math.cos(e)*i,t,Math.sin(e)*i);function Tt(i,e,t,n=.006,r=4){let s=new te(new Me(n,n,e.distanceTo(t),r),i);return s.position.copy(e).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(gt(0,1,0),t.clone().sub(e).normalize()),s}function yn(i){i.updateMatrixWorld(!0);let e=new Map,t=new de;return i.traverse(n=>{if(!n.isMesh)return;let r=n.material.color.getHex()+"|"+n.material.opacity;e.has(r)||e.set(r,[n.material,[]]),e.get(r)[1].push((n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone()).applyMatrix4(n.matrixWorld))}),e.forEach(([n,r])=>{let s=new te(xi(r),n);s.castShadow=s.receiveShadow=!0,t.add(s),r.forEach(a=>a.dispose())}),t}function dm(i,{H:e=1.8,r0:t=.26,r1:n=.13,turn:r=2.3,n:s=24,col:a="#e2e4e1",cross:o=!1,core:l="#b9c1c6",deck:c=null,mast:h=.5}={}){let u=new de,d=i(a),p=g=>wn(t,0,0).lerp(wn(n,r,e),g).setY(0).length(),f=9;for(let g=0;g<=1;g+=.02)f=Math.min(f,p(g));(o?[1,-1]:[1]).forEach(g=>{for(let m=0;m<s;m++){let y=m/s*Math.PI*2;u.add(Tt(d,wn(t,y,0),wn(n,y+g*r,e),.008))}});for(let g=1;g<14;g++)u.add(_e(new on(p(g/14),.005,4,40).rotateX(Math.PI/2),d,0,g/14*e));return u.add(_e(new Me(f*.6,f*.7,e,12),i(l),0,e/2)),c?u.add(_e(new Me(n*1.05,n*.9,.09,24),i(c),0,e-.05),_e(new Me(n*.5,n*1.1,.04,24),i(c),0,e+.02)):u.add(_e(new on(n,.012,4,40).rotateX(Math.PI/2),d,0,e)),u.add(_e(new Me(.006,.022,h,6),i("#d8dcd8"),0,e+h/2)),yn(u)}function lx(i){let e=new de,t=i("#eceeed"),n=1.05,r=.4,s=a=>a<r?.05+.2*((r-a)/r)**1.8:.05+.09*((a-r)/(n-r))**1.5;for(let a=0;a<3;a++)for(let o of[-.2,.2]){let l=a/3*Math.PI*2+o;for(let c=0;c<12;c++){let h=c/12*n,u=(c+1)/12*n;e.add(Tt(t,wn(s(h),l,h),wn(s(u),l,u),.011,5))}}return e.add(_e(new on(s(r)+.006,.01,4,24).rotateX(Math.PI/2),t,0,r),_e(new Me(.032,.032,n,8),t,0,n/2),_e(new Me(.28,.3,.03,24),i("#b9b4aa"),0,.015)),e.add(_e(new Me(.17,.13,.05,28),i("#8fa3ad"),0,n),_e(new Me(.23,.17,.04,28),t,0,n+.045),_e(new on(.24,.008,4,40).rotateX(Math.PI/2),t,0,n+.03),_e(new Me(.04,.2,.06,28),i("#d9d6cf"),0,n+.095),_e(new Me(.004,.01,.28,6),t,0,n+.26)),yn(e)}function cx(i){let e=new de,t=i("#dfe7ec"),n=i("#7d97a8"),r=1.9,s=10,a=12,o=Math.PI/s,l=c=>.16*(1-c/r)**1.1+.05;for(let c=0;c<a;c++){let h=c/a*r,u=(c+1)/a*r,d=c%2*o;for(let p=0;p<s;p++){let f=p/s*Math.PI*2+d;e.add(Tt(t,wn(l(h),f,h),wn(l(u),f+o,u),.005),Tt(t,wn(l(h),f,h),wn(l(u),f-o,u),.005))}e.add(_e(new on(l(u),.004,3,30).rotateX(Math.PI/2),t,0,u))}for(let c=0;c<3;c++){let h=c/3*Math.PI*2+Math.PI/2;e.add(Tt(t,wn(.26,h,0),wn(l(.4),h,.4),.018,5))}return e.add(_e(new Me(l(r)*.7,l(0)*.5,r,12),i("#cdd7dd"),0,r/2)),[[.55,.06,.08],[.71,.035,.05]].forEach(([c,h,u])=>e.add(_e(new Me(l(c*r)+h,l(c*r)+h*.6,u,24),n,0,c*r))),e.add(_e(new Me(.008,.03,.36,8),t,0,r+.18)),yn(e)}function pm(i,{col:e="#7f868b",pylon:t="#cbbd9f",span:n=1.6,len:r=2.6}={}){let s=new de,a=i(e),o=.16,l=n/2,c=16,h=d=>.02+.35*(1-(d/l)**2),u=d=>.18+.25*(1-(d/l)**2);[-.07,.07].forEach(d=>{for(let p=0;p<c;p++){let f=-l+p/c*n,g=-l+(p+1)/c*n;s.add(Tt(a,gt(f,h(f),d),gt(g,h(g),d),.012),Tt(a,gt(f,u(f),d),gt(g,u(g),d),.01),Tt(a,gt(f,h(f),d),gt(f,u(f),d),.006),Tt(a,gt(f,h(f),d),gt(g,u(g),d),.005)),h(f)>o+.02&&s.add(Tt(a,gt(f,h(f),d),gt(f,o,d),.003))}s.add(Tt(a,gt(l,h(l),d),gt(l,u(l),d),.006))});for(let d=0;d<=c;d+=2){let p=-l+d/c*n;s.add(Tt(a,gt(p,u(p),-.07),gt(p,u(p),.07),.005))}return s.add(_e(vt(r,.03,.16),i("#8f9290"),0,o,0)),[-1,1].forEach(d=>{t&&[-.11,.11].forEach(p=>s.add(_e(vt(.1,.3,.06),i(t),d*(l+.06),.15,p)));for(let p=l+.2;p<r/2;p+=.14)s.add(_e(vt(.03,o,.1),i("#cfc9bd"),d*p,o/2,0))}),yn(s)}function hx(i,{col:e="#c0392b",spans:t=10,sw:n=.24,h:r=.09}={}){let s=new de,a=i(e),o=i("#cfc9bd"),l=.1,c=t*n;for(let h=0;h<=t;h++)s.add(_e(new Me(.02,.026,l,6),o,-c/2+h*n,l/2,0));for(let h=0;h<t;h++){let u=-c/2+h*n;[-.045,.045].forEach(d=>{for(let p=0;p<4;p++){let f=gt(u+(p+.5)/4*n,l+r,d);s.add(Tt(a,gt(u+p/4*n,l,d),f,.004),Tt(a,f,gt(u+(p+1)/4*n,l,d),.004))}s.add(Tt(a,gt(u,l,d),gt(u+n,l,d),.005),Tt(a,gt(u+n/8,l+r,d),gt(u+n*7/8,l+r,d),.005))});for(let d=0;d<4;d++){let p=u+(d+.5)/4*n;s.add(Tt(a,gt(p,l+r,-.045),gt(p,l+r,.045),.003))}}return s.add(_e(vt(c,.012,.09),i("#8f9290"),0,l,0)),yn(s)}function ux(i){let e=new de,t=i("#cdbf9f"),n=i("#5f6b70"),r=i("#6d9fc1"),s=.3,a=.62,o=.12,l=.65;return e.add(_e(vt(2*(s+l)+.1,.03,.14),i("#8f9290"),0,o,0)),[-s,s].forEach(c=>{e.add(_e(vt(.16,a,.16),t,c,a/2+.02,0),_e(vt(.22,.06,.24),t,c,.03,0)),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,u])=>e.add(_e(new Me(.022,.022,a+.06,8),t,c+h*.08,(a+.06)/2+.02,u*.08),_e(new Sn(.03,.09,8),n,c+h*.08,a+.125,u*.08))),e.add(_e(new Sn(.1,.16,4).rotateY(Math.PI/4),n,c,a+.1,0))}),[-.05,.05].forEach(c=>e.add(_e(vt(s*2-.16,.05,.035),r,0,a-.06,c))),[-1,1].forEach(c=>{e.add(_e(vt(.06,.14,.16),t,c*(s+l),o+.05,0)),[-.06,.06].forEach(h=>{let u=gt(c*s,a-.12,h);for(let d=1;d<=10;d++){let p=d/10,f=c*(s+p*l),g=(a-.12)*(1-p)+(o+.1)*p-Math.sin(p*Math.PI)*.1,m=gt(f,g,h);e.add(Tt(r,u,m,.009)),d<10&&e.add(Tt(r,m,gt(f,o,h),.003)),u=m}})}),yn(e)}function dx(i){let e=new de,t=new de,n=new de,r=i("#7a3b2a"),s=i("#e9e2d2");t.add(_e(new Me(.15,.18,.3,8),i("#8a4b38"),0,.15),_e(new Me(.1,.15,.5,8),i("#3f3b36"),0,.55),_e(new Me(.21,.21,.015,8),r,0,.32),_e(new en(.11,10,6,0,Math.PI*2,0,Math.PI/2).scale(1,.8,1.25),i("#5a5048"),0,.8));for(let l=0;l<4;l++){let c=new de;c.add(_e(vt(.018,.62,.012),r,0,.32),_e(vt(.1,.5,.004),s,.06,.36));for(let h=0;h<8;h++)c.add(_e(vt(.11,.006,.008),r,.06,.1+h*.07));c.rotation.z=l*Math.PI/2,n.add(c)}let a=new de,o=yn(n);return a.position.set(0,.83,.15),a.rotation.x=-.12,a.add(o),e.add(yn(t),a),e.userData.spin=o,e}function px(i){let e=new de,t=i("#f3f1ec"),n=16,r=.62,s=a=>a<.74?.08+.26*((.74-a)/.74)**1.5:.08+.09*((a-.74)/.26)**1.4;for(let a=0;a<n;a++){let o=a/n*Math.PI*2;for(let l=0;l<10;l++)e.add(Tt(t,wn(s(l/10),o,l/10*r),wn(s((l+1)/10),o,(l+1)/10*r),.02,5))}return e.add(_e(new yi(Array.from({length:11},(a,o)=>new le(s(o/10)*.94,o/10*r*.96)),32),i("#86a9c7",null,{transparent:!0,opacity:.75,side:st}))),e.add(_e(new Me(.34,.36,.03,32),i("#d9d4ca"),0,.015),_e(new Ii(.4,.62,40).rotateX(-Math.PI/2),i("#5d8fb0"),0,.006)),yn(e)}function fx(i){let e=new de,t=i("#a3a6a2"),n=.62,r=.5,s=30,a=l=>.26+.04*Math.cos(2*l),o=(l,c,h)=>gt(Math.cos(l)*n*c,h,Math.sin(l)*r*c);for(let l=0;l<s;l++){let c=l/s*Math.PI*2;[.55,-.55,.9].forEach(h=>e.add(Tt(t,o(c,.92,0),o(c+h,1,a(c+h)),.009))),e.add(Tt(t,o(c,1,a(c)),o(c+.7,.62,a(c+.7)+.02),.008),Tt(t,o(c,1,a(c)),o(c-.4,.62,a(c-.4)+.02),.008))}for(let l=0;l<48;l++){let c=l/48*Math.PI*2,h=(l+1)/48*Math.PI*2;e.add(Tt(t,o(c,1,a(c)),o(h,1,a(h)),.01),Tt(t,o(c,.62,a(c)+.02),o(h,.62,a(h)+.02),.008))}return e.add(_e(new Me(1,.86,1,40,1,!0).scale(n*.9,.24,r*.9),i("#b4412f",null,{side:st}),0,.12)),e.add(_e(new Me(1,1,.01,40).scale(n*.5,1,r*.5),i("#6f9a55"),0,.01)),yn(e)}var Gl={pagoda:nx,"torii-row":rx,bridge:sx,"cable-bridge":i=>yn(ax(i)),taipei101:ox,...cm,"lattice-tower":i=>yn(hm(i)),"lattice-tower-red":i=>yn(hm(i,["#d2452c","#f2efe8"])),"suspension-bridge":i=>yn(um(i)),"suspension-bridge-grey":i=>yn(um(i,"#8c949a")),"canton-tower":i=>dm(i),"kobe-port-tower":i=>dm(i,{H:.95,r0:.2,r1:.17,turn:2,n:16,col:"#c7352b",cross:!0,core:"#efe9df",deck:"#f1ede4",mast:.12}),needle:lx,skytree:cx,"arch-bridge":i=>pm(i),"arch-bridge-green":i=>pm(i,{col:"#6f7f76",pylon:null}),"truss-bridge-red":i=>hx(i),"tower-bridge":ux,windmill:dx,crown:px,"birds-nest":fx};var Ba=(i,e)=>Array.from({length:i},(t,n)=>e(n/i*Math.PI*2)),Bs=(i,e,t=0)=>[[t-i,0],[t+i,0],[t+i,e],[t-i,e]];function mx(i,e,t,n,r,s){let o=[],l=[];for(let c=0;c<=9;c++){let h=c/9,u=i+Math.cos(t)*n*h,d=e+Math.sin(t)*n*h-s*h*h,p=r*Math.sin(Math.PI*Math.min(1,h*1.15)),f=-Math.sin(t),g=Math.cos(t);o.push([u+f*p,d+g*p]),l.push([u-f*p,d-g*p])}return o.concat(l.reverse())}var nd={maple:[Ba(26,i=>{i=-Math.PI/2+.12+i*(1-.24/6.283);let e=.8+.2*Math.abs(Math.cos(i*3.5));return[Math.cos(i)*e,1.05+Math.sin(i)*e*.92]}).concat([[-.08,.3],[-.08,0],[.08,0],[.08,.3]])],pine:[[[-.09,0],[.09,0],[.09,.22],[.95,.22],[.42,.72],[.75,.68],[.3,1.18],[.52,1.14],[0,1.75],[-.52,1.14],[-.3,1.18],[-.75,.68],[-.42,.72],[-.95,.22],[-.09,.22]]],cedar:[[[-.07,0],[.07,0],[.07,.18],[.46,.18],[.22,.62],[.38,.6],[.16,1.08],[.28,1.06],[0,1.95],[-.28,1.06],[-.16,1.08],[-.38,.6],[-.22,.62],[-.46,.18],[-.07,.18]]],cherry:[Ba(28,i=>{let e=.78+.13*Math.abs(Math.cos(i*3));return[Math.cos(i)*e*1.2,1+Math.sin(i)*e*.72]}),Bs(.08,.5)],ginkgo:[Ba(24,i=>[Math.cos(i)*.62,1.12+Math.sin(i)*.78+(Math.sin(i)>0?.08*Math.sin(i):0)]),Bs(.07,.5)],willow:[[[-.07,0],[.07,0],[.07,.45],...Array.from({length:9},(i,e)=>{let t=.1+e/8*.78;return[t,(e%2?.42:.72)+t*.3]}),...Array.from({length:17},(i,e)=>{let t=e/16*Math.PI;return[Math.cos(t)*.88,1.15+Math.sin(t)*.55]}),...Array.from({length:9},(i,e)=>{let t=-.88+e/8*.78;return[t,(e%2?.42:.72)-t*.3]}),[-.07,.45]]],palm:[[[-.05,0],[.06,0],[.2,.8],[.22,1.5],[.15,1.5],[.12,.8]],...[2.75,2.25,1.8,1.35,.85,.35].map((i,e)=>mx(.18,1.5,i,.72+e%2*.14,.09,.42))],bamboo:[...[[-.35,1.6],[-.1,1.85],[.18,1.7],[.4,1.45]].flatMap(([i,e])=>[Bs(.035,e,i),Ba(14,t=>[i+Math.cos(t)*.22,e-.12+Math.sin(t)*.3])])],banyan:[Ba(28,i=>{let e=1+.08*Math.cos(i*6);return[Math.cos(i)*e*1.05,1.15+Math.sin(i)*e*.42]}),[[-.13,0],[.13,0],[.1,.9],[-.1,.9]],Bs(.025,.85,-.55),Bs(.025,.85,.5),Bs(.02,.85,.3)]},fm={maple:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b"],pine:["#3d5a3b","#4b6a45","#33503a"],cedar:["#2f4a35","#3a5a3e","#29412f"],cherry:["#f2c4c9","#ebb0b8","#f6d6d8"],ginkgo:["#e8b923","#d9a31a","#f0c94a"],willow:["#7f9a4a","#8fae5a","#6c8a3f"],palm:["#3f7a3a","#4c8a40","#356b35"],bamboo:["#5e8f3e","#6fa34a","#4f7d36"],banyan:["#3d6b3a","#4a7a42","#335c33"]};var Le=(i,e,t)=>new Et(i,e,t);function Ce(i,e,t=0,n=0,r=0){let s=new te(i,e);return s.position.set(t,n,r),s.castShadow=s.receiveShadow=!0,s}function vr(i,e,t,n,r){let s=new ke([new le(-i/2,0),new le(i/2,0),new le(0,e)]),a=new Lt(s,{depth:t,bevelEnabled:!1});return a.translate(0,0,-t/2),Ce(a,n,0,r)}function Wl(i,e,t,n,r,s=0){let a=new de,o=new Sn(Math.SQRT1_2,1,4,1);if(o.rotateY(Math.PI/4),o.scale(i,e,t),o.translate(0,e/2,0),a.add(Ce(o,n)),s){let l=new Me(Math.SQRT1_2*.9,Math.SQRT1_2,1,4,1);l.rotateY(Math.PI/4),l.scale(i+s,e*.18,t+s),a.add(Ce(l,n,0,e*.05))}return a.position.y=r,a}var Ut=(i,e)=>i[Math.floor(e()*i.length)%i.length],gx="#f3f1eb",Kn=(i,e,t)=>i(e.snow?gx:t);function mm(i,e,t,n,r,s,a,o){let l=t/2,c=Math.atan2(n,l),h=Math.hypot(l,n)+a,u=.03;[-1,1].forEach(d=>{let p=Ce(Le(h,u,r+o*2),e);p.rotation.z=-d*c,p.position.set(d*(Math.cos(c)*h/2+Math.sin(c)*u/2),s+n-Math.sin(c)*h/2+Math.cos(c)*u/2,0),i.add(p)}),i.add(Ce(Le(.045,.03,r+o*2+.01),e,0,s+n+u*.8))}function gm(i,e,t,n,r,s,a,o,l,c){let h=new de,u=n/3,d=Math.hypot(u,r)*.92,p=Math.atan2(r,u);(o?[-n/6,n/6]:[-n/2,-n/6,n/6,n/2]).forEach(f=>h.add(Ce(Le(.022,r,.012),e,f,s+r/2))),l&&o===0?h.add(Ce(Le(.09,.19,.014),e,0,s+.095)):h.add(Ce(Le(.08,.12,.014),t,0,s+r*.55)),[-1,1].forEach(f=>{let g=c()>.6;[1,-1].forEach((m,y)=>{if(g&&y)return;let v=Ce(Le(d,.016,.012),e,f*u,s+r/2);v.rotation.z=m*f*p,h.add(v)})}),h.rotation.y=o,o?h.position.x=a:h.position.z=a,i.add(h)}function Xr(i,e,t,n,r,s,a=0,o=null){let l=new de;return l.add(Ce(Le(.07,.1,.012),e)),l.add(Ce(Le(.03,.1,.014),i,-.052)),l.add(Ce(Le(.03,.1,.014),i,.052)),l.add(Ce(Le(.1,.012,.024),t,0,-.056,.006)),o!==null?(l.position.set(o,r,s),l.rotation.y=Math.sign(o)*Math.PI/2):(l.position.set(n,r,s),l.rotation.y=a),l}var Xl={machiya(i,e,t={}){let n=new de,r=.9,s=.7;return n.add(Ce(Le(r,.5,s),i(Ut(["#efe6d4","#e8dcc4","#d9c3a0"],e)),0,.25)),n.add(Ce(Le(r+.02,.1,s+.02),i("#7a5034"),0,.42)),n.add(vr(r+.2,.38,s+.18,Kn(i,t,Ut(["#4a4642","#57524c","#3e3b38"],e)),.5)),n},hanok(i,e,t={}){let n=new de;return n.add(Ce(Le(1,.12,.7),i("#c9c2b4"),0,.06)),n.add(Ce(Le(.86,.38,.56),i(Ut(["#efe7d6","#e6dac2"],e)),0,.31)),n.add(Wl(1.25,.42,.9,Kn(i,t,"#4d4f52"),.5,.12)),n},china(i,e,t={}){let n=new de,r=i("#f1eee6"),s=i("#2f3236"),a=t.snow?Kn(i,t):s,o=.8,l=.9;return n.add(Ce(Le(o,.7,l),r,0,.35)),n.add(vr(o-.05,.22,l-.02,a,.7)),[-1,1].forEach(c=>{[[.92,.9],[.58,1.02],[.24,1.14]].forEach(([h,u])=>{n.add(Ce(Le(.08,u,h*l),r,c*(o/2+.02),u/2)),n.add(Ce(Le(.12,.05,h*l+.02),a,c*(o/2+.02),u))})}),n},shophouse(i,e,t={}){let n=new de,r=["#f4c7b8","#bfe0d2","#f6e3a1","#c9d8f0","#f2d2dc","#e9c46a"];for(let s=0;s<3;s++){let a=(s-1)*.42;n.add(Ce(Le(.4,.8,.9),i(Ut(r,e)),a,.4)),n.add(Ce(Le(.22,.2,.02),i("#5a7a6a"),a,.58,.46)),n.add(Ce(Le(.22,.28,.02),i("#6b4b3a"),a,.16,.46))}return n.add(vr(.62,.26,1.32,Kn(i,t,"#b5533c"),.8).rotateY(Math.PI/2)),n},stilt(i,e,t={}){let n=new de,r=i("#8a6040");return[[-.32,-.25],[.32,-.25],[-.32,.25],[.32,.25]].forEach(([s,a])=>n.add(Ce(new Me(.035,.035,.36,6),r,s,.18,a))),n.add(Ce(Le(.8,.06,.66),r,0,.38)),n.add(Ce(Le(.7,.3,.56),i(Ut(["#c9a36e","#b98d58"],e)),0,.56)),n.add(vr(1,.55,.8,Kn(i,t,Ut(["#a8864f","#9b7a45","#b39256"],e)),.7)),n},thai(i,e,t={}){let n=new de,r=i("#d4a62a",null,{metalness:.4,roughness:.45});return n.add(Ce(Le(.6,.45,.95),i("#f3ede1"),0,.225)),n.add(vr(.86,.42,1.1,Kn(i,t,"#a8322a"),.45)),n.add(vr(.64,.36,.9,Kn(i,t,"#2f6b4a"),.68)),[-1,1].forEach(s=>n.add(Ce(new Sn(.03,.2,5),r,0,1.08,s*.45))),n},taiwan(i,e){let t=new de,n=["#e9e4da","#d8d2c6","#cfc6b4","#e2d7c3","#bfc4c0"];for(let r=0;r<3;r++){let s=(r-1)*.36,a=.55+e()*.45;t.add(Ce(Le(.34,a,.8),i(Ut(n,e)),s,a/2)),t.add(Ce(Le(.26,.06,.02),i("#6b7b7e"),s,a*.6,.41)),e()>.35&&t.add(Ce(new Me(.06,.06,.1,10),i(Ut(["#e8eef0","#c9d6dc","#d9c8a8"],e)),s+.06,a+.05,-.15))}return t.add(Ce(Le(1.1,.14,.08),i("#8a8f8c"),0,.14,.44)),t},bali(i,e,t={}){let n=new de,r=3+Math.floor(e()*3);n.add(Ce(Le(.5,.25,.5),i("#8d8574"),0,.125)),n.add(Ce(Le(.18,.25,.18),i("#5b4a3a"),0,.37));for(let s=0;s<r;s++)n.add(Wl(.72-s*.1,.16,.72-s*.1,Kn(i,t,"#3a3029"),.48+s*.13));return n},timber(i,e,t={}){let n=new de,r=e()>.5?3:2,s=.6,a=.72,o=.3,l=i(Ut(["#f3ead8","#efe2c6","#f4ecdc","#ece0c8"],e)),c=i(Ut(["#4a3324","#3e2b1f","#5a3d28"],e)),h=i("#46525c"),u=Ut(["#a8452e","#b5533c","#9a3f2c"],e);n.add(Ce(Le(s+.04,.08,a+.04),i("#b9ad98"),0,.04));let d=.08,p=s,f=a;for(let m=0;m<r;m++)p=s+m*.035,f=a+m*.03,n.add(Ce(Le(p,o,f),l,0,d+o/2)),n.add(Ce(Le(p+.012,.024,f+.012),c,0,d+o-.012)),[-1,1].forEach(y=>gm(n,c,h,p,o,d,y*(f/2+.004),0,m===0,e)),[-1,1].forEach(y=>gm(n,c,h,f,o,d,y*(p/2+.004),Math.PI/2,!1,e)),d+=o;let g=.56;return n.add(vr(p,g,f,l,d)),[-1,1].forEach(m=>{let y=m*(f/2+.005);n.add(Ce(Le(.022,g*.9,.012),c,0,d+g*.45,y)),n.add(Ce(Le(p*.62,.02,.012),c,0,d+g*.38,y)),n.add(Ce(Le(.07,.09,.012),h,.075,d+g*.2,y+m*.002)),n.add(Ce(Le(.07,.09,.012),h,-.075,d+g*.2,y+m*.002))}),mm(n,Kn(i,t,u),p,g,f,d,.08,.06),e()>.4&&n.add(Ce(Le(.07,.16,.07),i("#8a6a55"),p*.22,d+g*.62,-f*.2)),n},terracotta(i,e,t={}){let n=new de,r=.82,s=.66,a=.6,o=Ut(["#dca36a","#e2b07a","#d4925a","#e8bd88"],e),l=Ut(["#c0643a","#b8582f","#cc7347"],e),c=i(Ut(["#4f6b4a","#5c7a52","#46624a"],e)),h=i("#3e4a52"),u=i("#efe6d6");if(n.add(Ce(Le(r,a,s),i(o),0,a/2)),n.add(Ce(Le(r+.01,.05,s+.01),u,0,a-.025)),n.add(Wl(r+.1,.17,s+.1,Kn(i,t,l),a,.05)),[-1,1].forEach(d=>{[-.22,.22].forEach(p=>n.add(Xr(c,h,u,p,.43,d*(s/2+.006),d>0?0:Math.PI))),d>0&&(n.add(Xr(c,h,u,.22,.17,s/2+.006,0)),n.add(Ce(Le(.1,.2,.014),i("#6b4a32"),-.18,.1,s/2+.006)))}),[-1,1].forEach(d=>n.add(Xr(c,h,u,0,.43,0,0,d*(r/2+.006)))),e()>.35){let g=r/2+.2-.02;n.add(Ce(Le(.4,.38,.48),i(Ut(["#e6b984","#d89c62","#eec596"],e)),g,.38/2,-.04)),n.add(Wl(.4+.08,.12,.48+.08,Kn(i,t,l),.38,.04).translateX(g).translateZ(-.04)),n.add(Xr(c,h,u,g+.04,.2,-.04+.48/2+.006,0))}return e()>.5&&n.add(Ce(Le(.08,.14,.08),i(o),-r*.28,a+.12,-s*.18)),n},chalet(i,e,t={}){let n=new de,r=.86,s=.76,a=.3,o=.32,l=i(Ut(["#a39d92","#9a948a","#b0aa9e"],e)),c=i(Ut(["#8a5a36","#7a4e2e","#9a6a40"],e)),h=i("#c8a070"),u=i("#4a3426"),d=i("#3e4a52"),p=i(Ut(["#4f6b4a","#a8452e","#5c7a52"],e)),f=Ut(["#c83a3a","#d8506a","#e07a3a"],e),g=i("#e8dcc6");n.add(Ce(Le(r+.02,a,s+.02),l,0,a/2)),n.add(Ce(Le(r,o,s),c,0,a+o/2));for(let x=1;x<4;x++)n.add(Ce(Le(r+.006,.008,s+.006),u,0,a+x*o/4));let m=a+o,y=.27;n.add(vr(r,y,s,c,m)),mm(n,Kn(i,t,Ut(["#5a4a40","#4e4038","#665247"],e)),r,y,s,m,.2,.2),[-1,1].forEach(x=>{let _=x*(s/2+.006);n.add(Ce(Le(r*.96,.022,.014),h,0,m+.012,_)),[-.09,.09].forEach(M=>n.add(Ce(Le(.06,.08,.014),d,M,m+.09,_)))});let v=s/2+.006;[-.26,.26].forEach(x=>n.add(Xr(p,d,g,x,.16,v+.01,0))),n.add(Ce(Le(.11,.2,.014),u,0,.1,v+.01)),[-.26,0,.26].forEach(x=>n.add(Xr(p,d,g,x,a+.17,v,0))),n.add(Ce(Le(r*.94,.024,.13),h,0,a+.02,v+.065)),n.add(Ce(Le(r*.94,.075,.014),h,0,a+.07,v+.125));for(let x=-5;x<=5;x++)n.add(Ce(Le(.006,.06,.016),u,x*r*.085,a+.07,v+.128));return t.snow?n.add(Ce(Le(r*.9,.028,.032),h,0,a+.12,v+.12)):(n.add(Ce(Le(r*.9,.028,.032),i("#6b8a3f"),0,a+.12,v+.12)),n.add(Ce(Le(r*.88,.02,.028),i(f),0,a+.143,v+.12))),[-1,1].forEach(x=>[-.18,.18].forEach(_=>n.add(Xr(p,d,g,0,a+.17,_,0,x*(r/2+.006))))),n}};var jl=class extends Ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Td(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=fr.extractUrlBase(e);a=fr.resolveURL(c,this.path)}else a=fr.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Da(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mm){try{a[Qe.KHR_BINARY_GLTF]=new bd(e)}catch(u){r&&r(u);return}s=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Id(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:a[u]=new od;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Sd(s,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[u]=new wd;break;case Qe.KHR_MESH_QUANTIZATION:a[u]=new Ad;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function vx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ad=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ln);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Us(h),c.distance=u;break;case"spot":c=new Sl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},od=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let r=[];e.color=new me(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ln),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(r)}},ld=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},cd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(o,o)}return Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],ln)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(o[0],o[1],o[2],ln),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(o[0],o[1],o[2],ln),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},_d=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Md=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ed=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}},Td=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let f of u){let g=new Se,m=new T,y=new sn,v=new T(1,1,1),x=new bn(f.geometry,f.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&y.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,g.compose(m,y,v));for(let _ in l)if(_==="_COLOR_0"){let M=l[_];x.instanceColor=new Or(M.array,M.itemSize,M.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&f.geometry.setAttribute(_,l[_]);ht.prototype.copy.call(x,f),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Mm="glTF",ka=12,vm={JSON:1313821514,BIN:5130562},bd=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-ka,s=new DataView(e,ka),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===vm.JSON){let c=new Uint8Array(e,ka+a,o);this.content=n.decode(c)}else if(l===vm.BIN){let c=ka+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Cd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Cd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=ks[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(let f in p.attributes){let g=p.attributes[f],m=l[f];m!==void 0&&(g.normalized=m)}u(p)},o,c,ln,d)})})}},wd=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ad=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},ql=class extends pr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=r-t,u=(n-t)/h,d=u*u,p=d*u,f=e*c,g=f-c,m=-2*p+3*d,y=p-d,v=1-m,x=y-d+u;for(let _=0;_!==o;_++){let M=a[g+_+o],E=a[g+_+l]*h,b=a[f+_+o],S=a[f+_]*h;s[_]=v*M+x*E+m*b+y*S}return s}},yx=new sn,Rd=class extends ql{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return yx.fromArray(s).normalize().toArray(s),s}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ym={9728:$t,9729:Dn,9984:zu,9985:fa,9986:xs,9987:Ci},xm={33071:Dr,33648:xa,10497:mn},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xx={CUBICSPLINE:void 0,LINEAR:As,STEP:ws},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _x(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new vn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fu})),i.DefaultMaterial}function jr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mx(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(r){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ex(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tx(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=i.indices+":"+sd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+sd(i.targets[n]);return e}function sd(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Sx=new Se,Id=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Tl(this.options.manager):this.textureLoader=new wl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return jr(s,o,r),Oi(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(fr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=id[r.type],o=ks[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new mt(c,a,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=id[r.type],c=ks[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,f=r.normalized===!0,g,m;if(p&&p!==u){let y=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+y+":"+r.count,x=t.cache.get(v);x||(g=new c(o,y*p,r.count*p/h),x=new Sa(g,p/h),t.cache.add(v,x)),m=new wa(x,l,d%p/h,f)}else o===null?g=new c(r.count*l):g=new c(o,d,r.count*l),m=new mt(g,l,f);if(r.sparse!==void 0){let y=id.SCALAR,v=ks[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,M=new v(a[1],x,r.sparse.count*y),E=new c(a[2],_,r.sparse.count*l);o!==null&&(m=new mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,S=M.length;b<S;b++){let w=M[b];if(m.setX(w,E[b*l]),l>=2&&m.setY(w,E[b*l+1]),l>=3&&m.setZ(w,E[b*l+2]),l>=4&&m.setW(w,E[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=ym[d.magFilter]||Dn,h.minFilter=ym[d.minFilter]||Ci,h.wrapS=xm[d.wrapS]||mn,h.wrapT=xm[d.wrapT]||mn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==Dn,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=r.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(g){let m=new Xt(g);m.needsUpdate=!0,d(m)}),t.load(fr.resolveURL(u,s.path),f,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Oi(u,a),u.userData.mimeType=a.mimeType||bx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Hr,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new li,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return vn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let u=r[Qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ln),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=st);let h=s.alphaMode||rd.OPAQUE;if(h===rd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===rd.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new le(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Qt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qt){let u=s.emissiveFactor;o.emissive=new me().setRGB(u[0],u[1],u[2],ln)}return s.emissiveTexture!==void 0&&a!==Qt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,wt)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Oi(u,s),t.associations.set(u,{materials:e}),s.extensions&&jr(r,u,s),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return _m(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Tx(c),u=r[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=_m(new Be,c,t),r[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?_x(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let g=h[p],m=a[p],y,v=c[p];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)y=s.isSkinnedMesh===!0?new ll(g,v):new te(g,v),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?y.geometry=Qu(y.geometry,Nl):m.mode===Jn.TRIANGLE_FAN&&(y.geometry=Qu(y.geometry,Oa));else if(m.mode===Jn.LINES)y=new ur(g,v);else if(m.mode===Jn.LINE_STRIP)y=new hr(g,v);else if(m.mode===Jn.LINE_LOOP)y=new dl(g,v);else if(m.mode===Jn.POINTS)y=new Ls(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(y.geometry.morphAttributes).length>0&&Ex(y,s),y.name=t.createUniqueName(s.name||"mesh_"+e),Oi(y,s),m.extensions&&jr(r,y,m),t.assignFinalMaterial(y),u.push(y)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&jr(r,u[0],s),u[0];let d=new de;s.extensions&&jr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Ol.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new lr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Se;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new cl(o,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let p=r.channels[u],f=r.samplers[p.sampler],g=p.target,m=g.node,y=r.parameters!==void 0?r.parameters[f.input]:f.input,v=r.parameters!==void 0?r.parameters[f.output]:f.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",y)),l.push(this.getDependency("accessor",v)),c.push(f),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],g=u[3],m=u[4],y=[];for(let v=0,x=d.length;v<x;v++){let _=d[v],M=p[v],E=f[v],b=g[v],S=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let w=n._createAnimationTracks(_,M,E,b,S);if(w)for(let P=0;P<w.length;P++)y.push(w[P])}return new El(s,void 0,y)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Sx)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Aa:c.length>1?h=new de:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Oi(h,s),s.extensions&&jr(n,h,s),s.matrix!==void 0){let u=new Se;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new de;n.name&&(s.name=r.createUniqueName(n.name)),Oi(s,n),n.extensions&&jr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of r.associations)(d instanceof Tn||d instanceof Xt)&&u.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,l=[];yr[s.path]===yr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(yr[s.path]){case yr.weights:c=Li;break;case yr.rotation:c=Di;break;case yr.position:case yr.scale:c=Ni;break;default:n.itemSize===1?c=Li:c=Ni;break}let h=r.interpolation!==void 0?xx[r.interpolation]:As,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let f=new c(l[d]+"."+yr[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Pd(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Di?Rd:ql;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wx(i,e,t){let n=e.attributes,r=new an;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){let h=Pd(ks[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new T,l=new T;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let g=Pd(ks[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new En;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function _m(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Cd[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Je.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Oi(i,e),wx(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Mx(i,e.targets,t):i})}var za={\u65E5\u672C:{houses:["machiya"],robe:.3,robeColors:["#b8342a","#2f4a6b","#7a5a8c","#d98c5f","#3d5a3b","#e6c9a8"],note:"\u548C\u670D\u591A\u898B\u65BC\u4EAC\u90FD\u7B49\u89C0\u5149\u5340\uFF0C\u8207\u65E5\u5E38\u670D\u6DF7\u5408"},\u97D3\u570B:{houses:["hanok"],robe:.12,trees:{low:["pine","maple","ginkgo"],high:["pine"]},robeColors:["#d94f6a","#f2c14e","#4f8fbf","#7fbf8f"],note:"\u97D3\u670D\u591A\u898B\u65BC\u5BAE\u6BBF\u5468\u908A"},\u53F0\u7063:{houses:["taiwan"],robe:0,trees:{low:["banyan","bamboo","palm"],high:["cedar","pine"]},note:"\u539F\u4F4F\u6C11\u65CF\u4EBA\u7269\u898B kit/peoples.json\uFF08\u793A\u610F\uFF09"},\u4E2D\u570B:{houses:["china"],robe:0,trees:{low:["willow","pine","bamboo"],high:["pine"]}},\u9999\u6E2F:{houses:["taiwan"],robe:0},\u6FB3\u9580:{houses:["shophouse"],robe:0},\u8D8A\u5357:{houses:["shophouse","stilt"],robe:.12,robeColors:["#f4efe6","#c0392b","#f2c14e","#7fb3d5"],note:"\u5967\u9EDB"},\u6CF0\u570B:{houses:["thai","stilt"],robe:0},\u67EC\u57D4\u5BE8:{houses:["stilt"],robe:0},\u5BEE\u570B:{houses:["stilt"],robe:0},\u7DEC\u7538:{houses:["stilt"],robe:0},\u99AC\u4F86\u897F\u4E9E:{houses:["shophouse"],robe:0},\u65B0\u52A0\u5761:{houses:["shophouse"],robe:0},\u6C76\u840A:{houses:["shophouse"],robe:0},\u5370\u5C3C:{houses:["bali","stilt"],robe:0},\u83F2\u5F8B\u8CD3:{houses:["stilt"],robe:0},\u5FB7\u570B:{houses:["timber","chalet"],robe:0},\u6377\u514B:{houses:["timber","chalet"],robe:0},\u5967\u5730\u5229:{houses:["timber","chalet"],robe:0},\u745E\u58EB:{houses:["chalet","timber"],robe:0},\u6CD5\u570B:{houses:["timber","terracotta"],robe:0},\u7FA9\u5927\u5229:{houses:["terracotta"],robe:0},\u897F\u73ED\u7259:{houses:["terracotta"],robe:0},\u8461\u8404\u7259:{houses:["terracotta"],robe:0},\u8377\u862D:{houses:["timber"],robe:0},\u6BD4\u5229\u6642:{houses:["timber"],robe:0},\u82F1\u570B:{houses:["timber"],robe:0}},Va=["#f2efe8","#2f4a6b","#c8a46a","#8c9a8a","#d9d4ca","#3a3633","#b56a4a","#6f8fb0","#e8c9b0"],Yl=new Set(["\u53F0\u5317","\u9AD8\u96C4","\u53F0\u4E2D","\u6771\u4EAC","\u5927\u962A","\u4EAC\u90FD","\u540D\u53E4\u5C4B","\u798F\u5CA1","\u9996\u723E","\u91DC\u5C71","\u4E0A\u6D77","\u5317\u4EAC","\u9999\u6E2F","\u5EE3\u5DDE","\u6DF1\u5733","\u66FC\u8C37","\u6CB3\u5167","\u80E1\u5FD7\u660E\u5E02","\u5409\u9686\u5761","\u65B0\u52A0\u5761","\u99AC\u5C3C\u62C9","\u96C5\u52A0\u9054"]);function Ld(i,e=.95){let t=[];if(i.forEach(r=>{r.updateMatrixWorld(!0),r.traverse(s=>{if(!s.isMesh)return;let a=s.geometry.clone().applyMatrix4(s.matrixWorld);a.index&&(a=a.toNonIndexed()),["uv","uv1","uv2"].forEach(h=>a.deleteAttribute(h)),a.clearGroups();let o=(Array.isArray(s.material)?s.material[0]:s.material).color,l=a.attributes.position.count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c.set([o.r,o.g,o.b],h*3);a.setAttribute("color",new mt(c,3)),t.push(a)})}),!t.length)return null;let n=new te(xi(t),new vn({vertexColors:!0,roughness:e,metalness:0}));return n.castShadow=n.receiveShadow=!0,n}function Em(i){let e=[0];for(let t=1;t<i.length;t++)e.push(e[t-1]+Math.hypot(i[t][0]-i[t-1][0],i[t][1]-i[t-1][1]));return{pts:i,acc:e,len:e[e.length-1],at(t){t=(t%this.len+this.len)%this.len;let n=1;for(;n<e.length-1&&e[n]<t;)n++;let r=(t-e[n-1])/(e[n]-e[n-1]||1),s=i[n-1],a=i[n];return[s[0]+(a[0]-s[0])*r,s[1]+(a[1]-s[1])*r,Math.atan2(a[0]-s[0],a[1]-s[1])]}}}function Tm({scene:i,J:e,T:t,mat:n,groundY:r,onLand:s,R:a,H:o,avoid:l,focus:c=[],snowAt:h=()=>!1}){let u=(B,Z)=>{let oe=null,$=1e9;return e.cities.forEach(C=>{let R=Math.hypot(C.xy[0]-B,C.xy[1]-Z);R<$&&($=R,oe=C.country)}),oe},d=B=>Math.min(...B.filter((Z,oe)=>oe%3===0).map(([Z,oe])=>Math.min(...c.map($=>Math.hypot($[0]-Z,$[1]-oe)))));function p(B,Z,oe){let $=[],C=[],R=0;B.forEach(U=>{let I=[];for(let O=1;O<U.length;O++){let[A,H]=U[O-1],[k,ne]=U[O],V=Math.max(1,Math.ceil(Math.hypot(k-A,ne-H)/.12));for(let se=O===1?0:1;se<=V;se++)I.push([A+(k-A)*se/V,H+(ne-H)*se/V])}if(!(I.length<2)){I.forEach(([O,A],H)=>{let[k,ne]=I[Math.max(0,H-1)],[V,se]=I[Math.min(I.length-1,H+1)],ae=V-k,ce=se-ne,ye=Math.hypot(ae,ce)||1,ge=-ce/ye*Z/2,Ee=ae/ye*Z/2,Pe=r(O,A)+oe;$.push(O+ge,Pe,-(A+Ee),O-ge,Pe,-(A-Ee))});for(let O=0;O<I.length-1;O++){let A=R+O*2;C.push(A,A+1,A+2,A+1,A+3,A+2)}R+=I.length*2}});let F=new Be;return F.setAttribute("position",new Ae($,3)),F.setIndex(C),F.computeVertexNormals(),F}let f=B=>B.filter(Z=>Z.t!=="F").map(Z=>Z.pts.filter(([oe,$])=>s(oe,$))).filter(Z=>Z.length>1),g=f(e.roads.filter(B=>B.t==="H")),m=f(e.roads.filter(B=>B.t!=="H")),y=f(e.rail);[[m,.026,.006,t.road||"#e9dfc9"],[g,.042,.008,t.highway||"#cdb88f"],[y,.018,.01,t.rail||"#5a4c43"]].forEach(([B,Z,oe,$])=>{if(!B.length)return;let C=new te(p(B,Z,oe),n($));C.receiveShadow=!0,i.add(C)});let v=[],x=[];e.cities.forEach(B=>{let Z=za[B.country];if(!Z||!s(...B.xy))return;let oe=Yl.has(B.name),$=oe?18:9,C=oe?1.1:.7;for(let F=0,U=0;F<$*4&&U<$;F++){let I=a()*6.28,O=.12+Math.sqrt(a())*C,A=B.xy[0]+Math.cos(I)*O,H=B.xy[1]+Math.sin(I)*O;if(!s(A,H)||l(A,H))continue;let k=Xl[Z.houses[a()*Z.houses.length|0]](n,a,{snow:h(A,H)});k.position.set(A,r(A,H),-H),k.rotation.y=a()*6.28,k.scale.setScalar(.13+a()*.06),v.push(k),U++}let R=oe?26:14;for(let F=0;F<R;F++){let U=a()*6.28,I=Math.sqrt(a())*C*.9,O=B.xy[0]+Math.cos(U)*I,A=B.xy[1]+Math.sin(U)*I;if(!s(O,A))continue;let H=a()<(Z.robe||0);x.push({x:O,y:A,dir:a()*6.28,len:.15+a()*.35,sp:.04+a()*.05,ph:a()*10,robe:H,sc:H?.15+a()*.07:.085+a()*.02,col:H?Z.robeColors[a()*Z.robeColors.length|0]:Va[a()*Va.length|0]})}}),e.stops.forEach(B=>{if(B.air)return;let Z=za[u(...B.xy)];if(Z)for(let oe=0;oe<10;oe++){let $=a()*6.28,C=.55+a()*.9,R=B.xy[0]+Math.cos($)*C,F=B.xy[1]+Math.sin($)*C;if(!s(R,F)||l(R,F))continue;let U=a()<Math.min(.6,(Z.robe||0)*2);x.push({x:R,y:F,dir:a()*6.28,len:.12+a()*.25,sp:.03+a()*.04,ph:a()*10,robe:U,sc:U?.15+a()*.07:.085+a()*.02,col:U?Z.robeColors[a()*Z.robeColors.length|0]:Va[a()*Va.length|0]})}}),(e.peoples||[]).forEach(B=>{for(let Z=0;Z<10;Z++){let oe=a()*6.28,$=Math.sqrt(a())*.4,C=B.xy[0]+Math.cos(oe)*$,R=B.xy[1]+Math.sin(oe)*$;s(C,R)&&x.push({x:C,y:R,dir:a()*6.28,len:.1+a()*.25,sp:.03+a()*.04,ph:a()*10,robe:!0,sc:.16+a()*.05,col:B.colors[Z%B.colors.length]})}}),(e.canoes||[]).forEach(([B,Z])=>{let oe=0;for(let $=0;$<400&&oe<4;$++){let C=a()*6.28,R=.35+a()*.5,F=B+Math.cos(C)*R,U=Z+Math.sin(C)*R;if(s(F,U))continue;let I=new de,O=new en(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);O.scale(.09,.07,.42),I.add(new te(O,n("#f4f1ea")));let A=new te(new Et(.185,.02,.7),n("#b8342a"));A.position.y=-.01,I.add(A),[-1,1].forEach(H=>{let k=new te(new Sn(.03,.22,6),n("#2a2522"));k.position.set(0,.07,H*.4),k.rotation.x=-H*.5,I.add(k)}),I.position.set(F,.07,-U),I.rotation.y=a()*6.28,v.push(I),oe++}});let _=Ld(v);_&&i.add(_);function M(B){let Z=[],oe=B?new Me(.16,.3,.75,8):new Me(.17,.2,.42,8);if(oe.translate(0,B?.375:.55,0),Z.push([oe,"#ffffff"]),!B){let R=new Me(.15,.12,.34,8);R.translate(0,.17,0),Z.push([R,"#3a3633"])}let $=new en(.2,10,8);$.translate(0,.95,0),Z.push([$,"#e8c9a8"]);let C=new en(.21,10,6,0,Math.PI*2,0,Math.PI*.55);return C.translate(0,.98,0),Z.push([C,"#2a2420"]),xi(Z.map(([R,F])=>{R=R.index?R.toNonIndexed():R,R.deleteAttribute("uv");let U=new me(F),I=R.attributes.position.count,O=new Float32Array(I*3);for(let A=0;A<I;A++)O.set([U.r,U.g,U.b],A*3);return R.setAttribute("color",new mt(O,3)),R}))}let E=[!0,!1].map(B=>{let Z=x.filter($=>$.robe===B);if(!Z.length)return null;let oe=new bn(M(B),new vn({vertexColors:!0,roughness:.9}),Z.length);return Z.forEach(($,C)=>oe.setColorAt(C,new me($.col))),oe.castShadow=!0,i.add(oe),{m:oe,list:Z,robe:B}}).filter(Boolean),b=[...g.map(B=>[B,1.6]),...m.map(B=>[B,3.2])].map(([B,Z])=>[Em(B),Z]).filter(([B])=>B.len>.6),S=[];b.forEach(([B,Z])=>{let oe=Math.min(14,Math.floor(B.len/Z));for(let $=0;$<oe;$++)S.push({p:B,s:a()*B.len,sp:(.18+a()*.2)*(a()<.5?1:-1),side:0})}),S.forEach(B=>{B.side=B.sp>0?.01:-.01});let w=S.length?new bn(new Et(.022,.016,.044),n("#fff"),S.length):null;if(w){let B=["#c8321e","#f4f1ea","#2f5f8a","#e0a43c","#3d5a3b","#2a2522","#f4f1ea","#9aa3a8"];S.forEach((Z,oe)=>w.setColorAt(oe,new me(B[oe%B.length]))),w.castShadow=!0,i.add(w)}let P=y.map(Em).filter(B=>B.len>1.5).map(B=>[B,c.length?d(B.pts):0]).sort((B,Z)=>B[1]-Z[1]).slice(0,80).map(([B])=>B).map(B=>({p:B,s:a()*B.len,sp:(.45+a()*.3)*(a()<.5?1:-1)})),D=5,N=P.length?new bn(new Et(.03,.026,.07),n(t.train||"#f2efe8"),P.length*D):null;N&&(N.castShadow=!0,i.add(N));let z=(()=>{let B=new yi([[0,-.62],[.05,-.52],[.11,-.32],[.155,-.08],[.16,.12],[.13,.34],[.085,.48],[.045,.56],[.03,.66],[0,.7]].map(([k,ne])=>new le(k,ne)),18);B.rotateX(Math.PI/2),B.scale(1,.86,1);let Z=(k,ne)=>{let V=new Lt(new ke(k.map(([se,ae])=>new le(se,ae))),{depth:ne,bevelEnabled:!1});return V.translate(0,0,-ne/2),V},oe=Z([[-.12,0],[.1,0],[-.08,.2]],.025);oe.rotateY(-Math.PI/2),oe.translate(0,.12,-.02);let $=Z([[0,.05],[.26,-.08],[.2,.02],[0,-.02],[-.2,.02],[-.26,-.08]],.02);$.rotateX(Math.PI/2),$.translate(0,0,-.62);let C=k=>{let ne=Z([[0,0],[.18,-.06],[.03,-.05]],.015);return ne.rotateX(Math.PI/2),ne.rotateY(k>0?.6:Math.PI-.6),ne.translate(k*.12,-.07,.18),ne},R=[B,oe,$,C(1),C(-1)].map(k=>(k=k.index?k.toNonIndexed():k,k.deleteAttribute("uv"),k)),F=xi(R),U=F.attributes.position,I=new Float32Array(U.count*3),O=new me("#556d86"),A=new me("#e3e9ec"),H=new me;for(let k=0;k<U.count;k++)H.lerpColors(A,O,Ol.smoothstep(U.getY(k),-.06,.05)),I.set([H.r,H.g,H.b],k*3);return F.setAttribute("color",new mt(I,3)),F})(),G=[0,1,2].map(()=>{let B=new te(z,new vn({vertexColors:!0,roughness:.55,metalness:0}));return B.castShadow=!0,B.visible=!1,i.add(B),B}),K=[0,1,2,3,4,5].map(()=>{let B=new te(new Ii(.6,.75,32),new Qt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));return B.rotation.x=-Math.PI/2,B.visible=!1,i.add(B),B}),J=null,W=new Set;function Y(B,Z,oe){W.has(B)||(W.add(B),J={t0:performance.now(),at:Z.clone(),dir:oe.clone().setY(0).normalize()})}let ee=new ht;function ie(B,Z,oe){if(E.forEach(({m:$,list:C,robe:R})=>{let F=oe<(R?42:26);$.visible=F,F&&(C.forEach((U,I)=>{let O=Z/1e3*U.sp*6+U.ph,A=(Math.sin(O/6)+1)/2*U.len,H=U.x+Math.cos(U.dir)*A,k=U.y+Math.sin(U.dir)*A,ne=Math.cos(O/6)>=0?1:-1;ee.position.set(H,r(H,k)+Math.abs(Math.sin(O*1.6))*.01*U.sc/.1,-k),ee.rotation.set(0,Math.atan2(Math.cos(U.dir)*ne,-Math.sin(U.dir)*ne),Math.sin(O*1.6)*.07),ee.scale.setScalar(U.sc),ee.updateMatrix(),$.setMatrixAt(I,ee.matrix)}),$.instanceMatrix.needsUpdate=!0)}),w&&(w.visible=oe<60,w.visible&&(S.forEach(($,C)=>{$.s+=$.sp*B;let[R,F,U]=$.p.at($.s),I=Math.cos(U)*$.side,O=-Math.sin(U)*$.side;ee.position.set(R+I,r(R,F)+.02,-(F+O)),ee.rotation.set(0,Math.PI-U,0),ee.scale.setScalar(1),ee.updateMatrix(),w.setMatrixAt(C,ee.matrix)}),w.instanceMatrix.needsUpdate=!0)),N&&(N.visible=oe<80,N.visible&&(P.forEach(($,C)=>{$.s+=$.sp*B;for(let R=0;R<D;R++){let[F,U,I]=$.p.at($.s-Math.sign($.sp)*R*.075);ee.position.set(F,r(F,U)+.025,-U),ee.rotation.set(0,Math.PI-I,0),ee.updateMatrix(),N.setMatrixAt(C*D+R,ee.matrix)}}),N.instanceMatrix.needsUpdate=!0)),G.forEach($=>{$.visible=!1}),K.forEach($=>{$.visible=!1}),J){let $=(Z-J.t0)/1e3,C=2.1,R=1.4,F=3.2,U=4.6;[[0,0],[.38,1],[.75,-.9]].forEach(([I,O],A)=>{let H=($-I)/C,k=G[A];if(H<-.05||H>1.05)return;let ne=Math.min(1,Math.max(0,H)),V=new T(-J.dir.z,0,J.dir.x).multiplyScalar(O*1.2),se=J.at.clone().add(V),ae=se.clone().addScaledVector(J.dir,(ne-.5)*U);ae.y=-.6+F*Math.sin(Math.PI*ne);let ce=J.dir.clone().multiplyScalar(U).setY(F*Math.PI*Math.cos(Math.PI*ne));k.position.copy(ae),k.visible=H>0&&H<1,k.scale.setScalar(R),k.lookAt(ae.clone().add(ce)),[[.06,0],[.94,1]].forEach(([ye,ge])=>{let Ee=K[A*2+ge],Pe=(H-ye)*C;Pe<0||Pe>1.1||(Ee.visible=!0,Ee.position.copy(se).addScaledVector(J.dir,(ye-.5)*U).setY(.05),Ee.scale.setScalar(.5+Pe*2.4),Ee.material.opacity=.8*(1-Pe/1.1))})}),$>4.2&&(J=null)}}return{update:ie,dolphinJump:Y,audit:()=>({houses:v.map(B=>[B.position.x,-B.position.z,B.scale.x]),people:x.map(B=>[B.x,B.y,B.robe?1:0,B.sc]),cars:S.map(B=>B.p.at(B.s).slice(0,2)),trains:P.map(B=>B.p.at(B.s).slice(0,2)),dolphin:{len:1.32*1.4,rise:3.2,sink:.6}}),stats:{houses:v.length,people:x.length,cars:S.length,trains:P.length}}}var Ga={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Se},cameraProjectionMatrixInverse:{value:new Se},cameraWorldMatrix:{value:new Se},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new T(-1,-1,-1)},sceneBoxMax:{value:new T(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Wa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Zl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function bm(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Ax(e),n=t.length,r=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new T(Math.cos(l),Math.sin(l),0).normalize();r[a*4]=(c.x*.5+.5)*255,r[a*4+1]=(c.y*.5+.5)*255,r[a*4+2]=127,r[a*4+3]=255}let s=new cr(r,e,e);return s.wrapS=mn,s.wrapT=mn,s.needsUpdate=!0,s}function Ax(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),r=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),n[r*e+s]!==0){s-=2,r++;continue}else n[r*e+s]=a++;s++,r--}return n}var Xa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Dd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraProjectionMatrixInverse:{value:new Se},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Dd(i,e,t){let n=Rx(i,e,t),r="vec3[SAMPLES](";for(let s=0;s<i;s++){let a=n[s];r+=`vec3(${a.x}, ${a.y}, ${a.z})${s<i-1?",":")"}`}return r}function Rx(i,e,t){let n=[];for(let r=0;r<i;r++){let s=2*Math.PI*e*r/i,a=Math.pow(r/(i-1),t);n.push(new T(Math.cos(s),Math.sin(s),a))}return n}var Kl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}noise(e,t){let n,r,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,p=c-u,f=e-d,g=t-p,m,y;f>g?(m=1,y=0):(m=0,y=1);let v=f-m+h,x=g-y+h,_=f-1+2*h,M=g-1+2*h,E=l&255,b=c&255,S=this.perm[E+this.perm[b]]%12,w=this.perm[E+m+this.perm[b+y]]%12,P=this.perm[E+1+this.perm[b+1]]%12,D=.5-f*f-g*g;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[S],f,g));let N=.5-v*v-x*x;N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[w],v,x));let z=.5-_*_-M*M;return z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[P],_,M)),70*(n+r+s)}noise3d(e,t,n){let r,s,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),p=1/6,f=(h+u+d)*p,g=h-f,m=u-f,y=d-f,v=e-g,x=t-m,_=n-y,M,E,b,S,w,P;v>=x?x>=_?(M=1,E=0,b=0,S=1,w=1,P=0):v>=_?(M=1,E=0,b=0,S=1,w=0,P=1):(M=0,E=0,b=1,S=1,w=0,P=1):x<_?(M=0,E=0,b=1,S=0,w=1,P=1):v<_?(M=0,E=1,b=0,S=0,w=1,P=1):(M=0,E=1,b=0,S=1,w=1,P=0);let D=v-M+p,N=x-E+p,z=_-b+p,G=v-S+2*p,K=x-w+2*p,J=_-P+2*p,W=v-1+3*p,Y=x-1+3*p,ee=_-1+3*p,ie=h&255,j=u&255,B=d&255,Z=this.perm[ie+this.perm[j+this.perm[B]]]%12,oe=this.perm[ie+M+this.perm[j+E+this.perm[B+b]]]%12,$=this.perm[ie+S+this.perm[j+w+this.perm[B+P]]]%12,C=this.perm[ie+1+this.perm[j+1+this.perm[B+1]]]%12,R=.6-v*v-x*x-_*_;R<0?r=0:(R*=R,r=R*R*this.dot3(this.grad3[Z],v,x,_));let F=.6-D*D-N*N-z*z;F<0?s=0:(F*=F,s=F*F*this.dot3(this.grad3[oe],D,N,z));let U=.6-G*G-K*K-J*J;U<0?a=0:(U*=U,a=U*U*this.dot3(this.grad3[$],G,K,J));let I=.6-W*W-Y*Y-ee*ee;return I<0?o=0:(I*=I,o=I*I*this.dot3(this.grad3[C],W,Y,ee)),32*(r+s+a+o)}noise4d(e,t,n,r){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,p,f,g=(e+t+n+r)*l,m=Math.floor(e+g),y=Math.floor(t+g),v=Math.floor(n+g),x=Math.floor(r+g),_=(m+y+v+x)*c,M=m-_,E=y-_,b=v-_,S=x-_,w=e-M,P=t-E,D=n-b,N=r-S,z=w>P?32:0,G=w>D?16:0,K=P>D?8:0,J=w>N?4:0,W=P>N?2:0,Y=D>N?1:0,ee=z+G+K+J+W+Y,ie=a[ee][0]>=3?1:0,j=a[ee][1]>=3?1:0,B=a[ee][2]>=3?1:0,Z=a[ee][3]>=3?1:0,oe=a[ee][0]>=2?1:0,$=a[ee][1]>=2?1:0,C=a[ee][2]>=2?1:0,R=a[ee][3]>=2?1:0,F=a[ee][0]>=1?1:0,U=a[ee][1]>=1?1:0,I=a[ee][2]>=1?1:0,O=a[ee][3]>=1?1:0,A=w-ie+c,H=P-j+c,k=D-B+c,ne=N-Z+c,V=w-oe+2*c,se=P-$+2*c,ae=D-C+2*c,ce=N-R+2*c,ye=w-F+3*c,ge=P-U+3*c,Ee=D-I+3*c,Pe=N-O+3*c,Ke=w-1+4*c,ze=P-1+4*c,Re=D-1+4*c,nt=N-1+4*c,at=m&255,dt=y&255,Te=v&255,Fe=x&255,pt=o[at+o[dt+o[Te+o[Fe]]]]%32,Wi=o[at+ie+o[dt+j+o[Te+B+o[Fe+Z]]]]%32,ns=o[at+oe+o[dt+$+o[Te+C+o[Fe+R]]]]%32,Cn=o[at+F+o[dt+U+o[Te+I+o[Fe+O]]]]%32,kn=o[at+1+o[dt+1+o[Te+1+o[Fe+1]]]]%32,Pn=.6-w*w-P*P-D*D-N*N;Pn<0?h=0:(Pn*=Pn,h=Pn*Pn*this.dot4(s[pt],w,P,D,N));let X=.6-A*A-H*H-k*k-ne*ne;X<0?u=0:(X*=X,u=X*X*this.dot4(s[Wi],A,H,k,ne));let Qn=.6-V*V-se*se-ae*ae-ce*ce;Qn<0?d=0:(Qn*=Qn,d=Qn*Qn*this.dot4(s[ns],V,se,ae,ce));let Xi=.6-ye*ye-ge*ge-Ee*Ee-Pe*Pe;Xi<0?p=0:(Xi*=Xi,p=Xi*Xi*this.dot4(s[Cn],ye,ge,Ee,Pe));let bt=.6-Ke*Ke-ze*ze-Re*Re-nt*nt;return bt<0?f=0:(bt*=bt,f=bt*bt*this.dot4(s[kn],Ke,ze,Re,nt)),27*(h+u+d+p+f)}};var ja=class i extends On{constructor(e,t,n,r,s,a,o){super(),this.width=n!==void 0?n:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=bm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new rn(this.width,this.height,{type:Zn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Nt({defines:Object.assign({},Ga.defines),uniforms:hi.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:ci,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new _l,this.normalMaterial.blending=ci,this.pdMaterial=new Nt({defines:Object.assign({},Xa.defines),uniforms:hi.clone(Xa.uniforms),vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Nt({defines:Object.assign({},Wa.defines),uniforms:hi.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,blending:ci}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Nt({uniforms:hi.clone(Fs.uniforms),vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Il,blendDst:Os,blendEquation:Gn,blendSrcAlpha:Pl,blendDstAlpha:Os,blendEquationAlpha:Gn}),this.blendMaterial=new Nt({uniforms:hi.clone(Zl.uniforms),vertexShader:Zl.vertexShader,fragmentShader:Zl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mf,blendSrc:Il,blendDst:Os,blendEquation:Gn,blendSrcAlpha:Pl,blendDstAlpha:Os,blendEquationAlpha:Gn}),this.fsQuad=new mr(null),this.originalClearColor=new me,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Is,this.depthTexture.format=sr,this.depthTexture.type=rr,this.normalRenderTarget=new rn(this.width,this.height,{minFilter:$t,magFilter:$t,type:Zn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Dd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ci,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,r,s){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,r,s){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let r=t.get(n);n.visible=r}),t.clear()}generateNoise(e=64){let t=new Kl,n=e*e*4,r=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;r[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,r[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,r[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,r[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new cr(r,e,e,Nn,vi);return s.wrapS=mn,s.wrapT=mn,s.needsUpdate=!0,s}};ja.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var jt=i=>{i.traverse(t=>{t.isMesh&&(t.castShadow=t.receiveShadow=!0)});let e=null;if(Object.defineProperty(i.userData,"lod",{get:()=>e??=wm(i),enumerable:!1,configurable:!0}),i.userData.cars){let t=i.userData.cars;delete i.userData.cars,Object.defineProperty(i.userData,"cars",{value:t,enumerable:!1,configurable:!0})}return i};function wm(i){if(i.userData.cars){let a=new de,o=i.userData.cars.map(l=>{let c=wm(l);return c.position.copy(l.position),c.quaternion.copy(l.quaternion),a.add(c),c});return Object.defineProperty(a.userData,"cars",{value:o,enumerable:!1}),a.userData.pitch=i.userData.pitch,a}i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),t=new de,n=new Map,r=new an,s=new T;i.traverse(a=>{if(!a.isMesh||a===i)return;let o=new Se().multiplyMatrices(e,a.matrixWorld);a.geometry.boundingBox||a.geometry.computeBoundingBox(),r.copy(a.geometry.boundingBox).applyMatrix4(o).getSize(s);let l=[s.x,s.y,s.z].sort((u,d)=>d-u);if(!(s.y>=Math.max(s.x,s.z)&&s.y>.15)&&(l[0]<.06||l[1]<.012))return;if(Array.isArray(a.material)){let u=new te(a.geometry,a.material);o.decompose(u.position,u.quaternion,u.scale),t.add(u);return}let h=(a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone()).applyMatrix4(o);h.clearGroups();for(let u of Object.keys(h.attributes))["position","normal","uv"].includes(u)||h.deleteAttribute(u);h.attributes.normal||h.computeVertexNormals(),h.attributes.uv||h.setAttribute("uv",new Ae(new Float32Array(h.attributes.position.count*2),2)),(n.get(a.material)||n.set(a.material,[]).get(a.material)).push(h)}),n.forEach((a,o)=>{let l=xi(a);l&&t.add(new te(l,o))}),t.traverse(a=>{a.isMesh&&(a.castShadow=a.receiveShadow=!0)});for(let a of Object.keys(i.userData))t.userData[a]=i.userData[a];return t}var _i=(i,e,t=40)=>new ur(new Ca(i,t),new li({color:e,transparent:!0,opacity:.55}));function We(i,e,t=.008,n=14,r=3){let s=new Lt(i,{depth:e-t*2,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:r,curveSegments:n});return s.translate(0,0,-(e-t*2)/2),s.rotateY(-Math.PI/2),s}function $n(i,e,t,n){let r=i.getSpacedPoints(400),s=r.length-1,a=[];for(let p=0;p<s;p++)e(r[p])&&a.push(p);if(a.length<2)return null;let o=0;for(let p=1;p<a.length;p++)a[p]!==a[p-1]+1&&(o=p);let l=a[o]===0&&a[a.length-1]===s-1?a.slice(o).concat(a.slice(0,o)):a,c=gi.isClockWise(r.slice(0,s))?-1:1,h=p=>{let f=r[(p-1+s)%s],g=r[(p+1)%s],m=g.x-f.x,y=g.y-f.y,v=Math.hypot(m,y)||1;return[y/v*c,-m/v*c]},u=l.map(p=>{let[f,g]=h(p);return new le(r[p].x+f*t,r[p].y+g*t)}),d=l.map(p=>{let[f,g]=h(p);return new le(r[p].x-f*n,r[p].y-g*n)});return new ke(u.concat(d.reverse()))}function Xe(i,e,t,n,r){let s=new ke;return r=Math.min(r,(t-i)/2,(n-e)/2),s.moveTo(i+r,e),s.lineTo(t-r,e),s.quadraticCurveTo(t,e,t,e+r),s.lineTo(t,n-r),s.quadraticCurveTo(t,n,t-r,n),s.lineTo(i+r,n),s.quadraticCurveTo(i,n,i,n-r),s.lineTo(i,e+r),s.quadraticCurveTo(i,e,i+r,e),s}function Ct(i,e,t,n=.004){let r=new Lt(i,{depth:n,bevelEnabled:!1,curveSegments:10});r.rotateY(-Math.PI/2);let s=new te(r,e);return s.position.x=t>0?t+n:t,s}var Ye=(i,e,t,n)=>{let r=new te(new Et(t*2,t*2,i.distanceTo(e)+t),n);return r.position.copy(i).add(e).multiplyScalar(.5),r.lookAt(e),r},ue=(i,e,t,n,r,s,a)=>{let o=new te(new Et(i,e,t),n);return o.position.set(r,s,a),o};function Jl(i,e,t,n){let r=new de,s=new te(new Me(t,t,n,22),i),a=new te(new Me(t*.52,t*.52,n+.006,16),e);return s.rotation.z=a.rotation.z=Math.PI/2,r.add(s,a),r}function qr(i,e,t,n,r=24,s=null){let a=[],o=[],l=[],c=[];for(let y=0;y<=r;y++){let v=y/r,x=Math.max(0,(v-.55)/.45),_=s?e*s(v):e*(v<.55?1-.12*(1-v/.55)**2:Math.sqrt(Math.max(0,1-x*x)));a.push(i(v,x,_).map(([M,E])=>[M,E,-.5+v]))}let h=a[0].length*2-1;for(let y of a)[...y.slice().reverse().map(([v,x,_])=>[-v,x,_]),...y.slice(1)].forEach(v=>o.push(...v));for(let y=0;y<r;y++)for(let v=0;v<h-1;v++){let x=y*h+v,_=x+1,M=x+h,E=M+1;(l[t[v]]||=[]).push(x,_,M,_,E,M)}let u=[],d=[];for(let y=1;y<h-1;y++)u.push(0,y+1,y);for(let y=0;y<r;y++){let v=y*h,x=v+h-1,_=v+h,M=_+h-1;d.push(v,x,_,x,M,_)}let p=new Be;p.setAttribute("position",new Ae(o,3));let f=0;l.forEach((y,v)=>{y&&(c.push(...y),p.addGroup(f,y.length,v),f+=y.length)}),c.push(...u),p.addGroup(f,u.length,0),p.setIndex(c),p.computeVertexNormals();let g=new te(p,n);g.add(_i(p,"#6d5d48",25));let m=new Be;return m.setAttribute("position",new Ae(o.map((y,v)=>v%3===1?y-.012:y),3)),m.setIndex(d),m.computeVertexNormals(),{hm:g,dg:m}}function Am(i,e={}){let t=e.paper||null,n=1,r=.25,s=.31,a=.045,o=.052,l=.29,c=-.29,h=i(e.color||"#b8342a",t),u=i(e.color||"#b8342a",t,{flatShading:!0}),d=i(e.stripe||"#f6efe1",t),p=i("#3a4b59",null,{roughness:.5}),f=i("#2b2724"),g=i("#d9d0c0",t),m=i("#fff4d6",null,{emissive:"#5a4a2a"}),y=i("#c23a2a"),v=new ke,x=-n/2,_=n/2,M=o+.012;v.moveTo(x+.03,a),v.lineTo(c-M,a),v.absarc(c,a,M,Math.PI,0,!0),v.lineTo(l-M,a),v.absarc(l,a,M,Math.PI,0,!0),v.lineTo(_-.03,a),v.quadraticCurveTo(_,a,_,a+.03),v.lineTo(_-.004,s*.62),v.bezierCurveTo(_-.008,s*.9,_-.035,s,_-.1,s),v.lineTo(x+.04,s),v.quadraticCurveTo(x,s,x,s-.04),v.lineTo(x,a+.03),v.quadraticCurveTo(x,a,x+.03,a);let E=.012,b=new de,S=We(v,r,E,7,1),w=new te(S,[h,u]);w.add(_i(S,"#5a2a1e",50)),b.add(w);let P=r/2;for(let W of[-1,1]){let Y=W>0?.335:_-.035,ee=Y-.13,ie=new ke;ie.moveTo(x+.01,.135),ie.lineTo(ee,.135),ie.quadraticCurveTo(Y-.04,.135,Y,.205),ie.lineTo(Y,.175),ie.quadraticCurveTo(Y-.04,.11,ee,.11),ie.lineTo(x+.01,.11),ie.closePath(),b.add(Ct(ie,d,W*P));let j=W>0?.33:.43;b.add(Ct(Xe(x+.04,.165,j,s-.035,.018),p,W*P));for(let B=1;B<7;B++){let Z=x+.04+(j-x-.04)*B/7;b.add(Ct(Xe(Z-.006,.165,Z+.006,s-.035,.002),h,W*(P+.004),.003))}}b.add(Ct(Xe(.35,a+.02,.44,s-.035,.012),p,P),Ct(Xe(.352,.11,.438,.12,.003),h,P+.004,.003));let D=$n(v,W=>W.x>_-.12&&W.y>.16&&W.y<s-.03,E+.004,.02);D&&b.add(new te(We(D,r-.03,0),p));let N=$n(v,W=>W.x>_-.05&&W.y<.075&&W.y>a+.002,E+.006,.01),z=$n(v,W=>W.x>_-.03&&W.y>.112&&W.y<.13,E+.003,.004);z&&b.add(new te(We(z,r-.004,0),d)),N&&b.add(new te(We(N,r+.006,.003),f));for(let W of[-1,1]){b.add(ue(.04,.018,.006,m,W*(P-.04),.095,_+E+.001)),b.add(ue(.02,.05,.006,y,W*(P-.03),.17,x-E-.002));let Y=new T(W*(P-.025),s+.008,_-.06),ee=new T(W*(P-.004),s+.014,_+.025),ie=new T(W*(P-.012),s-.03,_+.035);b.add(Ye(Y,ee,.0032,f),Ye(ee,ie,.0032,f));let j=ue(.008,.036,.016,f,ie.x,ie.y-.016,ie.z);j.rotation.y=W*.35,b.add(j)}b.add(ue(r-.07,.07,.004,p,0,s-.07,x-E-.001),ue(r-.09,.03,.004,f,0,.09,x-E-.001));let G=new te(We(Xe(x+.01,0,_-.1,.006,.003),r-.02,.003),d);G.position.y=s+E-.002,b.add(G);let K=$n(v,W=>W.x>_-.1&&W.y>s-.028&&W.y<s-.006,E+.004,.004);K&&b.add(new te(We(K,r*.55,0),i("#f4d58a",null,{emissive:"#6a4a10",emissiveIntensity:.4})));let J=new te(We(Xe(-.32,0,.02,.022,.011),r*.62,.005),d);J.position.y=s+E+.004,b.add(J);for(let W of[l,c])for(let Y of[-1,1]){let ee=Jl(f,g,o,.045);ee.position.set(Y*(P-.028),o,W),b.add(ee)}return jt(b)}function Rm(i,e={}){let t=e.paper||null,n=i(e.color||"#f6efe1",t,{flatShading:!0}),r=i(e.accent||"#3c6a8c",t,{flatShading:!0}),s=i("#c9a77a",t),a=i("#fbf7ef",t),o=i("#2f3b46",null,{roughness:.55}),l=i(e.flag||"#ae2a20",null,{side:st}),{hm:c,dg:h}=qr((w,P,D)=>[[0,-.035+.03*P*P*P],[D*.7,Math.max(-.035+.03*P*P*P,-.01)],[D*.95,.008+.01*P],[D*.965,.019+.01*P],[D,.085+.055*P*P]],.16,[0,2,1,1,1,1,2,0],[n,r,i(e.flag||"#ae2a20",t,{flatShading:!0})]),u=new de;u.add(c,new te(h,i("#c9a77a",t,{side:st})));let d=new ke,p=-.36,f=.2,g=.075,m=.2,y=.24;d.moveTo(p,g),d.lineTo(f,g),d.lineTo(f,.11),d.bezierCurveTo(f-.01,m-.03,f-.02,m,f-.06,m),d.lineTo(p+.02,m),d.quadraticCurveTo(p,m,p,m-.02),d.closePath();let v=We(d,y,.008);u.add(new te(v,[a,a]));for(let w of[-1,1]){u.add(Ct(Xe(p+.03,.11,f-.04,m-.025,.012),o,w*y/2));for(let D=1;D<6;D++){let N=p+.03+(f-.07-p)*D/6;u.add(Ct(Xe(N-.005,.11,N+.005,m-.025,.002),a,w*(y/2+.004),.003))}u.add(Ct(Xe(p+.01,.09,f-.02,.1,.004),r,w*y/2));let P=new te(new on(.018,.006,8,20),l);P.rotation.y=Math.PI/2,P.position.set(w*(y/2+.012),.1,p+.015),u.add(P)}let x=$n(d,w=>w.x>f-.08&&w.y>.11&&w.y<m-.02,.012,.02);x&&u.add(new te(We(x,y-.03,0),o));let _=new te(We(Xe(p-.015,0,f-.03,.012,.006),y+.03,.004),r);_.position.y=m,u.add(_);let M=m+.012,E=.035,b=y/2+.008;for(let w of[-1,1]){u.add(ue(.004,.004,f-p-.06,a,w*b,M+E,(p+f)/2-.03));for(let P=0;P<=8;P++)u.add(ue(.004,E,.004,a,w*b,M+E/2,p-.005+(f-p-.045)*P/8))}u.add(ue(y+.016,.004,.004,a,0,M+E,p-.005)),u.add(ue(.005,.12,.005,i("#6b5440"),0,.14,-.47));let S=new te(new gn(.07,.045,4,1),l);return S.rotation.y=Math.PI/2,S.position.set(0,.175,-.505),u.add(S),u.add(ue(.016,.022,.016,i("#6b5440"),0,.12,.38)),jt(u)}function Cm(i,e={}){let t=e.paper||null,n=i(e.color||"#fbf7ef",t,{flatShading:!0}),r=i(e.under||"#eadfcb",t,{flatShading:!0,side:Bu,emissive:"#8a7a62",emissiveIntensity:1}),s=[0,.012,.72],a=[0,0,-.5],o=.075,l=[],c=[];for(let _ of[-1,1]){let M=z=>[z[0]*_,z[1],z[2]],E=M([.2,.02,-.5]),b=M([.11,.024,.05]),S=M([.6,o,-.26]),w=M([.6,o,-.5]),P=M([.635,o+.1,-.33]),D=M([.635,o+.1,-.5]),N=(z,G,K)=>l.push(..._>0?[z,K,G]:[z,G,K]);N(s,a,E),N(s,E,b),N(b,E,w),N(b,w,S),c.push(S,w,D,S,D,P),N(M([0,.016,.66]),M([0,.016,-.12]),M([.085,.03,.06]))}let h=new Be;h.setAttribute("position",new Ae(l.flat(),3)),h.computeVertexNormals();let u=[];for(let _ of[-1,1]){let M=[0,0,.6],E=[0,0,-.5],b=[_*.012,-.13,-.47],S=[_*.006,-.035,.38];u.push(..._>0?[M,b,E,M,S,b]:[M,E,b,M,b,S])}let d=new Be;d.setAttribute("position",new Ae(u.flat(),3)),d.computeVertexNormals();let p=new de,f="#9c8c72",g=new te(h,n),m=new te(h,r),y=new te(d,i(e.accent||"#3c6a8c",t,{flatShading:!0,side:st,emissive:e.accent||"#3c6a8c",emissiveIntensity:.25}));g.add(_i(h,f,1)),y.add(_i(d,f,1));let v=new Be;v.setAttribute("position",new Ae(c.flat(),3)),v.computeVertexNormals();let x=new te(v,i(e.color||"#fbf7ef",t,{flatShading:!0,side:st}));return x.add(_i(v,f,1)),p.add(g,m,y,x),jt(p)}function Pm(i,e,t,n,r=1.8){let s=i.attributes.position;for(let a=0;a<s.count;a++){let o=s.getZ(a);o>e&&s.setX(a,s.getX(a)*(1-n*Math.min(1,(o-e)/(t-e))**r))}return s.needsUpdate=!0,i.computeVertexNormals(),i}function Nd(i,e,t,n,r,s){let a=new de,o=(c,h)=>{r&&Pm(c,...r);let u=new te(c,h);return a.add(u),u},l=o(We(i,e,t,9,1),[n.body,n.fold]);return l.add(_i(l.geometry,"#7a6d5c",50)),s&&(a.rotation.y=Math.PI),{g:a,add:o}}function Ud(i,e,t,n,r,s,a,o,l){for(let c of[-1,1])if(l){i.add(Ct(Xe(e,n,t,r,.01),o,c*s/2));for(let h=1;h<a;h++){let u=e+(t-e)*h/a;i.add(Ct(Xe(u-.005,n,u+.005,r,.002),l,c*(s/2+.004),.003))}}else for(let h=0;h<a;h++){let u=(t-e)/a,d=e+u*h;i.add(Ct(Xe(d+u*.18,n,d+u*.82,r,.008),o,c*s/2))}}function $l(i,e,t,n,r,s=.024){i.add(ue(r-.05,.03,.16,e,0,.026,n));for(let a of[-.05,.05])for(let o of[-1,1]){let l=Jl(e,t,s,.012);l.position.set(o*(r/2-.035),s,n+a),i.add(l)}}function Im(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=1,s=.19,a=.2,o=.035,l=.008,c=r+.03,h={body:i(e.body||"#f7f4ee",t),fold:i(e.body||"#f7f4ee",t,{flatShading:!0})},u=i(e.color||"#1f4e9c",t),d=i("#2c3a48",null,{roughness:.45}),p=i("#3a3c40"),f=i("#9aa0a6",t),g=v=>(v.moveTo(-.5,o),v.lineTo(.38,o),v.quadraticCurveTo(.5,o,.5,.06),v.bezierCurveTo(.47,.1,.32,a,.12,a),v.lineTo(-.48,a),v.quadraticCurveTo(-.5,a,-.5,a-.02),v.closePath(),v),m=new de,y=[];for(let v=0;v<n;v++){let x=v===0,_=v===n-1&&n>1,M=x||_,E=M?g(new ke):Xe(-.5,o,.5,a,.022),{g:b,add:S}=Nd(E,s,l,h,M?[.1,.5+l,.62,1.7]:null,_);if(S(We(Xe(-.5,.072,M?.47:.5,.086,.004),s+.008,0),u),S(We(Xe(-.5,.093,M?.4:.5,.098,.002),s+.006,0),u),M){let w=$n(E,P=>P.x>.24&&P.x<.42&&P.y>.1,l+.003,.012);w&&S(We(w,s*.8,0),d)}if(Ud(b,-.44,M?.06:.44,.122,.15,s,M?8:14,d),b.add(ue(s-.04,o,r-.1,p,0,o/2,-.02),ue(s-.01,.022,r-.3,f,0,o-.008,M?-.12:0)),M||b.add(ue(s*.7,a*.75,.03,p,0,a*.5,.51)),n>1&&b.add(ue(s*.7,a*.75,.03,p,0,a*.5,-.51)),!M&&v===1){let w=new T(0,a+l,.05),P=new T(0,a+.06,.12);b.add(ue(.06,.012,.05,p,0,a+l+.006,.02),Ye(w,P,.003,p),ue(.08,.004,.01,p,0,a+.062,.12))}b.position.z=-v*c,m.add(b),y.push(b)}return m.userData={cars:y,pitch:c},jt(m)}function Lm(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??2),r=1,s=.19,a=.215,o=.05,l=.008,c=r+.03,h={body:i(e.body||"#f3efe6",t),fold:i(e.body||"#f3efe6",t,{flatShading:!0})},u=i(e.color||"#ae2a20",t),d=i(e.accent||"#2c4a6e",t),p=i("#2c3a48",null,{roughness:.45}),f=i("#34363a"),g=i("#b9b2a6"),m=i("#fff4d6",null,{emissive:"#6a5a30"}),y=i("#d9d3c6",t),v=M=>(M.moveTo(-.5,o),M.lineTo(.485,o),M.quadraticCurveTo(.5,o,.5,o+.015),M.lineTo(.5,.115),M.lineTo(.44,.185),M.quadraticCurveTo(.42,a,.39,a),M.lineTo(-.48,a),M.quadraticCurveTo(-.5,a,-.5,a-.02),M.closePath(),M),x=new de,_=[];for(let M=0;M<n;M++){let E=M===0,b=M===n-1&&n>1,S=E||b,w=S?v(new ke):Xe(-.5,o,.5,a,.024),{g:P,add:D}=Nd(w,s,l,h,S?[.4,.5+l,.16,1.4]:null,b);if(D(We(Xe(-.5,.075,S?.495:.5,.095,.004),s+.008,0),u),D(We(Xe(-.5,.1,S?.495:.5,.105,.002),s+.006,0),d),S){let N=$n(w,z=>z.x>.43&&z.y>.12&&z.y<.19,l+.003,.012);N&&D(We(N,s*.92,0),p);for(let z of[-1,1])D(new Et(.03,.014,.006).translate(z*.055,.088,.5+l+.002),m)}Ud(P,-.4,S?.3:.4,.125,.17,s,S?6:8,p,h.body);for(let N of[-1,1])for(let z of S?[-.46,.34]:[-.46,.42])P.add(Ct(Xe(z,o+.01,z+.045,.172,.006),y,N*s/2,.003));$l(P,f,g,-.32,s),$l(P,f,g,.32,s),P.add(ue(s-.06,.02,r-.5,f,0,o-.01,0));for(let N of[-.25,.1]){let z=new te(We(Xe(N,0,N+.12,.016,.008),s*.55,.004),h.body);z.position.y=a+l,P.add(z)}S||P.add(ue(s*.65,a*.7,.03,f,0,a*.48,.51)),n>1&&P.add(ue(s*.65,a*.7,.03,f,0,a*.48,-.51)),P.position.z=-M*c,x.add(P),_.push(P)}return x.userData={cars:_,pitch:c},jt(x)}function Dm(i,e={}){let t=e.paper||null,n=.01,r=.3,s=e.hang??.62,a=e.span??1.6,o=i(e.color||"#c8462e",t),l=i(e.color||"#c8462e",t,{flatShading:!0}),c=i("#f6efe1",t),h=i("#2f3d4a",null,{roughness:.45}),u=i("#3b3a38"),d=i("#8d8f92"),p=new ke;p.moveTo(-.16,.02),p.lineTo(.16,.02),p.quadraticCurveTo(.2,.02,.205,.08),p.lineTo(.215,.29),p.quadraticCurveTo(.215,.33,.17,.335),p.lineTo(-.17,.335),p.quadraticCurveTo(-.215,.33,-.215,.29),p.lineTo(-.205,.08),p.quadraticCurveTo(-.2,.02,-.16,.02);let f=new de;f.add(new te(We(p,r,n,10,1),[o,l]));for(let v of[-1,1]){f.add(Ct(Xe(-.18,.14,.18,.29,.016),h,v*r/2));for(let x of[-.06,.06])f.add(Ct(Xe(x-.006,.14,x+.006,.29,.002),o,v*(r/2+.004),.003));f.add(Ct(Xe(-.2,.105,.2,.122,.004),c,v*r/2))}let g=$n(p,v=>Math.abs(v.x)>.19&&v.y>.14&&v.y<.29,n+.003,.012);g&&f.add(new te(We(g,r-.05,0),h));let m=new te(We(Xe(-.15,0,.15,.018,.009),r-.06,.006),c);m.position.y=.335+n,f.add(m);let y=new T(0,s-.03,0);for(let v of[-1,1])f.add(Ye(new T(v*.07,.36,0),y,.006,d));if(f.add(ue(.03,.05,.03,d,0,s-.04,0),ue(.09,.03,.2,u,0,s-.005,0)),a>0)for(let v of[-1,1]){let x=new te(new Me(.004,.004,a,6),u);x.rotation.x=Math.PI/2,x.position.set(v*.03,s+.012,0),f.add(x)}return f.userData={cableY:s+.012},jt(f)}function Nm(i,e={}){let t=e.paper||null,n=i(e.color||"#f7f3ea",t),r=i(e.color||"#f7f3ea",t,{flatShading:!0}),s=i(e.accent||"#2c4a6e",t,{flatShading:!0}),a=i(e.flag||"#ae2a20",t,{flatShading:!0}),o=i("#2c3a48",null,{roughness:.45}),l=i("#2e2c2a"),c=i("#e07a2c",t),h=.15,{hm:u,dg:d}=qr((S,w,P)=>[[0,-.05+.04*w*w*w],[P*.75,Math.max(-.05+.04*w*w*w,-.02)],[P*.95,.01+.012*w],[P*.965,.024+.012*w],[P*.985,.075+.02*w],[P*.99,.09+.02*w],[P,h+.045*w*w]],.17,[0,3,0,2,1,1,1,1,2,0,3,0],[r,s,a,s]),p=new de;p.add(u,new te(d,i("#b9b2a6",t,{side:st})));let f=.065;[[-.44,.24,.3],[-.38,.14,.27]].forEach(([S,w,P],D)=>{let N=h-.012+D*f,z=new te(We(Xe(S,0,w,f,.008),P,.005),[n,n]);z.position.y=N,p.add(z);let G=Math.round((w-S)/.035);for(let K of[-1,1])for(let J=0;J<G;J++){let W=S+.02+J*(w-S-.04)/G;p.add(Ct(Xe(W,N+.022,W+.022,N+.046,.004),o,K*P/2))}});let m=h-.012+2*f,y=new ke;y.moveTo(-.04,0),y.lineTo(.15,0),y.lineTo(.17,.03),y.lineTo(.145,.06),y.lineTo(-.04,.06),y.closePath();let v=new te(We(y,.34,.004),[n,n]);v.position.y=m,p.add(v);let x=$n(y,S=>S.x>.15&&S.y>.032&&S.y<.056,.007,.012);if(x){let S=new te(We(x,.3,0),o);S.position.y=m,p.add(S)}for(let S of[-1,1])p.add(Ct(Xe(-.02,m+.03,.13,m+.05,.004),o,S*.17));let _=new ke;_.moveTo(-.2,0),_.lineTo(-.1,0),_.lineTo(-.12,.1),_.lineTo(-.21,.1),_.closePath();let M=new te(We(_,.08,.006),s);M.position.y=m,p.add(M),p.add(ue(.075,.016,.085,l,0,m+.105,-.165)),p.add(Ye(new T(0,m+.06,.05),new T(0,m+.15,.04),.004,l),ue(.05,.01,.012,l,0,m+.12,.045));for(let S of[-1,1])for(let w of[-.3,-.16]){let P=new te(We(Xe(w,0,w+.1,.03,.014),.035,.006),c);P.position.set(S*.155,h-.012+f+.02,0),p.add(P)}let E=h-.012+f*2,b=.03;for(let S of[-1,1]){p.add(ue(.004,.004,.18,n,S*.133,E+b,-.29));for(let w=0;w<=5;w++)p.add(ue(.004,b,.004,n,S*.133,E+b/2,-.38+w*.036))}return p.add(ue(.27,.004,.004,n,0,E+b,-.38)),p.add(ue(.016,.022,.016,l,.04,h+.02,.36),ue(.016,.022,.016,l,-.04,h+.02,.36),ue(.005,.1,.005,l,0,h+.08,.47)),jt(p)}function Um(i,e={}){let t=e.paper||null,n=Math.min(1,Math.max(0,e.hood??1)),r=i(e.color||"#2a2624",t,{roughness:.6}),s=i(e.color||"#2a2624",t,{roughness:.6,flatShading:!0}),a=i(e.accent||"#b8342a",t),o=i(e.blanket||"#c23a2c",t),l=i(e.hoodColor||"#2e2a28",t,{side:st,flatShading:!0}),c=i("#b8913a"),h=i("#f6efe1",t),u=new de,d=.24,p=-.2,f=.215;for(let b of[-1,1]){let S=new de,w=new te(new on(d-.012,.012,8,40),r);w.rotation.y=Math.PI/2,S.add(w);for(let D=0;D<14;D++){let N=D/14*Math.PI*2,z=ue(.008,d-.03,.01,a,0,0,0);z.position.set(0,Math.cos(N)*(d-.03)/2,Math.sin(N)*(d-.03)/2),z.rotation.x=N,S.add(z)}let P=new te(new Me(.03,.03,.04,14),c);P.rotation.z=Math.PI/2,S.add(P),S.position.set(b*f,d,p),u.add(S)}u.add(Ye(new T(-f,d,p),new T(f,d,p),.008,r));let g=new ke;g.moveTo(-.34,.26),g.lineTo(-.04,.26),g.quadraticCurveTo(.02,.26,.02,.32),g.lineTo(.02,.4),g.lineTo(-.2,.4),g.lineTo(-.27,.62),g.quadraticCurveTo(-.29,.66,-.33,.64),g.lineTo(-.36,.3),g.quadraticCurveTo(-.36,.26,-.34,.26),u.add(new te(We(g,.38,.008,8,1),[r,s])),u.add(ue(.33,.03,.17,a,0,.415,-.11));let m=ue(.33,.2,.025,a,0,.52,-.25);m.rotation.x=-.36,u.add(m);let y=new ke;y.moveTo(-.12,.435),y.lineTo(.05,.435),y.quadraticCurveTo(.08,.43,.085,.38),y.lineTo(.09,.24),y.lineTo(.06,.24),y.lineTo(.05,.4),y.lineTo(-.12,.42),y.closePath(),u.add(new te(We(y,.31,.004,6,1),o)),u.add(ue(.3,.015,.14,r,0,.235,.06),Ye(new T(-.12,.235,0),new T(-.12,.3,-.02),.006,r),Ye(new T(.12,.235,0),new T(.12,.3,-.02),.006,r));for(let b of[-1,1])u.add(Ye(new T(b*.19,.3,-.3),new T(b*.17,.2,.5),.01,r),ue(.012,.012,.03,c,b*.17,.2,.49));u.add(Ye(new T(-.17,.2,.48),new T(.17,.2,.48),.009,r));for(let b of[-1,1]){let S=new te(new Me(d+.02,d+.02,.05,16,1,!0,Math.PI*.12,Math.PI*.62),i(e.color||"#2a2624",t,{side:st,flatShading:!0}));S.geometry.rotateZ(Math.PI/2),S.position.set(b*f,d,p),u.add(S)}let v=.3,x=new T(0,.42,-.28),_=4,M=.6,E=.55;for(let b=0;b<_;b++){let S=n*b*E+(1-n)*(-.42+b*.03)+.05,w=v+b*.008,P=new Me(w,w,.42,10,1,!0,Math.PI-S-M,M);P.rotateZ(Math.PI/2);let D=new te(P,l);D.position.copy(x),D.add(_i(P,"#8a7a62",20)),u.add(D)}for(let b of[-1,1])u.add(Ye(new T(b*.2,x.y,x.z),new T(b*.17,.33,-.06),.005,c));if(n>.6){let b=n*(_-1)*E+.05+M,S=new T(.17,x.y+Math.sin(b)*(v+.018),x.z-Math.cos(b)*(v+.018)),w=new te(new Me(.028,.028,.06,12),i("#f4e2c0",null,{emissive:"#7a4a1a",emissiveIntensity:.5}));w.position.set(S.x,S.y-.06,S.z),u.add(w,ue(.06,.008,.06,a,S.x,S.y-.028,S.z),ue(.06,.008,.06,a,S.x,S.y-.092,S.z))}return jt(u)}function Om(i,e={}){let t=e.paper||null,n=i(e.color||"#2e2925",t,{flatShading:!0,roughness:.42}),r=i(e.accent||"#a8302a",t),s=i("#b8913a",null,{metalness:.4,roughness:.5}),a=i("#d8d5cc",null,{metalness:.55,roughness:.35}),o=i("#5a4030",t),l=E=>{let b=2*E-1;return .045+.12*b**4+.035*Math.max(0,b)**4},{hm:c,dg:h}=qr(E=>{let b=2*E-1,S=-.025+.075*b**4,w=.072*Math.sin(Math.PI*E)**.55;return Array.from({length:7},(P,D)=>{let N=D/6*Math.PI/2;return[w*Math.sin(N)**.85,S+(l(E)-S)*(1-Math.cos(N))**1.15]})},1,Array(12).fill(0),[n],40,()=>1),u=new de;c.children[0].material.color.set("#6b5f52"),u.add(c,new te(h,n));let d=l(.5)-.012;u.add(ue(.09,.03,.09,r,0,d+.015,-.04));let p=ue(.09,.06,.016,r,0,d+.05,-.09);p.rotation.x=-.3,u.add(p);for(let E of[-1,1])u.add(ue(.008,.012,.09,s,E*.048,d+.036,-.04));u.add(ue(.08,.02,.04,n,0,d+.01,.09),ue(.07,.008,.035,r,0,d+.024,.09));let f=.455,g=l(.955),m=[[.03,0],[.016,.012]];for(let E=0;E<6;E++){let b=.022+E*.019,S=.062-E*.003;m.push([.016,b],[S-.006,b+.001],[S,b+.005],[S-.006,b+.009],[.017,b+.01])}m.push([.02,.138],[.062,.144],[.078,.153],[.07,.164],[.03,.168],[.006,.16],[-.003,.14],[-.006,.1],[-.024,.088],[-.026,.081],[-.007,.078],[-.006,.04],[-.002,.012],[.004,0]);let y=new ke(m.map(([E,b])=>new le(E,b))),v=We(y,.007,.0015,6,1),x=new te(v,[a,a]);x.add(_i(v,"#7d7a72",30)),x.position.set(0,g-.03,f-.01),u.add(x);let _=l(.2),M=new T(.05,_+.07,-.3);u.add(Ye(new T(.05,_-.01,-.3),M,.008,o),Ye(M.clone().add(new T(-.03,.01,.08)),new T(.2,-.03,-.62),.005,o)),u.add(ue(.03,.006,.07,o,.18,-.02,-.6));for(let E of[-1,1])u.add(ue(.006,.018,.02,s,E*.07,d+.012,.02));return jt(u)}function qa(i,e,t=.006,n=10){let r=new Lt(i,{depth:e-t*2,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:n});return r.translate(0,0,-(e-t*2)/2),r}function Hm(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=e.loco??!0,s=1,a=.17,o=.205,l=.045,c=s+.03,h=i(e.color||"#b8282c",t),u=i(e.color||"#b8282c",t,{flatShading:!0}),d=i("#f4ecd8",t),p=i("#34363a"),f=i("#b9b2a6"),g=i("#3a5266",null,{roughness:.25,metalness:.1}),m=i("#fff4d6",null,{emissive:"#6a5a30"}),y=i("#faf7f0"),v=new ke,x=.1,_=.055;v.moveTo(a/2,x),v.lineTo(a/2,o-_),v.quadraticCurveTo(a/2,o,a/2-_,o),v.lineTo(-a/2+_,o),v.quadraticCurveTo(-a/2,o,-a/2,o-_),v.lineTo(-a/2,x),v.closePath();let M=$n(v,S=>S.y>x+.004,.003,.008),E=new de,b=[];for(let S=0;S<n;S++){let w=new de;if(r&&S===0){w.add(new te(qa(Xe(-a/2,l,a/2,o,.03),s-.02,.01,6),[h,u]));for(let D of[-1,1])w.add(ue(.062,.042,.004,g,D*.037,.165,s/2+.001)),w.add(ue(.022,.012,.004,m,D*.055,.075,s/2+.001)),w.add(ue(.004,.04,.06,g,D*(a/2+.003),.16,.38)),w.add(ue(.004,.04,.06,g,D*(a/2+.003),.16,-.38)),w.add(ue(.004,.05,.016,y,D*(a/2+.003),.11,0),ue(.004,.016,.05,y,D*(a/2+.003),.11,0)),w.add(ue(.004,.006,s-.1,d,D*(a/2+.003),.07,0));w.add(ue(.022,.012,.004,m,0,.197,s/2+.001),ue(.11,.02,.004,p,0,.09,s/2+.001));for(let D of[-.25,.25])w.add(ue(.05,.012,.06,p,0,o+.006,D)),w.add(Ye(new T(0,o+.012,D-.03),new T(0,o+.05,D+.01),.0025,p),Ye(new T(0,o+.05,D+.01),new T(0,o+.065,D-.02),.0025,p),ue(.07,.004,.008,p,0,o+.066,D-.02));w.add(ue(a-.06,.02,.3,p,0,o+.01,0))}else{w.add(new te(qa(Xe(-a/2,l,a/2,x+.004,.01),s-.02,.005,4),[h,u])),w.add(new te(qa(v,s-.06,0,10),g));for(let D=0;D<=7;D++){let N=-.47+D*.134;if(M){let z=new te(qa(M,.016,0,10),h);z.position.z=N,w.add(z)}}for(let D of[-.485,.485]){let N=new te(qa(v,.03,.004,10),h);N.position.z=D,N.scale.set(1.02,1,1),w.add(N)}w.add(ue(.05,.008,s-.08,h,0,o+.003,0));for(let D of[-1,1])w.add(ue(.004,.006,s-.08,d,D*(a/2+.003),.07,0))}$l(w,p,f,-.32,a,.022),$l(w,p,f,.32,a,.022),w.add(ue(a-.05,.02,s-.5,p,0,l-.01,0)),S>0&&w.add(ue(a*.6,o*.6,.03,p,0,o*.45,.51)),S<n-1&&w.add(ue(a*.6,o*.6,.03,p,0,o*.45,-.51)),w.position.z=-S*c,E.add(w),b.push(w)}return E.userData={cars:b,pitch:c},jt(E)}function Sm(i,e,t,n,r=12,s=.02){let a=new de,o=new te(new on(i-.01,.01,8,36),e);o.rotation.y=Math.PI/2,a.add(o);for(let c=0;c<r;c++){let h=c/r*Math.PI*2,u=ue(.003,i-.02,.003,t,0,0,0);u.position.set(0,Math.cos(h)*(i-.02)/2,Math.sin(h)*(i-.02)/2),u.rotation.x=h,a.add(u)}let l=new te(new Me(.016,.016,s,12),n);return l.rotation.z=Math.PI/2,a.add(l),a}function Fm(i,e={}){let t=e.paper||null,n=i(e.color||"#1f6aa5",t),r=i(e.color||"#1f6aa5",t,{flatShading:!0}),s=i(e.accent||"#e8b830",t),a=i(e.roof||"#23303a",t),o=i("#d6d6d2",null,{metalness:.6,roughness:.3}),l=i("#2a2826"),c=i("#b8342a",t),h=i("#c9c3b8"),u=i("#3a4b59",null,{roughness:.4,transparent:!0,opacity:.7}),d=i("#fff4d6",null,{emissive:"#6a5a30"}),p=new de,f=new ke;f.moveTo(-.46,.1),f.lineTo(.3,.1),f.quadraticCurveTo(.46,.1,.47,.2),f.lineTo(.42,.3),f.quadraticCurveTo(.36,.33,.28,.3),f.lineTo(.12,.26),f.lineTo(-.46,.26),f.closePath();let g=Pm(We(f,.42,.012,8,1),.08,.5,.72,1.3),m=new te(g,[n,r]);m.add(_i(g,"#1a2a3a",45)),p.add(m);for(let E of[-1,1])p.add(Ct(Xe(-.44,.17,.05,.19,.004),s,E*.21));p.add(ue(.36,.05,.16,c,0,.29,-.3));let y=ue(.36,.14,.03,c,0,.38,-.42);y.rotation.x=-.15,p.add(y),p.add(ue(.12,.04,.12,l,0,.3,.02),Ye(new T(0,.3,.28),new T(0,.42,.22),.008,l),Ye(new T(-.12,.42,.22),new T(.12,.42,.22),.007,o));let v=ue(.3,.2,.006,u,0,.5,.25);v.rotation.x=.25,p.add(v);let x=new ke;x.moveTo(.26,.6),x.quadraticCurveTo(-.1,.66,-.46,.64),x.quadraticCurveTo(-.5,.63,-.5,.58),x.lineTo(-.47,.6),x.quadraticCurveTo(-.1,.63,.26,.58),x.closePath();let _=We(x,.48,.006,12,1);p.add(new te(_,[a,a]));for(let E of[-1,1])p.add(Ct(x,s,E*.24,.006));for(let[E,b,S]of[[.19,.24,.27],[-.19,.24,.27],[.2,-.45,.26],[-.2,-.45,.26]])p.add(Ye(new T(E,S,b),new T(E,b>0?.59:.62,b),.007,o));p.add(ue(.05,.03,.01,d,0,.26,.47));let M=Jl(l,h,.08,.05);M.position.set(0,.08,.36),p.add(M);for(let E of[-1,1]){let b=Jl(l,h,.085,.05);b.position.set(E*.2,.085,-.3),p.add(b)}return jt(p)}function Cx(i,e,t){let n=[[.04,.06],[-.18,.08],[-.22,.24],[-.2,.4],[-.12,.56]].map(([l,c])=>[l*i/.5*1.45,c*i/.5]),r=[.06*i/.5*1.45,.48*i/.5],s=new ke;s.moveTo(...n[0]),n.slice(1).forEach(l=>s.lineTo(...l)),s.lineTo(...r),s.closePath();let a=new de;a.add(new te(We(s,.005,0,8,1),e));let o=l=>{for(let c=1;c<n.length;c++)if(l<=n[c][1]){let[h,u]=n[c-1],[d,p]=n[c];return h+(d-h)*(l-u)/(p-u)}return n[n.length-1][0]};for(let l=1;l<=5;l++){let c=n[0][1]+(r[1]-n[0][1])*l/6,h=n[0][0]+(r[0]-n[0][0])*l/6,u=o(c);a.add(ue(.012,.005,Math.abs(h-u),t,0,c,(h+u)/2))}return a}function Bm(i,e={}){let t=e.paper||null,n=Math.min(3,Math.max(1,e.sails??3)),r=i(e.wood||"#5a3a24",t,{flatShading:!0}),s=i("#c9a06a",t,{flatShading:!0}),a=i("#8a5a36",t),o=i("#efe3c8",t),l=i("#f3d79a",null,{emissive:"#8a6a30",emissiveIntensity:.5}),c=i(e.color||"#b0402a",t,{side:st}),h=i("#3a2a1e"),u=i("#2e241c"),d=E=>.075+.07*(1-E)**4+.05*E**4,{hm:p,dg:f}=qr((E,b,S)=>{let w=-.04+.03*E**3,P=d(E);return[[0,w],[S*.75,Math.max(w,-.015)],[S*.95,.03],[S*.98,P-.018],[S,P]]},.15,[1,0,0,0,0,0,0,1],[r,s]),g=new de;g.add(p,new te(f,i("#a87a4c",t,{side:st})));let m=d(.45)-.012,y=[[-.36,.2,.22,.07],[-.3,.04,.2,.06]];y.forEach(([E,b,S,w],P)=>{let D=m+(P?y[0][3]:0),N=new te(We(Xe(E,0,b,w,.006),S,.004),[a,a]);N.position.y=D,g.add(N);let z=Math.round((b-E)/.06);for(let G of[-1,1])for(let K=0;K<z;K++){let J=E+.02+K*(b-E-.03)/z;g.add(Ct(Xe(J,D+w*.3,J+.03,D+w*.75,.004),l,G*S/2))}g.add(ue(S+.01,.006,b-E+.02,o,0,D+w+.003,(E+b)/2))});let v=m+.13+.006,x=.025;for(let E of[-1,1]){g.add(ue(.004,.004,.34,o,E*.1,v+x,-.13));for(let b=0;b<=6;b++)g.add(ue(.004,x,.004,o,E*.1,v+x/2,-.3+b*.057))}[[.06,.62],[.33,.42],[-.4,.36]].slice(0,n).forEach(([E,b],S)=>{let w=d(.5+E)-.012;g.add(Ye(new T(0,w,E),new T(0,w+b+.03,E),.006,u));let P=Cx(b,c,h);P.position.set(0,w,E),P.rotation.y=.35-S*.12,g.add(P)}),g.add(Ye(new T(0,d(0)-.01,-.48),new T(0,d(0)+.1,-.48),.003,u));let M=new te(new gn(.05,.03),i("#b5281c",null,{side:st}));M.rotation.y=Math.PI/2,M.position.set(0,d(0)+.085,-.505),g.add(M);for(let E of[-1,1])g.add(ue(.01,.03,.02,u,E*.05,d(.92)-.02,.42));return jt(g)}function km(i,e={}){let t=e.paper||null,n=i(e.wood||"#8a5a34",t,{flatShading:!0}),r=i(e.color||"#2f6db3",t,{flatShading:!0}),s=i("#7a3a2a",t),a=i("#9a9a96",null,{metalness:.5,roughness:.4}),o=i("#2a2622"),l=i("#e9e2d0",t,{side:st}),c=v=>.055+.21*v**6,{hm:h,dg:u}=qr((v,x,_)=>{let M=-.022+.06*v**4,E=c(v);return[[0,M],[_*.85,M+.01],[_,E-.016],[_,E]]},.075,[1,0,0,0,0,1],[n,r],32,v=>v<.08?.62+v*4:Math.min(1,Math.sin(Math.PI*Math.min(1,v*.98))**.5*1.08)),d=new de;d.add(h,new te(u,i("#b0805a",t,{side:st})));let p=new T(0,c(.99),.49);["#e0689a","#f0c030","#3aa05a","#e0689a","#f0c030"].forEach((v,x)=>{let _=ue(.012,.07,.006,i(v,null,{side:st}),(x-2)*.008,p.y-.045,p.z-.02-x*.006);_.rotation.x=.25+x*.05,d.add(_)});let f=new te(new on(.014,.005,6,12),i("#f0c030"));f.position.set(0,p.y-.01,p.z-.012),d.add(f);let g=c(.03)+.02,m=new T(0,g,-.47),y=new T(0,-.03,-.76);d.add(ue(.05,.05,.08,s,0,g+.025,-.45),ue(.03,.02,.04,o,0,g+.06,-.45),Ye(new T(0,c(.03)-.01,-.47),m,.008,o)),d.add(Ye(m,y,.005,a),Ye(new T(0,g+.02,-.42),new T(0,g+.06,-.28),.004,a));for(let v of[0,Math.PI/2]){let x=ue(.004,.03,.008,a,0,y.y,y.z);x.rotation.z=v+.4,d.add(x)}if(e.canopy??!0){let v=c(.5)+.11,x=.06;for(let[M,E]of[[x,-.22],[-x,-.22],[x,.18],[-x,.18]])d.add(Ye(new T(M,c(.5+E)-.012,E),new T(M,v,E),.003,o));let _=new te(We(Xe(-.25,0,.21,.006,.003),.15,.002),l);_.position.y=v,d.add(_)}return jt(d)}function zm(i,e={}){let t=e.paper||null,n=i(e.color||"#2f7a8a",t),r=i(e.color||"#2f7a8a",t,{flatShading:!0}),s=i(e.accent||"#c23a2c",t),a=i("#2b2a28"),o=i("#cfcfca",null,{metalness:.5,roughness:.35}),l=i("#3a3430",t,{side:st,flatShading:!0}),c=new de,h=.14,u=new ke;u.moveTo(.12,.18),u.lineTo(.42,.18),u.quadraticCurveTo(.47,.18,.47,.13),u.lineTo(.49,.1),u.lineTo(.52,.1),u.lineTo(.5,.2),u.lineTo(.38,.26),u.lineTo(.2,.26),u.lineTo(.16,.48),u.quadraticCurveTo(.14,.52,.1,.5),u.lineTo(.1,.2),u.quadraticCurveTo(.1,.18,.12,.18);let d=We(u,.36,.01,8,1),p=new te(d,[n,r]);p.add(_i(d,"#1a3a40",45)),c.add(p),c.add(ue(.3,.025,.17,s,0,.272,.29));let f=ue(.3,.17,.02,s,0,.38,.19);f.rotation.x=-.2,c.add(f);for(let _=0;_<3;_++){let M=new Me(.16+_*.006,.16+_*.006,.36,8,1,!0,Math.PI-(-.35+_*.05)-.45,.45);M.rotateZ(Math.PI/2);let E=new te(M,l);E.position.set(0,.42,.14),c.add(E)}for(let _ of[-1,1]){let M=Sm(h,a,o,o,16);M.position.set(_*.22,h,.3),c.add(M),c.add(Ye(new T(_*.2,h,.3),new T(_*.17,.2,.3),.006,a))}let g=Sm(h,a,o,o,16);g.position.set(0,h,-.4),c.add(g);let m=new T(0,.5,-.27),y=new T(0,.16,-.16),v=new T(0,.52,.06);c.add(Ye(new T(0,.2,.12),y,.01,a),Ye(y,new T(0,h,-.4),.007,a),Ye(y,m,.009,a),Ye(m,new T(0,h,-.4),.006,a)),c.add(Ye(new T(0,.45,.1),v,.008,a),Ye(new T(-.14,.52,.06),new T(.14,.52,.06),.007,o),Ye(m,new T(0,.45,.1),.008,a)),c.add(ue(.05,.02,.09,a,0,m.y+.012,m.z-.01));let x=new te(new Me(.03,.03,.012,14),o);x.rotation.z=Math.PI/2,x.position.copy(y),c.add(x);for(let _ of[-1,1])c.add(ue(.04,.008,.02,a,_*.04,y.y+_*.04,y.z+_*.02));return jt(c)}function Vm(i,e={}){let t=e.paper||null,n=Math.max(1,e.cars??3),r=1,s=.18,a=.2,o=.035,l=.008,c=r+.03,h={body:i(e.body||"#f6f5f1",t),fold:i(e.body||"#f6f5f1",t,{flatShading:!0})},u=i(e.color||"#c8282c",t),d=i(e.accent||"#c9a24a",t),p=i("#2a3644",null,{roughness:.4}),f=i("#3a3c40"),g=i("#a5a8ab",t),m=_=>(_.moveTo(-.5,o),_.lineTo(.36,o),_.quadraticCurveTo(.5,o,.5,.055),_.bezierCurveTo(.44,.12,.3,a,.1,a),_.lineTo(-.48,a),_.quadraticCurveTo(-.5,a,-.5,a-.02),_.closePath(),_),y=(_,M,E,b)=>{let S=new ke;return S.moveTo(-.5,M),_?(S.lineTo(.08,M),S.quadraticCurveTo(.28,M,.37,M+b),S.lineTo(.355,E+b),S.quadraticCurveTo(.27,E,.08,E)):(S.lineTo(.5,M),S.lineTo(.5,E)),S.lineTo(-.5,E),S.closePath(),S},v=new de,x=[];for(let _=0;_<n;_++){let M=_===0,E=_===n-1&&n>1,b=M||E,S=b?m(new ke):Xe(-.5,o,.5,a,.022),{g:w,add:P}=Nd(S,s,l,h,b?[.08,.5+l,.66,1.6]:null,E);if(P(We(y(b,.068,.084,.04),s+.008,0),u),P(We(y(b,.089,.093,.04),s+.006,0),d),b){let D=$n(S,N=>N.x>.24&&N.x<.43&&N.y>.115,l+.003,.012);D&&P(We(D,s*.78,0),p)}if(Ud(w,-.44,b?.04:.44,.118,.152,s,b?8:14,p),w.add(ue(s-.04,o,r-.1,f,0,o/2,-.02),ue(s-.01,.022,r-.3,g,0,o-.008,b?-.12:0)),b||w.add(ue(s*.7,a*.75,.03,f,0,a*.5,.51)),n>1&&w.add(ue(s*.7,a*.75,.03,f,0,a*.5,-.51)),!b&&_===1){let D=new T(0,a+l,.05),N=new T(0,a+.06,.12);w.add(ue(.06,.012,.05,f,0,a+l+.006,.02),Ye(D,N,.003,f),ue(.08,.004,.01,f,0,a+.062,.12))}w.position.z=-_*c,v.add(w),x.push(w)}return v.userData={cars:x,pitch:c},jt(v)}function Gm(i,e={}){let t=e.paper||null,n=i(e.wood||"#3e3128",t,{flatShading:!0}),r=i("#7a5a3e",t,{side:st}),s=i(e.color||"#26221f",t,{side:st,flatShading:!0}),a=i("#5a4636",t),o=i("#6b4c32",t),l=p=>.05+.035*(2*p-1)**4,{hm:c,dg:h}=qr((p,f,g)=>{let m=-.022+.02*(2*p-1)**4;return[[0,m],[g*.8,m+.01],[g*.97,l(p)-.015],[g,l(p)]]},.075,[0,0,0,0,0,0],[n],32,p=>Math.sin(Math.PI*p)**.55),u=new de;u.add(c,new te(h,r)),[[-.17,.062,.14],[0,.07,.16],[.16,.06,.12]].forEach(([p,f,g])=>{let m=l(.5+p)-.012,y=new Me(f,f,g,14,1,!0,Math.PI/2,Math.PI);y.rotateX(Math.PI/2);let v=new te(y,s);v.position.set(0,m,p),u.add(v);let x=Math.round(g/.022);for(let _=0;_<=x;_++){let M=new te(new on(f+.002,.0022,4,16,Math.PI),a);M.position.set(0,m,p-g/2+_*g/x),u.add(M)}});let d=l(.1);return u.add(Ye(new T(.05,d+.01,-.36),new T(.16,-.02,-.62),.004,o),ue(.025,.004,.06,o,.16,-.02,-.61)),u.add(Ye(new T(-.05,d+.03,-.3),new T(-.07,d,-.12),.003,o)),jt(u)}function Wm(i,e={}){let t=e.paper||null,n=Math.max(1,e.decks??3),r=i("#f7f5ef",t),s=i("#f7f5ef",t,{flatShading:!0}),a=i(e.accent||"#2c5a8a",t,{flatShading:!0}),o=i("#ae2a20",t,{flatShading:!0}),l=i("#2c3a48",null,{roughness:.4}),c=i("#2e2c2a"),h=i(e.accent||"#2c5a8a",t,{side:st}),u=.1,{hm:d,dg:p}=qr((_,M,E)=>[[0,-.04+.03*M**3],[E*.8,-.015],[E*.95,.008+.01*M],[E*.965,.02+.01*M],[E*.985,.05+.015*M],[E*.99,.062+.015*M],[E,u+.03*M*M]],.105,[0,3,0,2,1,1,1,1,2,0,3,0],[s,a,o,a]),f=new de;f.add(d,new te(p,i("#c9c2b4",t,{side:st})));let g=.055,m=u-.012;for(let _=0;_<n;_++){let M=-.42+_*.03,E=.3-_*.06,b=.19-_*.012,S=u-.012+_*g,w=new te(We(Xe(M,0,E,g,.022),b,.004,10),[r,r]);w.position.y=S,f.add(w);for(let D of[-1,1]){f.add(Ct(Xe(M+.025,S+.014,E-.03,S+.042,.005),l,D*b/2));let N=Math.round((E-M-.06)/.04);for(let z=1;z<N;z++){let G=M+.025+(E-M-.055)*z/N;f.add(Ct(Xe(G-.003,S+.014,G+.003,S+.042,.001),r,D*(b/2+.004),.003))}f.add(ue(.004,.004,E-M-.04,r,D*(b/2+.012),S+.03,(M+E)/2))}let P=$n(Xe(M,0,E,g,.022),D=>D.x>E-.025&&D.y>.014&&D.y<.042,.007,.01);if(P){let D=new te(We(P,b-.03,0),l);D.position.y=S,f.add(D)}m=S+g}let y=m+.004;for(let[_,M]of[[.07,-.25],[-.07,-.25],[.07,0],[-.07,0]])f.add(Ye(new T(_,y,M),new T(_,y+.05,M),.003,c));let v=new te(We(Xe(-.27,0,.02,.006,.003),.17,.002),h);v.position.y=y+.05,f.add(v),f.add(Ye(new T(0,y,.08),new T(0,y+.1,.07),.004,c),ue(.05,.008,.01,c,0,y+.085,.072)),f.add(Ye(new T(0,u,-.48),new T(0,u+.09,-.48),.003,c));let x=new te(new gn(.045,.028),i("#c8282c",null,{side:st}));return x.rotation.y=Math.PI/2,x.position.set(0,u+.075,-.502),f.add(x),jt(f)}function Xm(i,e={}){let t=e.paper||null,n=i(e.color||"#c9b26a",t),r=i("#8f7a3e",t),s=i("#5a4a32",t),a=i("#b59a58",t),o=e.umbrella===null?null:i(e.umbrella||"#c23a2c",t,{side:st,flatShading:!0}),l=new de,c=9,h=.017,u=.34;for(let d=0;d<c;d++){let p=(d/(c-1)-.5)*u,f=1-Math.abs(d/(c-1)-.5)*.4,g=new Yn([[-.5,.02],[-.3,.004],[.15,.004],[.36,.03*f],[.5,.13*f]].map(([m,y])=>new T(p,y+.003,m)));l.add(new te(new Vr(g,24,h,8),n));for(let m=1;m<6;m++){let y=m/6,v=g.getPointAt(y),x=g.getTangentAt(y),_=new te(new on(h+.001,.0028,4,12),r);_.position.copy(v),_.lookAt(v.clone().add(x)),l.add(_)}}for(let d of[-.36,-.02,.28]){let f=new te(new Me(.01,.01,u+.04,8),n);f.rotation.z=Math.PI/2,f.position.set(0,.024,d),l.add(f);for(let g=0;g<c;g+=2)l.add(ue(.012,.012,.024,s,(g/(c-1)-.5)*u,.024,d))}for(let d of[-1,1]){let p=d*.075,f=-.12;l.add(ue(.11,.012,.1,a,p,.075,f));let g=ue(.11,.09,.01,a,p,.12,f-.05);g.rotation.x=-.18,l.add(g);for(let[m,y]of[[-.05,-.045],[.05,-.045],[-.05,.045],[.05,.045]])l.add(ue(.008,.05,.008,a,p+m,.048,f+y))}if(o){l.add(Ye(new T(0,.03,-.2),new T(0,.38,-.16),.004,s));let d=new te(new Sn(.19,.07,12,1,!0),o);d.position.set(0,.36,-.16),l.add(d)}return l.add(Ye(new T(-.12,.03,-.46),new T(.1,.05,.42),.006,n)),jt(l)}var Px=[60,160,320,520,760,1050,1400,1800,2300,2900,3600,4500];function Ix(i){if(i instanceof Date)return[i.getMonth()+1,i.getDate()];let e=String(i||""),t=e.match(/\d{4}[-/.](\d{1,2})[-/.](\d{1,2})/),n=t||e.match(/(\d{1,2})[./-](\d{1,2})/);return n?[+n[1],+n[2]]:null}var Lx=(i,e)=>i*100+e,Ya=(i,e,t)=>e<=t?i>=e&&i<=t:i>=e||i<=t;function nc(i,e=35,t=0){let n=Ix(i);if(!n)return"autumn";let[r,s]=n;e<0&&(r=(r+5)%12+1,e=-e);let a=Lx(r,s);if(e<23.5)return"green";if(e<30)return Ya(a,120,228)?"sakura":t>=2500&&Ya(a,1201,228)?"snow":"green";let o=e>=41?{sakura:[420,520],autumn:[920,1110],snow:[1111,419]}:e>=38?{sakura:[401,510],autumn:[1001,1125],snow:[1126,331]}:{sakura:[301,430],autumn:[1001,1130],snow:[1201,229]};return Ya(a,...o.sakura)?"sakura":Ya(a,...o.autumn)?"autumn":Ya(a,...o.snow)&&(e>=34||t>=1500)?"snow":"green"}function ic(i){let e=i.company||{},t=e.home,n=e.homeXY,r=e.airXY;if(!t||!n||!r||t.lat===t.alat)return 35;let s=(n[1]-r[1])/(t.lat-t.alat),a=(i.stops||[]).filter(o=>!o.air&&o.xy);return!a.length||!s?35:t.lat+(a.reduce((o,l)=>o+l.xy[1],0)/a.length-n[1])/s}function Jm(i,e=0){let t=ic(i),n=(i.days||[]).filter(a=>a.date);if(!n.length)return"autumn";let r={};n.forEach(a=>{let o=nc(a.date,t,e);r[o]=(r[o]||0)+1});let s=nc(n[0].date,t,e);return Object.keys(r).reduce((a,o)=>r[o]>r[a]?o:a,s)}var Od={pine:["#3d5a3b","#4b6a45","#33503a"],cedar:["#2f4a35","#3a5a3e","#29412f"]},Ql={palm:["#3f7a3a","#4c8a40","#356b35"],bamboo:["#5e8f3e","#6fa34a","#4f7d36"],banyan:["#3d6b3a","#4a7a42","#335c33"]},ec=["#f6f4ef","#eceeec","#f9f8f4"],zs={sakura:{label:"\u6AFB",en:"SAKURA",months:"3\u20134 \u6708",leaves:{cherry:["#fbe1e0","#f8d3d3","#fdeceb","#f6c8c9"],maple:["#9fb46a","#b2c27c","#bccb8a","#8ea65c"],ginkgo:["#a9bf6a","#bccd80","#98b05c"],willow:["#a6c06a","#b8cf7e","#93ad58"],...Od,...Ql},ground:{land:"#f1e7d6",tint:["#bfcb8e",.4],snowLine:2600,snow:ec},sky:["#f6eee8","#e9d8cf"],fog:{color:"#e9d8cf",mult:1},sun:["#fff0dc",1.7],hemi:["#fff6f2","#fbeee8",2.3],fall:{kind:"petal",count:260,size:.04,speed:.22,sway:.45,colors:["#f7b9b6","#fac9c2","#fde2dc","#f4a6a4"],glow:"#6e4a46"},inland:["cherry","cherry","maple","cedar"]},green:{label:"\u65B0\u7DA0",en:"GREEN",months:"5\u20139 \u6708",leaves:{cherry:["#6f9a4a","#82ac58","#5f8a40"],maple:["#6c9a48","#7fae55","#5c8a3e","#91b860"],ginkgo:["#7aa64e","#8db85c","#6a9442"],willow:["#7fa64e","#93b860","#6c9442"],...Od,...Ql},ground:{land:"#eee6d0",tint:["#a9bb7a",.5],snowLine:3500,snow:ec},sky:["#eef0e8","#d3dccd"],fog:{color:"#d5dccd",mult:1.12},sun:["#fff6e2",2.6],hemi:["#f6f8ec","#6f6c50"],fall:{kind:"leaf",count:70,size:.055,speed:.3,sway:.35,colors:["#8fae5a","#a6c06a","#6c8a3f","#b5c77e"]},inland:null},autumn:{label:"\u6953",en:"AUTUMN",months:"10\u201311 \u6708",leaves:{maple:["#b8342a","#c9462a","#d6772c","#e0a43c","#a8402b","#c45f2b","#8a8c4a"],cherry:["#c4673a","#d0884a","#b8553a"],ginkgo:["#e8b923","#d9a31a","#f0c94a"],willow:["#b8a24a","#c9b45a","#a08c3e"],...Od,...Ql},ground:{land:"#efe4cf",tint:["#d9ae7a",.08],snowLine:2600,snow:ec},sky:["#f4eadb","#ddc8a8"],fog:{color:"#ddcbad",mult:1},sun:["#ffdcae",2.4],hemi:["#fff1de","#76664f"],fall:{kind:"maple",count:170,size:.07,speed:.28,sway:.4,colors:["#b8342a","#c9462a","#d6772c","#e0a43c","#e8b923"]},inland:["maple","maple","ginkgo","cedar"]},snow:{label:"\u96EA",en:"SNOW",months:"12\u20132 \u6708",leaves:{maple:["#f8f4ec","#f1eadc","#fbf8f2"],cherry:["#f8f4ec","#f1eadc","#fbf8f2"],ginkgo:["#f8f4ec","#efe7d8","#fbf8f2"],willow:["#f3efe4","#ebe5d6","#f8f5ec"],pine:["#4e6656","#5c7462","#455c4c"],cedar:["#435a4a","#506857","#3b5142"],...Ql},ground:{land:"#f2efe8",tint:["#eeede8",.6],snowLine:160,snow:ec},sky:["#eef0f0","#d5dadc"],fog:{color:"#dadfe0",mult:.82},sun:["#f4f2ee",2],hemi:["#f4f7fa","#7d8288"],fall:{kind:"snow",count:380,size:.028,speed:.34,sway:.18,colors:["#ffffff","#f6f7f8","#eef1f3"],glow:"#8c9196"},inland:["cedar","cedar","pine","maple"]}};function Fd(i,e={}){let t=zs[i]||zs.autumn,n=Math.abs(e.lat??35),r={...t.ground};return t===zs.snow&&(r.snowLine=n>=40?0:n>=37?60:n>=35?160:520),{name:zs[i]?i:"autumn",...t,ground:r,leaves:{...t.leaves},fall:{...t.fall}}}function Bd(i,e,t=Px){let n=u=>new me(u),r=u=>"#"+u.getHexString(),[s,a]=e.ground.tint,o=e.ground.snow,l=(i.terrain||[]).map((u,d)=>t[d]>=e.ground.snowLine?o[d%o.length]:r(n(u).lerp(n(s),a*(1-.4*d/t.length)))),c={...i.trees||{},colorsBy:{...(i.trees||{}).colorsBy,...e.leaves},colors:e.leaves.maple,pine:e.leaves.pine},h=(i.trees?.inland||[]).some(u=>u==="maple"||u==="cherry");return e.inland&&h&&(c.inland=e.inland),{...i,sky:e.sky,hemi:e.hemi.slice(0,2),hemiPower:e.hemi[2]??1,sun:e.sun[0],sunPower:e.sun[1],fog:e.fog,land:e.ground.land,terrain:l,trees:c,season:e.name}}function tc(i,e,t=10){let n=new zr(i,t),r=n.attributes.position;for(let s=0;s<r.count;s++)r.setZ(s,Math.abs(r.getX(s))*e);return n.center(),n.computeVertexNormals(),n}var Dx={petal(){let i=new ke;return i.moveTo(0,-.5),i.bezierCurveTo(.34,-.3,.46,.18,.3,.46),i.quadraticCurveTo(.16,.52,.04,.4),i.lineTo(0,.32),i.lineTo(-.04,.4),i.quadraticCurveTo(-.16,.52,-.3,.46),i.bezierCurveTo(-.46,.18,-.34,-.3,0,-.5),tc(i,.35)},maple(){let i=new ke,e=[];for(let t=0;t<10;t++){let n=Math.PI/2+t/10*Math.PI*2,r=t%2===0,s=r?t===4||t===6?.36:.5:.2;t===5?e.push([-.02,-.12],[-.02,-.4],[.02,-.4],[.02,-.12]):e.push([Math.cos(n)*s,Math.sin(n)*s+.05])}return i.moveTo(...e[0]),e.slice(1).forEach(t=>i.lineTo(...t)),i.closePath(),tc(i,.25,4)},leaf(){let i=new ke;return i.moveTo(0,-.5),i.quadraticCurveTo(.36,-.1,0,.5),i.quadraticCurveTo(-.36,-.1,0,-.5),tc(i,.4)},snow(){let i=new ke;for(let e=0;e<=12;e++){let t=e/12*Math.PI*2,n=e%2?.44:.5;e?i.lineTo(Math.cos(t)*n,Math.sin(t)*n):i.moveTo(Math.cos(t)*n,Math.sin(t)*n)}return tc(i,.12,1)}},$m=600;function kd(i,e,t={}){let n=(zs[i]||zs.autumn).fall,r=Math.min($m,t.count??n.count),[s,a,o]=t.area||[10,4.5,10],l=t.size??n.size,c=t.wind||[.12,.04],h=n.kind==="snow"?.4:1.6,u=e("#fff",t.paper||null,{side:st,roughness:.9,emissive:n.glow||"#000"}),d=new bn(Dx[n.kind](),u,r);d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!1;let p=t.seed??2611,f=()=>(p=p*16807%2147483647,p/2147483647),g=new Float32Array(r*8),m=new me;for(let w=0;w<r;w++){let P=w*8;g[P]=(f()-.5)*s,g[P+1]=f()*a,g[P+2]=(f()-.5)*o,g[P+3]=f()*6.28,g[P+4]=n.speed*(.7+f()*.6),g[P+5]=l*(.75+f()*.5),g[P+6]=f()*6.28,g[P+7]=.6+f()*.8,d.setColorAt(w,m.set(n.colors[w%n.colors.length]))}let y=new de;y.add(d),y.userData={kind:n.kind,count:r};let v=new sn,x=new jn,_=new T,M=new T,E=new Se,b=Math.min(.4,a*.1),S=(w,P)=>((w+P/2)%P+P)%P-P/2;return y.update=(w,P=1)=>{if(y.visible=P>.02,!!y.visible){w=Math.min(w,.1);for(let D=0;D<r;D++){let N=D*8;g[N+3]+=w*g[N+7]*h,g[N+1]-=g[N+4]*w,g[N]=S(g[N]+c[0]*w,s),g[N+2]=S(g[N+2]+c[1]*w,o),g[N+1]<0&&(g[N+1]+=a,g[N]=(f()-.5)*s,g[N+2]=(f()-.5)*o);let z=g[N+3],G=g[N+1],K=Math.min(1,G/b,(a-G)/b);_.set(g[N]+Math.sin(z+D)*n.sway*.5,G,g[N+2]+Math.cos(z*.7+D)*n.sway*.3),x.set(g[N+6]+z,z*.6,Math.sin(z)*.8),v.setFromEuler(x),M.setScalar(Math.max(1e-4,g[N+5]*P*K)),d.setMatrixAt(D,E.compose(_,v,M))}d.instanceMatrix.needsUpdate=!0}},y.update(0,1),y}var Nx=["andon","bonbori","chochin","illum"],Ux={autumn:"andon",sakura:"bonbori",green:"chochin",snow:"illum"},Hd=i=>Ux[i]||"andon";function Qm(i,e="autumn"){if(!i)return null;if(i.night)return Nx.includes(i.night)?i.night:Hd(e);let t=[i.title,i.route,i.cap,i.stay,...i.spots||[]].join(" ");return/祭|まつり/.test(t)?"chochin":/燈飾|イルミ|光之|聖誕/.test(t)?"illum":/夜櫻|夜桜/.test(t)?"bonbori":/夜楓|點燈|点灯|ライトアップ|夜間參拜|夜間拜觀|夜間特別/.test(t)?Hd(e):null}var Ox={dusk:{sky:["#5d7391","#f0a46a"],fog:{color:"#d8b89e",mult:.9},sun:["#ffa060",1.5],sunDir:[-.95,.28,.3],hemi:["#dcd2c8","#6a5646",1.15],glow:.55},night:{sky:["#141c2b","#33405a"],fog:{color:"#28324a",mult:.75},sun:["#a9bedc",.35],sunDir:[.4,.9,-.35],hemi:["#4a5d80","#1d1a18",.55],glow:1}};function eg(i,e="autumn"){let t=Ox[i];if(!t)return null;let n={time:i,...t,sky:[...t.sky],hemi:[...t.hemi],sun:[...t.sun],fog:{...t.fog},lights:Hd(e)};return e==="snow"&&i==="night"&&(n.sky=["#0e1522","#1c2740"],n.fog={color:"#1a2336",mult:.7},n.hemi=["#34476c","#1e2432",.48],n.sun=["#9fb6d8",.3],n.glow=1.35),e==="autumn"&&i==="dusk"&&(n.sun=["#ff8f45",1.6]),e==="sakura"&&i==="dusk"&&(n.sky[1]="#f2b08a"),n}var jm=[-.75,.85,.5];function tg(i,e,t){let n=(c,h)=>new me(c).lerp(new me(h),t),r=(c,h)=>c+(h-c)*t,s=i.fog&&i.fog.color||i.sky[1],a=i.fog&&i.fog.mult||1,o=i.sunPower??2.4,l=i.hemiPower??1;return e||(e={sky:i.sky,fog:{color:s,mult:a},sun:[i.sun,o],sunDir:jm,hemi:[i.hemi[0],i.hemi[1],l],glow:0}),{sky:[n(i.sky[0],e.sky[0]),n(i.sky[1],e.sky[1])],fog:n(s,e.fog.color),fogMult:r(a,e.fog.mult),sun:n(i.sun,e.sun[0]),sunPower:r(o,e.sun[1]),sunDir:jm.map((c,h)=>r(c,e.sunDir[h])),hemiSky:n(i.hemi[0],e.hemi[0]),hemiGround:n(i.hemi[1],e.hemi[1]),hemiPower:r(l,e.hemi[2]),glow:r(0,e.glow)}}function ng(i,e,t){let n=i.image,r=n.getContext("2d"),s=r.createLinearGradient(0,0,0,n.height);s.addColorStop(0,"#"+new me(e).getHexString()),s.addColorStop(1,"#"+new me(t).getHexString()),r.fillStyle=s,r.fillRect(0,0,n.width,n.height),i.needsUpdate=!0}var Hx=160,qm=400,Fx=3,Ym={andon:{shade:["#ffb866","#ffc47a"],warm:"#ffb45a",post:"#5a3e2b",count:36,strings:!1,lamp:.8},bonbori:{shade:["#ffe4dc","#fff0e6"],warm:"#ffd2c0",post:"#3b2f2a",count:30,strings:!1,lamp:.7},chochin:{shade:["#ff5a3a","#ffe2b8"],warm:"#ff9a50",post:"#4a3a30",count:48,strings:!0,lamp:.4},illum:{shade:["#ffe6a8","#fff4dc"],warm:"#ffd27a",post:"#3a3836",count:0,strings:!0,lamp:.35}},Zm=null,Km=()=>Zm||(Zm=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new dr(i);return n.colorSpace=wt,n})());function ig(i,e,t={}){let n=Ym[i]||Ym.andon,[r,s]=t.center||[0,0],a=t.radius??.9,o=t.ground||(()=>0),l=t.avoid||(()=>!1),c=Math.min(Hx,t.count??n.count),h=t.seed??1116,u=()=>(h=h*16807%2147483647,h/2147483647),d=new de,p=t.paper||null,f=[0,1,2].map(W=>({rad:a*(.42+W*.27),a0:u()*6.28,span:1.3+u()*.9})),g=W=>{let Y=[];return f.forEach(ee=>{let ie=Math.floor(ee.span*ee.rad/W);for(let j=0;j<=ie;j++){let B=ee.a0+ee.span*j/Math.max(1,ie),Z=r+Math.cos(B)*ee.rad,oe=s+Math.sin(B)*ee.rad;l(Z,oe)||Y.push([Z,oe,ee])}}),Y},m=[],y=[],v=[],x=[],_=[],M=[];if(!n.strings)g(.09).slice(0,c).forEach(([W,Y],ee)=>{let ie=o(W,Y),j=n.shade[ee%n.shade.length];y.push([W,ie+.05,Y,.008,.1]),m.push([W,ie+.115,Y,j]),_.push([W,ie+.115,Y,j]),M.push([W,ie,Y,.12])});else{let W=g(.24),Y=i==="illum"?.13:.16,ee=(ie,j,B,Z)=>Array.from({length:Z+1},(oe,$)=>{let C=$/Z;return[ie[0]+(j[0]-ie[0])*C,ie[1]+(j[1]-ie[1])*C-B*4*C*(1-C),ie[2]+(j[2]-ie[2])*C]});W.forEach(([ie,j])=>y.push([ie,o(ie,j)+Y/2,j,.006,Y]));for(let ie=1;ie<W.length;ie++){let[j,B,Z]=W[ie-1],[oe,$,C]=W[ie];if(Z!==C)continue;let R=ee([j,o(j,B)+Y,B],[oe,o(oe,$)+Y,$],.03,16);if(x.push(R),i==="chochin")for(let F=2;F<16&&m.length<c;F+=4){let[U,I,O]=R[F],A=n.shade[(m.length+ie)%2];m.push([U,I-.016,O,A]),_.push([U,I-.016,O,A]),M.push([U,o(U,O),O,.08])}if(i==="illum")for(let F=0;F<=16&&v.length<qm;F++){let[U,I,O]=R[F],A=n.shade[F%2];v.push([U,I,O,A]),F%3===0&&_.push([U,I,O,A])}}if(i==="illum"){let ie=r+a*.25,j=s+a*.1,B=o(ie,j),Z=.34;y.push([ie,B+Z/2,j,.006,Z]);for(let oe=0;oe<12;oe++){let $=oe/12*6.28,C=ee([ie,B+Z,j],[ie+Math.cos($)*.15,B+.02,j+Math.sin($)*.15],0,12);x.push(C);for(let R=1;R<=12&&v.length<qm;R++){let[F,U,I]=C[R],O=n.shade[(oe+R)%2];v.push([F,U,I,O]),(oe+R)%4===0&&_.push([F,U,I,O])}}M.push([ie,B,j,.3])}}let E=new ht,b=new me,S=[],w=(W,Y,ee,ie)=>{if(!ee.length)return null;let j=new bn(W,Y,ee.length);return ee.forEach((B,Z)=>{E.position.set(0,0,0),E.scale.setScalar(1),E.rotation.set(0,0,0),ie(B,Z),E.updateMatrix(),j.setMatrixAt(Z,E.matrix)}),j.castShadow=j.receiveShadow=!1,j.frustumCulled=!1,d.add(j),j};w(new Me(1,1,1,6),e(n.post,p),y,([W,Y,ee,ie,j])=>{E.position.set(W,Y,ee),E.scale.set(ie,j,ie)});let P=i==="andon"?new Et(.03,.036,.03):i==="bonbori"?new Me(.016,.02,.038,6):new en(.016,12,8).scale(1,1.3,1);if(n.shade.forEach(W=>{let Y=e(W,p,{emissive:W,emissiveMap:p,emissiveIntensity:0});S.push(Y),w(P,Y,m.filter(ee=>ee[3]===W),([ee,ie,j])=>{E.position.set(ee,ie,j),E.rotation.set(0,u()*1.5,0)})}),v.length&&n.shade.forEach(W=>{let Y=e(W,null,{emissive:W,emissiveIntensity:0});S.push(Y),w(new en(.0055,6,4),Y,v.filter(ee=>ee[3]===W),([ee,ie,j])=>{E.position.set(ee,ie,j)})}),x.length){let W=[];x.forEach(ee=>{for(let ie=1;ie<ee.length;ie++)W.push(...ee[ie-1],...ee[ie])});let Y=new Be;Y.setAttribute("position",new Ae(W,3)),d.add(new ur(Y,new li({color:"#2a2420",transparent:!0,opacity:.7})))}let D=new Float32Array(_.length*3),N=new Float32Array(_.length*3);_.forEach(([W,Y,ee,ie],j)=>{D.set([W,Y,ee],j*3),b.set(ie),N.set([b.r,b.g,b.b],j*3)});let z=new Be;z.setAttribute("position",new mt(D,3)),z.setAttribute("color",new mt(N,3));let G=new Hr({size:t.halo??.14,map:Km(),vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ku,fog:!1});if(_.length){let W=new Ls(z,G);W.frustumCulled=!1,d.add(W)}let K=new Qt({map:Km(),color:n.warm,transparent:!0,opacity:0,depthWrite:!1,blending:ku,polygonOffset:!0,polygonOffsetFactor:-2});w(new gn(1,1).rotateX(-Math.PI/2),K,M,([W,Y,ee,ie])=>{E.position.set(W,Y+.004,ee),E.scale.set(ie*2,1,ie*2)});let J=f.slice(0,Math.min(Fx,t.lamps??3)).map(W=>{let Y=W.a0+W.span/2,ee=r+Math.cos(Y)*W.rad,ie=s+Math.sin(Y)*W.rad,j=new Us(n.warm,0,a*1.4,2);return j.position.set(ee,o(ee,ie)+.16,ie),d.add(j),j});return d.userData={kind:i,shades:m.length,bulbs:v.length,posts:y.length,halos:_.length,lamps:J.length},d.update=(W=0,Y=1)=>{let ee=Y*(.97+.03*Math.sin(W*7.3)*Math.sin(W*3.1));S.forEach(ie=>{ie.emissiveIntensity=1.3*ee}),G.opacity=.85*ee,K.opacity=.5*ee,J.forEach(ie=>{ie.intensity=(t.lampPower??n.lamp)*ee})},d.update(0,0),d}var Bx=["clear","rain","fog"];function rg(i){if(!i)return"clear";if(Bx.includes(i.weather))return i.weather;let e=[i.title,i.route,i.cap,...i.spots||[]].join(" ");return/雲海|晨霧|朝霧|霧/.test(e)?"fog":/雨天|下雨|雨中|雨の/.test(e)?"rain":"clear"}var kx={rain:{sky:["#cfd4d3","#aab2b4"],fog:{color:"#b3bbbd",mult:.62},sun:["#e8ecef",.9],sunDir:[-.75,.85,.5],hemi:["#e2e7e8","#6e6e66",1.3],glow:0},fog:{sky:["#f4efe6","#e4e0d8"],fog:{color:"#e9e5dd",mult:.78},sun:["#fff0d8",1.5],sunDir:[-.85,.42,.4],hemi:["#f7f3ec","#9a948a",1.25],glow:0}};function zd(i,e="autumn"){let t=kx[i];if(!t)return null;let n={weather:i,...t,sky:[...t.sky],hemi:[...t.hemi],sun:[...t.sun],fog:{...t.fog},sunDir:[...t.sunDir]};return i==="rain"&&e==="snow"&&(n.sky=["#dde1e3","#bcc3c7"],n.fog.color="#c6cdd1"),i==="rain"&&e==="sakura"&&(n.sky[1]="#b9b4b4",n.hemi=["#ece8e6","#c9bfb8",1.9]),n}var zx=600,Vx=24;function Vd(i,e,t={}){if(i==="rain"&&t.season==="snow"){let c=kd("snow",e,{...t,count:Math.min($m,t.count??560),size:t.size??.032});return c.userData.kind="heavy-snow",c}let n=new de,[r,s,a]=t.area||[10,4.5,10],o=t.seed??4242,l=()=>(o=o*16807%2147483647,o/2147483647);if(n.userData={kind:i,count:0},i==="rain"){let c=Math.min(zx,t.count??520),h=t.wind||[.5,.15],u=3.2,d=t.len??.11,p=e("#c9d5dc",t.paper||null,{roughness:.8,emissive:"#3c4a52"}),f=new bn(new Et(.0045,d,.0045),p,c);f.castShadow=f.receiveShadow=!1,f.frustumCulled=!1;let g=new Float32Array(c*4);for(let M=0;M<c;M++)g[M*4]=(l()-.5)*r,g[M*4+1]=l()*s,g[M*4+2]=(l()-.5)*a,g[M*4+3]=.8+l()*.4;let m=new sn().setFromUnitVectors(new T(0,1,0),new T(-h[0],u,-h[1]).normalize()),y=new T,v=new T,x=new Se,_=(M,E)=>((M+E/2)%E+E)%E-E/2;n.add(f),n.userData.count=c,n.update=(M,E=1)=>{if(n.visible=E>.02,!!n.visible){M=Math.min(M,.1);for(let b=0;b<c;b++){let S=b*4,w=g[S+3];g[S+1]-=u*w*M,g[S]=_(g[S]+h[0]*w*M,r),g[S+2]=_(g[S+2]+h[1]*w*M,a),g[S+1]<0&&(g[S+1]+=s,g[S]=(l()-.5)*r,g[S+2]=(l()-.5)*a);let P=g[S+1],D=Math.min(1,P/.25,(s-P)/.25);y.set(g[S],P,g[S+2]),v.set(E*D,E*D*w,E*D),f.setMatrixAt(b,x.compose(y,m,v))}f.instanceMatrix.needsUpdate=!0}}}else if(i==="fog"){let c=Math.min(Vx,t.count??16),[h,u]=t.levels||[.05,.3],d=[],p=new vn({color:"#fbf9f4",map:t.paper||null,roughness:1,transparent:!0,opacity:0,depthWrite:!1});for(let f=0;f<c;f++){let g=Gx(700+f),m=[[0,0,.85],...Array.from({length:5},(M,E)=>[(E-2)*.5+(g()-.5)*.2,(g()-.3)*.5,.45+g()*.35])],y=Array.from({length:64},(M,E)=>{let b=E/64*Math.PI*2,S=Math.cos(b),w=Math.sin(b),P=.3;for(let[D,N,z]of m){let G=S*D+w*N,K=G*G-(D*D+N*N-z*z);K>=0&&(P=Math.max(P,G+Math.sqrt(K)))}return new le(S*P*1.6,w*P*.7)}),v=new Lt(new ke(y),{depth:.01,bevelEnabled:!0,bevelThickness:.02,bevelSize:.05,bevelSegments:3});v.rotateX(-Math.PI/2);let x=new te(v,p),_=(.55+l()*.7)*(t.scale??1);x.scale.set(_,1,_*(.8+l()*.4)),x.position.set((l()-.5)*r,h+(u-h)*(f%4)/3+l()*.03,(l()-.5)*a),x.rotation.y=l()*.6-.3,x.renderOrder=2,x.userData.v=.03+l()*.05,x.castShadow=x.receiveShadow=!1,n.add(x),d.push(x)}n.userData.count=c,n.update=(f,g=1)=>{n.visible=g>.02,n.visible&&(f=Math.min(f,.1),p.opacity=.72*g,d.forEach(m=>{m.position.x+=m.userData.v*f,m.position.x>r/2+1&&(m.position.x=-r/2-1)}))}}else n.update=()=>{};return n.update(0,0),n}function Gx(i){return()=>(i=i*16807%2147483647,i/2147483647)}var fe=window.JOURNEY,Kt=fe.story,ve=fe.company||{},bg=ed[Kt.theme]||Object.values(ed)[0],zi=Kt.season||Jm(fe),De=Bd(bg,Fd(zi,{lat:ic(fe)})),Za=(()=>{let i=ve.home,e=ve.homeXY,t=ve.airXY;return i&&e&&t&&i.lat!==i.alat?{ky:(e[1]-t[1])/(i.lat-i.alat),y0:e[1],lat0:i.lat}:null})(),Sg=i=>Za?Za.lat0+(i-Za.y0)/Za.ky:ic(fe),Wx=(fe.days.find(i=>i.date)||{}).date,io=zi==="snow"&&!!Za,sg=new Map,wg=i=>{if(!io)return De;let e=Math.round(Sg(i)*2)/2,t=sg.get(e);if(t)return t;let n=nc(Wx,e),r=e>=30?"snow":n==="snow"?"green":n;return t=Bd(bg,Fd(r,{lat:e})),sg.set(e,t),t},Ag=i=>wg(i).season==="snow";function Rg(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3),r=new Map;for(let s=0;s<t.count;s++){let a=-t.getZ(s),o=Math.round(Sg(a)*2),l=r.get(o);l||(l=e(wg(a)),r.set(o,l)),n[s*3]=l.r,n[s*3+1]=l.g,n[s*3+2]=l.b}i.setAttribute("color",new mt(n,3))}var Ys=matchMedia("(prefers-reduced-motion: reduce)").matches,Bn=.42;Object.entries(De.css).forEach(([i,e])=>document.documentElement.style.setProperty(i,e));var Yt=(i,e=Bn)=>new T(i[0],e,-i[1]),Mn=new sl({antialias:!0});Mn.setPixelRatio(Math.min(2,Math.max(devicePixelRatio,1.5)));Mn.shadowMap.enabled=!0;Mn.shadowMap.type=_f;Mn.toneMapping=Ll;Mn.toneMappingExposure=1;document.getElementById("stage").appendChild(Mn.domElement);var et=new ol,qt=new Bt(36,1,.1,800),Gi=new kl(Mn,new rn(innerWidth,innerHeight,{samples:Math.min(4,Mn.capabilities.maxSamples||4),type:Zn}));Gi.addPass(new zl(et,qt));{let i=new ja(et,qt,innerWidth,innerHeight);i.updateGtaoMaterial({radius:.32,distanceExponent:1.6,thickness:1,scale:1.25,samples:12}),i.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:10}),i.blendIntensity=.9,Gi.addPass(i)}var Jd=new gr(Kf),$d=new gr(Jf),d0=new gr($f);d0.uniforms.offset.value=1;d0.uniforms.darkness.value=.3;Gi.addPass(Jd);Gi.addPass($d);Gi.addPass(d0);Gi.addPass(new Vl);var p0=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},rt=p0(20261116);function f0(i,e,t=1){let n=document.createElement("canvas");n.width=n.height=i,e(n.getContext("2d"),i);let r=new dr(n);return r.wrapS=r.wrapT=mn,r.repeat.set(t,t),r.colorSpace=wt,r.anisotropy=Mn.capabilities.getMaxAnisotropy(),r}function Cg(i,e,t){let n=p0(t);i.fillStyle="#fff",i.fillRect(0,0,e,e);for(let r=0;r<e*18;r++)i.fillStyle=`rgba(80,60,40,${n()*.06})`,i.fillRect(n()*e,n()*e,1+n()*2,1+n()*2);i.lineWidth=.6;for(let r=0;r<e;r++){let s=n()*e,a=n()*e,o=n()*6.28,l=6+n()*22;i.strokeStyle=`rgba(90,70,50,${.03+n()*.06})`,i.beginPath(),i.moveTo(s,a),i.quadraticCurveTo(s+Math.cos(o)*l*.5+n()*4,a+Math.sin(o)*l*.5,s+Math.cos(o)*l,a+Math.sin(o)*l),i.stroke()}}var hn=(i,e)=>f0(512,(t,n)=>Cg(t,n,e),i),ot=(i,e=null,t={})=>new vn({color:i,map:e,roughness:.95,metalness:0,...t});et.background=f0(256,(i,e)=>{let t=i.createLinearGradient(0,0,0,e);t.addColorStop(0,De.sky[0]),t.addColorStop(1,De.sky[1]),i.fillStyle=t,i.fillRect(0,0,e,e)});et.fog=new al(new me(De.fog&&De.fog.color||De.sky[1]),30,120);var Gd=De.fog&&De.fog.mult||1,$a=new bl(De.hemi[0],De.hemi[1],De.hemiPower??1),Pg=new Gr("#dfe8f2",.55);Pg.position.set(30,18,-40);et.add(Pg);var An=new Gr(De.sun,De.sunPower??2.4);An.castShadow=!0;An.shadow.mapSize.setScalar(Mn.capabilities.maxTextureSize>=4096?4096:2048);An.shadow.bias=-4e-4;An.shadow.normalBias=.02;et.add($a,An,An.target);var Ig=i=>i.reduce((e,t,n)=>{let r=i[(n+1)%i.length];return e+t[0]*r[1]-r[0]*t[1]},0);function Xx(i,e){let t=Ig(i)>0?1:-1,n=i.length;return i.map((r,s)=>{let a=i[(s-1+n)%n],o=i[(s+1)%n],l=Math.hypot(r[0]-a[0],r[1]-a[1])||1,c=Math.hypot(o[0]-r[0],o[1]-r[1])||1,h=(r[1]-a[1])/l+(o[1]-r[1])/c,u=-((r[0]-a[0])/l+(o[0]-r[0])/c),d=Math.hypot(h,u)||1;return[r[0]+t*h/d*e,r[1]+t*u/d*e]})}var m0=i=>new ke(i.map(e=>new le(e[0],e[1]))),g0=new te(new gn(800,800),ot(De.sea,f0(256,De.seaPattern,220)));g0.rotation.x=-Math.PI/2;g0.receiveShadow=!0;et.add(g0);[[1.1,De.rings[0],.03],[.45,De.rings[1],.06]].forEach(([i,e,t],n)=>{let r=new zr(fe.land.filter(a=>Math.abs(Ig(a))>.02).map(a=>m0(Xx(a,i))),1);r.rotateX(-Math.PI/2);let s=new te(r,ot(e,hn(.12,5+n)));s.position.y=t,s.receiveShadow=!0,et.add(s)});{let i=new Lt(fe.land.map(m0),{depth:Bn-.12,bevelEnabled:!0,bevelThickness:.04,bevelSize:.05,bevelSegments:1,curveSegments:1});i.rotateX(-Math.PI/2),i.translate(0,.08,0),io&&Rg(i,t=>new me(t.land));let e=new te(i,[io?ot("#ffffff",hn(.16,7),{vertexColors:!0}):ot(De.land,hn(.16,7)),ot(De.side,hn(.5,9))]);e.castShadow=e.receiveShadow=!0,et.add(e)}var ut=fe.stops.map(i=>i.xy),vc=(i,e)=>!!i.air&&(Array.isArray(i.days)?i.days.includes(e):i.day===e),yc=i=>{if(i<1)return Math.max(0,fe.stops.findIndex(n=>!n.air));let e=fe.days[i-1];if(e&&e.hero!=null&&ut[e.hero])return e.hero;let t=e&&e.stops.find(n=>!fe.stops[n].air&&ut[n]);return t??yc(i-1)},[[xc,_c],[Mc,Ec]]=fe.routeBox,Lg=fe.land.filter(i=>i.some(([e,t])=>e>xc-2&&e<Mc+2&&t>_c-2&&t<Ec+2)),co=(i,e)=>Lg.some(t=>{let n=!1;for(let r=0,s=t.length-1;r<t.length;s=r++)t[r][1]>e!=t[s][1]>e&&i<(t[s][0]-t[r][0])*(e-t[r][1])/(t[s][1]-t[r][1])+t[r][0]&&(n=!n);return n}),jx=fe.land.map(i=>{let e=1e9,t=1e9,n=-1e9,r=-1e9;return i.forEach(([s,a])=>{e=Math.min(e,s),n=Math.max(n,s),t=Math.min(t,a),r=Math.max(r,a)}),[e,t,n,r]}),ui=(i,e)=>fe.land.some((t,n)=>{let r=jx[n];if(i<r[0]||i>r[2]||e<r[1]||e>r[3])return!1;let s=!1;for(let a=0,o=t.length-1;a<t.length;o=a++)t[a][1]>e!=t[o][1]>e&&i<(t[o][0]-t[a][0])*(e-t[a][1])/(t[o][1]-t[a][1])+t[a][0]&&(s=!s);return s}),qx=Lg.flat(),v0=(i,e)=>{let t=1e9;for(let n of qx){let r=(n[0]-i)**2+(n[1]-e)**2;r<t&&(t=r)}return Math.sqrt(t)},$r=(i,e)=>{let t=1e9;for(let n=1;n<ut.length;n++){let[r,s]=ut[n-1],[a,o]=ut[n],l=a-r,c=o-s,h=Math.max(0,Math.min(1,((i-r)*l+(e-s)*c)/(l*l+c*c||1)));t=Math.min(t,Math.hypot(r+l*h-i,s+c*h-e))}return t},Qa=(i,e)=>Math.min(...ut.map(t=>Math.hypot(t[0]-i,t[1]-e))),un=[];fe.stops.forEach(i=>{let e=(Kt.landmarks||{})[i.name];if(!e)return;let[t,n=0,r]=Array.isArray(e)?e:[e];if(t.startsWith("glb:"))un.push({x:i.xy[0],y:i.xy[1],r:.6*(r||2.6),flag:!0});else if(t==="torii-row")for(let s=0;s<11;s++){let a=s/10,o=Math.sin(a*Math.PI*1.6)*.32*1.9,l=a*1.5*1.9,c=Math.cos(n),h=Math.sin(n);un.push({x:i.xy[0]+o*c+l*h,y:i.xy[1]-(-o*h+l*c),r:.34,flag:!0})}else t!=="bridge"&&un.push({x:i.xy[0],y:i.xy[1],r:{pagoda:.5,taipei101:.38,dunes:.75,karst:1.4,terraces:1.3,volcano:1.3}[t]||.5,flag:t!=="dunes"})});var Qd=ve.home&&(ve.home.landmark||(Kt.landmarks||{})[ve.home.city]);ve.homeXY&&Qd&&un.push({x:ve.homeXY[0],y:ve.homeXY[1],r:.38,flag:!0});var Qr=(fe.worldLM||[]).map(i=>({...i,x:i.xy[0],y:i.xy[1]})),Dg=un.length;Qr.forEach(i=>{let e=Math.min(3,...Qr.filter(t=>t!==i).map(t=>Math.hypot(t.x-i.x,t.y-i.y)),...un.slice(0,Dg).map(t=>Math.hypot(t.x-i.x,t.y-i.y)-t.r));i.sc=Math.max(.5,Math.min(1.7,e*.85)),i.r=.5*i.sc});for(let i=0;i<40;i++)Qr.forEach(e=>{[...Qr,...un.slice(0,Dg)].forEach(s=>{if(s===e)return;let a=e.x-s.x,o=e.y-s.y,l=Math.hypot(a,o)||.001,c=e.r+s.r+.05;if(l<c){let h=(c-l)/(s.sc?2:1);e.x+=a/l*h,e.y+=o/l*h}});let t=e.x-e.xy[0],n=e.y-e.xy[1],r=Math.hypot(t,n);r>.3&&(e.x=e.xy[0]+t/r*.3,e.y=e.xy[1]+n/r*.3)});Qr.forEach(i=>un.push({x:i.x,y:i.y,r:i.r,flag:!0}));var Yx=[-.87,-.49],cc=([i,e])=>{for(let t=0;t<12;t++)un.forEach(n=>{if(!n.flag)return;let r=i-n.x,s=e-n.y,a=Math.hypot(r,s),o=n.r+.32;if(a<o){let[l,c]=a>.001?[r/a,s/a]:Yx;i=n.x+l*o,e=n.y+c*o}});return[i,e]},ea=fe.stops.map(i=>cc(i.xy)),Zs=ve.homeXY?[cc(ve.homeXY),cc(ve.airXY)]:[],js=(i,e)=>un.every(t=>Math.hypot(t.x-i,t.y-e)>t.r+.1)&&[...ea,...Zs].every(t=>Math.hypot(t[0]-i,t[1]-e)>.3),di=(()=>{let i=fe.stops.find(t=>vc(t,1))||fe.stops[0],e=ve.airXY||[i.xy[0]-60,i.xy[1]-60];return Yt(i.xy).sub(Yt(e)).setY(0).normalize()})(),eo=new T(-di.z,0,di.x),Zx=[...ea,...Zs].map(([i,e])=>({x:i,y:e,r:.45})).concat(un.map(i=>({x:i.x,y:i.y,r:i.r+.25}))),Ng=(i,e,t)=>{for(let n of[.5,-.5,.75,-.75,1,-1,1.3,-1.3,.3,-.3]){let r=!0;for(let s=e;s<=t&&r;s+=.2){let a=i.clone().addScaledVector(di,s).addScaledVector(eo,n),o=a.x,l=-a.z;r=ui(o,l)&&Zx.every(c=>Math.hypot(c.x-o,c.y-l)>c.r)}if(r)return i.clone().addScaledVector(eo,n)}return i.clone().addScaledVector(eo,.5)},y0=Ng(Yt(ve.airXY||[0,0]),-2.6,1.8),Ug=Ng(Yt((fe.stops.find(i=>vc(i,1))||fe.stops[0]).xy).addScaledVector(di,-.6),-1.8,1.2);[[y0,-2.9,1.9,.38],[Ug,-1.9,1.3,.34]].forEach(([i,e,t,n])=>{for(let r=e;r<=t;r+=.3){let s=i.clone().addScaledVector(di,r);un.push({x:s.x,y:-s.z,r:n,flag:!1,rw:!0})}});{let i=y0.clone().addScaledVector(di,1.45).addScaledVector(eo,-.5);un.push({x:i.x,y:-i.z,r:.75,flag:!1,rw:!0})}var ro=Math.min(...ut.map(i=>i[0]))-7,Tc=Math.max(...ut.map(i=>i[0]))+7,hc=Math.min(...ut.map(i=>i[1]))-4,x0=Math.max(...ut.map(i=>i[1]))+4;var Og=()=>!1,pi=fe.terrain,to=pi&&pi.lift||.1,so=(i,e)=>{if(!pi)return 0;let t=pi.grid,n=Math.round((i-t.x0)/t.dx),r=Math.round((e-t.y0)/t.dy);return n<0||r<0||n>=t.w||r>=t.h?0:t.data.charCodeAt(r*t.w+n)-48},Vi=(i,e)=>Bn+so(i,e)*to,ag=(i,e)=>{let t=so(i,e);return t?pi.levels[t-1]:0},Vs=[60,160,320,520,760,1050,1400,1800,2300,2900,3600,4500],_n=(i,e,t=.12)=>{let n=0;for(let[r,s]of[[0,0],[t,0],[-t,0],[0,t],[0,-t],[t,t],[-t,-t],[t,-t],[-t,t]])n=Math.max(n,so(i+r,e+s));return Bn+n*to};pi&&pi.sheets.forEach((i,e)=>{let t=i.polys.map(([c,...h])=>{let u=m0(c);return h.forEach(d=>u.holes.push(new Fr(d.map(p=>new le(p[0],p[1]))))),u});if(!t.length)return;let n=to*.18,r=new Lt(t,{depth:to-2*n,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:1});r.rotateX(-Math.PI/2),r.translate(0,Bn+e*to+n,0);let s=c=>{let h=c.terrain,u=Math.max(0,Vs.filter(p=>p<=i.h).length-1),d=i.h<Vs[0]?0:Math.min(1,(i.h-Vs[u])/((Vs[u+1]||Vs[u]+1)-Vs[u]));return new me(h[Math.min(u,h.length-1)]).lerp(new me(h[Math.min(u+1,h.length-1)]),d)},a="#"+s(De).getHexString(),o="#"+new me(a).multiplyScalar(.62).getHexString();io&&Rg(r,s);let l=new te(r,io?[ot("#ffffff",hn(.6,21+e),{vertexColors:!0}),ot("#9e9e9e",null,{vertexColors:!0})]:[ot(a,hn(.6,21+e)),ot(o)]);l.castShadow=l.receiveShadow=!0,et.add(l)});function bc(i,e,t,n){let r=new bn(i,e,t.length),s=new ht,a=new me;return t.forEach((o,l)=>{n(s,a,o,l),s.updateMatrix(),r.setMatrixAt(l,s.matrix),r.setColorAt(l,a)}),r.castShadow=r.receiveShadow=!0,et.add(r),r}var Kx=i=>{let e=new Lt(i.map(t=>new ke(t.map(([n,r])=>new le(n,r)))),{depth:.04,bevelEnabled:!1});return e.translate(0,0,-.02),e},rc={coast:De.trees.coast||["pine"],inland:De.trees.inland||["maple"]},Jx=i=>(De.trees.colorsBy||{})[i]||i==="maple"&&De.trees.colors||i==="pine"&&De.trees.pine||fm[i],e0=[],Hg=[];{let i=[],e=pi&&pi.grid,t=1,n=(h,u,d=0)=>fe.cities.some(p=>Math.hypot(p.xy[0]-h,p.xy[1]-u)<(Yl.has(p.name)?1:.55)+d);fe.stops.forEach(h=>{if(h.air)return;let u=0;for(let d=0;d<80&&u<De.trees.perStop;d++){let p=rt()*6.28,f=.55+rt()*1.6,g=h.xy[0]+Math.cos(p)*f,m=h.xy[1]+Math.sin(p)*f;co(g,m)&&$r(g,m)>.26&&Qa(g,m)>.5&&js(g,m)&&(i.push([g,m]),u++)}});let r=[[xc-3,_c-3,Mc+3,Ec+3],...ve.homeXY?[[ve.homeXY[0]-3,ve.homeXY[1]-4.2,ve.homeXY[0]+2.2,ve.homeXY[1]+.6]]:[]],s=Math.round((De.trees.clusters??230)*t),a=r.length>1?Math.round(30*t):0;for(let h=0,u=0;e&&h<s*40&&u<s;h++){let d=r[u<a?1:0],p=d[0]+rt()*(d[2]-d[0]),f=d[1]+rt()*(d[3]-d[1]);if(ag(p,f)<60||!ui(p,f)||n(p,f,.4))continue;u++;let g=.22+rt()*.6,m=18+(rt()*46|0);for(let y=0;y<m;y++){let v=rt()*6.28,x=g*Math.sqrt(rt()),_=p+Math.cos(v)*x*1.4,M=f+Math.sin(v)*x;ui(_,M)&&$r(_,M)>.3&&Qa(_,M)>.6&&js(_,M)&&!n(_,M)&&i.push([_,M])}}for(let h=0,u=0;h<6e3&&u<320*t;h++){let d=r[h%6?0:r.length-1],p=d[0]+rt()*(d[2]-d[0]),f=d[1]+rt()*(d[3]-d[1]);ui(p,f)&&$r(p,f)>.3&&Qa(p,f)>.7&&js(p,f)&&(i.push([p,f]),u++)}let o=rc.inland.includes("cedar")?["cedar","pine"]:rc.coast,l=(h,u)=>{let d=null,p=1e9;return fe.cities.forEach(f=>{let g=Math.hypot(f.xy[0]-h,f.xy[1]-u);g<p&&(p=g,d=f.country)}),d},c=i.map(([h,u])=>{let d=(za[l(h,u)]||{}).trees,p=ag(h,u)>=760,f=d?p?d.high:d.low:p?o:v0(h,u)<.7?rc.coast:rc.inland;return f[rt()*f.length|0]});[...new Set(c)].forEach(h=>{let u=Jx(h),d=Kx(nd[h]||nd.maple),p=i.filter((f,g)=>c[g]===h).flatMap((f,g)=>{let m=.12+rt()*.1,y=rt()*Math.PI,v=u[(g*7+(rt()*3|0))%u.length];return[[...f,m,y,v],[...f,m,y+Math.PI/2,v]]});bc(d,ot("#fff",hn(2,31)),p,(f,g,[m,y,v,x,_])=>{f.position.set(m,Vi(m,y)+.04,-y),f.scale.setScalar(v),f.rotation.y=x,g.set(_)})}),console.info("[\u68EE\u6797]",i.length,"\u68F5"),e0.push(...i)}{let i=De.houses||["machiya"],e=[],t=new Set(fe.days.map(r=>yc(r.n)));fe.stops.forEach((r,s)=>{if(r.air)return;let a=0,o=(De.village??12)+(t.has(s)?6:0);for(let l=0;l<240&&a<o;l++){let c=rt()*6.28,h=.6+rt()*(1.1+l/80),u=r.xy[0]+Math.cos(c)*h,d=r.xy[1]+Math.sin(c)*h;if(!co(u,d)||$r(u,d)<.18||Qa(u,d)<.5||Og(u,d)||v0(u,d)<.05||!js(u,d))continue;let p=Xl[i[rt()*i.length|0]](ot,rt,{snow:Ag(d)});p.position.set(u,Vi(u,d),-d),p.rotation.y=Math.atan2(r.xy[0]-u,r.xy[1]-d)+(rt()-.5)*.6,p.scale.setScalar(.21+rt()*.06),e.push(p),Hg.push([u,d]),a++}});let n=Ld(e);n&&et.add(n)}var Ks=Tm({scene:et,J:fe,T:De,mat:ot,snowAt:(i,e)=>Ag(e),groundY:Vi,onLand:ui,R:rt,H:Bn,focus:[...ut,...ve.homeXY?[ve.homeXY,ve.airXY]:[]],avoid:(i,e)=>Qa(i,e)<.55||!js(i,e)});console.info("[\u4E16\u754C]",Ks.stats);{let i=(()=>{let n=new ke([[-.5,.12],[.5,.12],[.32,-.1],[-.32,-.1]].map(([o,l])=>new le(o,l))),r=new Lt(n,{depth:.22,bevelEnabled:!1});r.translate(0,.1,-.11);let s=new Be().setFromPoints([new T(-.05,.22,0),new T(.3,.22,0),new T(-.05,.75,0)]);s.computeVertexNormals();let a=r.index?r.toNonIndexed():r;return a.deleteAttribute("uv"),a.clearGroups(),xi([a,s])})(),e=[];for(let n=0;n<4e3&&e.length<(De.boats??10);n++){let r=ro+rt()*(Tc-ro),s=hc+rt()*(x0-hc),a=v0(r,s);a>.35&&a<1.4&&!co(r,s)&&$r(r,s)>.6&&!Og(r,s)&&e.push([r,s])}let t=new vn({color:"#fff",roughness:.95,side:st});bc(i,t,e,(n,r,[s,a])=>{n.position.set(s,.06,-a),n.scale.setScalar(.22),n.rotation.y=rt()*6.28,r.set(De.flagPaper)})}var t0=[];{let i=s=>{let a=p0(900+s),o=[[0,0,.85],...Array.from({length:5},(h,u)=>[(u-2)*.48+(a()-.5)*.2,(a()-.3)*.5,.45+a()*.35])],l=Array.from({length:72},(h,u)=>{let d=u/72*Math.PI*2,p=Math.cos(d),f=Math.sin(d),g=.3;for(let[m,y,v]of o){let x=p*m+f*y,_=x*x-(m*m+y*y-v*v);_>=0&&(g=Math.max(g,x+Math.sqrt(_)))}return new le(p*g*1.5,f*g*.8)}),c=new Lt(new ke(l),{depth:.1,bevelEnabled:!0,bevelThickness:.07,bevelSize:.09,bevelSegments:4});return c.rotateX(-Math.PI/2),c},e=ot("#fbf8f2",hn(.4,61)),t=ve.homeXY,n=[ro,Tc].concat(t?[t[0]]:[]),r=[hc,x0].concat(t?[t[1]]:[]);for(let s=0,a=0;t0.length<22&&a<400;a++){let o=Math.min(...n)+rt()*(Math.max(...n)-Math.min(...n)),l=Math.min(...r)+rt()*(Math.max(...r)-Math.min(...r));if($r(o,l)<3)continue;let c=new te(i(s++),e),h=.9+rt()*1.4;c.scale.set(h,1,h),c.position.set(o,6+rt()*4,-l),c.castShadow=!1,c.userData.v=.08+rt()*.12,et.add(c),t0.push(c)}}var $x=160,dT=Array.from({length:$x},()=>[rt()*10-5,rt()*4.5,rt()*10-5,rt()*6.28,.18+rt()*.2]),n0=kd(zi,ot,{paper:hn(1,51)});et.add(n0);var Wd=0;function Qx(i,e,t,n){let r=document.createElement("canvas"),s=r.getContext("2d");s.font=n;let a=Math.ceil(s.measureText(i).width)+40;r.width=a,r.height=160,s.font=n,s.fillStyle=t,s.textBaseline="middle",s.fillText(i,20,80);let o=new dr(r);return o.colorSpace=wt,o.anisotropy=Mn.capabilities.getMaxAnisotropy(),new te(new gn(e*a/160,e),new Qt({map:o,transparent:!0,depthWrite:!1}))}(fe.seas||[]).forEach(i=>{let e=Qx(i.name,1.5,"rgba(225,232,236,.55)",`500 96px ${De.css["--serif"]}`);e.rotation.x=-Math.PI/2,e.position.set(i.xy[0],.08,-i.xy[1]),et.add(e)});var ao=[],Fg=[0];for(let i=1;i<ut.length;i++){let[e,t]=[ut[i-1],ut[i]],n=Math.max(1,Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/.3));for(let r=i===1?0:1;r<=n;r++)ao.push([e[0]+(t[0]-e[0])*r/n,e[1]+(t[1]-e[1])*r/n]);Fg.push(ao.length-1)}var Er=new Yn(ao.map(([i,e])=>Yt([i,e],_n(i,e,.16)+.09)),!1,"centripetal"),Bg=1200,kg=6,_0=new te(new Vr(Er,Bg,.034,kg,!1),ot(De.route,null,{emissive:De.route,emissiveIntensity:.18}));_0.castShadow=!0;et.add(_0);var zg=ao.length*24,i0=Er.getLengths(zg),qs=i0[i0.length-1],r0=i=>i0[Math.round(Fg[i]/(ao.length-1)*zg)]/qs,M0=[];for(let i=qs-.15;i>0;i-=.3)M0.push(i/qs);var Vg=bc(new Ds(.022,.12,2,6),ot(De.stitch),M0,(i,e,t)=>{let n=Er.getPointAt(t),r=Er.getTangentAt(t);i.position.copy(n),i.quaternion.setFromUnitVectors(new T(0,1,0),r),e.set(De.stitch)});Vg.castShadow=!1;var s0=new te(new en(.1,18,12),ot("#fffaf0",null,{emissive:"#ffe2b0",emissiveIntensity:.7}));et.add(s0);function e_(i){i=Math.max(0,Math.min(1,i)),_0.geometry.setDrawRange(0,Math.floor(i*Bg)*kg*6),Vg.count=M0.filter(e=>e>i).length,s0.position.copy(Er.getPointAt(i)),s0.visible=i>.002&&i<.998}var Gg=Kt.landmarks||{},t_=new Set,n_={pagoda:1.2,taipei101:1.3,karst:1,terraces:1,volcano:1,dunes:1},no=new jl,lc=0;{let i=no.parse.bind(no);no.parse=(e,t,n,r)=>{lc++,i(e,t,s=>{lc--,n(s)},s=>{lc--,r&&r(s)})}}function Wg(i,e,t){let n=t||Gg[i];if(!n)return null;let[r,s=0,a]=Array.isArray(n)?n:[n],o=(h,u)=>(h.position.set(e[0],u,-e[1]),h.rotation.y=s,et.add(h),h);if(r.startsWith("glb:")){let h=(fe.models||{})[r.slice(4)];if(!h)return null;let u=Uint8Array.from(atob(h),p=>p.charCodeAt(0)).buffer,d=new de;return d.scale.setScalar(a||2.6),no.parse(u,"",p=>{p.scene.traverse(f=>{f.isMesh&&(f.geometry.attributes.normal||f.geometry.computeVertexNormals(),f.castShadow=f.receiveShadow=!0,f.material.roughness=.95,f.material.metalness=0)}),d.add(p.scene)}),o(d,_n(e[0],e[1],.9))}let l=Gl[r];if(!l)return null;let c=l(ot);return c.scale.setScalar(a||n_[r]||1.9),o(c,r==="bridge"?.04:_n(e[0],e[1],.3))}fe.stops.forEach((i,e)=>{Wg(i.name,i.xy)&&t_.add(e)});ve.homeXY&&Qd&&Wg(ve.home.city,ve.homeXY,Qd);Qr.forEach(i=>{if(i.brick&&Gl[i.brick]){let n=Gl[i.brick](ot);n.scale.setScalar(i.sc*1.3),n.position.set(i.x,_n(i.x,i.y,i.r),-i.y),n.rotation.y=.5,et.add(n);return}let e=(fe.models||{})[i.slug];if(!e)return;let t=new de;t.scale.setScalar(i.sc),t.position.set(i.x,_n(i.x,i.y,i.r),-i.y),et.add(t),no.parse(Uint8Array.from(atob(e),n=>n.charCodeAt(0)).buffer,"",n=>{n.scene.traverse(r=>{r.isMesh&&(r.geometry.attributes.normal||r.geometry.computeVertexNormals(),r.castShadow=r.receiveShadow=!0,r.material.roughness=.95,r.material.metalness=0)}),t.add(n.scene)})});function uc(i,e){let t=i.name.replace(/\s+[A-Z]{3}$/,""),n=`600 64px ${De.css["--serif"]}`,r=document.createElement("canvas"),s=r.getContext("2d");s.font=n;let a=Math.ceil(s.measureText(t).width)+70;r.width=a,r.height=112,s.fillStyle=De.flagPaper,s.fillRect(0,0,a,112),s.fillStyle=i.air?De.air:De.bead,s.fillRect(0,0,12,112),s.font=n,s.fillStyle="#2a2420",s.textBaseline="middle",s.fillText(t,36,60);let o=new dr(r);o.colorSpace=wt,o.anisotropy=Mn.capabilities.getMaxAnisotropy();let l=.3,c=l*a/112,h=new de,u=Yt(e,_n(...e,.1)),d=new te(new Me(.018,.018,1.05,6),ot("#2a2420"));d.position.y=.52;let p=new te(new en(.06,12,8),ot(i.air?De.air:De.bead,null,{metalness:.3,roughness:.5}));p.position.y=1.07;let f=new te(new gn(c,l),new Qt({map:o,side:st}));return f.position.set(c/2+.02,.86,0),d.castShadow=p.castShadow=f.castShadow=!0,h.add(d,p,f),h.position.copy(u),h.scale.setScalar(1e-4),et.add(h),{grp:h,s:i,k:0}}var E0=fe.stops.map((i,e)=>Object.assign(uc(i,ea[e]),{i:e})),og=ve.home&&ve.homeXY&&ve.airXY&&ve.home.lng!==ve.home.alng&&ve.home.lat!==ve.home.alat?((i,e,t)=>{let n=(e[0]-t[0])/(i.lng-i.alng),r=(e[1]-t[1])/(i.lat-i.alat);return(s,a)=>[e[0]+(s-i.lng)*n,e[1]+(a-i.lat)*r]})(ve.home,ve.homeXY,ve.airXY):null,dc=(ve.offices||[]).map(i=>({...i,xy:i.xy||(og&&i.lng!=null?og(i.lng,i.lat):null)})).filter(i=>i.xy),i_=dc.map(i=>{let e=cc(i.xy);E0.push(Object.assign(uc({name:i.name,xy:i.xy,day:0},e),{office:!0}));let t=new te(new Ii(.2,.3,48).rotateX(-Math.PI/2),ot(De.route,null,{emissive:De.route,emissiveIntensity:.8,side:st,transparent:!0}));return t.position.copy(Yt(e,_n(...e,.3)+.02)),t.scale.setScalar(1e-4),et.add(t),t}),Gs=0;ve.homeXY&&E0.push(...dc.length?[]:[uc({name:ve.home.city,xy:ve.homeXY,day:0},Zs[0])],uc({name:ve.home.airport,xy:ve.airXY,day:.5,air:!0},Zs[1]));var pT=document.getElementById("gallery");var xn=Cm(ot,{paper:hn(1,51),color:"#fbf7ef",accent:De.air||De.stitch});xn.traverse(i=>{i.isMesh&&(i.castShadow=!0)});xn.visible=!1;et.add(xn);var pc=i=>fe.stops.findIndex(e=>vc(e,i)),T0=Yt(ut[pc(1)>=0?pc(1):0]),Xg=Yt(ut[pc(fe.days.length)>=0?pc(fe.days.length):ut.length-1]),Mi=ve.airXY?Yt(ve.airXY):T0.clone().add(new T(-60,0,60)),Hi=ve.homeXY?Yt(ve.homeXY):Mi.clone(),r_=(i,e)=>{let t=e.clone().sub(i).setY(0),n=t.length(),r=Math.min(1,n/12);t.normalize();let s=(l,c)=>i.clone().addScaledVector(t,l).setY(c),a=Vi(i.x,-i.z),o=Vi(e.x,-e.z);return new Yn([s(0,a+.3),s(.5*r,a+1.1),s(1.6*r,2.8),s(4*r,4.6),s(n/2,5.5),s(n-4*r,4.6),s(n-1.6*r,2.8),s(n-.5*r,o+1.1),s(n,o+.3)],!1,"centripetal")},jg=(i,e,t,n=.1)=>{let r=0;for(let s=e;s<=t;s+=.1){let a=i.clone().addScaledVector(di,s);r=Math.max(r,_n(a.x,-a.z,n))}return r},Sc=y0.setY(Mi.y),b0=Ug.setY(T0.y),S0=jg(Sc,-2.8,1.4,.16),qg=jg(b0,-.4,1.2,.16);{let e=Sc.clone().addScaledVector(di,-.7).setY(S0+.006),t=Math.atan2(di.x,di.z),n=new de,r=new te(new Et(.34,.012,4.4),ot("#9d968a",hn(.5,63)));r.receiveShadow=!0,n.add(r);let s=ot("#f6f1e6");for(let a=-4.4/2+.35;a<4.4/2-.3;a+=.3){let o=new te(new Et(.022,.014,.15),s);o.position.set(0,.002,a),n.add(o)}for(let a of[-4.4/2+.1,4.4/2-.1])for(let o=-2;o<=2;o++){if(!o)continue;let l=new te(new Et(.025,.014,.12),s);l.position.set(o*.05,.002,a),n.add(l)}n.position.copy(e),n.rotation.y=t,et.add(n)}var s_=(i,e,t,n)=>{let r=e.clone().sub(i).setY(0),s=r.length();r.normalize();let a=(o,l)=>i.clone().addScaledVector(r,o).setY(l);return new Yn([a(-2.3,t),a(-1.3,t),a(-.3,t+.01),a(.5,t+.16),a(1.3,t+.5),a(2.3,t+1.05),a(3.8,2.4),a(6.5,4.3),a(10,5.3),a(s/2,5.5),a(s-10,5.3),a(s-6,4.2),a(s-3.4,2.6),a(s-1.7,n+.75),a(s-.7,n+.2),a(s,n),a(s+.6,n),a(s+1,n)],!1,"centripetal")},Vt=s_(Sc,b0,S0+.17,qg+.17),w0=r_(Xg,Mi);Vt.arcLengthDivisions=4e3;var Yg=(i,e)=>e.clone().sub(i).setY(0).normalize().multiplyScalar(-10).add(new T(0,5.5,0)),oo=Yg(Mi,T0),lg=Yg(Xg,Mi),cg=[Vt,w0].map(i=>{let e=Math.floor(i.getLength()/.9),t=Array.from({length:e},(r,s)=>(s+.5)/e).filter(r=>{let s=i.getPointAt(r);return s.y>Vi(s.x,-s.z)+.45}),n=bc(new Ds(.03,.3,2,6),ot(De.stitch),t,(r,s,a)=>{r.position.copy(i.getPointAt(a)),r.quaternion.setFromUnitVectors(new T(0,1,0),i.getTangentAt(a)),s.set(De.stitch)});return n.castShadow=!1,n});function Xs(i,e,t=1){if(!i||t<.002){xn.visible=!1;return}e=Math.min(.9995,Math.max(5e-4,e)),xn.visible=!0,xn.position.copy(i.getPointAt(e)),xn.lookAt(i.getPointAt(Math.min(1,e+.004)));let n=Math.min(1,Math.max(0,(xn.position.y-Vi(xn.position.x,-xn.position.z)-.3)/1.2));xn.rotateZ(Math.sin(e*Math.PI*5)*.14*n),xn.scale.setScalar(t)}var Ot=(()=>{let i=Vt.getLength(),e=Sc.clone().addScaledVector(di,1.45).addScaledVector(eo,-.5).setY(S0+.5),t=6e3,n=0,r=1e9,s=0,a=i;for(let f=0;f<=t*.06;f++){let g=Vt.getPointAt(f/t),m=Math.hypot(g.x-e.x,g.z-e.z);m<r&&(r=m,n=f/t*i)}for(let f=0;f<=t*.06;f++){let g=f/t*i;if(g>n)break;if(Vt.getPointAt(f/t).distanceTo(e)<1.25){s=g;break}}r=1e9;for(let f=Math.floor(t*.94);f<=t;f++){let g=Vt.getPointAt(f/t).distanceTo(b0.clone().setY(qg+.17));g<r&&(r=g,a=f/t*i)}let o=2.4,l=3,c=7.4,h=2*n/l,u=2*((a-n)/c-h),d=2*(i-a)/h,p=f=>f<o?0:f<o+l?n*((f-o)/l)**2:f<o+l+c?(()=>{let g=(f-o-l)/c;return n+c*(h*g+u*(g/2-Math.sin(2*Math.PI*g)/(4*Math.PI)))})():(()=>{let g=Math.min(1,(f-o-l-c)/d);return a+(i-a)*(2*g-g*g)})();return{L:i,CR:e,sp:n,sf:s,TA:o,TB:l,TR:c,TE:d,dur:o+l+c+d,s:p}})(),fc=i=>Math.atan2(i.x,i.z),Xd=i=>Math.asin(Math.max(-1,Math.min(1,i.y/(i.length()||1)))),A0=i=>i-Math.round(i/(2*Math.PI))*2*Math.PI,a_=(i,e)=>new T(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)),o_=Vt.getPointAt(0).sub(Ot.CR).normalize(),Ka=Vt.getPointAt(Ot.sf/Ot.L).sub(Ot.CR).normalize(),hg=Math.sign(A0(fc(Vt.getPointAt(Ot.sp/Ot.L).sub(Ot.CR))-fc(Ka)))||1,jd=new T,l_=new T;function c_(i){we.fd=9*Bi(i/Ot.TA);let e=Ot.s(i),t=e/Ot.L,n=l_.copy(Vt.getPointAt(Math.min(1,t))),{CR:r,TA:s,TB:a}=Ot,o=s+a;if(i<s)Qs(_t.from,{p:r,t:r.clone().addScaledVector(o_,Math.max(3.5,Vt.getPointAt(0).distanceTo(r)))},ki(i/s));else if(i<o+.06){let l=e<Ot.sf?jd.subVectors(n,r).normalize():jd.copy(Ka);if(we.p.copy(r),we.t.copy(r).addScaledVector(l,Math.max(3.5,n.distanceTo(r))),!Ys&&e>Ot.sf){let c=.012*Math.max(0,1-n.distanceTo(r)/1.6);we.p.x+=Math.sin(i*93)*c,we.p.y+=Math.sin(i*71+1)*c}}else{let l=.28+.72*Bi((i-o)/3),c=n.clone().addScaledVector(oo,l),h=ki(Math.min(1,(i-o-.06)/1.15));we.p.lerpVectors(r,c,h);let u=jd.subVectors(n,we.p),d=fc(Ka),p=A0(fc(u)-d-hg*Math.PI)+hg*Math.PI,f=a_(d+p*h,Xd(Ka)+(Xd(u)-Xd(Ka))*h);we.t.copy(we.p).addScaledVector(f,Math.max(3.5,u.length()))}if(Xs(Vt,t),t>.42&&t<.6){let l=Vt.getTangentAt(t).setY(0).normalize(),c=n.clone().addScaledVector(l,7).setY(0);co(c.x,-c.z)||Ks.dolphinJump(Vt,c,l)}}var Bi=i=>i<=0?0:i>=1?1:i*i*(3-2*i),h_=.34,R0=Am(ot,{color:De.route,paper:hn(1,61)}),es={bus:R0},Zg={bus:1},Kg=new Set,Jg=new Set,$g=i=>(i.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),i.visible=!1,et.add(i),i);$g(R0);var Fi=[],Yr=[],ug=new Map;{let i=[xc-3,_c-3,Mc+3,Ec+3],e=[],t=([n,r])=>{let s=Math.round(n*50)+","+Math.round(r*50),a=ug.get(s);return a===void 0&&(a=Fi.length,ug.set(s,a),Fi.push([n,r]),Yr.push([])),a};fe.roads.forEach(n=>{if(n.t==="F"||!n.pts.some(([o,l])=>o>i[0]&&o<i[2]&&l>i[1]&&l<i[3]))return;let r=n.pts.filter(([o,l])=>ui(o,l));if(r.length<2)return;let s=n.t==="H"?.85:1,a=t(r[0]);e.push(a);for(let o=1;o<r.length;o++){let l=t(r[o]);if(l===a)continue;let c=Math.hypot(r[o][0]-r[o-1][0],r[o][1]-r[o-1][1])*s;Yr[a].push([l,c]),Yr[l].push([a,c]),a=l}e.push(a)}),e.forEach(n=>{let r=-1,s=.3;Fi.forEach((a,o)=>{if(o===n||Yr[n].some(([c])=>c===o))return;let l=Math.hypot(a[0]-Fi[n][0],a[1]-Fi[n][1]);l<s&&(s=l,r=o)}),r>=0&&(Yr[n].push([r,s*2]),Yr[r].push([n,s*2]))})}function u_(i,e){let t=Fi.length,n=new Float64Array(t).fill(1/0),r=new Int32Array(t).fill(-1),s=[[0,i]];n[i]=0;let a=c=>{for(;c>0;){let h=c-1>>1;if(s[h][0]<=s[c][0])break;[s[h],s[c]]=[s[c],s[h]],c=h}},o=()=>{let c=s[0],h=s.pop();if(s.length){s[0]=h;let u=0;for(;;){let d=2*u+1,p=d+1,f=u;if(d<s.length&&s[d][0]<s[f][0]&&(f=d),p<s.length&&s[p][0]<s[f][0]&&(f=p),f===u)break;[s[f],s[u]]=[s[u],s[f]],u=f}}return c};for(;s.length;){let[c,h]=o();if(!(c>n[h])){if(h===e)break;for(let[u,d]of Yr[h])c+d<n[u]&&(n[u]=c+d,r[u]=h,s.push([n[u],u]),a(s.length-1))}}if(!isFinite(n[e]))return null;let l=[];for(let c=e;c>=0;c=r[c])l.push(Fi[c]);return l.reverse()}var a0=(i,e=()=>!0)=>{let t=-1,n=1e9;return Fi.forEach((r,s)=>{let a=Math.hypot(r[0]-i[0],r[1]-i[1]);a<n&&e(r)&&(n=a,t=s)}),[t,n]},C0=[...un.filter(i=>!i.rw).map(i=>({x:i.x,y:i.y,r:i.r+.12})),...[...ea,...Zs].map(([i,e])=>({x:i,y:e,r:.12}))],mc=([i,e])=>C0.every(t=>Math.hypot(t.x-i,t.y-e)>t.r),o0=fe.stops.map((i,e)=>{let t=ea[e],[n,r]=a0(t,mc);if(n>=0&&r<.8)return Fi[n].slice();for(let s=.25;s<1.6;s+=.15)for(let a=0;a<16;a++){let o=[t[0]+Math.cos(a/16*6.283)*s,t[1]+Math.sin(a/16*6.283)*s];if(ui(...o)&&mc(o))return o}return t.slice()}),l0=(i,e)=>{for(let t=0;t<e;t++){let n=[i[0]];for(let r=0;r<i.length-1;r++){let[s,a]=[i[r],i[r+1]];n.push([s[0]*.75+a[0]*.25,s[1]*.75+a[1]*.25],[s[0]*.25+a[0]*.75,s[1]*.25+a[1]*.75])}n.push(i[i.length-1]),i=n}return i},c0=(i,e)=>{let t=[i[0]];for(let n=1;n<i.length;n++){let[r,s]=[i[n-1],i[n]],a=Math.max(1,Math.ceil(Math.hypot(s[0]-r[0],s[1]-r[1])/e));for(let o=1;o<=a;o++)t.push([r[0]+(s[0]-r[0])*o/a,r[1]+(s[1]-r[1])*o/a])}return t},d_=i=>i.filter((e,t)=>!t||Math.hypot(e[0]-i[t-1][0],e[1]-i[t-1][1])>.02);function P0(i){i=c0(l0(d_(i),2),.08);for(let n=0;n<3;n++)i=i.map((r,s)=>{if(!s||s===i.length-1)return r;let[a,o]=r;return C0.forEach(l=>{let c=a-l.x,h=o-l.y,u=Math.hypot(c,h)||.001;u<l.r&&(a=l.x+c/u*l.r,o=l.y+h/u*l.r)}),[a,o]});i=c0(l0(i,1),.06);let e=i.map(([n,r])=>_n(n,r,.07)+.012);for(let n=1;n<e.length;n++)e[n]=Math.max(e[n],e[n-1]-.012);for(let n=e.length-2;n>=0;n--)e[n]=Math.max(e[n],e[n+1]-.012);let t=new Yn(i.map(([n,r],s)=>new T(n,e[s],-r)),!1,"centripetal");return t.arcLengthDivisions=i.length*4,t}function p_(i,e){let[t,n]=a0(i),[r,s]=a0(e),a=n<1.6&&s<1.6?u_(t,r):null,o=Math.hypot(e[0]-i[0],e[1]-i[1]);if(!a)return[i,e];let l=[i,...a,e];return l.reduce((h,u,d)=>d?h+Math.hypot(u[0]-l[d-1][0],u[1]-l[d-1][1]):0,0)>o*3.5+2?[i,e]:l}var f_=.068;function m_(i,e){let n=Math.min(i[0],e[0])-1.6,r=Math.min(i[1],e[1])-1.6,s=Math.ceil((Math.abs(i[0]-e[0])+3.2)/.08),a=Math.ceil((Math.abs(i[1]-e[1])+3.2)/.08),o=x=>[n+x%s*.08,r+Math.floor(x/s)*.08],l=(x,_,M)=>ui(x,_)||[[M,0],[-M,0],[0,M],[0,-M]].some(([E,b])=>ui(x+E,_+b)),c=new Uint8Array(s*a);for(let x=0;x<c.length;x++){let[_,M]=o(x);c[x]=l(_,M,.09)?0:l(_,M,.22)?2:1}let h=(x,_)=>{let[M,E]=o(_);return Math.hypot(M-x[0],E-x[1])>1.6?1e9:Math.hypot(M-x[0],E-x[1]+.8)+(mc([M,E])?0:C0.every(b=>Math.hypot(b.x-M,b.y-E)>b.r*.8)?.15:9)},u=-1;for(let x=0,_=1e8;x<c.length;x++)if(c[x]){let M=h(e,x);M<_&&(_=M,u=x)}if(u<0)return null;let d=new Float64Array(c.length).fill(1/0),p=new Int32Array(c.length).fill(-1),f=[u];for(d[u]=0;f.length;){let x=0;for(let b=1;b<f.length;b++)d[f[b]]<d[f[x]]&&(x=b);let _=f.splice(x,1)[0],M=_%s,E=Math.floor(_/s);for(let b=-1;b<=1;b++)for(let S=-1;S<=1;S++){if(!S&&!b)continue;let w=M+S,P=E+b;if(w<0||P<0||w>=s||P>=a)continue;let D=P*s+w;if(!c[D])continue;let N=Math.hypot(S,b)*(c[D]===2?2.5:1);d[_]+N<d[D]&&(d[D]===1/0&&f.push(D),d[D]=d[_]+N,p[D]=_)}}let g=-1;for(let x=0,_=1e8;x<c.length;x++)if(isFinite(d[x])){let M=h(i,x);M<_&&(_=M,g=x)}if(g<0)return null;let m=[];for(let x=g;x>=0;x=p[x])m.push(o(x));let y=c0(l0(m.filter((x,_)=>_%2===0||_===m.length-1),3),.08),v=new Yn(y.map(([x,_])=>new T(x,f_,-_)),!1,"centripetal");return v.arcLengthDivisions=y.length*4,v}var g_=/遊船|渡船|乘船|搭船|坐船|觀光船|遊覽船|遊覧船|屋形船|クルーズ|川下り|舟下り|cruise/i,Qg=[{key:"shinkansen",rx:/新幹線|shinkansen/i,make:Im,path:"rail",sc:1,opts:{cars:2}},{key:"crh",rx:/高鐵|CRH|和諧號|復興號/,make:Vm,path:"rail",sc:1,opts:{cars:2}},{key:"alpine",rx:/冰河列車|glacier express/i,make:Hm,path:"rail",sc:1,opts:{cars:2}},{key:"ltdexp",rx:/特急|ＪＲ|(^|[^A-Za-z])JR([^A-Za-z]|$)/,make:Lm,path:"rail",sc:1,opts:{cars:2}},{key:"ropeway",rx:/纜車|ロープウェ[イー]|ropeway|cable ?car/i,make:Dm,path:"cable",sc:1,opts:{span:0}},{key:"rivercruise",rx:/(長江|漓江|三峽).{0,8}(遊船|遊輪|郵輪)|(遊船|遊輪|郵輪).{0,8}(長江|漓江|三峽)/,make:Wm,path:"water",sc:1.4},{key:"junk",rx:/下龍灣|ha ?long bay/i,make:Bm,path:"water",sc:1.4},{key:"wupeng",rx:/烏篷船/,make:Gm,path:"water",sc:1.4},{key:"bamboo",rx:/竹筏/,make:Xm,path:"water",sc:1.4},{key:"gondola",rx:/貢多拉|gondola/i,make:Om,path:"water",sc:1.4},{key:"longtail",rx:/長尾船|long-?tail/i,make:km,path:"water",sc:1.4},{key:"ferry",rx:/渡輪|フェリー|ferry/i,make:Nm,path:"water",sc:1.4},{key:"tuktuk",rx:/嘟嘟車|tuk-? ?tuk/i,make:Fm,path:"tail",sc:.8,last:!0},{key:"cyclo",rx:/三輪車|cyclo/i,make:zm,path:"tail",sc:.8,last:!0},{key:"rickshaw",rx:/人力車|人力车|jinrikisha|rickshaw/i,make:Um,path:"tail",sc:.8,last:!0},{key:"boat",rx:g_,make:Rm,path:"water",sc:1.4,last:!0}],e1=fe.stops.map((i,e)=>{let t=fe.days.find(s=>(s.stops||[]).includes(e));if(!t||i.air||!e)return null;let n=[...t.spots||[],t.desc||""],r=s=>fe.stops[s].name.replace(/\s+[A-Z]{3}$/,"");for(let s of Qg){let a=n.filter(l=>s.rx.test(l));if(!a.length)continue;let o=t.stops.filter(l=>a.some(c=>c.includes(r(l))));if(o.length?o.includes(e):s.last&&e===Math.max(...t.stops))return s}return null}),sc=(()=>{let i=[xc-3,_c-3,Mc+3,Ec+3],e=[],t=[],n=new Map,r=[],s=([l,c])=>{let h=Math.round(l*50)+","+Math.round(c*50),u=n.get(h);return u===void 0&&(u=e.length,n.set(h,u),e.push([l,c]),t.push([])),u};return(fe.rail||[]).forEach(l=>{if(l.t==="F"||!l.pts.some(([u,d])=>u>i[0]&&u<i[2]&&d>i[1]&&d<i[3]))return;let c=l.pts.filter(([u,d])=>ui(u,d));if(c.length<2)return;let h=s(c[0]);r.push(h);for(let u=1;u<c.length;u++){let d=s(c[u]);if(d===h)continue;let p=Math.hypot(c[u][0]-c[u-1][0],c[u][1]-c[u-1][1]);t[h].push([d,p]),t[d].push([h,p]),h=d}r.push(h)}),r.forEach(l=>{let c=-1,h=.3;e.forEach((u,d)=>{if(d===l)return;let p=Math.hypot(u[0]-e[l][0],u[1]-e[l][1]);p<h&&(h=p,c=d)}),c>=0&&(t[l].push([c,h*2]),t[c].push([l,h*2]))}),{near:l=>{let c=-1,h=1e9;return e.forEach((u,d)=>{let p=Math.hypot(u[0]-l[0],u[1]-l[1]);p<h&&(h=p,c=d)}),[c,h]},path:(l,c)=>{let h=new Float64Array(e.length).fill(1/0),u=new Int32Array(e.length).fill(-1),d=new Uint8Array(e.length);for(h[l]=0;;){let f=-1;for(let g=0;g<e.length;g++)!d[g]&&h[g]<1/0&&(f<0||h[g]<h[f])&&(f=g);if(f<0||f===c)break;d[f]=1;for(let[g,m]of t[f])h[f]+m<h[g]&&(h[g]=h[f]+m,u[g]=f)}if(!isFinite(h[c]))return null;let p=[];for(let f=c;f>=0;f=u[f])p.push(e[f]);return p.reverse()},n:e.length}})();function v_(i,e){if(!sc.n)return null;let[t,n]=sc.near(i),[r,s]=sc.near(e);if(n>1.2||s>1.2)return null;let a=sc.path(t,r);return!a||a.length<2?null:P0([i,...a,e])}function y_(i,e){let t=_n(...i,.1),n=_n(...e,.1),r=Math.max(8,Math.ceil(Math.hypot(e[0]-i[0],e[1]-i[1])/.1)),s=.45;for(let l=0;l<=r;l++){let c=l/r,h=i[0]+(e[0]-i[0])*c,u=i[1]+(e[1]-i[1])*c;s=Math.max(s,_n(h,u,.12)+.35-(t+(n-t)*c))}let a=Array.from({length:r+1},(l,c)=>{let h=c/r;return new T(i[0]+(e[0]-i[0])*h,t+(n-t)*h+s,-(i[1]+(e[1]-i[1])*h))}),o=new Yn(a,!1,"centripetal");return o.arcLengthDivisions=r*4,et.add(new hr(new Be().setFromPoints(a),new li({color:"#3b3a38"}))),[[i,t],[e,n]].forEach(([l,c])=>{let h=new te(new Me(.012,.018,s+.04,6),ot("#6f6a64"));h.position.set(l[0],c+(s+.04)/2,-l[1]),h.castShadow=!0,et.add(h)}),o}var ts=fe.stops.map((i,e)=>{if(!e)return null;let t=o0[e-1],n=o0[e],r=e1[e],s=r&&r.path==="water"?m_(t,n):r&&r.path==="rail"?v_(t,n):r&&r.path==="cable"?y_(t,n):null,a=s||r&&r.path==="road"?r.key:"bus";s||(s=P0(p_(t,n)));let o=Math.max(s.getLength(),.001);return{c:s,mode:a,len:o,tail:r&&r.path==="tail"?{mode:r.key,len:Math.min(.9,o*.35)}:null}});ts.forEach(i=>i&&[i.mode,i.tail&&i.tail.mode].forEach(e=>{if(!e||es[e])return;let t=Qg.find(n=>n.key===e);es[e]=$g(t.make(ot,{paper:hn(1,64),...t.opts||{}})),Zg[e]=t.sc||1,t.path==="cable"&&Kg.add(e),t.path==="water"&&Jg.add(e)}));var Ja=(i,e)=>e!==!!i.rev&&i.tail?i.tail.mode:i.mode;console.info("[\u4EA4\u901A]",ts.map((i,e)=>i?`${e}:${i.mode}${i.tail?"+"+i.tail.mode:""}${i.len.toFixed(1)}`:"").join(" "));var Fn=(()=>{let i=o0[0],e=Math.atan2(-oo.z,oo.x),t=null;for(let u=0;u<36;u++){let d=u/36*2*Math.PI,p=Math.cos(d),f=Math.sin(d),g=0,m=so(...i);for(let v=0;v<=4.2;v+=.2){let x=[i[0]+p*v,i[1]+f*v];ui(...x)&&mc(x)&&g++,Math.abs(so(...x)-m)>1&&(g-=.5)}let y=g*10-Math.abs(A0(d-e));(!t||y>t.sc)&&(t={sc:y,a:d})}let n=new T(Math.cos(t.a),0,-Math.sin(t.a)),r=new T(n.z,0,-n.x),s=new T(i[0],0,-i[1]),a=(u,d)=>{let p=s.clone().addScaledVector(n,u).addScaledVector(r,d);return[p.x,-p.z]},o=P0([a(3.35,.62),a(2.9,.2),a(1.8,.03),a(.6,0),i]),l=a(3.6,.12),c=0;for(let u=0;u<=3.6;u+=.2){let d=a(u,.06);c=Math.max(c,_n(d[0],d[1],.15))}let h=new T(l[0],Math.max(_n(l[0],l[1],.15)+.22,c+.16),-l[1]);return{c:o,CR:h,len:o.getLength(),TA:1.8,TB:4.2,TC:2.8,get dur(){return this.TA+this.TB+this.TC}}})(),Mr=fe.stops.map((i,e)=>{let t=e?ts[e].c:Fn.c,n=t.getPointAt(1),r=t.getTangentAt(1);return{mode:e?Ja(ts[e],!0):"bus",p:n,ahead:n.clone().add(r)}});function x_(i,e){let t=[];if(i<e)for(let r=i+1;r<=e;r++)t.push({...ts[r],rev:!1});else for(let r=i;r>e;r--)t.push({...ts[r],rev:!0});let n=t.reduce((r,s)=>r+s.len,0);return{legs:t,L:n,a:Mr[i].p.clone(),b:Mr[e].p.clone(),m0:Mr[i].mode,m1:Mr[e].mode}}var qd=new T,Yd=new T;function __(i,e){let t=Math.max(0,Math.min(1,e))*i.L,n=0;for(;n<i.legs.length-1&&t>i.legs[n].len;)t-=i.legs[n].len,n++;let r=i.legs[n],s=Math.max(0,Math.min(1,t/r.len)),a=.05/r.len,o=r.rev?1-s:s;qd.copy(r.c.getPointAt(o)),Yd.copy(r.c.getPointAt(Math.max(0,Math.min(1,o+(r.rev?-a:a))))),Math.abs(o-(r.rev?0:1))<1e-4&&Yd.copy(qd).add(r.c.getTangentAt(o).multiplyScalar(r.rev?-1:1));let l=n?Ja(i.legs[n-1],!0):i.m0,c=n<i.legs.length-1?Ja(i.legs[n+1],!1):i.m1,h=r.rev?r.len-t:t,u=r.tail?r.len-r.tail.len:1/0,d=h>u?r.tail.mode:r.mode,p=Math.min(l!==Ja(r,!1)?Bi(t/.25):1,c!==Ja(r,!0)?Bi((r.len-t)/.25):1,r.tail?Bi(Math.abs(h-u)/.2):1);return{mode:d,p:qd,ahead:Yd,k:p}}var M_=i=>i.k==="day"?lo(i.n):i.k==="chapter"?i.c.days[0]>1?lo(i.c.days[0]-1):0:i.k==="memory"?ut.length-1:-1,Kr=-1,Jr={k:0};function E_(i,e,t,n,r){Jr.k=n?e:_r(Jr.k,e,5,t);let s=es[i.mode]||R0;if(Object.values(es).forEach(c=>{c!==s&&(c.visible=!1)}),s.visible=Jr.k>.002,!s.visible)return;let a=h_*(Zg[i.mode]||1)*Math.min(2.4,Math.max(1,we.p.distanceTo(we.t)/6))*Math.max(Jr.k,1e-4),o=Kg.has(i.mode);s.position.copy(i.p),Jg.has(i.mode)&&(s.position.y+=Math.sin(r/420)*.004),o&&(s.position.y-=(s.userData.cableY??.62)*a);let l=Math.hypot(i.ahead.x-i.p.x,i.ahead.z-i.p.z);l>1e-5&&s.lookAt(i.ahead.x,s.position.y+(o?0:Math.max(-.2,Math.min(.2,(i.ahead.y-i.p.y)/l))*l),i.ahead.z),s.scale.setScalar(a)}function T_(i,e){we.fd=8*Bi(i/Fn.TA)*(1-Bi((i-Fn.TA-Fn.TB)/Fn.TC));let{TA:t,TB:n,c:r,CR:s}=Fn,a=Math.max(0,Math.min(1,(i-t)/n)),o=1-(1-a)**1.4,l=r.getPointAt(o),c=h=>Mr[0].p.clone().setY(Mr[0].p.y+.1).lerp(h.clone().setY(h.y+.06),.3);return i<t?Qs(_t.from,{p:s,t:c(r.getPointAt(0))},ki(i/t)):i<t+n?(we.p.copy(s),we.p.y+=.05*Bi((a-.6)/.4),we.t.copy(c(l))):Qs({p:s.clone().setY(s.y+.05),t:c(r.getPointAt(1))},e,ki((i-t-n)/Fn.TC)),{mode:"bus",p:l,ahead:r.getPointAt(Math.min(1,o+.01)).add(o>.99?r.getTangentAt(1):new T)}}var dg=3,Zr=0,xr=null,pg=!1,fg=new T(-.75,.85,.5),t1=fe.days.map(i=>{let e=Qm(i,zi);if(!e)return null;let t=[...i.stops].reverse().find(s=>!fe.stops[s].air);if(t==null)return null;let n=fe.stops[t].xy,r=ig(e,ot,{center:[n[0],-n[1]],ground:(s,a)=>Vi(s,-a),avoid:(s,a)=>$r(s,-a)<.18||!js(s,-a),paper:hn(1,71),lamps:Math.min(3,dg)});return dg-=r.userData.lamps||0,et.add(r),{g:r,tp:eg("night",zi)}}),I0=fe.days.map(i=>rg(i)),b_={rain:{tp:zd("rain",zi),w:"rain"},fog:{tp:zd("fog",zi),w:"fog"}},n1=I0.some(i=>i!=="clear")?{rain:Vd("rain",ot,{season:zi,paper:hn(1,81)}),fog:Vd("fog",ot,{paper:hn(1,81)})}:{};Object.values(n1).forEach(i=>et.add(i));var Zd={rain:0,fog:0},mg=ut.map(i=>i[0]),gg=ut.map(i=>i[1]),S_=[(Math.min(...mg)+Math.max(...mg))/2,(Math.min(...gg)+Math.max(...gg))/2],vg=Math.max(Tc-ro-14,(x0-hc-8)*1.8),Hn=(i,e,t,n)=>i.clone().add(new T(Math.sin(t)*Math.cos(n)*e,Math.sin(n)*e,Math.cos(t)*Math.cos(n)*e)),lo=i=>{for(let e=Math.min(i,fe.days.length);e>=1;e--){let t=fe.days[e-1].stops||[];if(t.length)return Math.max(...t)}return 0},i1=i=>{let e=i.days.flatMap(t=>fe.days[t-1].stops||[]).filter(t=>!fe.stops[t].air);return e.length?e:[lo(i.days[i.days.length-1])]},cn=(()=>{let i=Kt.teaser&&Kt.teaser.stop,e=d=>{let p=Gg[d];return String((Array.isArray(p)?p[0]:p)||"")},t=i?fe.stops.findIndex(d=>d.name.includes(i)):-1;t<0&&(t=fe.stops.findIndex(d=>!d.air&&e(d.name).startsWith("glb:"))),t<0&&(t=fe.stops.findIndex(d=>!d.air&&e(d.name))),t<0&&(t=yc(Math.floor((fe.days.length-1)/2)+1));let n=r0(t),r=Math.max(0,n-10/qs),s=Math.max(r,n-3.6/qs),a=Yt(ut[t],_n(...ut[t],.3)+.7),o=Math.max(1.2,...un.filter(d=>!d.rw&&Math.hypot(d.x-ut[t][0],d.y-ut[t][1])<d.r).map(d=>d.r))+1.8,l=Er.getTangentAt((r+s)/2).cross(new T(0,1,0)).setY(0).normalize(),c=d=>{let p=Er.getPointAt(d).addScaledVector(l,1.4).add(new T(0,2,0)),f=Math.hypot(p.x-a.x,p.z-a.z);if(f<o){let g=o/Math.max(f,.001);p.x=a.x+(p.x-a.x)*g,p.z=a.z+(p.z-a.z)*g}return p},h=d=>Er.getPointAt(Math.min(1,d+2.6/qs)).add(new T(0,.25,0)),u=Math.atan2(c(s).x-a.x,c(s).z-a.z);return{h:t,u0:r,u1:s,camAt:c,lookAt:h,lm:a,end:{p:Hn(a,6.5,u+.5,.42),t:a},TG:6.2,TR:3.4}})(),Rn=null;function w_(i){let e=Rn.hold??(i-Rn.t0)/1e3,{TG:t,TR:n}=cn;if(we.off=0,we.blur=.07,gc.u=0,we.fd=7,e<t){let r=e/t,s=cn.u0+(cn.u1-cn.u0)*(.5*r+.5*ki(r));we.p.copy(cn.camAt(s)),we.t.copy(cn.lookAt(s))}else Qs({p:cn.camAt(cn.u1),t:cn.lookAt(cn.u1)},cn.end,ki(Math.min(1,(e-t)/n)));if(e>=t+n){let r=Rn.res;Rn=null,a1(Gt[Ht]),_t={from:{p:we.p.clone(),t:we.t.clone(),off:we.off,blur:we.blur,u:0},to:wc(Gt[Ht]),t0:i,dur:Ys?.001:2.6,hold:null},r()}}var r1=()=>new Promise(i=>{if(Ys){i();return}Rn={t0:performance.now(),res:i},document.body.dataset.mode="teaser"});window.HUD&&window.HUD.teaser&&window.HUD.teaser(r1);var Gt=[{k:"brand"},{k:"why"},{k:"promise"},{k:"hq"},{k:"overview"},{k:"depart"}],yg=Array.isArray(Kt.highlightDays)&&Kt.highlightDays.length?new Set(Kt.highlightDays):null;Kt.chapters.forEach((i,e)=>{Gt.push({k:"chapter",c:i,ci:e}),i.days.forEach(t=>{(!yg||yg.has(t))&&Gt.push({k:"day",n:t,c:i,ci:e})})});Gt.push({k:"memory"},...Kt.mode==="proposal"?[]:[{k:"return"}],{k:"close"});function wc(i){let e=Yt(S_,0),t={k:i.k,off:.16,blur:0,u:0,rd:0,cur:0,leg:null,chase:null,preview:null};switch(i.k){case"brand":return{...t,t:Hi.clone(),p:Hn(Hi,60,0,1.4),off:0,blur:0};case"why":return{...t,t:Hi.clone(),p:Hn(Hi,34,-.1,1.08),blur:0};case"promise":return{...t,t:Hi.clone(),p:Hn(Hi,16,-.22,.78),blur:.06};case"hq":if(dc.length>1){let n=dc.map(a=>Yt(a.xy)),r=n.reduce((a,o)=>a.add(o),new T).multiplyScalar(1/n.length),s=Math.max(...n.map(a=>a.distanceTo(r)));return{...t,t:r,p:Hn(r,Math.max(10,s*4.2),-.25,.78),off:.17,blur:.03}}else{let n=Hi.clone().add(new T(.1,.7,0));return{...t,t:n,p:Hn(n,6.2,-.38,.4),off:.17,blur:.1}}case"cover":{let n=Mi.clone().lerp(e,.55);return{...t,t:n,p:Hn(n,125,.04,1.02),off:.14,blur:0}}case"depart":{let n=Vt.getPointAt(1);return{...t,t:n,p:n.clone().add(oo),off:.12,leg:Vt,chase:oo,rd:.5}}case"return":return{...t,t:Mi.clone().setY(Bn+.3),p:Mi.clone().setY(Bn+.3).add(lg),off:.12,leg:w0,chase:lg,u:1,rd:99};case"close":return{...t,t:Hi.clone(),p:Hn(Hi,17,.25,.78),off:.17,blur:.06,u:1,rd:99};case"foreword":{let n=Mi.clone().lerp(e,.55);return{...t,t:n,p:Hn(n,112,.1,.98),off:.14,blur:.04}}case"overview":{let n=Mi.clone().lerp(e,.9);return{...t,t:n,p:Hn(n,88,.16,1.36),off:0,blur:0}}case"memory":{let n=e.clone().add(new T(0,0,-vg*.15));return{...t,t:n,p:Hn(n,vg*1,i.k==="memory"?-.05:0,1.2),off:0,blur:0,...i.k==="memory"?{u:1,rd:99}:{}}}case"chapter":{let n=i1(i.c),r=n.map(c=>ut[c][0]),s=n.map(c=>ut[c][1]),a=Yt([(Math.min(...r)+Math.max(...r))/2,(Math.min(...s)+Math.max(...s))/2],Bn),o=Math.max(Math.max(...r)-Math.min(...r),(Math.max(...s)-Math.min(...s))*1.6),l=i.c.days[0];return{...t,t:a,p:Hn(a,Math.max(13,o*1.7),(i.ci%2?1:-1)*.22,.9),off:.17,blur:.06,u:l>1?r0(lo(l-1)):0,rd:l-1,preview:i.c.days}}case"day":{let n=fe.days[i.n-1],r=yc(i.n),s=Yt(ut[r]),a=new T(s.x+1.1,Bn+.8,s.z-.35),o=n.stops.filter(u=>u!==r&&!fe.stops[u].air).map(u=>Yt(ut[u])),l=o.reduce((u,d)=>Math.max(u,d.distanceTo(s)),0);if(o.length){let u=o.reduce((d,p)=>d.add(p),s.clone()).multiplyScalar(1/(o.length+1));a.x=(a.x*3+u.x)/4,a.z=(a.z*3+u.z)/4}let c=(i.n%2?-1:1)*(.12+i.n%3*.08),h=.4+i.n%3*.06;return{...t,t:a,p:Hn(a,8.2+Math.min(l,6)*.7,c,h),off:.16,blur:.1,u:r0(lo(i.n)),rd:i.n,cur:i.n}}}}var Zt=i=>document.getElementById(i),ac=i=>String(i).padStart(2,"0"),Ne=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Js=(i,e="\uFF0C")=>Ne(i).split(e).map(t=>`<span>${t}</span>`).join(""),s1=ve.logo?`<img class="logo" src="${ve.logo}" alt="${Ne(ve.name)}">`:`<div class="wordmark">${Ne(ve.en)}</div>`;Zt("brand").innerHTML=`<div class="in">${s1}<h1>${Ne(ve.slogan)}</h1><i class="rule"></i><p>${Ne(ve.lead)}</p><p>${Ne(ve.body)}</p></div>
  <div class="foot">${Ne(ve.en)}\u3000${Ne(ve.name)}</div>`;Zt("why").innerHTML=`<div class="k">${Ne(ve.whyEn)}</div><h2>${Ne(ve.why)}</h2><p>${(ve.whyBody||[]).map(i=>`<span>${Ne(i)}</span>`).join("")}</p>`;Zt("hq").innerHTML=`<div class="k">${Ne(ve.hqEn)}</div><h2>${Ne(ve.hq)}</h2><p class="svc">${(ve.services||[]).map(Ne).join("<i>\u30FB</i>")}</p>
  <p>${Ne(ve.address)}</p>${ve.license?`<p>\u65C5\u884C\u696D\u57F7\u7167\u3000${Ne(ve.license)}</p>`:""}${ve.assoc?`<p>${Ne(ve.assoc)}</p>`:""}`;Zt("promise").innerHTML=`<div class="k">${Ne(ve.pillarEn)}</div><h2>${Js(ve.pillar)}</h2><p>${Ne(ve.pillarBody)}</p>`;document.title=`${fe.title.main}${fe.title.suffix}\uFF5C${fe.company.name||fe.agency.name}`;(Zt("cover")||{}).innerHTML=`<div class="k">${Ne(fe.client)}\u3000\xB7\u3000${Ne(fe.dates.range)}</div><h1>${Ne(fe.title.main)}<small>${Ne(fe.title.suffix)}</small></h1>
  <p class="l2">${Ne(fe.title.line2)}</p><p class="tag">${Ne(fe.tagline)}</p>`;(Zt("foreword")||{}).innerHTML=`<div class="k">FOREWORD</div><h2>${Js(Kt.foreword.lead)}</h2><p>${Js(Kt.foreword.body,"\uFF0C")}</p>`;Zt("overview").innerHTML=`<div class="k">ROUTE\u3000\xB7\u3000${fe.days.length} DAYS\u3000\xB7\u3000${fe.stops.length} STOPS</div><h2>${Js(fe.routeTitle)}</h2>${fe.meta.map(i=>`<p>${Ne(i)}</p>`).join("")}`;Zt("memory").innerHTML=`<div class="k">HIGHLIGHTS</div><h2>${Js(fe.tagline)}</h2><ul>${fe.highlights.map(i=>`<li><b>${Ne(i.k)}</b>${Ne(i.v)}</li>`).join("")}</ul>`;Zt("close").innerHTML=`<h2>${Ne(Kt.closing.lead)}<br>${Ne(Kt.closing.body)}</h2><p class="sign">${Ne(Kt.closing.sign)}</p>
  <div class="co">${s1}<p class="slogan">${Ne(ve.slogan)}</p>${(ve.contact||[]).map(i=>`<p>${Ne(i)}</p>`).join("")}
  ${ve.license?`<p class="lic">\u65C5\u884C\u696D\u57F7\u7167\u3000${Ne(ve.license)}</p>`:""}<p class="credit">${Ne(ve.credit)}</p></div>`;var xg=(i,e)=>i?`<div class="k">${e}\u3000\xB7\u3000${Ne(i.date)}</div><h2><span>${Ne(i.leg.split("\u2192")[0])}</span><span>\u2192 ${Ne(i.leg.split("\u2192")[1]||"")}</span></h2>
  <p class="big">${Ne(i.carrier)}</p><p>${Ne(i.time)}</p>`:"",h0=Kt.chapters.map(i=>{let e=i1(i),t=document.createElement("div");t.className="ch",t.innerHTML=`<small>\u7B2C${i.no}\u7AE0</small>${Ne(i.name)}`,Zt("labels").appendChild(t);let n=e.reduce((s,a)=>s+ut[a][0],0)/e.length,r=e.reduce((s,a)=>s+ut[a][1],0)/e.length;return{el:t,v:Yt([n,r],Bn+1.6)}});Zt("dots").innerHTML=Gt.map((i,e)=>`<button data-i="${e}" class="${i.k}" title="${i.k}"></button>`).join("");Zt("dots").onclick=i=>{let e=i.target.dataset&&i.target.dataset.i;e!=null&&(+e>Ht||Ht<u0)&&$s(+e)};function a1(i){let e={depart:"flight",return:"flight",day:"panel"}[i.k]||i.k;if(document.body.dataset.mode=e,i.k==="depart"&&(Zt("flight").innerHTML=xg(fe.flights[0],"DEPARTURE")),i.k==="return"&&(Zt("flight").innerHTML=xg(fe.flights[fe.flights.length-1],"RETURN")),i.k==="chapter"){let t=i.c;Zt("chapter").innerHTML=`<div class="v"><small>\u7B2C${t.no}\u7AE0</small><h2>${Ne(t.name)}</h2></div><div class="side"><div class="k">${Ne(t.en)}</div>
      <p class="range">DAY ${ac(t.days[0])}${t.days.length>1?" \u2014 "+ac(t.days[t.days.length-1]):""}</p>
      <ul>${t.days.map(n=>`<li><b>${ac(n)}</b>${Ne(fe.days[n-1].title)}</li>`).join("")}</ul></div>`}if(i.k==="day"){let t=fe.days[i.n-1];Zt("panel").innerHTML=`${t.img?`<figure class="ph${t.imgSize&&t.imgSize[1]>t.imgSize[0]?" tall":""}"><img src="${t.img}" alt=""></figure>`:""}<div class="k">\u7B2C${i.c.no}\u7AE0\u3000${Ne(i.c.name)}</div><div class="num"><span>DAY</span>${ac(t.n)}</div>
      <div class="when">${Ne(t.date)}${t.legs?`\u3000\xB7\u3000${Ne(t.legs)}`:""}</div><h2>${Js(t.title)}</h2>
      ${t.desc?`<p class="desc">${Ne(t.desc)}</p>`:""}<p class="spots">${t.spots.map(n=>Ne(n.replace(/　+/g," "))).join("<i>\u30FB</i>")}</p>
      ${t.stay?`<p class="meta"><b>\u4F4F</b>${Ne(t.stay)}</p>`:""}${t.meals?`<p class="meta"><b>\u98DF</b>${Ne(t.meals)}</p>`:""}`}if([...Zt("dots").children].forEach((t,n)=>t.classList.toggle("on",n===Ht)),h0.forEach(t=>t.el.classList.toggle("on",i.k==="overview")),i.k==="depart"){let t=n=>{n&&(n.style.transition="opacity .2s",clearTimeout(n._ft),n._ft=setTimeout(()=>{n.style.transition=""},500))};document.querySelectorAll(".scene").forEach(n=>{n.id!=="flight"&&t(n)}),h0.forEach(n=>t(n.el))}}var Ht=-1,_t=null,_g=performance.now(),Mg=performance.now(),we={p:new T,t:new T,off:0,blur:0,fd:0},gc={u:0},ki=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function $s(i){if(i=Math.max(0,Math.min(Gt.length-1,i)),i===Ht)return;let e=wc(Gt[i]),t={p:we.p.clone(),t:we.t.clone(),off:we.off,blur:we.blur,u:gc.u},n=t.p.distanceTo(e.p),r=M_(Gt[i]),s=!Ys&&Ht>=0&&Gt[Ht].k==="depart"&&i===Ht+1&&r===0,a=!s&&Kr>=0&&r>=0&&Kr!==r?x_(Kr,r):null,o=Ht<0||Ys?.001:e.k==="depart"?Ot.dur:e.chase?8:s?Fn.dur:a?Math.min(7.5,Math.max(3,2.4+a.L*.17)):Math.min(4,2+n*.03);_t={from:t,to:e,t0:performance.now(),dur:o,intro:s,route:a,hold:null},Kr=r,Ht=i,a1(Gt[i])}var Ws=new Ua,oc=new Ua,Eg=new T;function Qs(i,e,t){Ws.setFromVector3(Eg.subVectors(i.p,i.t)),oc.setFromVector3(Eg.subVectors(e.p,e.t));let n=Math.max(Ws.radius,.01),r=Math.max(oc.radius,.01),s=n*(r/n)**t,a=Math.min(1,Math.abs(Math.log(r/n))/Math.log(3)),o=Math.abs(r-n)>.001?t*(1-a)+(s-n)/(r-n)*a:t,l=Math.min(.8,i.t.distanceTo(e.t)/(Math.max(n,r)*2.5)),c=oc.theta-Ws.theta;return c-=Math.round(c/(2*Math.PI))*2*Math.PI,we.t.lerpVectors(i.t,e.t,o),we.p.setFromSphericalCoords(s*(1+l*Math.sin(Math.PI*t)),Ws.phi+(oc.phi-Ws.phi)*t,Ws.theta+c*t).add(we.t),o}var _r=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),fT=new ht,A_=new Cl,Tg=new T;function o1(i){let e=Math.min(.05,(i-_g)/1e3);_g=i;let t=_t?_t.to:wc(Gt[Ht]),n=1,r=null,s=1,a=!1;if(Rn)w_(i);else if(_t){let M=_t.hold??(i-_t.t0)/1e3;n=Math.min(1,M/_t.dur);let E=ki(n),{from:b,to:S}=_t,w=E;if(S.k==="depart")c_(n>=1?Ot.dur:M),w=Math.min(1,M/(Ot.TA+Ot.TB));else if(_t.intro)r=T_(n>=1?Fn.dur:M,S),a=!0,Xs(Vt,1,1-Bi((M-Fn.TA-Fn.TB)/(Fn.TC*.6)));else if(S.chase){let D=S.leg.getPointAt(0),N=D.clone().add(S.chase);if(n<.24)Qs(b,{p:N,t:D},ki(n/.24)),Xs(S.leg,0);else{let z=ki((n-.24)/.76),G=S.leg.getPointAt(z);if(we.t.copy(G),we.p.copy(G).add(S.chase),Xs(S.leg,z),z>.42&&z<.6){let K=S.leg.getTangentAt(z).setY(0).normalize(),J=G.clone().addScaledVector(K,7).setY(0);co(J.x,-J.z)||Ks.dolphinJump(S.leg,J,K)}}}else{let P=Qs(b,S,E);if(Xs(null),_t.route){r=__(_t.route,P),s=r.k,a=!0,w=P;let D=r.p.clone().sub(Tg.lerpVectors(_t.route.a,_t.route.b,P)).setY(0);we.t.add(D),we.p.add(D)}}we.off=b.off+(S.off-b.off)*E,we.blur=b.blur+(S.blur-b.blur)*E,gc.u=b.u+(S.u-b.u)*w,n>=1&&(_t=null,Mg=i)}else{let M=Ys?0:.06*Math.sin((i-Mg)/1e3*.32);we.t.copy(t.t),we.p.copy(t.p).sub(t.t).applyAxisAngle(new T(0,1,0),M).add(t.t),Xs(t.leg,1)}let o=_t&&(_t.to.k==="depart"&&(_t.hold??(i-_t.t0)/1e3)<Ot.TA+Ot.TB+1.6||_t.intro),l=["day","chapter"].includes(t.k);cg[0].visible=!o&&!l,cg[1].visible=!o&&!l&&t.k!=="depart",!r&&Kr>=0&&(r=Mr[Kr]),Gs=_r(Gs,t.k==="hq"&&!Rn?1:0,3,e);let c=we.p.distanceTo(we.t);i_.forEach((M,E)=>{let b=1+.22*Math.sin(i/320+E*1.7);M.visible=Gs>.01,M.scale.setScalar(Math.max(1e-4,Gs*b*Math.max(1,c/9))),M.material.opacity=Gs*(.95-.35*(b-.78)/.44)}),r?E_(r,Kr>=0?s:0,e,a,i):Jr.k>.002?(Jr.k=_r(Jr.k,0,5,e),Object.values(es).forEach(M=>{M.visible&&M.scale.multiplyScalar(.9)})):Object.values(es).forEach(M=>{M.visible=!1}),e_(gc.u);let h=n>.7;E0.forEach(M=>{let E=M.s.day<=t.rd||t.preview&&t.preview.includes(M.s.day)||t.rd===.5&&vc(M.s,1);M.k=_r(M.k,E&&(h||!_t)?1:0,9,e),M.grp.scale.setScalar(Math.max(M.k,1e-4)*(M.office?1+Gs*Math.max(0,c/8-1):1)),M.grp.rotation.y=Math.atan2(qt.position.x-M.grp.position.x,qt.position.z-M.grp.position.z)+.25}),t0.forEach(M=>{M.position.x+=M.userData.v*e,M.position.x>Tc+8&&(M.position.x=(ve.homeXY?ve.homeXY[0]:ro)-8);let E=M.userData,b=E.s0||(E.s0=M.scale.clone()),S=xn.visible?A_.set(we.p,xn.position).closestPointToPoint(M.position,!0,Tg).distanceTo(M.position):99,w=M.position.distanceTo(we.p);E.f=_r(E.f??1,Math.min(S<5?Math.max(1e-4,(S-1.5)/3.5):1,w<9?Math.max(1e-4,(w-4)/5):1),6,e),M.scale.copy(b).multiplyScalar(E.f)}),Wd=_r(Wd,["day","chapter"].includes(t.k)&&!Rn?1:0,2,e),n0.position.set(we.t.x,Bn,we.t.z),n0.update(e,Wd);let u=t.k==="day"&&!Rn?t.cur-1:-1,d=u>=0?I0[u]:"clear",p=u>=0&&(t1[u]||b_[d])||null;if(p!==xr&&Zr<.02&&(xr=p),Zr=_r(Zr,xr&&xr===p?1:0,1.5,e),xr&&(Zr>.001||pg)){let M=Zr>.001,E=tg(De,M?xr.tp:null,M?Zr:0);pg=M,ng(et.background,E.sky[0],E.sky[1]),et.fog.color.copy(E.fog),Gd=E.fogMult,$a.color.copy(E.hemiSky),$a.groundColor.copy(E.hemiGround),$a.intensity=E.hemiPower,An.color.copy(E.sun),An.intensity=E.sunPower,fg.fromArray(E.sunDir),xr.g&&xr.g.update(i/1e3,E.glow)}Object.entries(n1).forEach(([M,E])=>{Zd[M]=_r(Zd[M],d===M?1:0,1.5,e),E.position.set(we.t.x,Bn,we.t.z),E.update(e,Zd[M])}),Ks.update(e,i,we.p.distanceTo(we.t)),qt.position.copy(we.p),qt.lookAt(we.t);let f=innerWidth,g=innerHeight;qt.setViewOffset(f,g,-f*we.off*(f>900?1:0),0,f,g);let m=we.p.distanceTo(we.t),y=Math.max(m,we.fd||0),v=Math.min(1,Math.max(0,(y-30)/70));et.fog.near=y*(1.15+.6*v)*Gd,et.fog.far=y*(3.4+2.2*v)*Gd,we.fd=0,An.target.position.copy(we.t),An.position.copy(we.t).addScaledVector(fg,m);let x=An.shadow.camera,_=Math.min(m*.7,40);x.left=x.bottom=-_,x.right=x.top=_,x.near=.1,x.far=m*3.2,x.updateProjectionMatrix(),Jd.uniforms.h.value=we.blur*3.2/f,$d.uniforms.v.value=we.blur*3.2/g,Jd.uniforms.r.value=$d.uniforms.r.value=.5,h0.forEach(({el:M,v:E})=>{let b=E.clone().project(qt);M.style.transform=`translate(${(b.x+1)/2*f}px,${(1-b.y)/2*g}px)`}),Gi.render(),requestAnimationFrame(o1)}function l1(){Mn.setSize(innerWidth,innerHeight),Gi.setSize(innerWidth,innerHeight),qt.aspect=innerWidth/innerHeight,qt.updateProjectionMatrix()}addEventListener("resize",l1);l1();var u0=Gt.findIndex(i=>i.k==="depart"),c1=()=>{!Rn&&(u0<0||Ht<u0)&&$s(Ht-1)},L0=()=>{Rn||$s(Ht+1)};addEventListener("keydown",i=>{["ArrowRight"," ","PageDown","Enter"].includes(i.key)&&(i.preventDefault(),L0()),["ArrowLeft","PageUp","Backspace"].includes(i.key)&&(i.preventDefault(),c1())});Mn.domElement.addEventListener("click",i=>(i.clientX<innerWidth*.2?c1:L0)());Zt("brand").addEventListener("click",L0);document.getElementById("grain").style.backgroundImage=`url(${(()=>{let i=document.createElement("canvas");return i.width=i.height=256,Cg(i.getContext("2d"),256,77),i.toDataURL()})()})`;var Kd=new URLSearchParams(location.search);(async()=>{let i=window.HUD,e=document.createElement("div");e.textContent="\u8F09\u5165\u4E2D\u2026",e.style.cssText="position:fixed;inset:0;display:grid;place-items:center;z-index:99;font:500 18px/1 serif;letter-spacing:.3em;color:#8a7f70;background:#f4efe6",i||document.body.appendChild(e);let t=performance.now(),n=()=>new Promise(s=>requestAnimationFrame(s));for(;lc>0&&performance.now()-t<3e4;)await new Promise(s=>setTimeout(s,100));Mn.compile(et,qt);let r=[...Gt.map(wc),{p:Ot.CR,t:Vt.getPointAt(0)},{p:Fn.CR,t:Mr[0].p},{p:cn.camAt(cn.u0),t:cn.lookAt(cn.u0)},cn.end];for(let[s,a]of r.entries())i&&i.loading&&i.loading(.7+.28*s/r.length,"PREPARING"),qt.position.copy(a.p),qt.lookAt(a.t),An.target.position.copy(a.t),An.position.copy(a.t).add(new T(-30,34,20)),Gi.render(),await n();$s(+Kd.get("n")||0),requestAnimationFrame(o1),await n(),await n(),e.remove(),window.__journey.ready=!0,Kd.has("play")&&setInterval(()=>$s(Ht>=Gt.length-1?0:Ht+1),(+Kd.get("play")||7)*1e3)})();function R_(){qt.updateMatrixWorld();let i=new or().setFromProjectionMatrix(new Se().multiplyMatrices(qt.projectionMatrix,qt.matrixWorldInverse)),e=et.fog.far,t=new T,n=([o,l])=>(t.set(o,Vi(o,l),-l),i.containsPoint(t)&&t.distanceTo(qt.position)<e),r=Ks.audit(),s=r.people.filter(o=>o[2]),a=[...ea,...Zs].map((o,l)=>un.filter(c=>c.flag&&Math.hypot(c.x-o[0],c.y-o[1])<c.r+.12).length).reduce((o,l)=>o+l,0);return{scene:Gt[Ht]&&Gt[Ht].k,blur:we.blur,levels:pi?pi.levels.length:0,flagHits:a,view:{houses:r.houses.filter(n).length+Hg.filter(n).length,trees:e0.filter(n).length,people:r.people.filter(n).length,robe:s.filter(n).length,cars:r.cars.filter(n).length,trains:r.trains.filter(n).length},trees:e0,robeHeight:s.length?Math.min(...s.map(o=>o[3]*1.15)):0,houseHeight:(()=>{let o=r.houses.map(l=>l[2]).filter(l=>l<.5).sort((l,c)=>l-c);return o.length?o[o.length>>1]*.9:0})(),worldLM:Qr.length,models:Object.keys(fe.models||{}).length,dolphin:r.dolphin}}window.__journey={go:$s,audit:R_,legs:[Vt,w0],scene:et,plane:xn,camera:qt,rc:new Rl,dolphin:()=>Ks.dolphinJump(Symbol(),we.t.clone().setY(0),new T(1,0,0)),hold:i=>{Rn?Rn.hold=i:_t&&(_t.hold=i)},teaser:r1,vehicles:{...es,rides:e1.map(i=>i&&i.key),legs:ts},season:zi,light:()=>({lookK:+Zr.toFixed(3),wx:I0,hemi:+$a.intensity.toFixed(2),sun:+An.intensity.toFixed(2),nights:t1.map(i=>!!i)}),scenes:Gt.map(i=>i.k),sc:Gt.map(i=>i.k),get step(){return Ht},get busy(){return!!_t||!!Rn}};})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
